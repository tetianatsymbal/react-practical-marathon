import React, { memo } from 'react'
import { IconButton } from "@mui/material";
import stylescenter from "./ContactItem.module.css";

const options = [
  { value: "none", label: "" },
  { value: "viber", label: "Viber" },
  { value: "telegram", label: "Telegram" },
  { value: "messenger", label: "Messenger" },
  { value: "sms", label: "SMS" },
];

const ContactItem = memo(({ index,
                            handleChanelChange,
                            handleDetailsChange,
                            handleDeleteClick,
                            channelOption,
                            details
                          }) => {
  
  console.log("child render", index)

  return (
    <div className={stylescenter.fullChannelControll}>
      <div className={stylescenter.channelAndChannel} >
        <p className={stylescenter.channelOfConntection}>
          Канал зв'язку
        </p>
        <select
          className={stylescenter.selecterOptions}
          name="optionSelected"
          defaultValue={channelOption}
          onChange={(e)=>handleChanelChange(index, e)}
        >
          {options.map((el) => (
            <option key={el.value} value={el.value}>
              {el.label}
            </option>
          ))}
        </select>
      </div>
      <div className={stylescenter.detailsAndInputAndDelete}>
        <p className={stylescenter.channelOfConntection}>
          Деталі
        </p>
        <textarea
          data-testid="details"
          maxLength="100"
          rows="2"  
          defaultValue={details}
          className={stylescenter.detailsChannelInput}          
          placeholder="введіть телефон або @username"
          onChange={(e)=>handleDetailsChange(index, e)}
        />
        <div className={stylescenter.removeButtons}>
          {index !== 0 && (
            <span>
              <IconButton onClick={() => handleDeleteClick(index) }>
                <img src="bin.svg" alt="bin logo" />
                <span className={stylescenter.removeButtonText}>
                  Видалити канал
                </span>
              </IconButton>
            </span>
          )}
        </div>
      </div>
    </div>
  )
})

export default ContactItem;