import React, { useMemo, useState } from "react";
import Typical from "react-typical";
import { date } from "../../components/queries/queries";
import { useMutation, useQuery } from "react-query";
import swal from "sweetalert";

// css
import "../../assets/css/_comingSoon.scss";
import axios from "axios";
import { baseUrl } from "../../components/services/api";

const ComingSoon = () => {
  const [email, setEmail] = useState();

  const formData = new FormData();

  const dateResult = useQuery("date", date, {
    refetchOnWindowFocus: false,
  });

  const mutation = useMutation(
    (email) => axios.post(baseUrl + "email.php", email),
    {
      onSuccess: function (succ) {
        if (succ.status === 200) {
          if (succ.data.success === true) {
            setEmail("");
            swal("Success!", "Email Sent Successfully", "success");
          } else {
            setEmail("");
            swal("Error!", "Email Not Sent", "error");
          }
        }
      },
    }
  );

  const TypicalComponent = useMemo(
    () => (
      <Typical
        steps={[
          "COMING SOON",
          1000,
          "BE READY TO",
          1000,
          "CONNECTED WITH US",
          1000,
        ]}
        loop={Infinity}
        wrapper="p"
      />
    ),
    []
  );

  return (
    <div
      className="comingSoon"
      style={{
        backgroundImage: `url(${
          require("../../assets/images/layer.png").default
        })`,
      }}
    >
      <div className="comingSoon__logo">
        <img src={require("../../assets/images/logo.svg").default} alt="" />
      </div>
      <div className="comingSoon__box">
        <div className="comingSoon__flexBox">
          <div className="comingSoon__time">
            <p className="comingSoon__timeTitle" data-time={"DAYS"}>
              <img
                className="comingSoon__left"
                src={require("../../assets/images/left.png").default}
                alt=""
              />
              <img
                className="comingSoon__right"
                src={require("../../assets/images/right.png").default}
                alt=""
              />
              {dateResult.isLoading === false && dateResult.data.day}
            </p>
            <p className="comingSoon__timeSplit">
              <span>
                {dateResult.isLoading === false && dateResult.data.hour}H
              </span>
              <span>
                {dateResult.isLoading === false && dateResult.data.minute}MN
              </span>
              <span>
                {dateResult.isLoading === false && dateResult.data.second}S
              </span>
            </p>
            <h1>WE ARE</h1>
            {TypicalComponent}
          </div>
          <div className="comingSoon__form">
            <input
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              type="text"
              placeholder="Enter Your Email"
            />
            <button
              onClick={async () => {
                await formData.append("email", email);
                mutation.mutate(formData);
              }}
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="comingSoon__contact">
        <div className="comingSoon__contact--items">
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.473"
              height="15.473"
              viewBox="0 0 15.473 15.473"
            >
              <path
                id="gmail"
                d="M7.736,0a7.736,7.736,0,1,0,7.736,7.736A7.736,7.736,0,0,0,7.736,0Zm3.485,4.3L7.734,7.056,4.132,4.3Zm.359,6.877H3.773V5.463l3.6,2.73a.619.619,0,0,0,.354.111.5.5,0,0,0,.318-.116l3.537-2.813Z"
                fill="#fff"
              />
            </svg>
            <a href="mailto:info@avva.az ">info@avva.az</a>
          </p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.469"
              height="15.469"
              viewBox="0 0 15.469 15.469"
            >
              <g
                id="phone-call_1_"
                data-name="phone-call (1)"
                transform="translate(0 0)"
              >
                <g id="Group_6" data-name="Group 6" transform="translate(0 0)">
                  <path
                    id="Path_13"
                    data-name="Path 13"
                    d="M13.2,2.264a7.735,7.735,0,1,0,2.266,5.468A7.735,7.735,0,0,0,13.2,2.264Zm-1.489,8.51h0v0l-.392.389a2.063,2.063,0,0,1-1.947.557,6.853,6.853,0,0,1-1.99-.892,9.2,9.2,0,0,1-1.57-1.266A9.267,9.267,0,0,1,4.64,8.137a7.218,7.218,0,0,1-.882-1.784,2.063,2.063,0,0,1,.516-2.106l.459-.459a.327.327,0,0,1,.463,0h0L6.646,5.237a.327.327,0,0,1,0,.463h0L5.8,6.552a.694.694,0,0,0-.072.9A9.95,9.95,0,0,0,6.742,8.643,9.889,9.889,0,0,0,8.082,9.769a.7.7,0,0,0,.892-.077L9.8,8.857a.327.327,0,0,1,.463,0h0l1.452,1.454A.327.327,0,0,1,11.714,10.774Z"
                    transform="translate(0 0)"
                    fill="#fff"
                  />
                </g>
              </g>
            </svg>
            <a href="tel:055 298 74 76">055 298 74 76</a>
          </p>
        </div>
        <div className="comingSoon__contact--social">
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="5.886"
              height="11.772"
              viewBox="0 0 5.886 11.772"
            >
              <path
                id="facebook_1_"
                data-name="facebook (1)"
                d="M11,1.955h1.075V.083A13.877,13.877,0,0,0,10.508,0,2.485,2.485,0,0,0,7.9,2.766V4.414H6.187V6.507H7.9v5.265h2.1V6.507h1.641l.26-2.092h-1.9V2.973c0-.6.163-1.019,1.006-1.019Z"
                transform="translate(-6.187)"
                fill="#fff"
              />
            </svg>
          </a>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13.337"
              height="11.133"
              viewBox="0 0 13.337 11.133"
            >
              <g id="Group_2" data-name="Group 2" transform="translate(0 0)">
                <path
                  id="Path_5"
                  data-name="Path 5"
                  d="M13.337,49.318a5.582,5.582,0,0,1-1.575.444,2.781,2.781,0,0,0,1.2-1.553,5.376,5.376,0,0,1-1.734.68,2.706,2.706,0,0,0-2-.889A2.772,2.772,0,0,0,6.5,50.81a2.969,2.969,0,0,0,.063.641A7.673,7.673,0,0,1,.929,48.512a2.887,2.887,0,0,0-.374,1.42,2.834,2.834,0,0,0,1.214,2.334A2.645,2.645,0,0,1,.533,51.92v.031a2.8,2.8,0,0,0,2.191,2.76,2.66,2.66,0,0,1-.717.092,2.355,2.355,0,0,1-.518-.048,2.771,2.771,0,0,0,2.555,1.957,5.4,5.4,0,0,1-3.39,1.2A4.986,4.986,0,0,1,0,57.872a7.549,7.549,0,0,0,4.194,1.261,7.843,7.843,0,0,0,7.782-7.993c0-.124,0-.244-.01-.363A5.539,5.539,0,0,0,13.337,49.318Z"
                  transform="translate(0 -48)"
                  fill="#fff"
                />
              </g>
            </svg>
          </a>
          <a href="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16.813"
              height="11.772"
              viewBox="0 0 16.813 11.772"
            >
              <path
                id="youtube_1_"
                data-name="youtube (1)"
                d="M16.466-4.24a2.106,2.106,0,0,0-1.482-1.482,49.212,49.212,0,0,0-6.578-.36,51.129,51.129,0,0,0-6.578.346A2.149,2.149,0,0,0,.346-4.24,22.194,22.194,0,0,0,0-.2,22.113,22.113,0,0,0,.346,3.848,2.107,2.107,0,0,0,1.828,5.33a49.3,49.3,0,0,0,6.578.36,51.129,51.129,0,0,0,6.578-.346,2.106,2.106,0,0,0,1.482-1.482,22.2,22.2,0,0,0,.346-4.044A21.068,21.068,0,0,0,16.466-4.24ZM6.731,2.324V-2.717L11.107-.2Zm0,0"
                transform="translate(0 6.082)"
                fill="#fff"
              />
            </svg>
          </a>
          <a href="">
            <svg
              id="pinterest-social-logo"
              xmlns="http://www.w3.org/2000/svg"
              width="11.772"
              height="11.772"
              viewBox="0 0 11.772 11.772"
            >
              <path
                id="Path_6"
                data-name="Path 6"
                d="M5.886,0a5.886,5.886,0,1,0,5.886,5.886A5.886,5.886,0,0,0,5.886,0Zm.677,7.841a1.446,1.446,0,0,1-1.232-.629S5.038,8.374,4.977,8.6a5.371,5.371,0,0,1-.911,1.65.067.067,0,0,1-.12-.029A5.658,5.658,0,0,1,3.962,8.3L4.61,5.556a1.941,1.941,0,0,1-.161-.8c0-.747.433-1.305.972-1.305a.675.675,0,0,1,.68.757A10.831,10.831,0,0,1,5.657,6a.78.78,0,0,0,.8.971c.955,0,1.6-1.227,1.6-2.681a1.887,1.887,0,0,0-2.1-1.932A2.388,2.388,0,0,0,3.47,4.772a1.454,1.454,0,0,0,.333.989.245.245,0,0,1,.072.281c-.024.093-.079.316-.1.4a.174.174,0,0,1-.253.126A1.942,1.942,0,0,1,2.488,4.646a3.337,3.337,0,0,1,3.6-3.15A3.014,3.014,0,0,1,9.283,4.385C9.284,6.363,8.184,7.841,6.563,7.841Z"
                transform="translate(0 0)"
                fill="#fff"
              />
            </svg>
          </a>
          <a href="">
            <svg
              id="instagram_4_"
              data-name="instagram (4)"
              xmlns="http://www.w3.org/2000/svg"
              width="11.772"
              height="11.772"
              viewBox="0 0 11.772 11.772"
            >
              <path
                id="Path_10"
                data-name="Path 10"
                d="M213.069,212.035A1.035,1.035,0,1,1,212.035,211,1.035,1.035,0,0,1,213.069,212.035Zm0,0"
                transform="translate(-206.149 -206.149)"
                fill="#fff"
              />
              <path
                id="Path_11"
                data-name="Path 11"
                d="M124.874,120h-3.495a1.381,1.381,0,0,0-1.38,1.38v3.495a1.381,1.381,0,0,0,1.38,1.38h3.495a1.381,1.381,0,0,0,1.38-1.38v-3.495A1.381,1.381,0,0,0,124.874,120Zm-1.747,4.851a1.724,1.724,0,1,1,1.724-1.724A1.726,1.726,0,0,1,123.127,124.851Zm1.977-3.357a.345.345,0,1,1,.345-.345A.345.345,0,0,1,125.1,121.494Zm0,0"
                transform="translate(-117.241 -117.241)"
                fill="#fff"
              />
              <path
                id="Path_12"
                data-name="Path 12"
                d="M8.668,0H3.1A3.107,3.107,0,0,0,0,3.1V8.668a3.107,3.107,0,0,0,3.1,3.1H8.668a3.107,3.107,0,0,0,3.1-3.1V3.1A3.107,3.107,0,0,0,8.668,0ZM9.7,7.633A2.072,2.072,0,0,1,7.633,9.7H4.138A2.072,2.072,0,0,1,2.069,7.633V4.138A2.072,2.072,0,0,1,4.138,2.069H7.633A2.072,2.072,0,0,1,9.7,4.138Zm0,0"
                fill="#fff"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
