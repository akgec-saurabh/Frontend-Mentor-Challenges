import React, { useState } from "react";

import NewsLetterCard from "../NewsLetterCard/NewsLetterCard";
import Success from "../Success/Success";
import { AnimatePresence } from "framer-motion";

function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribe, setSubscribe] = useState(false);

  //ON SUBSCRIBE
  const onSubscribeHandler = (email) => {
    console.log(email);
    setEmail(email);
    setSubscribe(true);
  };

  //ON DISMISS
  const onDismissHandler = () => {
    setSubscribe(false);
  };

  return (
    <>
      <AnimatePresence>
        {!subscribe && <NewsLetterCard onSubscribe={onSubscribeHandler} />}
        {subscribe && <Success onDismiss={onDismissHandler} email={email} />}
      </AnimatePresence>
    </>
  );
}

export default Newsletter;
