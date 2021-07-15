import React, { FC, ReactNode, useState } from "react";
import classNames from "classnames";
import CheckCircleFilled from "@ant-design/icons/CheckCircleFilled";
import InfoCircleOutlined from "@ant-design/icons/ExclamationCircleFilled";
import CloseCircleFilled from "@ant-design/icons/CloseCircleFilled";
import ExclamationCircleFilled from "@ant-design/icons/ExclamationCircleFilled";
import { CloseOutlined } from "@ant-design/icons";
import { replaceElement } from "../_utils/reactNode";

const iconMapFilled = {
  success: CheckCircleFilled,
  info: InfoCircleOutlined,
  warning: ExclamationCircleFilled,
  error: CloseCircleFilled,
};

type AlertMapFilled = "success" | "info" | "warning" | "error";

interface AlertProps {
  type: AlertMapFilled;
  message: ReactNode;
  description?: ReactNode;
  showIcon?: boolean;
  closable?: boolean;
  closeText?: ReactNode;
  icon?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
  afterClose?: () => void;
}

export const Alert: FC<AlertProps> = ({
  style,
  className,
  type,
  message,
  description,
  closeText,
  closable,
  showIcon,
  ...prop
}) => {
  const [closed, setClosed] = useState(false);
  const clasess = classNames("vikingship-alert", className, {
    [`vikingship-alert-${type}`]: type,
    "vikingship-alert-with-description": description,
  });
  //
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClosed(true);
    prop.onClose?.(e);
  };
  const isClosable = closeText ? true : closable;
  const renderCloseIcon = () =>
    isClosable ? (
      <button className="vikingship-close-icon" onClick={handleClose}>
        {closeText ? (
          <span className="vikingship-close-text">{isClosable}</span>
        ) : (
          <CloseOutlined />
        )}
      </button>
    ) : null;

  const renderIconNode = () => {
    let iconType = iconMapFilled[type];
    const icon = prop.icon;
    if (icon) {
      return replaceElement(
        icon,
        <span className="vikingship-icon">{icon}</span>,
        () => ({
          className: classNames("vikingship-icon", {
            [(icon as any).props.className]: (icon as any).props.className,
          }),
        })
      );
    }
    return React.createElement(iconType, {
      className: `vikingship-icon vikingship-icon-${type}`,
    });
  };

  return (
    <React.Fragment>
      {!closed && (
        <div className={clasess}>
          {showIcon && renderIconNode()}
          <div className="vikingship-content">
            <p className="vikingship-message">{message}</p>
            {/* <p className="vikingship-description">{description}</p> */}
          </div>
          {/* {type &&  <Icon icon='check' />} */}
          {renderCloseIcon()}
        </div>
      )}
    </React.Fragment>
  );
};

export default Alert;
