import React, { useState, useContext } from "react";
import className from "classnames";
import "./style.css";

const ToolbarContext = React.createContext();

const ELEMENT_TYPES = {
  ToolbarBlockGroup: "ToolbarBlockGroup",
  ToolbarIcons: "ToolbarIcons",
  ToolbarIcon: "ToolbarIcon"
};

const Toolbar = props => {
  const { isOpen } = useContext(ToolbarContext);
  return (
    <nav
      className={className("grit42-toolbar", {
        "grit42-toolbar--expanded": isOpen,
      })}
    >
      {props.children}
    </nav>
  );
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
    : React.cloneElement(props.children, { isOpen: props.isOpen });
  return (
    <div className={className("grit42-toolbar__block-group")}>{children}</div>
  );
};

const ToolbarBlock = props => {
  const { isOpen } = useContext(ToolbarContext);
  return (
    <div
      className={className("grit42-toolbar__block", {
        "grit42-toolbar__block--with-border": props.hasBorder
      })}
    >
      <div className="grit42-toolbar__block__content">
        {isOpen && (
          <span className="grit42-toolbar__block__title">{props.title}</span>
        )}
        {props.children}
      </div>
    </div>
  );
};

const ToolbarIcon = props => {
  return <span className="grit42-toolbar__block__icons__icon">Icon</span>;
};

const ToolbarIcons = props => {
  const { isOpen } = useContext(ToolbarContext);

  const getIcons = () => {
    if (Array.isArray(props.children)) {
      const icons = props.children.filter(
        icon => icon.type.name === ELEMENT_TYPES.ToolbarIcon
      );

      if (!isOpen && icons.length > 3) {
        return icons.filter((icon, index) => {
          return index < 3;
        });
      } else {
        return icons;
      }
    }
  };

  return <div className="grit42-toolbar__block__icons">{getIcons()}</div>;
};

export default props => {
  const [isOpen, setIsOpen] = useState(false);
  const [layout, setLayout] = useState();

  const toggleToolbar = () => setIsOpen(!isOpen);

  return (
    <ToolbarContext.Provider value={{ isOpen }}>
      <Toolbar>
        <ToolbarBlockGroup>
          <ToolbarBlock title="Views">
            <ToolbarIcons>
              <ToolbarIcon />
              <ToolbarIcon />
              <ToolbarIcon />
            </ToolbarIcons>
          </ToolbarBlock>
        </ToolbarBlockGroup>
        <ToolbarBlockGroup>
          <ToolbarBlock title="Compounds">
            <ToolbarIcons>
              <ToolbarIcon />
              <ToolbarIcon />
              <ToolbarIcon />
              <ToolbarIcon />
              <ToolbarIcon />
              <ToolbarIcon />
            </ToolbarIcons>
          </ToolbarBlock>
          <ToolbarBlock title="Ex- & Import">
            <ToolbarIcons>
              <ToolbarIcon />
              <ToolbarIcon />
            </ToolbarIcons>
          </ToolbarBlock>
        </ToolbarBlockGroup>
        <div className="grit42-toolbar__expander" onClick={toggleToolbar}>
          X
        </div>
      </Toolbar>
    </ToolbarContext.Provider>
  );
};
