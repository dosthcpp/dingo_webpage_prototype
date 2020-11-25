import React, { useCallback, useEffect, useState } from "react";
import { connect } from "react-redux";
import 동의서 from "../icons/동의서.png";
import 동의 from "../icons/동의.png";
import { baseURL } from "../api/api";
import { fetchParentList, fetchAgreementList } from "../actions";
// const { ipcRenderer } = window.require("electron");

const Content = ({
  fetchParentList,
  fetchAgreementList,
  fetchedParentList,
  fetchedAgreement,
}) => {
  const [selected, setSelected] = useState(0);
  const [selectedParent, setSelectedParent] = useState(null);
  const [selectedName, setSelectedName] = useState("");
  const [parentList, setParentList] = useState(null);
  const [agreementList, setAgreementList] = useState(null);
  const kindgartenList = ["새싹반", "햇님반", "달님반"];

  useEffect(() => {
    try {
      setParentList(fetchedParentList);
    } catch (e) {
      console.log(e);
    }
  }, [fetchedParentList]);

  useEffect(() => {
    try {
      setAgreementList(fetchedAgreement);
    } catch (e) {
      console.log(e);
    }
  }, [fetchedAgreement]);

  useEffect(() => {
    fetchParentList();
  }, [fetchParentList]);

  useEffect(() => {
    fetchAgreementList();
  }, [fetchAgreementList]);

  const fetchConsent = useCallback(() => {
    fetchAgreementList();
  }, [fetchAgreementList]);

  const renderMenu = () => {
    return kindgartenList.map((key, idx) => {
      return (
        <button
          className={`classname classname-${idx}`}
          style={{
            backgroundColor: selected === idx ? "lightblue" : "#f8f9fa",
          }}
          onClick={() => {
            setSelected(idx);
          }}
        >
          {key}
        </button>
      );
    });
  };

  const renderParentList1 = () => {
    if (!parentList) {
      return null;
    } else {
      return parentList.map((cur, idx) => {
        return (
          <div className={"main-content__parent-list-item"}>
            <div className={"main-content__parent-list-item-name"}>
              {cur.name}
            </div>
            <button
              className={`main-content__parent-list-item-button-${idx}`}
              style={{
                border:
                  selectedParent === idx
                    ? "1.5px solid blue"
                    : "1.5px solid black",
                boxShadow:
                  selectedParent === idx
                    ? "0.5px 1px 5px lightblue"
                    : "0.5px 1px 5px gray",
                color: selectedParent === idx ? "blue" : "gray",
              }}
              onClick={() => {
                setSelectedParent(idx);
                setSelectedName(cur.name);
              }}
            >
              확인하기
            </button>
          </div>
        );
      });
    }
  };

  const consentIcon = (isAgreed) => {
    return (
      <div
        className="main-content-div-4__item-icon-container"
        style={{
          backgroundColor: isAgreed ? "blue" : "lightgray",
        }}
      >
        <img
          className="main-content-div-4__item-image"
          src={동의}
          alt="동의"
          style={{
            width: "1rem",
          }}
        />
      </div>
    );
  };

  const renderConsentStatementList = () => {
    return Array.from(agreementList[1]).map((cur, idx) => {
      return cur.kid_name === selectedName ? (
        <div className="main-content-div-4__container">
          <div
            className={`main-content-div-4__item-${idx}`}
            style={{
              border: cur[3] ? "3px solid blue" : "3px solid lightgray",
            }}
          >
            <div className={"main-content-div-4__item-title"}>{cur.title}</div>
            <div className={"main-content-div-4__item-subtitle"}>
              {cur.sub_contents}
            </div>
            <div className={"main-content-div-4__item-date"}>
              {cur.updated_at.split("T")[0].split("-").join(".")}
            </div>
            {consentIcon(cur.isAgreed)}
            <div className="main-content-div-4__item-more">더보기</div>
          </div>
        </div>
      ) : null;
    });
  };

  const renderSwitch = () => {
    switch (selected) {
      case 0:
        return renderParentList1();
      default:
        break;
    }
  };

  return (
    <div className="main-content">
      <div className="main-content-div-1">
        <img
          className="main-content__image"
          src={동의서}
          alt="content"
          style={{ width: "2.8rem" }}
        />
        <div className="main-content__title">동의서 관리</div>
      </div>
      <div className="main-content-div-2">{renderMenu()}</div>
      <div className="main-content-div-3">
        <div className="main-content__parent-list-title fixed">학부모 목록</div>
        <div className="main-content__parent-list-items">{renderSwitch()}</div>
      </div>
      <div className="main-content-div-4">
        <div className="main-content-div-4__header">
          {selectedParent !== null ? (
            <div>
              <div className="main-content-div-4__title">
                {`${selectedName} 학부모`}
              </div>
              <div className="main-content-div-4__subtitle">동의서 목록</div>
            </div>
          ) : null}
        </div>
        <div className="main-content-div-4__items">
          {selectedParent !== null ? renderConsentStatementList() : null}
        </div>
      </div>
      <div className="main-content-div-5">
        <div className="main-content-div-5__container">
          <button
            onClick={() => {
              // ipcRenderer.send("show_popup");
              const win = window.open(baseURL + "/public/addagreement.html");
              const timer = setInterval(function () {
                if (win.closed) {
                  clearInterval(timer);
                  fetchConsent();
                }
              }, 1000);
            }}
            className="main-content-div-5__button"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    fetchedParentList: Object.values(state.fetch.data),
    fetchedAgreement: Object.values(state.fetch.agreement),
  };
};

export default connect(mapStateToProps, {
  fetchParentList,
  fetchAgreementList,
})(Content);
