import { func, number, string } from "prop-types";
import React, { memo, useEffect, useState } from "react";

import closeIcon from "@/assets/close.svg";
import closeIconWhite from "@/assets/close-white.svg";
import { toastTypes } from "@/constants/toastTypes";
import { handleToastService } from "@/helpers/handleToastService";

import { animationType, types } from "./config";
import {
  ContentWrapper,
  Image,
  ImageWrapper,
  Subtitle,
  TextWrapper,
  Title,
  Wrapper,
} from "./styles";

export const Toast = memo(
  ({
    indent,
    time,
    title,
    subtitle,
    type,
    id,
    handleRemove,
    setToast,
    backgroundColor,
    animation,
  }) => {
    const { toast, removeToast } = handleToastService();
    const [toastIdValue, setToastIdValue] = useState(null);

    useEffect(() => {
      const interval = setInterval(() => {
        if (time && toast.length) {
          handleRemove(toast[0].id)();
        }
      }, time);

      return () => {
        clearInterval(interval);
      };
    }, [toast, time, handleRemove]);

    const handleDragStart = (e) => {
      setToastIdValue(e.target.id);
    };

    const handleDragOver = (e) => {
      e.preventDefault();
    };

    const handleDrop = (e) => {
      e.preventDefault();
      setToast(() => removeToast(toastIdValue));
    };
    return (
      <Wrapper
        id={id}
        draggable
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        color={backgroundColor || types[type]?.color}
        indent={indent}
        animation={animationType[animation]}
      >
        <ContentWrapper>
          <Image
            src={types[type]?.imagePath}
            alt={`${type} icon`}
            title={`${type} icon`}
          />
          <TextWrapper>
            <Title value={type}>{`${title} toast`}</Title>
            <Subtitle color={type}>{subtitle}</Subtitle>
          </TextWrapper>
        </ContentWrapper>
        <ImageWrapper
          onClick={handleRemove(id)}
          src={type === toastTypes.warning ? closeIcon : closeIconWhite}
          alt="Close button"
          title="Close button"
        />
      </Wrapper>
    );
  },
);

Toast.PropType = {
  indent: number,
  time: number,
  title: string,
  subtitle: string,
  toastType: string,
  id: number,
  handleRemove: func,
  setToast: func,
  backgroundColor: string,
  animation: string,
};
