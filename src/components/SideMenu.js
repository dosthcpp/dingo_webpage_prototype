import React, { useState } from "react";
import 돋보기 from "../icons/돋보기.png";
import 시계 from "../icons/시계.png";
import 설정 from "../icons/설정.png";
import 템플릿 from "../icons/템플릿.png";
import 가져오기 from "../icons/가져오기.png";
import 휴지통 from "../icons/휴지통.png";

const SideMenu = () => {
  let [click, setClick] = useState(false);

  const collapseable = <span className="menu-list-collapseable">&#9656;</span>;
  const nonCollapseable = (
    <span className="menu-list-noncollapseable">&#9662;</span>
  );

  const renderMenu = () => {
    const menuTitle = [
      ["홈", []],
      ["업무", ["출석부", "원아 관리", "동의서 관리", "학부모 상담"]],
      ["일정", []],
      ["자료실", []],
    ];

    return (
      <ul className="menu-no-3">
        {menuTitle.map((cur, idx) => {
          return cur[1] !== undefined && cur[1].length !== 0 ? (
            <div>
              <li
                className="menu-list"
                onClick={() => {
                  setClick(!click);
                }}
                key={idx}
              >
                {click ? nonCollapseable : collapseable}
                {cur[0]}
              </li>
              <ul
                className="submenu"
                style={{
                  display: click ? "block" : "none",
                }}
              >
                {cur[1].map((curMenu, idx) => {
                  return (
                    <li className={`menu-list submenu-item-${idx + 1}`}>
                      {collapseable}
                      {curMenu}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <li
              className={`menu-list-${idx}`}
              onClick={() => {
                console.log(cur[1]);
              }}
            >
              {collapseable}
              {cur[0]}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className="side-menu">
      <div className="menu-div-1">
        <div className="id-div">
          <img
            className="id-div__content image"
            src="https://via.placeholder.com/25"
            alt="Hello"
          />
          <div className="id-div__content title">새싹 유치원</div>
          <div className="id-div__content email">abcd1234@gmail.com</div>
        </div>
      </div>
      <ul className="menu-div-2">
        <li className="menu-item">
          <img
            className="quick-func--div__content image-1"
            src={돋보기}
            alt="Hello"
            style={{ width: "1.5rem" }}
          />
          <div className="menu-title">빠른 검색</div>
        </li>
        <li className="menu-item">
          <img
            className="quick-func--div__content image-2"
            src={시계}
            alt="Hello"
            style={{ width: "1.5rem" }}
          />
          <div className="menu-title">모든 업데이트</div>
        </li>
        <li className="menu-item">
          <img
            className="quick-func--div__content image-3"
            src={설정}
            alt="Hello"
            style={{ width: "1.5rem" }}
          />
          <div className="menu-title">설정과 멤버</div>
        </li>
      </ul>
      <div className="menu-div-3">
        <div className="menu-div__title">워크스페이스</div>
        {renderMenu()}
      </div>
      <div className="menu-div-4">
        <li className="menu-item">
          <img
            className="quick-func--div__content image-4"
            src={템플릿}
            alt="Hello"
            style={{ width: "1.5rem" }}
          />
          <div className="menu-title">템플릿</div>
        </li>
        <li className="menu-item">
          <img
            className="quick-func--div__content image-5"
            src={가져오기}
            alt="Hello"
            style={{ width: "1.5rem" }}
          />
          <div className="menu-title">가져오기</div>
        </li>
        <li className="menu-item">
          <img
            className="quick-func--div__content image-6"
            src={휴지통}
            alt="Hello"
            style={{ width: "1.5rem" }}
          />
          <div className="menu-title">휴지통</div>
        </li>
      </div>
    </div>
  );
};

export default SideMenu;
