import React from "react";

interface ILogo {
  width?: number;
  height?: number;
}

export const IconLogo = ({ width = 93, height = 65 }: ILogo) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 93 65"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.2373 0.159691C32.47 0.121346 32.677 0.06403 32.8861 0.0571683C33.7272 0.0285103 34.57 -0.0158894 35.4108 0.00146686C38.0813 0.0567646 40.5069 0.85717 42.6436 2.45394C43.7138 3.25354 44.5639 4.26828 45.3651 5.3262C46.2531 6.49875 47.157 7.6596 48.0605 8.82045C48.2244 9.03075 48.4204 9.21682 48.6246 9.43922C48.726 9.3476 48.8116 9.28665 48.8768 9.20956C49.7477 8.17989 50.5982 7.13246 51.4895 6.12015C52.3902 5.09734 53.3426 4.11893 54.2477 3.09976C54.5578 2.75061 54.8863 2.55727 55.3664 2.57463C55.8632 2.59279 56.362 2.55364 56.9215 2.5379C56.7129 2.78815 56.5319 3.0154 56.34 3.23296C55.5991 4.07251 54.8578 4.91126 54.1112 5.74557C53.3821 6.56051 52.6461 7.36939 51.9146 8.18191C51.7882 8.32237 51.6611 8.46324 51.5498 8.615C51.3334 8.90925 51.3379 8.9702 51.5657 9.24871C51.8901 9.64548 52.2251 10.0346 52.5426 10.437C54.3308 12.7042 56.1138 14.9755 57.9016 17.2427C59.2701 18.9779 60.9528 20.3268 62.9664 21.2681C63.2823 21.4158 63.5883 21.5842 63.9103 21.7488C63.8549 21.9248 63.8117 22.0625 63.7587 22.2304C63.5973 22.2485 63.4388 22.2804 63.2802 22.2816C62.3979 22.2893 61.512 22.3385 60.6333 22.2816C58.9498 22.1731 57.2924 21.9147 55.7462 21.1817C54.1605 20.4302 52.8384 19.3521 51.7507 17.9979C50.5086 16.4511 49.2978 14.8802 48.0716 13.3214C47.9827 13.2084 47.8788 13.107 47.7586 12.9751C47.4415 13.3238 47.1518 13.6402 46.864 13.9591C46.1134 14.7906 45.3615 15.6209 44.6136 16.4552C43.7668 17.4001 42.9252 18.349 42.0796 19.2947C41.432 20.0189 40.7759 20.7357 40.1345 21.4655C39.6002 22.0734 39.094 22.7058 38.5516 23.3065C38.1274 23.7763 37.6685 24.2158 37.2206 24.6643C37.071 24.814 36.8852 24.8669 36.6676 24.8742C36.289 24.8863 35.9116 24.9363 35.533 24.9609C35.35 24.9727 35.1658 24.963 34.9176 24.963C35.0155 24.8253 35.0672 24.7361 35.1345 24.6602C36.5518 23.0651 37.9688 21.4695 39.3915 19.8792C40.13 19.0538 40.8843 18.2429 41.6224 17.4174C42.0723 16.9141 42.4998 16.3914 42.9481 15.8865C43.521 15.2406 44.1006 14.6001 44.6854 13.9644C45.1186 13.4933 45.1076 13.4328 44.6723 12.9807C44.3174 12.6122 43.9918 12.2138 43.6763 11.811C42.1868 9.90946 40.7079 7.99987 39.22 6.09714C38.4628 5.12923 37.6783 4.1819 36.7764 3.34194C36.0119 2.62993 35.1422 2.05314 34.2257 1.5494C33.7162 1.26928 33.1958 1.01015 32.6795 0.742538C32.4672 0.632749 32.2931 0.492285 32.2377 0.160498L32.2373 0.159691Z"
        fill="#EA580C"
      />
      <path
        d="M74.8483 48.5488C74.3739 48.4725 74.0829 48.2262 73.8266 47.9191C72.7283 46.6032 71.6292 45.2878 70.5264 43.9752C69.2068 42.4042 67.8823 40.8377 66.5615 39.2676C65.8663 38.4414 65.1759 37.6115 64.4799 36.7865C64.3719 36.6585 64.2431 36.5479 64.1237 36.4297C64.0939 36.4418 64.0642 36.4539 64.0348 36.466C64.0238 36.6468 64.0026 36.8276 64.0039 37.0085C64.0181 39.7253 64.0393 42.4422 64.0483 45.159C64.0507 45.9389 64.0222 46.7191 64.0035 47.4989C63.9945 47.8694 63.9281 47.9405 63.5601 47.995C63.3738 48.0228 63.1868 48.0438 62.9834 48.07V33.0989C63.8714 33.2018 64.6135 33.4908 65.1812 34.1576C65.9771 35.0932 66.7869 36.0171 67.5804 36.9548C68.9843 38.6137 70.3809 40.2791 71.78 41.9421C72.2405 42.4898 72.6957 43.0416 73.1615 43.5853C73.2797 43.7233 73.428 43.8363 73.5739 43.9711C73.761 43.7512 73.7259 43.5292 73.7263 43.3213C73.7276 41.7608 73.7215 40.2004 73.7206 38.6396C73.7198 37.1865 73.7239 35.7338 73.7243 34.2807C73.7243 33.6123 74.0263 33.2712 74.744 33.1546C74.9029 38.2735 74.7232 43.3907 74.8491 48.5483L74.8483 48.5488Z"
        fill="#EA580C"
      />
      <path
        d="M92.9535 43.6373C92.9535 44.5116 92.9274 45.3871 92.9621 46.2597C92.9877 46.9108 92.7073 47.2938 92.1079 47.5086C90.4753 48.0926 88.8154 48.5281 87.0581 48.3558C84.6468 48.1197 82.7306 47.0339 81.3906 45.0137C80.439 43.5788 79.961 42.0018 80.0942 40.2783C80.2369 38.4309 80.8812 36.7521 82.1054 35.3532C83.5501 33.7031 85.406 32.8498 87.6401 32.91C88.6247 32.9366 89.5229 33.2567 90.3608 33.7681C91.3181 34.3521 92.0602 35.1412 92.647 36.0781C92.7946 36.3138 92.8977 36.5838 92.9792 36.851C93.0436 37.0621 92.9576 37.1461 92.7391 37.1727C92.4384 37.2091 92.2277 37.1005 92.0638 36.8357C91.6457 36.1588 91.1974 35.5013 90.602 34.958C89.97 34.3816 89.2291 34.0534 88.3692 34.0095C87.0019 33.9396 85.7895 34.3497 84.7808 35.2591C84.1251 35.85 83.6194 36.5657 83.2705 37.3854C82.7147 38.692 82.5235 40.0567 82.6739 41.4529C82.85 43.0864 83.3447 44.619 84.5184 45.8408C85.6387 47.0073 87.0039 47.6462 88.6667 47.513C89.4385 47.4513 90.1317 47.1409 90.8091 46.7909C90.999 46.6928 91.0373 46.5209 91.043 46.3509C91.0617 45.7871 91.0678 45.2224 91.063 44.6581C91.0548 43.7306 91.0405 42.803 91.0161 41.8759C91.0035 41.3931 91.2158 41.0424 91.6249 40.8147C91.8951 40.6646 92.1833 40.537 92.4767 40.4397C92.9767 40.2488 92.9221 40.2581 92.9205 40.3287C92.9241 41.2837 92.9429 43.6365 92.9531 43.6365L92.9535 43.6373Z"
        fill="#EA580C"
      />
      <path
        d="M41.1411 41.3692V40.6063C41.3224 40.574 41.4899 40.5288 41.6599 40.5167C42.1338 40.4828 42.6086 40.461 43.083 40.4368C43.6682 40.4073 44.1474 40.17 44.5537 39.7522C45.4169 38.8651 45.7099 37.8172 45.4124 36.6342C45.2327 35.9209 44.742 35.3873 44.1927 34.9086C43.7 34.4796 43.1135 34.2874 42.4766 34.2628C41.8127 34.2374 41.1464 34.2451 40.4817 34.264C40.0114 34.2774 39.9645 34.3557 39.9649 34.8324C39.9682 38.7605 39.9706 42.6887 39.9682 46.6172C39.9678 47.4306 39.8439 47.6025 39.05 47.8007C38.6201 47.9081 38.1718 47.9424 37.7826 48.0021C37.7145 47.9549 37.7027 47.9488 37.6938 47.9399C37.684 47.9307 37.673 47.9202 37.6693 47.9081C37.6579 47.8697 37.642 47.8306 37.642 47.7914C37.6412 42.9216 37.6416 38.0521 37.6432 33.1823C37.6432 33.1448 37.664 33.1072 37.6836 33.0398C37.7961 33.0297 37.9146 33.0099 38.0328 33.0099C39.5541 33.0055 41.0763 32.968 42.596 33.0136C43.6274 33.0443 44.652 33.2206 45.6105 33.6336C47.0821 34.2673 47.8719 35.4083 48.1058 36.9631C48.2113 37.6642 48.1237 38.3274 47.8177 38.9652C47.6054 39.4079 47.3046 39.7761 46.9211 40.0917C45.8102 41.0071 44.4951 41.3022 43.0985 41.3591C42.6102 41.3789 42.1216 41.3845 41.633 41.3914C41.4858 41.3934 41.3387 41.3785 41.1411 41.3684V41.3692Z"
        fill="#EA580C"
      />
      <path
        d="M15.5659 47.9915C15.2456 47.9915 15.017 47.9992 14.7887 47.9899C14.1933 47.9661 13.5979 47.9362 13.0029 47.906C12.7592 47.8934 12.5624 47.7828 12.4014 47.6052C12.1932 47.3756 11.9674 47.1588 11.7795 46.9134C10.5317 45.2872 9.29439 43.6529 8.04734 42.0266C7.87821 41.8062 7.67241 41.6137 7.4609 41.3836C7.3578 41.5007 7.28118 41.5725 7.2229 41.6565C6.65317 42.4783 5.96118 43.1996 5.30628 43.952C4.42071 44.9691 3.54167 45.9923 2.65529 47.0091C2.49594 47.1915 2.32192 47.3631 2.14139 47.5253C1.60874 48.0032 1.40946 48.0581 0.597656 47.9556C0.916754 47.4938 1.32103 47.1447 1.66661 46.7487C2.01261 46.3524 2.37694 45.9721 2.72742 45.5794C3.08645 45.1766 3.43815 44.7673 3.79271 44.3604C4.14726 43.9536 4.49814 43.5439 4.85596 43.1403C5.20521 42.7467 5.56466 42.362 5.91432 41.9689C6.27172 41.5669 6.6222 41.1592 6.99958 40.7265C5.02019 38.1643 3.04855 35.6113 1.01782 32.9824C1.19754 32.9824 1.28353 32.9824 1.36952 32.9824C1.99427 32.984 2.61861 32.9929 3.24295 32.9852C3.81227 32.978 4.24996 33.177 4.60125 33.6436C5.84178 35.292 7.10553 36.9231 8.36073 38.5606C8.41738 38.6349 8.47606 38.708 8.56287 38.8181C8.65945 38.731 8.75278 38.6623 8.82736 38.5776C9.77242 37.5047 10.7138 36.4282 11.6581 35.355C12.1659 34.7778 12.6724 34.1994 13.1904 33.6315C13.571 33.2141 14.0266 32.9166 14.6237 32.8403C14.7044 33.2052 14.4929 33.4543 14.2981 33.6783C13.1562 34.9905 11.9967 36.2874 10.8487 37.5947C10.3417 38.1723 9.84782 38.7608 9.34818 39.3449C9.16153 39.5633 9.15257 39.6468 9.35389 39.9104C9.80421 40.4997 10.2692 41.0781 10.7224 41.6658C11.7681 43.0224 12.8085 44.3834 13.8543 45.7401C14.2989 46.3168 14.7529 46.8864 15.1991 47.4624C15.3124 47.6089 15.411 47.7667 15.5667 47.9923L15.5659 47.9915Z"
        fill="#EA580C"
      />
      <path
        d="M19.7082 32.9501C20.6757 32.9174 21.6171 33.5014 21.9749 34.2659C22.0785 34.4867 22.0996 34.7616 22.0996 35.0114C22.0996 37.2851 22.0809 39.5583 22.0817 41.832C22.0817 42.3955 22.0956 42.9642 22.1673 43.522C22.4033 45.3598 23.3793 46.63 25.1879 47.1995C26.2263 47.5265 27.2468 47.4042 28.2489 46.9965C29.7172 46.3991 30.5832 45.3351 30.6961 43.7699C30.787 42.5117 30.7691 41.2447 30.7727 39.9818C30.7784 37.964 30.7646 35.9458 30.752 33.9281C30.7507 33.7376 30.8045 33.5894 30.9402 33.4619C31.1774 33.2387 31.4358 33.0494 31.7875 32.9238C31.8009 33.0441 31.8213 33.143 31.8213 33.2415C31.8103 36.5105 31.7977 39.7791 31.7838 43.0482C31.7781 44.3935 31.3531 45.5858 30.4133 46.5691C29.8652 47.1426 29.1907 47.5454 28.4461 47.8288C27.4086 48.224 26.3372 48.4246 25.2217 48.3862C24.3936 48.358 23.6181 48.1376 22.8731 47.7917C21.6485 47.2229 20.7181 46.3584 20.1545 45.1301C19.8929 44.5598 19.7751 43.9507 19.7535 43.3307C19.7099 42.0948 19.6756 40.8576 19.6703 39.6209C19.6618 37.5357 19.6785 35.4506 19.6862 33.3654C19.6866 33.2338 19.6997 33.1026 19.7082 32.9497V32.9501Z"
        fill="#EA580C"
      />
      <path
        d="M55.6745 47.9979C54.9789 47.9737 54.3293 47.9039 53.7795 47.4599C53.5774 47.2968 53.4535 47.1051 53.4413 46.8472C53.4327 46.6591 53.4209 46.471 53.4209 46.2829C53.4209 42.0346 53.4217 37.7864 53.4225 33.5382C53.4225 33.3783 53.4225 33.2189 53.4225 33.0716C54.2384 32.8177 54.9504 33.053 55.3881 33.6786C55.5694 33.9378 55.6069 34.2239 55.611 34.521C55.6293 35.9325 55.6521 37.3436 55.6578 38.7551C55.6688 41.5245 55.6697 44.2938 55.6745 47.0631C55.675 47.357 55.6745 47.6504 55.6745 47.9975V47.9979Z"
        fill="#EA580C"
      />
      <path
        d="M3.53125 59.8634V59.4897C3.57934 59.4739 3.61683 59.4517 3.65432 59.4513C7.36164 59.432 11.069 59.4126 14.7767 59.3993C15.3061 59.3972 15.835 59.4287 16.3644 59.4421C16.5258 59.4461 16.668 59.4594 16.6591 59.6758C16.6505 59.882 16.5083 59.9082 16.3502 59.9119C15.7935 59.9236 15.2368 59.9409 14.6801 59.9401C11.2034 59.9365 7.72679 59.9296 4.24973 59.92C4.02192 59.9191 3.79452 59.8848 3.53125 59.8634Z"
        fill="#EA580C"
      />
      <path
        d="M89.0865 59.4283C89.1195 59.8158 89.062 59.8997 88.7527 59.9203C88.4821 59.9385 88.2099 59.9401 87.9385 59.9397C84.1774 59.9361 80.4158 59.9308 76.6547 59.9247C76.5194 59.9247 76.3817 59.9231 76.2501 59.8969C75.9945 59.846 75.9896 59.8263 76.0422 59.4594C80.3877 59.4594 84.7398 59.3576 89.0869 59.4283H89.0865Z"
        fill="#EA580C"
      />
      <path
        d="M21.9942 57.6357C21.9942 57.1982 21.942 56.7518 21.942 56.7518L22.8431 56.709V61.9865C22.8431 62.3728 22.7909 62.6646 22.687 62.9649C22.2159 63.8945 21.0234 64.1407 21.0234 64.1407C21.3788 63.66 21.7598 63.3427 21.9074 62.8277C21.9681 62.6045 21.9942 62.33 21.9942 61.9954V57.6361V57.6357Z"
        fill="#EA580C"
      />
      <path
        d="M27.3647 57.635C27.3647 57.1975 27.3125 56.7595 27.3125 56.7595H31.0642L31.021 57.4372C31.021 57.4372 30.5964 57.3944 30.1807 57.3856L28.214 57.3597V59.4191L30.6314 59.3763L30.5882 60.1141L28.2144 60.0455V62.1565L30.3804 62.1307C30.8222 62.1222 31.0651 62.079 31.0651 62.079L31.0219 62.7656H27.3655V57.6342L27.3647 57.635Z"
        fill="#EA580C"
      />
      <path
        d="M38.845 56.7179L39.85 60.5452C40.0318 61.2402 40.1271 61.8582 40.1271 61.8582H40.1618C40.1618 61.8582 40.2743 61.2576 40.4825 60.5452L41.1672 58.2542C41.3579 57.6277 41.4011 57.233 41.4532 56.7611H42.2765C42.1897 57.3617 42.0597 57.9369 41.8172 58.6574L40.5 62.7506L39.6422 62.8023L38.6372 58.9835C38.4901 58.4257 38.4033 57.8509 38.4033 57.8509H38.3772C38.3772 57.8509 38.2994 58.4003 38.1608 58.9751L37.2337 62.7506L36.3065 62.8023L34.8251 57.7993C34.6344 57.1555 34.4873 56.7866 34.4873 56.7866L35.3969 56.7349L36.4887 60.5706C36.6448 61.1369 36.7919 61.8663 36.7919 61.8663H36.8265C36.8265 61.8663 36.9565 61.1284 37.0951 60.5617L38.0308 56.7603L38.845 56.7175V56.7179Z"
        fill="#EA580C"
      />
      <path
        d="M46.1664 57.635C46.1664 57.1975 46.1143 56.7595 46.1143 56.7595H49.866L49.8228 57.4372C49.8228 57.4372 49.3982 57.3944 48.9825 57.3856L47.0157 57.3597V59.4191L49.4332 59.3763L49.39 60.1141L47.0161 60.0455V62.1565L49.1822 62.1307C49.6239 62.1222 49.8664 62.079 49.8664 62.079L49.8232 62.7656H46.1668V57.6342L46.1664 57.635Z"
        fill="#EA580C"
      />
      <path
        d="M57.6812 62.7672H54.0248V57.6358C54.0248 57.1983 53.9727 56.7603 53.9727 56.7603L54.8737 56.7175V62.1581L56.9965 62.1238C57.4298 62.1153 57.7244 62.081 57.7244 62.081L57.6812 62.7676V62.7672Z"
        fill="#EA580C"
      />
      <path
        d="M65.3747 62.1141L64.2136 60.1488C64.8897 59.9515 65.4093 59.4195 65.4093 58.5359C65.4093 57.4804 64.6297 56.7595 63.1308 56.7595H61.4326C61.4326 56.7595 61.4844 57.1971 61.4844 57.6346V62.7664H62.3769C62.3769 62.7664 62.3337 62.3632 62.3337 61.9684V57.3771H63.0094C64.1011 57.3771 64.5429 57.8578 64.5429 58.5787C64.5429 59.2185 64.1513 59.6782 63.4617 59.765L63.1394 59.7843L63.4617 60.3837L64.8461 62.8092L65.8254 62.7664C65.8254 62.7664 65.5825 62.4572 65.3747 62.1141Z"
        fill="#EA580C"
      />
      <path
        d="M70.816 60.3817L69.2046 57.5498C68.9707 57.1551 68.7021 56.7603 68.7021 56.7603L69.6725 56.7175L71.3531 59.7553L72.3842 57.7815C72.722 57.1381 72.8435 56.7603 72.8435 56.7603H73.6838C73.6838 56.7603 73.4931 57.3097 72.9906 58.1161L71.6649 60.3728V61.9688C71.6649 62.3636 71.7081 62.7668 71.7081 62.7668H70.8156V60.3813L70.816 60.3817Z"
        fill="#EA580C"
      />
    </svg>
  );
};
