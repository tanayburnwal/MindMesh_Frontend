import React,{useState} from 'react'
import gender from '../images/gender.jpeg'
import './form.css'
import bmi from '../images/bmi.jpeg'
import children from '../images/childern.jpeg'
import ciggrets from '../images/ciggrets.jpeg'
import region from '../images/regiion.gif'
import axios from 'axios'
const Form = () => {
    const [loading, setLoading]  = useState(false)
    const [formData,setFormData] = useState({
        age : 10,
        gender : 'Male',
        bmi : 25.9,
        children : 0,
        smoker : 'No',
        region : 'southwest'
    })
    const [recievedData,setreceivedData] = useState()
    const setAge = (e)=>{
        setFormData((prev)=>{
            return({...prev,age : parseInt(e.target.value)})
        })
    }
    const setGender = (e)=>{
        setFormData((prev)=>{
            return({...prev,gender : e.target.value})
        })
    }
    const setBmi = (e)=>{
        setFormData((prev)=>{
            return({...prev,bmi: parseFloat(e.target.value)})
        })
    }
    const setChildern = (e)=>{
        setFormData((prev)=>{
            return({...prev,children : e.target.value})
        })
    }
    const setSmoker = (e)=>{
        setFormData((prev)=>{
            return({...prev,smoker: e.target.value})
        })
    }
    const setRegion = (e)=>{
        setFormData((prev)=>{
            return({...prev,region : e.target.value})
        })
    }
    console.log(formData)
    const handleSubmit = async(e)=>{
        e.preventDefault();
        setLoading(true)
        const data = {
            age : formData.age,
            gender : formData.gender,
            bmi : formData.bmi,
            children : formData.children,
            smoker : formData.smoker,
            region : formData.region
        }
        console.log(data)
        const res = await axios.post('https://backend-ojlb.onrender.com/api',data);
        setreceivedData(res.data);
        setLoading(false)
        console.log(res)
    }
    return (
        <div className='form_component'>
        <form className='form' onSubmit={handleSubmit}>
            <h1 className='form_heading'>What is your age:</h1>
            <input type="range" min={0} max={90} step={1} className='input' onChange={setAge}/>
            <img src={`${gender}`} className='image'/>
            <h1 className='form_heading'>What is your Gender:</h1>
            <select className='select' onChange={setGender}>
                <option value='Male'>
                        Male
                </option>
                <option value = 'Female'>
                        Female
                </option>
            </select>
            <img src={`${bmi}`}/>
            <h1 className='form_heading'>What is your BMI:</h1>
            <input type="number"  className='number_input' value={formData.bmi} onChange={setBmi}/>
            <img src={`${children}`}/>
            <h1 className='form_heading'>How Many childern you have:</h1>
            <input type="radio" id="age1" name="children" value={0} onChange={setChildern}/>
            <label for="age1">0</label><br/>
            <input type="radio" id="age2" name="children" value={1} onChange={setChildern}/>
            <label for="age2">1</label><br/>  
            <input type="radio" id="age3" name="children" value={2} onChange={setChildern}/>
            <label for="age3">2</label><br/>
            <input type="radio" id="age2" name="children" value={3} onChange={setChildern}/>
            <label for="age2">3</label><br/> 
            <input type="radio" id="age2" name="children" value={4} onChange={setChildern}/>
            <label for="age2">4</label><br/> 
            <input type="radio" id="age2" name="children" value={5} onChange={setChildern}/>
            <label for="age2">5</label><br/> 
            <img src={`${ciggrets}`} style={{marginTop:15}}/>
            <h1 className='form_heading'>Are you a smoker?</h1>
            <select className='select' onChange={setSmoker}>
                    <option value='Yes'>
                        Yes
                    </option>
                    <option value='No'>
                        No
                    </option>
                </select>
                <img src={`${region}`}/>
                <h1 className='form_heading'>From which region are you?</h1>
                <select className='select' onChange={setRegion}>
                    <optio value='southwest'>
                        South west
                    </optio>
                    <option value='southeast'>
                        Southe east
                    </option>
                    <option value='northeast'>
                        North east
                    </option>
                    <option value='northwest'>
                        North west
                    </option>
                </select>
                <button type='submit' className='button'>Predict</button>
                <div>
                {loading ? 
                        <div>calulating the cost......</div>
                        :
                        recievedData?
                        <div>The Estimated money required is {recievedData}</div>:
                        <div></div>
                }
                </div>
            </form>

        </div>
    )
}

export default Form
