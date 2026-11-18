(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const Sf={song:{title:"CRYOUT",shortTitle:"CRYOUT",artist:"ORIGINAL TRACK",bpm:100,duration:138.1,chartEnd:133.5,beatOffset:.535,difficulty:"ADVANCED",laneLabel:"4 · 6 · 8",fadeStart:131.4,fadeEnd:133.4},sections:[{name:"SIGNAL",start:3.535,end:12.535,keys:4,color:"#5ee7ff",accent:"#8f7bff",energy:.18,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.8,bloom:.55,spin:.03,motion:"fan",motionAmp:.045,motionSpeed:.45,motionPitch:.02,city:0},{name:"ASCENT",start:12.535,end:22.735,keys:4,color:"#57d9ff",accent:"#9d7bff",energy:.38,rotY:.05,rotZ:-.02,tilt:.015,spread:1.03,y:.05,camZ:16.6,camY:6.6,bloom:.65,spin:.05,motion:"fan",motionAmp:.075,motionSpeed:.55,motionPitch:.035,city:0},{name:"CURRENT",start:22.735,end:41.335,keys:6,color:"#42e0d0",accent:"#c46bff",energy:.62,rotY:-.1,rotZ:.03,tilt:-.02,spread:1.06,y:.1,camZ:15.9,camY:6.4,bloom:.8,spin:.08,motion:"wave",motionAmp:.1,motionSpeed:.7,motionPitch:.05,city:0},{name:"SURGE",start:41.335,end:64.135,keys:8,color:"#ff5fd2",accent:"#58e6ff",energy:.82,rotY:.16,rotZ:-.05,tilt:.03,spread:1.1,y:.16,camZ:15.1,camY:6.2,bloom:.92,spin:.12,motion:"slope",motionAmp:.15,motionSpeed:.85,motionPitch:.075,city:0},{name:"DRIFT",start:64.135,end:75.535,keys:6,color:"#8f9dff",accent:"#ff7bd5",energy:.3,rotY:-.04,rotZ:.02,tilt:.06,spread:.94,y:.45,camZ:17.6,camY:7.1,bloom:.55,spin:.04,motion:"tiltL",motionAmp:.11,motionSpeed:.5,motionPitch:.04,city:0},{name:"PRESSURE",start:75.535,end:84.535,keys:8,color:"#ffa14a",accent:"#ff4fc8",energy:.86,rotY:-.18,rotZ:.06,tilt:-.03,spread:1.08,y:.22,camZ:14.9,camY:6.1,bloom:.95,spin:.14,motion:"zigzag",motionAmp:.145,motionSpeed:1,motionPitch:.07,city:0},{name:"BREAK",start:84.535,end:87.535,keys:4,color:"#e8f4ff",accent:"#8f7bff",energy:.05,rotY:0,rotZ:0,tilt:.04,spread:.86,y:.3,camZ:19,camY:7.6,bloom:.35,spin:.02,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:0},{name:"CRYOUT",start:87.535,end:125.935,keys:8,color:"#ff4fb8",accent:"#54e8ff",energy:1,rotY:.1,rotZ:-.04,tilt:.02,spread:1.12,y:.12,camZ:14.6,camY:6,bloom:1,spin:.16,motion:"orbit",motionAmp:.175,motionSpeed:1,motionPitch:.085,city:0},{name:"AFTERGLOW",start:125.935,end:131.335,keys:4,color:"#6fa8ff",accent:"#c7a4ff",energy:.22,rotY:.02,rotZ:0,tilt:.01,spread:.92,y:.35,camZ:18.2,camY:7.2,bloom:.45,spin:.02,motion:"fan",motionAmp:.055,motionSpeed:.4,motionPitch:.02,city:0},{name:"OUTRO",start:131.335,end:133.5,keys:4,color:"#6f8fff",accent:"#c7a4ff",energy:.05,rotY:0,rotZ:0,tilt:0,spread:.9,y:.6,camZ:19.5,camY:7.8,bloom:.35,spin:.01,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:0}],notes:[{t:3.535,lane:2},{t:4.735,lane:4},{t:5.935,lane:3},{t:6.535,lane:5},{t:7.135,lane:2},{t:7.735,lane:4},{t:8.335,lane:3},{t:9.235,lane:5},{t:9.535,lane:2},{t:10.135,lane:3},{t:10.735,lane:4},{t:11.335,lane:5},{t:11.935,lane:2},{t:12.235,lane:3},{t:12.535,lane:4},{t:13.135,lane:4},{t:13.735,lane:2},{t:14.335,lane:5},{t:14.935,lane:3},{t:15.535,lane:4},{t:15.835,lane:2},{t:16.135,lane:5},{t:16.735,lane:2},{t:17.335,lane:5},{t:17.935,lane:3},{t:18.535,lane:4},{t:18.835,lane:2},{t:19.135,lane:5},{t:19.435,lane:3},{t:19.735,lane:4},{t:20.035,lane:5},{t:20.335,lane:3},{t:20.935,lane:4},{t:21.235,lane:2},{t:21.535,lane:5},{t:22.135,lane:3},{t:22.735,lane:2},{t:23.335,lane:4},{t:23.935,lane:3},{t:24.535,lane:5},{t:25.135,lane:4},{t:25.735,lane:6},{t:26.335,lane:2},{t:26.935,lane:4},{t:27.535,lane:4},{t:28.135,lane:2},{t:28.735,lane:6},{t:29.335,lane:1},{t:29.635,lane:3},{t:29.935,lane:5},{t:30.235,lane:4},{t:30.535,lane:2},{t:31.135,lane:4},{t:31.735,lane:2},{t:32.035,lane:1},{t:32.335,lane:2},{t:32.335,lane:5},{t:32.935,lane:5},{t:33.535,lane:6},{t:34.135,lane:4},{t:34.735,lane:2},{t:35.335,lane:2},{t:35.635,lane:3},{t:35.935,lane:4},{t:36.535,lane:5},{t:37.135,lane:6},{t:37.735,lane:5},{t:38.335,lane:2},{t:38.635,lane:3},{t:38.935,lane:4},{t:39.235,lane:5},{t:39.535,lane:3},{t:39.835,lane:6},{t:40.135,lane:1},{t:40.735,lane:2},{t:41.335,lane:4},{t:41.335,lane:7},{t:41.635,lane:1},{t:41.935,lane:2},{t:42.535,lane:3},{t:42.835,lane:4},{t:43.135,lane:5},{t:43.735,lane:6},{t:44.335,lane:7},{t:44.635,lane:0},{t:44.935,lane:4},{t:45.235,lane:1},{t:45.535,lane:5},{t:45.835,lane:2},{t:46.135,lane:6},{t:46.435,lane:3},{t:46.735,lane:7},{t:47.035,lane:0},{t:47.335,lane:5},{t:47.635,lane:6},{t:47.935,lane:4},{t:48.535,lane:3},{t:48.835,lane:1},{t:49.135,lane:2},{t:49.435,lane:0},{t:49.735,lane:1},{t:50.035,lane:2},{t:50.335,lane:4},{t:50.485,lane:6},{t:50.635,lane:1},{t:50.635,lane:5},{t:50.785,lane:5},{t:50.935,lane:4},{t:50.935,lane:7},{t:51.235,lane:1},{t:51.535,lane:2},{t:52.135,lane:4},{t:52.435,lane:3},{t:52.735,lane:5},{t:53.335,lane:1},{t:53.935,lane:6},{t:54.235,lane:0},{t:54.535,lane:7},{t:54.835,lane:1},{t:54.985,lane:3},{t:55.135,lane:5},{t:55.435,lane:7},{t:55.585,lane:6},{t:55.735,lane:4},{t:56.035,lane:2},{t:56.335,lane:0},{t:56.635,lane:6},{t:56.935,lane:4},{t:57.235,lane:2},{t:57.535,lane:0},{t:58.135,lane:1},{t:58.435,lane:3},{t:58.735,lane:5},{t:59.035,lane:7},{t:59.335,lane:0},{t:59.635,lane:2},{t:59.935,lane:1},{t:60.085,lane:3},{t:60.235,lane:4},{t:60.235,lane:7},{t:60.385,lane:6},{t:60.535,lane:0,type:"hold",dur:1.2},{t:60.535,lane:5},{t:60.835,lane:7},{t:61.735,lane:1},{t:62.035,lane:2},{t:62.335,lane:3},{t:62.935,lane:4},{t:63.535,lane:5},{t:63.835,lane:6},{t:64.135,lane:1,type:"hold",dur:2.4},{t:65.335,lane:5,type:"hold",dur:2.4},{t:67.735,lane:4},{t:68.335,lane:2},{t:68.935,lane:1,type:"hold",dur:2.4},{t:69.535,lane:5},{t:70.135,lane:6,type:"hold",dur:2.4},{t:71.335,lane:3},{t:72.535,lane:1},{t:73.135,lane:4},{t:73.735,lane:4},{t:74.935,lane:3},{t:75.535,lane:1},{t:75.535,lane:4},{t:76.135,lane:4},{t:76.735,lane:2},{t:77.335,lane:0},{t:77.935,lane:1},{t:78.535,lane:3},{t:79.135,lane:5},{t:79.735,lane:7},{t:80.335,lane:0},{t:80.635,lane:2},{t:80.935,lane:1},{t:81.535,lane:3},{t:81.835,lane:4},{t:82.135,lane:6},{t:82.735,lane:5},{t:83.035,lane:7},{t:83.335,lane:0},{t:83.935,lane:1},{t:84.235,lane:2},{t:87.535,lane:1},{t:87.535,lane:5},{t:87.835,lane:4},{t:88.135,lane:3},{t:88.735,lane:5},{t:89.035,lane:1},{t:89.335,lane:6},{t:89.635,lane:0},{t:89.935,lane:7},{t:90.235,lane:1},{t:90.535,lane:3},{t:90.835,lane:5},{t:91.135,lane:7},{t:91.435,lane:6},{t:91.585,lane:4},{t:91.735,lane:2},{t:92.035,lane:0},{t:92.185,lane:6},{t:92.335,lane:4},{t:92.635,lane:2},{t:92.935,lane:0},{t:93.535,lane:1},{t:93.835,lane:3},{t:94.135,lane:5},{t:94.735,lane:7},{t:95.035,lane:0},{t:95.335,lane:2},{t:95.635,lane:1},{t:95.935,lane:3},{t:96.235,lane:4},{t:96.535,lane:6},{t:96.685,lane:5},{t:96.835,lane:2},{t:96.835,lane:6},{t:96.985,lane:0},{t:97.135,lane:0},{t:97.135,lane:6},{t:97.435,lane:2},{t:97.735,lane:3},{t:98.335,lane:4},{t:98.635,lane:5},{t:98.935,lane:6},{t:99.235,lane:7},{t:99.535,lane:0},{t:99.835,lane:4},{t:100.135,lane:1},{t:100.435,lane:5},{t:100.735,lane:2},{t:101.035,lane:6},{t:101.185,lane:3},{t:101.335,lane:7},{t:101.635,lane:0},{t:101.785,lane:5},{t:101.935,lane:6},{t:102.235,lane:4},{t:102.535,lane:3},{t:103.135,lane:1},{t:103.435,lane:2},{t:103.735,lane:0},{t:104.335,lane:0},{t:104.635,lane:2},{t:104.935,lane:4},{t:105.235,lane:6},{t:105.535,lane:7},{t:105.835,lane:5},{t:106.135,lane:3},{t:106.285,lane:1},{t:106.435,lane:1},{t:106.435,lane:4},{t:106.585,lane:4},{t:106.735,lane:0,type:"hold",dur:1.2},{t:106.735,lane:3},{t:107.035,lane:5},{t:107.335,lane:1},{t:107.935,lane:6},{t:108.235,lane:0},{t:108.535,lane:7},{t:108.835,lane:1},{t:109.135,lane:3},{t:109.435,lane:5},{t:109.735,lane:7},{t:110.035,lane:6},{t:110.335,lane:4},{t:110.635,lane:2},{t:110.785,lane:0},{t:110.935,lane:6},{t:111.235,lane:4},{t:111.385,lane:2},{t:111.535,lane:0},{t:111.835,lane:1},{t:112.135,lane:3},{t:112.735,lane:5},{t:113.035,lane:7},{t:113.335,lane:0},{t:113.935,lane:2},{t:114.235,lane:1},{t:114.535,lane:3},{t:114.835,lane:4},{t:115.135,lane:6},{t:115.435,lane:5},{t:115.735,lane:7},{t:115.885,lane:0},{t:116.035,lane:2},{t:116.035,lane:6},{t:116.185,lane:2},{t:116.335,lane:0},{t:116.335,lane:6},{t:116.635,lane:4},{t:116.935,lane:5},{t:117.535,lane:6},{t:117.835,lane:7},{t:118.135,lane:0},{t:118.435,lane:4},{t:118.735,lane:1},{t:119.035,lane:5},{t:119.335,lane:2},{t:119.635,lane:6},{t:119.935,lane:3},{t:120.235,lane:7},{t:120.385,lane:0},{t:120.535,lane:5},{t:120.835,lane:6},{t:120.985,lane:4},{t:121.135,lane:3},{t:121.435,lane:1},{t:121.735,lane:2},{t:122.335,lane:0},{t:122.635,lane:1},{t:122.935,lane:2},{t:123.535,lane:4},{t:123.835,lane:6},{t:124.135,lane:7},{t:124.435,lane:5},{t:124.735,lane:3},{t:125.035,lane:1},{t:125.335,lane:2},{t:125.485,lane:4},{t:125.635,lane:3},{t:125.935,lane:2},{t:127.135,lane:4},{t:128.335,lane:3},{t:128.935,lane:5},{t:129.535,lane:2},{t:130.135,lane:4},{t:130.735,lane:2},{t:130.735,lane:5}],events:[{t:5.335,type:"pulse",power:.37},{t:5.355,type:"echo",lane:0,dir:-1,power:.58},{t:7.735,type:"pulse",power:.37},{t:10.135,type:"pulse",power:.37},{t:10.155,type:"echo",lane:1,dir:-1,power:.58},{t:12.535,type:"pulse",power:.5},{t:12.555,type:"echo",lane:0,dir:-1,power:.72},{t:14.935,type:"pulse",power:.5},{t:17.335,type:"pulse",power:.5},{t:17.355,type:"echo",lane:1,dir:-1,power:.72},{t:19.735,type:"pulse",power:.5},{t:22.135,type:"pulse",power:.5},{t:22.155,type:"echo",lane:6,dir:1,power:.72},{t:24.535,type:"pulse",power:.65},{t:24.555,type:"echo",lane:0,dir:-1,power:.88},{t:26.935,type:"pulse",power:.65},{t:29.335,type:"pulse",power:.65},{t:29.355,type:"echo",lane:7,dir:1,power:.88},{t:31.735,type:"pulse",power:.65},{t:34.135,type:"pulse",power:.65},{t:34.155,type:"echo",lane:0,dir:-1,power:.88},{t:36.535,type:"pulse",power:.65},{t:38.935,type:"pulse",power:.65},{t:38.955,type:"echo",lane:7,dir:1,power:.88},{t:41.355,type:"vibe",power:.82},{t:43.735,type:"pulse",power:.78},{t:46.135,type:"burst",lane:3,power:1.07},{t:46.135,type:"pulse",power:.78},{t:48.535,type:"pulse",power:.78},{t:50.935,type:"pulse",power:.78},{t:53.335,type:"pulse",power:.78},{t:55.735,type:"burst",lane:7,power:1.07},{t:55.735,type:"pulse",power:.78},{t:58.135,type:"pulse",power:.78},{t:60.535,type:"pulse",power:.78},{t:62.935,type:"pulse",power:.78},{t:65.335,type:"pulse",power:.45},{t:65.355,type:"echo",lane:0,dir:-1,power:.66},{t:67.735,type:"pulse",power:.45},{t:70.135,type:"pulse",power:.45},{t:70.155,type:"echo",lane:7,dir:1,power:.66},{t:72.535,type:"pulse",power:.45},{t:74.935,type:"pulse",power:.45},{t:74.955,type:"echo",lane:0,dir:-1,power:.66},{t:75.555,type:"vibe",power:.86},{t:77.335,type:"pulse",power:.81},{t:79.735,type:"burst",lane:3,power:1.1},{t:79.735,type:"pulse",power:.81},{t:82.135,type:"pulse",power:.81},{t:84.535,type:"pulse",power:.28},{t:84.555,type:"echo",lane:0,dir:-1,power:.48},{t:86.935,type:"pulse",power:.28},{t:87.555,type:"vibe",power:1},{t:89.335,type:"pulse",power:.9},{t:91.735,type:"burst",lane:3,power:1.2},{t:91.735,type:"pulse",power:.9},{t:94.135,type:"pulse",power:.9},{t:96.535,type:"pulse",power:.9},{t:98.935,type:"pulse",power:.9},{t:99.335,type:"motion",style:"wave",amp:.16,speed:1},{t:101.335,type:"burst",lane:7,power:1.2},{t:101.335,type:"pulse",power:.9},{t:103.735,type:"pulse",power:.9},{t:106.135,type:"pulse",power:.9},{t:108.535,type:"pulse",power:.9},{t:110.935,type:"burst",lane:3,power:1.2},{t:110.935,type:"pulse",power:.9},{t:111.335,type:"motion",style:"zigzag",amp:.16,speed:1},{t:113.335,type:"pulse",power:.9},{t:115.735,type:"pulse",power:.9},{t:118.135,type:"pulse",power:.9},{t:120.535,type:"burst",lane:7,power:1.2},{t:120.535,type:"pulse",power:.9},{t:122.935,type:"pulse",power:.9},{t:125.335,type:"pulse",power:.9},{t:127.735,type:"pulse",power:.39},{t:127.755,type:"echo",lane:0,dir:-1,power:.6},{t:130.135,type:"pulse",power:.39},{t:132.535,type:"pulse",power:.28},{t:132.555,type:"echo",lane:0,dir:-1,power:.48}],ghosts:[{t:3.575,lane:0,type:"sweep"},{t:3.63,lane:1,type:"sweep"},{t:3.685,lane:6,type:"sweep"},{t:3.74,lane:7,type:"sweep"},{t:8.335,lane:0,type:"bounce"},{t:8.455,lane:1,type:"bounce"},{t:8.575,lane:6,type:"bounce"},{t:8.695,lane:7,type:"bounce"},{t:12.575,lane:0,type:"sweep"},{t:12.63,lane:1,type:"sweep"},{t:12.685,lane:6,type:"sweep"},{t:12.74,lane:7,type:"sweep"},{t:17.335,lane:0,type:"bounce"},{t:17.455,lane:1,type:"bounce"},{t:17.575,lane:6,type:"bounce"},{t:17.695,lane:7,type:"bounce"},{t:22.775,lane:0,type:"sweep"},{t:22.83,lane:7,type:"sweep"},{t:27.535,lane:0,type:"bounce"},{t:27.655,lane:7,type:"bounce"},{t:64.175,lane:0,type:"sweep"},{t:64.23,lane:7,type:"sweep"},{t:68.935,lane:0,type:"bounce"},{t:69.055,lane:7,type:"bounce"},{t:84.575,lane:0,type:"sweep"},{t:84.63,lane:1,type:"sweep"},{t:84.685,lane:6,type:"sweep"},{t:84.74,lane:7,type:"sweep"},{t:89.335,lane:0,type:"bounce"},{t:89.455,lane:1,type:"bounce"},{t:89.575,lane:6,type:"bounce"},{t:89.695,lane:7,type:"bounce"},{t:125.975,lane:0,type:"sweep"},{t:126.03,lane:1,type:"sweep"},{t:126.085,lane:6,type:"sweep"},{t:126.14,lane:7,type:"sweep"},{t:130.735,lane:0,type:"bounce"},{t:130.855,lane:1,type:"bounce"},{t:130.975,lane:6,type:"bounce"},{t:131.095,lane:7,type:"bounce"},{t:131.375,lane:0,type:"sweep"},{t:131.43,lane:1,type:"sweep"},{t:131.485,lane:6,type:"sweep"},{t:131.54,lane:7,type:"sweep"},{t:136.135,lane:0,type:"bounce"},{t:136.255,lane:1,type:"bounce"},{t:136.375,lane:6,type:"bounce"},{t:136.495,lane:7,type:"bounce"}]},bf={song:{title:"WORLD YEARNING FOR AN END",shortTitle:"WORLD YEARNING",artist:"ORIGINAL TRACK",bpm:120,duration:143.47,chartEnd:142.55,beatOffset:.04,difficulty:"HARD",laneLabel:"4 · 6",thumbFriendly:!0,fadeStart:140.8,fadeEnd:142.9},sections:[{name:"INTRO",start:.04,end:10.04,keys:4,color:"#7ec8ff",accent:"#ffb45e",energy:.16,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.6,camY:6.9,bloom:.5,spin:.03,firstNote:2.04,motion:"fan",motionAmp:.05,motionSpeed:.45,motionPitch:.02,city:1},{name:"VERSE",start:10.04,end:22.04,keys:4,color:"#66e0ff",accent:"#ff8ac8",energy:.5,rotY:.03,rotZ:-.015,tilt:.012,spread:1.02,y:.04,camZ:16.9,camY:6.7,bloom:.68,spin:.05,firstNote:10.04,motion:"wave",motionAmp:.075,motionSpeed:.6,motionPitch:.035,city:.16},{name:"BUILD",start:22.04,end:38.04,keys:6,color:"#84a6ff",accent:"#ffc46b",energy:.66,rotY:-.06,rotZ:.025,tilt:-.015,spread:1.05,y:.08,camZ:16.2,camY:6.5,bloom:.8,spin:.07,firstNote:22.04,motion:"fan",motionAmp:.1,motionSpeed:.7,motionPitch:.05,city:.12},{name:"LIFT",start:38.04,end:54.04,keys:6,color:"#b58cff",accent:"#ffa25e",energy:.8,rotY:.1,rotZ:-.04,tilt:.025,spread:1.08,y:.12,camZ:15.5,camY:6.3,bloom:.9,spin:.1,firstNote:38.04,motion:"slope",motionAmp:.13,motionSpeed:.82,motionPitch:.065,city:.2},{name:"CHORUS",start:54.04,end:70.04,keys:6,color:"#ff8f6b",accent:"#ffe27a",energy:.92,rotY:-.13,rotZ:.05,tilt:-.025,spread:1.1,y:.15,camZ:15.1,camY:6.2,bloom:.96,spin:.12,firstNote:54.04,motion:"wave",motionAmp:.15,motionSpeed:.95,motionPitch:.08,city:.16},{name:"DRIVE",start:70.04,end:86.04,keys:6,color:"#ff5f9e",accent:"#7af0ff",energy:1,rotY:.15,rotZ:-.055,tilt:.03,spread:1.12,y:.18,camZ:14.9,camY:6.1,bloom:1,spin:.14,firstNote:70.04,motion:"zigzag",motionAmp:.18,motionSpeed:1.05,motionPitch:.095,city:.24},{name:"BREAK",start:86.04,end:98.04,keys:4,color:"#d9eaff",accent:"#8f9dff",energy:.34,rotY:-.02,rotZ:.01,tilt:.05,spread:.93,y:.4,camZ:18.1,camY:7.3,bloom:.55,spin:.035,firstNote:86.04,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:.62},{name:"RETURN",start:98.04,end:122.04,keys:6,color:"#63e6d8",accent:"#ff8ac8",energy:.82,rotY:.04,rotZ:-.02,tilt:.015,spread:1.06,y:.1,camZ:15.7,camY:6.4,bloom:.88,spin:.09,firstNote:98.04,motion:"orbit",motionAmp:.14,motionSpeed:.9,motionPitch:.07,city:.14},{name:"FINAL",start:122.04,end:138.04,keys:6,color:"#ff6fc4",accent:"#ffd36b",energy:.9,rotY:-.1,rotZ:.04,tilt:-.02,spread:1.09,y:.14,camZ:15,camY:6.2,bloom:.98,spin:.13,firstNote:122.04,motion:"orbit",motionAmp:.17,motionSpeed:1,motionPitch:.085,city:.2},{name:"OUTRO",start:138.04,end:142.55,keys:4,color:"#7fa8ff",accent:"#d7c4ff",energy:.2,rotY:0,rotZ:0,tilt:.03,spread:.9,y:.3,camZ:19.2,camY:7.6,bloom:.42,spin:.02,firstNote:138.04,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:.72}],notes:[{t:2.04,lane:2},{t:3.04,lane:4},{t:4.04,lane:3},{t:5.04,lane:5},{t:6.04,lane:2},{t:6.29,lane:2,type:"hold",dur:1},{t:7.04,lane:4},{t:8.04,lane:3},{t:9.04,lane:5},{t:10.04,lane:4},{t:10.54,lane:2},{t:11.04,lane:5},{t:11.54,lane:3},{t:12.04,lane:4},{t:12.54,lane:2},{t:13.04,lane:5},{t:13.54,lane:3},{t:14.04,lane:3},{t:14.29,lane:2,type:"hold",dur:1},{t:14.54,lane:4},{t:15.54,lane:5},{t:16.04,lane:3},{t:16.54,lane:4},{t:17.04,lane:2},{t:17.54,lane:5},{t:18.04,lane:2},{t:18.29,lane:4,type:"hold",dur:1},{t:18.54,lane:5},{t:19.04,lane:3},{t:19.54,lane:4},{t:20.04,lane:2},{t:20.54,lane:5},{t:21.04,lane:3},{t:21.54,lane:4},{t:22.04,lane:1},{t:22.54,lane:4},{t:23.04,lane:2},{t:23.54,lane:5},{t:24.04,lane:3},{t:24.29,lane:6},{t:24.54,lane:1},{t:25.04,lane:4},{t:25.54,lane:4},{t:26.04,lane:3},{t:26.29,lane:2},{t:26.54,lane:1},{t:26.79,lane:6},{t:27.04,lane:5},{t:27.54,lane:4},{t:28.04,lane:3},{t:28.29,lane:4},{t:28.54,lane:6},{t:28.79,lane:2},{t:29.04,lane:4},{t:29.54,lane:3},{t:30.04,lane:5},{t:30.54,lane:4},{t:30.79,lane:6},{t:31.04,lane:3},{t:31.54,lane:5},{t:32.04,lane:2},{t:32.04,lane:4},{t:32.29,lane:2},{t:32.54,lane:6},{t:32.79,lane:1},{t:33.04,lane:3},{t:33.54,lane:5},{t:34.04,lane:5},{t:34.29,lane:6},{t:34.54,lane:4},{t:34.79,lane:2},{t:35.04,lane:1},{t:35.54,lane:3},{t:36.04,lane:5},{t:36.29,lane:6},{t:36.54,lane:1},{t:37.04,lane:5},{t:37.54,lane:2},{t:38.04,lane:2},{t:38.29,lane:4},{t:38.54,lane:3},{t:38.79,lane:5},{t:39.04,lane:4},{t:39.29,lane:6},{t:39.54,lane:2},{t:39.79,lane:4},{t:40.04,lane:5},{t:40.29,lane:2},{t:40.54,lane:6},{t:41.04,lane:1},{t:41.54,lane:3},{t:42.04,lane:5},{t:42.29,lane:4},{t:42.54,lane:2},{t:42.79,lane:4},{t:43.04,lane:2},{t:43.54,lane:1},{t:43.79,lane:3},{t:44.04,lane:5},{t:44.54,lane:6},{t:45.04,lane:4},{t:45.29,lane:2},{t:45.54,lane:3},{t:45.79,lane:5},{t:46.04,lane:4},{t:46.54,lane:5},{t:46.79,lane:6},{t:47.04,lane:5},{t:47.29,lane:2},{t:47.54,lane:3},{t:48.04,lane:4},{t:48.29,lane:5},{t:48.54,lane:3},{t:48.79,lane:6},{t:49.04,lane:1},{t:49.29,lane:2},{t:49.54,lane:4},{t:49.79,lane:5},{t:50.04,lane:3},{t:50.29,lane:5},{t:50.54,lane:4},{t:50.79,lane:3},{t:51.04,lane:2},{t:51.29,lane:1},{t:51.54,lane:3},{t:51.79,lane:5},{t:52.04,lane:1},{t:52.29,lane:4},{t:52.54,lane:2},{t:52.79,lane:5},{t:53.04,lane:3},{t:53.29,lane:6},{t:53.54,lane:1},{t:53.79,lane:4},{t:54.04,lane:1},{t:54.29,lane:3},{t:54.54,lane:5},{t:54.79,lane:6},{t:55.04,lane:4},{t:55.29,lane:2},{t:55.54,lane:1},{t:55.665,lane:2},{t:55.79,lane:3},{t:56.04,lane:2},{t:56.04,lane:4},{t:56.29,lane:5},{t:56.54,lane:6},{t:56.79,lane:5},{t:57.04,lane:2},{t:57.29,lane:3},{t:57.54,lane:4},{t:57.79,lane:5},{t:58.04,lane:3},{t:58.29,lane:6},{t:58.54,lane:1},{t:58.79,lane:2},{t:59.04,lane:4},{t:59.29,lane:5},{t:59.54,lane:3},{t:59.79,lane:6},{t:60.04,lane:4},{t:60.29,lane:3},{t:60.54,lane:2},{t:60.79,lane:1},{t:61.04,lane:3},{t:61.29,lane:5},{t:61.54,lane:4},{t:61.79,lane:3},{t:62.04,lane:2},{t:62.29,lane:5},{t:62.54,lane:3},{t:62.79,lane:6},{t:63.04,lane:1},{t:63.29,lane:4},{t:63.54,lane:2},{t:63.665,lane:3},{t:63.79,lane:5},{t:64.04,lane:1},{t:64.04,lane:2},{t:64.29,lane:1},{t:64.54,lane:6},{t:64.79,lane:5},{t:65.04,lane:4},{t:65.29,lane:3},{t:65.54,lane:2},{t:65.79,lane:1},{t:66.04,lane:2},{t:66.29,lane:4},{t:66.54,lane:3},{t:66.79,lane:5},{t:67.04,lane:4},{t:67.29,lane:6},{t:67.54,lane:2},{t:67.79,lane:4},{t:68.04,lane:5},{t:68.29,lane:2},{t:68.54,lane:6},{t:68.79,lane:1},{t:69.04,lane:3},{t:69.29,lane:5},{t:69.54,lane:4},{t:69.79,lane:2},{t:70.04,lane:1},{t:70.29,lane:2},{t:70.54,lane:4},{t:70.79,lane:5},{t:71.04,lane:3},{t:71.29,lane:6},{t:71.54,lane:1},{t:71.665,lane:2},{t:71.79,lane:4},{t:72.04,lane:2},{t:72.29,lane:1},{t:72.54,lane:3},{t:72.79,lane:5},{t:73.04,lane:4},{t:73.29,lane:3},{t:73.54,lane:2},{t:73.79,lane:1},{t:74.04,lane:3},{t:74.29,lane:6},{t:74.54,lane:1},{t:74.79,lane:4},{t:75.04,lane:2},{t:75.29,lane:5},{t:75.54,lane:3},{t:75.79,lane:6},{t:76.04,lane:1},{t:76.29,lane:5},{t:76.54,lane:4},{t:76.79,lane:3},{t:77.04,lane:2},{t:77.29,lane:1},{t:77.54,lane:6},{t:77.79,lane:5},{t:78.04,lane:3},{t:78.29,lane:5},{t:78.54,lane:4},{t:78.79,lane:6},{t:79.04,lane:2},{t:79.29,lane:4},{t:79.54,lane:3},{t:79.665,lane:4},{t:79.79,lane:5},{t:80.04,lane:1},{t:80.04,lane:6},{t:80.29,lane:1},{t:80.54,lane:3},{t:80.79,lane:5},{t:81.04,lane:4},{t:81.29,lane:2},{t:81.54,lane:6},{t:81.79,lane:1},{t:82.04,lane:2},{t:82.29,lane:3},{t:82.54,lane:5},{t:82.79,lane:6},{t:83.04,lane:4},{t:83.29,lane:2},{t:83.54,lane:1},{t:83.79,lane:3},{t:84.04,lane:4},{t:84.29,lane:5},{t:84.54,lane:6},{t:84.79,lane:5},{t:85.04,lane:2},{t:85.29,lane:3},{t:85.54,lane:4},{t:85.79,lane:5},{t:86.04,lane:2},{t:86.54,lane:5},{t:87.04,lane:3},{t:87.54,lane:4},{t:88.04,lane:2},{t:88.54,lane:5},{t:89.04,lane:3},{t:89.54,lane:4},{t:90.04,lane:5},{t:90.29,lane:3,type:"hold",dur:1},{t:91.04,lane:4},{t:91.54,lane:2},{t:92.04,lane:5},{t:92.54,lane:3},{t:93.04,lane:4},{t:93.54,lane:2},{t:94.04,lane:2},{t:94.29,lane:2,type:"hold",dur:1},{t:94.54,lane:4},{t:95.04,lane:5},{t:95.54,lane:3},{t:96.04,lane:2},{t:96.54,lane:4},{t:97.04,lane:5},{t:97.54,lane:3},{t:98.04,lane:2},{t:98.29,lane:4},{t:98.54,lane:3},{t:99.04,lane:5},{t:99.29,lane:4},{t:99.54,lane:6},{t:99.79,lane:2},{t:100.04,lane:4},{t:100.29,lane:5},{t:100.54,lane:2},{t:101.04,lane:6},{t:101.29,lane:1},{t:101.54,lane:3},{t:101.79,lane:5},{t:102.04,lane:4},{t:102.54,lane:2},{t:102.79,lane:4},{t:103.04,lane:2},{t:103.29,lane:1},{t:103.54,lane:3},{t:104.04,lane:1},{t:104.04,lane:5},{t:104.54,lane:6},{t:105.04,lane:4},{t:105.54,lane:2},{t:105.79,lane:3},{t:106.04,lane:5},{t:106.54,lane:4},{t:106.79,lane:5},{t:107.04,lane:6},{t:107.29,lane:5},{t:107.54,lane:2},{t:108.04,lane:3},{t:108.29,lane:4},{t:108.54,lane:5},{t:108.79,lane:3},{t:109.04,lane:6},{t:109.29,lane:1},{t:109.54,lane:2},{t:109.79,lane:4},{t:110.04,lane:5},{t:110.29,lane:3},{t:110.54,lane:5},{t:110.79,lane:4},{t:111.04,lane:3},{t:111.29,lane:2},{t:111.54,lane:1},{t:111.79,lane:3},{t:112.04,lane:5},{t:112.29,lane:1},{t:112.54,lane:4},{t:112.79,lane:2},{t:113.04,lane:5},{t:113.29,lane:3},{t:113.54,lane:6},{t:114.04,lane:1},{t:114.29,lane:4},{t:114.54,lane:5},{t:115.04,lane:3},{t:115.29,lane:2},{t:115.54,lane:1},{t:115.79,lane:6},{t:116.04,lane:5},{t:116.29,lane:4},{t:116.54,lane:3},{t:116.79,lane:4},{t:117.04,lane:6},{t:117.29,lane:2},{t:117.54,lane:4},{t:117.79,lane:3},{t:118.04,lane:5},{t:118.29,lane:4},{t:118.54,lane:6},{t:119.04,lane:3},{t:119.29,lane:5},{t:119.54,lane:4},{t:119.79,lane:2},{t:120.04,lane:6},{t:120.54,lane:1},{t:121.04,lane:3},{t:121.29,lane:5},{t:121.54,lane:6},{t:121.79,lane:2},{t:122.04,lane:1},{t:122.29,lane:3},{t:122.54,lane:5},{t:122.79,lane:6},{t:123.04,lane:4},{t:123.29,lane:2},{t:123.54,lane:1},{t:123.79,lane:3},{t:124.04,lane:4},{t:124.29,lane:5},{t:124.54,lane:6},{t:124.79,lane:5},{t:125.04,lane:2},{t:125.29,lane:3},{t:125.54,lane:4},{t:125.79,lane:5},{t:126.04,lane:3},{t:126.29,lane:6},{t:126.54,lane:1},{t:126.79,lane:2},{t:127.04,lane:4},{t:127.29,lane:5},{t:127.54,lane:3},{t:127.665,lane:4},{t:127.79,lane:6},{t:128.04,lane:4},{t:128.29,lane:3},{t:128.54,lane:2},{t:128.79,lane:1},{t:129.04,lane:3},{t:129.29,lane:5},{t:129.54,lane:4},{t:129.79,lane:3},{t:130.04,lane:2},{t:130.29,lane:5},{t:130.54,lane:3},{t:130.79,lane:6},{t:131.04,lane:1},{t:131.29,lane:4},{t:131.54,lane:2},{t:131.79,lane:5},{t:132.04,lane:2},{t:132.29,lane:1},{t:132.54,lane:6},{t:132.79,lane:5},{t:133.04,lane:4},{t:133.29,lane:3},{t:133.54,lane:2},{t:133.79,lane:1},{t:134.04,lane:2},{t:134.29,lane:4},{t:134.54,lane:3},{t:134.79,lane:5},{t:135.04,lane:4},{t:135.29,lane:6},{t:135.54,lane:2},{t:135.665,lane:3},{t:135.79,lane:4},{t:136.04,lane:1},{t:136.04,lane:5},{t:136.29,lane:2},{t:136.54,lane:6},{t:136.79,lane:1},{t:137.04,lane:3},{t:137.29,lane:5},{t:137.54,lane:4},{t:137.79,lane:2},{t:138.04,lane:4},{t:139.04,lane:2},{t:140.04,lane:5},{t:142.04,lane:3}],events:[{t:.04,type:"pulse",power:.33},{t:.07,type:"echo",lane:0,dir:-1,power:.63},{t:2.04,type:"pulse",power:.33},{t:4.04,type:"pulse",power:.33},{t:4.07,type:"echo",lane:1,dir:-1,power:.63},{t:6.04,type:"pulse",power:.33},{t:8.04,type:"pulse",power:.33},{t:8.07,type:"echo",lane:6,dir:1,power:.63},{t:10.04,type:"pulse",power:.57},{t:10.07,type:"echo",lane:0,dir:-1,power:.9},{t:12.04,type:"pulse",power:.57},{t:14.04,type:"pulse",power:.57},{t:14.07,type:"echo",lane:1,dir:-1,power:.9},{t:16.04,type:"pulse",power:.57},{t:18.04,type:"pulse",power:.57},{t:18.07,type:"echo",lane:6,dir:1,power:.9},{t:20.04,type:"pulse",power:.57},{t:22.04,type:"pulse",power:.68},{t:22.07,type:"echo",lane:0,dir:-1,power:1.03},{t:24.04,type:"pulse",power:.68},{t:26.04,type:"burst",lane:4,power:.98},{t:26.04,type:"pulse",power:.68},{t:26.07,type:"echo",lane:7,dir:1,power:1.03},{t:28.04,type:"pulse",power:.68},{t:30.04,type:"pulse",power:.68},{t:30.07,type:"echo",lane:0,dir:-1,power:1.03},{t:32.04,type:"pulse",power:.68},{t:34.04,type:"burst",lane:2,power:.98},{t:34.04,type:"pulse",power:.68},{t:34.07,type:"echo",lane:7,dir:1,power:1.03},{t:36.04,type:"pulse",power:.68},{t:38.04,type:"pulse",power:.78},{t:38.07,type:"echo",lane:0,dir:-1,power:1.14},{t:40.04,type:"pulse",power:.78},{t:42.04,type:"burst",lane:4,power:1.09},{t:42.04,type:"pulse",power:.78},{t:42.07,type:"echo",lane:7,dir:1,power:1.14},{t:44.04,type:"pulse",power:.78},{t:46.04,type:"pulse",power:.78},{t:46.07,type:"echo",lane:0,dir:-1,power:1.14},{t:48.04,type:"pulse",power:.78},{t:50.04,type:"burst",lane:2,power:1.09},{t:50.04,type:"pulse",power:.78},{t:50.07,type:"echo",lane:7,dir:1,power:1.14},{t:52.04,type:"pulse",power:.78},{t:54.04,type:"pulse",power:.86},{t:54.06,type:"vibe",power:.92},{t:54.07,type:"echo",lane:0,dir:-1,power:1.24},{t:56.04,type:"pulse",power:.86},{t:58.04,type:"burst",lane:4,power:1.19},{t:58.04,type:"pulse",power:.86},{t:58.07,type:"echo",lane:7,dir:1,power:1.24},{t:60.04,type:"pulse",power:.86},{t:61.8,type:"vibe",power:.85},{t:61.85,type:"echo",lane:0,dir:-1,power:1.15},{t:61.85,type:"echo",lane:7,dir:1,power:1.15},{t:62.04,type:"pulse",power:.86},{t:62.07,type:"echo",lane:0,dir:-1,power:1.24},{t:64.04,type:"pulse",power:.86},{t:66.04,type:"burst",lane:2,power:1.19},{t:66.04,type:"pulse",power:.86},{t:66.07,type:"echo",lane:7,dir:1,power:1.24},{t:68.04,type:"pulse",power:.86},{t:70.04,type:"pulse",power:.92},{t:70.06,type:"vibe",power:1},{t:70.07,type:"echo",lane:0,dir:-1,power:1.3},{t:72.04,type:"pulse",power:.92},{t:74.04,type:"burst",lane:4,power:1.25},{t:74.04,type:"pulse",power:.92},{t:74.07,type:"echo",lane:7,dir:1,power:1.3},{t:76.04,type:"pulse",power:.92},{t:78.04,type:"pulse",power:.92},{t:78.07,type:"echo",lane:0,dir:-1,power:1.3},{t:80.04,type:"pulse",power:.92},{t:82.04,type:"burst",lane:2,power:1.25},{t:82.04,type:"pulse",power:.92},{t:82.07,type:"echo",lane:7,dir:1,power:1.3},{t:84.04,type:"pulse",power:.92},{t:86.04,type:"pulse",power:.46},{t:86.07,type:"echo",lane:0,dir:-1,power:.77},{t:88.04,type:"pulse",power:.46},{t:90.04,type:"pulse",power:.46},{t:90.07,type:"echo",lane:1,dir:-1,power:.77},{t:92.04,type:"pulse",power:.46},{t:94.04,type:"pulse",power:.46},{t:94.07,type:"echo",lane:6,dir:1,power:.77},{t:96.04,type:"pulse",power:.46},{t:98.04,type:"pulse",power:.79},{t:98.06,type:"vibe",power:.82},{t:98.07,type:"echo",lane:0,dir:-1,power:1.16},{t:100.04,type:"pulse",power:.79},{t:102.04,type:"burst",lane:4,power:1.11},{t:102.04,type:"pulse",power:.79},{t:102.07,type:"echo",lane:7,dir:1,power:1.16},{t:104.04,type:"pulse",power:.79},{t:106.04,type:"pulse",power:.79},{t:106.07,type:"echo",lane:0,dir:-1,power:1.16},{t:108.04,type:"pulse",power:.79},{t:110.04,type:"burst",lane:2,power:1.11},{t:110.04,type:"pulse",power:.79},{t:110.07,type:"echo",lane:7,dir:1,power:1.16},{t:112.04,type:"pulse",power:.79},{t:114.04,type:"pulse",power:.79},{t:114.07,type:"echo",lane:0,dir:-1,power:1.16},{t:116.04,type:"pulse",power:.79},{t:118.04,type:"burst",lane:6,power:1.11},{t:118.04,type:"pulse",power:.79},{t:118.07,type:"echo",lane:7,dir:1,power:1.16},{t:120.04,type:"pulse",power:.79},{t:122.04,type:"pulse",power:.85},{t:122.06,type:"vibe",power:.9},{t:122.07,type:"echo",lane:0,dir:-1,power:1.22},{t:124.04,type:"pulse",power:.85},{t:126.04,type:"burst",lane:4,power:1.17},{t:126.04,type:"pulse",power:.85},{t:126.07,type:"echo",lane:7,dir:1,power:1.22},{t:128.04,type:"pulse",power:.85},{t:130.04,type:"pulse",power:.85},{t:130.07,type:"echo",lane:0,dir:-1,power:1.22},{t:132.04,type:"pulse",power:.85},{t:134.04,type:"burst",lane:2,power:1.17},{t:134.04,type:"pulse",power:.85},{t:134.07,type:"echo",lane:7,dir:1,power:1.22},{t:136.04,type:"pulse",power:.85},{t:138.04,type:"pulse",power:.36},{t:138.07,type:"echo",lane:0,dir:-1,power:.66},{t:140.04,type:"pulse",power:.36},{t:142.04,type:"pulse",power:.36},{t:142.07,type:"echo",lane:1,dir:-1,power:.66}],ghosts:[{t:.08,lane:0,type:"sweep"},{t:.14,lane:1,type:"sweep"},{t:.2,lane:6,type:"sweep"},{t:.26,lane:7,type:"sweep"},{t:4.04,lane:0,type:"bounce"},{t:4.18,lane:1,type:"bounce"},{t:4.32,lane:6,type:"bounce"},{t:4.46,lane:7,type:"bounce"},{t:10.08,lane:0,type:"sweep"},{t:10.14,lane:1,type:"sweep"},{t:10.2,lane:6,type:"sweep"},{t:10.26,lane:7,type:"sweep"},{t:14.04,lane:0,type:"bounce"},{t:14.18,lane:1,type:"bounce"},{t:14.32,lane:6,type:"bounce"},{t:14.46,lane:7,type:"bounce"},{t:22.08,lane:0,type:"sweep"},{t:22.14,lane:7,type:"sweep"},{t:26.04,lane:0,type:"bounce"},{t:26.18,lane:7,type:"bounce"},{t:38.08,lane:0,type:"sweep"},{t:38.14,lane:7,type:"sweep"},{t:42.04,lane:0,type:"bounce"},{t:42.18,lane:7,type:"bounce"},{t:54.08,lane:0,type:"sweep"},{t:54.14,lane:7,type:"sweep"},{t:58.04,lane:0,type:"bounce"},{t:58.18,lane:7,type:"bounce"},{t:70.08,lane:0,type:"sweep"},{t:70.14,lane:7,type:"sweep"},{t:74.04,lane:0,type:"bounce"},{t:74.18,lane:7,type:"bounce"},{t:86.08,lane:0,type:"sweep"},{t:86.14,lane:1,type:"sweep"},{t:86.2,lane:6,type:"sweep"},{t:86.26,lane:7,type:"sweep"},{t:90.04,lane:0,type:"bounce"},{t:90.18,lane:1,type:"bounce"},{t:90.32,lane:6,type:"bounce"},{t:90.46,lane:7,type:"bounce"},{t:98.08,lane:0,type:"sweep"},{t:98.14,lane:7,type:"sweep"},{t:102.04,lane:0,type:"bounce"},{t:102.18,lane:7,type:"bounce"},{t:122.08,lane:0,type:"sweep"},{t:122.14,lane:7,type:"sweep"},{t:126.04,lane:0,type:"bounce"},{t:126.18,lane:7,type:"bounce"},{t:138.08,lane:0,type:"sweep"},{t:138.14,lane:1,type:"sweep"},{t:138.2,lane:6,type:"sweep"},{t:138.26,lane:7,type:"sweep"},{t:142.04,lane:0,type:"bounce"},{t:142.18,lane:1,type:"bounce"},{t:142.32,lane:6,type:"bounce"},{t:142.46,lane:7,type:"bounce"}]},wf={song:{title:"CHRONOSTASIS",shortTitle:"CHRONOSTASIS",artist:"ORIGINAL TRACK",bpm:99.4,duration:142.1,chartEnd:139.85,beatOffset:.323,difficulty:"EXPERT",laneLabel:"4 · 6",thumbFriendly:!0,fadeStart:138.4,fadeEnd:140},sections:[{name:"INTRO",start:0,end:18.431,keys:4,color:"#8ecfff",accent:"#ffd166",energy:.22,rotY:0,rotZ:0,tilt:.02,spread:.94,y:.28,camZ:18.8,camY:7.4,bloom:.48,spin:.02,firstNote:2.4,density:.22,city:.58,clock:"off",motion:"fan",motionAmp:.05,motionSpeed:.45,motionPitch:.02},{name:"GEARS",start:18.431,end:24.483,keys:4,color:"#6fe3ff",accent:"#ffd166",energy:.5,rotY:.02,rotZ:-.012,tilt:.01,spread:1,y:.12,camZ:17.4,camY:7,bloom:.68,spin:.05,firstNote:18.431,density:.5,city:.38,clock:"run",motion:"fan",motionAmp:.06,motionSpeed:.55,motionPitch:.025},{name:"VERSE",start:24.483,end:42.877,keys:6,color:"#78b8ff",accent:"#ffe29a",energy:.64,rotY:.04,rotZ:-.02,tilt:.015,spread:1.04,y:.08,camZ:16.7,camY:6.7,bloom:.78,spin:.07,firstNote:24.483,density:.62,city:.2,clock:"run",motion:"wave",motionAmp:.075,motionSpeed:.6,motionPitch:.035},{name:"PENDULUM",start:42.877,end:66.417,keys:6,color:"#b18cff",accent:"#ffd166",energy:.8,rotY:-.09,rotZ:.035,tilt:-.02,spread:1.08,y:.14,camZ:15.8,camY:6.4,bloom:.9,spin:.1,firstNote:42.877,density:.76,city:.14,clock:"run",motion:"wave",motionAmp:.16,motionSpeed:.95,motionPitch:.08},{name:"STASIS",start:66.417,end:76.075,keys:4,color:"#dfeaff",accent:"#9aa8ff",energy:.26,rotY:-.02,rotZ:.01,tilt:.04,spread:.92,y:.42,camZ:18.4,camY:7.5,bloom:.5,spin:.02,firstNote:66.417,density:0,city:.7,clock:"freeze",swing:!0,motion:"flat",motionAmp:.02,motionSpeed:.2,motionPitch:.01},{name:"RETURN",start:76.075,end:90.561,keys:6,color:"#64e6d8",accent:"#ffe29a",energy:.76,rotY:.05,rotZ:-.02,tilt:.012,spread:1.05,y:.1,camZ:16.2,camY:6.6,bloom:.86,spin:.08,firstNote:76.68,density:.7,city:.16,clock:"run",motion:"orbit",motionAmp:.14,motionSpeed:.9,motionPitch:.07},{name:"TICK",start:90.561,end:110.48,keys:6,color:"#ffd166",accent:"#7af0ff",energy:.84,rotY:-.1,rotZ:.04,tilt:-.02,spread:1.08,y:.15,camZ:15.6,camY:6.3,bloom:.94,spin:.11,firstNote:90.561,density:.8,city:.2,clock:"run",motion:"zigzag",motionAmp:.17,motionSpeed:1.15,motionPitch:.09},{name:"FINAL",start:110.48,end:129.795,keys:6,color:"#ff9f6b",accent:"#ffd166",energy:.94,rotY:.12,rotZ:-.045,tilt:.025,spread:1.1,y:.18,camZ:15,camY:6.1,bloom:1,spin:.14,firstNote:110.48,density:.9,city:.24,clock:"final",motion:"orbit",motionAmp:.17,motionSpeed:1,motionPitch:.085},{name:"OUTRO",start:129.795,end:140,keys:4,color:"#9fb8ff",accent:"#d7c4ff",energy:.3,rotY:0,rotZ:0,tilt:.03,spread:.9,y:.34,camZ:19.2,camY:7.6,bloom:.46,spin:.02,firstNote:129.795,density:.28,city:.72,clock:"off",holds:1,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0}],notes:[{t:3.341,lane:3},{t:4.247,lane:3},{t:5.454,lane:5},{t:5.756,lane:3},{t:7.566,lane:2},{t:8.17,lane:3},{t:9.377,lane:5},{t:9.679,lane:2},{t:10.283,lane:5},{t:10.434,lane:2},{t:10.585,lane:3},{t:11.339,lane:4},{t:12.999,lane:3},{t:18.281,lane:4},{t:18.583,lane:2},{t:19.035,lane:3},{t:19.186,lane:5},{t:19.639,lane:4},{t:20.544,lane:5},{t:20.997,lane:3},{t:21.148,lane:4},{t:21.752,lane:3},{t:22.053,lane:2},{t:22.657,lane:3},{t:22.808,lane:5},{t:24.015,lane:2},{t:24.317,lane:5},{t:24.619,lane:5},{t:25.071,lane:1},{t:25.071,lane:6},{t:25.826,lane:2},{t:26.882,lane:3},{t:26.882,lane:4},{t:27.335,lane:4},{t:27.486,lane:6},{t:28.693,lane:1},{t:28.844,lane:3},{t:28.995,lane:2},{t:29.297,lane:1},{t:29.599,lane:6},{t:29.9,lane:2},{t:30.806,lane:5},{t:30.957,lane:6},{t:31.862,lane:5},{t:32.013,lane:2},{t:32.315,lane:6},{t:32.768,lane:1},{t:32.919,lane:2},{t:33.069,lane:3},{t:33.22,lane:1},{t:33.371,lane:2},{t:33.522,lane:3},{t:33.824,lane:6},{t:34.729,lane:4},{t:35.031,lane:3},{t:35.333,lane:1},{t:35.333,lane:6},{t:35.937,lane:1},{t:36.238,lane:2},{t:36.842,lane:6},{t:37.144,lane:2},{t:37.295,lane:4},{t:38.2,lane:5},{t:38.955,lane:5},{t:39.257,lane:2},{t:39.86,lane:1},{t:40.162,lane:2},{t:40.313,lane:3},{t:40.464,lane:1},{t:40.917,lane:3},{t:41.671,lane:4},{t:41.973,lane:6},{t:42.275,lane:3},{t:42.577,lane:6},{t:42.878,lane:6},{t:43.18,lane:4},{t:43.331,lane:6},{t:43.482,lane:5},{t:43.935,lane:1},{t:44.387,lane:2},{t:44.387,lane:5},{t:44.538,lane:4},{t:44.689,lane:5},{t:44.84,lane:1},{t:44.84,lane:4},{t:44.991,lane:3},{t:44.991,lane:4},{t:45.293,lane:5},{t:45.444,lane:6},{t:46.047,lane:1},{t:46.5,lane:5},{t:46.651,lane:6},{t:46.802,lane:3},{t:46.953,lane:5},{t:47.104,lane:4},{t:47.707,lane:1},{t:47.858,lane:2},{t:48.16,lane:3},{t:48.311,lane:6},{t:48.462,lane:2},{t:48.462,lane:5},{t:48.613,lane:3},{t:49.216,lane:1},{t:49.518,lane:6},{t:49.669,lane:5},{t:49.82,lane:3},{t:50.122,lane:6},{t:50.273,lane:1},{t:50.725,lane:5},{t:50.876,lane:1},{t:50.876,lane:4},{t:51.329,lane:6},{t:51.48,lane:1},{t:51.631,lane:2},{t:51.782,lane:4},{t:52.084,lane:5},{t:52.536,lane:5},{t:52.687,lane:6},{t:52.838,lane:2},{t:53.14,lane:1},{t:53.291,lane:6},{t:53.442,lane:2},{t:53.744,lane:5},{t:53.894,lane:6},{t:54.045,lane:3},{t:54.045,lane:4},{t:54.196,lane:5},{t:54.347,lane:4},{t:54.498,lane:3},{t:54.498,lane:6},{t:54.649,lane:2},{t:54.951,lane:1},{t:55.102,lane:2},{t:55.253,lane:3},{t:55.403,lane:5},{t:55.705,lane:6},{t:56.158,lane:4},{t:56.309,lane:5},{t:56.46,lane:1},{t:56.611,lane:3},{t:56.762,lane:6},{t:57.063,lane:3},{t:57.365,lane:6},{t:57.516,lane:1},{t:57.667,lane:4},{t:58.12,lane:5},{t:58.271,lane:1},{t:58.422,lane:2},{t:58.874,lane:2},{t:59.176,lane:5},{t:59.327,lane:4},{t:59.478,lane:4},{t:60.082,lane:2},{t:60.232,lane:4},{t:60.383,lane:1},{t:60.534,lane:6},{t:61.138,lane:5},{t:61.289,lane:3},{t:61.591,lane:4},{t:61.742,lane:3},{t:61.892,lane:2},{t:62.194,lane:1},{t:62.345,lane:2},{t:62.496,lane:3},{t:62.798,lane:6},{t:63.1,lane:3},{t:63.401,lane:4},{t:63.552,lane:5},{t:64.005,lane:6},{t:64.609,lane:6},{t:64.76,lane:1},{t:64.911,lane:4},{t:65.212,lane:5},{t:65.363,lane:4},{t:65.514,lane:1},{t:66.118,lane:2},{t:76.983,lane:3},{t:76.983,lane:4},{t:77.888,lane:4},{t:78.19,lane:6},{t:78.492,lane:3},{t:78.643,lane:2},{t:78.643,lane:5},{t:78.794,lane:6},{t:79.699,lane:2},{t:79.85,lane:1},{t:79.85,lane:4},{t:80.001,lane:1},{t:80.303,lane:6},{t:80.454,lane:1},{t:80.907,lane:5},{t:81.057,lane:1},{t:81.208,lane:4},{t:81.359,lane:5},{t:81.51,lane:6},{t:81.661,lane:1},{t:82.114,lane:4},{t:82.265,lane:3},{t:82.717,lane:2},{t:82.868,lane:3},{t:83.019,lane:6},{t:83.321,lane:1},{t:83.472,lane:3},{t:83.472,lane:6},{t:83.623,lane:2},{t:83.925,lane:1},{t:84.076,lane:2},{t:84.226,lane:3},{t:84.377,lane:5},{t:84.528,lane:6},{t:84.679,lane:5},{t:85.132,lane:4},{t:86.037,lane:6},{t:86.188,lane:1},{t:86.339,lane:3},{t:86.943,lane:2},{t:87.094,lane:4},{t:87.245,lane:1},{t:87.848,lane:2},{t:87.848,lane:5},{t:88.15,lane:5},{t:88.452,lane:4},{t:88.754,lane:5},{t:89.055,lane:1},{t:89.206,lane:5},{t:89.357,lane:4},{t:89.508,lane:3},{t:89.659,lane:5},{t:89.81,lane:6},{t:89.961,lane:2},{t:90.112,lane:3},{t:90.564,lane:1},{t:90.715,lane:6},{t:90.866,lane:2},{t:90.866,lane:5},{t:91.168,lane:1},{t:91.319,lane:2},{t:91.47,lane:3},{t:91.47,lane:4},{t:91.772,lane:6},{t:91.923,lane:5},{t:92.074,lane:3},{t:92.375,lane:4},{t:92.526,lane:5},{t:92.677,lane:1},{t:92.677,lane:6},{t:92.979,lane:3},{t:93.13,lane:2},{t:93.13,lane:5},{t:93.583,lane:3},{t:93.733,lane:4},{t:94.186,lane:2},{t:94.337,lane:1},{t:94.488,lane:1},{t:94.639,lane:2},{t:94.941,lane:6},{t:95.092,lane:2},{t:95.243,lane:4},{t:95.695,lane:4},{t:95.846,lane:5},{t:95.997,lane:6},{t:96.148,lane:1},{t:96.299,lane:5},{t:96.45,lane:1},{t:96.601,lane:4},{t:96.752,lane:3},{t:97.204,lane:2},{t:97.355,lane:3},{t:97.506,lane:6},{t:97.808,lane:1},{t:97.959,lane:6},{t:98.11,lane:2},{t:98.261,lane:3},{t:98.412,lane:1},{t:98.562,lane:2},{t:98.713,lane:3},{t:98.864,lane:5},{t:99.015,lane:6},{t:99.166,lane:5},{t:99.77,lane:4},{t:100.222,lane:3},{t:100.373,lane:2},{t:100.524,lane:6},{t:101.43,lane:2},{t:101.581,lane:1},{t:101.581,lane:4},{t:101.731,lane:1},{t:101.882,lane:2},{t:102.033,lane:6},{t:102.184,lane:1},{t:102.335,lane:2},{t:102.637,lane:5},{t:102.788,lane:4},{t:102.939,lane:4},{t:103.241,lane:5},{t:103.391,lane:6},{t:103.995,lane:4},{t:104.146,lane:5},{t:104.448,lane:2},{t:104.599,lane:3},{t:104.75,lane:6},{t:105.202,lane:1},{t:105.353,lane:2},{t:105.806,lane:1},{t:105.957,lane:3},{t:106.108,lane:5},{t:106.259,lane:6},{t:106.41,lane:5},{t:106.56,lane:3},{t:106.862,lane:4},{t:107.013,lane:5},{t:107.466,lane:3},{t:107.617,lane:2},{t:107.617,lane:5},{t:107.768,lane:6},{t:108.069,lane:3},{t:108.22,lane:4},{t:108.371,lane:1},{t:108.522,lane:3},{t:108.673,lane:2},{t:108.975,lane:1},{t:109.277,lane:6},{t:109.428,lane:1},{t:109.579,lane:2},{t:109.88,lane:5},{t:110.031,lane:1},{t:110.182,lane:4},{t:110.333,lane:5},{t:110.484,lane:5},{t:110.635,lane:6},{t:110.786,lane:2},{t:110.786,lane:5},{t:111.238,lane:4},{t:111.389,lane:5},{t:111.54,lane:6},{t:111.691,lane:2},{t:111.993,lane:1},{t:111.993,lane:6},{t:112.446,lane:1},{t:112.597,lane:2},{t:112.748,lane:3},{t:112.898,lane:1},{t:113.049,lane:2},{t:113.2,lane:3},{t:113.351,lane:5},{t:113.804,lane:3},{t:114.106,lane:4},{t:114.408,lane:6},{t:114.709,lane:3},{t:115.011,lane:6},{t:115.162,lane:1},{t:115.615,lane:1},{t:115.766,lane:3},{t:116.218,lane:1},{t:116.369,lane:2},{t:116.822,lane:2},{t:117.275,lane:5},{t:117.426,lane:4},{t:117.727,lane:5},{t:117.878,lane:6},{t:118.029,lane:5},{t:118.18,lane:1},{t:118.633,lane:5},{t:118.935,lane:2},{t:119.086,lane:3},{t:119.236,lane:6},{t:119.538,lane:1},{t:119.689,lane:6},{t:119.84,lane:2},{t:119.991,lane:3},{t:120.142,lane:1},{t:120.293,lane:2},{t:120.444,lane:3},{t:120.746,lane:6},{t:120.896,lane:2},{t:121.047,lane:3},{t:121.198,lane:4},{t:121.349,lane:5},{t:121.651,lane:4},{t:121.802,lane:6},{t:122.255,lane:6},{t:122.556,lane:3},{t:122.707,lane:4},{t:122.858,lane:1},{t:123.16,lane:2},{t:123.311,lane:4},{t:123.462,lane:1},{t:124.065,lane:2},{t:124.367,lane:5},{t:124.669,lane:4},{t:124.971,lane:5},{t:125.122,lane:6},{t:125.273,lane:1},{t:125.575,lane:4},{t:125.725,lane:3},{t:126.027,lane:5},{t:126.178,lane:2},{t:126.329,lane:3},{t:126.48,lane:6},{t:126.631,lane:2},{t:126.782,lane:1},{t:126.933,lane:3},{t:126.933,lane:6},{t:127.084,lane:2},{t:127.385,lane:1},{t:127.536,lane:2},{t:127.687,lane:3},{t:127.989,lane:6},{t:128.14,lane:2},{t:128.291,lane:3},{t:128.593,lane:4},{t:128.894,lane:6},{t:129.045,lane:4},{t:129.196,lane:3},{t:129.347,lane:2},{t:129.347,lane:5},{t:129.8,lane:3},{t:130.253,lane:5},{t:130.705,lane:2},{t:131.309,lane:3},{t:131.395,lane:2,type:"hold",dur:1.207},{t:131.913,lane:4},{t:132.214,lane:3},{t:132.818,lane:2},{t:133.12,lane:3},{t:133.723,lane:3},{t:135.836,lane:5},{t:135.987,lane:2},{t:136.138,lane:3},{t:136.289,lane:5},{t:137.043,lane:3},{t:138.251,lane:5}],events:[{t:.001,type:"clock",mode:"off",power:.61},{t:1.509,type:"burst",lane:5,power:1.15},{t:1.529,type:"vibe",power:.91},{t:6.687,type:"burst",lane:2,power:1.15},{t:18.432,type:"clock",mode:"run",power:.75},{t:18.432,type:"clockTick",hand:"fast",power:.78},{t:19.035,type:"clockTick",hand:"slow",power:.86},{t:19.639,type:"clockTick",hand:"fast",power:.8},{t:19.807,type:"burst",lane:5,power:1.15},{t:19.827,type:"vibe",power:.79},{t:19.847,type:"echo",lane:7,dir:1,power:1.1},{t:20.243,type:"clockTick",hand:"slow",power:1.25},{t:20.846,type:"clockTick",hand:"fast",power:1.25},{t:21.45,type:"clockTick",hand:"slow",power:1.25},{t:22.053,type:"clockTick",hand:"fast",power:.85},{t:22.657,type:"clockTick",hand:"slow",power:.84},{t:23.261,type:"clockTick",hand:"fast",power:1.25},{t:23.864,type:"clockTick",hand:"slow",power:.45},{t:24.265,type:"burst",lane:2,power:1.15},{t:24.285,type:"vibe",power:.93},{t:24.305,type:"echo",lane:0,dir:-1,power:1.1},{t:24.484,type:"clock",mode:"run",power:.82},{t:24.513,type:"burst",lane:2,power:.86},{t:24.567,type:"burst",lane:1,power:1.15},{t:24.587,type:"vibe",power:.89},{t:24.607,type:"echo",lane:0,dir:-1,power:1.1},{t:25.071,type:"clockTick",hand:"fast",power:.45},{t:25.675,type:"clockTick",hand:"slow",power:.95},{t:26.279,type:"clockTick",hand:"fast",power:1.14},{t:26.882,type:"clockTick",hand:"slow",power:.76},{t:27.486,type:"clockTick",hand:"fast",power:.96},{t:28.09,type:"clockTick",hand:"slow",power:1.19},{t:28.693,type:"clockTick",hand:"fast",power:.92},{t:29.164,type:"burst",lane:6,power:1.15},{t:29.204,type:"echo",lane:7,dir:1,power:1.1},{t:29.297,type:"clockTick",hand:"slow",power:1.11},{t:29.9,type:"clockTick",hand:"fast",power:1.15},{t:30.504,type:"clockTick",hand:"slow",power:.96},{t:31.108,type:"clockTick",hand:"fast",power:1.12},{t:31.711,type:"clockTick",hand:"slow",power:1.24},{t:32.315,type:"clockTick",hand:"fast",power:1.04},{t:32.919,type:"clockTick",hand:"slow",power:1.25},{t:33.522,type:"clockTick",hand:"fast",power:1.22},{t:34.064,type:"burst",lane:1,power:1.15},{t:34.084,type:"vibe",power:.71},{t:34.104,type:"echo",lane:0,dir:-1,power:1.1},{t:34.126,type:"clockTick",hand:"slow",power:1.25},{t:34.729,type:"clockTick",hand:"fast",power:1.1},{t:35.333,type:"clockTick",hand:"slow",power:1.25},{t:35.937,type:"clockTick",hand:"fast",power:1.25},{t:36.54,type:"clockTick",hand:"slow",power:1.07},{t:37.144,type:"clockTick",hand:"fast",power:.77},{t:37.748,type:"clockTick",hand:"slow",power:1.21},{t:38.351,type:"clockTick",hand:"fast",power:1.25},{t:38.955,type:"clockTick",hand:"slow",power:1.25},{t:38.963,type:"burst",lane:1,power:1.15},{t:38.983,type:"vibe",power:.71},{t:39.003,type:"echo",lane:0,dir:-1,power:1.1},{t:39.558,type:"clockTick",hand:"fast",power:1.12},{t:40.162,type:"clockTick",hand:"slow",power:1.25},{t:40.766,type:"clockTick",hand:"fast",power:1.14},{t:41.369,type:"clockTick",hand:"slow",power:1.25},{t:41.973,type:"clockTick",hand:"fast",power:.92},{t:42.577,type:"clockTick",hand:"slow",power:1.25},{t:42.878,type:"clock",mode:"run",power:.9},{t:42.907,type:"burst",lane:2,power:.92},{t:43.18,type:"clockTick",hand:"fast",power:.92},{t:43.784,type:"clockTick",hand:"slow",power:.88},{t:43.862,type:"burst",lane:6,power:1.15},{t:43.902,type:"echo",lane:7,dir:1,power:1.1},{t:44.387,type:"clockTick",hand:"fast",power:.98},{t:44.991,type:"clockTick",hand:"slow",power:.45},{t:45.595,type:"clockTick",hand:"fast",power:.83},{t:46.198,type:"clockTick",hand:"slow",power:.45},{t:46.802,type:"clockTick",hand:"fast",power:.45},{t:47.405,type:"clockTick",hand:"slow",power:.96},{t:48.009,type:"clockTick",hand:"fast",power:1.18},{t:48.46,type:"burst",lane:1,power:1.15},{t:48.5,type:"echo",lane:0,dir:-1,power:1.1},{t:48.613,type:"clockTick",hand:"slow",power:1.05},{t:49.216,type:"clockTick",hand:"fast",power:1},{t:49.82,type:"clockTick",hand:"slow",power:1.15},{t:50.424,type:"clockTick",hand:"fast",power:1},{t:51.027,type:"clockTick",hand:"slow",power:1.05},{t:51.631,type:"clockTick",hand:"fast",power:1.04},{t:52.234,type:"clockTick",hand:"slow",power:.92},{t:52.535,type:"motion",style:"wave",amp:.18,speed:1.05,pitch:.09},{t:52.838,type:"clockTick",hand:"fast",power:1.16},{t:53.034,type:"burst",lane:6,power:1.15},{t:53.074,type:"echo",lane:7,dir:1,power:1.1},{t:53.442,type:"clockTick",hand:"slow",power:1.12},{t:54.045,type:"clockTick",hand:"fast",power:.93},{t:54.649,type:"clockTick",hand:"slow",power:1.11},{t:55.253,type:"clockTick",hand:"fast",power:1.21},{t:55.856,type:"clockTick",hand:"slow",power:1.25},{t:56.46,type:"clockTick",hand:"fast",power:.77},{t:57.063,type:"clockTick",hand:"slow",power:.72},{t:57.667,type:"clockTick",hand:"fast",power:.45},{t:57.934,type:"burst",lane:6,power:1.15},{t:57.954,type:"vibe",power:.73},{t:57.974,type:"echo",lane:7,dir:1,power:1.1},{t:58.271,type:"clockTick",hand:"slow",power:.73},{t:58.874,type:"clockTick",hand:"fast",power:.84},{t:59.478,type:"clockTick",hand:"slow",power:.45},{t:60.082,type:"clockTick",hand:"fast",power:.45},{t:60.685,type:"clockTick",hand:"slow",power:.45},{t:61.289,type:"clockTick",hand:"fast",power:.75},{t:61.892,type:"clockTick",hand:"slow",power:.88},{t:62.496,type:"clockTick",hand:"fast",power:.78},{t:63.1,type:"clockTick",hand:"slow",power:.81},{t:63.703,type:"clockTick",hand:"fast",power:.81},{t:64.307,type:"clockTick",hand:"slow",power:.92},{t:64.911,type:"clockTick",hand:"fast",power:.98},{t:65.514,type:"clockTick",hand:"slow",power:.88},{t:66.118,type:"clockTick",hand:"fast",power:.95},{t:66.418,type:"clock",mode:"freeze",power:.75},{t:66.419,type:"pendulum",mode:"start",period:2.4145,amplitude:.42},{t:76.073,type:"pendulum",mode:"stop"},{t:76.076,type:"clock",mode:"run",power:.88},{t:76.105,type:"burst",lane:2,power:.9},{t:76.379,type:"clockTick",hand:"fast",power:.45},{t:76.983,type:"clockTick",hand:"slow",power:.77},{t:77.587,type:"clockTick",hand:"fast",power:.78},{t:78.19,type:"clockTick",hand:"slow",power:.77},{t:78.794,type:"clockTick",hand:"fast",power:.75},{t:79.064,type:"burst",lane:6,power:1.15},{t:79.084,type:"vibe",power:.72},{t:79.104,type:"echo",lane:7,dir:1,power:1.1},{t:79.397,type:"clockTick",hand:"slow",power:1.25},{t:80.001,type:"clockTick",hand:"fast",power:.78},{t:80.605,type:"clockTick",hand:"slow",power:.45},{t:81.208,type:"clockTick",hand:"fast",power:.82},{t:81.812,type:"clockTick",hand:"slow",power:.91},{t:82.416,type:"clockTick",hand:"fast",power:.98},{t:83.019,type:"clockTick",hand:"slow",power:1.02},{t:83.623,type:"clockTick",hand:"fast",power:1.01},{t:84.226,type:"clockTick",hand:"slow",power:1.01},{t:84.83,type:"clockTick",hand:"fast",power:.87},{t:85.434,type:"clockTick",hand:"slow",power:.79},{t:86.037,type:"clockTick",hand:"fast",power:.75},{t:86.641,type:"clockTick",hand:"slow",power:.79},{t:87.245,type:"clockTick",hand:"fast",power:.76},{t:87.848,type:"clockTick",hand:"slow",power:.45},{t:88.452,type:"clockTick",hand:"fast",power:1.05},{t:89.055,type:"clockTick",hand:"slow",power:.91},{t:89.659,type:"clockTick",hand:"fast",power:.94},{t:90.263,type:"clockTick",hand:"slow",power:.45},{t:90.395,type:"burst",lane:1,power:1.15},{t:90.415,type:"vibe",power:.77},{t:90.435,type:"echo",lane:0,dir:-1,power:1.1},{t:90.562,type:"clock",mode:"run",power:.92},{t:90.591,type:"burst",lane:2,power:.94},{t:90.621,type:"vibe",power:.84},{t:90.866,type:"clockTick",hand:"fast",power:.88},{t:91.47,type:"clockTick",hand:"slow",power:.45},{t:92.074,type:"clockTick",hand:"fast",power:.77},{t:92.677,type:"clockTick",hand:"slow",power:.45},{t:92.833,type:"burst",lane:1,power:1.15},{t:92.873,type:"echo",lane:0,dir:-1,power:1.1},{t:93.281,type:"clockTick",hand:"fast",power:.88},{t:93.884,type:"clockTick",hand:"slow",power:.45},{t:94.488,type:"clockTick",hand:"fast",power:.85},{t:95.092,type:"clockTick",hand:"slow",power:.45},{t:95.695,type:"clockTick",hand:"fast",power:.77},{t:96.299,type:"clockTick",hand:"slow",power:.8},{t:96.902,type:"clockTick",hand:"fast",power:.77},{t:97.506,type:"clockTick",hand:"slow",power:.83},{t:98.11,type:"clockTick",hand:"fast",power:.82},{t:98.713,type:"clockTick",hand:"slow",power:.85},{t:98.963,type:"burst",lane:1,power:1.15},{t:99.003,type:"echo",lane:0,dir:-1,power:1.1},{t:99.317,type:"clockTick",hand:"fast",power:.85},{t:99.921,type:"clockTick",hand:"slow",power:.88},{t:100.524,type:"clockTick",hand:"fast",power:1.25},{t:101.128,type:"clockTick",hand:"slow",power:.79},{t:101.731,type:"clockTick",hand:"fast",power:.82},{t:102.335,type:"clockTick",hand:"slow",power:.81},{t:102.939,type:"clockTick",hand:"fast",power:.8},{t:103.542,type:"clockTick",hand:"slow",power:.81},{t:103.863,type:"burst",lane:6,power:1.15},{t:103.903,type:"echo",lane:7,dir:1,power:1.1},{t:104.146,type:"clockTick",hand:"fast",power:.82},{t:104.75,type:"clockTick",hand:"slow",power:.82},{t:105.353,type:"clockTick",hand:"fast",power:.89},{t:105.957,type:"clockTick",hand:"slow",power:.76},{t:106.56,type:"clockTick",hand:"fast",power:.81},{t:107.164,type:"clockTick",hand:"slow",power:.79},{t:107.768,type:"clockTick",hand:"fast",power:.79},{t:108.371,type:"clockTick",hand:"slow",power:.8},{t:108.975,type:"clockTick",hand:"fast",power:.82},{t:109.579,type:"clockTick",hand:"slow",power:.93},{t:110.182,type:"clockTick",hand:"fast",power:.82},{t:110.481,type:"clock",mode:"final",power:.97},{t:110.51,type:"burst",lane:2,power:.98},{t:110.54,type:"vibe",power:.94},{t:110.786,type:"clockTick",hand:"fast",power:.45},{t:111.389,type:"clockTick",hand:"slow",power:.45},{t:111.993,type:"clockTick",hand:"fast",power:.45},{t:112.129,type:"burst",lane:1,power:1.15},{t:112.149,type:"vibe",power:.74},{t:112.169,type:"echo",lane:0,dir:-1,power:1.1},{t:112.597,type:"clockTick",hand:"slow",power:.45},{t:113.2,type:"clockTick",hand:"fast",power:.8},{t:113.804,type:"clockTick",hand:"slow",power:.45},{t:114.408,type:"clockTick",hand:"fast",power:.78},{t:115.011,type:"clockTick",hand:"slow",power:.45},{t:115.309,type:"motion",style:"orbit",amp:.19,speed:1.2,pitch:.1},{t:115.615,type:"clockTick",hand:"fast",power:.45},{t:116.218,type:"clockTick",hand:"slow",power:.45},{t:116.727,type:"burst",lane:1,power:1.14},{t:116.767,type:"echo",lane:0,dir:-1,power:1.1},{t:116.822,type:"clockTick",hand:"fast",power:.45},{t:117.426,type:"clockTick",hand:"slow",power:.45},{t:118.029,type:"clockTick",hand:"fast",power:.76},{t:118.633,type:"clockTick",hand:"slow",power:1.12},{t:119.236,type:"clockTick",hand:"fast",power:1.08},{t:119.84,type:"clockTick",hand:"slow",power:1.05},{t:120.444,type:"clockTick",hand:"fast",power:.45},{t:121.047,type:"clockTick",hand:"slow",power:.86},{t:121.651,type:"clockTick",hand:"fast",power:1.12},{t:122.23,type:"burst",lane:1,power:1.15},{t:122.255,type:"clockTick",hand:"slow",power:1.25},{t:122.27,type:"echo",lane:0,dir:-1,power:1.1},{t:122.858,type:"clockTick",hand:"fast",power:1.01},{t:123.462,type:"clockTick",hand:"slow",power:1.19},{t:124.065,type:"clockTick",hand:"fast",power:1.14},{t:124.669,type:"clockTick",hand:"slow",power:1.08},{t:125.273,type:"clockTick",hand:"fast",power:.83},{t:125.876,type:"clockTick",hand:"slow",power:1.18},{t:126.48,type:"clockTick",hand:"fast",power:.88},{t:127.084,type:"clockTick",hand:"slow",power:1.25},{t:127.129,type:"burst",lane:6,power:1.15},{t:127.169,type:"echo",lane:7,dir:1,power:1.1},{t:127.687,type:"clockTick",hand:"fast",power:.79},{t:128.291,type:"clockTick",hand:"slow",power:.86},{t:128.894,type:"clockTick",hand:"fast",power:.83},{t:129.498,type:"clockTick",hand:"slow",power:.76},{t:129.796,type:"clock",mode:"off",power:.65},{t:133.12,type:"burst",lane:5,power:1.15},{t:137.718,type:"burst",lane:5,power:1.15}],ghosts:[{t:18.471,lane:0,type:"sweep"},{t:18.541,lane:7,type:"sweep"},{t:19.867,lane:7,type:"bounce"},{t:24.325,lane:0,type:"bounce"},{t:24.523,lane:0,type:"sweep"},{t:24.593,lane:7,type:"sweep"},{t:24.627,lane:0,type:"bounce"},{t:29.224,lane:7,type:"sweep"},{t:34.124,lane:0,type:"sweep"},{t:39.023,lane:0,type:"sweep"},{t:42.917,lane:0,type:"sweep"},{t:42.987,lane:7,type:"sweep"},{t:43.922,lane:7,type:"sweep"},{t:48.52,lane:0,type:"sweep"},{t:53.094,lane:7,type:"sweep"},{t:57.994,lane:7,type:"sweep"},{t:66.457,lane:0,type:"sweep"},{t:66.527,lane:7,type:"sweep"},{t:76.115,lane:0,type:"sweep"},{t:76.185,lane:7,type:"sweep"},{t:79.124,lane:7,type:"sweep"},{t:90.455,lane:0,type:"bounce"},{t:90.601,lane:0,type:"sweep"},{t:90.671,lane:7,type:"sweep"},{t:92.893,lane:0,type:"sweep"},{t:99.023,lane:0,type:"sweep"},{t:103.923,lane:7,type:"sweep"},{t:110.52,lane:0,type:"sweep"},{t:110.59,lane:7,type:"sweep"},{t:112.189,lane:0,type:"bounce"},{t:116.787,lane:0,type:"sweep"},{t:122.29,lane:0,type:"sweep"},{t:127.189,lane:7,type:"sweep"}],swings:[{t:67.021},{t:68.228},{t:69.435},{t:70.642},{t:71.85},{t:73.057},{t:74.264},{t:75.471}]},Tf={song:{title:"THE UNTOUCHABLE OF f RA IA'S LAND",shortTitle:"THE UNTOUCHABLE",artist:"f RA IA",bpm:111.1,bpmLabel:"111 / 96 BPM",bpmMap:[{t:0,bpm:111.1},{t:28.492,bpm:96},{t:63.59,bpm:111.1}],duration:147.541,chartEnd:141.829,introEnd:28.492,beatOffset:.409,difficulty:"BOSS",laneLabel:"4 · 6 · 8",freeNotes:!0,boss:!0,fadeStart:140.2,fadeEnd:142.6},sections:[{name:"OVERTURE",start:0,end:9.05,keys:8,intro:!0,color:"#ffcf6e",accent:"#ff3b5c",energy:.42,bloom:.68,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:19.5,camY:7.2,spin:.02,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.03,motionSpeed:.25,motionPitch:.015,city:0},{name:"RELIQUARY",start:9.05,end:18.77,keys:8,intro:!0,color:"#ffb45e",accent:"#9b6bff",energy:.62,bloom:.8,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:19.5,camY:7.2,spin:.03,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"wave",motionAmp:.05,motionSpeed:.35,motionPitch:.02,city:0},{name:"HUSH",start:18.77,end:20.39,keys:8,intro:!0,color:"#b8c8ff",accent:"#ffd166",energy:.2,bloom:.42,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:19.5,camY:7.2,spin:.01,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"flat",motionAmp:.01,motionSpeed:.2,motionPitch:.005,city:0},{name:"PROCESSION",start:20.39,end:28.492,keys:8,intro:!0,color:"#ff8a5e",accent:"#ffd166",energy:.84,bloom:.96,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:19.5,camY:7.2,spin:.05,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.1,motionSpeed:.6,motionPitch:.04,city:0},{name:"CHAMBER",start:28.492,end:48.492,keys:4,firstNote:29.742,color:"#a99bff",accent:"#ffd166",energy:.32,bloom:.62,rotY:0,rotZ:0,tilt:.02,spread:.98,y:.08,camZ:18.8,camY:7,spin:.025,lookY:5,lookZ:-2,bpm:96,beatOffset:28.492,motion:"wave",motionAmp:.04,motionSpeed:.4,motionPitch:.018,city:0},{name:"MECHANISM",start:48.492,end:61.492,keys:6,color:"#ffb45e",accent:"#ff4d6d",energy:.62,bloom:.82,rotY:.05,rotZ:-.018,tilt:.015,spread:1.03,y:.1,camZ:17.4,camY:6.8,spin:.06,lookY:5.4,lookZ:-4,bpm:96,beatOffset:28.492,motion:"clock",motionAmp:.075,motionSpeed:.55,motionPitch:.03,city:0},{name:"DESCENT",start:61.492,end:63.59,keys:6,color:"#ff6b7a",accent:"#ffd166",energy:.76,bloom:.9,rotY:-.06,rotZ:.025,tilt:-.02,spread:1.05,y:.12,camZ:16.4,camY:6.4,spin:.09,lookY:5.6,lookZ:-5,bpm:96,beatOffset:28.492,motion:"slope",motionAmp:.12,motionSpeed:.7,motionPitch:.05,city:0},{name:"GALLERY",start:63.59,end:70.069,keys:6,color:"#ff7a5e",accent:"#ffd166",energy:.84,bloom:.98,rotY:.08,rotZ:-.03,tilt:.025,spread:1.06,y:.14,camZ:16.2,camY:6.7,spin:.1,lookY:5.8,lookZ:-6,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.13,motionSpeed:.75,motionPitch:.05,city:0},{name:"HUNT",start:70.069,end:89.449,keys:6,color:"#ff4d6d",accent:"#ffd166",energy:.98,bloom:1.08,rotY:-.1,rotZ:.04,tilt:-.025,spread:1.08,y:.16,camZ:15.8,camY:6.6,spin:.13,lookY:6,lookZ:-6,bpm:111.1,beatOffset:.409,motion:"zigzag",motionAmp:.16,motionSpeed:.95,motionPitch:.065,city:0},{name:"FROZEN",start:89.449,end:105.429,keys:4,color:"#9fc7ff",accent:"#d7e8ff",energy:.3,bloom:.58,rotY:-.02,rotZ:.01,tilt:.04,spread:.94,y:.24,camZ:19.2,camY:7.8,spin:.02,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"flat",motionAmp:.02,motionSpeed:.2,motionPitch:.008,city:0},{name:"ASCENT",start:105.429,end:107.509,keys:6,color:"#ffd166",accent:"#ff7a5e",energy:.88,bloom:1,rotY:.06,rotZ:-.025,tilt:.02,spread:1.04,y:.12,camZ:16.4,camY:6.5,spin:.1,lookY:5.8,lookZ:-5,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.16,motionSpeed:.9,motionPitch:.06,city:0},{name:"APOTHEOSIS",start:107.509,end:123.829,keys:8,color:"#ff9a5e",accent:"#ff3b5c",energy:1.04,bloom:1.14,rotY:-.12,rotZ:.05,tilt:-.03,spread:1.1,y:.18,camZ:15.4,camY:6.5,spin:.15,lookY:6,lookZ:-6,bpm:111.1,beatOffset:.409,motion:"clock",motionAmp:.18,motionSpeed:1.05,motionPitch:.075,city:0},{name:"FINALE",start:123.829,end:141.829,keys:8,color:"#ff3b5c",accent:"#ffd166",energy:1.12,bloom:1.2,rotY:.14,rotZ:-.055,tilt:.035,spread:1.12,y:.2,camZ:14.8,camY:6.3,spin:.17,lookY:6.2,lookZ:-7,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.2,motionSpeed:1.15,motionPitch:.085,city:0},{name:"OUTRO",start:141.829,end:147.541,keys:4,color:"#c9b8ff",accent:"#ffd166",energy:.18,bloom:.46,rotY:0,rotZ:0,tilt:.02,spread:.92,y:.3,camZ:19.6,camY:7.8,spin:.02,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"flat",motionAmp:0,motionSpeed:.2,motionPitch:0,city:0}],notes:[{t:30.367,lane:5},{t:30.992,lane:3},{t:31.617,lane:4},{t:32.555,lane:2},{t:33.492,lane:4},{t:35.055,lane:5,type:"hold",dur:1.25},{t:35.367,lane:4},{t:35.992,lane:2},{t:36.617,lane:2},{t:38.492,lane:2},{t:38.492,lane:5},{t:39.43,lane:5},{t:40.367,lane:5},{t:40.992,lane:3},{t:41.617,lane:4},{t:42.555,lane:3,type:"hold",dur:1.25},{t:43.492,lane:2},{t:44.43,lane:4},{t:45.992,lane:3},{t:47.555,lane:3},{t:48.492,lane:1},{t:48.492,lane:6},{t:49.43,lane:6},{t:50.055,lane:5},{t:50.68,lane:6},{t:50.992,lane:1},{t:51.305,lane:5},{t:51.93,lane:6},{t:52.242,lane:3},{t:52.867,lane:4},{t:53.492,lane:4},{t:54.117,lane:2},{t:54.43,lane:1},{t:55.055,lane:5},{t:55.68,lane:4},{t:55.992,lane:3},{t:56.305,lane:2},{t:56.93,lane:1},{t:57.242,lane:3},{t:57.867,lane:6},{t:58.492,lane:1},{t:58.492,lane:6},{t:59.117,lane:5},{t:59.43,lane:2},{t:60.055,lane:6},{t:60.68,lane:5},{t:60.992,lane:1},{t:61.305,lane:3},{t:61.617,lane:2},{t:61.93,lane:5},{t:62.242,lane:3},{t:62.555,lane:4},{t:62.867,lane:3},{t:63.492,lane:1},{t:63.595,lane:4},{t:63.73,lane:6},{t:64,lane:1},{t:64.135,lane:5},{t:64.405,lane:2},{t:64.81,lane:5},{t:64.945,lane:4},{t:65.215,lane:4},{t:65.486,lane:2},{t:65.621,lane:1},{t:65.891,lane:5},{t:66.161,lane:4},{t:66.296,lane:2},{t:66.566,lane:4},{t:66.836,lane:2},{t:66.971,lane:1},{t:67.241,lane:5},{t:67.376,lane:2},{t:67.646,lane:4},{t:67.916,lane:2},{t:68.321,lane:5},{t:68.456,lane:6},{t:68.726,lane:2},{t:69.131,lane:3},{t:69.266,lane:2},{t:69.536,lane:3},{t:69.536,lane:4},{t:69.806,lane:2},{t:69.941,lane:4},{t:70.346,lane:2},{t:70.616,lane:3},{t:70.751,lane:4},{t:71.021,lane:5},{t:71.291,lane:6},{t:71.426,lane:1},{t:71.561,lane:6},{t:71.696,lane:3},{t:72.236,lane:2},{t:72.371,lane:6},{t:72.776,lane:2},{t:73.046,lane:3},{t:73.181,lane:4},{t:73.451,lane:5},{t:73.721,lane:6},{t:73.856,lane:3},{t:73.991,lane:4},{t:74.261,lane:6},{t:74.396,lane:5},{t:74.666,lane:3},{t:74.936,lane:1},{t:75.071,lane:2},{t:75.341,lane:4},{t:75.477,lane:5},{t:75.747,lane:5},{t:76.017,lane:1},{t:76.287,lane:3},{t:76.422,lane:4},{t:76.827,lane:5},{t:77.097,lane:3},{t:77.232,lane:2},{t:77.502,lane:2},{t:77.772,lane:4},{t:77.907,lane:5},{t:78.042,lane:6},{t:78.177,lane:3},{t:78.177,lane:4},{t:78.447,lane:1},{t:78.717,lane:2},{t:79.122,lane:6},{t:79.257,lane:4},{t:79.527,lane:3},{t:79.662,lane:5},{t:79.932,lane:4},{t:80.202,lane:5},{t:80.337,lane:4},{t:80.472,lane:1},{t:80.877,lane:1},{t:81.147,lane:2},{t:81.417,lane:3},{t:81.552,lane:6},{t:81.822,lane:1},{t:81.957,lane:3},{t:82.227,lane:1},{t:82.497,lane:3},{t:82.767,lane:4},{t:82.902,lane:6},{t:83.172,lane:1},{t:83.307,lane:5},{t:83.577,lane:2},{t:83.712,lane:6},{t:83.982,lane:5},{t:84.252,lane:6},{t:84.387,lane:3},{t:84.522,lane:1},{t:84.657,lane:2},{t:84.927,lane:3},{t:85.197,lane:4},{t:85.332,lane:6},{t:85.603,lane:1},{t:85.738,lane:5},{t:86.008,lane:2},{t:86.143,lane:6},{t:86.413,lane:5},{t:86.683,lane:6},{t:86.818,lane:3},{t:86.818,lane:4},{t:86.953,lane:3},{t:87.223,lane:1},{t:87.358,lane:3},{t:87.628,lane:6},{t:87.898,lane:2},{t:88.033,lane:1},{t:88.303,lane:3},{t:88.438,lane:2},{t:88.708,lane:3},{t:88.978,lane:2},{t:89.248,lane:4},{t:90.058,lane:4},{t:90.733,lane:5},{t:91.138,lane:4},{t:92.218,lane:4},{t:93.028,lane:3},{t:93.298,lane:5},{t:93.568,lane:2},{t:94.039,lane:5,type:"hold",dur:.81},{t:94.783,lane:4},{t:95.053,lane:5},{t:95.459,lane:2},{t:95.459,lane:5},{t:95.864,lane:3},{t:96.269,lane:3},{t:96.539,lane:5},{t:96.944,lane:3},{t:97.349,lane:3},{t:97.619,lane:4},{t:98.294,lane:4},{t:98.699,lane:4},{t:99.104,lane:5},{t:99.779,lane:4},{t:100.184,lane:2},{t:100.52,lane:3,type:"hold",dur:.81},{t:100.859,lane:4},{t:101.264,lane:2},{t:101.669,lane:3},{t:101.939,lane:5},{t:102.209,lane:2},{t:102.614,lane:4},{t:103.019,lane:5},{t:103.424,lane:5},{t:104.099,lane:2},{t:104.099,lane:5},{t:104.504,lane:5},{t:104.909,lane:2},{t:105.179,lane:2},{t:105.45,lane:3},{t:105.585,lane:5},{t:105.72,lane:6},{t:105.855,lane:4},{t:105.99,lane:2},{t:106.125,lane:1},{t:106.26,lane:2},{t:106.395,lane:1},{t:106.53,lane:3},{t:106.665,lane:5},{t:106.8,lane:6},{t:107.205,lane:1},{t:107.34,lane:4},{t:107.61,lane:2},{t:107.88,lane:1},{t:108.15,lane:0},{t:108.285,lane:7},{t:108.42,lane:4},{t:108.69,lane:6},{t:108.96,lane:6},{t:109.095,lane:5},{t:109.365,lane:3},{t:109.5,lane:2},{t:109.77,lane:0},{t:109.905,lane:1},{t:110.175,lane:3},{t:110.31,lane:4},{t:110.58,lane:6},{t:110.715,lane:5},{t:110.985,lane:3},{t:111.12,lane:2},{t:111.39,lane:0},{t:111.525,lane:1},{t:111.795,lane:3},{t:111.93,lane:4},{t:112.2,lane:6},{t:112.47,lane:6},{t:112.605,lane:5},{t:112.74,lane:0},{t:112.74,lane:7},{t:113.01,lane:0},{t:113.28,lane:4},{t:113.415,lane:7},{t:113.685,lane:2},{t:113.82,lane:5},{t:114.09,lane:2},{t:114.225,lane:4},{t:114.495,lane:6},{t:114.63,lane:0},{t:114.9,lane:4},{t:115.035,lane:7},{t:115.305,lane:2},{t:115.441,lane:5},{t:115.711,lane:2},{t:115.846,lane:4},{t:116.251,lane:0},{t:116.521,lane:0},{t:116.791,lane:4},{t:116.926,lane:7},{t:117.061,lane:3},{t:117.331,lane:3},{t:117.601,lane:2},{t:117.736,lane:5},{t:118.006,lane:4},{t:118.141,lane:0},{t:118.411,lane:1},{t:118.546,lane:5},{t:118.816,lane:6},{t:118.951,lane:3},{t:119.221,lane:2},{t:119.356,lane:5},{t:119.626,lane:4},{t:119.761,lane:0},{t:120.031,lane:1},{t:120.166,lane:5},{t:120.436,lane:6},{t:120.571,lane:3},{t:120.841,lane:3},{t:121.111,lane:2},{t:121.246,lane:5},{t:121.381,lane:0},{t:121.381,lane:7},{t:121.651,lane:5},{t:121.921,lane:3},{t:122.056,lane:2},{t:122.326,lane:0},{t:122.461,lane:2},{t:122.731,lane:1},{t:122.866,lane:5},{t:123.136,lane:7},{t:123.271,lane:6},{t:123.541,lane:3},{t:123.676,lane:2},{t:123.946,lane:4},{t:124.081,lane:3},{t:124.216,lane:5},{t:124.486,lane:6},{t:124.621,lane:1},{t:124.891,lane:0},{t:125.026,lane:7},{t:125.161,lane:1},{t:125.432,lane:2},{t:125.567,lane:5},{t:125.702,lane:6},{t:125.972,lane:4},{t:126.107,lane:3},{t:126.242,lane:2},{t:126.377,lane:1},{t:126.647,lane:1},{t:126.782,lane:2},{t:126.917,lane:3},{t:127.187,lane:5},{t:127.322,lane:6},{t:127.592,lane:6},{t:127.727,lane:5},{t:127.862,lane:2},{t:127.862,lane:5},{t:127.997,lane:1},{t:128.132,lane:0},{t:128.402,lane:2},{t:128.537,lane:3},{t:128.672,lane:4},{t:128.942,lane:6},{t:129.077,lane:7},{t:129.347,lane:5},{t:129.482,lane:4},{t:129.617,lane:3},{t:129.887,lane:1},{t:130.022,lane:3},{t:130.022,lane:4},{t:130.157,lane:7},{t:130.427,lane:2},{t:130.562,lane:5},{t:130.697,lane:6},{t:130.967,lane:4},{t:131.102,lane:1},{t:131.372,lane:0},{t:131.507,lane:7},{t:131.642,lane:0},{t:131.912,lane:4},{t:132.047,lane:7},{t:132.182,lane:2},{t:132.182,lane:5},{t:132.452,lane:2},{t:132.587,lane:4},{t:132.722,lane:1},{t:132.857,lane:6},{t:133.127,lane:7},{t:133.262,lane:0},{t:133.397,lane:3},{t:133.667,lane:7},{t:133.802,lane:1},{t:134.072,lane:5},{t:134.207,lane:6},{t:134.342,lane:2},{t:134.477,lane:5},{t:134.612,lane:1},{t:134.882,lane:0},{t:135.017,lane:4},{t:135.152,lane:1},{t:135.423,lane:2},{t:135.558,lane:6},{t:135.828,lane:7},{t:135.963,lane:3},{t:136.098,lane:6},{t:136.368,lane:5},{t:136.503,lane:0},{t:136.503,lane:7},{t:136.638,lane:4},{t:136.908,lane:5},{t:137.043,lane:2},{t:137.178,lane:6},{t:137.448,lane:7},{t:137.583,lane:3},{t:137.853,lane:2},{t:137.988,lane:5},{t:138.123,lane:1},{t:138.393,lane:0},{t:138.528,lane:4},{t:138.663,lane:3},{t:138.663,lane:4},{t:138.933,lane:1},{t:139.068,lane:0},{t:139.203,lane:2},{t:139.338,lane:4},{t:139.608,lane:5},{t:139.743,lane:3},{t:139.878,lane:7},{t:140.148,lane:6},{t:140.283,lane:5},{t:140.553,lane:3},{t:140.688,lane:2},{t:140.823,lane:3},{t:140.823,lane:4},{t:140.958,lane:1},{t:141.093,lane:5},{t:141.363,lane:3},{t:141.498,lane:7},{t:141.633,lane:6}],events:[{t:0,type:"bossCamera",pos:[0,15,48],look:[0,18,-70],fov:48,roll:0,dur:.02},{t:.409,type:"bossCamera",pos:[0,14,46],look:[0,20,-74],fov:48,roll:0,dur:1.1},{t:.409,type:"bossGlitch",power:.5},{t:.409,type:"pulse",power:.51},{t:.429,type:"wind",power:.95},{t:.7,type:"caption",kicker:"OVERTURE",title:"THE UNTOUCHABLE",sub:"OF f RA IA'S LAND",hold:5.6},{t:2.569,type:"bossCamera",pos:[0,10,31],look:[0,20,-78],fov:52,roll:-.02,dur:.85},{t:2.569,type:"pulse",power:.51},{t:4.729,type:"bossCamera",pos:[-7,5.5,20],look:[2,23,-86],fov:58,roll:.025,dur:.78},{t:4.729,type:"bossGlitch",power:.7},{t:4.729,type:"pulse",power:.51},{t:6.889,type:"bossCamera",pos:[8,3.1,10],look:[-4,19,-82],fov:61,roll:.035,dur:.72},{t:6.89,type:"pulse",power:.51},{t:8.95,type:"bossGlitch",power:.9},{t:9.05,type:"bossCamera",pos:[-16,10,-2],look:[8,15,-66],fov:55,roll:-.03,dur:.92},{t:9.05,type:"pulse",power:.62},{t:9.07,type:"wind",power:1.07},{t:9.2,type:"caption",kicker:"I",title:"THE NAVE",sub:"EVERY SAINT HAS TURNED AWAY",hold:4.2},{t:11.21,type:"bossCamera",pos:[13,17,-14],look:[-10,12,-82],fov:52,roll:.05,dur:.85},{t:11.21,type:"pulse",power:.62},{t:13.37,type:"bossCamera",pos:[0,24,16],look:[0,14,-44],fov:50,roll:0,dur:.72},{t:13.37,type:"bossGlitch",power:.65},{t:13.37,type:"pulse",power:.62},{t:15.53,type:"bossCamera",pos:[0,3,6],look:[0,23,-88],fov:63,roll:.02,dur:.68},{t:15.531,type:"pulse",power:.62},{t:17.69,type:"bossCamera",pos:[0,12,38],look:[0,21,-88],fov:48,roll:0,dur:1.05},{t:17.691,type:"pulse",power:.62},{t:17.711,type:"wind",power:1.07},{t:18.77,type:"bossGlitch",power:1},{t:19.85,type:"bossCamera",pos:[0,6,18],look:[0,25,-88],fov:58,roll:-.03,dur:.52},{t:19.851,type:"pulse",power:.39},{t:20.43,type:"vibe",power:.84},{t:20.5,type:"caption",kicker:"II",title:"THE PROCESSION",sub:"THE HOUR HAND FALLS",hold:4},{t:21.49,type:"bossCamera",pos:[-12,15,10],look:[6,11,-48],fov:55,roll:.04,dur:.8},{t:21.49,type:"bossGlitch",power:.8},{t:22.011,type:"pulse",power:.74},{t:23.65,type:"bossCamera",pos:[12,4,4],look:[-4,19,-74],fov:60,roll:-.05,dur:.62},{t:23.65,type:"bossGlitch",power:.9},{t:24.171,type:"pulse",power:.74},{t:25.81,type:"bossCamera",pos:[0,26,26],look:[0,0,-4],fov:58,roll:.03,dur:.72},{t:26.3,type:"caption",kicker:"III",title:"THE CLOCK",sub:"DO NOT LET IT STRIKE",hold:2.4},{t:26.332,type:"pulse",power:.74},{t:26.352,type:"wind",power:1.2},{t:27.97,type:"bossCamera",pos:[0,9.5,26],look:[0,5,-2],fov:51,roll:0,dur:.52},{t:27.97,type:"bossGlitch",power:1.15},{t:28.492,type:"bossCamera",pos:[0,7.4,19.2],look:[0,4.87,-2],fov:48.62,roll:0,dur:.6},{t:28.492,type:"bossGlitch",power:1.3},{t:28.492,type:"bossPhase",mode:"play"},{t:28.492,type:"bossTick",hand:"fast",power:.54},{t:28.492,type:"pulse",power:.42},{t:28.522,type:"echo",lane:0,dir:-1,power:.72},{t:30.992,type:"bossTick",hand:"slow",power:.54},{t:30.992,type:"pulse",power:.42},{t:33.492,type:"bossTick",hand:"fast",power:.54},{t:33.492,type:"pulse",power:.42},{t:33.522,type:"echo",lane:7,dir:1,power:.72},{t:33.55,type:"bossCamera",pos:[0,8.1,18.4],look:[0,4.88,-3],fov:51.58,roll:0,dur:.8},{t:35.992,type:"bossTick",hand:"slow",power:.54},{t:35.992,type:"pulse",power:.42},{t:38.492,type:"bossTick",hand:"fast",power:.54},{t:38.492,type:"pulse",power:.42},{t:38.522,type:"echo",lane:0,dir:-1,power:.72},{t:40.742,type:"bossCamera",pos:[-5,9.2,18.8],look:[2,5.2,-4],fov:52.07,roll:.02,dur:1},{t:40.992,type:"bossTick",hand:"slow",power:.54},{t:40.992,type:"pulse",power:.42},{t:43.492,type:"bossTick",hand:"fast",power:.54},{t:43.492,type:"pulse",power:.42},{t:43.522,type:"echo",lane:7,dir:1,power:.72},{t:45.992,type:"bossTick",hand:"slow",power:.54},{t:45.992,type:"pulse",power:.42},{t:48.492,type:"bossCamera",pos:[-4,7.8,17.2],look:[2,4.38,-6],fov:52.36,roll:-.02,dur:.9},{t:48.492,type:"bossGlitch",power:.7},{t:48.492,type:"bossTick",hand:"fast",power:.72},{t:48.492,type:"pulse",power:.6},{t:48.522,type:"echo",lane:0,dir:-1,power:.93},{t:50.992,type:"bossTick",hand:"slow",power:.72},{t:50.992,type:"pulse",power:.6},{t:53.492,type:"bossTick",hand:"fast",power:.72},{t:53.492,type:"pulse",power:.6},{t:53.522,type:"echo",lane:7,dir:1,power:.93},{t:54.92,type:"bossCamera",pos:[5,8.05,16.4],look:[-2,4.43,-6],fov:54,roll:.03,dur:.9},{t:55.992,type:"bossTick",hand:"slow",power:.72},{t:55.992,type:"pulse",power:.6},{t:58.492,type:"bossTick",hand:"fast",power:.72},{t:58.492,type:"pulse",power:.6},{t:58.522,type:"echo",lane:0,dir:-1,power:.93},{t:60.992,type:"bossTick",hand:"slow",power:.72},{t:60.992,type:"pulse",power:.6},{t:61.492,type:"bossCamera",pos:[-7,6.6,15.4],look:[4,3.81,-10],fov:51,roll:-.04,dur:.7},{t:63.492,type:"bossTick",hand:"fast",power:.81},{t:63.492,type:"pulse",power:.69},{t:63.522,type:"echo",lane:7,dir:1,power:1.03},{t:63.59,type:"bossCamera",pos:[0,7.32,16.2],look:[0,3.91,-7],fov:54,roll:.03,dur:.6},{t:63.59,type:"bossGlitch",power:1.1},{t:64.656,type:"burst",lane:4,power:1.2},{t:65.215,type:"bossTick",hand:"fast",power:.85},{t:65.215,type:"pulse",power:.74},{t:65.245,type:"echo",lane:7,dir:1,power:1.09},{t:67.376,type:"bossTick",hand:"slow",power:.85},{t:67.376,type:"pulse",power:.74},{t:67.91,type:"motion",style:"orbit",amp:.16,speed:1.05,pitch:.08},{t:68.975,type:"burst",lane:6,power:1.2},{t:68.995,type:"wind",power:1.3},{t:69.005,type:"vibe",power:.86},{t:69.536,type:"bossTick",hand:"fast",power:.85},{t:69.536,type:"pulse",power:.74},{t:69.566,type:"echo",lane:0,dir:-1,power:1.09},{t:70.069,type:"bossCamera",pos:[0,6.7,15.4],look:[0,3.46,-9],fov:54,roll:0,dur:.7},{t:70.069,type:"bossGlitch",power:1.2},{t:70.6,type:"burst",lane:4,power:1.2},{t:70.62,type:"wind",power:1.3},{t:71.696,type:"bossTick",hand:"slow",power:.94},{t:71.696,type:"pulse",power:.83},{t:71.966,type:"pulse",power:.85},{t:73.856,type:"bossTick",hand:"fast",power:.94},{t:73.856,type:"pulse",power:.83},{t:73.886,type:"echo",lane:7,dir:1,power:1.19},{t:74.39,type:"bossCamera",pos:[-6,6.9,14.6],look:[3,3.61,-10],fov:54,roll:.035,dur:.85},{t:75.732,type:"burst",lane:2,power:1.2},{t:76.017,type:"bossTick",hand:"slow",power:.94},{t:76.017,type:"pulse",power:.83},{t:78.177,type:"bossTick",hand:"fast",power:.94},{t:78.177,type:"pulse",power:.83},{t:78.207,type:"echo",lane:0,dir:-1,power:1.19},{t:78.71,type:"bossCamera",pos:[6,7.19,15],look:[-3,3.67,-10],fov:54,roll:-.04,dur:.85},{t:79.575,type:"burst",lane:4,power:1.2},{t:79.595,type:"wind",power:1.3},{t:79.605,type:"vibe",power:.9},{t:80.337,type:"bossTick",hand:"slow",power:.94},{t:80.337,type:"pulse",power:.83},{t:80.607,type:"pulse",power:.85},{t:82.497,type:"bossTick",hand:"fast",power:.94},{t:82.497,type:"pulse",power:.83},{t:82.527,type:"echo",lane:7,dir:1,power:1.19},{t:83.03,type:"bossCamera",pos:[0,5.55,13.8],look:[0,3.27,-8],fov:54,roll:.02,dur:.85},{t:84.37,type:"burst",lane:1,power:1.2},{t:84.39,type:"wind",power:1.3},{t:84.657,type:"bossTick",hand:"slow",power:.94},{t:84.657,type:"pulse",power:.83},{t:86.818,type:"bossTick",hand:"fast",power:.94},{t:86.818,type:"pulse",power:.83},{t:86.848,type:"echo",lane:0,dir:-1,power:1.19},{t:87.35,type:"bossCamera",pos:[-8,7.23,14.2],look:[4,4,-9],fov:54,roll:-.03,dur:.65},{t:88.282,type:"burst",lane:3,power:1.2},{t:88.978,type:"bossTick",hand:"slow",power:.94},{t:88.978,type:"pulse",power:.83},{t:89.248,type:"pulse",power:.85},{t:89.449,type:"bossCamera",pos:[0,8.8,20.2],look:[0,5.34,-2],fov:49.91,roll:0,dur:.9},{t:89.449,type:"bossGlitch",power:.9},{t:90.035,type:"burst",lane:2,power:1.2},{t:90.055,type:"wind",power:1.3},{t:90.065,type:"vibe",power:1.15},{t:91.138,type:"bossTick",hand:"fast",power:.53},{t:91.138,type:"pulse",power:.41},{t:91.168,type:"echo",lane:7,dir:1,power:.71},{t:93.298,type:"bossTick",hand:"slow",power:.53},{t:93.298,type:"pulse",power:.41},{t:95.459,type:"bossTick",hand:"fast",power:.53},{t:95.459,type:"pulse",power:.41},{t:95.489,type:"echo",lane:0,dir:-1,power:.71},{t:97.438,type:"bossCamera",pos:[-8,9.6,18.4],look:[4,5.19,-6],fov:51.91,roll:.025,dur:1.1},{t:97.619,type:"bossTick",hand:"slow",power:.53},{t:97.619,type:"pulse",power:.41},{t:99.779,type:"bossTick",hand:"fast",power:.53},{t:99.779,type:"pulse",power:.41},{t:99.809,type:"echo",lane:7,dir:1,power:.71},{t:101.939,type:"bossTick",hand:"slow",power:.53},{t:101.939,type:"pulse",power:.41},{t:104.099,type:"bossTick",hand:"fast",power:.53},{t:104.099,type:"pulse",power:.41},{t:104.129,type:"echo",lane:0,dir:-1,power:.71},{t:105.429,type:"bossCamera",pos:[0,7.16,16],look:[0,4.01,-6],fov:54,roll:-.03,dur:.55},{t:105.429,type:"bossGlitch",power:.75},{t:106.26,type:"bossTick",hand:"slow",power:.88},{t:106.26,type:"pulse",power:.77},{t:106.53,type:"pulse",power:.85},{t:107.323,type:"burst",lane:5,power:1.2},{t:107.509,type:"bossCamera",pos:[0,6.7,15.4],look:[0,3.6,-8],fov:54,roll:.02,dur:.6},{t:107.509,type:"bossGlitch",power:1.15},{t:108.42,type:"bossTick",hand:"fast",power:.97},{t:108.42,type:"pulse",power:.86},{t:110.58,type:"bossTick",hand:"slow",power:.97},{t:110.58,type:"pulse",power:.86},{t:111.829,type:"bossCamera",pos:[-7,6.9,14.2],look:[0,3.82,-9],fov:54,roll:-.04,dur:.9},{t:111.829,type:"motion",style:"orbit",amp:.16,speed:1.05,pitch:.08},{t:112.74,type:"bossTick",hand:"fast",power:.97},{t:112.74,type:"pulse",power:.86},{t:114.9,type:"bossTick",hand:"slow",power:.97},{t:114.9,type:"pulse",power:.86},{t:115.17,type:"pulse",power:.85},{t:116.149,type:"bossCamera",pos:[5,5.7,13.2],look:[0,3.26,-10],fov:54,roll:.045,dur:.9},{t:117.061,type:"bossTick",hand:"fast",power:.97},{t:117.061,type:"pulse",power:.86},{t:119.221,type:"bossTick",hand:"slow",power:.97},{t:119.221,type:"pulse",power:.86},{t:120.469,type:"bossCamera",pos:[0,4.78,12.6],look:[0,2.7,-12],fov:54,roll:-.02,dur:.9},{t:121.381,type:"bossTick",hand:"fast",power:.97},{t:121.381,type:"pulse",power:.86},{t:123.541,type:"bossTick",hand:"slow",power:.97},{t:123.541,type:"pulse",power:.86},{t:123.811,type:"pulse",power:.85},{t:123.829,type:"bossCamera",pos:[0,5.69,14],look:[0,3.1,-10],fov:54,roll:.03,dur:.7},{t:123.829,type:"bossGlitch",power:1.25},{t:125.702,type:"bossTick",hand:"fast",power:1.02},{t:125.702,type:"pulse",power:.91},{t:127.862,type:"bossTick",hand:"slow",power:1.02},{t:127.862,type:"pulse",power:.91},{t:128.149,type:"bossCamera",pos:[-8,6.41,13],look:[0,3.68,-10],fov:54,roll:-.045,dur:.95},{t:128.511,type:"burst",lane:1,power:1.2},{t:128.531,type:"wind",power:1.3},{t:128.541,type:"vibe",power:.89},{t:130.022,type:"bossTick",hand:"fast",power:1.02},{t:130.022,type:"pulse",power:.91},{t:130.31,type:"motion",style:"clock",amp:.2,speed:1.2,pitch:.1},{t:132.182,type:"bossTick",hand:"slow",power:1.02},{t:132.182,type:"pulse",power:.91},{t:132.226,type:"burst",lane:0,power:1.2},{t:132.246,type:"wind",power:1.3},{t:132.256,type:"vibe",power:.85},{t:132.452,type:"pulse",power:.85},{t:132.469,type:"bossCamera",pos:[8,6.03,12.4],look:[0,3.59,-10],fov:54,roll:.05,dur:.95},{t:134.342,type:"bossTick",hand:"fast",power:1.02},{t:134.342,type:"pulse",power:.91},{t:136.503,type:"bossTick",hand:"slow",power:1.02},{t:136.503,type:"pulse",power:.91},{t:136.789,type:"bossCamera",pos:[0,3.96,11.2],look:[0,2.53,-12],fov:54,roll:-.03,dur:.9},{t:137.149,type:"burst",lane:2,power:1.2},{t:138.663,type:"bossTick",hand:"fast",power:1.02},{t:138.663,type:"pulse",power:.91},{t:140.823,type:"bossTick",hand:"slow",power:1.02},{t:140.823,type:"pulse",power:.91},{t:141.093,type:"pulse",power:.85},{t:141.829,type:"bossCamera",pos:[0,9,19],look:[0,5.69,0],fov:52.39,roll:0,dur:1.2},{t:141.829,type:"bossGlitch",power:.7},{t:141.829,type:"bossPhase",mode:"outro"},{t:142.983,type:"bossTick",hand:"fast",power:.46},{t:142.983,type:"pulse",power:.33},{t:143.013,type:"echo",lane:7,dir:1,power:.63},{t:145.143,type:"bossTick",hand:"slow",power:.46},{t:145.143,type:"pulse",power:.33},{t:147.304,type:"bossTick",hand:"fast",power:.46},{t:147.304,type:"pulse",power:.33},{t:147.334,type:"echo",lane:0,dir:-1,power:.63}],ghosts:[{t:28.542,lane:0,type:"sweep"},{t:28.622,lane:1,type:"sweep"},{t:28.702,lane:6,type:"sweep"},{t:28.782,lane:7,type:"sweep"},{t:33.492,lane:0,type:"bounce"},{t:33.622,lane:1,type:"bounce"},{t:33.752,lane:6,type:"bounce"},{t:33.882,lane:7,type:"bounce"},{t:48.542,lane:0,type:"sweep"},{t:48.622,lane:7,type:"sweep"},{t:53.492,lane:0,type:"bounce"},{t:53.622,lane:7,type:"bounce"},{t:61.542,lane:0,type:"sweep"},{t:61.622,lane:7,type:"sweep"},{t:63.64,lane:0,type:"sweep"},{t:63.72,lane:7,type:"sweep"},{t:66.492,lane:0,type:"bounce"},{t:66.622,lane:7,type:"bounce"},{t:67.91,lane:0,type:"bounce"},{t:68.04,lane:7,type:"bounce"},{t:70.119,lane:0,type:"sweep"},{t:70.199,lane:7,type:"sweep"},{t:74.389,lane:0,type:"bounce"},{t:74.519,lane:7,type:"bounce"},{t:89.499,lane:0,type:"sweep"},{t:89.579,lane:1,type:"sweep"},{t:89.659,lane:6,type:"sweep"},{t:89.739,lane:7,type:"sweep"},{t:93.769,lane:0,type:"bounce"},{t:93.899,lane:1,type:"bounce"},{t:94.029,lane:6,type:"bounce"},{t:94.159,lane:7,type:"bounce"},{t:105.479,lane:0,type:"sweep"},{t:105.559,lane:7,type:"sweep"},{t:109.749,lane:0,type:"bounce"},{t:109.879,lane:7,type:"bounce"},{t:141.879,lane:0,type:"sweep"},{t:141.959,lane:1,type:"sweep"},{t:142.039,lane:6,type:"sweep"},{t:142.119,lane:7,type:"sweep"},{t:146.149,lane:0,type:"bounce"},{t:146.279,lane:1,type:"bounce"},{t:146.409,lane:6,type:"bounce"},{t:146.539,lane:7,type:"bounce"}]},Oc=[{id:"cryout",title:"CRYOUT",shortTitle:"CRYOUT",artist:"ORIGINAL TRACK",bpm:100,duration:138.1,audio:"./audio/cryout.mp3",difficulty:"ADVANCED",laneLabel:"4 · 6 · 8",blurb:"Neon field • 360° camera • 8-lane climax",accent:"#5ee7ff",chart:Sf,fadeStart:131.4,fadeEnd:133.4},{id:"world",title:"WORLD YEARNING FOR AN END",shortTitle:"WORLD YEARNING",artist:"ORIGINAL TRACK",bpm:120,duration:143.47,audio:"./audio/world-yearning.mp3",difficulty:"HARD",laneLabel:"4 · 6",blurb:"City intro • diagonal lanes • thumb-hard patterns",accent:"#ffb45e",chart:bf,fadeStart:140.8,fadeEnd:142.9},{id:"chronostasis",title:"CHRONOSTASIS",shortTitle:"CHRONOSTASIS",artist:"ORIGINAL TRACK",bpm:99.4,duration:142.1,audio:"./audio/chronostasis.mp3",difficulty:"EXPERT",laneLabel:"4 · 6",blurb:"Clockwork skyline • frozen time • swinging pendulum",accent:"#ffd166",chart:wf,fadeStart:138.4,fadeEnd:140},{id:"untouchable",title:"THE UNTOUCHABLE OF f RA IA'S LAND",shortTitle:"THE UNTOUCHABLE",artist:"f RA IA",bpm:111.1,bpmLabel:"111 / 96 BPM",duration:147.54,audio:"./audio/untouchable.mp3",difficulty:"BOSS",laneLabel:"4 · 6 · 8",blurb:"Gothic nave • cathedral clock • free-flying notes",accent:"#ff3b5c",chart:Tf,boss:!0,fadeStart:139.8,fadeEnd:141.8}],Ef="cryout",qo=Object.fromEntries(Oc.map(i=>[i.id,i]));const Zo="180",Af=0,El=1,Cf=2,Bc=1,Rf=2,Kn=3,xi=0,dn=1,$n=2,Qn=0,vn=1,Tt=2,Al=3,Cl=4,Pf=5,Di=100,Lf=101,Df=102,If=103,Uf=104,Nf=200,Ff=201,kf=202,Of=203,Ks=204,$s=205,Bf=206,zf=207,Gf=208,Hf=209,Vf=210,Wf=211,Xf=212,Yf=213,qf=214,js=0,Js=1,Qs=2,ha=3,eo=4,to=5,no=6,io=7,zc=0,Zf=1,Kf=2,_i=0,Gc=1,Hc=2,Vc=3,Ko=4,Wc=5,Xc=6,Yc=7,qc=300,da=301,pa=302,ao=303,ro=304,Jr=306,ma=1e3,gi=1001,so=1002,Dn=1003,$f=1004,sr=1005,kn=1006,ps=1007,Ui=1008,ni=1009,Zc=1010,Kc=1011,Ba=1012,$o=1013,Fi=1014,Jn=1015,ei=1016,jo=1017,Jo=1018,za=1020,$c=35902,jc=35899,Jc=1021,Qc=1022,Pn=1023,Ga=1026,Ha=1027,eu=1028,Qo=1029,tu=1030,el=1031,tl=1033,Br=33776,zr=33777,Gr=33778,Hr=33779,oo=35840,lo=35841,co=35842,uo=35843,fo=36196,ho=37492,po=37496,mo=37808,go=37809,_o=37810,vo=37811,yo=37812,xo=37813,Mo=37814,So=37815,bo=37816,wo=37817,To=37818,Eo=37819,Ao=37820,Co=37821,Ro=36492,Po=36494,Lo=36495,Do=36283,Io=36284,Uo=36285,No=36286,jf=3200,Jf=3201,Qf=0,eh=1,mi="",hn="srgb",ga="srgb-linear",Xr="linear",At="srgb",Vi=7680,Rl=519,th=512,nh=513,ih=514,nu=515,ah=516,rh=517,sh=518,oh=519,Fo=35044,Pl="300 es",On=2e3,Yr=2001;class Ma{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ms=Math.PI/180,ko=180/Math.PI;function vi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[i&255]+en[i>>8&255]+en[i>>16&255]+en[i>>24&255]+"-"+en[e&255]+en[e>>8&255]+"-"+en[e>>16&15|64]+en[e>>24&255]+"-"+en[t&63|128]+en[t>>8&255]+"-"+en[t>>16&255]+en[t>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function ht(i,e,t){return Math.max(e,Math.min(t,i))}function lh(i,e){return(i%e+e)%e}function gs(i,e,t){return(1-t)*i+t*e}function Fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class $e{constructor(e=0,t=0){$e.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*a+e.x,this.y=r*a+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ya{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,r,s,o){let c=n[a+0],l=n[a+1],u=n[a+2],f=n[a+3];const d=r[s+0],p=r[s+1],_=r[s+2],x=r[s+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(f!==x||c!==d||l!==p||u!==_){let m=1-o;const h=c*d+l*p+u*_+f*x,E=h>=0?1:-1,T=1-h*h;if(T>Number.EPSILON){const R=Math.sqrt(T),C=Math.atan2(R,h*E);m=Math.sin(m*C)/R,o=Math.sin(o*C)/R}const w=o*E;if(c=c*m+d*w,l=l*m+p*w,u=u*m+_*w,f=f*m+x*w,m===1-o){const R=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=R,l*=R,u*=R,f*=R}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,a,r,s){const o=n[a],c=n[a+1],l=n[a+2],u=n[a+3],f=r[s],d=r[s+1],p=r[s+2],_=r[s+3];return e[t]=o*_+u*f+c*p-l*d,e[t+1]=c*_+u*d+l*f-o*p,e[t+2]=l*_+u*p+o*d-c*f,e[t+3]=u*_-o*f-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(a/2),f=o(r/2),d=c(n/2),p=c(a/2),_=c(r/2);switch(s){case"XYZ":this._x=d*u*f+l*p*_,this._y=l*p*f-d*u*_,this._z=l*u*_+d*p*f,this._w=l*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+l*p*_,this._y=l*p*f-d*u*_,this._z=l*u*_-d*p*f,this._w=l*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-l*p*_,this._y=l*p*f+d*u*_,this._z=l*u*_+d*p*f,this._w=l*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-l*p*_,this._y=l*p*f+d*u*_,this._z=l*u*_-d*p*f,this._w=l*u*f+d*p*_;break;case"YZX":this._x=d*u*f+l*p*_,this._y=l*p*f+d*u*_,this._z=l*u*_-d*p*f,this._w=l*u*f-d*p*_;break;case"XZY":this._x=d*u*f-l*p*_,this._y=l*p*f-d*u*_,this._z=l*u*_+d*p*f,this._w=l*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],r=t[8],s=t[1],o=t[5],c=t[9],l=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-c)*p,this._y=(r-l)*p,this._z=(s-a)*p}else if(n>o&&n>f){const p=2*Math.sqrt(1+n-o-f);this._w=(u-c)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+l)/p}else if(o>f){const p=2*Math.sqrt(1+o-n-f);this._w=(r-l)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(c+u)/p}else{const p=2*Math.sqrt(1+f-n-o);this._w=(s-a)/p,this._x=(r+l)/p,this._y=(c+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,r=e._z,s=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+s*o+a*l-r*c,this._y=a*u+s*c+r*o-n*l,this._z=r*u+s*l+n*c-a*o,this._w=s*u-n*o-a*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+a*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=a,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*a+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),f=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=s*f+this._w*d,this._x=n*f+this._x*d,this._y=a*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,n=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ll.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ll.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*a,this.y=r[1]*t+r[4]*n+r[7]*a,this.z=r[2]*t+r[5]*n+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,r=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*a-o*n),u=2*(o*t-r*a),f=2*(r*n-s*t);return this.x=t+c*l+s*f-o*u,this.y=n+c*u+o*l-r*f,this.z=a+c*f+r*u-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a,this.y=r[1]*t+r[5]*n+r[9]*a,this.z=r[2]*t+r[6]*n+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,r=e.z,s=t.x,o=t.y,c=t.z;return this.x=a*c-r*o,this.y=r*s-n*c,this.z=n*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return _s.copy(this).projectOnVector(e),this.sub(_s)}reflect(e){return this.sub(_s.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _s=new N,Ll=new Ya;class nt{constructor(e,t,n,a,r,s,o,c,l){nt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,c,l)}set(e,t,n,a,r,s,o,c,l){const u=this.elements;return u[0]=e,u[1]=a,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=s,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],u=n[4],f=n[7],d=n[2],p=n[5],_=n[8],x=a[0],m=a[3],h=a[6],E=a[1],T=a[4],w=a[7],R=a[2],C=a[5],P=a[8];return r[0]=s*x+o*E+c*R,r[3]=s*m+o*T+c*C,r[6]=s*h+o*w+c*P,r[1]=l*x+u*E+f*R,r[4]=l*m+u*T+f*C,r[7]=l*h+u*w+f*P,r[2]=d*x+p*E+_*R,r[5]=d*m+p*T+_*C,r[8]=d*h+p*w+_*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*s*u-t*o*l-n*r*u+n*o*c+a*r*l-a*s*c}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=u*s-o*l,d=o*c-u*r,p=l*r-s*c,_=t*f+n*d+a*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(a*l-u*n)*x,e[2]=(o*n-a*s)*x,e[3]=d*x,e[4]=(u*t-a*c)*x,e[5]=(a*r-o*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(s*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,r,s,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-a*l,a*c,-a*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(vs.makeScale(e,t)),this}rotate(e){return this.premultiply(vs.makeRotation(-e)),this}translate(e,t){return this.premultiply(vs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vs=new nt;function iu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ch(){const i=qr("canvas");return i.style.display="block",i}const Dl={};function Va(i){i in Dl||(Dl[i]=!0,console.warn(i))}function uh(i,e,t){return new Promise(function(n,a){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const Il=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ul=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fh(){const i={enabled:!0,workingColorSpace:ga,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===At&&(a.r=ti(a.r),a.g=ti(a.g),a.b=ti(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===At&&(a.r=ca(a.r),a.g=ca(a.g),a.b=ca(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===mi?Xr:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Va("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Va("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ga]:{primaries:e,whitePoint:n,transfer:Xr,toXYZ:Il,fromXYZ:Ul,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:n,transfer:At,toXYZ:Il,fromXYZ:Ul,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),i}const gt=fh();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ca(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Wi;class hh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Wi===void 0&&(Wi=qr("canvas")),Wi.width=e.width,Wi.height=e.height;const a=Wi.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=Wi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=qr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=ti(r[s]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dh=0;class nl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(ys(a[s].image)):r.push(ys(a[s]))}else r=ys(a);n.url=r}return t||(e.images[this.uuid]=n),n}}function ys(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?hh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ph=0;const xs=new N;class cn extends Ma{constructor(e=cn.DEFAULT_IMAGE,t=cn.DEFAULT_MAPPING,n=gi,a=gi,r=kn,s=Ui,o=Pn,c=ni,l=cn.DEFAULT_ANISOTROPY,u=mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=vi(),this.name="",this.source=new nl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new $e(0,0),this.repeat=new $e(1,1),this.center=new $e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(xs).x}get height(){return this.source.getSize(xs).y}get depth(){return this.source.getSize(xs).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==qc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ma:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case so:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ma:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case so:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=qc;cn.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,n=0,a=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,r;const c=e.elements,l=c[0],u=c[4],f=c[8],d=c[1],p=c[5],_=c[9],x=c[2],m=c[6],h=c[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(l+1)/2,w=(p+1)/2,R=(h+1)/2,C=(u+d)/4,P=(f+x)/4,F=(_+m)/4;return T>w&&T>R?T<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(T),a=C/n,r=P/n):w>R?w<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(w),n=C/a,r=F/a):R<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(R),n=P/r,a=F/r),this.set(n,a,r,t),this}let E=Math.sqrt((m-_)*(m-_)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-_)/E,this.y=(f-x)/E,this.z=(d-u)/E,this.w=Math.acos((l+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ht(this.x,e.x,t.x),this.y=ht(this.y,e.y,t.y),this.z=ht(this.z,e.z,t.z),this.w=ht(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ht(this.x,e,t),this.y=ht(this.y,e,t),this.z=ht(this.z,e,t),this.w=ht(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ht(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mh extends Ma{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const a={width:e,height:t,depth:n.depth},r=new cn(a);this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new nl(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class In extends mh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class au extends cn{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gh extends cn{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qa{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,En):En.fromBufferAttribute(r,s),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Aa),lr.subVectors(this.max,Aa),Xi.subVectors(e.a,Aa),Yi.subVectors(e.b,Aa),qi.subVectors(e.c,Aa),ci.subVectors(Yi,Xi),ui.subVectors(qi,Yi),wi.subVectors(Xi,qi);let t=[0,-ci.z,ci.y,0,-ui.z,ui.y,0,-wi.z,wi.y,ci.z,0,-ci.x,ui.z,0,-ui.x,wi.z,0,-wi.x,-ci.y,ci.x,0,-ui.y,ui.x,0,-wi.y,wi.x,0];return!Ms(t,Xi,Yi,qi,lr)||(t=[1,0,0,0,1,0,0,0,1],!Ms(t,Xi,Yi,qi,lr))?!1:(cr.crossVectors(ci,ui),t=[cr.x,cr.y,cr.z],Ms(t,Xi,Yi,qi,lr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Wn=[new N,new N,new N,new N,new N,new N,new N,new N],En=new N,or=new qa,Xi=new N,Yi=new N,qi=new N,ci=new N,ui=new N,wi=new N,Aa=new N,lr=new N,cr=new N,Ti=new N;function Ms(i,e,t,n,a){for(let r=0,s=i.length-3;r<=s;r+=3){Ti.fromArray(i,r);const o=a.x*Math.abs(Ti.x)+a.y*Math.abs(Ti.y)+a.z*Math.abs(Ti.z),c=e.dot(Ti),l=t.dot(Ti),u=n.dot(Ti);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const _h=new qa,Ca=new N,Ss=new N;class Za{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_h.setFromPoints(e).getCenter(n);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ca.subVectors(e,this.center);const t=Ca.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Ca,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ss.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ca.copy(e.center).add(Ss)),this.expandByPoint(Ca.copy(e.center).sub(Ss))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Xn=new N,bs=new N,ur=new N,fi=new N,ws=new N,fr=new N,Ts=new N;class il{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){bs.copy(e).add(t).multiplyScalar(.5),ur.copy(t).sub(e).normalize(),fi.copy(this.origin).sub(bs);const r=e.distanceTo(t)*.5,s=-this.direction.dot(ur),o=fi.dot(this.direction),c=-fi.dot(ur),l=fi.lengthSq(),u=Math.abs(1-s*s);let f,d,p,_;if(u>0)if(f=s*c-o,d=s*o-c,_=r*u,f>=0)if(d>=-_)if(d<=_){const x=1/u;f*=x,d*=x,p=f*(f+s*d+2*o)+d*(s*f+d+2*c)+l}else d=r,f=Math.max(0,-(s*d+o)),p=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(s*d+o)),p=-f*f+d*(d+2*c)+l;else d<=-_?(f=Math.max(0,-(-s*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+d*(d+2*c)+l):d<=_?(f=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(f=Math.max(0,-(s*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+d*(d+2*c)+l);else d=s>0?-r:r,f=Math.max(0,-(s*d+o)),p=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(bs).addScaledVector(ur,d),p}intersectSphere(e,t){Xn.subVectors(e.center,this.origin);const n=Xn.dot(this.direction),a=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,r,s,o,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,a=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,a=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,s=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,s=(e.min.y-d.y)*u),n>s||r>a||((r>n||isNaN(n))&&(n=r),(s<a||isNaN(a))&&(a=s),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>a)||((o>n||n!==n)&&(n=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,a,r){ws.subVectors(t,e),fr.subVectors(n,e),Ts.crossVectors(ws,fr);let s=this.direction.dot(Ts),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;fi.subVectors(this.origin,e);const c=o*this.direction.dot(fr.crossVectors(fi,fr));if(c<0)return null;const l=o*this.direction.dot(ws.cross(fi));if(l<0||c+l>s)return null;const u=-o*fi.dot(Ts);return u<0?null:this.at(u/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,t,n,a,r,s,o,c,l,u,f,d,p,_,x,m){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,c,l,u,f,d,p,_,x,m)}set(e,t,n,a,r,s,o,c,l,u,f,d,p,_,x,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=a,h[1]=r,h[5]=s,h[9]=o,h[13]=c,h[2]=l,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=x,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),s=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(a),l=Math.sin(a),u=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=s*u,p=s*f,_=o*u,x=o*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=p+_*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=_+p*l,t[10]=s*c}else if(e.order==="YXZ"){const d=c*u,p=c*f,_=l*u,x=l*f;t[0]=d+x*o,t[4]=_*o-p,t[8]=s*l,t[1]=s*f,t[5]=s*u,t[9]=-o,t[2]=p*o-_,t[6]=x+d*o,t[10]=s*c}else if(e.order==="ZXY"){const d=c*u,p=c*f,_=l*u,x=l*f;t[0]=d-x*o,t[4]=-s*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=s*u,t[9]=x-d*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const d=s*u,p=s*f,_=o*u,x=o*f;t[0]=c*u,t[4]=_*l-p,t[8]=d*l+x,t[1]=c*f,t[5]=x*l+d,t[9]=p*l-_,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const d=s*c,p=s*l,_=o*c,x=o*l;t[0]=c*u,t[4]=x-d*f,t[8]=_*f+p,t[1]=f,t[5]=s*u,t[9]=-o*u,t[2]=-l*u,t[6]=p*f+_,t[10]=d-x*f}else if(e.order==="XZY"){const d=s*c,p=s*l,_=o*c,x=o*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=d*f+x,t[5]=s*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*u,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vh,e,yh)}lookAt(e,t,n){const a=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),hi.crossVectors(n,gn),hi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),hi.crossVectors(n,gn)),hi.normalize(),hr.crossVectors(gn,hi),a[0]=hi.x,a[4]=hr.x,a[8]=gn.x,a[1]=hi.y,a[5]=hr.y,a[9]=gn.y,a[2]=hi.z,a[6]=hr.z,a[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],u=n[1],f=n[5],d=n[9],p=n[13],_=n[2],x=n[6],m=n[10],h=n[14],E=n[3],T=n[7],w=n[11],R=n[15],C=a[0],P=a[4],F=a[8],b=a[12],M=a[1],I=a[5],W=a[9],J=a[13],re=a[2],te=a[6],ne=a[10],le=a[14],$=a[3],ye=a[7],Ee=a[11],Ie=a[15];return r[0]=s*C+o*M+c*re+l*$,r[4]=s*P+o*I+c*te+l*ye,r[8]=s*F+o*W+c*ne+l*Ee,r[12]=s*b+o*J+c*le+l*Ie,r[1]=u*C+f*M+d*re+p*$,r[5]=u*P+f*I+d*te+p*ye,r[9]=u*F+f*W+d*ne+p*Ee,r[13]=u*b+f*J+d*le+p*Ie,r[2]=_*C+x*M+m*re+h*$,r[6]=_*P+x*I+m*te+h*ye,r[10]=_*F+x*W+m*ne+h*Ee,r[14]=_*b+x*J+m*le+h*Ie,r[3]=E*C+T*M+w*re+R*$,r[7]=E*P+T*I+w*te+R*ye,r[11]=E*F+T*W+w*ne+R*Ee,r[15]=E*b+T*J+w*le+R*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[12],s=e[1],o=e[5],c=e[9],l=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],h=e[15];return _*(+r*c*f-a*l*f-r*o*d+n*l*d+a*o*p-n*c*p)+x*(+t*c*p-t*l*d+r*s*d-a*s*p+a*l*u-r*c*u)+m*(+t*l*f-t*o*p-r*s*f+n*s*p+r*o*u-n*l*u)+h*(-a*o*u-t*c*f+t*o*d+a*s*f-n*s*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],h=e[15],E=f*m*l-x*d*l+x*c*p-o*m*p-f*c*h+o*d*h,T=_*d*l-u*m*l-_*c*p+s*m*p+u*c*h-s*d*h,w=u*x*l-_*f*l+_*o*p-s*x*p-u*o*h+s*f*h,R=_*f*c-u*x*c-_*o*d+s*x*d+u*o*m-s*f*m,C=t*E+n*T+a*w+r*R;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/C;return e[0]=E*P,e[1]=(x*d*r-f*m*r-x*a*p+n*m*p+f*a*h-n*d*h)*P,e[2]=(o*m*r-x*c*r+x*a*l-n*m*l-o*a*h+n*c*h)*P,e[3]=(f*c*r-o*d*r-f*a*l+n*d*l+o*a*p-n*c*p)*P,e[4]=T*P,e[5]=(u*m*r-_*d*r+_*a*p-t*m*p-u*a*h+t*d*h)*P,e[6]=(_*c*r-s*m*r-_*a*l+t*m*l+s*a*h-t*c*h)*P,e[7]=(s*d*r-u*c*r+u*a*l-t*d*l-s*a*p+t*c*p)*P,e[8]=w*P,e[9]=(_*f*r-u*x*r-_*n*p+t*x*p+u*n*h-t*f*h)*P,e[10]=(s*x*r-_*o*r+_*n*l-t*x*l-s*n*h+t*o*h)*P,e[11]=(u*o*r-s*f*r-u*n*l+t*f*l+s*n*p-t*o*p)*P,e[12]=R*P,e[13]=(u*x*a-_*f*a+_*n*d-t*x*d-u*n*m+t*f*m)*P,e[14]=(_*o*a-s*x*a-_*n*c+t*x*c+s*n*m-t*o*m)*P,e[15]=(s*f*a-u*o*a+u*n*c-t*f*c-s*n*d+t*o*d)*P,this}scale(e){const t=this.elements,n=e.x,a=e.y,r=e.z;return t[0]*=n,t[4]*=a,t[8]*=r,t[1]*=n,t[5]*=a,t[9]*=r,t[2]*=n,t[6]*=a,t[10]*=r,t[3]*=n,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),r=1-n,s=e.x,o=e.y,c=e.z,l=r*s,u=r*o;return this.set(l*s+n,l*o-a*c,l*c+a*o,0,l*o+a*c,u*o+n,u*c-a*s,0,l*c-a*o,u*c+a*s,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,r,s){return this.set(1,n,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,r=t._x,s=t._y,o=t._z,c=t._w,l=r+r,u=s+s,f=o+o,d=r*l,p=r*u,_=r*f,x=s*u,m=s*f,h=o*f,E=c*l,T=c*u,w=c*f,R=n.x,C=n.y,P=n.z;return a[0]=(1-(x+h))*R,a[1]=(p+w)*R,a[2]=(_-T)*R,a[3]=0,a[4]=(p-w)*C,a[5]=(1-(d+h))*C,a[6]=(m+E)*C,a[7]=0,a[8]=(_+T)*P,a[9]=(m-E)*P,a[10]=(1-(d+x))*P,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let r=Zi.set(a[0],a[1],a[2]).length();const s=Zi.set(a[4],a[5],a[6]).length(),o=Zi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),e.x=a[12],e.y=a[13],e.z=a[14],An.copy(this);const l=1/r,u=1/s,f=1/o;return An.elements[0]*=l,An.elements[1]*=l,An.elements[2]*=l,An.elements[4]*=u,An.elements[5]*=u,An.elements[6]*=u,An.elements[8]*=f,An.elements[9]*=f,An.elements[10]*=f,t.setFromRotationMatrix(An),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,a,r,s,o=On,c=!1){const l=this.elements,u=2*r/(t-e),f=2*r/(n-a),d=(t+e)/(t-e),p=(n+a)/(n-a);let _,x;if(c)_=r/(s-r),x=s*r/(s-r);else if(o===On)_=-(s+r)/(s-r),x=-2*s*r/(s-r);else if(o===Yr)_=-s/(s-r),x=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,a,r,s,o=On,c=!1){const l=this.elements,u=2/(t-e),f=2/(n-a),d=-(t+e)/(t-e),p=-(n+a)/(n-a);let _,x;if(c)_=1/(s-r),x=s/(s-r);else if(o===On)_=-2/(s-r),x=-(s+r)/(s-r);else if(o===Yr)_=-1/(s-r),x=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Zi=new N,An=new Nt,vh=new N(0,0,0),yh=new N(1,1,1),hi=new N,hr=new N,gn=new N,Nl=new Nt,Fl=new Ya;class ii{constructor(e=0,t=0,n=0,a=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],c=a[1],l=a[5],u=a[9],f=a[2],d=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ht(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ht(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(ht(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ht(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Nl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Nl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Fl.setFromEuler(this),this.setFromQuaternion(Fl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class ru{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xh=0;const kl=new N,Ki=new Ya,Yn=new Nt,dr=new N,Ra=new N,Mh=new N,Sh=new Ya,Ol=new N(1,0,0),Bl=new N(0,1,0),zl=new N(0,0,1),Gl={type:"added"},bh={type:"removed"},$i={type:"childadded",child:null},Es={type:"childremoved",child:null};class an extends Ma{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new N,t=new ii,n=new Ya,a=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Nt},normalMatrix:{value:new nt}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ru,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(e,t){return Ki.setFromAxisAngle(e,t),this.quaternion.premultiply(Ki),this}rotateX(e){return this.rotateOnAxis(Ol,e)}rotateY(e){return this.rotateOnAxis(Bl,e)}rotateZ(e){return this.rotateOnAxis(zl,e)}translateOnAxis(e,t){return kl.copy(e).applyQuaternion(this.quaternion),this.position.add(kl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ol,e)}translateY(e){return this.translateOnAxis(Bl,e)}translateZ(e){return this.translateOnAxis(zl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?dr.copy(e):dr.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(Ra,dr,this.up):Yn.lookAt(dr,Ra,this.up),this.quaternion.setFromRotationMatrix(Yn),a&&(Yn.extractRotation(a.matrixWorld),Ki.setFromRotationMatrix(Yn),this.quaternion.premultiply(Ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gl),$i.child=e,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bh),Es.child=e,this.dispatchEvent(Es),Es.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Yn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Yn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gl),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,e,Mh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,Sh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(r(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),u=s(e.images),f=s(e.shapes),d=s(e.skeletons),p=s(e.animations),_=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=a,n;function s(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}an.DEFAULT_UP=new N(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Cn=new N,qn=new N,As=new N,Zn=new N,ji=new N,Ji=new N,Hl=new N,Cs=new N,Rs=new N,Ps=new N,Ls=new Bt,Ds=new Bt,Is=new Bt;class Sn{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Cn.subVectors(e,t),a.cross(Cn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,n,a,r){Cn.subVectors(a,t),qn.subVectors(n,t),As.subVectors(e,t);const s=Cn.dot(Cn),o=Cn.dot(qn),c=Cn.dot(As),l=qn.dot(qn),u=qn.dot(As),f=s*l-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,p=(l*c-o*u)*d,_=(s*u-o*c)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(e,t,n,a,r,s,o,c){return this.getBarycoord(e,t,n,a,Zn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Zn.x),c.addScaledVector(s,Zn.y),c.addScaledVector(o,Zn.z),c)}static getInterpolatedAttribute(e,t,n,a,r,s){return Ls.setScalar(0),Ds.setScalar(0),Is.setScalar(0),Ls.fromBufferAttribute(e,t),Ds.fromBufferAttribute(e,n),Is.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Ls,r.x),s.addScaledVector(Ds,r.y),s.addScaledVector(Is,r.z),s}static isFrontFacing(e,t,n,a){return Cn.subVectors(n,t),qn.subVectors(e,t),Cn.cross(qn).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),Cn.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,r){return Sn.getInterpolation(e,this.a,this.b,this.c,t,n,a,r)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,r=this.c;let s,o;ji.subVectors(a,n),Ji.subVectors(r,n),Cs.subVectors(e,n);const c=ji.dot(Cs),l=Ji.dot(Cs);if(c<=0&&l<=0)return t.copy(n);Rs.subVectors(e,a);const u=ji.dot(Rs),f=Ji.dot(Rs);if(u>=0&&f<=u)return t.copy(a);const d=c*f-u*l;if(d<=0&&c>=0&&u<=0)return s=c/(c-u),t.copy(n).addScaledVector(ji,s);Ps.subVectors(e,r);const p=ji.dot(Ps),_=Ji.dot(Ps);if(_>=0&&p<=_)return t.copy(r);const x=p*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Ji,o);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return Hl.subVectors(r,a),o=(f-u)/(f-u+(p-_)),t.copy(a).addScaledVector(Hl,o);const h=1/(m+x+d);return s=x*h,o=d*h,t.copy(n).addScaledVector(ji,s).addScaledVector(Ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const su={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},pr={h:0,s:0,l:0};function Us(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=gt.workingColorSpace){if(e=lh(e,1),t=ht(t,0,1),n=ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Us(s,r,e+1/3),this.g=Us(s,r,e),this.b=Us(s,r,e-1/3)}return gt.colorSpaceToWorking(this,a),this}setStyle(e,t=hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const n=su[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return gt.workingToColorSpace(tn.copy(this),e),Math.round(ht(tn.r*255,0,255))*65536+Math.round(ht(tn.g*255,0,255))*256+Math.round(ht(tn.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.workingToColorSpace(tn.copy(this),t);const n=tn.r,a=tn.g,r=tn.b,s=Math.max(n,a,r),o=Math.min(n,a,r);let c,l;const u=(o+s)/2;if(o===s)c=0,l=0;else{const f=s-o;switch(l=u<=.5?f/(s+o):f/(2-s-o),s){case n:c=(a-r)/f+(a<r?6:0);break;case a:c=(r-n)/f+2;break;case r:c=(n-a)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=gt.workingColorSpace){return gt.workingToColorSpace(tn.copy(this),t),e.r=tn.r,e.g=tn.g,e.b=tn.b,e}getStyle(e=hn){gt.workingToColorSpace(tn.copy(this),e);const t=tn.r,n=tn.g,a=tn.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(pr);const n=gs(di.h,pr.h,t),a=gs(di.s,pr.s,t),r=gs(di.l,pr.l,t);return this.setHSL(n,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*a,this.g=r[1]*t+r[4]*n+r[7]*a,this.b=r[2]*t+r[5]*n+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new He;He.NAMES=su;let wh=0;class Bi extends Ma{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wh++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=vn,this.side=xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ks,this.blendDst=$s,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vi,this.stencilZFail=Vi,this.stencilZPass=Vi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==vn&&(n.blending=this.blending),this.side!==xi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ks&&(n.blendSrc=this.blendSrc),this.blendDst!==$s&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ha&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Vi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Vi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const s=[];for(const o in r){const c=r[o];delete c.metadata,s.push(c)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rn extends Bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new N,mr=new $e;let Th=0;class pn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Th++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Fo,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),a=Rt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),a=Rt(a,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Fo&&(e.usage=this.usage),e}}class ou extends pn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class lu extends pn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Vt extends pn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Eh=0;const xn=new Nt,Ns=new an,Qi=new N,_n=new qa,Pa=new qa,Zt=new N;class rn extends Ma{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(iu(e)?lu:ou)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return Ns.lookAt(e),Ns.updateMatrix(),this.applyMatrix4(Ns.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Vt(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Za);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Pa.setFromBufferAttribute(o),this.morphTargetsRelative?(Zt.addVectors(_n.min,Pa.min),_n.expandByPoint(Zt),Zt.addVectors(_n.max,Pa.max),_n.expandByPoint(Zt)):(_n.expandByPoint(Pa.min),_n.expandByPoint(Pa.max))}_n.getCenter(n);let a=0;for(let r=0,s=e.count;r<s;r++)Zt.fromBufferAttribute(e,r),a=Math.max(a,n.distanceToSquared(Zt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Zt.fromBufferAttribute(o,l),c&&(Qi.fromBufferAttribute(e,l),Zt.add(Qi)),a=Math.max(a,n.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new pn(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<n.count;F++)o[F]=new N,c[F]=new N;const l=new N,u=new N,f=new N,d=new $e,p=new $e,_=new $e,x=new N,m=new N;function h(F,b,M){l.fromBufferAttribute(n,F),u.fromBufferAttribute(n,b),f.fromBufferAttribute(n,M),d.fromBufferAttribute(r,F),p.fromBufferAttribute(r,b),_.fromBufferAttribute(r,M),u.sub(l),f.sub(l),p.sub(d),_.sub(d);const I=1/(p.x*_.y-_.x*p.y);isFinite(I)&&(x.copy(u).multiplyScalar(_.y).addScaledVector(f,-p.y).multiplyScalar(I),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(I),o[F].add(x),o[b].add(x),o[M].add(x),c[F].add(m),c[b].add(m),c[M].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let F=0,b=E.length;F<b;++F){const M=E[F],I=M.start,W=M.count;for(let J=I,re=I+W;J<re;J+=3)h(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const T=new N,w=new N,R=new N,C=new N;function P(F){R.fromBufferAttribute(a,F),C.copy(R);const b=o[F];T.copy(b),T.sub(R.multiplyScalar(R.dot(b))).normalize(),w.crossVectors(C,b);const I=w.dot(c[F])<0?-1:1;s.setXYZW(F,T.x,T.y,T.z,I)}for(let F=0,b=E.length;F<b;++F){const M=E[F],I=M.start,W=M.count;for(let J=I,re=I+W;J<re;J+=3)P(e.getX(J+0)),P(e.getX(J+1)),P(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new pn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const a=new N,r=new N,s=new N,o=new N,c=new N,l=new N,u=new N,f=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);a.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,m),u.subVectors(s,r),f.subVectors(a,r),u.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)a.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),u.subVectors(s,r),f.subVectors(a,r),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Zt.fromBufferAttribute(e,t),Zt.normalize(),e.setXYZ(t,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,f=o.normalized,d=new l.constructor(c.length*u);let p=0,_=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*u;for(let h=0;h<u;h++)d[_++]=l[p++]}return new pn(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new rn,n=this.index.array,a=this.attributes;for(const o in a){const c=a[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,f=l.length;u<f;u++){const d=l[u],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const a={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,d=l.length;f<d;f++){const p=l[f];u.push(p.toJSON(e.data))}u.length>0&&(a[c]=u,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const l in a){const u=a[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],f=r[l];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,u=s.length;l<u;l++){const f=s[l];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vl=new Nt,Ei=new il,gr=new Za,Wl=new N,_r=new N,vr=new N,yr=new N,Fs=new N,xr=new N,Xl=new N,Mr=new N;class Kt extends an{constructor(e=new rn,t=new Rn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){xr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],f=r[c];u!==0&&(Fs.fromBufferAttribute(f,e),s?xr.addScaledVector(Fs,u):xr.addScaledVector(Fs.sub(t),u))}t.add(xr)}return t}raycast(e,t){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere),gr.applyMatrix4(r),Ei.copy(e.ray).recast(e.near),!(gr.containsPoint(Ei.origin)===!1&&(Ei.intersectSphere(gr,Wl)===null||Ei.origin.distanceToSquared(Wl)>(e.far-e.near)**2))&&(Vl.copy(r).invert(),Ei.copy(e.ray).applyMatrix4(Vl),!(n.boundingBox!==null&&Ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ei)))}_computeIntersections(e,t,n){let a;const r=this.geometry,s=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,f=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,x=d.length;_<x;_++){const m=d[_],h=s[m.materialIndex],E=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let w=E,R=T;w<R;w+=3){const C=o.getX(w),P=o.getX(w+1),F=o.getX(w+2);a=Sr(this,h,e,n,l,u,f,C,P,F),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const E=o.getX(m),T=o.getX(m+1),w=o.getX(m+2);a=Sr(this,s,e,n,l,u,f,E,T,w),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let _=0,x=d.length;_<x;_++){const m=d[_],h=s[m.materialIndex],E=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let w=E,R=T;w<R;w+=3){const C=w,P=w+1,F=w+2;a=Sr(this,h,e,n,l,u,f,C,P,F),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=_,h=x;m<h;m+=3){const E=m,T=m+1,w=m+2;a=Sr(this,s,e,n,l,u,f,E,T,w),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function Ah(i,e,t,n,a,r,s,o){let c;if(e.side===dn?c=n.intersectTriangle(s,r,a,!0,o):c=n.intersectTriangle(a,r,s,e.side===xi,o),c===null)return null;Mr.copy(o),Mr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Mr);return l<t.near||l>t.far?null:{distance:l,point:Mr.clone(),object:i}}function Sr(i,e,t,n,a,r,s,o,c,l){i.getVertexPosition(o,_r),i.getVertexPosition(c,vr),i.getVertexPosition(l,yr);const u=Ah(i,e,t,n,_r,vr,yr,Xl);if(u){const f=new N;Sn.getBarycoord(Xl,_r,vr,yr,f),a&&(u.uv=Sn.getInterpolatedAttribute(a,o,c,l,f,new $e)),r&&(u.uv1=Sn.getInterpolatedAttribute(r,o,c,l,f,new $e)),s&&(u.normal=Sn.getInterpolatedAttribute(s,o,c,l,f,new N),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new N,materialIndex:0};Sn.getNormal(_r,vr,yr,d.normal),u.face=d,u.barycoord=f}return u}class Sa extends rn{constructor(e=1,t=1,n=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const c=[],l=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,s,r,0),_("z","y","x",1,-1,n,t,-e,s,r,1),_("x","z","y",1,1,e,n,t,a,s,2),_("x","z","y",1,-1,e,n,-t,a,s,3),_("x","y","z",1,-1,e,t,n,a,r,4),_("x","y","z",-1,-1,e,t,-n,a,r,5),this.setIndex(c),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(f,2));function _(x,m,h,E,T,w,R,C,P,F,b){const M=w/P,I=R/F,W=w/2,J=R/2,re=C/2,te=P+1,ne=F+1;let le=0,$=0;const ye=new N;for(let Ee=0;Ee<ne;Ee++){const Ie=Ee*I-J;for(let at=0;at<te;at++){const pt=at*M-W;ye[x]=pt*E,ye[m]=Ie*T,ye[h]=re,l.push(ye.x,ye.y,ye.z),ye[x]=0,ye[m]=0,ye[h]=C>0?1:-1,u.push(ye.x,ye.y,ye.z),f.push(at/P),f.push(1-Ee/F),le+=1}}for(let Ee=0;Ee<F;Ee++)for(let Ie=0;Ie<P;Ie++){const at=d+Ie+te*Ee,pt=d+Ie+te*(Ee+1),tt=d+(Ie+1)+te*(Ee+1),mt=d+(Ie+1)+te*Ee;c.push(at,pt,mt),c.push(pt,tt,mt),$+=6}o.addGroup(p,$,b),p+=$,d+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function _a(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function on(i){const e={};for(let t=0;t<i.length;t++){const n=_a(i[t]);for(const a in n)e[a]=n[a]}return e}function Ch(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function cu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const Wa={clone:_a,merge:on};var Rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ln extends Bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rh,this.fragmentShader=Ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=_a(e.uniforms),this.uniformsGroups=Ch(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class uu extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const pi=new N,Yl=new $e,ql=new $e;class Mn extends uu{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ko*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ko*2*Math.atan(Math.tan(ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){pi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(pi.x,pi.y).multiplyScalar(-e/pi.z),pi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(pi.x,pi.y).multiplyScalar(-e/pi.z)}getViewSize(e,t){return this.getViewBounds(e,Yl,ql),t.subVectors(ql,Yl)}setViewOffset(e,t,n,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ms*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;r+=s.offsetX*a/c,t-=s.offsetY*n/l,a*=s.width/c,n*=s.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ea=-90,ta=1;class Lh extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Mn(ea,ta,e,t);a.layers=this.layers,this.add(a);const r=new Mn(ea,ta,e,t);r.layers=this.layers,this.add(r);const s=new Mn(ea,ta,e,t);s.layers=this.layers,this.add(s);const o=new Mn(ea,ta,e,t);o.layers=this.layers,this.add(o);const c=new Mn(ea,ta,e,t);c.layers=this.layers,this.add(c);const l=new Mn(ea,ta,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,r,s,o,c]=t;for(const l of t)this.remove(l);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,c,l,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,r),e.setRenderTarget(n,1,a),e.render(t,s),e.setRenderTarget(n,2,a),e.render(t,o),e.setRenderTarget(n,3,a),e.render(t,c),e.setRenderTarget(n,4,a),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,a),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class fu extends cn{constructor(e=[],t=da,n,a,r,s,o,c,l,u){super(e,t,n,a,r,s,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Dh extends In{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new fu(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Sa(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:_a(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:dn,blending:Qn});r.uniforms.tEquirect.value=t;const s=new Kt(a,r),o=t.minFilter;return t.minFilter===Ui&&(t.minFilter=kn),new Lh(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,a);e.setRenderTarget(r)}}class nn extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ih={type:"move"};class ks{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,r=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),h=this._getHandJoint(l,x);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ih)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new nn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class al{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new al(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Uh extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Nh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Fo,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let a=0,r=this.stride;a<r;a++)this.array[e+a]=t.array[n+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new N;class Zr{constructor(e,t,n,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyMatrix4(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.applyNormalMatrix(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sn.fromBufferAttribute(this,t),sn.transformDirection(e),this.setXYZ(t,sn.x,sn.y,sn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),a=Rt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this}setXYZW(e,t,n,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),a=Rt(a,this.array),r=Rt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return new pn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class _t extends Bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let na;const La=new N,ia=new N,aa=new N,ra=new $e,Da=new $e,hu=new Nt,br=new N,Ia=new N,wr=new N,Zl=new $e,Os=new $e,Kl=new $e;class xt extends an{constructor(e=new _t){if(super(),this.isSprite=!0,this.type="Sprite",na===void 0){na=new rn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Nh(t,5);na.setIndex([0,1,2,0,2,3]),na.setAttribute("position",new Zr(n,3,0,!1)),na.setAttribute("uv",new Zr(n,2,3,!1))}this.geometry=na,this.material=e,this.center=new $e(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ia.setFromMatrixScale(this.matrixWorld),hu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),aa.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ia.multiplyScalar(-aa.z);const n=this.material.rotation;let a,r;n!==0&&(r=Math.cos(n),a=Math.sin(n));const s=this.center;Tr(br.set(-.5,-.5,0),aa,s,ia,a,r),Tr(Ia.set(.5,-.5,0),aa,s,ia,a,r),Tr(wr.set(.5,.5,0),aa,s,ia,a,r),Zl.set(0,0),Os.set(1,0),Kl.set(1,1);let o=e.ray.intersectTriangle(br,Ia,wr,!1,La);if(o===null&&(Tr(Ia.set(-.5,.5,0),aa,s,ia,a,r),Os.set(0,1),o=e.ray.intersectTriangle(br,wr,Ia,!1,La),o===null))return;const c=e.ray.origin.distanceTo(La);c<e.near||c>e.far||t.push({distance:c,point:La.clone(),uv:Sn.getInterpolation(La,br,Ia,wr,Zl,Os,Kl,new $e),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Tr(i,e,t,n,a,r){ra.subVectors(i,t).addScalar(.5).multiply(n),a!==void 0?(Da.x=r*ra.x-a*ra.y,Da.y=a*ra.x+r*ra.y):Da.copy(ra),i.copy(e),i.x+=Da.x,i.y+=Da.y,i.applyMatrix4(hu)}const Bs=new N,Fh=new N,kh=new nt;class Pi{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=Bs.subVectors(n,t).cross(Fh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bs),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kh.getNormalMatrix(e),a=this.coplanarPoint(Bs).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Za,Oh=new $e(.5,.5),Er=new N;class du{constructor(e=new Pi,t=new Pi,n=new Pi,a=new Pi,r=new Pi,s=new Pi){this.planes=[e,t,n,a,r,s]}set(e,t,n,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On,n=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],c=r[2],l=r[3],u=r[4],f=r[5],d=r[6],p=r[7],_=r[8],x=r[9],m=r[10],h=r[11],E=r[12],T=r[13],w=r[14],R=r[15];if(a[0].setComponents(l-s,p-u,h-_,R-E).normalize(),a[1].setComponents(l+s,p+u,h+_,R+E).normalize(),a[2].setComponents(l+o,p+f,h+x,R+T).normalize(),a[3].setComponents(l-o,p-f,h-x,R-T).normalize(),n)a[4].setComponents(c,d,m,w).normalize(),a[5].setComponents(l-c,p-d,h-m,R-w).normalize();else if(a[4].setComponents(l-c,p-d,h-m,R-w).normalize(),t===On)a[5].setComponents(l+c,p+d,h+m,R+w).normalize();else if(t===Yr)a[5].setComponents(c,d,m,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(e){Ai.center.set(0,0,0);const t=Oh.distanceTo(e.center);return Ai.radius=.7071067811865476+t,Ai.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(Er.x=a.normal.x>0?e.max.x:e.min.x,Er.y=a.normal.y>0?e.max.y:e.min.y,Er.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Er)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pu extends Bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Kr=new N,$r=new N,$l=new Nt,Ua=new il,Ar=new Za,zs=new N,jl=new N;class Bh extends an{constructor(e=new rn,t=new pu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,r=t.count;a<r;a++)Kr.fromBufferAttribute(t,a-1),$r.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=Kr.distanceTo($r);e.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(a),Ar.radius+=r,e.ray.intersectsSphere(Ar)===!1)return;$l.copy(a).invert(),Ua.copy(e.ray).applyMatrix4($l);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,s.start),_=Math.min(u.count,s.start+s.count);for(let x=p,m=_-1;x<m;x+=l){const h=u.getX(x),E=u.getX(x+1),T=Cr(this,e,Ua,c,h,E,x);T&&t.push(T)}if(this.isLineLoop){const x=u.getX(_-1),m=u.getX(p),h=Cr(this,e,Ua,c,x,m,_-1);h&&t.push(h)}}else{const p=Math.max(0,s.start),_=Math.min(d.count,s.start+s.count);for(let x=p,m=_-1;x<m;x+=l){const h=Cr(this,e,Ua,c,x,x+1,x);h&&t.push(h)}if(this.isLineLoop){const x=Cr(this,e,Ua,c,_-1,p,_-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Cr(i,e,t,n,a,r,s){const o=i.geometry.attributes.position;if(Kr.fromBufferAttribute(o,a),$r.fromBufferAttribute(o,r),t.distanceSqToSegment(Kr,$r,zs,jl)>n)return;zs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(zs);if(!(l<e.near||l>e.far))return{distance:l,point:jl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Jl=new N,Ql=new N;class zh extends Bh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let a=0,r=t.count;a<r;a+=2)Jl.fromBufferAttribute(t,a),Ql.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Jl.distanceTo(Ql);e.setAttribute("lineDistance",new Vt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Oo extends Bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ec=new Nt,Bo=new il,Rr=new Za,Pr=new N;class tc extends an{constructor(e=new rn,t=new Oo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(a),Rr.radius+=r,e.ray.intersectsSphere(Rr)===!1)return;ec.copy(a).invert(),Bo.copy(e.ray).applyMatrix4(ec);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,s.start),p=Math.min(l.count,s.start+s.count);for(let _=d,x=p;_<x;_++){const m=l.getX(_);Pr.fromBufferAttribute(f,m),nc(Pr,m,c,a,e,t,this)}}else{const d=Math.max(0,s.start),p=Math.min(f.count,s.start+s.count);for(let _=d,x=p;_<x;_++)Pr.fromBufferAttribute(f,_),nc(Pr,_,c,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function nc(i,e,t,n,a,r,s){const o=Bo.distanceSqToPoint(i);if(o<t){const c=new N;Bo.closestPointToPoint(i,c),c.applyMatrix4(n);const l=a.ray.origin.distanceTo(c);if(l<a.near||l>a.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Gh extends cn{constructor(e,t,n,a,r,s,o,c,l){super(e,t,n,a,r,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mu extends cn{constructor(e,t,n=Fi,a,r,s,o=Dn,c=Dn,l,u=Ga,f=1){if(u!==Ga&&u!==Ha)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,a,r,s,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gu extends cn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qr extends rn{constructor(e=[],t=[],n=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:a};const r=[],s=[];o(a),l(n),u(),this.setAttribute("position",new Vt(r,3)),this.setAttribute("normal",new Vt(r.slice(),3)),this.setAttribute("uv",new Vt(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(E){const T=new N,w=new N,R=new N;for(let C=0;C<t.length;C+=3)p(t[C+0],T),p(t[C+1],w),p(t[C+2],R),c(T,w,R,E)}function c(E,T,w,R){const C=R+1,P=[];for(let F=0;F<=C;F++){P[F]=[];const b=E.clone().lerp(w,F/C),M=T.clone().lerp(w,F/C),I=C-F;for(let W=0;W<=I;W++)W===0&&F===C?P[F][W]=b:P[F][W]=b.clone().lerp(M,W/I)}for(let F=0;F<C;F++)for(let b=0;b<2*(C-F)-1;b++){const M=Math.floor(b/2);b%2===0?(d(P[F][M+1]),d(P[F+1][M]),d(P[F][M])):(d(P[F][M+1]),d(P[F+1][M+1]),d(P[F+1][M]))}}function l(E){const T=new N;for(let w=0;w<r.length;w+=3)T.x=r[w+0],T.y=r[w+1],T.z=r[w+2],T.normalize().multiplyScalar(E),r[w+0]=T.x,r[w+1]=T.y,r[w+2]=T.z}function u(){const E=new N;for(let T=0;T<r.length;T+=3){E.x=r[T+0],E.y=r[T+1],E.z=r[T+2];const w=m(E)/2/Math.PI+.5,R=h(E)/Math.PI+.5;s.push(w,1-R)}_(),f()}function f(){for(let E=0;E<s.length;E+=6){const T=s[E+0],w=s[E+2],R=s[E+4],C=Math.max(T,w,R),P=Math.min(T,w,R);C>.9&&P<.1&&(T<.2&&(s[E+0]+=1),w<.2&&(s[E+2]+=1),R<.2&&(s[E+4]+=1))}}function d(E){r.push(E.x,E.y,E.z)}function p(E,T){const w=E*3;T.x=e[w+0],T.y=e[w+1],T.z=e[w+2]}function _(){const E=new N,T=new N,w=new N,R=new N,C=new $e,P=new $e,F=new $e;for(let b=0,M=0;b<r.length;b+=9,M+=6){E.set(r[b+0],r[b+1],r[b+2]),T.set(r[b+3],r[b+4],r[b+5]),w.set(r[b+6],r[b+7],r[b+8]),C.set(s[M+0],s[M+1]),P.set(s[M+2],s[M+3]),F.set(s[M+4],s[M+5]),R.copy(E).add(T).add(w).divideScalar(3);const I=m(R);x(C,M+0,E,I),x(P,M+2,T,I),x(F,M+4,w,I)}}function x(E,T,w,R){R<0&&E.x===1&&(s[T]=E.x-1),w.x===0&&w.z===0&&(s[T]=R/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function h(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.vertices,e.indices,e.radius,e.details)}}class rl extends Qr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,a=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new rl(e.radius,e.detail)}}class sl extends Qr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new sl(e.radius,e.detail)}}class jn extends rn{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(n),c=Math.floor(a),l=o+1,u=c+1,f=e/o,d=t/c,p=[],_=[],x=[],m=[];for(let h=0;h<u;h++){const E=h*d-s;for(let T=0;T<l;T++){const w=T*f-r;_.push(w,-E,0),x.push(0,0,1),m.push(T/o),m.push(1-h/c)}}for(let h=0;h<c;h++)for(let E=0;E<o;E++){const T=E+l*h,w=E+l*(h+1),R=E+1+l*(h+1),C=E+1+l*h;p.push(T,w,C),p.push(w,R,C)}this.setIndex(p),this.setAttribute("position",new Vt(_,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.width,e.height,e.widthSegments,e.heightSegments)}}class ol extends rn{constructor(e=1,t=.4,n=12,a=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:a,arc:r},n=Math.floor(n),a=Math.floor(a);const s=[],o=[],c=[],l=[],u=new N,f=new N,d=new N;for(let p=0;p<=n;p++)for(let _=0;_<=a;_++){const x=_/a*r,m=p/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),o.push(f.x,f.y,f.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),d.subVectors(f,u).normalize(),c.push(d.x,d.y,d.z),l.push(_/a),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=a;_++){const x=(a+1)*p+_-1,m=(a+1)*(p-1)+_-1,h=(a+1)*(p-1)+_,E=(a+1)*p+_;s.push(x,m,E),s.push(m,h,E)}this.setIndex(s),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Hh extends ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vh extends Bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wh extends Bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _u extends uu{constructor(e=-1,t=1,n=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=a+t,c=a-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Xh extends Mn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Yh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class qh extends zh{constructor(e=10,t=10,n=4473924,a=8947848){n=new He(n),a=new He(a);const r=t/2,s=e/t,o=e/2,c=[],l=[];for(let d=0,p=0,_=-o;d<=t;d++,_+=s){c.push(-o,0,_,o,0,_),c.push(_,0,-o,_,0,o);const x=d===r?n:a;x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3}const u=new rn;u.setAttribute("position",new Vt(c,3)),u.setAttribute("color",new Vt(l,3));const f=new pu({vertexColors:!0,toneMapped:!1});super(u,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function ic(i,e,t,n){const a=Zh(n);switch(t){case Jc:return i*e;case eu:return i*e/a.components*a.byteLength;case Qo:return i*e/a.components*a.byteLength;case tu:return i*e*2/a.components*a.byteLength;case el:return i*e*2/a.components*a.byteLength;case Qc:return i*e*3/a.components*a.byteLength;case Pn:return i*e*4/a.components*a.byteLength;case tl:return i*e*4/a.components*a.byteLength;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gr:case Hr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lo:case uo:return Math.max(i,16)*Math.max(e,8)/4;case oo:case co:return Math.max(i,8)*Math.max(e,8)/2;case fo:case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case po:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case _o:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case xo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case bo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case wo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case To:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ao:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ro:case Po:case Lo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Do:case Io:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Uo:case No:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zh(i){switch(i){case ni:case Zc:return{byteLength:1,components:1};case Ba:case Kc:case ei:return{byteLength:2,components:1};case jo:case Jo:return{byteLength:2,components:4};case Fi:case $o:case Jn:return{byteLength:4,components:1};case $c:case jc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zo);function vu(){let i=null,e=!1,t=null,n=null;function a(r,s){t(r,s),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Kh(i){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){const u=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,u);else{f.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<f.length;p++){const _=f[d],x=f[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,f[d]=x)}f.length=d+1;for(let p=0,_=f.length;p<_;p++){const x=f[p];i.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:a,remove:r,update:s}}var $h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jh=`#ifdef USE_ALPHAHASH
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
#endif`,Jh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ed=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,td=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nd=`#ifdef USE_AOMAP
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
#endif`,id=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ad=`#ifdef USE_BATCHING
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
#endif`,rd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,od=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ld=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cd=`#ifdef USE_IRIDESCENCE
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
#endif`,ud=`#ifdef USE_BUMPMAP
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
#endif`,fd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,md=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_d=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yd=`#define PI 3.141592653589793
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
} // validated`,xd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Md=`vec3 transformedNormal = objectNormal;
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
#endif`,Sd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Td=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ed="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ad=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Cd=`#ifdef USE_ENVMAP
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
#endif`,Rd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Pd=`#ifdef USE_ENVMAP
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
#endif`,Ld=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Dd=`#ifdef USE_ENVMAP
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
#endif`,Id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ud=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Fd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kd=`#ifdef USE_GRADIENTMAP
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
}`,Od=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Gd=`uniform bool receiveShadow;
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
#endif`,Hd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Xd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qd=`PhysicalMaterial material;
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
#endif`,Zd=`struct PhysicalMaterial {
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
}`,Kd=`
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
#endif`,$d=`#if defined( RE_IndirectDiffuse )
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
#endif`,jd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ep=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,np=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ip=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,rp=`#if defined( USE_POINTS_UV )
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
#endif`,sp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,op=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,up=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fp=`#ifdef USE_MORPHTARGETS
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
#endif`,hp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_p=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vp=`#ifdef USE_NORMALMAP
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
#endif`,yp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Tp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ep=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Up=`float getShadowMask() {
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
}`,Np=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fp=`#ifdef USE_SKINNING
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
#endif`,kp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Op=`#ifdef USE_SKINNING
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
#endif`,Bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vp=`#ifdef USE_TRANSMISSION
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
#endif`,Wp=`#ifdef USE_TRANSMISSION
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
#endif`,Xp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Yp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$p=`uniform sampler2D t2D;
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
}`,jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,e0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`#include <common>
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
}`,n0=`#if DEPTH_PACKING == 3200
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
}`,i0=`#define DISTANCE
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
}`,a0=`#define DISTANCE
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
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`uniform float scale;
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
}`,l0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,u0=`uniform vec3 diffuse;
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
}`,f0=`#define LAMBERT
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
}`,h0=`#define LAMBERT
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
}`,d0=`#define MATCAP
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
}`,p0=`#define MATCAP
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
}`,m0=`#define NORMAL
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
}`,g0=`#define NORMAL
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
}`,_0=`#define PHONG
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
}`,v0=`#define PHONG
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
}`,y0=`#define STANDARD
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
}`,x0=`#define STANDARD
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
}`,M0=`#define TOON
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
}`,S0=`#define TOON
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
}`,b0=`uniform float size;
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
}`,w0=`uniform vec3 diffuse;
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
}`,T0=`#include <common>
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
}`,E0=`uniform vec3 color;
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
}`,A0=`uniform float rotation;
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
}`,C0=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:$h,alphahash_pars_fragment:jh,alphamap_fragment:Jh,alphamap_pars_fragment:Qh,alphatest_fragment:ed,alphatest_pars_fragment:td,aomap_fragment:nd,aomap_pars_fragment:id,batching_pars_vertex:ad,batching_vertex:rd,begin_vertex:sd,beginnormal_vertex:od,bsdfs:ld,iridescence_fragment:cd,bumpmap_pars_fragment:ud,clipping_planes_fragment:fd,clipping_planes_pars_fragment:hd,clipping_planes_pars_vertex:dd,clipping_planes_vertex:pd,color_fragment:md,color_pars_fragment:gd,color_pars_vertex:_d,color_vertex:vd,common:yd,cube_uv_reflection_fragment:xd,defaultnormal_vertex:Md,displacementmap_pars_vertex:Sd,displacementmap_vertex:bd,emissivemap_fragment:wd,emissivemap_pars_fragment:Td,colorspace_fragment:Ed,colorspace_pars_fragment:Ad,envmap_fragment:Cd,envmap_common_pars_fragment:Rd,envmap_pars_fragment:Pd,envmap_pars_vertex:Ld,envmap_physical_pars_fragment:Hd,envmap_vertex:Dd,fog_vertex:Id,fog_pars_vertex:Ud,fog_fragment:Nd,fog_pars_fragment:Fd,gradientmap_pars_fragment:kd,lightmap_pars_fragment:Od,lights_lambert_fragment:Bd,lights_lambert_pars_fragment:zd,lights_pars_begin:Gd,lights_toon_fragment:Vd,lights_toon_pars_fragment:Wd,lights_phong_fragment:Xd,lights_phong_pars_fragment:Yd,lights_physical_fragment:qd,lights_physical_pars_fragment:Zd,lights_fragment_begin:Kd,lights_fragment_maps:$d,lights_fragment_end:jd,logdepthbuf_fragment:Jd,logdepthbuf_pars_fragment:Qd,logdepthbuf_pars_vertex:ep,logdepthbuf_vertex:tp,map_fragment:np,map_pars_fragment:ip,map_particle_fragment:ap,map_particle_pars_fragment:rp,metalnessmap_fragment:sp,metalnessmap_pars_fragment:op,morphinstance_vertex:lp,morphcolor_vertex:cp,morphnormal_vertex:up,morphtarget_pars_vertex:fp,morphtarget_vertex:hp,normal_fragment_begin:dp,normal_fragment_maps:pp,normal_pars_fragment:mp,normal_pars_vertex:gp,normal_vertex:_p,normalmap_pars_fragment:vp,clearcoat_normal_fragment_begin:yp,clearcoat_normal_fragment_maps:xp,clearcoat_pars_fragment:Mp,iridescence_pars_fragment:Sp,opaque_fragment:bp,packing:wp,premultiplied_alpha_fragment:Tp,project_vertex:Ep,dithering_fragment:Ap,dithering_pars_fragment:Cp,roughnessmap_fragment:Rp,roughnessmap_pars_fragment:Pp,shadowmap_pars_fragment:Lp,shadowmap_pars_vertex:Dp,shadowmap_vertex:Ip,shadowmask_pars_fragment:Up,skinbase_vertex:Np,skinning_pars_vertex:Fp,skinning_vertex:kp,skinnormal_vertex:Op,specularmap_fragment:Bp,specularmap_pars_fragment:zp,tonemapping_fragment:Gp,tonemapping_pars_fragment:Hp,transmission_fragment:Vp,transmission_pars_fragment:Wp,uv_pars_fragment:Xp,uv_pars_vertex:Yp,uv_vertex:qp,worldpos_vertex:Zp,background_vert:Kp,background_frag:$p,backgroundCube_vert:jp,backgroundCube_frag:Jp,cube_vert:Qp,cube_frag:e0,depth_vert:t0,depth_frag:n0,distanceRGBA_vert:i0,distanceRGBA_frag:a0,equirect_vert:r0,equirect_frag:s0,linedashed_vert:o0,linedashed_frag:l0,meshbasic_vert:c0,meshbasic_frag:u0,meshlambert_vert:f0,meshlambert_frag:h0,meshmatcap_vert:d0,meshmatcap_frag:p0,meshnormal_vert:m0,meshnormal_frag:g0,meshphong_vert:_0,meshphong_frag:v0,meshphysical_vert:y0,meshphysical_frag:x0,meshtoon_vert:M0,meshtoon_frag:S0,points_vert:b0,points_frag:w0,shadow_vert:T0,shadow_frag:E0,sprite_vert:A0,sprite_frag:C0},xe={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new $e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new $e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Nn={basic:{uniforms:on([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:on([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new He(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:on([xe.common,xe.specularmap,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,xe.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:on([xe.common,xe.envmap,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.roughnessmap,xe.metalnessmap,xe.fog,xe.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:on([xe.common,xe.aomap,xe.lightmap,xe.emissivemap,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.gradientmap,xe.fog,xe.lights,{emissive:{value:new He(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:on([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,xe.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:on([xe.points,xe.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:on([xe.common,xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:on([xe.common,xe.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:on([xe.common,xe.bumpmap,xe.normalmap,xe.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:on([xe.sprite,xe.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:on([xe.common,xe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:on([xe.lights,xe.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};Nn.physical={uniforms:on([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new $e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new $e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new $e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const Lr={r:0,b:0,g:0},Ci=new ii,R0=new Nt;function P0(i,e,t,n,a,r,s){const o=new He(0);let c=r===!0?0:1,l,u,f=null,d=0,p=null;function _(T){let w=T.isScene===!0?T.background:null;return w&&w.isTexture&&(w=(T.backgroundBlurriness>0?t:e).get(w)),w}function x(T){let w=!1;const R=_(T);R===null?h(o,c):R&&R.isColor&&(h(R,1),w=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,w){const R=_(w);R&&(R.isCubeTexture||R.mapping===Jr)?(u===void 0&&(u=new Kt(new Sa(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:_a(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(C,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(u)),Ci.copy(w.backgroundRotation),Ci.x*=-1,Ci.y*=-1,Ci.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Ci.y*=-1,Ci.z*=-1),u.material.uniforms.envMap.value=R,u.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(R0.makeRotationFromEuler(Ci)),u.material.toneMapped=gt.getTransfer(R.colorSpace)!==At,(f!==R||d!==R.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,f=R,d=R.version,p=i.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):R&&R.isTexture&&(l===void 0&&(l=new Kt(new jn(2,2),new ln({name:"BackgroundMaterial",uniforms:_a(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:xi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(l)),l.material.uniforms.t2D.value=R,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=gt.getTransfer(R.colorSpace)!==At,R.matrixAutoUpdate===!0&&R.updateMatrix(),l.material.uniforms.uvTransform.value.copy(R.matrix),(f!==R||d!==R.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,f=R,d=R.version,p=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function h(T,w){T.getRGB(Lr,cu(i)),n.buffers.color.setClear(Lr.r,Lr.g,Lr.b,w,s)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,w=1){o.set(T),c=w,h(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(T){c=T,h(o,c)},render:x,addToRenderList:m,dispose:E}}function L0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=d(null);let r=a,s=!1;function o(M,I,W,J,re){let te=!1;const ne=f(J,W,I);r!==ne&&(r=ne,l(r.object)),te=p(M,J,W,re),te&&_(M,J,W,re),re!==null&&e.update(re,i.ELEMENT_ARRAY_BUFFER),(te||s)&&(s=!1,w(M,I,W,J),re!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function f(M,I,W){const J=W.wireframe===!0;let re=n[M.id];re===void 0&&(re={},n[M.id]=re);let te=re[I.id];te===void 0&&(te={},re[I.id]=te);let ne=te[J];return ne===void 0&&(ne=d(c()),te[J]=ne),ne}function d(M){const I=[],W=[],J=[];for(let re=0;re<t;re++)I[re]=0,W[re]=0,J[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:W,attributeDivisors:J,object:M,attributes:{},index:null}}function p(M,I,W,J){const re=r.attributes,te=I.attributes;let ne=0;const le=W.getAttributes();for(const $ in le)if(le[$].location>=0){const Ee=re[$];let Ie=te[$];if(Ie===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(Ie=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(Ie=M.instanceColor)),Ee===void 0||Ee.attribute!==Ie||Ie&&Ee.data!==Ie.data)return!0;ne++}return r.attributesNum!==ne||r.index!==J}function _(M,I,W,J){const re={},te=I.attributes;let ne=0;const le=W.getAttributes();for(const $ in le)if(le[$].location>=0){let Ee=te[$];Ee===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(Ee=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(Ee=M.instanceColor));const Ie={};Ie.attribute=Ee,Ee&&Ee.data&&(Ie.data=Ee.data),re[$]=Ie,ne++}r.attributes=re,r.attributesNum=ne,r.index=J}function x(){const M=r.newAttributes;for(let I=0,W=M.length;I<W;I++)M[I]=0}function m(M){h(M,0)}function h(M,I){const W=r.newAttributes,J=r.enabledAttributes,re=r.attributeDivisors;W[M]=1,J[M]===0&&(i.enableVertexAttribArray(M),J[M]=1),re[M]!==I&&(i.vertexAttribDivisor(M,I),re[M]=I)}function E(){const M=r.newAttributes,I=r.enabledAttributes;for(let W=0,J=I.length;W<J;W++)I[W]!==M[W]&&(i.disableVertexAttribArray(W),I[W]=0)}function T(M,I,W,J,re,te,ne){ne===!0?i.vertexAttribIPointer(M,I,W,re,te):i.vertexAttribPointer(M,I,W,J,re,te)}function w(M,I,W,J){x();const re=J.attributes,te=W.getAttributes(),ne=I.defaultAttributeValues;for(const le in te){const $=te[le];if($.location>=0){let ye=re[le];if(ye===void 0&&(le==="instanceMatrix"&&M.instanceMatrix&&(ye=M.instanceMatrix),le==="instanceColor"&&M.instanceColor&&(ye=M.instanceColor)),ye!==void 0){const Ee=ye.normalized,Ie=ye.itemSize,at=e.get(ye);if(at===void 0)continue;const pt=at.buffer,tt=at.type,mt=at.bytesPerElement,ee=tt===i.INT||tt===i.UNSIGNED_INT||ye.gpuType===$o;if(ye.isInterleavedBufferAttribute){const oe=ye.data,Ce=oe.stride,je=ye.offset;if(oe.isInstancedInterleavedBuffer){for(let Be=0;Be<$.locationSize;Be++)h($.location+Be,oe.meshPerAttribute);M.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Be=0;Be<$.locationSize;Be++)m($.location+Be);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Be=0;Be<$.locationSize;Be++)T($.location+Be,Ie/$.locationSize,tt,Ee,Ce*mt,(je+Ie/$.locationSize*Be)*mt,ee)}else{if(ye.isInstancedBufferAttribute){for(let oe=0;oe<$.locationSize;oe++)h($.location+oe,ye.meshPerAttribute);M.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let oe=0;oe<$.locationSize;oe++)m($.location+oe);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let oe=0;oe<$.locationSize;oe++)T($.location+oe,Ie/$.locationSize,tt,Ee,Ie*mt,Ie/$.locationSize*oe*mt,ee)}}else if(ne!==void 0){const Ee=ne[le];if(Ee!==void 0)switch(Ee.length){case 2:i.vertexAttrib2fv($.location,Ee);break;case 3:i.vertexAttrib3fv($.location,Ee);break;case 4:i.vertexAttrib4fv($.location,Ee);break;default:i.vertexAttrib1fv($.location,Ee)}}}}E()}function R(){F();for(const M in n){const I=n[M];for(const W in I){const J=I[W];for(const re in J)u(J[re].object),delete J[re];delete I[W]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const I=n[M.id];for(const W in I){const J=I[W];for(const re in J)u(J[re].object),delete J[re];delete I[W]}delete n[M.id]}function P(M){for(const I in n){const W=n[I];if(W[M.id]===void 0)continue;const J=W[M.id];for(const re in J)u(J[re].object),delete J[re];delete W[M.id]}}function F(){b(),s=!0,r!==a&&(r=a,l(r.object))}function b(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:F,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:C,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function D0(i,e,t){let n;function a(l){n=l}function r(l,u){i.drawArrays(n,l,u),t.update(u,n,1)}function s(l,u,f){f!==0&&(i.drawArraysInstanced(n,l,u,f),t.update(u,n,f))}function o(l,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,f);let p=0;for(let _=0;_<f;_++)p+=u[_];t.update(p,n,1)}function c(l,u,f,d){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)s(l[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,f);let _=0;for(let x=0;x<f;x++)_+=u[x]*d[x];t.update(_,n,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function I0(i,e,t,n){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(P){return!(P!==Pn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const F=P===ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ni&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Jn&&!F)}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:h,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:w,vertexTextures:R,maxSamples:C}}function U0(i){const e=this;let t=null,n=0,a=!1,r=!1;const s=new Pi,o=new nt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||n!==0||a;return a=d,n=f.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,h=i.get(f);if(!a||_===null||_.length===0||r&&!m)r?u(null):l();else{const E=r?0:n,T=E*4;let w=h.clippingState||null;c.value=w,w=u(_,d,T,p);for(let R=0;R!==T;++R)w[R]=t[R];h.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,p,_){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const h=p+x*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<h)&&(m=new Float32Array(h));for(let T=0,w=p;T!==x;++T,w+=4)s.copy(f[T]).applyMatrix4(E,o),s.normal.toArray(m,w),m[w+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function N0(i){let e=new WeakMap;function t(s,o){return o===ao?s.mapping=da:o===ro&&(s.mapping=pa),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===ao||o===ro)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new Dh(c.height);return l.fromEquirectangularTexture(i,s),e.set(s,l),s.addEventListener("dispose",a),t(l.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const la=4,ac=[.125,.215,.35,.446,.526,.582],Ii=20,Gs=new _u,rc=new He;let Hs=null,Vs=0,Ws=0,Xs=!1;const Li=(1+Math.sqrt(5))/2,sa=1/Li,sc=[new N(-Li,sa,0),new N(Li,sa,0),new N(-sa,0,Li),new N(sa,0,Li),new N(0,Li,-sa),new N(0,Li,sa),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)],F0=new N;class oc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100,r={}){const{size:s=256,position:o=F0}=r;Hs=this._renderer.getRenderTarget(),Vs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,a,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hs,Vs,Ws),this._renderer.xr.enabled=Xs,e.scissorTest=!1,Dr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===da||e.mapping===pa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hs=this._renderer.getRenderTarget(),Vs=this._renderer.getActiveCubeFace(),Ws=this._renderer.getActiveMipmapLevel(),Xs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:ei,format:Pn,colorSpace:ga,depthBuffer:!1},a=lc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=k0(r)),this._blurMaterial=O0(r,e,t)}return a}_compileMaterial(e){const t=new Kt(this._lodPlanes[0],e);this._renderer.compile(t,Gs)}_sceneToCubeUV(e,t,n,a,r){const c=new Mn(90,1,t,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,p=f.toneMapping;f.getClearColor(rc),f.toneMapping=_i,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(a),f.clearDepth(),f.setRenderTarget(null));const x=new Rn({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),m=new Kt(new Sa,x);let h=!1;const E=e.background;E?E.isColor&&(x.color.copy(E),e.background=null,h=!0):(x.color.copy(rc),h=!0);for(let T=0;T<6;T++){const w=T%3;w===0?(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[T],r.y,r.z)):w===1?(c.up.set(0,0,l[T]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[T],r.z)):(c.up.set(0,l[T],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[T]));const R=this._cubeSize;Dr(a,w*R,T>2?R:0,R,R),f.setRenderTarget(a),h&&f.render(m,c),f.render(e,c)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=d,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===da||e.mapping===pa;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new Kt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Dr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,Gs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=sc[(a-r-1)%sc.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,a,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,a,"latitudinal",r),this._halfBlur(s,e,n,n,a,"longitudinal",r)}_halfBlur(e,t,n,a,r,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Kt(this._lodPlanes[a],l),d=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ii-1),x=r/_,m=isFinite(r)?1+Math.floor(u*x):Ii;m>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);const h=[];let E=0;for(let P=0;P<Ii;++P){const F=P/x,b=Math.exp(-F*F/2);h.push(b),P===0?E+=b:P<m&&(E+=2*b)}for(let P=0;P<h.length;P++)h[P]=h[P]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=_,d.mipInt.value=T-n;const w=this._sizeLods[a],R=3*w*(a>T-la?a-T+la:0),C=4*(this._cubeSize-w);Dr(t,R,C,3*w,2*w),c.setRenderTarget(t),c.render(f,Gs)}}function k0(i){const e=[],t=[],n=[];let a=i;const r=i-la+1+ac.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);t.push(o);let c=1/o;s>i-la?c=ac[s-i+la-1]:s===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,f=1+l,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,x=3,m=2,h=1,E=new Float32Array(x*_*p),T=new Float32Array(m*_*p),w=new Float32Array(h*_*p);for(let C=0;C<p;C++){const P=C%3*2/3-1,F=C>2?0:-1,b=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];E.set(b,x*_*C),T.set(d,m*_*C);const M=[C,C,C,C,C,C];w.set(M,h*_*C)}const R=new rn;R.setAttribute("position",new pn(E,x)),R.setAttribute("uv",new pn(T,m)),R.setAttribute("faceIndex",new pn(w,h)),e.push(R),a>la&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lc(i,e,t){const n=new In(i,e,t);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Dr(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function O0(i,e,t){const n=new Float32Array(Ii),a=new N(0,1,0);return new ln({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:ll(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function cc(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ll(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function uc(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ll(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ll(){return`

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
	`}function B0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===ao||c===ro,u=c===da||c===pa;if(l||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new oc(i)),f=l?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const p=o.image;return l&&p&&p.height>0||u&&p&&a(p)?(t===null&&(t=new oc(i)),f=l?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function a(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function z0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&Va("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function G0(i,e,t,n){const a={},r=new WeakMap;function s(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",s),delete a[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(f){const d=[],p=f.index,_=f.attributes.position;let x=0;if(p!==null){const E=p.array;x=p.version;for(let T=0,w=E.length;T<w;T+=3){const R=E[T+0],C=E[T+1],P=E[T+2];d.push(R,C,C,P,P,R)}}else if(_!==void 0){const E=_.array;x=_.version;for(let T=0,w=E.length/3-1;T<w;T+=3){const R=T+0,C=T+1,P=T+2;d.push(R,C,C,P,P,R)}}else return;const m=new(iu(d)?lu:ou)(d,1);m.version=x;const h=r.get(f);h&&e.remove(h),r.set(f,m)}function u(f){const d=r.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:u}}function H0(i,e,t){let n;function a(d){n=d}let r,s;function o(d){r=d.type,s=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*s),t.update(p,n,1)}function l(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,d*s,_),t.update(p,n,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let m=0;for(let h=0;h<_;h++)m+=p[h];t.update(m,n,1)}function f(d,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<d.length;h++)l(d[h]/s,p[h],x[h]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,x,0,_);let h=0;for(let E=0;E<_;E++)h+=p[E]*x[E];t.update(h,n,1)}}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function V0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function W0(i,e,t){const n=new WeakMap,a=new Bt;function r(s,o,c){const l=s.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let M=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,h=o.morphAttributes.position||[],E=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let w=0;_===!0&&(w=1),x===!0&&(w=2),m===!0&&(w=3);let R=o.attributes.position.count*w,C=1;R>e.maxTextureSize&&(C=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const P=new Float32Array(R*C*4*f),F=new au(P,R,C,f);F.type=Jn,F.needsUpdate=!0;const b=w*4;for(let I=0;I<f;I++){const W=h[I],J=E[I],re=T[I],te=R*C*4*I;for(let ne=0;ne<W.count;ne++){const le=ne*b;_===!0&&(a.fromBufferAttribute(W,ne),P[te+le+0]=a.x,P[te+le+1]=a.y,P[te+le+2]=a.z,P[te+le+3]=0),x===!0&&(a.fromBufferAttribute(J,ne),P[te+le+4]=a.x,P[te+le+5]=a.y,P[te+le+6]=a.z,P[te+le+7]=0),m===!0&&(a.fromBufferAttribute(re,ne),P[te+le+8]=a.x,P[te+le+9]=a.y,P[te+le+10]=a.z,P[te+le+11]=re.itemSize===4?a.w:1)}}d={count:f,texture:F,size:new $e(R,C)},n.set(o,d),o.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const x=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function X0(i,e,t,n){let a=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);if(a.get(f)!==l&&(e.update(f),a.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),a.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;a.get(d)!==l&&(d.update(),a.set(d,l))}return f}function s(){a=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:s}}const yu=new cn,fc=new mu(1,1),xu=new au,Mu=new gh,Su=new fu,hc=[],dc=[],pc=new Float32Array(16),mc=new Float32Array(9),gc=new Float32Array(4);function ba(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let r=hc[a];if(r===void 0&&(r=new Float32Array(a),hc[a]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(r,o)}return r}function Wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Xt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function es(i,e){let t=dc[e];t===void 0&&(t=new Int32Array(e),dc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Y0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function q0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2fv(this.addr,e),Xt(t,e)}}function Z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;i.uniform3fv(this.addr,e),Xt(t,e)}}function K0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4fv(this.addr,e),Xt(t,e)}}function $0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;gc.set(n),i.uniformMatrix2fv(this.addr,!1,gc),Xt(t,n)}}function j0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;mc.set(n),i.uniformMatrix3fv(this.addr,!1,mc),Xt(t,n)}}function J0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Xt(t,e)}else{if(Wt(t,n))return;pc.set(n),i.uniformMatrix4fv(this.addr,!1,pc),Xt(t,n)}}function Q0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2iv(this.addr,e),Xt(t,e)}}function tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3iv(this.addr,e),Xt(t,e)}}function nm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4iv(this.addr,e),Xt(t,e)}}function im(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;i.uniform2uiv(this.addr,e),Xt(t,e)}}function rm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;i.uniform3uiv(this.addr,e),Xt(t,e)}}function sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;i.uniform4uiv(this.addr,e),Xt(t,e)}}function om(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_2D_SHADOW?(fc.compareFunction=nu,r=fc):r=yu,t.setTexture2D(e||r,a)}function lm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||Mu,a)}function cm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||Su,a)}function um(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||xu,a)}function fm(i){switch(i){case 5126:return Y0;case 35664:return q0;case 35665:return Z0;case 35666:return K0;case 35674:return $0;case 35675:return j0;case 35676:return J0;case 5124:case 35670:return Q0;case 35667:case 35671:return em;case 35668:case 35672:return tm;case 35669:case 35673:return nm;case 5125:return im;case 36294:return am;case 36295:return rm;case 36296:return sm;case 35678:case 36198:case 36298:case 36306:case 35682:return om;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return um}}function hm(i,e){i.uniform1fv(this.addr,e)}function dm(i,e){const t=ba(e,this.size,2);i.uniform2fv(this.addr,t)}function pm(i,e){const t=ba(e,this.size,3);i.uniform3fv(this.addr,t)}function mm(i,e){const t=ba(e,this.size,4);i.uniform4fv(this.addr,t)}function gm(i,e){const t=ba(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _m(i,e){const t=ba(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function vm(i,e){const t=ba(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function ym(i,e){i.uniform1iv(this.addr,e)}function xm(i,e){i.uniform2iv(this.addr,e)}function Mm(i,e){i.uniform3iv(this.addr,e)}function Sm(i,e){i.uniform4iv(this.addr,e)}function bm(i,e){i.uniform1uiv(this.addr,e)}function wm(i,e){i.uniform2uiv(this.addr,e)}function Tm(i,e){i.uniform3uiv(this.addr,e)}function Em(i,e){i.uniform4uiv(this.addr,e)}function Am(i,e,t){const n=this.cache,a=e.length,r=es(t,a);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let s=0;s!==a;++s)t.setTexture2D(e[s]||yu,r[s])}function Cm(i,e,t){const n=this.cache,a=e.length,r=es(t,a);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||Mu,r[s])}function Rm(i,e,t){const n=this.cache,a=e.length,r=es(t,a);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||Su,r[s])}function Pm(i,e,t){const n=this.cache,a=e.length,r=es(t,a);Wt(n,r)||(i.uniform1iv(this.addr,r),Xt(n,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||xu,r[s])}function Lm(i){switch(i){case 5126:return hm;case 35664:return dm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return _m;case 35676:return vm;case 5124:case 35670:return ym;case 35667:case 35671:return xm;case 35668:case 35672:return Mm;case 35669:case 35673:return Sm;case 5125:return bm;case 36294:return wm;case 36295:return Tm;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Pm}}class Dm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fm(t.type)}}class Im{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Lm(t.type)}}class Um{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],n)}}}const Ys=/(\w+)(\])?(\[|\.)?/g;function _c(i,e){i.seq.push(e),i.map[e.id]=e}function Nm(i,e,t){const n=i.name,a=n.length;for(Ys.lastIndex=0;;){const r=Ys.exec(n),s=Ys.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===a){_c(t,l===void 0?new Dm(o,i,e):new Im(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Um(o),_c(t,f)),t=f}}}class Vr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const r=e.getActiveUniform(t,a),s=e.getUniformLocation(t,r.name);Nm(r,s,this)}}setValue(e,t,n,a){const r=this.map[t];r!==void 0&&r.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&n.push(s)}return n}}function vc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Fm=37297;let km=0;function Om(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const yc=new nt;function Bm(i){gt._getMatrix(yc,gt.workingColorSpace,i);const e=`mat3( ${yc.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case Xr:return[e,"LinearTransferOETF"];case At:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function xc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Om(i.getShaderSource(e),o)}else return r}function zm(i,e){const t=Bm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Gm(i,e){let t;switch(e){case Gc:t="Linear";break;case Hc:t="Reinhard";break;case Vc:t="Cineon";break;case Ko:t="ACESFilmic";break;case Xc:t="AgX";break;case Yc:t="Neutral";break;case Wc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ir=new N;function Hm(){gt.getLuminanceCoefficients(Ir);const i=Ir.x.toFixed(4),e=Ir.y.toFixed(4),t=Ir.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Na).join(`
`)}function Wm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Xm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(e,a),s=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Na(i){return i!==""}function Mc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ym=/^[ \t]*#include +<([\w\d./]+)>/gm;function zo(i){return i.replace(Ym,Zm)}const qm=new Map;function Zm(i,e){let t=it[e];if(t===void 0){const n=qm.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return zo(t)}const Km=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bc(i){return i.replace(Km,$m)}function $m(i,e,t,n){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function wc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function jm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rf?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Kn&&(e="SHADOWMAP_TYPE_VSM"),e}function Jm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case da:case pa:e="ENVMAP_TYPE_CUBE";break;case Jr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Qm(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===pa&&(e="ENVMAP_MODE_REFRACTION"),e}function e1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zc:e="ENVMAP_BLENDING_MULTIPLY";break;case Zf:e="ENVMAP_BLENDING_MIX";break;case Kf:e="ENVMAP_BLENDING_ADD";break}return e}function t1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function n1(i,e,t,n){const a=i.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=jm(t),l=Jm(t),u=Qm(t),f=e1(t),d=t1(t),p=Vm(t),_=Wm(r),x=a.createProgram();let m,h,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Na).join(`
`),m.length>0&&(m+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Na).join(`
`),h.length>0&&(h+=`
`)):(m=[wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Na).join(`
`),h=[wc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?it.tonemapping_pars_fragment:"",t.toneMapping!==_i?Gm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,zm("linearToOutputTexel",t.outputColorSpace),Hm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Na).join(`
`)),s=zo(s),s=Mc(s,t),s=Sc(s,t),o=zo(o),o=Mc(o,t),o=Sc(o,t),s=bc(s),o=bc(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["#define varying in",t.glslVersion===Pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const T=E+m+s,w=E+h+o,R=vc(a,a.VERTEX_SHADER,T),C=vc(a,a.FRAGMENT_SHADER,w);a.attachShader(x,R),a.attachShader(x,C),t.index0AttributeName!==void 0?a.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function P(I){if(i.debug.checkShaderErrors){const W=a.getProgramInfoLog(x)||"",J=a.getShaderInfoLog(R)||"",re=a.getShaderInfoLog(C)||"",te=W.trim(),ne=J.trim(),le=re.trim();let $=!0,ye=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,x,R,C);else{const Ee=xc(a,R,"vertex"),Ie=xc(a,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+te+`
`+Ee+`
`+Ie)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(ne===""||le==="")&&(ye=!1);ye&&(I.diagnostics={runnable:$,programLog:te,vertexShader:{log:ne,prefix:m},fragmentShader:{log:le,prefix:h}})}a.deleteShader(R),a.deleteShader(C),F=new Vr(a,x),b=Xm(a,x)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let b;this.getAttributes=function(){return b===void 0&&P(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=a.getProgramParameter(x,Fm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=km++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=R,this.fragmentShader=C,this}let i1=0;class a1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new r1(e),t.set(e,n)),n}}class r1{constructor(e){this.id=i1++,this.code=e,this.usedTimes=0}}function s1(i,e,t,n,a,r,s){const o=new ru,c=new a1,l=new Set,u=[],f=a.logarithmicDepthBuffer,d=a.vertexTextures;let p=a.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,M,I,W,J){const re=W.fog,te=J.geometry,ne=b.isMeshStandardMaterial?W.environment:null,le=(b.isMeshStandardMaterial?t:e).get(b.envMap||ne),$=le&&le.mapping===Jr?le.image.height:null,ye=_[b.type];b.precision!==null&&(p=a.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));const Ee=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,Ie=Ee!==void 0?Ee.length:0;let at=0;te.morphAttributes.position!==void 0&&(at=1),te.morphAttributes.normal!==void 0&&(at=2),te.morphAttributes.color!==void 0&&(at=3);let pt,tt,mt,ee;if(ye){const st=Nn[ye];pt=st.vertexShader,tt=st.fragmentShader}else pt=b.vertexShader,tt=b.fragmentShader,c.update(b),mt=c.getVertexShaderID(b),ee=c.getFragmentShaderID(b);const oe=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),je=J.isInstancedMesh===!0,Be=J.isBatchedMesh===!0,lt=!!b.map,Ft=!!b.matcap,A=!!le,Pt=!!b.aoMap,Je=!!b.lightMap,Ke=!!b.bumpMap,De=!!b.normalMap,rt=!!b.displacementMap,Re=!!b.emissiveMap,Qe=!!b.metalnessMap,kt=!!b.roughnessMap,Mt=b.anisotropy>0,S=b.clearcoat>0,g=b.dispersion>0,z=b.iridescence>0,Q=b.sheen>0,ae=b.transmission>0,j=Mt&&!!b.anisotropyMap,Ue=S&&!!b.clearcoatMap,me=S&&!!b.clearcoatNormalMap,Le=S&&!!b.clearcoatRoughnessMap,Ne=z&&!!b.iridescenceMap,fe=z&&!!b.iridescenceThicknessMap,Se=Q&&!!b.sheenColorMap,Ve=Q&&!!b.sheenRoughnessMap,ze=!!b.specularMap,ve=!!b.specularColorMap,et=!!b.specularIntensityMap,D=ae&&!!b.transmissionMap,he=ae&&!!b.thicknessMap,_e=!!b.gradientMap,Pe=!!b.alphaMap,L=b.alphaTest>0,ie=!!b.alphaHash,X=!!b.extensions;let Ze=_i;b.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(Ze=i.toneMapping);const vt={shaderID:ye,shaderType:b.type,shaderName:b.name,vertexShader:pt,fragmentShader:tt,defines:b.defines,customVertexShaderID:mt,customFragmentShaderID:ee,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:Be,batchingColor:Be&&J._colorsTexture!==null,instancing:je,instancingColor:je&&J.instanceColor!==null,instancingMorph:je&&J.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?i.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:ga,alphaToCoverage:!!b.alphaToCoverage,map:lt,matcap:Ft,envMap:A,envMapMode:A&&le.mapping,envMapCubeUVHeight:$,aoMap:Pt,lightMap:Je,bumpMap:Ke,normalMap:De,displacementMap:d&&rt,emissiveMap:Re,normalMapObjectSpace:De&&b.normalMapType===eh,normalMapTangentSpace:De&&b.normalMapType===Qf,metalnessMap:Qe,roughnessMap:kt,anisotropy:Mt,anisotropyMap:j,clearcoat:S,clearcoatMap:Ue,clearcoatNormalMap:me,clearcoatRoughnessMap:Le,dispersion:g,iridescence:z,iridescenceMap:Ne,iridescenceThicknessMap:fe,sheen:Q,sheenColorMap:Se,sheenRoughnessMap:Ve,specularMap:ze,specularColorMap:ve,specularIntensityMap:et,transmission:ae,transmissionMap:D,thicknessMap:he,gradientMap:_e,opaque:b.transparent===!1&&b.blending===vn&&b.alphaToCoverage===!1,alphaMap:Pe,alphaTest:L,alphaHash:ie,combine:b.combine,mapUv:lt&&x(b.map.channel),aoMapUv:Pt&&x(b.aoMap.channel),lightMapUv:Je&&x(b.lightMap.channel),bumpMapUv:Ke&&x(b.bumpMap.channel),normalMapUv:De&&x(b.normalMap.channel),displacementMapUv:rt&&x(b.displacementMap.channel),emissiveMapUv:Re&&x(b.emissiveMap.channel),metalnessMapUv:Qe&&x(b.metalnessMap.channel),roughnessMapUv:kt&&x(b.roughnessMap.channel),anisotropyMapUv:j&&x(b.anisotropyMap.channel),clearcoatMapUv:Ue&&x(b.clearcoatMap.channel),clearcoatNormalMapUv:me&&x(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&x(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&x(b.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&x(b.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(b.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&x(b.sheenRoughnessMap.channel),specularMapUv:ze&&x(b.specularMap.channel),specularColorMapUv:ve&&x(b.specularColorMap.channel),specularIntensityMapUv:et&&x(b.specularIntensityMap.channel),transmissionMapUv:D&&x(b.transmissionMap.channel),thicknessMapUv:he&&x(b.thicknessMap.channel),alphaMapUv:Pe&&x(b.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(De||Mt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!te.attributes.uv&&(lt||Pe),fog:!!re,useFog:b.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ce,skinning:J.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:at,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ze,decodeVideoTexture:lt&&b.map.isVideoTexture===!0&&gt.getTransfer(b.map.colorSpace)===At,decodeVideoTextureEmissive:Re&&b.emissiveMap.isVideoTexture===!0&&gt.getTransfer(b.emissiveMap.colorSpace)===At,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===$n,flipSided:b.side===dn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:X&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(X&&b.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function h(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)M.push(I),M.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(E(M,b),T(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function E(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function T(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function w(b){const M=_[b.type];let I;if(M){const W=Nn[M];I=Wa.clone(W.uniforms)}else I=b.uniforms;return I}function R(b,M){let I;for(let W=0,J=u.length;W<J;W++){const re=u[W];if(re.cacheKey===M){I=re,++I.usedTimes;break}}return I===void 0&&(I=new n1(i,M,b,r),u.push(I)),I}function C(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function P(b){c.remove(b)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:w,acquireProgram:R,releaseProgram:C,releaseShaderCache:P,programs:u,dispose:F}}function o1(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function a(s,o,c){i.get(s)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:r}}function l1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Tc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ec(){const i=[];let e=0;const t=[],n=[],a=[];function r(){e=0,t.length=0,n.length=0,a.length=0}function s(f,d,p,_,x,m){let h=i[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:x,group:m},i[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=x,h.group=m),e++,h}function o(f,d,p,_,x,m){const h=s(f,d,p,_,x,m);p.transmission>0?n.push(h):p.transparent===!0?a.push(h):t.push(h)}function c(f,d,p,_,x,m){const h=s(f,d,p,_,x,m);p.transmission>0?n.unshift(h):p.transparent===!0?a.unshift(h):t.unshift(h)}function l(f,d){t.length>1&&t.sort(f||l1),n.length>1&&n.sort(d||Tc),a.length>1&&a.sort(d||Tc)}function u(){for(let f=e,d=i.length;f<d;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:a,init:r,push:o,unshift:c,finish:u,sort:l}}function c1(){let i=new WeakMap;function e(n,a){const r=i.get(n);let s;return r===void 0?(s=new Ec,i.set(n,[s])):a>=r.length?(s=new Ec,r.push(s)):s=r[a],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function u1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new He};break;case"SpotLight":t={position:new N,direction:new N,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function f1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $e,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let h1=0;function d1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function p1(i){const e=new u1,t=f1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);const a=new N,r=new Nt,s=new Nt;function o(l){let u=0,f=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,_=0,x=0,m=0,h=0,E=0,T=0,w=0,R=0,C=0,P=0;l.sort(d1);for(let b=0,M=l.length;b<M;b++){const I=l[b],W=I.color,J=I.intensity,re=I.distance,te=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)u+=W.r*J,f+=W.g*J,d+=W.b*J;else if(I.isLightProbe){for(let ne=0;ne<9;ne++)n.probe[ne].addScaledVector(I.sh.coefficients[ne],J);P++}else if(I.isDirectionalLight){const ne=e.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const le=I.shadow,$=t.get(I);$.shadowIntensity=le.intensity,$.shadowBias=le.bias,$.shadowNormalBias=le.normalBias,$.shadowRadius=le.radius,$.shadowMapSize=le.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=I.shadow.matrix,E++}n.directional[p]=ne,p++}else if(I.isSpotLight){const ne=e.get(I);ne.position.setFromMatrixPosition(I.matrixWorld),ne.color.copy(W).multiplyScalar(J),ne.distance=re,ne.coneCos=Math.cos(I.angle),ne.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),ne.decay=I.decay,n.spot[x]=ne;const le=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,le.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[x]=le.matrix,I.castShadow){const $=t.get(I);$.shadowIntensity=le.intensity,$.shadowBias=le.bias,$.shadowNormalBias=le.normalBias,$.shadowRadius=le.radius,$.shadowMapSize=le.mapSize,n.spotShadow[x]=$,n.spotShadowMap[x]=te,w++}x++}else if(I.isRectAreaLight){const ne=e.get(I);ne.color.copy(W).multiplyScalar(J),ne.halfWidth.set(I.width*.5,0,0),ne.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=ne,m++}else if(I.isPointLight){const ne=e.get(I);if(ne.color.copy(I.color).multiplyScalar(I.intensity),ne.distance=I.distance,ne.decay=I.decay,I.castShadow){const le=I.shadow,$=t.get(I);$.shadowIntensity=le.intensity,$.shadowBias=le.bias,$.shadowNormalBias=le.normalBias,$.shadowRadius=le.radius,$.shadowMapSize=le.mapSize,$.shadowCameraNear=le.camera.near,$.shadowCameraFar=le.camera.far,n.pointShadow[_]=$,n.pointShadowMap[_]=te,n.pointShadowMatrix[_]=I.shadow.matrix,T++}n.point[_]=ne,_++}else if(I.isHemisphereLight){const ne=e.get(I);ne.skyColor.copy(I.color).multiplyScalar(J),ne.groundColor.copy(I.groundColor).multiplyScalar(J),n.hemi[h]=ne,h++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xe.LTC_FLOAT_1,n.rectAreaLTC2=xe.LTC_FLOAT_2):(n.rectAreaLTC1=xe.LTC_HALF_1,n.rectAreaLTC2=xe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==p||F.pointLength!==_||F.spotLength!==x||F.rectAreaLength!==m||F.hemiLength!==h||F.numDirectionalShadows!==E||F.numPointShadows!==T||F.numSpotShadows!==w||F.numSpotMaps!==R||F.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=h,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=w+R-C,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,F.directionalLength=p,F.pointLength=_,F.spotLength=x,F.rectAreaLength=m,F.hemiLength=h,F.numDirectionalShadows=E,F.numPointShadows=T,F.numSpotShadows=w,F.numSpotMaps=R,F.numLightProbes=P,n.version=h1++)}function c(l,u){let f=0,d=0,p=0,_=0,x=0;const m=u.matrixWorldInverse;for(let h=0,E=l.length;h<E;h++){const T=l[h];if(T.isDirectionalLight){const w=n.directional[f];w.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(m),f++}else if(T.isSpotLight){const w=n.spot[p];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(T.matrixWorld),a.setFromMatrixPosition(T.target.matrixWorld),w.direction.sub(a),w.direction.transformDirection(m),p++}else if(T.isRectAreaLight){const w=n.rectArea[_];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),s.identity(),r.copy(T.matrixWorld),r.premultiply(m),s.extractRotation(r),w.halfWidth.set(T.width*.5,0,0),w.halfHeight.set(0,T.height*.5,0),w.halfWidth.applyMatrix4(s),w.halfHeight.applyMatrix4(s),_++}else if(T.isPointLight){const w=n.point[d];w.position.setFromMatrixPosition(T.matrixWorld),w.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const w=n.hemi[x];w.direction.setFromMatrixPosition(T.matrixWorld),w.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function Ac(i){const e=new p1(i),t=[],n=[];function a(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function s(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:s}}function m1(i){let e=new WeakMap;function t(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new Ac(i),e.set(a,[o])):r>=s.length?(o=new Ac(i),s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const g1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_1=`uniform sampler2D shadow_pass;
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
}`;function v1(i,e,t){let n=new du;const a=new $e,r=new $e,s=new Bt,o=new Vh({depthPacking:Jf}),c=new Wh,l={},u=t.maxTextureSize,f={[xi]:dn,[dn]:xi,[$n]:$n},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $e},radius:{value:4}},vertexShader:g1,fragmentShader:_1}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new rn;_.setAttribute("position",new pn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Kt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc;let h=this.type;this.render=function(C,P,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Qn),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const J=h!==Kn&&this.type===Kn,re=h===Kn&&this.type!==Kn;for(let te=0,ne=C.length;te<ne;te++){const le=C[te],$=le.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;a.copy($.mapSize);const ye=$.getFrameExtents();if(a.multiply(ye),r.copy($.mapSize),(a.x>u||a.y>u)&&(a.x>u&&(r.x=Math.floor(u/ye.x),a.x=r.x*ye.x,$.mapSize.x=r.x),a.y>u&&(r.y=Math.floor(u/ye.y),a.y=r.y*ye.y,$.mapSize.y=r.y)),$.map===null||J===!0||re===!0){const Ie=this.type!==Kn?{minFilter:Dn,magFilter:Dn}:{};$.map!==null&&$.map.dispose(),$.map=new In(a.x,a.y,Ie),$.map.texture.name=le.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const Ee=$.getViewportCount();for(let Ie=0;Ie<Ee;Ie++){const at=$.getViewport(Ie);s.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),W.viewport(s),$.updateMatrices(le,Ie),n=$.getFrustum(),w(P,F,$.camera,le,this.type)}$.isPointLightShadow!==!0&&this.type===Kn&&E($,F),$.needsUpdate=!1}h=this.type,m.needsUpdate=!1,i.setRenderTarget(b,M,I)};function E(C,P){const F=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new In(a.x,a.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(P,null,F,d,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(P,null,F,p,x,null)}function T(C,P,F,b){let M=null;const I=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(I!==void 0)M=I;else if(M=F.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const W=M.uuid,J=P.uuid;let re=l[W];re===void 0&&(re={},l[W]=re);let te=re[J];te===void 0&&(te=M.clone(),re[J]=te,P.addEventListener("dispose",R)),M=te}if(M.visible=P.visible,M.wireframe=P.wireframe,b===Kn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:f[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,F.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const W=i.properties.get(M);W.light=F}return M}function w(C,P,F,b,M){if(C.visible===!1)return;if(C.layers.test(P.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===Kn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);const J=e.update(C),re=C.material;if(Array.isArray(re)){const te=J.groups;for(let ne=0,le=te.length;ne<le;ne++){const $=te[ne],ye=re[$.materialIndex];if(ye&&ye.visible){const Ee=T(C,ye,b,M);C.onBeforeShadow(i,C,P,F,J,Ee,$),i.renderBufferDirect(F,null,J,Ee,C,$),C.onAfterShadow(i,C,P,F,J,Ee,$)}}}else if(re.visible){const te=T(C,re,b,M);C.onBeforeShadow(i,C,P,F,J,te,null),i.renderBufferDirect(F,null,J,te,C,null),C.onAfterShadow(i,C,P,F,J,te,null)}}const W=C.children;for(let J=0,re=W.length;J<re;J++)w(W[J],P,F,b,M)}function R(C){C.target.removeEventListener("dispose",R);for(const F in l){const b=l[F],M=C.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const y1={[js]:Js,[Qs]:no,[eo]:io,[ha]:to,[Js]:js,[no]:Qs,[io]:eo,[to]:ha};function x1(i,e){function t(){let D=!1;const he=new Bt;let _e=null;const Pe=new Bt(0,0,0,0);return{setMask:function(L){_e!==L&&!D&&(i.colorMask(L,L,L,L),_e=L)},setLocked:function(L){D=L},setClear:function(L,ie,X,Ze,vt){vt===!0&&(L*=Ze,ie*=Ze,X*=Ze),he.set(L,ie,X,Ze),Pe.equals(he)===!1&&(i.clearColor(L,ie,X,Ze),Pe.copy(he))},reset:function(){D=!1,_e=null,Pe.set(-1,0,0,0)}}}function n(){let D=!1,he=!1,_e=null,Pe=null,L=null;return{setReversed:function(ie){if(he!==ie){const X=e.get("EXT_clip_control");ie?X.clipControlEXT(X.LOWER_LEFT_EXT,X.ZERO_TO_ONE_EXT):X.clipControlEXT(X.LOWER_LEFT_EXT,X.NEGATIVE_ONE_TO_ONE_EXT),he=ie;const Ze=L;L=null,this.setClear(Ze)}},getReversed:function(){return he},setTest:function(ie){ie?oe(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(ie){_e!==ie&&!D&&(i.depthMask(ie),_e=ie)},setFunc:function(ie){if(he&&(ie=y1[ie]),Pe!==ie){switch(ie){case js:i.depthFunc(i.NEVER);break;case Js:i.depthFunc(i.ALWAYS);break;case Qs:i.depthFunc(i.LESS);break;case ha:i.depthFunc(i.LEQUAL);break;case eo:i.depthFunc(i.EQUAL);break;case to:i.depthFunc(i.GEQUAL);break;case no:i.depthFunc(i.GREATER);break;case io:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=ie}},setLocked:function(ie){D=ie},setClear:function(ie){L!==ie&&(he&&(ie=1-ie),i.clearDepth(ie),L=ie)},reset:function(){D=!1,_e=null,Pe=null,L=null,he=!1}}}function a(){let D=!1,he=null,_e=null,Pe=null,L=null,ie=null,X=null,Ze=null,vt=null;return{setTest:function(st){D||(st?oe(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(st){he!==st&&!D&&(i.stencilMask(st),he=st)},setFunc:function(st,mn,Ht){(_e!==st||Pe!==mn||L!==Ht)&&(i.stencilFunc(st,mn,Ht),_e=st,Pe=mn,L=Ht)},setOp:function(st,mn,Ht){(ie!==st||X!==mn||Ze!==Ht)&&(i.stencilOp(st,mn,Ht),ie=st,X=mn,Ze=Ht)},setLocked:function(st){D=st},setClear:function(st){vt!==st&&(i.clearStencil(st),vt=st)},reset:function(){D=!1,he=null,_e=null,Pe=null,L=null,ie=null,X=null,Ze=null,vt=null}}}const r=new t,s=new n,o=new a,c=new WeakMap,l=new WeakMap;let u={},f={},d=new WeakMap,p=[],_=null,x=!1,m=null,h=null,E=null,T=null,w=null,R=null,C=null,P=new He(0,0,0),F=0,b=!1,M=null,I=null,W=null,J=null,re=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,le=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec($)[1]),ne=le>=1):$.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),ne=le>=2);let ye=null,Ee={};const Ie=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),pt=new Bt().fromArray(Ie),tt=new Bt().fromArray(at);function mt(D,he,_e,Pe){const L=new Uint8Array(4),ie=i.createTexture();i.bindTexture(D,ie),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let X=0;X<_e;X++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(he,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,L):i.texImage2D(he+X,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,L);return ie}const ee={};ee[i.TEXTURE_2D]=mt(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=mt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=mt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=mt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),oe(i.DEPTH_TEST),s.setFunc(ha),Ke(!1),De(El),oe(i.CULL_FACE),Pt(Qn);function oe(D){u[D]!==!0&&(i.enable(D),u[D]=!0)}function Ce(D){u[D]!==!1&&(i.disable(D),u[D]=!1)}function je(D,he){return f[D]!==he?(i.bindFramebuffer(D,he),f[D]=he,D===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=he),D===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=he),!0):!1}function Be(D,he){let _e=p,Pe=!1;if(D){_e=d.get(he),_e===void 0&&(_e=[],d.set(he,_e));const L=D.textures;if(_e.length!==L.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,X=L.length;ie<X;ie++)_e[ie]=i.COLOR_ATTACHMENT0+ie;_e.length=L.length,Pe=!0}}else _e[0]!==i.BACK&&(_e[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(_e)}function lt(D){return _!==D?(i.useProgram(D),_=D,!0):!1}const Ft={[Di]:i.FUNC_ADD,[Lf]:i.FUNC_SUBTRACT,[Df]:i.FUNC_REVERSE_SUBTRACT};Ft[If]=i.MIN,Ft[Uf]=i.MAX;const A={[Nf]:i.ZERO,[Ff]:i.ONE,[kf]:i.SRC_COLOR,[Ks]:i.SRC_ALPHA,[Vf]:i.SRC_ALPHA_SATURATE,[Gf]:i.DST_COLOR,[Bf]:i.DST_ALPHA,[Of]:i.ONE_MINUS_SRC_COLOR,[$s]:i.ONE_MINUS_SRC_ALPHA,[Hf]:i.ONE_MINUS_DST_COLOR,[zf]:i.ONE_MINUS_DST_ALPHA,[Wf]:i.CONSTANT_COLOR,[Xf]:i.ONE_MINUS_CONSTANT_COLOR,[Yf]:i.CONSTANT_ALPHA,[qf]:i.ONE_MINUS_CONSTANT_ALPHA};function Pt(D,he,_e,Pe,L,ie,X,Ze,vt,st){if(D===Qn){x===!0&&(Ce(i.BLEND),x=!1);return}if(x===!1&&(oe(i.BLEND),x=!0),D!==Pf){if(D!==m||st!==b){if((h!==Di||w!==Di)&&(i.blendEquation(i.FUNC_ADD),h=Di,w=Di),st)switch(D){case vn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tt:i.blendFunc(i.ONE,i.ONE);break;case Al:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case vn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Al:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,T=null,R=null,C=null,P.set(0,0,0),F=0,m=D,b=st}return}L=L||he,ie=ie||_e,X=X||Pe,(he!==h||L!==w)&&(i.blendEquationSeparate(Ft[he],Ft[L]),h=he,w=L),(_e!==E||Pe!==T||ie!==R||X!==C)&&(i.blendFuncSeparate(A[_e],A[Pe],A[ie],A[X]),E=_e,T=Pe,R=ie,C=X),(Ze.equals(P)===!1||vt!==F)&&(i.blendColor(Ze.r,Ze.g,Ze.b,vt),P.copy(Ze),F=vt),m=D,b=!1}function Je(D,he){D.side===$n?Ce(i.CULL_FACE):oe(i.CULL_FACE);let _e=D.side===dn;he&&(_e=!_e),Ke(_e),D.blending===vn&&D.transparent===!1?Pt(Qn):Pt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const Pe=D.stencilWrite;o.setTest(Pe),Pe&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Re(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(D){M!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),M=D)}function De(D){D!==Af?(oe(i.CULL_FACE),D!==I&&(D===El?i.cullFace(i.BACK):D===Cf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),I=D}function rt(D){D!==W&&(ne&&i.lineWidth(D),W=D)}function Re(D,he,_e){D?(oe(i.POLYGON_OFFSET_FILL),(J!==he||re!==_e)&&(i.polygonOffset(he,_e),J=he,re=_e)):Ce(i.POLYGON_OFFSET_FILL)}function Qe(D){D?oe(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function kt(D){D===void 0&&(D=i.TEXTURE0+te-1),ye!==D&&(i.activeTexture(D),ye=D)}function Mt(D,he,_e){_e===void 0&&(ye===null?_e=i.TEXTURE0+te-1:_e=ye);let Pe=Ee[_e];Pe===void 0&&(Pe={type:void 0,texture:void 0},Ee[_e]=Pe),(Pe.type!==D||Pe.texture!==he)&&(ye!==_e&&(i.activeTexture(_e),ye=_e),i.bindTexture(D,he||ee[D]),Pe.type=D,Pe.texture=he)}function S(){const D=Ee[ye];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ae(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ue(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ne(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(D){pt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),pt.copy(D))}function Ve(D){tt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),tt.copy(D))}function ze(D,he){let _e=l.get(he);_e===void 0&&(_e=new WeakMap,l.set(he,_e));let Pe=_e.get(D);Pe===void 0&&(Pe=i.getUniformBlockIndex(he,D.name),_e.set(D,Pe))}function ve(D,he){const Pe=l.get(he).get(D);c.get(he)!==Pe&&(i.uniformBlockBinding(he,Pe,D.__bindingPointIndex),c.set(he,Pe))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},ye=null,Ee={},f={},d=new WeakMap,p=[],_=null,x=!1,m=null,h=null,E=null,T=null,w=null,R=null,C=null,P=new He(0,0,0),F=0,b=!1,M=null,I=null,W=null,J=null,re=null,pt.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:oe,disable:Ce,bindFramebuffer:je,drawBuffers:Be,useProgram:lt,setBlending:Pt,setMaterial:Je,setFlipSided:Ke,setCullFace:De,setLineWidth:rt,setPolygonOffset:Re,setScissorTest:Qe,activeTexture:kt,bindTexture:Mt,unbindTexture:S,compressedTexImage2D:g,compressedTexImage3D:z,texImage2D:Ne,texImage3D:fe,updateUBOMapping:ze,uniformBlockBinding:ve,texStorage2D:me,texStorage3D:Le,texSubImage2D:Q,texSubImage3D:ae,compressedTexSubImage2D:j,compressedTexSubImage3D:Ue,scissor:Se,viewport:Ve,reset:et}}function M1(i,e,t,n,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new $e,u=new WeakMap;let f;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(S,g){return p?new OffscreenCanvas(S,g):qr("canvas")}function x(S,g,z){let Q=1;const ae=Mt(S);if((ae.width>z||ae.height>z)&&(Q=z/Math.max(ae.width,ae.height)),Q<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const j=Math.floor(Q*ae.width),Ue=Math.floor(Q*ae.height);f===void 0&&(f=_(j,Ue));const me=g?_(j,Ue):f;return me.width=j,me.height=Ue,me.getContext("2d").drawImage(S,0,0,j,Ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+j+"x"+Ue+")."),me}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),S;return S}function m(S){return S.generateMipmaps}function h(S){i.generateMipmap(S)}function E(S){return S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:S.isWebGL3DRenderTarget?i.TEXTURE_3D:S.isWebGLArrayRenderTarget||S.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(S,g,z,Q,ae=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let j=g;if(g===i.RED&&(z===i.FLOAT&&(j=i.R32F),z===i.HALF_FLOAT&&(j=i.R16F),z===i.UNSIGNED_BYTE&&(j=i.R8)),g===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.R8UI),z===i.UNSIGNED_SHORT&&(j=i.R16UI),z===i.UNSIGNED_INT&&(j=i.R32UI),z===i.BYTE&&(j=i.R8I),z===i.SHORT&&(j=i.R16I),z===i.INT&&(j=i.R32I)),g===i.RG&&(z===i.FLOAT&&(j=i.RG32F),z===i.HALF_FLOAT&&(j=i.RG16F),z===i.UNSIGNED_BYTE&&(j=i.RG8)),g===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RG8UI),z===i.UNSIGNED_SHORT&&(j=i.RG16UI),z===i.UNSIGNED_INT&&(j=i.RG32UI),z===i.BYTE&&(j=i.RG8I),z===i.SHORT&&(j=i.RG16I),z===i.INT&&(j=i.RG32I)),g===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGB8UI),z===i.UNSIGNED_SHORT&&(j=i.RGB16UI),z===i.UNSIGNED_INT&&(j=i.RGB32UI),z===i.BYTE&&(j=i.RGB8I),z===i.SHORT&&(j=i.RGB16I),z===i.INT&&(j=i.RGB32I)),g===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),z===i.UNSIGNED_INT&&(j=i.RGBA32UI),z===i.BYTE&&(j=i.RGBA8I),z===i.SHORT&&(j=i.RGBA16I),z===i.INT&&(j=i.RGBA32I)),g===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),g===i.RGBA){const Ue=ae?Xr:gt.getTransfer(Q);z===i.FLOAT&&(j=i.RGBA32F),z===i.HALF_FLOAT&&(j=i.RGBA16F),z===i.UNSIGNED_BYTE&&(j=Ue===At?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function w(S,g){let z;return S?g===null||g===Fi||g===za?z=i.DEPTH24_STENCIL8:g===Jn?z=i.DEPTH32F_STENCIL8:g===Ba&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Fi||g===za?z=i.DEPTH_COMPONENT24:g===Jn?z=i.DEPTH_COMPONENT32F:g===Ba&&(z=i.DEPTH_COMPONENT16),z}function R(S,g){return m(S)===!0||S.isFramebufferTexture&&S.minFilter!==Dn&&S.minFilter!==kn?Math.log2(Math.max(g.width,g.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?g.mipmaps.length:1}function C(S){const g=S.target;g.removeEventListener("dispose",C),F(g),g.isVideoTexture&&u.delete(g)}function P(S){const g=S.target;g.removeEventListener("dispose",P),M(g)}function F(S){const g=n.get(S);if(g.__webglInit===void 0)return;const z=S.source,Q=d.get(z);if(Q){const ae=Q[g.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&b(S),Object.keys(Q).length===0&&d.delete(z)}n.remove(S)}function b(S){const g=n.get(S);i.deleteTexture(g.__webglTexture);const z=S.source,Q=d.get(z);delete Q[g.__cacheKey],s.memory.textures--}function M(S){const g=n.get(S);if(S.depthTexture&&(S.depthTexture.dispose(),n.remove(S.depthTexture)),S.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(g.__webglFramebuffer[Q]))for(let ae=0;ae<g.__webglFramebuffer[Q].length;ae++)i.deleteFramebuffer(g.__webglFramebuffer[Q][ae]);else i.deleteFramebuffer(g.__webglFramebuffer[Q]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[Q])}else{if(Array.isArray(g.__webglFramebuffer))for(let Q=0;Q<g.__webglFramebuffer.length;Q++)i.deleteFramebuffer(g.__webglFramebuffer[Q]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let Q=0;Q<g.__webglColorRenderbuffer.length;Q++)g.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[Q]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const z=S.textures;for(let Q=0,ae=z.length;Q<ae;Q++){const j=n.get(z[Q]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),s.memory.textures--),n.remove(z[Q])}n.remove(S)}let I=0;function W(){I=0}function J(){const S=I;return S>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+a.maxTextures),I+=1,S}function re(S){const g=[];return g.push(S.wrapS),g.push(S.wrapT),g.push(S.wrapR||0),g.push(S.magFilter),g.push(S.minFilter),g.push(S.anisotropy),g.push(S.internalFormat),g.push(S.format),g.push(S.type),g.push(S.generateMipmaps),g.push(S.premultiplyAlpha),g.push(S.flipY),g.push(S.unpackAlignment),g.push(S.colorSpace),g.join()}function te(S,g){const z=n.get(S);if(S.isVideoTexture&&Qe(S),S.isRenderTargetTexture===!1&&S.isExternalTexture!==!0&&S.version>0&&z.__version!==S.version){const Q=S.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(z,S,g);return}}else S.isExternalTexture&&(z.__webglTexture=S.sourceTexture?S.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+g)}function ne(S,g){const z=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&z.__version!==S.version){ee(z,S,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+g)}function le(S,g){const z=n.get(S);if(S.isRenderTargetTexture===!1&&S.version>0&&z.__version!==S.version){ee(z,S,g);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+g)}function $(S,g){const z=n.get(S);if(S.version>0&&z.__version!==S.version){oe(z,S,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+g)}const ye={[ma]:i.REPEAT,[gi]:i.CLAMP_TO_EDGE,[so]:i.MIRRORED_REPEAT},Ee={[Dn]:i.NEAREST,[$f]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[ps]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},Ie={[th]:i.NEVER,[oh]:i.ALWAYS,[nh]:i.LESS,[nu]:i.LEQUAL,[ih]:i.EQUAL,[sh]:i.GEQUAL,[ah]:i.GREATER,[rh]:i.NOTEQUAL};function at(S,g){if(g.type===Jn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===kn||g.magFilter===ps||g.magFilter===sr||g.magFilter===Ui||g.minFilter===kn||g.minFilter===ps||g.minFilter===sr||g.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,ye[g.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,ye[g.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,ye[g.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,Ee[g.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,Ee[g.minFilter]),g.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,Ie[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Dn||g.minFilter!==sr&&g.minFilter!==Ui||g.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function pt(S,g){let z=!1;S.__webglInit===void 0&&(S.__webglInit=!0,g.addEventListener("dispose",C));const Q=g.source;let ae=d.get(Q);ae===void 0&&(ae={},d.set(Q,ae));const j=re(g);if(j!==S.__cacheKey){ae[j]===void 0&&(ae[j]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,z=!0),ae[j].usedTimes++;const Ue=ae[S.__cacheKey];Ue!==void 0&&(ae[S.__cacheKey].usedTimes--,Ue.usedTimes===0&&b(g)),S.__cacheKey=j,S.__webglTexture=ae[j].texture}return z}function tt(S,g,z){return Math.floor(Math.floor(S/z)/g)}function mt(S,g,z,Q){const j=S.updateRanges;if(j.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,z,Q,g.data);else{j.sort((fe,Se)=>fe.start-Se.start);let Ue=0;for(let fe=1;fe<j.length;fe++){const Se=j[Ue],Ve=j[fe],ze=Se.start+Se.count,ve=tt(Ve.start,g.width,4),et=tt(Se.start,g.width,4);Ve.start<=ze+1&&ve===et&&tt(Ve.start+Ve.count-1,g.width,4)===ve?Se.count=Math.max(Se.count,Ve.start+Ve.count-Se.start):(++Ue,j[Ue]=Ve)}j.length=Ue+1;const me=i.getParameter(i.UNPACK_ROW_LENGTH),Le=i.getParameter(i.UNPACK_SKIP_PIXELS),Ne=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let fe=0,Se=j.length;fe<Se;fe++){const Ve=j[fe],ze=Math.floor(Ve.start/4),ve=Math.ceil(Ve.count/4),et=ze%g.width,D=Math.floor(ze/g.width),he=ve,_e=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,et),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,et,D,he,_e,z,Q,g.data)}S.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,me),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ne)}}function ee(S,g,z){let Q=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(Q=i.TEXTURE_3D);const ae=pt(S,g),j=g.source;t.bindTexture(Q,S.__webglTexture,i.TEXTURE0+z);const Ue=n.get(j);if(j.version!==Ue.__version||ae===!0){t.activeTexture(i.TEXTURE0+z);const me=gt.getPrimaries(gt.workingColorSpace),Le=g.colorSpace===mi?null:gt.getPrimaries(g.colorSpace),Ne=g.colorSpace===mi||me===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let fe=x(g.image,!1,a.maxTextureSize);fe=kt(g,fe);const Se=r.convert(g.format,g.colorSpace),Ve=r.convert(g.type);let ze=T(g.internalFormat,Se,Ve,g.colorSpace,g.isVideoTexture);at(Q,g);let ve;const et=g.mipmaps,D=g.isVideoTexture!==!0,he=Ue.__version===void 0||ae===!0,_e=j.dataReady,Pe=R(g,fe);if(g.isDepthTexture)ze=w(g.format===Ha,g.type),he&&(D?t.texStorage2D(i.TEXTURE_2D,1,ze,fe.width,fe.height):t.texImage2D(i.TEXTURE_2D,0,ze,fe.width,fe.height,0,Se,Ve,null));else if(g.isDataTexture)if(et.length>0){D&&he&&t.texStorage2D(i.TEXTURE_2D,Pe,ze,et[0].width,et[0].height);for(let L=0,ie=et.length;L<ie;L++)ve=et[L],D?_e&&t.texSubImage2D(i.TEXTURE_2D,L,0,0,ve.width,ve.height,Se,Ve,ve.data):t.texImage2D(i.TEXTURE_2D,L,ze,ve.width,ve.height,0,Se,Ve,ve.data);g.generateMipmaps=!1}else D?(he&&t.texStorage2D(i.TEXTURE_2D,Pe,ze,fe.width,fe.height),_e&&mt(g,fe,Se,Ve)):t.texImage2D(i.TEXTURE_2D,0,ze,fe.width,fe.height,0,Se,Ve,fe.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,ze,et[0].width,et[0].height,fe.depth);for(let L=0,ie=et.length;L<ie;L++)if(ve=et[L],g.format!==Pn)if(Se!==null)if(D){if(_e)if(g.layerUpdates.size>0){const X=ic(ve.width,ve.height,g.format,g.type);for(const Ze of g.layerUpdates){const vt=ve.data.subarray(Ze*X/ve.data.BYTES_PER_ELEMENT,(Ze+1)*X/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,L,0,0,Ze,ve.width,ve.height,1,Se,vt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,L,0,0,0,ve.width,ve.height,fe.depth,Se,ve.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,L,ze,ve.width,ve.height,fe.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?_e&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,L,0,0,0,ve.width,ve.height,fe.depth,Se,Ve,ve.data):t.texImage3D(i.TEXTURE_2D_ARRAY,L,ze,ve.width,ve.height,fe.depth,0,Se,Ve,ve.data)}else{D&&he&&t.texStorage2D(i.TEXTURE_2D,Pe,ze,et[0].width,et[0].height);for(let L=0,ie=et.length;L<ie;L++)ve=et[L],g.format!==Pn?Se!==null?D?_e&&t.compressedTexSubImage2D(i.TEXTURE_2D,L,0,0,ve.width,ve.height,Se,ve.data):t.compressedTexImage2D(i.TEXTURE_2D,L,ze,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?_e&&t.texSubImage2D(i.TEXTURE_2D,L,0,0,ve.width,ve.height,Se,Ve,ve.data):t.texImage2D(i.TEXTURE_2D,L,ze,ve.width,ve.height,0,Se,Ve,ve.data)}else if(g.isDataArrayTexture)if(D){if(he&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Pe,ze,fe.width,fe.height,fe.depth),_e)if(g.layerUpdates.size>0){const L=ic(fe.width,fe.height,g.format,g.type);for(const ie of g.layerUpdates){const X=fe.data.subarray(ie*L/fe.data.BYTES_PER_ELEMENT,(ie+1)*L/fe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ie,fe.width,fe.height,1,Se,Ve,X)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,Se,Ve,fe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,fe.width,fe.height,fe.depth,0,Se,Ve,fe.data);else if(g.isData3DTexture)D?(he&&t.texStorage3D(i.TEXTURE_3D,Pe,ze,fe.width,fe.height,fe.depth),_e&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,Se,Ve,fe.data)):t.texImage3D(i.TEXTURE_3D,0,ze,fe.width,fe.height,fe.depth,0,Se,Ve,fe.data);else if(g.isFramebufferTexture){if(he)if(D)t.texStorage2D(i.TEXTURE_2D,Pe,ze,fe.width,fe.height);else{let L=fe.width,ie=fe.height;for(let X=0;X<Pe;X++)t.texImage2D(i.TEXTURE_2D,X,ze,L,ie,0,Se,Ve,null),L>>=1,ie>>=1}}else if(et.length>0){if(D&&he){const L=Mt(et[0]);t.texStorage2D(i.TEXTURE_2D,Pe,ze,L.width,L.height)}for(let L=0,ie=et.length;L<ie;L++)ve=et[L],D?_e&&t.texSubImage2D(i.TEXTURE_2D,L,0,0,Se,Ve,ve):t.texImage2D(i.TEXTURE_2D,L,ze,Se,Ve,ve);g.generateMipmaps=!1}else if(D){if(he){const L=Mt(fe);t.texStorage2D(i.TEXTURE_2D,Pe,ze,L.width,L.height)}_e&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,Ve,fe)}else t.texImage2D(i.TEXTURE_2D,0,ze,Se,Ve,fe);m(g)&&h(Q),Ue.__version=j.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function oe(S,g,z){if(g.image.length!==6)return;const Q=pt(S,g),ae=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+z);const j=n.get(ae);if(ae.version!==j.__version||Q===!0){t.activeTexture(i.TEXTURE0+z);const Ue=gt.getPrimaries(gt.workingColorSpace),me=g.colorSpace===mi?null:gt.getPrimaries(g.colorSpace),Le=g.colorSpace===mi||Ue===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ne=g.isCompressedTexture||g.image[0].isCompressedTexture,fe=g.image[0]&&g.image[0].isDataTexture,Se=[];for(let ie=0;ie<6;ie++)!Ne&&!fe?Se[ie]=x(g.image[ie],!0,a.maxCubemapSize):Se[ie]=fe?g.image[ie].image:g.image[ie],Se[ie]=kt(g,Se[ie]);const Ve=Se[0],ze=r.convert(g.format,g.colorSpace),ve=r.convert(g.type),et=T(g.internalFormat,ze,ve,g.colorSpace),D=g.isVideoTexture!==!0,he=j.__version===void 0||Q===!0,_e=ae.dataReady;let Pe=R(g,Ve);at(i.TEXTURE_CUBE_MAP,g);let L;if(Ne){D&&he&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,et,Ve.width,Ve.height);for(let ie=0;ie<6;ie++){L=Se[ie].mipmaps;for(let X=0;X<L.length;X++){const Ze=L[X];g.format!==Pn?ze!==null?D?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,X,0,0,Ze.width,Ze.height,ze,Ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,X,et,Ze.width,Ze.height,0,Ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,X,0,0,Ze.width,Ze.height,ze,ve,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,X,et,Ze.width,Ze.height,0,ze,ve,Ze.data)}}}else{if(L=g.mipmaps,D&&he){L.length>0&&Pe++;const ie=Mt(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,et,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(fe){D?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Se[ie].width,Se[ie].height,ze,ve,Se[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,et,Se[ie].width,Se[ie].height,0,ze,ve,Se[ie].data);for(let X=0;X<L.length;X++){const vt=L[X].image[ie].image;D?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,X+1,0,0,vt.width,vt.height,ze,ve,vt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,X+1,et,vt.width,vt.height,0,ze,ve,vt.data)}}else{D?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ze,ve,Se[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,et,ze,ve,Se[ie]);for(let X=0;X<L.length;X++){const Ze=L[X];D?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,X+1,0,0,ze,ve,Ze.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,X+1,et,ze,ve,Ze.image[ie])}}}m(g)&&h(i.TEXTURE_CUBE_MAP),j.__version=ae.version,g.onUpdate&&g.onUpdate(g)}S.__version=g.version}function Ce(S,g,z,Q,ae,j){const Ue=r.convert(z.format,z.colorSpace),me=r.convert(z.type),Le=T(z.internalFormat,Ue,me,z.colorSpace),Ne=n.get(g),fe=n.get(z);if(fe.__renderTarget=g,!Ne.__hasExternalTextures){const Se=Math.max(1,g.width>>j),Ve=Math.max(1,g.height>>j);ae===i.TEXTURE_3D||ae===i.TEXTURE_2D_ARRAY?t.texImage3D(ae,j,Le,Se,Ve,g.depth,0,Ue,me,null):t.texImage2D(ae,j,Le,Se,Ve,0,Ue,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),Re(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,ae,fe.__webglTexture,0,rt(g)):(ae===i.TEXTURE_2D||ae>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,ae,fe.__webglTexture,j),t.bindFramebuffer(i.FRAMEBUFFER,null)}function je(S,g,z){if(i.bindRenderbuffer(i.RENDERBUFFER,S),g.depthBuffer){const Q=g.depthTexture,ae=Q&&Q.isDepthTexture?Q.type:null,j=w(g.stencilBuffer,ae),Ue=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=rt(g);Re(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,j,g.width,g.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,j,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,j,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ue,i.RENDERBUFFER,S)}else{const Q=g.textures;for(let ae=0;ae<Q.length;ae++){const j=Q[ae],Ue=r.convert(j.format,j.colorSpace),me=r.convert(j.type),Le=T(j.internalFormat,Ue,me,j.colorSpace),Ne=rt(g);z&&Re(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ne,Le,g.width,g.height):Re(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ne,Le,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Le,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(S,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(g.depthTexture);Q.__renderTarget=g,(!Q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),te(g.depthTexture,0);const ae=Q.__webglTexture,j=rt(g);if(g.depthTexture.format===Ga)Re(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ae,0);else if(g.depthTexture.format===Ha)Re(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function lt(S){const g=n.get(S),z=S.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==S.depthTexture){const Q=S.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),Q){const ae=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,Q.removeEventListener("dispose",ae)};Q.addEventListener("dispose",ae),g.__depthDisposeCallback=ae}g.__boundDepthTexture=Q}if(S.depthTexture&&!g.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const Q=S.texture.mipmaps;Q&&Q.length>0?Be(g.__webglFramebuffer[0],S):Be(g.__webglFramebuffer,S)}else if(z){g.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[Q]),g.__webglDepthbuffer[Q]===void 0)g.__webglDepthbuffer[Q]=i.createRenderbuffer(),je(g.__webglDepthbuffer[Q],S,!1);else{const ae=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=g.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,j)}}else{const Q=S.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),je(g.__webglDepthbuffer,S,!1);else{const ae=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,j)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(S,g,z){const Q=n.get(S);g!==void 0&&Ce(Q.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&lt(S)}function A(S){const g=S.texture,z=n.get(S),Q=n.get(g);S.addEventListener("dispose",P);const ae=S.textures,j=S.isWebGLCubeRenderTarget===!0,Ue=ae.length>1;if(Ue||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=g.version,s.memory.textures++),j){z.__webglFramebuffer=[];for(let me=0;me<6;me++)if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer[me]=[];for(let Le=0;Le<g.mipmaps.length;Le++)z.__webglFramebuffer[me][Le]=i.createFramebuffer()}else z.__webglFramebuffer[me]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer=[];for(let me=0;me<g.mipmaps.length;me++)z.__webglFramebuffer[me]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Ue)for(let me=0,Le=ae.length;me<Le;me++){const Ne=n.get(ae[me]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),s.memory.textures++)}if(S.samples>0&&Re(S)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let me=0;me<ae.length;me++){const Le=ae[me];z.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[me]);const Ne=r.convert(Le.format,Le.colorSpace),fe=r.convert(Le.type),Se=T(Le.internalFormat,Ne,fe,Le.colorSpace,S.isXRRenderTarget===!0),Ve=rt(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,Se,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,z.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),je(z.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),at(i.TEXTURE_CUBE_MAP,g);for(let me=0;me<6;me++)if(g.mipmaps&&g.mipmaps.length>0)for(let Le=0;Le<g.mipmaps.length;Le++)Ce(z.__webglFramebuffer[me][Le],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,Le);else Ce(z.__webglFramebuffer[me],S,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);m(g)&&h(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ue){for(let me=0,Le=ae.length;me<Le;me++){const Ne=ae[me],fe=n.get(Ne);let Se=i.TEXTURE_2D;(S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(Se=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,fe.__webglTexture),at(Se,Ne),Ce(z.__webglFramebuffer,S,Ne,i.COLOR_ATTACHMENT0+me,Se,0),m(Ne)&&h(Se)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(me=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Q.__webglTexture),at(me,g),g.mipmaps&&g.mipmaps.length>0)for(let Le=0;Le<g.mipmaps.length;Le++)Ce(z.__webglFramebuffer[Le],S,g,i.COLOR_ATTACHMENT0,me,Le);else Ce(z.__webglFramebuffer,S,g,i.COLOR_ATTACHMENT0,me,0);m(g)&&h(me),t.unbindTexture()}S.depthBuffer&&lt(S)}function Pt(S){const g=S.textures;for(let z=0,Q=g.length;z<Q;z++){const ae=g[z];if(m(ae)){const j=E(S),Ue=n.get(ae).__webglTexture;t.bindTexture(j,Ue),h(j),t.unbindTexture()}}}const Je=[],Ke=[];function De(S){if(S.samples>0){if(Re(S)===!1){const g=S.textures,z=S.width,Q=S.height;let ae=i.COLOR_BUFFER_BIT;const j=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ue=n.get(S),me=g.length>1;if(me)for(let Ne=0;Ne<g.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer);const Le=S.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let Ne=0;Ne<g.length;Ne++){if(S.resolveDepthBuffer&&(S.depthBuffer&&(ae|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&S.resolveStencilBuffer&&(ae|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ne]);const fe=n.get(g[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,fe,0)}i.blitFramebuffer(0,0,z,Q,0,0,z,Q,ae,i.NEAREST),c===!0&&(Je.length=0,Ke.length=0,Je.push(i.COLOR_ATTACHMENT0+Ne),S.depthBuffer&&S.resolveDepthBuffer===!1&&(Je.push(j),Ke.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Je))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let Ne=0;Ne<g.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,Ue.__webglColorRenderbuffer[Ne]);const fe=n.get(g[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,fe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(S.depthBuffer&&S.resolveDepthBuffer===!1&&c){const g=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function rt(S){return Math.min(a.maxSamples,S.samples)}function Re(S){const g=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Qe(S){const g=s.render.frame;u.get(S)!==g&&(u.set(S,g),S.update())}function kt(S,g){const z=S.colorSpace,Q=S.format,ae=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||z!==ga&&z!==mi&&(gt.getTransfer(z)===At?(Q!==Pn||ae!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),g}function Mt(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(l.width=S.naturalWidth||S.width,l.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(l.width=S.displayWidth,l.height=S.displayHeight):(l.width=S.width,l.height=S.height),l}this.allocateTextureUnit=J,this.resetTextureUnits=W,this.setTexture2D=te,this.setTexture2DArray=ne,this.setTexture3D=le,this.setTextureCube=$,this.rebindTextures=Ft,this.setupRenderTarget=A,this.updateRenderTargetMipmap=Pt,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Re}function S1(i,e){function t(n,a=mi){let r;const s=gt.getTransfer(a);if(n===ni)return i.UNSIGNED_BYTE;if(n===jo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Jo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$c)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zc)return i.BYTE;if(n===Kc)return i.SHORT;if(n===Ba)return i.UNSIGNED_SHORT;if(n===$o)return i.INT;if(n===Fi)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===ei)return i.HALF_FLOAT;if(n===Jc)return i.ALPHA;if(n===Qc)return i.RGB;if(n===Pn)return i.RGBA;if(n===Ga)return i.DEPTH_COMPONENT;if(n===Ha)return i.DEPTH_STENCIL;if(n===eu)return i.RED;if(n===Qo)return i.RED_INTEGER;if(n===tu)return i.RG;if(n===el)return i.RG_INTEGER;if(n===tl)return i.RGBA_INTEGER;if(n===Br||n===zr||n===Gr||n===Hr)if(s===At)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oo||n===lo||n===co||n===uo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===co)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fo||n===ho||n===po)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fo||n===ho)return s===At?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===po)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===mo||n===go||n===_o||n===vo||n===yo||n===xo||n===Mo||n===So||n===bo||n===wo||n===To||n===Eo||n===Ao||n===Co)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===mo)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===go)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vo)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yo)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xo)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===bo)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wo)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===To)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Eo)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ao)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Co)return s===At?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ro||n===Po||n===Lo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ro)return s===At?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Do||n===Io||n===Uo||n===No)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Do)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Io)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Uo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===No)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===za?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const b1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,w1=`
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

}`;class T1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new gu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ln({vertexShader:b1,fragmentShader:w1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Kt(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class E1 extends Ma{constructor(e,t){super();const n=this;let a=null,r=1,s=null,o="local-floor",c=1,l=null,u=null,f=null,d=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new T1,h={},E=t.getContextAttributes();let T=null,w=null;const R=[],C=[],P=new $e;let F=null;const b=new Mn;b.viewport=new Bt;const M=new Mn;M.viewport=new Bt;const I=[b,M],W=new Xh;let J=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let oe=R[ee];return oe===void 0&&(oe=new ks,R[ee]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ee){let oe=R[ee];return oe===void 0&&(oe=new ks,R[ee]=oe),oe.getGripSpace()},this.getHand=function(ee){let oe=R[ee];return oe===void 0&&(oe=new ks,R[ee]=oe),oe.getHandSpace()};function te(ee){const oe=C.indexOf(ee.inputSource);if(oe===-1)return;const Ce=R[oe];Ce!==void 0&&(Ce.update(ee.inputSource,ee.frame,l||s),Ce.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ne(){a.removeEventListener("select",te),a.removeEventListener("selectstart",te),a.removeEventListener("selectend",te),a.removeEventListener("squeeze",te),a.removeEventListener("squeezestart",te),a.removeEventListener("squeezeend",te),a.removeEventListener("end",ne),a.removeEventListener("inputsourceschange",le);for(let ee=0;ee<R.length;ee++){const oe=C[ee];oe!==null&&(C[ee]=null,R[ee].disconnect(oe))}J=null,re=null,m.reset();for(const ee in h)delete h[ee];e.setRenderTarget(T),p=null,d=null,f=null,a=null,w=null,mt.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(a,t)),f},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(ee){if(a=ee,a!==null){if(T=e.getRenderTarget(),a.addEventListener("select",te),a.addEventListener("selectstart",te),a.addEventListener("selectend",te),a.addEventListener("squeeze",te),a.addEventListener("squeezestart",te),a.addEventListener("squeezeend",te),a.addEventListener("end",ne),a.addEventListener("inputsourceschange",le),E.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(P),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,je=null,Be=null;E.depth&&(Be=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=E.stencil?Ha:Ga,je=E.stencil?za:Fi);const lt={colorFormat:t.RGBA8,depthFormat:Be,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(lt),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),w=new In(d.textureWidth,d.textureHeight,{format:Pn,type:ni,depthTexture:new mu(d.textureWidth,d.textureHeight,je,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Ce={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,t,Ce),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),w=new In(p.framebufferWidth,p.framebufferHeight,{format:Pn,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await a.requestReferenceSpace(o),mt.setContext(a),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function le(ee){for(let oe=0;oe<ee.removed.length;oe++){const Ce=ee.removed[oe],je=C.indexOf(Ce);je>=0&&(C[je]=null,R[je].disconnect(Ce))}for(let oe=0;oe<ee.added.length;oe++){const Ce=ee.added[oe];let je=C.indexOf(Ce);if(je===-1){for(let lt=0;lt<R.length;lt++)if(lt>=C.length){C.push(Ce),je=lt;break}else if(C[lt]===null){C[lt]=Ce,je=lt;break}if(je===-1)break}const Be=R[je];Be&&Be.connect(Ce)}}const $=new N,ye=new N;function Ee(ee,oe,Ce){$.setFromMatrixPosition(oe.matrixWorld),ye.setFromMatrixPosition(Ce.matrixWorld);const je=$.distanceTo(ye),Be=oe.projectionMatrix.elements,lt=Ce.projectionMatrix.elements,Ft=Be[14]/(Be[10]-1),A=Be[14]/(Be[10]+1),Pt=(Be[9]+1)/Be[5],Je=(Be[9]-1)/Be[5],Ke=(Be[8]-1)/Be[0],De=(lt[8]+1)/lt[0],rt=Ft*Ke,Re=Ft*De,Qe=je/(-Ke+De),kt=Qe*-Ke;if(oe.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(kt),ee.translateZ(Qe),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Be[10]===-1)ee.projectionMatrix.copy(oe.projectionMatrix),ee.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const Mt=Ft+Qe,S=A+Qe,g=rt-kt,z=Re+(je-kt),Q=Pt*A/S*Mt,ae=Je*A/S*Mt;ee.projectionMatrix.makePerspective(g,z,Q,ae,Mt,S),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function Ie(ee,oe){oe===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(oe.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(a===null)return;let oe=ee.near,Ce=ee.far;m.texture!==null&&(m.depthNear>0&&(oe=m.depthNear),m.depthFar>0&&(Ce=m.depthFar)),W.near=M.near=b.near=oe,W.far=M.far=b.far=Ce,(J!==W.near||re!==W.far)&&(a.updateRenderState({depthNear:W.near,depthFar:W.far}),J=W.near,re=W.far),W.layers.mask=ee.layers.mask|6,b.layers.mask=W.layers.mask&3,M.layers.mask=W.layers.mask&5;const je=ee.parent,Be=W.cameras;Ie(W,je);for(let lt=0;lt<Be.length;lt++)Ie(Be[lt],je);Be.length===2?Ee(W,b,M):W.projectionMatrix.copy(b.projectionMatrix),at(ee,W,je)};function at(ee,oe,Ce){Ce===null?ee.matrix.copy(oe.matrixWorld):(ee.matrix.copy(Ce.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(oe.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(oe.projectionMatrix),ee.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=ko*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(ee){c=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(ee){return h[ee]};let pt=null;function tt(ee,oe){if(u=oe.getViewerPose(l||s),_=oe,u!==null){const Ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(w,p.framebuffer),e.setRenderTarget(w));let je=!1;Ce.length!==W.cameras.length&&(W.cameras.length=0,je=!0);for(let A=0;A<Ce.length;A++){const Pt=Ce[A];let Je=null;if(p!==null)Je=p.getViewport(Pt);else{const De=f.getViewSubImage(d,Pt);Je=De.viewport,A===0&&(e.setRenderTargetTextures(w,De.colorTexture,De.depthStencilTexture),e.setRenderTarget(w))}let Ke=I[A];Ke===void 0&&(Ke=new Mn,Ke.layers.enable(A),Ke.viewport=new Bt,I[A]=Ke),Ke.matrix.fromArray(Pt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(Pt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(Je.x,Je.y,Je.width,Je.height),A===0&&(W.matrix.copy(Ke.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),je===!0&&W.cameras.push(Ke)}const Be=a.enabledFeatures;if(Be&&Be.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const A=f.getDepthInformation(Ce[0]);A&&A.isValid&&A.texture&&m.init(A,a.renderState)}if(Be&&Be.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let A=0;A<Ce.length;A++){const Pt=Ce[A].camera;if(Pt){let Je=h[Pt];Je||(Je=new gu,h[Pt]=Je);const Ke=f.getCameraImage(Pt);Je.sourceTexture=Ke}}}}for(let Ce=0;Ce<R.length;Ce++){const je=C[Ce],Be=R[Ce];je!==null&&Be!==void 0&&Be.update(je,oe,l||s)}pt&&pt(ee,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),_=null}const mt=new vu;mt.setAnimationLoop(tt),this.setAnimationLoop=function(ee){pt=ee},this.dispose=function(){}}}const Ri=new ii,A1=new Nt;function C1(i,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function n(m,h){h.color.getRGB(m.fogColor.value,cu(i)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function a(m,h,E,T,w){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(m,h):h.isMeshToonMaterial?(r(m,h),f(m,h)):h.isMeshPhongMaterial?(r(m,h),u(m,h)):h.isMeshStandardMaterial?(r(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,w)):h.isMeshMatcapMaterial?(r(m,h),_(m,h)):h.isMeshDepthMaterial?r(m,h):h.isMeshDistanceMaterial?(r(m,h),x(m,h)):h.isMeshNormalMaterial?r(m,h):h.isLineBasicMaterial?(s(m,h),h.isLineDashedMaterial&&o(m,h)):h.isPointsMaterial?c(m,h,E,T):h.isSpriteMaterial?l(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===dn&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===dn&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const E=e.get(h),T=E.envMap,w=E.envMapRotation;T&&(m.envMap.value=T,Ri.copy(w),Ri.x*=-1,Ri.y*=-1,Ri.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ri.y*=-1,Ri.z*=-1),m.envMapRotation.value.setFromMatrix4(A1.makeRotationFromEuler(Ri)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap&&(m.lightMap.value=h.lightMap,m.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,m.lightMapTransform)),h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function s(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function o(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function c(m,h,E,T){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*E,m.scale.value=T*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function l(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),h.envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,E){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===dn&&m.clearcoatNormalScale.value.negate())),h.dispersion>0&&(m.dispersion.value=h.dispersion),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function x(m,h){const E=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function R1(i,e,t,n){let a={},r={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,T){const w=T.program;n.uniformBlockBinding(E,w)}function l(E,T){let w=a[E.id];w===void 0&&(_(E),w=u(E),a[E.id]=w,E.addEventListener("dispose",m));const R=T.program;n.updateUBOMapping(E,R);const C=e.render.frame;r[E.id]!==C&&(d(E),r[E.id]=C)}function u(E){const T=f();E.__bindingPointIndex=T;const w=i.createBuffer(),R=E.__size,C=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,R,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,w),w}function f(){for(let E=0;E<o;E++)if(s.indexOf(E)===-1)return s.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const T=a[E.id],w=E.uniforms,R=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let C=0,P=w.length;C<P;C++){const F=Array.isArray(w[C])?w[C]:[w[C]];for(let b=0,M=F.length;b<M;b++){const I=F[b];if(p(I,C,b,R)===!0){const W=I.__offset,J=Array.isArray(I.value)?I.value:[I.value];let re=0;for(let te=0;te<J.length;te++){const ne=J[te],le=x(ne);typeof ne=="number"||typeof ne=="boolean"?(I.__data[0]=ne,i.bufferSubData(i.UNIFORM_BUFFER,W+re,I.__data)):ne.isMatrix3?(I.__data[0]=ne.elements[0],I.__data[1]=ne.elements[1],I.__data[2]=ne.elements[2],I.__data[3]=0,I.__data[4]=ne.elements[3],I.__data[5]=ne.elements[4],I.__data[6]=ne.elements[5],I.__data[7]=0,I.__data[8]=ne.elements[6],I.__data[9]=ne.elements[7],I.__data[10]=ne.elements[8],I.__data[11]=0):(ne.toArray(I.__data,re),re+=le.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,I.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,T,w,R){const C=E.value,P=T+"_"+w;if(R[P]===void 0)return typeof C=="number"||typeof C=="boolean"?R[P]=C:R[P]=C.clone(),!0;{const F=R[P];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return R[P]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function _(E){const T=E.uniforms;let w=0;const R=16;for(let P=0,F=T.length;P<F;P++){const b=Array.isArray(T[P])?T[P]:[T[P]];for(let M=0,I=b.length;M<I;M++){const W=b[M],J=Array.isArray(W.value)?W.value:[W.value];for(let re=0,te=J.length;re<te;re++){const ne=J[re],le=x(ne),$=w%R,ye=$%le.boundary,Ee=$+ye;w+=ye,Ee!==0&&R-Ee<le.storage&&(w+=R-Ee),W.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=w,w+=le.storage}}}const C=w%R;return C>0&&(w+=R-C),E.__size=w,E.__cache={},this}function x(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const w=s.indexOf(T.__bindingPointIndex);s.splice(w,1),i.deleteBuffer(a[T.id]),delete a[T.id],delete r[T.id]}function h(){for(const E in a)i.deleteBuffer(a[E]);s=[],a={},r={}}return{bind:c,update:l,dispose:h}}class P1{constructor(e={}){const{canvas:t=ch(),context:n=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,h=null;const E=[],T=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let R=!1;this._outputColorSpace=hn;let C=0,P=0,F=null,b=-1,M=null;const I=new Bt,W=new Bt;let J=null;const re=new He(0);let te=0,ne=t.width,le=t.height,$=1,ye=null,Ee=null;const Ie=new Bt(0,0,ne,le),at=new Bt(0,0,ne,le);let pt=!1;const tt=new du;let mt=!1,ee=!1;const oe=new Nt,Ce=new N,je=new Bt,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let lt=!1;function Ft(){return F===null?$:1}let A=n;function Pt(y,O){return t.getContext(y,O)}try{const y={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zo}`),t.addEventListener("webglcontextlost",_e,!1),t.addEventListener("webglcontextrestored",Pe,!1),t.addEventListener("webglcontextcreationerror",L,!1),A===null){const O="webgl2";if(A=Pt(O,y),A===null)throw Pt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Je,Ke,De,rt,Re,Qe,kt,Mt,S,g,z,Q,ae,j,Ue,me,Le,Ne,fe,Se,Ve,ze,ve,et;function D(){Je=new z0(A),Je.init(),ze=new S1(A,Je),Ke=new I0(A,Je,e,ze),De=new x1(A,Je),Ke.reversedDepthBuffer&&d&&De.buffers.depth.setReversed(!0),rt=new V0(A),Re=new o1,Qe=new M1(A,Je,De,Re,Ke,ze,rt),kt=new N0(w),Mt=new B0(w),S=new Kh(A),ve=new L0(A,S),g=new G0(A,S,rt,ve),z=new X0(A,g,S,rt),fe=new W0(A,Ke,Qe),me=new U0(Re),Q=new s1(w,kt,Mt,Je,Ke,ve,me),ae=new C1(w,Re),j=new c1,Ue=new m1(Je),Ne=new P0(w,kt,Mt,De,z,p,c),Le=new v1(w,z,Ke),et=new R1(A,rt,Ke,De),Se=new D0(A,Je,rt),Ve=new H0(A,Je,rt),rt.programs=Q.programs,w.capabilities=Ke,w.extensions=Je,w.properties=Re,w.renderLists=j,w.shadowMap=Le,w.state=De,w.info=rt}D();const he=new E1(w,A);this.xr=he,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const y=Je.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Je.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(y){y!==void 0&&($=y,this.setSize(ne,le,!1))},this.getSize=function(y){return y.set(ne,le)},this.setSize=function(y,O,Y=!0){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=y,le=O,t.width=Math.floor(y*$),t.height=Math.floor(O*$),Y===!0&&(t.style.width=y+"px",t.style.height=O+"px"),this.setViewport(0,0,y,O)},this.getDrawingBufferSize=function(y){return y.set(ne*$,le*$).floor()},this.setDrawingBufferSize=function(y,O,Y){ne=y,le=O,$=Y,t.width=Math.floor(y*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,y,O)},this.getCurrentViewport=function(y){return y.copy(I)},this.getViewport=function(y){return y.copy(Ie)},this.setViewport=function(y,O,Y,q){y.isVector4?Ie.set(y.x,y.y,y.z,y.w):Ie.set(y,O,Y,q),De.viewport(I.copy(Ie).multiplyScalar($).round())},this.getScissor=function(y){return y.copy(at)},this.setScissor=function(y,O,Y,q){y.isVector4?at.set(y.x,y.y,y.z,y.w):at.set(y,O,Y,q),De.scissor(W.copy(at).multiplyScalar($).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(y){De.setScissorTest(pt=y)},this.setOpaqueSort=function(y){ye=y},this.setTransparentSort=function(y){Ee=y},this.getClearColor=function(y){return y.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor(...arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha(...arguments)},this.clear=function(y=!0,O=!0,Y=!0){let q=0;if(y){let k=!1;if(F!==null){const ce=F.texture.format;k=ce===tl||ce===el||ce===Qo}if(k){const ce=F.texture.type,ge=ce===ni||ce===Fi||ce===Ba||ce===za||ce===jo||ce===Jo,be=Ne.getClearColor(),we=Ne.getClearAlpha(),qe=be.r,Ye=be.g,We=be.b;ge?(_[0]=qe,_[1]=Ye,_[2]=We,_[3]=we,A.clearBufferuiv(A.COLOR,0,_)):(x[0]=qe,x[1]=Ye,x[2]=We,x[3]=we,A.clearBufferiv(A.COLOR,0,x))}else q|=A.COLOR_BUFFER_BIT}O&&(q|=A.DEPTH_BUFFER_BIT),Y&&(q|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",_e,!1),t.removeEventListener("webglcontextrestored",Pe,!1),t.removeEventListener("webglcontextcreationerror",L,!1),Ne.dispose(),j.dispose(),Ue.dispose(),Re.dispose(),kt.dispose(),Mt.dispose(),z.dispose(),ve.dispose(),et.dispose(),Q.dispose(),he.dispose(),he.removeEventListener("sessionstart",Ht),he.removeEventListener("sessionend",Bn),yn.stop()};function _e(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Pe(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const y=rt.autoReset,O=Le.enabled,Y=Le.autoUpdate,q=Le.needsUpdate,k=Le.type;D(),rt.autoReset=y,Le.enabled=O,Le.autoUpdate=Y,Le.needsUpdate=q,Le.type=k}function L(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ie(y){const O=y.target;O.removeEventListener("dispose",ie),X(O)}function X(y){Ze(y),Re.remove(y)}function Ze(y){const O=Re.get(y).programs;O!==void 0&&(O.forEach(function(Y){Q.releaseProgram(Y)}),y.isShaderMaterial&&Q.releaseShaderCache(y))}this.renderBufferDirect=function(y,O,Y,q,k,ce){O===null&&(O=Be);const ge=k.isMesh&&k.matrixWorld.determinant()<0,be=Qa(y,O,Y,q,k);De.setMaterial(q,ge);let we=Y.index,qe=1;if(q.wireframe===!0){if(we=g.getWireframeAttribute(Y),we===void 0)return;qe=2}const Ye=Y.drawRange,We=Y.attributes.position;let ot=Ye.start*qe,yt=(Ye.start+Ye.count)*qe;ce!==null&&(ot=Math.max(ot,ce.start*qe),yt=Math.min(yt,(ce.start+ce.count)*qe)),we!==null?(ot=Math.max(ot,0),yt=Math.min(yt,we.count)):We!=null&&(ot=Math.max(ot,0),yt=Math.min(yt,We.count));const St=yt-ot;if(St<0||St===1/0)return;ve.setup(k,q,be,Y,we);let bt,wt=Se;if(we!==null&&(bt=S.get(we),wt=Ve,wt.setIndex(bt)),k.isMesh)q.wireframe===!0?(De.setLineWidth(q.wireframeLinewidth*Ft()),wt.setMode(A.LINES)):wt.setMode(A.TRIANGLES);else if(k.isLine){let Fe=q.linewidth;Fe===void 0&&(Fe=1),De.setLineWidth(Fe*Ft()),k.isLineSegments?wt.setMode(A.LINES):k.isLineLoop?wt.setMode(A.LINE_LOOP):wt.setMode(A.LINE_STRIP)}else k.isPoints?wt.setMode(A.POINTS):k.isSprite&&wt.setMode(A.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Va("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),wt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Je.get("WEBGL_multi_draw"))wt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Fe=k._multiDrawStarts,Ct=k._multiDrawCounts,ft=k._multiDrawCount,H=we?S.get(we).bytesPerElement:1,se=Re.get(q).currentProgram.getUniforms();for(let ct=0;ct<ft;ct++)se.setValue(A,"_gl_DrawID",ct),wt.render(Fe[ct]/H,Ct[ct])}else if(k.isInstancedMesh)wt.renderInstances(ot,St,k.count);else if(Y.isInstancedBufferGeometry){const Fe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ct=Math.min(Y.instanceCount,Fe);wt.renderInstances(ot,St,Ct)}else wt.render(ot,St)};function vt(y,O,Y){y.transparent===!0&&y.side===$n&&y.forceSinglePass===!1?(y.side=dn,y.needsUpdate=!0,oi(y,O,Y),y.side=xi,y.needsUpdate=!0,oi(y,O,Y),y.side=$n):oi(y,O,Y)}this.compile=function(y,O,Y=null){Y===null&&(Y=y),h=Ue.get(Y),h.init(O),T.push(h),Y.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),y!==Y&&y.traverseVisible(function(k){k.isLight&&k.layers.test(O.layers)&&(h.pushLight(k),k.castShadow&&h.pushShadow(k))}),h.setupLights();const q=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ce=k.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){const be=ce[ge];vt(be,Y,k),q.add(be)}else vt(ce,Y,k),q.add(ce)}),h=T.pop(),q},this.compileAsync=function(y,O,Y=null){const q=this.compile(y,O,Y);return new Promise(k=>{function ce(){if(q.forEach(function(ge){Re.get(ge).currentProgram.isReady()&&q.delete(ge)}),q.size===0){k(y);return}setTimeout(ce,10)}Je.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let st=null;function mn(y){st&&st(y)}function Ht(){yn.stop()}function Bn(){yn.start()}const yn=new vu;yn.setAnimationLoop(mn),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(y){st=y,he.setAnimationLoop(y),y===null?yn.stop():yn.start()},he.addEventListener("sessionstart",Ht),he.addEventListener("sessionend",Bn),this.render=function(y,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(O),O=he.getCamera()),y.isScene===!0&&y.onBeforeRender(w,y,O,F),h=Ue.get(y,T.length),h.init(O),T.push(h),oe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),tt.setFromProjectionMatrix(oe,On,O.reversedDepth),ee=this.localClippingEnabled,mt=me.init(this.clippingPlanes,ee),m=j.get(y,E.length),m.init(),E.push(m),he.enabled===!0&&he.isPresenting===!0){const ce=w.xr.getDepthSensingMesh();ce!==null&&zn(ce,O,-1/0,w.sortObjects)}zn(y,O,0,w.sortObjects),m.finish(),w.sortObjects===!0&&m.sort(ye,Ee),lt=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,lt&&Ne.addToRenderList(m,y),this.info.render.frame++,mt===!0&&me.beginShadows();const Y=h.state.shadowsArray;Le.render(Y,y,O),mt===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,k=m.transmissive;if(h.setupLights(),O.isArrayCamera){const ce=O.cameras;if(k.length>0)for(let ge=0,be=ce.length;ge<be;ge++){const we=ce[ge];zi(q,k,y,we)}lt&&Ne.render(y);for(let ge=0,be=ce.length;ge<be;ge++){const we=ce[ge];si(m,y,we,we.viewport)}}else k.length>0&&zi(q,k,y,O),lt&&Ne.render(y),si(m,y,O);F!==null&&P===0&&(Qe.updateMultisampleRenderTarget(F),Qe.updateRenderTargetMipmap(F)),y.isScene===!0&&y.onAfterRender(w,y,O),ve.resetDefaultState(),b=-1,M=null,T.pop(),T.length>0?(h=T[T.length-1],mt===!0&&me.setGlobalState(w.clippingPlanes,h.state.camera)):h=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function zn(y,O,Y,q){if(y.visible===!1)return;if(y.layers.test(O.layers)){if(y.isGroup)Y=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(O);else if(y.isLight)h.pushLight(y),y.castShadow&&h.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||tt.intersectsSprite(y)){q&&je.setFromMatrixPosition(y.matrixWorld).applyMatrix4(oe);const ge=z.update(y),be=y.material;be.visible&&m.push(y,ge,be,Y,je.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||tt.intersectsObject(y))){const ge=z.update(y),be=y.material;if(q&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),je.copy(y.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),je.copy(ge.boundingSphere.center)),je.applyMatrix4(y.matrixWorld).applyMatrix4(oe)),Array.isArray(be)){const we=ge.groups;for(let qe=0,Ye=we.length;qe<Ye;qe++){const We=we[qe],ot=be[We.materialIndex];ot&&ot.visible&&m.push(y,ge,ot,Y,je.z,We)}}else be.visible&&m.push(y,ge,be,Y,je.z,null)}}const ce=y.children;for(let ge=0,be=ce.length;ge<be;ge++)zn(ce[ge],O,Y,q)}function si(y,O,Y,q){const k=y.opaque,ce=y.transmissive,ge=y.transparent;h.setupLightsView(Y),mt===!0&&me.setGlobalState(w.clippingPlanes,Y),q&&De.viewport(I.copy(q)),k.length>0&&Gn(k,O,Y),ce.length>0&&Gn(ce,O,Y),ge.length>0&&Gn(ge,O,Y),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function zi(y,O,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[q.id]===void 0&&(h.state.transmissionRenderTarget[q.id]=new In(1,1,{generateMipmaps:!0,type:Je.has("EXT_color_buffer_half_float")||Je.has("EXT_color_buffer_float")?ei:ni,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const ce=h.state.transmissionRenderTarget[q.id],ge=q.viewport||I;ce.setSize(ge.z*w.transmissionResolutionScale,ge.w*w.transmissionResolutionScale);const be=w.getRenderTarget(),we=w.getActiveCubeFace(),qe=w.getActiveMipmapLevel();w.setRenderTarget(ce),w.getClearColor(re),te=w.getClearAlpha(),te<1&&w.setClearColor(16777215,.5),w.clear(),lt&&Ne.render(Y);const Ye=w.toneMapping;w.toneMapping=_i;const We=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),h.setupLightsView(q),mt===!0&&me.setGlobalState(w.clippingPlanes,q),Gn(y,Y,q),Qe.updateMultisampleRenderTarget(ce),Qe.updateRenderTargetMipmap(ce),Je.has("WEBGL_multisampled_render_to_texture")===!1){let ot=!1;for(let yt=0,St=O.length;yt<St;yt++){const bt=O[yt],wt=bt.object,Fe=bt.geometry,Ct=bt.material,ft=bt.group;if(Ct.side===$n&&wt.layers.test(q.layers)){const H=Ct.side;Ct.side=dn,Ct.needsUpdate=!0,Gi(wt,Y,q,Fe,Ct,ft),Ct.side=H,Ct.needsUpdate=!0,ot=!0}}ot===!0&&(Qe.updateMultisampleRenderTarget(ce),Qe.updateRenderTargetMipmap(ce))}w.setRenderTarget(be,we,qe),w.setClearColor(re,te),We!==void 0&&(q.viewport=We),w.toneMapping=Ye}function Gn(y,O,Y){const q=O.isScene===!0?O.overrideMaterial:null;for(let k=0,ce=y.length;k<ce;k++){const ge=y[k],be=ge.object,we=ge.geometry,qe=ge.group;let Ye=ge.material;Ye.allowOverride===!0&&q!==null&&(Ye=q),be.layers.test(Y.layers)&&Gi(be,O,Y,we,Ye,qe)}}function Gi(y,O,Y,q,k,ce){y.onBeforeRender(w,O,Y,q,k,ce),y.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(w,O,Y,q,y,ce),k.transparent===!0&&k.side===$n&&k.forceSinglePass===!1?(k.side=dn,k.needsUpdate=!0,w.renderBufferDirect(Y,O,q,k,y,ce),k.side=xi,k.needsUpdate=!0,w.renderBufferDirect(Y,O,q,k,y,ce),k.side=$n):w.renderBufferDirect(Y,O,q,k,y,ce),y.onAfterRender(w,O,Y,q,k,ce)}function oi(y,O,Y){O.isScene!==!0&&(O=Be);const q=Re.get(y),k=h.state.lights,ce=h.state.shadowsArray,ge=k.state.version,be=Q.getParameters(y,k.state,ce,O,Y),we=Q.getProgramCacheKey(be);let qe=q.programs;q.environment=y.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(y.isMeshStandardMaterial?Mt:kt).get(y.envMap||q.environment),q.envMapRotation=q.environment!==null&&y.envMap===null?O.environmentRotation:y.envMapRotation,qe===void 0&&(y.addEventListener("dispose",ie),qe=new Map,q.programs=qe);let Ye=qe.get(we);if(Ye!==void 0){if(q.currentProgram===Ye&&q.lightsStateVersion===ge)return Ja(y,be),Ye}else be.uniforms=Q.getUniforms(y),y.onBeforeCompile(be,w),Ye=Q.acquireProgram(be,we),qe.set(we,Ye),q.uniforms=be.uniforms;const We=q.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(We.clippingPlanes=me.uniform),Ja(y,be),q.needsLights=is(y),q.lightsStateVersion=ge,q.needsLights&&(We.ambientLightColor.value=k.state.ambient,We.lightProbe.value=k.state.probe,We.directionalLights.value=k.state.directional,We.directionalLightShadows.value=k.state.directionalShadow,We.spotLights.value=k.state.spot,We.spotLightShadows.value=k.state.spotShadow,We.rectAreaLights.value=k.state.rectArea,We.ltc_1.value=k.state.rectAreaLTC1,We.ltc_2.value=k.state.rectAreaLTC2,We.pointLights.value=k.state.point,We.pointLightShadows.value=k.state.pointShadow,We.hemisphereLights.value=k.state.hemi,We.directionalShadowMap.value=k.state.directionalShadowMap,We.directionalShadowMatrix.value=k.state.directionalShadowMatrix,We.spotShadowMap.value=k.state.spotShadowMap,We.spotLightMatrix.value=k.state.spotLightMatrix,We.spotLightMap.value=k.state.spotLightMap,We.pointShadowMap.value=k.state.pointShadowMap,We.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=Ye,q.uniformsList=null,Ye}function Ta(y){if(y.uniformsList===null){const O=y.currentProgram.getUniforms();y.uniformsList=Vr.seqWithValue(O.seq,y.uniforms)}return y.uniformsList}function Ja(y,O){const Y=Re.get(y);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function Qa(y,O,Y,q,k){O.isScene!==!0&&(O=Be),Qe.resetTextureUnits();const ce=O.fog,ge=q.isMeshStandardMaterial?O.environment:null,be=F===null?w.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:ga,we=(q.isMeshStandardMaterial?Mt:kt).get(q.envMap||ge),qe=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ye=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),We=!!Y.morphAttributes.position,ot=!!Y.morphAttributes.normal,yt=!!Y.morphAttributes.color;let St=_i;q.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(St=w.toneMapping);const bt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,wt=bt!==void 0?bt.length:0,Fe=Re.get(q),Ct=h.state.lights;if(mt===!0&&(ee===!0||y!==M)){const $t=y===M&&q.id===b;me.setState(q,y,$t)}let ft=!1;q.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==Ct.state.version||Fe.outputColorSpace!==be||k.isBatchedMesh&&Fe.batching===!1||!k.isBatchedMesh&&Fe.batching===!0||k.isBatchedMesh&&Fe.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Fe.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Fe.instancing===!1||!k.isInstancedMesh&&Fe.instancing===!0||k.isSkinnedMesh&&Fe.skinning===!1||!k.isSkinnedMesh&&Fe.skinning===!0||k.isInstancedMesh&&Fe.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Fe.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Fe.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Fe.instancingMorph===!1&&k.morphTexture!==null||Fe.envMap!==we||q.fog===!0&&Fe.fog!==ce||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==me.numPlanes||Fe.numIntersection!==me.numIntersection)||Fe.vertexAlphas!==qe||Fe.vertexTangents!==Ye||Fe.morphTargets!==We||Fe.morphNormals!==ot||Fe.morphColors!==yt||Fe.toneMapping!==St||Fe.morphTargetsCount!==wt)&&(ft=!0):(ft=!0,Fe.__version=q.version);let H=Fe.currentProgram;ft===!0&&(H=oi(q,O,k));let se=!1,ct=!1,li=!1;const Dt=H.getUniforms(),un=Fe.uniforms;if(De.useProgram(H.program)&&(se=!0,ct=!0,li=!0),q.id!==b&&(b=q.id,ct=!0),se||M!==y){De.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Dt.setValue(A,"projectionMatrix",y.projectionMatrix),Dt.setValue(A,"viewMatrix",y.matrixWorldInverse);const jt=Dt.map.cameraPosition;jt!==void 0&&jt.setValue(A,Ce.setFromMatrixPosition(y.matrixWorld)),Ke.logarithmicDepthBuffer&&Dt.setValue(A,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Dt.setValue(A,"isOrthographic",y.isOrthographicCamera===!0),M!==y&&(M=y,ct=!0,li=!0)}if(k.isSkinnedMesh){Dt.setOptional(A,k,"bindMatrix"),Dt.setOptional(A,k,"bindMatrixInverse");const $t=k.skeleton;$t&&($t.boneTexture===null&&$t.computeBoneTexture(),Dt.setValue(A,"boneTexture",$t.boneTexture,Qe))}k.isBatchedMesh&&(Dt.setOptional(A,k,"batchingTexture"),Dt.setValue(A,"batchingTexture",k._matricesTexture,Qe),Dt.setOptional(A,k,"batchingIdTexture"),Dt.setValue(A,"batchingIdTexture",k._indirectTexture,Qe),Dt.setOptional(A,k,"batchingColorTexture"),k._colorsTexture!==null&&Dt.setValue(A,"batchingColorTexture",k._colorsTexture,Qe));const fn=Y.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&fe.update(k,Y,H),(ct||Fe.receiveShadow!==k.receiveShadow)&&(Fe.receiveShadow=k.receiveShadow,Dt.setValue(A,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(un.envMap.value=we,un.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(un.envMapIntensity.value=O.environmentIntensity),ct&&(Dt.setValue(A,"toneMappingExposure",w.toneMappingExposure),Fe.needsLights&&ns(un,li),ce&&q.fog===!0&&ae.refreshFogUniforms(un,ce),ae.refreshMaterialUniforms(un,q,$,le,h.state.transmissionRenderTarget[y.id]),Vr.upload(A,Ta(Fe),un,Qe)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Vr.upload(A,Ta(Fe),un,Qe),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Dt.setValue(A,"center",k.center),Dt.setValue(A,"modelViewMatrix",k.modelViewMatrix),Dt.setValue(A,"normalMatrix",k.normalMatrix),Dt.setValue(A,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const $t=q.uniformsGroups;for(let jt=0,Un=$t.length;jt<Un;jt++){const bn=$t[jt];et.update(bn,H),et.bind(bn,H)}}return H}function ns(y,O){y.ambientLightColor.needsUpdate=O,y.lightProbe.needsUpdate=O,y.directionalLights.needsUpdate=O,y.directionalLightShadows.needsUpdate=O,y.pointLights.needsUpdate=O,y.pointLightShadows.needsUpdate=O,y.spotLights.needsUpdate=O,y.spotLightShadows.needsUpdate=O,y.rectAreaLights.needsUpdate=O,y.hemisphereLights.needsUpdate=O}function is(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(y,O,Y){const q=Re.get(y);q.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Re.get(y.texture).__webglTexture=O,Re.get(y.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Y,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,O){const Y=Re.get(y);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0};const as=A.createFramebuffer();this.setRenderTarget=function(y,O=0,Y=0){F=y,C=O,P=Y;let q=!0,k=null,ce=!1,ge=!1;if(y){const we=Re.get(y);if(we.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(A.FRAMEBUFFER,null),q=!1;else if(we.__webglFramebuffer===void 0)Qe.setupRenderTarget(y);else if(we.__hasExternalTextures)Qe.rebindTextures(y,Re.get(y.texture).__webglTexture,Re.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const We=y.depthTexture;if(we.__boundDepthTexture!==We){if(We!==null&&Re.has(We)&&(y.width!==We.image.width||y.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Qe.setupDepthRenderbuffer(y)}}const qe=y.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(ge=!0);const Ye=Re.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ye[O])?k=Ye[O][Y]:k=Ye[O],ce=!0):y.samples>0&&Qe.useMultisampledRTT(y)===!1?k=Re.get(y).__webglMultisampledFramebuffer:Array.isArray(Ye)?k=Ye[Y]:k=Ye,I.copy(y.viewport),W.copy(y.scissor),J=y.scissorTest}else I.copy(Ie).multiplyScalar($).floor(),W.copy(at).multiplyScalar($).floor(),J=pt;if(Y!==0&&(k=as),De.bindFramebuffer(A.FRAMEBUFFER,k)&&q&&De.drawBuffers(y,k),De.viewport(I),De.scissor(W),De.setScissorTest(J),ce){const we=Re.get(y.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+O,we.__webglTexture,Y)}else if(ge){const we=O;for(let qe=0;qe<y.textures.length;qe++){const Ye=Re.get(y.textures[qe]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+qe,Ye.__webglTexture,Y,we)}}else if(y!==null&&Y!==0){const we=Re.get(y.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,we.__webglTexture,Y)}b=-1},this.readRenderTargetPixels=function(y,O,Y,q,k,ce,ge,be=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Re.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we){De.bindFramebuffer(A.FRAMEBUFFER,we);try{const qe=y.textures[be],Ye=qe.format,We=qe.type;if(!Ke.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=y.width-q&&Y>=0&&Y<=y.height-k&&(y.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+be),A.readPixels(O,Y,q,k,ze.convert(Ye),ze.convert(We),ce))}finally{const qe=F!==null?Re.get(F).__webglFramebuffer:null;De.bindFramebuffer(A.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(y,O,Y,q,k,ce,ge,be=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Re.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ge!==void 0&&(we=we[ge]),we)if(O>=0&&O<=y.width-q&&Y>=0&&Y<=y.height-k){De.bindFramebuffer(A.FRAMEBUFFER,we);const qe=y.textures[be],Ye=qe.format,We=qe.type;if(!Ke.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ot=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,ot),A.bufferData(A.PIXEL_PACK_BUFFER,ce.byteLength,A.STREAM_READ),y.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+be),A.readPixels(O,Y,q,k,ze.convert(Ye),ze.convert(We),0);const yt=F!==null?Re.get(F).__webglFramebuffer:null;De.bindFramebuffer(A.FRAMEBUFFER,yt);const St=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await uh(A,St,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,ot),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ce),A.deleteBuffer(ot),A.deleteSync(St),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,O=null,Y=0){const q=Math.pow(2,-Y),k=Math.floor(y.image.width*q),ce=Math.floor(y.image.height*q),ge=O!==null?O.x:0,be=O!==null?O.y:0;Qe.setTexture2D(y,0),A.copyTexSubImage2D(A.TEXTURE_2D,Y,0,0,ge,be,k,ce),De.unbindTexture()};const Ea=A.createFramebuffer(),Hi=A.createFramebuffer();this.copyTextureToTexture=function(y,O,Y=null,q=null,k=0,ce=null){ce===null&&(k!==0?(Va("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ce=k,k=0):ce=0);let ge,be,we,qe,Ye,We,ot,yt,St;const bt=y.isCompressedTexture?y.mipmaps[ce]:y.image;if(Y!==null)ge=Y.max.x-Y.min.x,be=Y.max.y-Y.min.y,we=Y.isBox3?Y.max.z-Y.min.z:1,qe=Y.min.x,Ye=Y.min.y,We=Y.isBox3?Y.min.z:0;else{const fn=Math.pow(2,-k);ge=Math.floor(bt.width*fn),be=Math.floor(bt.height*fn),y.isDataArrayTexture?we=bt.depth:y.isData3DTexture?we=Math.floor(bt.depth*fn):we=1,qe=0,Ye=0,We=0}q!==null?(ot=q.x,yt=q.y,St=q.z):(ot=0,yt=0,St=0);const wt=ze.convert(O.format),Fe=ze.convert(O.type);let Ct;O.isData3DTexture?(Qe.setTexture3D(O,0),Ct=A.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Qe.setTexture2DArray(O,0),Ct=A.TEXTURE_2D_ARRAY):(Qe.setTexture2D(O,0),Ct=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,O.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,O.unpackAlignment);const ft=A.getParameter(A.UNPACK_ROW_LENGTH),H=A.getParameter(A.UNPACK_IMAGE_HEIGHT),se=A.getParameter(A.UNPACK_SKIP_PIXELS),ct=A.getParameter(A.UNPACK_SKIP_ROWS),li=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,bt.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,bt.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,qe),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ye),A.pixelStorei(A.UNPACK_SKIP_IMAGES,We);const Dt=y.isDataArrayTexture||y.isData3DTexture,un=O.isDataArrayTexture||O.isData3DTexture;if(y.isDepthTexture){const fn=Re.get(y),$t=Re.get(O),jt=Re.get(fn.__renderTarget),Un=Re.get($t.__renderTarget);De.bindFramebuffer(A.READ_FRAMEBUFFER,jt.__webglFramebuffer),De.bindFramebuffer(A.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let bn=0;bn<we;bn++)Dt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Re.get(y).__webglTexture,k,We+bn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Re.get(O).__webglTexture,ce,St+bn)),A.blitFramebuffer(qe,Ye,ge,be,ot,yt,ge,be,A.DEPTH_BUFFER_BIT,A.NEAREST);De.bindFramebuffer(A.READ_FRAMEBUFFER,null),De.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||Re.has(y)){const fn=Re.get(y),$t=Re.get(O);De.bindFramebuffer(A.READ_FRAMEBUFFER,Ea),De.bindFramebuffer(A.DRAW_FRAMEBUFFER,Hi);for(let jt=0;jt<we;jt++)Dt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,fn.__webglTexture,k,We+jt):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,fn.__webglTexture,k),un?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,$t.__webglTexture,ce,St+jt):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,$t.__webglTexture,ce),k!==0?A.blitFramebuffer(qe,Ye,ge,be,ot,yt,ge,be,A.COLOR_BUFFER_BIT,A.NEAREST):un?A.copyTexSubImage3D(Ct,ce,ot,yt,St+jt,qe,Ye,ge,be):A.copyTexSubImage2D(Ct,ce,ot,yt,qe,Ye,ge,be);De.bindFramebuffer(A.READ_FRAMEBUFFER,null),De.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else un?y.isDataTexture||y.isData3DTexture?A.texSubImage3D(Ct,ce,ot,yt,St,ge,be,we,wt,Fe,bt.data):O.isCompressedArrayTexture?A.compressedTexSubImage3D(Ct,ce,ot,yt,St,ge,be,we,wt,bt.data):A.texSubImage3D(Ct,ce,ot,yt,St,ge,be,we,wt,Fe,bt):y.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ce,ot,yt,ge,be,wt,Fe,bt.data):y.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ce,ot,yt,bt.width,bt.height,wt,bt.data):A.texSubImage2D(A.TEXTURE_2D,ce,ot,yt,ge,be,wt,Fe,bt);A.pixelStorei(A.UNPACK_ROW_LENGTH,ft),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,H),A.pixelStorei(A.UNPACK_SKIP_PIXELS,se),A.pixelStorei(A.UNPACK_SKIP_ROWS,ct),A.pixelStorei(A.UNPACK_SKIP_IMAGES,li),ce===0&&O.generateMipmaps&&A.generateMipmap(Ct),De.unbindTexture()},this.initRenderTarget=function(y){Re.get(y).__webglFramebuffer===void 0&&Qe.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Qe.setTextureCube(y,0):y.isData3DTexture?Qe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Qe.setTexture2DArray(y,0):Qe.setTexture2D(y,0),De.unbindTexture()},this.resetState=function(){C=0,P=0,F=null,De.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}const Wr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class wa{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const L1=new _u(-1,1,1,-1,0,1);class D1 extends rn{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}}const I1=new D1;class cl{constructor(e){this._mesh=new Kt(I1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,L1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class U1 extends wa{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ln?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Wa.clone(e.uniforms),this.material=new ln({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new cl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Cc extends wa{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const a=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),r.buffers.stencil.setFunc(a.ALWAYS,s,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(a.EQUAL,1,4294967295),r.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),r.buffers.stencil.setLocked(!0)}}class N1 extends wa{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class F1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new $e);this._width=n.width,this._height=n.height,t=new In(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ei}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new U1(Wr),this.copyPass.material.blending=Qn,this.clock=new Yh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let a=0,r=this.passes.length;a<r;a++){const s=this.passes[a];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),s.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Cc!==void 0&&(s instanceof Cc?n=!0:s instanceof N1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new $e);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(n,a),this.renderTarget2.setSize(n,a);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class k1 extends wa{constructor(e,t,n=null,a=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=a,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new He}render(e,t,n){const a=e.autoClear;e.autoClear=!1;let r,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=a}}const O1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new He(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class va extends wa{constructor(e,t=1,n,a){super(),this.strength=t,this.radius=n,this.threshold=a,this.resolution=e!==void 0?new $e(e.x,e.y):new $e(256,256),this.clearColor=new He(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new In(r,s,{type:ei}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new In(r,s,{type:ei});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new In(r,s,{type:ei});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),s=Math.round(s/2)}const o=O1;this.highPassUniforms=Wa.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ln({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new $e(1/r,1/s),r=Math.round(r/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1),new N(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Wa.clone(Wr.uniforms),this.blendMaterial=new ln({uniforms:this.copyUniforms,vertexShader:Wr.vertexShader,fragmentShader:Wr.fragmentShader,blending:Tt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new He,this._oldClearAlpha=1,this._basic=new Rn,this._fsQuad=new cl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),a=Math.round(t/2);this.renderTargetBright.setSize(n,a);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,a),this.renderTargetsVertical[r].setSize(n,a),this.separableBlurMaterials[r].uniforms.invSize.value=new $e(1/n,1/a),n=Math.round(n/2),a=Math.round(a/2)}render(e,t,n,a,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=va.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=va.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new ln({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $e(.5,.5)},direction:{value:new $e(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new ln({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}va.BlurDirectionX=new $e(1,0);va.BlurDirectionY=new $e(0,1);const Ur={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class B1 extends wa{constructor(){super(),this.uniforms=Wa.clone(Ur.uniforms),this.material=new Hh({name:Ur.name,uniforms:this.uniforms,vertexShader:Ur.vertexShader,fragmentShader:Ur.fragmentShader}),this._fsQuad=new cl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},gt.getTransfer(this._outputColorSpace)===At&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Gc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Hc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ko?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Yc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Wc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const oa=["#4ff2ff","#43d8ff","#6aa8ff","#9a86ff","#c477ff","#ff79dc","#ff7fb5","#ffb06e"],Nr=["#ff2d55","#ff5e78","#ff8a3d","#ffd166","#ffd166","#ff8a3d","#ff5e78","#ff2d55"],Fr=1.75,kr=.015;function Yt(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function qt(i){const e=new Gh(i);return e.colorSpace=hn,e.anisotropy=4,e}function z1(){const[i,e]=Yt(128,128),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.22,"rgba(255,255,255,.75)"),t.addColorStop(.55,"rgba(255,255,255,.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),qt(i)}function G1(){const[i,e]=Yt(512,512),t=256;e.translate(t,t);const n=e.createRadialGradient(0,0,110,0,0,250);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.55,"rgba(255,255,255,.03)"),n.addColorStop(.76,"rgba(255,255,255,.14)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,252,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,255,255,.55)",e.lineWidth=4,e.setLineDash([32,30]),e.shadowColor="#fff",e.shadowBlur=14,e.beginPath(),e.arc(0,0,227,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.98)",e.lineWidth=15,e.shadowColor="#fff",e.shadowBlur=26,e.beginPath(),e.arc(0,0,174,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.42)",e.lineWidth=3,e.beginPath(),e.arc(0,0,126,0,Math.PI*2),e.stroke(),e.restore();for(let a=0;a<4;a++)e.save(),e.rotate(a*Math.PI/2),e.strokeStyle="rgba(255,255,255,.9)",e.lineWidth=5,e.shadowColor="#fff",e.shadowBlur=12,e.beginPath(),e.moveTo(0,-226),e.lineTo(0,-196),e.stroke(),e.restore();return e.save(),e.fillStyle="rgba(255,255,255,.85)",e.shadowColor="#fff",e.shadowBlur=20,e.beginPath(),e.arc(0,0,5,0,Math.PI*2),e.fill(),e.restore(),qt(i)}function H1(){const[i,e]=Yt(96,1024),t=e.createLinearGradient(0,1024,0,0);return t.addColorStop(0,"rgba(255,255,255,.95)"),t.addColorStop(.35,"rgba(255,255,255,.55)"),t.addColorStop(.78,"rgba(255,255,255,.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.strokeStyle=t,e.lineWidth=7,e.shadowColor="#fff",e.shadowBlur=22,e.beginPath(),e.moveTo(48,1024),e.lineTo(48,6),e.stroke(),e.shadowBlur=6,e.lineWidth=2,e.strokeStyle="rgba(255,255,255,.95)",e.beginPath(),e.moveTo(48,1024),e.lineTo(48,6),e.stroke(),qt(i)}function V1(){const[i,e]=Yt(192,1024),t=e.createLinearGradient(0,1024,0,0);t.addColorStop(0,"rgba(255,255,255,.34)"),t.addColorStop(.5,"rgba(255,255,255,.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,192,1024);const n=e.createLinearGradient(0,0,192,0);return n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.32,"rgba(255,255,255,.5)"),n.addColorStop(.5,"rgba(255,255,255,1)"),n.addColorStop(.68,"rgba(255,255,255,.5)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.globalCompositeOperation="destination-in",e.fillStyle=n,e.fillRect(0,0,192,1024),qt(i)}function W1(){const[i,e]=Yt(256,256),t=128;e.translate(t,t);const n=e.createRadialGradient(0,0,18,0,0,124);n.addColorStop(0,"rgba(255,255,255,.62)"),n.addColorStop(.45,"rgba(255,255,255,.2)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,124,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,255,255,.98)",e.lineWidth=17,e.shadowColor="#fff",e.shadowBlur=28,e.beginPath(),e.arc(0,0,84,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.5)",e.lineWidth=4,e.shadowColor="#fff",e.shadowBlur=10,e.beginPath(),e.arc(0,0,56,0,Math.PI*2),e.stroke(),e.restore();const a=e.createRadialGradient(0,0,0,0,0,30);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.55,"rgba(255,255,255,.75)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,30,0,Math.PI*2),e.fill();for(let r=0;r<4;r++)e.save(),e.rotate(r*Math.PI/2),e.strokeStyle="rgba(255,255,255,.9)",e.lineWidth=5,e.shadowColor="#fff",e.shadowBlur=12,e.beginPath(),e.moveTo(0,-122),e.lineTo(0,-100),e.stroke(),e.restore();return qt(i)}function X1(){const[i,e]=Yt(128,512),t=e.createLinearGradient(0,0,128,0);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.22,"rgba(255,255,255,.35)"),t.addColorStop(.5,"rgba(255,255,255,.95)"),t.addColorStop(.78,"rgba(255,255,255,.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,512),e.fillStyle="rgba(255,255,255,.95)",e.shadowColor="#fff",e.shadowBlur=18,e.fillRect(48,0,32,512);const n=e.createLinearGradient(0,0,0,512);return n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.08,"rgba(255,255,255,1)"),n.addColorStop(.92,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.globalCompositeOperation="destination-in",e.fillStyle=n,e.fillRect(0,0,128,512),qt(i)}function Y1(){const[i,e]=Yt(1024,128),t=e.createLinearGradient(0,0,1024,0);return t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.06,"rgba(255,255,255,.4)"),t.addColorStop(.5,"rgba(255,255,255,1)"),t.addColorStop(.94,"rgba(255,255,255,.4)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.strokeStyle=t,e.lineWidth=7,e.shadowColor="#fff",e.shadowBlur=26,e.beginPath(),e.moveTo(0,64),e.lineTo(1024,64),e.stroke(),e.lineWidth=2,e.shadowBlur=6,e.beginPath(),e.moveTo(0,64),e.lineTo(1024,64),e.stroke(),qt(i)}function Rc(i,e){const[t,n]=Yt(2048,512);let a=i>>>0;const r=()=>(a=a*1664525+1013904223>>>0,a/4294967296);n.clearRect(0,0,2048,512);const s=n.createLinearGradient(0,150,0,512);s.addColorStop(0,"rgba(80,190,255,0)"),s.addColorStop(.7,"rgba(60,150,255,.09)"),s.addColorStop(1,"rgba(255,110,200,.08)"),n.fillStyle=s,n.fillRect(0,0,2048,512);let o=-40;for(;o<2088;){const l=24+Math.floor(r()*74),u=90+Math.floor(r()*300),f=512-u;n.save(),n.fillStyle="rgba(3,8,24,.82)",n.fillRect(o,f,l,u),n.strokeStyle=r()<.28?"rgba(255,120,200,.7)":"rgba(70,210,255,.55)",n.lineWidth=2,n.shadowColor=n.strokeStyle,n.shadowBlur=10,n.strokeRect(o+1,f+1,l-2,u-2),n.shadowBlur=0;const d=Math.max(1,Math.floor((l-10)/12)),p=Math.max(2,Math.floor((u-16)/17));for(let _=0;_<p;_++)for(let x=0;x<d;x++)r()<.64||(n.fillStyle=r()<.22?"rgba(255,205,130,.9)":r()<.5?"rgba(120,235,255,.85)":"rgba(255,120,195,.8)",n.fillRect(o+6+x*12,f+9+_*17,4,6));r()<.45&&(n.strokeStyle="rgba(150,225,255,.65)",n.lineWidth=1,n.beginPath(),n.moveTo(o+l*.5,f),n.lineTo(o+l*.5,f-18-r()*34),n.stroke(),n.fillStyle="rgba(255,90,150,.95)",n.fillRect(o+l*.5-1.5,f-22-r()*30,3,3)),n.restore(),o+=l+3+Math.floor(r()*11)}if(e){const l=n.createLinearGradient(0,360,0,512);l.addColorStop(0,"rgba(255,140,90,0)"),l.addColorStop(1,"rgba(255,140,90,.12)"),n.fillStyle=l,n.fillRect(0,300,2048,212)}const c=qt(t);return c.wrapS=ma,c.wrapT=gi,c}function q1(){const[i,e]=Yt(1024,1024);e.translate(512,512);const t=e.createRadialGradient(0,0,60,0,0,505);t.addColorStop(0,"rgba(255,255,255,.03)"),t.addColorStop(.55,"rgba(255,255,255,.01)"),t.addColorStop(.82,"rgba(255,255,255,.08)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(0,0,505,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,255,255,.5)",e.lineWidth=5,e.shadowColor="#fff",e.shadowBlur=28,e.beginPath(),e.arc(0,0,470,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(255,255,255,.2)",e.lineWidth=2,e.beginPath(),e.arc(0,0,440,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(255,255,255,.13)",e.lineWidth=2,e.setLineDash([7,18]),e.beginPath(),e.arc(0,0,344,0,Math.PI*2),e.stroke(),e.restore();for(let n=0;n<60;n++){const a=n%5===0;e.save(),e.rotate(n*Math.PI/30),e.strokeStyle=a?"rgba(255,255,255,.92)":"rgba(255,255,255,.3)",e.lineWidth=a?7:2,e.shadowColor="#fff",e.shadowBlur=a?18:7,e.beginPath(),e.moveTo(0,-468),e.lineTo(0,-(a?414:444)),e.stroke(),e.restore()}for(let n=0;n<4;n++)e.save(),e.rotate(n*Math.PI/2),e.fillStyle="rgba(255,255,255,.82)",e.shadowColor="#fff",e.shadowBlur=22,e.beginPath(),e.moveTo(0,-500),e.lineTo(13,-516),e.lineTo(0,-532),e.lineTo(-13,-516),e.closePath(),e.fill(),e.restore();return qt(i)}function Z1(){const[i,e]=Yt(512,512);e.translate(256,256);const t=e.createRadialGradient(0,0,40,0,0,250);t.addColorStop(0,"rgba(255,255,255,.05)"),t.addColorStop(.7,"rgba(255,255,255,.02)"),t.addColorStop(.92,"rgba(255,255,255,.16)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(0,0,250,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255,255,255,.42)",e.lineWidth=2,e.beginPath(),e.arc(0,0,206,0,Math.PI*2),e.stroke();for(let n=0;n<12;n++){const a=n%3===0;e.save(),e.rotate(n*Math.PI/6),e.strokeStyle=a?"rgba(255,255,255,.85)":"rgba(255,255,255,.3)",e.lineWidth=a?4:1.5,e.beginPath(),e.moveTo(0,-204),e.lineTo(0,a?-172:-188),e.stroke(),e.restore()}return e.save(),e.shadowColor="#fff",e.shadowBlur=22,e.fillStyle="rgba(255,255,255,.95)",e.beginPath(),e.moveTo(-7,-16),e.lineTo(0,-196),e.lineTo(7,-16),e.closePath(),e.fill(),e.beginPath(),e.arc(0,0,11,0,Math.PI*2),e.fill(),e.restore(),qt(i)}function K1(){const[i,e]=Yt(128,1024),t=e.createLinearGradient(0,1024,0,0);return t.addColorStop(0,"rgba(255,255,255,.6)"),t.addColorStop(.5,"rgba(255,255,255,.95)"),t.addColorStop(.9,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,.2)"),e.fillStyle=t,e.shadowColor="#fff",e.shadowBlur=22,e.beginPath(),e.moveTo(47,1010),e.lineTo(58,120),e.lineTo(64,34),e.lineTo(70,120),e.lineTo(81,1010),e.closePath(),e.fill(),e.shadowBlur=28,e.fillStyle="rgba(255,255,255,1)",e.beginPath(),e.arc(64,72,15,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(64,942,20,0,Math.PI*2),e.fill(),qt(i)}function $1(){const[i,e]=Yt(256,256);return e.translate(128,128),e.shadowColor="#fff",e.shadowBlur=26,e.fillStyle="rgba(255,255,255,.98)",e.save(),e.rotate(-.22),e.beginPath(),e.ellipse(-8,56,30,21,-.18,0,Math.PI*2),e.fill(),e.fillRect(16,-84,8,140),e.beginPath(),e.moveTo(24,-84),e.bezierCurveTo(82,-62,86,6,38,32),e.bezierCurveTo(68,-6,56,-50,24,-60),e.closePath(),e.fill(),e.restore(),qt(i)}function j1(){const[i,e]=Yt(64,1024),t=e.createLinearGradient(0,0,64,0);return t.addColorStop(0,"rgba(255,255,255,.06)"),t.addColorStop(.38,"rgba(255,255,255,.62)"),t.addColorStop(.52,"rgba(255,255,255,1)"),t.addColorStop(.66,"rgba(255,255,255,.58)"),t.addColorStop(1,"rgba(255,255,255,.06)"),e.fillStyle=t,e.shadowColor="#fff",e.shadowBlur=12,e.fillRect(27,26,10,972),e.shadowBlur=22,e.beginPath(),e.arc(32,44,15,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(32,982,25,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255,255,255,.8)",e.lineWidth=3,e.beginPath(),e.arc(32,982,25,0,Math.PI*2),e.stroke(),qt(i)}function Pc(i=1){const[e,t]=Yt(256,512);let n=i>>>0;const a=()=>(n=n*1664525+1013904223>>>0,n/4294967296);t.clearRect(0,0,256,512),t.save(),t.beginPath(),t.moveTo(12,512),t.lineTo(12,206),t.bezierCurveTo(18,104,82,38,128,10),t.bezierCurveTo(174,38,238,104,244,206),t.lineTo(244,512),t.closePath(),t.clip(),t.fillStyle="rgba(4,5,14,.96)",t.fillRect(0,0,256,512);const r=["#ff4d6d","#ff9a5e","#ffd27a","#4ff2ff","#9b6bff","#ff6fb5"];for(let o=0;o<4;o++)for(let c=0;c<8;c++){const l=r[(o+c+i)%r.length];t.globalAlpha=.32+a()*.28,t.fillStyle=l;const u=20+o*56+c%2*12,f=160+c*44;t.beginPath(),t.moveTo(u+22,f),t.lineTo(u+44,f+20),t.lineTo(u+22,f+40),t.lineTo(u,f+20),t.closePath(),t.fill()}const s=t.createLinearGradient(0,40,0,512);s.addColorStop(0,"rgba(255,240,190,.9)"),s.addColorStop(.35,"rgba(255,150,120,.55)"),s.addColorStop(1,"rgba(120,70,190,.32)"),t.globalAlpha=1,t.fillStyle=s,t.beginPath(),t.moveTo(102,512),t.lineTo(102,190),t.quadraticCurveTo(108,118,128,92),t.quadraticCurveTo(148,118,154,190),t.lineTo(154,512),t.closePath(),t.fill(),t.strokeStyle="rgba(8,8,18,.92)",t.lineWidth=7;for(let o=1;o<4;o++)t.beginPath(),t.moveTo(20+o*56,150),t.lineTo(20+o*56,512),t.stroke();for(let o=1;o<8;o++)t.beginPath(),t.moveTo(14,160+o*44),t.lineTo(242,160+o*44),t.stroke();return t.lineWidth=5,t.beginPath(),t.arc(128,182,58,0,Math.PI*2),t.stroke(),t.beginPath(),t.arc(128,182,30,0,Math.PI*2),t.stroke(),t.restore(),t.save(),t.strokeStyle="rgba(255,226,160,.92)",t.lineWidth=7,t.shadowColor="#ffd27a",t.shadowBlur=18,t.beginPath(),t.moveTo(12,512),t.lineTo(12,206),t.bezierCurveTo(18,104,82,38,128,10),t.bezierCurveTo(174,38,238,104,244,206),t.lineTo(244,512),t.stroke(),t.restore(),qt(e)}function J1(){const[i,e]=Yt(1024,1024);e.translate(512,512);const t=["#ff4d6d","#ffb45e","#ffd27a","#4ff2ff","#9b6bff","#ff6fb5"],n=e.createRadialGradient(0,0,260,0,0,500);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.82,"rgba(255,210,122,.12)"),n.addColorStop(1,"rgba(255,210,122,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,500,0,Math.PI*2),e.fill();for(let r=0;r<12;r++){e.save(),e.rotate(r*Math.PI/6);const s=e.createRadialGradient(0,-210,20,0,-300,150);s.addColorStop(0,t[r%t.length]),s.addColorStop(.62,"rgba(255,235,190,.75)"),s.addColorStop(1,"rgba(20,12,40,0)"),e.fillStyle=s,e.beginPath(),e.moveTo(0,-118),e.bezierCurveTo(116,-206,96,-356,0,-414),e.bezierCurveTo(-96,-356,-116,-206,0,-118),e.closePath(),e.fill(),e.strokeStyle="rgba(10,8,20,.9)",e.lineWidth=7,e.stroke(),e.strokeStyle="rgba(255,226,160,.75)",e.lineWidth=3,e.beginPath(),e.moveTo(0,-148),e.quadraticCurveTo(50,-250,0,-380),e.stroke(),e.restore()}e.strokeStyle="rgba(255,226,160,.9)",e.shadowColor="#ffd27a",e.shadowBlur=18;for(const r of[414,286,168,82])e.lineWidth=r===414?12:7,e.beginPath(),e.arc(0,0,r,0,Math.PI*2),e.stroke();for(let r=0;r<24;r++)e.save(),e.rotate(r*Math.PI/12),e.fillStyle=t[r%t.length],e.shadowColor=t[r%t.length],e.shadowBlur=16,e.beginPath(),e.arc(0,-352,22,0,Math.PI*2),e.fill(),e.restore();const a=e.createRadialGradient(0,0,0,0,0,78);return a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.4,"rgba(255,220,150,.8)"),a.addColorStop(1,"rgba(255,90,120,0)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,78,0,Math.PI*2),e.fill(),qt(i)}function Lc(i=1){const[e,t]=Yt(512,512);let n=i>>>0;const a=()=>(n=n*1664525+1013904223>>>0,n/4294967296);t.fillStyle="#090711",t.fillRect(0,0,512,512);const r=8,s=5,o=512/s,c=512/r;for(let u=0;u<r;u++){const f=u%2*o*.5;for(let d=-1;d<=s;d++){const p=16+a()*14;t.fillStyle=`rgb(${Math.round(p+4)},${Math.round(p+1)},${Math.round(p+12)})`,t.fillRect(d*o+f+1.5,u*c+1.5,o-3,c-3),t.strokeStyle=`rgba(190,160,190,${.035+a()*.04})`,t.lineWidth=1,t.strokeRect(d*o+f+2,u*c+2,o-4,c-4)}}for(let u=0;u<4;u++){const f=t.createLinearGradient(u*128,0,u*128+128,0);f.addColorStop(0,"rgba(0,0,0,.34)"),f.addColorStop(.5,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(0,0,0,.22)"),t.fillStyle=f,t.fillRect(u*128,0,128,512)}for(let u=0;u<80;u++)t.fillStyle=`rgba(255,210,150,${.01+a()*.025})`,t.fillRect(a()*512,a()*512,1+a()*2,1+a()*2);const l=qt(e);return l.wrapS=l.wrapT=ma,l}function Q1(){const[i,e]=Yt(2048,2048),t=1024;e.translate(t,t);const n=["XII","I","II","III","IV","V","VI","VII","VIII","IX","X","XI"],a=e.createRadialGradient(0,0,80,0,0,980);a.addColorStop(0,"rgba(60,24,44,.18)"),a.addColorStop(.72,"rgba(18,8,26,.32)"),a.addColorStop(.95,"rgba(255,190,100,.1)"),a.addColorStop(1,"rgba(255,190,100,0)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,980,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,226,170,.92)",e.shadowColor="#ffcf6e",e.shadowBlur=34;for(const[r,s]of[[944,10],[888,3],[720,3],[510,2],[300,2]])e.lineWidth=s,e.beginPath(),e.arc(0,0,r,0,Math.PI*2),e.stroke();e.restore();for(let r=0;r<60;r++){const s=r%5===0;e.save(),e.rotate(r*Math.PI/30),e.strokeStyle=s?"rgba(255,240,200,.95)":"rgba(255,210,130,.45)",e.lineWidth=s?13:4,e.shadowColor="#ffcf6e",e.shadowBlur=s?22:8,e.beginPath(),e.moveTo(0,-936),e.lineTo(0,-(s?836:892)),e.stroke(),e.restore()}e.save(),e.strokeStyle="rgba(255,210,130,.4)",e.lineWidth=4,e.shadowColor="#ffcf6e",e.shadowBlur=10;for(let r=0;r<24;r++)e.save(),e.rotate(r*Math.PI/12),e.beginPath(),e.moveTo(-86,-748),e.quadraticCurveTo(0,-880,86,-748),e.stroke(),e.restore();e.restore(),e.fillStyle="rgba(255,244,215,.97)",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#ffcf6e",e.shadowBlur=30,e.font='700 148px Georgia, "Times New Roman", serif',n.forEach((r,s)=>{const o=s/12*Math.PI*2-Math.PI/2;e.save(),e.translate(Math.cos(o)*678,Math.sin(o)*678),e.rotate(o+Math.PI/2),e.fillText(r,0,0),e.restore()}),e.save(),e.strokeStyle="rgba(255,226,170,.7)",e.lineWidth=5,e.shadowColor="#ffcf6e",e.shadowBlur=22;for(let r=0;r<12;r++)e.save(),e.rotate(r*Math.PI/6),e.beginPath(),e.moveTo(0,-40),e.bezierCurveTo(90,-100,92,-236,0,-278),e.bezierCurveTo(-92,-236,-90,-100,0,-40),e.stroke(),e.restore();return e.beginPath(),e.arc(0,0,72,0,Math.PI*2),e.stroke(),e.restore(),qt(i)}function eg(){const[i,e]=Yt(1024,1024),t=e.createRadialGradient(512,512,80,512,512,512);t.addColorStop(0,"rgba(12,7,20,.99)"),t.addColorStop(.6,"rgba(10,6,18,.99)"),t.addColorStop(.8,"rgba(24,12,24,.96)"),t.addColorStop(.94,"rgba(88,43,34,.6)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.beginPath(),e.arc(512,512,512,0,Math.PI*2),e.fill();for(let n=0;n<90;n++){const a=Math.random()*Math.PI*2,r=180+Math.random()*300;e.fillStyle=`rgba(255,205,140,${.02+Math.random()*.05})`,e.beginPath(),e.arc(512+Math.cos(a)*r,512+Math.sin(a)*r,.6+Math.random()*1.8,0,Math.PI*2),e.fill()}return qt(i)}function tg(){const[i,e]=Yt(512,512);e.fillStyle="#07070d",e.fillRect(0,0,512,512),e.strokeStyle="rgba(160,140,120,.22)",e.lineWidth=3;for(let n=0;n<=4;n++)e.beginPath(),e.moveTo(n*128,0),e.lineTo(n*128,512),e.stroke(),e.beginPath(),e.moveTo(0,n*128),e.lineTo(512,n*128),e.stroke();e.strokeStyle="rgba(255,202,120,.14)",e.lineWidth=1;for(let n=-4;n<8;n++)e.beginPath(),e.moveTo(n*128,0),e.lineTo(n*128+512,512),e.stroke(),e.beginPath(),e.moveTo(n*128+512,0),e.lineTo(n*128,512),e.stroke();for(let n=0;n<70;n++)e.fillStyle=`rgba(255,220,150,${.015+Math.random()*.03})`,e.fillRect(Math.random()*512,Math.random()*512,1+Math.random()*3,1+Math.random()*3);const t=qt(i);return t.wrapS=t.wrapT=ma,t.repeat.set(6,14),t}function ng(i){const e=matchMedia("(pointer: coarse)").matches,t=new P1({canvas:i,antialias:!e,powerPreference:"high-performance",alpha:!1,stencil:!1});t.setPixelRatio(Math.min(devicePixelRatio||1,e?1.45:1.8)),t.outputColorSpace=hn,t.toneMapping=Ko,t.toneMappingExposure=1.06;const n=new Uh;n.background=new He(197387),n.fog=new al(197387,.0115);const a=new Mn(46,innerWidth/innerHeight,.1,240);a.position.set(0,6.7,17.2);const r=new F1(t);r.addPass(new k1(n,a));const s=new va(new $e(innerWidth,innerHeight),1,.62,.22);r.addPass(s),r.addPass(new B1);const o={glow:z1(),ring:G1(),line:H1(),beam:V1(),note:W1(),hold:X1(),hitline:Y1(),cityFar:Rc(2047066,!1),cityNear:Rc(7023172,!0),clockFace:q1(),clockHand:K1(),clockDial:Z1(),floatNote:$1(),pendulumRod:j1(),gothicA:Pc(1),gothicB:Pc(2),rose:J1(),bossClock:Q1(),bossBack:eg(),bossFloor:tg(),naveSide:Lc(3),naveEnd:Lc(7)};o.naveSide.repeat.set(8,4),o.naveEnd.repeat.set(5,5);const c=new nn;n.add(c);function l(v,U,V,G,Z){const de=new Float32Array(v*3);for(let Ge=0;Ge<v;Ge++){const Ae=U+Math.random()*U*1.8,Et=Math.random()*Math.PI*2,ut=Math.acos(2*Math.random()-1);de[Ge*3]=Ae*Math.sin(ut)*Math.cos(Et),de[Ge*3+1]=Ae*Math.cos(ut)*.55+3,de[Ge*3+2]=Ae*Math.sin(ut)*Math.sin(Et)-20}const ue=new rn;ue.setAttribute("position",new pn(de,3));const ke=new Oo({size:V,map:o.glow,color:G,transparent:!0,opacity:Z,depthWrite:!1,blending:Tt,sizeAttenuation:!0}),Xe=new tc(ue,ke);return c.add(Xe),Xe}const u=l(1500,34,.32,10279167,.7),f=l(650,70,.55,12164351,.5),d=l(220,14,.09,8186367,.45);function p(v,U,V,G,Z,de){const ue=new _t({map:o.glow,color:Z,transparent:!0,opacity:de,depthWrite:!1,blending:Tt,fog:!1}),ke=new xt(ue);return ke.position.set(v,U,V),ke.scale.set(G,G,1),c.add(ke),ke}const _=p(-16,9,-34,46,1789183,.18),x=p(18,1,-40,54,9314303,.14),m=p(0,12,-26,30,16723872,.07),h=new Rn({color:4951551,wireframe:!0,transparent:!0,opacity:.055,fog:!1}),E=[];for(let v=0;v<3;v++){const U=new Kt(new ol(12+v*6.5,.045,3,120),h.clone());U.position.set(0,5,-26-v*7),U.rotation.set(.9+v*.16,v*.3,0),c.add(U),E.push(U)}const T=new qh(90,45,1811928,1254490);T.position.y=-3.6,T.material.transparent=!0,T.material.opacity=.16,T.material.depthWrite=!1,c.add(T);const w=[];for(let v=0;v<14;v++){const U=v%2?new rl(.5+Math.random()*.8,0):new sl(.5+Math.random()*.7,0),V=new Rn({color:v%3?5823999:16740312,wireframe:!0,transparent:!0,opacity:.055+Math.random()*.05,fog:!1}),G=new Kt(U,V),Z=v%2?1:-1;G.position.set(Z*(9+Math.random()*10),.5+Math.random()*9,-6-Math.random()*14),G.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),G.userData.spin=new N((Math.random()-.5)*.3,(Math.random()-.5)*.4,(Math.random()-.5)*.2),c.add(G),w.push(G)}const R=new nn;R.position.z=-1,c.add(R);const C=[];function P(v,U,V,G,Z,de,ue){const ke=new Rn({map:v,color:ue,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),Xe=new Kt(new jn(U,V),ke);return Xe.position.set(G,Z,de),Xe.renderOrder=-2,R.add(Xe),C.push({mesh:Xe,mat:ke,map:v,base:Z,speed:0}),Xe}P(o.cityFar,150,42,-24,19,-54,11068671),P(o.cityNear,118,34,38,12,-36,16761504),C[0].speed=.0028,C[1].speed=.0062,R.visible=!1;const F=new nn;F.name="bossChurch",F.visible=!1,c.add(F);const b=[];function M(v,U=1){return v.transparent=!0,v.opacity=0,v.depthWrite=!1,b.push({mat:v,base:U}),v}const I=M(new Rn({map:o.bossFloor,color:12167566,fog:!1}),.95),W=new Kt(new jn(48,116),I);W.rotation.x=-Math.PI/2,W.position.set(0,-3.64,-26),W.renderOrder=-9,F.add(W);const J=M(new Rn({map:o.naveSide,color:16777215,fog:!1}),.9),re=new jn(78,34);for(const v of[-1,1]){const U=new Kt(re,J);U.position.set(v*11.62,10,-27),U.rotation.y=v<0?Math.PI/2:-Math.PI/2,U.renderOrder=-8,F.add(U)}const te=M(new Rn({map:o.naveEnd,color:3813448,fog:!1}),.96),ne=new Kt(new jn(52,46),te);ne.position.set(0,12,-66),ne.renderOrder=-8,F.add(ne);const le=M(new Rn({color:1314589,fog:!1}),1),$=new Sa(1.35,18,1.35);for(let v=0;v<6;v++){const U=4-v*11;for(const V of[-1,1]){const G=new Kt($,le);G.position.set(V*11.4,4.2,U),G.renderOrder=-7,F.add(G)}}const ye=new jn(4.7,11.4);for(let v=0;v<5;v++){const U=-1.5-v*11.4;for(const V of[-1,1]){const G=M(new Rn({map:v%2?o.gothicB:o.gothicA,color:V<0?16769723:16762058,transparent:!0,depthWrite:!1,blending:vn,fog:!1}),.96),Z=new Kt(ye,G);Z.position.set(V*11.34,7.4,U),Z.rotation.y=V<0?Math.PI/2:-Math.PI/2,Z.renderOrder=-5,F.add(Z)}}const Ee=M(new _t({map:o.rose,color:16773576,transparent:!0,depthWrite:!1,depthTest:!1,blending:vn,fog:!1}),.6),Ie=new xt(Ee);Ie.position.set(0,12.6,-56),Ie.scale.set(34,34,1),Ie.renderOrder=-4,F.add(Ie);const at=M(new _t({map:o.glow,color:16731501,transparent:!0,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),.045),pt=new xt(at);pt.position.set(0,12.6,-57),pt.scale.set(44,44,1),pt.renderOrder=-5,F.add(pt);const tt=new nn;tt.name="bossClock",tt.position.set(0,10.4,-39),F.add(tt);const mt=M(new _t({map:o.bossBack,color:16777215,transparent:!0,depthWrite:!1,depthTest:!1,blending:vn,fog:!1}),1),ee=new xt(mt);ee.scale.set(21.6,21.6,1),ee.position.z=-.06,ee.renderOrder=-3.5,tt.add(ee);const oe=M(new _t({map:o.bossClock,color:16774096,transparent:!0,depthWrite:!1,depthTest:!1,blending:vn,fog:!1}),.74),Ce=new xt(oe);Ce.scale.set(21,21,1),Ce.renderOrder=-3,tt.add(Ce);const je=M(new _t({map:o.glow,color:16751198,transparent:!0,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),.055),Be=new xt(je);Be.scale.set(29,29,1),Be.renderOrder=-4,tt.add(Be);function lt(v,U,V,G){const Z=M(new _t({map:v,color:U,transparent:!0,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),G),de=new xt(Z);return de.center.set(.5,.06),de.position.set(0,0,.4),de.scale.set(V,V*7.1,1),de.renderOrder=-2,tt.add(de),de}const Ft=lt(o.clockHand,16765286,1.1,.72),A=lt(o.clockHand,16731501,.8,.86),Pt=M(new _t({map:o.glow,color:16774096,transparent:!0,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),.38),Je=new xt(Pt);Je.scale.set(2.2,2.2,1),Je.position.z=.5,Je.renderOrder=-1,tt.add(Je);const Ke=[];for(let v=0;v<22;v++){const U=v%2?1:-1,V=2-Math.floor(v/2)*5.4,G=M(new _t({map:o.glow,color:16763514,transparent:!0,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),.15),Z=new xt(G);Z.position.set(U*(3.6+v%3*1.6),-2.7+v%2*.5,V),Z.scale.set(.62,.62,1),Z.renderOrder=-4,F.add(Z),Ke.push({sprite:Z,mat:G,base:.15,phase:v*1.7})}const De=[];for(let v=0;v<5;v++){const U=M(new _t({map:o.glow,color:v%2?10185727:16751198,transparent:!0,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),.018),V=new xt(U);V.position.set((v%2?1:-1)*(6+v*2.2),1.6+v*1.3,-10-v*9),V.scale.set(16+v*3,9+v*1.5,1),V.renderOrder=-6,F.add(V),De.push({sprite:V,mat:U,base:.018,phase:v*2.1})}const rt=new nn;n.add(rt);const Re=new nn;rt.add(Re);const Qe=new nn;Qe.renderOrder=5,rt.add(Qe);const kt=new _t({map:o.hitline,color:10483199,transparent:!0,opacity:.8,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),Mt=new xt(kt);Mt.position.set(0,.02,.25),Mt.scale.set(13.2,.9,1),Mt.renderOrder=2,rt.add(Mt);const S=[],g=[];for(let v=0;v<8;v++){const U=(v-3.5)*Fr;g.push(U);const V=kr*U*U,G=new nn;G.position.set(U,0,V),Re.add(G);const Z=new He(oa[v]),de=new _t({map:o.beam,color:Z.clone(),transparent:!0,opacity:.08,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),ue=new xt(de);ue.center.set(.5,0),ue.position.set(0,.04,-.02),ue.scale.set(1.16,12.6,1),ue.renderOrder=0,G.add(ue);const ke=new _t({map:o.line,color:Z.clone(),transparent:!0,opacity:.62,depthWrite:!1,depthTest:!1,blending:vn,fog:!1}),Xe=new xt(ke);Xe.center.set(.5,0),Xe.position.set(0,.04,.02),Xe.scale.set(.36,12.4,1),Xe.renderOrder=1,G.add(Xe);const Ge=new _t({map:o.ring,color:Z.clone(),transparent:!0,opacity:.95,depthWrite:!1,depthTest:!1,blending:vn,fog:!1}),Ae=new xt(Ge);Ae.position.set(0,.02,.22),Ae.scale.set(1.65,1.65,1),Ae.renderOrder=3,G.add(Ae);const Et=new _t({map:o.glow,color:Z.clone(),transparent:!0,opacity:.13,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),ut=new xt(Et);ut.position.set(0,-.02,.18),ut.scale.set(2.2,2.2,1),ut.renderOrder=2,G.add(ut);const Ot=new _t({map:o.glow,color:Z.clone().lerp(new He(16777215),.25),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),Jt=new xt(Ot);Jt.position.set(0,.2,.08),Jt.scale.set(1.1,1.1,1),Jt.renderOrder=4,Jt.visible=!1,G.add(Jt),S.push({group:G,beam:ue,line:Xe,ring:Ae,glow:ut,ghost:Jt,color:Z.clone(),targetColor:Z.clone(),flash:0,active:0,baseX:U,ghostFx:null,angle:0,pitch:0,screenAngle:0,screen:null})}const z=new nn;z.name="bossWind",rt.add(z);const Q=[];for(let v=0;v<8;v++){const U=new He(Nr[v]),V=[];for(let Z=0;Z<6;Z++){const de=new _t({map:o.beam,color:U.clone().lerp(new He(16777215),.24+Z*.03),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),ue=new xt(de);ue.center.set(.5,.5),ue.renderOrder=4,ue.visible=!1,z.add(ue),V.push(ue)}const G=[];for(let Z=0;Z<3;Z++){const de=new _t({map:o.glow,color:U.clone(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),ue=new xt(de);ue.renderOrder=5,ue.visible=!1,z.add(ue),G.push(ue)}Q.push({lane:v,ribbons:V,glows:G,power:0,seed:v*2.399963})}const ae=new nn;ae.position.set(0,13.2,-28),ae.visible=!1,c.add(ae);const j=new _t({map:o.clockFace,color:16773576,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),Ue=new xt(j);Ue.scale.set(21.6,21.6,1),Ue.renderOrder=-5,ae.add(Ue);const me=new _t({map:o.glow,color:16762974,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),Le=new xt(me);Le.scale.set(29,29,1),Le.renderOrder=-6,ae.add(Le);const Ne=new He(oa[0]),fe=new He(oa[7]),Se=new _t({map:o.clockHand,color:Ne,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),Ve=new xt(Se);Ve.center.set(.5,.07),Ve.position.set(0,0,.22),Ve.scale.set(1.02,6.8,1),Ve.renderOrder=-4,ae.add(Ve);const ze=new _t({map:o.clockHand,color:fe,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),ve=new xt(ze);ve.center.set(.5,.07),ve.position.set(0,0,.26),ve.scale.set(.76,9.6,1),ve.renderOrder=-4,ae.add(ve);const et=new _t({map:o.glow,color:16774096,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),D=new xt(et);D.scale.set(1.9,1.9,1),D.position.z=.3,D.renderOrder=-3,ae.add(D);function he(v){const U=new _t({map:o.clockDial,color:new He(oa[v]),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),V=new xt(U);return V.position.set(v===0?.86:-.86,7.6,.24),V.scale.set(2.75,2.75,1),V.renderOrder=2,V.visible=!1,S[v].group.add(V),V}const _e=he(0),Pe=he(7),L={group:ae,face:Ue,aura:Le,hub:D,handSlow:Ve,handFast:ve,dialSlow:_e,dialFast:Pe,slowColor:Ne,fastColor:fe,target:0,fade:0,mode:"off",frozen:!1,rate:1,runTime:0,anchorT:0,anchorRun:0,slowAngle:0,fastAngle:0,slowKick:0,fastKick:0,kick:0},ie=16765286,X={active:!1,target:0,fade:0,period:2.4146,originT:0,baseAmp:.42,pivot:new N(0,11.8,1.2),center:new N(0,2.6,1.32),length:9.2,angle:.42,kick:0,missFlash:0,times:[],states:[],notes:[]},Ze=new nn;Ze.visible=!1,n.add(Ze);const vt=new He(ie),st=new He(16773576),mn=new He(16724831);function Ht(v,U,V,G){const Z=new _t({map:v,color:U.clone(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),de=new xt(Z);return de.scale.set(G,G,1),de.renderOrder=V,de.visible=!1,Ze.add(de),de}const Bn=Ht(o.pendulumRod,st,5,1);Bn.center.set(.5,0);const yn=Ht(o.glow,st,6,1.5),zn=Ht(o.glow,vt,7,2.2),si=Ht(o.ring,st,8,2),zi=Ht(o.glow,vt,6,3.2),Gn=Ht(o.ring,st,10,2.9),Gi=Ht(o.glow,st,9,1.5),oi=[];for(let v=0;v<7;v++){const U=Ht(o.floatNote,st,6,1);U.userData.r=2.7+v%3*1.1,U.userData.scale=.8+v%4*.16,U.userData.op=.42+v%3*.12,oi.push(U)}function Ta(){const v=H.portrait;X.pivot.set(0,v?11:11.8,1.2),X.length=v?7:7.8,X.center.set(0,X.pivot.y-X.length,1.32),X.baseAmp=v?.27:.42,yn.position.copy(X.pivot),Gn.position.copy(X.center),zi.position.copy(X.center),Gi.position.copy(X.center)}function Ja({start:v=0,period:U=2.4146,amplitude:V=.42,times:G=[]}={}){X.active=!0,X.target=1,X.period=U||2.4146,X.originT=v,X.baseAmp=V||.42,X.times=G.slice(),X.states=G.map(()=>"pending"),X.kick=Math.max(X.kick,.5);for(const Z of X.notes)Ze.remove(Z),Z.material.dispose();X.notes=X.times.map((Z,de)=>{const ue=new _t({map:o.floatNote,color:vt.clone(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),ke=new xt(ue),Xe=de*2.399963,Ge=3.3+de%3*.85;return ke.userData.off={x:Math.cos(Xe)*Ge,y:Math.sin(Xe)*Ge*.66},ke.renderOrder=7,ke.visible=!1,Ze.add(ke),ke}),X.fade=Math.max(X.fade,.002),Ta()}function Qa(){X.active=!1,X.target=0;for(const v of X.notes)v.visible=!1}function ns(){Qa(),X.fade=0,X.kick=0,X.missFlash=0,X.states=[],Ze.visible=!1}function is(v,U="hit"){X.states[v]!==void 0&&(X.states[v]=U);const V=X.notes[v];V&&(V.visible=!1);const G=X.center;U==="hit"?(X.kick=1,St(G,ie,22,3.4),Fe(G,ie,3.1)):(X.missFlash=1,St(G,16724831,10,1.5),Fe(G,16724831,1.9))}function as(){X.kick=Math.max(X.kick,.14)}const Ea=new N,Hi=new N;function y(){a.updateMatrixWorld(),Ea.copy(X.center).project(a),Hi.copy(X.center),Hi.y+=1.5,Hi.project(a);const v=(Ea.x*.5+.5)*innerWidth,U=(-Ea.y*.5+.5)*innerHeight,V=(-Hi.y*.5+.5)*innerHeight;return{x:v,y:U,radius:Math.max(60,Math.min(118,Math.abs(U-V)))}}function O(v,U){X.fade+=(X.target-X.fade)*(1-Math.exp(-v*3.1));const V=X.fade>.012;if(Ze.visible=V,!V)return;X.kick=Math.max(0,X.kick-v*3.2),X.missFlash=Math.max(0,X.missFlash-v*2.6);const G=X.baseAmp,Z=G*Math.cos((U-X.originT)/X.period*Math.PI*2);X.angle=Z;const de=Math.sin(Z)*X.length,ue=-Math.cos(Z)*X.length;Bn.position.copy(X.pivot),Bn.scale.set(.5,X.length,1),Bn.material.rotation=Math.PI+Z,yn.position.copy(X.pivot),zn.position.set(X.pivot.x+de,X.pivot.y+ue,X.pivot.z+.12),si.position.set(X.pivot.x+de,X.pivot.y+ue,X.pivot.z+.16);const ke=Math.max(0,1-Math.abs(Z)/Math.max(.001,G)),Xe=1+X.kick*.22+ke*.05;zn.scale.set(2.2*Xe,2.2*Xe,1),si.scale.set(2*Xe,2*Xe,1),Bn.visible=!0,yn.visible=!0,si.visible=!0,zn.visible=!0;const Ge=X.fade,Ae=X.missFlash;Bn.material.opacity=Ge*.62,yn.material.opacity=Ge*(.55+ke*.3),zn.material.opacity=Ge*(.24+ke*.16+X.kick*.14),si.material.opacity=Ge*(.78+X.kick*.2),si.material.color.copy(st).lerp(mn,Ae),zn.material.color.copy(vt).lerp(mn,Ae);const Et=1+ke*.08+X.kick*.14;Gn.scale.set(2.9*Et,2.9*Et,1),zi.scale.set(3.2*Et,3.2*Et,1),Gi.scale.set(1.5*Et,1.5*Et,1),Gn.material.opacity=Ge*(.5+ke*.3+X.kick*.18),zi.material.opacity=Ge*(.05+ke*.04+X.kick*.06),Gi.material.opacity=Ge*(.16+ke*.12),Gn.material.color.copy(st).lerp(mn,Ae*.7);for(const ut of X.notes){const Ot=X.notes.indexOf(ut),Jt=X.times[Ot],Hn=X.states[Ot],K=Jt-U;if(Hn!=="pending"||K>1.55||K<-.35){ut.visible=!1;continue}const pe=Math.max(0,Math.min(1,1-K/1.55)),zt=1-Math.pow(1-pe,3),Tn=ut.userData.off;ut.position.set(X.center.x+Tn.x*(1-zt),X.center.y+Tn.y*(1-zt)+Math.sin(U*2.2+Ot)*.1*(1-zt),X.center.z+.14);const Qt=1.5+zt*.55+Math.sin(U*7+Ot)*.03;ut.scale.set(Qt,Qt,1),ut.material.opacity=Ge*(.2+zt*.78),ut.visible=!0}for(let ut=0;ut<oi.length;ut++){const Ot=oi[ut],Jt=U*.24+ut*2.399963,Hn=Ot.userData.r;Ot.position.set(X.center.x+Math.cos(Jt)*Hn,X.center.y+Math.sin(Jt*1.3)*Hn*.6+Math.sin(U*.9+ut)*.24,X.center.z+.05),Ot.material.rotation=Math.sin(U*.5+ut)*.32;const K=Ot.userData.scale;Ot.scale.set(K,K,1),Ot.material.opacity=Ge*Ot.userData.op*(.55+.45*Math.sin(U*1.5+ut*1.7)),Ot.visible=!0}}function Y(v,U,V=!1){const G=se.active?Nr:oa,Z=new He(G[v]),de=new nn;de.renderOrder=5,V?Qe.add(de):S[v].group.add(de);const ue=new _t({map:o.note,color:Z,transparent:!0,opacity:1,depthWrite:!1,depthTest:!1,blending:vn,fog:!1}),ke=new xt(ue);ke.scale.set(1.04,1.04,1),ke.renderOrder=6,de.add(ke);let Xe=null,Ge=null;if(U==="hold"){const Ae=new _t({map:o.hold,color:Z.clone().lerp(new He(16777215),.15),transparent:!0,opacity:.72,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1});Xe=new xt(Ae),Xe.center.set(.5,.5),Xe.renderOrder=4,de.add(Xe);const Et=new _t({map:o.note,color:Z.clone(),transparent:!0,opacity:.85,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1});Ge=new xt(Et),Ge.scale.set(.68,.68,1),Ge.renderOrder=5,de.add(Ge)}return{group:de,head:ke,body:Xe,tail:Ge,color:Z,free:!!V}}function q(v,U,V=0){const G=S[v].group,Z=Math.max(0,Math.min(1,U/12.2)),de=Math.pow(Z,.82),ue=Math.sin(V*2.17+U*.37)*(1.45+V%3*.22)+Math.sin(V*.73+U*.19)*.7,ke=Math.cos(V*1.31+U*.29)*1.4;return{x:G.position.x+ue*de,y:U,z:G.position.z+.24+ke*de,sway:ue*de}}const k=720,ce=new Float32Array(k*3).fill(-999),ge=new Float32Array(k*3),be=new Float32Array(k*3),we=new Float32Array(k),qe=new Float32Array(k),Ye=new rn;Ye.setAttribute("position",new pn(ce,3)),Ye.setAttribute("color",new pn(ge,3));const We=new Oo({size:.3,map:o.glow,vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!1,blending:Tt,sizeAttenuation:!0,fog:!1}),ot=new tc(Ye,We);ot.renderOrder=9,n.add(ot);let yt=0;function St(v,U,V=16,G=3.2){const Z=new He(U);for(let de=0;de<V;de++){const ue=yt=(yt+1)%k;ce[ue*3]=v.x+(Math.random()-.5)*.15,ce[ue*3+1]=v.y+(Math.random()-.5)*.15,ce[ue*3+2]=v.z+(Math.random()-.5)*.15;const ke=Math.random()*Math.PI*2,Xe=Math.acos(2*Math.random()-1),Ge=G*(.35+Math.random()*.9);be[ue*3]=Math.sin(Xe)*Math.cos(ke)*Ge,be[ue*3+1]=Math.cos(Xe)*Ge+.6,be[ue*3+2]=Math.sin(Xe)*Math.sin(ke)*Ge;const Ae=Math.random()<.35;ge[ue*3]=Ae?1:Z.r,ge[ue*3+1]=Ae?1:Z.g,ge[ue*3+2]=Ae?1:Z.b,we[ue]=qe[ue]=.35+Math.random()*.5}}const bt=[];for(let v=0;v<16;v++){const U=new _t({map:o.ring,color:16777215,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),V=new xt(U);V.scale.set(.8,.8,1),V.renderOrder=8,V.visible=!1,n.add(V),bt.push({sprite:V,life:0,max:.38})}let wt=0;function Fe(v,U,V=2.8){const G=bt[wt=(wt+1)%bt.length];G.sprite.position.copy(v),G.sprite.material.color.set(U),G.sprite.material.opacity=.95,G.sprite.scale.set(.7,.7,1),G.sprite.visible=!0,G.life=G.max=.38,G.scale=V}const Ct=[];for(let v=0;v<54;v++){const U=new _t({map:o.ring,color:16777215,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Tt,fog:!1}),V=new xt(U);V.scale.set(.6,.6,1),V.renderOrder=7,V.visible=!1,rt.add(V),Ct.push({sprite:V,life:0,max:1,delay:0,vx:0,vy:0,base:.5,alpha:.6,spin:0})}let ft=0;const H={view:{rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.7,bloom:.8,spin:.04,spacing:Fr,ring:1.65},target:{rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.7,bloom:.8,spin:.04,spacing:Fr,ring:1.65},section:null,energy:.4,keyCount:8,active:new Set([0,1,2,3,4,5,6,7]),pulse:0,shake:0,zoomKick:0,noteSpeed:8.2,time:0,playing:!1,spacing:Fr,ringScale:1.65,portrait:!1,mouse:new $e,laneXNow:g.slice(),bpm:100,beatOffset:.535,energyPulse:0,motion:{style:"fan",amp:.06,speed:.5,pitch:.03},targetMotion:{style:"fan",amp:.06,speed:.5,pitch:.03},laneAngle:new Float32Array(8),lanePitch:new Float32Array(8),screenAngle:new Float32Array(8),city:0,cityTarget:0,live:new Set([0,1,2,3,4,5,6,7])},se={active:!1,mode:"off",intro:!1,fieldFade:1,fieldTarget:1,churchFade:0,churchTarget:0,clockFade:0,clockTarget:0,windBoost:0,glitch:0,slowAngle:0,fastAngle:0,handKick:0,hubKick:0,palette:"normal"},ct={lock:!1,pos:new N(0,6.7,17.2),look:new N(0,4.05,0),targetPos:new N(0,6.7,17.2),targetLook:new N(0,4.05,0),fov:46,targetFov:46,roll:0,targetRoll:0,rate:3};function li(v){const U=v?Nr:oa;se.palette=v?"boss":"normal";const V=H.section?.color;for(let G=0;G<8;G++)S[G].color.set(U[G]),S[G].targetColor.copy(S[G].color),V&&S[G].targetColor.lerp(new He(V),.24)}function Dt(v="off"){const U=v||"off";se.mode=U,se.active=U!=="off",se.intro=U==="intro"||U==="preview",se.fieldTarget=U==="play"||U==="outro"?1:0,se.churchTarget=U==="off"?0:U==="intro"?1:U==="preview"?.66:.46,se.clockTarget=U==="off"?0:U==="intro"?1:.94,(U==="off"||U==="preview")&&(se.cameraLock=!1),U==="intro"&&(se.cameraLock=!0,ct.pos.set(0,12,34),ct.look.set(0,14,-60),ct.targetPos.copy(ct.pos),ct.targetLook.copy(ct.look),ct.fov=ct.targetFov=54,ct.roll=ct.targetRoll=0,se.slowAngle=0,se.fastAngle=0,se.glitch=0,se.windBoost=0,se.handKick=0,se.hubKick=0),U==="off"&&(ct.fov=ct.targetFov=H.portrait?52:46,ct.roll=ct.targetRoll=0,ct.lock=!1,a.fov=ct.fov,a.updateProjectionMatrix()),li(se.active)}function un(v,U,V=49,G=0,Z=.8){se.cameraLock=!0,ct.targetPos.set(v[0],v[1],v[2]),ct.targetLook.set(U[0],U[1],U[2]),ct.targetFov=V,ct.targetRoll=G,ct.rate=5.2/Math.max(.18,Math.min(2.2,Z))}const fn=.785,$t=.84,jt=.93,Un=new N,bn=new N,rs=new N,er=new N,ss=Array.from({length:8},()=>new N);function Vu(){rt.updateWorldMatrix(!0,!1),Re.updateWorldMatrix(!1,!1);for(let v=0;v<8;v++)S[v].group.updateWorldMatrix(!1,!1),ss[v].set(0,.02,.22).applyMatrix4(S[v].group.matrixWorld)}function Wu(v=0){const U=tt.position.y+10.5*tt.scale.y,V=H.active,G=H.portrait?66:57,Z=Math.sin(v)/a.aspect;let de=Math.max(46,a.fov);H.portrait&&(a.position.x=0,er.set(0,a.position.y,a.position.z-40),a.lookAt(er)),Vu();for(let ue=0;ue<14;ue++){a.fov=de,a.updateProjectionMatrix(),a.updateMatrixWorld();const ke=Math.tan(de*Math.PI/360);let Xe=1/0;for(const Ae of V)Un.copy(ss[Ae]).project(a),Un.y<Xe&&(Xe=Un.y);Xe!==1/0&&(a.rotateX(Math.atan(Xe*ke)-Math.atan((1-2*fn)*ke)),a.updateMatrixWorld());let Ge=1;bn.set(0,U,tt.position.z).project(a),bn.y>jt&&(Ge=bn.y/jt);for(const Ae of V){Un.copy(ss[Ae]).project(a);const Et=Math.abs(Un.x+Un.y*Z)/$t;Et>Ge&&(Ge=Et)}if(Ge>1.002){const Ae=2*Math.atan(ke*Math.min(Ge*1.02,1.6))*180/Math.PI;if(Ae<=G+.01){de=Math.max(de,Ae);continue}if(de<G){de=G;continue}a.getWorldDirection(rs),a.position.addScaledVector(rs,-1.1),er.copy(a.position).addScaledVector(rs,40),a.lookAt(er);continue}break}a.fov=de,a.updateProjectionMatrix()}function Xu(v=1){se.glitch=Math.min(1.5,se.glitch+v),se.windBoost=Math.min(2.4,se.windBoost+v*.7),H.shake=Math.min(.24,H.shake+v*.035),H.zoomKick=Math.min(1.5,H.zoomKick+v*.3)}function os(v=1){se.windBoost=Math.min(2.6,se.windBoost+v*.9),se.glitch=Math.min(1.4,se.glitch+v*.12);for(let U=0;U<3;U++){const V=Math.floor(Math.random()*8),G=bi(V,1+Math.random()*7);St(G,new He(Nr[V]).getHex(),4,1.4+v)}}function Yu(v="fast",U=1){if(se.handKick=Math.max(se.handKick,.35+U*.55),se.hubKick=Math.max(se.hubKick,.25+U*.4),U>.9&&se.clockFade>.3){const V=tt.localToWorld(new N(0,0,.8));Fe(V,v==="slow"?16765286:16731501,1.1+U*.4)}}function qu(v,U){const V=1+se.windBoost*.85;for(const G of Q){const Z=se.active?se.intro?1:H.active.has(G.lane)?0:.95:0;G.power+=(Z-G.power)*(1-Math.exp(-v*2.1));const de=G.power,ue=de>.012;let ke=S[G.lane].group.position.x;if(!se.intro){const Xe=(Math.max(4,H.keyCount)-1)*H.spacing*.5,Ge=Math.max(1,Math.abs(a.position.z)),Ae=Math.tan(a.fov*Math.PI/360)*Ge*a.aspect,Et=Math.min(Xe+H.spacing*(.55+G.lane%2*.45),Ae*.86);ke=G.lane<3.5?-Et:Et}for(let Xe=0;Xe<G.ribbons.length;Xe++){const Ge=G.ribbons[Xe];if(Ge.visible=ue,!ue)continue;const Ae=U*1.15*V+G.seed+Xe*1.71,Et=((U*1.05*V+Xe*1.9+G.seed*.8)%13+13)%13,ut=-1.4+Et,Ot=Math.max(0,Math.min(1,(ut+1.4)/2.6))*Math.max(0,Math.min(1,(12.6-ut)/3.2));Ge.position.set(ke+Math.sin(Ae*1.07)*(1.15+Et*.14)+Math.sin(Ae*.43)*.8,ut,.3+Math.cos(Ae*.91)*1.5+Math.sin(Ae*.37)*.8),Ge.material.rotation=Ae*1.55;const Jt=4.2+2.8*Math.abs(Math.sin(Ae*1.3)),Hn=.85+.5*Math.abs(Math.cos(Ae*.8));Ge.scale.set(Hn,Jt,1),Ge.material.opacity=de*Ot*(.14+.09*Math.pow(Math.sin(Ae*2.1),2))}for(let Xe=0;Xe<G.glows.length;Xe++){const Ge=G.glows[Xe];if(Ge.visible=ue,!ue)continue;const Ae=U*.85*V+G.seed*1.7+Xe*2.3,Et=-.4+(U*1.35*V+Xe*4.3+G.seed)%13;Ge.position.set(ke+Math.sin(Ae*.83)*1.5,Et,.45+Math.cos(Ae*.71)*1.3);const ut=.22+.1*Math.sin(Ae*1.6);Ge.scale.set(ut,ut,1),Ge.material.rotation=Ae,Ge.material.opacity=de*.075*(.55+.45*Math.sin(Ae*1.3))}}}function Zu(v,U){se.fieldFade+=(se.fieldTarget-se.fieldFade)*(1-Math.exp(-v*4.2)),se.churchFade+=(se.churchTarget-se.churchFade)*(1-Math.exp(-v*1.5)),se.clockFade+=(se.clockTarget-se.clockFade)*(1-Math.exp(-v*1.7)),se.windBoost*=Math.exp(-v*1.8),se.glitch*=Math.exp(-v*6.2),se.handKick*=Math.exp(-v*3.3),se.hubKick*=Math.exp(-v*2.8);const V=se.active&&se.churchFade>.02;for(const Z of[_,x,m,T,...E,...w])Z.visible=!V;const G=se.churchFade;if(F.visible=G>.008,F.visible){for(const ue of b)ue.mat.opacity=ue.base*G;const Z=se.clockFade;mt.opacity=Z,oe.opacity=Z*(.72+se.hubKick*.08),je.opacity=Z*(.05+se.hubKick*.045),Pt.opacity=Z*(.36+se.hubKick*.2),Ft.material.opacity=Z*(.62+se.handKick*.18),A.material.opacity=Z*(.76+se.handKick*.14),tt.visible=Z>.01;const de=1+se.hubKick*.035+Math.sin(U*1.8)*.004;Ce.scale.set(21*de,21*de,1),Be.scale.set(29*de,29*de,1),Je.scale.set(1.9*(1+se.hubKick*.22),1.9*(1+se.hubKick*.22),1),se.slowAngle+=v*.075,se.fastAngle+=v*.62,Ft.material.rotation=-se.slowAngle,A.material.rotation=-se.fastAngle,Ft.material.color.set(16765286).lerp(wn,se.handKick*.65),A.material.color.set(16731501).lerp(wn,se.handKick*.65),Ft.scale.set(1.1,1.1*7.1,1),A.scale.set(.8,.8*7.1,1);for(const ue of Ke)ue.mat.opacity=ue.base*G*(.58+.3*Math.sin(U*3.1+ue.phase)+.12*Math.sin(U*9.7+ue.phase*2.3));for(const ue of De)ue.mat.opacity=ue.base*G*(.7+.3*Math.sin(U*.24+ue.phase)),ue.sprite.position.x+=Math.sin(U*.11+ue.phase)*v*.08,ue.sprite.position.y+=Math.cos(U*.09+ue.phase)*v*.05;I.map.offset.y=U*.0035%1}else tt.visible=!1;qu(v,U)}function Ku(v){const U=innerWidth/Math.max(1,innerHeight);if(H.portrait)return v<=4?{spacing:1.72,ring:1.62}:v<=6?{spacing:1.3,ring:1.24}:{spacing:1.02,ring:1.04};const V=U>1.9?1.08:1;return v<=4?{spacing:3.15*V,ring:2.35*V}:v<=6?{spacing:2.16*V,ring:1.95*V}:{spacing:1.75*V,ring:1.65*V}}function _l(v,U=!1){const V=Ku(v);H.spacing=V.spacing,H.ringScale=V.ring,H.target.spacing=V.spacing,H.target.ring=V.ring,U&&(H.view.spacing=V.spacing,H.view.ring=V.ring)}function ls(){const v=innerWidth,U=innerHeight,V=v/U;H.portrait=V<.92,_l(H.keyCount,!0),L.group.position.set(0,H.portrait?15.2:13.2,-28),L.group.scale.setScalar(H.portrait?.86:1),tt.position.set(0,H.portrait?13.4:10.4,H.portrait?-46:-39),tt.scale.setScalar(H.portrait?.76:1),Ie.position.set(0,H.portrait?15:12.6,H.portrait?-62:-56),Ie.scale.set(H.portrait?26:34,H.portrait?26:34,1),pt.position.set(0,H.portrait?15:12.6,H.portrait?-63:-57),pt.scale.set(H.portrait?36:44,H.portrait?36:44,1),Ta();for(let Z=0;Z<8;Z++){const de=(Z-3.5)*H.spacing;S[Z].baseX=de,S[Z].group.position.x=de,S[Z].group.position.z=kr*de*de,S[Z].ring.scale.set(H.view.ring,H.view.ring,1),S[Z].glow.scale.set(H.view.ring*1.35,H.view.ring*1.35,1),H.laneXNow[Z]=de}Mt.scale.set((H.keyCount-1)*H.spacing+H.ring*1.5,.9,1),a.aspect=V,a.fov=H.portrait?52:46,a.updateProjectionMatrix();const G=H.section?H.section.camZ:17.2;H.target.camZ=G+(H.portrait?6.4:0),H.view.camZ=H.target.camZ,t.setSize(v,U),r.setSize(v,U),s.resolution.set(v/2,U/2)}addEventListener("resize",ls),ls(),addEventListener("pointermove",v=>{H.mouse.x=v.clientX/innerWidth*2-1,H.mouse.y=v.clientY/innerHeight*2-1},{passive:!0});function $u(v){if(!v)return;const U=!!H.section&&H.section.keys!==v.keys;H.section=v,H.energy=v.energy,H.keyCount=v.keys,v.bpm&&yl(v.bpm,v.beatOffset??0),se.active&&li(!0),_l(v.keys),H.target.rotY=v.rotY,H.target.rotZ=v.rotZ,H.target.tilt=v.tilt,H.target.spread=v.spread,H.target.y=v.y,H.target.camZ=v.camZ+(H.portrait?6.4:0),H.target.camY=v.camY,H.target.bloom=se.active?se.intro?Math.min(.38,v.bloom*.45):Math.min(.28,v.bloom*.3):v.bloom*.82,H.target.spin=v.spin,H.targetMotion={style:v.motion||"fan",amp:v.motionAmp??.06,speed:v.motionSpeed??.5,pitch:v.motionPitch??.03},H.cityTarget=v.city??0,U&&(H.zoomKick=Math.min(1.4,H.zoomKick+.85));const V={4:[2,3,4,5],6:[1,2,3,4,5,6],8:[0,1,2,3,4,5,6,7]};H.active=new Set(V[v.keys]||V[8]),H.live=new Set(H.active);for(let G=0;G<8;G++){const Z=H.active.has(G);S[G].active=Z?1:0,Z||(S[G].ghostFx=null),S[G].targetColor.copy(S[G].color).lerp(new He(v.color),.24),Z&&(S[G].flash=Math.max(S[G].flash,.22))}L.slowColor.copy(S[0].targetColor),L.fastColor.copy(S[7].targetColor),kt.color.set(v.accent)}function ju(v){const U=new Set(H.active);for(const G of v)U.add(G);let V=U.size!==H.live.size;if(!V){for(const G of U)if(!H.live.has(G)){V=!0;break}}if(V){H.live=U;for(const G of v)H.active.has(G)||(S[G].flash=Math.max(S[G].flash,.34),S[G].ghostFx=null)}}function Ju(v){H.cityTarget=Math.max(0,Math.min(1,v))}function Qu(v="run",U=1,V=null){const G=v||"off",Z=L.mode,de=V??H.time;Z==="run"||Z==="final"?L.anchorRun+=Math.max(0,de-L.anchorT):Z==="freeze"&&(L.anchorRun=L.runTime),L.anchorT=de,L.mode=G,G==="off"?(L.target=0,L.frozen=!1,L.rate=1):(L.target=1,L.frozen=G==="freeze",L.rate=G==="final"?1.65:1,L.kick=Math.max(L.kick,.25+U*.35))}function ef(v="fast",U=1){if(!(L.fade<.015)&&(L.kick=Math.max(L.kick,.2+U*.32),v==="slow"?L.slowKick=Math.max(L.slowKick,.35+U*.55):L.fastKick=Math.max(L.fastKick,.35+U*.55),U>1.05&&L.fade>.3)){const V=L.group.localToWorld(new N(0,0,.35));Fe(V,v==="slow"?Ne.getHex():fe.getHex(),.9+U*.35)}}function tf(){L.target=0,L.fade=0,L.mode="off",L.frozen=!1,L.rate=1,L.runTime=0,L.anchorT=0,L.anchorRun=0,L.slowAngle=0,L.fastAngle=0,L.slowKick=0,L.fastKick=0,L.kick=0,L.group.visible=!1,L.dialSlow.visible=!1,L.dialFast.visible=!1}function nf(v){return S[v].baseX}function af(v){return kr*S[v].baseX*S[v].baseX}function bi(v,U){return S[v].group.localToWorld(new N(0,U,.2))}const cs=new N,us=new N;function tr(){a.updateMatrixWorld(),rt.updateWorldMatrix(!0,!1);for(let v=0;v<8;v++){const U=S[v];U.group.updateWorldMatrix(!1,!1);const V=U.group.matrixWorld;cs.set(0,.04,.22).applyMatrix4(V).project(a),us.set(0,11.4,.22).applyMatrix4(V).project(a);const G=(cs.x*.5+.5)*innerWidth,Z=(-cs.y*.5+.5)*innerHeight,de=(us.x*.5+.5)*innerWidth,ue=(-us.y*.5+.5)*innerHeight;U.screenAngle=Math.atan2(de-G,Z-ue),U.screen={x:G,y:Z,topX:de,topY:ue,angle:U.screenAngle}}}function rf(v){return S[v].screen||tr(),S[v].screen}function vl(){return tr(),S.map(v=>v.screen)}function sf(){return vl().map(v=>v.x)}function of(v){return S[v].screen||tr(),S[v].screenAngle}function yl(v,U=0){H.bpm=v||100,H.beatOffset=U}function lf(v){const U=S[v];U.flash=Math.max(U.flash,.55),U.ring.scale.setScalar(H.view.ring*1.1)}function cf(v,U="sweep"){const V=S[v];if(V){if(se.active){os(U==="bounce"?.35:.2);return}V.ghostFx={type:U,t:0,dur:U==="bounce"?.85:1.15},U==="bounce"&&(V.flash=Math.max(V.flash,.65),Fe(bi(v,.05),V.color.getHex(),1.7))}}function uf(){for(const v of S)v.ghostFx=null,v.ghost.visible=!1,v.ghost.material.opacity=0}function xl(v,U=1,V=1){const G=S[v];if(!G)return;if(se.active){os(V*.28);return}const Z=bi(v,.1+Math.random()*.12),de=3;for(let ue=0;ue<de;ue++){const ke=Ct[ft=(ft+1)%Ct.length];ke.sprite.position.copy(Z),ke.sprite.position.y+=ue*.11,ke.sprite.position.z+=ue*.05,ke.sprite.material.color.copy(G.targetColor).lerp(wn,.12+ue*.08),ke.sprite.material.rotation=Math.random()*Math.PI*2,ke.sprite.scale.set(.45,.45,1),ke.life=ke.max=1.15+ue*.24,ke.delay=ue*.075,ke.vx=U*(2.4+V*1.7)*(1-ue*.13)+(Math.random()-.5)*.5,ke.vy=.45+V*.35+Math.random()*.25,ke.base=.38+V*.38,ke.alpha=(.62-ue*.13)*Math.min(1,V),ke.spin=(Math.random()-.5)*1.2,ke.sprite.visible=!1}}function Ml(v=1){H.energyPulse=Math.min(1.5,H.energyPulse+.35*v),H.shake=Math.min(.18,H.shake+.008*v)}function Sl(v,U=1){let V;v==null?(V=rt.localToWorld(new N(0,.3,.25)),St(V,10483199,Math.round(22*U),5.2),Fe(V,10483199,4.2)):(V=bi(v,.08),St(V,S[v].targetColor,Math.round(14+10*U),3.2+U),Fe(V,S[v].targetColor.getHex(),2.4+U)),H.shake=Math.min(.2,H.shake+.02*U)}function ff(v=1){Ml(v),H.zoomKick=Math.min(1.4,H.zoomKick+.22*v),Sl(null,.7+v*.7);for(let U=0;U<8;U++)H.active.has(U)||xl(U,U<3.5?-1:1,.7+v*.6)}function hf(v,U,V,G){H.targetMotion={style:v||"fan",amp:U??.08,speed:V??.6,pitch:G??.04}}function df(v,U){const V=S[v];V.flash=1,H.shake=Math.min(.16,H.shake+(U==="perfect"?.025:.016));const G=bi(v,.05);St(G,V.color,U==="perfect"?22:14,3.5),Fe(G,V.color.getHex(),3)}function pf(v){H.shake=Math.min(.25,H.shake+.13),S[v];const U=bi(v,.05);St(U,16724831,9,1.4),Fe(U,16724831,2)}const wn=new He(16777215);new He;let bl=0;function mf(v,U,V){bl+=v;const G=V?U:bl;H.time=G,H.playing=V;const Z=H.view,de=H.target,ue=1-Math.exp(-v*2.2);Z.rotY+=(de.rotY-Z.rotY)*ue,Z.rotZ+=(de.rotZ-Z.rotZ)*ue,Z.tilt+=(de.tilt-Z.tilt)*ue,Z.spread+=(de.spread-Z.spread)*ue,Z.y+=(de.y-Z.y)*ue,Z.camZ+=(de.camZ-Z.camZ)*ue,Z.camY+=(de.camY-Z.camY)*ue,Z.spin+=(de.spin-Z.spin)*ue,Z.spacing+=(de.spacing-Z.spacing)*(1-Math.exp(-v*3.1)),Z.ring+=(de.ring-Z.ring)*(1-Math.exp(-v*3.1)),s.strength+=(de.bloom-s.strength)*ue,H.zoomKick*=Math.exp(-v*2.6),H.energyPulse*=Math.exp(-v*3.2);const ke=60/H.bpm,Xe=((G-H.beatOffset)/ke%1+1)%1,Ge=Math.exp(-Xe*5.2);H.pulse=Ge;const Ae=H.motion,Et=H.targetMotion,ut=1-Math.exp(-v*2.2);Ae.amp+=(Et.amp-Ae.amp)*ut,Ae.speed+=(Et.speed-Ae.speed)*ut,Ae.pitch+=(Et.pitch-Ae.pitch)*ut,Ae.style=Et.style;const Ot=H.energyPulse;s.strength+=Ot*(se.active?.1:.32),se.active&&(s.strength=Math.min(s.strength,se.intro?.5:.38)),Zu(v,G),rt.position.y=Z.y+Math.sin(G*.65)*.035+Ge*.03,rt.rotation.y=Z.rotY+Math.sin(G*.22)*.02+Math.sin(G*.09)*Z.spin+(se.glitch>.01?(Math.random()-.5)*se.glitch*.012:0),rt.rotation.z=Z.rotZ+Math.sin(G*.37)*.006+(se.glitch>.01?(Math.random()-.5)*se.glitch*.01:0),rt.rotation.x=Z.tilt+Math.sin(G*.29)*.006;for(let K=0;K<8;K++){const pe=S[K],zt=(K-3.5)*Z.spacing*Z.spread;pe.baseX=zt,pe.group.position.x=zt,pe.group.position.z=kr*zt*zt,H.laneXNow[K]=zt;const Tn=K-3.5;let Qt=0;switch(Ae.style){case"fan":Qt=-Tn*Ae.amp;break;case"slope":Qt=Ae.amp;break;case"tiltL":Qt=Ae.amp*1.15;break;case"tiltR":Qt=-Ae.amp*1.15;break;case"zigzag":Qt=(K%2?1:-1)*Ae.amp*.95;break;case"wave":Qt=Math.sin(G*Ae.speed+K*.72)*Ae.amp-Tn*Ae.amp*.22;break;case"orbit":Qt=Math.sin(G*Ae.speed*.72+Tn*.38)*Ae.amp*.78-Tn*Ae.amp*.3;break;default:Qt=-Tn*Ae.amp}Qt+=Math.sin(G*1.15+K*.55)*Ae.amp*.12*(.4+H.energy),Qt+=Ge*.006*Math.cos(K*.9+.4);const fs=Math.sin(G*.55+K*.7)*Ae.pitch+Ge*Ae.pitch*.32*Math.sin(K*.8+.7)+Ot*.006,nr=1-Math.exp(-v*3.4);pe.angle+=(Qt-pe.angle)*nr,pe.pitch+=(fs-pe.pitch)*nr,H.laneAngle[K]=pe.angle,H.lanePitch[K]=pe.pitch,pe.group.rotation.z=pe.angle,pe.group.rotation.x=pe.pitch,pe.line.scale.y=12.4*Math.cos(pe.pitch),pe.beam.scale.y=12.6*Math.cos(pe.pitch);const ir=H.live.has(K);let Vn=0,hs=0;if(pe.ghostFx){const rr=pe.ghostFx;rr.t+=v;const ds=rr.t/rr.dur;if(ds>=1)pe.ghostFx=null,pe.ghost.visible=!1,pe.ghost.material.opacity=0;else if(Vn=Math.sin(Math.PI*ds),rr.type==="sweep"){pe.ghost.visible=!0,pe.ghost.position.set(0,.25+ds*10.5,.08);const Tl=.85+.55*Vn;pe.ghost.scale.set(Tl,Tl,1),pe.ghost.material.opacity=Vn*.8,pe.ghost.material.color.copy(pe.targetColor).lerp(wn,.3+Vn*.4)}else hs=Vn,pe.ghost.visible=!1}const ar=se.active?se.fieldFade:1,vf=(ir?(K%2?.86:.96)*.58:Vn*.34)*ar*(se.active?.45:1),yf=(ir?.065+Ge*.03:Vn*.04)*ar*(se.active?.55:1),xf=(ir?.95:hs*.78+Vn*.035)*ar,Mf=se.active?.48:1;pe.line.material.opacity+=(vf-pe.line.material.opacity)*(1-Math.exp(-v*3.5)),pe.beam.material.opacity+=(yf-pe.beam.material.opacity)*(1-Math.exp(-v*3.5)),pe.ring.material.opacity+=(xf-pe.ring.material.opacity)*(1-Math.exp(-v*3.5)),pe.glow.material.opacity+=(((ir?.14:Vn*.07)+pe.flash*.3)*ar*Mf-pe.glow.material.opacity)*(1-Math.exp(-v*8)),pe.flash=Math.max(0,pe.flash-v*3.4);const wl=Z.ring*(1+Ge*.045*(.4+H.energy)+pe.flash*.22+hs*.5);pe.ring.scale.set(wl,wl,1),pe.ring.material.color.copy(pe.targetColor).lerp(wn,pe.flash*.8),pe.glow.material.color.copy(pe.targetColor).lerp(wn,pe.flash*.5),pe.line.material.color.copy(pe.targetColor).lerp(wn,.14+pe.flash*.32),pe.beam.material.color.copy(pe.targetColor)}const Jt=!se.active||se.fieldFade>.03;Re.visible=Jt,Mt.visible=Jt,tr();for(let K=0;K<8;K++){const pe=S[K];pe.line.material.rotation=-pe.screenAngle,pe.beam.material.rotation=-pe.screenAngle}if(Mt.scale.x=(Z.spacing*(H.keyCount-1)+Z.ring*1.5)*Z.spread,Mt.material.opacity=(.45+Ge*.3+H.energy*.15+Ot*.16)*(se.active?se.fieldFade:1),se.active&&se.cameraLock){const K=ct,pe=1-Math.exp(-v*K.rate);K.pos.lerp(K.targetPos,pe),K.look.lerp(K.targetLook,pe),K.fov+=(K.targetFov-K.fov)*pe,K.roll+=(K.targetRoll-K.roll)*pe,a.position.copy(K.pos),a.fov=K.fov,a.updateProjectionMatrix(),a.lookAt(K.look),se.intro||Wu(K.roll),a.rotation.z+=K.roll,se.glitch>.01&&(a.position.x+=(Math.random()-.5)*se.glitch*.24,a.position.y+=(Math.random()-.5)*se.glitch*.2,a.rotation.z+=(Math.random()-.5)*se.glitch*.022),H.shake>5e-4&&(a.position.x+=(Math.random()-.5)*H.shake,a.position.y+=(Math.random()-.5)*H.shake,H.shake*=Math.exp(-v*10))}else{const K=H.mouse.x*.55,pe=Z.camY+H.mouse.y*.18;a.position.x+=(K-a.position.x)*(1-Math.exp(-v*2)),a.position.y+=(pe-a.position.y)*(1-Math.exp(-v*2)),a.position.z+=(Z.camZ-H.zoomKick*1.05-a.position.z)*(1-Math.exp(-v*3.4)),H.shake>5e-4&&(a.position.x+=(Math.random()-.5)*H.shake,a.position.y+=(Math.random()-.5)*H.shake,H.shake*=Math.exp(-v*10)),a.lookAt(0,4.05,0)}u.rotation.y+=v*.006,f.rotation.y-=v*.004,d.rotation.y+=v*.012,_.position.x=-16+Math.sin(G*.05)*2,x.position.y=1+Math.sin(G*.07+1)*2;for(let K=0;K<E.length;K++)E[K].rotation.z+=v*(.02+K*.012),E[K].rotation.y+=v*.008;if(H.city+=(H.cityTarget-H.city)*(1-Math.exp(-v*1.6)),R.visible=H.city>.012,R.visible){R.position.x=H.mouse.x*1.4;for(let K=0;K<C.length;K++){const pe=C[K];pe.map.offset.x+=v*pe.speed*(.7+H.energy*1.6+Ge*.8),pe.mesh.position.y=pe.base+Math.sin(G*.17+K*1.7)*.18,pe.mat.opacity=H.city*(K?.42:.3)}}if(L.fade+=(L.target-L.fade)*(1-Math.exp(-v*2.6)),L.group.visible=L.fade>.008,L.group.visible){if(L.target>0&&!L.frozen&&(L.runTime=L.anchorRun+Math.max(0,G-L.anchorT)),!L.frozen){const Tn=60/Math.max(1,H.bpm),Qt=L.runTime/(Tn*32)*Math.PI*2,fs=Tn*(L.mode==="final"?.34:.5),nr=Math.floor((G-H.beatOffset)/fs)*(Math.PI*2/12);L.slowAngle+=(Qt-L.slowAngle)*(1-Math.exp(-v*4)),L.fastAngle+=(nr-L.fastAngle)*(1-Math.exp(-v*20)),L.handSlow.material.rotation=-L.slowAngle,L.handFast.material.rotation=-L.fastAngle}L.slowKick=Math.max(0,L.slowKick-v*3.6),L.fastKick=Math.max(0,L.fastKick-v*4.4),L.kick=Math.max(0,L.kick-v*3.1);const K=L.fade;L.face.material.opacity=K*(.34+L.kick*.14),L.aura.material.opacity=K*(.085+L.kick*.08),L.hub.material.opacity=K*(.5+L.kick*.45),L.handSlow.material.opacity=K*(.72+L.slowKick*.34),L.handFast.material.opacity=K*(.82+L.fastKick*.28),L.handSlow.material.color.copy(L.slowColor).lerp(wn,L.slowKick*.75),L.handFast.material.color.copy(L.fastColor).lerp(wn,L.fastKick*.75);const pe=1.9*(1+L.kick*.26+Math.sin(G*7.5)*.025);L.hub.scale.set(pe,pe,1);const zt=1+L.kick*.012;L.face.scale.set(21.6*zt,21.6*zt,1),L.dialSlow.visible=!0,L.dialFast.visible=!0,L.dialSlow.material.rotation=-L.slowAngle,L.dialFast.material.rotation=-L.fastAngle,L.dialSlow.material.opacity=K*(.3+L.slowKick*.24),L.dialFast.material.opacity=K*(.36+L.fastKick*.24),L.dialSlow.material.color.copy(L.slowColor).lerp(wn,L.slowKick*.7),L.dialFast.material.color.copy(L.fastColor).lerp(wn,L.fastKick*.7)}O(v,G);for(const K of w)K.rotation.x+=K.userData.spin.x*v,K.rotation.y+=K.userData.spin.y*v,K.rotation.z+=K.userData.spin.z*v,K.position.y+=Math.sin(G*.4+K.position.x)*v*.06;let Hn=!1;for(let K=0;K<k;K++){if(we[K]<=0)continue;if(Hn=!0,we[K]-=v,we[K]<=0){ce[K*3+1]=-999;continue}be[K*3]*=.972,be[K*3+1]-=2.4*v,be[K*3+2]*=.972,ce[K*3]+=be[K*3]*v,ce[K*3+1]+=be[K*3+1]*v,ce[K*3+2]+=be[K*3+2]*v;const pe=Math.max(0,we[K]/qe[K]);ge[K*3]*=.988,ge[K*3+1]*=.988,ge[K*3+2]*=.988,pe<.25&&(ge[K*3]*=pe/.25,ge[K*3+1]*=pe/.25,ge[K*3+2]*=pe/.25)}Hn&&(Ye.attributes.position.needsUpdate=!0,Ye.attributes.color.needsUpdate=!0);for(const K of bt){if(K.life<=0)continue;K.life-=v;const pe=1-Math.max(0,K.life/K.max),zt=.75+pe*K.scale;K.sprite.scale.set(zt,zt,1),K.sprite.material.opacity=(1-pe)*.9,K.life<=0&&(K.sprite.visible=!1)}for(const K of Ct){if(K.delay>0&&(K.delay-=v,K.delay>0)||K.life<=0)continue;if(K.life-=v,K.life<=0){K.sprite.visible=!1;continue}const pe=1-K.life/K.max;K.vx*=Math.exp(-v*2.5),K.vy*=Math.exp(-v*1.9),K.sprite.position.x+=K.vx*v,K.sprite.position.y+=K.vy*v,K.sprite.material.rotation+=K.spin*v;const zt=K.base*(.7+pe*1.15);K.sprite.scale.set(zt,zt,1),K.sprite.material.opacity=Math.pow(1-pe,1.55)*K.alpha,K.sprite.visible=!0}}function gf(){r.render()}function _f(){t.dispose()}return{scene:n,camera:a,stage:rt,noteRoot:Qe,state:H,clock:L,boss:se,bloom:s,laneRoot:Re,windRoot:z,church:F,makeNote:Y,setSection:$u,animate:mf,render:gf,laneX:nf,laneZ:af,worldPoint:bi,laneScreenXs:sf,laneScreenPoints:vl,laneScreenGeometry:rf,laneScreenAngle:of,setPreviewLanes:ju,setCity:Ju,setTempo:yl,setClock:Qu,clockTick:ef,clockReset:tf,setBoss:Dt,bossCameraEvent:un,bossGlitch:Xu,bossTick:Yu,windFx:os,freeNotePose:q,startPendulum:Ja,stopPendulum:Qa,swingResolve:is,swingWhiff:as,pendulumReset:ns,pendulumTargetScreen:y,pendulum:X,pressFx:lf,hitFx:df,missFx:pf,ghostFx:cf,echoFx:xl,pulseFx:Ml,burstFx:Sl,vibeFx:ff,motionEvent:hf,clearGhosts:uf,layout:ls,dispose:_f,get noteSpeed(){return H.noteSpeed},set noteSpeed(v){H.noteSpeed=v},get noteScale(){return Math.max(1,Math.min(1.3,H.view.ring/1.65))}}}class ig{constructor(){this.ctx=null,this.buffer=null,this.source=null,this.gain=null,this.startAt=0,this.offset=0,this.duration=0,this.loaded=!1,this.muted=!1,this.hitGain=null,this.cache=new Map}async load(e,t){let n=this.cache.get(e);if(!n){const a=await fetch(e);if(!a.ok)throw new Error("audio fetch failed: "+a.status);const r=Number(a.headers.get("content-length"))||115e4;let s;if(a.body&&a.body.getReader){const o=a.body.getReader(),c=[];let l=0;for(t?.(0);;){const{value:f,done:d}=await o.read();if(d)break;c.push(f),l+=f.length,t?.(Math.min(.94,l/r))}s=new Uint8Array(l);let u=0;for(const f of c)s.set(f,u),u+=f.length}else s=new Uint8Array(await a.arrayBuffer());t?.(.95),this.ctx=this.ctx||new(window.AudioContext||window.webkitAudioContext)({latencyHint:"interactive"}),n=await this.ctx.decodeAudioData(s.buffer),this.cache.set(e,n)}return this.buffer=n,this.duration=n.duration,this.loaded=!0,this.gain||(this.gain=this.ctx.createGain(),this.gain.gain.value=.92,this.gain.connect(this.ctx.destination)),this.hitGain||(this.hitGain=this.ctx.createGain(),this.hitGain.gain.value=.5,this.hitGain.connect(this.ctx.destination)),t?.(1),n}async start(e=0,t={}){if(!this.loaded)return;if(!this.ctx)throw new Error("no audio context");this.ctx.state!=="running"&&await this.ctx.resume(),this.stop(),this.source=this.ctx.createBufferSource(),this.source.buffer=this.buffer,this.source.connect(this.gain);const n=this.ctx.currentTime+.12;this.startAt=n,this.offset=e;try{const a=Math.max(0,(t.fadeStart??this.duration-6.7)-e),r=Math.max(.05,(t.fadeEnd??this.duration-4.7)-e);this.gain.gain.cancelScheduledValues(this.ctx.currentTime),this.gain.gain.setValueAtTime(.92,this.ctx.currentTime),this.gain.gain.setValueAtTime(.92,n+a),this.gain.gain.linearRampToValueAtTime(0,n+r)}catch{}this.source.start(n,e)}stop(){if(this.source){try{this.source.stop()}catch{}this.source.disconnect(),this.source=null}}pause(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}get time(){return this.ctx?this.ctx.currentTime-this.startAt+this.offset:0}get paused(){return!!this.ctx&&this.ctx.state==="suspended"}click(e=3,t=1){if(!this.ctx||this.ctx.state!=="running"||this.muted)return;const n=this.ctx.currentTime,a=this.ctx.createOscillator(),r=this.ctx.createGain();a.type="triangle";const s=360*Math.pow(2,e/12);a.frequency.setValueAtTime(s*1.5,n),a.frequency.exponentialRampToValueAtTime(s*.75,n+.035),r.gain.setValueAtTime(1e-4,n),r.gain.exponentialRampToValueAtTime(.035*t,n+.004),r.gain.exponentialRampToValueAtTime(1e-4,n+.055),a.connect(r),r.connect(this.hitGain),a.start(n),a.stop(n+.07)}thud(){if(!this.ctx||this.ctx.state!=="running"||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(90,e),t.frequency.exponentialRampToValueAtTime(45,e+.12),n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.05,e+.01),n.gain.exponentialRampToValueAtTime(1e-4,e+.18),t.connect(n),n.connect(this.hitGain),t.start(e),t.stop(e+.2)}}const bu={KeyA:0,KeyS:1,KeyD:2,KeyF:3,KeyJ:4,KeyK:5,KeyL:6,Semicolon:7,Numpad1:0,Numpad2:1,Numpad3:2,Numpad4:3,Numpad5:4,Numpad6:5,Numpad7:6,Numpad8:7},Dc={4:[2,3,4,5],6:[1,2,3,4,5,6],8:[0,1,2,3,4,5,6,7]},Ka=.185,ua={perfect:.045,great:.09,good:.135},wu={perfect:3e3,great:2e3,good:1e3,bad:300},Tu={perfect:1,great:.85,good:.55,bad:.25,miss:0},Eu="cryout-best-v2",ag="cryout-best-v1",rg=2.05,Au=512,Me=i=>document.getElementById(i),B={canvas:Me("scene"),hud:Me("hud"),pads:[...document.querySelectorAll(".pad")],centerPad:Me("centerPad"),start:Me("startScreen"),startBtn:Me("startBtn"),startLabel:Me("startBtnLabel"),loadFill:Me("loadFill"),startLanes:Me("startLanes"),startTrack:Me("startTrack"),startLength:Me("startLength"),startLevel:Me("startLevel"),trackCards:[...document.querySelectorAll(".track-card")],score:Me("score"),acc:Me("acc"),maxCombo:Me("maxCombo"),progress:Me("progressFill"),progressGlow:Me("progressGlow"),section:Me("sectionName"),time:Me("timeLabel"),keys:Me("keysCount"),energy:Me("energyFill"),comboHud:Me("comboHud"),comboNum:Me("comboNum"),judge:Me("judge"),pauseBtn:Me("pauseBtn"),pause:Me("pauseScreen"),result:Me("resultScreen"),toast:Me("toast"),rank:Me("rank"),finalScore:Me("finalScore"),finalAcc:Me("finalAcc"),cPerfect:Me("cPerfect"),cGreat:Me("cGreat"),cGood:Me("cGood"),cBad:Me("cBad"),cMiss:Me("cMiss"),fMaxCombo:Me("fMaxCombo"),fcBadge:Me("fcBadge"),resultTag:Me("resultTag"),bestScoreLabel:Me("bestScoreLabel"),bestBadge:Me("bestBadge"),bestNote:Me("bestNote"),bestLine:Me("bestLine"),hudTrack:Me("hudTrack"),hudBpm:Me("hudBpm"),resultTrack:Me("resultTrack"),resultDiff:Me("resultDiff"),resultBpm:Me("resultBpm"),footTrack:Me("footTrack"),footLanes:Me("footLanes"),barPerfect:Me("barPerfect"),barGreat:Me("barGreat"),barGood:Me("barGood"),barBad:Me("barBad"),barMiss:Me("barMiss"),peakCombo:Me("peakCombo"),comboLine:Me("comboLine"),comboFill:Me("comboFill"),accRing:Me("accRing"),scoreDelta:Me("scoreDelta"),resultLoading:Me("resultLoading"),loadTrack:Me("loadTrack"),loadProgress:Me("loadProgress"),loadPct:Me("loadPct"),loadRank:Me("loadRank"),flash:Me("flash"),bossGlitch:Me("bossGlitch"),bossCaption:Me("bossCaption"),bcKicker:Me("bcKicker"),bcTitle:Me("bcTitle"),bcSub:Me("bcSub")},Te=ng(B.canvas),Ut=new ig;let Lt=qo[Ef]||Oc[0],It=Lt.chart,ai=[],ki=[],Si=!1,dt="boot",ya=null,Go=0,ul=It.song.chartEnd,Ho=It.song.duration,Or=0,fa=0,yi=[],Vo=0,Wo=0,Xo=0,Ic=0;const Oe={score:0,combo:0,maxCombo:0,judged:0,weight:0,perfect:0,great:0,good:0,bad:0,miss:0,dropped:0,health:100},Ln=new Array(8).fill(!1),Oi=new Array(8).fill(null),ri=new Set;function Cu(){return ri.size>0}let Uc=0,ka=0,Oa=0;function sg(){const i={};try{const e=localStorage.getItem(ag);e&&(i.cryout=JSON.parse(e))}catch{}try{const e=localStorage.getItem(Eu);e&&Object.assign(i,JSON.parse(e)||{})}catch{}return i}let Ni=sg(),Fa=Ni[Lt.id]||null;function Ru(){Fa=Ni[Lt.id]||null;const i=Fa?`${String(Fa.score).padStart(7,"0")} · ${Fa.rank||"—"}`:"—";B.bestScoreLabel&&(B.bestScoreLabel.textContent=i),B.bestLine&&(B.bestLine.innerHTML=`PERSONAL BEST <b>${i}</b>`);for(const e of B.trackCards){const t=Ni[e.dataset.track],n=e.querySelector(".tc-best");n&&(n.textContent=t?`PB ${t.rank||"—"}`:"",n.title=t?`Personal best ${t.score} · ${(t.acc||0).toFixed(2)}%`:"")}}Te.setSection(It.sections[0]);Te.setTempo(It.song.bpm,It.song.beatOffset);Te.setCity(It.sections[0].city||0);Te.setBoss(Lt.boss?"preview":"off");function og(){for(const i of ai)i.group.removeFromParent(),i.head.material.dispose(),i.body&&i.body.material.dispose(),i.tail&&i.tail.material.dispose();ai=[]}function Pu(){og(),ki=(It.swings||[]).map((e,t)=>({t:e.t,index:t,state:"pending"}));const i=!!It.song.freeNotes;ai=It.notes.map((e,t)=>{const n=Te.makeNote(e.lane,e.type,i);return n.group.visible=!1,{data:e,index:t,lane:e.lane,type:e.type,free:i,state:"pending",endTime:e.t+(e.dur||0),group:n.group,head:n.head,body:n.body,tail:n.tail,color:n.color,tickAt:e.t}})}function fl(){for(const i of ai)i.state="pending",i.tickAt=i.data.t,i.group.visible=!1,i.group.position.set(0,0,0),i.head.visible=!0,i.head.scale.set(1.04,1.04,1),i.head.material.opacity=1,i.body&&(i.body.visible=!0,i.body.scale.set(.52,1,1),i.body.position.y=.5,i.tail.visible=!0,i.tail.position.y=1);Object.assign(Oe,{score:0,combo:0,maxCombo:0,judged:0,weight:0,perfect:0,great:0,good:0,bad:0,miss:0,dropped:0,health:100}),Ln.fill(!1),Oi.fill(null),ri.clear(),ka=0,Oa=0,yi=[],Vo=0,Wo=0,Te.clearGhosts(),Te.clockReset(),jr(),Te.pendulumReset();for(const i of ki)i.state="pending";Go=0,ya=null,Iu(It.sections[0],!0),Du(0),Mi(0,!1),B.judge.className="";for(const i of B.pads)i.classList.remove("pressed");B.flash.classList.remove("on")}function Lu(i){return Dc[i]||Dc[8]}function lg(i){const e=new Set;for(const t of ai){if(t.state!=="pending")continue;const n=t.data.t-i;n<rg&&n>-Ka&&e.add(t.lane)}return e}function cg(i){return String(i).padStart(2,"0")}function Yo(i){const e=Math.max(0,Math.floor(i));return`${Math.floor(e/60)}:${cg(e%60)}`}function Du(i){i-Vo>=.32&&(Vo=i,yi.push(Oe.combo),yi.length>Au&&yi.shift()),B.score.textContent=String(Oe.score).padStart(7,"0");const e=Oe.judged?Oe.weight/Oe.judged*100:100;B.acc.textContent=e.toFixed(2)+"%",B.maxCombo.textContent=Oe.maxCombo;const t=Math.max(0,Math.min(1,i/ul));B.progress.style.width=(t*100).toFixed(2)+"%",B.progressGlow.style.left=(t*100).toFixed(2)+"%";const n=Math.max(0,Math.min(Ho,i));B.time.textContent=`${Yo(n)} / ${Yo(Ho)}`,B.energy.style.height=Math.max(0,Math.min(100,Oe.health)).toFixed(1)+"%"}function $a(i,e){const t=B.judge;t.textContent=e||i.toUpperCase(),t.className=i,t.offsetWidth,t.classList.add("pop")}function Mi(i,e=!0){Oe.combo=i,i>Oe.maxCombo&&(Oe.maxCombo=i),B.comboNum.textContent=i,B.maxCombo.textContent=Oe.maxCombo,i>=2?B.comboHud.classList.add("on"):B.comboHud.classList.remove("on"),i>=2&&e&&(B.comboHud.classList.remove("bump"),B.comboHud.offsetWidth,B.comboHud.classList.add("bump"))}function xa(i,e=1300){B.toast.textContent=i,B.toast.classList.add("on"),clearTimeout(Uc),Uc=setTimeout(()=>B.toast.classList.remove("on"),e)}function Xa(i){document.body.classList.toggle("boss-intro",i),i||ja()}function ja(){clearTimeout(Xo),B.bossCaption&&(B.bossCaption.classList.remove("on"),B.bossCaption.setAttribute("aria-hidden","true"))}function ug(i){if(!B.bossCaption)return;clearTimeout(Xo),B.bcKicker.textContent=i.kicker||"",B.bcTitle.textContent=i.title||"",B.bcSub.textContent=i.sub||"",B.bossCaption.setAttribute("aria-hidden","false"),B.bossCaption.classList.remove("on"),B.bossCaption.offsetWidth,B.bossCaption.classList.add("on");const e=i.hold??3.4;e>0&&(Xo=setTimeout(()=>{B.bossCaption.classList.remove("on"),B.bossCaption.setAttribute("aria-hidden","true")},e*1e3))}function fg(i=1){B.bossGlitch&&(B.bossGlitch.classList.remove("on"),B.bossGlitch.offsetWidth,B.bossGlitch.classList.add("on"),clearTimeout(Ic),Ic=setTimeout(()=>B.bossGlitch.classList.remove("on"),340))}function Iu(i,e=!1){if(!i||!e&&i===ya)return;ya=i,Te.setSection(i),i.bpm&&Te.setTempo(i.bpm,i.beatOffset??0),B.section.textContent=i.name,B.keys.textContent=i.keys,B.hudBpm&&i.bpm&&(B.hudBpm.textContent=`${Number(i.bpm).toFixed(1).replace(/\.0$/,"")} BPM`);const t=new Set(Lu(i.keys));for(const n of B.pads){const a=Number(n.dataset.lane),r=t.has(a);n.classList.toggle("active",r),n.classList.toggle("sleep",!r),n.setAttribute("aria-hidden",String(!r)),n.tabIndex=r?0:-1}document.documentElement.style.setProperty("--cyan",i.color),document.documentElement.style.setProperty("--magenta",i.accent),e||(Lt.boss&&i.intro||xa(`${i.name} // ${i.keys} LANES`,1100),Te.state.shake=Math.min(.12,Te.state.shake+.035))}function hg(i){const e=It.sections;for(let t=e.length-1;t>=0;t--)if(i>=e[t].start)return{index:t,sec:e[t]};return{index:0,sec:e[0]}}function dg(i,e){const t=Math.abs(e);let n;t<=ua.perfect?n="perfect":t<=ua.great?n="great":t<=ua.good?n="good":n="bad",Oe[n]++,Oe.judged++,Oe.weight+=Tu[n],Oe.score+=wu[n],Oe.health=Math.min(100,Oe.health+(n==="perfect"?1.1:n==="great"?.8:n==="good"?.4:-1.6)),n==="bad"?Mi(0,!1):Mi(Oe.combo+1),i.type==="hold"?(i.state="holding",i.endTime=i.data.t+i.data.dur,i.tickAt=Ut.time,i.head.visible=!1,Oi[i.lane]=i):(i.state="done",i.group.visible=!1),$a(n,n==="perfect"?"PERFECT":n==="great"?"GREAT":n==="good"?"GOOD":"BAD"),Te.hitFx(i.lane,n),Ut.click(i.lane,n==="perfect"?.52:.38)}function pg(i){i.state==="pending"&&(i.state="miss",i.group.visible=!1,Oe.miss++,Oe.judged++,Oe.health=Math.max(0,Oe.health-5),Mi(0,!1),$a("miss","MISS"),Te.missFx(i.lane),Ut.thud())}function Uu(i){i.state==="holding"&&(i.state="dropped",i.group.visible=!1,Oi[i.lane]=null,Oe.dropped++,Oe.miss++,Oe.judged++,Oe.health=Math.max(0,Oe.health-4),Mi(0,!1),$a("miss","HOLD LOST"),Te.missFx(i.lane),Ut.thud())}function Nu(i){i.state==="holding"&&(i.state="done",i.group.visible=!1,Oi[i.lane]=null,Oe.score+=450,Oe.health=Math.min(100,Oe.health+1.2),Te.pressFx(i.lane),Te.hitFx(i.lane,"great"))}function hl(i){if(dt!=="playing")return;Te.pressFx(i),Ut.click(i,.16);const e=Ut.time;if(e<0)return;let t=null,n=1/0;for(const a of ai){if(a.lane!==i||a.state!=="pending")continue;const r=e-a.data.t;if(r<-.16||r>Ka)continue;const s=Math.abs(r);s<n&&(n=s,t=a)}t&&dg(t,e-t.data.t)}function dl(i){if(dt!=="playing")return;const e=Oi[i];e&&(Cu()||(Oi[i]=null,Ut.time<e.endTime-.12?Uu(e):Nu(e)))}function mg(i){ki.length&&(Si=!0,Te.startPendulum({start:i.t,period:i.period??2.4146,amplitude:i.amplitude??.42,times:ki.map(e=>e.t)}),document.body.classList.add("pendulum"),B.centerPad.classList.add("show"),B.centerPad.setAttribute("aria-hidden","false"),Fu(),xa("STASIS // TAP THE CENTRE",1800))}function jr(){Si=!1,Te.stopPendulum(),document.body.classList.remove("pendulum"),B.centerPad&&(B.centerPad.classList.remove("show","pressed"),B.centerPad.setAttribute("aria-hidden","true"))}function Fu(){if(!Si||!B.centerPad)return;const i=Te.pendulumTargetScreen(),e=Math.max(140,i.radius*2);B.centerPad.style.left=i.x.toFixed(1)+"px",B.centerPad.style.top=i.y.toFixed(1)+"px",B.centerPad.style.width=e.toFixed(1)+"px",B.centerPad.style.height=e.toFixed(1)+"px"}function gg(i,e){const t=Math.abs(e);let n;t<=ua.perfect?n="perfect":t<=ua.great?n="great":t<=ua.good?n="good":n="bad",i.state="done",Oe[n]++,Oe.judged++,Oe.weight+=Tu[n],Oe.score+=wu[n],Oe.health=Math.min(100,Oe.health+(n==="perfect"?1.2:n==="great"?.9:n==="good"?.5:-1.4)),n==="bad"?Mi(0,!1):Mi(Oe.combo+1),$a(n,n==="perfect"?"PERFECT":n==="great"?"GREAT":n==="good"?"GOOD":"BAD"),Te.swingResolve(i.index,"hit"),Ut.click(3,n==="perfect"?.56:.4)}function _g(i){i.state==="pending"&&(i.state="miss",Oe.miss++,Oe.judged++,Oe.health=Math.max(0,Oe.health-5),Mi(0,!1),$a("miss","MISS"),Te.swingResolve(i.index,"miss"),Ut.thud())}function vg(i){if(Si)for(const e of ki)e.state==="pending"&&i>e.t+Ka&&_g(e)}function pl(){if(dt!=="playing"||!Si)return;const i=Ut.time;let e=null,t=1/0;for(const n of ki){if(n.state!=="pending")continue;const a=i-n.t;if(a<-.16||a>Ka)continue;const r=Math.abs(a);r<t&&(t=r,e=n)}if(!e){Te.swingWhiff(),Ut.click(3,.1);return}gg(e,i-e.t)}const qs=8.4;function yg(i){const e=Te.noteScale;for(const t of ai)if(t.state==="pending"){const n=(t.data.t-i)*qs;if(t.free){const a=Te.freeNotePose(t.lane,n,t.index);t.group.position.set(a.x,a.y,a.z)}else t.group.position.set(0,n,.24);if(t.group.visible=n<14.5&&n>-1.3,t.head.scale.set(1.04*e,1.04*e,1),t.body){const a=t.data.dur*qs;t.body.visible=t.group.visible,t.tail.visible=t.group.visible,t.body.scale.set(.52*e,a,1),t.body.position.y=a/2,t.body.material.rotation=t.free?0:-Te.laneScreenAngle(t.lane),t.tail.scale.set(.68*e,.68*e,1),t.tail.position.y=a}i>t.data.t+Ka&&pg(t)}else if(t.state==="holding"){if(!Ln[t.lane]&&!Cu()){Uu(t);continue}if(i>=t.endTime-.02){Nu(t);continue}const n=Math.max(0,(t.endTime-i)*qs);if(t.group.visible=!0,t.free){const a=Te.freeNotePose(t.lane,0,t.index);t.group.position.set(a.x,.02,a.z)}else t.group.position.set(0,.02,.24);t.head.visible=!1,t.body&&(t.body.visible=n>.03,t.body.scale.set(.52*e,n,1),t.body.position.y=n/2,t.body.material.rotation=t.free?0:-Te.laneScreenAngle(t.lane),t.tail.visible=n>.4,t.tail.scale.set(.68*e,.68*e,1),t.tail.position.y=n),i>t.tickAt&&(t.tickAt=i+.12,Oe.score+=24,Oe.health=Math.min(100,Oe.health+.06))}else t.group.visible=!1}async function ml(){if(Ut.loaded){fa++,B.start.classList.remove("show"),B.result.classList.remove("show"),B.resultLoading.classList.remove("show"),B.pause.classList.remove("show"),B.hud.classList.remove("hidden"),B.hud.setAttribute("aria-hidden","false"),document.body.classList.add("playing"),ja(),B.bossGlitch?.classList.remove("on"),Lt.boss?(Te.setBoss("intro"),Xa(!0)):(Te.setBoss("off"),Xa(!1)),fl(),dt="starting";try{await Ut.start(0,{fadeStart:Lt.fadeStart,fadeEnd:Lt.fadeEnd}),dt="playing",Lt.boss||xa(`LISTEN // ${It.sections[0].keys} LANES`,1500)}catch(i){console.error(i),dt="menu",document.body.classList.remove("playing"),B.hud.classList.add("hidden"),B.start.classList.add("show"),B.startLabel.textContent="AUDIO ERROR",xa("AUDIO COULD NOT START",3e3)}}}function ts(){dt==="playing"&&(dt="paused",Ut.pause(),B.pause.classList.add("show"))}async function ku(){dt==="paused"&&(Ut.resume(),B.pause.classList.remove("show"),dt="playing")}function Ou(){fa++,dt="menu",Ut.stop(),Ut.resume(),B.pause.classList.remove("show"),B.result.classList.remove("show"),B.resultLoading.classList.remove("show"),B.hud.classList.add("hidden"),B.hud.setAttribute("aria-hidden","true"),B.start.classList.add("show"),document.body.classList.remove("playing"),Te.setSection(It.sections[0]),Te.setTempo(It.song.bpm,It.song.beatOffset),Te.setCity(It.sections[0].city||0),Te.setBoss(Lt.boss?"preview":"off"),Te.setPreviewLanes(new Set),Xa(!1),ja(),B.bossGlitch?.classList.remove("on");for(const i of ai)i.group.visible=!1;Ln.fill(!1),Oi.fill(null),ri.clear(),ka=0,Oa=0,Te.clearGhosts(),Te.clockReset(),jr(),Te.pendulumReset(),Lt.id==="chronostasis"&&Te.setClock("run",.4);for(const i of B.pads)i.classList.remove("pressed","active","sleep");document.documentElement.style.setProperty("--cyan","#5ee7ff"),document.documentElement.style.setProperty("--magenta","#ff5fd2")}function xg(i,e){return e===0?"F":i>=99.5?"S+":i>=98?"S":i>=93?"A":i>=86?"B":i>=76?"C":i<50?"F":"D"}function Mg(i,e){const a=i.length?i:[0,0,0,0],r=Math.max(1,e,...a),s=320/Math.max(1,a.length-1);let o="";for(let l=0;l<a.length;l++){const u=l*s,f=116-a[l]/r*106;o+=`${l?"L":"M"}${u.toFixed(1)} ${f.toFixed(1)}`}const c=`${o}L320 116L0 116Z`;return{line:o,fill:c}}function Nc(i=1){B.flash.style.opacity=String(Math.min(.42,.16+i*.18)),B.flash.classList.add("on"),clearTimeout(Wo),Wo=setTimeout(()=>{B.flash.style.opacity="",B.flash.classList.remove("on")},180)}function Fc(i,e,t,n){const r=performance.now(),s=o=>{const c=Math.min(1,(o-r)/t),l=1-Math.pow(1-c,3);i.textContent=n(Math.round(0+(e-0)*l)),c<1&&requestAnimationFrame(s)};requestAnimationFrame(s)}function Sg(i){const{rank:e,acc:t,full:n,isBest:a,prevBest:r,judgeTotals:s}=i;B.rank.textContent=e,B.finalScore.textContent="0000000",B.finalAcc.textContent="0.00%",Fc(B.finalScore,i.score,900,p=>String(p).padStart(7,"0")),Fc(B.fMaxCombo,i.maxCombo,700,p=>String(p));const o=performance.now(),c=p=>{const _=Math.min(1,(p-o)/900),x=t*(1-Math.pow(1-_,3));B.finalAcc.textContent=x.toFixed(2)+"%",B.accRing.style.setProperty("--acc",x.toFixed(2)+"%"),_<1&&requestAnimationFrame(c)};requestAnimationFrame(c),B.cPerfect.textContent=i.counts.perfect,B.cGreat.textContent=i.counts.great,B.cGood.textContent=i.counts.good,B.cBad.textContent=i.counts.bad,B.cMiss.textContent=i.counts.miss;const l=Math.max(1,s);B.barPerfect.style.width=(i.counts.perfect/l*100).toFixed(1)+"%",B.barGreat.style.width=(i.counts.great/l*100).toFixed(1)+"%",B.barGood.style.width=(i.counts.good/l*100).toFixed(1)+"%",B.barBad.style.width=(i.counts.bad/l*100).toFixed(1)+"%",B.barMiss.style.width=(i.counts.miss/l*100).toFixed(1)+"%";const u=Mg(yi,Oe.maxCombo);B.comboLine.setAttribute("d",u.line),B.comboFill.setAttribute("d",u.fill),B.peakCombo.textContent=Oe.maxCombo,B.resultTrack.textContent=Lt.title,B.resultDiff.textContent=Lt.difficulty,B.resultBpm.textContent=Lt.bpmLabel||`${Lt.bpm} BPM`,B.footTrack.textContent=Lt.shortTitle,B.footLanes.textContent=Lt.laneLabel,B.resultTag.textContent=n?"FULL COMBO // FIELD MASTERED":t<50?"SIGNAL LOST // TRY AGAIN":"CLEARED // SIGNAL COMPLETE",B.fcBadge.classList.toggle("on",n),B.bestBadge.classList.toggle("on",a);const f=Ni[Lt.id]||null;B.bestNote.innerHTML=f?`${String(f.score).padStart(7,"0")} · ${f.rank||"—"}`:"FIRST RUN";const d=Math.max(0,(f?.score||0)-i.score);B.scoreDelta.textContent=a?r?`NEW BEST +${String(Math.max(0,i.score-r.score)).padStart(5,"0")}`:"FIRST CLEAR":d>0?`PB GAP ${String(d).padStart(5,"0")}`:"PB MATCHED",B.result.classList.remove("show"),B.result.offsetWidth,B.result.classList.add("show"),setTimeout(()=>{B.resultLoading.classList.remove("show")},60),B.resultLoading.setAttribute("aria-hidden","true")}function bg(){if(dt!=="playing"&&dt!=="paused")return;dt="results",Ut.stop(),Ut.resume(),B.hud.classList.add("hidden"),B.hud.setAttribute("aria-hidden","true"),B.pause.classList.remove("show"),document.body.classList.remove("playing");const i=Oe.judged?Oe.weight/Oe.judged*100:100,e=xg(i,Oe.judged);yi.push(Oe.combo),yi.length>Au&&yi.shift();const t=Oe.miss===0&&Oe.bad===0&&Oe.judged>0,n=Oe.score,a=Ni[Lt.id]||null,r=!a||n>a.score||n===a.score&&i>a.acc;if(r){Ni[Lt.id]={score:n,acc:i,rank:e,maxCombo:Oe.maxCombo,full:t,at:Date.now()};try{localStorage.setItem(Eu,JSON.stringify(Ni))}catch{}}Ru();const s={score:n,acc:i,rank:e,full:t,isBest:r,prevBest:a,maxCombo:Oe.maxCombo,counts:{...Oe},judgeTotals:Oe.judged},o=++fa;B.result.classList.remove("show"),B.resultLoading.classList.add("show"),B.resultLoading.setAttribute("aria-hidden","false"),B.loadTrack.textContent=`${Lt.shortTitle} // ${Lt.difficulty}`,B.loadRank.textContent="?",B.loadProgress.style.width="0%",B.loadPct.textContent="00%";const c=performance.now(),l=1650,u=f=>{if(o!==fa)return;const d=Math.min(1,(f-c)/l),p=1-Math.pow(1-d,3);B.loadProgress.style.width=(p*100).toFixed(1)+"%",B.loadPct.textContent=String(Math.round(p*100)).padStart(2,"0")+"%",d<1?requestAnimationFrame(u):(B.loadRank.textContent=e,setTimeout(()=>{o===fa&&Sg(s)},280))};requestAnimationFrame(u)}function wg(){fa++,B.result.classList.remove("show"),ml()}function Tg(i=new Set){const e=new Set(ya?Lu(ya.keys):[]);for(const t of i)e.add(t);for(let t=0;t<8;t++){const n=Te.laneScreenGeometry(t),a=t>0?n.x-Te.laneScreenGeometry(t-1).x:n.x-Te.laneScreenGeometry(1).x,r=t<7?Te.laneScreenGeometry(t+1).x-n.x:n.x-Te.laneScreenGeometry(6).x,s=Math.max(26,(Math.abs(a)+Math.abs(r))*.5),o=Math.max(48,Math.min(240,s*1.1)),c=n.y+26,l=Math.max(6,Math.min(c-110,n.topY)),u=Math.max(110,c-l),f=B.pads[t],d=`translate(-50%,-100%) rotate(${n.angle.toFixed(4)}rad)`;f.style.left=n.x.toFixed(1)+"px",f.style.top=c.toFixed(1)+"px",f.style.width=o.toFixed(1)+"px",f.style.height=u.toFixed(1)+"px",f.style.transform=d;const p=e.has(t);f.classList.contains("sleep")===p&&f.classList.toggle("sleep",!p),f.setAttribute("aria-hidden",String(!p))}Fu()}function Eg(i){const e=hg(i);(e.index!==Go||ya===null)&&(Go=e.index,Iu(e.sec))}function Ag(i){const e=It.ghosts||[];for(;ka<e.length&&e[ka].t<=i;){const t=e[ka++];Te.ghostFx(t.lane,t.type)}}function Cg(i){const e=It.events||[];for(;Oa<e.length&&e[Oa].t<=i;){const t=e[Oa++];switch(t.type){case"echo":Te.echoFx(t.lane,t.dir??(t.lane<3.5?-1:1),t.power??1);break;case"pulse":Te.pulseFx(t.power??1);break;case"burst":Te.burstFx(t.lane,t.power??1);break;case"vibe":Te.vibeFx(t.power??1),Nc(t.power??1);break;case"motion":Te.motionEvent(t.style,t.amp,t.speed,t.pitch);break;case"clock":Te.setClock(t.mode,t.power??1,t.t),t.mode!=="freeze"&&jr();break;case"clockTick":Te.clockTick(t.hand,t.power??1);break;case"pendulum":t.mode==="start"?mg(t):jr();break;case"bossCamera":Te.bossCameraEvent(t.pos,t.look,t.fov,t.roll,t.dur);break;case"bossGlitch":Te.bossGlitch(t.power??1),fg(t.power??1),Nc((t.power??1)*.6);break;case"bossTick":Te.bossTick(t.hand,t.power??1);break;case"bossPhase":Te.setBoss(t.mode==="play"?"play":"outro"),t.mode==="play"?(Xa(!1),xa("CLOCK STAGE // FREE FIELD",1700)):ja();break;case"wind":Te.windFx(t.power??1);break;case"caption":ug(t);break}}}function Rg(i){if(i.code==="Escape"){dt==="playing"?(i.preventDefault(),ts()):dt==="paused"&&(i.preventDefault(),ku());return}if(i.code==="Space"){dt==="playing"&&Si&&(i.preventDefault(),i.repeat||pl());return}if(i.repeat)return;const e=bu[i.code];e!==void 0&&(i.preventDefault(),dt==="playing"&&(Ln[e]||(Ln[e]=!0,B.pads[e].classList.add("pressed"),hl(e))))}function Pg(i){const e=bu[i.code];e!==void 0&&Ln[e]&&(Ln[e]=!1,B.pads[e].classList.remove("pressed"),dl(e))}document.addEventListener("keydown",Rg,{passive:!1});document.addEventListener("keyup",Pg);for(const i of B.pads){const e=Number(i.dataset.lane),t=a=>{if(a.preventDefault(),dt==="playing"){ri.add(a.pointerId);try{i.setPointerCapture(a.pointerId)}catch{}Ln[e]||(Ln[e]=!0,i.classList.add("pressed"),hl(e))}},n=a=>{a.preventDefault(),ri.delete(a.pointerId),Ln[e]&&(Ln[e]=!1,i.classList.remove("pressed"),dl(e))};i.addEventListener("pointerdown",t,{passive:!1}),i.addEventListener("pointerup",n,{passive:!1}),i.addEventListener("pointercancel",n,{passive:!1}),i.addEventListener("lostpointercapture",n,{passive:!1}),i.addEventListener("contextmenu",a=>a.preventDefault())}if(B.centerPad){const i=t=>{if(t.preventDefault(),!(dt!=="playing"||!Si)){ri.add(t.pointerId);try{B.centerPad.setPointerCapture(t.pointerId)}catch{}B.centerPad.classList.add("pressed"),pl()}},e=t=>{t.preventDefault(),ri.delete(t.pointerId),B.centerPad.classList.remove("pressed")};B.centerPad.addEventListener("pointerdown",i,{passive:!1}),B.centerPad.addEventListener("pointerup",e,{passive:!1}),B.centerPad.addEventListener("pointercancel",e,{passive:!1}),B.centerPad.addEventListener("lostpointercapture",e,{passive:!1}),B.centerPad.addEventListener("contextmenu",t=>t.preventDefault())}document.addEventListener("pointerdown",i=>{dt==="playing"&&ri.add(i.pointerId)},{passive:!0});const gl=i=>{ri.delete(i.pointerId)};document.addEventListener("pointerup",gl,{passive:!0});document.addEventListener("pointercancel",gl,{passive:!0});document.addEventListener("pointerleave",gl,{passive:!0});B.startBtn.addEventListener("click",()=>{(dt==="boot"||dt==="menu")&&ml()});for(const i of B.trackCards)i.addEventListener("click",()=>{dt!=="boot"&&dt!=="menu"||i.dataset.track!==Lt.id&&zu(i.dataset.track)});B.pauseBtn.addEventListener("click",ts);Me("resumeBtn").addEventListener("click",ku);Me("restartBtn").addEventListener("click",()=>{B.pause.classList.remove("show"),ml()});Me("quitBtn").addEventListener("click",Ou);Me("retryBtn").addEventListener("click",wg);Me("menuBtn").addEventListener("click",Ou);document.addEventListener("visibilitychange",()=>{document.hidden&&dt==="playing"&&ts()});addEventListener("blur",()=>{dt==="playing"&&ts()});B.canvas.addEventListener("contextmenu",i=>i.preventDefault());function Bu(){const i=Lt;B.startTrack&&(B.startTrack.textContent=i.shortTitle),B.startLength&&(B.startLength.textContent=Yo(i.duration)),B.startLevel&&(B.startLevel.textContent=i.difficulty),B.startLanes&&(B.startLanes.textContent=i.laneLabel),B.hudTrack&&(B.hudTrack.textContent=i.shortTitle),B.hudBpm&&(B.hudBpm.textContent=i.bpmLabel||`${i.bpm} BPM`),B.loadTrack&&(B.loadTrack.textContent=`${i.shortTitle} // ${i.difficulty}`),document.body.classList.toggle("boss-track",!!i.boss);for(const e of B.trackCards){const t=qo[e.dataset.track];t&&e.style.setProperty("--card-accent",t.accent);const n=e.dataset.track===i.id;e.classList.toggle("active",n),e.setAttribute("aria-selected",String(n))}document.documentElement.style.setProperty("--track-accent",i.accent),Ru()}async function zu(i,{autoLoad:e=!0}={}){const t=qo[i];t&&(Lt=t,It=t.chart,ul=It.song.chartEnd,Ho=t.duration,Bu(),Xa(!1),ja(),B.bossGlitch?.classList.remove("on"),Te.setBoss(t.boss?"preview":"off"),Te.setSection(It.sections[0]),Te.setTempo(It.song.bpm,It.song.beatOffset),Te.setCity(It.sections[0].city||0),Te.setPreviewLanes(new Set),Pu(),fl(),t.id==="chronostasis"&&Te.setClock("run",.4),e&&(dt="boot",B.startBtn.disabled=!0,await Gu(t)))}async function Gu(i=Lt){const e=++Or;B.startLabel.textContent="DECODING AUDIO",B.loadFill.style.width="0%";try{if(await Ut.load(i.audio,t=>{e===Or&&(B.loadFill.style.width=Math.round(t*100)+"%")}),e!==Or)return;B.loadFill.style.width="100%",B.startLabel.textContent="START SESSION",B.startBtn.disabled=!1,dt="menu"}catch(t){if(e!==Or)return;console.error(t),B.startLabel.textContent="AUDIO UNAVAILABLE",xa("COULD NOT LOAD AUDIO",4e3),dt="menu"}}Pu();fl();dt="boot";Bu();Gu(Lt);let kc=performance.now(),Zs=0;function Hu(i){const e=Math.min(.05,Math.max(0,(i-kc)/1e3));if(kc=i,Zs+=e,dt==="playing"){const t=Ut.time;Eg(t);const n=lg(t);Te.setPreviewLanes(n),Ag(t),Cg(t),vg(t),yg(t),Du(t),Te.animate(e,t,!0),Tg(n),t>=ul&&bg()}else if(dt==="paused"){const t=Ut.time;Te.animate(e,t,!0)}else Te.animate(e,Zs,!1);Te.render(),requestAnimationFrame(Hu)}window.__cryout={audio:Ut,stats:Oe,scene:Te,pressLane:hl,releaseLane:dl,selectTrack:zu,get chart(){return It},get notes(){return ai},get swings(){return ki},get swingMode(){return Si},swingTap:pl,get state(){return dt},get best(){return Fa}};requestAnimationFrame(Hu);
