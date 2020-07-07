import React from "react";
import "./style.css";

const Toolbar = props => {
  return <nav className="grit42-toolbar">{props.children}</nav>;
};

const ToolbarBlock = props => {
  return (
    <div className="grit42-toolbar__block">
      <div className="grit42-toolbar__block__content">
        <span className="grit42-toolbar__block__title">{props.title}</span>
        {props.children}
      </div>
    </div>
  );
};

const ToolbarIcons = props => {
  return <div className="grit42-toolbar__block__icons">{props.children}</div>;
};

export default props => {
  return (
    <Toolbar>
      <ToolbarBlock title="Views">
        <ToolbarIcons>
          <span>Icon 1</span>
          <span>Icon 2</span>
          <span>Icon 3</span>
        </ToolbarIcons>
      </ToolbarBlock>
      <ToolbarBlock title="Ex- & Import">
        <ToolbarIcons>
          <span>Icon 1</span>
          <span>Icon 2</span>
          <span>Icon 3</span>
        </ToolbarIcons>
      </ToolbarBlock>
    </Toolbar>
  );
};
