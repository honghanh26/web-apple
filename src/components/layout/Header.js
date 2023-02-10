import React from "react";
import './globalheader.css';

function Header() {
  return (
    <div id="globalheader">
      <aside
        id="globalmessage-segment"
        lang="ko-KR"
        dir="ltr"
        className="globalmessage-segment"
      >
        <ul
          className="globalmessage-segment-content"
          data-strings='{"view":"{%STOREFRONT%} 스토어 홈","segments":{"smb":"비즈니스 스토어 홈","eduInd":"교육 스토어 홈","other":"스토어 홈"},"exit":"나가기"}'
        ></ul>
      </aside>
      <nav
        id="globalnav"
        lang="ko-KR"
        dir="ltr"
        aria-label="글로벌"
        className="globalnav no-js   "
      >
        <div className="globalnav-content">
          <div className="globalnav-item globalnav-menuback">
            <button className="globalnav-menuback-button" aria-label="메인 메뉴">
              <span className="globalnav-chevron-icon">
                <svg
                  height={48}
                  viewBox="0 0 9 48"
                  width={9}
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m1.5618 24.0621 6.5581-6.4238c.2368-.2319.2407-.6118.0088-.8486-.2324-.2373-.6123-.2407-.8486-.0088l-7 6.8569c-.1157.1138-.1807.2695-.1802.4316.001.1621.0674.3174.1846.4297l7 6.7241c.1162.1118.2661.1675.4155.1675.1577 0 .3149-.062.4326-.1846.2295-.2388.2222-.6187-.0171-.8481z" />
                </svg>
              </span>
            </button>
          </div>
          <ul id="globalnav-list" className="globalnav-list">
            <li
              className="globalnav-item globalnav-item-apple"
            >
              <a
                href="kr/"
                aria-label="Apple"
                className="globalnav-link globalnav-link-apple"
              >
                <span className="globalnav-image-regular globalnav-link-image">
                  <svg
                    height={44}
                    viewBox="0 0 14 44"
                    width={14}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z" />
                  </svg>
                </span>
                <span className="globalnav-image-compact globalnav-link-image">
                  <svg
                    height={48}
                    viewBox="0 0 17 48"
                    width={17}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m15.5752 19.0792a4.2055 4.2055 0 0 0 -2.01 3.5376 4.0931 4.0931 0 0 0 2.4908 3.7542 9.7779 9.7779 0 0 1 -1.2755 2.6351c-.7941 1.1431-1.6244 2.2862-2.8878 2.2862s-1.5883-.734-3.0443-.734c-1.42 0-1.9252.7581-3.08.7581s-1.9611-1.0589-2.8876-2.3584a11.3987 11.3987 0 0 1 -1.9373-6.1487c0-3.61 2.3464-5.523 4.6566-5.523 1.2274 0 2.25.8062 3.02.8062.734 0 1.8771-.8543 3.2729-.8543a4.3778 4.3778 0 0 1 3.6822 1.841zm-6.8586-2.0456a1.3865 1.3865 0 0 1 -.2527-.024 1.6557 1.6557 0 0 1 -.0361-.337 4.0341 4.0341 0 0 1 1.0228-2.5148 4.1571 4.1571 0 0 1 2.7314-1.4078 1.7815 1.7815 0 0 1 .0361.373 4.1487 4.1487 0 0 1 -.9867 2.587 3.6039 3.6039 0 0 1 -2.5148 1.3236z" />
                  </svg>
                </span>
                <span className="globalnav-link-text">Apple</span>
              </a>
            </li>
            <li
              className="globalnav-item globalnav-menu"
              role="none"
            >
              <div className="globalnav-flyout">
                <div className="globalnav-menu-list">
                  <div
                    className="globalnav-item globalnav-item-store globalnav-item-menu"
                  >
                    <ul className="globalnav-submenu-trigger-group" role="none">
                      <li className="globalnav-submenu-trigger-item">
                        <a
                          href="kr/shop/goto/store"
                          aria-label="스토어"
                          className="globalnav-link globalnav-submenu-trigger-link globalnav-link-store"
                        >
                          <span className="globalnav-link-text-container">
                            <span className="globalnav-image-regular globalnav-link-image">
                              <svg
                                height={44}
                                viewBox="0 0 30 44"
                                width={30}
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="m1.5818 25.3223v-.8262h8.9531v.8262zm8.584-3.75-.4629.8203c-1.4766-.3867-3.1816-1.4707-3.6562-2.8242-.4746 1.3535-2.1445 2.4375-3.6445 2.8242l-.4746-.8203c1.7285-.334 3.5801-1.6582 3.5801-3.3691v-.6914h1.0781v.6914c-.0001 1.7109 1.8515 3.0234 3.58 3.3691zm9.7241 3.8028h-8.9531v-.8145h3.9668v-1.8984h-2.8125v-5.1621h6.7031v.8203h-5.6953v1.3477h5.4727v.8145h-5.4727v1.3711h5.748v.8086h-2.9297v1.8984h3.9727zm3.0088-.9317c-1.4824 0-2.4668-1.418-2.4668-3.4863 0-2.0801.9844-3.4922 2.4668-3.4922 1.5 0 2.4668 1.4062 2.4668 3.4922 0 2.0567-.9668 3.4863-2.4668 3.4863zm0-.8906c.8438 0 1.5117-.9492 1.5117-2.5957 0-1.6523-.668-2.6016-1.5117-2.6016-.8262 0-1.4824.9492-1.4824 2.6016 0 1.6465.6562 2.5957 1.4824 2.5957zm4.4941 3.1172v-5.3379h-1.6641v-.873h1.6641v-3.7148h1.0254v9.9257z" />
                              </svg>
                            </span>
                            <span className="globalnav-link-text">스토어</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="globalnav-item globalnav-item-mac globalnav-item-menu"
                  >
                    <ul className="globalnav-submenu-trigger-group" role="none">
                      <li className="globalnav-submenu-trigger-item">
                        <a
                          href="kr/mac/"
                          aria-label="Mac"
                          className="globalnav-link globalnav-submenu-trigger-link globalnav-link-mac"
                        >
                          <span className="globalnav-link-text-container">
                            <span className="globalnav-image-regular globalnav-link-image">
                              <svg
                                height={44}
                                viewBox="0 0 23 44"
                                width={23}
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="m8.1558 25.9987v-6.457h-.0703l-2.666 6.457h-.8907l-2.666-6.457h-.0703v6.457h-.9844v-8.4551h1.2246l2.8945 7.0547h.0938l2.8945-7.0547h1.2246v8.4551zm2.5166-1.7696c0-1.1309.832-1.7812 2.3027-1.8691l1.8223-.1113v-.5742c0-.7793-.4863-1.207-1.4297-1.207-.7559 0-1.2832.2871-1.4238.7852h-1.0195c.1348-1.0137 1.1309-1.6816 2.4785-1.6816 1.541 0 2.4023.791 2.4023 2.1035v4.3242h-.9609v-.9318h-.0938c-.4102.6738-1.1016 1.043-1.9453 1.043-1.2246 0-2.1328-.7266-2.1328-1.8809zm4.125-.5859v-.5801l-1.6992.1113c-.9609.0645-1.3828.3984-1.3828 1.0312 0 .6445.5449 1.0195 1.2773 1.0195 1.0371.0001 1.8047-.6796 1.8047-1.5819zm6.958-2.0273c-.1641-.627-.7207-1.1367-1.6289-1.1367-1.1367 0-1.8516.9082-1.8516 2.3379 0 1.459.7266 2.3848 1.8516 2.3848.8496 0 1.4414-.3926 1.6289-1.1074h1.0195c-.1816 1.1602-1.125 2.0156-2.6426 2.0156-1.7695 0-2.9004-1.2832-2.9004-3.293 0-1.9688 1.125-3.2461 2.8945-3.2461 1.5352 0 2.4727.9199 2.6484 2.0449z" />
                              </svg>
                            </span>
                            <span className="globalnav-link-text">Mac</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="globalnav-item globalnav-item-ipad globalnav-item-menu"
                  >
                    <ul className="globalnav-submenu-trigger-group" role="none">
                      <li className="globalnav-submenu-trigger-item">
                        <a
                          href="kr/ipad/"
                          aria-label="iPad"
                          className="globalnav-link globalnav-submenu-trigger-link globalnav-link-ipad"
                        >
                          <span className="globalnav-link-text-container">
                            <span className="globalnav-image-regular globalnav-link-image">
                              <svg
                                height={44}
                                viewBox="0 0 24 44"
                                width={24}
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="m14.9575 23.7002c0 .902-.768 1.582-1.805 1.582-.732 0-1.277-.375-1.277-1.02 0-.632.422-.966 1.383-1.031l1.699-.111zm-1.395-4.072c-1.347 0-2.343.668-2.478 1.681h1.019c.141-.498.668-.785 1.424-.785.944 0 1.43.428 1.43 1.207v.574l-1.822.112c-1.471.088-2.303.738-2.303 1.869 0 1.154.908 1.881 2.133 1.881.844 0 1.535-.369 1.945-1.043h.094v.931h.961v-4.324c0-1.312-.862-2.103-2.403-2.103zm6.769 5.575c-1.155 0-1.846-.885-1.846-2.361 0-1.471.697-2.362 1.846-2.362 1.142 0 1.857.914 1.857 2.362 0 1.459-.709 2.361-1.857 2.361zm1.834-8.027v3.503h-.088c-.358-.691-1.102-1.107-1.981-1.107-1.605 0-2.654 1.289-2.654 3.27 0 1.986 1.037 3.269 2.654 3.269.873 0 1.623-.416 2.022-1.119h.093v1.008h.961v-8.824zm-15.394 4.869h-1.863v-3.563h1.863c1.225 0 1.899.639 1.899 1.799 0 1.119-.697 1.764-1.899 1.764zm.276-4.5h-3.194v8.455h1.055v-3.018h2.127c1.588 0 2.719-1.119 2.719-2.701 0-1.611-1.108-2.736-2.707-2.736zm-6.064 8.454h1.008v-6.316h-1.008zm-.199-8.237c0-.387.316-.704.703-.704s.703.317.703.704c0 .386-.316.703-.703.703s-.703-.317-.703-.703z" />
                              </svg>
                            </span>
                            <span className="globalnav-link-text">iPad</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="globalnav-item globalnav-item-iphone globalnav-item-menu"
                  >
                    <ul className="globalnav-submenu-trigger-group" role="none">
                      <li className="globalnav-submenu-trigger-item">
                        <a
                          href="kr/iphone/"
                          aria-label="iPhone"
                          className="globalnav-link globalnav-submenu-trigger-link globalnav-link-iphone"
                        >
                          <span className="globalnav-link-text-container">
                            <span className="globalnav-image-regular globalnav-link-image">
                              <svg
                                height={44}
                                viewBox="0 0 38 44"
                                width={38}
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="m32.7129 22.3203h3.48c-.023-1.119-.691-1.857-1.693-1.857-1.008 0-1.711.738-1.787 1.857zm4.459 2.045c-.293 1.078-1.277 1.746-2.66 1.746-1.752 0-2.848-1.266-2.848-3.264 0-1.986 1.113-3.275 2.848-3.275 1.705 0 2.742 1.213 2.742 3.176v.386h-4.541v.047c.053 1.248.75 2.039 1.822 2.039.815 0 1.366-.298 1.629-.855zm-12.282-4.682h.961v.996h.094c.316-.697.932-1.107 1.898-1.107 1.418 0 2.209.838 2.209 2.338v4.09h-1.007v-3.844c0-1.137-.481-1.676-1.489-1.676s-1.658.674-1.658 1.781v3.739h-1.008zm-2.499 3.158c0-1.5-.674-2.361-1.869-2.361-1.196 0-1.87.861-1.87 2.361 0 1.495.674 2.362 1.87 2.362 1.195 0 1.869-.867 1.869-2.362zm-4.782 0c0-2.033 1.114-3.269 2.913-3.269 1.798 0 2.912 1.236 2.912 3.269 0 2.028-1.114 3.27-2.912 3.27-1.799 0-2.913-1.242-2.913-3.27zm-6.636-5.666h1.008v3.504h.093c.317-.697.979-1.107 1.946-1.107 1.336 0 2.179.855 2.179 2.338v4.09h-1.007v-3.844c0-1.119-.504-1.676-1.459-1.676-1.131 0-1.752.715-1.752 1.781v3.739h-1.008zm-6.015 4.87h1.863c1.202 0 1.899-.645 1.899-1.764 0-1.16-.674-1.799-1.899-1.799h-1.863zm2.139-4.5c1.599 0 2.707 1.125 2.707 2.736 0 1.582-1.131 2.701-2.719 2.701h-2.127v3.018h-1.055v-8.455zm-6.114 8.454h1.008v-6.316h-1.008zm-.2-8.238c0-.386.317-.703.703-.703.387 0 .704.317.704.703 0 .387-.317.704-.704.704-.386 0-.703-.317-.703-.704z" />
                              </svg>
                            </span>
                            <span className="globalnav-link-text">iPhone</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="globalnav-item globalnav-item-watch globalnav-item-menu"
                  >
                    <ul className="globalnav-submenu-trigger-group" role="none">
                      <li className="globalnav-submenu-trigger-item">
                        <a
                          href="kr/watch/"
                          aria-label="Watch"
                          className="globalnav-link globalnav-submenu-trigger-link globalnav-link-watch"
                        >
                          <span className="globalnav-link-text-container">
                            <span className="globalnav-image-regular globalnav-link-image">
                              <svg
                                height={44}
                                viewBox="0 0 35 44"
                                width={35}
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="m28.9819 17.1758h1.008v3.504h.094c.316-.697.978-1.108 1.945-1.108 1.336 0 2.18.856 2.18 2.338v4.09h-1.008v-3.844c0-1.119-.504-1.675-1.459-1.675-1.131 0-1.752.715-1.752 1.781v3.738h-1.008zm-2.42 4.441c-.164-.627-.721-1.136-1.629-1.136-1.137 0-1.852.908-1.852 2.338 0 1.459.727 2.384 1.852 2.384.849 0 1.441-.392 1.629-1.107h1.019c-.182 1.16-1.125 2.016-2.642 2.016-1.77 0-2.901-1.284-2.901-3.293 0-1.969 1.125-3.247 2.895-3.247 1.535 0 2.472.92 2.648 2.045zm-6.533-3.568v1.635h1.407v.844h-1.407v3.574c0 .744.282 1.06.938 1.06.182 0 .281-.006.469-.023v.85c-.2.035-.393.058-.592.058-1.301 0-1.822-.48-1.822-1.687v-3.832h-1.02v-.844h1.02v-1.635zm-4.2 5.596v-.58l-1.699.111c-.961.064-1.383.398-1.383 1.031 0 .645.545 1.02 1.277 1.02 1.038 0 1.805-.68 1.805-1.582zm-4.125.586c0-1.131.832-1.782 2.303-1.869l1.822-.112v-.574c0-.779-.486-1.207-1.43-1.207-.755 0-1.283.287-1.423.785h-1.02c.135-1.014 1.131-1.682 2.479-1.682 1.541 0 2.402.792 2.402 2.104v4.324h-.961v-.931h-.094c-.41.673-1.101 1.043-1.945 1.043-1.225 0-2.133-.727-2.133-1.881zm-7.684 1.769h-.996l-2.303-8.455h1.101l1.682 6.873h.07l1.893-6.873h1.066l1.893 6.873h.07l1.682-6.873h1.101l-2.302 8.455h-.996l-1.946-6.674h-.07z" />
                              </svg>
                            </span>
                            <span className="globalnav-link-text">Watch</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="globalnav-item globalnav-item-airpods globalnav-item-menu"
                  >
                    <ul className="globalnav-submenu-trigger-group" role="none">
                      <li className="globalnav-submenu-trigger-item">
                        <a
                          href="kr/airpods/"
                          aria-label="AirPods"
                          className="globalnav-link globalnav-submenu-trigger-link globalnav-link-airpods"
                        >
                          <span className="globalnav-link-text-container">
                            <span className="globalnav-image-regular globalnav-link-image">
                              <svg
                                height={44}
                                viewBox="0 0 43 44"
                                width={43}
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="m11.7153 19.6836h.961v.937h.094c.187-.615.914-1.048 1.752-1.048.164 0 .375.011.504.029v1.008c-.082-.024-.446-.059-.645-.059-.961 0-1.658.645-1.658 1.535v3.914h-1.008zm28.135-.111c1.324 0 2.244.656 2.379 1.693h-.996c-.135-.504-.627-.838-1.389-.838-.75 0-1.336.381-1.336.943 0 .434.352.704 1.096.885l.973.235c1.189.287 1.763.802 1.763 1.711 0 1.13-1.095 1.91-2.531 1.91-1.406 0-2.373-.674-2.484-1.723h1.037c.17.533.674.873 1.482.873.85 0 1.459-.404 1.459-.984 0-.434-.328-.727-1.002-.891l-1.084-.264c-1.183-.287-1.722-.796-1.722-1.71 0-1.049 1.013-1.84 2.355-1.84zm-6.665 5.631c-1.155 0-1.846-.885-1.846-2.362 0-1.471.697-2.361 1.846-2.361 1.142 0 1.857.914 1.857 2.361 0 1.459-.709 2.362-1.857 2.362zm1.834-8.028v3.504h-.088c-.358-.691-1.102-1.107-1.981-1.107-1.605 0-2.654 1.289-2.654 3.269 0 1.987 1.037 3.27 2.654 3.27.873 0 1.623-.416 2.022-1.119h.094v1.007h.961v-8.824zm-9.001 8.028c-1.195 0-1.869-.868-1.869-2.362 0-1.5.674-2.361 1.869-2.361 1.196 0 1.869.861 1.869 2.361 0 1.494-.673 2.362-1.869 2.362zm0-5.631c-1.799 0-2.912 1.236-2.912 3.269 0 2.028 1.113 3.27 2.912 3.27s2.912-1.242 2.912-3.27c0-2.033-1.113-3.269-2.912-3.269zm-17.071 6.427h1.008v-6.316h-1.008zm-.199-8.238c0-.387.317-.703.703-.703.387 0 .703.316.703.703s-.316.703-.703.703c-.386 0-.703-.316-.703-.703zm-6.137 4.922 1.324-3.773h.093l1.325 3.773zm1.892-5.139h-1.043l-3.117 8.455h1.107l.85-2.42h3.363l.85 2.42h1.107zm14.868 4.5h-1.864v-3.562h1.864c1.224 0 1.898.639 1.898 1.799 0 1.119-.697 1.763-1.898 1.763zm.275-4.5h-3.193v8.455h1.054v-3.017h2.127c1.588 0 2.719-1.119 2.719-2.701 0-1.612-1.107-2.737-2.707-2.737z" />
                              </svg>
                            </span>
                            <span className="globalnav-link-text">AirPods</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="globalnav-item globalnav-item-tv-home globalnav-item-menu"
                  >
                    <ul className="globalnav-submenu-trigger-group" role="none">
                      <li className="globalnav-submenu-trigger-item">
                        <a
                          href="kr/tv-home/"
                          aria-label="TV 및 홈"
                          className="globalnav-link globalnav-submenu-trigger-link globalnav-link-tv-home"
                        >
                          <span className="globalnav-link-text-container">
                            <span className="globalnav-image-regular globalnav-link-image">
                              <svg
                                height={44}
                                viewBox="0 0 42 44"
                                width={42}
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="m3.2656 26v-7.5059h-2.7246v-.9492h6.5039v.9492h-2.7249v7.5059zm7.8516 0-3.1172-8.4551h1.1074l2.4844 7.09h.0937l2.4844-7.09h1.1074l-3.1173 8.4551zm8.7715-4.6172v-3.8789h4.6054v3.8789zm8.0566 4.67-.3984.8028a4.6562 4.6562 0 0 1 -3.334-1.752 4.5742 4.5742 0 0 1 -3.3516 1.7344l-.3984-.791c1.5176-.1348 3.0176-.8379 3.2168-1.7813h-2.8945v-.7793h6.8906v.7793h-2.93c.2054.955 1.7522 1.6288 3.1995 1.787zm-7.0605-7.7578v2.3028h2.6015v-2.3029zm4.8457 3.82v.7383h-3.0405v-.7383zm.7031.1817v-5.543h1.0254v5.543zm14.7187 1.0722h-8.9648v-.7968h3.9725v-.5621c-1.5762-.0938-2.543-.6153-2.543-1.3594 0-.832 1.1777-1.3887 3.0586-1.3887 1.8867 0 3.0527.5567 3.0527 1.3887 0 .75-.9609 1.2715-2.5547 1.3594v.5625h3.9785zm-8.414-4.4824v-.7676h7.8281v.7676zm7.2422 5.0742v2.6368h-6.6035v-2.6366zm-1.0137 1.8985v-1.1365h-4.5645v1.1367zm-2.291-4.5469c1.1719 0 2.01-.2344 2.01-.6621 0-.4336-.8378-.6621-2.01-.6621-1.1778 0-2.0332.2285-2.0332.6621 0 .4221.8554.6623 2.0332.6623zm-1.74-3.7383v-.75h3.44v.75z" />
                              </svg>
                            </span>
                            <span className="globalnav-link-text">TV 및 홈</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="globalnav-item globalnav-item-entertainment globalnav-item-menu"
                  >
                    <ul className="globalnav-submenu-trigger-group" role="none">
                      <li className="globalnav-submenu-trigger-item">
                        <a
                          href="kr/entertainment/"
                          aria-label="엔터테인먼트"
                          className="globalnav-link globalnav-submenu-trigger-link globalnav-link-entertainment"
                        >
                          <span className="globalnav-link-text-container">
                            <span className="globalnav-image-regular globalnav-link-image">
                              <svg
                                id="a"
                                xmlns="http://www.w3.org/2000/svg"
                                width={59}
                                height={44}
                                viewBox="0 0 59 44"
                              >
                                <path
                                  id="d"
                                  d="M3.8525,22.3242c-1.4004,0-2.2617-1.0605-2.2617-2.3906,0-1.3418,.8613-2.3965,2.2617-2.3965,1.248,0,2.0566,.8203,2.2324,1.9277h.9375v-2.5195h.9375v6.8672h-.9375v-3.5215h-.9258c-.1348,1.166-.9551,2.0332-2.2441,2.0332Zm0-.8965c.8145,0,1.3008-.6562,1.3008-1.4941s-.4863-1.5-1.3008-1.5c-.8086,0-1.2891,.6621-1.2891,1.5s.4805,1.4941,1.2891,1.4941Zm6.2988,4.957H3.2256v-3.0996h1.0254v2.2852h5.9004v.8145Zm-1.2246-2.3379v-7.3008h.9551v7.3008h-.9551Zm3.4746-5.5723v1.9453h3.1055v.8145h-3.1055v2.168c1.2773,.0234,3.0645-.0645,4.125-.2695l.1055,.7969c-1.5527,.2871-3.2812,.3164-5.2324,.3164v-6.5801h4.5059v.8086h-3.5039Zm5.6895,8.1973v-5.3672h-1.8984v-.8672h1.8984v-3.6914h1.0137v9.9258h-1.0137Zm3.6855-7.9863v1.8223h2.2793v.8203h-2.2793v2.0391c1.1836,0,2.2266-.0879,3.0352-.2461l.0879,.791c-.9082,.1816-2.4141,.2754-4.084,.2695v-6.2988h3.6445v.8027h-2.6836Zm4.1367,7.4883v-4.8457h-1.3359v-.8496h1.3359v-3.5156h.9609v9.2109h-.9609Zm1.9512,.4922v-9.9141h.9727v9.9141h-.9727Zm4.9746-4.3359c-1.4766,0-2.6191-1.002-2.6191-2.3965,0-1.3887,1.1426-2.3906,2.6191-2.3906,1.4824,0,2.6309,1.002,2.6309,2.3906,0,1.3945-1.1484,2.3965-2.6309,2.3965Zm0-.8613c.9434,0,1.6406-.6328,1.6406-1.5352s-.6973-1.541-1.6406-1.541c-.9375,0-1.6289,.6387-1.6289,1.541s.6914,1.5352,1.6289,1.5352Zm5.4844,4.0781v.8145h-6.7734v-3.1172h1.0195v2.3027h5.7539Zm-1.2832-1.582v-7.2188h1.0254v7.2188h-1.0254Zm2.8066-1.7402v-4.6348h4.5v4.6348h-4.5Zm3.498-3.8203h-2.4961v3.0117h2.4961v-3.0117Zm4.4121,7.1426v.8145h-6.7207v-3.041h1.0312v2.2266h5.6895Zm-1.2246-1.5879v-3.6445h-1.752v-.8203h1.752v-2.7539h1.0195v7.2188h-1.0195Zm2.3555,1.377v-.8145h8.9531v.8145h-8.9531Zm2.1973-6.8789v1.3359h5.3613v.8086h-5.3613v1.3887h5.7188v.8145h-6.7324v-5.1562h6.627v.8086h-5.6133Z"
                                />
                              </svg>
                            </span>
                            <span className="globalnav-link-text">
                              엔터테인먼트
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="globalnav-item globalnav-item-accessories globalnav-item-menu"
                  >
                    <ul className="globalnav-submenu-trigger-group" role="none">
                      <li className="globalnav-submenu-trigger-item">
                        <a
                          href="kr/shop/goto/buy_accessories"
                          aria-label="액세서리"
                          className="globalnav-link globalnav-submenu-trigger-link globalnav-link-accessories"
                        >
                          <span className="globalnav-link-text-container">
                            <span className="globalnav-image-regular globalnav-link-image">
                              <svg
                                height={44}
                                viewBox="0 0 40 44"
                                width={40}
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="m4.8467 22.0566c-1.3887 0-2.2559-1.0312-2.2559-2.3145 0-1.2891.8672-2.3086 2.2559-2.3086 1.4238 0 2.2676 1.0195 2.2676 2.3086 0 1.2833-.8438 2.3145-2.2676 2.3145zm0-.8671c.8203 0 1.3066-.6562 1.3066-1.4473 0-.8145-.4863-1.4414-1.3066-1.4414-.7969 0-1.2832.627-1.2832 1.4414 0 .791.4863 1.4473 1.2832 1.4473zm6.0117 5.4843h-1.0078v-2.7305h-5.8125v-.8145h6.8203zm-3.0586-4.1543v-5.5898h.9434v2.332h1.1543v-2.5078h.9551v5.8477h-.9551v-2.5196h-1.1543v2.4375zm9.0738.92-.6035.791c-.8262-.5391-1.7051-1.6875-1.9395-2.6836-.2227 1.002-1.002 2.2559-2.0801 2.918l-.5918-.7559c1.3477-.8086 2.1621-2.3496 2.1621-4.418v-1.5527h1.0137v1.5352c0 2.121.8672 3.4335 2.0391 4.166zm.4511 2.7363v-5.1504h-1.5352v-.8613h1.5352v-3.1992h.9375v9.2109zm1.9512.4863v-9.9082h.9609v9.9082zm7.8779-3.1465-.5859.7617c-.9961-.5508-2.1562-1.793-2.4375-2.8594-.2695 1.1367-1.3594 2.4609-2.4434 3.1055l-.627-.7383c1.5996-.9551 2.5312-2.6074 2.5312-4.5117v-1.6582h1.0488v1.623c.0002 1.9395 1.0607 3.4923 2.5138 4.2774zm1.166 3.1524v-5.5488h-2.1504v-.8613h2.1504v-3.5039h1.0195v9.9141h-1.0195zm3.8409-5.5078v2.2734c1.248.0234 3.2988-.0527 4.5117-.3047l.1113.8203c-1.4941.293-3.6152.3398-5.6426.3281v-3.9258h3.4277v-1.8867h-3.4453v-.8086h4.4648v3.5039h-3.4276zm5.4961 5.5078v-9.9141h1.0078v9.9141z" />
                              </svg>
                            </span>
                            <span className="globalnav-link-text">액세서리</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div
                    className="globalnav-item globalnav-item-support globalnav-item-menu"
                  >
                    <ul className="globalnav-submenu-trigger-group" role="none">
                      <li className="globalnav-submenu-trigger-item">
                        <a
                          href="https://support.apple.com/ko-kr"
                          aria-label="지원"
                          className="globalnav-link globalnav-submenu-trigger-link globalnav-link-support"
                        >
                          <span className="globalnav-link-text-container">
                            <span className="globalnav-image-regular globalnav-link-image">
                              <svg
                                height={44}
                                viewBox="0 0 39 44"
                                width={39}
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="m10.0283 25.291h-8.9531v-.8145h3.4102v-3.498h1.0136v3.498h4.5293zm-7.9687-6.7207v-.8262h6.8379c.0352 2.0801-.0938 4.0723-.3984 5.4727l-.9551-.1172c.2402-1.043.3516-2.6426.3457-3.5742v-.9551zm9.0644 4.0664-.5684-.7969c1.8223-.6621 3.1699-2.0625 3.2812-3.5508h-2.7832v-.8145h3.8379c.0177 2.4903-1.5233 4.2189-3.7675 5.1622zm7.7989 4.0371h-1.0079v-2.7656h-5.6777v-.8262h6.6855v3.5918zm-3.0997-4.2129v-5.5312h.9551v2.291h1.1836v-2.4668h.9551v5.8184h-.9551v-2.5254h-1.1836v2.4141h-.9551zm10.2481 1.0664-.5625.8027c-.9434-.5391-2.1328-1.8574-2.4316-2.9297-.3047 1.166-1.3711 2.5254-2.4785 3.1699l-.5977-.7792c1.5879-.9375 2.5371-2.543 2.5371-4.5234v-.668h-2.1211v-.8555h5.2852v.8555h-2.1094v.6328c0 1.9746 1.0429 3.5332 2.4785 4.2949zm2.0801 3.1407h-1.0254v-9.9141h1.0254zm1.4004-4.4414-.1348-.8203c2.2031.0059 4.7051-.0645 6.4629-.2754l.082.7617c-.7383.0938-1.623.1641-2.5547.2168v1.8105h-1.0078v-1.7637c-.9844.0411-1.9687.0645-2.8476.0704zm.6621-3.2461c0-1.0781 1.0137-1.8223 2.4668-1.8223 1.459 0 2.4668.7441 2.4668 1.8223 0 1.0723-1.0078 1.8105-2.4668 1.8105-1.4532 0-2.4668-.7324-2.4668-1.8105zm7.7109 7.4062h-7.1543v-2.8184h1.0195v2.0098h6.1348zm-6.6914-7.4062c0 .6152.6035 1.0371 1.4473 1.0371.8496 0 1.4473-.4219 1.4473-1.0371s-.5977-1.0547-1.4473-1.0547c-.8438 0-1.4473.4453-1.4473 1.0547zm5.4668 3.6855v-5.918h1.0078v7.6172h-1.0078v-.9785h-1.9453v-.7207z" />
                              </svg>
                            </span>
                            <span className="globalnav-link-text">지원</span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li
              className="globalnav-item globalnav-search"
            >
              <a
                role="button"
                id="globalnav-menubutton-link-search"
                className="globalnav-link globalnav-link-search"
                href="kr/search"
                aria-label="Search apple.com"
              >
                <span className="globalnav-image-regular">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15px"
                    height="44px"
                    viewBox="0 0 15 44"
                  >
                    <path d="M14.298,27.202l-3.87-3.87c0.701-0.929,1.122-2.081,1.122-3.332c0-3.06-2.489-5.55-5.55-5.55c-3.06,0-5.55,2.49-5.55,5.55 c0,3.061,2.49,5.55,5.55,5.55c1.251,0,2.403-0.421,3.332-1.122l3.87,3.87c0.151,0.151,0.35,0.228,0.548,0.228 s0.396-0.076,0.548-0.228C14.601,27.995,14.601,27.505,14.298,27.202z M1.55,20c0-2.454,1.997-4.45,4.45-4.45 c2.454,0,4.45,1.997,4.45,4.45S8.454,24.45,6,24.45C3.546,24.45,1.55,22.454,1.55,20z" />
                  </svg>
                </span>
                <span className="globalnav-image-compact">
                  <svg
                    height={48}
                    viewBox="0 0 17 48"
                    width={17}
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m16.2294 29.9556-4.1755-4.0821a6.4711 6.4711 0 1 0 -1.2839 1.2625l4.2005 4.1066a.9.9 0 1 0 1.2588-1.287zm-14.5294-8.0017a5.2455 5.2455 0 1 1 5.2455 5.2527 5.2549 5.2549 0 0 1 -5.2455-5.2527z" />
                  </svg>
                </span>
              </a>
              <div
                id="globalnav-submenu-search"
                className="globalnav-flyout globalnav-submenu"
                aria-labelledby="globalnav-menubutton-link-search"
              >
                <div className="globalnav-flyout-scroll-container">
                  <div className="globalnav-flyout-content globalnav-submenu-content">
                    <form
                      className="globalnav-searchfield"
                      action="kr/search"
                      method="get"
                    >
                      <div className="globalnav-searchfield-wrapper">
                        <input
                          className="globalnav-searchfield-input"
                          placeholder="apple.com 검색하기"
                          aria-label="Search apple.com"
                          autoCorrect="off"
                          autoCapitalize="off"
                          autoComplete="off"
                        />
                        <input
                          id="globalnav-searchfield-src"
                          type="hidden"
                          name="src"
                          defaultValue=""
                        />
                        <input type="hidden" name="type" defaultValue="" />
                        <input type="hidden" name="page" defaultValue="" />
                        <input type="hidden" name="locale" defaultValue="" />
                        <button
                          className="globalnav-searchfield-reset"
                          aria-label="검색 결과 지우기"
                          tabIndex={-1}
                          type="button"
                        >
                          <span className="globalnav-image-regular">
                            <svg
                              height={14}
                              viewBox="0 0 14 14"
                              width={14}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m7 .0339a6.9661 6.9661 0 1 0 6.9661 6.9661 6.9661 6.9661 0 0 0 -6.9661-6.9661zm2.798 8.9867a.55.55 0 0 1 -.778.7774l-2.02-2.02-2.02 2.02a.55.55 0 0 1 -.7784-.7774l2.0206-2.0206-2.0204-2.02a.55.55 0 0 1 .7782-.7778l2.02 2.02 2.02-2.02a.55.55 0 0 1 .778.7778l-2.0203 2.02z" />
                            </svg>
                          </span>
                          <span className="globalnav-image-compact">
                            <svg
                              height={16}
                              viewBox="0 0 16 16"
                              width={16}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m0 8a8.0474 8.0474 0 0 1 7.9922-8 8.0609 8.0609 0 0 1 8.0078 8 8.0541 8.0541 0 0 1 -8 8 8.0541 8.0541 0 0 1 -8-8zm5.6549 3.2863 2.3373-2.353 2.3451 2.353a.6935.6935 0 0 0 .4627.1961.6662.6662 0 0 0 .6667-.6667.6777.6777 0 0 0 -.1961-.4706l-2.3451-2.3373 2.3529-2.3607a.5943.5943 0 0 0 .1961-.4549.66.66 0 0 0 -.6667-.6589.6142.6142 0 0 0 -.447.1961l-2.3686 2.3606-2.353-2.3527a.6152.6152 0 0 0 -.447-.1883.6529.6529 0 0 0 -.6667.651.6264.6264 0 0 0 .1961.4549l2.3451 2.3529-2.3451 2.353a.61.61 0 0 0 -.1961.4549.6661.6661 0 0 0 .6667.6667.6589.6589 0 0 0 .4627-.1961z" />
                            </svg>
                          </span>
                        </button>
                        <button
                          className="globalnav-searchfield-submit"
                          aria-label="검색어 제출"
                          tabIndex={-1}
                          aria-hidden="true"
                          type="submit"
                        >
                          <span className="globalnav-image-regular">
                            <svg
                              height={32}
                              viewBox="0 0 30 32"
                              width={30}
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m23.3291 23.3066-4.35-4.35c-.0105-.0105-.0247-.0136-.0355-.0235a6.8714 6.8714 0 1 0 -1.5736 1.4969c.0214.0256.03.0575.0542.0815l4.35 4.35a1.1 1.1 0 1 0 1.5557-1.5547zm-15.4507-8.582a5.6031 5.6031 0 1 1 5.603 5.61 5.613 5.613 0 0 1 -5.603-5.61z" />
                            </svg>
                          </span>
                          <span className="globalnav-image-compact">
                            <svg
                              width={38}
                              height={40}
                              viewBox="0 0 38 40"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="m28.6724 27.8633-5.07-5.07c-.0095-.0095-.0224-.0122-.032-.0213a7.9967 7.9967 0 1 0 -1.8711 1.7625c.0254.03.0357.0681.0642.0967l5.07 5.07a1.3 1.3 0 0 0 1.8389-1.8379zm-18.0035-10.0033a6.5447 6.5447 0 1 1 6.545 6.5449 6.5518 6.5518 0 0 1 -6.545-6.5449z" />
                            </svg>
                          </span>
                        </button>
                      </div>
                      <div
                        className="globalnav-searchresults-count"
                        role="status"
                        aria-live="polite"
                      />
                    </form>
                    <div className="globalnav-searchresults" />
                  </div>
                </div>
              </div>
            </li>
            <li
              className="globalnav-item globalnav-bag"
              id="globalnav-bag"
            >
              <div className="globalnav-bag-wrapper">
                <a
                  role="button"
                  id="globalnav-menubutton-link-bag"
                  href="kr/shop/goto/kr/shop/goto/bag"
                  aria-label="쇼핑백"
                  className="globalnav-link globalnav-link-bag"
                >
                  <span className="globalnav-image-regular">
                    <svg
                      height={44}
                      viewBox="0 0 14 44"
                      width={14}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m11.3535 16.0283h-1.0205a3.4229 3.4229 0 0 0 -3.333-2.9648 3.4229 3.4229 0 0 0 -3.333 2.9648h-1.02a2.1184 2.1184 0 0 0 -2.117 2.1162v7.7155a2.1186 2.1186 0 0 0 2.1162 2.1167h8.707a2.1186 2.1186 0 0 0 2.1168-2.1167v-7.7155a2.1184 2.1184 0 0 0 -2.1165-2.1162zm-4.3535-1.8652a2.3169 2.3169 0 0 1 2.2222 1.8652h-4.4444a2.3169 2.3169 0 0 1 2.2222-1.8652zm5.37 11.6969a1.0182 1.0182 0 0 1 -1.0166 1.0171h-8.7069a1.0182 1.0182 0 0 1 -1.0165-1.0171v-7.7155a1.0178 1.0178 0 0 1 1.0166-1.0166h8.707a1.0178 1.0178 0 0 1 1.0164 1.0166z" />
                    </svg>
                  </span>
                  <span className="globalnav-image-compact">
                    <svg
                      height={48}
                      viewBox="0 0 17 48"
                      width={17}
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="m13.4575 16.9268h-1.1353a3.8394 3.8394 0 0 0 -7.6444 0h-1.1353a2.6032 2.6032 0 0 0 -2.6 2.6v8.9232a2.6032 2.6032 0 0 0 2.6 2.6h9.915a2.6032 2.6032 0 0 0 2.6-2.6v-8.9231a2.6032 2.6032 0 0 0 -2.6-2.6001zm-4.9575-2.2768a2.658 2.658 0 0 1 2.6221 2.2764h-5.2442a2.658 2.658 0 0 1 2.6221-2.2764zm6.3574 13.8a1.4014 1.4014 0 0 1 -1.4 1.4h-9.9149a1.4014 1.4014 0 0 1 -1.4-1.4v-8.9231a1.4014 1.4014 0 0 1 1.4-1.4h9.915a1.4014 1.4014 0 0 1 1.4 1.4z" />
                    </svg>
                  </span>
                </a>
                <span
                  className="globalnav-bag-badge"
                  aria-hidden="true"
                >
                  <span className="globalnav-bag-badge-separator" />
                  <span className="globalnav-bag-badge-number">0</span>
                  <span className="globalnav-bag-badge-unit">+</span>
                </span>
              </div>
              <div
                id="globalnav-submenu-bag"
                className="globalnav-flyout globalnav-submenu"
                aria-labelledby="globalnav-menubutton-link-bag"
              >
                <div className="globalnav-flyout-scroll-container">
                  <div className="globalnav-flyout-content globalnav-submenu-content" />
                </div>
              </div>
            </li>
          </ul>
          <div className="globalnav-menutrigger">
            <button
              id="globalnav-menutrigger-button"
              className="globalnav-menutrigger-button"
              aria-controls="globalnav-list"
              aria-label="Menu"
            >
              <svg width={18} height={18} viewBox="0 0 18 18">
                <polyline
                  id="globalnav-menutrigger-bread-bottom"
                  className="globalnav-menutrigger-bread globalnav-menutrigger-bread-bottom"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="2 12, 16 12"
                >
                  <animate
                    id="globalnav-anim-menutrigger-bread-bottom-open"
                    attributeName="points"
                    keyTimes="0;0.5;1"
                    dur="0.24s"
                    begin="indefinite"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                    values=" 2 12, 16 12; 2 9, 16 9; 3.5 15, 15 3.5"
                  />
                  <animate
                    id="globalnav-anim-menutrigger-bread-bottom-close"
                    attributeName="points"
                    keyTimes="0;0.5;1"
                    dur="0.24s"
                    begin="indefinite"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                    values=" 3.5 15, 15 3.5; 2 9, 16 9; 2 12, 16 12"
                  />
                </polyline>
                <polyline
                  id="globalnav-menutrigger-bread-top"
                  className="globalnav-menutrigger-bread globalnav-menutrigger-bread-top"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="2 5, 16 5"
                >
                  <animate
                    id="globalnav-anim-menutrigger-bread-top-open"
                    attributeName="points"
                    keyTimes="0;0.5;1"
                    dur="0.24s"
                    begin="indefinite"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                    values=" 2 5, 16 5; 2 9, 16 9; 3.5 3.5, 15 15"
                  />
                  <animate
                    id="globalnav-anim-menutrigger-bread-top-close"
                    attributeName="points"
                    keyTimes="0;0.5;1"
                    dur="0.24s"
                    begin="indefinite"
                    fill="freeze"
                    calcMode="spline"
                    keySplines="0.42, 0, 1, 1;0, 0, 0.58, 1"
                    values=" 3.5 3.5, 15 15; 2 9, 16 9; 2 5, 16 5"
                  />
                </polyline>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div id="globalnav-curtain" className="globalnav-curtain" />
      <div id="globalnav-placeholder" className="globalnav-placeholder" />
    </div>
  );
}

export default Header;