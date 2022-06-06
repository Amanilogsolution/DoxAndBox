import './successmodal.css';
import Tick from '../../assets/greentick.png';

function Sucessmodal() {
    return (
        <>
            <div className="successmodal">
                <div className='outersuccess'>
                    <div  className='mt-3'>
                        <img src={Tick} alt=" tick" style={{height:"150px",width:"150px",marginLeft:"50%",transform:"translate(-50%)"}}/>
                    </div>
                    <div>
                        <h3 style={{textAlign:"center"}}>Data succfully Saved...</h3>
                    </div>
                    <div style={{marginTop:"40px"}}>
                        <button className='btn btn-success float-right mr-5' onClick={()=>window.location.href='/Dashboard'}>Done</button>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Sucessmodal;