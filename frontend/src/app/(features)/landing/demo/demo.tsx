import "./demo.css";
import "./demoMQ.css";

import { IconArrowDown,  IconShield} from "@tabler/icons-react";

import DemoFunction from "./_demoFunction/demoFunction";


const Demo = () => {
return (
    <div className="demo">
      <div className="demo-box">   
        <div className="demo-box-pointer">
          <p  className="demo-box-pointer-regular">Give us a shot!</p>
          <div className="demo-box-pointer-down">
            <IconArrowDown size={"24px"} color="#00889a" />
            <p>Try Our Demo</p>
          </div>
          
          
        </div>  

        <div className="demo-box-in">
          <div className="demo-box-in-toggle">
          </div>

          <div className="demo-box-in-main">  
            {/* demo content here */}
            {/* <p>demo</p> */}
            <DemoFunction />




          </div>

          <div className="demo-box-in-toggle">
            <div className="demo-box-in-toggle-bg">
              {/* <div className="demo-box-in-toggle-bg-user">
                <div className="demo-box-in-toggle-bg-user-icon">
                  <User size={24} color="#00889a" />
                </div>                
                <p>User</p>
              </div> */}
              <div className="demo-box-in-toggle-bg-user">
                <div className="demo-box-in-toggle-bg-user-icon">
                  <IconShield size={24} color="#00889a" />
                </div>                
                <p>Admin</p>
              </div>
              {/* <button className="demo-box-in-toggle-bg-admin">
                <Shield size={24} color="#00889a" />
                <p>Admin</p>
              </button> */}
            </div>

            
          </div>
        </div> {/* demo-box-in */}
      </div> {/* demo-box */}
    </div>
  );
};

export default Demo;