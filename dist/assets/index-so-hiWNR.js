(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const Uc={song:{title:"CRYOUT",shortTitle:"CRYOUT",artist:"ORIGINAL TRACK",bpm:100,duration:138.1,chartEnd:133.5,beatOffset:.535,difficulty:"ADVANCED",laneLabel:"4 · 6 · 8",fadeStart:131.4,fadeEnd:133.4},sections:[{name:"SIGNAL",start:3.535,end:12.535,keys:4,color:"#5ee7ff",accent:"#8f7bff",energy:.18,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.8,bloom:.55,spin:.03,motion:"fan",motionAmp:.045,motionSpeed:.45,motionPitch:.02,city:0},{name:"ASCENT",start:12.535,end:22.735,keys:4,color:"#57d9ff",accent:"#9d7bff",energy:.38,rotY:.05,rotZ:-.02,tilt:.015,spread:1.03,y:.05,camZ:16.6,camY:6.6,bloom:.65,spin:.05,motion:"fan",motionAmp:.075,motionSpeed:.55,motionPitch:.035,city:0},{name:"CURRENT",start:22.735,end:41.335,keys:6,color:"#42e0d0",accent:"#c46bff",energy:.62,rotY:-.1,rotZ:.03,tilt:-.02,spread:1.06,y:.1,camZ:15.9,camY:6.4,bloom:.8,spin:.08,motion:"wave",motionAmp:.1,motionSpeed:.7,motionPitch:.05,city:0},{name:"SURGE",start:41.335,end:64.135,keys:8,color:"#ff5fd2",accent:"#58e6ff",energy:.82,rotY:.16,rotZ:-.05,tilt:.03,spread:1.1,y:.16,camZ:15.1,camY:6.2,bloom:.92,spin:.12,motion:"slope",motionAmp:.15,motionSpeed:.85,motionPitch:.075,city:0},{name:"DRIFT",start:64.135,end:75.535,keys:6,color:"#8f9dff",accent:"#ff7bd5",energy:.3,rotY:-.04,rotZ:.02,tilt:.06,spread:.94,y:.45,camZ:17.6,camY:7.1,bloom:.55,spin:.04,motion:"tiltL",motionAmp:.11,motionSpeed:.5,motionPitch:.04,city:0},{name:"PRESSURE",start:75.535,end:84.535,keys:8,color:"#ffa14a",accent:"#ff4fc8",energy:.86,rotY:-.18,rotZ:.06,tilt:-.03,spread:1.08,y:.22,camZ:14.9,camY:6.1,bloom:.95,spin:.14,motion:"zigzag",motionAmp:.145,motionSpeed:1,motionPitch:.07,city:0},{name:"BREAK",start:84.535,end:87.535,keys:4,color:"#e8f4ff",accent:"#8f7bff",energy:.05,rotY:0,rotZ:0,tilt:.04,spread:.86,y:.3,camZ:19,camY:7.6,bloom:.35,spin:.02,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:0},{name:"CRYOUT",start:87.535,end:125.935,keys:8,color:"#ff4fb8",accent:"#54e8ff",energy:1,rotY:.1,rotZ:-.04,tilt:.02,spread:1.12,y:.12,camZ:14.6,camY:6,bloom:1,spin:.16,motion:"orbit",motionAmp:.175,motionSpeed:1,motionPitch:.085,city:0},{name:"AFTERGLOW",start:125.935,end:131.335,keys:4,color:"#6fa8ff",accent:"#c7a4ff",energy:.22,rotY:.02,rotZ:0,tilt:.01,spread:.92,y:.35,camZ:18.2,camY:7.2,bloom:.45,spin:.02,motion:"fan",motionAmp:.055,motionSpeed:.4,motionPitch:.02,city:0},{name:"OUTRO",start:131.335,end:133.5,keys:4,color:"#6f8fff",accent:"#c7a4ff",energy:.05,rotY:0,rotZ:0,tilt:0,spread:.9,y:.6,camZ:19.5,camY:7.8,bloom:.35,spin:.01,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:0}],notes:[{t:3.535,lane:2},{t:4.735,lane:4},{t:5.935,lane:3},{t:6.535,lane:5},{t:7.135,lane:2},{t:7.735,lane:4},{t:8.335,lane:3},{t:9.235,lane:5},{t:9.535,lane:2},{t:10.135,lane:3},{t:10.735,lane:4},{t:11.335,lane:5},{t:11.935,lane:2},{t:12.235,lane:3},{t:12.535,lane:4},{t:13.135,lane:4},{t:13.735,lane:2},{t:14.335,lane:5},{t:14.935,lane:3},{t:15.535,lane:4},{t:15.835,lane:2},{t:16.135,lane:5},{t:16.735,lane:2},{t:17.335,lane:5},{t:17.935,lane:3},{t:18.535,lane:4},{t:18.835,lane:2},{t:19.135,lane:5},{t:19.435,lane:3},{t:19.735,lane:4},{t:20.035,lane:5},{t:20.335,lane:3},{t:20.935,lane:4},{t:21.235,lane:2},{t:21.535,lane:5},{t:22.135,lane:3},{t:22.735,lane:2},{t:23.335,lane:4},{t:23.935,lane:3},{t:24.535,lane:5},{t:25.135,lane:4},{t:25.735,lane:6},{t:26.335,lane:2},{t:26.935,lane:4},{t:27.535,lane:4},{t:28.135,lane:2},{t:28.735,lane:6},{t:29.335,lane:1},{t:29.635,lane:3},{t:29.935,lane:5},{t:30.235,lane:4},{t:30.535,lane:2},{t:31.135,lane:4},{t:31.735,lane:2},{t:32.035,lane:1},{t:32.335,lane:2},{t:32.335,lane:5},{t:32.935,lane:5},{t:33.535,lane:6},{t:34.135,lane:4},{t:34.735,lane:2},{t:35.335,lane:2},{t:35.635,lane:3},{t:35.935,lane:4},{t:36.535,lane:5},{t:37.135,lane:6},{t:37.735,lane:5},{t:38.335,lane:2},{t:38.635,lane:3},{t:38.935,lane:4},{t:39.235,lane:5},{t:39.535,lane:3},{t:39.835,lane:6},{t:40.135,lane:1},{t:40.735,lane:2},{t:41.335,lane:4},{t:41.335,lane:7},{t:41.635,lane:1},{t:41.935,lane:2},{t:42.535,lane:3},{t:42.835,lane:4},{t:43.135,lane:5},{t:43.735,lane:6},{t:44.335,lane:7},{t:44.635,lane:0},{t:44.935,lane:4},{t:45.235,lane:1},{t:45.535,lane:5},{t:45.835,lane:2},{t:46.135,lane:6},{t:46.435,lane:3},{t:46.735,lane:7},{t:47.035,lane:0},{t:47.335,lane:5},{t:47.635,lane:6},{t:47.935,lane:4},{t:48.535,lane:3},{t:48.835,lane:1},{t:49.135,lane:2},{t:49.435,lane:0},{t:49.735,lane:1},{t:50.035,lane:2},{t:50.335,lane:4},{t:50.485,lane:6},{t:50.635,lane:1},{t:50.635,lane:5},{t:50.785,lane:5},{t:50.935,lane:4},{t:50.935,lane:7},{t:51.235,lane:1},{t:51.535,lane:2},{t:52.135,lane:4},{t:52.435,lane:3},{t:52.735,lane:5},{t:53.335,lane:1},{t:53.935,lane:6},{t:54.235,lane:0},{t:54.535,lane:7},{t:54.835,lane:1},{t:54.985,lane:3},{t:55.135,lane:5},{t:55.435,lane:7},{t:55.585,lane:6},{t:55.735,lane:4},{t:56.035,lane:2},{t:56.335,lane:0},{t:56.635,lane:6},{t:56.935,lane:4},{t:57.235,lane:2},{t:57.535,lane:0},{t:58.135,lane:1},{t:58.435,lane:3},{t:58.735,lane:5},{t:59.035,lane:7},{t:59.335,lane:0},{t:59.635,lane:2},{t:59.935,lane:1},{t:60.085,lane:3},{t:60.235,lane:4},{t:60.235,lane:7},{t:60.385,lane:6},{t:60.535,lane:0,type:"hold",dur:1.2},{t:60.535,lane:5},{t:60.835,lane:7},{t:61.735,lane:1},{t:62.035,lane:2},{t:62.335,lane:3},{t:62.935,lane:4},{t:63.535,lane:5},{t:63.835,lane:6},{t:64.135,lane:1,type:"hold",dur:2.4},{t:65.335,lane:5,type:"hold",dur:2.4},{t:67.735,lane:4},{t:68.335,lane:2},{t:68.935,lane:1,type:"hold",dur:2.4},{t:69.535,lane:5},{t:70.135,lane:6,type:"hold",dur:2.4},{t:71.335,lane:3},{t:72.535,lane:1},{t:73.135,lane:4},{t:73.735,lane:4},{t:74.935,lane:3},{t:75.535,lane:1},{t:75.535,lane:4},{t:76.135,lane:4},{t:76.735,lane:2},{t:77.335,lane:0},{t:77.935,lane:1},{t:78.535,lane:3},{t:79.135,lane:5},{t:79.735,lane:7},{t:80.335,lane:0},{t:80.635,lane:2},{t:80.935,lane:1},{t:81.535,lane:3},{t:81.835,lane:4},{t:82.135,lane:6},{t:82.735,lane:5},{t:83.035,lane:7},{t:83.335,lane:0},{t:83.935,lane:1},{t:84.235,lane:2},{t:87.535,lane:1},{t:87.535,lane:5},{t:87.835,lane:4},{t:88.135,lane:3},{t:88.735,lane:5},{t:89.035,lane:1},{t:89.335,lane:6},{t:89.635,lane:0},{t:89.935,lane:7},{t:90.235,lane:1},{t:90.535,lane:3},{t:90.835,lane:5},{t:91.135,lane:7},{t:91.435,lane:6},{t:91.585,lane:4},{t:91.735,lane:2},{t:92.035,lane:0},{t:92.185,lane:6},{t:92.335,lane:4},{t:92.635,lane:2},{t:92.935,lane:0},{t:93.535,lane:1},{t:93.835,lane:3},{t:94.135,lane:5},{t:94.735,lane:7},{t:95.035,lane:0},{t:95.335,lane:2},{t:95.635,lane:1},{t:95.935,lane:3},{t:96.235,lane:4},{t:96.535,lane:6},{t:96.685,lane:5},{t:96.835,lane:2},{t:96.835,lane:6},{t:96.985,lane:0},{t:97.135,lane:0},{t:97.135,lane:6},{t:97.435,lane:2},{t:97.735,lane:3},{t:98.335,lane:4},{t:98.635,lane:5},{t:98.935,lane:6},{t:99.235,lane:7},{t:99.535,lane:0},{t:99.835,lane:4},{t:100.135,lane:1},{t:100.435,lane:5},{t:100.735,lane:2},{t:101.035,lane:6},{t:101.185,lane:3},{t:101.335,lane:7},{t:101.635,lane:0},{t:101.785,lane:5},{t:101.935,lane:6},{t:102.235,lane:4},{t:102.535,lane:3},{t:103.135,lane:1},{t:103.435,lane:2},{t:103.735,lane:0},{t:104.335,lane:0},{t:104.635,lane:2},{t:104.935,lane:4},{t:105.235,lane:6},{t:105.535,lane:7},{t:105.835,lane:5},{t:106.135,lane:3},{t:106.285,lane:1},{t:106.435,lane:1},{t:106.435,lane:4},{t:106.585,lane:4},{t:106.735,lane:0,type:"hold",dur:1.2},{t:106.735,lane:3},{t:107.035,lane:5},{t:107.335,lane:1},{t:107.935,lane:6},{t:108.235,lane:0},{t:108.535,lane:7},{t:108.835,lane:1},{t:109.135,lane:3},{t:109.435,lane:5},{t:109.735,lane:7},{t:110.035,lane:6},{t:110.335,lane:4},{t:110.635,lane:2},{t:110.785,lane:0},{t:110.935,lane:6},{t:111.235,lane:4},{t:111.385,lane:2},{t:111.535,lane:0},{t:111.835,lane:1},{t:112.135,lane:3},{t:112.735,lane:5},{t:113.035,lane:7},{t:113.335,lane:0},{t:113.935,lane:2},{t:114.235,lane:1},{t:114.535,lane:3},{t:114.835,lane:4},{t:115.135,lane:6},{t:115.435,lane:5},{t:115.735,lane:7},{t:115.885,lane:0},{t:116.035,lane:2},{t:116.035,lane:6},{t:116.185,lane:2},{t:116.335,lane:0},{t:116.335,lane:6},{t:116.635,lane:4},{t:116.935,lane:5},{t:117.535,lane:6},{t:117.835,lane:7},{t:118.135,lane:0},{t:118.435,lane:4},{t:118.735,lane:1},{t:119.035,lane:5},{t:119.335,lane:2},{t:119.635,lane:6},{t:119.935,lane:3},{t:120.235,lane:7},{t:120.385,lane:0},{t:120.535,lane:5},{t:120.835,lane:6},{t:120.985,lane:4},{t:121.135,lane:3},{t:121.435,lane:1},{t:121.735,lane:2},{t:122.335,lane:0},{t:122.635,lane:1},{t:122.935,lane:2},{t:123.535,lane:4},{t:123.835,lane:6},{t:124.135,lane:7},{t:124.435,lane:5},{t:124.735,lane:3},{t:125.035,lane:1},{t:125.335,lane:2},{t:125.485,lane:4},{t:125.635,lane:3},{t:125.935,lane:2},{t:127.135,lane:4},{t:128.335,lane:3},{t:128.935,lane:5},{t:129.535,lane:2},{t:130.135,lane:4},{t:130.735,lane:2},{t:130.735,lane:5}],events:[{t:5.335,type:"pulse",power:.37},{t:5.355,type:"echo",lane:0,dir:-1,power:.58},{t:7.735,type:"pulse",power:.37},{t:10.135,type:"pulse",power:.37},{t:10.155,type:"echo",lane:1,dir:-1,power:.58},{t:12.535,type:"pulse",power:.5},{t:12.555,type:"echo",lane:0,dir:-1,power:.72},{t:14.935,type:"pulse",power:.5},{t:17.335,type:"pulse",power:.5},{t:17.355,type:"echo",lane:1,dir:-1,power:.72},{t:19.735,type:"pulse",power:.5},{t:22.135,type:"pulse",power:.5},{t:22.155,type:"echo",lane:6,dir:1,power:.72},{t:24.535,type:"pulse",power:.65},{t:24.555,type:"echo",lane:0,dir:-1,power:.88},{t:26.935,type:"pulse",power:.65},{t:29.335,type:"pulse",power:.65},{t:29.355,type:"echo",lane:7,dir:1,power:.88},{t:31.735,type:"pulse",power:.65},{t:34.135,type:"pulse",power:.65},{t:34.155,type:"echo",lane:0,dir:-1,power:.88},{t:36.535,type:"pulse",power:.65},{t:38.935,type:"pulse",power:.65},{t:38.955,type:"echo",lane:7,dir:1,power:.88},{t:41.355,type:"vibe",power:.82},{t:43.735,type:"pulse",power:.78},{t:46.135,type:"burst",lane:3,power:1.07},{t:46.135,type:"pulse",power:.78},{t:48.535,type:"pulse",power:.78},{t:50.935,type:"pulse",power:.78},{t:53.335,type:"pulse",power:.78},{t:55.735,type:"burst",lane:7,power:1.07},{t:55.735,type:"pulse",power:.78},{t:58.135,type:"pulse",power:.78},{t:60.535,type:"pulse",power:.78},{t:62.935,type:"pulse",power:.78},{t:65.335,type:"pulse",power:.45},{t:65.355,type:"echo",lane:0,dir:-1,power:.66},{t:67.735,type:"pulse",power:.45},{t:70.135,type:"pulse",power:.45},{t:70.155,type:"echo",lane:7,dir:1,power:.66},{t:72.535,type:"pulse",power:.45},{t:74.935,type:"pulse",power:.45},{t:74.955,type:"echo",lane:0,dir:-1,power:.66},{t:75.555,type:"vibe",power:.86},{t:77.335,type:"pulse",power:.81},{t:79.735,type:"burst",lane:3,power:1.1},{t:79.735,type:"pulse",power:.81},{t:82.135,type:"pulse",power:.81},{t:84.535,type:"pulse",power:.28},{t:84.555,type:"echo",lane:0,dir:-1,power:.48},{t:86.935,type:"pulse",power:.28},{t:87.555,type:"vibe",power:1},{t:89.335,type:"pulse",power:.9},{t:91.735,type:"burst",lane:3,power:1.2},{t:91.735,type:"pulse",power:.9},{t:94.135,type:"pulse",power:.9},{t:96.535,type:"pulse",power:.9},{t:98.935,type:"pulse",power:.9},{t:99.335,type:"motion",style:"wave",amp:.16,speed:1},{t:101.335,type:"burst",lane:7,power:1.2},{t:101.335,type:"pulse",power:.9},{t:103.735,type:"pulse",power:.9},{t:106.135,type:"pulse",power:.9},{t:108.535,type:"pulse",power:.9},{t:110.935,type:"burst",lane:3,power:1.2},{t:110.935,type:"pulse",power:.9},{t:111.335,type:"motion",style:"zigzag",amp:.16,speed:1},{t:113.335,type:"pulse",power:.9},{t:115.735,type:"pulse",power:.9},{t:118.135,type:"pulse",power:.9},{t:120.535,type:"burst",lane:7,power:1.2},{t:120.535,type:"pulse",power:.9},{t:122.935,type:"pulse",power:.9},{t:125.335,type:"pulse",power:.9},{t:127.735,type:"pulse",power:.39},{t:127.755,type:"echo",lane:0,dir:-1,power:.6},{t:130.135,type:"pulse",power:.39},{t:132.535,type:"pulse",power:.28},{t:132.555,type:"echo",lane:0,dir:-1,power:.48}],ghosts:[{t:3.575,lane:0,type:"sweep"},{t:3.63,lane:1,type:"sweep"},{t:3.685,lane:6,type:"sweep"},{t:3.74,lane:7,type:"sweep"},{t:8.335,lane:0,type:"bounce"},{t:8.455,lane:1,type:"bounce"},{t:8.575,lane:6,type:"bounce"},{t:8.695,lane:7,type:"bounce"},{t:12.575,lane:0,type:"sweep"},{t:12.63,lane:1,type:"sweep"},{t:12.685,lane:6,type:"sweep"},{t:12.74,lane:7,type:"sweep"},{t:17.335,lane:0,type:"bounce"},{t:17.455,lane:1,type:"bounce"},{t:17.575,lane:6,type:"bounce"},{t:17.695,lane:7,type:"bounce"},{t:22.775,lane:0,type:"sweep"},{t:22.83,lane:7,type:"sweep"},{t:27.535,lane:0,type:"bounce"},{t:27.655,lane:7,type:"bounce"},{t:64.175,lane:0,type:"sweep"},{t:64.23,lane:7,type:"sweep"},{t:68.935,lane:0,type:"bounce"},{t:69.055,lane:7,type:"bounce"},{t:84.575,lane:0,type:"sweep"},{t:84.63,lane:1,type:"sweep"},{t:84.685,lane:6,type:"sweep"},{t:84.74,lane:7,type:"sweep"},{t:89.335,lane:0,type:"bounce"},{t:89.455,lane:1,type:"bounce"},{t:89.575,lane:6,type:"bounce"},{t:89.695,lane:7,type:"bounce"},{t:125.975,lane:0,type:"sweep"},{t:126.03,lane:1,type:"sweep"},{t:126.085,lane:6,type:"sweep"},{t:126.14,lane:7,type:"sweep"},{t:130.735,lane:0,type:"bounce"},{t:130.855,lane:1,type:"bounce"},{t:130.975,lane:6,type:"bounce"},{t:131.095,lane:7,type:"bounce"},{t:131.375,lane:0,type:"sweep"},{t:131.43,lane:1,type:"sweep"},{t:131.485,lane:6,type:"sweep"},{t:131.54,lane:7,type:"sweep"},{t:136.135,lane:0,type:"bounce"},{t:136.255,lane:1,type:"bounce"},{t:136.375,lane:6,type:"bounce"},{t:136.495,lane:7,type:"bounce"}]},Ic={song:{title:"WORLD YEARNING FOR AN END",shortTitle:"WORLD YEARNING",artist:"ORIGINAL TRACK",bpm:120,duration:143.47,chartEnd:142.55,beatOffset:.04,difficulty:"HARD",laneLabel:"4 · 6",thumbFriendly:!0,fadeStart:140.8,fadeEnd:142.9},sections:[{name:"INTRO",start:.04,end:10.04,keys:4,color:"#7ec8ff",accent:"#ffb45e",energy:.16,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.6,camY:6.9,bloom:.5,spin:.03,firstNote:2.04,motion:"fan",motionAmp:.05,motionSpeed:.45,motionPitch:.02,city:1},{name:"VERSE",start:10.04,end:22.04,keys:4,color:"#66e0ff",accent:"#ff8ac8",energy:.5,rotY:.03,rotZ:-.015,tilt:.012,spread:1.02,y:.04,camZ:16.9,camY:6.7,bloom:.68,spin:.05,firstNote:10.04,motion:"wave",motionAmp:.075,motionSpeed:.6,motionPitch:.035,city:.16},{name:"BUILD",start:22.04,end:38.04,keys:6,color:"#84a6ff",accent:"#ffc46b",energy:.66,rotY:-.06,rotZ:.025,tilt:-.015,spread:1.05,y:.08,camZ:16.2,camY:6.5,bloom:.8,spin:.07,firstNote:22.04,motion:"fan",motionAmp:.1,motionSpeed:.7,motionPitch:.05,city:.12},{name:"LIFT",start:38.04,end:54.04,keys:6,color:"#b58cff",accent:"#ffa25e",energy:.8,rotY:.1,rotZ:-.04,tilt:.025,spread:1.08,y:.12,camZ:15.5,camY:6.3,bloom:.9,spin:.1,firstNote:38.04,motion:"slope",motionAmp:.13,motionSpeed:.82,motionPitch:.065,city:.2},{name:"CHORUS",start:54.04,end:70.04,keys:6,color:"#ff8f6b",accent:"#ffe27a",energy:.92,rotY:-.13,rotZ:.05,tilt:-.025,spread:1.1,y:.15,camZ:15.1,camY:6.2,bloom:.96,spin:.12,firstNote:54.04,motion:"wave",motionAmp:.15,motionSpeed:.95,motionPitch:.08,city:.16},{name:"DRIVE",start:70.04,end:86.04,keys:6,color:"#ff5f9e",accent:"#7af0ff",energy:1,rotY:.15,rotZ:-.055,tilt:.03,spread:1.12,y:.18,camZ:14.9,camY:6.1,bloom:1,spin:.14,firstNote:70.04,motion:"zigzag",motionAmp:.18,motionSpeed:1.05,motionPitch:.095,city:.24},{name:"BREAK",start:86.04,end:98.04,keys:4,color:"#d9eaff",accent:"#8f9dff",energy:.34,rotY:-.02,rotZ:.01,tilt:.05,spread:.93,y:.4,camZ:18.1,camY:7.3,bloom:.55,spin:.035,firstNote:86.04,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:.62},{name:"RETURN",start:98.04,end:122.04,keys:6,color:"#63e6d8",accent:"#ff8ac8",energy:.82,rotY:.04,rotZ:-.02,tilt:.015,spread:1.06,y:.1,camZ:15.7,camY:6.4,bloom:.88,spin:.09,firstNote:98.04,motion:"orbit",motionAmp:.14,motionSpeed:.9,motionPitch:.07,city:.14},{name:"FINAL",start:122.04,end:138.04,keys:6,color:"#ff6fc4",accent:"#ffd36b",energy:.9,rotY:-.1,rotZ:.04,tilt:-.02,spread:1.09,y:.14,camZ:15,camY:6.2,bloom:.98,spin:.13,firstNote:122.04,motion:"orbit",motionAmp:.17,motionSpeed:1,motionPitch:.085,city:.2},{name:"OUTRO",start:138.04,end:142.55,keys:4,color:"#7fa8ff",accent:"#d7c4ff",energy:.2,rotY:0,rotZ:0,tilt:.03,spread:.9,y:.3,camZ:19.2,camY:7.6,bloom:.42,spin:.02,firstNote:138.04,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:.72}],notes:[{t:2.04,lane:2},{t:3.04,lane:4},{t:4.04,lane:3},{t:5.04,lane:5},{t:6.04,lane:2},{t:6.29,lane:2,type:"hold",dur:1},{t:7.04,lane:4},{t:8.04,lane:3},{t:9.04,lane:5},{t:10.04,lane:4},{t:10.54,lane:2},{t:11.04,lane:5},{t:11.54,lane:3},{t:12.04,lane:4},{t:12.54,lane:2},{t:13.04,lane:5},{t:13.54,lane:3},{t:14.04,lane:3},{t:14.29,lane:2,type:"hold",dur:1},{t:14.54,lane:4},{t:15.54,lane:5},{t:16.04,lane:3},{t:16.54,lane:4},{t:17.04,lane:2},{t:17.54,lane:5},{t:18.04,lane:2},{t:18.29,lane:4,type:"hold",dur:1},{t:18.54,lane:5},{t:19.04,lane:3},{t:19.54,lane:4},{t:20.04,lane:2},{t:20.54,lane:5},{t:21.04,lane:3},{t:21.54,lane:4},{t:22.04,lane:1},{t:22.54,lane:4},{t:23.04,lane:2},{t:23.54,lane:5},{t:24.04,lane:3},{t:24.29,lane:6},{t:24.54,lane:1},{t:25.04,lane:4},{t:25.54,lane:4},{t:26.04,lane:3},{t:26.29,lane:2},{t:26.54,lane:1},{t:26.79,lane:6},{t:27.04,lane:5},{t:27.54,lane:4},{t:28.04,lane:3},{t:28.29,lane:4},{t:28.54,lane:6},{t:28.79,lane:2},{t:29.04,lane:4},{t:29.54,lane:3},{t:30.04,lane:5},{t:30.54,lane:4},{t:30.79,lane:6},{t:31.04,lane:3},{t:31.54,lane:5},{t:32.04,lane:2},{t:32.04,lane:4},{t:32.29,lane:2},{t:32.54,lane:6},{t:32.79,lane:1},{t:33.04,lane:3},{t:33.54,lane:5},{t:34.04,lane:5},{t:34.29,lane:6},{t:34.54,lane:4},{t:34.79,lane:2},{t:35.04,lane:1},{t:35.54,lane:3},{t:36.04,lane:5},{t:36.29,lane:6},{t:36.54,lane:1},{t:37.04,lane:5},{t:37.54,lane:2},{t:38.04,lane:2},{t:38.29,lane:4},{t:38.54,lane:3},{t:38.79,lane:5},{t:39.04,lane:4},{t:39.29,lane:6},{t:39.54,lane:2},{t:39.79,lane:4},{t:40.04,lane:5},{t:40.29,lane:2},{t:40.54,lane:6},{t:41.04,lane:1},{t:41.54,lane:3},{t:42.04,lane:5},{t:42.29,lane:4},{t:42.54,lane:2},{t:42.79,lane:4},{t:43.04,lane:2},{t:43.54,lane:1},{t:43.79,lane:3},{t:44.04,lane:5},{t:44.54,lane:6},{t:45.04,lane:4},{t:45.29,lane:2},{t:45.54,lane:3},{t:45.79,lane:5},{t:46.04,lane:4},{t:46.54,lane:5},{t:46.79,lane:6},{t:47.04,lane:5},{t:47.29,lane:2},{t:47.54,lane:3},{t:48.04,lane:4},{t:48.29,lane:5},{t:48.54,lane:3},{t:48.79,lane:6},{t:49.04,lane:1},{t:49.29,lane:2},{t:49.54,lane:4},{t:49.79,lane:5},{t:50.04,lane:3},{t:50.29,lane:5},{t:50.54,lane:4},{t:50.79,lane:3},{t:51.04,lane:2},{t:51.29,lane:1},{t:51.54,lane:3},{t:51.79,lane:5},{t:52.04,lane:1},{t:52.29,lane:4},{t:52.54,lane:2},{t:52.79,lane:5},{t:53.04,lane:3},{t:53.29,lane:6},{t:53.54,lane:1},{t:53.79,lane:4},{t:54.04,lane:1},{t:54.29,lane:3},{t:54.54,lane:5},{t:54.79,lane:6},{t:55.04,lane:4},{t:55.29,lane:2},{t:55.54,lane:1},{t:55.665,lane:2},{t:55.79,lane:3},{t:56.04,lane:2},{t:56.04,lane:4},{t:56.29,lane:5},{t:56.54,lane:6},{t:56.79,lane:5},{t:57.04,lane:2},{t:57.29,lane:3},{t:57.54,lane:4},{t:57.79,lane:5},{t:58.04,lane:3},{t:58.29,lane:6},{t:58.54,lane:1},{t:58.79,lane:2},{t:59.04,lane:4},{t:59.29,lane:5},{t:59.54,lane:3},{t:59.79,lane:6},{t:60.04,lane:4},{t:60.29,lane:3},{t:60.54,lane:2},{t:60.79,lane:1},{t:61.04,lane:3},{t:61.29,lane:5},{t:61.54,lane:4},{t:61.79,lane:3},{t:62.04,lane:2},{t:62.29,lane:5},{t:62.54,lane:3},{t:62.79,lane:6},{t:63.04,lane:1},{t:63.29,lane:4},{t:63.54,lane:2},{t:63.665,lane:3},{t:63.79,lane:5},{t:64.04,lane:1},{t:64.04,lane:2},{t:64.29,lane:1},{t:64.54,lane:6},{t:64.79,lane:5},{t:65.04,lane:4},{t:65.29,lane:3},{t:65.54,lane:2},{t:65.79,lane:1},{t:66.04,lane:2},{t:66.29,lane:4},{t:66.54,lane:3},{t:66.79,lane:5},{t:67.04,lane:4},{t:67.29,lane:6},{t:67.54,lane:2},{t:67.79,lane:4},{t:68.04,lane:5},{t:68.29,lane:2},{t:68.54,lane:6},{t:68.79,lane:1},{t:69.04,lane:3},{t:69.29,lane:5},{t:69.54,lane:4},{t:69.79,lane:2},{t:70.04,lane:1},{t:70.29,lane:2},{t:70.54,lane:4},{t:70.79,lane:5},{t:71.04,lane:3},{t:71.29,lane:6},{t:71.54,lane:1},{t:71.665,lane:2},{t:71.79,lane:4},{t:72.04,lane:2},{t:72.29,lane:1},{t:72.54,lane:3},{t:72.79,lane:5},{t:73.04,lane:4},{t:73.29,lane:3},{t:73.54,lane:2},{t:73.79,lane:1},{t:74.04,lane:3},{t:74.29,lane:6},{t:74.54,lane:1},{t:74.79,lane:4},{t:75.04,lane:2},{t:75.29,lane:5},{t:75.54,lane:3},{t:75.79,lane:6},{t:76.04,lane:1},{t:76.29,lane:5},{t:76.54,lane:4},{t:76.79,lane:3},{t:77.04,lane:2},{t:77.29,lane:1},{t:77.54,lane:6},{t:77.79,lane:5},{t:78.04,lane:3},{t:78.29,lane:5},{t:78.54,lane:4},{t:78.79,lane:6},{t:79.04,lane:2},{t:79.29,lane:4},{t:79.54,lane:3},{t:79.665,lane:4},{t:79.79,lane:5},{t:80.04,lane:1},{t:80.04,lane:6},{t:80.29,lane:1},{t:80.54,lane:3},{t:80.79,lane:5},{t:81.04,lane:4},{t:81.29,lane:2},{t:81.54,lane:6},{t:81.79,lane:1},{t:82.04,lane:2},{t:82.29,lane:3},{t:82.54,lane:5},{t:82.79,lane:6},{t:83.04,lane:4},{t:83.29,lane:2},{t:83.54,lane:1},{t:83.79,lane:3},{t:84.04,lane:4},{t:84.29,lane:5},{t:84.54,lane:6},{t:84.79,lane:5},{t:85.04,lane:2},{t:85.29,lane:3},{t:85.54,lane:4},{t:85.79,lane:5},{t:86.04,lane:2},{t:86.54,lane:5},{t:87.04,lane:3},{t:87.54,lane:4},{t:88.04,lane:2},{t:88.54,lane:5},{t:89.04,lane:3},{t:89.54,lane:4},{t:90.04,lane:5},{t:90.29,lane:3,type:"hold",dur:1},{t:91.04,lane:4},{t:91.54,lane:2},{t:92.04,lane:5},{t:92.54,lane:3},{t:93.04,lane:4},{t:93.54,lane:2},{t:94.04,lane:2},{t:94.29,lane:2,type:"hold",dur:1},{t:94.54,lane:4},{t:95.04,lane:5},{t:95.54,lane:3},{t:96.04,lane:2},{t:96.54,lane:4},{t:97.04,lane:5},{t:97.54,lane:3},{t:98.04,lane:2},{t:98.29,lane:4},{t:98.54,lane:3},{t:99.04,lane:5},{t:99.29,lane:4},{t:99.54,lane:6},{t:99.79,lane:2},{t:100.04,lane:4},{t:100.29,lane:5},{t:100.54,lane:2},{t:101.04,lane:6},{t:101.29,lane:1},{t:101.54,lane:3},{t:101.79,lane:5},{t:102.04,lane:4},{t:102.54,lane:2},{t:102.79,lane:4},{t:103.04,lane:2},{t:103.29,lane:1},{t:103.54,lane:3},{t:104.04,lane:1},{t:104.04,lane:5},{t:104.54,lane:6},{t:105.04,lane:4},{t:105.54,lane:2},{t:105.79,lane:3},{t:106.04,lane:5},{t:106.54,lane:4},{t:106.79,lane:5},{t:107.04,lane:6},{t:107.29,lane:5},{t:107.54,lane:2},{t:108.04,lane:3},{t:108.29,lane:4},{t:108.54,lane:5},{t:108.79,lane:3},{t:109.04,lane:6},{t:109.29,lane:1},{t:109.54,lane:2},{t:109.79,lane:4},{t:110.04,lane:5},{t:110.29,lane:3},{t:110.54,lane:5},{t:110.79,lane:4},{t:111.04,lane:3},{t:111.29,lane:2},{t:111.54,lane:1},{t:111.79,lane:3},{t:112.04,lane:5},{t:112.29,lane:1},{t:112.54,lane:4},{t:112.79,lane:2},{t:113.04,lane:5},{t:113.29,lane:3},{t:113.54,lane:6},{t:114.04,lane:1},{t:114.29,lane:4},{t:114.54,lane:5},{t:115.04,lane:3},{t:115.29,lane:2},{t:115.54,lane:1},{t:115.79,lane:6},{t:116.04,lane:5},{t:116.29,lane:4},{t:116.54,lane:3},{t:116.79,lane:4},{t:117.04,lane:6},{t:117.29,lane:2},{t:117.54,lane:4},{t:117.79,lane:3},{t:118.04,lane:5},{t:118.29,lane:4},{t:118.54,lane:6},{t:119.04,lane:3},{t:119.29,lane:5},{t:119.54,lane:4},{t:119.79,lane:2},{t:120.04,lane:6},{t:120.54,lane:1},{t:121.04,lane:3},{t:121.29,lane:5},{t:121.54,lane:6},{t:121.79,lane:2},{t:122.04,lane:1},{t:122.29,lane:3},{t:122.54,lane:5},{t:122.79,lane:6},{t:123.04,lane:4},{t:123.29,lane:2},{t:123.54,lane:1},{t:123.79,lane:3},{t:124.04,lane:4},{t:124.29,lane:5},{t:124.54,lane:6},{t:124.79,lane:5},{t:125.04,lane:2},{t:125.29,lane:3},{t:125.54,lane:4},{t:125.79,lane:5},{t:126.04,lane:3},{t:126.29,lane:6},{t:126.54,lane:1},{t:126.79,lane:2},{t:127.04,lane:4},{t:127.29,lane:5},{t:127.54,lane:3},{t:127.665,lane:4},{t:127.79,lane:6},{t:128.04,lane:4},{t:128.29,lane:3},{t:128.54,lane:2},{t:128.79,lane:1},{t:129.04,lane:3},{t:129.29,lane:5},{t:129.54,lane:4},{t:129.79,lane:3},{t:130.04,lane:2},{t:130.29,lane:5},{t:130.54,lane:3},{t:130.79,lane:6},{t:131.04,lane:1},{t:131.29,lane:4},{t:131.54,lane:2},{t:131.79,lane:5},{t:132.04,lane:2},{t:132.29,lane:1},{t:132.54,lane:6},{t:132.79,lane:5},{t:133.04,lane:4},{t:133.29,lane:3},{t:133.54,lane:2},{t:133.79,lane:1},{t:134.04,lane:2},{t:134.29,lane:4},{t:134.54,lane:3},{t:134.79,lane:5},{t:135.04,lane:4},{t:135.29,lane:6},{t:135.54,lane:2},{t:135.665,lane:3},{t:135.79,lane:4},{t:136.04,lane:1},{t:136.04,lane:5},{t:136.29,lane:2},{t:136.54,lane:6},{t:136.79,lane:1},{t:137.04,lane:3},{t:137.29,lane:5},{t:137.54,lane:4},{t:137.79,lane:2},{t:138.04,lane:4},{t:139.04,lane:2},{t:140.04,lane:5},{t:142.04,lane:3}],events:[{t:.04,type:"pulse",power:.33},{t:.07,type:"echo",lane:0,dir:-1,power:.63},{t:2.04,type:"pulse",power:.33},{t:4.04,type:"pulse",power:.33},{t:4.07,type:"echo",lane:1,dir:-1,power:.63},{t:6.04,type:"pulse",power:.33},{t:8.04,type:"pulse",power:.33},{t:8.07,type:"echo",lane:6,dir:1,power:.63},{t:10.04,type:"pulse",power:.57},{t:10.07,type:"echo",lane:0,dir:-1,power:.9},{t:12.04,type:"pulse",power:.57},{t:14.04,type:"pulse",power:.57},{t:14.07,type:"echo",lane:1,dir:-1,power:.9},{t:16.04,type:"pulse",power:.57},{t:18.04,type:"pulse",power:.57},{t:18.07,type:"echo",lane:6,dir:1,power:.9},{t:20.04,type:"pulse",power:.57},{t:22.04,type:"pulse",power:.68},{t:22.07,type:"echo",lane:0,dir:-1,power:1.03},{t:24.04,type:"pulse",power:.68},{t:26.04,type:"burst",lane:4,power:.98},{t:26.04,type:"pulse",power:.68},{t:26.07,type:"echo",lane:7,dir:1,power:1.03},{t:28.04,type:"pulse",power:.68},{t:30.04,type:"pulse",power:.68},{t:30.07,type:"echo",lane:0,dir:-1,power:1.03},{t:32.04,type:"pulse",power:.68},{t:34.04,type:"burst",lane:2,power:.98},{t:34.04,type:"pulse",power:.68},{t:34.07,type:"echo",lane:7,dir:1,power:1.03},{t:36.04,type:"pulse",power:.68},{t:38.04,type:"pulse",power:.78},{t:38.07,type:"echo",lane:0,dir:-1,power:1.14},{t:40.04,type:"pulse",power:.78},{t:42.04,type:"burst",lane:4,power:1.09},{t:42.04,type:"pulse",power:.78},{t:42.07,type:"echo",lane:7,dir:1,power:1.14},{t:44.04,type:"pulse",power:.78},{t:46.04,type:"pulse",power:.78},{t:46.07,type:"echo",lane:0,dir:-1,power:1.14},{t:48.04,type:"pulse",power:.78},{t:50.04,type:"burst",lane:2,power:1.09},{t:50.04,type:"pulse",power:.78},{t:50.07,type:"echo",lane:7,dir:1,power:1.14},{t:52.04,type:"pulse",power:.78},{t:54.04,type:"pulse",power:.86},{t:54.06,type:"vibe",power:.92},{t:54.07,type:"echo",lane:0,dir:-1,power:1.24},{t:56.04,type:"pulse",power:.86},{t:58.04,type:"burst",lane:4,power:1.19},{t:58.04,type:"pulse",power:.86},{t:58.07,type:"echo",lane:7,dir:1,power:1.24},{t:60.04,type:"pulse",power:.86},{t:61.8,type:"vibe",power:.85},{t:61.85,type:"echo",lane:0,dir:-1,power:1.15},{t:61.85,type:"echo",lane:7,dir:1,power:1.15},{t:62.04,type:"pulse",power:.86},{t:62.07,type:"echo",lane:0,dir:-1,power:1.24},{t:64.04,type:"pulse",power:.86},{t:66.04,type:"burst",lane:2,power:1.19},{t:66.04,type:"pulse",power:.86},{t:66.07,type:"echo",lane:7,dir:1,power:1.24},{t:68.04,type:"pulse",power:.86},{t:70.04,type:"pulse",power:.92},{t:70.06,type:"vibe",power:1},{t:70.07,type:"echo",lane:0,dir:-1,power:1.3},{t:72.04,type:"pulse",power:.92},{t:74.04,type:"burst",lane:4,power:1.25},{t:74.04,type:"pulse",power:.92},{t:74.07,type:"echo",lane:7,dir:1,power:1.3},{t:76.04,type:"pulse",power:.92},{t:78.04,type:"pulse",power:.92},{t:78.07,type:"echo",lane:0,dir:-1,power:1.3},{t:80.04,type:"pulse",power:.92},{t:82.04,type:"burst",lane:2,power:1.25},{t:82.04,type:"pulse",power:.92},{t:82.07,type:"echo",lane:7,dir:1,power:1.3},{t:84.04,type:"pulse",power:.92},{t:86.04,type:"pulse",power:.46},{t:86.07,type:"echo",lane:0,dir:-1,power:.77},{t:88.04,type:"pulse",power:.46},{t:90.04,type:"pulse",power:.46},{t:90.07,type:"echo",lane:1,dir:-1,power:.77},{t:92.04,type:"pulse",power:.46},{t:94.04,type:"pulse",power:.46},{t:94.07,type:"echo",lane:6,dir:1,power:.77},{t:96.04,type:"pulse",power:.46},{t:98.04,type:"pulse",power:.79},{t:98.06,type:"vibe",power:.82},{t:98.07,type:"echo",lane:0,dir:-1,power:1.16},{t:100.04,type:"pulse",power:.79},{t:102.04,type:"burst",lane:4,power:1.11},{t:102.04,type:"pulse",power:.79},{t:102.07,type:"echo",lane:7,dir:1,power:1.16},{t:104.04,type:"pulse",power:.79},{t:106.04,type:"pulse",power:.79},{t:106.07,type:"echo",lane:0,dir:-1,power:1.16},{t:108.04,type:"pulse",power:.79},{t:110.04,type:"burst",lane:2,power:1.11},{t:110.04,type:"pulse",power:.79},{t:110.07,type:"echo",lane:7,dir:1,power:1.16},{t:112.04,type:"pulse",power:.79},{t:114.04,type:"pulse",power:.79},{t:114.07,type:"echo",lane:0,dir:-1,power:1.16},{t:116.04,type:"pulse",power:.79},{t:118.04,type:"burst",lane:6,power:1.11},{t:118.04,type:"pulse",power:.79},{t:118.07,type:"echo",lane:7,dir:1,power:1.16},{t:120.04,type:"pulse",power:.79},{t:122.04,type:"pulse",power:.85},{t:122.06,type:"vibe",power:.9},{t:122.07,type:"echo",lane:0,dir:-1,power:1.22},{t:124.04,type:"pulse",power:.85},{t:126.04,type:"burst",lane:4,power:1.17},{t:126.04,type:"pulse",power:.85},{t:126.07,type:"echo",lane:7,dir:1,power:1.22},{t:128.04,type:"pulse",power:.85},{t:130.04,type:"pulse",power:.85},{t:130.07,type:"echo",lane:0,dir:-1,power:1.22},{t:132.04,type:"pulse",power:.85},{t:134.04,type:"burst",lane:2,power:1.17},{t:134.04,type:"pulse",power:.85},{t:134.07,type:"echo",lane:7,dir:1,power:1.22},{t:136.04,type:"pulse",power:.85},{t:138.04,type:"pulse",power:.36},{t:138.07,type:"echo",lane:0,dir:-1,power:.66},{t:140.04,type:"pulse",power:.36},{t:142.04,type:"pulse",power:.36},{t:142.07,type:"echo",lane:1,dir:-1,power:.66}],ghosts:[{t:.08,lane:0,type:"sweep"},{t:.14,lane:1,type:"sweep"},{t:.2,lane:6,type:"sweep"},{t:.26,lane:7,type:"sweep"},{t:4.04,lane:0,type:"bounce"},{t:4.18,lane:1,type:"bounce"},{t:4.32,lane:6,type:"bounce"},{t:4.46,lane:7,type:"bounce"},{t:10.08,lane:0,type:"sweep"},{t:10.14,lane:1,type:"sweep"},{t:10.2,lane:6,type:"sweep"},{t:10.26,lane:7,type:"sweep"},{t:14.04,lane:0,type:"bounce"},{t:14.18,lane:1,type:"bounce"},{t:14.32,lane:6,type:"bounce"},{t:14.46,lane:7,type:"bounce"},{t:22.08,lane:0,type:"sweep"},{t:22.14,lane:7,type:"sweep"},{t:26.04,lane:0,type:"bounce"},{t:26.18,lane:7,type:"bounce"},{t:38.08,lane:0,type:"sweep"},{t:38.14,lane:7,type:"sweep"},{t:42.04,lane:0,type:"bounce"},{t:42.18,lane:7,type:"bounce"},{t:54.08,lane:0,type:"sweep"},{t:54.14,lane:7,type:"sweep"},{t:58.04,lane:0,type:"bounce"},{t:58.18,lane:7,type:"bounce"},{t:70.08,lane:0,type:"sweep"},{t:70.14,lane:7,type:"sweep"},{t:74.04,lane:0,type:"bounce"},{t:74.18,lane:7,type:"bounce"},{t:86.08,lane:0,type:"sweep"},{t:86.14,lane:1,type:"sweep"},{t:86.2,lane:6,type:"sweep"},{t:86.26,lane:7,type:"sweep"},{t:90.04,lane:0,type:"bounce"},{t:90.18,lane:1,type:"bounce"},{t:90.32,lane:6,type:"bounce"},{t:90.46,lane:7,type:"bounce"},{t:98.08,lane:0,type:"sweep"},{t:98.14,lane:7,type:"sweep"},{t:102.04,lane:0,type:"bounce"},{t:102.18,lane:7,type:"bounce"},{t:122.08,lane:0,type:"sweep"},{t:122.14,lane:7,type:"sweep"},{t:126.04,lane:0,type:"bounce"},{t:126.18,lane:7,type:"bounce"},{t:138.08,lane:0,type:"sweep"},{t:138.14,lane:1,type:"sweep"},{t:138.2,lane:6,type:"sweep"},{t:138.26,lane:7,type:"sweep"},{t:142.04,lane:0,type:"bounce"},{t:142.18,lane:1,type:"bounce"},{t:142.32,lane:6,type:"bounce"},{t:142.46,lane:7,type:"bounce"}]},Ll=[{id:"cryout",title:"CRYOUT",shortTitle:"CRYOUT",artist:"ORIGINAL TRACK",bpm:100,duration:138.1,audio:"./audio/cryout.mp3",difficulty:"ADVANCED",laneLabel:"4 · 6 · 8",blurb:"Neon field • 360° camera • 8-lane climax",accent:"#5ee7ff",chart:Uc,fadeStart:131.4,fadeEnd:133.4},{id:"world",title:"WORLD YEARNING FOR AN END",shortTitle:"WORLD YEARNING",artist:"ORIGINAL TRACK",bpm:120,duration:143.47,audio:"./audio/world-yearning.mp3",difficulty:"HARD",laneLabel:"4 · 6",blurb:"City intro • diagonal lanes • thumb-hard patterns",accent:"#ffb45e",chart:Ic,fadeStart:140.8,fadeEnd:142.9}],Nc="cryout",Dl=Object.fromEntries(Ll.map(i=>[i.id,i]));const ja="180",Fc=0,So=1,Oc=2,Ul=1,Bc=2,wn=3,Zn=0,Wt=1,An=2,Cn=0,Pn=1,Ht=2,Eo=3,bo=4,zc=5,oi=100,kc=101,Gc=102,Hc=103,Vc=104,Wc=200,Xc=201,Yc=202,qc=203,ta=204,na=205,Zc=206,Kc=207,$c=208,jc=209,Jc=210,Qc=211,eu=212,tu=213,nu=214,ia=0,ra=1,sa=2,Bi=3,aa=4,oa=5,la=6,ca=7,Il=0,iu=1,ru=2,Xn=0,Nl=1,Fl=2,Ol=3,Ja=4,Bl=5,zl=6,kl=7,Gl=300,zi=301,ki=302,ua=303,ha=304,ds=306,ss=1e3,Wn=1001,fa=1002,mn=1003,su=1004,yr=1005,xn=1006,xs=1007,ci=1008,Un=1009,Hl=1010,Vl=1011,lr=1012,Qa=1013,hi=1014,Rn=1015,Ln=1016,eo=1017,to=1018,cr=1020,Wl=35902,Xl=35899,Yl=1021,ql=1022,dn=1023,ur=1026,hr=1027,Zl=1028,no=1029,Kl=1030,io=1031,ro=1033,Qr=33776,es=33777,ts=33778,ns=33779,da=35840,pa=35841,ma=35842,ga=35843,_a=36196,va=37492,xa=37496,Ma=37808,ya=37809,Sa=37810,Ea=37811,ba=37812,Ta=37813,wa=37814,Aa=37815,Ra=37816,Ca=37817,Pa=37818,La=37819,Da=37820,Ua=37821,Ia=36492,Na=36494,Fa=36495,Oa=36283,Ba=36284,za=36285,ka=36286,au=3200,ou=3201,lu=0,cu=1,Vn="",Vt="srgb",Gi="srgb-linear",as="linear",at="srgb",gi=7680,To=519,uu=512,hu=513,fu=514,$l=515,du=516,pu=517,mu=518,gu=519,Ga=35044,wo="300 es",Mn=2e3,os=2001;class Xi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ms=Math.PI/180,Ha=180/Math.PI;function Yn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function et(i,e,t){return Math.max(e,Math.min(t,i))}function _u(i,e){return(i%e+e)%e}function ys(i,e,t){return(1-t)*i+t*e}function vn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ct(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ke{constructor(e=0,t=0){ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class mr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],f=n[r+2],h=n[r+3];const d=s[a+0],p=s[a+1],_=s[a+2],x=s[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(h!==x||c!==d||l!==p||f!==_){let m=1-o;const u=c*d+l*p+f*_+h*x,T=u>=0?1:-1,w=1-u*u;if(w>Number.EPSILON){const P=Math.sqrt(w),C=Math.atan2(P,u*T);m=Math.sin(m*C)/P,o=Math.sin(o*C)/P}const E=o*T;if(c=c*m+d*E,l=l*m+p*E,f=f*m+_*E,h=h*m+x*E,m===1-o){const P=1/Math.sqrt(c*c+l*l+f*f+h*h);c*=P,l*=P,f*=P,h*=P}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],f=n[r+3],h=s[a],d=s[a+1],p=s[a+2],_=s[a+3];return e[t]=o*_+f*h+c*p-l*d,e[t+1]=c*_+f*d+l*h-o*p,e[t+2]=l*_+f*p+o*d-c*h,e[t+3]=f*_-o*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(r/2),h=o(s/2),d=c(n/2),p=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=d*f*h+l*p*_,this._y=l*p*h-d*f*_,this._z=l*f*_+d*p*h,this._w=l*f*h-d*p*_;break;case"YXZ":this._x=d*f*h+l*p*_,this._y=l*p*h-d*f*_,this._z=l*f*_-d*p*h,this._w=l*f*h+d*p*_;break;case"ZXY":this._x=d*f*h-l*p*_,this._y=l*p*h+d*f*_,this._z=l*f*_+d*p*h,this._w=l*f*h-d*p*_;break;case"ZYX":this._x=d*f*h-l*p*_,this._y=l*p*h+d*f*_,this._z=l*f*_-d*p*h,this._w=l*f*h+d*p*_;break;case"YZX":this._x=d*f*h+l*p*_,this._y=l*p*h+d*f*_,this._z=l*f*_-d*p*h,this._w=l*f*h-d*p*_;break;case"XZY":this._x=d*f*h-l*p*_,this._y=l*p*h-d*f*_,this._z=l*f*_+d*p*h,this._w=l*f*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-c)*p,this._y=(s-l)*p,this._z=(a-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(f-c)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-l)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(c+f)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+l)/p,this._y=(c+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+r*l-s*c,this._y=r*f+a*c+s*o-n*l,this._z=s*f+a*l+n*c-r*o,this._w=a*f-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const l=Math.sqrt(c),f=Math.atan2(l,o),h=Math.sin((1-t)*f)/l,d=Math.sin(t*f)/l;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,n=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ao.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ao.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),f=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+c*l+a*h-o*f,this.y=n+c*f+o*l-s*h,this.z=r+c*h+s*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ss.copy(this).projectOnVector(e),this.sub(Ss)}reflect(e){return this.sub(Ss.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ss=new F,Ao=new mr;class Ze{constructor(e,t,n,r,s,a,o,c,l){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],h=n[7],d=n[2],p=n[5],_=n[8],x=r[0],m=r[3],u=r[6],T=r[1],w=r[4],E=r[7],P=r[2],C=r[5],R=r[8];return s[0]=a*x+o*T+c*P,s[3]=a*m+o*w+c*C,s[6]=a*u+o*E+c*R,s[1]=l*x+f*T+h*P,s[4]=l*m+f*w+h*C,s[7]=l*u+f*E+h*R,s[2]=d*x+p*T+_*P,s[5]=d*m+p*w+_*C,s[8]=d*u+p*E+_*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*s*f+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],h=f*a-o*l,d=o*c-f*s,p=l*s-a*c,_=t*h+n*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*l-f*n)*x,e[2]=(o*n-r*a)*x,e[3]=d*x,e[4]=(f*t-r*c)*x,e[5]=(r*s-o*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Es.makeScale(e,t)),this}rotate(e){return this.premultiply(Es.makeRotation(-e)),this}translate(e,t){return this.premultiply(Es.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Es=new Ze;function jl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vu(){const i=ls("canvas");return i.style.display="block",i}const Ro={};function fr(i){i in Ro||(Ro[i]=!0,console.warn(i))}function xu(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Co=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Po=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mu(){const i={enabled:!0,workingColorSpace:Gi,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===at&&(r.r=Dn(r.r),r.g=Dn(r.g),r.b=Dn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===at&&(r.r=Ni(r.r),r.g=Ni(r.g),r.b=Ni(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Vn?as:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return fr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return fr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Gi]:{primaries:e,whitePoint:n,transfer:as,toXYZ:Co,fromXYZ:Po,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Vt},outputColorSpaceConfig:{drawingBufferColorSpace:Vt}},[Vt]:{primaries:e,whitePoint:n,transfer:at,toXYZ:Co,fromXYZ:Po,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Vt}}}),i}const tt=Mu();function Dn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ni(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let _i;class yu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{_i===void 0&&(_i=ls("canvas")),_i.width=e.width,_i.height=e.height;const r=_i.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=_i}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ls("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Dn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Dn(t[n]/255)*255):t[n]=Dn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Su=0;class so{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=Yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(bs(r[a].image)):s.push(bs(r[a]))}else s=bs(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function bs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eu=0;const Ts=new F;class kt extends Xi{constructor(e=kt.DEFAULT_IMAGE,t=kt.DEFAULT_MAPPING,n=Wn,r=Wn,s=xn,a=ci,o=dn,c=Un,l=kt.DEFAULT_ANISOTROPY,f=Vn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=Yn(),this.name="",this.source=new so(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ke(0,0),this.repeat=new ke(1,1),this.center=new ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ts).x}get height(){return this.source.getSize(Ts).y}get depth(){return this.source.getSize(Ts).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ss:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case fa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ss:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case fa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kt.DEFAULT_IMAGE=null;kt.DEFAULT_MAPPING=Gl;kt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,t=0,n=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],f=c[4],h=c[8],d=c[1],p=c[5],_=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,E=(p+1)/2,P=(u+1)/2,C=(f+d)/4,R=(h+x)/4,N=(_+m)/4;return w>E&&w>P?w<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(w),r=C/n,s=R/n):E>P?E<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),n=C/r,s=N/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=R/s,r=N/s),this.set(n,r,s,t),this}let T=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(h-x)/T,this.z=(d-f)/T,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(et(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bu extends Xi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new St(0,0,e,t),this.scissorTest=!1,this.viewport=new St(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new kt(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new so(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends bu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Jl extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tu extends kt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=mn,this.minFilter=mn,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gr{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(s,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sr.copy(n.boundingBox)),Sr.applyMatrix4(e.matrixWorld),this.union(Sr)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($i),Er.subVectors(this.max,$i),vi.subVectors(e.a,$i),xi.subVectors(e.b,$i),Mi.subVectors(e.c,$i),On.subVectors(xi,vi),Bn.subVectors(Mi,xi),Qn.subVectors(vi,Mi);let t=[0,-On.z,On.y,0,-Bn.z,Bn.y,0,-Qn.z,Qn.y,On.z,0,-On.x,Bn.z,0,-Bn.x,Qn.z,0,-Qn.x,-On.y,On.x,0,-Bn.y,Bn.x,0,-Qn.y,Qn.x,0];return!ws(t,vi,xi,Mi,Er)||(t=[1,0,0,0,1,0,0,0,1],!ws(t,vi,xi,Mi,Er))?!1:(br.crossVectors(On,Bn),t=[br.x,br.y,br.z],ws(t,vi,xi,Mi,Er))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yn=[new F,new F,new F,new F,new F,new F,new F,new F],cn=new F,Sr=new gr,vi=new F,xi=new F,Mi=new F,On=new F,Bn=new F,Qn=new F,$i=new F,Er=new F,br=new F,ei=new F;function ws(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ei.fromArray(i,s);const o=r.x*Math.abs(ei.x)+r.y*Math.abs(ei.y)+r.z*Math.abs(ei.z),c=e.dot(ei),l=t.dot(ei),f=n.dot(ei);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const wu=new gr,ji=new F,As=new F;class _r{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wu.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ji.subVectors(e,this.center);const t=ji.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ji,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(As.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ji.copy(e.center).add(As)),this.expandByPoint(ji.copy(e.center).sub(As))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Sn=new F,Rs=new F,Tr=new F,zn=new F,Cs=new F,wr=new F,Ps=new F;class ao{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Sn.copy(this.origin).addScaledVector(this.direction,t),Sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Rs.copy(e).add(t).multiplyScalar(.5),Tr.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(Rs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Tr),o=zn.dot(this.direction),c=-zn.dot(Tr),l=zn.lengthSq(),f=Math.abs(1-a*a);let h,d,p,_;if(f>0)if(h=a*c-o,d=a*o-c,_=s*f,h>=0)if(d>=-_)if(d<=_){const x=1/f;h*=x,d*=x,p=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d=-s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-c),s),p=-h*h+d*(d+2*c)+l);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Rs).addScaledVector(Tr,d),p}intersectSphere(e,t){Sn.subVectors(e.center,this.origin);const n=Sn.dot(this.direction),r=Sn.dot(Sn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),f>=0?(s=(e.min.y-d.y)*f,a=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,a=(e.min.y-d.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Sn)!==null}intersectTriangle(e,t,n,r,s){Cs.subVectors(t,e),wr.subVectors(n,e),Ps.crossVectors(Cs,wr);let a=this.direction.dot(Ps),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,e);const c=o*this.direction.dot(wr.crossVectors(zn,wr));if(c<0)return null;const l=o*this.direction.dot(Cs.cross(zn));if(l<0||c+l>a)return null;const f=-o*zn.dot(Ps);return f<0?null:this.at(f/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,t,n,r,s,a,o,c,l,f,h,d,p,_,x,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,f,h,d,p,_,x,m)}set(e,t,n,r,s,a,o,c,l,f,h,d,p,_,x,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=f,u[10]=h,u[14]=d,u[3]=p,u[7]=_,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/yi.setFromMatrixColumn(e,0).length(),s=1/yi.setFromMatrixColumn(e,1).length(),a=1/yi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*f,p=a*h,_=o*f,x=o*h;t[0]=c*f,t[4]=-c*h,t[8]=l,t[1]=p+_*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=_+p*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*f,p=c*h,_=l*f,x=l*h;t[0]=d+x*o,t[4]=_*o-p,t[8]=a*l,t[1]=a*h,t[5]=a*f,t[9]=-o,t[2]=p*o-_,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*f,p=c*h,_=l*f,x=l*h;t[0]=d-x*o,t[4]=-a*h,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*f,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*f,p=a*h,_=o*f,x=o*h;t[0]=c*f,t[4]=_*l-p,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=p*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,p=a*l,_=o*c,x=o*l;t[0]=c*f,t[4]=x-d*h,t[8]=_*h+p,t[1]=h,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=p*h+_,t[10]=d-x*h}else if(e.order==="XZY"){const d=a*c,p=a*l,_=o*c,x=o*l;t[0]=c*f,t[4]=-h,t[8]=l*f,t[1]=d*h+x,t[5]=a*f,t[9]=p*h-_,t[2]=_*h-p,t[6]=o*f,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Au,e,Ru)}lookAt(e,t,n){const r=this.elements;return jt.subVectors(e,t),jt.lengthSq()===0&&(jt.z=1),jt.normalize(),kn.crossVectors(n,jt),kn.lengthSq()===0&&(Math.abs(n.z)===1?jt.x+=1e-4:jt.z+=1e-4,jt.normalize(),kn.crossVectors(n,jt)),kn.normalize(),Ar.crossVectors(jt,kn),r[0]=kn.x,r[4]=Ar.x,r[8]=jt.x,r[1]=kn.y,r[5]=Ar.y,r[9]=jt.y,r[2]=kn.z,r[6]=Ar.z,r[10]=jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],h=n[5],d=n[9],p=n[13],_=n[2],x=n[6],m=n[10],u=n[14],T=n[3],w=n[7],E=n[11],P=n[15],C=r[0],R=r[4],N=r[8],S=r[12],M=r[1],L=r[5],I=r[9],q=r[13],te=r[2],K=r[6],$=r[10],Q=r[14],V=r[3],he=r[7],ve=r[11],we=r[15];return s[0]=a*C+o*M+c*te+l*V,s[4]=a*R+o*L+c*K+l*he,s[8]=a*N+o*I+c*$+l*ve,s[12]=a*S+o*q+c*Q+l*we,s[1]=f*C+h*M+d*te+p*V,s[5]=f*R+h*L+d*K+p*he,s[9]=f*N+h*I+d*$+p*ve,s[13]=f*S+h*q+d*Q+p*we,s[2]=_*C+x*M+m*te+u*V,s[6]=_*R+x*L+m*K+u*he,s[10]=_*N+x*I+m*$+u*ve,s[14]=_*S+x*q+m*Q+u*we,s[3]=T*C+w*M+E*te+P*V,s[7]=T*R+w*L+E*K+P*he,s[11]=T*N+w*I+E*$+P*ve,s[15]=T*S+w*q+E*Q+P*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],h=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],u=e[15];return _*(+s*c*h-r*l*h-s*o*d+n*l*d+r*o*p-n*c*p)+x*(+t*c*p-t*l*d+s*a*d-r*a*p+r*l*f-s*c*f)+m*(+t*l*h-t*o*p-s*a*h+n*a*p+s*o*f-n*l*f)+u*(-r*o*f-t*c*h+t*o*d+r*a*h-n*a*d+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],h=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],u=e[15],T=h*m*l-x*d*l+x*c*p-o*m*p-h*c*u+o*d*u,w=_*d*l-f*m*l-_*c*p+a*m*p+f*c*u-a*d*u,E=f*x*l-_*h*l+_*o*p-a*x*p-f*o*u+a*h*u,P=_*h*c-f*x*c-_*o*d+a*x*d+f*o*m-a*h*m,C=t*T+n*w+r*E+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/C;return e[0]=T*R,e[1]=(x*d*s-h*m*s-x*r*p+n*m*p+h*r*u-n*d*u)*R,e[2]=(o*m*s-x*c*s+x*r*l-n*m*l-o*r*u+n*c*u)*R,e[3]=(h*c*s-o*d*s-h*r*l+n*d*l+o*r*p-n*c*p)*R,e[4]=w*R,e[5]=(f*m*s-_*d*s+_*r*p-t*m*p-f*r*u+t*d*u)*R,e[6]=(_*c*s-a*m*s-_*r*l+t*m*l+a*r*u-t*c*u)*R,e[7]=(a*d*s-f*c*s+f*r*l-t*d*l-a*r*p+t*c*p)*R,e[8]=E*R,e[9]=(_*h*s-f*x*s-_*n*p+t*x*p+f*n*u-t*h*u)*R,e[10]=(a*x*s-_*o*s+_*n*l-t*x*l-a*n*u+t*o*u)*R,e[11]=(f*o*s-a*h*s-f*n*l+t*h*l+a*n*p-t*o*p)*R,e[12]=P*R,e[13]=(f*x*r-_*h*r+_*n*d-t*x*d-f*n*m+t*h*m)*R,e[14]=(_*o*r-a*x*r-_*n*c+t*x*c+a*n*m-t*o*m)*R,e[15]=(a*h*r-f*o*r+f*n*c-t*h*c-a*n*d+t*o*d)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,f=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,f*o+n,f*c-r*a,0,l*c-r*o,f*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,f=a+a,h=o+o,d=s*l,p=s*f,_=s*h,x=a*f,m=a*h,u=o*h,T=c*l,w=c*f,E=c*h,P=n.x,C=n.y,R=n.z;return r[0]=(1-(x+u))*P,r[1]=(p+E)*P,r[2]=(_-w)*P,r[3]=0,r[4]=(p-E)*C,r[5]=(1-(d+u))*C,r[6]=(m+T)*C,r[7]=0,r[8]=(_+w)*R,r[9]=(m-T)*R,r[10]=(1-(d+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=yi.set(r[0],r[1],r[2]).length();const a=yi.set(r[4],r[5],r[6]).length(),o=yi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],un.copy(this);const l=1/s,f=1/a,h=1/o;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=f,un.elements[5]*=f,un.elements[6]*=f,un.elements[8]*=h,un.elements[9]*=h,un.elements[10]*=h,t.setFromRotationMatrix(un),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Mn,c=!1){const l=this.elements,f=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r);let _,x;if(c)_=s/(a-s),x=a*s/(a-s);else if(o===Mn)_=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===os)_=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Mn,c=!1){const l=this.elements,f=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r);let _,x;if(c)_=1/(a-s),x=a/(a-s);else if(o===Mn)_=-2/(a-s),x=-(a+s)/(a-s);else if(o===os)_=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const yi=new F,un=new yt,Au=new F(0,0,0),Ru=new F(1,1,1),kn=new F,Ar=new F,jt=new F,Lo=new yt,Do=new mr;class In{constructor(e=0,t=0,n=0,r=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Lo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Lo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Do.setFromEuler(this),this.setFromQuaternion(Do,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class Ql{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cu=0;const Uo=new F,Si=new mr,En=new yt,Rr=new F,Ji=new F,Pu=new F,Lu=new mr,Io=new F(1,0,0),No=new F(0,1,0),Fo=new F(0,0,1),Oo={type:"added"},Du={type:"removed"},Ei={type:"childadded",child:null},Ls={type:"childremoved",child:null};class It extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cu++}),this.uuid=Yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=It.DEFAULT_UP.clone();const e=new F,t=new In,n=new mr,r=new F(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Ze}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=It.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ql,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(Io,e)}rotateY(e){return this.rotateOnAxis(No,e)}rotateZ(e){return this.rotateOnAxis(Fo,e)}translateOnAxis(e,t){return Uo.copy(e).applyQuaternion(this.quaternion),this.position.add(Uo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Io,e)}translateY(e){return this.translateOnAxis(No,e)}translateZ(e){return this.translateOnAxis(Fo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Rr.copy(e):Rr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(Ji,Rr,this.up):En.lookAt(Rr,Ji,this.up),this.quaternion.setFromRotationMatrix(En),r&&(En.extractRotation(r.matrixWorld),Si.setFromRotationMatrix(En),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Oo),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Du),Ls.child=e,this.dispatchEvent(Ls),Ls.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Oo),Ei.child=e,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,e,Pu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,Lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),h=a(e.shapes),d=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}It.DEFAULT_UP=new F(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new F,bn=new F,Ds=new F,Tn=new F,bi=new F,Ti=new F,Bo=new F,Us=new F,Is=new F,Ns=new F,Fs=new St,Os=new St,Bs=new St;class ln{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),hn.subVectors(e,t),r.cross(hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){hn.subVectors(r,t),bn.subVectors(n,t),Ds.subVectors(e,t);const a=hn.dot(hn),o=hn.dot(bn),c=hn.dot(Ds),l=bn.dot(bn),f=bn.dot(Ds),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(l*c-o*f)*d,_=(a*f-o*c)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Tn)===null?!1:Tn.x>=0&&Tn.y>=0&&Tn.x+Tn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,Tn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Tn.x),c.addScaledVector(a,Tn.y),c.addScaledVector(o,Tn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Fs.setScalar(0),Os.setScalar(0),Bs.setScalar(0),Fs.fromBufferAttribute(e,t),Os.fromBufferAttribute(e,n),Bs.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Fs,s.x),a.addScaledVector(Os,s.y),a.addScaledVector(Bs,s.z),a}static isFrontFacing(e,t,n,r){return hn.subVectors(n,t),bn.subVectors(e,t),hn.cross(bn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hn.subVectors(this.c,this.b),bn.subVectors(this.a,this.b),hn.cross(bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ln.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return ln.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;bi.subVectors(r,n),Ti.subVectors(s,n),Us.subVectors(e,n);const c=bi.dot(Us),l=Ti.dot(Us);if(c<=0&&l<=0)return t.copy(n);Is.subVectors(e,r);const f=bi.dot(Is),h=Ti.dot(Is);if(f>=0&&h<=f)return t.copy(r);const d=c*h-f*l;if(d<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(bi,a);Ns.subVectors(e,s);const p=bi.dot(Ns),_=Ti.dot(Ns);if(_>=0&&p<=_)return t.copy(s);const x=p*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Ti,o);const m=f*_-p*h;if(m<=0&&h-f>=0&&p-_>=0)return Bo.subVectors(s,r),o=(h-f)/(h-f+(p-_)),t.copy(r).addScaledVector(Bo,o);const u=1/(m+x+d);return a=x*u,o=d*u,t.copy(n).addScaledVector(bi,a).addScaledVector(Ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Cr={h:0,s:0,l:0};function zs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ve{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=tt.workingColorSpace){if(e=_u(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=zs(a,s,e+1/3),this.g=zs(a,s,e),this.b=zs(a,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,t=Vt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Vt){const n=ec[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=Ni(e.r),this.g=Ni(e.g),this.b=Ni(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Vt){return tt.workingToColorSpace(Ut.copy(this),e),Math.round(et(Ut.r*255,0,255))*65536+Math.round(et(Ut.g*255,0,255))*256+Math.round(et(Ut.b*255,0,255))}getHexString(e=Vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Ut.copy(this),t);const n=Ut.r,r=Ut.g,s=Ut.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=f<=.5?h/(a+o):h/(2-a-o),a){case n:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-n)/h+2;break;case s:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Ut.copy(this),t),e.r=Ut.r,e.g=Ut.g,e.b=Ut.b,e}getStyle(e=Vt){tt.workingToColorSpace(Ut.copy(this),e);const t=Ut.r,n=Ut.g,r=Ut.b;return e!==Vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Gn),this.setHSL(Gn.h+e,Gn.s+t,Gn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gn),e.getHSL(Cr);const n=ys(Gn.h,Cr.h,t),r=ys(Gn.s,Cr.s,t),s=ys(Gn.l,Cr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ut=new Ve;Ve.NAMES=ec;let Uu=0;class pi extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=Yn(),this.name="",this.type="Material",this.blending=Pn,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ta,this.blendDst=na,this.blendEquation=oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=To,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pn&&(n.blending=this.blending),this.side!==Zn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ta&&(n.blendSrc=this.blendSrc),this.blendDst!==na&&(n.blendDst=this.blendDst),this.blendEquation!==oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==To&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fi extends pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new F,Pr=new ke;let Iu=0;class Xt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Iu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ga,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pr.fromBufferAttribute(this,t),Pr.applyMatrix3(e),this.setXY(t,Pr.x,Pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),r=ct(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),r=ct(r,this.array),s=ct(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ga&&(e.usage=this.usage),e}}class tc extends Xt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class nc extends Xt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tt extends Xt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nu=0;const sn=new yt,ks=new It,wi=new F,Jt=new gr,Qi=new gr,Lt=new F;class Nt extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nu++}),this.uuid=Yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(jl(e)?nc:tc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ze().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return sn.makeRotationFromQuaternion(e),this.applyMatrix4(sn),this}rotateX(e){return sn.makeRotationX(e),this.applyMatrix4(sn),this}rotateY(e){return sn.makeRotationY(e),this.applyMatrix4(sn),this}rotateZ(e){return sn.makeRotationZ(e),this.applyMatrix4(sn),this}translate(e,t,n){return sn.makeTranslation(e,t,n),this.applyMatrix4(sn),this}scale(e,t,n){return sn.makeScale(e,t,n),this.applyMatrix4(sn),this}lookAt(e){return ks.lookAt(e),ks.updateMatrix(),this.applyMatrix4(ks.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Jt.setFromBufferAttribute(s),this.morphTargetsRelative?(Lt.addVectors(this.boundingBox.min,Jt.min),this.boundingBox.expandByPoint(Lt),Lt.addVectors(this.boundingBox.max,Jt.max),this.boundingBox.expandByPoint(Lt)):(this.boundingBox.expandByPoint(Jt.min),this.boundingBox.expandByPoint(Jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _r);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const n=this.boundingSphere.center;if(Jt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(Lt.addVectors(Jt.min,Qi.min),Jt.expandByPoint(Lt),Lt.addVectors(Jt.max,Qi.max),Jt.expandByPoint(Lt)):(Jt.expandByPoint(Qi.min),Jt.expandByPoint(Qi.max))}Jt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Lt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Lt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Lt.fromBufferAttribute(o,l),c&&(wi.fromBufferAttribute(e,l),Lt.add(wi)),r=Math.max(r,n.distanceToSquared(Lt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Xt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let N=0;N<n.count;N++)o[N]=new F,c[N]=new F;const l=new F,f=new F,h=new F,d=new ke,p=new ke,_=new ke,x=new F,m=new F;function u(N,S,M){l.fromBufferAttribute(n,N),f.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),d.fromBufferAttribute(s,N),p.fromBufferAttribute(s,S),_.fromBufferAttribute(s,M),f.sub(l),h.sub(l),p.sub(d),_.sub(d);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(L),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(L),o[N].add(x),o[S].add(x),o[M].add(x),c[N].add(m),c[S].add(m),c[M].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let N=0,S=T.length;N<S;++N){const M=T[N],L=M.start,I=M.count;for(let q=L,te=L+I;q<te;q+=3)u(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const w=new F,E=new F,P=new F,C=new F;function R(N){P.fromBufferAttribute(r,N),C.copy(P);const S=o[N];w.copy(S),w.sub(P.multiplyScalar(P.dot(S))).normalize(),E.crossVectors(C,S);const L=E.dot(c[N])<0?-1:1;a.setXYZW(N,w.x,w.y,w.z,L)}for(let N=0,S=T.length;N<S;++N){const M=T[N],L=M.start,I=M.count;for(let q=L,te=L+I;q<te;q+=3)R(e.getX(q+0)),R(e.getX(q+1)),R(e.getX(q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Xt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new F,s=new F,a=new F,o=new F,c=new F,l=new F,f=new F,h=new F;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(f),c.add(f),l.add(f),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Lt.fromBufferAttribute(e,t),Lt.normalize(),e.setXYZ(t,Lt.x,Lt.y,Lt.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,h=o.normalized,d=new l.constructor(c.length*f);let p=0,_=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*f;for(let u=0;u<f;u++)d[_++]=l[p++]}return new Xt(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let f=0,h=l.length;f<h;f++){const d=l[f],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];f.push(p.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],h=s[l];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zo=new yt,ti=new ao,Lr=new _r,ko=new F,Dr=new F,Ur=new F,Ir=new F,Gs=new F,Nr=new F,Go=new F,Fr=new F;class en extends It{constructor(e=new Nt,t=new Fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Nr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=o[c],h=s[c];f!==0&&(Gs.fromBufferAttribute(h,e),a?Nr.addScaledVector(Gs,f):Nr.addScaledVector(Gs.sub(t),f))}t.add(Nr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(s),ti.copy(e.ray).recast(e.near),!(Lr.containsPoint(ti.origin)===!1&&(ti.intersectSphere(Lr,ko)===null||ti.origin.distanceToSquared(ko)>(e.far-e.near)**2))&&(zo.copy(s).invert(),ti.copy(e.ray).applyMatrix4(zo),!(n.boundingBox!==null&&ti.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ti)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],u=a[m.materialIndex],T=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let E=T,P=w;E<P;E+=3){const C=o.getX(E),R=o.getX(E+1),N=o.getX(E+2);r=Or(this,u,e,n,l,f,h,C,R,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,u=x;m<u;m+=3){const T=o.getX(m),w=o.getX(m+1),E=o.getX(m+2);r=Or(this,a,e,n,l,f,h,T,w,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,x=d.length;_<x;_++){const m=d[_],u=a[m.materialIndex],T=Math.max(m.start,p.start),w=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let E=T,P=w;E<P;E+=3){const C=E,R=E+1,N=E+2;r=Or(this,u,e,n,l,f,h,C,R,N),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=_,u=x;m<u;m+=3){const T=m,w=m+1,E=m+2;r=Or(this,a,e,n,l,f,h,T,w,E),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Fu(i,e,t,n,r,s,a,o){let c;if(e.side===Wt?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===Zn,o),c===null)return null;Fr.copy(o),Fr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Fr);return l<t.near||l>t.far?null:{distance:l,point:Fr.clone(),object:i}}function Or(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,Dr),i.getVertexPosition(c,Ur),i.getVertexPosition(l,Ir);const f=Fu(i,e,t,n,Dr,Ur,Ir,Go);if(f){const h=new F;ln.getBarycoord(Go,Dr,Ur,Ir,h),r&&(f.uv=ln.getInterpolatedAttribute(r,o,c,l,h,new ke)),s&&(f.uv1=ln.getInterpolatedAttribute(s,o,c,l,h,new ke)),a&&(f.normal=ln.getInterpolatedAttribute(a,o,c,l,h,new F),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new F,materialIndex:0};ln.getNormal(Dr,Ur,Ir,d.normal),f.face=d,f.barycoord=h}return f}class vr extends Nt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],f=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,a,s,0),_("z","y","x",1,-1,n,t,-e,a,s,1),_("x","z","y",1,1,e,n,t,r,a,2),_("x","z","y",1,-1,e,n,-t,r,a,3),_("x","y","z",1,-1,e,t,n,r,s,4),_("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new Tt(l,3)),this.setAttribute("normal",new Tt(f,3)),this.setAttribute("uv",new Tt(h,2));function _(x,m,u,T,w,E,P,C,R,N,S){const M=E/R,L=P/N,I=E/2,q=P/2,te=C/2,K=R+1,$=N+1;let Q=0,V=0;const he=new F;for(let ve=0;ve<$;ve++){const we=ve*L-q;for(let je=0;je<K;je++){const st=je*M-I;he[x]=st*T,he[m]=we*w,he[u]=te,l.push(he.x,he.y,he.z),he[x]=0,he[m]=0,he[u]=C>0?1:-1,f.push(he.x,he.y,he.z),h.push(je/R),h.push(1-ve/N),Q+=1}}for(let ve=0;ve<N;ve++)for(let we=0;we<R;we++){const je=d+we+K*ve,st=d+we+K*(ve+1),ut=d+(we+1)+K*(ve+1),Qe=d+(we+1)+K*ve;c.push(je,st,Qe),c.push(st,ut,Qe),V+=6}o.addGroup(p,V,S),p+=V,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Bt(i){const e={};for(let t=0;t<i.length;t++){const n=Hi(i[t]);for(const r in n)e[r]=n[r]}return e}function Ou(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ic(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const dr={clone:Hi,merge:Bt};var Bu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class zt extends pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Bu,this.fragmentShader=zu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=Ou(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class rc extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Mn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hn=new F,Ho=new ke,Vo=new ke;class on extends rc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ha*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ha*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z),Hn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hn.x,Hn.y).multiplyScalar(-e/Hn.z)}getViewSize(e,t){return this.getViewBounds(e,Ho,Vo),t.subVectors(Vo,Ho)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ai=-90,Ri=1;class ku extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new on(Ai,Ri,e,t);r.layers=this.layers,this.add(r);const s=new on(Ai,Ri,e,t);s.layers=this.layers,this.add(s);const a=new on(Ai,Ri,e,t);a.layers=this.layers,this.add(a);const o=new on(Ai,Ri,e,t);o.layers=this.layers,this.add(o);const c=new on(Ai,Ri,e,t);c.layers=this.layers,this.add(c);const l=new on(Ai,Ri,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Mn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===os)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,f),e.setRenderTarget(h,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class sc extends kt{constructor(e=[],t=zi,n,r,s,a,o,c,l,f){super(e,t,n,r,s,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gu extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new sc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new vr(5,5,5),s=new zt({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Cn});s.uniforms.tEquirect.value=t;const a=new en(r,s),o=t.minFilter;return t.minFilter===ci&&(t.minFilter=xn),new ku(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class fn extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hu={type:"move"};class Hs{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hu)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class oo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ve(e),this.density=t}clone(){return new oo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Vu extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ga,this.updateRanges=[],this.version=0,this.uuid=Yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ot=new F;class cs{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ct(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ct(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),r=ct(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ct(t,this.array),n=ct(n,this.array),r=ct(r,this.array),s=ct(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Xt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qt extends pi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ci;const er=new F,Pi=new F,Li=new F,Di=new ke,tr=new ke,ac=new yt,Br=new F,nr=new F,zr=new F,Wo=new ke,Vs=new ke,Xo=new ke;class an extends It{constructor(e=new Qt){if(super(),this.isSprite=!0,this.type="Sprite",Ci===void 0){Ci=new Nt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Wu(t,5);Ci.setIndex([0,1,2,0,2,3]),Ci.setAttribute("position",new cs(n,3,0,!1)),Ci.setAttribute("uv",new cs(n,2,3,!1))}this.geometry=Ci,this.material=e,this.center=new ke(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Pi.setFromMatrixScale(this.matrixWorld),ac.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Li.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Pi.multiplyScalar(-Li.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;kr(Br.set(-.5,-.5,0),Li,a,Pi,r,s),kr(nr.set(.5,-.5,0),Li,a,Pi,r,s),kr(zr.set(.5,.5,0),Li,a,Pi,r,s),Wo.set(0,0),Vs.set(1,0),Xo.set(1,1);let o=e.ray.intersectTriangle(Br,nr,zr,!1,er);if(o===null&&(kr(nr.set(-.5,.5,0),Li,a,Pi,r,s),Vs.set(0,1),o=e.ray.intersectTriangle(Br,zr,nr,!1,er),o===null))return;const c=e.ray.origin.distanceTo(er);c<e.near||c>e.far||t.push({distance:c,point:er.clone(),uv:ln.getInterpolation(er,Br,nr,zr,Wo,Vs,Xo,new ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function kr(i,e,t,n,r,s){Di.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(tr.x=s*Di.x-r*Di.y,tr.y=r*Di.x+s*Di.y):tr.copy(Di),i.copy(e),i.x+=tr.x,i.y+=tr.y,i.applyMatrix4(ac)}const Ws=new F,Xu=new F,Yu=new Ze;class si{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ws.subVectors(n,t).cross(Xu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ws),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Yu.getNormalMatrix(e),r=this.coplanarPoint(Ws).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ni=new _r,qu=new ke(.5,.5),Gr=new F;class oc{constructor(e=new si,t=new si,n=new si,r=new si,s=new si,a=new si){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Mn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],f=s[4],h=s[5],d=s[6],p=s[7],_=s[8],x=s[9],m=s[10],u=s[11],T=s[12],w=s[13],E=s[14],P=s[15];if(r[0].setComponents(l-a,p-f,u-_,P-T).normalize(),r[1].setComponents(l+a,p+f,u+_,P+T).normalize(),r[2].setComponents(l+o,p+h,u+x,P+w).normalize(),r[3].setComponents(l-o,p-h,u-x,P-w).normalize(),n)r[4].setComponents(c,d,m,E).normalize(),r[5].setComponents(l-c,p-d,u-m,P-E).normalize();else if(r[4].setComponents(l-c,p-d,u-m,P-E).normalize(),t===Mn)r[5].setComponents(l+c,p+d,u+m,P+E).normalize();else if(t===os)r[5].setComponents(c,d,m,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(e){ni.center.set(0,0,0);const t=qu.distanceTo(e.center);return ni.radius=.7071067811865476+t,ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Gr.x=r.normal.x>0?e.max.x:e.min.x,Gr.y=r.normal.y>0?e.max.y:e.min.y,Gr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lc extends pi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const us=new F,hs=new F,Yo=new yt,ir=new ao,Hr=new _r,Xs=new F,qo=new F;class Zu extends It{constructor(e=new Nt,t=new lc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)us.fromBufferAttribute(t,r-1),hs.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=us.distanceTo(hs);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere),Hr.applyMatrix4(r),Hr.radius+=s,e.ray.intersectsSphere(Hr)===!1)return;Yo.copy(r).invert(),ir.copy(e.ray).applyMatrix4(Yo);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,f=n.index,d=n.attributes.position;if(f!==null){const p=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let x=p,m=_-1;x<m;x+=l){const u=f.getX(x),T=f.getX(x+1),w=Vr(this,e,ir,c,u,T,x);w&&t.push(w)}if(this.isLineLoop){const x=f.getX(_-1),m=f.getX(p),u=Vr(this,e,ir,c,x,m,_-1);u&&t.push(u)}}else{const p=Math.max(0,a.start),_=Math.min(d.count,a.start+a.count);for(let x=p,m=_-1;x<m;x+=l){const u=Vr(this,e,ir,c,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){const x=Vr(this,e,ir,c,_-1,p,_-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Vr(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(us.fromBufferAttribute(o,r),hs.fromBufferAttribute(o,s),t.distanceSqToSegment(us,hs,Xs,qo)>n)return;Xs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Xs);if(!(l<e.near||l>e.far))return{distance:l,point:qo.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const Zo=new F,Ko=new F;class Ku extends Zu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Zo.fromBufferAttribute(t,r),Ko.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Zo.distanceTo(Ko);e.setAttribute("lineDistance",new Tt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Va extends pi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const $o=new yt,Wa=new ao,Wr=new _r,Xr=new F;class jo extends It{constructor(e=new Nt,t=new Va){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Wr.copy(n.boundingSphere),Wr.applyMatrix4(r),Wr.radius+=s,e.ray.intersectsSphere(Wr)===!1)return;$o.copy(r).invert(),Wa.copy(e.ray).applyMatrix4($o);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let _=d,x=p;_<x;_++){const m=l.getX(_);Xr.fromBufferAttribute(h,m),Jo(Xr,m,c,r,e,t,this)}}else{const d=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let _=d,x=p;_<x;_++)Xr.fromBufferAttribute(h,_),Jo(Xr,_,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Jo(i,e,t,n,r,s,a){const o=Wa.distanceSqToPoint(i);if(o<t){const c=new F;Wa.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class $u extends kt{constructor(e,t,n,r,s,a,o,c,l){super(e,t,n,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class cc extends kt{constructor(e,t,n=hi,r,s,a,o=mn,c=mn,l,f=ur,h=1){if(f!==ur&&f!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,s,a,o,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new so(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class uc extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ps extends Nt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),l(n),f(),this.setAttribute("position",new Tt(s,3)),this.setAttribute("normal",new Tt(s.slice(),3)),this.setAttribute("uv",new Tt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const w=new F,E=new F,P=new F;for(let C=0;C<t.length;C+=3)p(t[C+0],w),p(t[C+1],E),p(t[C+2],P),c(w,E,P,T)}function c(T,w,E,P){const C=P+1,R=[];for(let N=0;N<=C;N++){R[N]=[];const S=T.clone().lerp(E,N/C),M=w.clone().lerp(E,N/C),L=C-N;for(let I=0;I<=L;I++)I===0&&N===C?R[N][I]=S:R[N][I]=S.clone().lerp(M,I/L)}for(let N=0;N<C;N++)for(let S=0;S<2*(C-N)-1;S++){const M=Math.floor(S/2);S%2===0?(d(R[N][M+1]),d(R[N+1][M]),d(R[N][M])):(d(R[N][M+1]),d(R[N+1][M+1]),d(R[N+1][M]))}}function l(T){const w=new F;for(let E=0;E<s.length;E+=3)w.x=s[E+0],w.y=s[E+1],w.z=s[E+2],w.normalize().multiplyScalar(T),s[E+0]=w.x,s[E+1]=w.y,s[E+2]=w.z}function f(){const T=new F;for(let w=0;w<s.length;w+=3){T.x=s[w+0],T.y=s[w+1],T.z=s[w+2];const E=m(T)/2/Math.PI+.5,P=u(T)/Math.PI+.5;a.push(E,1-P)}_(),h()}function h(){for(let T=0;T<a.length;T+=6){const w=a[T+0],E=a[T+2],P=a[T+4],C=Math.max(w,E,P),R=Math.min(w,E,P);C>.9&&R<.1&&(w<.2&&(a[T+0]+=1),E<.2&&(a[T+2]+=1),P<.2&&(a[T+4]+=1))}}function d(T){s.push(T.x,T.y,T.z)}function p(T,w){const E=T*3;w.x=e[E+0],w.y=e[E+1],w.z=e[E+2]}function _(){const T=new F,w=new F,E=new F,P=new F,C=new ke,R=new ke,N=new ke;for(let S=0,M=0;S<s.length;S+=9,M+=6){T.set(s[S+0],s[S+1],s[S+2]),w.set(s[S+3],s[S+4],s[S+5]),E.set(s[S+6],s[S+7],s[S+8]),C.set(a[M+0],a[M+1]),R.set(a[M+2],a[M+3]),N.set(a[M+4],a[M+5]),P.copy(T).add(w).add(E).divideScalar(3);const L=m(P);x(C,M+0,T,L),x(R,M+2,w,L),x(N,M+4,E,L)}}function x(T,w,E,P){P<0&&T.x===1&&(a[w]=T.x-1),E.x===0&&E.z===0&&(a[w]=P/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function u(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.vertices,e.indices,e.radius,e.details)}}class lo extends ps{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new lo(e.radius,e.detail)}}class co extends ps{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new co(e.radius,e.detail)}}class xr extends Nt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,f=c+1,h=e/o,d=t/c,p=[],_=[],x=[],m=[];for(let u=0;u<f;u++){const T=u*d-a;for(let w=0;w<l;w++){const E=w*h-s;_.push(E,-T,0),x.push(0,0,1),m.push(w/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let T=0;T<o;T++){const w=T+l*u,E=T+l*(u+1),P=T+1+l*(u+1),C=T+1+l*u;p.push(w,E,C),p.push(E,P,C)}this.setIndex(p),this.setAttribute("position",new Tt(_,3)),this.setAttribute("normal",new Tt(x,3)),this.setAttribute("uv",new Tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xr(e.width,e.height,e.widthSegments,e.heightSegments)}}class uo extends Nt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],c=[],l=[],f=new F,h=new F,d=new F;for(let p=0;p<=n;p++)for(let _=0;_<=r;_++){const x=_/r*s,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),l.push(_/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=r;_++){const x=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,u=(r+1)*(p-1)+_,T=(r+1)*p+_;a.push(x,m,T),a.push(m,u,T)}this.setIndex(a),this.setAttribute("position",new Tt(o,3)),this.setAttribute("normal",new Tt(c,3)),this.setAttribute("uv",new Tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ju extends zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ju extends pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=au,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qu extends pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class hc extends rc{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class eh extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class th{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class nh extends Ku{constructor(e=10,t=10,n=4473924,r=8947848){n=new Ve(n),r=new Ve(r);const s=t/2,a=e/t,o=e/2,c=[],l=[];for(let d=0,p=0,_=-o;d<=t;d++,_+=a){c.push(-o,0,_,o,0,_),c.push(_,0,-o,_,0,o);const x=d===s?n:r;x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3}const f=new Nt;f.setAttribute("position",new Tt(c,3)),f.setAttribute("color",new Tt(l,3));const h=new lc({vertexColors:!0,toneMapped:!1});super(f,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Qo(i,e,t,n){const r=ih(n);switch(t){case Yl:return i*e;case Zl:return i*e/r.components*r.byteLength;case no:return i*e/r.components*r.byteLength;case Kl:return i*e*2/r.components*r.byteLength;case io:return i*e*2/r.components*r.byteLength;case ql:return i*e*3/r.components*r.byteLength;case dn:return i*e*4/r.components*r.byteLength;case ro:return i*e*4/r.components*r.byteLength;case Qr:case es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ts:case ns:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case pa:case ga:return Math.max(i,16)*Math.max(e,8)/4;case da:case ma:return Math.max(i,8)*Math.max(e,8)/2;case _a:case va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ya:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ba:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case wa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Aa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ra:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Da:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ia:case Na:case Fa:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Oa:case Ba:return Math.ceil(i/4)*Math.ceil(e/4)*8;case za:case ka:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ih(i){switch(i){case Un:case Hl:return{byteLength:1,components:1};case lr:case Vl:case Ln:return{byteLength:2,components:1};case eo:case to:return{byteLength:2,components:4};case hi:case Qa:case Rn:return{byteLength:4,components:1};case Wl:case Xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ja}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ja);function fc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function rh(i){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,f),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const f=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,f);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],x=h[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const x=h[p];i.bufferSubData(l,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var sh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ah=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,oh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,lh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ch=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,ph=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,mh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_h=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Mh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rh=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ch=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ph=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ih=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Nh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Oh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,kh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$h=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,tf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,af=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,of=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,df=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_f=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,If=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Nf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ff=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$f=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ed=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ad=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ld=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ud=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,md=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_d=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Md=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ed=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Td=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ad=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rd=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ld=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ud=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Id=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nd=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Od=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bd=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$e={alphahash_fragment:sh,alphahash_pars_fragment:ah,alphamap_fragment:oh,alphamap_pars_fragment:lh,alphatest_fragment:ch,alphatest_pars_fragment:uh,aomap_fragment:hh,aomap_pars_fragment:fh,batching_pars_vertex:dh,batching_vertex:ph,begin_vertex:mh,beginnormal_vertex:gh,bsdfs:_h,iridescence_fragment:vh,bumpmap_pars_fragment:xh,clipping_planes_fragment:Mh,clipping_planes_pars_fragment:yh,clipping_planes_pars_vertex:Sh,clipping_planes_vertex:Eh,color_fragment:bh,color_pars_fragment:Th,color_pars_vertex:wh,color_vertex:Ah,common:Rh,cube_uv_reflection_fragment:Ch,defaultnormal_vertex:Ph,displacementmap_pars_vertex:Lh,displacementmap_vertex:Dh,emissivemap_fragment:Uh,emissivemap_pars_fragment:Ih,colorspace_fragment:Nh,colorspace_pars_fragment:Fh,envmap_fragment:Oh,envmap_common_pars_fragment:Bh,envmap_pars_fragment:zh,envmap_pars_vertex:kh,envmap_physical_pars_fragment:jh,envmap_vertex:Gh,fog_vertex:Hh,fog_pars_vertex:Vh,fog_fragment:Wh,fog_pars_fragment:Xh,gradientmap_pars_fragment:Yh,lightmap_pars_fragment:qh,lights_lambert_fragment:Zh,lights_lambert_pars_fragment:Kh,lights_pars_begin:$h,lights_toon_fragment:Jh,lights_toon_pars_fragment:Qh,lights_phong_fragment:ef,lights_phong_pars_fragment:tf,lights_physical_fragment:nf,lights_physical_pars_fragment:rf,lights_fragment_begin:sf,lights_fragment_maps:af,lights_fragment_end:of,logdepthbuf_fragment:lf,logdepthbuf_pars_fragment:cf,logdepthbuf_pars_vertex:uf,logdepthbuf_vertex:hf,map_fragment:ff,map_pars_fragment:df,map_particle_fragment:pf,map_particle_pars_fragment:mf,metalnessmap_fragment:gf,metalnessmap_pars_fragment:_f,morphinstance_vertex:vf,morphcolor_vertex:xf,morphnormal_vertex:Mf,morphtarget_pars_vertex:yf,morphtarget_vertex:Sf,normal_fragment_begin:Ef,normal_fragment_maps:bf,normal_pars_fragment:Tf,normal_pars_vertex:wf,normal_vertex:Af,normalmap_pars_fragment:Rf,clearcoat_normal_fragment_begin:Cf,clearcoat_normal_fragment_maps:Pf,clearcoat_pars_fragment:Lf,iridescence_pars_fragment:Df,opaque_fragment:Uf,packing:If,premultiplied_alpha_fragment:Nf,project_vertex:Ff,dithering_fragment:Of,dithering_pars_fragment:Bf,roughnessmap_fragment:zf,roughnessmap_pars_fragment:kf,shadowmap_pars_fragment:Gf,shadowmap_pars_vertex:Hf,shadowmap_vertex:Vf,shadowmask_pars_fragment:Wf,skinbase_vertex:Xf,skinning_pars_vertex:Yf,skinning_vertex:qf,skinnormal_vertex:Zf,specularmap_fragment:Kf,specularmap_pars_fragment:$f,tonemapping_fragment:jf,tonemapping_pars_fragment:Jf,transmission_fragment:Qf,transmission_pars_fragment:ed,uv_pars_fragment:td,uv_pars_vertex:nd,uv_vertex:id,worldpos_vertex:rd,background_vert:sd,background_frag:ad,backgroundCube_vert:od,backgroundCube_frag:ld,cube_vert:cd,cube_frag:ud,depth_vert:hd,depth_frag:fd,distanceRGBA_vert:dd,distanceRGBA_frag:pd,equirect_vert:md,equirect_frag:gd,linedashed_vert:_d,linedashed_frag:vd,meshbasic_vert:xd,meshbasic_frag:Md,meshlambert_vert:yd,meshlambert_frag:Sd,meshmatcap_vert:Ed,meshmatcap_frag:bd,meshnormal_vert:Td,meshnormal_frag:wd,meshphong_vert:Ad,meshphong_frag:Rd,meshphysical_vert:Cd,meshphysical_frag:Pd,meshtoon_vert:Ld,meshtoon_frag:Dd,points_vert:Ud,points_frag:Id,shadow_vert:Nd,shadow_frag:Fd,sprite_vert:Od,sprite_frag:Bd},pe={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},_n={basic:{uniforms:Bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:Bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:Bt([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:Bt([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:Bt([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ve(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:Bt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:Bt([pe.points,pe.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:Bt([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:Bt([pe.common,pe.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:Bt([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:Bt([pe.sprite,pe.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distanceRGBA:{uniforms:Bt([pe.common,pe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distanceRGBA_vert,fragmentShader:$e.distanceRGBA_frag},shadow:{uniforms:Bt([pe.lights,pe.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};_n.physical={uniforms:Bt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};const Yr={r:0,b:0,g:0},ii=new In,zd=new yt;function kd(i,e,t,n,r,s,a){const o=new Ve(0);let c=s===!0?0:1,l,f,h=null,d=0,p=null;function _(w){let E=w.isScene===!0?w.background:null;return E&&E.isTexture&&(E=(w.backgroundBlurriness>0?t:e).get(E)),E}function x(w){let E=!1;const P=_(w);P===null?u(o,c):P&&P.isColor&&(u(P,1),E=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,E){const P=_(E);P&&(P.isCubeTexture||P.mapping===ds)?(f===void 0&&(f=new en(new vr(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:Hi(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,R,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),ii.copy(E.backgroundRotation),ii.x*=-1,ii.y*=-1,ii.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(ii.y*=-1,ii.z*=-1),f.material.uniforms.envMap.value=P,f.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(zd.makeRotationFromEuler(ii)),f.material.toneMapped=tt.getTransfer(P.colorSpace)!==at,(h!==P||d!==P.version||p!==i.toneMapping)&&(f.material.needsUpdate=!0,h=P,d=P.version,p=i.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new en(new xr(2,2),new zt({name:"BackgroundMaterial",uniforms:Hi(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=tt.getTransfer(P.colorSpace)!==at,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||d!==P.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=P,d=P.version,p=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function u(w,E){w.getRGB(Yr,ic(i)),n.buffers.color.setClear(Yr.r,Yr.g,Yr.b,E,a)}function T(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,E=1){o.set(w),c=E,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,u(o,c)},render:x,addToRenderList:m,dispose:T}}function Gd(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(M,L,I,q,te){let K=!1;const $=h(q,I,L);s!==$&&(s=$,l(s.object)),K=p(M,q,I,te),K&&_(M,q,I,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,E(M,L,I,q),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function f(M){return i.deleteVertexArray(M)}function h(M,L,I){const q=I.wireframe===!0;let te=n[M.id];te===void 0&&(te={},n[M.id]=te);let K=te[L.id];K===void 0&&(K={},te[L.id]=K);let $=K[q];return $===void 0&&($=d(c()),K[q]=$),$}function d(M){const L=[],I=[],q=[];for(let te=0;te<t;te++)L[te]=0,I[te]=0,q[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:q,object:M,attributes:{},index:null}}function p(M,L,I,q){const te=s.attributes,K=L.attributes;let $=0;const Q=I.getAttributes();for(const V in Q)if(Q[V].location>=0){const ve=te[V];let we=K[V];if(we===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(we=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(we=M.instanceColor)),ve===void 0||ve.attribute!==we||we&&ve.data!==we.data)return!0;$++}return s.attributesNum!==$||s.index!==q}function _(M,L,I,q){const te={},K=L.attributes;let $=0;const Q=I.getAttributes();for(const V in Q)if(Q[V].location>=0){let ve=K[V];ve===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(ve=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(ve=M.instanceColor));const we={};we.attribute=ve,ve&&ve.data&&(we.data=ve.data),te[V]=we,$++}s.attributes=te,s.attributesNum=$,s.index=q}function x(){const M=s.newAttributes;for(let L=0,I=M.length;L<I;L++)M[L]=0}function m(M){u(M,0)}function u(M,L){const I=s.newAttributes,q=s.enabledAttributes,te=s.attributeDivisors;I[M]=1,q[M]===0&&(i.enableVertexAttribArray(M),q[M]=1),te[M]!==L&&(i.vertexAttribDivisor(M,L),te[M]=L)}function T(){const M=s.newAttributes,L=s.enabledAttributes;for(let I=0,q=L.length;I<q;I++)L[I]!==M[I]&&(i.disableVertexAttribArray(I),L[I]=0)}function w(M,L,I,q,te,K,$){$===!0?i.vertexAttribIPointer(M,L,I,te,K):i.vertexAttribPointer(M,L,I,q,te,K)}function E(M,L,I,q){x();const te=q.attributes,K=I.getAttributes(),$=L.defaultAttributeValues;for(const Q in K){const V=K[Q];if(V.location>=0){let he=te[Q];if(he===void 0&&(Q==="instanceMatrix"&&M.instanceMatrix&&(he=M.instanceMatrix),Q==="instanceColor"&&M.instanceColor&&(he=M.instanceColor)),he!==void 0){const ve=he.normalized,we=he.itemSize,je=e.get(he);if(je===void 0)continue;const st=je.buffer,ut=je.type,Qe=je.bytesPerElement,j=ut===i.INT||ut===i.UNSIGNED_INT||he.gpuType===Qa;if(he.isInterleavedBufferAttribute){const ne=he.data,Me=ne.stride,Fe=he.offset;if(ne.isInstancedInterleavedBuffer){for(let Pe=0;Pe<V.locationSize;Pe++)u(V.location+Pe,ne.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Pe=0;Pe<V.locationSize;Pe++)m(V.location+Pe);i.bindBuffer(i.ARRAY_BUFFER,st);for(let Pe=0;Pe<V.locationSize;Pe++)w(V.location+Pe,we/V.locationSize,ut,ve,Me*Qe,(Fe+we/V.locationSize*Pe)*Qe,j)}else{if(he.isInstancedBufferAttribute){for(let ne=0;ne<V.locationSize;ne++)u(V.location+ne,he.meshPerAttribute);M.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ne=0;ne<V.locationSize;ne++)m(V.location+ne);i.bindBuffer(i.ARRAY_BUFFER,st);for(let ne=0;ne<V.locationSize;ne++)w(V.location+ne,we/V.locationSize,ut,ve,we*Qe,we/V.locationSize*ne*Qe,j)}}else if($!==void 0){const ve=$[Q];if(ve!==void 0)switch(ve.length){case 2:i.vertexAttrib2fv(V.location,ve);break;case 3:i.vertexAttrib3fv(V.location,ve);break;case 4:i.vertexAttrib4fv(V.location,ve);break;default:i.vertexAttrib1fv(V.location,ve)}}}}T()}function P(){N();for(const M in n){const L=n[M];for(const I in L){const q=L[I];for(const te in q)f(q[te].object),delete q[te];delete L[I]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const L=n[M.id];for(const I in L){const q=L[I];for(const te in q)f(q[te].object),delete q[te];delete L[I]}delete n[M.id]}function R(M){for(const L in n){const I=n[L];if(I[M.id]===void 0)continue;const q=I[M.id];for(const te in q)f(q[te].object),delete q[te];delete I[M.id]}}function N(){S(),a=!0,s!==r&&(s=r,l(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:N,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function Hd(i,e,t){let n;function r(l){n=l}function s(l,f){i.drawArrays(n,l,f),t.update(f,n,1)}function a(l,f,h){h!==0&&(i.drawArraysInstanced(n,l,f,h),t.update(f,n,h))}function o(l,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,f,0,h);let p=0;for(let _=0;_<h;_++)p+=f[_];t.update(p,n,1)}function c(l,f,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)a(l[_],f[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,f,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=f[x]*d[x];t.update(_,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Vd(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==dn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const N=R===Ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Un&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Rn&&!N)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:T,maxVaryings:w,maxFragmentUniforms:E,vertexTextures:P,maxSamples:C}}function Wd(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new si,o=new Ze,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,u=i.get(h);if(!r||_===null||_.length===0||s&&!m)s?f(null):l();else{const T=s?0:n,w=T*4;let E=u.clippingState||null;c.value=E,E=f(_,d,w,p);for(let P=0;P!==w;++P)E[P]=t[P];u.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,d,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const u=p+x*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<u)&&(m=new Float32Array(u));for(let w=0,E=p;w!==x;++w,E+=4)a.copy(h[w]).applyMatrix4(T,o),a.normal.toArray(m,E),m[E+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Xd(i){let e=new WeakMap;function t(a,o){return o===ua?a.mapping=zi:o===ha&&(a.mapping=ki),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ua||o===ha)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new Gu(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",r),t(l.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const Ii=4,el=[.125,.215,.35,.446,.526,.582],li=20,Ys=new hc,tl=new Ve;let qs=null,Zs=0,Ks=0,$s=!1;const ai=(1+Math.sqrt(5))/2,Ui=1/ai,nl=[new F(-ai,Ui,0),new F(ai,Ui,0),new F(-Ui,0,ai),new F(Ui,0,ai),new F(0,ai,-Ui),new F(0,ai,Ui),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Yd=new F;class il{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Yd}=s;qs=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Ks=this._renderer.getActiveMipmapLevel(),$s=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=al(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(qs,Zs,Ks),this._renderer.xr.enabled=$s,e.scissorTest=!1,qr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zi||e.mapping===ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),qs=this._renderer.getRenderTarget(),Zs=this._renderer.getActiveCubeFace(),Ks=this._renderer.getActiveMipmapLevel(),$s=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:xn,minFilter:xn,generateMipmaps:!1,type:Ln,format:dn,colorSpace:Gi,depthBuffer:!1},r=rl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qd(s)),this._blurMaterial=Zd(s,e,t)}return r}_compileMaterial(e){const t=new en(this._lodPlanes[0],e);this._renderer.compile(t,Ys)}_sceneToCubeUV(e,t,n,r,s){const c=new on(90,1,t,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(tl),h.toneMapping=Xn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const x=new Fi({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1}),m=new en(new vr,x);let u=!1;const T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,u=!0):(x.color.copy(tl),u=!0);for(let w=0;w<6;w++){const E=w%3;E===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[w],s.y,s.z)):E===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[w]));const P=this._cubeSize;qr(r,E*P,w>2?P:0,P,P),h.setRenderTarget(r),u&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===zi||e.mapping===ki;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=al()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new en(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;qr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ys)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=nl[(r-s-1)%nl.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new en(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*li-1),x=s/_,m=isFinite(s)?1+Math.floor(f*x):li;m>li&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);const u=[];let T=0;for(let R=0;R<li;++R){const N=R/x,S=Math.exp(-N*N/2);u.push(S),R===0?T+=S:R<m&&(T+=2*S)}for(let R=0;R<u.length;R++)u[R]=u[R]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=_,d.mipInt.value=w-n;const E=this._sizeLods[r],P=3*E*(r>w-Ii?r-w+Ii:0),C=4*(this._cubeSize-E);qr(t,P,C,3*E,2*E),c.setRenderTarget(t),c.render(h,Ys)}}function qd(i){const e=[],t=[],n=[];let r=i;const s=i-Ii+1+el.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let c=1/o;a>i-Ii?c=el[a-i+Ii-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),f=-l,h=1+l,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,_=6,x=3,m=2,u=1,T=new Float32Array(x*_*p),w=new Float32Array(m*_*p),E=new Float32Array(u*_*p);for(let C=0;C<p;C++){const R=C%3*2/3-1,N=C>2?0:-1,S=[R,N,0,R+2/3,N,0,R+2/3,N+1,0,R,N,0,R+2/3,N+1,0,R,N+1,0];T.set(S,x*_*C),w.set(d,m*_*C);const M=[C,C,C,C,C,C];E.set(M,u*_*C)}const P=new Nt;P.setAttribute("position",new Xt(T,x)),P.setAttribute("uv",new Xt(w,m)),P.setAttribute("faceIndex",new Xt(E,u)),e.push(P),r>Ii&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rl(i,e,t){const n=new gn(i,e,t);return n.texture.mapping=ds,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Zd(i,e,t){const n=new Float32Array(li),r=new F(0,1,0);return new zt({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function sl(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function al(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function ho(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Kd(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ua||c===ha,f=c===zi||c===ki;if(l||f){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new il(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||f&&p&&r(p)?(t===null&&(t=new il(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let f=0;f<l;f++)o[f]!==void 0&&c++;return c===l}function s(o){const c=o.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function $d(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&fr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function jd(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",a),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let w=0,E=T.length;w<E;w+=3){const P=T[w+0],C=T[w+1],R=T[w+2];d.push(P,C,C,R,R,P)}}else if(_!==void 0){const T=_.array;x=_.version;for(let w=0,E=T.length/3-1;w<E;w+=3){const P=w+0,C=w+1,R=w+2;d.push(P,C,C,R,R,P)}}else return;const m=new(jl(d)?nc:tc)(d,1);m.version=x;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function f(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return s.get(h)}return{get:o,update:c,getWireframeAttribute:f}}function Jd(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,p){i.drawElements(n,p,s,d*a),t.update(p,n,1)}function l(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,s,d*a,_),t.update(p,n,_))}function f(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];t.update(m,n,1)}function h(d,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)l(d[u]/a,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,x,0,_);let u=0;for(let T=0;T<_;T++)u+=p[T]*x[T];t.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function Qd(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function ep(i,e,t){const n=new WeakMap,r=new St;function s(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let M=function(){N.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let E=0;_===!0&&(E=1),x===!0&&(E=2),m===!0&&(E=3);let P=o.attributes.position.count*E,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const R=new Float32Array(P*C*4*h),N=new Jl(R,P,C,h);N.type=Rn,N.needsUpdate=!0;const S=E*4;for(let L=0;L<h;L++){const I=u[L],q=T[L],te=w[L],K=P*C*4*L;for(let $=0;$<I.count;$++){const Q=$*S;_===!0&&(r.fromBufferAttribute(I,$),R[K+Q+0]=r.x,R[K+Q+1]=r.y,R[K+Q+2]=r.z,R[K+Q+3]=0),x===!0&&(r.fromBufferAttribute(q,$),R[K+Q+4]=r.x,R[K+Q+5]=r.y,R[K+Q+6]=r.z,R[K+Q+7]=0),m===!0&&(r.fromBufferAttribute(te,$),R[K+Q+8]=r.x,R[K+Q+9]=r.y,R[K+Q+10]=r.z,R[K+Q+11]=te.itemSize===4?r.w:1)}}d={count:h,texture:N,size:new ke(P,C)},n.set(o,d),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const x=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function tp(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function a(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:a}}const dc=new kt,ol=new cc(1,1),pc=new Jl,mc=new Tu,gc=new sc,ll=[],cl=[],ul=new Float32Array(16),hl=new Float32Array(9),fl=new Float32Array(4);function Yi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ll[r];if(s===void 0&&(s=new Float32Array(r),ll[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function At(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ms(i,e){let t=cl[e];t===void 0&&(t=new Int32Array(e),cl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function np(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),At(t,e)}}function rp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),At(t,e)}}function sp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),At(t,e)}}function ap(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;fl.set(n),i.uniformMatrix2fv(this.addr,!1,fl),At(t,n)}}function op(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;hl.set(n),i.uniformMatrix3fv(this.addr,!1,hl),At(t,n)}}function lp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),At(t,e)}else{if(wt(t,n))return;ul.set(n),i.uniformMatrix4fv(this.addr,!1,ul),At(t,n)}}function cp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),At(t,e)}}function hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),At(t,e)}}function fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),At(t,e)}}function dp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function pp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),At(t,e)}}function mp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),At(t,e)}}function gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),At(t,e)}}function _p(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(ol.compareFunction=$l,s=ol):s=dc,t.setTexture2D(e||s,r)}function vp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||mc,r)}function xp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||gc,r)}function Mp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||pc,r)}function yp(i){switch(i){case 5126:return np;case 35664:return ip;case 35665:return rp;case 35666:return sp;case 35674:return ap;case 35675:return op;case 35676:return lp;case 5124:case 35670:return cp;case 35667:case 35671:return up;case 35668:case 35672:return hp;case 35669:case 35673:return fp;case 5125:return dp;case 36294:return pp;case 36295:return mp;case 36296:return gp;case 35678:case 36198:case 36298:case 36306:case 35682:return _p;case 35679:case 36299:case 36307:return vp;case 35680:case 36300:case 36308:case 36293:return xp;case 36289:case 36303:case 36311:case 36292:return Mp}}function Sp(i,e){i.uniform1fv(this.addr,e)}function Ep(i,e){const t=Yi(e,this.size,2);i.uniform2fv(this.addr,t)}function bp(i,e){const t=Yi(e,this.size,3);i.uniform3fv(this.addr,t)}function Tp(i,e){const t=Yi(e,this.size,4);i.uniform4fv(this.addr,t)}function wp(i,e){const t=Yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ap(i,e){const t=Yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Rp(i,e){const t=Yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Cp(i,e){i.uniform1iv(this.addr,e)}function Pp(i,e){i.uniform2iv(this.addr,e)}function Lp(i,e){i.uniform3iv(this.addr,e)}function Dp(i,e){i.uniform4iv(this.addr,e)}function Up(i,e){i.uniform1uiv(this.addr,e)}function Ip(i,e){i.uniform2uiv(this.addr,e)}function Np(i,e){i.uniform3uiv(this.addr,e)}function Fp(i,e){i.uniform4uiv(this.addr,e)}function Op(i,e,t){const n=this.cache,r=e.length,s=ms(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||dc,s[a])}function Bp(i,e,t){const n=this.cache,r=e.length,s=ms(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||mc,s[a])}function zp(i,e,t){const n=this.cache,r=e.length,s=ms(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||gc,s[a])}function kp(i,e,t){const n=this.cache,r=e.length,s=ms(t,r);wt(n,s)||(i.uniform1iv(this.addr,s),At(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||pc,s[a])}function Gp(i){switch(i){case 5126:return Sp;case 35664:return Ep;case 35665:return bp;case 35666:return Tp;case 35674:return wp;case 35675:return Ap;case 35676:return Rp;case 5124:case 35670:return Cp;case 35667:case 35671:return Pp;case 35668:case 35672:return Lp;case 35669:case 35673:return Dp;case 5125:return Up;case 36294:return Ip;case 36295:return Np;case 36296:return Fp;case 35678:case 36198:case 36298:case 36306:case 35682:return Op;case 35679:case 36299:case 36307:return Bp;case 35680:case 36300:case 36308:case 36293:return zp;case 36289:case 36303:case 36311:case 36292:return kp}}class Hp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yp(t.type)}}class Vp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Gp(t.type)}}class Wp{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const js=/(\w+)(\])?(\[|\.)?/g;function dl(i,e){i.seq.push(e),i.map[e.id]=e}function Xp(i,e,t){const n=i.name,r=n.length;for(js.lastIndex=0;;){const s=js.exec(n),a=js.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){dl(t,l===void 0?new Hp(o,i,e):new Vp(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Wp(o),dl(t,h)),t=h}}}class is{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Xp(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function pl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Yp=37297;let qp=0;function Zp(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ml=new Ze;function Kp(i){tt._getMatrix(ml,tt.workingColorSpace,i);const e=`mat3( ${ml.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case as:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function gl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Zp(i.getShaderSource(e),o)}else return s}function $p(i,e){const t=Kp(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function jp(i,e){let t;switch(e){case Nl:t="Linear";break;case Fl:t="Reinhard";break;case Ol:t="Cineon";break;case Ja:t="ACESFilmic";break;case zl:t="AgX";break;case kl:t="Neutral";break;case Bl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Zr=new F;function Jp(){tt.getLuminanceCoefficients(Zr);const i=Zr.x.toFixed(4),e=Zr.y.toFixed(4),t=Zr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(rr).join(`
`)}function em(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function tm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function rr(i){return i!==""}function _l(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xa(i){return i.replace(nm,rm)}const im=new Map;function rm(i,e){let t=$e[e];if(t===void 0){const n=im.get(e);if(n!==void 0)t=$e[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xa(t)}const sm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xl(i){return i.replace(sm,am)}function am(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ml(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function om(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ul?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===wn&&(e="SHADOWMAP_TYPE_VSM"),e}function lm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case zi:case ki:e="ENVMAP_TYPE_CUBE";break;case ds:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cm(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ki&&(e="ENVMAP_MODE_REFRACTION"),e}function um(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Il:e="ENVMAP_BLENDING_MULTIPLY";break;case iu:e="ENVMAP_BLENDING_MIX";break;case ru:e="ENVMAP_BLENDING_ADD";break}return e}function hm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function fm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=om(t),l=lm(t),f=cm(t),h=um(t),d=hm(t),p=Qp(t),_=em(s),x=r.createProgram();let m,u,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(rr).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(rr).join(`
`),u.length>0&&(u+=`
`)):(m=[Ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rr).join(`
`),u=[Ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xn?"#define TONE_MAPPING":"",t.toneMapping!==Xn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Xn?jp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,$p("linearToOutputTexel",t.outputColorSpace),Jp(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(rr).join(`
`)),a=Xa(a),a=_l(a,t),a=vl(a,t),o=Xa(o),o=_l(o,t),o=vl(o,t),a=xl(a),o=xl(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===wo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const w=T+m+a,E=T+u+o,P=pl(r,r.VERTEX_SHADER,w),C=pl(r,r.FRAGMENT_SHADER,E);r.attachShader(x,P),r.attachShader(x,C),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(L){if(i.debug.checkShaderErrors){const I=r.getProgramInfoLog(x)||"",q=r.getShaderInfoLog(P)||"",te=r.getShaderInfoLog(C)||"",K=I.trim(),$=q.trim(),Q=te.trim();let V=!0,he=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,P,C);else{const ve=gl(r,P,"vertex"),we=gl(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+K+`
`+ve+`
`+we)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):($===""||Q==="")&&(he=!1);he&&(L.diagnostics={runnable:V,programLog:K,vertexShader:{log:$,prefix:m},fragmentShader:{log:Q,prefix:u}})}r.deleteShader(P),r.deleteShader(C),N=new is(r,x),S=tm(r,x)}let N;this.getUniforms=function(){return N===void 0&&R(this),N};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(x,Yp)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qp++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=C,this}let dm=0;class pm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mm(e),t.set(e,n)),n}}class mm{constructor(e){this.id=dm++,this.code=e,this.usedTimes=0}}function gm(i,e,t,n,r,s,a){const o=new Ql,c=new pm,l=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,M,L,I,q){const te=I.fog,K=q.geometry,$=S.isMeshStandardMaterial?I.environment:null,Q=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),V=Q&&Q.mapping===ds?Q.image.height:null,he=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const ve=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,we=ve!==void 0?ve.length:0;let je=0;K.morphAttributes.position!==void 0&&(je=1),K.morphAttributes.normal!==void 0&&(je=2),K.morphAttributes.color!==void 0&&(je=3);let st,ut,Qe,j;if(he){const ee=_n[he];st=ee.vertexShader,ut=ee.fragmentShader}else st=S.vertexShader,ut=S.fragmentShader,c.update(S),Qe=c.getVertexShaderID(S),j=c.getFragmentShaderID(S);const ne=i.getRenderTarget(),Me=i.state.buffers.depth.getReversed(),Fe=q.isInstancedMesh===!0,Pe=q.isBatchedMesh===!0,G=!!S.map,Ct=!!S.matcap,A=!!Q,ot=!!S.aoMap,We=!!S.lightMap,Ge=!!S.bumpMap,be=!!S.normalMap,ft=!!S.displacementMap,Te=!!S.emissiveMap,He=!!S.metalnessMap,xt=!!S.roughnessMap,pt=S.anisotropy>0,b=S.clearcoat>0,g=S.dispersion>0,B=S.iridescence>0,Z=S.sheen>0,ie=S.transmission>0,Y=pt&&!!S.anisotropyMap,Le=b&&!!S.clearcoatMap,ce=b&&!!S.clearcoatNormalMap,Ae=b&&!!S.clearcoatRoughnessMap,Re=B&&!!S.iridescenceMap,oe=B&&!!S.iridescenceThicknessMap,me=Z&&!!S.sheenColorMap,Oe=Z&&!!S.sheenRoughnessMap,Ce=!!S.specularMap,de=!!S.specularColorMap,Ye=!!S.specularIntensityMap,D=ie&&!!S.transmissionMap,le=ie&&!!S.thicknessMap,ue=!!S.gradientMap,ye=!!S.alphaMap,se=S.alphaTest>0,y=!!S.alphaHash,k=!!S.extensions;let X=Xn;S.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(X=i.toneMapping);const J={shaderID:he,shaderType:S.type,shaderName:S.name,vertexShader:st,fragmentShader:ut,defines:S.defines,customVertexShaderID:Qe,customFragmentShaderID:j,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:Pe,batchingColor:Pe&&q._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&q.instanceColor!==null,instancingMorph:Fe&&q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Gi,alphaToCoverage:!!S.alphaToCoverage,map:G,matcap:Ct,envMap:A,envMapMode:A&&Q.mapping,envMapCubeUVHeight:V,aoMap:ot,lightMap:We,bumpMap:Ge,normalMap:be,displacementMap:d&&ft,emissiveMap:Te,normalMapObjectSpace:be&&S.normalMapType===cu,normalMapTangentSpace:be&&S.normalMapType===lu,metalnessMap:He,roughnessMap:xt,anisotropy:pt,anisotropyMap:Y,clearcoat:b,clearcoatMap:Le,clearcoatNormalMap:ce,clearcoatRoughnessMap:Ae,dispersion:g,iridescence:B,iridescenceMap:Re,iridescenceThicknessMap:oe,sheen:Z,sheenColorMap:me,sheenRoughnessMap:Oe,specularMap:Ce,specularColorMap:de,specularIntensityMap:Ye,transmission:ie,transmissionMap:D,thicknessMap:le,gradientMap:ue,opaque:S.transparent===!1&&S.blending===Pn&&S.alphaToCoverage===!1,alphaMap:ye,alphaTest:se,alphaHash:y,combine:S.combine,mapUv:G&&x(S.map.channel),aoMapUv:ot&&x(S.aoMap.channel),lightMapUv:We&&x(S.lightMap.channel),bumpMapUv:Ge&&x(S.bumpMap.channel),normalMapUv:be&&x(S.normalMap.channel),displacementMapUv:ft&&x(S.displacementMap.channel),emissiveMapUv:Te&&x(S.emissiveMap.channel),metalnessMapUv:He&&x(S.metalnessMap.channel),roughnessMapUv:xt&&x(S.roughnessMap.channel),anisotropyMapUv:Y&&x(S.anisotropyMap.channel),clearcoatMapUv:Le&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ce&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Re&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:me&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&x(S.sheenRoughnessMap.channel),specularMapUv:Ce&&x(S.specularMap.channel),specularColorMapUv:de&&x(S.specularColorMap.channel),specularIntensityMapUv:Ye&&x(S.specularIntensityMap.channel),transmissionMapUv:D&&x(S.transmissionMap.channel),thicknessMapUv:le&&x(S.thicknessMap.channel),alphaMapUv:ye&&x(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(be||pt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!K.attributes.uv&&(G||ye),fog:!!te,useFog:S.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Me,skinning:q.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:we,morphTextureStride:je,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:X,decodeVideoTexture:G&&S.map.isVideoTexture===!0&&tt.getTransfer(S.map.colorSpace)===at,decodeVideoTextureEmissive:Te&&S.emissiveMap.isVideoTexture===!0&&tt.getTransfer(S.emissiveMap.colorSpace)===at,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===An,flipSided:S.side===Wt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:k&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(k&&S.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return J.vertexUv1s=l.has(1),J.vertexUv2s=l.has(2),J.vertexUv3s=l.has(3),l.clear(),J}function u(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)M.push(L),M.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(T(M,S),w(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function T(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function w(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function E(S){const M=_[S.type];let L;if(M){const I=_n[M];L=dr.clone(I.uniforms)}else L=S.uniforms;return L}function P(S,M){let L;for(let I=0,q=f.length;I<q;I++){const te=f[I];if(te.cacheKey===M){L=te,++L.usedTimes;break}}return L===void 0&&(L=new fm(i,M,S,s),f.push(L)),L}function C(S){if(--S.usedTimes===0){const M=f.indexOf(S);f[M]=f[f.length-1],f.pop(),S.destroy()}}function R(S){c.remove(S)}function N(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:E,acquireProgram:P,releaseProgram:C,releaseShaderCache:R,programs:f,dispose:N}}function _m(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function vm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Sl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,p,_,x,m){let u=i[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},i[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=p,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=x,u.group=m),e++,u}function o(h,d,p,_,x,m){const u=a(h,d,p,_,x,m);p.transmission>0?n.push(u):p.transparent===!0?r.push(u):t.push(u)}function c(h,d,p,_,x,m){const u=a(h,d,p,_,x,m);p.transmission>0?n.unshift(u):p.transparent===!0?r.unshift(u):t.unshift(u)}function l(h,d){t.length>1&&t.sort(h||vm),n.length>1&&n.sort(d||yl),r.length>1&&r.sort(d||yl)}function f(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:c,finish:f,sort:l}}function xm(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Sl,i.set(n,[a])):r>=s.length?(a=new Sl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Mm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new Ve};break;case"SpotLight":t={position:new F,direction:new F,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":t={color:new Ve,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function ym(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Sm=0;function Em(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bm(i){const e=new Mm,t=ym(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);const r=new F,s=new yt,a=new yt;function o(l){let f=0,h=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,_=0,x=0,m=0,u=0,T=0,w=0,E=0,P=0,C=0,R=0;l.sort(Em);for(let S=0,M=l.length;S<M;S++){const L=l[S],I=L.color,q=L.intensity,te=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=I.r*q,h+=I.g*q,d+=I.b*q;else if(L.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(L.sh.coefficients[$],q);R++}else if(L.isDirectionalLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,V=t.get(L);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=L.shadow.matrix,T++}n.directional[p]=$,p++}else if(L.isSpotLight){const $=e.get(L);$.position.setFromMatrixPosition(L.matrixWorld),$.color.copy(I).multiplyScalar(q),$.distance=te,$.coneCos=Math.cos(L.angle),$.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),$.decay=L.decay,n.spot[x]=$;const Q=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,Q.updateMatrices(L),L.castShadow&&C++),n.spotLightMatrix[x]=Q.matrix,L.castShadow){const V=t.get(L);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=K,E++}x++}else if(L.isRectAreaLight){const $=e.get(L);$.color.copy(I).multiplyScalar(q),$.halfWidth.set(L.width*.5,0,0),$.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=$,m++}else if(L.isPointLight){const $=e.get(L);if($.color.copy(L.color).multiplyScalar(L.intensity),$.distance=L.distance,$.decay=L.decay,L.castShadow){const Q=L.shadow,V=t.get(L);V.shadowIntensity=Q.intensity,V.shadowBias=Q.bias,V.shadowNormalBias=Q.normalBias,V.shadowRadius=Q.radius,V.shadowMapSize=Q.mapSize,V.shadowCameraNear=Q.camera.near,V.shadowCameraFar=Q.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=K,n.pointShadowMatrix[_]=L.shadow.matrix,w++}n.point[_]=$,_++}else if(L.isHemisphereLight){const $=e.get(L);$.skyColor.copy(L.color).multiplyScalar(q),$.groundColor.copy(L.groundColor).multiplyScalar(q),n.hemi[u]=$,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=d;const N=n.hash;(N.directionalLength!==p||N.pointLength!==_||N.spotLength!==x||N.rectAreaLength!==m||N.hemiLength!==u||N.numDirectionalShadows!==T||N.numPointShadows!==w||N.numSpotShadows!==E||N.numSpotMaps!==P||N.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=E+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=R,N.directionalLength=p,N.pointLength=_,N.spotLength=x,N.rectAreaLength=m,N.hemiLength=u,N.numDirectionalShadows=T,N.numPointShadows=w,N.numSpotShadows=E,N.numSpotMaps=P,N.numLightProbes=R,n.version=Sm++)}function c(l,f){let h=0,d=0,p=0,_=0,x=0;const m=f.matrixWorldInverse;for(let u=0,T=l.length;u<T;u++){const w=l[u];if(w.isDirectionalLight){const E=n.directional[h];E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),h++}else if(w.isSpotLight){const E=n.spot[p];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),E.direction.sub(r),E.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const E=n.rectArea[_];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),a.identity(),s.copy(w.matrixWorld),s.premultiply(m),a.extractRotation(s),E.halfWidth.set(w.width*.5,0,0),E.halfHeight.set(0,w.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),_++}else if(w.isPointLight){const E=n.point[d];E.position.setFromMatrixPosition(w.matrixWorld),E.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const E=n.hemi[x];E.direction.setFromMatrixPosition(w.matrixWorld),E.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function El(i){const e=new bm(i),t=[],n=[];function r(f){l.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function a(f){n.push(f)}function o(){e.setup(t)}function c(f){e.setupView(t,f)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:s,pushShadow:a}}function Tm(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new El(i),e.set(r,[o])):s>=a.length?(o=new El(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const wm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Am=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Rm(i,e,t){let n=new oc;const r=new ke,s=new ke,a=new St,o=new Ju({depthPacking:ou}),c=new Qu,l={},f=t.maxTextureSize,h={[Zn]:Wt,[Wt]:Zn,[An]:An},d=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ke},radius:{value:4}},vertexShader:wm,fragmentShader:Am}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Nt;_.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new en(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ul;let u=this.type;this.render=function(C,R,N){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Cn),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const q=u!==wn&&this.type===wn,te=u===wn&&this.type!==wn;for(let K=0,$=C.length;K<$;K++){const Q=C[K],V=Q.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const he=V.getFrameExtents();if(r.multiply(he),s.copy(V.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/he.x),r.x=s.x*he.x,V.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/he.y),r.y=s.y*he.y,V.mapSize.y=s.y)),V.map===null||q===!0||te===!0){const we=this.type!==wn?{minFilter:mn,magFilter:mn}:{};V.map!==null&&V.map.dispose(),V.map=new gn(r.x,r.y,we),V.map.texture.name=Q.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const ve=V.getViewportCount();for(let we=0;we<ve;we++){const je=V.getViewport(we);a.set(s.x*je.x,s.y*je.y,s.x*je.z,s.y*je.w),I.viewport(a),V.updateMatrices(Q,we),n=V.getFrustum(),E(R,N,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===wn&&T(V,N),V.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,L)};function T(C,R){const N=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new gn(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(R,null,N,d,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(R,null,N,p,x,null)}function w(C,R,N,S){let M=null;const L=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=N.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const I=M.uuid,q=R.uuid;let te=l[I];te===void 0&&(te={},l[I]=te);let K=te[q];K===void 0&&(K=M.clone(),te[q]=K,R.addEventListener("dispose",P)),M=K}if(M.visible=R.visible,M.wireframe=R.wireframe,S===wn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:h[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,N.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const I=i.properties.get(M);I.light=N}return M}function E(C,R,N,S,M){if(C.visible===!1)return;if(C.layers.test(R.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===wn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const q=e.update(C),te=C.material;if(Array.isArray(te)){const K=q.groups;for(let $=0,Q=K.length;$<Q;$++){const V=K[$],he=te[V.materialIndex];if(he&&he.visible){const ve=w(C,he,S,M);C.onBeforeShadow(i,C,R,N,q,ve,V),i.renderBufferDirect(N,null,q,ve,C,V),C.onAfterShadow(i,C,R,N,q,ve,V)}}}else if(te.visible){const K=w(C,te,S,M);C.onBeforeShadow(i,C,R,N,q,K,null),i.renderBufferDirect(N,null,q,K,C,null),C.onAfterShadow(i,C,R,N,q,K,null)}}const I=C.children;for(let q=0,te=I.length;q<te;q++)E(I[q],R,N,S,M)}function P(C){C.target.removeEventListener("dispose",P);for(const N in l){const S=l[N],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Cm={[ia]:ra,[sa]:la,[aa]:ca,[Bi]:oa,[ra]:ia,[la]:sa,[ca]:aa,[oa]:Bi};function Pm(i,e){function t(){let D=!1;const le=new St;let ue=null;const ye=new St(0,0,0,0);return{setMask:function(se){ue!==se&&!D&&(i.colorMask(se,se,se,se),ue=se)},setLocked:function(se){D=se},setClear:function(se,y,k,X,J){J===!0&&(se*=X,y*=X,k*=X),le.set(se,y,k,X),ye.equals(le)===!1&&(i.clearColor(se,y,k,X),ye.copy(le))},reset:function(){D=!1,ue=null,ye.set(-1,0,0,0)}}}function n(){let D=!1,le=!1,ue=null,ye=null,se=null;return{setReversed:function(y){if(le!==y){const k=e.get("EXT_clip_control");y?k.clipControlEXT(k.LOWER_LEFT_EXT,k.ZERO_TO_ONE_EXT):k.clipControlEXT(k.LOWER_LEFT_EXT,k.NEGATIVE_ONE_TO_ONE_EXT),le=y;const X=se;se=null,this.setClear(X)}},getReversed:function(){return le},setTest:function(y){y?ne(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(y){ue!==y&&!D&&(i.depthMask(y),ue=y)},setFunc:function(y){if(le&&(y=Cm[y]),ye!==y){switch(y){case ia:i.depthFunc(i.NEVER);break;case ra:i.depthFunc(i.ALWAYS);break;case sa:i.depthFunc(i.LESS);break;case Bi:i.depthFunc(i.LEQUAL);break;case aa:i.depthFunc(i.EQUAL);break;case oa:i.depthFunc(i.GEQUAL);break;case la:i.depthFunc(i.GREATER);break;case ca:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=y}},setLocked:function(y){D=y},setClear:function(y){se!==y&&(le&&(y=1-y),i.clearDepth(y),se=y)},reset:function(){D=!1,ue=null,ye=null,se=null,le=!1}}}function r(){let D=!1,le=null,ue=null,ye=null,se=null,y=null,k=null,X=null,J=null;return{setTest:function(ee){D||(ee?ne(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(ee){le!==ee&&!D&&(i.stencilMask(ee),le=ee)},setFunc:function(ee,Ie,Se){(ue!==ee||ye!==Ie||se!==Se)&&(i.stencilFunc(ee,Ie,Se),ue=ee,ye=Ie,se=Se)},setOp:function(ee,Ie,Se){(y!==ee||k!==Ie||X!==Se)&&(i.stencilOp(ee,Ie,Se),y=ee,k=Ie,X=Se)},setLocked:function(ee){D=ee},setClear:function(ee){J!==ee&&(i.clearStencil(ee),J=ee)},reset:function(){D=!1,le=null,ue=null,ye=null,se=null,y=null,k=null,X=null,J=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let f={},h={},d=new WeakMap,p=[],_=null,x=!1,m=null,u=null,T=null,w=null,E=null,P=null,C=null,R=new Ve(0,0,0),N=0,S=!1,M=null,L=null,I=null,q=null,te=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Q=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(V)[1]),$=Q>=1):V.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),$=Q>=2);let he=null,ve={};const we=i.getParameter(i.SCISSOR_BOX),je=i.getParameter(i.VIEWPORT),st=new St().fromArray(we),ut=new St().fromArray(je);function Qe(D,le,ue,ye){const se=new Uint8Array(4),y=i.createTexture();i.bindTexture(D,y),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let k=0;k<ue;k++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(le+k,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return y}const j={};j[i.TEXTURE_2D]=Qe(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=Qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=Qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=Qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(Bi),Ge(!1),be(So),ne(i.CULL_FACE),ot(Cn);function ne(D){f[D]!==!0&&(i.enable(D),f[D]=!0)}function Me(D){f[D]!==!1&&(i.disable(D),f[D]=!1)}function Fe(D,le){return h[D]!==le?(i.bindFramebuffer(D,le),h[D]=le,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=le),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=le),!0):!1}function Pe(D,le){let ue=p,ye=!1;if(D){ue=d.get(le),ue===void 0&&(ue=[],d.set(le,ue));const se=D.textures;if(ue.length!==se.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let y=0,k=se.length;y<k;y++)ue[y]=i.COLOR_ATTACHMENT0+y;ue.length=se.length,ye=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,ye=!0);ye&&i.drawBuffers(ue)}function G(D){return _!==D?(i.useProgram(D),_=D,!0):!1}const Ct={[oi]:i.FUNC_ADD,[kc]:i.FUNC_SUBTRACT,[Gc]:i.FUNC_REVERSE_SUBTRACT};Ct[Hc]=i.MIN,Ct[Vc]=i.MAX;const A={[Wc]:i.ZERO,[Xc]:i.ONE,[Yc]:i.SRC_COLOR,[ta]:i.SRC_ALPHA,[Jc]:i.SRC_ALPHA_SATURATE,[$c]:i.DST_COLOR,[Zc]:i.DST_ALPHA,[qc]:i.ONE_MINUS_SRC_COLOR,[na]:i.ONE_MINUS_SRC_ALPHA,[jc]:i.ONE_MINUS_DST_COLOR,[Kc]:i.ONE_MINUS_DST_ALPHA,[Qc]:i.CONSTANT_COLOR,[eu]:i.ONE_MINUS_CONSTANT_COLOR,[tu]:i.CONSTANT_ALPHA,[nu]:i.ONE_MINUS_CONSTANT_ALPHA};function ot(D,le,ue,ye,se,y,k,X,J,ee){if(D===Cn){x===!0&&(Me(i.BLEND),x=!1);return}if(x===!1&&(ne(i.BLEND),x=!0),D!==zc){if(D!==m||ee!==S){if((u!==oi||E!==oi)&&(i.blendEquation(i.FUNC_ADD),u=oi,E=oi),ee)switch(D){case Pn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ht:i.blendFunc(i.ONE,i.ONE);break;case Eo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Pn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ht:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Eo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case bo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,w=null,P=null,C=null,R.set(0,0,0),N=0,m=D,S=ee}return}se=se||le,y=y||ue,k=k||ye,(le!==u||se!==E)&&(i.blendEquationSeparate(Ct[le],Ct[se]),u=le,E=se),(ue!==T||ye!==w||y!==P||k!==C)&&(i.blendFuncSeparate(A[ue],A[ye],A[y],A[k]),T=ue,w=ye,P=y,C=k),(X.equals(R)===!1||J!==N)&&(i.blendColor(X.r,X.g,X.b,J),R.copy(X),N=J),m=D,S=!1}function We(D,le){D.side===An?Me(i.CULL_FACE):ne(i.CULL_FACE);let ue=D.side===Wt;le&&(ue=!ue),Ge(ue),D.blending===Pn&&D.transparent===!1?ot(Cn):ot(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const ye=D.stencilWrite;o.setTest(ye),ye&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Te(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function be(D){D!==Fc?(ne(i.CULL_FACE),D!==L&&(D===So?i.cullFace(i.BACK):D===Oc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),L=D}function ft(D){D!==I&&($&&i.lineWidth(D),I=D)}function Te(D,le,ue){D?(ne(i.POLYGON_OFFSET_FILL),(q!==le||te!==ue)&&(i.polygonOffset(le,ue),q=le,te=ue)):Me(i.POLYGON_OFFSET_FILL)}function He(D){D?ne(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function xt(D){D===void 0&&(D=i.TEXTURE0+K-1),he!==D&&(i.activeTexture(D),he=D)}function pt(D,le,ue){ue===void 0&&(he===null?ue=i.TEXTURE0+K-1:ue=he);let ye=ve[ue];ye===void 0&&(ye={type:void 0,texture:void 0},ve[ue]=ye),(ye.type!==D||ye.texture!==le)&&(he!==ue&&(i.activeTexture(ue),he=ue),i.bindTexture(D,le||j[D]),ye.type=D,ye.texture=le)}function b(){const D=ve[he];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(D){st.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),st.copy(D))}function Oe(D){ut.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),ut.copy(D))}function Ce(D,le){let ue=l.get(le);ue===void 0&&(ue=new WeakMap,l.set(le,ue));let ye=ue.get(D);ye===void 0&&(ye=i.getUniformBlockIndex(le,D.name),ue.set(D,ye))}function de(D,le){const ye=l.get(le).get(D);c.get(le)!==ye&&(i.uniformBlockBinding(le,ye,D.__bindingPointIndex),c.set(le,ye))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},he=null,ve={},h={},d=new WeakMap,p=[],_=null,x=!1,m=null,u=null,T=null,w=null,E=null,P=null,C=null,R=new Ve(0,0,0),N=0,S=!1,M=null,L=null,I=null,q=null,te=null,st.set(0,0,i.canvas.width,i.canvas.height),ut.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:Me,bindFramebuffer:Fe,drawBuffers:Pe,useProgram:G,setBlending:ot,setMaterial:We,setFlipSided:Ge,setCullFace:be,setLineWidth:ft,setPolygonOffset:Te,setScissorTest:He,activeTexture:xt,bindTexture:pt,unbindTexture:b,compressedTexImage2D:g,compressedTexImage3D:B,texImage2D:Re,texImage3D:oe,updateUBOMapping:Ce,uniformBlockBinding:de,texStorage2D:ce,texStorage3D:Ae,texSubImage2D:Z,texSubImage3D:ie,compressedTexSubImage2D:Y,compressedTexSubImage3D:Le,scissor:me,viewport:Oe,reset:Ye}}function Lm(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ke,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,g){return p?new OffscreenCanvas(b,g):ls("canvas")}function x(b,g,B){let Z=1;const ie=pt(b);if((ie.width>B||ie.height>B)&&(Z=B/Math.max(ie.width,ie.height)),Z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Y=Math.floor(Z*ie.width),Le=Math.floor(Z*ie.height);h===void 0&&(h=_(Y,Le));const ce=g?_(Y,Le):h;return ce.width=Y,ce.height=Le,ce.getContext("2d").drawImage(b,0,0,Y,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ie.width+"x"+ie.height+") to ("+Y+"x"+Le+")."),ce}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ie.width+"x"+ie.height+")."),b;return b}function m(b){return b.generateMipmaps}function u(b){i.generateMipmap(b)}function T(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(b,g,B,Z,ie=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Y=g;if(g===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),g===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),g===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),g===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),g===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),g===i.RGBA){const Le=ie?as:tt.getTransfer(Z);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=Le===at?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function E(b,g){let B;return b?g===null||g===hi||g===cr?B=i.DEPTH24_STENCIL8:g===Rn?B=i.DEPTH32F_STENCIL8:g===lr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===hi||g===cr?B=i.DEPTH_COMPONENT24:g===Rn?B=i.DEPTH_COMPONENT32F:g===lr&&(B=i.DEPTH_COMPONENT16),B}function P(b,g){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==mn&&b.minFilter!==xn?Math.log2(Math.max(g.width,g.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?g.mipmaps.length:1}function C(b){const g=b.target;g.removeEventListener("dispose",C),N(g),g.isVideoTexture&&f.delete(g)}function R(b){const g=b.target;g.removeEventListener("dispose",R),M(g)}function N(b){const g=n.get(b);if(g.__webglInit===void 0)return;const B=b.source,Z=d.get(B);if(Z){const ie=Z[g.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&S(b),Object.keys(Z).length===0&&d.delete(B)}n.remove(b)}function S(b){const g=n.get(b);i.deleteTexture(g.__webglTexture);const B=b.source,Z=d.get(B);delete Z[g.__cacheKey],a.memory.textures--}function M(b){const g=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(g.__webglFramebuffer[Z]))for(let ie=0;ie<g.__webglFramebuffer[Z].length;ie++)i.deleteFramebuffer(g.__webglFramebuffer[Z][ie]);else i.deleteFramebuffer(g.__webglFramebuffer[Z]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[Z])}else{if(Array.isArray(g.__webglFramebuffer))for(let Z=0;Z<g.__webglFramebuffer.length;Z++)i.deleteFramebuffer(g.__webglFramebuffer[Z]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Z=0;Z<g.__webglColorRenderbuffer.length;Z++)g.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[Z]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=b.textures;for(let Z=0,ie=B.length;Z<ie;Z++){const Y=n.get(B[Z]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(B[Z])}n.remove(b)}let L=0;function I(){L=0}function q(){const b=L;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),L+=1,b}function te(b){const g=[];return g.push(b.wrapS),g.push(b.wrapT),g.push(b.wrapR||0),g.push(b.magFilter),g.push(b.minFilter),g.push(b.anisotropy),g.push(b.internalFormat),g.push(b.format),g.push(b.type),g.push(b.generateMipmaps),g.push(b.premultiplyAlpha),g.push(b.flipY),g.push(b.unpackAlignment),g.push(b.colorSpace),g.join()}function K(b,g){const B=n.get(b);if(b.isVideoTexture&&He(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&B.__version!==b.version){const Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,b,g);return}}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function $(b,g){const B=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){j(B,b,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function Q(b,g){const B=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){j(B,b,g);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function V(b,g){const B=n.get(b);if(b.version>0&&B.__version!==b.version){ne(B,b,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}const he={[ss]:i.REPEAT,[Wn]:i.CLAMP_TO_EDGE,[fa]:i.MIRRORED_REPEAT},ve={[mn]:i.NEAREST,[su]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[xn]:i.LINEAR,[xs]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},we={[uu]:i.NEVER,[gu]:i.ALWAYS,[hu]:i.LESS,[$l]:i.LEQUAL,[fu]:i.EQUAL,[mu]:i.GEQUAL,[du]:i.GREATER,[pu]:i.NOTEQUAL};function je(b,g){if(g.type===Rn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===xn||g.magFilter===xs||g.magFilter===yr||g.magFilter===ci||g.minFilter===xn||g.minFilter===xs||g.minFilter===yr||g.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,he[g.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,he[g.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,he[g.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,ve[g.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,ve[g.minFilter]),g.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,we[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===mn||g.minFilter!==yr&&g.minFilter!==ci||g.type===Rn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function st(b,g){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,g.addEventListener("dispose",C));const Z=g.source;let ie=d.get(Z);ie===void 0&&(ie={},d.set(Z,ie));const Y=te(g);if(Y!==b.__cacheKey){ie[Y]===void 0&&(ie[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),ie[Y].usedTimes++;const Le=ie[b.__cacheKey];Le!==void 0&&(ie[b.__cacheKey].usedTimes--,Le.usedTimes===0&&S(g)),b.__cacheKey=Y,b.__webglTexture=ie[Y].texture}return B}function ut(b,g,B){return Math.floor(Math.floor(b/B)/g)}function Qe(b,g,B,Z){const Y=b.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,B,Z,g.data);else{Y.sort((oe,me)=>oe.start-me.start);let Le=0;for(let oe=1;oe<Y.length;oe++){const me=Y[Le],Oe=Y[oe],Ce=me.start+me.count,de=ut(Oe.start,g.width,4),Ye=ut(me.start,g.width,4);Oe.start<=Ce+1&&de===Ye&&ut(Oe.start+Oe.count-1,g.width,4)===de?me.count=Math.max(me.count,Oe.start+Oe.count-me.start):(++Le,Y[Le]=Oe)}Y.length=Le+1;const ce=i.getParameter(i.UNPACK_ROW_LENGTH),Ae=i.getParameter(i.UNPACK_SKIP_PIXELS),Re=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let oe=0,me=Y.length;oe<me;oe++){const Oe=Y[oe],Ce=Math.floor(Oe.start/4),de=Math.ceil(Oe.count/4),Ye=Ce%g.width,D=Math.floor(Ce/g.width),le=de,ue=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ye),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,Ye,D,le,ue,B,Z,g.data)}b.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ce),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),i.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function j(b,g,B){let Z=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Z=i.TEXTURE_3D);const ie=st(b,g),Y=g.source;t.bindTexture(Z,b.__webglTexture,i.TEXTURE0+B);const Le=n.get(Y);if(Y.version!==Le.__version||ie===!0){t.activeTexture(i.TEXTURE0+B);const ce=tt.getPrimaries(tt.workingColorSpace),Ae=g.colorSpace===Vn?null:tt.getPrimaries(g.colorSpace),Re=g.colorSpace===Vn||ce===Ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);let oe=x(g.image,!1,r.maxTextureSize);oe=xt(g,oe);const me=s.convert(g.format,g.colorSpace),Oe=s.convert(g.type);let Ce=w(g.internalFormat,me,Oe,g.colorSpace,g.isVideoTexture);je(Z,g);let de;const Ye=g.mipmaps,D=g.isVideoTexture!==!0,le=Le.__version===void 0||ie===!0,ue=Y.dataReady,ye=P(g,oe);if(g.isDepthTexture)Ce=E(g.format===hr,g.type),le&&(D?t.texStorage2D(i.TEXTURE_2D,1,Ce,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,Ce,oe.width,oe.height,0,me,Oe,null));else if(g.isDataTexture)if(Ye.length>0){D&&le&&t.texStorage2D(i.TEXTURE_2D,ye,Ce,Ye[0].width,Ye[0].height);for(let se=0,y=Ye.length;se<y;se++)de=Ye[se],D?ue&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,de.width,de.height,me,Oe,de.data):t.texImage2D(i.TEXTURE_2D,se,Ce,de.width,de.height,0,me,Oe,de.data);g.generateMipmaps=!1}else D?(le&&t.texStorage2D(i.TEXTURE_2D,ye,Ce,oe.width,oe.height),ue&&Qe(g,oe,me,Oe)):t.texImage2D(i.TEXTURE_2D,0,Ce,oe.width,oe.height,0,me,Oe,oe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Ce,Ye[0].width,Ye[0].height,oe.depth);for(let se=0,y=Ye.length;se<y;se++)if(de=Ye[se],g.format!==dn)if(me!==null)if(D){if(ue)if(g.layerUpdates.size>0){const k=Qo(de.width,de.height,g.format,g.type);for(const X of g.layerUpdates){const J=de.data.subarray(X*k/de.data.BYTES_PER_ELEMENT,(X+1)*k/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,X,de.width,de.height,1,me,J)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,oe.depth,me,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Ce,de.width,de.height,oe.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ue&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,de.width,de.height,oe.depth,me,Oe,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Ce,de.width,de.height,oe.depth,0,me,Oe,de.data)}else{D&&le&&t.texStorage2D(i.TEXTURE_2D,ye,Ce,Ye[0].width,Ye[0].height);for(let se=0,y=Ye.length;se<y;se++)de=Ye[se],g.format!==dn?me!==null?D?ue&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,de.width,de.height,me,de.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Ce,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ue&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,de.width,de.height,me,Oe,de.data):t.texImage2D(i.TEXTURE_2D,se,Ce,de.width,de.height,0,me,Oe,de.data)}else if(g.isDataArrayTexture)if(D){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ye,Ce,oe.width,oe.height,oe.depth),ue)if(g.layerUpdates.size>0){const se=Qo(oe.width,oe.height,g.format,g.type);for(const y of g.layerUpdates){const k=oe.data.subarray(y*se/oe.data.BYTES_PER_ELEMENT,(y+1)*se/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,y,oe.width,oe.height,1,me,Oe,k)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,me,Oe,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ce,oe.width,oe.height,oe.depth,0,me,Oe,oe.data);else if(g.isData3DTexture)D?(le&&t.texStorage3D(i.TEXTURE_3D,ye,Ce,oe.width,oe.height,oe.depth),ue&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,me,Oe,oe.data)):t.texImage3D(i.TEXTURE_3D,0,Ce,oe.width,oe.height,oe.depth,0,me,Oe,oe.data);else if(g.isFramebufferTexture){if(le)if(D)t.texStorage2D(i.TEXTURE_2D,ye,Ce,oe.width,oe.height);else{let se=oe.width,y=oe.height;for(let k=0;k<ye;k++)t.texImage2D(i.TEXTURE_2D,k,Ce,se,y,0,me,Oe,null),se>>=1,y>>=1}}else if(Ye.length>0){if(D&&le){const se=pt(Ye[0]);t.texStorage2D(i.TEXTURE_2D,ye,Ce,se.width,se.height)}for(let se=0,y=Ye.length;se<y;se++)de=Ye[se],D?ue&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,me,Oe,de):t.texImage2D(i.TEXTURE_2D,se,Ce,me,Oe,de);g.generateMipmaps=!1}else if(D){if(le){const se=pt(oe);t.texStorage2D(i.TEXTURE_2D,ye,Ce,se.width,se.height)}ue&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Oe,oe)}else t.texImage2D(i.TEXTURE_2D,0,Ce,me,Oe,oe);m(g)&&u(Z),Le.__version=Y.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function ne(b,g,B){if(g.image.length!==6)return;const Z=st(b,g),ie=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+B);const Y=n.get(ie);if(ie.version!==Y.__version||Z===!0){t.activeTexture(i.TEXTURE0+B);const Le=tt.getPrimaries(tt.workingColorSpace),ce=g.colorSpace===Vn?null:tt.getPrimaries(g.colorSpace),Ae=g.colorSpace===Vn||Le===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Re=g.isCompressedTexture||g.image[0].isCompressedTexture,oe=g.image[0]&&g.image[0].isDataTexture,me=[];for(let y=0;y<6;y++)!Re&&!oe?me[y]=x(g.image[y],!0,r.maxCubemapSize):me[y]=oe?g.image[y].image:g.image[y],me[y]=xt(g,me[y]);const Oe=me[0],Ce=s.convert(g.format,g.colorSpace),de=s.convert(g.type),Ye=w(g.internalFormat,Ce,de,g.colorSpace),D=g.isVideoTexture!==!0,le=Y.__version===void 0||Z===!0,ue=ie.dataReady;let ye=P(g,Oe);je(i.TEXTURE_CUBE_MAP,g);let se;if(Re){D&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ye,Oe.width,Oe.height);for(let y=0;y<6;y++){se=me[y].mipmaps;for(let k=0;k<se.length;k++){const X=se[k];g.format!==dn?Ce!==null?D?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,k,0,0,X.width,X.height,Ce,X.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,k,Ye,X.width,X.height,0,X.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,k,0,0,X.width,X.height,Ce,de,X.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,k,Ye,X.width,X.height,0,Ce,de,X.data)}}}else{if(se=g.mipmaps,D&&le){se.length>0&&ye++;const y=pt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ye,Ye,y.width,y.height)}for(let y=0;y<6;y++)if(oe){D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,0,0,me[y].width,me[y].height,Ce,de,me[y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,Ye,me[y].width,me[y].height,0,Ce,de,me[y].data);for(let k=0;k<se.length;k++){const J=se[k].image[y].image;D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,k+1,0,0,J.width,J.height,Ce,de,J.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,k+1,Ye,J.width,J.height,0,Ce,de,J.data)}}else{D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,0,0,Ce,de,me[y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,0,Ye,Ce,de,me[y]);for(let k=0;k<se.length;k++){const X=se[k];D?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,k+1,0,0,Ce,de,X.image[y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+y,k+1,Ye,Ce,de,X.image[y])}}}m(g)&&u(i.TEXTURE_CUBE_MAP),Y.__version=ie.version,g.onUpdate&&g.onUpdate(g)}b.__version=g.version}function Me(b,g,B,Z,ie,Y){const Le=s.convert(B.format,B.colorSpace),ce=s.convert(B.type),Ae=w(B.internalFormat,Le,ce,B.colorSpace),Re=n.get(g),oe=n.get(B);if(oe.__renderTarget=g,!Re.__hasExternalTextures){const me=Math.max(1,g.width>>Y),Oe=Math.max(1,g.height>>Y);ie===i.TEXTURE_3D||ie===i.TEXTURE_2D_ARRAY?t.texImage3D(ie,Y,Ae,me,Oe,g.depth,0,Le,ce,null):t.texImage2D(ie,Y,Ae,me,Oe,0,Le,ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),Te(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,ie,oe.__webglTexture,0,ft(g)):(ie===i.TEXTURE_2D||ie>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,ie,oe.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(b,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,b),g.depthBuffer){const Z=g.depthTexture,ie=Z&&Z.isDepthTexture?Z.type:null,Y=E(g.stencilBuffer,ie),Le=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=ft(g);Te(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ce,Y,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Y,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Y,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Le,i.RENDERBUFFER,b)}else{const Z=g.textures;for(let ie=0;ie<Z.length;ie++){const Y=Z[ie],Le=s.convert(Y.format,Y.colorSpace),ce=s.convert(Y.type),Ae=w(Y.internalFormat,Le,ce,Y.colorSpace),Re=ft(g);B&&Te(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Ae,g.width,g.height):Te(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Re,Ae,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Ae,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(b,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(g.depthTexture);Z.__renderTarget=g,(!Z.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),K(g.depthTexture,0);const ie=Z.__webglTexture,Y=ft(g);if(g.depthTexture.format===ur)Te(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ie,0);else if(g.depthTexture.format===hr)Te(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ie,0);else throw new Error("Unknown depthTexture format")}function G(b){const g=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==b.depthTexture){const Z=b.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Z){const ie=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Z.removeEventListener("dispose",ie)};Z.addEventListener("dispose",ie),g.__depthDisposeCallback=ie}g.__boundDepthTexture=Z}if(b.depthTexture&&!g.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const Z=b.texture.mipmaps;Z&&Z.length>0?Pe(g.__webglFramebuffer[0],b):Pe(g.__webglFramebuffer,b)}else if(B){g.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Z]),g.__webglDepthbuffer[Z]===void 0)g.__webglDepthbuffer[Z]=i.createRenderbuffer(),Fe(g.__webglDepthbuffer[Z],b,!1);else{const ie=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Y)}}else{const Z=b.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Fe(g.__webglDepthbuffer,b,!1);else{const ie=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,ie,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(b,g,B){const Z=n.get(b);g!==void 0&&Me(Z.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&G(b)}function A(b){const g=b.texture,B=n.get(b),Z=n.get(g);b.addEventListener("dispose",R);const ie=b.textures,Y=b.isWebGLCubeRenderTarget===!0,Le=ie.length>1;if(Le||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=g.version,a.memory.textures++),Y){B.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[ce]=[];for(let Ae=0;Ae<g.mipmaps.length;Ae++)B.__webglFramebuffer[ce][Ae]=i.createFramebuffer()}else B.__webglFramebuffer[ce]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let ce=0;ce<g.mipmaps.length;ce++)B.__webglFramebuffer[ce]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Le)for(let ce=0,Ae=ie.length;ce<Ae;ce++){const Re=n.get(ie[ce]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&Te(b)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ce=0;ce<ie.length;ce++){const Ae=ie[ce];B.__webglColorRenderbuffer[ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ce]);const Re=s.convert(Ae.format,Ae.colorSpace),oe=s.convert(Ae.type),me=w(Ae.internalFormat,Re,oe,Ae.colorSpace,b.isXRRenderTarget===!0),Oe=ft(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,me,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ce,i.RENDERBUFFER,B.__webglColorRenderbuffer[ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),je(i.TEXTURE_CUBE_MAP,g);for(let ce=0;ce<6;ce++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ae=0;Ae<g.mipmaps.length;Ae++)Me(B.__webglFramebuffer[ce][Ae],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,Ae);else Me(B.__webglFramebuffer[ce],b,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(g)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let ce=0,Ae=ie.length;ce<Ae;ce++){const Re=ie[ce],oe=n.get(Re);let me=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(me=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,oe.__webglTexture),je(me,Re),Me(B.__webglFramebuffer,b,Re,i.COLOR_ATTACHMENT0+ce,me,0),m(Re)&&u(me)}t.unbindTexture()}else{let ce=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ce=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,Z.__webglTexture),je(ce,g),g.mipmaps&&g.mipmaps.length>0)for(let Ae=0;Ae<g.mipmaps.length;Ae++)Me(B.__webglFramebuffer[Ae],b,g,i.COLOR_ATTACHMENT0,ce,Ae);else Me(B.__webglFramebuffer,b,g,i.COLOR_ATTACHMENT0,ce,0);m(g)&&u(ce),t.unbindTexture()}b.depthBuffer&&G(b)}function ot(b){const g=b.textures;for(let B=0,Z=g.length;B<Z;B++){const ie=g[B];if(m(ie)){const Y=T(b),Le=n.get(ie).__webglTexture;t.bindTexture(Y,Le),u(Y),t.unbindTexture()}}}const We=[],Ge=[];function be(b){if(b.samples>0){if(Te(b)===!1){const g=b.textures,B=b.width,Z=b.height;let ie=i.COLOR_BUFFER_BIT;const Y=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Le=n.get(b),ce=g.length>1;if(ce)for(let Re=0;Re<g.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer);const Ae=b.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Re=0;Re<g.length;Re++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(ie|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(ie|=i.STENCIL_BUFFER_BIT)),ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Re]);const oe=n.get(g[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,oe,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,ie,i.NEAREST),c===!0&&(We.length=0,Ge.length=0,We.push(i.COLOR_ATTACHMENT0+Re),b.depthBuffer&&b.resolveDepthBuffer===!1&&(We.push(Y),Ge.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ge)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ce)for(let Re=0;Re<g.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,Le.__webglColorRenderbuffer[Re]);const oe=n.get(g[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Le.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,oe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const g=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function ft(b){return Math.min(r.maxSamples,b.samples)}function Te(b){const g=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function He(b){const g=a.render.frame;f.get(b)!==g&&(f.set(b,g),b.update())}function xt(b,g){const B=b.colorSpace,Z=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==Gi&&B!==Vn&&(tt.getTransfer(B)===at?(Z!==dn||ie!==Un)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),g}function pt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=q,this.resetTextureUnits=I,this.setTexture2D=K,this.setTexture2DArray=$,this.setTexture3D=Q,this.setTextureCube=V,this.rebindTextures=Ct,this.setupRenderTarget=A,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=G,this.setupFrameBufferTexture=Me,this.useMultisampledRTT=Te}function Dm(i,e){function t(n,r=Vn){let s;const a=tt.getTransfer(r);if(n===Un)return i.UNSIGNED_BYTE;if(n===eo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===to)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hl)return i.BYTE;if(n===Vl)return i.SHORT;if(n===lr)return i.UNSIGNED_SHORT;if(n===Qa)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===Rn)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===Yl)return i.ALPHA;if(n===ql)return i.RGB;if(n===dn)return i.RGBA;if(n===ur)return i.DEPTH_COMPONENT;if(n===hr)return i.DEPTH_STENCIL;if(n===Zl)return i.RED;if(n===no)return i.RED_INTEGER;if(n===Kl)return i.RG;if(n===io)return i.RG_INTEGER;if(n===ro)return i.RGBA_INTEGER;if(n===Qr||n===es||n===ts||n===ns)if(a===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Qr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===es)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ts)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Qr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===es)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ts)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ns)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===da||n===pa||n===ma||n===ga)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===da)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===pa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ma)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ga)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_a||n===va||n===xa)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===_a||n===va)return a===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===xa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ma||n===ya||n===Sa||n===Ea||n===ba||n===Ta||n===wa||n===Aa||n===Ra||n===Ca||n===Pa||n===La||n===Da||n===Ua)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ma)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ya)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ba)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ta)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Aa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ra)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ca)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Pa)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===La)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Da)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return a===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ia||n===Na||n===Fa)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ia)return a===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Na)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fa)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oa||n===Ba||n===za||n===ka)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Oa)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ba)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===za)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ka)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Um=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Im=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Nm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new uc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new zt({vertexShader:Um,fragmentShader:Im,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new en(new xr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Fm extends Xi{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,f=null,h=null,d=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new Nm,u={},T=t.getContextAttributes();let w=null,E=null;const P=[],C=[],R=new ke;let N=null;const S=new on;S.viewport=new St;const M=new on;M.viewport=new St;const L=[S,M],I=new eh;let q=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ne=P[j];return ne===void 0&&(ne=new Hs,P[j]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(j){let ne=P[j];return ne===void 0&&(ne=new Hs,P[j]=ne),ne.getGripSpace()},this.getHand=function(j){let ne=P[j];return ne===void 0&&(ne=new Hs,P[j]=ne),ne.getHandSpace()};function K(j){const ne=C.indexOf(j.inputSource);if(ne===-1)return;const Me=P[ne];Me!==void 0&&(Me.update(j.inputSource,j.frame,l||a),Me.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",Q);for(let j=0;j<P.length;j++){const ne=C[j];ne!==null&&(C[j]=null,P[j].disconnect(ne))}q=null,te=null,m.reset();for(const j in u)delete u[j];e.setRenderTarget(w),p=null,d=null,h=null,r=null,E=null,Qe.stop(),n.isPresenting=!1,e.setPixelRatio(N),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",$),r.addEventListener("inputsourceschange",Q),T.xrCompatible!==!0&&await t.makeXRCompatible(),N=e.getPixelRatio(),e.getSize(R),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Fe=null,Pe=null;T.depth&&(Pe=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=T.stencil?hr:ur,Fe=T.stencil?cr:hi);const G={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(G),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new gn(d.textureWidth,d.textureHeight,{format:dn,type:Un,depthTexture:new cc(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Me={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,Me),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new gn(p.framebufferWidth,p.framebufferHeight,{format:dn,type:Un,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Qe.setContext(r),Qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(j){for(let ne=0;ne<j.removed.length;ne++){const Me=j.removed[ne],Fe=C.indexOf(Me);Fe>=0&&(C[Fe]=null,P[Fe].disconnect(Me))}for(let ne=0;ne<j.added.length;ne++){const Me=j.added[ne];let Fe=C.indexOf(Me);if(Fe===-1){for(let G=0;G<P.length;G++)if(G>=C.length){C.push(Me),Fe=G;break}else if(C[G]===null){C[G]=Me,Fe=G;break}if(Fe===-1)break}const Pe=P[Fe];Pe&&Pe.connect(Me)}}const V=new F,he=new F;function ve(j,ne,Me){V.setFromMatrixPosition(ne.matrixWorld),he.setFromMatrixPosition(Me.matrixWorld);const Fe=V.distanceTo(he),Pe=ne.projectionMatrix.elements,G=Me.projectionMatrix.elements,Ct=Pe[14]/(Pe[10]-1),A=Pe[14]/(Pe[10]+1),ot=(Pe[9]+1)/Pe[5],We=(Pe[9]-1)/Pe[5],Ge=(Pe[8]-1)/Pe[0],be=(G[8]+1)/G[0],ft=Ct*Ge,Te=Ct*be,He=Fe/(-Ge+be),xt=He*-Ge;if(ne.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(xt),j.translateZ(He),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Pe[10]===-1)j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const pt=Ct+He,b=A+He,g=ft-xt,B=Te+(Fe-xt),Z=ot*A/b*pt,ie=We*A/b*pt;j.projectionMatrix.makePerspective(g,B,Z,ie,pt,b),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function we(j,ne){ne===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ne.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ne=j.near,Me=j.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(Me=m.depthFar)),I.near=M.near=S.near=ne,I.far=M.far=S.far=Me,(q!==I.near||te!==I.far)&&(r.updateRenderState({depthNear:I.near,depthFar:I.far}),q=I.near,te=I.far),I.layers.mask=j.layers.mask|6,S.layers.mask=I.layers.mask&3,M.layers.mask=I.layers.mask&5;const Fe=j.parent,Pe=I.cameras;we(I,Fe);for(let G=0;G<Pe.length;G++)we(Pe[G],Fe);Pe.length===2?ve(I,S,M):I.projectionMatrix.copy(S.projectionMatrix),je(j,I,Fe)};function je(j,ne,Me){Me===null?j.matrix.copy(ne.matrixWorld):(j.matrix.copy(Me.matrixWorld),j.matrix.invert(),j.matrix.multiply(ne.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ne.projectionMatrix),j.projectionMatrixInverse.copy(ne.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ha*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(j){return u[j]};let st=null;function ut(j,ne){if(f=ne.getViewerPose(l||a),_=ne,f!==null){const Me=f.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Fe=!1;Me.length!==I.cameras.length&&(I.cameras.length=0,Fe=!0);for(let A=0;A<Me.length;A++){const ot=Me[A];let We=null;if(p!==null)We=p.getViewport(ot);else{const be=h.getViewSubImage(d,ot);We=be.viewport,A===0&&(e.setRenderTargetTextures(E,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(E))}let Ge=L[A];Ge===void 0&&(Ge=new on,Ge.layers.enable(A),Ge.viewport=new St,L[A]=Ge),Ge.matrix.fromArray(ot.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(ot.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(We.x,We.y,We.width,We.height),A===0&&(I.matrix.copy(Ge.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),Fe===!0&&I.cameras.push(Ge)}const Pe=r.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const A=h.getDepthInformation(Me[0]);A&&A.isValid&&A.texture&&m.init(A,r.renderState)}if(Pe&&Pe.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let A=0;A<Me.length;A++){const ot=Me[A].camera;if(ot){let We=u[ot];We||(We=new uc,u[ot]=We);const Ge=h.getCameraImage(ot);We.sourceTexture=Ge}}}}for(let Me=0;Me<P.length;Me++){const Fe=C[Me],Pe=P[Me];Fe!==null&&Pe!==void 0&&Pe.update(Fe,ne,l||a)}st&&st(j,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),_=null}const Qe=new fc;Qe.setAnimationLoop(ut),this.setAnimationLoop=function(j){st=j},this.dispose=function(){}}}const ri=new In,Om=new yt;function Bm(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,ic(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,T,w,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),f(m,u)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,E)):u.isMeshMatcapMaterial?(s(m,u),_(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,T,w):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Wt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Wt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const T=e.get(u),w=T.envMap,E=T.envMapRotation;w&&(m.envMap.value=w,ri.copy(E),ri.x*=-1,ri.y*=-1,ri.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),m.envMapRotation.value.setFromMatrix4(Om.makeRotationFromEuler(ri)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,T,w){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*T,m.scale.value=w*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,T){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Wt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const T=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function zm(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,w){const E=w.program;n.uniformBlockBinding(T,E)}function l(T,w){let E=r[T.id];E===void 0&&(_(T),E=f(T),r[T.id]=E,T.addEventListener("dispose",m));const P=w.program;n.updateUBOMapping(T,P);const C=e.render.frame;s[T.id]!==C&&(d(T),s[T.id]=C)}function f(T){const w=h();T.__bindingPointIndex=w;const E=i.createBuffer(),P=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,E),E}function h(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const w=r[T.id],E=T.uniforms,P=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let C=0,R=E.length;C<R;C++){const N=Array.isArray(E[C])?E[C]:[E[C]];for(let S=0,M=N.length;S<M;S++){const L=N[S];if(p(L,C,S,P)===!0){const I=L.__offset,q=Array.isArray(L.value)?L.value:[L.value];let te=0;for(let K=0;K<q.length;K++){const $=q[K],Q=x($);typeof $=="number"||typeof $=="boolean"?(L.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,I+te,L.__data)):$.isMatrix3?(L.__data[0]=$.elements[0],L.__data[1]=$.elements[1],L.__data[2]=$.elements[2],L.__data[3]=0,L.__data[4]=$.elements[3],L.__data[5]=$.elements[4],L.__data[6]=$.elements[5],L.__data[7]=0,L.__data[8]=$.elements[6],L.__data[9]=$.elements[7],L.__data[10]=$.elements[8],L.__data[11]=0):($.toArray(L.__data,te),te+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,w,E,P){const C=T.value,R=w+"_"+E;if(P[R]===void 0)return typeof C=="number"||typeof C=="boolean"?P[R]=C:P[R]=C.clone(),!0;{const N=P[R];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return P[R]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function _(T){const w=T.uniforms;let E=0;const P=16;for(let R=0,N=w.length;R<N;R++){const S=Array.isArray(w[R])?w[R]:[w[R]];for(let M=0,L=S.length;M<L;M++){const I=S[M],q=Array.isArray(I.value)?I.value:[I.value];for(let te=0,K=q.length;te<K;te++){const $=q[te],Q=x($),V=E%P,he=V%Q.boundary,ve=V+he;E+=he,ve!==0&&P-ve<Q.storage&&(E+=P-ve),I.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=Q.storage}}}const C=E%P;return C>0&&(E+=P-C),T.__size=E,T.__cache={},this}function x(T){const w={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(w.boundary=4,w.storage=4):T.isVector2?(w.boundary=8,w.storage=8):T.isVector3||T.isColor?(w.boundary=16,w.storage=12):T.isVector4?(w.boundary=16,w.storage=16):T.isMatrix3?(w.boundary=48,w.storage=48):T.isMatrix4?(w.boundary=64,w.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),w}function m(T){const w=T.target;w.removeEventListener("dispose",m);const E=a.indexOf(w.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function u(){for(const T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:c,update:l,dispose:u}}class km{constructor(e={}){const{canvas:t=vu(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,u=null;const T=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let P=!1;this._outputColorSpace=Vt;let C=0,R=0,N=null,S=-1,M=null;const L=new St,I=new St;let q=null;const te=new Ve(0);let K=0,$=t.width,Q=t.height,V=1,he=null,ve=null;const we=new St(0,0,$,Q),je=new St(0,0,$,Q);let st=!1;const ut=new oc;let Qe=!1,j=!1;const ne=new yt,Me=new F,Fe=new St,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let G=!1;function Ct(){return N===null?V:1}let A=n;function ot(v,U){return t.getContext(v,U)}try{const v={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ja}`),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",se,!1),A===null){const U="webgl2";if(A=ot(U,v),A===null)throw ot(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let We,Ge,be,ft,Te,He,xt,pt,b,g,B,Z,ie,Y,Le,ce,Ae,Re,oe,me,Oe,Ce,de,Ye;function D(){We=new $d(A),We.init(),Ce=new Dm(A,We),Ge=new Vd(A,We,e,Ce),be=new Pm(A,We),Ge.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),ft=new Qd(A),Te=new _m,He=new Lm(A,We,be,Te,Ge,Ce,ft),xt=new Xd(E),pt=new Kd(E),b=new rh(A),de=new Gd(A,b),g=new jd(A,b,ft,de),B=new tp(A,g,b,ft),oe=new ep(A,Ge,He),ce=new Wd(Te),Z=new gm(E,xt,pt,We,Ge,de,ce),ie=new Bm(E,Te),Y=new xm,Le=new Tm(We),Re=new kd(E,xt,pt,be,B,p,c),Ae=new Rm(E,B,Ge),Ye=new zm(A,ft,Ge,be),me=new Hd(A,We,ft),Oe=new Jd(A,We,ft),ft.programs=Z.programs,E.capabilities=Ge,E.extensions=We,E.properties=Te,E.renderLists=Y,E.shadowMap=Ae,E.state=be,E.info=ft}D();const le=new Fm(E,A);this.xr=le,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const v=We.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=We.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize($,Q,!1))},this.getSize=function(v){return v.set($,Q)},this.setSize=function(v,U,z=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=v,Q=U,t.width=Math.floor(v*V),t.height=Math.floor(U*V),z===!0&&(t.style.width=v+"px",t.style.height=U+"px"),this.setViewport(0,0,v,U)},this.getDrawingBufferSize=function(v){return v.set($*V,Q*V).floor()},this.setDrawingBufferSize=function(v,U,z){$=v,Q=U,V=z,t.width=Math.floor(v*z),t.height=Math.floor(U*z),this.setViewport(0,0,v,U)},this.getCurrentViewport=function(v){return v.copy(L)},this.getViewport=function(v){return v.copy(we)},this.setViewport=function(v,U,z,H){v.isVector4?we.set(v.x,v.y,v.z,v.w):we.set(v,U,z,H),be.viewport(L.copy(we).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(je)},this.setScissor=function(v,U,z,H){v.isVector4?je.set(v.x,v.y,v.z,v.w):je.set(v,U,z,H),be.scissor(I.copy(je).multiplyScalar(V).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(v){be.setScissorTest(st=v)},this.setOpaqueSort=function(v){he=v},this.setTransparentSort=function(v){ve=v},this.getClearColor=function(v){return v.copy(Re.getClearColor())},this.setClearColor=function(){Re.setClearColor(...arguments)},this.getClearAlpha=function(){return Re.getClearAlpha()},this.setClearAlpha=function(){Re.setClearAlpha(...arguments)},this.clear=function(v=!0,U=!0,z=!0){let H=0;if(v){let O=!1;if(N!==null){const ae=N.texture.format;O=ae===ro||ae===io||ae===no}if(O){const ae=N.texture.type,ge=ae===Un||ae===hi||ae===lr||ae===cr||ae===eo||ae===to,Ee=Re.getClearColor(),_e=Re.getClearAlpha(),De=Ee.r,Be=Ee.g,Ue=Ee.b;ge?(_[0]=De,_[1]=Be,_[2]=Ue,_[3]=_e,A.clearBufferuiv(A.COLOR,0,_)):(x[0]=De,x[1]=Be,x[2]=Ue,x[3]=_e,A.clearBufferiv(A.COLOR,0,x))}else H|=A.COLOR_BUFFER_BIT}U&&(H|=A.DEPTH_BUFFER_BIT),z&&(H|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",se,!1),Re.dispose(),Y.dispose(),Le.dispose(),Te.dispose(),xt.dispose(),pt.dispose(),B.dispose(),de.dispose(),Ye.dispose(),Z.dispose(),le.dispose(),le.removeEventListener("sessionstart",Se),le.removeEventListener("sessionend",qe),rt.stop()};function ue(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const v=ft.autoReset,U=Ae.enabled,z=Ae.autoUpdate,H=Ae.needsUpdate,O=Ae.type;D(),ft.autoReset=v,Ae.enabled=U,Ae.autoUpdate=z,Ae.needsUpdate=H,Ae.type=O}function se(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function y(v){const U=v.target;U.removeEventListener("dispose",y),k(U)}function k(v){X(v),Te.remove(v)}function X(v){const U=Te.get(v).programs;U!==void 0&&(U.forEach(function(z){Z.releaseProgram(z)}),v.isShaderMaterial&&Z.releaseShaderCache(v))}this.renderBufferDirect=function(v,U,z,H,O,ae){U===null&&(U=Pe);const ge=O.isMesh&&O.matrixWorld.determinant()<0,Ee=re(v,U,z,H,O);be.setMaterial(H,ge);let _e=z.index,De=1;if(H.wireframe===!0){if(_e=g.getWireframeAttribute(z),_e===void 0)return;De=2}const Be=z.drawRange,Ue=z.attributes.position;let Je=Be.start*De,lt=(Be.start+Be.count)*De;ae!==null&&(Je=Math.max(Je,ae.start*De),lt=Math.min(lt,(ae.start+ae.count)*De)),_e!==null?(Je=Math.max(Je,0),lt=Math.min(lt,_e.count)):Ue!=null&&(Je=Math.max(Je,0),lt=Math.min(lt,Ue.count));const Mt=lt-Je;if(Mt<0||Mt===1/0)return;de.setup(O,H,Ee,z,_e);let mt,ht=me;if(_e!==null&&(mt=b.get(_e),ht=Oe,ht.setIndex(mt)),O.isMesh)H.wireframe===!0?(be.setLineWidth(H.wireframeLinewidth*Ct()),ht.setMode(A.LINES)):ht.setMode(A.TRIANGLES);else if(O.isLine){let Ne=H.linewidth;Ne===void 0&&(Ne=1),be.setLineWidth(Ne*Ct()),O.isLineSegments?ht.setMode(A.LINES):O.isLineLoop?ht.setMode(A.LINE_LOOP):ht.setMode(A.LINE_STRIP)}else O.isPoints?ht.setMode(A.POINTS):O.isSprite&&ht.setMode(A.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)fr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ht.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(We.get("WEBGL_multi_draw"))ht.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ne=O._multiDrawStarts,gt=O._multiDrawCounts,nt=O._multiDrawCount,Kt=_e?b.get(_e).bytesPerElement:1,mi=Te.get(H).currentProgram.getUniforms();for(let $t=0;$t<nt;$t++)mi.setValue(A,"_gl_DrawID",$t),ht.render(Ne[$t]/Kt,gt[$t])}else if(O.isInstancedMesh)ht.renderInstances(Je,Mt,O.count);else if(z.isInstancedBufferGeometry){const Ne=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,gt=Math.min(z.instanceCount,Ne);ht.renderInstances(Je,Mt,gt)}else ht.render(Je,Mt)};function J(v,U,z){v.transparent===!0&&v.side===An&&v.forceSinglePass===!1?(v.side=Wt,v.needsUpdate=!0,Yt(v,U,z),v.side=Zn,v.needsUpdate=!0,Yt(v,U,z),v.side=An):Yt(v,U,z)}this.compile=function(v,U,z=null){z===null&&(z=v),u=Le.get(z),u.init(U),w.push(u),z.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),v!==z&&v.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();const H=new Set;return v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ae=O.material;if(ae)if(Array.isArray(ae))for(let ge=0;ge<ae.length;ge++){const Ee=ae[ge];J(Ee,z,O),H.add(Ee)}else J(ae,z,O),H.add(ae)}),u=w.pop(),H},this.compileAsync=function(v,U,z=null){const H=this.compile(v,U,z);return new Promise(O=>{function ae(){if(H.forEach(function(ge){Te.get(ge).currentProgram.isReady()&&H.delete(ge)}),H.size===0){O(v);return}setTimeout(ae,10)}We.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let ee=null;function Ie(v){ee&&ee(v)}function Se(){rt.stop()}function qe(){rt.start()}const rt=new fc;rt.setAnimationLoop(Ie),typeof self<"u"&&rt.setContext(self),this.setAnimationLoop=function(v){ee=v,le.setAnimationLoop(v),v===null?rt.stop():rt.start()},le.addEventListener("sessionstart",Se),le.addEventListener("sessionend",qe),this.render=function(v,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(U),U=le.getCamera()),v.isScene===!0&&v.onBeforeRender(E,v,U,N),u=Le.get(v,w.length),u.init(U),w.push(u),ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ut.setFromProjectionMatrix(ne,Mn,U.reversedDepth),j=this.localClippingEnabled,Qe=ce.init(this.clippingPlanes,j),m=Y.get(v,T.length),m.init(),T.push(m),le.enabled===!0&&le.isPresenting===!0){const ae=E.xr.getDepthSensingMesh();ae!==null&&dt(ae,U,-1/0,E.sortObjects)}dt(v,U,0,E.sortObjects),m.finish(),E.sortObjects===!0&&m.sort(he,ve),G=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,G&&Re.addToRenderList(m,v),this.info.render.frame++,Qe===!0&&ce.beginShadows();const z=u.state.shadowsArray;Ae.render(z,v,U),Qe===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,O=m.transmissive;if(u.setupLights(),U.isArrayCamera){const ae=U.cameras;if(O.length>0)for(let ge=0,Ee=ae.length;ge<Ee;ge++){const _e=ae[ge];tn(H,O,v,_e)}G&&Re.render(v);for(let ge=0,Ee=ae.length;ge<Ee;ge++){const _e=ae[ge];Ke(m,v,_e,_e.viewport)}}else O.length>0&&tn(H,O,v,U),G&&Re.render(v),Ke(m,v,U);N!==null&&R===0&&(He.updateMultisampleRenderTarget(N),He.updateRenderTargetMipmap(N)),v.isScene===!0&&v.onAfterRender(E,v,U),de.resetDefaultState(),S=-1,M=null,w.pop(),w.length>0?(u=w[w.length-1],Qe===!0&&ce.setGlobalState(E.clippingPlanes,u.state.camera)):u=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function dt(v,U,z,H){if(v.visible===!1)return;if(v.layers.test(U.layers)){if(v.isGroup)z=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(U);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||ut.intersectsSprite(v)){H&&Fe.setFromMatrixPosition(v.matrixWorld).applyMatrix4(ne);const ge=B.update(v),Ee=v.material;Ee.visible&&m.push(v,ge,Ee,z,Fe.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||ut.intersectsObject(v))){const ge=B.update(v),Ee=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Fe.copy(v.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Fe.copy(ge.boundingSphere.center)),Fe.applyMatrix4(v.matrixWorld).applyMatrix4(ne)),Array.isArray(Ee)){const _e=ge.groups;for(let De=0,Be=_e.length;De<Be;De++){const Ue=_e[De],Je=Ee[Ue.materialIndex];Je&&Je.visible&&m.push(v,ge,Je,z,Fe.z,Ue)}}else Ee.visible&&m.push(v,ge,Ee,z,Fe.z,null)}}const ae=v.children;for(let ge=0,Ee=ae.length;ge<Ee;ge++)dt(ae[ge],U,z,H)}function Ke(v,U,z,H){const O=v.opaque,ae=v.transmissive,ge=v.transparent;u.setupLightsView(z),Qe===!0&&ce.setGlobalState(E.clippingPlanes,z),H&&be.viewport(L.copy(H)),O.length>0&&Pt(O,U,z),ae.length>0&&Pt(ae,U,z),ge.length>0&&Pt(ge,U,z),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function tn(v,U,z,H){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new gn(1,1,{generateMipmaps:!0,type:We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float")?Ln:Un,minFilter:ci,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const ae=u.state.transmissionRenderTarget[H.id],ge=H.viewport||L;ae.setSize(ge.z*E.transmissionResolutionScale,ge.w*E.transmissionResolutionScale);const Ee=E.getRenderTarget(),_e=E.getActiveCubeFace(),De=E.getActiveMipmapLevel();E.setRenderTarget(ae),E.getClearColor(te),K=E.getClearAlpha(),K<1&&E.setClearColor(16777215,.5),E.clear(),G&&Re.render(z);const Be=E.toneMapping;E.toneMapping=Xn;const Ue=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),Qe===!0&&ce.setGlobalState(E.clippingPlanes,H),Pt(v,z,H),He.updateMultisampleRenderTarget(ae),He.updateRenderTargetMipmap(ae),We.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let lt=0,Mt=U.length;lt<Mt;lt++){const mt=U[lt],ht=mt.object,Ne=mt.geometry,gt=mt.material,nt=mt.group;if(gt.side===An&&ht.layers.test(H.layers)){const Kt=gt.side;gt.side=Wt,gt.needsUpdate=!0,Fn(ht,z,H,Ne,gt,nt),gt.side=Kt,gt.needsUpdate=!0,Je=!0}}Je===!0&&(He.updateMultisampleRenderTarget(ae),He.updateRenderTargetMipmap(ae))}E.setRenderTarget(Ee,_e,De),E.setClearColor(te,K),Ue!==void 0&&(H.viewport=Ue),E.toneMapping=Be}function Pt(v,U,z){const H=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ae=v.length;O<ae;O++){const ge=v[O],Ee=ge.object,_e=ge.geometry,De=ge.group;let Be=ge.material;Be.allowOverride===!0&&H!==null&&(Be=H),Ee.layers.test(z.layers)&&Fn(Ee,U,z,_e,Be,De)}}function Fn(v,U,z,H,O,ae){v.onBeforeRender(E,U,z,H,O,ae),v.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(E,U,z,H,v,ae),O.transparent===!0&&O.side===An&&O.forceSinglePass===!1?(O.side=Wt,O.needsUpdate=!0,E.renderBufferDirect(z,U,H,O,v,ae),O.side=Zn,O.needsUpdate=!0,E.renderBufferDirect(z,U,H,O,v,ae),O.side=An):E.renderBufferDirect(z,U,H,O,v,ae),v.onAfterRender(E,U,z,H,O,ae)}function Yt(v,U,z){U.isScene!==!0&&(U=Pe);const H=Te.get(v),O=u.state.lights,ae=u.state.shadowsArray,ge=O.state.version,Ee=Z.getParameters(v,O.state,ae,U,z),_e=Z.getProgramCacheKey(Ee);let De=H.programs;H.environment=v.isMeshStandardMaterial?U.environment:null,H.fog=U.fog,H.envMap=(v.isMeshStandardMaterial?pt:xt).get(v.envMap||H.environment),H.envMapRotation=H.environment!==null&&v.envMap===null?U.environmentRotation:v.envMapRotation,De===void 0&&(v.addEventListener("dispose",y),De=new Map,H.programs=De);let Be=De.get(_e);if(Be!==void 0){if(H.currentProgram===Be&&H.lightsStateVersion===ge)return Zi(v,Ee),Be}else Ee.uniforms=Z.getUniforms(v),v.onBeforeCompile(Ee,E),Be=Z.acquireProgram(Ee,_e),De.set(_e,Be),H.uniforms=Ee.uniforms;const Ue=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Ue.clippingPlanes=ce.uniform),Zi(v,Ee),H.needsLights=qt(v),H.lightsStateVersion=ge,H.needsLights&&(Ue.ambientLightColor.value=O.state.ambient,Ue.lightProbe.value=O.state.probe,Ue.directionalLights.value=O.state.directional,Ue.directionalLightShadows.value=O.state.directionalShadow,Ue.spotLights.value=O.state.spot,Ue.spotLightShadows.value=O.state.spotShadow,Ue.rectAreaLights.value=O.state.rectArea,Ue.ltc_1.value=O.state.rectAreaLTC1,Ue.ltc_2.value=O.state.rectAreaLTC2,Ue.pointLights.value=O.state.point,Ue.pointLightShadows.value=O.state.pointShadow,Ue.hemisphereLights.value=O.state.hemi,Ue.directionalShadowMap.value=O.state.directionalShadowMap,Ue.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ue.spotShadowMap.value=O.state.spotShadowMap,Ue.spotLightMatrix.value=O.state.spotLightMatrix,Ue.spotLightMap.value=O.state.spotLightMap,Ue.pointShadowMap.value=O.state.pointShadowMap,Ue.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=Be,H.uniformsList=null,Be}function Mr(v){if(v.uniformsList===null){const U=v.currentProgram.getUniforms();v.uniformsList=is.seqWithValue(U.seq,v.uniforms)}return v.uniformsList}function Zi(v,U){const z=Te.get(v);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function re(v,U,z,H,O){U.isScene!==!0&&(U=Pe),He.resetTextureUnits();const ae=U.fog,ge=H.isMeshStandardMaterial?U.environment:null,Ee=N===null?E.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Gi,_e=(H.isMeshStandardMaterial?pt:xt).get(H.envMap||ge),De=H.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Be=!!z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ue=!!z.morphAttributes.position,Je=!!z.morphAttributes.normal,lt=!!z.morphAttributes.color;let Mt=Xn;H.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Mt=E.toneMapping);const mt=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ht=mt!==void 0?mt.length:0,Ne=Te.get(H),gt=u.state.lights;if(Qe===!0&&(j===!0||v!==M)){const Ft=v===M&&H.id===S;ce.setState(H,v,Ft)}let nt=!1;H.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==gt.state.version||Ne.outputColorSpace!==Ee||O.isBatchedMesh&&Ne.batching===!1||!O.isBatchedMesh&&Ne.batching===!0||O.isBatchedMesh&&Ne.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ne.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ne.instancing===!1||!O.isInstancedMesh&&Ne.instancing===!0||O.isSkinnedMesh&&Ne.skinning===!1||!O.isSkinnedMesh&&Ne.skinning===!0||O.isInstancedMesh&&Ne.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ne.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ne.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ne.instancingMorph===!1&&O.morphTexture!==null||Ne.envMap!==_e||H.fog===!0&&Ne.fog!==ae||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ce.numPlanes||Ne.numIntersection!==ce.numIntersection)||Ne.vertexAlphas!==De||Ne.vertexTangents!==Be||Ne.morphTargets!==Ue||Ne.morphNormals!==Je||Ne.morphColors!==lt||Ne.toneMapping!==Mt||Ne.morphTargetsCount!==ht)&&(nt=!0):(nt=!0,Ne.__version=H.version);let Kt=Ne.currentProgram;nt===!0&&(Kt=Yt(H,U,O));let mi=!1,$t=!1,Ki=!1;const _t=Kt.getUniforms(),nn=Ne.uniforms;if(be.useProgram(Kt.program)&&(mi=!0,$t=!0,Ki=!0),H.id!==S&&(S=H.id,$t=!0),mi||M!==v){be.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),_t.setValue(A,"projectionMatrix",v.projectionMatrix),_t.setValue(A,"viewMatrix",v.matrixWorldInverse);const Gt=_t.map.cameraPosition;Gt!==void 0&&Gt.setValue(A,Me.setFromMatrixPosition(v.matrixWorld)),Ge.logarithmicDepthBuffer&&_t.setValue(A,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&_t.setValue(A,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,$t=!0,Ki=!0)}if(O.isSkinnedMesh){_t.setOptional(A,O,"bindMatrix"),_t.setOptional(A,O,"bindMatrixInverse");const Ft=O.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),_t.setValue(A,"boneTexture",Ft.boneTexture,He))}O.isBatchedMesh&&(_t.setOptional(A,O,"batchingTexture"),_t.setValue(A,"batchingTexture",O._matricesTexture,He),_t.setOptional(A,O,"batchingIdTexture"),_t.setValue(A,"batchingIdTexture",O._indirectTexture,He),_t.setOptional(A,O,"batchingColorTexture"),O._colorsTexture!==null&&_t.setValue(A,"batchingColorTexture",O._colorsTexture,He));const rn=z.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&oe.update(O,z,Kt),($t||Ne.receiveShadow!==O.receiveShadow)&&(Ne.receiveShadow=O.receiveShadow,_t.setValue(A,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(nn.envMap.value=_e,nn.flipEnvMap.value=_e.isCubeTexture&&_e.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&U.environment!==null&&(nn.envMapIntensity.value=U.environmentIntensity),$t&&(_t.setValue(A,"toneMappingExposure",E.toneMappingExposure),Ne.needsLights&&fe(nn,Ki),ae&&H.fog===!0&&ie.refreshFogUniforms(nn,ae),ie.refreshMaterialUniforms(nn,H,V,Q,u.state.transmissionRenderTarget[v.id]),is.upload(A,Mr(Ne),nn,He)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(is.upload(A,Mr(Ne),nn,He),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&_t.setValue(A,"center",O.center),_t.setValue(A,"modelViewMatrix",O.modelViewMatrix),_t.setValue(A,"normalMatrix",O.normalMatrix),_t.setValue(A,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ft=H.uniformsGroups;for(let Gt=0,vs=Ft.length;Gt<vs;Gt++){const Jn=Ft[Gt];Ye.update(Jn,Kt),Ye.bind(Jn,Kt)}}return Kt}function fe(v,U){v.ambientLightColor.needsUpdate=U,v.lightProbe.needsUpdate=U,v.directionalLights.needsUpdate=U,v.directionalLightShadows.needsUpdate=U,v.pointLights.needsUpdate=U,v.pointLightShadows.needsUpdate=U,v.spotLights.needsUpdate=U,v.spotLightShadows.needsUpdate=U,v.rectAreaLights.needsUpdate=U,v.hemisphereLights.needsUpdate=U}function qt(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,U,z){const H=Te.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Te.get(v.texture).__webglTexture=U,Te.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,U){const z=Te.get(v);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0};const jn=A.createFramebuffer();this.setRenderTarget=function(v,U=0,z=0){N=v,C=U,R=z;let H=!0,O=null,ae=!1,ge=!1;if(v){const _e=Te.get(v);if(_e.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(A.FRAMEBUFFER,null),H=!1;else if(_e.__webglFramebuffer===void 0)He.setupRenderTarget(v);else if(_e.__hasExternalTextures)He.rebindTextures(v,Te.get(v.texture).__webglTexture,Te.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Ue=v.depthTexture;if(_e.__boundDepthTexture!==Ue){if(Ue!==null&&Te.has(Ue)&&(v.width!==Ue.image.width||v.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(v)}}const De=v.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(ge=!0);const Be=Te.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?O=Be[U][z]:O=Be[U],ae=!0):v.samples>0&&He.useMultisampledRTT(v)===!1?O=Te.get(v).__webglMultisampledFramebuffer:Array.isArray(Be)?O=Be[z]:O=Be,L.copy(v.viewport),I.copy(v.scissor),q=v.scissorTest}else L.copy(we).multiplyScalar(V).floor(),I.copy(je).multiplyScalar(V).floor(),q=st;if(z!==0&&(O=jn),be.bindFramebuffer(A.FRAMEBUFFER,O)&&H&&be.drawBuffers(v,O),be.viewport(L),be.scissor(I),be.setScissorTest(q),ae){const _e=Te.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+U,_e.__webglTexture,z)}else if(ge){const _e=U;for(let De=0;De<v.textures.length;De++){const Be=Te.get(v.textures[De]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+De,Be.__webglTexture,z,_e)}}else if(v!==null&&z!==0){const _e=Te.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,_e.__webglTexture,z)}S=-1},this.readRenderTargetPixels=function(v,U,z,H,O,ae,ge,Ee=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Te.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ge!==void 0&&(_e=_e[ge]),_e){be.bindFramebuffer(A.FRAMEBUFFER,_e);try{const De=v.textures[Ee],Be=De.format,Ue=De.type;if(!Ge.textureFormatReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=v.width-H&&z>=0&&z<=v.height-O&&(v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ee),A.readPixels(U,z,H,O,Ce.convert(Be),Ce.convert(Ue),ae))}finally{const De=N!==null?Te.get(N).__webglFramebuffer:null;be.bindFramebuffer(A.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(v,U,z,H,O,ae,ge,Ee=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Te.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ge!==void 0&&(_e=_e[ge]),_e)if(U>=0&&U<=v.width-H&&z>=0&&z<=v.height-O){be.bindFramebuffer(A.FRAMEBUFFER,_e);const De=v.textures[Ee],Be=De.format,Ue=De.type;if(!Ge.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,Je),A.bufferData(A.PIXEL_PACK_BUFFER,ae.byteLength,A.STREAM_READ),v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ee),A.readPixels(U,z,H,O,Ce.convert(Be),Ce.convert(Ue),0);const lt=N!==null?Te.get(N).__webglFramebuffer:null;be.bindFramebuffer(A.FRAMEBUFFER,lt);const Mt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await xu(A,Mt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,Je),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ae),A.deleteBuffer(Je),A.deleteSync(Mt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,U=null,z=0){const H=Math.pow(2,-z),O=Math.floor(v.image.width*H),ae=Math.floor(v.image.height*H),ge=U!==null?U.x:0,Ee=U!==null?U.y:0;He.setTexture2D(v,0),A.copyTexSubImage2D(A.TEXTURE_2D,z,0,0,ge,Ee,O,ae),be.unbindTexture()};const Zt=A.createFramebuffer(),_s=A.createFramebuffer();this.copyTextureToTexture=function(v,U,z=null,H=null,O=0,ae=null){ae===null&&(O!==0?(fr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ae=O,O=0):ae=0);let ge,Ee,_e,De,Be,Ue,Je,lt,Mt;const mt=v.isCompressedTexture?v.mipmaps[ae]:v.image;if(z!==null)ge=z.max.x-z.min.x,Ee=z.max.y-z.min.y,_e=z.isBox3?z.max.z-z.min.z:1,De=z.min.x,Be=z.min.y,Ue=z.isBox3?z.min.z:0;else{const rn=Math.pow(2,-O);ge=Math.floor(mt.width*rn),Ee=Math.floor(mt.height*rn),v.isDataArrayTexture?_e=mt.depth:v.isData3DTexture?_e=Math.floor(mt.depth*rn):_e=1,De=0,Be=0,Ue=0}H!==null?(Je=H.x,lt=H.y,Mt=H.z):(Je=0,lt=0,Mt=0);const ht=Ce.convert(U.format),Ne=Ce.convert(U.type);let gt;U.isData3DTexture?(He.setTexture3D(U,0),gt=A.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(He.setTexture2DArray(U,0),gt=A.TEXTURE_2D_ARRAY):(He.setTexture2D(U,0),gt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,U.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,U.unpackAlignment);const nt=A.getParameter(A.UNPACK_ROW_LENGTH),Kt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),mi=A.getParameter(A.UNPACK_SKIP_PIXELS),$t=A.getParameter(A.UNPACK_SKIP_ROWS),Ki=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,mt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,mt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,De),A.pixelStorei(A.UNPACK_SKIP_ROWS,Be),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ue);const _t=v.isDataArrayTexture||v.isData3DTexture,nn=U.isDataArrayTexture||U.isData3DTexture;if(v.isDepthTexture){const rn=Te.get(v),Ft=Te.get(U),Gt=Te.get(rn.__renderTarget),vs=Te.get(Ft.__renderTarget);be.bindFramebuffer(A.READ_FRAMEBUFFER,Gt.__webglFramebuffer),be.bindFramebuffer(A.DRAW_FRAMEBUFFER,vs.__webglFramebuffer);for(let Jn=0;Jn<_e;Jn++)_t&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Te.get(v).__webglTexture,O,Ue+Jn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Te.get(U).__webglTexture,ae,Mt+Jn)),A.blitFramebuffer(De,Be,ge,Ee,Je,lt,ge,Ee,A.DEPTH_BUFFER_BIT,A.NEAREST);be.bindFramebuffer(A.READ_FRAMEBUFFER,null),be.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(O!==0||v.isRenderTargetTexture||Te.has(v)){const rn=Te.get(v),Ft=Te.get(U);be.bindFramebuffer(A.READ_FRAMEBUFFER,Zt),be.bindFramebuffer(A.DRAW_FRAMEBUFFER,_s);for(let Gt=0;Gt<_e;Gt++)_t?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,rn.__webglTexture,O,Ue+Gt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,rn.__webglTexture,O),nn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ft.__webglTexture,ae,Mt+Gt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ft.__webglTexture,ae),O!==0?A.blitFramebuffer(De,Be,ge,Ee,Je,lt,ge,Ee,A.COLOR_BUFFER_BIT,A.NEAREST):nn?A.copyTexSubImage3D(gt,ae,Je,lt,Mt+Gt,De,Be,ge,Ee):A.copyTexSubImage2D(gt,ae,Je,lt,De,Be,ge,Ee);be.bindFramebuffer(A.READ_FRAMEBUFFER,null),be.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else nn?v.isDataTexture||v.isData3DTexture?A.texSubImage3D(gt,ae,Je,lt,Mt,ge,Ee,_e,ht,Ne,mt.data):U.isCompressedArrayTexture?A.compressedTexSubImage3D(gt,ae,Je,lt,Mt,ge,Ee,_e,ht,mt.data):A.texSubImage3D(gt,ae,Je,lt,Mt,ge,Ee,_e,ht,Ne,mt):v.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ae,Je,lt,ge,Ee,ht,Ne,mt.data):v.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ae,Je,lt,mt.width,mt.height,ht,mt.data):A.texSubImage2D(A.TEXTURE_2D,ae,Je,lt,ge,Ee,ht,Ne,mt);A.pixelStorei(A.UNPACK_ROW_LENGTH,nt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Kt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,mi),A.pixelStorei(A.UNPACK_SKIP_ROWS,$t),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ki),ae===0&&U.generateMipmaps&&A.generateMipmap(gt),be.unbindTexture()},this.initRenderTarget=function(v){Te.get(v).__webglFramebuffer===void 0&&He.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?He.setTextureCube(v,0):v.isData3DTexture?He.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?He.setTexture2DArray(v,0):He.setTexture2D(v,0),be.unbindTexture()},this.resetState=function(){C=0,R=0,N=null,be.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}const rs={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class qi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Gm=new hc(-1,1,1,-1,0,1);class Hm extends Nt{constructor(){super(),this.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Tt([0,2,0,0,2,0],2))}}const Vm=new Hm;class fo{constructor(e){this._mesh=new en(Vm,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Gm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Wm extends qi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=dr.clone(e.uniforms),this.material=new zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new fo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class bl extends qi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Xm extends qi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ym{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ke);this._width=n.width,this._height=n.height,t=new gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ln}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wm(rs),this.copyPass.material.blending=Cn,this.clock=new th}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}bl!==void 0&&(a instanceof bl?n=!0:a instanceof Xm&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qm extends qi{constructor(e,t,n=null,r=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ve}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const Zm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Vi extends qi{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new ke(e.x,e.y):new ke(256,256),this.clearColor=new Ve(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new gn(s,a,{type:Ln}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new gn(s,a,{type:Ln});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new gn(s,a,{type:Ln});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),a=Math.round(a/2)}const o=Zm;this.highPassUniforms=dr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new zt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new ke(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=dr.clone(rs.uniforms),this.blendMaterial=new zt({uniforms:this.copyUniforms,vertexShader:rs.vertexShader,fragmentShader:rs.fragmentShader,blending:Ht,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ve,this._oldClearAlpha=1,this._basic=new Fi,this._fsQuad=new fo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new ke(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Vi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Vi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new zt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ke(.5,.5)},direction:{value:new ke(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(e){return new zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Vi.BlurDirectionX=new ke(1,0);Vi.BlurDirectionY=new ke(0,1);const Kr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Km extends qi{constructor(){super(),this.uniforms=dr.clone(Kr.uniforms),this.material=new ju({name:Kr.name,uniforms:this.uniforms,vertexShader:Kr.vertexShader,fragmentShader:Kr.fragmentShader}),this._fsQuad=new fo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},tt.getTransfer(this._outputColorSpace)===at&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Nl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Fl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ol?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ja?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===kl?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Bl&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Tl=["#4ff2ff","#43d8ff","#6aa8ff","#9a86ff","#c477ff","#ff79dc","#ff7fb5","#ffb06e"],$r=1.75,jr=.015;function Kn(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function $n(i){const e=new $u(i);return e.colorSpace=Vt,e.anisotropy=4,e}function $m(){const[i,e]=Kn(128,128),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.22,"rgba(255,255,255,.75)"),t.addColorStop(.55,"rgba(255,255,255,.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),$n(i)}function jm(){const[i,e]=Kn(512,512),t=256;e.translate(t,t);const n=e.createRadialGradient(0,0,110,0,0,250);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.55,"rgba(255,255,255,.03)"),n.addColorStop(.76,"rgba(255,255,255,.14)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,252,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,255,255,.55)",e.lineWidth=4,e.setLineDash([32,30]),e.shadowColor="#fff",e.shadowBlur=14,e.beginPath(),e.arc(0,0,227,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.98)",e.lineWidth=15,e.shadowColor="#fff",e.shadowBlur=26,e.beginPath(),e.arc(0,0,174,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.42)",e.lineWidth=3,e.beginPath(),e.arc(0,0,126,0,Math.PI*2),e.stroke(),e.restore();for(let r=0;r<4;r++)e.save(),e.rotate(r*Math.PI/2),e.strokeStyle="rgba(255,255,255,.9)",e.lineWidth=5,e.shadowColor="#fff",e.shadowBlur=12,e.beginPath(),e.moveTo(0,-226),e.lineTo(0,-196),e.stroke(),e.restore();return e.save(),e.fillStyle="rgba(255,255,255,.85)",e.shadowColor="#fff",e.shadowBlur=20,e.beginPath(),e.arc(0,0,5,0,Math.PI*2),e.fill(),e.restore(),$n(i)}function Jm(){const[i,e]=Kn(96,1024),t=e.createLinearGradient(0,1024,0,0);return t.addColorStop(0,"rgba(255,255,255,.95)"),t.addColorStop(.35,"rgba(255,255,255,.55)"),t.addColorStop(.78,"rgba(255,255,255,.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.strokeStyle=t,e.lineWidth=7,e.shadowColor="#fff",e.shadowBlur=22,e.beginPath(),e.moveTo(48,1024),e.lineTo(48,6),e.stroke(),e.shadowBlur=6,e.lineWidth=2,e.strokeStyle="rgba(255,255,255,.95)",e.beginPath(),e.moveTo(48,1024),e.lineTo(48,6),e.stroke(),$n(i)}function Qm(){const[i,e]=Kn(192,1024),t=e.createLinearGradient(0,1024,0,0);t.addColorStop(0,"rgba(255,255,255,.34)"),t.addColorStop(.5,"rgba(255,255,255,.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,192,1024);const n=e.createLinearGradient(0,0,192,0);return n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.32,"rgba(255,255,255,.5)"),n.addColorStop(.5,"rgba(255,255,255,1)"),n.addColorStop(.68,"rgba(255,255,255,.5)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.globalCompositeOperation="destination-in",e.fillStyle=n,e.fillRect(0,0,192,1024),$n(i)}function e0(){const[i,e]=Kn(256,256),t=128;e.translate(t,t);const n=e.createRadialGradient(0,0,18,0,0,124);n.addColorStop(0,"rgba(255,255,255,.62)"),n.addColorStop(.45,"rgba(255,255,255,.2)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,124,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,255,255,.98)",e.lineWidth=17,e.shadowColor="#fff",e.shadowBlur=28,e.beginPath(),e.arc(0,0,84,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.5)",e.lineWidth=4,e.shadowColor="#fff",e.shadowBlur=10,e.beginPath(),e.arc(0,0,56,0,Math.PI*2),e.stroke(),e.restore();const r=e.createRadialGradient(0,0,0,0,0,30);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.55,"rgba(255,255,255,.75)"),r.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=r,e.beginPath(),e.arc(0,0,30,0,Math.PI*2),e.fill();for(let s=0;s<4;s++)e.save(),e.rotate(s*Math.PI/2),e.strokeStyle="rgba(255,255,255,.9)",e.lineWidth=5,e.shadowColor="#fff",e.shadowBlur=12,e.beginPath(),e.moveTo(0,-122),e.lineTo(0,-100),e.stroke(),e.restore();return $n(i)}function t0(){const[i,e]=Kn(128,512),t=e.createLinearGradient(0,0,128,0);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.22,"rgba(255,255,255,.35)"),t.addColorStop(.5,"rgba(255,255,255,.95)"),t.addColorStop(.78,"rgba(255,255,255,.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,512),e.fillStyle="rgba(255,255,255,.95)",e.shadowColor="#fff",e.shadowBlur=18,e.fillRect(48,0,32,512);const n=e.createLinearGradient(0,0,0,512);return n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.08,"rgba(255,255,255,1)"),n.addColorStop(.92,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.globalCompositeOperation="destination-in",e.fillStyle=n,e.fillRect(0,0,128,512),$n(i)}function n0(){const[i,e]=Kn(1024,128),t=e.createLinearGradient(0,0,1024,0);return t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.06,"rgba(255,255,255,.4)"),t.addColorStop(.5,"rgba(255,255,255,1)"),t.addColorStop(.94,"rgba(255,255,255,.4)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.strokeStyle=t,e.lineWidth=7,e.shadowColor="#fff",e.shadowBlur=26,e.beginPath(),e.moveTo(0,64),e.lineTo(1024,64),e.stroke(),e.lineWidth=2,e.shadowBlur=6,e.beginPath(),e.moveTo(0,64),e.lineTo(1024,64),e.stroke(),$n(i)}function wl(i,e){const[t,n]=Kn(2048,512);let r=i>>>0;const s=()=>(r=r*1664525+1013904223>>>0,r/4294967296);n.clearRect(0,0,2048,512);const a=n.createLinearGradient(0,150,0,512);a.addColorStop(0,"rgba(80,190,255,0)"),a.addColorStop(.7,"rgba(60,150,255,.09)"),a.addColorStop(1,"rgba(255,110,200,.08)"),n.fillStyle=a,n.fillRect(0,0,2048,512);let o=-40;for(;o<2088;){const l=24+Math.floor(s()*74),f=90+Math.floor(s()*300),h=512-f;n.save(),n.fillStyle="rgba(3,8,24,.82)",n.fillRect(o,h,l,f),n.strokeStyle=s()<.28?"rgba(255,120,200,.7)":"rgba(70,210,255,.55)",n.lineWidth=2,n.shadowColor=n.strokeStyle,n.shadowBlur=10,n.strokeRect(o+1,h+1,l-2,f-2),n.shadowBlur=0;const d=Math.max(1,Math.floor((l-10)/12)),p=Math.max(2,Math.floor((f-16)/17));for(let _=0;_<p;_++)for(let x=0;x<d;x++)s()<.64||(n.fillStyle=s()<.22?"rgba(255,205,130,.9)":s()<.5?"rgba(120,235,255,.85)":"rgba(255,120,195,.8)",n.fillRect(o+6+x*12,h+9+_*17,4,6));s()<.45&&(n.strokeStyle="rgba(150,225,255,.65)",n.lineWidth=1,n.beginPath(),n.moveTo(o+l*.5,h),n.lineTo(o+l*.5,h-18-s()*34),n.stroke(),n.fillStyle="rgba(255,90,150,.95)",n.fillRect(o+l*.5-1.5,h-22-s()*30,3,3)),n.restore(),o+=l+3+Math.floor(s()*11)}if(e){const l=n.createLinearGradient(0,360,0,512);l.addColorStop(0,"rgba(255,140,90,0)"),l.addColorStop(1,"rgba(255,140,90,.12)"),n.fillStyle=l,n.fillRect(0,300,2048,212)}const c=$n(t);return c.wrapS=ss,c.wrapT=Wn,c}function i0(i){const e=matchMedia("(pointer: coarse)").matches,t=new km({canvas:i,antialias:!e,powerPreference:"high-performance",alpha:!1,stencil:!1});t.setPixelRatio(Math.min(devicePixelRatio||1,e?1.45:1.8)),t.outputColorSpace=Vt,t.toneMapping=Ja,t.toneMappingExposure=1.06;const n=new Vu;n.background=new Ve(197387),n.fog=new oo(197387,.0115);const r=new on(46,innerWidth/innerHeight,.1,240);r.position.set(0,6.7,17.2);const s=new Ym(t);s.addPass(new qm(n,r));const a=new Vi(new ke(innerWidth,innerHeight),1,.62,.22);s.addPass(a),s.addPass(new Km);const o={glow:$m(),ring:jm(),line:Jm(),beam:Qm(),note:e0(),hold:t0(),hitline:n0(),cityFar:wl(2047066,!1),cityNear:wl(7023172,!0)},c=new fn;n.add(c);function l(y,k,X,J,ee){const Ie=new Float32Array(y*3);for(let dt=0;dt<y;dt++){const Ke=k+Math.random()*k*1.8,tn=Math.random()*Math.PI*2,Pt=Math.acos(2*Math.random()-1);Ie[dt*3]=Ke*Math.sin(Pt)*Math.cos(tn),Ie[dt*3+1]=Ke*Math.cos(Pt)*.55+3,Ie[dt*3+2]=Ke*Math.sin(Pt)*Math.sin(tn)-20}const Se=new Nt;Se.setAttribute("position",new Xt(Ie,3));const qe=new Va({size:X,map:o.glow,color:J,transparent:!0,opacity:ee,depthWrite:!1,blending:Ht,sizeAttenuation:!0}),rt=new jo(Se,qe);return c.add(rt),rt}const f=l(1500,34,.32,10279167,.7),h=l(650,70,.55,12164351,.5),d=l(220,14,.09,8186367,.45);function p(y,k,X,J,ee,Ie){const Se=new Qt({map:o.glow,color:ee,transparent:!0,opacity:Ie,depthWrite:!1,blending:Ht,fog:!1}),qe=new an(Se);return qe.position.set(y,k,X),qe.scale.set(J,J,1),c.add(qe),qe}const _=p(-16,9,-34,46,1789183,.18),x=p(18,1,-40,54,9314303,.14);p(0,12,-26,30,16723872,.07);const m=new Fi({color:4951551,wireframe:!0,transparent:!0,opacity:.055,fog:!1}),u=[];for(let y=0;y<3;y++){const k=new en(new uo(12+y*6.5,.045,3,120),m.clone());k.position.set(0,5,-26-y*7),k.rotation.set(.9+y*.16,y*.3,0),c.add(k),u.push(k)}const T=new nh(90,45,1811928,1254490);T.position.y=-3.6,T.material.transparent=!0,T.material.opacity=.16,T.material.depthWrite=!1,c.add(T);const w=[];for(let y=0;y<14;y++){const k=y%2?new lo(.5+Math.random()*.8,0):new co(.5+Math.random()*.7,0),X=new Fi({color:y%3?5823999:16740312,wireframe:!0,transparent:!0,opacity:.055+Math.random()*.05,fog:!1}),J=new en(k,X),ee=y%2?1:-1;J.position.set(ee*(9+Math.random()*10),.5+Math.random()*9,-6-Math.random()*14),J.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),J.userData.spin=new F((Math.random()-.5)*.3,(Math.random()-.5)*.4,(Math.random()-.5)*.2),c.add(J),w.push(J)}const E=new fn;E.position.z=-1,c.add(E);const P=[];function C(y,k,X,J,ee,Ie,Se){const qe=new Fi({map:y,color:Se,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),rt=new en(new xr(k,X),qe);return rt.position.set(J,ee,Ie),rt.renderOrder=-2,E.add(rt),P.push({mesh:rt,mat:qe,map:y,base:ee,speed:0}),rt}C(o.cityFar,150,42,-24,19,-54,11068671),C(o.cityNear,118,34,38,12,-36,16761504),P[0].speed=.0028,P[1].speed=.0062,E.visible=!1;const R=new fn;n.add(R);const N=new fn;R.add(N);const S=new fn;S.renderOrder=5,R.add(S);const M=new Qt({map:o.hitline,color:10483199,transparent:!0,opacity:.8,depthWrite:!1,depthTest:!1,blending:Ht,fog:!1}),L=new an(M);L.position.set(0,.02,.25),L.scale.set(13.2,.9,1),L.renderOrder=2,R.add(L);const I=[],q=[];for(let y=0;y<8;y++){const k=(y-3.5)*$r;q.push(k);const X=jr*k*k,J=new fn;J.position.set(k,0,X),N.add(J);const ee=new Ve(Tl[y]),Ie=new Qt({map:o.beam,color:ee.clone(),transparent:!0,opacity:.08,depthWrite:!1,depthTest:!1,blending:Ht,fog:!1}),Se=new an(Ie);Se.center.set(.5,0),Se.position.set(0,.04,-.02),Se.scale.set(1.16,12.6,1),Se.renderOrder=0,J.add(Se);const qe=new Qt({map:o.line,color:ee.clone(),transparent:!0,opacity:.62,depthWrite:!1,depthTest:!1,blending:Pn,fog:!1}),rt=new an(qe);rt.center.set(.5,0),rt.position.set(0,.04,.02),rt.scale.set(.36,12.4,1),rt.renderOrder=1,J.add(rt);const dt=new Qt({map:o.ring,color:ee.clone(),transparent:!0,opacity:.95,depthWrite:!1,depthTest:!1,blending:Pn,fog:!1}),Ke=new an(dt);Ke.position.set(0,.02,.22),Ke.scale.set(1.65,1.65,1),Ke.renderOrder=3,J.add(Ke);const tn=new Qt({map:o.glow,color:ee.clone(),transparent:!0,opacity:.13,depthWrite:!1,depthTest:!1,blending:Ht,fog:!1}),Pt=new an(tn);Pt.position.set(0,-.02,.18),Pt.scale.set(2.2,2.2,1),Pt.renderOrder=2,J.add(Pt);const Fn=new Qt({map:o.glow,color:ee.clone().lerp(new Ve(16777215),.25),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Ht,fog:!1}),Yt=new an(Fn);Yt.position.set(0,.2,.08),Yt.scale.set(1.1,1.1,1),Yt.renderOrder=4,Yt.visible=!1,J.add(Yt),I.push({group:J,beam:Se,line:rt,ring:Ke,glow:Pt,ghost:Yt,color:ee.clone(),targetColor:ee.clone(),flash:0,active:0,baseX:k,ghostFx:null,angle:0,pitch:0,screenAngle:0,screen:null})}function te(y,k){const X=new Ve(Tl[y]),J=new fn;J.renderOrder=5,I[y].group.add(J);const ee=new Qt({map:o.note,color:X,transparent:!0,opacity:1,depthWrite:!1,depthTest:!1,blending:Pn,fog:!1}),Ie=new an(ee);Ie.scale.set(1.04,1.04,1),Ie.renderOrder=6,J.add(Ie);let Se=null,qe=null;if(k==="hold"){const rt=new Qt({map:o.hold,color:X.clone().lerp(new Ve(16777215),.15),transparent:!0,opacity:.72,depthWrite:!1,depthTest:!1,blending:Ht,fog:!1});Se=new an(rt),Se.center.set(.5,.5),Se.renderOrder=4,J.add(Se);const dt=new Qt({map:o.note,color:X.clone(),transparent:!0,opacity:.85,depthWrite:!1,depthTest:!1,blending:Ht,fog:!1});qe=new an(dt),qe.scale.set(.68,.68,1),qe.renderOrder=5,J.add(qe)}return{group:J,head:Ie,body:Se,tail:qe,color:X}}const K=720,$=new Float32Array(K*3).fill(-999),Q=new Float32Array(K*3),V=new Float32Array(K*3),he=new Float32Array(K),ve=new Float32Array(K),we=new Nt;we.setAttribute("position",new Xt($,3)),we.setAttribute("color",new Xt(Q,3));const je=new Va({size:.3,map:o.glow,vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!1,blending:Ht,sizeAttenuation:!0,fog:!1}),st=new jo(we,je);st.renderOrder=9,n.add(st);let ut=0;function Qe(y,k,X=16,J=3.2){const ee=new Ve(k);for(let Ie=0;Ie<X;Ie++){const Se=ut=(ut+1)%K;$[Se*3]=y.x+(Math.random()-.5)*.15,$[Se*3+1]=y.y+(Math.random()-.5)*.15,$[Se*3+2]=y.z+(Math.random()-.5)*.15;const qe=Math.random()*Math.PI*2,rt=Math.acos(2*Math.random()-1),dt=J*(.35+Math.random()*.9);V[Se*3]=Math.sin(rt)*Math.cos(qe)*dt,V[Se*3+1]=Math.cos(rt)*dt+.6,V[Se*3+2]=Math.sin(rt)*Math.sin(qe)*dt;const Ke=Math.random()<.35;Q[Se*3]=Ke?1:ee.r,Q[Se*3+1]=Ke?1:ee.g,Q[Se*3+2]=Ke?1:ee.b,he[Se]=ve[Se]=.35+Math.random()*.5}}const j=[];for(let y=0;y<16;y++){const k=new Qt({map:o.ring,color:16777215,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Ht,fog:!1}),X=new an(k);X.scale.set(.8,.8,1),X.renderOrder=8,X.visible=!1,n.add(X),j.push({sprite:X,life:0,max:.38})}let ne=0;function Me(y,k,X=2.8){const J=j[ne=(ne+1)%j.length];J.sprite.position.copy(y),J.sprite.material.color.set(k),J.sprite.material.opacity=.95,J.sprite.scale.set(.7,.7,1),J.sprite.visible=!0,J.life=J.max=.38,J.scale=X}const Fe=[];for(let y=0;y<54;y++){const k=new Qt({map:o.ring,color:16777215,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Ht,fog:!1}),X=new an(k);X.scale.set(.6,.6,1),X.renderOrder=7,X.visible=!1,R.add(X),Fe.push({sprite:X,life:0,max:1,delay:0,vx:0,vy:0,base:.5,alpha:.6,spin:0})}let Pe=0;const G={view:{rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.7,bloom:.8,spin:.04,spacing:$r,ring:1.65},target:{rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.7,bloom:.8,spin:.04,spacing:$r,ring:1.65},section:null,energy:.4,keyCount:8,active:new Set([0,1,2,3,4,5,6,7]),pulse:0,shake:0,zoomKick:0,noteSpeed:8.2,time:0,playing:!1,spacing:$r,ringScale:1.65,portrait:!1,mouse:new ke,laneXNow:q.slice(),bpm:100,beatOffset:.535,energyPulse:0,motion:{style:"fan",amp:.06,speed:.5,pitch:.03},targetMotion:{style:"fan",amp:.06,speed:.5,pitch:.03},laneAngle:new Float32Array(8),lanePitch:new Float32Array(8),screenAngle:new Float32Array(8),city:0,cityTarget:0,live:new Set([0,1,2,3,4,5,6,7])};function Ct(y){const k=innerWidth/Math.max(1,innerHeight);if(G.portrait)return y<=4?{spacing:1.72,ring:1.62}:y<=6?{spacing:1.3,ring:1.24}:{spacing:1.02,ring:1.04};const X=k>1.9?1.08:1;return y<=4?{spacing:3.15*X,ring:2.35*X}:y<=6?{spacing:2.16*X,ring:1.95*X}:{spacing:1.75*X,ring:1.65*X}}function A(y,k=!1){const X=Ct(y);G.spacing=X.spacing,G.ringScale=X.ring,G.target.spacing=X.spacing,G.target.ring=X.ring,k&&(G.view.spacing=X.spacing,G.view.ring=X.ring)}function ot(){const y=innerWidth,k=innerHeight,X=y/k;G.portrait=X<.92,A(G.keyCount,!0);for(let ee=0;ee<8;ee++){const Ie=(ee-3.5)*G.spacing;I[ee].baseX=Ie,I[ee].group.position.x=Ie,I[ee].group.position.z=jr*Ie*Ie,I[ee].ring.scale.set(G.view.ring,G.view.ring,1),I[ee].glow.scale.set(G.view.ring*1.35,G.view.ring*1.35,1),G.laneXNow[ee]=Ie}L.scale.set((G.keyCount-1)*G.spacing+G.ring*1.5,.9,1),r.aspect=X,r.fov=G.portrait?52:46,r.updateProjectionMatrix();const J=G.section?G.section.camZ:17.2;G.target.camZ=J+(G.portrait?6.4:0),G.view.camZ=G.target.camZ,t.setSize(y,k),s.setSize(y,k),a.resolution.set(y/2,k/2)}addEventListener("resize",ot),ot(),addEventListener("pointermove",y=>{G.mouse.x=y.clientX/innerWidth*2-1,G.mouse.y=y.clientY/innerHeight*2-1},{passive:!0});function We(y){if(!y)return;const k=!!G.section&&G.section.keys!==y.keys;G.section=y,G.energy=y.energy,G.keyCount=y.keys,A(y.keys),G.target.rotY=y.rotY,G.target.rotZ=y.rotZ,G.target.tilt=y.tilt,G.target.spread=y.spread,G.target.y=y.y,G.target.camZ=y.camZ+(G.portrait?6.4:0),G.target.camY=y.camY,G.target.bloom=y.bloom*.82,G.target.spin=y.spin,G.targetMotion={style:y.motion||"fan",amp:y.motionAmp??.06,speed:y.motionSpeed??.5,pitch:y.motionPitch??.03},G.cityTarget=y.city??0,k&&(G.zoomKick=Math.min(1.4,G.zoomKick+.85));const X={4:[2,3,4,5],6:[1,2,3,4,5,6],8:[0,1,2,3,4,5,6,7]};G.active=new Set(X[y.keys]||X[8]),G.live=new Set(G.active);for(let J=0;J<8;J++){const ee=G.active.has(J);I[J].active=ee?1:0,ee||(I[J].ghostFx=null),I[J].targetColor.copy(I[J].color).lerp(new Ve(y.color),.24),ee&&(I[J].flash=Math.max(I[J].flash,.22))}M.color.set(y.accent)}function Ge(y){const k=new Set(G.active);for(const J of y)k.add(J);let X=k.size!==G.live.size;if(!X){for(const J of k)if(!G.live.has(J)){X=!0;break}}if(X){G.live=k;for(const J of y)G.active.has(J)||(I[J].flash=Math.max(I[J].flash,.34),I[J].ghostFx=null)}}function be(y){G.cityTarget=Math.max(0,Math.min(1,y))}function ft(y){return I[y].baseX}function Te(y){return jr*I[y].baseX*I[y].baseX}function He(y,k){return I[y].group.localToWorld(new F(0,k,.2))}const xt=new F,pt=new F;function b(){r.updateMatrixWorld(),R.updateWorldMatrix(!0,!1);for(let y=0;y<8;y++){const k=I[y];k.group.updateWorldMatrix(!1,!1);const X=k.group.matrixWorld;xt.set(0,.04,.22).applyMatrix4(X).project(r),pt.set(0,11.4,.22).applyMatrix4(X).project(r);const J=(xt.x*.5+.5)*innerWidth,ee=(-xt.y*.5+.5)*innerHeight,Ie=(pt.x*.5+.5)*innerWidth,Se=(-pt.y*.5+.5)*innerHeight;k.screenAngle=Math.atan2(Ie-J,ee-Se),k.screen={x:J,y:ee,topX:Ie,topY:Se,angle:k.screenAngle}}}function g(y){return I[y].screen||b(),I[y].screen}function B(){return b(),I.map(y=>y.screen)}function Z(){return B().map(y=>y.x)}function ie(y){return I[y].screen||b(),I[y].screenAngle}function Y(y,k=0){G.bpm=y||100,G.beatOffset=k}function Le(y){const k=I[y];k.flash=Math.max(k.flash,.55),k.ring.scale.setScalar(G.view.ring*1.1)}function ce(y,k="sweep"){const X=I[y];X&&(X.ghostFx={type:k,t:0,dur:k==="bounce"?.85:1.15},k==="bounce"&&(X.flash=Math.max(X.flash,.65),Me(He(y,.05),X.color.getHex(),1.7)))}function Ae(){for(const y of I)y.ghostFx=null,y.ghost.visible=!1,y.ghost.material.opacity=0}function Re(y,k=1,X=1){const J=I[y];if(!J)return;const ee=He(y,.1+Math.random()*.12),Ie=3;for(let Se=0;Se<Ie;Se++){const qe=Fe[Pe=(Pe+1)%Fe.length];qe.sprite.position.copy(ee),qe.sprite.position.y+=Se*.11,qe.sprite.position.z+=Se*.05,qe.sprite.material.color.copy(J.targetColor).lerp(D,.12+Se*.08),qe.sprite.material.rotation=Math.random()*Math.PI*2,qe.sprite.scale.set(.45,.45,1),qe.life=qe.max=1.15+Se*.24,qe.delay=Se*.075,qe.vx=k*(2.4+X*1.7)*(1-Se*.13)+(Math.random()-.5)*.5,qe.vy=.45+X*.35+Math.random()*.25,qe.base=.38+X*.38,qe.alpha=(.62-Se*.13)*Math.min(1,X),qe.spin=(Math.random()-.5)*1.2,qe.sprite.visible=!1}}function oe(y=1){G.energyPulse=Math.min(1.5,G.energyPulse+.35*y),G.shake=Math.min(.18,G.shake+.008*y)}function me(y,k=1){let X;y==null?(X=R.localToWorld(new F(0,.3,.25)),Qe(X,10483199,Math.round(22*k),5.2),Me(X,10483199,4.2)):(X=He(y,.08),Qe(X,I[y].targetColor,Math.round(14+10*k),3.2+k),Me(X,I[y].targetColor.getHex(),2.4+k)),G.shake=Math.min(.2,G.shake+.02*k)}function Oe(y=1){oe(y),G.zoomKick=Math.min(1.4,G.zoomKick+.22*y),me(null,.7+y*.7);for(let k=0;k<8;k++)G.active.has(k)||Re(k,k<3.5?-1:1,.7+y*.6)}function Ce(y,k,X,J){G.targetMotion={style:y||"fan",amp:k??.08,speed:X??.6,pitch:J??.04}}function de(y,k){const X=I[y];X.flash=1,G.shake=Math.min(.16,G.shake+(k==="perfect"?.025:.016));const J=He(y,.05);Qe(J,X.color,k==="perfect"?22:14,3.5),Me(J,X.color.getHex(),3)}function Ye(y){G.shake=Math.min(.25,G.shake+.13),I[y];const k=He(y,.05);Qe(k,16724831,9,1.4),Me(k,16724831,2)}const D=new Ve(16777215);new Ve;let le=0;function ue(y,k,X){le+=y;const J=X?k:le;G.time=J,G.playing=X;const ee=G.view,Ie=G.target,Se=1-Math.exp(-y*2.2);ee.rotY+=(Ie.rotY-ee.rotY)*Se,ee.rotZ+=(Ie.rotZ-ee.rotZ)*Se,ee.tilt+=(Ie.tilt-ee.tilt)*Se,ee.spread+=(Ie.spread-ee.spread)*Se,ee.y+=(Ie.y-ee.y)*Se,ee.camZ+=(Ie.camZ-ee.camZ)*Se,ee.camY+=(Ie.camY-ee.camY)*Se,ee.spin+=(Ie.spin-ee.spin)*Se,ee.spacing+=(Ie.spacing-ee.spacing)*(1-Math.exp(-y*3.1)),ee.ring+=(Ie.ring-ee.ring)*(1-Math.exp(-y*3.1)),a.strength+=(Ie.bloom-a.strength)*Se,G.zoomKick*=Math.exp(-y*2.6),G.energyPulse*=Math.exp(-y*3.2);const qe=60/G.bpm,rt=((J-G.beatOffset)/qe%1+1)%1,dt=Math.exp(-rt*5.2);G.pulse=dt;const Ke=G.motion,tn=G.targetMotion,Pt=1-Math.exp(-y*2.2);Ke.amp+=(tn.amp-Ke.amp)*Pt,Ke.speed+=(tn.speed-Ke.speed)*Pt,Ke.pitch+=(tn.pitch-Ke.pitch)*Pt,Ke.style=tn.style;const Fn=G.energyPulse;a.strength+=Fn*.32,R.position.y=ee.y+Math.sin(J*.65)*.035+dt*.03,R.rotation.y=ee.rotY+Math.sin(J*.22)*.02+Math.sin(J*.09)*ee.spin,R.rotation.z=ee.rotZ+Math.sin(J*.37)*.006,R.rotation.x=ee.tilt+Math.sin(J*.29)*.006;for(let re=0;re<8;re++){const fe=I[re],qt=(re-3.5)*ee.spacing*ee.spread;fe.baseX=qt,fe.group.position.x=qt,fe.group.position.z=jr*qt*qt,G.laneXNow[re]=qt;const jn=re-3.5;let Zt=0;switch(Ke.style){case"fan":Zt=-jn*Ke.amp;break;case"slope":Zt=Ke.amp;break;case"tiltL":Zt=Ke.amp*1.15;break;case"tiltR":Zt=-Ke.amp*1.15;break;case"zigzag":Zt=(re%2?1:-1)*Ke.amp*.95;break;case"wave":Zt=Math.sin(J*Ke.speed+re*.72)*Ke.amp-jn*Ke.amp*.22;break;case"orbit":Zt=Math.sin(J*Ke.speed*.72+jn*.38)*Ke.amp*.78-jn*Ke.amp*.3;break;default:Zt=-jn*Ke.amp}Zt+=Math.sin(J*1.15+re*.55)*Ke.amp*.12*(.4+G.energy),Zt+=dt*.006*Math.cos(re*.9+.4);const _s=Math.sin(J*.55+re*.7)*Ke.pitch+dt*Ke.pitch*.32*Math.sin(re*.8+.7)+Fn*.006,v=1-Math.exp(-y*3.4);fe.angle+=(Zt-fe.angle)*v,fe.pitch+=(_s-fe.pitch)*v,G.laneAngle[re]=fe.angle,G.lanePitch[re]=fe.pitch,fe.group.rotation.z=fe.angle,fe.group.rotation.x=fe.pitch,fe.line.scale.y=12.4*Math.cos(fe.pitch),fe.beam.scale.y=12.6*Math.cos(fe.pitch);const U=G.live.has(re);let z=0,H=0;if(fe.ghostFx){const _e=fe.ghostFx;_e.t+=y;const De=_e.t/_e.dur;if(De>=1)fe.ghostFx=null,fe.ghost.visible=!1,fe.ghost.material.opacity=0;else if(z=Math.sin(Math.PI*De),_e.type==="sweep"){fe.ghost.visible=!0,fe.ghost.position.set(0,.25+De*10.5,.08);const Be=.85+.55*z;fe.ghost.scale.set(Be,Be,1),fe.ghost.material.opacity=z*.8,fe.ghost.material.color.copy(fe.targetColor).lerp(D,.3+z*.4)}else H=z,fe.ghost.visible=!1}const O=U?(re%2?.86:.96)*.58:z*.34,ae=U?.065+dt*.03:z*.04,ge=U?.95:H*.78+z*.035;fe.line.material.opacity+=(O-fe.line.material.opacity)*(1-Math.exp(-y*3.5)),fe.beam.material.opacity+=(ae-fe.beam.material.opacity)*(1-Math.exp(-y*3.5)),fe.ring.material.opacity+=(ge-fe.ring.material.opacity)*(1-Math.exp(-y*3.5)),fe.glow.material.opacity+=((U?.14:z*.07)+fe.flash*.3-fe.glow.material.opacity)*(1-Math.exp(-y*8)),fe.flash=Math.max(0,fe.flash-y*3.4);const Ee=ee.ring*(1+dt*.045*(.4+G.energy)+fe.flash*.22+H*.5);fe.ring.scale.set(Ee,Ee,1),fe.ring.material.color.copy(fe.targetColor).lerp(D,fe.flash*.8),fe.glow.material.color.copy(fe.targetColor).lerp(D,fe.flash*.5),fe.line.material.color.copy(fe.targetColor).lerp(D,.14+fe.flash*.32),fe.beam.material.color.copy(fe.targetColor)}b();for(let re=0;re<8;re++){const fe=I[re];fe.line.material.rotation=-fe.screenAngle,fe.beam.material.rotation=-fe.screenAngle}L.scale.x=(ee.spacing*(G.keyCount-1)+ee.ring*1.5)*ee.spread,L.material.opacity=.45+dt*.3+G.energy*.15+Fn*.16;const Yt=G.mouse.x*.55,Mr=ee.camY+G.mouse.y*.18;r.position.x+=(Yt-r.position.x)*(1-Math.exp(-y*2)),r.position.y+=(Mr-r.position.y)*(1-Math.exp(-y*2)),r.position.z+=(ee.camZ-G.zoomKick*1.05-r.position.z)*(1-Math.exp(-y*3.4)),G.shake>5e-4&&(r.position.x+=(Math.random()-.5)*G.shake,r.position.y+=(Math.random()-.5)*G.shake,G.shake*=Math.exp(-y*10)),r.lookAt(0,4.05,0),f.rotation.y+=y*.006,h.rotation.y-=y*.004,d.rotation.y+=y*.012,_.position.x=-16+Math.sin(J*.05)*2,x.position.y=1+Math.sin(J*.07+1)*2;for(let re=0;re<u.length;re++)u[re].rotation.z+=y*(.02+re*.012),u[re].rotation.y+=y*.008;if(G.city+=(G.cityTarget-G.city)*(1-Math.exp(-y*1.6)),E.visible=G.city>.012,E.visible){E.position.x=G.mouse.x*1.4;for(let re=0;re<P.length;re++){const fe=P[re];fe.map.offset.x+=y*fe.speed*(.7+G.energy*1.6+dt*.8),fe.mesh.position.y=fe.base+Math.sin(J*.17+re*1.7)*.18,fe.mat.opacity=G.city*(re?.42:.3)}}for(const re of w)re.rotation.x+=re.userData.spin.x*y,re.rotation.y+=re.userData.spin.y*y,re.rotation.z+=re.userData.spin.z*y,re.position.y+=Math.sin(J*.4+re.position.x)*y*.06;let Zi=!1;for(let re=0;re<K;re++){if(he[re]<=0)continue;if(Zi=!0,he[re]-=y,he[re]<=0){$[re*3+1]=-999;continue}V[re*3]*=.972,V[re*3+1]-=2.4*y,V[re*3+2]*=.972,$[re*3]+=V[re*3]*y,$[re*3+1]+=V[re*3+1]*y,$[re*3+2]+=V[re*3+2]*y;const fe=Math.max(0,he[re]/ve[re]);Q[re*3]*=.988,Q[re*3+1]*=.988,Q[re*3+2]*=.988,fe<.25&&(Q[re*3]*=fe/.25,Q[re*3+1]*=fe/.25,Q[re*3+2]*=fe/.25)}Zi&&(we.attributes.position.needsUpdate=!0,we.attributes.color.needsUpdate=!0);for(const re of j){if(re.life<=0)continue;re.life-=y;const fe=1-Math.max(0,re.life/re.max),qt=.75+fe*re.scale;re.sprite.scale.set(qt,qt,1),re.sprite.material.opacity=(1-fe)*.9,re.life<=0&&(re.sprite.visible=!1)}for(const re of Fe){if(re.delay>0&&(re.delay-=y,re.delay>0)||re.life<=0)continue;if(re.life-=y,re.life<=0){re.sprite.visible=!1;continue}const fe=1-re.life/re.max;re.vx*=Math.exp(-y*2.5),re.vy*=Math.exp(-y*1.9),re.sprite.position.x+=re.vx*y,re.sprite.position.y+=re.vy*y,re.sprite.material.rotation+=re.spin*y;const qt=re.base*(.7+fe*1.15);re.sprite.scale.set(qt,qt,1),re.sprite.material.opacity=Math.pow(1-fe,1.55)*re.alpha,re.sprite.visible=!0}}function ye(){s.render()}function se(){t.dispose()}return{scene:n,camera:r,stage:R,noteRoot:S,state:G,makeNote:te,setSection:We,animate:ue,render:ye,laneX:ft,laneZ:Te,worldPoint:He,laneScreenXs:Z,laneScreenPoints:B,laneScreenGeometry:g,laneScreenAngle:ie,setPreviewLanes:Ge,setCity:be,setTempo:Y,pressFx:Le,hitFx:de,missFx:Ye,ghostFx:ce,echoFx:Re,pulseFx:oe,burstFx:me,vibeFx:Oe,motionEvent:Ce,clearGhosts:Ae,layout:ot,dispose:se,get noteSpeed(){return G.noteSpeed},set noteSpeed(y){G.noteSpeed=y},get noteScale(){return Math.max(1,Math.min(1.3,G.view.ring/1.65))}}}class r0{constructor(){this.ctx=null,this.buffer=null,this.source=null,this.gain=null,this.startAt=0,this.offset=0,this.duration=0,this.loaded=!1,this.muted=!1,this.hitGain=null,this.cache=new Map}async load(e,t){let n=this.cache.get(e);if(!n){const r=await fetch(e);if(!r.ok)throw new Error("audio fetch failed: "+r.status);const s=Number(r.headers.get("content-length"))||115e4;let a;if(r.body&&r.body.getReader){const o=r.body.getReader(),c=[];let l=0;for(t?.(0);;){const{value:h,done:d}=await o.read();if(d)break;c.push(h),l+=h.length,t?.(Math.min(.94,l/s))}a=new Uint8Array(l);let f=0;for(const h of c)a.set(h,f),f+=h.length}else a=new Uint8Array(await r.arrayBuffer());t?.(.95),this.ctx=this.ctx||new(window.AudioContext||window.webkitAudioContext)({latencyHint:"interactive"}),n=await this.ctx.decodeAudioData(a.buffer),this.cache.set(e,n)}return this.buffer=n,this.duration=n.duration,this.loaded=!0,this.gain||(this.gain=this.ctx.createGain(),this.gain.gain.value=.92,this.gain.connect(this.ctx.destination)),this.hitGain||(this.hitGain=this.ctx.createGain(),this.hitGain.gain.value=.5,this.hitGain.connect(this.ctx.destination)),t?.(1),n}async start(e=0,t={}){if(!this.loaded)return;if(!this.ctx)throw new Error("no audio context");this.ctx.state!=="running"&&await this.ctx.resume(),this.stop(),this.source=this.ctx.createBufferSource(),this.source.buffer=this.buffer,this.source.connect(this.gain);const n=this.ctx.currentTime+.12;this.startAt=n,this.offset=e;try{const r=Math.max(0,(t.fadeStart??this.duration-6.7)-e),s=Math.max(.05,(t.fadeEnd??this.duration-4.7)-e);this.gain.gain.cancelScheduledValues(this.ctx.currentTime),this.gain.gain.setValueAtTime(.92,this.ctx.currentTime),this.gain.gain.setValueAtTime(.92,n+r),this.gain.gain.linearRampToValueAtTime(0,n+s)}catch{}this.source.start(n,e)}stop(){if(this.source){try{this.source.stop()}catch{}this.source.disconnect(),this.source=null}}pause(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}get time(){return this.ctx?this.ctx.currentTime-this.startAt+this.offset:0}get paused(){return!!this.ctx&&this.ctx.state==="suspended"}click(e=3,t=1){if(!this.ctx||this.ctx.state!=="running"||this.muted)return;const n=this.ctx.currentTime,r=this.ctx.createOscillator(),s=this.ctx.createGain();r.type="triangle";const a=360*Math.pow(2,e/12);r.frequency.setValueAtTime(a*1.5,n),r.frequency.exponentialRampToValueAtTime(a*.75,n+.035),s.gain.setValueAtTime(1e-4,n),s.gain.exponentialRampToValueAtTime(.035*t,n+.004),s.gain.exponentialRampToValueAtTime(1e-4,n+.055),r.connect(s),s.connect(this.hitGain),r.start(n),r.stop(n+.07)}thud(){if(!this.ctx||this.ctx.state!=="running"||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(90,e),t.frequency.exponentialRampToValueAtTime(45,e+.12),n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.05,e+.01),n.gain.exponentialRampToValueAtTime(1e-4,e+.18),t.connect(n),n.connect(this.hitGain),t.start(e),t.stop(e+.2)}}const _c={KeyA:0,KeyS:1,KeyD:2,KeyF:3,KeyJ:4,KeyK:5,KeyL:6,Semicolon:7,Numpad1:0,Numpad2:1,Numpad3:2,Numpad4:3,Numpad5:4,Numpad6:5,Numpad7:6,Numpad8:7},Al={4:[2,3,4,5],6:[1,2,3,4,5,6],8:[0,1,2,3,4,5,6,7]},po=.185,Js={perfect:.045,great:.09,good:.135},s0={perfect:3e3,great:2e3,good:1e3,bad:300},a0={perfect:1,great:.85,good:.55,bad:.25,miss:0},vc="cryout-best-v2",o0="cryout-best-v1",l0=2.05,xe=i=>document.getElementById(i),W={canvas:xe("scene"),hud:xe("hud"),pads:[...document.querySelectorAll(".pad")],start:xe("startScreen"),startBtn:xe("startBtn"),startLabel:xe("startBtnLabel"),loadFill:xe("loadFill"),startLanes:xe("startLanes"),startTrack:xe("startTrack"),startLength:xe("startLength"),startLevel:xe("startLevel"),trackCards:[...document.querySelectorAll(".track-card")],score:xe("score"),acc:xe("acc"),maxCombo:xe("maxCombo"),progress:xe("progressFill"),progressGlow:xe("progressGlow"),section:xe("sectionName"),time:xe("timeLabel"),keys:xe("keysCount"),energy:xe("energyFill"),comboHud:xe("comboHud"),comboNum:xe("comboNum"),judge:xe("judge"),pauseBtn:xe("pauseBtn"),pause:xe("pauseScreen"),result:xe("resultScreen"),toast:xe("toast"),rank:xe("rank"),finalScore:xe("finalScore"),finalAcc:xe("finalAcc"),cPerfect:xe("cPerfect"),cGreat:xe("cGreat"),cGood:xe("cGood"),cBad:xe("cBad"),cMiss:xe("cMiss"),fMaxCombo:xe("fMaxCombo"),fcBadge:xe("fcBadge"),resultTag:xe("resultTag"),bestScoreLabel:xe("bestScoreLabel"),bestBadge:xe("bestBadge"),bestNote:xe("bestNote"),bestLine:xe("bestLine"),hudTrack:xe("hudTrack"),hudBpm:xe("hudBpm"),resultTrack:xe("resultTrack"),resultDiff:xe("resultDiff"),resultBpm:xe("resultBpm"),footTrack:xe("footTrack"),footLanes:xe("footLanes"),barPerfect:xe("barPerfect"),barGreat:xe("barGreat"),barGood:xe("barGood"),barBad:xe("barBad"),barMiss:xe("barMiss"),peakCombo:xe("peakCombo"),comboLine:xe("comboLine"),comboFill:xe("comboFill"),accRing:xe("accRing"),scoreDelta:xe("scoreDelta"),resultLoading:xe("resultLoading"),loadTrack:xe("loadTrack"),loadProgress:xe("loadProgress"),loadPct:xe("loadPct"),loadRank:xe("loadRank"),flash:xe("flash")},Xe=i0(W.canvas),Rt=new r0;let bt=Dl[Nc]||Ll[0],vt=bt.chart,Nn=[],it="boot",Wi=null,Ya=0,mo=vt.song.chartEnd,qa=vt.song.duration,Jr=0,Oi=0,qn=[],Za=0,Ka=0;const ze={score:0,combo:0,maxCombo:0,judged:0,weight:0,perfect:0,great:0,good:0,bad:0,miss:0,dropped:0,health:100},pn=new Array(8).fill(!1),fi=new Array(8).fill(null),di=new Set;function xc(){return di.size>0}let Rl=0,ar=0,or=0;function c0(){const i={};try{const e=localStorage.getItem(o0);e&&(i.cryout=JSON.parse(e))}catch{}try{const e=localStorage.getItem(vc);e&&Object.assign(i,JSON.parse(e)||{})}catch{}return i}let ui=c0(),sr=ui[bt.id]||null;function Mc(){sr=ui[bt.id]||null;const i=sr?`${String(sr.score).padStart(7,"0")} · ${sr.rank||"—"}`:"—";W.bestScoreLabel&&(W.bestScoreLabel.textContent=i),W.bestLine&&(W.bestLine.innerHTML=`PERSONAL BEST <b>${i}</b>`);for(const e of W.trackCards){const t=ui[e.dataset.track],n=e.querySelector(".tc-best");n&&(n.textContent=t?`PB ${t.rank||"—"}`:"",n.title=t?`Personal best ${t.score} · ${(t.acc||0).toFixed(2)}%`:"")}}Xe.setSection(vt.sections[0]);Xe.setTempo(vt.song.bpm,vt.song.beatOffset);Xe.setCity(vt.sections[0].city||0);function u0(){for(const i of Nn)i.group.removeFromParent(),i.head.material.dispose(),i.body&&i.body.material.dispose(),i.tail&&i.tail.material.dispose();Nn=[]}function yc(){u0(),Nn=vt.notes.map((i,e)=>{const t=Xe.makeNote(i.lane,i.type);return t.group.visible=!1,{data:i,index:e,lane:i.lane,type:i.type,state:"pending",endTime:i.t+(i.dur||0),group:t.group,head:t.head,body:t.body,tail:t.tail,color:t.color,tickAt:i.t}})}function go(){for(const i of Nn)i.state="pending",i.tickAt=i.data.t,i.group.visible=!1,i.group.position.set(0,0,0),i.head.visible=!0,i.head.scale.set(1.04,1.04,1),i.head.material.opacity=1,i.body&&(i.body.visible=!0,i.body.scale.set(.52,1,1),i.body.position.y=.5,i.tail.visible=!0,i.tail.position.y=1);Object.assign(ze,{score:0,combo:0,maxCombo:0,judged:0,weight:0,perfect:0,great:0,good:0,bad:0,miss:0,dropped:0,health:100}),pn.fill(!1),fi.fill(null),di.clear(),ar=0,or=0,qn=[],Za=0,Ka=0,Xe.clearGhosts(),Ya=0,Wi=null,bc(vt.sections[0],!0),Ec(0),pr(0,!1),W.judge.className="";for(const i of W.pads)i.classList.remove("pressed");W.flash.classList.remove("on")}function Sc(i){return Al[i]||Al[8]}function h0(i){const e=new Set;for(const t of Nn){if(t.state!=="pending")continue;const n=t.data.t-i;n<l0&&n>-po&&e.add(t.lane)}return e}function f0(i){return String(i).padStart(2,"0")}function $a(i){const e=Math.max(0,Math.floor(i));return`${Math.floor(e/60)}:${f0(e%60)}`}function Ec(i){i-Za>=.32&&(Za=i,qn.push(ze.combo),qn.length>260&&qn.shift()),W.score.textContent=String(ze.score).padStart(7,"0");const e=ze.judged?ze.weight/ze.judged*100:100;W.acc.textContent=e.toFixed(2)+"%",W.maxCombo.textContent=ze.maxCombo;const t=Math.max(0,Math.min(1,i/mo));W.progress.style.width=(t*100).toFixed(2)+"%",W.progressGlow.style.left=(t*100).toFixed(2)+"%";const n=Math.max(0,Math.min(qa,i));W.time.textContent=`${$a(n)} / ${$a(qa)}`,W.energy.style.height=Math.max(0,Math.min(100,ze.health)).toFixed(1)+"%"}function _o(i,e){const t=W.judge;t.textContent=e||i.toUpperCase(),t.className=i,t.offsetWidth,t.classList.add("pop")}function pr(i,e=!0){ze.combo=i,i>ze.maxCombo&&(ze.maxCombo=i),W.comboNum.textContent=i,W.maxCombo.textContent=ze.maxCombo,i>=2?W.comboHud.classList.add("on"):W.comboHud.classList.remove("on"),i>=2&&e&&(W.comboHud.classList.remove("bump"),W.comboHud.offsetWidth,W.comboHud.classList.add("bump"))}function fs(i,e=1300){W.toast.textContent=i,W.toast.classList.add("on"),clearTimeout(Rl),Rl=setTimeout(()=>W.toast.classList.remove("on"),e)}function bc(i,e=!1){if(!i||!e&&i===Wi)return;Wi=i,Xe.setSection(i),W.section.textContent=i.name,W.keys.textContent=i.keys;const t=new Set(Sc(i.keys));for(const n of W.pads){const r=Number(n.dataset.lane),s=t.has(r);n.classList.toggle("active",s),n.classList.toggle("sleep",!s),n.setAttribute("aria-hidden",String(!s)),n.tabIndex=s?0:-1}document.documentElement.style.setProperty("--cyan",i.color),document.documentElement.style.setProperty("--magenta",i.accent),e||(fs(`${i.name} // ${i.keys} LANES`,1100),Xe.state.shake=Math.min(.12,Xe.state.shake+.035))}function d0(i){const e=vt.sections;for(let t=e.length-1;t>=0;t--)if(i>=e[t].start)return{index:t,sec:e[t]};return{index:0,sec:e[0]}}function p0(i,e){const t=Math.abs(e);let n;t<=Js.perfect?n="perfect":t<=Js.great?n="great":t<=Js.good?n="good":n="bad",ze[n]++,ze.judged++,ze.weight+=a0[n],ze.score+=s0[n],ze.health=Math.min(100,ze.health+(n==="perfect"?1.1:n==="great"?.8:n==="good"?.4:-1.6)),n==="bad"?pr(0,!1):pr(ze.combo+1),i.type==="hold"?(i.state="holding",i.endTime=i.data.t+i.data.dur,i.tickAt=Rt.time,i.head.visible=!1,fi[i.lane]=i):(i.state="done",i.group.visible=!1),_o(n,n==="perfect"?"PERFECT":n==="great"?"GREAT":n==="good"?"GOOD":"BAD"),Xe.hitFx(i.lane,n),Rt.click(i.lane,n==="perfect"?.52:.38)}function m0(i){i.state==="pending"&&(i.state="miss",i.group.visible=!1,ze.miss++,ze.judged++,ze.health=Math.max(0,ze.health-5),pr(0,!1),_o("miss","MISS"),Xe.missFx(i.lane),Rt.thud())}function Tc(i){i.state==="holding"&&(i.state="dropped",i.group.visible=!1,fi[i.lane]=null,ze.dropped++,ze.miss++,ze.judged++,ze.health=Math.max(0,ze.health-4),pr(0,!1),_o("miss","HOLD LOST"),Xe.missFx(i.lane),Rt.thud())}function wc(i){i.state==="holding"&&(i.state="done",i.group.visible=!1,fi[i.lane]=null,ze.score+=450,ze.health=Math.min(100,ze.health+1.2),Xe.pressFx(i.lane),Xe.hitFx(i.lane,"great"))}function vo(i){if(it!=="playing")return;Xe.pressFx(i),Rt.click(i,.16);const e=Rt.time;if(e<0)return;let t=null,n=1/0;for(const r of Nn){if(r.lane!==i||r.state!=="pending")continue;const s=e-r.data.t;if(s<-.16||s>po)continue;const a=Math.abs(s);a<n&&(n=a,t=r)}t&&p0(t,e-t.data.t)}function xo(i){if(it!=="playing")return;const e=fi[i];e&&(xc()||(fi[i]=null,Rt.time<e.endTime-.12?Tc(e):wc(e)))}const Qs=8.4;function g0(i){const e=Xe.noteScale;for(const t of Nn)if(t.state==="pending"){const n=(t.data.t-i)*Qs;if(t.group.position.set(0,n,.24),t.group.visible=n<14.5&&n>-1.3,t.head.scale.set(1.04*e,1.04*e,1),t.body){const r=t.data.dur*Qs;t.body.visible=t.group.visible,t.tail.visible=t.group.visible,t.body.scale.set(.52*e,r,1),t.body.position.y=r/2,t.body.material.rotation=-Xe.laneScreenAngle(t.lane),t.tail.scale.set(.68*e,.68*e,1),t.tail.position.y=r}i>t.data.t+po&&m0(t)}else if(t.state==="holding"){if(!pn[t.lane]&&!xc()){Tc(t);continue}if(i>=t.endTime-.02){wc(t);continue}const n=Math.max(0,(t.endTime-i)*Qs);t.group.visible=!0,t.group.position.set(0,.02,.24),t.head.visible=!1,t.body&&(t.body.visible=n>.03,t.body.scale.set(.52*e,n,1),t.body.position.y=n/2,t.body.material.rotation=-Xe.laneScreenAngle(t.lane),t.tail.visible=n>.4,t.tail.scale.set(.68*e,.68*e,1),t.tail.position.y=n),i>t.tickAt&&(t.tickAt=i+.12,ze.score+=24,ze.health=Math.min(100,ze.health+.06))}else t.group.visible=!1}async function Mo(){if(Rt.loaded){Oi++,W.start.classList.remove("show"),W.result.classList.remove("show"),W.resultLoading.classList.remove("show"),W.pause.classList.remove("show"),W.hud.classList.remove("hidden"),W.hud.setAttribute("aria-hidden","false"),document.body.classList.add("playing"),go(),it="starting";try{await Rt.start(0,{fadeStart:bt.fadeStart,fadeEnd:bt.fadeEnd}),it="playing",fs(`LISTEN // ${vt.sections[0].keys} LANES`,1500)}catch(i){console.error(i),it="menu",document.body.classList.remove("playing"),W.hud.classList.add("hidden"),W.start.classList.add("show"),W.startLabel.textContent="AUDIO ERROR",fs("AUDIO COULD NOT START",3e3)}}}function gs(){it==="playing"&&(it="paused",Rt.pause(),W.pause.classList.add("show"))}async function Ac(){it==="paused"&&(Rt.resume(),W.pause.classList.remove("show"),it="playing")}function Rc(){Oi++,it="menu",Rt.stop(),Rt.resume(),W.pause.classList.remove("show"),W.result.classList.remove("show"),W.resultLoading.classList.remove("show"),W.hud.classList.add("hidden"),W.hud.setAttribute("aria-hidden","true"),W.start.classList.add("show"),document.body.classList.remove("playing"),Xe.setSection(vt.sections[0]),Xe.setTempo(vt.song.bpm,vt.song.beatOffset),Xe.setCity(vt.sections[0].city||0),Xe.setPreviewLanes(new Set);for(const i of Nn)i.group.visible=!1;pn.fill(!1),fi.fill(null),di.clear(),ar=0,or=0,Xe.clearGhosts();for(const i of W.pads)i.classList.remove("pressed","active","sleep");document.documentElement.style.setProperty("--cyan","#5ee7ff"),document.documentElement.style.setProperty("--magenta","#ff5fd2")}function _0(i,e){return e===0?"F":i>=99.5?"S+":i>=98?"S":i>=93?"A":i>=86?"B":i>=76?"C":i<50?"F":"D"}function v0(i,e){const r=i.length?i:[0,0,0,0],s=Math.max(1,e,...r),a=320/Math.max(1,r.length-1);let o="";for(let l=0;l<r.length;l++){const f=l*a,h=116-r[l]/s*106;o+=`${l?"L":"M"}${f.toFixed(1)} ${h.toFixed(1)}`}const c=`${o}L320 116L0 116Z`;return{line:o,fill:c}}function x0(i=1){W.flash.style.opacity=String(Math.min(.42,.16+i*.18)),W.flash.classList.add("on"),clearTimeout(Ka),Ka=setTimeout(()=>{W.flash.style.opacity="",W.flash.classList.remove("on")},180)}function Cl(i,e,t,n){const s=performance.now(),a=o=>{const c=Math.min(1,(o-s)/t),l=1-Math.pow(1-c,3);i.textContent=n(Math.round(0+(e-0)*l)),c<1&&requestAnimationFrame(a)};requestAnimationFrame(a)}function M0(i){const{rank:e,acc:t,full:n,isBest:r,prevBest:s,judgeTotals:a}=i;W.rank.textContent=e,W.finalScore.textContent="0000000",W.finalAcc.textContent="0.00%",Cl(W.finalScore,i.score,900,p=>String(p).padStart(7,"0")),Cl(W.fMaxCombo,i.maxCombo,700,p=>String(p));const o=performance.now(),c=p=>{const _=Math.min(1,(p-o)/900),x=t*(1-Math.pow(1-_,3));W.finalAcc.textContent=x.toFixed(2)+"%",W.accRing.style.setProperty("--acc",x.toFixed(2)+"%"),_<1&&requestAnimationFrame(c)};requestAnimationFrame(c),W.cPerfect.textContent=i.counts.perfect,W.cGreat.textContent=i.counts.great,W.cGood.textContent=i.counts.good,W.cBad.textContent=i.counts.bad,W.cMiss.textContent=i.counts.miss;const l=Math.max(1,a);W.barPerfect.style.width=(i.counts.perfect/l*100).toFixed(1)+"%",W.barGreat.style.width=(i.counts.great/l*100).toFixed(1)+"%",W.barGood.style.width=(i.counts.good/l*100).toFixed(1)+"%",W.barBad.style.width=(i.counts.bad/l*100).toFixed(1)+"%",W.barMiss.style.width=(i.counts.miss/l*100).toFixed(1)+"%";const f=v0(qn,ze.maxCombo);W.comboLine.setAttribute("d",f.line),W.comboFill.setAttribute("d",f.fill),W.peakCombo.textContent=ze.maxCombo,W.resultTrack.textContent=bt.title,W.resultDiff.textContent=bt.difficulty,W.resultBpm.textContent=`${bt.bpm} BPM`,W.footTrack.textContent=bt.shortTitle,W.footLanes.textContent=bt.laneLabel,W.resultTag.textContent=n?"FULL COMBO // FIELD MASTERED":t<50?"SIGNAL LOST // TRY AGAIN":"CLEARED // SIGNAL COMPLETE",W.fcBadge.classList.toggle("on",n),W.bestBadge.classList.toggle("on",r);const h=ui[bt.id]||null;W.bestNote.innerHTML=h?`${String(h.score).padStart(7,"0")} · ${h.rank||"—"}`:"FIRST RUN";const d=Math.max(0,(h?.score||0)-i.score);W.scoreDelta.textContent=r?s?`NEW BEST +${String(Math.max(0,i.score-s.score)).padStart(5,"0")}`:"FIRST CLEAR":d>0?`PB GAP ${String(d).padStart(5,"0")}`:"PB MATCHED",W.result.classList.remove("show"),W.result.offsetWidth,W.result.classList.add("show"),setTimeout(()=>{W.resultLoading.classList.remove("show")},60),W.resultLoading.setAttribute("aria-hidden","true")}function y0(){if(it!=="playing"&&it!=="paused")return;it="results",Rt.stop(),Rt.resume(),W.hud.classList.add("hidden"),W.hud.setAttribute("aria-hidden","true"),W.pause.classList.remove("show"),document.body.classList.remove("playing");const i=ze.judged?ze.weight/ze.judged*100:100,e=_0(i,ze.judged);qn.push(ze.combo),qn.length>260&&qn.shift();const t=ze.miss===0&&ze.bad===0&&ze.judged>0,n=ze.score,r=ui[bt.id]||null,s=!r||n>r.score||n===r.score&&i>r.acc;if(s){ui[bt.id]={score:n,acc:i,rank:e,maxCombo:ze.maxCombo,full:t,at:Date.now()};try{localStorage.setItem(vc,JSON.stringify(ui))}catch{}}Mc();const a={score:n,acc:i,rank:e,full:t,isBest:s,prevBest:r,maxCombo:ze.maxCombo,counts:{...ze},judgeTotals:ze.judged},o=++Oi;W.result.classList.remove("show"),W.resultLoading.classList.add("show"),W.resultLoading.setAttribute("aria-hidden","false"),W.loadTrack.textContent=`${bt.shortTitle} // ${bt.difficulty}`,W.loadRank.textContent="?",W.loadProgress.style.width="0%",W.loadPct.textContent="00%";const c=performance.now(),l=1650,f=h=>{if(o!==Oi)return;const d=Math.min(1,(h-c)/l),p=1-Math.pow(1-d,3);W.loadProgress.style.width=(p*100).toFixed(1)+"%",W.loadPct.textContent=String(Math.round(p*100)).padStart(2,"0")+"%",d<1?requestAnimationFrame(f):(W.loadRank.textContent=e,setTimeout(()=>{o===Oi&&M0(a)},280))};requestAnimationFrame(f)}function S0(){Oi++,W.result.classList.remove("show"),Mo()}function E0(i=new Set){const e=new Set(Wi?Sc(Wi.keys):[]);for(const t of i)e.add(t);for(let t=0;t<8;t++){const n=Xe.laneScreenGeometry(t),r=t>0?n.x-Xe.laneScreenGeometry(t-1).x:n.x-Xe.laneScreenGeometry(1).x,s=t<7?Xe.laneScreenGeometry(t+1).x-n.x:n.x-Xe.laneScreenGeometry(6).x,a=Math.max(24,Math.min(Math.abs(r),Math.abs(s))),o=Math.max(40,Math.min(176,a*.94)),c=n.y+26,l=Math.max(6,Math.min(c-110,n.topY)),f=Math.max(110,c-l),h=W.pads[t],d=`translate(-50%,-100%) rotate(${n.angle.toFixed(4)}rad)`;h.style.left=n.x.toFixed(1)+"px",h.style.top=c.toFixed(1)+"px",h.style.width=o.toFixed(1)+"px",h.style.height=f.toFixed(1)+"px",h.style.transform=d;const p=e.has(t);h.classList.contains("sleep")===p&&h.classList.toggle("sleep",!p),h.setAttribute("aria-hidden",String(!p))}}function b0(i){const e=d0(i);(e.index!==Ya||Wi===null)&&(Ya=e.index,bc(e.sec))}function T0(i){const e=vt.ghosts||[];for(;ar<e.length&&e[ar].t<=i;){const t=e[ar++];Xe.ghostFx(t.lane,t.type)}}function w0(i){const e=vt.events||[];for(;or<e.length&&e[or].t<=i;){const t=e[or++];switch(t.type){case"echo":Xe.echoFx(t.lane,t.dir??(t.lane<3.5?-1:1),t.power??1);break;case"pulse":Xe.pulseFx(t.power??1);break;case"burst":Xe.burstFx(t.lane,t.power??1);break;case"vibe":Xe.vibeFx(t.power??1),x0(t.power??1);break;case"motion":Xe.motionEvent(t.style,t.amp,t.speed,t.pitch);break}}}function A0(i){if(i.code==="Escape"){it==="playing"?(i.preventDefault(),gs()):it==="paused"&&(i.preventDefault(),Ac());return}if(i.repeat)return;const e=_c[i.code];e!==void 0&&(i.preventDefault(),it==="playing"&&(pn[e]||(pn[e]=!0,W.pads[e].classList.add("pressed"),vo(e))))}function R0(i){const e=_c[i.code];e!==void 0&&pn[e]&&(pn[e]=!1,W.pads[e].classList.remove("pressed"),xo(e))}document.addEventListener("keydown",A0,{passive:!1});document.addEventListener("keyup",R0);for(const i of W.pads){const e=Number(i.dataset.lane),t=r=>{if(r.preventDefault(),it==="playing"){di.add(r.pointerId);try{i.setPointerCapture(r.pointerId)}catch{}pn[e]||(pn[e]=!0,i.classList.add("pressed"),vo(e))}},n=r=>{r.preventDefault(),di.delete(r.pointerId),pn[e]&&(pn[e]=!1,i.classList.remove("pressed"),xo(e))};i.addEventListener("pointerdown",t,{passive:!1}),i.addEventListener("pointerup",n,{passive:!1}),i.addEventListener("pointercancel",n,{passive:!1}),i.addEventListener("lostpointercapture",n,{passive:!1}),i.addEventListener("contextmenu",r=>r.preventDefault())}document.addEventListener("pointerdown",i=>{it==="playing"&&di.add(i.pointerId)},{passive:!0});const yo=i=>{di.delete(i.pointerId)};document.addEventListener("pointerup",yo,{passive:!0});document.addEventListener("pointercancel",yo,{passive:!0});document.addEventListener("pointerleave",yo,{passive:!0});W.startBtn.addEventListener("click",()=>{(it==="boot"||it==="menu")&&Mo()});for(const i of W.trackCards)i.addEventListener("click",()=>{it!=="boot"&&it!=="menu"||i.dataset.track!==bt.id&&Pc(i.dataset.track)});W.pauseBtn.addEventListener("click",gs);xe("resumeBtn").addEventListener("click",Ac);xe("restartBtn").addEventListener("click",()=>{W.pause.classList.remove("show"),Mo()});xe("quitBtn").addEventListener("click",Rc);xe("retryBtn").addEventListener("click",S0);xe("menuBtn").addEventListener("click",Rc);document.addEventListener("visibilitychange",()=>{document.hidden&&it==="playing"&&gs()});addEventListener("blur",()=>{it==="playing"&&gs()});W.canvas.addEventListener("contextmenu",i=>i.preventDefault());function Cc(){const i=bt;W.startTrack&&(W.startTrack.textContent=i.shortTitle),W.startLength&&(W.startLength.textContent=$a(i.duration)),W.startLevel&&(W.startLevel.textContent=i.difficulty),W.startLanes&&(W.startLanes.textContent=i.laneLabel),W.hudTrack&&(W.hudTrack.textContent=i.shortTitle),W.hudBpm&&(W.hudBpm.textContent=`${i.bpm} BPM`),W.loadTrack&&(W.loadTrack.textContent=`${i.shortTitle} // ${i.difficulty}`);for(const e of W.trackCards){const t=e.dataset.track===i.id;e.classList.toggle("active",t),e.setAttribute("aria-selected",String(t))}document.documentElement.style.setProperty("--track-accent",i.accent),Mc()}async function Pc(i,{autoLoad:e=!0}={}){const t=Dl[i];t&&(bt=t,vt=t.chart,mo=vt.song.chartEnd,qa=t.duration,Cc(),Xe.setSection(vt.sections[0]),Xe.setTempo(vt.song.bpm,vt.song.beatOffset),Xe.setCity(vt.sections[0].city||0),Xe.setPreviewLanes(new Set),yc(),go(),e&&(it="boot",W.startBtn.disabled=!0,await Lc(t)))}async function Lc(i=bt){const e=++Jr;W.startLabel.textContent="DECODING AUDIO",W.loadFill.style.width="0%";try{if(await Rt.load(i.audio,t=>{e===Jr&&(W.loadFill.style.width=Math.round(t*100)+"%")}),e!==Jr)return;W.loadFill.style.width="100%",W.startLabel.textContent="START SESSION",W.startBtn.disabled=!1,it="menu"}catch(t){if(e!==Jr)return;console.error(t),W.startLabel.textContent="AUDIO UNAVAILABLE",fs("COULD NOT LOAD AUDIO",4e3),it="menu"}}yc();go();it="boot";Cc();Lc(bt);let Pl=performance.now(),ea=0;function Dc(i){const e=Math.min(.05,Math.max(0,(i-Pl)/1e3));if(Pl=i,ea+=e,it==="playing"){const t=Rt.time;b0(t);const n=h0(t);Xe.setPreviewLanes(n),T0(t),w0(t),g0(t),Ec(t),Xe.animate(e,t,!0),E0(n),t>=mo&&y0()}else if(it==="paused"){const t=Rt.time;Xe.animate(e,t,!0)}else Xe.animate(e,ea,!1);Xe.render(),requestAnimationFrame(Dc)}window.__cryout={audio:Rt,stats:ze,scene:Xe,pressLane:vo,releaseLane:xo,selectTrack:Pc,get chart(){return vt},get notes(){return Nn},get state(){return it},get best(){return sr}};requestAnimationFrame(Dc);
