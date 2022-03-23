import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;

  aside {
    position: absolute;
    height: 100%;
    left: 0%;
    right: 58.73%;
    top: 0%;
    bottom: 0%;
  }

  .container {
    width: 47.49rem;
    height: 59.37rem;
    position: absolute;
    left: 38.12rem;
    top: 0;

    main {
      width: 47.49rem;
      height: 55.11rem;

      .form-register {
        width: 33.43rem;
        height: 37.49rem;

        position: absolute;
        left: 7.02rem;
        top: 8.81rem;

        .header {
          height: 5.37rem;
          color: #27272E;
          h1 {
            height: 2.37rem;
            line-height: 2.37rem;
            font-size: 1.74rem;
            font-weight: 600;
          }
          p {
            height: 1.62rem;
            line-height: 1.62rem;
            font-weight: 400;
          }
        }

        form {
          .input-default {
            margin-top:1.49rem;
            width: 33.433rem;
            height: 4.43rem;
            font-weight: 400;
            font-size: 0.87rem;
            color: #425466;
            input {
              padding-left: 0.49rem;
              margin-top: 0.49rem;
              color: rgba(50, 50, 60, 0.5);
              font-size: 0.93rem;
              font-weight: 500;
              height: 2.86rem;
              width: 33.43rem;
              border-radius: 0.36rem;
              border: none;
              transition: 0.2s ease;
              filter: drop-shadow(0 0.003rem 0.025rem rgba(50, 50, 71, 0.1))
                      drop-shadow(0.064rem 0.063rem 0.163rem rgba(50, 50, 71, 0.3));
              &:focus {
                filter: drop-shadow(0 0.07vw 0.14vw rgba(50, 50, 71, 1))
                        drop-shadow(0 0 0.07vw rgba(50, 50, 71, 1));
                color: rgba(0, 0, 0, 1);
              }
            }
          }

          .input-name {
            margin-top: 2.9rem;
          }
          .input-date-birth {
          }
          .input-date-graphic {
            font-weight: 700;
          }
        }

        .supplementary-form {
          h3 {
            margin-top: 1.18rem;
            padding-bottom: 0;
            margin-bottom: 0;
            color: #425466;
            font-weight: 700;
            font-size: 0.87rem;
            line-height: 1.05rem;
          }

          .input-group {
            margin-top: 0;
            padding-top: 0;
          }
          .input-group-default {
            margin: 1rem 1.1rem 0.9rem 0;
            height: 3.43rem;
            border: transparent;
            font-size: 1rem;
            font-weight: 400;
            width: 4.58rem;
            color: #000;
            background: #fff;
            border-radius: 0.37rem;
            filter: drop-shadow(0 0.003rem 0.025rem rgba(50, 50, 71, 0.0))
                    drop-shadow(0.064rem 0.063rem 0.163rem rgba(50, 50, 71, 0.3));
            cursor: pointer;
          }
          .input-group-6 {
            margin: 1rem 0 0.9rem 0;
          }

          .form-data-params {
            margin-top: 2rem;             
            width: 33.81rem;
            height: 13.12rem;
            border: 0.17rem solid rgba(50, 50, 71, 0.1);
            border-radius: 1rem;

            #btn-data-params {
            position: relative;
            width: 5.37rem;
            height: 1.62rem;
            border-radius: 0.25rem;
            background: #E1E8FF;
            color: #4C6FFF;
            font-weight: 600;
            filter: none;

            left: 26.4rem;
            top: 5.5rem;

            img {
              margin-left: 0.3rem;
            }

            &:hover {
              filter: brightness(0.96);
            }
          }
          }
          .input-data-params {
            position: relative;
            width: 8.12rem;
            border: none; 
            border-radius: 0.37rem;
            filter: drop-shadow(0 0.003rem 0.025rem rgba(50, 50, 71, 0.1))
                    drop-shadow(0.064rem 0.063rem 0.163rem rgba(50, 50, 71, 0.3));
            &:focus {
              filter: drop-shadow(0 0.06rem 0.12rem rgba(50, 50, 71, 1))
                      drop-shadow(0 0 0.06rem rgba(50, 50, 71, 1));
              color: rgba(0, 0, 0, 1);
            }

          }
          .label-data-params {
            font-size: 0.85rem;
            font-weight: 700;
            line-height: 2.25rem;
          }

          .bpm {
            position: relative;
            top: 2.18rem;
            left:1.5rem;
            width: 21.18rem;
            height: 2.25rem;
            display: flex;


            img {
              padding-right: 0.62rem;
            }

            input {
              left: 7.5rem;
            }
          }

          .blood-pressure {
            position: relative;
            top: 3.43rem;
            left: 1.62rem;
            width: 30.31rem;
            height: 2.25rem;
            display: flex;

            img {
              padding-right: 0.62rem;
            }

            input {
              left: 0.9rem;
            }
            .secondary-input {
              left: 2.7rem;
            }
          }
        }
        #button-submit {
          left: 9.47rem;
          top: 6.01rem;
          position: relative;
        }
      }
    }
  }

`;