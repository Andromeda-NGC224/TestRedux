import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from '../redux/store'
import {useState} from 'react'



export default function Balance() {
    const balance = useSelector((state) => state.balance.value)
    const dispatch = useDispatch()
    
  const [value, setValue] = useState(``);
  const handleInputChange = (e) => {
        setValue(e.target.value);
    };
  

  return (
    <div>
          <p>Balance: { balance}</p>
      <input
              type="number"
              value={value}
              onChange={handleInputChange}
         />
      <button onClick={()=>dispatch(deposit(Number(value)))}>Deposit credits</button>
      <button onClick={()=>dispatch(withdraw(Number(value)))}>Withdraw credits
      </button>
    </div>
  );
}