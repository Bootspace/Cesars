import React from 'react'

const useCountdown = (tarTime) => {
  const countdownDate = new Date(tarTime).getTime();

  const [countDown, setCountDown] = React.useState(countdownDate - new Date().getTime());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countdownDate - new Date().getTime());
    }, 1000);
    return () => clearInterval(interval);
  }, [countdownDate]);

  return getReturnData(countDown)
}

const getReturnData = (countDown) => {
  //calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  return [days, hours, minutes, seconds];
}



export {useCountdown}