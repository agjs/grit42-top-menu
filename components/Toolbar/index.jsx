import React from "react";
import className from "classnames";
import "./style.css";

const Toolbar = props => {
  return <nav className={className("grit42-toolbar")}>{props.children}</nav>;
};

const ToolbarBlockGroup = props => {
  const children = Array.isArray(props.children)
    ? props.children.map((group, index) => {
        return React.cloneElement(
          group,
          Object.assign({}, group.props, {
            hasBorder: index !== props.children.length - 1
          })
        );
      })
    : props.children;
  return (
    <div className={className("grit42-toolbar__block-group")}>{children}</div>
  );
};

const ToolbarBlock = props => {
  return (
    <div
      className={className("grit42-toolbar__block", {
        "grit42-toolbar__block--with-border": props.hasBorder
      })}
    >
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
      <ToolbarBlockGroup>
        <ToolbarBlock title="Views">
          <ToolbarIcons>
            <span className="grit42-toolbar__block__icons__icon">Icon 1</span>
            <span className="grit42-toolbar__block__icons__icon">Icon 2</span>
            <span className="grit42-toolbar__block__icons__icon">Icon 3</span>
          </ToolbarIcons>
        </ToolbarBlock>
      </ToolbarBlockGroup>
      <ToolbarBlockGroup>
        <ToolbarBlock title="Compounds">
          <ToolbarIcons>
            <span className="grit42-toolbar__block__icons__icon">Icon 1</span>
            <span className="grit42-toolbar__block__icons__icon">Icon 2</span>
            <span className="grit42-toolbar__block__icons__icon">Icon 3</span>
          </ToolbarIcons>
          <ToolbarIcons>
            <span className="grit42-toolbar__block__icons__icon">Icon 1</span>
            <span className="grit42-toolbar__block__icons__icon">Icon 2</span>
            <span className="grit42-toolbar__block__icons__icon">Icon 3</span>
          </ToolbarIcons>
        </ToolbarBlock>
        <ToolbarBlock title="Ex- & Import">
          <ToolbarIcons>
            <span className="grit42-toolbar__block__icons__icon">Icon 1</span>
            <span className="grit42-toolbar__block__icons__icon">Icon 2</span>
          </ToolbarIcons>
        </ToolbarBlock>
      </ToolbarBlockGroup>
    </Toolbar>
  );
};
