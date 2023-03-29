import React, { useContext } from "react"
import { ContactContext } from "./App";

function ChannelStatistics() {

  const {contacts} = useContext(ContactContext);
  const lastChannelOption = contacts[contacts.length - 1].channelOption;
  return (
    <p  data-testid="statistics">
      Count of channels: {contacts.length}<br />
      {(lastChannelOption)
        ? `your last channel is: ${lastChannelOption}`
        : ""
      }
    </p>
  )
}

export default ChannelStatistics