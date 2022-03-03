import React from 'react';
import './Card.css';


// Composition လုပ်ခြင်း၊ Custom Component ကို Warpper Container အဖြစ်ပြောင်းခြင်း
function Card(props) {

  // ဝင်လာတဲ့ JSX Code တွေမှာလည်း CSS Class တွေထည့်ပေးဖို့ လိုတယ်။ ရှေ့က default card ရဲ့ နောက်မှာ space မမေ့နဲ့။ ပြီးရင် props ကနေ တဆင့် ဝင်လာတဲ့ className ကို ထည့်ပေးလိုက်
  let classes = 'card ' + props.className;

  // Composition ရဲ့ အသက်က props.children ပဲ။ Wrapper ဖြစ်တဲ့အတွက် သူ့အထဲကို ထည့်မဲ့ JSX Code တွေကို လက်ခံရမည့် နေရာ
  return <div className={classes}>{props.children}</div>
}

export default Card;