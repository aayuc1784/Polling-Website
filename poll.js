// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDocgi7fDUPxuerhGrl0dcoVCtowM9jGVs",
    authDomain: "login-page-mini-insta.firebaseapp.com",
    projectId: "login-page-mini-insta",
    storageBucket: "login-page-mini-insta.appspot.com",
    messagingSenderId: "634135320881",
    appId: "1:634135320881:web:3c4de66a75e06531c3f810",
    measurementId: "G-5L3R0FMEJ6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  import { user } from './signup';
  import { updatePoll } from './polls';
  import './style3.css';
  import React from 'react';
  import React, {useEffect, useState} from 'react';
  import { HorizontalBar , Pie, Bar} from 'react-chartjs-2';
  import { Typography, Input, Button, Switch, Modal } from 'antd';
  import {Link} from "react-router-dom";
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'
  import {TwitterIcon, TwitterShareButton, WhatsappShareButton, WhatsappIcon, FacebookIcon, FacebookShareButton} from "react-share";
  import { ShareAltOutlined , LogoutOutlined} from '@ant-design/icons'
  import { Home } from './home';

  
    const Poll = (props) => {
    const id = props.match.params.id;
    
    const [label, setLabel] = useState([]);
    const [expiry, setExpiry] = useState(false);
    const [poll, setPoll] = useState(null);
    const [modal, setModal] = useState(false);
    const [pollData, setPollData] = useState([]);
    const [index, setIndex] = useState(-1);
    const handleURL = ()=>{
        navigator.clipboard.writeText("https://login-page-mini-insta.web.app/" + poll.id);
        toast.success("URL copied to clipboard")
    }
    const showModal = () => {
        setModal(!modal);
      };
    const handleClick = (index)=>{
        setIndex(index);
      let x = poll;
      if(!x.votes[uid])
      {
        x.options.forEach((option)=>{
          if(option.index==index)
          option.count +=1;
      })
      }
      else if(x.votes[uid]!=index)
      {
        x.options.forEach((option)=>{
          if(option.index==(x.votes[uid]))
          {
            option.count-=1;
          }
          else if(option.index==index)
          {
            option.count+=1;
          }
        })
      }
          
          x.votes[uid] = index;
          updatePoll(x);
        
    }
    const handleLogout  = ()=>{
      firebase.auth().signOut().then(function() {
        }).catch(function(error) {
         
        });
  }
   useEffect(()=>{
       const docRef =  firestore.doc(`/polls/${id}`);
        const unsubscribe = docRef.onSnapshot((document)=>{
            if(document.exists)
            {   setPoll(document.data());
                let x=[], y=[];
              if(document.data().expire)
              {
                if((new Date().getTime()/1000)>=document.data().date.seconds)
                setExpiry(true);
              }
                document.data().options.forEach((option)=>{
                    x.push(option.title);
                    y.push(option.count)
                })
                if(document.data().votes && document.data().votes[uid])
                {
                    setIndex(document.data().votes[uid]);
                }
                setLabel(x);
                setPollData(y);
                
            }
            else
            {
              props.history.push("/not_found");
            }
        })
    }, [])

  
      
    const shareUrl = 'http://github.com';
    const data = {

        labels :label,
        datasets: [
          {
            label: 'Number of Votes',
            data: pollData,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      }
    
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                precision:0,
                fontFamily:"Mulish",
                fontStyle: '500'
              },
              barPercentage:"0.4"
            },
       
           
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                precision:0,
                fontFamily:"Mulish",
                fontStyle:"500"
              },
            },
          ],
        },
        legend:{
            labels:{
                fontFamily: "Mulish"
            },
        },
       
        maintainAspectRatio: false
      
    }

if(!poll)
return( <div
style={{
  width: "100%",
  display: "flex",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  zIndex: "23444898429"
}}
>
</div>)
    return (
        <div>
          <div className="logout_grid">
            <div>
                <h1 className="head_title animate__animated animate__fadeIn">{poll.title} </h1>
                </div>
                <div>
                <Button type="primary" onClick={handleLogout} className="btn_logout"> Logout <LogoutOutlined /></Button>
                </div>
                </div>
                <Link to="/"><Button type="primary" className="submit-btn" >Create Poll</Button></Link>
                <br/>
                <ToastContainer newestOnTop autoClose={2000}/>
             <div className="flex">
             <div className="options_div animate__animated animate__fadeInLeft">    
                {expiry ? (poll.options.map((option)=>{
                           if(option.index!=index)
                  return (
                    <div className="poll_live_expire">
                      {option.title}
                    </div>
                  )
                  else
                  return(
                    <div className="poll_live_expire_selected">
                    {option.title}
                  </div>
                  )
                })) :  (poll.options.map((option)=>
                {
                    if(option.index!=index)
                    return(
                        <div className="poll_live" onClick={()=>handleClick(option.index)}>
                        {option.title}
                    </div>
                    )
                    else
                    return(
                        <div className="poll_live_selected " onClick={()=>handleClick(option.index)}>
                        {option.title}
                    </div>
                    )
                }
                   
                ))}
             </div>
{index!=-1 && ( <div className="graph animate__animated animate__fadeInRight">
             <HorizontalBar data={data}  options={options} />
        </div>)}
            
            </div>
      <div className="share_icons animate__animated animate__fadeIn">
          <h3>Share this Poll <ShareAltOutlined /></h3>
        <TwitterShareButton
            url={`https://login-page-mini-insta.web.app/${poll.id}`}
            title={`Vote to this poll titled "${poll.title}"  generated using Insta Poll\n`}
            className="share_icon"
          >
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton
             url={`https://login-page-mini-insta.web.app/${poll.id}`}
             title={`Vote to this poll titled "${poll.title}"  generated using Polling Website`}
            separator=":: "
            className="share_icon"
  
          >
            <WhatsappIcon size={32} round  />
          </WhatsappShareButton>
          <FacebookShareButton
            url={`https://login-page-mini-insta.web.app/${poll.id}`}
            title={`Vote to this poll titled "${poll.title}"  generated using Polling Website`}
            className="share_icon"
       
          >
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <br/>
          <Input value={`https://login-page-mini-insta.web.app/${poll.id}`} style={{width:"15rem"}} disabled/>
          <Button type="primary" onClick={handleURL}>Copy URL</Button>
          <Modal
          visible={modal}
          onOk={showModal}
          onCancel = {showModal}
                style={{textAlign:"center"}}
        >
            <QRCode value={`https://login-page-mini-insta.web.app/${poll.id}`} style={{height:"12rem", width:"12rem"}}  />
             </Modal>
          </div>
        </div>
    )
}

export default Poll