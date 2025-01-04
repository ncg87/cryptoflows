import React from "react";
import { useParams } from "react-router-dom";
import TokenDetails from "../components/TokenDetails";
import BasePage from "../components/BasePage";
import DEXData from "../components/lists/DEXData";

const TokenPage = () => {
  const { tokenId } = useParams(); // Assuming you are using react-router and tokenId is a URL param
  console.log('TokenPage:', tokenId);
  return (
    <BasePage>
      <TokenDetails tokenId={tokenId} />
      <DEXData tokenId={tokenId} />
    </BasePage>
  );
};

export default TokenPage;
