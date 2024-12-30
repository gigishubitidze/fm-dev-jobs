import React from "react";
import styled from "styled-components";
import { H3, Text } from "../../../theme/Typography";
import { StyledOL, StyledUL } from "../../../components/Lists";

const ContentContainer = styled.section`
  & > h3 {
    margin-bottom: 28px;
  }

  & > p {
    margin-bottom: 24px;
  }
`;

const ContentSection = ({ title, content, items, isOrdered }) => {
  const List = isOrdered ? StyledOL : StyledUL;

  return (
    <ContentContainer>
      <H3>{title}</H3>
      <Text lineHeight="1.625">{content}</Text>
      <List>
        {items.map((item, index) => (
          <li key={index}>
            <Text as="span" lineHeight="1.625">
              {item}
            </Text>
          </li>
        ))}
      </List>
    </ContentContainer>
  );
};

export default ContentSection;
