import StyledMessageLi from '../../styles/pages/message/MessageLi-styled';

const MessageLi = () => {
  return (
    <StyledMessageLi>
      <div className='profilePic'>
        <img></img>
      </div>
      <div className='center'>
        <div className='name'>이름</div>
        <div className='message'>메시지</div>
      </div>
      <div className='right'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='8'
          height='30'
          viewBox='0 0 8 30'
          fill='none'
        >
          <path
            d='M0 15C0 15.9946 0.395089 16.9484 1.09835 17.6516C1.80161 18.3549 2.75544 18.75 3.75 18.75C4.74456 18.75 5.69839 18.3549 6.40165 17.6516C7.10491 16.9484 7.5 15.9946 7.5 15C7.5 14.0054 7.10491 13.0516 6.40165 12.3483C5.69839 11.6451 4.74456 11.25 3.75 11.25C2.75544 11.25 1.80161 11.6451 1.09835 12.3483C0.395089 13.0516 0 14.0054 0 15ZM0 3.75C0 4.74456 0.395089 5.69839 1.09835 6.40165C1.80161 7.10491 2.75544 7.5 3.75 7.5C4.74456 7.5 5.69839 7.10491 6.40165 6.40165C7.10491 5.69839 7.5 4.74456 7.5 3.75C7.5 2.75544 7.10491 1.80161 6.40165 1.09835C5.69839 0.395088 4.74456 0 3.75 0C2.75544 0 1.80161 0.395088 1.09835 1.09835C0.395089 1.80161 0 2.75544 0 3.75ZM0 26.25C0 27.2446 0.395089 28.1984 1.09835 28.9016C1.80161 29.6049 2.75544 30 3.75 30C4.74456 30 5.69839 29.6049 6.40165 28.9016C7.10491 28.1984 7.5 27.2446 7.5 26.25C7.5 25.2554 7.10491 24.3016 6.40165 23.5983C5.69839 22.8951 4.74456 22.5 3.75 22.5C2.75544 22.5 1.80161 22.8951 1.09835 23.5983C0.395089 24.3016 0 25.2554 0 26.25Z'
            fill='#6B6B6B'
          />
        </svg>
      </div>
    </StyledMessageLi>
  );
};

export default MessageLi;
