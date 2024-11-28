import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faAddressCard,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Flex } from "antd";
import moment from "moment";
import "../meta-community-standard/style.css";

const MetaCommunityPage = () => {
  const navigate = useNavigate();
  const currentTime = moment().format("MMMM DD, YYYY");
  const redictMeta = () => {
    window.location.href = "https://www.facebook.com";
  };
  return (
    <div className="container_meta">
      <div className="left_div">
        <div className="header">
          <img
            onClick={redictMeta}
            className="logo"
            src="/images/fb.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center w-full items-center mt-28">
        <div className="lg:w-[30%] md:w-2/3 w-11/12 bg-white flex-row rounded-xl">
          <div className="w-20 h-20 mt-6 mx-auto">
            <img src="/images/lock.png" alt="" />
          </div>
          <div className="w-11/12 flex flex-row mx-auto mt-4">
            <div className="text_content">
              <p
                className="text-center"
                style={{
                  fontSize: "22px",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
              >
                The security of your account is at risk.
              </p>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: 1.5,
                  marginTop: "16px",
                  marginBottom: "10px",
                  fontFamily: "inherit",
                }}
              >
                We have temporarily blocked your account because your Facebook
                Protect settings have been modified.
              </p>
              <div className="avt">
                <div className="bg-blue-500 w-8 h-8 rounded-full flex justify-center items-center">
                  <FontAwesomeIcon icon={faLock} style={{ color: "#ffffff" }} />
                </div>
                <div className="middle ml-4">
                  <p
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginBottom: "6px",
                    }}
                  >
                    Your page was restricted on{" "}
                    <span style={{ fontSize: "17px", fontWeight: "bold" }}>
                      {" "}
                      {currentTime}.
                    </span>
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      // fontWeight: "450",
                      opacity: "1",
                    }}
                  >
                    We did this to protect your account from being suspended.
                  </p>
                </div>
              </div>
              {/* <p style={{ fontSize: '15px', fontWeight: '400', lineHeight: 1.5, marginTop: '36px', fontFamily: 'inherit' }}>We discovered that your page has violated the payment policy. In accordance with Facebook's Privacy Policy, You page will be disabled payments & ads manager from
            <span style={{ fontSize: '17px', fontWeight: 'bold' }}> {currentTime}</span> </p> */}
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  lineHeight: 1.5,
                  marginTop: "20px",
                  fontFamily: "inherit",
                }}
              >
                We will guide you through some steps to lift the page
                restriction and unlock your account.
              </p>

              {/* <p style={{ fontSize: '17px', marginTop: '26px', fontWeight: 'bold', color: "#1a73e3" }}>More information</p>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            <FontAwesomeIcon icon={faCheckCircle} style={{ color: '#d5dae1', fontSize: '24px' }} /> <span style={{ fontSize: '14px', marginLeft: '8px', textAlign: 'center' }}>No one will able to see your posts until you've verified your payment method.</span>
          </div>
          <div style={{ borderLeftColor: "black", borderLeftWidth: "3px", height: '10px' }}>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
            <FontAwesomeIcon icon={faAddressCard} style={{ color: 'blue', fontSize: '24px' }} /> <span style={{ fontSize: '14px', marginLeft: '8px', textAlign: 'center' }}>Below, you'll need to complete some steps to expedite the review of your account.</span>
          </div> */}
              {/* <Flex gap="small" wrap="wrap">
                <Button
                  onClick={() => navigate("/business-help-center")}
                  style={{
                    width: "100%",
                    marginTop: "30px",
                    height: "44px",
                    marginBottom: "14px",
                    fontSize: "15px",
                    fontWeight: "500",
                    
                  }}
                  type="primary"
                >
                  Get started
                </Button>
              </Flex> */}
              <Flex gap="small" wrap="wrap">
                <div
                  style={{
                    width: "100%",
                    border: "2px solid blue", // Viền xanh bên ngoài
                    padding: "1px", // Khoảng cách để tạo hiệu ứng viền
                    display: "inline-block",
                    borderRadius: "6px", // Bo góc nếu cần
                    marginBottom: "20px",
                    marginTop: "20px",
                  }}
                >
                  <Button
                    onClick={() => navigate("/business-help-center")}
                    style={{
                      width: "100%",
                      height: "38px",
                      fontSize: "15px",
                      fontWeight: "500",
                      border: "2px solid white", // Viền trắng bên trong
                    }}
                    type="primary"
                  >
                    Get started
                  </Button>
                </div>
              </Flex>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MetaCommunityPage;
