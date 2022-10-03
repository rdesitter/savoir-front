// import : scss variables
import variables from '../../styles/variables.module.scss';

/**
 * Create a logo component with the right color
 * @returns Logo with primary-color
 */
function Logo() {
  const { primaryColor } = variables;
  return (
    <svg width="136" height="54" viewBox="0 0 136 54" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.9981 37.3413C14.4052 37.3413 12.8787 37.1327 11.4186 36.7156C9.95842 36.2794 8.78272 35.72 7.89146 35.0373L9.4559 31.5671C10.3092 32.1739 11.3143 32.6764 12.471 33.0747C13.6467 33.4539 14.8319 33.6436 16.0266 33.6436C16.9368 33.6436 17.6669 33.5582 18.2168 33.3876C18.7857 33.1979 19.2029 32.9419 19.4683 32.6196C19.7338 32.2972 19.8666 31.9274 19.8666 31.5102C19.8666 30.9793 19.658 30.5621 19.2408 30.2587C18.8236 29.9363 18.2737 29.6803 17.591 29.4907C16.9083 29.2821 16.1498 29.0924 15.3155 28.9218C14.5001 28.7321 13.6752 28.5046 12.8408 28.2391C12.0254 27.9736 11.2763 27.6323 10.5937 27.2151C9.91101 26.7979 9.35161 26.248 8.91546 25.5653C8.49827 24.8827 8.28968 24.0104 8.28968 22.9484C8.28968 21.8107 8.59309 20.7772 9.1999 19.848C9.82568 18.8998 10.7549 18.1508 11.9875 17.6009C13.239 17.032 14.8035 16.7476 16.6808 16.7476C17.9323 16.7476 19.1649 16.8993 20.3786 17.2027C21.5922 17.4871 22.6636 17.9233 23.5928 18.5111L22.1706 22.0098C21.2414 21.4788 20.3122 21.0901 19.383 20.8436C18.4538 20.5781 17.5436 20.4453 16.6523 20.4453C15.7611 20.4453 15.031 20.5496 14.4621 20.7582C13.8932 20.9668 13.4855 21.2418 13.239 21.5831C12.9925 21.9055 12.8692 22.2847 12.8692 22.7209C12.8692 23.2329 13.0778 23.6501 13.495 23.9724C13.9122 24.2758 14.4621 24.5224 15.1448 24.712C15.8275 24.9016 16.5765 25.0913 17.3919 25.2809C18.2263 25.4705 19.0512 25.6886 19.8666 25.9351C20.7009 26.1816 21.4595 26.5135 22.1421 26.9307C22.8248 27.3479 23.3747 27.8978 23.7919 28.5804C24.2281 29.2631 24.4461 30.1259 24.4461 31.1689C24.4461 32.2877 24.1332 33.3117 23.5075 34.2409C22.8817 35.1701 21.943 35.9191 20.6915 36.488C19.4589 37.0569 17.8944 37.3413 15.9981 37.3413ZM63.657 37L55.0668 17.0889H60.0446L67.5539 34.7244H64.6241L72.2472 17.0889H76.8268L68.2081 37H63.657ZM87.5115 37.3413C85.9375 37.3413 84.4774 37.0853 83.131 36.5733C81.8036 36.0613 80.6469 35.3407 79.6608 34.4116C78.6937 33.4824 77.9352 32.392 77.3852 31.1404C76.8543 29.8889 76.5888 28.5236 76.5888 27.0444C76.5888 25.5653 76.8543 24.2 77.3852 22.9484C77.9352 21.6969 78.7032 20.6065 79.6892 19.6773C80.6753 18.7481 81.8321 18.0276 83.1595 17.5156C84.4869 17.0036 85.9281 16.7476 87.483 16.7476C89.0569 16.7476 90.4981 17.0036 91.8066 17.5156C93.134 18.0276 94.2812 18.7481 95.2484 19.6773C96.2344 20.6065 97.0024 21.6969 97.5524 22.9484C98.1023 24.181 98.3772 25.5464 98.3772 27.0444C98.3772 28.5236 98.1023 29.8984 97.5524 31.1689C97.0024 32.4204 96.2344 33.5108 95.2484 34.44C94.2812 35.3502 93.134 36.0613 91.8066 36.5733C90.4981 37.0853 89.0664 37.3413 87.5115 37.3413ZM87.483 33.416C88.3743 33.416 89.1897 33.2643 89.9292 32.9609C90.6878 32.6575 91.3515 32.2213 91.9204 31.6524C92.4892 31.0836 92.9254 30.4104 93.2288 29.6329C93.5512 28.8554 93.7124 27.9926 93.7124 27.0444C93.7124 26.0963 93.5512 25.2335 93.2288 24.456C92.9254 23.6785 92.4892 23.0053 91.9204 22.4364C91.3704 21.8676 90.7162 21.4314 89.9577 21.128C89.1992 20.8246 88.3743 20.6729 87.483 20.6729C86.5918 20.6729 85.7669 20.8246 85.0084 21.128C84.2688 21.4314 83.6146 21.8676 83.0457 22.4364C82.4768 23.0053 82.0312 23.6785 81.7088 24.456C81.4054 25.2335 81.2537 26.0963 81.2537 27.0444C81.2537 27.9736 81.4054 28.8364 81.7088 29.6329C82.0312 30.4104 82.4673 31.0836 83.0172 31.6524C83.5861 32.2213 84.2498 32.6575 85.0084 32.9609C85.7669 33.2643 86.5918 33.416 87.483 33.416ZM101.414 37V17.0889H106.022V37H101.414ZM110.32 37V17.0889H118.939C120.722 17.0889 122.258 17.3828 123.547 17.9707C124.836 18.5396 125.832 19.3644 126.534 20.4453C127.235 21.5262 127.586 22.8157 127.586 24.3138C127.586 25.7929 127.235 27.0729 126.534 28.1538C125.832 29.2157 124.836 30.0311 123.547 30.6C122.258 31.1689 120.722 31.4533 118.939 31.4533H112.88L114.928 29.4338V37H110.32ZM122.978 37L118 29.7751H122.921L127.956 37H122.978ZM114.928 29.9458L112.88 27.784H118.683C120.105 27.784 121.167 27.4806 121.869 26.8738C122.57 26.248 122.921 25.3947 122.921 24.3138C122.921 23.2139 122.57 22.3606 121.869 21.7538C121.167 21.147 120.105 20.8436 118.683 20.8436H112.88L114.928 18.6533V29.9458Z" fill="black" />
      <rect x="31" y="17" width="18" height="20" fill={primaryColor} />
    </svg>

  );
}

export default Logo;