(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=t(a);fetch(a.href,r)}})();const af={song:{title:"CRYOUT",shortTitle:"CRYOUT",artist:"ORIGINAL TRACK",bpm:100,duration:138.1,chartEnd:133.5,beatOffset:.535,difficulty:"ADVANCED",laneLabel:"4 · 6 · 8",fadeStart:131.4,fadeEnd:133.4},sections:[{name:"SIGNAL",start:3.535,end:12.535,keys:4,color:"#5ee7ff",accent:"#8f7bff",energy:.18,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.8,bloom:.55,spin:.03,motion:"fan",motionAmp:.045,motionSpeed:.45,motionPitch:.02,city:0},{name:"ASCENT",start:12.535,end:22.735,keys:4,color:"#57d9ff",accent:"#9d7bff",energy:.38,rotY:.05,rotZ:-.02,tilt:.015,spread:1.03,y:.05,camZ:16.6,camY:6.6,bloom:.65,spin:.05,motion:"fan",motionAmp:.075,motionSpeed:.55,motionPitch:.035,city:0},{name:"CURRENT",start:22.735,end:41.335,keys:6,color:"#42e0d0",accent:"#c46bff",energy:.62,rotY:-.1,rotZ:.03,tilt:-.02,spread:1.06,y:.1,camZ:15.9,camY:6.4,bloom:.8,spin:.08,motion:"wave",motionAmp:.1,motionSpeed:.7,motionPitch:.05,city:0},{name:"SURGE",start:41.335,end:64.135,keys:8,color:"#ff5fd2",accent:"#58e6ff",energy:.82,rotY:.16,rotZ:-.05,tilt:.03,spread:1.1,y:.16,camZ:15.1,camY:6.2,bloom:.92,spin:.12,motion:"slope",motionAmp:.15,motionSpeed:.85,motionPitch:.075,city:0},{name:"DRIFT",start:64.135,end:75.535,keys:6,color:"#8f9dff",accent:"#ff7bd5",energy:.3,rotY:-.04,rotZ:.02,tilt:.06,spread:.94,y:.45,camZ:17.6,camY:7.1,bloom:.55,spin:.04,motion:"tiltL",motionAmp:.11,motionSpeed:.5,motionPitch:.04,city:0},{name:"PRESSURE",start:75.535,end:84.535,keys:8,color:"#ffa14a",accent:"#ff4fc8",energy:.86,rotY:-.18,rotZ:.06,tilt:-.03,spread:1.08,y:.22,camZ:14.9,camY:6.1,bloom:.95,spin:.14,motion:"zigzag",motionAmp:.145,motionSpeed:1,motionPitch:.07,city:0},{name:"BREAK",start:84.535,end:87.535,keys:4,color:"#e8f4ff",accent:"#8f7bff",energy:.05,rotY:0,rotZ:0,tilt:.04,spread:.86,y:.3,camZ:19,camY:7.6,bloom:.35,spin:.02,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:0},{name:"CRYOUT",start:87.535,end:125.935,keys:8,color:"#ff4fb8",accent:"#54e8ff",energy:1,rotY:.1,rotZ:-.04,tilt:.02,spread:1.12,y:.12,camZ:14.6,camY:6,bloom:1,spin:.16,motion:"orbit",motionAmp:.175,motionSpeed:1,motionPitch:.085,city:0},{name:"AFTERGLOW",start:125.935,end:131.335,keys:4,color:"#6fa8ff",accent:"#c7a4ff",energy:.22,rotY:.02,rotZ:0,tilt:.01,spread:.92,y:.35,camZ:18.2,camY:7.2,bloom:.45,spin:.02,motion:"fan",motionAmp:.055,motionSpeed:.4,motionPitch:.02,city:0},{name:"OUTRO",start:131.335,end:133.5,keys:4,color:"#6f8fff",accent:"#c7a4ff",energy:.05,rotY:0,rotZ:0,tilt:0,spread:.9,y:.6,camZ:19.5,camY:7.8,bloom:.35,spin:.01,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:0}],notes:[{t:3.535,lane:2},{t:4.735,lane:4},{t:5.935,lane:3},{t:6.535,lane:5},{t:7.135,lane:2},{t:7.735,lane:4},{t:8.335,lane:3},{t:9.235,lane:5},{t:9.535,lane:2},{t:10.135,lane:3},{t:10.735,lane:4},{t:11.335,lane:5},{t:11.935,lane:2},{t:12.235,lane:3},{t:12.535,lane:4},{t:13.135,lane:4},{t:13.735,lane:2},{t:14.335,lane:5},{t:14.935,lane:3},{t:15.535,lane:4},{t:15.835,lane:2},{t:16.135,lane:5},{t:16.735,lane:2},{t:17.335,lane:5},{t:17.935,lane:3},{t:18.535,lane:4},{t:18.835,lane:2},{t:19.135,lane:5},{t:19.435,lane:3},{t:19.735,lane:4},{t:20.035,lane:5},{t:20.335,lane:3},{t:20.935,lane:4},{t:21.235,lane:2},{t:21.535,lane:5},{t:22.135,lane:3},{t:22.735,lane:2},{t:23.335,lane:4},{t:23.935,lane:3},{t:24.535,lane:5},{t:25.135,lane:4},{t:25.735,lane:6},{t:26.335,lane:2},{t:26.935,lane:4},{t:27.535,lane:4},{t:28.135,lane:2},{t:28.735,lane:6},{t:29.335,lane:1},{t:29.635,lane:3},{t:29.935,lane:5},{t:30.235,lane:4},{t:30.535,lane:2},{t:31.135,lane:4},{t:31.735,lane:2},{t:32.035,lane:1},{t:32.335,lane:2},{t:32.335,lane:5},{t:32.935,lane:5},{t:33.535,lane:6},{t:34.135,lane:4},{t:34.735,lane:2},{t:35.335,lane:2},{t:35.635,lane:3},{t:35.935,lane:4},{t:36.535,lane:5},{t:37.135,lane:6},{t:37.735,lane:5},{t:38.335,lane:2},{t:38.635,lane:3},{t:38.935,lane:4},{t:39.235,lane:5},{t:39.535,lane:3},{t:39.835,lane:6},{t:40.135,lane:1},{t:40.735,lane:2},{t:41.335,lane:4},{t:41.335,lane:7},{t:41.635,lane:1},{t:41.935,lane:2},{t:42.535,lane:3},{t:42.835,lane:4},{t:43.135,lane:5},{t:43.735,lane:6},{t:44.335,lane:7},{t:44.635,lane:0},{t:44.935,lane:4},{t:45.235,lane:1},{t:45.535,lane:5},{t:45.835,lane:2},{t:46.135,lane:6},{t:46.435,lane:3},{t:46.735,lane:7},{t:47.035,lane:0},{t:47.335,lane:5},{t:47.635,lane:6},{t:47.935,lane:4},{t:48.535,lane:3},{t:48.835,lane:1},{t:49.135,lane:2},{t:49.435,lane:0},{t:49.735,lane:1},{t:50.035,lane:2},{t:50.335,lane:4},{t:50.485,lane:6},{t:50.635,lane:1},{t:50.635,lane:5},{t:50.785,lane:5},{t:50.935,lane:4},{t:50.935,lane:7},{t:51.235,lane:1},{t:51.535,lane:2},{t:52.135,lane:4},{t:52.435,lane:3},{t:52.735,lane:5},{t:53.335,lane:1},{t:53.935,lane:6},{t:54.235,lane:0},{t:54.535,lane:7},{t:54.835,lane:1},{t:54.985,lane:3},{t:55.135,lane:5},{t:55.435,lane:7},{t:55.585,lane:6},{t:55.735,lane:4},{t:56.035,lane:2},{t:56.335,lane:0},{t:56.635,lane:6},{t:56.935,lane:4},{t:57.235,lane:2},{t:57.535,lane:0},{t:58.135,lane:1},{t:58.435,lane:3},{t:58.735,lane:5},{t:59.035,lane:7},{t:59.335,lane:0},{t:59.635,lane:2},{t:59.935,lane:1},{t:60.085,lane:3},{t:60.235,lane:4},{t:60.235,lane:7},{t:60.385,lane:6},{t:60.535,lane:0,type:"hold",dur:1.2},{t:60.535,lane:5},{t:60.835,lane:7},{t:61.735,lane:1},{t:62.035,lane:2},{t:62.335,lane:3},{t:62.935,lane:4},{t:63.535,lane:5},{t:63.835,lane:6},{t:64.135,lane:1,type:"hold",dur:2.4},{t:65.335,lane:5,type:"hold",dur:2.4},{t:67.735,lane:4},{t:68.335,lane:2},{t:68.935,lane:1,type:"hold",dur:2.4},{t:69.535,lane:5},{t:70.135,lane:6,type:"hold",dur:2.4},{t:71.335,lane:3},{t:72.535,lane:1},{t:73.135,lane:4},{t:73.735,lane:4},{t:74.935,lane:3},{t:75.535,lane:1},{t:75.535,lane:4},{t:76.135,lane:4},{t:76.735,lane:2},{t:77.335,lane:0},{t:77.935,lane:1},{t:78.535,lane:3},{t:79.135,lane:5},{t:79.735,lane:7},{t:80.335,lane:0},{t:80.635,lane:2},{t:80.935,lane:1},{t:81.535,lane:3},{t:81.835,lane:4},{t:82.135,lane:6},{t:82.735,lane:5},{t:83.035,lane:7},{t:83.335,lane:0},{t:83.935,lane:1},{t:84.235,lane:2},{t:87.535,lane:1},{t:87.535,lane:5},{t:87.835,lane:4},{t:88.135,lane:3},{t:88.735,lane:5},{t:89.035,lane:1},{t:89.335,lane:6},{t:89.635,lane:0},{t:89.935,lane:7},{t:90.235,lane:1},{t:90.535,lane:3},{t:90.835,lane:5},{t:91.135,lane:7},{t:91.435,lane:6},{t:91.585,lane:4},{t:91.735,lane:2},{t:92.035,lane:0},{t:92.185,lane:6},{t:92.335,lane:4},{t:92.635,lane:2},{t:92.935,lane:0},{t:93.535,lane:1},{t:93.835,lane:3},{t:94.135,lane:5},{t:94.735,lane:7},{t:95.035,lane:0},{t:95.335,lane:2},{t:95.635,lane:1},{t:95.935,lane:3},{t:96.235,lane:4},{t:96.535,lane:6},{t:96.685,lane:5},{t:96.835,lane:2},{t:96.835,lane:6},{t:96.985,lane:0},{t:97.135,lane:0},{t:97.135,lane:6},{t:97.435,lane:2},{t:97.735,lane:3},{t:98.335,lane:4},{t:98.635,lane:5},{t:98.935,lane:6},{t:99.235,lane:7},{t:99.535,lane:0},{t:99.835,lane:4},{t:100.135,lane:1},{t:100.435,lane:5},{t:100.735,lane:2},{t:101.035,lane:6},{t:101.185,lane:3},{t:101.335,lane:7},{t:101.635,lane:0},{t:101.785,lane:5},{t:101.935,lane:6},{t:102.235,lane:4},{t:102.535,lane:3},{t:103.135,lane:1},{t:103.435,lane:2},{t:103.735,lane:0},{t:104.335,lane:0},{t:104.635,lane:2},{t:104.935,lane:4},{t:105.235,lane:6},{t:105.535,lane:7},{t:105.835,lane:5},{t:106.135,lane:3},{t:106.285,lane:1},{t:106.435,lane:1},{t:106.435,lane:4},{t:106.585,lane:4},{t:106.735,lane:0,type:"hold",dur:1.2},{t:106.735,lane:3},{t:107.035,lane:5},{t:107.335,lane:1},{t:107.935,lane:6},{t:108.235,lane:0},{t:108.535,lane:7},{t:108.835,lane:1},{t:109.135,lane:3},{t:109.435,lane:5},{t:109.735,lane:7},{t:110.035,lane:6},{t:110.335,lane:4},{t:110.635,lane:2},{t:110.785,lane:0},{t:110.935,lane:6},{t:111.235,lane:4},{t:111.385,lane:2},{t:111.535,lane:0},{t:111.835,lane:1},{t:112.135,lane:3},{t:112.735,lane:5},{t:113.035,lane:7},{t:113.335,lane:0},{t:113.935,lane:2},{t:114.235,lane:1},{t:114.535,lane:3},{t:114.835,lane:4},{t:115.135,lane:6},{t:115.435,lane:5},{t:115.735,lane:7},{t:115.885,lane:0},{t:116.035,lane:2},{t:116.035,lane:6},{t:116.185,lane:2},{t:116.335,lane:0},{t:116.335,lane:6},{t:116.635,lane:4},{t:116.935,lane:5},{t:117.535,lane:6},{t:117.835,lane:7},{t:118.135,lane:0},{t:118.435,lane:4},{t:118.735,lane:1},{t:119.035,lane:5},{t:119.335,lane:2},{t:119.635,lane:6},{t:119.935,lane:3},{t:120.235,lane:7},{t:120.385,lane:0},{t:120.535,lane:5},{t:120.835,lane:6},{t:120.985,lane:4},{t:121.135,lane:3},{t:121.435,lane:1},{t:121.735,lane:2},{t:122.335,lane:0},{t:122.635,lane:1},{t:122.935,lane:2},{t:123.535,lane:4},{t:123.835,lane:6},{t:124.135,lane:7},{t:124.435,lane:5},{t:124.735,lane:3},{t:125.035,lane:1},{t:125.335,lane:2},{t:125.485,lane:4},{t:125.635,lane:3},{t:125.935,lane:2},{t:127.135,lane:4},{t:128.335,lane:3},{t:128.935,lane:5},{t:129.535,lane:2},{t:130.135,lane:4},{t:130.735,lane:2},{t:130.735,lane:5}],events:[{t:5.335,type:"pulse",power:.37},{t:5.355,type:"echo",lane:0,dir:-1,power:.58},{t:7.735,type:"pulse",power:.37},{t:10.135,type:"pulse",power:.37},{t:10.155,type:"echo",lane:1,dir:-1,power:.58},{t:12.535,type:"pulse",power:.5},{t:12.555,type:"echo",lane:0,dir:-1,power:.72},{t:14.935,type:"pulse",power:.5},{t:17.335,type:"pulse",power:.5},{t:17.355,type:"echo",lane:1,dir:-1,power:.72},{t:19.735,type:"pulse",power:.5},{t:22.135,type:"pulse",power:.5},{t:22.155,type:"echo",lane:6,dir:1,power:.72},{t:24.535,type:"pulse",power:.65},{t:24.555,type:"echo",lane:0,dir:-1,power:.88},{t:26.935,type:"pulse",power:.65},{t:29.335,type:"pulse",power:.65},{t:29.355,type:"echo",lane:7,dir:1,power:.88},{t:31.735,type:"pulse",power:.65},{t:34.135,type:"pulse",power:.65},{t:34.155,type:"echo",lane:0,dir:-1,power:.88},{t:36.535,type:"pulse",power:.65},{t:38.935,type:"pulse",power:.65},{t:38.955,type:"echo",lane:7,dir:1,power:.88},{t:41.355,type:"vibe",power:.82},{t:43.735,type:"pulse",power:.78},{t:46.135,type:"burst",lane:3,power:1.07},{t:46.135,type:"pulse",power:.78},{t:48.535,type:"pulse",power:.78},{t:50.935,type:"pulse",power:.78},{t:53.335,type:"pulse",power:.78},{t:55.735,type:"burst",lane:7,power:1.07},{t:55.735,type:"pulse",power:.78},{t:58.135,type:"pulse",power:.78},{t:60.535,type:"pulse",power:.78},{t:62.935,type:"pulse",power:.78},{t:65.335,type:"pulse",power:.45},{t:65.355,type:"echo",lane:0,dir:-1,power:.66},{t:67.735,type:"pulse",power:.45},{t:70.135,type:"pulse",power:.45},{t:70.155,type:"echo",lane:7,dir:1,power:.66},{t:72.535,type:"pulse",power:.45},{t:74.935,type:"pulse",power:.45},{t:74.955,type:"echo",lane:0,dir:-1,power:.66},{t:75.555,type:"vibe",power:.86},{t:77.335,type:"pulse",power:.81},{t:79.735,type:"burst",lane:3,power:1.1},{t:79.735,type:"pulse",power:.81},{t:82.135,type:"pulse",power:.81},{t:84.535,type:"pulse",power:.28},{t:84.555,type:"echo",lane:0,dir:-1,power:.48},{t:86.935,type:"pulse",power:.28},{t:87.555,type:"vibe",power:1},{t:89.335,type:"pulse",power:.9},{t:91.735,type:"burst",lane:3,power:1.2},{t:91.735,type:"pulse",power:.9},{t:94.135,type:"pulse",power:.9},{t:96.535,type:"pulse",power:.9},{t:98.935,type:"pulse",power:.9},{t:99.335,type:"motion",style:"wave",amp:.16,speed:1},{t:101.335,type:"burst",lane:7,power:1.2},{t:101.335,type:"pulse",power:.9},{t:103.735,type:"pulse",power:.9},{t:106.135,type:"pulse",power:.9},{t:108.535,type:"pulse",power:.9},{t:110.935,type:"burst",lane:3,power:1.2},{t:110.935,type:"pulse",power:.9},{t:111.335,type:"motion",style:"zigzag",amp:.16,speed:1},{t:113.335,type:"pulse",power:.9},{t:115.735,type:"pulse",power:.9},{t:118.135,type:"pulse",power:.9},{t:120.535,type:"burst",lane:7,power:1.2},{t:120.535,type:"pulse",power:.9},{t:122.935,type:"pulse",power:.9},{t:125.335,type:"pulse",power:.9},{t:127.735,type:"pulse",power:.39},{t:127.755,type:"echo",lane:0,dir:-1,power:.6},{t:130.135,type:"pulse",power:.39},{t:132.535,type:"pulse",power:.28},{t:132.555,type:"echo",lane:0,dir:-1,power:.48}],ghosts:[{t:3.575,lane:0,type:"sweep"},{t:3.63,lane:1,type:"sweep"},{t:3.685,lane:6,type:"sweep"},{t:3.74,lane:7,type:"sweep"},{t:8.335,lane:0,type:"bounce"},{t:8.455,lane:1,type:"bounce"},{t:8.575,lane:6,type:"bounce"},{t:8.695,lane:7,type:"bounce"},{t:12.575,lane:0,type:"sweep"},{t:12.63,lane:1,type:"sweep"},{t:12.685,lane:6,type:"sweep"},{t:12.74,lane:7,type:"sweep"},{t:17.335,lane:0,type:"bounce"},{t:17.455,lane:1,type:"bounce"},{t:17.575,lane:6,type:"bounce"},{t:17.695,lane:7,type:"bounce"},{t:22.775,lane:0,type:"sweep"},{t:22.83,lane:7,type:"sweep"},{t:27.535,lane:0,type:"bounce"},{t:27.655,lane:7,type:"bounce"},{t:64.175,lane:0,type:"sweep"},{t:64.23,lane:7,type:"sweep"},{t:68.935,lane:0,type:"bounce"},{t:69.055,lane:7,type:"bounce"},{t:84.575,lane:0,type:"sweep"},{t:84.63,lane:1,type:"sweep"},{t:84.685,lane:6,type:"sweep"},{t:84.74,lane:7,type:"sweep"},{t:89.335,lane:0,type:"bounce"},{t:89.455,lane:1,type:"bounce"},{t:89.575,lane:6,type:"bounce"},{t:89.695,lane:7,type:"bounce"},{t:125.975,lane:0,type:"sweep"},{t:126.03,lane:1,type:"sweep"},{t:126.085,lane:6,type:"sweep"},{t:126.14,lane:7,type:"sweep"},{t:130.735,lane:0,type:"bounce"},{t:130.855,lane:1,type:"bounce"},{t:130.975,lane:6,type:"bounce"},{t:131.095,lane:7,type:"bounce"},{t:131.375,lane:0,type:"sweep"},{t:131.43,lane:1,type:"sweep"},{t:131.485,lane:6,type:"sweep"},{t:131.54,lane:7,type:"sweep"},{t:136.135,lane:0,type:"bounce"},{t:136.255,lane:1,type:"bounce"},{t:136.375,lane:6,type:"bounce"},{t:136.495,lane:7,type:"bounce"}]},rf={song:{title:"WORLD YEARNING FOR AN END",shortTitle:"WORLD YEARNING",artist:"ORIGINAL TRACK",bpm:120,duration:143.47,chartEnd:142.55,beatOffset:.04,difficulty:"HARD",laneLabel:"4 · 6",thumbFriendly:!0,fadeStart:140.8,fadeEnd:142.9},sections:[{name:"INTRO",start:.04,end:10.04,keys:4,color:"#7ec8ff",accent:"#ffb45e",energy:.16,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.6,camY:6.9,bloom:.5,spin:.03,firstNote:2.04,motion:"fan",motionAmp:.05,motionSpeed:.45,motionPitch:.02,city:1},{name:"VERSE",start:10.04,end:22.04,keys:4,color:"#66e0ff",accent:"#ff8ac8",energy:.5,rotY:.03,rotZ:-.015,tilt:.012,spread:1.02,y:.04,camZ:16.9,camY:6.7,bloom:.68,spin:.05,firstNote:10.04,motion:"wave",motionAmp:.075,motionSpeed:.6,motionPitch:.035,city:.16},{name:"BUILD",start:22.04,end:38.04,keys:6,color:"#84a6ff",accent:"#ffc46b",energy:.66,rotY:-.06,rotZ:.025,tilt:-.015,spread:1.05,y:.08,camZ:16.2,camY:6.5,bloom:.8,spin:.07,firstNote:22.04,motion:"fan",motionAmp:.1,motionSpeed:.7,motionPitch:.05,city:.12},{name:"LIFT",start:38.04,end:54.04,keys:6,color:"#b58cff",accent:"#ffa25e",energy:.8,rotY:.1,rotZ:-.04,tilt:.025,spread:1.08,y:.12,camZ:15.5,camY:6.3,bloom:.9,spin:.1,firstNote:38.04,motion:"slope",motionAmp:.13,motionSpeed:.82,motionPitch:.065,city:.2},{name:"CHORUS",start:54.04,end:70.04,keys:6,color:"#ff8f6b",accent:"#ffe27a",energy:.92,rotY:-.13,rotZ:.05,tilt:-.025,spread:1.1,y:.15,camZ:15.1,camY:6.2,bloom:.96,spin:.12,firstNote:54.04,motion:"wave",motionAmp:.15,motionSpeed:.95,motionPitch:.08,city:.16},{name:"DRIVE",start:70.04,end:86.04,keys:6,color:"#ff5f9e",accent:"#7af0ff",energy:1,rotY:.15,rotZ:-.055,tilt:.03,spread:1.12,y:.18,camZ:14.9,camY:6.1,bloom:1,spin:.14,firstNote:70.04,motion:"zigzag",motionAmp:.18,motionSpeed:1.05,motionPitch:.095,city:.24},{name:"BREAK",start:86.04,end:98.04,keys:4,color:"#d9eaff",accent:"#8f9dff",energy:.34,rotY:-.02,rotZ:.01,tilt:.05,spread:.93,y:.4,camZ:18.1,camY:7.3,bloom:.55,spin:.035,firstNote:86.04,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:.62},{name:"RETURN",start:98.04,end:122.04,keys:6,color:"#63e6d8",accent:"#ff8ac8",energy:.82,rotY:.04,rotZ:-.02,tilt:.015,spread:1.06,y:.1,camZ:15.7,camY:6.4,bloom:.88,spin:.09,firstNote:98.04,motion:"orbit",motionAmp:.14,motionSpeed:.9,motionPitch:.07,city:.14},{name:"FINAL",start:122.04,end:138.04,keys:6,color:"#ff6fc4",accent:"#ffd36b",energy:.9,rotY:-.1,rotZ:.04,tilt:-.02,spread:1.09,y:.14,camZ:15,camY:6.2,bloom:.98,spin:.13,firstNote:122.04,motion:"orbit",motionAmp:.17,motionSpeed:1,motionPitch:.085,city:.2},{name:"OUTRO",start:138.04,end:142.55,keys:4,color:"#7fa8ff",accent:"#d7c4ff",energy:.2,rotY:0,rotZ:0,tilt:.03,spread:.9,y:.3,camZ:19.2,camY:7.6,bloom:.42,spin:.02,firstNote:138.04,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:.72}],notes:[{t:2.04,lane:2},{t:3.04,lane:4},{t:4.04,lane:3},{t:5.04,lane:5},{t:6.04,lane:2},{t:6.29,lane:2,type:"hold",dur:1},{t:7.04,lane:4},{t:8.04,lane:3},{t:9.04,lane:5},{t:10.04,lane:4},{t:10.54,lane:2},{t:11.04,lane:5},{t:11.54,lane:3},{t:12.04,lane:4},{t:12.54,lane:2},{t:13.04,lane:5},{t:13.54,lane:3},{t:14.04,lane:3},{t:14.29,lane:2,type:"hold",dur:1},{t:14.54,lane:4},{t:15.54,lane:5},{t:16.04,lane:3},{t:16.54,lane:4},{t:17.04,lane:2},{t:17.54,lane:5},{t:18.04,lane:2},{t:18.29,lane:4,type:"hold",dur:1},{t:18.54,lane:5},{t:19.04,lane:3},{t:19.54,lane:4},{t:20.04,lane:2},{t:20.54,lane:5},{t:21.04,lane:3},{t:21.54,lane:4},{t:22.04,lane:1},{t:22.54,lane:4},{t:23.04,lane:2},{t:23.54,lane:5},{t:24.04,lane:3},{t:24.29,lane:6},{t:24.54,lane:1},{t:25.04,lane:4},{t:25.54,lane:4},{t:26.04,lane:3},{t:26.29,lane:2},{t:26.54,lane:1},{t:26.79,lane:6},{t:27.04,lane:5},{t:27.54,lane:4},{t:28.04,lane:3},{t:28.29,lane:4},{t:28.54,lane:6},{t:28.79,lane:2},{t:29.04,lane:4},{t:29.54,lane:3},{t:30.04,lane:5},{t:30.54,lane:4},{t:30.79,lane:6},{t:31.04,lane:3},{t:31.54,lane:5},{t:32.04,lane:2},{t:32.04,lane:4},{t:32.29,lane:2},{t:32.54,lane:6},{t:32.79,lane:1},{t:33.04,lane:3},{t:33.54,lane:5},{t:34.04,lane:5},{t:34.29,lane:6},{t:34.54,lane:4},{t:34.79,lane:2},{t:35.04,lane:1},{t:35.54,lane:3},{t:36.04,lane:5},{t:36.29,lane:6},{t:36.54,lane:1},{t:37.04,lane:5},{t:37.54,lane:2},{t:38.04,lane:2},{t:38.29,lane:4},{t:38.54,lane:3},{t:38.79,lane:5},{t:39.04,lane:4},{t:39.29,lane:6},{t:39.54,lane:2},{t:39.79,lane:4},{t:40.04,lane:5},{t:40.29,lane:2},{t:40.54,lane:6},{t:41.04,lane:1},{t:41.54,lane:3},{t:42.04,lane:5},{t:42.29,lane:4},{t:42.54,lane:2},{t:42.79,lane:4},{t:43.04,lane:2},{t:43.54,lane:1},{t:43.79,lane:3},{t:44.04,lane:5},{t:44.54,lane:6},{t:45.04,lane:4},{t:45.29,lane:2},{t:45.54,lane:3},{t:45.79,lane:5},{t:46.04,lane:4},{t:46.54,lane:5},{t:46.79,lane:6},{t:47.04,lane:5},{t:47.29,lane:2},{t:47.54,lane:3},{t:48.04,lane:4},{t:48.29,lane:5},{t:48.54,lane:3},{t:48.79,lane:6},{t:49.04,lane:1},{t:49.29,lane:2},{t:49.54,lane:4},{t:49.79,lane:5},{t:50.04,lane:3},{t:50.29,lane:5},{t:50.54,lane:4},{t:50.79,lane:3},{t:51.04,lane:2},{t:51.29,lane:1},{t:51.54,lane:3},{t:51.79,lane:5},{t:52.04,lane:1},{t:52.29,lane:4},{t:52.54,lane:2},{t:52.79,lane:5},{t:53.04,lane:3},{t:53.29,lane:6},{t:53.54,lane:1},{t:53.79,lane:4},{t:54.04,lane:1},{t:54.29,lane:3},{t:54.54,lane:5},{t:54.79,lane:6},{t:55.04,lane:4},{t:55.29,lane:2},{t:55.54,lane:1},{t:55.665,lane:2},{t:55.79,lane:3},{t:56.04,lane:2},{t:56.04,lane:4},{t:56.29,lane:5},{t:56.54,lane:6},{t:56.79,lane:5},{t:57.04,lane:2},{t:57.29,lane:3},{t:57.54,lane:4},{t:57.79,lane:5},{t:58.04,lane:3},{t:58.29,lane:6},{t:58.54,lane:1},{t:58.79,lane:2},{t:59.04,lane:4},{t:59.29,lane:5},{t:59.54,lane:3},{t:59.79,lane:6},{t:60.04,lane:4},{t:60.29,lane:3},{t:60.54,lane:2},{t:60.79,lane:1},{t:61.04,lane:3},{t:61.29,lane:5},{t:61.54,lane:4},{t:61.79,lane:3},{t:62.04,lane:2},{t:62.29,lane:5},{t:62.54,lane:3},{t:62.79,lane:6},{t:63.04,lane:1},{t:63.29,lane:4},{t:63.54,lane:2},{t:63.665,lane:3},{t:63.79,lane:5},{t:64.04,lane:1},{t:64.04,lane:2},{t:64.29,lane:1},{t:64.54,lane:6},{t:64.79,lane:5},{t:65.04,lane:4},{t:65.29,lane:3},{t:65.54,lane:2},{t:65.79,lane:1},{t:66.04,lane:2},{t:66.29,lane:4},{t:66.54,lane:3},{t:66.79,lane:5},{t:67.04,lane:4},{t:67.29,lane:6},{t:67.54,lane:2},{t:67.79,lane:4},{t:68.04,lane:5},{t:68.29,lane:2},{t:68.54,lane:6},{t:68.79,lane:1},{t:69.04,lane:3},{t:69.29,lane:5},{t:69.54,lane:4},{t:69.79,lane:2},{t:70.04,lane:1},{t:70.29,lane:2},{t:70.54,lane:4},{t:70.79,lane:5},{t:71.04,lane:3},{t:71.29,lane:6},{t:71.54,lane:1},{t:71.665,lane:2},{t:71.79,lane:4},{t:72.04,lane:2},{t:72.29,lane:1},{t:72.54,lane:3},{t:72.79,lane:5},{t:73.04,lane:4},{t:73.29,lane:3},{t:73.54,lane:2},{t:73.79,lane:1},{t:74.04,lane:3},{t:74.29,lane:6},{t:74.54,lane:1},{t:74.79,lane:4},{t:75.04,lane:2},{t:75.29,lane:5},{t:75.54,lane:3},{t:75.79,lane:6},{t:76.04,lane:1},{t:76.29,lane:5},{t:76.54,lane:4},{t:76.79,lane:3},{t:77.04,lane:2},{t:77.29,lane:1},{t:77.54,lane:6},{t:77.79,lane:5},{t:78.04,lane:3},{t:78.29,lane:5},{t:78.54,lane:4},{t:78.79,lane:6},{t:79.04,lane:2},{t:79.29,lane:4},{t:79.54,lane:3},{t:79.665,lane:4},{t:79.79,lane:5},{t:80.04,lane:1},{t:80.04,lane:6},{t:80.29,lane:1},{t:80.54,lane:3},{t:80.79,lane:5},{t:81.04,lane:4},{t:81.29,lane:2},{t:81.54,lane:6},{t:81.79,lane:1},{t:82.04,lane:2},{t:82.29,lane:3},{t:82.54,lane:5},{t:82.79,lane:6},{t:83.04,lane:4},{t:83.29,lane:2},{t:83.54,lane:1},{t:83.79,lane:3},{t:84.04,lane:4},{t:84.29,lane:5},{t:84.54,lane:6},{t:84.79,lane:5},{t:85.04,lane:2},{t:85.29,lane:3},{t:85.54,lane:4},{t:85.79,lane:5},{t:86.04,lane:2},{t:86.54,lane:5},{t:87.04,lane:3},{t:87.54,lane:4},{t:88.04,lane:2},{t:88.54,lane:5},{t:89.04,lane:3},{t:89.54,lane:4},{t:90.04,lane:5},{t:90.29,lane:3,type:"hold",dur:1},{t:91.04,lane:4},{t:91.54,lane:2},{t:92.04,lane:5},{t:92.54,lane:3},{t:93.04,lane:4},{t:93.54,lane:2},{t:94.04,lane:2},{t:94.29,lane:2,type:"hold",dur:1},{t:94.54,lane:4},{t:95.04,lane:5},{t:95.54,lane:3},{t:96.04,lane:2},{t:96.54,lane:4},{t:97.04,lane:5},{t:97.54,lane:3},{t:98.04,lane:2},{t:98.29,lane:4},{t:98.54,lane:3},{t:99.04,lane:5},{t:99.29,lane:4},{t:99.54,lane:6},{t:99.79,lane:2},{t:100.04,lane:4},{t:100.29,lane:5},{t:100.54,lane:2},{t:101.04,lane:6},{t:101.29,lane:1},{t:101.54,lane:3},{t:101.79,lane:5},{t:102.04,lane:4},{t:102.54,lane:2},{t:102.79,lane:4},{t:103.04,lane:2},{t:103.29,lane:1},{t:103.54,lane:3},{t:104.04,lane:1},{t:104.04,lane:5},{t:104.54,lane:6},{t:105.04,lane:4},{t:105.54,lane:2},{t:105.79,lane:3},{t:106.04,lane:5},{t:106.54,lane:4},{t:106.79,lane:5},{t:107.04,lane:6},{t:107.29,lane:5},{t:107.54,lane:2},{t:108.04,lane:3},{t:108.29,lane:4},{t:108.54,lane:5},{t:108.79,lane:3},{t:109.04,lane:6},{t:109.29,lane:1},{t:109.54,lane:2},{t:109.79,lane:4},{t:110.04,lane:5},{t:110.29,lane:3},{t:110.54,lane:5},{t:110.79,lane:4},{t:111.04,lane:3},{t:111.29,lane:2},{t:111.54,lane:1},{t:111.79,lane:3},{t:112.04,lane:5},{t:112.29,lane:1},{t:112.54,lane:4},{t:112.79,lane:2},{t:113.04,lane:5},{t:113.29,lane:3},{t:113.54,lane:6},{t:114.04,lane:1},{t:114.29,lane:4},{t:114.54,lane:5},{t:115.04,lane:3},{t:115.29,lane:2},{t:115.54,lane:1},{t:115.79,lane:6},{t:116.04,lane:5},{t:116.29,lane:4},{t:116.54,lane:3},{t:116.79,lane:4},{t:117.04,lane:6},{t:117.29,lane:2},{t:117.54,lane:4},{t:117.79,lane:3},{t:118.04,lane:5},{t:118.29,lane:4},{t:118.54,lane:6},{t:119.04,lane:3},{t:119.29,lane:5},{t:119.54,lane:4},{t:119.79,lane:2},{t:120.04,lane:6},{t:120.54,lane:1},{t:121.04,lane:3},{t:121.29,lane:5},{t:121.54,lane:6},{t:121.79,lane:2},{t:122.04,lane:1},{t:122.29,lane:3},{t:122.54,lane:5},{t:122.79,lane:6},{t:123.04,lane:4},{t:123.29,lane:2},{t:123.54,lane:1},{t:123.79,lane:3},{t:124.04,lane:4},{t:124.29,lane:5},{t:124.54,lane:6},{t:124.79,lane:5},{t:125.04,lane:2},{t:125.29,lane:3},{t:125.54,lane:4},{t:125.79,lane:5},{t:126.04,lane:3},{t:126.29,lane:6},{t:126.54,lane:1},{t:126.79,lane:2},{t:127.04,lane:4},{t:127.29,lane:5},{t:127.54,lane:3},{t:127.665,lane:4},{t:127.79,lane:6},{t:128.04,lane:4},{t:128.29,lane:3},{t:128.54,lane:2},{t:128.79,lane:1},{t:129.04,lane:3},{t:129.29,lane:5},{t:129.54,lane:4},{t:129.79,lane:3},{t:130.04,lane:2},{t:130.29,lane:5},{t:130.54,lane:3},{t:130.79,lane:6},{t:131.04,lane:1},{t:131.29,lane:4},{t:131.54,lane:2},{t:131.79,lane:5},{t:132.04,lane:2},{t:132.29,lane:1},{t:132.54,lane:6},{t:132.79,lane:5},{t:133.04,lane:4},{t:133.29,lane:3},{t:133.54,lane:2},{t:133.79,lane:1},{t:134.04,lane:2},{t:134.29,lane:4},{t:134.54,lane:3},{t:134.79,lane:5},{t:135.04,lane:4},{t:135.29,lane:6},{t:135.54,lane:2},{t:135.665,lane:3},{t:135.79,lane:4},{t:136.04,lane:1},{t:136.04,lane:5},{t:136.29,lane:2},{t:136.54,lane:6},{t:136.79,lane:1},{t:137.04,lane:3},{t:137.29,lane:5},{t:137.54,lane:4},{t:137.79,lane:2},{t:138.04,lane:4},{t:139.04,lane:2},{t:140.04,lane:5},{t:142.04,lane:3}],events:[{t:.04,type:"pulse",power:.33},{t:.07,type:"echo",lane:0,dir:-1,power:.63},{t:2.04,type:"pulse",power:.33},{t:4.04,type:"pulse",power:.33},{t:4.07,type:"echo",lane:1,dir:-1,power:.63},{t:6.04,type:"pulse",power:.33},{t:8.04,type:"pulse",power:.33},{t:8.07,type:"echo",lane:6,dir:1,power:.63},{t:10.04,type:"pulse",power:.57},{t:10.07,type:"echo",lane:0,dir:-1,power:.9},{t:12.04,type:"pulse",power:.57},{t:14.04,type:"pulse",power:.57},{t:14.07,type:"echo",lane:1,dir:-1,power:.9},{t:16.04,type:"pulse",power:.57},{t:18.04,type:"pulse",power:.57},{t:18.07,type:"echo",lane:6,dir:1,power:.9},{t:20.04,type:"pulse",power:.57},{t:22.04,type:"pulse",power:.68},{t:22.07,type:"echo",lane:0,dir:-1,power:1.03},{t:24.04,type:"pulse",power:.68},{t:26.04,type:"burst",lane:4,power:.98},{t:26.04,type:"pulse",power:.68},{t:26.07,type:"echo",lane:7,dir:1,power:1.03},{t:28.04,type:"pulse",power:.68},{t:30.04,type:"pulse",power:.68},{t:30.07,type:"echo",lane:0,dir:-1,power:1.03},{t:32.04,type:"pulse",power:.68},{t:34.04,type:"burst",lane:2,power:.98},{t:34.04,type:"pulse",power:.68},{t:34.07,type:"echo",lane:7,dir:1,power:1.03},{t:36.04,type:"pulse",power:.68},{t:38.04,type:"pulse",power:.78},{t:38.07,type:"echo",lane:0,dir:-1,power:1.14},{t:40.04,type:"pulse",power:.78},{t:42.04,type:"burst",lane:4,power:1.09},{t:42.04,type:"pulse",power:.78},{t:42.07,type:"echo",lane:7,dir:1,power:1.14},{t:44.04,type:"pulse",power:.78},{t:46.04,type:"pulse",power:.78},{t:46.07,type:"echo",lane:0,dir:-1,power:1.14},{t:48.04,type:"pulse",power:.78},{t:50.04,type:"burst",lane:2,power:1.09},{t:50.04,type:"pulse",power:.78},{t:50.07,type:"echo",lane:7,dir:1,power:1.14},{t:52.04,type:"pulse",power:.78},{t:54.04,type:"pulse",power:.86},{t:54.06,type:"vibe",power:.92},{t:54.07,type:"echo",lane:0,dir:-1,power:1.24},{t:56.04,type:"pulse",power:.86},{t:58.04,type:"burst",lane:4,power:1.19},{t:58.04,type:"pulse",power:.86},{t:58.07,type:"echo",lane:7,dir:1,power:1.24},{t:60.04,type:"pulse",power:.86},{t:61.8,type:"vibe",power:.85},{t:61.85,type:"echo",lane:0,dir:-1,power:1.15},{t:61.85,type:"echo",lane:7,dir:1,power:1.15},{t:62.04,type:"pulse",power:.86},{t:62.07,type:"echo",lane:0,dir:-1,power:1.24},{t:64.04,type:"pulse",power:.86},{t:66.04,type:"burst",lane:2,power:1.19},{t:66.04,type:"pulse",power:.86},{t:66.07,type:"echo",lane:7,dir:1,power:1.24},{t:68.04,type:"pulse",power:.86},{t:70.04,type:"pulse",power:.92},{t:70.06,type:"vibe",power:1},{t:70.07,type:"echo",lane:0,dir:-1,power:1.3},{t:72.04,type:"pulse",power:.92},{t:74.04,type:"burst",lane:4,power:1.25},{t:74.04,type:"pulse",power:.92},{t:74.07,type:"echo",lane:7,dir:1,power:1.3},{t:76.04,type:"pulse",power:.92},{t:78.04,type:"pulse",power:.92},{t:78.07,type:"echo",lane:0,dir:-1,power:1.3},{t:80.04,type:"pulse",power:.92},{t:82.04,type:"burst",lane:2,power:1.25},{t:82.04,type:"pulse",power:.92},{t:82.07,type:"echo",lane:7,dir:1,power:1.3},{t:84.04,type:"pulse",power:.92},{t:86.04,type:"pulse",power:.46},{t:86.07,type:"echo",lane:0,dir:-1,power:.77},{t:88.04,type:"pulse",power:.46},{t:90.04,type:"pulse",power:.46},{t:90.07,type:"echo",lane:1,dir:-1,power:.77},{t:92.04,type:"pulse",power:.46},{t:94.04,type:"pulse",power:.46},{t:94.07,type:"echo",lane:6,dir:1,power:.77},{t:96.04,type:"pulse",power:.46},{t:98.04,type:"pulse",power:.79},{t:98.06,type:"vibe",power:.82},{t:98.07,type:"echo",lane:0,dir:-1,power:1.16},{t:100.04,type:"pulse",power:.79},{t:102.04,type:"burst",lane:4,power:1.11},{t:102.04,type:"pulse",power:.79},{t:102.07,type:"echo",lane:7,dir:1,power:1.16},{t:104.04,type:"pulse",power:.79},{t:106.04,type:"pulse",power:.79},{t:106.07,type:"echo",lane:0,dir:-1,power:1.16},{t:108.04,type:"pulse",power:.79},{t:110.04,type:"burst",lane:2,power:1.11},{t:110.04,type:"pulse",power:.79},{t:110.07,type:"echo",lane:7,dir:1,power:1.16},{t:112.04,type:"pulse",power:.79},{t:114.04,type:"pulse",power:.79},{t:114.07,type:"echo",lane:0,dir:-1,power:1.16},{t:116.04,type:"pulse",power:.79},{t:118.04,type:"burst",lane:6,power:1.11},{t:118.04,type:"pulse",power:.79},{t:118.07,type:"echo",lane:7,dir:1,power:1.16},{t:120.04,type:"pulse",power:.79},{t:122.04,type:"pulse",power:.85},{t:122.06,type:"vibe",power:.9},{t:122.07,type:"echo",lane:0,dir:-1,power:1.22},{t:124.04,type:"pulse",power:.85},{t:126.04,type:"burst",lane:4,power:1.17},{t:126.04,type:"pulse",power:.85},{t:126.07,type:"echo",lane:7,dir:1,power:1.22},{t:128.04,type:"pulse",power:.85},{t:130.04,type:"pulse",power:.85},{t:130.07,type:"echo",lane:0,dir:-1,power:1.22},{t:132.04,type:"pulse",power:.85},{t:134.04,type:"burst",lane:2,power:1.17},{t:134.04,type:"pulse",power:.85},{t:134.07,type:"echo",lane:7,dir:1,power:1.22},{t:136.04,type:"pulse",power:.85},{t:138.04,type:"pulse",power:.36},{t:138.07,type:"echo",lane:0,dir:-1,power:.66},{t:140.04,type:"pulse",power:.36},{t:142.04,type:"pulse",power:.36},{t:142.07,type:"echo",lane:1,dir:-1,power:.66}],ghosts:[{t:.08,lane:0,type:"sweep"},{t:.14,lane:1,type:"sweep"},{t:.2,lane:6,type:"sweep"},{t:.26,lane:7,type:"sweep"},{t:4.04,lane:0,type:"bounce"},{t:4.18,lane:1,type:"bounce"},{t:4.32,lane:6,type:"bounce"},{t:4.46,lane:7,type:"bounce"},{t:10.08,lane:0,type:"sweep"},{t:10.14,lane:1,type:"sweep"},{t:10.2,lane:6,type:"sweep"},{t:10.26,lane:7,type:"sweep"},{t:14.04,lane:0,type:"bounce"},{t:14.18,lane:1,type:"bounce"},{t:14.32,lane:6,type:"bounce"},{t:14.46,lane:7,type:"bounce"},{t:22.08,lane:0,type:"sweep"},{t:22.14,lane:7,type:"sweep"},{t:26.04,lane:0,type:"bounce"},{t:26.18,lane:7,type:"bounce"},{t:38.08,lane:0,type:"sweep"},{t:38.14,lane:7,type:"sweep"},{t:42.04,lane:0,type:"bounce"},{t:42.18,lane:7,type:"bounce"},{t:54.08,lane:0,type:"sweep"},{t:54.14,lane:7,type:"sweep"},{t:58.04,lane:0,type:"bounce"},{t:58.18,lane:7,type:"bounce"},{t:70.08,lane:0,type:"sweep"},{t:70.14,lane:7,type:"sweep"},{t:74.04,lane:0,type:"bounce"},{t:74.18,lane:7,type:"bounce"},{t:86.08,lane:0,type:"sweep"},{t:86.14,lane:1,type:"sweep"},{t:86.2,lane:6,type:"sweep"},{t:86.26,lane:7,type:"sweep"},{t:90.04,lane:0,type:"bounce"},{t:90.18,lane:1,type:"bounce"},{t:90.32,lane:6,type:"bounce"},{t:90.46,lane:7,type:"bounce"},{t:98.08,lane:0,type:"sweep"},{t:98.14,lane:7,type:"sweep"},{t:102.04,lane:0,type:"bounce"},{t:102.18,lane:7,type:"bounce"},{t:122.08,lane:0,type:"sweep"},{t:122.14,lane:7,type:"sweep"},{t:126.04,lane:0,type:"bounce"},{t:126.18,lane:7,type:"bounce"},{t:138.08,lane:0,type:"sweep"},{t:138.14,lane:1,type:"sweep"},{t:138.2,lane:6,type:"sweep"},{t:138.26,lane:7,type:"sweep"},{t:142.04,lane:0,type:"bounce"},{t:142.18,lane:1,type:"bounce"},{t:142.32,lane:6,type:"bounce"},{t:142.46,lane:7,type:"bounce"}]},sf={song:{title:"CHRONOSTASIS",shortTitle:"CHRONOSTASIS",artist:"ORIGINAL TRACK",bpm:99.4,duration:142.1,chartEnd:139.85,beatOffset:.323,difficulty:"EXPERT",laneLabel:"4 · 6",thumbFriendly:!0,fadeStart:138.4,fadeEnd:140},sections:[{name:"INTRO",start:0,end:18.431,keys:4,color:"#8ecfff",accent:"#ffd166",energy:.22,rotY:0,rotZ:0,tilt:.02,spread:.94,y:.28,camZ:18.8,camY:7.4,bloom:.48,spin:.02,firstNote:2.4,density:.22,city:.58,clock:"off",motion:"fan",motionAmp:.05,motionSpeed:.45,motionPitch:.02},{name:"GEARS",start:18.431,end:24.483,keys:4,color:"#6fe3ff",accent:"#ffd166",energy:.5,rotY:.02,rotZ:-.012,tilt:.01,spread:1,y:.12,camZ:17.4,camY:7,bloom:.68,spin:.05,firstNote:18.431,density:.5,city:.38,clock:"run",motion:"fan",motionAmp:.06,motionSpeed:.55,motionPitch:.025},{name:"VERSE",start:24.483,end:42.877,keys:6,color:"#78b8ff",accent:"#ffe29a",energy:.64,rotY:.04,rotZ:-.02,tilt:.015,spread:1.04,y:.08,camZ:16.7,camY:6.7,bloom:.78,spin:.07,firstNote:24.483,density:.62,city:.2,clock:"run",motion:"wave",motionAmp:.075,motionSpeed:.6,motionPitch:.035},{name:"PENDULUM",start:42.877,end:66.417,keys:6,color:"#b18cff",accent:"#ffd166",energy:.8,rotY:-.09,rotZ:.035,tilt:-.02,spread:1.08,y:.14,camZ:15.8,camY:6.4,bloom:.9,spin:.1,firstNote:42.877,density:.76,city:.14,clock:"run",motion:"wave",motionAmp:.16,motionSpeed:.95,motionPitch:.08},{name:"STASIS",start:66.417,end:76.075,keys:4,color:"#dfeaff",accent:"#9aa8ff",energy:.26,rotY:-.02,rotZ:.01,tilt:.04,spread:.92,y:.42,camZ:18.4,camY:7.5,bloom:.5,spin:.02,firstNote:66.417,density:0,city:.7,clock:"freeze",swing:!0,motion:"flat",motionAmp:.02,motionSpeed:.2,motionPitch:.01},{name:"RETURN",start:76.075,end:90.561,keys:6,color:"#64e6d8",accent:"#ffe29a",energy:.76,rotY:.05,rotZ:-.02,tilt:.012,spread:1.05,y:.1,camZ:16.2,camY:6.6,bloom:.86,spin:.08,firstNote:76.68,density:.7,city:.16,clock:"run",motion:"orbit",motionAmp:.14,motionSpeed:.9,motionPitch:.07},{name:"TICK",start:90.561,end:110.48,keys:6,color:"#ffd166",accent:"#7af0ff",energy:.84,rotY:-.1,rotZ:.04,tilt:-.02,spread:1.08,y:.15,camZ:15.6,camY:6.3,bloom:.94,spin:.11,firstNote:90.561,density:.8,city:.2,clock:"run",motion:"zigzag",motionAmp:.17,motionSpeed:1.15,motionPitch:.09},{name:"FINAL",start:110.48,end:129.795,keys:6,color:"#ff9f6b",accent:"#ffd166",energy:.94,rotY:.12,rotZ:-.045,tilt:.025,spread:1.1,y:.18,camZ:15,camY:6.1,bloom:1,spin:.14,firstNote:110.48,density:.9,city:.24,clock:"final",motion:"orbit",motionAmp:.17,motionSpeed:1,motionPitch:.085},{name:"OUTRO",start:129.795,end:140,keys:4,color:"#9fb8ff",accent:"#d7c4ff",energy:.3,rotY:0,rotZ:0,tilt:.03,spread:.9,y:.34,camZ:19.2,camY:7.6,bloom:.46,spin:.02,firstNote:129.795,density:.28,city:.72,clock:"off",holds:1,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0}],notes:[{t:3.341,lane:3},{t:4.247,lane:3},{t:5.454,lane:5},{t:5.756,lane:3},{t:7.566,lane:2},{t:8.17,lane:3},{t:9.377,lane:5},{t:9.679,lane:2},{t:10.283,lane:5},{t:10.434,lane:2},{t:10.585,lane:3},{t:11.339,lane:4},{t:12.999,lane:3},{t:18.281,lane:4},{t:18.583,lane:2},{t:19.035,lane:3},{t:19.186,lane:5},{t:19.639,lane:4},{t:20.544,lane:5},{t:20.997,lane:3},{t:21.148,lane:4},{t:21.752,lane:3},{t:22.053,lane:2},{t:22.657,lane:3},{t:22.808,lane:5},{t:24.015,lane:2},{t:24.317,lane:5},{t:24.619,lane:5},{t:25.071,lane:1},{t:25.071,lane:6},{t:25.826,lane:2},{t:26.882,lane:3},{t:26.882,lane:4},{t:27.335,lane:4},{t:27.486,lane:6},{t:28.693,lane:1},{t:28.844,lane:3},{t:28.995,lane:2},{t:29.297,lane:1},{t:29.599,lane:6},{t:29.9,lane:2},{t:30.806,lane:5},{t:30.957,lane:6},{t:31.862,lane:5},{t:32.013,lane:2},{t:32.315,lane:6},{t:32.768,lane:1},{t:32.919,lane:2},{t:33.069,lane:3},{t:33.22,lane:1},{t:33.371,lane:2},{t:33.522,lane:3},{t:33.824,lane:6},{t:34.729,lane:4},{t:35.031,lane:3},{t:35.333,lane:1},{t:35.333,lane:6},{t:35.937,lane:1},{t:36.238,lane:2},{t:36.842,lane:6},{t:37.144,lane:2},{t:37.295,lane:4},{t:38.2,lane:5},{t:38.955,lane:5},{t:39.257,lane:2},{t:39.86,lane:1},{t:40.162,lane:2},{t:40.313,lane:3},{t:40.464,lane:1},{t:40.917,lane:3},{t:41.671,lane:4},{t:41.973,lane:6},{t:42.275,lane:3},{t:42.577,lane:6},{t:42.878,lane:6},{t:43.18,lane:4},{t:43.331,lane:6},{t:43.482,lane:5},{t:43.935,lane:1},{t:44.387,lane:2},{t:44.387,lane:5},{t:44.538,lane:4},{t:44.689,lane:5},{t:44.84,lane:1},{t:44.84,lane:4},{t:44.991,lane:3},{t:44.991,lane:4},{t:45.293,lane:5},{t:45.444,lane:6},{t:46.047,lane:1},{t:46.5,lane:5},{t:46.651,lane:6},{t:46.802,lane:3},{t:46.953,lane:5},{t:47.104,lane:4},{t:47.707,lane:1},{t:47.858,lane:2},{t:48.16,lane:3},{t:48.311,lane:6},{t:48.462,lane:2},{t:48.462,lane:5},{t:48.613,lane:3},{t:49.216,lane:1},{t:49.518,lane:6},{t:49.669,lane:5},{t:49.82,lane:3},{t:50.122,lane:6},{t:50.273,lane:1},{t:50.725,lane:5},{t:50.876,lane:1},{t:50.876,lane:4},{t:51.329,lane:6},{t:51.48,lane:1},{t:51.631,lane:2},{t:51.782,lane:4},{t:52.084,lane:5},{t:52.536,lane:5},{t:52.687,lane:6},{t:52.838,lane:2},{t:53.14,lane:1},{t:53.291,lane:6},{t:53.442,lane:2},{t:53.744,lane:5},{t:53.894,lane:6},{t:54.045,lane:3},{t:54.045,lane:4},{t:54.196,lane:5},{t:54.347,lane:4},{t:54.498,lane:3},{t:54.498,lane:6},{t:54.649,lane:2},{t:54.951,lane:1},{t:55.102,lane:2},{t:55.253,lane:3},{t:55.403,lane:5},{t:55.705,lane:6},{t:56.158,lane:4},{t:56.309,lane:5},{t:56.46,lane:1},{t:56.611,lane:3},{t:56.762,lane:6},{t:57.063,lane:3},{t:57.365,lane:6},{t:57.516,lane:1},{t:57.667,lane:4},{t:58.12,lane:5},{t:58.271,lane:1},{t:58.422,lane:2},{t:58.874,lane:2},{t:59.176,lane:5},{t:59.327,lane:4},{t:59.478,lane:4},{t:60.082,lane:2},{t:60.232,lane:4},{t:60.383,lane:1},{t:60.534,lane:6},{t:61.138,lane:5},{t:61.289,lane:3},{t:61.591,lane:4},{t:61.742,lane:3},{t:61.892,lane:2},{t:62.194,lane:1},{t:62.345,lane:2},{t:62.496,lane:3},{t:62.798,lane:6},{t:63.1,lane:3},{t:63.401,lane:4},{t:63.552,lane:5},{t:64.005,lane:6},{t:64.609,lane:6},{t:64.76,lane:1},{t:64.911,lane:4},{t:65.212,lane:5},{t:65.363,lane:4},{t:65.514,lane:1},{t:66.118,lane:2},{t:76.983,lane:3},{t:76.983,lane:4},{t:77.888,lane:4},{t:78.19,lane:6},{t:78.492,lane:3},{t:78.643,lane:2},{t:78.643,lane:5},{t:78.794,lane:6},{t:79.699,lane:2},{t:79.85,lane:1},{t:79.85,lane:4},{t:80.001,lane:1},{t:80.303,lane:6},{t:80.454,lane:1},{t:80.907,lane:5},{t:81.057,lane:1},{t:81.208,lane:4},{t:81.359,lane:5},{t:81.51,lane:6},{t:81.661,lane:1},{t:82.114,lane:4},{t:82.265,lane:3},{t:82.717,lane:2},{t:82.868,lane:3},{t:83.019,lane:6},{t:83.321,lane:1},{t:83.472,lane:3},{t:83.472,lane:6},{t:83.623,lane:2},{t:83.925,lane:1},{t:84.076,lane:2},{t:84.226,lane:3},{t:84.377,lane:5},{t:84.528,lane:6},{t:84.679,lane:5},{t:85.132,lane:4},{t:86.037,lane:6},{t:86.188,lane:1},{t:86.339,lane:3},{t:86.943,lane:2},{t:87.094,lane:4},{t:87.245,lane:1},{t:87.848,lane:2},{t:87.848,lane:5},{t:88.15,lane:5},{t:88.452,lane:4},{t:88.754,lane:5},{t:89.055,lane:1},{t:89.206,lane:5},{t:89.357,lane:4},{t:89.508,lane:3},{t:89.659,lane:5},{t:89.81,lane:6},{t:89.961,lane:2},{t:90.112,lane:3},{t:90.564,lane:1},{t:90.715,lane:6},{t:90.866,lane:2},{t:90.866,lane:5},{t:91.168,lane:1},{t:91.319,lane:2},{t:91.47,lane:3},{t:91.47,lane:4},{t:91.772,lane:6},{t:91.923,lane:5},{t:92.074,lane:3},{t:92.375,lane:4},{t:92.526,lane:5},{t:92.677,lane:1},{t:92.677,lane:6},{t:92.979,lane:3},{t:93.13,lane:2},{t:93.13,lane:5},{t:93.583,lane:3},{t:93.733,lane:4},{t:94.186,lane:2},{t:94.337,lane:1},{t:94.488,lane:1},{t:94.639,lane:2},{t:94.941,lane:6},{t:95.092,lane:2},{t:95.243,lane:4},{t:95.695,lane:4},{t:95.846,lane:5},{t:95.997,lane:6},{t:96.148,lane:1},{t:96.299,lane:5},{t:96.45,lane:1},{t:96.601,lane:4},{t:96.752,lane:3},{t:97.204,lane:2},{t:97.355,lane:3},{t:97.506,lane:6},{t:97.808,lane:1},{t:97.959,lane:6},{t:98.11,lane:2},{t:98.261,lane:3},{t:98.412,lane:1},{t:98.562,lane:2},{t:98.713,lane:3},{t:98.864,lane:5},{t:99.015,lane:6},{t:99.166,lane:5},{t:99.77,lane:4},{t:100.222,lane:3},{t:100.373,lane:2},{t:100.524,lane:6},{t:101.43,lane:2},{t:101.581,lane:1},{t:101.581,lane:4},{t:101.731,lane:1},{t:101.882,lane:2},{t:102.033,lane:6},{t:102.184,lane:1},{t:102.335,lane:2},{t:102.637,lane:5},{t:102.788,lane:4},{t:102.939,lane:4},{t:103.241,lane:5},{t:103.391,lane:6},{t:103.995,lane:4},{t:104.146,lane:5},{t:104.448,lane:2},{t:104.599,lane:3},{t:104.75,lane:6},{t:105.202,lane:1},{t:105.353,lane:2},{t:105.806,lane:1},{t:105.957,lane:3},{t:106.108,lane:5},{t:106.259,lane:6},{t:106.41,lane:5},{t:106.56,lane:3},{t:106.862,lane:4},{t:107.013,lane:5},{t:107.466,lane:3},{t:107.617,lane:2},{t:107.617,lane:5},{t:107.768,lane:6},{t:108.069,lane:3},{t:108.22,lane:4},{t:108.371,lane:1},{t:108.522,lane:3},{t:108.673,lane:2},{t:108.975,lane:1},{t:109.277,lane:6},{t:109.428,lane:1},{t:109.579,lane:2},{t:109.88,lane:5},{t:110.031,lane:1},{t:110.182,lane:4},{t:110.333,lane:5},{t:110.484,lane:5},{t:110.635,lane:6},{t:110.786,lane:2},{t:110.786,lane:5},{t:111.238,lane:4},{t:111.389,lane:5},{t:111.54,lane:6},{t:111.691,lane:2},{t:111.993,lane:1},{t:111.993,lane:6},{t:112.446,lane:1},{t:112.597,lane:2},{t:112.748,lane:3},{t:112.898,lane:1},{t:113.049,lane:2},{t:113.2,lane:3},{t:113.351,lane:5},{t:113.804,lane:3},{t:114.106,lane:4},{t:114.408,lane:6},{t:114.709,lane:3},{t:115.011,lane:6},{t:115.162,lane:1},{t:115.615,lane:1},{t:115.766,lane:3},{t:116.218,lane:1},{t:116.369,lane:2},{t:116.822,lane:2},{t:117.275,lane:5},{t:117.426,lane:4},{t:117.727,lane:5},{t:117.878,lane:6},{t:118.029,lane:5},{t:118.18,lane:1},{t:118.633,lane:5},{t:118.935,lane:2},{t:119.086,lane:3},{t:119.236,lane:6},{t:119.538,lane:1},{t:119.689,lane:6},{t:119.84,lane:2},{t:119.991,lane:3},{t:120.142,lane:1},{t:120.293,lane:2},{t:120.444,lane:3},{t:120.746,lane:6},{t:120.896,lane:2},{t:121.047,lane:3},{t:121.198,lane:4},{t:121.349,lane:5},{t:121.651,lane:4},{t:121.802,lane:6},{t:122.255,lane:6},{t:122.556,lane:3},{t:122.707,lane:4},{t:122.858,lane:1},{t:123.16,lane:2},{t:123.311,lane:4},{t:123.462,lane:1},{t:124.065,lane:2},{t:124.367,lane:5},{t:124.669,lane:4},{t:124.971,lane:5},{t:125.122,lane:6},{t:125.273,lane:1},{t:125.575,lane:4},{t:125.725,lane:3},{t:126.027,lane:5},{t:126.178,lane:2},{t:126.329,lane:3},{t:126.48,lane:6},{t:126.631,lane:2},{t:126.782,lane:1},{t:126.933,lane:3},{t:126.933,lane:6},{t:127.084,lane:2},{t:127.385,lane:1},{t:127.536,lane:2},{t:127.687,lane:3},{t:127.989,lane:6},{t:128.14,lane:2},{t:128.291,lane:3},{t:128.593,lane:4},{t:128.894,lane:6},{t:129.045,lane:4},{t:129.196,lane:3},{t:129.347,lane:2},{t:129.347,lane:5},{t:129.8,lane:3},{t:130.253,lane:5},{t:130.705,lane:2},{t:131.309,lane:3},{t:131.395,lane:2,type:"hold",dur:1.207},{t:131.913,lane:4},{t:132.214,lane:3},{t:132.818,lane:2},{t:133.12,lane:3},{t:133.723,lane:3},{t:135.836,lane:5},{t:135.987,lane:2},{t:136.138,lane:3},{t:136.289,lane:5},{t:137.043,lane:3},{t:138.251,lane:5}],events:[{t:.001,type:"clock",mode:"off",power:.61},{t:1.509,type:"burst",lane:5,power:1.15},{t:1.529,type:"vibe",power:.91},{t:6.687,type:"burst",lane:2,power:1.15},{t:18.432,type:"clock",mode:"run",power:.75},{t:18.432,type:"clockTick",hand:"fast",power:.78},{t:19.035,type:"clockTick",hand:"slow",power:.86},{t:19.639,type:"clockTick",hand:"fast",power:.8},{t:19.807,type:"burst",lane:5,power:1.15},{t:19.827,type:"vibe",power:.79},{t:19.847,type:"echo",lane:7,dir:1,power:1.1},{t:20.243,type:"clockTick",hand:"slow",power:1.25},{t:20.846,type:"clockTick",hand:"fast",power:1.25},{t:21.45,type:"clockTick",hand:"slow",power:1.25},{t:22.053,type:"clockTick",hand:"fast",power:.85},{t:22.657,type:"clockTick",hand:"slow",power:.84},{t:23.261,type:"clockTick",hand:"fast",power:1.25},{t:23.864,type:"clockTick",hand:"slow",power:.45},{t:24.265,type:"burst",lane:2,power:1.15},{t:24.285,type:"vibe",power:.93},{t:24.305,type:"echo",lane:0,dir:-1,power:1.1},{t:24.484,type:"clock",mode:"run",power:.82},{t:24.513,type:"burst",lane:2,power:.86},{t:24.567,type:"burst",lane:1,power:1.15},{t:24.587,type:"vibe",power:.89},{t:24.607,type:"echo",lane:0,dir:-1,power:1.1},{t:25.071,type:"clockTick",hand:"fast",power:.45},{t:25.675,type:"clockTick",hand:"slow",power:.95},{t:26.279,type:"clockTick",hand:"fast",power:1.14},{t:26.882,type:"clockTick",hand:"slow",power:.76},{t:27.486,type:"clockTick",hand:"fast",power:.96},{t:28.09,type:"clockTick",hand:"slow",power:1.19},{t:28.693,type:"clockTick",hand:"fast",power:.92},{t:29.164,type:"burst",lane:6,power:1.15},{t:29.204,type:"echo",lane:7,dir:1,power:1.1},{t:29.297,type:"clockTick",hand:"slow",power:1.11},{t:29.9,type:"clockTick",hand:"fast",power:1.15},{t:30.504,type:"clockTick",hand:"slow",power:.96},{t:31.108,type:"clockTick",hand:"fast",power:1.12},{t:31.711,type:"clockTick",hand:"slow",power:1.24},{t:32.315,type:"clockTick",hand:"fast",power:1.04},{t:32.919,type:"clockTick",hand:"slow",power:1.25},{t:33.522,type:"clockTick",hand:"fast",power:1.22},{t:34.064,type:"burst",lane:1,power:1.15},{t:34.084,type:"vibe",power:.71},{t:34.104,type:"echo",lane:0,dir:-1,power:1.1},{t:34.126,type:"clockTick",hand:"slow",power:1.25},{t:34.729,type:"clockTick",hand:"fast",power:1.1},{t:35.333,type:"clockTick",hand:"slow",power:1.25},{t:35.937,type:"clockTick",hand:"fast",power:1.25},{t:36.54,type:"clockTick",hand:"slow",power:1.07},{t:37.144,type:"clockTick",hand:"fast",power:.77},{t:37.748,type:"clockTick",hand:"slow",power:1.21},{t:38.351,type:"clockTick",hand:"fast",power:1.25},{t:38.955,type:"clockTick",hand:"slow",power:1.25},{t:38.963,type:"burst",lane:1,power:1.15},{t:38.983,type:"vibe",power:.71},{t:39.003,type:"echo",lane:0,dir:-1,power:1.1},{t:39.558,type:"clockTick",hand:"fast",power:1.12},{t:40.162,type:"clockTick",hand:"slow",power:1.25},{t:40.766,type:"clockTick",hand:"fast",power:1.14},{t:41.369,type:"clockTick",hand:"slow",power:1.25},{t:41.973,type:"clockTick",hand:"fast",power:.92},{t:42.577,type:"clockTick",hand:"slow",power:1.25},{t:42.878,type:"clock",mode:"run",power:.9},{t:42.907,type:"burst",lane:2,power:.92},{t:43.18,type:"clockTick",hand:"fast",power:.92},{t:43.784,type:"clockTick",hand:"slow",power:.88},{t:43.862,type:"burst",lane:6,power:1.15},{t:43.902,type:"echo",lane:7,dir:1,power:1.1},{t:44.387,type:"clockTick",hand:"fast",power:.98},{t:44.991,type:"clockTick",hand:"slow",power:.45},{t:45.595,type:"clockTick",hand:"fast",power:.83},{t:46.198,type:"clockTick",hand:"slow",power:.45},{t:46.802,type:"clockTick",hand:"fast",power:.45},{t:47.405,type:"clockTick",hand:"slow",power:.96},{t:48.009,type:"clockTick",hand:"fast",power:1.18},{t:48.46,type:"burst",lane:1,power:1.15},{t:48.5,type:"echo",lane:0,dir:-1,power:1.1},{t:48.613,type:"clockTick",hand:"slow",power:1.05},{t:49.216,type:"clockTick",hand:"fast",power:1},{t:49.82,type:"clockTick",hand:"slow",power:1.15},{t:50.424,type:"clockTick",hand:"fast",power:1},{t:51.027,type:"clockTick",hand:"slow",power:1.05},{t:51.631,type:"clockTick",hand:"fast",power:1.04},{t:52.234,type:"clockTick",hand:"slow",power:.92},{t:52.535,type:"motion",style:"wave",amp:.18,speed:1.05,pitch:.09},{t:52.838,type:"clockTick",hand:"fast",power:1.16},{t:53.034,type:"burst",lane:6,power:1.15},{t:53.074,type:"echo",lane:7,dir:1,power:1.1},{t:53.442,type:"clockTick",hand:"slow",power:1.12},{t:54.045,type:"clockTick",hand:"fast",power:.93},{t:54.649,type:"clockTick",hand:"slow",power:1.11},{t:55.253,type:"clockTick",hand:"fast",power:1.21},{t:55.856,type:"clockTick",hand:"slow",power:1.25},{t:56.46,type:"clockTick",hand:"fast",power:.77},{t:57.063,type:"clockTick",hand:"slow",power:.72},{t:57.667,type:"clockTick",hand:"fast",power:.45},{t:57.934,type:"burst",lane:6,power:1.15},{t:57.954,type:"vibe",power:.73},{t:57.974,type:"echo",lane:7,dir:1,power:1.1},{t:58.271,type:"clockTick",hand:"slow",power:.73},{t:58.874,type:"clockTick",hand:"fast",power:.84},{t:59.478,type:"clockTick",hand:"slow",power:.45},{t:60.082,type:"clockTick",hand:"fast",power:.45},{t:60.685,type:"clockTick",hand:"slow",power:.45},{t:61.289,type:"clockTick",hand:"fast",power:.75},{t:61.892,type:"clockTick",hand:"slow",power:.88},{t:62.496,type:"clockTick",hand:"fast",power:.78},{t:63.1,type:"clockTick",hand:"slow",power:.81},{t:63.703,type:"clockTick",hand:"fast",power:.81},{t:64.307,type:"clockTick",hand:"slow",power:.92},{t:64.911,type:"clockTick",hand:"fast",power:.98},{t:65.514,type:"clockTick",hand:"slow",power:.88},{t:66.118,type:"clockTick",hand:"fast",power:.95},{t:66.418,type:"clock",mode:"freeze",power:.75},{t:66.419,type:"pendulum",mode:"start",period:2.4145,amplitude:.42},{t:76.073,type:"pendulum",mode:"stop"},{t:76.076,type:"clock",mode:"run",power:.88},{t:76.105,type:"burst",lane:2,power:.9},{t:76.379,type:"clockTick",hand:"fast",power:.45},{t:76.983,type:"clockTick",hand:"slow",power:.77},{t:77.587,type:"clockTick",hand:"fast",power:.78},{t:78.19,type:"clockTick",hand:"slow",power:.77},{t:78.794,type:"clockTick",hand:"fast",power:.75},{t:79.064,type:"burst",lane:6,power:1.15},{t:79.084,type:"vibe",power:.72},{t:79.104,type:"echo",lane:7,dir:1,power:1.1},{t:79.397,type:"clockTick",hand:"slow",power:1.25},{t:80.001,type:"clockTick",hand:"fast",power:.78},{t:80.605,type:"clockTick",hand:"slow",power:.45},{t:81.208,type:"clockTick",hand:"fast",power:.82},{t:81.812,type:"clockTick",hand:"slow",power:.91},{t:82.416,type:"clockTick",hand:"fast",power:.98},{t:83.019,type:"clockTick",hand:"slow",power:1.02},{t:83.623,type:"clockTick",hand:"fast",power:1.01},{t:84.226,type:"clockTick",hand:"slow",power:1.01},{t:84.83,type:"clockTick",hand:"fast",power:.87},{t:85.434,type:"clockTick",hand:"slow",power:.79},{t:86.037,type:"clockTick",hand:"fast",power:.75},{t:86.641,type:"clockTick",hand:"slow",power:.79},{t:87.245,type:"clockTick",hand:"fast",power:.76},{t:87.848,type:"clockTick",hand:"slow",power:.45},{t:88.452,type:"clockTick",hand:"fast",power:1.05},{t:89.055,type:"clockTick",hand:"slow",power:.91},{t:89.659,type:"clockTick",hand:"fast",power:.94},{t:90.263,type:"clockTick",hand:"slow",power:.45},{t:90.395,type:"burst",lane:1,power:1.15},{t:90.415,type:"vibe",power:.77},{t:90.435,type:"echo",lane:0,dir:-1,power:1.1},{t:90.562,type:"clock",mode:"run",power:.92},{t:90.591,type:"burst",lane:2,power:.94},{t:90.621,type:"vibe",power:.84},{t:90.866,type:"clockTick",hand:"fast",power:.88},{t:91.47,type:"clockTick",hand:"slow",power:.45},{t:92.074,type:"clockTick",hand:"fast",power:.77},{t:92.677,type:"clockTick",hand:"slow",power:.45},{t:92.833,type:"burst",lane:1,power:1.15},{t:92.873,type:"echo",lane:0,dir:-1,power:1.1},{t:93.281,type:"clockTick",hand:"fast",power:.88},{t:93.884,type:"clockTick",hand:"slow",power:.45},{t:94.488,type:"clockTick",hand:"fast",power:.85},{t:95.092,type:"clockTick",hand:"slow",power:.45},{t:95.695,type:"clockTick",hand:"fast",power:.77},{t:96.299,type:"clockTick",hand:"slow",power:.8},{t:96.902,type:"clockTick",hand:"fast",power:.77},{t:97.506,type:"clockTick",hand:"slow",power:.83},{t:98.11,type:"clockTick",hand:"fast",power:.82},{t:98.713,type:"clockTick",hand:"slow",power:.85},{t:98.963,type:"burst",lane:1,power:1.15},{t:99.003,type:"echo",lane:0,dir:-1,power:1.1},{t:99.317,type:"clockTick",hand:"fast",power:.85},{t:99.921,type:"clockTick",hand:"slow",power:.88},{t:100.524,type:"clockTick",hand:"fast",power:1.25},{t:101.128,type:"clockTick",hand:"slow",power:.79},{t:101.731,type:"clockTick",hand:"fast",power:.82},{t:102.335,type:"clockTick",hand:"slow",power:.81},{t:102.939,type:"clockTick",hand:"fast",power:.8},{t:103.542,type:"clockTick",hand:"slow",power:.81},{t:103.863,type:"burst",lane:6,power:1.15},{t:103.903,type:"echo",lane:7,dir:1,power:1.1},{t:104.146,type:"clockTick",hand:"fast",power:.82},{t:104.75,type:"clockTick",hand:"slow",power:.82},{t:105.353,type:"clockTick",hand:"fast",power:.89},{t:105.957,type:"clockTick",hand:"slow",power:.76},{t:106.56,type:"clockTick",hand:"fast",power:.81},{t:107.164,type:"clockTick",hand:"slow",power:.79},{t:107.768,type:"clockTick",hand:"fast",power:.79},{t:108.371,type:"clockTick",hand:"slow",power:.8},{t:108.975,type:"clockTick",hand:"fast",power:.82},{t:109.579,type:"clockTick",hand:"slow",power:.93},{t:110.182,type:"clockTick",hand:"fast",power:.82},{t:110.481,type:"clock",mode:"final",power:.97},{t:110.51,type:"burst",lane:2,power:.98},{t:110.54,type:"vibe",power:.94},{t:110.786,type:"clockTick",hand:"fast",power:.45},{t:111.389,type:"clockTick",hand:"slow",power:.45},{t:111.993,type:"clockTick",hand:"fast",power:.45},{t:112.129,type:"burst",lane:1,power:1.15},{t:112.149,type:"vibe",power:.74},{t:112.169,type:"echo",lane:0,dir:-1,power:1.1},{t:112.597,type:"clockTick",hand:"slow",power:.45},{t:113.2,type:"clockTick",hand:"fast",power:.8},{t:113.804,type:"clockTick",hand:"slow",power:.45},{t:114.408,type:"clockTick",hand:"fast",power:.78},{t:115.011,type:"clockTick",hand:"slow",power:.45},{t:115.309,type:"motion",style:"orbit",amp:.19,speed:1.2,pitch:.1},{t:115.615,type:"clockTick",hand:"fast",power:.45},{t:116.218,type:"clockTick",hand:"slow",power:.45},{t:116.727,type:"burst",lane:1,power:1.14},{t:116.767,type:"echo",lane:0,dir:-1,power:1.1},{t:116.822,type:"clockTick",hand:"fast",power:.45},{t:117.426,type:"clockTick",hand:"slow",power:.45},{t:118.029,type:"clockTick",hand:"fast",power:.76},{t:118.633,type:"clockTick",hand:"slow",power:1.12},{t:119.236,type:"clockTick",hand:"fast",power:1.08},{t:119.84,type:"clockTick",hand:"slow",power:1.05},{t:120.444,type:"clockTick",hand:"fast",power:.45},{t:121.047,type:"clockTick",hand:"slow",power:.86},{t:121.651,type:"clockTick",hand:"fast",power:1.12},{t:122.23,type:"burst",lane:1,power:1.15},{t:122.255,type:"clockTick",hand:"slow",power:1.25},{t:122.27,type:"echo",lane:0,dir:-1,power:1.1},{t:122.858,type:"clockTick",hand:"fast",power:1.01},{t:123.462,type:"clockTick",hand:"slow",power:1.19},{t:124.065,type:"clockTick",hand:"fast",power:1.14},{t:124.669,type:"clockTick",hand:"slow",power:1.08},{t:125.273,type:"clockTick",hand:"fast",power:.83},{t:125.876,type:"clockTick",hand:"slow",power:1.18},{t:126.48,type:"clockTick",hand:"fast",power:.88},{t:127.084,type:"clockTick",hand:"slow",power:1.25},{t:127.129,type:"burst",lane:6,power:1.15},{t:127.169,type:"echo",lane:7,dir:1,power:1.1},{t:127.687,type:"clockTick",hand:"fast",power:.79},{t:128.291,type:"clockTick",hand:"slow",power:.86},{t:128.894,type:"clockTick",hand:"fast",power:.83},{t:129.498,type:"clockTick",hand:"slow",power:.76},{t:129.796,type:"clock",mode:"off",power:.65},{t:133.12,type:"burst",lane:5,power:1.15},{t:137.718,type:"burst",lane:5,power:1.15}],ghosts:[{t:18.471,lane:0,type:"sweep"},{t:18.541,lane:7,type:"sweep"},{t:19.867,lane:7,type:"bounce"},{t:24.325,lane:0,type:"bounce"},{t:24.523,lane:0,type:"sweep"},{t:24.593,lane:7,type:"sweep"},{t:24.627,lane:0,type:"bounce"},{t:29.224,lane:7,type:"sweep"},{t:34.124,lane:0,type:"sweep"},{t:39.023,lane:0,type:"sweep"},{t:42.917,lane:0,type:"sweep"},{t:42.987,lane:7,type:"sweep"},{t:43.922,lane:7,type:"sweep"},{t:48.52,lane:0,type:"sweep"},{t:53.094,lane:7,type:"sweep"},{t:57.994,lane:7,type:"sweep"},{t:66.457,lane:0,type:"sweep"},{t:66.527,lane:7,type:"sweep"},{t:76.115,lane:0,type:"sweep"},{t:76.185,lane:7,type:"sweep"},{t:79.124,lane:7,type:"sweep"},{t:90.455,lane:0,type:"bounce"},{t:90.601,lane:0,type:"sweep"},{t:90.671,lane:7,type:"sweep"},{t:92.893,lane:0,type:"sweep"},{t:99.023,lane:0,type:"sweep"},{t:103.923,lane:7,type:"sweep"},{t:110.52,lane:0,type:"sweep"},{t:110.59,lane:7,type:"sweep"},{t:112.189,lane:0,type:"bounce"},{t:116.787,lane:0,type:"sweep"},{t:122.29,lane:0,type:"sweep"},{t:127.189,lane:7,type:"sweep"}],swings:[{t:67.021},{t:68.228},{t:69.435},{t:70.642},{t:71.85},{t:73.057},{t:74.264},{t:75.471}]},of={song:{title:"THE UNTOUCHABLE OF f RA IA'S LAND",shortTitle:"THE UNTOUCHABLE",artist:"f RA IA",bpm:111.1,bpmLabel:"111 / 96 BPM",bpmMap:[{t:0,bpm:111.1},{t:28.492,bpm:96},{t:63.59,bpm:111.1}],duration:147.541,chartEnd:141.829,introEnd:28.492,beatOffset:.409,difficulty:"BOSS",laneLabel:"4 · 6 · 8",freeNotes:!0,boss:!0,fadeStart:140.2,fadeEnd:142.6},sections:[{name:"OVERTURE",start:0,end:9.05,keys:8,intro:!0,color:"#ffcf6e",accent:"#ff3b5c",energy:.42,bloom:.68,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:19.5,camY:7.2,spin:.02,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.03,motionSpeed:.25,motionPitch:.015,city:0},{name:"RELIQUARY",start:9.05,end:18.77,keys:8,intro:!0,color:"#ffb45e",accent:"#9b6bff",energy:.62,bloom:.8,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:19.5,camY:7.2,spin:.03,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"wave",motionAmp:.05,motionSpeed:.35,motionPitch:.02,city:0},{name:"HUSH",start:18.77,end:20.39,keys:8,intro:!0,color:"#b8c8ff",accent:"#ffd166",energy:.2,bloom:.42,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:19.5,camY:7.2,spin:.01,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"flat",motionAmp:.01,motionSpeed:.2,motionPitch:.005,city:0},{name:"PROCESSION",start:20.39,end:28.492,keys:8,intro:!0,color:"#ff8a5e",accent:"#ffd166",energy:.84,bloom:.96,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:19.5,camY:7.2,spin:.05,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.1,motionSpeed:.6,motionPitch:.04,city:0},{name:"CHAMBER",start:28.492,end:48.492,keys:4,firstNote:33.55,color:"#a99bff",accent:"#ffd166",energy:.32,bloom:.62,rotY:0,rotZ:0,tilt:.02,spread:.98,y:.08,camZ:18.8,camY:7,spin:.025,lookY:5,lookZ:-2,bpm:96,beatOffset:28.492,motion:"wave",motionAmp:.04,motionSpeed:.4,motionPitch:.018,city:0},{name:"MECHANISM",start:48.492,end:61.492,keys:6,color:"#ffb45e",accent:"#ff4d6d",energy:.62,bloom:.82,rotY:.05,rotZ:-.018,tilt:.015,spread:1.03,y:.1,camZ:17.4,camY:6.8,spin:.06,lookY:5.4,lookZ:-4,bpm:96,beatOffset:28.492,motion:"clock",motionAmp:.075,motionSpeed:.55,motionPitch:.03,city:0},{name:"DESCENT",start:61.492,end:63.59,keys:6,color:"#ff6b7a",accent:"#ffd166",energy:.76,bloom:.9,rotY:-.06,rotZ:.025,tilt:-.02,spread:1.05,y:.12,camZ:16.4,camY:6.4,spin:.09,lookY:5.6,lookZ:-5,bpm:96,beatOffset:28.492,motion:"slope",motionAmp:.12,motionSpeed:.7,motionPitch:.05,city:0},{name:"GALLERY",start:63.59,end:70.069,keys:6,color:"#ff7a5e",accent:"#ffd166",energy:.84,bloom:.98,rotY:.08,rotZ:-.03,tilt:.025,spread:1.06,y:.14,camZ:16.2,camY:6.7,spin:.1,lookY:5.8,lookZ:-6,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.13,motionSpeed:.75,motionPitch:.05,city:0},{name:"HUNT",start:70.069,end:89.449,keys:6,color:"#ff4d6d",accent:"#ffd166",energy:.98,bloom:1.08,rotY:-.1,rotZ:.04,tilt:-.025,spread:1.08,y:.16,camZ:15.8,camY:6.6,spin:.13,lookY:6,lookZ:-6,bpm:111.1,beatOffset:.409,motion:"zigzag",motionAmp:.16,motionSpeed:.95,motionPitch:.065,city:0},{name:"FROZEN",start:89.449,end:105.429,keys:4,color:"#9fc7ff",accent:"#d7e8ff",energy:.3,bloom:.58,rotY:-.02,rotZ:.01,tilt:.04,spread:.94,y:.24,camZ:19.2,camY:7.8,spin:.02,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"flat",motionAmp:.02,motionSpeed:.2,motionPitch:.008,city:0},{name:"ASCENT",start:105.429,end:107.509,keys:6,color:"#ffd166",accent:"#ff7a5e",energy:.88,bloom:1,rotY:.06,rotZ:-.025,tilt:.02,spread:1.04,y:.12,camZ:16.4,camY:6.5,spin:.1,lookY:5.8,lookZ:-5,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.16,motionSpeed:.9,motionPitch:.06,city:0},{name:"APOTHEOSIS",start:107.509,end:123.829,keys:8,color:"#ff9a5e",accent:"#ff3b5c",energy:1.04,bloom:1.14,rotY:-.12,rotZ:.05,tilt:-.03,spread:1.1,y:.18,camZ:15.4,camY:6.5,spin:.15,lookY:6,lookZ:-6,bpm:111.1,beatOffset:.409,motion:"clock",motionAmp:.18,motionSpeed:1.05,motionPitch:.075,city:0},{name:"FINALE",start:123.829,end:141.829,keys:8,color:"#ff3b5c",accent:"#ffd166",energy:1.12,bloom:1.2,rotY:.14,rotZ:-.055,tilt:.035,spread:1.12,y:.2,camZ:14.8,camY:6.3,spin:.17,lookY:6.2,lookZ:-7,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.2,motionSpeed:1.15,motionPitch:.085,city:0},{name:"OUTRO",start:141.829,end:147.541,keys:4,color:"#c9b8ff",accent:"#ffd166",energy:.18,bloom:.46,rotY:0,rotZ:0,tilt:.02,spread:.92,y:.3,camZ:19.6,camY:7.8,spin:.02,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"flat",motionAmp:0,motionSpeed:.2,motionPitch:0,city:0}],notes:[{t:34.43,lane:5},{t:35.367,lane:4},{t:35.992,lane:2},{t:36.617,lane:2},{t:38.492,lane:2},{t:38.492,lane:5},{t:38.862,lane:5,type:"hold",dur:1.25},{t:40.367,lane:5},{t:40.992,lane:3},{t:41.617,lane:4},{t:43.492,lane:2},{t:44.43,lane:4},{t:45.992,lane:3},{t:46.362,lane:3,type:"hold",dur:1.25},{t:46.617,lane:5},{t:48.492,lane:1},{t:48.492,lane:6},{t:49.43,lane:6},{t:50.055,lane:5},{t:50.68,lane:6},{t:50.992,lane:1},{t:51.305,lane:5},{t:51.93,lane:6},{t:52.242,lane:3},{t:52.867,lane:4},{t:53.492,lane:4},{t:54.117,lane:2},{t:54.43,lane:1},{t:55.055,lane:5},{t:55.68,lane:4},{t:55.992,lane:3},{t:56.305,lane:2},{t:56.93,lane:1},{t:57.242,lane:3},{t:57.867,lane:6},{t:58.492,lane:1},{t:58.492,lane:6},{t:59.43,lane:2},{t:60.055,lane:6},{t:60.68,lane:5},{t:60.992,lane:1},{t:61.305,lane:3},{t:61.617,lane:2},{t:61.93,lane:5},{t:62.242,lane:3},{t:62.555,lane:4},{t:62.867,lane:3},{t:63.18,lane:5},{t:63.492,lane:1},{t:63.595,lane:4},{t:64,lane:1},{t:64.135,lane:5},{t:64.405,lane:2},{t:64.54,lane:6},{t:64.81,lane:5},{t:64.945,lane:4},{t:65.215,lane:4},{t:65.486,lane:2},{t:65.621,lane:1},{t:65.891,lane:5},{t:66.161,lane:4},{t:66.296,lane:2},{t:66.566,lane:4},{t:66.836,lane:2},{t:67.241,lane:5},{t:67.376,lane:2},{t:67.646,lane:4},{t:67.916,lane:2},{t:68.051,lane:1},{t:68.321,lane:5},{t:68.456,lane:6},{t:68.726,lane:2},{t:68.861,lane:1},{t:69.536,lane:3},{t:69.536,lane:4},{t:69.806,lane:2},{t:69.941,lane:4},{t:70.211,lane:6},{t:70.346,lane:2},{t:70.616,lane:3},{t:70.751,lane:4},{t:71.021,lane:5},{t:71.291,lane:6},{t:71.426,lane:1},{t:71.561,lane:6},{t:71.696,lane:3},{t:71.966,lane:3},{t:72.236,lane:2},{t:72.371,lane:6},{t:72.776,lane:2},{t:73.046,lane:3},{t:73.181,lane:4},{t:73.721,lane:6},{t:73.856,lane:3},{t:73.991,lane:4},{t:74.261,lane:6},{t:74.396,lane:5},{t:74.666,lane:3},{t:74.936,lane:1},{t:75.071,lane:2},{t:75.341,lane:4},{t:75.477,lane:5},{t:75.747,lane:5},{t:76.017,lane:1},{t:76.287,lane:3},{t:76.422,lane:4},{t:76.827,lane:5},{t:77.097,lane:3},{t:77.232,lane:2},{t:77.502,lane:2},{t:77.772,lane:4},{t:77.907,lane:5},{t:78.042,lane:6},{t:78.177,lane:3},{t:78.177,lane:4},{t:78.447,lane:1},{t:78.717,lane:2},{t:79.122,lane:6},{t:79.257,lane:4},{t:79.527,lane:3},{t:79.662,lane:5},{t:79.932,lane:4},{t:80.202,lane:5},{t:80.337,lane:4},{t:80.472,lane:1},{t:80.742,lane:5},{t:80.877,lane:1},{t:81.147,lane:2},{t:81.417,lane:3},{t:81.552,lane:6},{t:81.822,lane:1},{t:81.957,lane:3},{t:82.227,lane:1},{t:82.497,lane:3},{t:82.767,lane:4},{t:82.902,lane:6},{t:83.307,lane:1},{t:83.577,lane:2},{t:83.712,lane:6},{t:83.982,lane:5},{t:84.252,lane:6},{t:84.387,lane:3},{t:84.522,lane:1},{t:84.657,lane:2},{t:84.927,lane:3},{t:85.197,lane:4},{t:85.603,lane:1},{t:85.738,lane:5},{t:86.008,lane:2},{t:86.143,lane:6},{t:86.413,lane:5},{t:86.683,lane:6},{t:86.818,lane:3},{t:86.818,lane:4},{t:86.953,lane:3},{t:87.223,lane:1},{t:87.358,lane:3},{t:87.628,lane:6},{t:87.898,lane:2},{t:88.033,lane:1},{t:88.303,lane:3},{t:88.438,lane:2},{t:88.708,lane:3},{t:88.978,lane:2},{t:89.248,lane:4},{t:89.653,lane:5},{t:90.058,lane:4},{t:90.463,lane:3},{t:91.138,lane:4},{t:91.948,lane:3},{t:92.218,lane:4},{t:93.028,lane:3},{t:93.298,lane:5},{t:93.568,lane:2},{t:94.039,lane:5,type:"hold",dur:.81},{t:94.783,lane:4},{t:95.053,lane:5},{t:95.459,lane:2},{t:95.459,lane:5},{t:95.864,lane:3},{t:96.269,lane:3},{t:96.539,lane:5},{t:96.944,lane:3},{t:97.349,lane:3},{t:97.619,lane:4},{t:98.294,lane:4},{t:98.699,lane:4},{t:99.104,lane:5},{t:99.779,lane:4},{t:100.184,lane:2},{t:100.52,lane:3,type:"hold",dur:.81},{t:100.859,lane:4},{t:101.264,lane:2},{t:101.669,lane:3},{t:101.939,lane:5},{t:102.209,lane:2},{t:102.614,lane:4},{t:103.019,lane:5},{t:103.424,lane:5},{t:104.099,lane:2},{t:104.099,lane:5},{t:104.504,lane:5},{t:104.909,lane:2},{t:105.179,lane:2},{t:105.45,lane:3},{t:105.585,lane:5},{t:105.72,lane:6},{t:105.855,lane:4},{t:105.99,lane:2},{t:106.125,lane:1},{t:106.26,lane:2},{t:106.395,lane:1},{t:106.665,lane:5},{t:106.8,lane:6},{t:106.935,lane:4},{t:107.07,lane:2},{t:107.34,lane:4},{t:107.61,lane:2},{t:107.88,lane:1},{t:108.15,lane:0},{t:108.285,lane:7},{t:108.42,lane:4},{t:108.69,lane:6},{t:108.96,lane:6},{t:109.095,lane:5},{t:109.365,lane:3},{t:109.5,lane:2},{t:109.77,lane:0},{t:109.905,lane:1},{t:110.175,lane:3},{t:110.31,lane:4},{t:110.58,lane:6},{t:110.715,lane:5},{t:110.985,lane:3},{t:111.12,lane:2},{t:111.39,lane:0},{t:111.525,lane:1},{t:111.795,lane:3},{t:111.93,lane:4},{t:112.2,lane:6},{t:112.47,lane:6},{t:112.605,lane:5},{t:112.74,lane:0},{t:112.74,lane:7},{t:113.01,lane:0},{t:113.28,lane:4},{t:113.415,lane:7},{t:113.685,lane:2},{t:113.82,lane:5},{t:114.09,lane:2},{t:114.225,lane:4},{t:114.495,lane:6},{t:114.63,lane:0},{t:114.9,lane:4},{t:115.035,lane:7},{t:115.305,lane:2},{t:115.441,lane:5},{t:115.711,lane:2},{t:115.846,lane:4},{t:116.251,lane:0},{t:116.521,lane:0},{t:116.791,lane:4},{t:116.926,lane:7},{t:117.061,lane:3},{t:117.331,lane:3},{t:117.601,lane:2},{t:117.736,lane:5},{t:118.006,lane:4},{t:118.141,lane:0},{t:118.411,lane:1},{t:118.546,lane:5},{t:118.816,lane:6},{t:118.951,lane:3},{t:119.221,lane:2},{t:119.356,lane:5},{t:119.626,lane:4},{t:119.761,lane:0},{t:120.031,lane:1},{t:120.166,lane:5},{t:120.436,lane:6},{t:120.571,lane:3},{t:120.841,lane:3},{t:121.111,lane:2},{t:121.246,lane:5},{t:121.381,lane:0},{t:121.381,lane:7},{t:121.651,lane:5},{t:121.921,lane:3},{t:122.056,lane:2},{t:122.326,lane:0},{t:122.461,lane:2},{t:122.731,lane:1},{t:122.866,lane:5},{t:123.136,lane:7},{t:123.271,lane:6},{t:123.541,lane:3},{t:123.676,lane:2},{t:123.946,lane:4},{t:124.081,lane:3},{t:124.216,lane:5},{t:124.486,lane:6},{t:124.621,lane:1},{t:124.891,lane:0},{t:125.026,lane:7},{t:125.161,lane:1},{t:125.432,lane:2},{t:125.567,lane:5},{t:125.702,lane:6},{t:125.972,lane:4},{t:126.107,lane:3},{t:126.242,lane:2},{t:126.377,lane:1},{t:126.647,lane:1},{t:126.782,lane:2},{t:126.917,lane:3},{t:127.187,lane:5},{t:127.322,lane:6},{t:127.592,lane:6},{t:127.727,lane:5},{t:127.862,lane:2},{t:127.862,lane:5},{t:127.997,lane:1},{t:128.132,lane:0},{t:128.402,lane:2},{t:128.537,lane:3},{t:128.672,lane:4},{t:128.942,lane:6},{t:129.077,lane:7},{t:129.347,lane:5},{t:129.482,lane:4},{t:129.617,lane:3},{t:129.887,lane:1},{t:130.022,lane:3},{t:130.022,lane:4},{t:130.157,lane:7},{t:130.427,lane:2},{t:130.562,lane:5},{t:130.697,lane:6},{t:130.967,lane:4},{t:131.102,lane:1},{t:131.372,lane:0},{t:131.507,lane:7},{t:131.642,lane:0},{t:131.912,lane:4},{t:132.047,lane:7},{t:132.182,lane:2},{t:132.182,lane:5},{t:132.452,lane:2},{t:132.587,lane:4},{t:132.722,lane:1},{t:132.857,lane:6},{t:133.127,lane:7},{t:133.262,lane:0},{t:133.397,lane:3},{t:133.667,lane:7},{t:133.802,lane:1},{t:134.072,lane:5},{t:134.207,lane:6},{t:134.342,lane:2},{t:134.477,lane:5},{t:134.612,lane:1},{t:134.882,lane:0},{t:135.017,lane:4},{t:135.152,lane:1},{t:135.423,lane:2},{t:135.558,lane:6},{t:135.828,lane:7},{t:135.963,lane:3},{t:136.098,lane:6},{t:136.368,lane:5},{t:136.503,lane:0},{t:136.503,lane:7},{t:136.638,lane:4},{t:136.908,lane:5},{t:137.043,lane:2},{t:137.178,lane:6},{t:137.448,lane:7},{t:137.583,lane:3},{t:137.853,lane:2},{t:137.988,lane:5},{t:138.123,lane:1},{t:138.393,lane:0},{t:138.528,lane:4},{t:138.663,lane:3},{t:138.663,lane:4},{t:138.933,lane:1},{t:139.068,lane:0},{t:139.203,lane:2},{t:139.338,lane:4},{t:139.608,lane:5},{t:139.743,lane:3},{t:139.878,lane:7},{t:140.148,lane:6},{t:140.283,lane:5},{t:140.553,lane:3},{t:140.688,lane:2},{t:140.823,lane:3},{t:140.823,lane:4},{t:140.958,lane:1},{t:141.093,lane:5},{t:141.363,lane:3},{t:141.498,lane:7},{t:141.633,lane:6}],events:[{t:0,type:"bossCamera",pos:[0,15,48],look:[0,18,-70],fov:48,roll:0,dur:.02},{t:.409,type:"bossCamera",pos:[0,14,46],look:[0,20,-74],fov:48,roll:0,dur:1.1},{t:.409,type:"bossGlitch",power:.5},{t:.409,type:"pulse",power:.51},{t:.429,type:"wind",power:.95},{t:.7,type:"caption",kicker:"OVERTURE",title:"THE UNTOUCHABLE",sub:"OF f RA IA'S LAND",hold:5.6},{t:2.569,type:"bossCamera",pos:[0,10,31],look:[0,20,-78],fov:52,roll:-.02,dur:.85},{t:2.569,type:"pulse",power:.51},{t:4.729,type:"bossCamera",pos:[-7,5.5,20],look:[2,23,-86],fov:58,roll:.025,dur:.78},{t:4.729,type:"bossGlitch",power:.7},{t:4.729,type:"pulse",power:.51},{t:6.889,type:"bossCamera",pos:[8,3.1,10],look:[-4,19,-82],fov:61,roll:.035,dur:.72},{t:6.89,type:"pulse",power:.51},{t:8.95,type:"bossGlitch",power:.9},{t:9.05,type:"bossCamera",pos:[-16,10,-2],look:[8,15,-66],fov:55,roll:-.03,dur:.92},{t:9.05,type:"pulse",power:.62},{t:9.07,type:"wind",power:1.07},{t:9.2,type:"caption",kicker:"I",title:"THE NAVE",sub:"EVERY SAINT HAS TURNED AWAY",hold:4.2},{t:11.21,type:"bossCamera",pos:[13,17,-14],look:[-10,12,-82],fov:52,roll:.05,dur:.85},{t:11.21,type:"pulse",power:.62},{t:13.37,type:"bossCamera",pos:[0,24,16],look:[0,14,-44],fov:50,roll:0,dur:.72},{t:13.37,type:"bossGlitch",power:.65},{t:13.37,type:"pulse",power:.62},{t:15.53,type:"bossCamera",pos:[0,3,6],look:[0,23,-88],fov:63,roll:.02,dur:.68},{t:15.531,type:"pulse",power:.62},{t:17.69,type:"bossCamera",pos:[0,12,38],look:[0,21,-88],fov:48,roll:0,dur:1.05},{t:17.691,type:"pulse",power:.62},{t:17.711,type:"wind",power:1.07},{t:18.77,type:"bossGlitch",power:1},{t:19.85,type:"bossCamera",pos:[0,6,18],look:[0,25,-88],fov:58,roll:-.03,dur:.52},{t:19.851,type:"pulse",power:.39},{t:20.43,type:"vibe",power:.84},{t:20.5,type:"caption",kicker:"II",title:"THE PROCESSION",sub:"THE HOUR HAND FALLS",hold:4},{t:21.49,type:"bossCamera",pos:[-12,15,10],look:[6,11,-48],fov:55,roll:.04,dur:.8},{t:21.49,type:"bossGlitch",power:.8},{t:22.011,type:"pulse",power:.74},{t:23.65,type:"bossCamera",pos:[12,4,4],look:[-4,19,-74],fov:60,roll:-.05,dur:.62},{t:23.65,type:"bossGlitch",power:.9},{t:24.171,type:"pulse",power:.74},{t:25.81,type:"bossCamera",pos:[0,26,26],look:[0,0,-4],fov:58,roll:.03,dur:.72},{t:26.3,type:"caption",kicker:"III",title:"THE CLOCK",sub:"DO NOT LET IT STRIKE",hold:2.4},{t:26.332,type:"pulse",power:.74},{t:26.352,type:"wind",power:1.2},{t:27.97,type:"bossCamera",pos:[0,9.5,26],look:[0,5,-2],fov:51,roll:0,dur:.52},{t:27.97,type:"bossGlitch",power:1.15},{t:28.492,type:"bossCamera",pos:[0,7.4,19.2],look:[0,4.8,-2],fov:46,roll:0,dur:.6},{t:28.492,type:"bossGlitch",power:1.3},{t:28.492,type:"bossPhase",mode:"play"},{t:28.492,type:"bossTick",hand:"fast",power:.54},{t:28.492,type:"pulse",power:.42},{t:28.522,type:"echo",lane:0,dir:-1,power:.72},{t:30.992,type:"bossTick",hand:"slow",power:.54},{t:30.992,type:"pulse",power:.42},{t:33.492,type:"bossTick",hand:"fast",power:.54},{t:33.492,type:"pulse",power:.42},{t:33.522,type:"echo",lane:7,dir:1,power:.72},{t:33.55,type:"bossCamera",pos:[0,8.1,18.4],look:[0,5.4,-3],fov:47,roll:0,dur:.8},{t:35.992,type:"bossTick",hand:"slow",power:.54},{t:35.992,type:"pulse",power:.42},{t:38.492,type:"bossTick",hand:"fast",power:.54},{t:38.492,type:"pulse",power:.42},{t:38.522,type:"echo",lane:0,dir:-1,power:.72},{t:40.742,type:"bossCamera",pos:[-5,9.2,18.8],look:[2,5.2,-4],fov:48,roll:.02,dur:1},{t:40.992,type:"bossTick",hand:"slow",power:.54},{t:40.992,type:"pulse",power:.42},{t:43.492,type:"bossTick",hand:"fast",power:.54},{t:43.492,type:"pulse",power:.42},{t:43.522,type:"echo",lane:7,dir:1,power:.72},{t:45.992,type:"bossTick",hand:"slow",power:.54},{t:45.992,type:"pulse",power:.42},{t:48.492,type:"bossCamera",pos:[-4,7.8,17.2],look:[2,6,-6],fov:48,roll:-.02,dur:.9},{t:48.492,type:"bossGlitch",power:.7},{t:48.492,type:"bossTick",hand:"fast",power:.72},{t:48.492,type:"pulse",power:.6},{t:48.522,type:"echo",lane:0,dir:-1,power:.93},{t:50.992,type:"bossTick",hand:"slow",power:.72},{t:50.992,type:"pulse",power:.6},{t:53.492,type:"bossTick",hand:"fast",power:.72},{t:53.492,type:"pulse",power:.6},{t:53.522,type:"echo",lane:7,dir:1,power:.93},{t:54.92,type:"bossCamera",pos:[5,8.4,16.4],look:[-2,6.4,-6],fov:49,roll:.03,dur:.9},{t:55.992,type:"bossTick",hand:"slow",power:.72},{t:55.992,type:"pulse",power:.6},{t:58.492,type:"bossTick",hand:"fast",power:.72},{t:58.492,type:"pulse",power:.6},{t:58.522,type:"echo",lane:0,dir:-1,power:.93},{t:60.992,type:"bossTick",hand:"slow",power:.72},{t:60.992,type:"pulse",power:.6},{t:61.492,type:"bossCamera",pos:[-7,6.6,15.4],look:[4,7,-10],fov:52,roll:-.04,dur:.7},{t:63.492,type:"bossTick",hand:"fast",power:.81},{t:63.492,type:"pulse",power:.69},{t:63.522,type:"echo",lane:7,dir:1,power:1.03},{t:63.59,type:"bossCamera",pos:[0,8.8,16.2],look:[0,6.4,-7],fov:50,roll:.03,dur:.6},{t:63.59,type:"bossGlitch",power:1.1},{t:64.656,type:"burst",lane:4,power:1.2},{t:65.215,type:"bossTick",hand:"fast",power:.85},{t:65.215,type:"pulse",power:.74},{t:65.245,type:"echo",lane:7,dir:1,power:1.09},{t:67.376,type:"bossTick",hand:"slow",power:.85},{t:67.376,type:"pulse",power:.74},{t:67.91,type:"motion",style:"orbit",amp:.16,speed:1.05,pitch:.08},{t:68.975,type:"burst",lane:6,power:1.2},{t:68.995,type:"wind",power:1.3},{t:69.005,type:"vibe",power:.86},{t:69.536,type:"bossTick",hand:"fast",power:.85},{t:69.536,type:"pulse",power:.74},{t:69.566,type:"echo",lane:0,dir:-1,power:1.09},{t:70.069,type:"bossCamera",pos:[0,7.6,15.4],look:[0,6.8,-9],fov:49,roll:0,dur:.7},{t:70.069,type:"bossGlitch",power:1.2},{t:70.6,type:"burst",lane:4,power:1.2},{t:70.62,type:"wind",power:1.3},{t:71.696,type:"bossTick",hand:"slow",power:.94},{t:71.696,type:"pulse",power:.83},{t:71.966,type:"pulse",power:.85},{t:73.856,type:"bossTick",hand:"fast",power:.94},{t:73.856,type:"pulse",power:.83},{t:73.886,type:"echo",lane:7,dir:1,power:1.19},{t:74.39,type:"bossCamera",pos:[-6,8.4,14.6],look:[3,6,-10],fov:50,roll:.035,dur:.85},{t:75.732,type:"burst",lane:2,power:1.2},{t:76.017,type:"bossTick",hand:"slow",power:.94},{t:76.017,type:"pulse",power:.83},{t:78.177,type:"bossTick",hand:"fast",power:.94},{t:78.177,type:"pulse",power:.83},{t:78.207,type:"echo",lane:0,dir:-1,power:1.19},{t:78.71,type:"bossCamera",pos:[6,9.2,15],look:[-3,6.2,-10],fov:51,roll:-.04,dur:.85},{t:79.575,type:"burst",lane:4,power:1.2},{t:79.595,type:"wind",power:1.3},{t:79.605,type:"vibe",power:.9},{t:80.337,type:"bossTick",hand:"slow",power:.94},{t:80.337,type:"pulse",power:.83},{t:80.607,type:"pulse",power:.85},{t:82.497,type:"bossTick",hand:"fast",power:.94},{t:82.497,type:"pulse",power:.83},{t:82.527,type:"echo",lane:7,dir:1,power:1.19},{t:83.03,type:"bossCamera",pos:[0,10.2,13.8],look:[0,4.6,-8],fov:53,roll:.02,dur:.85},{t:84.37,type:"burst",lane:1,power:1.2},{t:84.39,type:"wind",power:1.3},{t:84.657,type:"bossTick",hand:"slow",power:.94},{t:84.657,type:"pulse",power:.83},{t:86.818,type:"bossTick",hand:"fast",power:.94},{t:86.818,type:"pulse",power:.83},{t:86.848,type:"echo",lane:0,dir:-1,power:1.19},{t:87.35,type:"bossCamera",pos:[-8,8.2,14.2],look:[4,6,-9],fov:50,roll:-.03,dur:.65},{t:88.282,type:"burst",lane:3,power:1.2},{t:88.978,type:"bossTick",hand:"slow",power:.94},{t:88.978,type:"pulse",power:.83},{t:89.248,type:"pulse",power:.85},{t:89.449,type:"bossCamera",pos:[0,8.8,20.2],look:[0,5,-2],fov:48,roll:0,dur:.9},{t:89.449,type:"bossGlitch",power:.9},{t:90.035,type:"burst",lane:2,power:1.2},{t:90.055,type:"wind",power:1.3},{t:90.065,type:"vibe",power:1.15},{t:91.138,type:"bossTick",hand:"fast",power:.53},{t:91.138,type:"pulse",power:.41},{t:91.168,type:"echo",lane:7,dir:1,power:.71},{t:93.298,type:"bossTick",hand:"slow",power:.53},{t:93.298,type:"pulse",power:.41},{t:95.459,type:"bossTick",hand:"fast",power:.53},{t:95.459,type:"pulse",power:.41},{t:95.489,type:"echo",lane:0,dir:-1,power:.71},{t:97.438,type:"bossCamera",pos:[-8,9.6,18.4],look:[4,5.6,-6],fov:49,roll:.025,dur:1.1},{t:97.619,type:"bossTick",hand:"slow",power:.53},{t:97.619,type:"pulse",power:.41},{t:99.779,type:"bossTick",hand:"fast",power:.53},{t:99.779,type:"pulse",power:.41},{t:99.809,type:"echo",lane:7,dir:1,power:.71},{t:101.939,type:"bossTick",hand:"slow",power:.53},{t:101.939,type:"pulse",power:.41},{t:104.099,type:"bossTick",hand:"fast",power:.53},{t:104.099,type:"pulse",power:.41},{t:104.129,type:"echo",lane:0,dir:-1,power:.71},{t:105.429,type:"bossCamera",pos:[0,8,16],look:[0,6,-6],fov:48,roll:-.03,dur:.55},{t:105.429,type:"bossGlitch",power:.75},{t:106.26,type:"bossTick",hand:"slow",power:.88},{t:106.26,type:"pulse",power:.77},{t:106.53,type:"pulse",power:.85},{t:107.323,type:"burst",lane:5,power:1.2},{t:107.509,type:"bossCamera",pos:[0,9.4,15.4],look:[0,7,-8],fov:49,roll:.02,dur:.6},{t:107.509,type:"bossGlitch",power:1.15},{t:108.42,type:"bossTick",hand:"fast",power:.97},{t:108.42,type:"pulse",power:.86},{t:110.58,type:"bossTick",hand:"slow",power:.97},{t:110.58,type:"pulse",power:.86},{t:111.829,type:"bossCamera",pos:[-7,10.2,14.2],look:[0,5.2,-9],fov:51,roll:-.04,dur:.9},{t:111.829,type:"motion",style:"orbit",amp:.16,speed:1.05,pitch:.08},{t:112.74,type:"bossTick",hand:"fast",power:.97},{t:112.74,type:"pulse",power:.86},{t:114.9,type:"bossTick",hand:"slow",power:.97},{t:114.9,type:"pulse",power:.86},{t:115.17,type:"pulse",power:.85},{t:116.149,type:"bossCamera",pos:[5,8.2,13.2],look:[0,7,-10],fov:50,roll:.045,dur:.9},{t:117.061,type:"bossTick",hand:"fast",power:.97},{t:117.061,type:"pulse",power:.86},{t:119.221,type:"bossTick",hand:"slow",power:.97},{t:119.221,type:"pulse",power:.86},{t:120.469,type:"bossCamera",pos:[0,11.2,12.6],look:[0,5.8,-12],fov:52,roll:-.02,dur:.9},{t:121.381,type:"bossTick",hand:"fast",power:.97},{t:121.381,type:"pulse",power:.86},{t:123.541,type:"bossTick",hand:"slow",power:.97},{t:123.541,type:"pulse",power:.86},{t:123.811,type:"pulse",power:.85},{t:123.829,type:"bossCamera",pos:[0,9.8,14],look:[0,5.4,-10],fov:49,roll:.03,dur:.7},{t:123.829,type:"bossGlitch",power:1.25},{t:125.702,type:"bossTick",hand:"fast",power:1.02},{t:125.702,type:"pulse",power:.91},{t:127.862,type:"bossTick",hand:"slow",power:1.02},{t:127.862,type:"pulse",power:.91},{t:128.149,type:"bossCamera",pos:[-8,9.2,13],look:[0,6.2,-10],fov:51,roll:-.045,dur:.95},{t:128.511,type:"burst",lane:1,power:1.2},{t:128.531,type:"wind",power:1.3},{t:128.541,type:"vibe",power:.89},{t:130.022,type:"bossTick",hand:"fast",power:1.02},{t:130.022,type:"pulse",power:.91},{t:130.31,type:"motion",style:"clock",amp:.2,speed:1.2,pitch:.1},{t:132.182,type:"bossTick",hand:"slow",power:1.02},{t:132.182,type:"pulse",power:.91},{t:132.226,type:"burst",lane:0,power:1.2},{t:132.246,type:"wind",power:1.3},{t:132.256,type:"vibe",power:.85},{t:132.452,type:"pulse",power:.85},{t:132.469,type:"bossCamera",pos:[8,10,12.4],look:[0,6,-10],fov:50,roll:.05,dur:.95},{t:134.342,type:"bossTick",hand:"fast",power:1.02},{t:134.342,type:"pulse",power:.91},{t:136.503,type:"bossTick",hand:"slow",power:1.02},{t:136.503,type:"pulse",power:.91},{t:136.789,type:"bossCamera",pos:[0,7.4,11.2],look:[0,7,-12],fov:52,roll:-.03,dur:.9},{t:137.149,type:"burst",lane:2,power:1.2},{t:138.663,type:"bossTick",hand:"fast",power:1.02},{t:138.663,type:"pulse",power:.91},{t:140.823,type:"bossTick",hand:"slow",power:1.02},{t:140.823,type:"pulse",power:.91},{t:141.093,type:"pulse",power:.85},{t:141.829,type:"bossCamera",pos:[0,9,19],look:[0,5,0],fov:47,roll:0,dur:1.2},{t:141.829,type:"bossGlitch",power:.7},{t:141.829,type:"bossPhase",mode:"outro"},{t:142.983,type:"bossTick",hand:"fast",power:.46},{t:142.983,type:"pulse",power:.33},{t:143.013,type:"echo",lane:7,dir:1,power:.63},{t:145.143,type:"bossTick",hand:"slow",power:.46},{t:145.143,type:"pulse",power:.33},{t:147.304,type:"bossTick",hand:"fast",power:.46},{t:147.304,type:"pulse",power:.33},{t:147.334,type:"echo",lane:0,dir:-1,power:.63}],ghosts:[{t:28.542,lane:0,type:"sweep"},{t:28.622,lane:1,type:"sweep"},{t:28.702,lane:6,type:"sweep"},{t:28.782,lane:7,type:"sweep"},{t:33.492,lane:0,type:"bounce"},{t:33.622,lane:1,type:"bounce"},{t:33.752,lane:6,type:"bounce"},{t:33.882,lane:7,type:"bounce"},{t:48.542,lane:0,type:"sweep"},{t:48.622,lane:7,type:"sweep"},{t:53.492,lane:0,type:"bounce"},{t:53.622,lane:7,type:"bounce"},{t:61.542,lane:0,type:"sweep"},{t:61.622,lane:7,type:"sweep"},{t:63.64,lane:0,type:"sweep"},{t:63.72,lane:7,type:"sweep"},{t:66.492,lane:0,type:"bounce"},{t:66.622,lane:7,type:"bounce"},{t:67.91,lane:0,type:"bounce"},{t:68.04,lane:7,type:"bounce"},{t:70.119,lane:0,type:"sweep"},{t:70.199,lane:7,type:"sweep"},{t:74.389,lane:0,type:"bounce"},{t:74.519,lane:7,type:"bounce"},{t:89.499,lane:0,type:"sweep"},{t:89.579,lane:1,type:"sweep"},{t:89.659,lane:6,type:"sweep"},{t:89.739,lane:7,type:"sweep"},{t:93.769,lane:0,type:"bounce"},{t:93.899,lane:1,type:"bounce"},{t:94.029,lane:6,type:"bounce"},{t:94.159,lane:7,type:"bounce"},{t:105.479,lane:0,type:"sweep"},{t:105.559,lane:7,type:"sweep"},{t:109.749,lane:0,type:"bounce"},{t:109.879,lane:7,type:"bounce"},{t:141.879,lane:0,type:"sweep"},{t:141.959,lane:1,type:"sweep"},{t:142.039,lane:6,type:"sweep"},{t:142.119,lane:7,type:"sweep"},{t:146.149,lane:0,type:"bounce"},{t:146.279,lane:1,type:"bounce"},{t:146.409,lane:6,type:"bounce"},{t:146.539,lane:7,type:"bounce"}]},Pc=[{id:"cryout",title:"CRYOUT",shortTitle:"CRYOUT",artist:"ORIGINAL TRACK",bpm:100,duration:138.1,audio:"./audio/cryout.mp3",difficulty:"ADVANCED",laneLabel:"4 · 6 · 8",blurb:"Neon field • 360° camera • 8-lane climax",accent:"#5ee7ff",chart:af,fadeStart:131.4,fadeEnd:133.4},{id:"world",title:"WORLD YEARNING FOR AN END",shortTitle:"WORLD YEARNING",artist:"ORIGINAL TRACK",bpm:120,duration:143.47,audio:"./audio/world-yearning.mp3",difficulty:"HARD",laneLabel:"4 · 6",blurb:"City intro • diagonal lanes • thumb-hard patterns",accent:"#ffb45e",chart:rf,fadeStart:140.8,fadeEnd:142.9},{id:"chronostasis",title:"CHRONOSTASIS",shortTitle:"CHRONOSTASIS",artist:"ORIGINAL TRACK",bpm:99.4,duration:142.1,audio:"./audio/chronostasis.mp3",difficulty:"EXPERT",laneLabel:"4 · 6",blurb:"Clockwork skyline • frozen time • swinging pendulum",accent:"#ffd166",chart:sf,fadeStart:138.4,fadeEnd:140},{id:"untouchable",title:"THE UNTOUCHABLE OF f RA IA'S LAND",shortTitle:"THE UNTOUCHABLE",artist:"f RA IA",bpm:111.1,bpmLabel:"111 / 96 BPM",duration:147.54,audio:"./audio/untouchable.mp3",difficulty:"BOSS",laneLabel:"4 · 6 · 8",blurb:"Gothic nave • cathedral clock • free-flying notes",accent:"#ff3b5c",chart:of,boss:!0,fadeStart:139.8,fadeEnd:141.8}],lf="cryout",Go=Object.fromEntries(Pc.map(i=>[i.id,i]));const Ho="180",cf=0,vl=1,uf=2,Lc=1,ff=2,Vn=3,hi=0,pn=1,Wn=2,Yn=0,qn=1,dt=2,xl=3,Ml=4,hf=5,Ci=100,df=101,pf=102,mf=103,gf=104,_f=200,yf=201,vf=202,xf=203,Vs=204,Ws=205,Mf=206,Sf=207,bf=208,wf=209,Tf=210,Ef=211,Af=212,Cf=213,Rf=214,Xs=0,Ys=1,qs=2,fa=3,Zs=4,Ks=5,$s=6,js=7,Dc=0,Pf=1,Lf=2,ci=0,Ic=1,Uc=2,Nc=3,Vo=4,Fc=5,kc=6,Oc=7,Bc=300,ha=301,da=302,Js=303,Qs=304,$r=306,Fa=1e3,li=1001,eo=1002,Cn=1003,Df=1004,ar=1005,In=1006,ls=1007,Pi=1008,$n=1009,zc=1010,Gc=1011,ka=1012,Wo=1013,Ii=1014,Xn=1015,Zn=1016,Xo=1017,Yo=1018,Oa=1020,Hc=35902,Vc=35899,Wc=1021,Xc=1022,En=1023,Ba=1026,za=1027,Yc=1028,qo=1029,qc=1030,Zo=1031,Ko=1033,kr=33776,Or=33777,Br=33778,zr=33779,to=35840,no=35841,io=35842,ao=35843,ro=36196,so=37492,oo=37496,lo=37808,co=37809,uo=37810,fo=37811,ho=37812,po=37813,mo=37814,go=37815,_o=37816,yo=37817,vo=37818,xo=37819,Mo=37820,So=37821,bo=36492,wo=36494,To=36495,Eo=36283,Ao=36284,Co=36285,Ro=36286,If=3200,Uf=3201,Nf=0,Ff=1,oi="",dn="srgb",pa="srgb-linear",Vr="linear",Mt="srgb",Hi=7680,Sl=519,kf=512,Of=513,Bf=514,Zc=515,zf=516,Gf=517,Hf=518,Vf=519,Po=35044,bl="300 es",Un=2e3,Wr=2001;class va{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const r=a.indexOf(t);r!==-1&&a.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let r=0,s=a.length;r<s;r++)a[r].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],cs=Math.PI/180,Lo=180/Math.PI;function ui(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function ut(i,e,t){return Math.max(e,Math.min(t,i))}function Wf(i,e){return(i%e+e)%e}function us(i,e,t){return(1-t)*i+t*e}function Dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function St(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class je{constructor(e=0,t=0){je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),r=this.x-e.x,s=this.y-e.y;return this.x=r*n-s*a+e.x,this.y=r*a+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wa{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,r,s,o){let c=n[a+0],l=n[a+1],h=n[a+2],u=n[a+3];const d=r[s+0],p=r[s+1],_=r[s+2],v=r[s+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=v;return}if(u!==v||c!==d||l!==p||h!==_){let m=1-o;const f=c*d+l*p+h*_+u*v,T=f>=0?1:-1,E=1-f*f;if(E>Number.EPSILON){const P=Math.sqrt(E),R=Math.atan2(P,f*T);m=Math.sin(m*R)/P,o=Math.sin(o*R)/P}const b=o*T;if(c=c*m+d*b,l=l*m+p*b,h=h*m+_*b,u=u*m+v*b,m===1-o){const P=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=P,l*=P,h*=P,u*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,a,r,s){const o=n[a],c=n[a+1],l=n[a+2],h=n[a+3],u=r[s],d=r[s+1],p=r[s+2],_=r[s+3];return e[t]=o*_+h*u+c*p-l*d,e[t+1]=c*_+h*d+l*u-o*p,e[t+2]=l*_+h*p+o*d-c*u,e[t+3]=h*_-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,r=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(a/2),u=o(r/2),d=c(n/2),p=c(a/2),_=c(r/2);switch(s){case"XYZ":this._x=d*h*u+l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u-d*p*_;break;case"YXZ":this._x=d*h*u+l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u+d*p*_;break;case"ZXY":this._x=d*h*u-l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u-d*p*_;break;case"ZYX":this._x=d*h*u-l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u+d*p*_;break;case"YZX":this._x=d*h*u+l*p*_,this._y=l*p*u+d*h*_,this._z=l*h*_-d*p*u,this._w=l*h*u-d*p*_;break;case"XZY":this._x=d*h*u-l*p*_,this._y=l*p*u-d*h*_,this._z=l*h*_+d*p*u,this._w=l*h*u+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],r=t[8],s=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(s-a)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(r+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(s-a)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,r=e._z,s=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+s*o+a*l-r*c,this._y=a*h+s*c+r*o-n*l,this._z=r*h+s*l+n*c-a*o,this._w=s*h-n*o-a*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,r=this._z,s=this._w;let o=s*e._w+n*e._x+a*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=a,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*a+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=s*u+this._w*d,this._x=n*u+this._x*d,this._y=a*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*a,this.y=r[1]*t+r[4]*n+r[7]*a,this.z=r[2]*t+r[5]*n+r[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=e.elements,s=1/(r[3]*t+r[7]*n+r[11]*a+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*a+r[12])*s,this.y=(r[1]*t+r[5]*n+r[9]*a+r[13])*s,this.z=(r[2]*t+r[6]*n+r[10]*a+r[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,r=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*a-o*n),h=2*(o*t-r*a),u=2*(r*n-s*t);return this.x=t+c*l+s*u-o*h,this.y=n+c*h+o*l-r*u,this.z=a+c*u+r*h-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a,this.y=r[1]*t+r[5]*n+r[9]*a,this.z=r[2]*t+r[6]*n+r[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,r=e.z,s=t.x,o=t.y,c=t.z;return this.x=a*c-r*o,this.y=r*s-n*c,this.z=n*o-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fs.copy(this).projectOnVector(e),this.sub(fs)}reflect(e){return this.sub(fs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fs=new U,wl=new Wa;class it{constructor(e,t,n,a,r,s,o,c,l){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,c,l)}set(e,t,n,a,r,s,o,c,l){const h=this.elements;return h[0]=e,h[1]=a,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],_=n[8],v=a[0],m=a[3],f=a[6],T=a[1],E=a[4],b=a[7],P=a[2],R=a[5],C=a[8];return r[0]=s*v+o*T+c*P,r[3]=s*m+o*E+c*R,r[6]=s*f+o*b+c*C,r[1]=l*v+h*T+u*P,r[4]=l*m+h*E+u*R,r[7]=l*f+h*b+u*C,r[2]=d*v+p*T+_*P,r[5]=d*m+p*E+_*R,r[8]=d*f+p*b+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*s*h-t*o*l-n*r*h+n*o*c+a*r*l-a*s*c}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*s-o*l,d=o*c-h*r,p=l*r-s*c,_=t*u+n*d+a*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/_;return e[0]=u*v,e[1]=(a*l-h*n)*v,e[2]=(o*n-a*s)*v,e[3]=d*v,e[4]=(h*t-a*c)*v,e[5]=(a*r-o*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(s*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,r,s,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-a*l,a*c,-a*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(hs.makeScale(e,t)),this}rotate(e){return this.premultiply(hs.makeRotation(-e)),this}translate(e,t){return this.premultiply(hs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const hs=new it;function Kc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Xf(){const i=Xr("canvas");return i.style.display="block",i}const Tl={};function Ga(i){i in Tl||(Tl[i]=!0,console.warn(i))}function Yf(i,e,t){return new Promise(function(n,a){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const El=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Al=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qf(){const i={enabled:!0,workingColorSpace:pa,spaces:{},convert:function(a,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Mt&&(a.r=Kn(a.r),a.g=Kn(a.g),a.b=Kn(a.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[r].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Mt&&(a.r=la(a.r),a.g=la(a.g),a.b=la(a.b))),a},workingToColorSpace:function(a,r){return this.convert(a,this.workingColorSpace,r)},colorSpaceToWorking:function(a,r){return this.convert(a,r,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===oi?Vr:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,r=this.workingColorSpace){return a.fromArray(this.spaces[r].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,r,s){return a.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,r){return Ga("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,r)},toWorkingColorSpace:function(a,r){return Ga("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pa]:{primaries:e,whitePoint:n,transfer:Vr,toXYZ:El,fromXYZ:Al,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:dn},outputColorSpaceConfig:{drawingBufferColorSpace:dn}},[dn]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:El,fromXYZ:Al,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:dn}}}),i}const mt=qf();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function la(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Vi;class Zf{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vi===void 0&&(Vi=Xr("canvas")),Vi.width=e.width,Vi.height=e.height;const a=Vi.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=Vi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Xr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),r=a.data;for(let s=0;s<r.length;s++)r[s]=Kn(r[s]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kf=0;class $o{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=ui(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let r;if(Array.isArray(a)){r=[];for(let s=0,o=a.length;s<o;s++)a[s].isDataTexture?r.push(ds(a[s].image)):r.push(ds(a[s]))}else r=ds(a);n.url=r}return t||(e.images[this.uuid]=n),n}}function ds(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Zf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $f=0;const ps=new U;class ln extends va{constructor(e=ln.DEFAULT_IMAGE,t=ln.DEFAULT_MAPPING,n=li,a=li,r=In,s=Pi,o=En,c=$n,l=ln.DEFAULT_ANISOTROPY,h=oi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=ui(),this.name="",this.source=new $o(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ps).x}get height(){return this.source.getSize(ps).y}get depth(){return this.source.getSize(ps).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fa:e.x=e.x-Math.floor(e.x);break;case li:e.x=e.x<0?0:1;break;case eo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fa:e.y=e.y-Math.floor(e.y);break;case li:e.y=e.y<0?0:1;break;case eo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}ln.DEFAULT_IMAGE=null;ln.DEFAULT_MAPPING=Bc;ln.DEFAULT_ANISOTROPY=1;class Nt{constructor(e=0,t=0,n=0,a=1){Nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,r=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a+s[12]*r,this.y=s[1]*t+s[5]*n+s[9]*a+s[13]*r,this.z=s[2]*t+s[6]*n+s[10]*a+s[14]*r,this.w=s[3]*t+s[7]*n+s[11]*a+s[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,r;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],_=c[9],v=c[2],m=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,b=(p+1)/2,P=(f+1)/2,R=(h+d)/4,C=(u+v)/4,F=(_+m)/4;return E>b&&E>P?E<.01?(n=0,a=.707106781,r=.707106781):(n=Math.sqrt(E),a=R/n,r=C/n):b>P?b<.01?(n=.707106781,a=0,r=.707106781):(a=Math.sqrt(b),n=R/a,r=F/a):P<.01?(n=.707106781,a=.707106781,r=0):(r=Math.sqrt(P),n=C/r,a=F/r),this.set(n,a,r,t),this}let T=Math.sqrt((m-_)*(m-_)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(m-_)/T,this.y=(u-v)/T,this.z=(d-h)/T,this.w=Math.acos((l+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jf extends va{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);const a={width:e,height:t,depth:n.depth},r=new ln(a);this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,r=this.textures.length;a<r;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new $o(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rn extends jf{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class $c extends ln{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jf extends ln{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xa{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=r.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,bn):bn.fromBufferAttribute(r,s),bn.applyMatrix4(e.matrixWorld),this.expandByPoint(bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}const a=e.children;for(let r=0,s=a.length;r<s;r++)this.expandByObject(a[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bn),bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wa),sr.subVectors(this.max,wa),Wi.subVectors(e.a,wa),Xi.subVectors(e.b,wa),Yi.subVectors(e.c,wa),ti.subVectors(Xi,Wi),ni.subVectors(Yi,Xi),xi.subVectors(Wi,Yi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-xi.z,xi.y,ti.z,0,-ti.x,ni.z,0,-ni.x,xi.z,0,-xi.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-xi.y,xi.x,0];return!ms(t,Wi,Xi,Yi,sr)||(t=[1,0,0,0,1,0,0,0,1],!ms(t,Wi,Xi,Yi,sr))?!1:(or.crossVectors(ti,ni),t=[or.x,or.y,or.z],ms(t,Wi,Xi,Yi,sr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const On=[new U,new U,new U,new U,new U,new U,new U,new U],bn=new U,rr=new Xa,Wi=new U,Xi=new U,Yi=new U,ti=new U,ni=new U,xi=new U,wa=new U,sr=new U,or=new U,Mi=new U;function ms(i,e,t,n,a){for(let r=0,s=i.length-3;r<=s;r+=3){Mi.fromArray(i,r);const o=a.x*Math.abs(Mi.x)+a.y*Math.abs(Mi.y)+a.z*Math.abs(Mi.z),c=e.dot(Mi),l=t.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Qf=new Xa,Ta=new U,gs=new U;class Ya{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Qf.setFromPoints(e).getCenter(n);let a=0;for(let r=0,s=e.length;r<s;r++)a=Math.max(a,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ta.subVectors(e,this.center);const t=Ta.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Ta,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(gs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ta.copy(e.center).add(gs)),this.expandByPoint(Ta.copy(e.center).sub(gs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Bn=new U,_s=new U,lr=new U,ii=new U,ys=new U,cr=new U,vs=new U;class jo{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){_s.copy(e).add(t).multiplyScalar(.5),lr.copy(t).sub(e).normalize(),ii.copy(this.origin).sub(_s);const r=e.distanceTo(t)*.5,s=-this.direction.dot(lr),o=ii.dot(this.direction),c=-ii.dot(lr),l=ii.lengthSq(),h=Math.abs(1-s*s);let u,d,p,_;if(h>0)if(u=s*c-o,d=s*o-c,_=r*h,u>=0)if(d>=-_)if(d<=_){const v=1/h;u*=v,d*=v,p=u*(u+s*d+2*o)+d*(s*u+d+2*c)+l}else d=r,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-_?(u=Math.max(0,-(-s*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l):d<=_?(u=0,d=Math.min(Math.max(-r,-c),r),p=d*(d+2*c)+l):(u=Math.max(0,-(s*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),p=-u*u+d*(d+2*c)+l);else d=s>0?-r:r,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),a&&a.copy(_s).addScaledVector(lr,d),p}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),a=Bn.dot(Bn)-n*n,r=e.radius*e.radius;if(a>r)return null;const s=Math.sqrt(r-a),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,r,s,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,a=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,a=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),n>s||r>a||((r>n||isNaN(n))&&(n=r),(s<a||isNaN(a))&&(a=s),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>a)||((o>n||n!==n)&&(n=o),(c<a||a!==a)&&(a=c),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,a,r){ys.subVectors(t,e),cr.subVectors(n,e),vs.crossVectors(ys,cr);let s=this.direction.dot(vs),o;if(s>0){if(a)return null;o=1}else if(s<0)o=-1,s=-s;else return null;ii.subVectors(this.origin,e);const c=o*this.direction.dot(cr.crossVectors(ii,cr));if(c<0)return null;const l=o*this.direction.dot(ys.cross(ii));if(l<0||c+l>s)return null;const h=-o*ii.dot(vs);return h<0?null:this.at(h/s,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dt{constructor(e,t,n,a,r,s,o,c,l,h,u,d,p,_,v,m){Dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,r,s,o,c,l,h,u,d,p,_,v,m)}set(e,t,n,a,r,s,o,c,l,h,u,d,p,_,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=a,f[1]=r,f[5]=s,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=_,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Dt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/qi.setFromMatrixColumn(e,0).length(),r=1/qi.setFromMatrixColumn(e,1).length(),s=1/qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,r=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(a),l=Math.sin(a),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=s*h,p=s*u,_=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+_*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=_+p*l,t[10]=s*c}else if(e.order==="YXZ"){const d=c*h,p=c*u,_=l*h,v=l*u;t[0]=d+v*o,t[4]=_*o-p,t[8]=s*l,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=p*o-_,t[6]=v+d*o,t[10]=s*c}else if(e.order==="ZXY"){const d=c*h,p=c*u,_=l*h,v=l*u;t[0]=d-v*o,t[4]=-s*u,t[8]=_+p*o,t[1]=p+_*o,t[5]=s*h,t[9]=v-d*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const d=s*h,p=s*u,_=o*h,v=o*u;t[0]=c*h,t[4]=_*l-p,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=p*l-_,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const d=s*c,p=s*l,_=o*c,v=o*l;t[0]=c*h,t[4]=v-d*u,t[8]=_*u+p,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+_,t[10]=d-v*u}else if(e.order==="XZY"){const d=s*c,p=s*l,_=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=s*h,t[9]=p*u-_,t[2]=_*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eh,e,th)}lookAt(e,t,n){const a=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),ai.crossVectors(n,gn),ai.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),ai.crossVectors(n,gn)),ai.normalize(),ur.crossVectors(gn,ai),a[0]=ai.x,a[4]=ur.x,a[8]=gn.x,a[1]=ai.y,a[5]=ur.y,a[9]=gn.y,a[2]=ai.z,a[6]=ur.z,a[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,r=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],_=n[2],v=n[6],m=n[10],f=n[14],T=n[3],E=n[7],b=n[11],P=n[15],R=a[0],C=a[4],F=a[8],M=a[12],S=a[1],L=a[5],q=a[9],Q=a[13],ae=a[2],te=a[6],ie=a[10],ce=a[14],Z=a[3],_e=a[7],we=a[11],De=a[15];return r[0]=s*R+o*S+c*ae+l*Z,r[4]=s*C+o*L+c*te+l*_e,r[8]=s*F+o*q+c*ie+l*we,r[12]=s*M+o*Q+c*ce+l*De,r[1]=h*R+u*S+d*ae+p*Z,r[5]=h*C+u*L+d*te+p*_e,r[9]=h*F+u*q+d*ie+p*we,r[13]=h*M+u*Q+d*ce+p*De,r[2]=_*R+v*S+m*ae+f*Z,r[6]=_*C+v*L+m*te+f*_e,r[10]=_*F+v*q+m*ie+f*we,r[14]=_*M+v*Q+m*ce+f*De,r[3]=T*R+E*S+b*ae+P*Z,r[7]=T*C+E*L+b*te+P*_e,r[11]=T*F+E*q+b*ie+P*we,r[15]=T*M+E*Q+b*ce+P*De,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],r=e[12],s=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14],_=e[3],v=e[7],m=e[11],f=e[15];return _*(+r*c*u-a*l*u-r*o*d+n*l*d+a*o*p-n*c*p)+v*(+t*c*p-t*l*d+r*s*d-a*s*p+a*l*h-r*c*h)+m*(+t*l*u-t*o*p-r*s*u+n*s*p+r*o*h-n*l*h)+f*(-a*o*h-t*c*u+t*o*d+a*s*u-n*s*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],r=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],_=e[12],v=e[13],m=e[14],f=e[15],T=u*m*l-v*d*l+v*c*p-o*m*p-u*c*f+o*d*f,E=_*d*l-h*m*l-_*c*p+s*m*p+h*c*f-s*d*f,b=h*v*l-_*u*l+_*o*p-s*v*p-h*o*f+s*u*f,P=_*u*c-h*v*c-_*o*d+s*v*d+h*o*m-s*u*m,R=t*T+n*E+a*b+r*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=T*C,e[1]=(v*d*r-u*m*r-v*a*p+n*m*p+u*a*f-n*d*f)*C,e[2]=(o*m*r-v*c*r+v*a*l-n*m*l-o*a*f+n*c*f)*C,e[3]=(u*c*r-o*d*r-u*a*l+n*d*l+o*a*p-n*c*p)*C,e[4]=E*C,e[5]=(h*m*r-_*d*r+_*a*p-t*m*p-h*a*f+t*d*f)*C,e[6]=(_*c*r-s*m*r-_*a*l+t*m*l+s*a*f-t*c*f)*C,e[7]=(s*d*r-h*c*r+h*a*l-t*d*l-s*a*p+t*c*p)*C,e[8]=b*C,e[9]=(_*u*r-h*v*r-_*n*p+t*v*p+h*n*f-t*u*f)*C,e[10]=(s*v*r-_*o*r+_*n*l-t*v*l-s*n*f+t*o*f)*C,e[11]=(h*o*r-s*u*r-h*n*l+t*u*l+s*n*p-t*o*p)*C,e[12]=P*C,e[13]=(h*v*a-_*u*a+_*n*d-t*v*d-h*n*m+t*u*m)*C,e[14]=(_*o*a-s*v*a-_*n*c+t*v*c+s*n*m-t*o*m)*C,e[15]=(s*u*a-h*o*a+h*n*c-t*u*c-s*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,a=e.y,r=e.z;return t[0]*=n,t[4]*=a,t[8]*=r,t[1]*=n,t[5]*=a,t[9]*=r,t[2]*=n,t[6]*=a,t[10]*=r,t[3]*=n,t[7]*=a,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),r=1-n,s=e.x,o=e.y,c=e.z,l=r*s,h=r*o;return this.set(l*s+n,l*o-a*c,l*c+a*o,0,l*o+a*c,h*o+n,h*c-a*s,0,l*c-a*o,h*c+a*s,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,r,s){return this.set(1,n,r,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,r=t._x,s=t._y,o=t._z,c=t._w,l=r+r,h=s+s,u=o+o,d=r*l,p=r*h,_=r*u,v=s*h,m=s*u,f=o*u,T=c*l,E=c*h,b=c*u,P=n.x,R=n.y,C=n.z;return a[0]=(1-(v+f))*P,a[1]=(p+b)*P,a[2]=(_-E)*P,a[3]=0,a[4]=(p-b)*R,a[5]=(1-(d+f))*R,a[6]=(m+T)*R,a[7]=0,a[8]=(_+E)*C,a[9]=(m-T)*C,a[10]=(1-(d+v))*C,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let r=qi.set(a[0],a[1],a[2]).length();const s=qi.set(a[4],a[5],a[6]).length(),o=qi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(r=-r),e.x=a[12],e.y=a[13],e.z=a[14],wn.copy(this);const l=1/r,h=1/s,u=1/o;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=u,wn.elements[9]*=u,wn.elements[10]*=u,t.setFromRotationMatrix(wn),n.x=r,n.y=s,n.z=o,this}makePerspective(e,t,n,a,r,s,o=Un,c=!1){const l=this.elements,h=2*r/(t-e),u=2*r/(n-a),d=(t+e)/(t-e),p=(n+a)/(n-a);let _,v;if(c)_=r/(s-r),v=s*r/(s-r);else if(o===Un)_=-(s+r)/(s-r),v=-2*s*r/(s-r);else if(o===Wr)_=-s/(s-r),v=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,a,r,s,o=Un,c=!1){const l=this.elements,h=2/(t-e),u=2/(n-a),d=-(t+e)/(t-e),p=-(n+a)/(n-a);let _,v;if(c)_=1/(s-r),v=s/(s-r);else if(o===Un)_=-2/(s-r),v=-(s+r)/(s-r);else if(o===Wr)_=-1/(s-r),v=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const qi=new U,wn=new Dt,eh=new U(0,0,0),th=new U(1,1,1),ai=new U,ur=new U,gn=new U,Cl=new Dt,Rl=new Wa;class jn{constructor(e=0,t=0,n=0,a=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,r=a[0],s=a[4],o=a[8],c=a[1],l=a[5],h=a[9],u=a[2],d=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(ut(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ut(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Rl.setFromEuler(this),this.setFromQuaternion(Rl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class jc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nh=0;const Pl=new U,Zi=new Wa,zn=new Dt,fr=new U,Ea=new U,ih=new U,ah=new Wa,Ll=new U(1,0,0),Dl=new U(0,1,0),Il=new U(0,0,1),Ul={type:"added"},rh={type:"removed"},Ki={type:"childadded",child:null},xs={type:"childremoved",child:null};class Qt extends va{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=ui(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new U,t=new jn,n=new Wa,a=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Dt},normalMatrix:{value:new it}}),this.matrix=new Dt,this.matrixWorld=new Dt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.multiply(Zi),this}rotateOnWorldAxis(e,t){return Zi.setFromAxisAngle(e,t),this.quaternion.premultiply(Zi),this}rotateX(e){return this.rotateOnAxis(Ll,e)}rotateY(e){return this.rotateOnAxis(Dl,e)}rotateZ(e){return this.rotateOnAxis(Il,e)}translateOnAxis(e,t){return Pl.copy(e).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ll,e)}translateY(e){return this.translateOnAxis(Dl,e)}translateZ(e){return this.translateOnAxis(Il,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?fr.copy(e):fr.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Ea,fr,this.up):zn.lookAt(fr,Ea,this.up),this.quaternion.setFromRotationMatrix(zn),a&&(zn.extractRotation(a.matrixWorld),Zi.setFromRotationMatrix(zn),this.quaternion.premultiply(Zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ul),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(rh),xs.child=e,this.dispatchEvent(xs),xs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ul),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,e,ih),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ea,ah,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let r=0,s=a.length;r<s;r++)a[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(o=>({...o})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));a.material=o}else a.material=r(e.materials,this.material);if(this.children.length>0){a.children=[];for(let o=0;o<this.children.length;o++)a.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];a.animations.push(r(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),p=s(e.animations),_=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=a,n;function s(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}Qt.DEFAULT_UP=new U(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new U,Gn=new U,Ms=new U,Hn=new U,$i=new U,ji=new U,Nl=new U,Ss=new U,bs=new U,ws=new U,Ts=new Nt,Es=new Nt,As=new Nt;class xn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Tn.subVectors(e,t),a.cross(Tn);const r=a.lengthSq();return r>0?a.multiplyScalar(1/Math.sqrt(r)):a.set(0,0,0)}static getBarycoord(e,t,n,a,r){Tn.subVectors(a,t),Gn.subVectors(n,t),Ms.subVectors(e,t);const s=Tn.dot(Tn),o=Tn.dot(Gn),c=Tn.dot(Ms),l=Gn.dot(Gn),h=Gn.dot(Ms),u=s*l-o*o;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(l*c-o*h)*d,_=(s*h-o*c)*d;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,a,r,s,o,c){return this.getBarycoord(e,t,n,a,Hn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Hn.x),c.addScaledVector(s,Hn.y),c.addScaledVector(o,Hn.z),c)}static getInterpolatedAttribute(e,t,n,a,r,s){return Ts.setScalar(0),Es.setScalar(0),As.setScalar(0),Ts.fromBufferAttribute(e,t),Es.fromBufferAttribute(e,n),As.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Ts,r.x),s.addScaledVector(Es,r.y),s.addScaledVector(As,r.z),s}static isFrontFacing(e,t,n,a){return Tn.subVectors(n,t),Gn.subVectors(e,t),Tn.cross(Gn).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Tn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,r){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,a,r)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,r=this.c;let s,o;$i.subVectors(a,n),ji.subVectors(r,n),Ss.subVectors(e,n);const c=$i.dot(Ss),l=ji.dot(Ss);if(c<=0&&l<=0)return t.copy(n);bs.subVectors(e,a);const h=$i.dot(bs),u=ji.dot(bs);if(h>=0&&u<=h)return t.copy(a);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return s=c/(c-h),t.copy(n).addScaledVector($i,s);ws.subVectors(e,r);const p=$i.dot(ws),_=ji.dot(ws);if(_>=0&&p<=_)return t.copy(r);const v=p*l-c*_;if(v<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(ji,o);const m=h*_-p*u;if(m<=0&&u-h>=0&&p-_>=0)return Nl.subVectors(r,a),o=(u-h)/(u-h+(p-_)),t.copy(a).addScaledVector(Nl,o);const f=1/(m+v+d);return s=v*f,o=d*f,t.copy(n).addScaledVector($i,s).addScaledVector(ji,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Jc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},hr={h:0,s:0,l:0};function Cs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=dn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=mt.workingColorSpace){if(e=Wf(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,s=2*n-r;this.r=Cs(s,r,e+1/3),this.g=Cs(s,r,e),this.b=Cs(s,r,e-1/3)}return mt.colorSpaceToWorking(this,a),this}setStyle(e,t=dn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const s=a[1],o=a[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=a[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=dn){const n=Jc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=dn){return mt.workingToColorSpace(jt.copy(this),e),Math.round(ut(jt.r*255,0,255))*65536+Math.round(ut(jt.g*255,0,255))*256+Math.round(ut(jt.b*255,0,255))}getHexString(e=dn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.workingToColorSpace(jt.copy(this),t);const n=jt.r,a=jt.g,r=jt.b,s=Math.max(n,a,r),o=Math.min(n,a,r);let c,l;const h=(o+s)/2;if(o===s)c=0,l=0;else{const u=s-o;switch(l=h<=.5?u/(s+o):u/(2-s-o),s){case n:c=(a-r)/u+(a<r?6:0);break;case a:c=(r-n)/u+2;break;case r:c=(n-a)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=mt.workingColorSpace){return mt.workingToColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=dn){mt.workingToColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,a=jt.b;return e!==dn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(hr);const n=us(ri.h,hr.h,t),a=us(ri.s,hr.s,t),r=us(ri.l,hr.l,t);return this.setHSL(n,a,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*a,this.g=r[1]*t+r[4]*n+r[7]*a,this.b=r[2]*t+r[5]*n+r[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new He;He.NAMES=Jc;let sh=0;class ki extends va{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sh++}),this.uuid=ui(),this.name="",this.type="Material",this.blending=qn,this.side=hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Vs,this.blendDst=Ws,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qn&&(n.blending=this.blending),this.side!==hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Vs&&(n.blendSrc=this.blendSrc),this.blendDst!==Ws&&(n.blendDst=this.blendDst),this.blendEquation!==Ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(r){const s=[];for(const o in r){const c=r[o];delete c.metadata,s.push(c)}return s}if(t){const r=a(e.textures),s=a(e.images);r.length>0&&(n.textures=r),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let r=0;r!==a;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pn extends ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=Dc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ft=new U,dr=new je;let oh=0;class mn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Po,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,r=this.itemSize;a<r;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXY(t,dr.x,dr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix3(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),a=St(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),a=St(a,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Po&&(e.usage=this.usage),e}}class Qc extends mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class eu extends mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ot extends mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let lh=0;const yn=new Dt,Rs=new Qt,Ji=new U,_n=new Xa,Aa=new Xa,Vt=new U;class en extends va{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lh++}),this.uuid=ui(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Kc(e)?eu:Qc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yn.makeRotationFromQuaternion(e),this.applyMatrix4(yn),this}rotateX(e){return yn.makeRotationX(e),this.applyMatrix4(yn),this}rotateY(e){return yn.makeRotationY(e),this.applyMatrix4(yn),this}rotateZ(e){return yn.makeRotationZ(e),this.applyMatrix4(yn),this}translate(e,t,n){return yn.makeTranslation(e,t,n),this.applyMatrix4(yn),this}scale(e,t,n){return yn.makeScale(e,t,n),this.applyMatrix4(yn),this}lookAt(e){return Rs.lookAt(e),Rs.updateMatrix(),this.applyMatrix4(Rs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,r=e.length;a<r;a++){const s=e[a];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ot(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const r=e[a];t.setXYZ(a,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const r=t[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Vt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Vt),Vt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Vt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,s=t.length;r<s;r++){const o=t[r];Aa.setFromBufferAttribute(o),this.morphTargetsRelative?(Vt.addVectors(_n.min,Aa.min),_n.expandByPoint(Vt),Vt.addVectors(_n.max,Aa.max),_n.expandByPoint(Vt)):(_n.expandByPoint(Aa.min),_n.expandByPoint(Aa.max))}_n.getCenter(n);let a=0;for(let r=0,s=e.count;r<s;r++)Vt.fromBufferAttribute(e,r),a=Math.max(a,n.distanceToSquared(Vt));if(t)for(let r=0,s=t.length;r<s;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Vt.fromBufferAttribute(o,l),c&&(Ji.fromBufferAttribute(e,l),Vt.add(Ji)),a=Math.max(a,n.distanceToSquared(Vt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mn(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<n.count;F++)o[F]=new U,c[F]=new U;const l=new U,h=new U,u=new U,d=new je,p=new je,_=new je,v=new U,m=new U;function f(F,M,S){l.fromBufferAttribute(n,F),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,F),p.fromBufferAttribute(r,M),_.fromBufferAttribute(r,S),h.sub(l),u.sub(l),p.sub(d),_.sub(d);const L=1/(p.x*_.y-_.x*p.y);isFinite(L)&&(v.copy(h).multiplyScalar(_.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-_.x).multiplyScalar(L),o[F].add(v),o[M].add(v),o[S].add(v),c[F].add(m),c[M].add(m),c[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let F=0,M=T.length;F<M;++F){const S=T[F],L=S.start,q=S.count;for(let Q=L,ae=L+q;Q<ae;Q+=3)f(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const E=new U,b=new U,P=new U,R=new U;function C(F){P.fromBufferAttribute(a,F),R.copy(P);const M=o[F];E.copy(M),E.sub(P.multiplyScalar(P.dot(M))).normalize(),b.crossVectors(R,M);const L=b.dot(c[F])<0?-1:1;s.setXYZW(F,E.x,E.y,E.z,L)}for(let F=0,M=T.length;F<M;++F){const S=T[F],L=S.start,q=S.count;for(let Q=L,ae=L+q;Q<ae;Q+=3)C(e.getX(Q+0)),C(e.getX(Q+1)),C(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const a=new U,r=new U,s=new U,o=new U,c=new U,l=new U,h=new U,u=new U;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);a.fromBufferAttribute(t,_),r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,m),h.subVectors(s,r),u.subVectors(a,r),h.cross(u),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)a.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,r),u.subVectors(a,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Vt.fromBufferAttribute(e,t),Vt.normalize(),e.setXYZ(t,Vt.x,Vt.y,Vt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let p=0,_=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?p=c[v]*o.data.stride+o.offset:p=c[v]*h;for(let f=0;f<h;f++)d[_++]=l[p++]}return new mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new en,n=this.index.array,a=this.attributes;for(const o in a){const c=a[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const d=l[h],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const a={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(a[c]=h,r=!0)}r&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const l in a){const h=a[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,h=s.length;l<h;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fl=new Dt,Si=new jo,pr=new Ya,kl=new U,mr=new U,gr=new U,_r=new U,Ps=new U,yr=new U,Ol=new U,vr=new U;class Wt extends Qt{constructor(e=new en,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,r=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const o=this.morphTargetInfluences;if(r&&o){yr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Ps.fromBufferAttribute(u,e),s?yr.addScaledVector(Ps,h):yr.addScaledVector(Ps.sub(t),h))}t.add(yr)}return t}raycast(e,t){const n=this.geometry,a=this.material,r=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(r),Si.copy(e.ray).recast(e.near),!(pr.containsPoint(Si.origin)===!1&&(Si.intersectSphere(pr,kl)===null||Si.origin.distanceToSquared(kl)>(e.far-e.near)**2))&&(Fl.copy(r).invert(),Si.copy(e.ray).applyMatrix4(Fl),!(n.boundingBox!==null&&Si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Si)))}_computeIntersections(e,t,n){let a;const r=this.geometry,s=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,v=d.length;_<v;_++){const m=d[_],f=s[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let b=T,P=E;b<P;b+=3){const R=o.getX(b),C=o.getX(b+1),F=o.getX(b+2);a=xr(this,f,e,n,l,h,u,R,C,F),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const _=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){const T=o.getX(m),E=o.getX(m+1),b=o.getX(m+2);a=xr(this,s,e,n,l,h,u,T,E,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(c!==void 0)if(Array.isArray(s))for(let _=0,v=d.length;_<v;_++){const m=d[_],f=s[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let b=T,P=E;b<P;b+=3){const R=b,C=b+1,F=b+2;a=xr(this,f,e,n,l,h,u,R,C,F),a&&(a.faceIndex=Math.floor(b/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const _=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);for(let m=_,f=v;m<f;m+=3){const T=m,E=m+1,b=m+2;a=xr(this,s,e,n,l,h,u,T,E,b),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function ch(i,e,t,n,a,r,s,o){let c;if(e.side===pn?c=n.intersectTriangle(s,r,a,!0,o):c=n.intersectTriangle(a,r,s,e.side===hi,o),c===null)return null;vr.copy(o),vr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(vr);return l<t.near||l>t.far?null:{distance:l,point:vr.clone(),object:i}}function xr(i,e,t,n,a,r,s,o,c,l){i.getVertexPosition(o,mr),i.getVertexPosition(c,gr),i.getVertexPosition(l,_r);const h=ch(i,e,t,n,mr,gr,_r,Ol);if(h){const u=new U;xn.getBarycoord(Ol,mr,gr,_r,u),a&&(h.uv=xn.getInterpolatedAttribute(a,o,c,l,u,new je)),r&&(h.uv1=xn.getInterpolatedAttribute(r,o,c,l,u,new je)),s&&(h.normal=xn.getInterpolatedAttribute(s,o,c,l,u,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new U,materialIndex:0};xn.getNormal(mr,gr,_r,d.normal),h.face=d,h.barycoord=u}return h}class Ui extends en{constructor(e=1,t=1,n=1,a=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:r,depthSegments:s};const o=this;a=Math.floor(a),r=Math.floor(r),s=Math.floor(s);const c=[],l=[],h=[],u=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,s,r,0),_("z","y","x",1,-1,n,t,-e,s,r,1),_("x","z","y",1,1,e,n,t,a,s,2),_("x","z","y",1,-1,e,n,-t,a,s,3),_("x","y","z",1,-1,e,t,n,a,r,4),_("x","y","z",-1,-1,e,t,-n,a,r,5),this.setIndex(c),this.setAttribute("position",new Ot(l,3)),this.setAttribute("normal",new Ot(h,3)),this.setAttribute("uv",new Ot(u,2));function _(v,m,f,T,E,b,P,R,C,F,M){const S=b/C,L=P/F,q=b/2,Q=P/2,ae=R/2,te=C+1,ie=F+1;let ce=0,Z=0;const _e=new U;for(let we=0;we<ie;we++){const De=we*L-Q;for(let at=0;at<te;at++){const gt=at*S-q;_e[v]=gt*T,_e[m]=De*E,_e[f]=ae,l.push(_e.x,_e.y,_e.z),_e[v]=0,_e[m]=0,_e[f]=R>0?1:-1,h.push(_e.x,_e.y,_e.z),u.push(at/C),u.push(1-we/F),ce+=1}}for(let we=0;we<F;we++)for(let De=0;De<C;De++){const at=d+De+te*we,gt=d+De+te*(we+1),bt=d+(De+1)+te*(we+1),ct=d+(De+1)+te*we;c.push(at,gt,ct),c.push(gt,bt,ct),Z+=6}o.addGroup(p,Z,M),p+=Z,d+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ma(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function sn(i){const e={};for(let t=0;t<i.length;t++){const n=ma(i[t]);for(const a in n)e[a]=n[a]}return e}function uh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:mt.workingColorSpace}const Ha={clone:ma,merge:sn};var fh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fh,this.fragmentShader=hh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ma(e.uniforms),this.uniformsGroups=uh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class nu extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Dt,this.projectionMatrix=new Dt,this.projectionMatrixInverse=new Dt,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new U,Bl=new je,zl=new je;class vn extends nu{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lo*2*Math.atan(Math.tan(cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(si.x,si.y).multiplyScalar(-e/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-e/si.z)}getViewSize(e,t){return this.getViewBounds(e,Bl,zl),t.subVectors(zl,Bl)}setViewOffset(e,t,n,a,r,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(cs*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,r=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;r+=s.offsetX*a/c,t-=s.offsetY*n/l,a*=s.width/c,n*=s.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qi=-90,ea=1;class dh extends Qt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new vn(Qi,ea,e,t);a.layers=this.layers,this.add(a);const r=new vn(Qi,ea,e,t);r.layers=this.layers,this.add(r);const s=new vn(Qi,ea,e,t);s.layers=this.layers,this.add(s);const o=new vn(Qi,ea,e,t);o.layers=this.layers,this.add(o);const c=new vn(Qi,ea,e,t);c.layers=this.layers,this.add(c);const l=new vn(Qi,ea,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,r,s,o,c]=t;for(const l of t)this.remove(l);if(e===Un)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,r),e.setRenderTarget(n,1,a),e.render(t,s),e.setRenderTarget(n,2,a),e.render(t,o),e.setRenderTarget(n,3,a),e.render(t,c),e.setRenderTarget(n,4,a),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,a),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class iu extends ln{constructor(e=[],t=ha,n,a,r,s,o,c,l,h){super(e,t,n,a,r,s,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ph extends Rn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new iu(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Ui(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:ma(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Yn});r.uniforms.tEquirect.value=t;const s=new Wt(a,r),o=t.minFilter;return t.minFilter===Pi&&(t.minFilter=In),new dh(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const r=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,a);e.setRenderTarget(r)}}class Jt extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mh={type:"move"};class Ls{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,r=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),f=this._getHandJoint(l,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&r!==null&&(a=r),a!==null&&(o.matrix.fromArray(a.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,a.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(a.linearVelocity)):o.hasLinearVelocity=!1,a.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(a.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(mh)))}return o!==null&&(o.visible=a!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Jo{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new Jo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class gh extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class _h{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Po,this.updateRanges=[],this.version=0,this.uuid=ui()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let a=0,r=this.stride;a<r;a++)this.array[e+a]=t.array[n+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ui()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const rn=new U;class Yr{constructor(e,t,n,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),a=St(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this}setXYZW(e,t,n,a,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),a=St(a,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return new mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[a+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class vt extends ki{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ta;const Ca=new U,na=new U,ia=new U,aa=new je,Ra=new je,au=new Dt,Mr=new U,Pa=new U,Sr=new U,Gl=new je,Ds=new je,Hl=new je;class xt extends Qt{constructor(e=new vt){if(super(),this.isSprite=!0,this.type="Sprite",ta===void 0){ta=new en;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _h(t,5);ta.setIndex([0,1,2,0,2,3]),ta.setAttribute("position",new Yr(n,3,0,!1)),ta.setAttribute("uv",new Yr(n,2,3,!1))}this.geometry=ta,this.material=e,this.center=new je(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),na.setFromMatrixScale(this.matrixWorld),au.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ia.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&na.multiplyScalar(-ia.z);const n=this.material.rotation;let a,r;n!==0&&(r=Math.cos(n),a=Math.sin(n));const s=this.center;br(Mr.set(-.5,-.5,0),ia,s,na,a,r),br(Pa.set(.5,-.5,0),ia,s,na,a,r),br(Sr.set(.5,.5,0),ia,s,na,a,r),Gl.set(0,0),Ds.set(1,0),Hl.set(1,1);let o=e.ray.intersectTriangle(Mr,Pa,Sr,!1,Ca);if(o===null&&(br(Pa.set(-.5,.5,0),ia,s,na,a,r),Ds.set(0,1),o=e.ray.intersectTriangle(Mr,Sr,Pa,!1,Ca),o===null))return;const c=e.ray.origin.distanceTo(Ca);c<e.near||c>e.far||t.push({distance:c,point:Ca.clone(),uv:xn.getInterpolation(Ca,Mr,Pa,Sr,Gl,Ds,Hl,new je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function br(i,e,t,n,a,r){aa.subVectors(i,t).addScalar(.5).multiply(n),a!==void 0?(Ra.x=r*aa.x-a*aa.y,Ra.y=a*aa.x+r*aa.y):Ra.copy(aa),i.copy(e),i.x+=Ra.x,i.y+=Ra.y,i.applyMatrix4(au)}const Is=new U,yh=new U,vh=new it;class Ei{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=Is.subVectors(n,t).cross(yh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Is),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/a;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vh.getNormalMatrix(e),a=this.coplanarPoint(Is).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const bi=new Ya,xh=new je(.5,.5),wr=new U;class ru{constructor(e=new Ei,t=new Ei,n=new Ei,a=new Ei,r=new Ei,s=new Ei){this.planes=[e,t,n,a,r,s]}set(e,t,n,a,r,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(a),o[4].copy(r),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Un,n=!1){const a=this.planes,r=e.elements,s=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],p=r[7],_=r[8],v=r[9],m=r[10],f=r[11],T=r[12],E=r[13],b=r[14],P=r[15];if(a[0].setComponents(l-s,p-h,f-_,P-T).normalize(),a[1].setComponents(l+s,p+h,f+_,P+T).normalize(),a[2].setComponents(l+o,p+u,f+v,P+E).normalize(),a[3].setComponents(l-o,p-u,f-v,P-E).normalize(),n)a[4].setComponents(c,d,m,b).normalize(),a[5].setComponents(l-c,p-d,f-m,P-b).normalize();else if(a[4].setComponents(l-c,p-d,f-m,P-b).normalize(),t===Un)a[5].setComponents(l+c,p+d,f+m,P+b).normalize();else if(t===Wr)a[5].setComponents(c,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(bi)}intersectsSprite(e){bi.center.set(0,0,0);const t=xh.distanceTo(e.center);return bi.radius=.7071067811865476+t,bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(bi)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(wr.x=a.normal.x>0?e.max.x:e.min.x,wr.y=a.normal.y>0?e.max.y:e.min.y,wr.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(wr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class su extends ki{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const qr=new U,Zr=new U,Vl=new Dt,La=new jo,Tr=new Ya,Us=new U,Wl=new U;class Mh extends Qt{constructor(e=new en,t=new su){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,r=t.count;a<r;a++)qr.fromBufferAttribute(t,a-1),Zr.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=qr.distanceTo(Zr);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,r=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(a),Tr.radius+=r,e.ray.intersectsSphere(Tr)===!1)return;Vl.copy(a).invert(),La.copy(e.ray).applyMatrix4(Vl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,s.start),_=Math.min(h.count,s.start+s.count);for(let v=p,m=_-1;v<m;v+=l){const f=h.getX(v),T=h.getX(v+1),E=Er(this,e,La,c,f,T,v);E&&t.push(E)}if(this.isLineLoop){const v=h.getX(_-1),m=h.getX(p),f=Er(this,e,La,c,v,m,_-1);f&&t.push(f)}}else{const p=Math.max(0,s.start),_=Math.min(d.count,s.start+s.count);for(let v=p,m=_-1;v<m;v+=l){const f=Er(this,e,La,c,v,v+1,v);f&&t.push(f)}if(this.isLineLoop){const v=Er(this,e,La,c,_-1,p,_-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Er(i,e,t,n,a,r,s){const o=i.geometry.attributes.position;if(qr.fromBufferAttribute(o,a),Zr.fromBufferAttribute(o,r),t.distanceSqToSegment(qr,Zr,Us,Wl)>n)return;Us.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Us);if(!(l<e.near||l>e.far))return{distance:l,point:Wl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Xl=new U,Yl=new U;class Sh extends Mh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let a=0,r=t.count;a<r;a+=2)Xl.fromBufferAttribute(t,a),Yl.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+Xl.distanceTo(Yl);e.setAttribute("lineDistance",new Ot(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Do extends ki{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ql=new Dt,Io=new jo,Ar=new Ya,Cr=new U;class Zl extends Qt{constructor(e=new en,t=new Do){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,r=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ar.copy(n.boundingSphere),Ar.applyMatrix4(a),Ar.radius+=r,e.ray.intersectsSphere(Ar)===!1)return;ql.copy(a).invert(),Io.copy(e.ray).applyMatrix4(ql);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,s.start),p=Math.min(l.count,s.start+s.count);for(let _=d,v=p;_<v;_++){const m=l.getX(_);Cr.fromBufferAttribute(u,m),Kl(Cr,m,c,a,e,t,this)}}else{const d=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let _=d,v=p;_<v;_++)Cr.fromBufferAttribute(u,_),Kl(Cr,_,c,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=a.length;r<s;r++){const o=a[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Kl(i,e,t,n,a,r,s){const o=Io.distanceSqToPoint(i);if(o<t){const c=new U;Io.closestPointToPoint(i,c),c.applyMatrix4(n);const l=a.ray.origin.distanceTo(c);if(l<a.near||l>a.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class bh extends ln{constructor(e,t,n,a,r,s,o,c,l){super(e,t,n,a,r,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ou extends ln{constructor(e,t,n=Ii,a,r,s,o=Cn,c=Cn,l,h=Ba,u=1){if(h!==Ba&&h!==za)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:u};super(d,a,r,s,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $o(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class lu extends ln{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class jr extends en{constructor(e=[],t=[],n=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:a};const r=[],s=[];o(a),l(n),h(),this.setAttribute("position",new Ot(r,3)),this.setAttribute("normal",new Ot(r.slice(),3)),this.setAttribute("uv",new Ot(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function o(T){const E=new U,b=new U,P=new U;for(let R=0;R<t.length;R+=3)p(t[R+0],E),p(t[R+1],b),p(t[R+2],P),c(E,b,P,T)}function c(T,E,b,P){const R=P+1,C=[];for(let F=0;F<=R;F++){C[F]=[];const M=T.clone().lerp(b,F/R),S=E.clone().lerp(b,F/R),L=R-F;for(let q=0;q<=L;q++)q===0&&F===R?C[F][q]=M:C[F][q]=M.clone().lerp(S,q/L)}for(let F=0;F<R;F++)for(let M=0;M<2*(R-F)-1;M++){const S=Math.floor(M/2);M%2===0?(d(C[F][S+1]),d(C[F+1][S]),d(C[F][S])):(d(C[F][S+1]),d(C[F+1][S+1]),d(C[F+1][S]))}}function l(T){const E=new U;for(let b=0;b<r.length;b+=3)E.x=r[b+0],E.y=r[b+1],E.z=r[b+2],E.normalize().multiplyScalar(T),r[b+0]=E.x,r[b+1]=E.y,r[b+2]=E.z}function h(){const T=new U;for(let E=0;E<r.length;E+=3){T.x=r[E+0],T.y=r[E+1],T.z=r[E+2];const b=m(T)/2/Math.PI+.5,P=f(T)/Math.PI+.5;s.push(b,1-P)}_(),u()}function u(){for(let T=0;T<s.length;T+=6){const E=s[T+0],b=s[T+2],P=s[T+4],R=Math.max(E,b,P),C=Math.min(E,b,P);R>.9&&C<.1&&(E<.2&&(s[T+0]+=1),b<.2&&(s[T+2]+=1),P<.2&&(s[T+4]+=1))}}function d(T){r.push(T.x,T.y,T.z)}function p(T,E){const b=T*3;E.x=e[b+0],E.y=e[b+1],E.z=e[b+2]}function _(){const T=new U,E=new U,b=new U,P=new U,R=new je,C=new je,F=new je;for(let M=0,S=0;M<r.length;M+=9,S+=6){T.set(r[M+0],r[M+1],r[M+2]),E.set(r[M+3],r[M+4],r[M+5]),b.set(r[M+6],r[M+7],r[M+8]),R.set(s[S+0],s[S+1]),C.set(s[S+2],s[S+3]),F.set(s[S+4],s[S+5]),P.copy(T).add(E).add(b).divideScalar(3);const L=m(P);v(R,S+0,T,L),v(C,S+2,E,L),v(F,S+4,b,L)}}function v(T,E,b,P){P<0&&T.x===1&&(s[E]=T.x-1),b.x===0&&b.z===0&&(s[E]=P/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function f(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.vertices,e.indices,e.radius,e.details)}}class Qo extends jr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,a=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Qo(e.radius,e.detail)}}class el extends jr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new el(e.radius,e.detail)}}class Li extends en{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const r=e/2,s=t/2,o=Math.floor(n),c=Math.floor(a),l=o+1,h=c+1,u=e/o,d=t/c,p=[],_=[],v=[],m=[];for(let f=0;f<h;f++){const T=f*d-s;for(let E=0;E<l;E++){const b=E*u-r;_.push(b,-T,0),v.push(0,0,1),m.push(E/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let T=0;T<o;T++){const E=T+l*f,b=T+l*(f+1),P=T+1+l*(f+1),R=T+1+l*f;p.push(E,b,R),p.push(b,P,R)}this.setIndex(p),this.setAttribute("position",new Ot(_,3)),this.setAttribute("normal",new Ot(v,3)),this.setAttribute("uv",new Ot(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.width,e.height,e.widthSegments,e.heightSegments)}}class tl extends en{constructor(e=1,t=.4,n=12,a=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:a,arc:r},n=Math.floor(n),a=Math.floor(a);const s=[],o=[],c=[],l=[],h=new U,u=new U,d=new U;for(let p=0;p<=n;p++)for(let _=0;_<=a;_++){const v=_/a*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(v),u.y=(e+t*Math.cos(m))*Math.sin(v),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(v),h.y=e*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(_/a),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=a;_++){const v=(a+1)*p+_-1,m=(a+1)*(p-1)+_-1,f=(a+1)*(p-1)+_,T=(a+1)*p+_;s.push(v,m,T),s.push(m,f,T)}this.setIndex(s),this.setAttribute("position",new Ot(o,3)),this.setAttribute("normal",new Ot(c,3)),this.setAttribute("uv",new Ot(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class wh extends on{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Th extends ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=If,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Eh extends ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class cu extends nu{constructor(e=-1,t=1,n=1,a=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let r=n-e,s=n+e,o=a+t,c=a-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ah extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ch{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Rh extends Sh{constructor(e=10,t=10,n=4473924,a=8947848){n=new He(n),a=new He(a);const r=t/2,s=e/t,o=e/2,c=[],l=[];for(let d=0,p=0,_=-o;d<=t;d++,_+=s){c.push(-o,0,_,o,0,_),c.push(_,0,-o,_,0,o);const v=d===r?n:a;v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3,v.toArray(l,p),p+=3}const h=new en;h.setAttribute("position",new Ot(c,3)),h.setAttribute("color",new Ot(l,3));const u=new su({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function $l(i,e,t,n){const a=Ph(n);switch(t){case Wc:return i*e;case Yc:return i*e/a.components*a.byteLength;case qo:return i*e/a.components*a.byteLength;case qc:return i*e*2/a.components*a.byteLength;case Zo:return i*e*2/a.components*a.byteLength;case Xc:return i*e*3/a.components*a.byteLength;case En:return i*e*4/a.components*a.byteLength;case Ko:return i*e*4/a.components*a.byteLength;case kr:case Or:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case no:case ao:return Math.max(i,16)*Math.max(e,8)/4;case to:case io:return Math.max(i,8)*Math.max(e,8)/2;case ro:case so:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case oo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case co:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case uo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ho:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case po:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case mo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case xo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Mo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case So:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case bo:case wo:case To:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Eo:case Ao:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Co:case Ro:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ph(i){switch(i){case $n:case zc:return{byteLength:1,components:1};case ka:case Gc:case Zn:return{byteLength:2,components:1};case Xo:case Yo:return{byteLength:2,components:4};case Ii:case Wo:case Xn:return{byteLength:4,components:1};case Hc:case Vc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ho}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ho);function uu(){let i=null,e=!1,t=null,n=null;function a(r,s){t(r,s),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Lh(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<u.length;p++){const _=u[d],v=u[p];v.start<=_.start+_.count+1?_.count=Math.max(_.count,v.start+v.count-_.start):(++d,u[d]=v)}u.length=d+1;for(let p=0,_=u.length;p<_;p++){const v=u[p];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function a(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:a,remove:r,update:s}}var Dh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ih=`#ifdef USE_ALPHAHASH
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
#endif`,Uh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Oh=`#ifdef USE_AOMAP
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
#endif`,Bh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zh=`#ifdef USE_BATCHING
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
#endif`,Gh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xh=`#ifdef USE_IRIDESCENCE
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
#endif`,Yh=`#ifdef USE_BUMPMAP
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
#endif`,qh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$h=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ed=`#if defined( USE_COLOR_ALPHA )
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
#endif`,td=`#define PI 3.141592653589793
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
} // validated`,nd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,id=`vec3 transformedNormal = objectNormal;
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
#endif`,ad=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,od=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ld="gl_FragColor = linearToOutputTexel( gl_FragColor );",cd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ud=`#ifdef USE_ENVMAP
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
#endif`,fd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pd=`#ifdef USE_ENVMAP
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
#endif`,md=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_d=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vd=`#ifdef USE_GRADIENTMAP
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
}`,xd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Md=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bd=`uniform bool receiveShadow;
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
#endif`,wd=`#ifdef USE_ENVMAP
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
#endif`,Td=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ed=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ad=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rd=`PhysicalMaterial material;
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
#endif`,Pd=`struct PhysicalMaterial {
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
}`,Ld=`
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
#endif`,Dd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ud=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Od=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gd=`#if defined( USE_POINTS_UV )
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
#endif`,Hd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`#ifdef USE_MORPHTARGETS
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
#endif`,Zd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$d=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ep=`#ifdef USE_NORMALMAP
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
#endif`,tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,np=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ip=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gp=`float getShadowMask() {
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
}`,_p=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yp=`#ifdef USE_SKINNING
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
#endif`,vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xp=`#ifdef USE_SKINNING
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
#endif`,Mp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Tp=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dp=`uniform sampler2D t2D;
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
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kp=`#include <common>
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
}`,Op=`#if DEPTH_PACKING == 3200
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
}`,Bp=`#define DISTANCE
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
}`,zp=`#define DISTANCE
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`uniform float scale;
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#include <common>
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
}`,Yp=`uniform vec3 diffuse;
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
}`,qp=`#define LAMBERT
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
}`,Zp=`#define LAMBERT
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
}`,Kp=`#define MATCAP
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
}`,$p=`#define MATCAP
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
}`,jp=`#define NORMAL
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
}`,Jp=`#define NORMAL
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
}`,Qp=`#define PHONG
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
}`,e0=`#define PHONG
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
}`,t0=`#define STANDARD
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
}`,n0=`#define STANDARD
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
}`,i0=`#define TOON
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
}`,a0=`#define TOON
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
}`,r0=`uniform float size;
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
}`,s0=`uniform vec3 diffuse;
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
}`,o0=`#include <common>
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
}`,l0=`uniform vec3 color;
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
}`,c0=`uniform float rotation;
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
}`,u0=`uniform vec3 diffuse;
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
}`,rt={alphahash_fragment:Dh,alphahash_pars_fragment:Ih,alphamap_fragment:Uh,alphamap_pars_fragment:Nh,alphatest_fragment:Fh,alphatest_pars_fragment:kh,aomap_fragment:Oh,aomap_pars_fragment:Bh,batching_pars_vertex:zh,batching_vertex:Gh,begin_vertex:Hh,beginnormal_vertex:Vh,bsdfs:Wh,iridescence_fragment:Xh,bumpmap_pars_fragment:Yh,clipping_planes_fragment:qh,clipping_planes_pars_fragment:Zh,clipping_planes_pars_vertex:Kh,clipping_planes_vertex:$h,color_fragment:jh,color_pars_fragment:Jh,color_pars_vertex:Qh,color_vertex:ed,common:td,cube_uv_reflection_fragment:nd,defaultnormal_vertex:id,displacementmap_pars_vertex:ad,displacementmap_vertex:rd,emissivemap_fragment:sd,emissivemap_pars_fragment:od,colorspace_fragment:ld,colorspace_pars_fragment:cd,envmap_fragment:ud,envmap_common_pars_fragment:fd,envmap_pars_fragment:hd,envmap_pars_vertex:dd,envmap_physical_pars_fragment:wd,envmap_vertex:pd,fog_vertex:md,fog_pars_vertex:gd,fog_fragment:_d,fog_pars_fragment:yd,gradientmap_pars_fragment:vd,lightmap_pars_fragment:xd,lights_lambert_fragment:Md,lights_lambert_pars_fragment:Sd,lights_pars_begin:bd,lights_toon_fragment:Td,lights_toon_pars_fragment:Ed,lights_phong_fragment:Ad,lights_phong_pars_fragment:Cd,lights_physical_fragment:Rd,lights_physical_pars_fragment:Pd,lights_fragment_begin:Ld,lights_fragment_maps:Dd,lights_fragment_end:Id,logdepthbuf_fragment:Ud,logdepthbuf_pars_fragment:Nd,logdepthbuf_pars_vertex:Fd,logdepthbuf_vertex:kd,map_fragment:Od,map_pars_fragment:Bd,map_particle_fragment:zd,map_particle_pars_fragment:Gd,metalnessmap_fragment:Hd,metalnessmap_pars_fragment:Vd,morphinstance_vertex:Wd,morphcolor_vertex:Xd,morphnormal_vertex:Yd,morphtarget_pars_vertex:qd,morphtarget_vertex:Zd,normal_fragment_begin:Kd,normal_fragment_maps:$d,normal_pars_fragment:jd,normal_pars_vertex:Jd,normal_vertex:Qd,normalmap_pars_fragment:ep,clearcoat_normal_fragment_begin:tp,clearcoat_normal_fragment_maps:np,clearcoat_pars_fragment:ip,iridescence_pars_fragment:ap,opaque_fragment:rp,packing:sp,premultiplied_alpha_fragment:op,project_vertex:lp,dithering_fragment:cp,dithering_pars_fragment:up,roughnessmap_fragment:fp,roughnessmap_pars_fragment:hp,shadowmap_pars_fragment:dp,shadowmap_pars_vertex:pp,shadowmap_vertex:mp,shadowmask_pars_fragment:gp,skinbase_vertex:_p,skinning_pars_vertex:yp,skinning_vertex:vp,skinnormal_vertex:xp,specularmap_fragment:Mp,specularmap_pars_fragment:Sp,tonemapping_fragment:bp,tonemapping_pars_fragment:wp,transmission_fragment:Tp,transmission_pars_fragment:Ep,uv_pars_fragment:Ap,uv_pars_vertex:Cp,uv_vertex:Rp,worldpos_vertex:Pp,background_vert:Lp,background_frag:Dp,backgroundCube_vert:Ip,backgroundCube_frag:Up,cube_vert:Np,cube_frag:Fp,depth_vert:kp,depth_frag:Op,distanceRGBA_vert:Bp,distanceRGBA_frag:zp,equirect_vert:Gp,equirect_frag:Hp,linedashed_vert:Vp,linedashed_frag:Wp,meshbasic_vert:Xp,meshbasic_frag:Yp,meshlambert_vert:qp,meshlambert_frag:Zp,meshmatcap_vert:Kp,meshmatcap_frag:$p,meshnormal_vert:jp,meshnormal_frag:Jp,meshphong_vert:Qp,meshphong_frag:e0,meshphysical_vert:t0,meshphysical_frag:n0,meshtoon_vert:i0,meshtoon_frag:a0,points_vert:r0,points_frag:s0,shadow_vert:o0,shadow_frag:l0,sprite_vert:c0,sprite_frag:u0},ve={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Ln={basic:{uniforms:sn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:rt.meshbasic_vert,fragmentShader:rt.meshbasic_frag},lambert:{uniforms:sn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new He(0)}}]),vertexShader:rt.meshlambert_vert,fragmentShader:rt.meshlambert_frag},phong:{uniforms:sn([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:rt.meshphong_vert,fragmentShader:rt.meshphong_frag},standard:{uniforms:sn([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag},toon:{uniforms:sn([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new He(0)}}]),vertexShader:rt.meshtoon_vert,fragmentShader:rt.meshtoon_frag},matcap:{uniforms:sn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:rt.meshmatcap_vert,fragmentShader:rt.meshmatcap_frag},points:{uniforms:sn([ve.points,ve.fog]),vertexShader:rt.points_vert,fragmentShader:rt.points_frag},dashed:{uniforms:sn([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:rt.linedashed_vert,fragmentShader:rt.linedashed_frag},depth:{uniforms:sn([ve.common,ve.displacementmap]),vertexShader:rt.depth_vert,fragmentShader:rt.depth_frag},normal:{uniforms:sn([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:rt.meshnormal_vert,fragmentShader:rt.meshnormal_frag},sprite:{uniforms:sn([ve.sprite,ve.fog]),vertexShader:rt.sprite_vert,fragmentShader:rt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:rt.background_vert,fragmentShader:rt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:rt.backgroundCube_vert,fragmentShader:rt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:rt.cube_vert,fragmentShader:rt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:rt.equirect_vert,fragmentShader:rt.equirect_frag},distanceRGBA:{uniforms:sn([ve.common,ve.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:rt.distanceRGBA_vert,fragmentShader:rt.distanceRGBA_frag},shadow:{uniforms:sn([ve.lights,ve.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:rt.shadow_vert,fragmentShader:rt.shadow_frag}};Ln.physical={uniforms:sn([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:rt.meshphysical_vert,fragmentShader:rt.meshphysical_frag};const Rr={r:0,b:0,g:0},wi=new jn,f0=new Dt;function h0(i,e,t,n,a,r,s){const o=new He(0);let c=r===!0?0:1,l,h,u=null,d=0,p=null;function _(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?t:e).get(b)),b}function v(E){let b=!1;const P=_(E);P===null?f(o,c):P&&P.isColor&&(f(P,1),b=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,b){const P=_(b);P&&(P.isCubeTexture||P.mapping===$r)?(h===void 0&&(h=new Wt(new Ui(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:ma(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(h)),wi.copy(b.backgroundRotation),wi.x*=-1,wi.y*=-1,wi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(f0.makeRotationFromEuler(wi)),h.material.toneMapped=mt.getTransfer(P.colorSpace)!==Mt,(u!==P||d!==P.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=P,d=P.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new Wt(new Li(2,2),new on({name:"BackgroundMaterial",uniforms:ma(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=mt.getTransfer(P.colorSpace)!==Mt,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||d!==P.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=P,d=P.version,p=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,b){E.getRGB(Rr,tu(i)),n.buffers.color.setClear(Rr.r,Rr.g,Rr.b,b,s)}function T(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(E,b=1){o.set(E),c=b,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(o,c)},render:v,addToRenderList:m,dispose:T}}function d0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=d(null);let r=a,s=!1;function o(S,L,q,Q,ae){let te=!1;const ie=u(Q,q,L);r!==ie&&(r=ie,l(r.object)),te=p(S,Q,q,ae),te&&_(S,Q,q,ae),ae!==null&&e.update(ae,i.ELEMENT_ARRAY_BUFFER),(te||s)&&(s=!1,b(S,L,q,Q),ae!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ae).buffer))}function c(){return i.createVertexArray()}function l(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,L,q){const Q=q.wireframe===!0;let ae=n[S.id];ae===void 0&&(ae={},n[S.id]=ae);let te=ae[L.id];te===void 0&&(te={},ae[L.id]=te);let ie=te[Q];return ie===void 0&&(ie=d(c()),te[Q]=ie),ie}function d(S){const L=[],q=[],Q=[];for(let ae=0;ae<t;ae++)L[ae]=0,q[ae]=0,Q[ae]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:q,attributeDivisors:Q,object:S,attributes:{},index:null}}function p(S,L,q,Q){const ae=r.attributes,te=L.attributes;let ie=0;const ce=q.getAttributes();for(const Z in ce)if(ce[Z].location>=0){const we=ae[Z];let De=te[Z];if(De===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(De=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(De=S.instanceColor)),we===void 0||we.attribute!==De||De&&we.data!==De.data)return!0;ie++}return r.attributesNum!==ie||r.index!==Q}function _(S,L,q,Q){const ae={},te=L.attributes;let ie=0;const ce=q.getAttributes();for(const Z in ce)if(ce[Z].location>=0){let we=te[Z];we===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(we=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(we=S.instanceColor));const De={};De.attribute=we,we&&we.data&&(De.data=we.data),ae[Z]=De,ie++}r.attributes=ae,r.attributesNum=ie,r.index=Q}function v(){const S=r.newAttributes;for(let L=0,q=S.length;L<q;L++)S[L]=0}function m(S){f(S,0)}function f(S,L){const q=r.newAttributes,Q=r.enabledAttributes,ae=r.attributeDivisors;q[S]=1,Q[S]===0&&(i.enableVertexAttribArray(S),Q[S]=1),ae[S]!==L&&(i.vertexAttribDivisor(S,L),ae[S]=L)}function T(){const S=r.newAttributes,L=r.enabledAttributes;for(let q=0,Q=L.length;q<Q;q++)L[q]!==S[q]&&(i.disableVertexAttribArray(q),L[q]=0)}function E(S,L,q,Q,ae,te,ie){ie===!0?i.vertexAttribIPointer(S,L,q,ae,te):i.vertexAttribPointer(S,L,q,Q,ae,te)}function b(S,L,q,Q){v();const ae=Q.attributes,te=q.getAttributes(),ie=L.defaultAttributeValues;for(const ce in te){const Z=te[ce];if(Z.location>=0){let _e=ae[ce];if(_e===void 0&&(ce==="instanceMatrix"&&S.instanceMatrix&&(_e=S.instanceMatrix),ce==="instanceColor"&&S.instanceColor&&(_e=S.instanceColor)),_e!==void 0){const we=_e.normalized,De=_e.itemSize,at=e.get(_e);if(at===void 0)continue;const gt=at.buffer,bt=at.type,ct=at.bytesPerElement,ee=bt===i.INT||bt===i.UNSIGNED_INT||_e.gpuType===Wo;if(_e.isInterleavedBufferAttribute){const re=_e.data,Le=re.stride,Je=_e.offset;if(re.isInstancedInterleavedBuffer){for(let Fe=0;Fe<Z.locationSize;Fe++)f(Z.location+Fe,re.meshPerAttribute);S.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Fe=0;Fe<Z.locationSize;Fe++)m(Z.location+Fe);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let Fe=0;Fe<Z.locationSize;Fe++)E(Z.location+Fe,De/Z.locationSize,bt,we,Le*ct,(Je+De/Z.locationSize*Fe)*ct,ee)}else{if(_e.isInstancedBufferAttribute){for(let re=0;re<Z.locationSize;re++)f(Z.location+re,_e.meshPerAttribute);S.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let re=0;re<Z.locationSize;re++)m(Z.location+re);i.bindBuffer(i.ARRAY_BUFFER,gt);for(let re=0;re<Z.locationSize;re++)E(Z.location+re,De/Z.locationSize,bt,we,De*ct,De/Z.locationSize*re*ct,ee)}}else if(ie!==void 0){const we=ie[ce];if(we!==void 0)switch(we.length){case 2:i.vertexAttrib2fv(Z.location,we);break;case 3:i.vertexAttrib3fv(Z.location,we);break;case 4:i.vertexAttrib4fv(Z.location,we);break;default:i.vertexAttrib1fv(Z.location,we)}}}}T()}function P(){F();for(const S in n){const L=n[S];for(const q in L){const Q=L[q];for(const ae in Q)h(Q[ae].object),delete Q[ae];delete L[q]}delete n[S]}}function R(S){if(n[S.id]===void 0)return;const L=n[S.id];for(const q in L){const Q=L[q];for(const ae in Q)h(Q[ae].object),delete Q[ae];delete L[q]}delete n[S.id]}function C(S){for(const L in n){const q=n[L];if(q[S.id]===void 0)continue;const Q=q[S.id];for(const ae in Q)h(Q[ae].object),delete Q[ae];delete q[S.id]}}function F(){M(),s=!0,r!==a&&(r=a,l(r.object))}function M(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:o,reset:F,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:T}}function p0(i,e,t){let n;function a(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function s(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let _=0;_<u;_++)p+=h[_];t.update(p,n,1)}function c(l,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)s(l[_],h[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let _=0;for(let v=0;v<u;v++)_+=h[v]*d[v];t.update(_,n,1)}}this.setMode=a,this.render=r,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function m0(i,e,t,n){let a;function r(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(C){return!(C!==En&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const F=C===Zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==$n&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Xn&&!F)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:b,vertexTextures:P,maxSamples:R}}function g0(i){const e=this;let t=null,n=0,a=!1,r=!1;const s=new Ei,o=new it,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||a;return a=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const _=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!a||_===null||_.length===0||r&&!m)r?h(null):l();else{const T=r?0:n,E=T*4;let b=f.clippingState||null;c.value=b,b=h(_,d,E,p);for(let P=0;P!==E;++P)b[P]=t[P];f.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,_){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,_!==!0||m===null){const f=p+v*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let E=0,b=p;E!==v;++E,b+=4)s.copy(u[E]).applyMatrix4(T,o),s.normal.toArray(m,b),m[b+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function _0(i){let e=new WeakMap;function t(s,o){return o===Js?s.mapping=ha:o===Qs&&(s.mapping=da),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===Js||o===Qs)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new ph(c.height);return l.fromEquirectangularTexture(i,s),e.set(s,l),s.addEventListener("dispose",a),t(l.texture,s.mapping)}else return null}}return s}function a(s){const o=s.target;o.removeEventListener("dispose",a);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}const oa=4,jl=[.125,.215,.35,.446,.526,.582],Ri=20,Ns=new cu,Jl=new He;let Fs=null,ks=0,Os=0,Bs=!1;const Ai=(1+Math.sqrt(5))/2,ra=1/Ai,Ql=[new U(-Ai,ra,0),new U(Ai,ra,0),new U(-ra,0,Ai),new U(ra,0,Ai),new U(0,Ai,-ra),new U(0,Ai,ra),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],y0=new U;class ec{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100,r={}){const{size:s=256,position:o=y0}=r;Fs=this._renderer.getRenderTarget(),ks=this._renderer.getActiveCubeFace(),Os=this._renderer.getActiveMipmapLevel(),Bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,a,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ic(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fs,ks,Os),this._renderer.xr.enabled=Bs,e.scissorTest=!1,Pr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ha||e.mapping===da?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fs=this._renderer.getRenderTarget(),ks=this._renderer.getActiveCubeFace(),Os=this._renderer.getActiveMipmapLevel(),Bs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:Zn,format:En,colorSpace:pa,depthBuffer:!1},a=tc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=v0(r)),this._blurMaterial=x0(r,e,t)}return a}_compileMaterial(e){const t=new Wt(this._lodPlanes[0],e);this._renderer.compile(t,Ns)}_sceneToCubeUV(e,t,n,a,r){const c=new vn(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Jl),u.toneMapping=ci,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(a),u.clearDepth(),u.setRenderTarget(null));const v=new Pn({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),m=new Wt(new Ui,v);let f=!1;const T=e.background;T?T.isColor&&(v.color.copy(T),e.background=null,f=!0):(v.color.copy(Jl),f=!0);for(let E=0;E<6;E++){const b=E%3;b===0?(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[E],r.y,r.z)):b===1?(c.up.set(0,0,l[E]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[E],r.z)):(c.up.set(0,l[E],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[E]));const P=this._cubeSize;Pr(a,b*P,E>2?P:0,P,P),u.setRenderTarget(a),f&&u.render(m,c),u.render(e,c)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===ha||e.mapping===da;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=ic()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nc());const r=a?this._cubemapMaterial:this._equirectMaterial,s=new Wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;Pr(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,Ns)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let r=1;r<a;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ql[(a-r-1)%Ql.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,a,r){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,a,"latitudinal",r),this._halfBlur(s,e,n,n,a,"longitudinal",r)}_halfBlur(e,t,n,a,r,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Wt(this._lodPlanes[a],l),d=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ri-1),v=r/_,m=isFinite(r)?1+Math.floor(h*v):Ri;m>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ri}`);const f=[];let T=0;for(let C=0;C<Ri;++C){const F=C/v,M=Math.exp(-F*F/2);f.push(M),C===0?T+=M:C<m&&(T+=2*M)}for(let C=0;C<f.length;C++)f[C]=f[C]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:E}=this;d.dTheta.value=_,d.mipInt.value=E-n;const b=this._sizeLods[a],P=3*b*(a>E-oa?a-E+oa:0),R=4*(this._cubeSize-b);Pr(t,P,R,3*b,2*b),c.setRenderTarget(t),c.render(u,Ns)}}function v0(i){const e=[],t=[],n=[];let a=i;const r=i-oa+1+jl.length;for(let s=0;s<r;s++){const o=Math.pow(2,a);t.push(o);let c=1/o;s>i-oa?c=jl[s-i+oa-1]:s===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,_=6,v=3,m=2,f=1,T=new Float32Array(v*_*p),E=new Float32Array(m*_*p),b=new Float32Array(f*_*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,F=R>2?0:-1,M=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];T.set(M,v*_*R),E.set(d,m*_*R);const S=[R,R,R,R,R,R];b.set(S,f*_*R)}const P=new en;P.setAttribute("position",new mn(T,v)),P.setAttribute("uv",new mn(E,m)),P.setAttribute("faceIndex",new mn(b,f)),e.push(P),a>oa&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function tc(i,e,t){const n=new Rn(i,e,t);return n.texture.mapping=$r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Pr(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function x0(i,e,t){const n=new Float32Array(Ri),a=new U(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:nl(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function nc(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

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
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function ic(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Yn,depthTest:!1,depthWrite:!1})}function nl(){return`

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
	`}function M0(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Js||c===Qs,h=c===ha||c===da;if(l||h){let u=e.get(o);const d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ec(i)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return l&&p&&p.height>0||h&&p&&a(p)?(t===null&&(t=new ec(i)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function a(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function S0(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&Ga("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function b0(i,e,t,n){const a={},r=new WeakMap;function s(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",s),delete a[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return a[d.id]===!0||(d.addEventListener("dispose",s),a[d.id]=!0,t.memory.geometries++),d}function c(u){const d=u.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(u){const d=[],p=u.index,_=u.attributes.position;let v=0;if(p!==null){const T=p.array;v=p.version;for(let E=0,b=T.length;E<b;E+=3){const P=T[E+0],R=T[E+1],C=T[E+2];d.push(P,R,R,C,C,P)}}else if(_!==void 0){const T=_.array;v=_.version;for(let E=0,b=T.length/3-1;E<b;E+=3){const P=E+0,R=E+1,C=E+2;d.push(P,R,R,C,C,P)}}else return;const m=new(Kc(d)?eu:Qc)(d,1);m.version=v;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function w0(i,e,t){let n;function a(d){n=d}let r,s;function o(d){r=d.type,s=d.bytesPerElement}function c(d,p){i.drawElements(n,p,r,d*s),t.update(p,n,1)}function l(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,r,d*s,_),t.update(p,n,_))}function h(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];t.update(m,n,1)}function u(d,p,_,v){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)l(d[f]/s,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,_);let f=0;for(let T=0;T<_;T++)f+=p[T]*v[T];t.update(f,n,1)}}this.setMode=a,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function T0(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function E0(i,e,t){const n=new WeakMap,a=new Nt;function r(s,o,c){const l=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==u){let S=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],T=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let b=0;_===!0&&(b=1),v===!0&&(b=2),m===!0&&(b=3);let P=o.attributes.position.count*b,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const C=new Float32Array(P*R*4*u),F=new $c(C,P,R,u);F.type=Xn,F.needsUpdate=!0;const M=b*4;for(let L=0;L<u;L++){const q=f[L],Q=T[L],ae=E[L],te=P*R*4*L;for(let ie=0;ie<q.count;ie++){const ce=ie*M;_===!0&&(a.fromBufferAttribute(q,ie),C[te+ce+0]=a.x,C[te+ce+1]=a.y,C[te+ce+2]=a.z,C[te+ce+3]=0),v===!0&&(a.fromBufferAttribute(Q,ie),C[te+ce+4]=a.x,C[te+ce+5]=a.y,C[te+ce+6]=a.z,C[te+ce+7]=0),m===!0&&(a.fromBufferAttribute(ae,ie),C[te+ce+8]=a.x,C[te+ce+9]=a.y,C[te+ce+10]=a.z,C[te+ce+11]=ae.itemSize===4?a.w:1)}}d={count:u,texture:F,size:new je(P,R)},n.set(o,d),o.addEventListener("dispose",S)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const v=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function A0(i,e,t,n){let a=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(a.get(u)!==l&&(e.update(u),a.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),a.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),a.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;a.get(d)!==l&&(d.update(),a.set(d,l))}return u}function s(){a=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:s}}const fu=new ln,ac=new ou(1,1),hu=new $c,du=new Jf,pu=new iu,rc=[],sc=[],oc=new Float32Array(16),lc=new Float32Array(9),cc=new Float32Array(4);function xa(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let r=rc[a];if(r===void 0&&(r=new Float32Array(a),rc[a]=r),e!==0){n.toArray(r,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(r,o)}return r}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Jr(i,e){let t=sc[e];t===void 0&&(t=new Int32Array(e),sc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function C0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function R0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function P0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function L0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function D0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;cc.set(n),i.uniformMatrix2fv(this.addr,!1,cc),zt(t,n)}}function I0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;lc.set(n),i.uniformMatrix3fv(this.addr,!1,lc),zt(t,n)}}function U0(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;oc.set(n),i.uniformMatrix4fv(this.addr,!1,oc),zt(t,n)}}function N0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function F0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function k0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function O0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function B0(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function z0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function G0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function H0(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function V0(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let r;this.type===i.SAMPLER_2D_SHADOW?(ac.compareFunction=Zc,r=ac):r=fu,t.setTexture2D(e||r,a)}function W0(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||du,a)}function X0(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||pu,a)}function Y0(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||hu,a)}function q0(i){switch(i){case 5126:return C0;case 35664:return R0;case 35665:return P0;case 35666:return L0;case 35674:return D0;case 35675:return I0;case 35676:return U0;case 5124:case 35670:return N0;case 35667:case 35671:return F0;case 35668:case 35672:return k0;case 35669:case 35673:return O0;case 5125:return B0;case 36294:return z0;case 36295:return G0;case 36296:return H0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return Y0}}function Z0(i,e){i.uniform1fv(this.addr,e)}function K0(i,e){const t=xa(e,this.size,2);i.uniform2fv(this.addr,t)}function $0(i,e){const t=xa(e,this.size,3);i.uniform3fv(this.addr,t)}function j0(i,e){const t=xa(e,this.size,4);i.uniform4fv(this.addr,t)}function J0(i,e){const t=xa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Q0(i,e){const t=xa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function em(i,e){const t=xa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function tm(i,e){i.uniform1iv(this.addr,e)}function nm(i,e){i.uniform2iv(this.addr,e)}function im(i,e){i.uniform3iv(this.addr,e)}function am(i,e){i.uniform4iv(this.addr,e)}function rm(i,e){i.uniform1uiv(this.addr,e)}function sm(i,e){i.uniform2uiv(this.addr,e)}function om(i,e){i.uniform3uiv(this.addr,e)}function lm(i,e){i.uniform4uiv(this.addr,e)}function cm(i,e,t){const n=this.cache,a=e.length,r=Jr(t,a);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let s=0;s!==a;++s)t.setTexture2D(e[s]||fu,r[s])}function um(i,e,t){const n=this.cache,a=e.length,r=Jr(t,a);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||du,r[s])}function fm(i,e,t){const n=this.cache,a=e.length,r=Jr(t,a);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||pu,r[s])}function hm(i,e,t){const n=this.cache,a=e.length,r=Jr(t,a);Bt(n,r)||(i.uniform1iv(this.addr,r),zt(n,r));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||hu,r[s])}function dm(i){switch(i){case 5126:return Z0;case 35664:return K0;case 35665:return $0;case 35666:return j0;case 35674:return J0;case 35675:return Q0;case 35676:return em;case 5124:case 35670:return tm;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return am;case 5125:return rm;case 36294:return sm;case 36295:return om;case 36296:return lm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return hm}}class pm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=q0(t.type)}}class mm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dm(t.type)}}class gm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let r=0,s=a.length;r!==s;++r){const o=a[r];o.setValue(e,t[o.id],n)}}}const zs=/(\w+)(\])?(\[|\.)?/g;function uc(i,e){i.seq.push(e),i.map[e.id]=e}function _m(i,e,t){const n=i.name,a=n.length;for(zs.lastIndex=0;;){const r=zs.exec(n),s=zs.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===a){uc(t,l===void 0?new pm(o,i,e):new mm(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new gm(o),uc(t,u)),t=u}}}class Gr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const r=e.getActiveUniform(t,a),s=e.getUniformLocation(t,r.name);_m(r,s,this)}}setValue(e,t,n,a){const r=this.map[t];r!==void 0&&r.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let r=0,s=t.length;r!==s;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,r=e.length;a!==r;++a){const s=e[a];s.id in t&&n.push(s)}return n}}function fc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ym=37297;let vm=0;function xm(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let s=a;s<r;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const hc=new it;function Mm(i){mt._getMatrix(hc,mt.workingColorSpace,i);const e=`mat3( ${hc.elements.map(t=>t.toFixed(4))} )`;switch(mt.getTransfer(i)){case Vr:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function dc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+xm(i.getShaderSource(e),o)}else return r}function Sm(i,e){const t=Mm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function bm(i,e){let t;switch(e){case Ic:t="Linear";break;case Uc:t="Reinhard";break;case Nc:t="Cineon";break;case Vo:t="ACESFilmic";break;case kc:t="AgX";break;case Oc:t="Neutral";break;case Fc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Lr=new U;function wm(){mt.getLuminanceCoefficients(Lr);const i=Lr.x.toFixed(4),e=Lr.y.toFixed(4),t=Lr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Da).join(`
`)}function Em(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Am(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const r=i.getActiveAttrib(e,a),s=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[s]={type:r.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function Da(i){return i!==""}function pc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uo(i){return i.replace(Cm,Pm)}const Rm=new Map;function Pm(i,e){let t=rt[e];if(t===void 0){const n=Rm.get(e);if(n!==void 0)t=rt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Uo(t)}const Lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gc(i){return i.replace(Lm,Dm)}function Dm(i,e,t,n){let a="";for(let r=parseInt(e);r<parseInt(t);r++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return a}function _c(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Im(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Lc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ff?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function Um(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ha:case da:e="ENVMAP_TYPE_CUBE";break;case $r:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Nm(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===da&&(e="ENVMAP_MODE_REFRACTION"),e}function Fm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Dc:e="ENVMAP_BLENDING_MULTIPLY";break;case Pf:e="ENVMAP_BLENDING_MIX";break;case Lf:e="ENVMAP_BLENDING_ADD";break}return e}function km(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Om(i,e,t,n){const a=i.getContext(),r=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=Im(t),l=Um(t),h=Nm(t),u=Fm(t),d=km(t),p=Tm(t),_=Em(r),v=a.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Da).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Da).join(`
`),f.length>0&&(f+=`
`)):(m=[_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Da).join(`
`),f=[_c(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ci?"#define TONE_MAPPING":"",t.toneMapping!==ci?rt.tonemapping_pars_fragment:"",t.toneMapping!==ci?bm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",rt.colorspace_pars_fragment,Sm("linearToOutputTexel",t.outputColorSpace),wm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Da).join(`
`)),s=Uo(s),s=pc(s,t),s=mc(s,t),o=Uo(o),o=pc(o,t),o=mc(o,t),s=gc(s),o=gc(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const E=T+m+s,b=T+f+o,P=fc(a,a.VERTEX_SHADER,E),R=fc(a,a.FRAGMENT_SHADER,b);a.attachShader(v,P),a.attachShader(v,R),t.index0AttributeName!==void 0?a.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(v,0,"position"),a.linkProgram(v);function C(L){if(i.debug.checkShaderErrors){const q=a.getProgramInfoLog(v)||"",Q=a.getShaderInfoLog(P)||"",ae=a.getShaderInfoLog(R)||"",te=q.trim(),ie=Q.trim(),ce=ae.trim();let Z=!0,_e=!0;if(a.getProgramParameter(v,a.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,v,P,R);else{const we=dc(a,P,"vertex"),De=dc(a,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(v,a.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+te+`
`+we+`
`+De)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(ie===""||ce==="")&&(_e=!1);_e&&(L.diagnostics={runnable:Z,programLog:te,vertexShader:{log:ie,prefix:m},fragmentShader:{log:ce,prefix:f}})}a.deleteShader(P),a.deleteShader(R),F=new Gr(a,v),M=Am(a,v)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=a.getProgramParameter(v,ym)),S},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vm++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=R,this}let Bm=0;class zm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),r=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Gm(e),t.set(e,n)),n}}class Gm{constructor(e){this.id=Bm++,this.code=e,this.usedTimes=0}}function Hm(i,e,t,n,a,r,s){const o=new jc,c=new zm,l=new Set,h=[],u=a.logarithmicDepthBuffer,d=a.vertexTextures;let p=a.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,S,L,q,Q){const ae=q.fog,te=Q.geometry,ie=M.isMeshStandardMaterial?q.environment:null,ce=(M.isMeshStandardMaterial?t:e).get(M.envMap||ie),Z=ce&&ce.mapping===$r?ce.image.height:null,_e=_[M.type];M.precision!==null&&(p=a.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const we=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,De=we!==void 0?we.length:0;let at=0;te.morphAttributes.position!==void 0&&(at=1),te.morphAttributes.normal!==void 0&&(at=2),te.morphAttributes.color!==void 0&&(at=3);let gt,bt,ct,ee;if(_e){const ot=Ln[_e];gt=ot.vertexShader,bt=ot.fragmentShader}else gt=M.vertexShader,bt=M.fragmentShader,c.update(M),ct=c.getVertexShaderID(M),ee=c.getFragmentShaderID(M);const re=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),Je=Q.isInstancedMesh===!0,Fe=Q.isBatchedMesh===!0,st=!!M.map,kt=!!M.matcap,A=!!ce,wt=!!M.aoMap,Qe=!!M.lightMap,Ke=!!M.bumpMap,Pe=!!M.normalMap,Ee=!!M.displacementMap,Ne=!!M.emissiveMap,nt=!!M.metalnessMap,It=!!M.roughnessMap,_t=M.anisotropy>0,w=M.clearcoat>0,g=M.dispersion>0,z=M.iridescence>0,J=M.sheen>0,se=M.transmission>0,$=_t&&!!M.anisotropyMap,ze=w&&!!M.clearcoatMap,pe=w&&!!M.clearcoatNormalMap,Oe=w&&!!M.clearcoatRoughnessMap,Ie=z&&!!M.iridescenceMap,de=z&&!!M.iridescenceThicknessMap,ge=J&&!!M.sheenColorMap,qe=J&&!!M.sheenRoughnessMap,Be=!!M.specularMap,ye=!!M.specularColorMap,V=!!M.specularIntensityMap,D=se&&!!M.transmissionMap,O=se&&!!M.thicknessMap,me=!!M.gradientMap,Ce=!!M.alphaMap,le=M.alphaTest>0,ne=!!M.alphaHash,Ae=!!M.extensions;let $e=ci;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&($e=i.toneMapping);const yt={shaderID:_e,shaderType:M.type,shaderName:M.name,vertexShader:gt,fragmentShader:bt,defines:M.defines,customVertexShaderID:ct,customFragmentShaderID:ee,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Fe,batchingColor:Fe&&Q._colorsTexture!==null,instancing:Je,instancingColor:Je&&Q.instanceColor!==null,instancingMorph:Je&&Q.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:pa,alphaToCoverage:!!M.alphaToCoverage,map:st,matcap:kt,envMap:A,envMapMode:A&&ce.mapping,envMapCubeUVHeight:Z,aoMap:wt,lightMap:Qe,bumpMap:Ke,normalMap:Pe,displacementMap:d&&Ee,emissiveMap:Ne,normalMapObjectSpace:Pe&&M.normalMapType===Ff,normalMapTangentSpace:Pe&&M.normalMapType===Nf,metalnessMap:nt,roughnessMap:It,anisotropy:_t,anisotropyMap:$,clearcoat:w,clearcoatMap:ze,clearcoatNormalMap:pe,clearcoatRoughnessMap:Oe,dispersion:g,iridescence:z,iridescenceMap:Ie,iridescenceThicknessMap:de,sheen:J,sheenColorMap:ge,sheenRoughnessMap:qe,specularMap:Be,specularColorMap:ye,specularIntensityMap:V,transmission:se,transmissionMap:D,thicknessMap:O,gradientMap:me,opaque:M.transparent===!1&&M.blending===qn&&M.alphaToCoverage===!1,alphaMap:Ce,alphaTest:le,alphaHash:ne,combine:M.combine,mapUv:st&&v(M.map.channel),aoMapUv:wt&&v(M.aoMap.channel),lightMapUv:Qe&&v(M.lightMap.channel),bumpMapUv:Ke&&v(M.bumpMap.channel),normalMapUv:Pe&&v(M.normalMap.channel),displacementMapUv:Ee&&v(M.displacementMap.channel),emissiveMapUv:Ne&&v(M.emissiveMap.channel),metalnessMapUv:nt&&v(M.metalnessMap.channel),roughnessMapUv:It&&v(M.roughnessMap.channel),anisotropyMapUv:$&&v(M.anisotropyMap.channel),clearcoatMapUv:ze&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:pe&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:de&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ge&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:qe&&v(M.sheenRoughnessMap.channel),specularMapUv:Be&&v(M.specularMap.channel),specularColorMapUv:ye&&v(M.specularColorMap.channel),specularIntensityMapUv:V&&v(M.specularIntensityMap.channel),transmissionMapUv:D&&v(M.transmissionMap.channel),thicknessMapUv:O&&v(M.thicknessMap.channel),alphaMapUv:Ce&&v(M.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Pe||_t),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!te.attributes.uv&&(st||Ce),fog:!!ae,useFog:M.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Le,skinning:Q.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:De,morphTextureStride:at,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:$e,decodeVideoTexture:st&&M.map.isVideoTexture===!0&&mt.getTransfer(M.map.colorSpace)===Mt,decodeVideoTextureEmissive:Ne&&M.emissiveMap.isVideoTexture===!0&&mt.getTransfer(M.emissiveMap.colorSpace)===Mt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Wn,flipSided:M.side===pn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ae&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&M.extensions.multiDraw===!0||Fe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return yt.vertexUv1s=l.has(1),yt.vertexUv2s=l.has(2),yt.vertexUv3s=l.has(3),l.clear(),yt}function f(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)S.push(L),S.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(T(S,M),E(S,M),S.push(i.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function T(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function E(M,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),S.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),M.push(o.mask)}function b(M){const S=_[M.type];let L;if(S){const q=Ln[S];L=Ha.clone(q.uniforms)}else L=M.uniforms;return L}function P(M,S){let L;for(let q=0,Q=h.length;q<Q;q++){const ae=h[q];if(ae.cacheKey===S){L=ae,++L.usedTimes;break}}return L===void 0&&(L=new Om(i,S,M,r),h.push(L)),L}function R(M){if(--M.usedTimes===0){const S=h.indexOf(M);h[S]=h[h.length-1],h.pop(),M.destroy()}}function C(M){c.remove(M)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:P,releaseProgram:R,releaseShaderCache:C,programs:h,dispose:F}}function Vm(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function a(s,o,c){i.get(s)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:r}}function Wm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vc(){const i=[];let e=0;const t=[],n=[],a=[];function r(){e=0,t.length=0,n.length=0,a.length=0}function s(u,d,p,_,v,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:_,renderOrder:u.renderOrder,z:v,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=u.renderOrder,f.z=v,f.group=m),e++,f}function o(u,d,p,_,v,m){const f=s(u,d,p,_,v,m);p.transmission>0?n.push(f):p.transparent===!0?a.push(f):t.push(f)}function c(u,d,p,_,v,m){const f=s(u,d,p,_,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?a.unshift(f):t.unshift(f)}function l(u,d){t.length>1&&t.sort(u||Wm),n.length>1&&n.sort(d||yc),a.length>1&&a.sort(d||yc)}function h(){for(let u=e,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:a,init:r,push:o,unshift:c,finish:h,sort:l}}function Xm(){let i=new WeakMap;function e(n,a){const r=i.get(n);let s;return r===void 0?(s=new vc,i.set(n,[s])):a>=r.length?(s=new vc,r.push(s)):s=r[a],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function Ym(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new He};break;case"SpotLight":t={position:new U,direction:new U,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function qm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Zm=0;function Km(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $m(i){const e=new Ym,t=qm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new U);const a=new U,r=new Dt,s=new Dt;function o(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,_=0,v=0,m=0,f=0,T=0,E=0,b=0,P=0,R=0,C=0;l.sort(Km);for(let M=0,S=l.length;M<S;M++){const L=l[M],q=L.color,Q=L.intensity,ae=L.distance,te=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=q.r*Q,u+=q.g*Q,d+=q.b*Q;else if(L.isLightProbe){for(let ie=0;ie<9;ie++)n.probe[ie].addScaledVector(L.sh.coefficients[ie],Q);C++}else if(L.isDirectionalLight){const ie=e.get(L);if(ie.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const ce=L.shadow,Z=t.get(L);Z.shadowIntensity=ce.intensity,Z.shadowBias=ce.bias,Z.shadowNormalBias=ce.normalBias,Z.shadowRadius=ce.radius,Z.shadowMapSize=ce.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=L.shadow.matrix,T++}n.directional[p]=ie,p++}else if(L.isSpotLight){const ie=e.get(L);ie.position.setFromMatrixPosition(L.matrixWorld),ie.color.copy(q).multiplyScalar(Q),ie.distance=ae,ie.coneCos=Math.cos(L.angle),ie.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),ie.decay=L.decay,n.spot[v]=ie;const ce=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,ce.updateMatrices(L),L.castShadow&&R++),n.spotLightMatrix[v]=ce.matrix,L.castShadow){const Z=t.get(L);Z.shadowIntensity=ce.intensity,Z.shadowBias=ce.bias,Z.shadowNormalBias=ce.normalBias,Z.shadowRadius=ce.radius,Z.shadowMapSize=ce.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=te,b++}v++}else if(L.isRectAreaLight){const ie=e.get(L);ie.color.copy(q).multiplyScalar(Q),ie.halfWidth.set(L.width*.5,0,0),ie.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=ie,m++}else if(L.isPointLight){const ie=e.get(L);if(ie.color.copy(L.color).multiplyScalar(L.intensity),ie.distance=L.distance,ie.decay=L.decay,L.castShadow){const ce=L.shadow,Z=t.get(L);Z.shadowIntensity=ce.intensity,Z.shadowBias=ce.bias,Z.shadowNormalBias=ce.normalBias,Z.shadowRadius=ce.radius,Z.shadowMapSize=ce.mapSize,Z.shadowCameraNear=ce.camera.near,Z.shadowCameraFar=ce.camera.far,n.pointShadow[_]=Z,n.pointShadowMap[_]=te,n.pointShadowMatrix[_]=L.shadow.matrix,E++}n.point[_]=ie,_++}else if(L.isHemisphereLight){const ie=e.get(L);ie.skyColor.copy(L.color).multiplyScalar(Q),ie.groundColor.copy(L.groundColor).multiplyScalar(Q),n.hemi[f]=ie,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==p||F.pointLength!==_||F.spotLength!==v||F.rectAreaLength!==m||F.hemiLength!==f||F.numDirectionalShadows!==T||F.numPointShadows!==E||F.numSpotShadows!==b||F.numSpotMaps!==P||F.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=_,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=b+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,F.directionalLength=p,F.pointLength=_,F.spotLength=v,F.rectAreaLength=m,F.hemiLength=f,F.numDirectionalShadows=T,F.numPointShadows=E,F.numSpotShadows=b,F.numSpotMaps=P,F.numLightProbes=C,n.version=Zm++)}function c(l,h){let u=0,d=0,p=0,_=0,v=0;const m=h.matrixWorldInverse;for(let f=0,T=l.length;f<T;f++){const E=l[f];if(E.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(m),u++}else if(E.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),b.direction.sub(a),b.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const b=n.rectArea[_];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),s.identity(),r.copy(E.matrixWorld),r.premultiply(m),s.extractRotation(r),b.halfWidth.set(E.width*.5,0,0),b.halfHeight.set(0,E.height*.5,0),b.halfWidth.applyMatrix4(s),b.halfHeight.applyMatrix4(s),_++}else if(E.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(E.matrixWorld),b.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const b=n.hemi[v];b.direction.setFromMatrixPosition(E.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:o,setupView:c,state:n}}function xc(i){const e=new $m(i),t=[],n=[];function a(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function s(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:s}}function jm(i){let e=new WeakMap;function t(a,r=0){const s=e.get(a);let o;return s===void 0?(o=new xc(i),e.set(a,[o])):r>=s.length?(o=new xc(i),s.push(o)):o=s[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Jm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qm=`uniform sampler2D shadow_pass;
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
}`;function e1(i,e,t){let n=new ru;const a=new je,r=new je,s=new Nt,o=new Th({depthPacking:Uf}),c=new Eh,l={},h=t.maxTextureSize,u={[hi]:pn,[pn]:hi,[Wn]:Wn},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:Jm,fragmentShader:Qm}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new en;_.setAttribute("position",new mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Wt(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lc;let f=this.type;this.render=function(R,C,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=i.getRenderTarget(),S=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),q=i.state;q.setBlending(Yn),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const Q=f!==Vn&&this.type===Vn,ae=f===Vn&&this.type!==Vn;for(let te=0,ie=R.length;te<ie;te++){const ce=R[te],Z=ce.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;a.copy(Z.mapSize);const _e=Z.getFrameExtents();if(a.multiply(_e),r.copy(Z.mapSize),(a.x>h||a.y>h)&&(a.x>h&&(r.x=Math.floor(h/_e.x),a.x=r.x*_e.x,Z.mapSize.x=r.x),a.y>h&&(r.y=Math.floor(h/_e.y),a.y=r.y*_e.y,Z.mapSize.y=r.y)),Z.map===null||Q===!0||ae===!0){const De=this.type!==Vn?{minFilter:Cn,magFilter:Cn}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Rn(a.x,a.y,De),Z.map.texture.name=ce.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();const we=Z.getViewportCount();for(let De=0;De<we;De++){const at=Z.getViewport(De);s.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),q.viewport(s),Z.updateMatrices(ce,De),n=Z.getFrustum(),b(C,F,Z.camera,ce,this.type)}Z.isPointLightShadow!==!0&&this.type===Vn&&T(Z,F),Z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,S,L)};function T(R,C){const F=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Rn(a.x,a.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,F,d,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,F,p,v,null)}function E(R,C,F,M){let S=null;const L=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(L!==void 0)S=L;else if(S=F.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const q=S.uuid,Q=C.uuid;let ae=l[q];ae===void 0&&(ae={},l[q]=ae);let te=ae[Q];te===void 0&&(te=S.clone(),ae[Q]=te,C.addEventListener("dispose",P)),S=te}if(S.visible=C.visible,S.wireframe=C.wireframe,M===Vn?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,F.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const q=i.properties.get(S);q.light=F}return S}function b(R,C,F,M,S){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&S===Vn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const Q=e.update(R),ae=R.material;if(Array.isArray(ae)){const te=Q.groups;for(let ie=0,ce=te.length;ie<ce;ie++){const Z=te[ie],_e=ae[Z.materialIndex];if(_e&&_e.visible){const we=E(R,_e,M,S);R.onBeforeShadow(i,R,C,F,Q,we,Z),i.renderBufferDirect(F,null,Q,we,R,Z),R.onAfterShadow(i,R,C,F,Q,we,Z)}}}else if(ae.visible){const te=E(R,ae,M,S);R.onBeforeShadow(i,R,C,F,Q,te,null),i.renderBufferDirect(F,null,Q,te,R,null),R.onAfterShadow(i,R,C,F,Q,te,null)}}const q=R.children;for(let Q=0,ae=q.length;Q<ae;Q++)b(q[Q],C,F,M,S)}function P(R){R.target.removeEventListener("dispose",P);for(const F in l){const M=l[F],S=R.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}const t1={[Xs]:Ys,[qs]:$s,[Zs]:js,[fa]:Ks,[Ys]:Xs,[$s]:qs,[js]:Zs,[Ks]:fa};function n1(i,e){function t(){let D=!1;const O=new Nt;let me=null;const Ce=new Nt(0,0,0,0);return{setMask:function(le){me!==le&&!D&&(i.colorMask(le,le,le,le),me=le)},setLocked:function(le){D=le},setClear:function(le,ne,Ae,$e,yt){yt===!0&&(le*=$e,ne*=$e,Ae*=$e),O.set(le,ne,Ae,$e),Ce.equals(O)===!1&&(i.clearColor(le,ne,Ae,$e),Ce.copy(O))},reset:function(){D=!1,me=null,Ce.set(-1,0,0,0)}}}function n(){let D=!1,O=!1,me=null,Ce=null,le=null;return{setReversed:function(ne){if(O!==ne){const Ae=e.get("EXT_clip_control");ne?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),O=ne;const $e=le;le=null,this.setClear($e)}},getReversed:function(){return O},setTest:function(ne){ne?re(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(ne){me!==ne&&!D&&(i.depthMask(ne),me=ne)},setFunc:function(ne){if(O&&(ne=t1[ne]),Ce!==ne){switch(ne){case Xs:i.depthFunc(i.NEVER);break;case Ys:i.depthFunc(i.ALWAYS);break;case qs:i.depthFunc(i.LESS);break;case fa:i.depthFunc(i.LEQUAL);break;case Zs:i.depthFunc(i.EQUAL);break;case Ks:i.depthFunc(i.GEQUAL);break;case $s:i.depthFunc(i.GREATER);break;case js:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ce=ne}},setLocked:function(ne){D=ne},setClear:function(ne){le!==ne&&(O&&(ne=1-ne),i.clearDepth(ne),le=ne)},reset:function(){D=!1,me=null,Ce=null,le=null,O=!1}}}function a(){let D=!1,O=null,me=null,Ce=null,le=null,ne=null,Ae=null,$e=null,yt=null;return{setTest:function(ot){D||(ot?re(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(ot){O!==ot&&!D&&(i.stencilMask(ot),O=ot)},setFunc:function(ot,tn,cn){(me!==ot||Ce!==tn||le!==cn)&&(i.stencilFunc(ot,tn,cn),me=ot,Ce=tn,le=cn)},setOp:function(ot,tn,cn){(ne!==ot||Ae!==tn||$e!==cn)&&(i.stencilOp(ot,tn,cn),ne=ot,Ae=tn,$e=cn)},setLocked:function(ot){D=ot},setClear:function(ot){yt!==ot&&(i.clearStencil(ot),yt=ot)},reset:function(){D=!1,O=null,me=null,Ce=null,le=null,ne=null,Ae=null,$e=null,yt=null}}}const r=new t,s=new n,o=new a,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,p=[],_=null,v=!1,m=null,f=null,T=null,E=null,b=null,P=null,R=null,C=new He(0,0,0),F=0,M=!1,S=null,L=null,q=null,Q=null,ae=null;const te=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,ce=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(Z)[1]),ie=ce>=1):Z.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),ie=ce>=2);let _e=null,we={};const De=i.getParameter(i.SCISSOR_BOX),at=i.getParameter(i.VIEWPORT),gt=new Nt().fromArray(De),bt=new Nt().fromArray(at);function ct(D,O,me,Ce){const le=new Uint8Array(4),ne=i.createTexture();i.bindTexture(D,ne),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<me;Ae++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(O,0,i.RGBA,1,1,Ce,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(O+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return ne}const ee={};ee[i.TEXTURE_2D]=ct(i.TEXTURE_2D,i.TEXTURE_2D,1),ee[i.TEXTURE_CUBE_MAP]=ct(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[i.TEXTURE_2D_ARRAY]=ct(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ee[i.TEXTURE_3D]=ct(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),re(i.DEPTH_TEST),s.setFunc(fa),Ke(!1),Pe(vl),re(i.CULL_FACE),wt(Yn);function re(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Le(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Je(D,O){return u[D]!==O?(i.bindFramebuffer(D,O),u[D]=O,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=O),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=O),!0):!1}function Fe(D,O){let me=p,Ce=!1;if(D){me=d.get(O),me===void 0&&(me=[],d.set(O,me));const le=D.textures;if(me.length!==le.length||me[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Ae=le.length;ne<Ae;ne++)me[ne]=i.COLOR_ATTACHMENT0+ne;me.length=le.length,Ce=!0}}else me[0]!==i.BACK&&(me[0]=i.BACK,Ce=!0);Ce&&i.drawBuffers(me)}function st(D){return _!==D?(i.useProgram(D),_=D,!0):!1}const kt={[Ci]:i.FUNC_ADD,[df]:i.FUNC_SUBTRACT,[pf]:i.FUNC_REVERSE_SUBTRACT};kt[mf]=i.MIN,kt[gf]=i.MAX;const A={[_f]:i.ZERO,[yf]:i.ONE,[vf]:i.SRC_COLOR,[Vs]:i.SRC_ALPHA,[Tf]:i.SRC_ALPHA_SATURATE,[bf]:i.DST_COLOR,[Mf]:i.DST_ALPHA,[xf]:i.ONE_MINUS_SRC_COLOR,[Ws]:i.ONE_MINUS_SRC_ALPHA,[wf]:i.ONE_MINUS_DST_COLOR,[Sf]:i.ONE_MINUS_DST_ALPHA,[Ef]:i.CONSTANT_COLOR,[Af]:i.ONE_MINUS_CONSTANT_COLOR,[Cf]:i.CONSTANT_ALPHA,[Rf]:i.ONE_MINUS_CONSTANT_ALPHA};function wt(D,O,me,Ce,le,ne,Ae,$e,yt,ot){if(D===Yn){v===!0&&(Le(i.BLEND),v=!1);return}if(v===!1&&(re(i.BLEND),v=!0),D!==hf){if(D!==m||ot!==M){if((f!==Ci||b!==Ci)&&(i.blendEquation(i.FUNC_ADD),f=Ci,b=Ci),ot)switch(D){case qn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dt:i.blendFunc(i.ONE,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ml:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ml:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,E=null,P=null,R=null,C.set(0,0,0),F=0,m=D,M=ot}return}le=le||O,ne=ne||me,Ae=Ae||Ce,(O!==f||le!==b)&&(i.blendEquationSeparate(kt[O],kt[le]),f=O,b=le),(me!==T||Ce!==E||ne!==P||Ae!==R)&&(i.blendFuncSeparate(A[me],A[Ce],A[ne],A[Ae]),T=me,E=Ce,P=ne,R=Ae),($e.equals(C)===!1||yt!==F)&&(i.blendColor($e.r,$e.g,$e.b,yt),C.copy($e),F=yt),m=D,M=!1}function Qe(D,O){D.side===Wn?Le(i.CULL_FACE):re(i.CULL_FACE);let me=D.side===pn;O&&(me=!me),Ke(me),D.blending===qn&&D.transparent===!1?wt(Yn):wt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const Ce=D.stencilWrite;o.setTest(Ce),Ce&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ne(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ke(D){S!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),S=D)}function Pe(D){D!==cf?(re(i.CULL_FACE),D!==L&&(D===vl?i.cullFace(i.BACK):D===uf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),L=D}function Ee(D){D!==q&&(ie&&i.lineWidth(D),q=D)}function Ne(D,O,me){D?(re(i.POLYGON_OFFSET_FILL),(Q!==O||ae!==me)&&(i.polygonOffset(O,me),Q=O,ae=me)):Le(i.POLYGON_OFFSET_FILL)}function nt(D){D?re(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function It(D){D===void 0&&(D=i.TEXTURE0+te-1),_e!==D&&(i.activeTexture(D),_e=D)}function _t(D,O,me){me===void 0&&(_e===null?me=i.TEXTURE0+te-1:me=_e);let Ce=we[me];Ce===void 0&&(Ce={type:void 0,texture:void 0},we[me]=Ce),(Ce.type!==D||Ce.texture!==O)&&(_e!==me&&(i.activeTexture(me),_e=me),i.bindTexture(D,O||ee[D]),Ce.type=D,Ce.texture=O)}function w(){const D=we[_e];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.texSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.texSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ze(){try{i.compressedTexSubImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{i.texStorage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Oe(){try{i.texStorage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ie(){try{i.texImage2D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{i.texImage3D(...arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(D){gt.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),gt.copy(D))}function qe(D){bt.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),bt.copy(D))}function Be(D,O){let me=l.get(O);me===void 0&&(me=new WeakMap,l.set(O,me));let Ce=me.get(D);Ce===void 0&&(Ce=i.getUniformBlockIndex(O,D.name),me.set(D,Ce))}function ye(D,O){const Ce=l.get(O).get(D);c.get(O)!==Ce&&(i.uniformBlockBinding(O,Ce,D.__bindingPointIndex),c.set(O,Ce))}function V(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},_e=null,we={},u={},d=new WeakMap,p=[],_=null,v=!1,m=null,f=null,T=null,E=null,b=null,P=null,R=null,C=new He(0,0,0),F=0,M=!1,S=null,L=null,q=null,Q=null,ae=null,gt.set(0,0,i.canvas.width,i.canvas.height),bt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:re,disable:Le,bindFramebuffer:Je,drawBuffers:Fe,useProgram:st,setBlending:wt,setMaterial:Qe,setFlipSided:Ke,setCullFace:Pe,setLineWidth:Ee,setPolygonOffset:Ne,setScissorTest:nt,activeTexture:It,bindTexture:_t,unbindTexture:w,compressedTexImage2D:g,compressedTexImage3D:z,texImage2D:Ie,texImage3D:de,updateUBOMapping:Be,uniformBlockBinding:ye,texStorage2D:pe,texStorage3D:Oe,texSubImage2D:J,texSubImage3D:se,compressedTexSubImage2D:$,compressedTexSubImage3D:ze,scissor:ge,viewport:qe,reset:V}}function i1(i,e,t,n,a,r,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new je,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,g){return p?new OffscreenCanvas(w,g):Xr("canvas")}function v(w,g,z){let J=1;const se=_t(w);if((se.width>z||se.height>z)&&(J=z/Math.max(se.width,se.height)),J<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const $=Math.floor(J*se.width),ze=Math.floor(J*se.height);u===void 0&&(u=_($,ze));const pe=g?_($,ze):u;return pe.width=$,pe.height=ze,pe.getContext("2d").drawImage(w,0,0,$,ze),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+$+"x"+ze+")."),pe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,g,z,J,se=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=g;if(g===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8)),g===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),g===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8)),g===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),g===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGB8UI),z===i.UNSIGNED_SHORT&&($=i.RGB16UI),z===i.UNSIGNED_INT&&($=i.RGB32UI),z===i.BYTE&&($=i.RGB8I),z===i.SHORT&&($=i.RGB16I),z===i.INT&&($=i.RGB32I)),g===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RGBA8UI),z===i.UNSIGNED_SHORT&&($=i.RGBA16UI),z===i.UNSIGNED_INT&&($=i.RGBA32UI),z===i.BYTE&&($=i.RGBA8I),z===i.SHORT&&($=i.RGBA16I),z===i.INT&&($=i.RGBA32I)),g===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),g===i.RGBA){const ze=se?Vr:mt.getTransfer(J);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=ze===Mt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(w,g){let z;return w?g===null||g===Ii||g===Oa?z=i.DEPTH24_STENCIL8:g===Xn?z=i.DEPTH32F_STENCIL8:g===ka&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ii||g===Oa?z=i.DEPTH_COMPONENT24:g===Xn?z=i.DEPTH_COMPONENT32F:g===ka&&(z=i.DEPTH_COMPONENT16),z}function P(w,g){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==Cn&&w.minFilter!==In?Math.log2(Math.max(g.width,g.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?g.mipmaps.length:1}function R(w){const g=w.target;g.removeEventListener("dispose",R),F(g),g.isVideoTexture&&h.delete(g)}function C(w){const g=w.target;g.removeEventListener("dispose",C),S(g)}function F(w){const g=n.get(w);if(g.__webglInit===void 0)return;const z=w.source,J=d.get(z);if(J){const se=J[g.__cacheKey];se.usedTimes--,se.usedTimes===0&&M(w),Object.keys(J).length===0&&d.delete(z)}n.remove(w)}function M(w){const g=n.get(w);i.deleteTexture(g.__webglTexture);const z=w.source,J=d.get(z);delete J[g.__cacheKey],s.memory.textures--}function S(w){const g=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(g.__webglFramebuffer[J]))for(let se=0;se<g.__webglFramebuffer[J].length;se++)i.deleteFramebuffer(g.__webglFramebuffer[J][se]);else i.deleteFramebuffer(g.__webglFramebuffer[J]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[J])}else{if(Array.isArray(g.__webglFramebuffer))for(let J=0;J<g.__webglFramebuffer.length;J++)i.deleteFramebuffer(g.__webglFramebuffer[J]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let J=0;J<g.__webglColorRenderbuffer.length;J++)g.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[J]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const z=w.textures;for(let J=0,se=z.length;J<se;J++){const $=n.get(z[J]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),s.memory.textures--),n.remove(z[J])}n.remove(w)}let L=0;function q(){L=0}function Q(){const w=L;return w>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+a.maxTextures),L+=1,w}function ae(w){const g=[];return g.push(w.wrapS),g.push(w.wrapT),g.push(w.wrapR||0),g.push(w.magFilter),g.push(w.minFilter),g.push(w.anisotropy),g.push(w.internalFormat),g.push(w.format),g.push(w.type),g.push(w.generateMipmaps),g.push(w.premultiplyAlpha),g.push(w.flipY),g.push(w.unpackAlignment),g.push(w.colorSpace),g.join()}function te(w,g){const z=n.get(w);if(w.isVideoTexture&&nt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&z.__version!==w.version){const J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(z,w,g);return}}else w.isExternalTexture&&(z.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+g)}function ie(w,g){const z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){ee(z,w,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+g)}function ce(w,g){const z=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&z.__version!==w.version){ee(z,w,g);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+g)}function Z(w,g){const z=n.get(w);if(w.version>0&&z.__version!==w.version){re(z,w,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+g)}const _e={[Fa]:i.REPEAT,[li]:i.CLAMP_TO_EDGE,[eo]:i.MIRRORED_REPEAT},we={[Cn]:i.NEAREST,[Df]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[In]:i.LINEAR,[ls]:i.LINEAR_MIPMAP_NEAREST,[Pi]:i.LINEAR_MIPMAP_LINEAR},De={[kf]:i.NEVER,[Vf]:i.ALWAYS,[Of]:i.LESS,[Zc]:i.LEQUAL,[Bf]:i.EQUAL,[Hf]:i.GEQUAL,[zf]:i.GREATER,[Gf]:i.NOTEQUAL};function at(w,g){if(g.type===Xn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===In||g.magFilter===ls||g.magFilter===ar||g.magFilter===Pi||g.minFilter===In||g.minFilter===ls||g.minFilter===ar||g.minFilter===Pi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,_e[g.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,_e[g.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,_e[g.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,we[g.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,we[g.minFilter]),g.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,De[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Cn||g.minFilter!==ar&&g.minFilter!==Pi||g.type===Xn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function gt(w,g){let z=!1;w.__webglInit===void 0&&(w.__webglInit=!0,g.addEventListener("dispose",R));const J=g.source;let se=d.get(J);se===void 0&&(se={},d.set(J,se));const $=ae(g);if($!==w.__cacheKey){se[$]===void 0&&(se[$]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,z=!0),se[$].usedTimes++;const ze=se[w.__cacheKey];ze!==void 0&&(se[w.__cacheKey].usedTimes--,ze.usedTimes===0&&M(g)),w.__cacheKey=$,w.__webglTexture=se[$].texture}return z}function bt(w,g,z){return Math.floor(Math.floor(w/z)/g)}function ct(w,g,z,J){const $=w.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,z,J,g.data);else{$.sort((de,ge)=>de.start-ge.start);let ze=0;for(let de=1;de<$.length;de++){const ge=$[ze],qe=$[de],Be=ge.start+ge.count,ye=bt(qe.start,g.width,4),V=bt(ge.start,g.width,4);qe.start<=Be+1&&ye===V&&bt(qe.start+qe.count-1,g.width,4)===ye?ge.count=Math.max(ge.count,qe.start+qe.count-ge.start):(++ze,$[ze]=qe)}$.length=ze+1;const pe=i.getParameter(i.UNPACK_ROW_LENGTH),Oe=i.getParameter(i.UNPACK_SKIP_PIXELS),Ie=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let de=0,ge=$.length;de<ge;de++){const qe=$[de],Be=Math.floor(qe.start/4),ye=Math.ceil(qe.count/4),V=Be%g.width,D=Math.floor(Be/g.width),O=ye,me=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,V),i.pixelStorei(i.UNPACK_SKIP_ROWS,D),t.texSubImage2D(i.TEXTURE_2D,0,V,D,O,me,z,J,g.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,pe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ie)}}function ee(w,g,z){let J=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(J=i.TEXTURE_3D);const se=gt(w,g),$=g.source;t.bindTexture(J,w.__webglTexture,i.TEXTURE0+z);const ze=n.get($);if($.version!==ze.__version||se===!0){t.activeTexture(i.TEXTURE0+z);const pe=mt.getPrimaries(mt.workingColorSpace),Oe=g.colorSpace===oi?null:mt.getPrimaries(g.colorSpace),Ie=g.colorSpace===oi||pe===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let de=v(g.image,!1,a.maxTextureSize);de=It(g,de);const ge=r.convert(g.format,g.colorSpace),qe=r.convert(g.type);let Be=E(g.internalFormat,ge,qe,g.colorSpace,g.isVideoTexture);at(J,g);let ye;const V=g.mipmaps,D=g.isVideoTexture!==!0,O=ze.__version===void 0||se===!0,me=$.dataReady,Ce=P(g,de);if(g.isDepthTexture)Be=b(g.format===za,g.type),O&&(D?t.texStorage2D(i.TEXTURE_2D,1,Be,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,Be,de.width,de.height,0,ge,qe,null));else if(g.isDataTexture)if(V.length>0){D&&O&&t.texStorage2D(i.TEXTURE_2D,Ce,Be,V[0].width,V[0].height);for(let le=0,ne=V.length;le<ne;le++)ye=V[le],D?me&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,ye.width,ye.height,ge,qe,ye.data):t.texImage2D(i.TEXTURE_2D,le,Be,ye.width,ye.height,0,ge,qe,ye.data);g.generateMipmaps=!1}else D?(O&&t.texStorage2D(i.TEXTURE_2D,Ce,Be,de.width,de.height),me&&ct(g,de,ge,qe)):t.texImage2D(i.TEXTURE_2D,0,Be,de.width,de.height,0,ge,qe,de.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){D&&O&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Be,V[0].width,V[0].height,de.depth);for(let le=0,ne=V.length;le<ne;le++)if(ye=V[le],g.format!==En)if(ge!==null)if(D){if(me)if(g.layerUpdates.size>0){const Ae=$l(ye.width,ye.height,g.format,g.type);for(const $e of g.layerUpdates){const yt=ye.data.subarray($e*Ae/ye.data.BYTES_PER_ELEMENT,($e+1)*Ae/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,$e,ye.width,ye.height,1,ge,yt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,ye.width,ye.height,de.depth,ge,ye.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,le,Be,ye.width,ye.height,de.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,le,0,0,0,ye.width,ye.height,de.depth,ge,qe,ye.data):t.texImage3D(i.TEXTURE_2D_ARRAY,le,Be,ye.width,ye.height,de.depth,0,ge,qe,ye.data)}else{D&&O&&t.texStorage2D(i.TEXTURE_2D,Ce,Be,V[0].width,V[0].height);for(let le=0,ne=V.length;le<ne;le++)ye=V[le],g.format!==En?ge!==null?D?me&&t.compressedTexSubImage2D(i.TEXTURE_2D,le,0,0,ye.width,ye.height,ge,ye.data):t.compressedTexImage2D(i.TEXTURE_2D,le,Be,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?me&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,ye.width,ye.height,ge,qe,ye.data):t.texImage2D(i.TEXTURE_2D,le,Be,ye.width,ye.height,0,ge,qe,ye.data)}else if(g.isDataArrayTexture)if(D){if(O&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ce,Be,de.width,de.height,de.depth),me)if(g.layerUpdates.size>0){const le=$l(de.width,de.height,g.format,g.type);for(const ne of g.layerUpdates){const Ae=de.data.subarray(ne*le/de.data.BYTES_PER_ELEMENT,(ne+1)*le/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ne,de.width,de.height,1,ge,qe,Ae)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,ge,qe,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Be,de.width,de.height,de.depth,0,ge,qe,de.data);else if(g.isData3DTexture)D?(O&&t.texStorage3D(i.TEXTURE_3D,Ce,Be,de.width,de.height,de.depth),me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,ge,qe,de.data)):t.texImage3D(i.TEXTURE_3D,0,Be,de.width,de.height,de.depth,0,ge,qe,de.data);else if(g.isFramebufferTexture){if(O)if(D)t.texStorage2D(i.TEXTURE_2D,Ce,Be,de.width,de.height);else{let le=de.width,ne=de.height;for(let Ae=0;Ae<Ce;Ae++)t.texImage2D(i.TEXTURE_2D,Ae,Be,le,ne,0,ge,qe,null),le>>=1,ne>>=1}}else if(V.length>0){if(D&&O){const le=_t(V[0]);t.texStorage2D(i.TEXTURE_2D,Ce,Be,le.width,le.height)}for(let le=0,ne=V.length;le<ne;le++)ye=V[le],D?me&&t.texSubImage2D(i.TEXTURE_2D,le,0,0,ge,qe,ye):t.texImage2D(i.TEXTURE_2D,le,Be,ge,qe,ye);g.generateMipmaps=!1}else if(D){if(O){const le=_t(de);t.texStorage2D(i.TEXTURE_2D,Ce,Be,le.width,le.height)}me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ge,qe,de)}else t.texImage2D(i.TEXTURE_2D,0,Be,ge,qe,de);m(g)&&f(J),ze.__version=$.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function re(w,g,z){if(g.image.length!==6)return;const J=gt(w,g),se=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+z);const $=n.get(se);if(se.version!==$.__version||J===!0){t.activeTexture(i.TEXTURE0+z);const ze=mt.getPrimaries(mt.workingColorSpace),pe=g.colorSpace===oi?null:mt.getPrimaries(g.colorSpace),Oe=g.colorSpace===oi||ze===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);const Ie=g.isCompressedTexture||g.image[0].isCompressedTexture,de=g.image[0]&&g.image[0].isDataTexture,ge=[];for(let ne=0;ne<6;ne++)!Ie&&!de?ge[ne]=v(g.image[ne],!0,a.maxCubemapSize):ge[ne]=de?g.image[ne].image:g.image[ne],ge[ne]=It(g,ge[ne]);const qe=ge[0],Be=r.convert(g.format,g.colorSpace),ye=r.convert(g.type),V=E(g.internalFormat,Be,ye,g.colorSpace),D=g.isVideoTexture!==!0,O=$.__version===void 0||J===!0,me=se.dataReady;let Ce=P(g,qe);at(i.TEXTURE_CUBE_MAP,g);let le;if(Ie){D&&O&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,V,qe.width,qe.height);for(let ne=0;ne<6;ne++){le=ge[ne].mipmaps;for(let Ae=0;Ae<le.length;Ae++){const $e=le[Ae];g.format!==En?Be!==null?D?me&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,$e.width,$e.height,Be,$e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,V,$e.width,$e.height,0,$e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,0,0,$e.width,$e.height,Be,ye,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae,V,$e.width,$e.height,0,Be,ye,$e.data)}}}else{if(le=g.mipmaps,D&&O){le.length>0&&Ce++;const ne=_t(ge[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,V,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(de){D?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,ge[ne].width,ge[ne].height,Be,ye,ge[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,V,ge[ne].width,ge[ne].height,0,Be,ye,ge[ne].data);for(let Ae=0;Ae<le.length;Ae++){const yt=le[Ae].image[ne].image;D?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,yt.width,yt.height,Be,ye,yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,V,yt.width,yt.height,0,Be,ye,yt.data)}}else{D?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Be,ye,ge[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,V,Be,ye,ge[ne]);for(let Ae=0;Ae<le.length;Ae++){const $e=le[Ae];D?me&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,0,0,Be,ye,$e.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ae+1,V,Be,ye,$e.image[ne])}}}m(g)&&f(i.TEXTURE_CUBE_MAP),$.__version=se.version,g.onUpdate&&g.onUpdate(g)}w.__version=g.version}function Le(w,g,z,J,se,$){const ze=r.convert(z.format,z.colorSpace),pe=r.convert(z.type),Oe=E(z.internalFormat,ze,pe,z.colorSpace),Ie=n.get(g),de=n.get(z);if(de.__renderTarget=g,!Ie.__hasExternalTextures){const ge=Math.max(1,g.width>>$),qe=Math.max(1,g.height>>$);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,$,Oe,ge,qe,g.depth,0,ze,pe,null):t.texImage2D(se,$,Oe,ge,qe,0,ze,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Ne(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,se,de.__webglTexture,0,Ee(g)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,se,de.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(w,g,z){if(i.bindRenderbuffer(i.RENDERBUFFER,w),g.depthBuffer){const J=g.depthTexture,se=J&&J.isDepthTexture?J.type:null,$=b(g.stencilBuffer,se),ze=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pe=Ee(g);Ne(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pe,$,g.width,g.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,pe,$,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,$,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ze,i.RENDERBUFFER,w)}else{const J=g.textures;for(let se=0;se<J.length;se++){const $=J[se],ze=r.convert($.format,$.colorSpace),pe=r.convert($.type),Oe=E($.internalFormat,ze,pe,$.colorSpace),Ie=Ee(g);z&&Ne(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ie,Oe,g.width,g.height):Ne(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ie,Oe,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Oe,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Fe(w,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(g.depthTexture);J.__renderTarget=g,(!J.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),te(g.depthTexture,0);const se=J.__webglTexture,$=Ee(g);if(g.depthTexture.format===Ba)Ne(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(g.depthTexture.format===za)Ne(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function st(w){const g=n.get(w),z=w.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==w.depthTexture){const J=w.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),J){const se=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,J.removeEventListener("dispose",se)};J.addEventListener("dispose",se),g.__depthDisposeCallback=se}g.__boundDepthTexture=J}if(w.depthTexture&&!g.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const J=w.texture.mipmaps;J&&J.length>0?Fe(g.__webglFramebuffer[0],w):Fe(g.__webglFramebuffer,w)}else if(z){g.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[J]),g.__webglDepthbuffer[J]===void 0)g.__webglDepthbuffer[J]=i.createRenderbuffer(),Je(g.__webglDepthbuffer[J],w,!1);else{const se=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,$)}}else{const J=w.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Je(g.__webglDepthbuffer,w,!1);else{const se=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function kt(w,g,z){const J=n.get(w);g!==void 0&&Le(J.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&st(w)}function A(w){const g=w.texture,z=n.get(w),J=n.get(g);w.addEventListener("dispose",C);const se=w.textures,$=w.isWebGLCubeRenderTarget===!0,ze=se.length>1;if(ze||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=g.version,s.memory.textures++),$){z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer[pe]=[];for(let Oe=0;Oe<g.mipmaps.length;Oe++)z.__webglFramebuffer[pe][Oe]=i.createFramebuffer()}else z.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){z.__webglFramebuffer=[];for(let pe=0;pe<g.mipmaps.length;pe++)z.__webglFramebuffer[pe]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(ze)for(let pe=0,Oe=se.length;pe<Oe;pe++){const Ie=n.get(se[pe]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=i.createTexture(),s.memory.textures++)}if(w.samples>0&&Ne(w)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let pe=0;pe<se.length;pe++){const Oe=se[pe];z.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[pe]);const Ie=r.convert(Oe.format,Oe.colorSpace),de=r.convert(Oe.type),ge=E(Oe.internalFormat,Ie,de,Oe.colorSpace,w.isXRRenderTarget===!0),qe=Ee(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,qe,ge,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,z.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Je(z.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),at(i.TEXTURE_CUBE_MAP,g);for(let pe=0;pe<6;pe++)if(g.mipmaps&&g.mipmaps.length>0)for(let Oe=0;Oe<g.mipmaps.length;Oe++)Le(z.__webglFramebuffer[pe][Oe],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,Oe);else Le(z.__webglFramebuffer[pe],w,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(g)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ze){for(let pe=0,Oe=se.length;pe<Oe;pe++){const Ie=se[pe],de=n.get(Ie);let ge=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ge=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,de.__webglTexture),at(ge,Ie),Le(z.__webglFramebuffer,w,Ie,i.COLOR_ATTACHMENT0+pe,ge,0),m(Ie)&&f(ge)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(pe=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,J.__webglTexture),at(pe,g),g.mipmaps&&g.mipmaps.length>0)for(let Oe=0;Oe<g.mipmaps.length;Oe++)Le(z.__webglFramebuffer[Oe],w,g,i.COLOR_ATTACHMENT0,pe,Oe);else Le(z.__webglFramebuffer,w,g,i.COLOR_ATTACHMENT0,pe,0);m(g)&&f(pe),t.unbindTexture()}w.depthBuffer&&st(w)}function wt(w){const g=w.textures;for(let z=0,J=g.length;z<J;z++){const se=g[z];if(m(se)){const $=T(w),ze=n.get(se).__webglTexture;t.bindTexture($,ze),f($),t.unbindTexture()}}}const Qe=[],Ke=[];function Pe(w){if(w.samples>0){if(Ne(w)===!1){const g=w.textures,z=w.width,J=w.height;let se=i.COLOR_BUFFER_BIT;const $=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ze=n.get(w),pe=g.length>1;if(pe)for(let Ie=0;Ie<g.length;Ie++)t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ze.__webglMultisampledFramebuffer);const Oe=w.texture.mipmaps;Oe&&Oe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let Ie=0;Ie<g.length;Ie++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ze.__webglColorRenderbuffer[Ie]);const de=n.get(g[Ie]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,z,J,0,0,z,J,se,i.NEAREST),c===!0&&(Qe.length=0,Ke.length=0,Qe.push(i.COLOR_ATTACHMENT0+Ie),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Qe.push($),Ke.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ke)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Qe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Ie=0;Ie<g.length;Ie++){t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.RENDERBUFFER,ze.__webglColorRenderbuffer[Ie]);const de=n.get(g[Ie]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ze.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ie,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ze.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const g=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Ee(w){return Math.min(a.maxSamples,w.samples)}function Ne(w){const g=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function nt(w){const g=s.render.frame;h.get(w)!==g&&(h.set(w,g),w.update())}function It(w,g){const z=w.colorSpace,J=w.format,se=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||z!==pa&&z!==oi&&(mt.getTransfer(z)===Mt?(J!==En||se!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),g}function _t(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=Q,this.resetTextureUnits=q,this.setTexture2D=te,this.setTexture2DArray=ie,this.setTexture3D=ce,this.setTextureCube=Z,this.rebindTextures=kt,this.setupRenderTarget=A,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=Pe,this.setupDepthRenderbuffer=st,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Ne}function a1(i,e){function t(n,a=oi){let r;const s=mt.getTransfer(a);if(n===$n)return i.UNSIGNED_BYTE;if(n===Xo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Yo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zc)return i.BYTE;if(n===Gc)return i.SHORT;if(n===ka)return i.UNSIGNED_SHORT;if(n===Wo)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===Xn)return i.FLOAT;if(n===Zn)return i.HALF_FLOAT;if(n===Wc)return i.ALPHA;if(n===Xc)return i.RGB;if(n===En)return i.RGBA;if(n===Ba)return i.DEPTH_COMPONENT;if(n===za)return i.DEPTH_STENCIL;if(n===Yc)return i.RED;if(n===qo)return i.RED_INTEGER;if(n===qc)return i.RG;if(n===Zo)return i.RG_INTEGER;if(n===Ko)return i.RGBA_INTEGER;if(n===kr||n===Or||n===Br||n===zr)if(s===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===kr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===kr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Or)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===to||n===no||n===io||n===ao)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===to)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===no)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===io)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ro||n===so||n===oo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ro||n===so)return s===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===oo)return s===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===lo||n===co||n===uo||n===fo||n===ho||n===po||n===mo||n===go||n===_o||n===yo||n===vo||n===xo||n===Mo||n===So)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===lo)return s===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===co)return s===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===uo)return s===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fo)return s===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ho)return s===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===po)return s===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mo)return s===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===go)return s===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_o)return s===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yo)return s===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vo)return s===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xo)return s===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mo)return s===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===So)return s===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===bo||n===wo||n===To)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===bo)return s===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eo||n===Ao||n===Co||n===Ro)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Eo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ao)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Co)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ro)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Oa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const r1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,s1=`
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

}`;class o1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new lu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new on({vertexShader:r1,fragmentShader:s1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Wt(new Li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class l1 extends va{constructor(e,t){super();const n=this;let a=null,r=1,s=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,_=null;const v=typeof XRWebGLBinding<"u",m=new o1,f={},T=t.getContextAttributes();let E=null,b=null;const P=[],R=[],C=new je;let F=null;const M=new vn;M.viewport=new Nt;const S=new vn;S.viewport=new Nt;const L=[M,S],q=new Ah;let Q=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let re=P[ee];return re===void 0&&(re=new Ls,P[ee]=re),re.getTargetRaySpace()},this.getControllerGrip=function(ee){let re=P[ee];return re===void 0&&(re=new Ls,P[ee]=re),re.getGripSpace()},this.getHand=function(ee){let re=P[ee];return re===void 0&&(re=new Ls,P[ee]=re),re.getHandSpace()};function te(ee){const re=R.indexOf(ee.inputSource);if(re===-1)return;const Le=P[re];Le!==void 0&&(Le.update(ee.inputSource,ee.frame,l||s),Le.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ie(){a.removeEventListener("select",te),a.removeEventListener("selectstart",te),a.removeEventListener("selectend",te),a.removeEventListener("squeeze",te),a.removeEventListener("squeezestart",te),a.removeEventListener("squeezeend",te),a.removeEventListener("end",ie),a.removeEventListener("inputsourceschange",ce);for(let ee=0;ee<P.length;ee++){const re=R[ee];re!==null&&(R[ee]=null,P[ee].disconnect(re))}Q=null,ae=null,m.reset();for(const ee in f)delete f[ee];e.setRenderTarget(E),p=null,d=null,u=null,a=null,b=null,ct.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){r=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){o=ee,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(ee){l=ee},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(a,t)),u},this.getFrame=function(){return _},this.getSession=function(){return a},this.setSession=async function(ee){if(a=ee,a!==null){if(E=e.getRenderTarget(),a.addEventListener("select",te),a.addEventListener("selectstart",te),a.addEventListener("selectend",te),a.addEventListener("squeeze",te),a.addEventListener("squeezestart",te),a.addEventListener("squeezeend",te),a.addEventListener("end",ie),a.addEventListener("inputsourceschange",ce),T.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(C),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,Je=null,Fe=null;T.depth&&(Fe=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Le=T.stencil?za:Ba,Je=T.stencil?Oa:Ii);const st={colorFormat:t.RGBA8,depthFormat:Fe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(st),a.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Rn(d.textureWidth,d.textureHeight,{format:En,type:$n,depthTexture:new ou(d.textureWidth,d.textureHeight,Je,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Le={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(a,t,Le),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Rn(p.framebufferWidth,p.framebufferHeight,{format:En,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await a.requestReferenceSpace(o),ct.setContext(a),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ce(ee){for(let re=0;re<ee.removed.length;re++){const Le=ee.removed[re],Je=R.indexOf(Le);Je>=0&&(R[Je]=null,P[Je].disconnect(Le))}for(let re=0;re<ee.added.length;re++){const Le=ee.added[re];let Je=R.indexOf(Le);if(Je===-1){for(let st=0;st<P.length;st++)if(st>=R.length){R.push(Le),Je=st;break}else if(R[st]===null){R[st]=Le,Je=st;break}if(Je===-1)break}const Fe=P[Je];Fe&&Fe.connect(Le)}}const Z=new U,_e=new U;function we(ee,re,Le){Z.setFromMatrixPosition(re.matrixWorld),_e.setFromMatrixPosition(Le.matrixWorld);const Je=Z.distanceTo(_e),Fe=re.projectionMatrix.elements,st=Le.projectionMatrix.elements,kt=Fe[14]/(Fe[10]-1),A=Fe[14]/(Fe[10]+1),wt=(Fe[9]+1)/Fe[5],Qe=(Fe[9]-1)/Fe[5],Ke=(Fe[8]-1)/Fe[0],Pe=(st[8]+1)/st[0],Ee=kt*Ke,Ne=kt*Pe,nt=Je/(-Ke+Pe),It=nt*-Ke;if(re.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(It),ee.translateZ(nt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),Fe[10]===-1)ee.projectionMatrix.copy(re.projectionMatrix),ee.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const _t=kt+nt,w=A+nt,g=Ee-It,z=Ne+(Je-It),J=wt*A/w*_t,se=Qe*A/w*_t;ee.projectionMatrix.makePerspective(g,z,J,se,_t,w),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function De(ee,re){re===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(re.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(a===null)return;let re=ee.near,Le=ee.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(Le=m.depthFar)),q.near=S.near=M.near=re,q.far=S.far=M.far=Le,(Q!==q.near||ae!==q.far)&&(a.updateRenderState({depthNear:q.near,depthFar:q.far}),Q=q.near,ae=q.far),q.layers.mask=ee.layers.mask|6,M.layers.mask=q.layers.mask&3,S.layers.mask=q.layers.mask&5;const Je=ee.parent,Fe=q.cameras;De(q,Je);for(let st=0;st<Fe.length;st++)De(Fe[st],Je);Fe.length===2?we(q,M,S):q.projectionMatrix.copy(M.projectionMatrix),at(ee,q,Je)};function at(ee,re,Le){Le===null?ee.matrix.copy(re.matrixWorld):(ee.matrix.copy(Le.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(re.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(re.projectionMatrix),ee.projectionMatrixInverse.copy(re.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=Lo*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(ee){c=ee,d!==null&&(d.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(q)},this.getCameraTexture=function(ee){return f[ee]};let gt=null;function bt(ee,re){if(h=re.getViewerPose(l||s),_=re,h!==null){const Le=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let Je=!1;Le.length!==q.cameras.length&&(q.cameras.length=0,Je=!0);for(let A=0;A<Le.length;A++){const wt=Le[A];let Qe=null;if(p!==null)Qe=p.getViewport(wt);else{const Pe=u.getViewSubImage(d,wt);Qe=Pe.viewport,A===0&&(e.setRenderTargetTextures(b,Pe.colorTexture,Pe.depthStencilTexture),e.setRenderTarget(b))}let Ke=L[A];Ke===void 0&&(Ke=new vn,Ke.layers.enable(A),Ke.viewport=new Nt,L[A]=Ke),Ke.matrix.fromArray(wt.transform.matrix),Ke.matrix.decompose(Ke.position,Ke.quaternion,Ke.scale),Ke.projectionMatrix.fromArray(wt.projectionMatrix),Ke.projectionMatrixInverse.copy(Ke.projectionMatrix).invert(),Ke.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),A===0&&(q.matrix.copy(Ke.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Je===!0&&q.cameras.push(Ke)}const Fe=a.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){u=n.getBinding();const A=u.getDepthInformation(Le[0]);A&&A.isValid&&A.texture&&m.init(A,a.renderState)}if(Fe&&Fe.includes("camera-access")&&v){e.state.unbindTexture(),u=n.getBinding();for(let A=0;A<Le.length;A++){const wt=Le[A].camera;if(wt){let Qe=f[wt];Qe||(Qe=new lu,f[wt]=Qe);const Ke=u.getCameraImage(wt);Qe.sourceTexture=Ke}}}}for(let Le=0;Le<P.length;Le++){const Je=R[Le],Fe=P[Le];Je!==null&&Fe!==void 0&&Fe.update(Je,re,l||s)}gt&&gt(ee,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),_=null}const ct=new uu;ct.setAnimationLoop(bt),this.setAnimationLoop=function(ee){gt=ee},this.dispose=function(){}}}const Ti=new jn,c1=new Dt;function u1(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,tu(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function a(m,f,T,E,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),_(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(s(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,T,E):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===pn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===pn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),E=T.envMap,b=T.envMapRotation;E&&(m.envMap.value=E,Ti.copy(b),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),m.envMapRotation.value.setFromMatrix4(c1.makeRotationFromEuler(Ti)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function s(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,T,E){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=E*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===pn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function f1(i,e,t,n){let a={},r={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(T,E){const b=E.program;n.uniformBlockBinding(T,b)}function l(T,E){let b=a[T.id];b===void 0&&(_(T),b=h(T),a[T.id]=b,T.addEventListener("dispose",m));const P=E.program;n.updateUBOMapping(T,P);const R=e.render.frame;r[T.id]!==R&&(d(T),r[T.id]=R)}function h(T){const E=u();T.__bindingPointIndex=E;const b=i.createBuffer(),P=T.__size,R=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,b),b}function u(){for(let T=0;T<o;T++)if(s.indexOf(T)===-1)return s.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=a[T.id],b=T.uniforms,P=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let R=0,C=b.length;R<C;R++){const F=Array.isArray(b[R])?b[R]:[b[R]];for(let M=0,S=F.length;M<S;M++){const L=F[M];if(p(L,R,M,P)===!0){const q=L.__offset,Q=Array.isArray(L.value)?L.value:[L.value];let ae=0;for(let te=0;te<Q.length;te++){const ie=Q[te],ce=v(ie);typeof ie=="number"||typeof ie=="boolean"?(L.__data[0]=ie,i.bufferSubData(i.UNIFORM_BUFFER,q+ae,L.__data)):ie.isMatrix3?(L.__data[0]=ie.elements[0],L.__data[1]=ie.elements[1],L.__data[2]=ie.elements[2],L.__data[3]=0,L.__data[4]=ie.elements[3],L.__data[5]=ie.elements[4],L.__data[6]=ie.elements[5],L.__data[7]=0,L.__data[8]=ie.elements[6],L.__data[9]=ie.elements[7],L.__data[10]=ie.elements[8],L.__data[11]=0):(ie.toArray(L.__data,ae),ae+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,q,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,E,b,P){const R=T.value,C=E+"_"+b;if(P[C]===void 0)return typeof R=="number"||typeof R=="boolean"?P[C]=R:P[C]=R.clone(),!0;{const F=P[C];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return P[C]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function _(T){const E=T.uniforms;let b=0;const P=16;for(let C=0,F=E.length;C<F;C++){const M=Array.isArray(E[C])?E[C]:[E[C]];for(let S=0,L=M.length;S<L;S++){const q=M[S],Q=Array.isArray(q.value)?q.value:[q.value];for(let ae=0,te=Q.length;ae<te;ae++){const ie=Q[ae],ce=v(ie),Z=b%P,_e=Z%ce.boundary,we=Z+_e;b+=_e,we!==0&&P-we<ce.storage&&(b+=P-we),q.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=b,b+=ce.storage}}}const R=b%P;return R>0&&(b+=P-R),T.__size=b,T.__cache={},this}function v(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const b=s.indexOf(E.__bindingPointIndex);s.splice(b,1),i.deleteBuffer(a[E.id]),delete a[E.id],delete r[E.id]}function f(){for(const T in a)i.deleteBuffer(a[T]);s=[],a={},r={}}return{bind:c,update:l,dispose:f}}class h1{constructor(e={}){const{canvas:t=Xf(),context:n=null,depth:a=!0,stencil:r=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;const _=new Uint32Array(4),v=new Int32Array(4);let m=null,f=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1;this._outputColorSpace=dn;let R=0,C=0,F=null,M=-1,S=null;const L=new Nt,q=new Nt;let Q=null;const ae=new He(0);let te=0,ie=t.width,ce=t.height,Z=1,_e=null,we=null;const De=new Nt(0,0,ie,ce),at=new Nt(0,0,ie,ce);let gt=!1;const bt=new ru;let ct=!1,ee=!1;const re=new Dt,Le=new U,Je=new Nt,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let st=!1;function kt(){return F===null?Z:1}let A=n;function wt(y,N){return t.getContext(y,N)}try{const y={alpha:!0,depth:a,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ho}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Ce,!1),t.addEventListener("webglcontextcreationerror",le,!1),A===null){const N="webgl2";if(A=wt(N,y),A===null)throw wt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Qe,Ke,Pe,Ee,Ne,nt,It,_t,w,g,z,J,se,$,ze,pe,Oe,Ie,de,ge,qe,Be,ye,V;function D(){Qe=new S0(A),Qe.init(),Be=new a1(A,Qe),Ke=new m0(A,Qe,e,Be),Pe=new n1(A,Qe),Ke.reversedDepthBuffer&&d&&Pe.buffers.depth.setReversed(!0),Ee=new T0(A),Ne=new Vm,nt=new i1(A,Qe,Pe,Ne,Ke,Be,Ee),It=new _0(b),_t=new M0(b),w=new Lh(A),ye=new d0(A,w),g=new b0(A,w,Ee,ye),z=new A0(A,g,w,Ee),de=new E0(A,Ke,nt),pe=new g0(Ne),J=new Hm(b,It,_t,Qe,Ke,ye,pe),se=new u1(b,Ne),$=new Xm,ze=new jm(Qe),Ie=new h0(b,It,_t,Pe,z,p,c),Oe=new e1(b,z,Ke),V=new f1(A,Ee,Ke,Pe),ge=new p0(A,Qe,Ee),qe=new w0(A,Qe,Ee),Ee.programs=J.programs,b.capabilities=Ke,b.extensions=Qe,b.properties=Ne,b.renderLists=$,b.shadowMap=Oe,b.state=Pe,b.info=Ee}D();const O=new l1(b,A);this.xr=O,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const y=Qe.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Qe.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(y){y!==void 0&&(Z=y,this.setSize(ie,ce,!1))},this.getSize=function(y){return y.set(ie,ce)},this.setSize=function(y,N,X=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ie=y,ce=N,t.width=Math.floor(y*Z),t.height=Math.floor(N*Z),X===!0&&(t.style.width=y+"px",t.style.height=N+"px"),this.setViewport(0,0,y,N)},this.getDrawingBufferSize=function(y){return y.set(ie*Z,ce*Z).floor()},this.setDrawingBufferSize=function(y,N,X){ie=y,ce=N,Z=X,t.width=Math.floor(y*X),t.height=Math.floor(N*X),this.setViewport(0,0,y,N)},this.getCurrentViewport=function(y){return y.copy(L)},this.getViewport=function(y){return y.copy(De)},this.setViewport=function(y,N,X,Y){y.isVector4?De.set(y.x,y.y,y.z,y.w):De.set(y,N,X,Y),Pe.viewport(L.copy(De).multiplyScalar(Z).round())},this.getScissor=function(y){return y.copy(at)},this.setScissor=function(y,N,X,Y){y.isVector4?at.set(y.x,y.y,y.z,y.w):at.set(y,N,X,Y),Pe.scissor(q.copy(at).multiplyScalar(Z).round())},this.getScissorTest=function(){return gt},this.setScissorTest=function(y){Pe.setScissorTest(gt=y)},this.setOpaqueSort=function(y){_e=y},this.setTransparentSort=function(y){we=y},this.getClearColor=function(y){return y.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor(...arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha(...arguments)},this.clear=function(y=!0,N=!0,X=!0){let Y=0;if(y){let B=!1;if(F!==null){const fe=F.texture.format;B=fe===Ko||fe===Zo||fe===qo}if(B){const fe=F.texture.type,Me=fe===$n||fe===Ii||fe===ka||fe===Oa||fe===Xo||fe===Yo,Ue=Ie.getClearColor(),Re=Ie.getClearAlpha(),Ve=Ue.r,Ye=Ue.g,We=Ue.b;Me?(_[0]=Ve,_[1]=Ye,_[2]=We,_[3]=Re,A.clearBufferuiv(A.COLOR,0,_)):(v[0]=Ve,v[1]=Ye,v[2]=We,v[3]=Re,A.clearBufferiv(A.COLOR,0,v))}else Y|=A.COLOR_BUFFER_BIT}N&&(Y|=A.DEPTH_BUFFER_BIT),X&&(Y|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Ce,!1),t.removeEventListener("webglcontextcreationerror",le,!1),Ie.dispose(),$.dispose(),ze.dispose(),Ne.dispose(),It.dispose(),_t.dispose(),z.dispose(),ye.dispose(),V.dispose(),J.dispose(),O.dispose(),O.removeEventListener("sessionstart",cn),O.removeEventListener("sessionend",mi),Mn.stop()};function me(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ce(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const y=Ee.autoReset,N=Oe.enabled,X=Oe.autoUpdate,Y=Oe.needsUpdate,B=Oe.type;D(),Ee.autoReset=y,Oe.enabled=N,Oe.autoUpdate=X,Oe.needsUpdate=Y,Oe.type=B}function le(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function ne(y){const N=y.target;N.removeEventListener("dispose",ne),Ae(N)}function Ae(y){$e(y),Ne.remove(y)}function $e(y){const N=Ne.get(y).programs;N!==void 0&&(N.forEach(function(X){J.releaseProgram(X)}),y.isShaderMaterial&&J.releaseShaderCache(y))}this.renderBufferDirect=function(y,N,X,Y,B,fe){N===null&&(N=Fe);const Me=B.isMesh&&B.matrixWorld.determinant()<0,Ue=zi(y,N,X,Y,B);Pe.setMaterial(Y,Me);let Re=X.index,Ve=1;if(Y.wireframe===!0){if(Re=g.getWireframeAttribute(X),Re===void 0)return;Ve=2}const Ye=X.drawRange,We=X.attributes.position;let tt=Ye.start*Ve,pt=(Ye.start+Ye.count)*Ve;fe!==null&&(tt=Math.max(tt,fe.start*Ve),pt=Math.min(pt,(fe.start+fe.count)*Ve)),Re!==null?(tt=Math.max(tt,0),pt=Math.min(pt,Re.count)):We!=null&&(tt=Math.max(tt,0),pt=Math.min(pt,We.count));const At=pt-tt;if(At<0||At===1/0)return;ye.setup(B,Y,Ue,X,Re);let H,oe=ge;if(Re!==null&&(H=w.get(Re),oe=qe,oe.setIndex(H)),B.isMesh)Y.wireframe===!0?(Pe.setLineWidth(Y.wireframeLinewidth*kt()),oe.setMode(A.LINES)):oe.setMode(A.TRIANGLES);else if(B.isLine){let Se=Y.linewidth;Se===void 0&&(Se=1),Pe.setLineWidth(Se*kt()),B.isLineSegments?oe.setMode(A.LINES):B.isLineLoop?oe.setMode(A.LINE_LOOP):oe.setMode(A.LINE_STRIP)}else B.isPoints?oe.setMode(A.POINTS):B.isSprite&&oe.setMode(A.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ga("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),oe.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))oe.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Se=B._multiDrawStarts,Et=B._multiDrawCounts,ht=B._multiDrawCount,nn=Re?w.get(Re).bytesPerElement:1,ei=Ne.get(Y).currentProgram.getUniforms();for(let an=0;an<ht;an++)ei.setValue(A,"_gl_DrawID",an),oe.render(Se[an]/nn,Et[an])}else if(B.isInstancedMesh)oe.renderInstances(tt,At,B.count);else if(X.isInstancedBufferGeometry){const Se=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Et=Math.min(X.instanceCount,Se);oe.renderInstances(tt,At,Et)}else oe.render(tt,At)};function yt(y,N,X){y.transparent===!0&&y.side===Wn&&y.forceSinglePass===!1?(y.side=pn,y.needsUpdate=!0,Oi(y,N,X),y.side=hi,y.needsUpdate=!0,Oi(y,N,X),y.side=Wn):Oi(y,N,X)}this.compile=function(y,N,X=null){X===null&&(X=y),f=ze.get(X),f.init(N),E.push(f),X.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),y!==X&&y.traverseVisible(function(B){B.isLight&&B.layers.test(N.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights();const Y=new Set;return y.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const fe=B.material;if(fe)if(Array.isArray(fe))for(let Me=0;Me<fe.length;Me++){const Ue=fe[Me];yt(Ue,X,B),Y.add(Ue)}else yt(fe,X,B),Y.add(fe)}),f=E.pop(),Y},this.compileAsync=function(y,N,X=null){const Y=this.compile(y,N,X);return new Promise(B=>{function fe(){if(Y.forEach(function(Me){Ne.get(Me).currentProgram.isReady()&&Y.delete(Me)}),Y.size===0){B(y);return}setTimeout(fe,10)}Qe.get("KHR_parallel_shader_compile")!==null?fe():setTimeout(fe,10)})};let ot=null;function tn(y){ot&&ot(y)}function cn(){Mn.stop()}function mi(){Mn.start()}const Mn=new uu;Mn.setAnimationLoop(tn),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(y){ot=y,O.setAnimationLoop(y),y===null?Mn.stop():Mn.start()},O.addEventListener("sessionstart",cn),O.addEventListener("sessionend",mi),this.render=function(y,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(N),N=O.getCamera()),y.isScene===!0&&y.onBeforeRender(b,y,N,F),f=ze.get(y,E.length),f.init(N),E.push(f),re.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),bt.setFromProjectionMatrix(re,Un,N.reversedDepth),ee=this.localClippingEnabled,ct=pe.init(this.clippingPlanes,ee),m=$.get(y,T.length),m.init(),T.push(m),O.enabled===!0&&O.isPresenting===!0){const fe=b.xr.getDepthSensingMesh();fe!==null&&gi(fe,N,-1/0,b.sortObjects)}gi(y,N,0,b.sortObjects),m.finish(),b.sortObjects===!0&&m.sort(_e,we),st=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,st&&Ie.addToRenderList(m,y),this.info.render.frame++,ct===!0&&pe.beginShadows();const X=f.state.shadowsArray;Oe.render(X,y,N),ct===!0&&pe.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,B=m.transmissive;if(f.setupLights(),N.isArrayCamera){const fe=N.cameras;if(B.length>0)for(let Me=0,Ue=fe.length;Me<Ue;Me++){const Re=fe[Me];$a(Y,B,y,Re)}st&&Ie.render(y);for(let Me=0,Ue=fe.length;Me<Ue;Me++){const Re=fe[Me];Sa(m,y,Re,Re.viewport)}}else B.length>0&&$a(Y,B,y,N),st&&Ie.render(y),Sa(m,y,N);F!==null&&C===0&&(nt.updateMultisampleRenderTarget(F),nt.updateRenderTargetMipmap(F)),y.isScene===!0&&y.onAfterRender(b,y,N),ye.resetDefaultState(),M=-1,S=null,E.pop(),E.length>0?(f=E[E.length-1],ct===!0&&pe.setGlobalState(b.clippingPlanes,f.state.camera)):f=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function gi(y,N,X,Y){if(y.visible===!1)return;if(y.layers.test(N.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(N);else if(y.isLight)f.pushLight(y),y.castShadow&&f.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||bt.intersectsSprite(y)){Y&&Je.setFromMatrixPosition(y.matrixWorld).applyMatrix4(re);const Me=z.update(y),Ue=y.material;Ue.visible&&m.push(y,Me,Ue,X,Je.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||bt.intersectsObject(y))){const Me=z.update(y),Ue=y.material;if(Y&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Je.copy(y.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Je.copy(Me.boundingSphere.center)),Je.applyMatrix4(y.matrixWorld).applyMatrix4(re)),Array.isArray(Ue)){const Re=Me.groups;for(let Ve=0,Ye=Re.length;Ve<Ye;Ve++){const We=Re[Ve],tt=Ue[We.materialIndex];tt&&tt.visible&&m.push(y,Me,tt,X,Je.z,We)}}else Ue.visible&&m.push(y,Me,Ue,X,Je.z,null)}}const fe=y.children;for(let Me=0,Ue=fe.length;Me<Ue;Me++)gi(fe[Me],N,X,Y)}function Sa(y,N,X,Y){const B=y.opaque,fe=y.transmissive,Me=y.transparent;f.setupLightsView(X),ct===!0&&pe.setGlobalState(b.clippingPlanes,X),Y&&Pe.viewport(L.copy(Y)),B.length>0&&_i(B,N,X),fe.length>0&&_i(fe,N,X),Me.length>0&&_i(Me,N,X),Pe.buffers.depth.setTest(!0),Pe.buffers.depth.setMask(!0),Pe.buffers.color.setMask(!0),Pe.setPolygonOffset(!1)}function $a(y,N,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Y.id]===void 0&&(f.state.transmissionRenderTarget[Y.id]=new Rn(1,1,{generateMipmaps:!0,type:Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float")?Zn:$n,minFilter:Pi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));const fe=f.state.transmissionRenderTarget[Y.id],Me=Y.viewport||L;fe.setSize(Me.z*b.transmissionResolutionScale,Me.w*b.transmissionResolutionScale);const Ue=b.getRenderTarget(),Re=b.getActiveCubeFace(),Ve=b.getActiveMipmapLevel();b.setRenderTarget(fe),b.getClearColor(ae),te=b.getClearAlpha(),te<1&&b.setClearColor(16777215,.5),b.clear(),st&&Ie.render(X);const Ye=b.toneMapping;b.toneMapping=ci;const We=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),f.setupLightsView(Y),ct===!0&&pe.setGlobalState(b.clippingPlanes,Y),_i(y,X,Y),nt.updateMultisampleRenderTarget(fe),nt.updateRenderTargetMipmap(fe),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let pt=0,At=N.length;pt<At;pt++){const H=N[pt],oe=H.object,Se=H.geometry,Et=H.material,ht=H.group;if(Et.side===Wn&&oe.layers.test(Y.layers)){const nn=Et.side;Et.side=pn,Et.needsUpdate=!0,ja(oe,X,Y,Se,Et,ht),Et.side=nn,Et.needsUpdate=!0,tt=!0}}tt===!0&&(nt.updateMultisampleRenderTarget(fe),nt.updateRenderTargetMipmap(fe))}b.setRenderTarget(Ue,Re,Ve),b.setClearColor(ae,te),We!==void 0&&(Y.viewport=We),b.toneMapping=Ye}function _i(y,N,X){const Y=N.isScene===!0?N.overrideMaterial:null;for(let B=0,fe=y.length;B<fe;B++){const Me=y[B],Ue=Me.object,Re=Me.geometry,Ve=Me.group;let Ye=Me.material;Ye.allowOverride===!0&&Y!==null&&(Ye=Y),Ue.layers.test(X.layers)&&ja(Ue,N,X,Re,Ye,Ve)}}function ja(y,N,X,Y,B,fe){y.onBeforeRender(b,N,X,Y,B,fe),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),B.onBeforeRender(b,N,X,Y,y,fe),B.transparent===!0&&B.side===Wn&&B.forceSinglePass===!1?(B.side=pn,B.needsUpdate=!0,b.renderBufferDirect(X,N,Y,B,y,fe),B.side=hi,B.needsUpdate=!0,b.renderBufferDirect(X,N,Y,B,y,fe),B.side=Wn):b.renderBufferDirect(X,N,Y,B,y,fe),y.onAfterRender(b,N,X,Y,B,fe)}function Oi(y,N,X){N.isScene!==!0&&(N=Fe);const Y=Ne.get(y),B=f.state.lights,fe=f.state.shadowsArray,Me=B.state.version,Ue=J.getParameters(y,B.state,fe,N,X),Re=J.getProgramCacheKey(Ue);let Ve=Y.programs;Y.environment=y.isMeshStandardMaterial?N.environment:null,Y.fog=N.fog,Y.envMap=(y.isMeshStandardMaterial?_t:It).get(y.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&y.envMap===null?N.environmentRotation:y.envMapRotation,Ve===void 0&&(y.addEventListener("dispose",ne),Ve=new Map,Y.programs=Ve);let Ye=Ve.get(Re);if(Ye!==void 0){if(Y.currentProgram===Ye&&Y.lightsStateVersion===Me)return Bi(y,Ue),Ye}else Ue.uniforms=J.getUniforms(y),y.onBeforeCompile(Ue,b),Ye=J.acquireProgram(Ue,Re),Ve.set(Re,Ye),Y.uniforms=Ue.uniforms;const We=Y.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(We.clippingPlanes=pe.uniform),Bi(y,Ue),Y.needsLights=ts(y),Y.lightsStateVersion=Me,Y.needsLights&&(We.ambientLightColor.value=B.state.ambient,We.lightProbe.value=B.state.probe,We.directionalLights.value=B.state.directional,We.directionalLightShadows.value=B.state.directionalShadow,We.spotLights.value=B.state.spot,We.spotLightShadows.value=B.state.spotShadow,We.rectAreaLights.value=B.state.rectArea,We.ltc_1.value=B.state.rectAreaLTC1,We.ltc_2.value=B.state.rectAreaLTC2,We.pointLights.value=B.state.point,We.pointLightShadows.value=B.state.pointShadow,We.hemisphereLights.value=B.state.hemi,We.directionalShadowMap.value=B.state.directionalShadowMap,We.directionalShadowMatrix.value=B.state.directionalShadowMatrix,We.spotShadowMap.value=B.state.spotShadowMap,We.spotLightMatrix.value=B.state.spotLightMatrix,We.spotLightMap.value=B.state.spotLightMap,We.pointShadowMap.value=B.state.pointShadowMap,We.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Ye,Y.uniformsList=null,Ye}function Ja(y){if(y.uniformsList===null){const N=y.currentProgram.getUniforms();y.uniformsList=Gr.seqWithValue(N.seq,y.uniforms)}return y.uniformsList}function Bi(y,N){const X=Ne.get(y);X.outputColorSpace=N.outputColorSpace,X.batching=N.batching,X.batchingColor=N.batchingColor,X.instancing=N.instancing,X.instancingColor=N.instancingColor,X.instancingMorph=N.instancingMorph,X.skinning=N.skinning,X.morphTargets=N.morphTargets,X.morphNormals=N.morphNormals,X.morphColors=N.morphColors,X.morphTargetsCount=N.morphTargetsCount,X.numClippingPlanes=N.numClippingPlanes,X.numIntersection=N.numClipIntersection,X.vertexAlphas=N.vertexAlphas,X.vertexTangents=N.vertexTangents,X.toneMapping=N.toneMapping}function zi(y,N,X,Y,B){N.isScene!==!0&&(N=Fe),nt.resetTextureUnits();const fe=N.fog,Me=Y.isMeshStandardMaterial?N.environment:null,Ue=F===null?b.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:pa,Re=(Y.isMeshStandardMaterial?_t:It).get(Y.envMap||Me),Ve=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ye=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),We=!!X.morphAttributes.position,tt=!!X.morphAttributes.normal,pt=!!X.morphAttributes.color;let At=ci;Y.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(At=b.toneMapping);const H=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,oe=H!==void 0?H.length:0,Se=Ne.get(Y),Et=f.state.lights;if(ct===!0&&(ee===!0||y!==S)){const Gt=y===S&&Y.id===M;pe.setState(Y,y,Gt)}let ht=!1;Y.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==Et.state.version||Se.outputColorSpace!==Ue||B.isBatchedMesh&&Se.batching===!1||!B.isBatchedMesh&&Se.batching===!0||B.isBatchedMesh&&Se.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Se.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Se.instancing===!1||!B.isInstancedMesh&&Se.instancing===!0||B.isSkinnedMesh&&Se.skinning===!1||!B.isSkinnedMesh&&Se.skinning===!0||B.isInstancedMesh&&Se.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Se.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Se.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Se.instancingMorph===!1&&B.morphTexture!==null||Se.envMap!==Re||Y.fog===!0&&Se.fog!==fe||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==pe.numPlanes||Se.numIntersection!==pe.numIntersection)||Se.vertexAlphas!==Ve||Se.vertexTangents!==Ye||Se.morphTargets!==We||Se.morphNormals!==tt||Se.morphColors!==pt||Se.toneMapping!==At||Se.morphTargetsCount!==oe)&&(ht=!0):(ht=!0,Se.__version=Y.version);let nn=Se.currentProgram;ht===!0&&(nn=Oi(Y,N,B));let ei=!1,an=!1,yi=!1;const Ct=nn.getUniforms(),un=Se.uniforms;if(Pe.useProgram(nn.program)&&(ei=!0,an=!0,yi=!0),Y.id!==M&&(M=Y.id,an=!0),ei||S!==y){Pe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Ct.setValue(A,"projectionMatrix",y.projectionMatrix),Ct.setValue(A,"viewMatrix",y.matrixWorldInverse);const Ht=Ct.map.cameraPosition;Ht!==void 0&&Ht.setValue(A,Le.setFromMatrixPosition(y.matrixWorld)),Ke.logarithmicDepthBuffer&&Ct.setValue(A,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ct.setValue(A,"isOrthographic",y.isOrthographicCamera===!0),S!==y&&(S=y,an=!0,yi=!0)}if(B.isSkinnedMesh){Ct.setOptional(A,B,"bindMatrix"),Ct.setOptional(A,B,"bindMatrixInverse");const Gt=B.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),Ct.setValue(A,"boneTexture",Gt.boneTexture,nt))}B.isBatchedMesh&&(Ct.setOptional(A,B,"batchingTexture"),Ct.setValue(A,"batchingTexture",B._matricesTexture,nt),Ct.setOptional(A,B,"batchingIdTexture"),Ct.setValue(A,"batchingIdTexture",B._indirectTexture,nt),Ct.setOptional(A,B,"batchingColorTexture"),B._colorsTexture!==null&&Ct.setValue(A,"batchingColorTexture",B._colorsTexture,nt));const fn=X.morphAttributes;if((fn.position!==void 0||fn.normal!==void 0||fn.color!==void 0)&&de.update(B,X,nn),(an||Se.receiveShadow!==B.receiveShadow)&&(Se.receiveShadow=B.receiveShadow,Ct.setValue(A,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(un.envMap.value=Re,un.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&N.environment!==null&&(un.envMapIntensity.value=N.environmentIntensity),an&&(Ct.setValue(A,"toneMappingExposure",b.toneMappingExposure),Se.needsLights&&es(un,yi),fe&&Y.fog===!0&&se.refreshFogUniforms(un,fe),se.refreshMaterialUniforms(un,Y,Z,ce,f.state.transmissionRenderTarget[y.id]),Gr.upload(A,Ja(Se),un,nt)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Gr.upload(A,Ja(Se),un,nt),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ct.setValue(A,"center",B.center),Ct.setValue(A,"modelViewMatrix",B.modelViewMatrix),Ct.setValue(A,"normalMatrix",B.normalMatrix),Ct.setValue(A,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Gt=Y.uniformsGroups;for(let Ht=0,ba=Gt.length;Ht<ba;Ht++){const Fn=Gt[Ht];V.update(Fn,nn),V.bind(Fn,nn)}}return nn}function es(y,N){y.ambientLightColor.needsUpdate=N,y.lightProbe.needsUpdate=N,y.directionalLights.needsUpdate=N,y.directionalLightShadows.needsUpdate=N,y.pointLights.needsUpdate=N,y.pointLightShadows.needsUpdate=N,y.spotLights.needsUpdate=N,y.spotLightShadows.needsUpdate=N,y.rectAreaLights.needsUpdate=N,y.hemisphereLights.needsUpdate=N}function ts(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(y,N,X){const Y=Ne.get(y);Y.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Ne.get(y.texture).__webglTexture=N,Ne.get(y.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:X,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,N){const X=Ne.get(y);X.__webglFramebuffer=N,X.__useDefaultFramebuffer=N===void 0};const ns=A.createFramebuffer();this.setRenderTarget=function(y,N=0,X=0){F=y,R=N,C=X;let Y=!0,B=null,fe=!1,Me=!1;if(y){const Re=Ne.get(y);if(Re.__useDefaultFramebuffer!==void 0)Pe.bindFramebuffer(A.FRAMEBUFFER,null),Y=!1;else if(Re.__webglFramebuffer===void 0)nt.setupRenderTarget(y);else if(Re.__hasExternalTextures)nt.rebindTextures(y,Ne.get(y.texture).__webglTexture,Ne.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const We=y.depthTexture;if(Re.__boundDepthTexture!==We){if(We!==null&&Ne.has(We)&&(y.width!==We.image.width||y.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(y)}}const Ve=y.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Me=!0);const Ye=Ne.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ye[N])?B=Ye[N][X]:B=Ye[N],fe=!0):y.samples>0&&nt.useMultisampledRTT(y)===!1?B=Ne.get(y).__webglMultisampledFramebuffer:Array.isArray(Ye)?B=Ye[X]:B=Ye,L.copy(y.viewport),q.copy(y.scissor),Q=y.scissorTest}else L.copy(De).multiplyScalar(Z).floor(),q.copy(at).multiplyScalar(Z).floor(),Q=gt;if(X!==0&&(B=ns),Pe.bindFramebuffer(A.FRAMEBUFFER,B)&&Y&&Pe.drawBuffers(y,B),Pe.viewport(L),Pe.scissor(q),Pe.setScissorTest(Q),fe){const Re=Ne.get(y.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+N,Re.__webglTexture,X)}else if(Me){const Re=N;for(let Ve=0;Ve<y.textures.length;Ve++){const Ye=Ne.get(y.textures[Ve]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Ve,Ye.__webglTexture,X,Re)}}else if(y!==null&&X!==0){const Re=Ne.get(y.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Re.__webglTexture,X)}M=-1},this.readRenderTargetPixels=function(y,N,X,Y,B,fe,Me,Ue=0){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(Re=Re[Me]),Re){Pe.bindFramebuffer(A.FRAMEBUFFER,Re);try{const Ve=y.textures[Ue],Ye=Ve.format,We=Ve.type;if(!Ke.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=y.width-Y&&X>=0&&X<=y.height-B&&(y.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ue),A.readPixels(N,X,Y,B,Be.convert(Ye),Be.convert(We),fe))}finally{const Ve=F!==null?Ne.get(F).__webglFramebuffer:null;Pe.bindFramebuffer(A.FRAMEBUFFER,Ve)}}},this.readRenderTargetPixelsAsync=async function(y,N,X,Y,B,fe,Me,Ue=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Ne.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(Re=Re[Me]),Re)if(N>=0&&N<=y.width-Y&&X>=0&&X<=y.height-B){Pe.bindFramebuffer(A.FRAMEBUFFER,Re);const Ve=y.textures[Ue],Ye=Ve.format,We=Ve.type;if(!Ke.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,tt),A.bufferData(A.PIXEL_PACK_BUFFER,fe.byteLength,A.STREAM_READ),y.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Ue),A.readPixels(N,X,Y,B,Be.convert(Ye),Be.convert(We),0);const pt=F!==null?Ne.get(F).__webglFramebuffer:null;Pe.bindFramebuffer(A.FRAMEBUFFER,pt);const At=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Yf(A,At,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,tt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,fe),A.deleteBuffer(tt),A.deleteSync(At),fe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,N=null,X=0){const Y=Math.pow(2,-X),B=Math.floor(y.image.width*Y),fe=Math.floor(y.image.height*Y),Me=N!==null?N.x:0,Ue=N!==null?N.y:0;nt.setTexture2D(y,0),A.copyTexSubImage2D(A.TEXTURE_2D,X,0,0,Me,Ue,B,fe),Pe.unbindTexture()};const is=A.createFramebuffer(),Nn=A.createFramebuffer();this.copyTextureToTexture=function(y,N,X=null,Y=null,B=0,fe=null){fe===null&&(B!==0?(Ga("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),fe=B,B=0):fe=0);let Me,Ue,Re,Ve,Ye,We,tt,pt,At;const H=y.isCompressedTexture?y.mipmaps[fe]:y.image;if(X!==null)Me=X.max.x-X.min.x,Ue=X.max.y-X.min.y,Re=X.isBox3?X.max.z-X.min.z:1,Ve=X.min.x,Ye=X.min.y,We=X.isBox3?X.min.z:0;else{const fn=Math.pow(2,-B);Me=Math.floor(H.width*fn),Ue=Math.floor(H.height*fn),y.isDataArrayTexture?Re=H.depth:y.isData3DTexture?Re=Math.floor(H.depth*fn):Re=1,Ve=0,Ye=0,We=0}Y!==null?(tt=Y.x,pt=Y.y,At=Y.z):(tt=0,pt=0,At=0);const oe=Be.convert(N.format),Se=Be.convert(N.type);let Et;N.isData3DTexture?(nt.setTexture3D(N,0),Et=A.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(nt.setTexture2DArray(N,0),Et=A.TEXTURE_2D_ARRAY):(nt.setTexture2D(N,0),Et=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,N.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,N.unpackAlignment);const ht=A.getParameter(A.UNPACK_ROW_LENGTH),nn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),ei=A.getParameter(A.UNPACK_SKIP_PIXELS),an=A.getParameter(A.UNPACK_SKIP_ROWS),yi=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,H.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,H.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ve),A.pixelStorei(A.UNPACK_SKIP_ROWS,Ye),A.pixelStorei(A.UNPACK_SKIP_IMAGES,We);const Ct=y.isDataArrayTexture||y.isData3DTexture,un=N.isDataArrayTexture||N.isData3DTexture;if(y.isDepthTexture){const fn=Ne.get(y),Gt=Ne.get(N),Ht=Ne.get(fn.__renderTarget),ba=Ne.get(Gt.__renderTarget);Pe.bindFramebuffer(A.READ_FRAMEBUFFER,Ht.__webglFramebuffer),Pe.bindFramebuffer(A.DRAW_FRAMEBUFFER,ba.__webglFramebuffer);for(let Fn=0;Fn<Re;Fn++)Ct&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ne.get(y).__webglTexture,B,We+Fn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ne.get(N).__webglTexture,fe,At+Fn)),A.blitFramebuffer(Ve,Ye,Me,Ue,tt,pt,Me,Ue,A.DEPTH_BUFFER_BIT,A.NEAREST);Pe.bindFramebuffer(A.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(B!==0||y.isRenderTargetTexture||Ne.has(y)){const fn=Ne.get(y),Gt=Ne.get(N);Pe.bindFramebuffer(A.READ_FRAMEBUFFER,is),Pe.bindFramebuffer(A.DRAW_FRAMEBUFFER,Nn);for(let Ht=0;Ht<Re;Ht++)Ct?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,fn.__webglTexture,B,We+Ht):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,fn.__webglTexture,B),un?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Gt.__webglTexture,fe,At+Ht):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Gt.__webglTexture,fe),B!==0?A.blitFramebuffer(Ve,Ye,Me,Ue,tt,pt,Me,Ue,A.COLOR_BUFFER_BIT,A.NEAREST):un?A.copyTexSubImage3D(Et,fe,tt,pt,At+Ht,Ve,Ye,Me,Ue):A.copyTexSubImage2D(Et,fe,tt,pt,Ve,Ye,Me,Ue);Pe.bindFramebuffer(A.READ_FRAMEBUFFER,null),Pe.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else un?y.isDataTexture||y.isData3DTexture?A.texSubImage3D(Et,fe,tt,pt,At,Me,Ue,Re,oe,Se,H.data):N.isCompressedArrayTexture?A.compressedTexSubImage3D(Et,fe,tt,pt,At,Me,Ue,Re,oe,H.data):A.texSubImage3D(Et,fe,tt,pt,At,Me,Ue,Re,oe,Se,H):y.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,fe,tt,pt,Me,Ue,oe,Se,H.data):y.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,fe,tt,pt,H.width,H.height,oe,H.data):A.texSubImage2D(A.TEXTURE_2D,fe,tt,pt,Me,Ue,oe,Se,H);A.pixelStorei(A.UNPACK_ROW_LENGTH,ht),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,nn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,ei),A.pixelStorei(A.UNPACK_SKIP_ROWS,an),A.pixelStorei(A.UNPACK_SKIP_IMAGES,yi),fe===0&&N.generateMipmaps&&A.generateMipmap(Et),Pe.unbindTexture()},this.initRenderTarget=function(y){Ne.get(y).__webglFramebuffer===void 0&&nt.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?nt.setTextureCube(y,0):y.isData3DTexture?nt.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?nt.setTexture2DArray(y,0):nt.setTexture2D(y,0),Pe.unbindTexture()},this.resetState=function(){R=0,C=0,F=null,Pe.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}}const Hr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ma{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const d1=new cu(-1,1,1,-1,0,1);class p1 extends en{constructor(){super(),this.setAttribute("position",new Ot([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ot([0,2,0,0,2,0],2))}}const m1=new p1;class il{constructor(e){this._mesh=new Wt(m1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,d1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class g1 extends Ma{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof on?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ha.clone(e.uniforms),this.material=new on({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new il(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Mc extends Ma{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const a=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),r.buffers.stencil.setFunc(a.ALWAYS,s,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(a.EQUAL,1,4294967295),r.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),r.buffers.stencil.setLocked(!0)}}class _1 extends Ma{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class y1{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new je);this._width=n.width,this._height=n.height,t=new Rn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Zn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new g1(Hr),this.copyPass.material.blending=Yn,this.clock=new Ch}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let a=0,r=this.passes.length;a<r;a++){const s=this.passes[a];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),s.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Mc!==void 0&&(s instanceof Mc?n=!0:s instanceof _1&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new je);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(n,a),this.renderTarget2.setSize(n,a);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class v1 extends Ma{constructor(e,t,n=null,a=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=a,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new He}render(e,t,n){const a=e.autoClear;e.autoClear=!1;let r,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=a}}const x1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new He(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ga extends Ma{constructor(e,t=1,n,a){super(),this.strength=t,this.radius=n,this.threshold=a,this.resolution=e!==void 0?new je(e.x,e.y):new je(256,256),this.clearColor=new He(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Rn(r,s,{type:Zn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const u=new Rn(r,s,{type:Zn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Rn(r,s,{type:Zn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),s=Math.round(s/2)}const o=x1;this.highPassUniforms=Ha.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new on({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new je(1/r,1/s),r=Math.round(r/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ha.clone(Hr.uniforms),this.blendMaterial=new on({uniforms:this.copyUniforms,vertexShader:Hr.vertexShader,fragmentShader:Hr.fragmentShader,blending:dt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new He,this._oldClearAlpha=1,this._basic=new Pn,this._fsQuad=new il(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),a=Math.round(t/2);this.renderTargetBright.setSize(n,a);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,a),this.renderTargetsVertical[r].setSize(n,a),this.separableBlurMaterials[r].uniforms.invSize.value=new je(1/n,1/a),n=Math.round(n/2),a=Math.round(a/2)}render(e,t,n,a,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=ga.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=ga.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new on({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new je(.5,.5)},direction:{value:new je(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new on({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ga.BlurDirectionX=new je(1,0);ga.BlurDirectionY=new je(0,1);const Dr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class M1 extends Ma{constructor(){super(),this.uniforms=Ha.clone(Dr.uniforms),this.material=new wh({name:Dr.name,uniforms:this.uniforms,vertexShader:Dr.vertexShader,fragmentShader:Dr.fragmentShader}),this._fsQuad=new il(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},mt.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ic?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Uc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Nc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===kc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Oc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Fc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const sa=["#4ff2ff","#43d8ff","#6aa8ff","#9a86ff","#c477ff","#ff79dc","#ff7fb5","#ffb06e"],Ir=["#ff3b5c","#ff7a5e","#ffd166","#f6e7c1","#f6e7c1","#ffd166","#ff7a5e","#ff3b5c"],Ur=1.75,Nr=.015;function Xt(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function Yt(i){const e=new bh(i);return e.colorSpace=dn,e.anisotropy=4,e}function S1(){const[i,e]=Xt(128,128),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.22,"rgba(255,255,255,.75)"),t.addColorStop(.55,"rgba(255,255,255,.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Yt(i)}function b1(){const[i,e]=Xt(512,512),t=256;e.translate(t,t);const n=e.createRadialGradient(0,0,110,0,0,250);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.55,"rgba(255,255,255,.03)"),n.addColorStop(.76,"rgba(255,255,255,.14)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,252,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,255,255,.55)",e.lineWidth=4,e.setLineDash([32,30]),e.shadowColor="#fff",e.shadowBlur=14,e.beginPath(),e.arc(0,0,227,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.98)",e.lineWidth=15,e.shadowColor="#fff",e.shadowBlur=26,e.beginPath(),e.arc(0,0,174,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.42)",e.lineWidth=3,e.beginPath(),e.arc(0,0,126,0,Math.PI*2),e.stroke(),e.restore();for(let a=0;a<4;a++)e.save(),e.rotate(a*Math.PI/2),e.strokeStyle="rgba(255,255,255,.9)",e.lineWidth=5,e.shadowColor="#fff",e.shadowBlur=12,e.beginPath(),e.moveTo(0,-226),e.lineTo(0,-196),e.stroke(),e.restore();return e.save(),e.fillStyle="rgba(255,255,255,.85)",e.shadowColor="#fff",e.shadowBlur=20,e.beginPath(),e.arc(0,0,5,0,Math.PI*2),e.fill(),e.restore(),Yt(i)}function w1(){const[i,e]=Xt(96,1024),t=e.createLinearGradient(0,1024,0,0);return t.addColorStop(0,"rgba(255,255,255,.95)"),t.addColorStop(.35,"rgba(255,255,255,.55)"),t.addColorStop(.78,"rgba(255,255,255,.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.strokeStyle=t,e.lineWidth=7,e.shadowColor="#fff",e.shadowBlur=22,e.beginPath(),e.moveTo(48,1024),e.lineTo(48,6),e.stroke(),e.shadowBlur=6,e.lineWidth=2,e.strokeStyle="rgba(255,255,255,.95)",e.beginPath(),e.moveTo(48,1024),e.lineTo(48,6),e.stroke(),Yt(i)}function T1(){const[i,e]=Xt(192,1024),t=e.createLinearGradient(0,1024,0,0);t.addColorStop(0,"rgba(255,255,255,.34)"),t.addColorStop(.5,"rgba(255,255,255,.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,192,1024);const n=e.createLinearGradient(0,0,192,0);return n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.32,"rgba(255,255,255,.5)"),n.addColorStop(.5,"rgba(255,255,255,1)"),n.addColorStop(.68,"rgba(255,255,255,.5)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.globalCompositeOperation="destination-in",e.fillStyle=n,e.fillRect(0,0,192,1024),Yt(i)}function E1(){const[i,e]=Xt(256,256),t=128;e.translate(t,t);const n=e.createRadialGradient(0,0,18,0,0,124);n.addColorStop(0,"rgba(255,255,255,.62)"),n.addColorStop(.45,"rgba(255,255,255,.2)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,124,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,255,255,.98)",e.lineWidth=17,e.shadowColor="#fff",e.shadowBlur=28,e.beginPath(),e.arc(0,0,84,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.5)",e.lineWidth=4,e.shadowColor="#fff",e.shadowBlur=10,e.beginPath(),e.arc(0,0,56,0,Math.PI*2),e.stroke(),e.restore();const a=e.createRadialGradient(0,0,0,0,0,30);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.55,"rgba(255,255,255,.75)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,30,0,Math.PI*2),e.fill();for(let r=0;r<4;r++)e.save(),e.rotate(r*Math.PI/2),e.strokeStyle="rgba(255,255,255,.9)",e.lineWidth=5,e.shadowColor="#fff",e.shadowBlur=12,e.beginPath(),e.moveTo(0,-122),e.lineTo(0,-100),e.stroke(),e.restore();return Yt(i)}function A1(){const[i,e]=Xt(128,512),t=e.createLinearGradient(0,0,128,0);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.22,"rgba(255,255,255,.35)"),t.addColorStop(.5,"rgba(255,255,255,.95)"),t.addColorStop(.78,"rgba(255,255,255,.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,512),e.fillStyle="rgba(255,255,255,.95)",e.shadowColor="#fff",e.shadowBlur=18,e.fillRect(48,0,32,512);const n=e.createLinearGradient(0,0,0,512);return n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.08,"rgba(255,255,255,1)"),n.addColorStop(.92,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.globalCompositeOperation="destination-in",e.fillStyle=n,e.fillRect(0,0,128,512),Yt(i)}function C1(){const[i,e]=Xt(1024,128),t=e.createLinearGradient(0,0,1024,0);return t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.06,"rgba(255,255,255,.4)"),t.addColorStop(.5,"rgba(255,255,255,1)"),t.addColorStop(.94,"rgba(255,255,255,.4)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.strokeStyle=t,e.lineWidth=7,e.shadowColor="#fff",e.shadowBlur=26,e.beginPath(),e.moveTo(0,64),e.lineTo(1024,64),e.stroke(),e.lineWidth=2,e.shadowBlur=6,e.beginPath(),e.moveTo(0,64),e.lineTo(1024,64),e.stroke(),Yt(i)}function Sc(i,e){const[t,n]=Xt(2048,512);let a=i>>>0;const r=()=>(a=a*1664525+1013904223>>>0,a/4294967296);n.clearRect(0,0,2048,512);const s=n.createLinearGradient(0,150,0,512);s.addColorStop(0,"rgba(80,190,255,0)"),s.addColorStop(.7,"rgba(60,150,255,.09)"),s.addColorStop(1,"rgba(255,110,200,.08)"),n.fillStyle=s,n.fillRect(0,0,2048,512);let o=-40;for(;o<2088;){const l=24+Math.floor(r()*74),h=90+Math.floor(r()*300),u=512-h;n.save(),n.fillStyle="rgba(3,8,24,.82)",n.fillRect(o,u,l,h),n.strokeStyle=r()<.28?"rgba(255,120,200,.7)":"rgba(70,210,255,.55)",n.lineWidth=2,n.shadowColor=n.strokeStyle,n.shadowBlur=10,n.strokeRect(o+1,u+1,l-2,h-2),n.shadowBlur=0;const d=Math.max(1,Math.floor((l-10)/12)),p=Math.max(2,Math.floor((h-16)/17));for(let _=0;_<p;_++)for(let v=0;v<d;v++)r()<.64||(n.fillStyle=r()<.22?"rgba(255,205,130,.9)":r()<.5?"rgba(120,235,255,.85)":"rgba(255,120,195,.8)",n.fillRect(o+6+v*12,u+9+_*17,4,6));r()<.45&&(n.strokeStyle="rgba(150,225,255,.65)",n.lineWidth=1,n.beginPath(),n.moveTo(o+l*.5,u),n.lineTo(o+l*.5,u-18-r()*34),n.stroke(),n.fillStyle="rgba(255,90,150,.95)",n.fillRect(o+l*.5-1.5,u-22-r()*30,3,3)),n.restore(),o+=l+3+Math.floor(r()*11)}if(e){const l=n.createLinearGradient(0,360,0,512);l.addColorStop(0,"rgba(255,140,90,0)"),l.addColorStop(1,"rgba(255,140,90,.12)"),n.fillStyle=l,n.fillRect(0,300,2048,212)}const c=Yt(t);return c.wrapS=Fa,c.wrapT=li,c}function R1(){const[i,e]=Xt(1024,1024);e.translate(512,512);const t=e.createRadialGradient(0,0,60,0,0,505);t.addColorStop(0,"rgba(255,255,255,.03)"),t.addColorStop(.55,"rgba(255,255,255,.01)"),t.addColorStop(.82,"rgba(255,255,255,.08)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(0,0,505,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,255,255,.5)",e.lineWidth=5,e.shadowColor="#fff",e.shadowBlur=28,e.beginPath(),e.arc(0,0,470,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(255,255,255,.2)",e.lineWidth=2,e.beginPath(),e.arc(0,0,440,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(255,255,255,.13)",e.lineWidth=2,e.setLineDash([7,18]),e.beginPath(),e.arc(0,0,344,0,Math.PI*2),e.stroke(),e.restore();for(let n=0;n<60;n++){const a=n%5===0;e.save(),e.rotate(n*Math.PI/30),e.strokeStyle=a?"rgba(255,255,255,.92)":"rgba(255,255,255,.3)",e.lineWidth=a?7:2,e.shadowColor="#fff",e.shadowBlur=a?18:7,e.beginPath(),e.moveTo(0,-468),e.lineTo(0,-(a?414:444)),e.stroke(),e.restore()}for(let n=0;n<4;n++)e.save(),e.rotate(n*Math.PI/2),e.fillStyle="rgba(255,255,255,.82)",e.shadowColor="#fff",e.shadowBlur=22,e.beginPath(),e.moveTo(0,-500),e.lineTo(13,-516),e.lineTo(0,-532),e.lineTo(-13,-516),e.closePath(),e.fill(),e.restore();return Yt(i)}function P1(){const[i,e]=Xt(512,512);e.translate(256,256);const t=e.createRadialGradient(0,0,40,0,0,250);t.addColorStop(0,"rgba(255,255,255,.05)"),t.addColorStop(.7,"rgba(255,255,255,.02)"),t.addColorStop(.92,"rgba(255,255,255,.16)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(0,0,250,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255,255,255,.42)",e.lineWidth=2,e.beginPath(),e.arc(0,0,206,0,Math.PI*2),e.stroke();for(let n=0;n<12;n++){const a=n%3===0;e.save(),e.rotate(n*Math.PI/6),e.strokeStyle=a?"rgba(255,255,255,.85)":"rgba(255,255,255,.3)",e.lineWidth=a?4:1.5,e.beginPath(),e.moveTo(0,-204),e.lineTo(0,a?-172:-188),e.stroke(),e.restore()}return e.save(),e.shadowColor="#fff",e.shadowBlur=22,e.fillStyle="rgba(255,255,255,.95)",e.beginPath(),e.moveTo(-7,-16),e.lineTo(0,-196),e.lineTo(7,-16),e.closePath(),e.fill(),e.beginPath(),e.arc(0,0,11,0,Math.PI*2),e.fill(),e.restore(),Yt(i)}function L1(){const[i,e]=Xt(128,1024),t=e.createLinearGradient(0,1024,0,0);return t.addColorStop(0,"rgba(255,255,255,.6)"),t.addColorStop(.5,"rgba(255,255,255,.95)"),t.addColorStop(.9,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,.2)"),e.fillStyle=t,e.shadowColor="#fff",e.shadowBlur=22,e.beginPath(),e.moveTo(47,1010),e.lineTo(58,120),e.lineTo(64,34),e.lineTo(70,120),e.lineTo(81,1010),e.closePath(),e.fill(),e.shadowBlur=28,e.fillStyle="rgba(255,255,255,1)",e.beginPath(),e.arc(64,72,15,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(64,942,20,0,Math.PI*2),e.fill(),Yt(i)}function D1(){const[i,e]=Xt(256,256);return e.translate(128,128),e.shadowColor="#fff",e.shadowBlur=26,e.fillStyle="rgba(255,255,255,.98)",e.save(),e.rotate(-.22),e.beginPath(),e.ellipse(-8,56,30,21,-.18,0,Math.PI*2),e.fill(),e.fillRect(16,-84,8,140),e.beginPath(),e.moveTo(24,-84),e.bezierCurveTo(82,-62,86,6,38,32),e.bezierCurveTo(68,-6,56,-50,24,-60),e.closePath(),e.fill(),e.restore(),Yt(i)}function I1(){const[i,e]=Xt(64,1024),t=e.createLinearGradient(0,0,64,0);return t.addColorStop(0,"rgba(255,255,255,.06)"),t.addColorStop(.38,"rgba(255,255,255,.62)"),t.addColorStop(.52,"rgba(255,255,255,1)"),t.addColorStop(.66,"rgba(255,255,255,.58)"),t.addColorStop(1,"rgba(255,255,255,.06)"),e.fillStyle=t,e.shadowColor="#fff",e.shadowBlur=12,e.fillRect(27,26,10,972),e.shadowBlur=22,e.beginPath(),e.arc(32,44,15,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(32,982,25,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255,255,255,.8)",e.lineWidth=3,e.beginPath(),e.arc(32,982,25,0,Math.PI*2),e.stroke(),Yt(i)}function bc(i=1){const[e,t]=Xt(256,512);let n=i>>>0;const a=()=>(n=n*1664525+1013904223>>>0,n/4294967296);t.clearRect(0,0,256,512),t.save(),t.beginPath(),t.moveTo(12,512),t.lineTo(12,206),t.bezierCurveTo(18,104,82,38,128,10),t.bezierCurveTo(174,38,238,104,244,206),t.lineTo(244,512),t.closePath(),t.clip(),t.fillStyle="rgba(4,5,14,.96)",t.fillRect(0,0,256,512);const r=["#ff4d6d","#ff9a5e","#ffd27a","#4ff2ff","#9b6bff","#ff6fb5"];for(let o=0;o<4;o++)for(let c=0;c<8;c++){const l=r[(o+c+i)%r.length];t.globalAlpha=.32+a()*.28,t.fillStyle=l;const h=20+o*56+c%2*12,u=160+c*44;t.beginPath(),t.moveTo(h+22,u),t.lineTo(h+44,u+20),t.lineTo(h+22,u+40),t.lineTo(h,u+20),t.closePath(),t.fill()}const s=t.createLinearGradient(0,40,0,512);s.addColorStop(0,"rgba(255,240,190,.9)"),s.addColorStop(.35,"rgba(255,150,120,.55)"),s.addColorStop(1,"rgba(120,70,190,.32)"),t.globalAlpha=1,t.fillStyle=s,t.beginPath(),t.moveTo(102,512),t.lineTo(102,190),t.quadraticCurveTo(108,118,128,92),t.quadraticCurveTo(148,118,154,190),t.lineTo(154,512),t.closePath(),t.fill(),t.strokeStyle="rgba(8,8,18,.92)",t.lineWidth=7;for(let o=1;o<4;o++)t.beginPath(),t.moveTo(20+o*56,150),t.lineTo(20+o*56,512),t.stroke();for(let o=1;o<8;o++)t.beginPath(),t.moveTo(14,160+o*44),t.lineTo(242,160+o*44),t.stroke();return t.lineWidth=5,t.beginPath(),t.arc(128,182,58,0,Math.PI*2),t.stroke(),t.beginPath(),t.arc(128,182,30,0,Math.PI*2),t.stroke(),t.restore(),t.save(),t.strokeStyle="rgba(255,226,160,.92)",t.lineWidth=7,t.shadowColor="#ffd27a",t.shadowBlur=18,t.beginPath(),t.moveTo(12,512),t.lineTo(12,206),t.bezierCurveTo(18,104,82,38,128,10),t.bezierCurveTo(174,38,238,104,244,206),t.lineTo(244,512),t.stroke(),t.restore(),Yt(e)}function U1(){const[i,e]=Xt(1024,1024);e.translate(512,512);const t=["#ff4d6d","#ffb45e","#ffd27a","#4ff2ff","#9b6bff","#ff6fb5"],n=e.createRadialGradient(0,0,260,0,0,500);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.82,"rgba(255,210,122,.12)"),n.addColorStop(1,"rgba(255,210,122,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,500,0,Math.PI*2),e.fill();for(let r=0;r<12;r++){e.save(),e.rotate(r*Math.PI/6);const s=e.createRadialGradient(0,-210,20,0,-300,150);s.addColorStop(0,t[r%t.length]),s.addColorStop(.62,"rgba(255,235,190,.75)"),s.addColorStop(1,"rgba(20,12,40,0)"),e.fillStyle=s,e.beginPath(),e.moveTo(0,-118),e.bezierCurveTo(116,-206,96,-356,0,-414),e.bezierCurveTo(-96,-356,-116,-206,0,-118),e.closePath(),e.fill(),e.strokeStyle="rgba(10,8,20,.9)",e.lineWidth=7,e.stroke(),e.strokeStyle="rgba(255,226,160,.75)",e.lineWidth=3,e.beginPath(),e.moveTo(0,-148),e.quadraticCurveTo(50,-250,0,-380),e.stroke(),e.restore()}e.strokeStyle="rgba(255,226,160,.9)",e.shadowColor="#ffd27a",e.shadowBlur=18;for(const r of[414,286,168,82])e.lineWidth=r===414?12:7,e.beginPath(),e.arc(0,0,r,0,Math.PI*2),e.stroke();for(let r=0;r<24;r++)e.save(),e.rotate(r*Math.PI/12),e.fillStyle=t[r%t.length],e.shadowColor=t[r%t.length],e.shadowBlur=16,e.beginPath(),e.arc(0,-352,22,0,Math.PI*2),e.fill(),e.restore();const a=e.createRadialGradient(0,0,0,0,0,78);return a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.4,"rgba(255,220,150,.8)"),a.addColorStop(1,"rgba(255,90,120,0)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,78,0,Math.PI*2),e.fill(),Yt(i)}function N1(){const[i,e]=Xt(2048,2048),t=1024;e.translate(t,t);const n=["XII","I","II","III","IV","V","VI","VII","VIII","IX","X","XI"],a=e.createRadialGradient(0,0,80,0,0,980);a.addColorStop(0,"rgba(60,24,44,.18)"),a.addColorStop(.72,"rgba(18,8,26,.32)"),a.addColorStop(.95,"rgba(255,190,100,.1)"),a.addColorStop(1,"rgba(255,190,100,0)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,980,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,226,170,.92)",e.shadowColor="#ffcf6e",e.shadowBlur=34;for(const[r,s]of[[944,10],[888,3],[720,3],[510,2],[300,2]])e.lineWidth=s,e.beginPath(),e.arc(0,0,r,0,Math.PI*2),e.stroke();e.restore();for(let r=0;r<60;r++){const s=r%5===0;e.save(),e.rotate(r*Math.PI/30),e.strokeStyle=s?"rgba(255,240,200,.95)":"rgba(255,210,130,.45)",e.lineWidth=s?13:4,e.shadowColor="#ffcf6e",e.shadowBlur=s?22:8,e.beginPath(),e.moveTo(0,-936),e.lineTo(0,-(s?836:892)),e.stroke(),e.restore()}e.save(),e.strokeStyle="rgba(255,210,130,.4)",e.lineWidth=4,e.shadowColor="#ffcf6e",e.shadowBlur=10;for(let r=0;r<24;r++)e.save(),e.rotate(r*Math.PI/12),e.beginPath(),e.moveTo(-86,-748),e.quadraticCurveTo(0,-880,86,-748),e.stroke(),e.restore();e.restore(),e.fillStyle="rgba(255,244,215,.97)",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#ffcf6e",e.shadowBlur=30,e.font='700 148px Georgia, "Times New Roman", serif',n.forEach((r,s)=>{const o=s/12*Math.PI*2-Math.PI/2;e.save(),e.translate(Math.cos(o)*678,Math.sin(o)*678),e.rotate(o+Math.PI/2),e.fillText(r,0,0),e.restore()}),e.save(),e.strokeStyle="rgba(255,226,170,.7)",e.lineWidth=5,e.shadowColor="#ffcf6e",e.shadowBlur=22;for(let r=0;r<12;r++)e.save(),e.rotate(r*Math.PI/6),e.beginPath(),e.moveTo(0,-40),e.bezierCurveTo(90,-100,92,-236,0,-278),e.bezierCurveTo(-92,-236,-90,-100,0,-40),e.stroke(),e.restore();return e.beginPath(),e.arc(0,0,72,0,Math.PI*2),e.stroke(),e.restore(),Yt(i)}function F1(){const[i,e]=Xt(512,512);e.fillStyle="#07070d",e.fillRect(0,0,512,512),e.strokeStyle="rgba(160,140,120,.22)",e.lineWidth=3;for(let n=0;n<=4;n++)e.beginPath(),e.moveTo(n*128,0),e.lineTo(n*128,512),e.stroke(),e.beginPath(),e.moveTo(0,n*128),e.lineTo(512,n*128),e.stroke();e.strokeStyle="rgba(255,202,120,.14)",e.lineWidth=1;for(let n=-4;n<8;n++)e.beginPath(),e.moveTo(n*128,0),e.lineTo(n*128+512,512),e.stroke(),e.beginPath(),e.moveTo(n*128+512,0),e.lineTo(n*128,512),e.stroke();for(let n=0;n<70;n++)e.fillStyle=`rgba(255,220,150,${.015+Math.random()*.03})`,e.fillRect(Math.random()*512,Math.random()*512,1+Math.random()*3,1+Math.random()*3);const t=Yt(i);return t.wrapS=t.wrapT=Fa,t.repeat.set(6,14),t}function k1(i){const e=matchMedia("(pointer: coarse)").matches,t=new h1({canvas:i,antialias:!e,powerPreference:"high-performance",alpha:!1,stencil:!1});t.setPixelRatio(Math.min(devicePixelRatio||1,e?1.45:1.8)),t.outputColorSpace=dn,t.toneMapping=Vo,t.toneMappingExposure=1.06;const n=new gh;n.background=new He(197387),n.fog=new Jo(197387,.0115);const a=new vn(46,innerWidth/innerHeight,.1,240);a.position.set(0,6.7,17.2);const r=new y1(t);r.addPass(new v1(n,a));const s=new ga(new je(innerWidth,innerHeight),1,.62,.22);r.addPass(s),r.addPass(new M1);const o={glow:S1(),ring:b1(),line:w1(),beam:T1(),note:E1(),hold:A1(),hitline:C1(),cityFar:Sc(2047066,!1),cityNear:Sc(7023172,!0),clockFace:R1(),clockHand:L1(),clockDial:P1(),floatNote:D1(),pendulumRod:I1(),gothicA:bc(1),gothicB:bc(2),rose:U1(),bossClock:N1(),bossFloor:F1()},c=new Jt;n.add(c);function l(x,I,W,G,j){const ue=new Float32Array(x*3);for(let Ze=0;Ze<x;Ze++){const Ge=I+Math.random()*I*1.8,Pt=Math.random()*Math.PI*2,lt=Math.acos(2*Math.random()-1);ue[Ze*3]=Ge*Math.sin(lt)*Math.cos(Pt),ue[Ze*3+1]=Ge*Math.cos(lt)*.55+3,ue[Ze*3+2]=Ge*Math.sin(lt)*Math.sin(Pt)-20}const be=new en;be.setAttribute("position",new mn(ue,3));const Xe=new Do({size:W,map:o.glow,color:G,transparent:!0,opacity:j,depthWrite:!1,blending:dt,sizeAttenuation:!0}),et=new Zl(be,Xe);return c.add(et),et}const h=l(1500,34,.32,10279167,.7),u=l(650,70,.55,12164351,.5),d=l(220,14,.09,8186367,.45);function p(x,I,W,G,j,ue){const be=new vt({map:o.glow,color:j,transparent:!0,opacity:ue,depthWrite:!1,blending:dt,fog:!1}),Xe=new xt(be);return Xe.position.set(x,I,W),Xe.scale.set(G,G,1),c.add(Xe),Xe}const _=p(-16,9,-34,46,1789183,.18),v=p(18,1,-40,54,9314303,.14);p(0,12,-26,30,16723872,.07);const m=new Pn({color:4951551,wireframe:!0,transparent:!0,opacity:.055,fog:!1}),f=[];for(let x=0;x<3;x++){const I=new Wt(new tl(12+x*6.5,.045,3,120),m.clone());I.position.set(0,5,-26-x*7),I.rotation.set(.9+x*.16,x*.3,0),c.add(I),f.push(I)}const T=new Rh(90,45,1811928,1254490);T.position.y=-3.6,T.material.transparent=!0,T.material.opacity=.16,T.material.depthWrite=!1,c.add(T);const E=[];for(let x=0;x<14;x++){const I=x%2?new Qo(.5+Math.random()*.8,0):new el(.5+Math.random()*.7,0),W=new Pn({color:x%3?5823999:16740312,wireframe:!0,transparent:!0,opacity:.055+Math.random()*.05,fog:!1}),G=new Wt(I,W),j=x%2?1:-1;G.position.set(j*(9+Math.random()*10),.5+Math.random()*9,-6-Math.random()*14),G.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),G.userData.spin=new U((Math.random()-.5)*.3,(Math.random()-.5)*.4,(Math.random()-.5)*.2),c.add(G),E.push(G)}const b=new Jt;b.position.z=-1,c.add(b);const P=[];function R(x,I,W,G,j,ue,be){const Xe=new Pn({map:x,color:be,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),et=new Wt(new Li(I,W),Xe);return et.position.set(G,j,ue),et.renderOrder=-2,b.add(et),P.push({mesh:et,mat:Xe,map:x,base:j,speed:0}),et}R(o.cityFar,150,42,-24,19,-54,11068671),R(o.cityNear,118,34,38,12,-36,16761504),P[0].speed=.0028,P[1].speed=.0062,b.visible=!1;const C=new Jt;C.visible=!1,c.add(C);const F=[];function M(x,I=1){return x.transparent=!0,x.opacity=0,x.depthWrite=!1,F.push({mat:x,base:I}),x}const S=M(new Pn({map:o.bossFloor,color:12167566,fog:!1}),.95),L=new Wt(new Li(48,116),S);L.rotation.x=-Math.PI/2,L.position.set(0,-3.64,-26),L.renderOrder=-9,C.add(L);const q=M(new Pn({color:657426,fog:!1}),1),Q=M(new Pn({color:16764782,fog:!1,blending:dt}),.38),ae=new Ui(1.35,18,1.35),te=new Ui(1.55,.16,1.55);for(let x=0;x<6;x++){const I=4-x*11;for(const W of[-1,1]){const G=new Wt(ae,q);G.position.set(W*11.4,4.2,I),G.renderOrder=-7,C.add(G);for(const j of[-2.6,5.4,10.8]){const ue=new Wt(te,Q);ue.position.set(W*11.4,j,I),ue.renderOrder=-6,C.add(ue)}}}const ie=new Li(4.7,11.4);for(let x=0;x<5;x++){const I=-1.5-x*11.4;for(const W of[-1,1]){const G=M(new Pn({map:x%2?o.gothicB:o.gothicA,color:W<0?16767398:16756920,transparent:!0,depthWrite:!1,blending:dt,fog:!1}),.82),j=new Wt(ie,G);j.position.set(W*11.34,7.4,I),j.rotation.y=W<0?Math.PI/2:-Math.PI/2,j.renderOrder=-5,C.add(j)}}const ce=M(new vt({map:o.rose,color:16773576,transparent:!0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),.9),Z=new xt(ce);Z.position.set(0,18.4,-62),Z.scale.set(25,25,1),Z.renderOrder=-4,C.add(Z);const _e=M(new vt({map:o.glow,color:16731501,transparent:!0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),.16),we=new xt(_e);we.position.set(0,18.4,-63),we.scale.set(46,46,1),we.renderOrder=-5,C.add(we);const De=new Jt;De.position.set(0,10.4,-39),C.add(De);const at=M(new vt({map:o.bossClock,color:16774096,transparent:!0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),.94),gt=new xt(at);gt.scale.set(27,27,1),gt.renderOrder=-3,De.add(gt);const bt=M(new vt({map:o.glow,color:16751198,transparent:!0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),.2),ct=new xt(bt);ct.scale.set(40,40,1),ct.renderOrder=-4,De.add(ct);function ee(x,I,W,G){const j=M(new vt({map:x,color:I,transparent:!0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),G),ue=new xt(j);return ue.center.set(.5,.06),ue.position.set(0,0,.4),ue.scale.set(W,W*7.1,1),ue.renderOrder=-2,De.add(ue),ue}const re=ee(o.clockHand,16765286,1.1,.72),Le=ee(o.clockHand,16731501,.8,.86),Je=M(new vt({map:o.glow,color:16774096,transparent:!0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),.7),Fe=new xt(Je);Fe.scale.set(2.2,2.2,1),Fe.position.z=.5,Fe.renderOrder=-1,De.add(Fe);const st=[];for(let x=0;x<22;x++){const I=x%2?1:-1,W=2-Math.floor(x/2)*5.4,G=M(new vt({map:o.glow,color:16763514,transparent:!0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),.34),j=new xt(G);j.position.set(I*(3.6+x%3*1.6),-2.7+x%2*.5,W),j.scale.set(.85,.85,1),j.renderOrder=-4,C.add(j),st.push({sprite:j,mat:G,base:.34,phase:x*1.7})}const kt=[];for(let x=0;x<5;x++){const I=M(new vt({map:o.glow,color:x%2?10185727:16751198,transparent:!0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),.075),W=new xt(I);W.position.set((x%2?1:-1)*(6+x*2.2),1.6+x*1.3,-10-x*9),W.scale.set(20+x*4,11+x*2,1),W.renderOrder=-6,C.add(W),kt.push({sprite:W,mat:I,base:.075,phase:x*2.1})}const A=new Jt;n.add(A);const wt=new Jt;A.add(wt);const Qe=new Jt;Qe.renderOrder=5,A.add(Qe);const Ke=new vt({map:o.hitline,color:10483199,transparent:!0,opacity:.8,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),Pe=new xt(Ke);Pe.position.set(0,.02,.25),Pe.scale.set(13.2,.9,1),Pe.renderOrder=2,A.add(Pe);const Ee=[],Ne=[];for(let x=0;x<8;x++){const I=(x-3.5)*Ur;Ne.push(I);const W=Nr*I*I,G=new Jt;G.position.set(I,0,W),wt.add(G);const j=new He(sa[x]),ue=new vt({map:o.beam,color:j.clone(),transparent:!0,opacity:.08,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),be=new xt(ue);be.center.set(.5,0),be.position.set(0,.04,-.02),be.scale.set(1.16,12.6,1),be.renderOrder=0,G.add(be);const Xe=new vt({map:o.line,color:j.clone(),transparent:!0,opacity:.62,depthWrite:!1,depthTest:!1,blending:qn,fog:!1}),et=new xt(Xe);et.center.set(.5,0),et.position.set(0,.04,.02),et.scale.set(.36,12.4,1),et.renderOrder=1,G.add(et);const Ze=new vt({map:o.ring,color:j.clone(),transparent:!0,opacity:.95,depthWrite:!1,depthTest:!1,blending:qn,fog:!1}),Ge=new xt(Ze);Ge.position.set(0,.02,.22),Ge.scale.set(1.65,1.65,1),Ge.renderOrder=3,G.add(Ge);const Pt=new vt({map:o.glow,color:j.clone(),transparent:!0,opacity:.13,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),lt=new xt(Pt);lt.position.set(0,-.02,.18),lt.scale.set(2.2,2.2,1),lt.renderOrder=2,G.add(lt);const Ut=new vt({map:o.glow,color:j.clone().lerp(new He(16777215),.25),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),qt=new xt(Ut);qt.position.set(0,.2,.08),qt.scale.set(1.1,1.1,1),qt.renderOrder=4,qt.visible=!1,G.add(qt),Ee.push({group:G,beam:be,line:et,ring:Ge,glow:lt,ghost:qt,color:j.clone(),targetColor:j.clone(),flash:0,active:0,baseX:I,ghostFx:null,angle:0,pitch:0,screenAngle:0,screen:null})}const nt=new Jt;A.add(nt);const It=[];for(let x=0;x<8;x++){const I=new He(Ir[x]),W=[];for(let j=0;j<9;j++){const ue=new vt({map:o.beam,color:I.clone().lerp(new He(16777215),.18+j*.03),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),be=new xt(ue);be.center.set(.5,.5),be.renderOrder=4,be.visible=!1,nt.add(be),W.push(be)}const G=[];for(let j=0;j<3;j++){const ue=new vt({map:o.glow,color:I.clone().lerp(new He(16773576),.35),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),be=new xt(ue);be.renderOrder=5,be.visible=!1,nt.add(be),G.push(be)}It.push({lane:x,ribbons:W,glows:G,power:0,seed:x*2.399963})}const _t=new Jt;_t.position.set(0,13.2,-28),_t.visible=!1,c.add(_t);const w=new vt({map:o.clockFace,color:16773576,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),g=new xt(w);g.scale.set(21.6,21.6,1),g.renderOrder=-5,_t.add(g);const z=new vt({map:o.glow,color:16762974,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),J=new xt(z);J.scale.set(29,29,1),J.renderOrder=-6,_t.add(J);const se=new He(sa[0]),$=new He(sa[7]),ze=new vt({map:o.clockHand,color:se,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),pe=new xt(ze);pe.center.set(.5,.07),pe.position.set(0,0,.22),pe.scale.set(1.02,6.8,1),pe.renderOrder=-4,_t.add(pe);const Oe=new vt({map:o.clockHand,color:$,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),Ie=new xt(Oe);Ie.center.set(.5,.07),Ie.position.set(0,0,.26),Ie.scale.set(.76,9.6,1),Ie.renderOrder=-4,_t.add(Ie);const de=new vt({map:o.glow,color:16774096,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),ge=new xt(de);ge.scale.set(1.9,1.9,1),ge.position.z=.3,ge.renderOrder=-3,_t.add(ge);function qe(x){const I=new vt({map:o.clockDial,color:new He(sa[x]),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),W=new xt(I);return W.position.set(x===0?.86:-.86,7.6,.24),W.scale.set(2.75,2.75,1),W.renderOrder=2,W.visible=!1,Ee[x].group.add(W),W}const Be=qe(0),ye=qe(7),V={group:_t,face:g,aura:J,hub:ge,handSlow:pe,handFast:Ie,dialSlow:Be,dialFast:ye,slowColor:se,fastColor:$,target:0,fade:0,mode:"off",frozen:!1,rate:1,runTime:0,anchorT:0,anchorRun:0,slowAngle:0,fastAngle:0,slowKick:0,fastKick:0,kick:0},D=16765286,O={active:!1,target:0,fade:0,period:2.4146,originT:0,baseAmp:.42,pivot:new U(0,11.8,1.2),center:new U(0,2.6,1.32),length:9.2,angle:.42,kick:0,missFlash:0,times:[],states:[],notes:[]},me=new Jt;me.visible=!1,n.add(me);const Ce=new He(D),le=new He(16773576),ne=new He(16724831);function Ae(x,I,W,G){const j=new vt({map:x,color:I.clone(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),ue=new xt(j);return ue.scale.set(G,G,1),ue.renderOrder=W,ue.visible=!1,me.add(ue),ue}const $e=Ae(o.pendulumRod,le,5,1);$e.center.set(.5,0);const yt=Ae(o.glow,le,6,1.5),ot=Ae(o.glow,Ce,7,2.2),tn=Ae(o.ring,le,8,2),cn=Ae(o.glow,Ce,6,3.2),mi=Ae(o.ring,le,10,2.9),Mn=Ae(o.glow,le,9,1.5),gi=[];for(let x=0;x<7;x++){const I=Ae(o.floatNote,le,6,1);I.userData.r=2.7+x%3*1.1,I.userData.scale=.8+x%4*.16,I.userData.op=.42+x%3*.12,gi.push(I)}function Sa(){const x=H.portrait;O.pivot.set(0,x?11:11.8,1.2),O.length=x?7:7.8,O.center.set(0,O.pivot.y-O.length,1.32),O.baseAmp=x?.27:.42,yt.position.copy(O.pivot),mi.position.copy(O.center),cn.position.copy(O.center),Mn.position.copy(O.center)}function $a({start:x=0,period:I=2.4146,amplitude:W=.42,times:G=[]}={}){O.active=!0,O.target=1,O.period=I||2.4146,O.originT=x,O.baseAmp=W||.42,O.times=G.slice(),O.states=G.map(()=>"pending"),O.kick=Math.max(O.kick,.5);for(const j of O.notes)me.remove(j),j.material.dispose();O.notes=O.times.map((j,ue)=>{const be=new vt({map:o.floatNote,color:Ce.clone(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),Xe=new xt(be),et=ue*2.399963,Ze=3.3+ue%3*.85;return Xe.userData.off={x:Math.cos(et)*Ze,y:Math.sin(et)*Ze*.66},Xe.renderOrder=7,Xe.visible=!1,me.add(Xe),Xe}),O.fade=Math.max(O.fade,.002),Sa()}function _i(){O.active=!1,O.target=0;for(const x of O.notes)x.visible=!1}function ja(){_i(),O.fade=0,O.kick=0,O.missFlash=0,O.states=[],me.visible=!1}function Oi(x,I="hit"){O.states[x]!==void 0&&(O.states[x]=I);const W=O.notes[x];W&&(W.visible=!1);const G=O.center;I==="hit"?(O.kick=1,Ve(G,D,22,3.4),tt(G,D,3.1)):(O.missFlash=1,Ve(G,16724831,10,1.5),tt(G,16724831,1.9))}function Ja(){O.kick=Math.max(O.kick,.14)}const Bi=new U,zi=new U;function es(){a.updateMatrixWorld(),Bi.copy(O.center).project(a),zi.copy(O.center),zi.y+=1.5,zi.project(a);const x=(Bi.x*.5+.5)*innerWidth,I=(-Bi.y*.5+.5)*innerHeight,W=(-zi.y*.5+.5)*innerHeight;return{x,y:I,radius:Math.max(60,Math.min(118,Math.abs(I-W)))}}function ts(x,I){O.fade+=(O.target-O.fade)*(1-Math.exp(-x*3.1));const W=O.fade>.012;if(me.visible=W,!W)return;O.kick=Math.max(0,O.kick-x*3.2),O.missFlash=Math.max(0,O.missFlash-x*2.6);const G=O.baseAmp,j=G*Math.cos((I-O.originT)/O.period*Math.PI*2);O.angle=j;const ue=Math.sin(j)*O.length,be=-Math.cos(j)*O.length;$e.position.copy(O.pivot),$e.scale.set(.5,O.length,1),$e.material.rotation=Math.PI+j,yt.position.copy(O.pivot),ot.position.set(O.pivot.x+ue,O.pivot.y+be,O.pivot.z+.12),tn.position.set(O.pivot.x+ue,O.pivot.y+be,O.pivot.z+.16);const Xe=Math.max(0,1-Math.abs(j)/Math.max(.001,G)),et=1+O.kick*.22+Xe*.05;ot.scale.set(2.2*et,2.2*et,1),tn.scale.set(2*et,2*et,1),$e.visible=!0,yt.visible=!0,tn.visible=!0,ot.visible=!0;const Ze=O.fade,Ge=O.missFlash;$e.material.opacity=Ze*.62,yt.material.opacity=Ze*(.55+Xe*.3),ot.material.opacity=Ze*(.24+Xe*.16+O.kick*.14),tn.material.opacity=Ze*(.78+O.kick*.2),tn.material.color.copy(le).lerp(ne,Ge),ot.material.color.copy(Ce).lerp(ne,Ge);const Pt=1+Xe*.08+O.kick*.14;mi.scale.set(2.9*Pt,2.9*Pt,1),cn.scale.set(3.2*Pt,3.2*Pt,1),Mn.scale.set(1.5*Pt,1.5*Pt,1),mi.material.opacity=Ze*(.5+Xe*.3+O.kick*.18),cn.material.opacity=Ze*(.05+Xe*.04+O.kick*.06),Mn.material.opacity=Ze*(.16+Xe*.12),mi.material.color.copy(le).lerp(ne,Ge*.7);for(const lt of O.notes){const Ut=O.notes.indexOf(lt),qt=O.times[Ut],K=O.states[Ut],he=qt-I;if(K!=="pending"||he>1.55||he<-.35){lt.visible=!1;continue}const Zt=Math.max(0,Math.min(1,1-he/1.55)),hn=1-Math.pow(1-Zt,3),Kt=lt.userData.off;lt.position.set(O.center.x+Kt.x*(1-hn),O.center.y+Kt.y*(1-hn)+Math.sin(I*2.2+Ut)*.1*(1-hn),O.center.z+.14);const Gi=1.5+hn*.55+Math.sin(I*7+Ut)*.03;lt.scale.set(Gi,Gi,1),lt.material.opacity=Ze*(.2+hn*.78),lt.visible=!0}for(let lt=0;lt<gi.length;lt++){const Ut=gi[lt],qt=I*.24+lt*2.399963,K=Ut.userData.r;Ut.position.set(O.center.x+Math.cos(qt)*K,O.center.y+Math.sin(qt*1.3)*K*.6+Math.sin(I*.9+lt)*.24,O.center.z+.05),Ut.material.rotation=Math.sin(I*.5+lt)*.32;const he=Ut.userData.scale;Ut.scale.set(he,he,1),Ut.material.opacity=Ze*Ut.userData.op*(.55+.45*Math.sin(I*1.5+lt*1.7)),Ut.visible=!0}}function ns(x,I,W=!1){const G=oe.active?Ir:sa,j=new He(G[x]),ue=new Jt;ue.renderOrder=5,W?Qe.add(ue):Ee[x].group.add(ue);const be=new vt({map:o.note,color:j,transparent:!0,opacity:1,depthWrite:!1,depthTest:!1,blending:qn,fog:!1}),Xe=new xt(be);Xe.scale.set(1.04,1.04,1),Xe.renderOrder=6,ue.add(Xe);let et=null,Ze=null;if(I==="hold"){const Ge=new vt({map:o.hold,color:j.clone().lerp(new He(16777215),.15),transparent:!0,opacity:.72,depthWrite:!1,depthTest:!1,blending:dt,fog:!1});et=new xt(Ge),et.center.set(.5,.5),et.renderOrder=4,ue.add(et);const Pt=new vt({map:o.note,color:j.clone(),transparent:!0,opacity:.85,depthWrite:!1,depthTest:!1,blending:dt,fog:!1});Ze=new xt(Pt),Ze.scale.set(.68,.68,1),Ze.renderOrder=5,ue.add(Ze)}return{group:ue,head:Xe,body:et,tail:Ze,color:j,free:!!W}}function is(x,I,W=0){const G=Ee[x].group,j=Math.max(0,Math.min(1,I/12.2)),ue=Math.pow(j,.82),be=Math.sin(W*2.17+I*.37)*(1.05+W%3*.18)+Math.sin(W*.73+I*.19)*.5,Xe=Math.cos(W*1.31+I*.29)*1.15;return{x:G.position.x+be*ue,y:I,z:G.position.z+.24+Xe*ue,sway:be*ue}}const Nn=720,y=new Float32Array(Nn*3).fill(-999),N=new Float32Array(Nn*3),X=new Float32Array(Nn*3),Y=new Float32Array(Nn),B=new Float32Array(Nn),fe=new en;fe.setAttribute("position",new mn(y,3)),fe.setAttribute("color",new mn(N,3));const Me=new Do({size:.3,map:o.glow,vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!1,blending:dt,sizeAttenuation:!0,fog:!1}),Ue=new Zl(fe,Me);Ue.renderOrder=9,n.add(Ue);let Re=0;function Ve(x,I,W=16,G=3.2){const j=new He(I);for(let ue=0;ue<W;ue++){const be=Re=(Re+1)%Nn;y[be*3]=x.x+(Math.random()-.5)*.15,y[be*3+1]=x.y+(Math.random()-.5)*.15,y[be*3+2]=x.z+(Math.random()-.5)*.15;const Xe=Math.random()*Math.PI*2,et=Math.acos(2*Math.random()-1),Ze=G*(.35+Math.random()*.9);X[be*3]=Math.sin(et)*Math.cos(Xe)*Ze,X[be*3+1]=Math.cos(et)*Ze+.6,X[be*3+2]=Math.sin(et)*Math.sin(Xe)*Ze;const Ge=Math.random()<.35;N[be*3]=Ge?1:j.r,N[be*3+1]=Ge?1:j.g,N[be*3+2]=Ge?1:j.b,Y[be]=B[be]=.35+Math.random()*.5}}const Ye=[];for(let x=0;x<16;x++){const I=new vt({map:o.ring,color:16777215,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),W=new xt(I);W.scale.set(.8,.8,1),W.renderOrder=8,W.visible=!1,n.add(W),Ye.push({sprite:W,life:0,max:.38})}let We=0;function tt(x,I,W=2.8){const G=Ye[We=(We+1)%Ye.length];G.sprite.position.copy(x),G.sprite.material.color.set(I),G.sprite.material.opacity=.95,G.sprite.scale.set(.7,.7,1),G.sprite.visible=!0,G.life=G.max=.38,G.scale=W}const pt=[];for(let x=0;x<54;x++){const I=new vt({map:o.ring,color:16777215,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:dt,fog:!1}),W=new xt(I);W.scale.set(.6,.6,1),W.renderOrder=7,W.visible=!1,A.add(W),pt.push({sprite:W,life:0,max:1,delay:0,vx:0,vy:0,base:.5,alpha:.6,spin:0})}let At=0;const H={view:{rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.7,bloom:.8,spin:.04,spacing:Ur,ring:1.65},target:{rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.7,bloom:.8,spin:.04,spacing:Ur,ring:1.65},section:null,energy:.4,keyCount:8,active:new Set([0,1,2,3,4,5,6,7]),pulse:0,shake:0,zoomKick:0,noteSpeed:8.2,time:0,playing:!1,spacing:Ur,ringScale:1.65,portrait:!1,mouse:new je,laneXNow:Ne.slice(),bpm:100,beatOffset:.535,energyPulse:0,motion:{style:"fan",amp:.06,speed:.5,pitch:.03},targetMotion:{style:"fan",amp:.06,speed:.5,pitch:.03},laneAngle:new Float32Array(8),lanePitch:new Float32Array(8),screenAngle:new Float32Array(8),city:0,cityTarget:0,live:new Set([0,1,2,3,4,5,6,7])},oe={active:!1,mode:"off",intro:!1,fieldFade:1,fieldTarget:1,churchFade:0,churchTarget:0,clockFade:0,clockTarget:0,windBoost:0,glitch:0,slowAngle:0,fastAngle:0,handKick:0,hubKick:0,palette:"normal"},Se={lock:!1,pos:new U(0,6.7,17.2),look:new U(0,4.05,0),targetPos:new U(0,6.7,17.2),targetLook:new U(0,4.05,0),fov:46,targetFov:46,roll:0,targetRoll:0,rate:3};function Et(x){const I=x?Ir:sa;oe.palette=x?"boss":"normal";const W=H.section?.color;for(let G=0;G<8;G++)Ee[G].color.set(I[G]),Ee[G].targetColor.copy(Ee[G].color),W&&Ee[G].targetColor.lerp(new He(W),.24)}function ht(x="off"){const I=x||"off";oe.mode=I,oe.active=I!=="off",oe.intro=I==="intro"||I==="preview",oe.fieldTarget=I==="play"||I==="outro"?1:0,oe.churchTarget=I==="off"?0:I==="intro"?1:I==="preview"?.66:.46,oe.clockTarget=I==="off"?0:I==="intro"?1:.94,(I==="off"||I==="preview")&&(oe.cameraLock=!1),I==="intro"&&(oe.cameraLock=!0,Se.pos.set(0,12,34),Se.look.set(0,14,-60),Se.targetPos.copy(Se.pos),Se.targetLook.copy(Se.look),Se.fov=Se.targetFov=54,Se.roll=Se.targetRoll=0),I==="off"&&(Se.fov=Se.targetFov=H.portrait?52:46,Se.roll=Se.targetRoll=0,Se.lock=!1,a.fov=Se.fov,a.updateProjectionMatrix()),Et(oe.active)}function nn(x,I,W=49,G=0,j=.8){oe.cameraLock=!0,Se.targetPos.set(x[0],x[1],x[2]),Se.targetLook.set(I[0],I[1],I[2]),Se.targetFov=W,Se.targetRoll=G,Se.rate=5.2/Math.max(.18,Math.min(2.2,j))}function ei(x=1){oe.glitch=Math.min(1.5,oe.glitch+x),oe.windBoost=Math.min(2.4,oe.windBoost+x*.7),H.shake=Math.min(.24,H.shake+x*.035),H.zoomKick=Math.min(1.5,H.zoomKick+x*.3)}function an(x=1){oe.windBoost=Math.min(2.6,oe.windBoost+x*.9),oe.glitch=Math.min(1.4,oe.glitch+x*.12);for(let I=0;I<3;I++){const W=Math.floor(Math.random()*8),G=vi(W,1+Math.random()*7);Ve(G,new He(Ir[W]).getHex(),4,1.4+x)}}function yi(x="fast",I=1){if(oe.handKick=Math.max(oe.handKick,.35+I*.55),oe.hubKick=Math.max(oe.hubKick,.25+I*.4),I>.9&&oe.clockFade>.3){const W=De.localToWorld(new U(0,0,.8));tt(W,x==="slow"?16765286:16731501,1.1+I*.4)}}function Ct(x,I){const W=1+oe.windBoost*.85;for(const G of It){const j=oe.active?oe.intro?1:H.active.has(G.lane)?0:.95:0;G.power+=(j-G.power)*(1-Math.exp(-x*2.1));const ue=G.power,be=ue>.012,Xe=Ee[G.lane].group.position.x;for(let et=0;et<G.ribbons.length;et++){const Ze=G.ribbons[et];if(Ze.visible=be,!be)continue;const Ge=I*1.15*W+G.seed+et*1.71,Pt=((I*1.05*W+et*1.9+G.seed*.8)%13+13)%13,lt=-1.4+Pt,Ut=Math.max(0,Math.min(1,(lt+1.4)/2.6))*Math.max(0,Math.min(1,(12.6-lt)/3.2));Ze.position.set(Xe+Math.sin(Ge*1.07)*(.75+Pt*.09)+Math.sin(Ge*.43)*.5,lt,.3+Math.cos(Ge*.91)*1.15+Math.sin(Ge*.37)*.55),Ze.material.rotation=Ge*1.55;const qt=2.1+1.5*Math.abs(Math.sin(Ge*1.3)),K=.11+.06*Math.abs(Math.cos(Ge*.8));Ze.scale.set(K,qt,1),Ze.material.opacity=ue*Ut*(.11+.1*Math.pow(Math.sin(Ge*2.1),2))}for(let et=0;et<G.glows.length;et++){const Ze=G.glows[et];if(Ze.visible=be,!be)continue;const Ge=I*.85*W+G.seed*1.7+et*2.3,Pt=-.4+(I*1.35*W+et*4.3+G.seed)%13;Ze.position.set(Xe+Math.sin(Ge*.83)*1.5,Pt,.45+Math.cos(Ge*.71)*1.3);const lt=.75+.35*Math.sin(Ge*1.6);Ze.scale.set(lt,lt,1),Ze.material.rotation=Ge,Ze.material.opacity=ue*.24*(.55+.45*Math.sin(Ge*1.3))}}}function un(x,I){oe.fieldFade+=(oe.fieldTarget-oe.fieldFade)*(1-Math.exp(-x*3.4)),oe.churchFade+=(oe.churchTarget-oe.churchFade)*(1-Math.exp(-x*1.5)),oe.clockFade+=(oe.clockTarget-oe.clockFade)*(1-Math.exp(-x*1.7)),oe.windBoost*=Math.exp(-x*1.8),oe.glitch*=Math.exp(-x*6.2),oe.handKick*=Math.exp(-x*3.3),oe.hubKick*=Math.exp(-x*2.8);const W=oe.churchFade;if(C.visible=W>.008,C.visible){for(const ue of F)ue.mat.opacity=ue.base*W;const G=oe.clockFade;at.opacity=G*(.92+oe.hubKick*.12),bt.opacity=G*(.2+oe.hubKick*.12),Je.opacity=G*(.7+oe.hubKick*.3),re.material.opacity=G*(.7+oe.handKick*.2),Le.material.opacity=G*(.86+oe.handKick*.14),De.visible=G>.01;const j=1+oe.hubKick*.035+Math.sin(I*1.8)*.004;gt.scale.set(27*j,27*j,1),ct.scale.set(40*j,40*j,1),Fe.scale.set(2.2*(1+oe.hubKick*.22),2.2*(1+oe.hubKick*.22),1),oe.slowAngle+=x*.075,oe.fastAngle+=x*.62,re.material.rotation=-oe.slowAngle,Le.material.rotation=-oe.fastAngle,re.material.color.set(16765286).lerp(Sn,oe.handKick*.65),Le.material.color.set(16731501).lerp(Sn,oe.handKick*.65),re.scale.set(1.1,1.1*7.1,1),Le.scale.set(.8,.8*7.1,1);for(const ue of st)ue.mat.opacity=ue.base*W*(.58+.3*Math.sin(I*3.1+ue.phase)+.12*Math.sin(I*9.7+ue.phase*2.3));for(const ue of kt)ue.mat.opacity=ue.base*W*(.7+.3*Math.sin(I*.24+ue.phase)),ue.sprite.position.x+=Math.sin(I*.11+ue.phase)*x*.08,ue.sprite.position.y+=Math.cos(I*.09+ue.phase)*x*.05;S.map.offset.y=I*.0035%1}else De.visible=!1;Ct(x,I)}function fn(x){const I=innerWidth/Math.max(1,innerHeight);if(H.portrait)return x<=4?{spacing:1.72,ring:1.62}:x<=6?{spacing:1.3,ring:1.24}:{spacing:1.02,ring:1.04};const W=I>1.9?1.08:1;return x<=4?{spacing:3.15*W,ring:2.35*W}:x<=6?{spacing:2.16*W,ring:1.95*W}:{spacing:1.75*W,ring:1.65*W}}function Gt(x,I=!1){const W=fn(x);H.spacing=W.spacing,H.ringScale=W.ring,H.target.spacing=W.spacing,H.target.ring=W.ring,I&&(H.view.spacing=W.spacing,H.view.ring=W.ring)}function Ht(){const x=innerWidth,I=innerHeight,W=x/I;H.portrait=W<.92,Gt(H.keyCount,!0),V.group.position.set(0,H.portrait?15.2:13.2,-28),V.group.scale.setScalar(H.portrait?.86:1),Sa();for(let j=0;j<8;j++){const ue=(j-3.5)*H.spacing;Ee[j].baseX=ue,Ee[j].group.position.x=ue,Ee[j].group.position.z=Nr*ue*ue,Ee[j].ring.scale.set(H.view.ring,H.view.ring,1),Ee[j].glow.scale.set(H.view.ring*1.35,H.view.ring*1.35,1),H.laneXNow[j]=ue}Pe.scale.set((H.keyCount-1)*H.spacing+H.ring*1.5,.9,1),a.aspect=W,a.fov=H.portrait?52:46,a.updateProjectionMatrix();const G=H.section?H.section.camZ:17.2;H.target.camZ=G+(H.portrait?6.4:0),H.view.camZ=H.target.camZ,t.setSize(x,I),r.setSize(x,I),s.resolution.set(x/2,I/2)}addEventListener("resize",Ht),Ht(),addEventListener("pointermove",x=>{H.mouse.x=x.clientX/innerWidth*2-1,H.mouse.y=x.clientY/innerHeight*2-1},{passive:!0});function ba(x){if(!x)return;const I=!!H.section&&H.section.keys!==x.keys;H.section=x,H.energy=x.energy,H.keyCount=x.keys,x.bpm&&hl(x.bpm,x.beatOffset??0),oe.active&&Et(!0),Gt(x.keys),H.target.rotY=x.rotY,H.target.rotZ=x.rotZ,H.target.tilt=x.tilt,H.target.spread=x.spread,H.target.y=x.y,H.target.camZ=x.camZ+(H.portrait?6.4:0),H.target.camY=x.camY,H.target.bloom=x.bloom*.82,H.target.spin=x.spin,H.targetMotion={style:x.motion||"fan",amp:x.motionAmp??.06,speed:x.motionSpeed??.5,pitch:x.motionPitch??.03},H.cityTarget=x.city??0,I&&(H.zoomKick=Math.min(1.4,H.zoomKick+.85));const W={4:[2,3,4,5],6:[1,2,3,4,5,6],8:[0,1,2,3,4,5,6,7]};H.active=new Set(W[x.keys]||W[8]),H.live=new Set(H.active);for(let G=0;G<8;G++){const j=H.active.has(G);Ee[G].active=j?1:0,j||(Ee[G].ghostFx=null),Ee[G].targetColor.copy(Ee[G].color).lerp(new He(x.color),.24),j&&(Ee[G].flash=Math.max(Ee[G].flash,.22))}V.slowColor.copy(Ee[0].targetColor),V.fastColor.copy(Ee[7].targetColor),Ke.color.set(x.accent)}function Fn(x){const I=new Set(H.active);for(const G of x)I.add(G);let W=I.size!==H.live.size;if(!W){for(const G of I)if(!H.live.has(G)){W=!0;break}}if(W){H.live=I;for(const G of x)H.active.has(G)||(Ee[G].flash=Math.max(Ee[G].flash,.34),Ee[G].ghostFx=null)}}function Nu(x){H.cityTarget=Math.max(0,Math.min(1,x))}function Fu(x="run",I=1,W=null){const G=x||"off",j=V.mode,ue=W??H.time;j==="run"||j==="final"?V.anchorRun+=Math.max(0,ue-V.anchorT):j==="freeze"&&(V.anchorRun=V.runTime),V.anchorT=ue,V.mode=G,G==="off"?(V.target=0,V.frozen=!1,V.rate=1):(V.target=1,V.frozen=G==="freeze",V.rate=G==="final"?1.65:1,V.kick=Math.max(V.kick,.25+I*.35))}function ku(x="fast",I=1){if(!(V.fade<.015)&&(V.kick=Math.max(V.kick,.2+I*.32),x==="slow"?V.slowKick=Math.max(V.slowKick,.35+I*.55):V.fastKick=Math.max(V.fastKick,.35+I*.55),I>1.05&&V.fade>.3)){const W=V.group.localToWorld(new U(0,0,.35));tt(W,x==="slow"?se.getHex():$.getHex(),.9+I*.35)}}function Ou(){V.target=0,V.fade=0,V.mode="off",V.frozen=!1,V.rate=1,V.runTime=0,V.anchorT=0,V.anchorRun=0,V.slowAngle=0,V.fastAngle=0,V.slowKick=0,V.fastKick=0,V.kick=0,V.group.visible=!1,V.dialSlow.visible=!1,V.dialFast.visible=!1}function Bu(x){return Ee[x].baseX}function zu(x){return Nr*Ee[x].baseX*Ee[x].baseX}function vi(x,I){return Ee[x].group.localToWorld(new U(0,I,.2))}const as=new U,rs=new U;function Qa(){a.updateMatrixWorld(),A.updateWorldMatrix(!0,!1);for(let x=0;x<8;x++){const I=Ee[x];I.group.updateWorldMatrix(!1,!1);const W=I.group.matrixWorld;as.set(0,.04,.22).applyMatrix4(W).project(a),rs.set(0,11.4,.22).applyMatrix4(W).project(a);const G=(as.x*.5+.5)*innerWidth,j=(-as.y*.5+.5)*innerHeight,ue=(rs.x*.5+.5)*innerWidth,be=(-rs.y*.5+.5)*innerHeight;I.screenAngle=Math.atan2(ue-G,j-be),I.screen={x:G,y:j,topX:ue,topY:be,angle:I.screenAngle}}}function Gu(x){return Ee[x].screen||Qa(),Ee[x].screen}function fl(){return Qa(),Ee.map(x=>x.screen)}function Hu(){return fl().map(x=>x.x)}function Vu(x){return Ee[x].screen||Qa(),Ee[x].screenAngle}function hl(x,I=0){H.bpm=x||100,H.beatOffset=I}function Wu(x){const I=Ee[x];I.flash=Math.max(I.flash,.55),I.ring.scale.setScalar(H.view.ring*1.1)}function Xu(x,I="sweep"){const W=Ee[x];W&&(W.ghostFx={type:I,t:0,dur:I==="bounce"?.85:1.15},I==="bounce"&&(W.flash=Math.max(W.flash,.65),tt(vi(x,.05),W.color.getHex(),1.7)))}function Yu(){for(const x of Ee)x.ghostFx=null,x.ghost.visible=!1,x.ghost.material.opacity=0}function dl(x,I=1,W=1){const G=Ee[x];if(!G)return;const j=vi(x,.1+Math.random()*.12),ue=3;for(let be=0;be<ue;be++){const Xe=pt[At=(At+1)%pt.length];Xe.sprite.position.copy(j),Xe.sprite.position.y+=be*.11,Xe.sprite.position.z+=be*.05,Xe.sprite.material.color.copy(G.targetColor).lerp(Sn,.12+be*.08),Xe.sprite.material.rotation=Math.random()*Math.PI*2,Xe.sprite.scale.set(.45,.45,1),Xe.life=Xe.max=1.15+be*.24,Xe.delay=be*.075,Xe.vx=I*(2.4+W*1.7)*(1-be*.13)+(Math.random()-.5)*.5,Xe.vy=.45+W*.35+Math.random()*.25,Xe.base=.38+W*.38,Xe.alpha=(.62-be*.13)*Math.min(1,W),Xe.spin=(Math.random()-.5)*1.2,Xe.sprite.visible=!1}}function pl(x=1){H.energyPulse=Math.min(1.5,H.energyPulse+.35*x),H.shake=Math.min(.18,H.shake+.008*x)}function ml(x,I=1){let W;x==null?(W=A.localToWorld(new U(0,.3,.25)),Ve(W,10483199,Math.round(22*I),5.2),tt(W,10483199,4.2)):(W=vi(x,.08),Ve(W,Ee[x].targetColor,Math.round(14+10*I),3.2+I),tt(W,Ee[x].targetColor.getHex(),2.4+I)),H.shake=Math.min(.2,H.shake+.02*I)}function qu(x=1){pl(x),H.zoomKick=Math.min(1.4,H.zoomKick+.22*x),ml(null,.7+x*.7);for(let I=0;I<8;I++)H.active.has(I)||dl(I,I<3.5?-1:1,.7+x*.6)}function Zu(x,I,W,G){H.targetMotion={style:x||"fan",amp:I??.08,speed:W??.6,pitch:G??.04}}function Ku(x,I){const W=Ee[x];W.flash=1,H.shake=Math.min(.16,H.shake+(I==="perfect"?.025:.016));const G=vi(x,.05);Ve(G,W.color,I==="perfect"?22:14,3.5),tt(G,W.color.getHex(),3)}function $u(x){H.shake=Math.min(.25,H.shake+.13),Ee[x];const I=vi(x,.05);Ve(I,16724831,9,1.4),tt(I,16724831,2)}const Sn=new He(16777215);new He;let gl=0;function ju(x,I,W){gl+=x;const G=W?I:gl;H.time=G,H.playing=W;const j=H.view,ue=H.target,be=1-Math.exp(-x*2.2);j.rotY+=(ue.rotY-j.rotY)*be,j.rotZ+=(ue.rotZ-j.rotZ)*be,j.tilt+=(ue.tilt-j.tilt)*be,j.spread+=(ue.spread-j.spread)*be,j.y+=(ue.y-j.y)*be,j.camZ+=(ue.camZ-j.camZ)*be,j.camY+=(ue.camY-j.camY)*be,j.spin+=(ue.spin-j.spin)*be,j.spacing+=(ue.spacing-j.spacing)*(1-Math.exp(-x*3.1)),j.ring+=(ue.ring-j.ring)*(1-Math.exp(-x*3.1)),s.strength+=(ue.bloom-s.strength)*be,H.zoomKick*=Math.exp(-x*2.6),H.energyPulse*=Math.exp(-x*3.2);const Xe=60/H.bpm,et=((G-H.beatOffset)/Xe%1+1)%1,Ze=Math.exp(-et*5.2);H.pulse=Ze;const Ge=H.motion,Pt=H.targetMotion,lt=1-Math.exp(-x*2.2);Ge.amp+=(Pt.amp-Ge.amp)*lt,Ge.speed+=(Pt.speed-Ge.speed)*lt,Ge.pitch+=(Pt.pitch-Ge.pitch)*lt,Ge.style=Pt.style;const Ut=H.energyPulse;s.strength+=Ut*.32,un(x,G),A.position.y=j.y+Math.sin(G*.65)*.035+Ze*.03,A.rotation.y=j.rotY+Math.sin(G*.22)*.02+Math.sin(G*.09)*j.spin+(oe.glitch>.01?(Math.random()-.5)*oe.glitch*.012:0),A.rotation.z=j.rotZ+Math.sin(G*.37)*.006+(oe.glitch>.01?(Math.random()-.5)*oe.glitch*.01:0),A.rotation.x=j.tilt+Math.sin(G*.29)*.006;for(let K=0;K<8;K++){const he=Ee[K],Zt=(K-3.5)*j.spacing*j.spread;he.baseX=Zt,he.group.position.x=Zt,he.group.position.z=Nr*Zt*Zt,H.laneXNow[K]=Zt;const hn=K-3.5;let Kt=0;switch(Ge.style){case"fan":Kt=-hn*Ge.amp;break;case"slope":Kt=Ge.amp;break;case"tiltL":Kt=Ge.amp*1.15;break;case"tiltR":Kt=-Ge.amp*1.15;break;case"zigzag":Kt=(K%2?1:-1)*Ge.amp*.95;break;case"wave":Kt=Math.sin(G*Ge.speed+K*.72)*Ge.amp-hn*Ge.amp*.22;break;case"orbit":Kt=Math.sin(G*Ge.speed*.72+hn*.38)*Ge.amp*.78-hn*Ge.amp*.3;break;default:Kt=-hn*Ge.amp}Kt+=Math.sin(G*1.15+K*.55)*Ge.amp*.12*(.4+H.energy),Kt+=Ze*.006*Math.cos(K*.9+.4);const Gi=Math.sin(G*.55+K*.7)*Ge.pitch+Ze*Ge.pitch*.32*Math.sin(K*.8+.7)+Ut*.006,er=1-Math.exp(-x*3.4);he.angle+=(Kt-he.angle)*er,he.pitch+=(Gi-he.pitch)*er,H.laneAngle[K]=he.angle,H.lanePitch[K]=he.pitch,he.group.rotation.z=he.angle,he.group.rotation.x=he.pitch,he.line.scale.y=12.4*Math.cos(he.pitch),he.beam.scale.y=12.6*Math.cos(he.pitch);const tr=H.live.has(K);let kn=0,ss=0;if(he.ghostFx){const ir=he.ghostFx;ir.t+=x;const os=ir.t/ir.dur;if(os>=1)he.ghostFx=null,he.ghost.visible=!1,he.ghost.material.opacity=0;else if(kn=Math.sin(Math.PI*os),ir.type==="sweep"){he.ghost.visible=!0,he.ghost.position.set(0,.25+os*10.5,.08);const yl=.85+.55*kn;he.ghost.scale.set(yl,yl,1),he.ghost.material.opacity=kn*.8,he.ghost.material.color.copy(he.targetColor).lerp(Sn,.3+kn*.4)}else ss=kn,he.ghost.visible=!1}const nr=oe.active?oe.fieldFade:1,ef=(tr?(K%2?.86:.96)*.58:kn*.34)*nr,tf=(tr?.065+Ze*.03:kn*.04)*nr,nf=(tr?.95:ss*.78+kn*.035)*nr;he.line.material.opacity+=(ef-he.line.material.opacity)*(1-Math.exp(-x*3.5)),he.beam.material.opacity+=(tf-he.beam.material.opacity)*(1-Math.exp(-x*3.5)),he.ring.material.opacity+=(nf-he.ring.material.opacity)*(1-Math.exp(-x*3.5)),he.glow.material.opacity+=(((tr?.14:kn*.07)+he.flash*.3)*nr-he.glow.material.opacity)*(1-Math.exp(-x*8)),he.flash=Math.max(0,he.flash-x*3.4);const _l=j.ring*(1+Ze*.045*(.4+H.energy)+he.flash*.22+ss*.5);he.ring.scale.set(_l,_l,1),he.ring.material.color.copy(he.targetColor).lerp(Sn,he.flash*.8),he.glow.material.color.copy(he.targetColor).lerp(Sn,he.flash*.5),he.line.material.color.copy(he.targetColor).lerp(Sn,.14+he.flash*.32),he.beam.material.color.copy(he.targetColor)}Qa();for(let K=0;K<8;K++){const he=Ee[K];he.line.material.rotation=-he.screenAngle,he.beam.material.rotation=-he.screenAngle}if(Pe.scale.x=(j.spacing*(H.keyCount-1)+j.ring*1.5)*j.spread,Pe.material.opacity=(.45+Ze*.3+H.energy*.15+Ut*.16)*(oe.active?oe.fieldFade:1),oe.active&&oe.cameraLock){const K=Se,he=1-Math.exp(-x*K.rate);K.pos.lerp(K.targetPos,he),K.look.lerp(K.targetLook,he),K.fov+=(K.targetFov-K.fov)*he,K.roll+=(K.targetRoll-K.roll)*he,a.position.copy(K.pos),a.fov=K.fov,a.updateProjectionMatrix(),a.lookAt(K.look),a.rotation.z+=K.roll,oe.glitch>.01&&(a.position.x+=(Math.random()-.5)*oe.glitch*.24,a.position.y+=(Math.random()-.5)*oe.glitch*.2,a.rotation.z+=(Math.random()-.5)*oe.glitch*.022),H.shake>5e-4&&(a.position.x+=(Math.random()-.5)*H.shake,a.position.y+=(Math.random()-.5)*H.shake,H.shake*=Math.exp(-x*10))}else{const K=H.mouse.x*.55,he=j.camY+H.mouse.y*.18;a.position.x+=(K-a.position.x)*(1-Math.exp(-x*2)),a.position.y+=(he-a.position.y)*(1-Math.exp(-x*2)),a.position.z+=(j.camZ-H.zoomKick*1.05-a.position.z)*(1-Math.exp(-x*3.4)),H.shake>5e-4&&(a.position.x+=(Math.random()-.5)*H.shake,a.position.y+=(Math.random()-.5)*H.shake,H.shake*=Math.exp(-x*10)),a.lookAt(0,4.05,0)}h.rotation.y+=x*.006,u.rotation.y-=x*.004,d.rotation.y+=x*.012,_.position.x=-16+Math.sin(G*.05)*2,v.position.y=1+Math.sin(G*.07+1)*2;for(let K=0;K<f.length;K++)f[K].rotation.z+=x*(.02+K*.012),f[K].rotation.y+=x*.008;if(H.city+=(H.cityTarget-H.city)*(1-Math.exp(-x*1.6)),b.visible=H.city>.012,b.visible){b.position.x=H.mouse.x*1.4;for(let K=0;K<P.length;K++){const he=P[K];he.map.offset.x+=x*he.speed*(.7+H.energy*1.6+Ze*.8),he.mesh.position.y=he.base+Math.sin(G*.17+K*1.7)*.18,he.mat.opacity=H.city*(K?.42:.3)}}if(V.fade+=(V.target-V.fade)*(1-Math.exp(-x*2.6)),V.group.visible=V.fade>.008,V.group.visible){if(V.target>0&&!V.frozen&&(V.runTime=V.anchorRun+Math.max(0,G-V.anchorT)),!V.frozen){const hn=60/Math.max(1,H.bpm),Kt=V.runTime/(hn*32)*Math.PI*2,Gi=hn*(V.mode==="final"?.34:.5),er=Math.floor((G-H.beatOffset)/Gi)*(Math.PI*2/12);V.slowAngle+=(Kt-V.slowAngle)*(1-Math.exp(-x*4)),V.fastAngle+=(er-V.fastAngle)*(1-Math.exp(-x*20)),V.handSlow.material.rotation=-V.slowAngle,V.handFast.material.rotation=-V.fastAngle}V.slowKick=Math.max(0,V.slowKick-x*3.6),V.fastKick=Math.max(0,V.fastKick-x*4.4),V.kick=Math.max(0,V.kick-x*3.1);const K=V.fade;V.face.material.opacity=K*(.34+V.kick*.14),V.aura.material.opacity=K*(.085+V.kick*.08),V.hub.material.opacity=K*(.5+V.kick*.45),V.handSlow.material.opacity=K*(.72+V.slowKick*.34),V.handFast.material.opacity=K*(.82+V.fastKick*.28),V.handSlow.material.color.copy(V.slowColor).lerp(Sn,V.slowKick*.75),V.handFast.material.color.copy(V.fastColor).lerp(Sn,V.fastKick*.75);const he=1.9*(1+V.kick*.26+Math.sin(G*7.5)*.025);V.hub.scale.set(he,he,1);const Zt=1+V.kick*.012;V.face.scale.set(21.6*Zt,21.6*Zt,1),V.dialSlow.visible=!0,V.dialFast.visible=!0,V.dialSlow.material.rotation=-V.slowAngle,V.dialFast.material.rotation=-V.fastAngle,V.dialSlow.material.opacity=K*(.3+V.slowKick*.24),V.dialFast.material.opacity=K*(.36+V.fastKick*.24),V.dialSlow.material.color.copy(V.slowColor).lerp(Sn,V.slowKick*.7),V.dialFast.material.color.copy(V.fastColor).lerp(Sn,V.fastKick*.7)}ts(x,G);for(const K of E)K.rotation.x+=K.userData.spin.x*x,K.rotation.y+=K.userData.spin.y*x,K.rotation.z+=K.userData.spin.z*x,K.position.y+=Math.sin(G*.4+K.position.x)*x*.06;let qt=!1;for(let K=0;K<Nn;K++){if(Y[K]<=0)continue;if(qt=!0,Y[K]-=x,Y[K]<=0){y[K*3+1]=-999;continue}X[K*3]*=.972,X[K*3+1]-=2.4*x,X[K*3+2]*=.972,y[K*3]+=X[K*3]*x,y[K*3+1]+=X[K*3+1]*x,y[K*3+2]+=X[K*3+2]*x;const he=Math.max(0,Y[K]/B[K]);N[K*3]*=.988,N[K*3+1]*=.988,N[K*3+2]*=.988,he<.25&&(N[K*3]*=he/.25,N[K*3+1]*=he/.25,N[K*3+2]*=he/.25)}qt&&(fe.attributes.position.needsUpdate=!0,fe.attributes.color.needsUpdate=!0);for(const K of Ye){if(K.life<=0)continue;K.life-=x;const he=1-Math.max(0,K.life/K.max),Zt=.75+he*K.scale;K.sprite.scale.set(Zt,Zt,1),K.sprite.material.opacity=(1-he)*.9,K.life<=0&&(K.sprite.visible=!1)}for(const K of pt){if(K.delay>0&&(K.delay-=x,K.delay>0)||K.life<=0)continue;if(K.life-=x,K.life<=0){K.sprite.visible=!1;continue}const he=1-K.life/K.max;K.vx*=Math.exp(-x*2.5),K.vy*=Math.exp(-x*1.9),K.sprite.position.x+=K.vx*x,K.sprite.position.y+=K.vy*x,K.sprite.material.rotation+=K.spin*x;const Zt=K.base*(.7+he*1.15);K.sprite.scale.set(Zt,Zt,1),K.sprite.material.opacity=Math.pow(1-he,1.55)*K.alpha,K.sprite.visible=!0}}function Ju(){r.render()}function Qu(){t.dispose()}return{scene:n,camera:a,stage:A,noteRoot:Qe,state:H,clock:V,boss:oe,makeNote:ns,setSection:ba,animate:ju,render:Ju,laneX:Bu,laneZ:zu,worldPoint:vi,laneScreenXs:Hu,laneScreenPoints:fl,laneScreenGeometry:Gu,laneScreenAngle:Vu,setPreviewLanes:Fn,setCity:Nu,setTempo:hl,setClock:Fu,clockTick:ku,clockReset:Ou,setBoss:ht,bossCameraEvent:nn,bossGlitch:ei,bossTick:yi,windFx:an,freeNotePose:is,startPendulum:$a,stopPendulum:_i,swingResolve:Oi,swingWhiff:Ja,pendulumReset:ja,pendulumTargetScreen:es,pendulum:O,pressFx:Wu,hitFx:Ku,missFx:$u,ghostFx:Xu,echoFx:dl,pulseFx:pl,burstFx:ml,vibeFx:qu,motionEvent:Zu,clearGhosts:Yu,layout:Ht,dispose:Qu,get noteSpeed(){return H.noteSpeed},set noteSpeed(x){H.noteSpeed=x},get noteScale(){return Math.max(1,Math.min(1.3,H.view.ring/1.65))}}}class O1{constructor(){this.ctx=null,this.buffer=null,this.source=null,this.gain=null,this.startAt=0,this.offset=0,this.duration=0,this.loaded=!1,this.muted=!1,this.hitGain=null,this.cache=new Map}async load(e,t){let n=this.cache.get(e);if(!n){const a=await fetch(e);if(!a.ok)throw new Error("audio fetch failed: "+a.status);const r=Number(a.headers.get("content-length"))||115e4;let s;if(a.body&&a.body.getReader){const o=a.body.getReader(),c=[];let l=0;for(t?.(0);;){const{value:u,done:d}=await o.read();if(d)break;c.push(u),l+=u.length,t?.(Math.min(.94,l/r))}s=new Uint8Array(l);let h=0;for(const u of c)s.set(u,h),h+=u.length}else s=new Uint8Array(await a.arrayBuffer());t?.(.95),this.ctx=this.ctx||new(window.AudioContext||window.webkitAudioContext)({latencyHint:"interactive"}),n=await this.ctx.decodeAudioData(s.buffer),this.cache.set(e,n)}return this.buffer=n,this.duration=n.duration,this.loaded=!0,this.gain||(this.gain=this.ctx.createGain(),this.gain.gain.value=.92,this.gain.connect(this.ctx.destination)),this.hitGain||(this.hitGain=this.ctx.createGain(),this.hitGain.gain.value=.5,this.hitGain.connect(this.ctx.destination)),t?.(1),n}async start(e=0,t={}){if(!this.loaded)return;if(!this.ctx)throw new Error("no audio context");this.ctx.state!=="running"&&await this.ctx.resume(),this.stop(),this.source=this.ctx.createBufferSource(),this.source.buffer=this.buffer,this.source.connect(this.gain);const n=this.ctx.currentTime+.12;this.startAt=n,this.offset=e;try{const a=Math.max(0,(t.fadeStart??this.duration-6.7)-e),r=Math.max(.05,(t.fadeEnd??this.duration-4.7)-e);this.gain.gain.cancelScheduledValues(this.ctx.currentTime),this.gain.gain.setValueAtTime(.92,this.ctx.currentTime),this.gain.gain.setValueAtTime(.92,n+a),this.gain.gain.linearRampToValueAtTime(0,n+r)}catch{}this.source.start(n,e)}stop(){if(this.source){try{this.source.stop()}catch{}this.source.disconnect(),this.source=null}}pause(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}get time(){return this.ctx?this.ctx.currentTime-this.startAt+this.offset:0}get paused(){return!!this.ctx&&this.ctx.state==="suspended"}click(e=3,t=1){if(!this.ctx||this.ctx.state!=="running"||this.muted)return;const n=this.ctx.currentTime,a=this.ctx.createOscillator(),r=this.ctx.createGain();a.type="triangle";const s=360*Math.pow(2,e/12);a.frequency.setValueAtTime(s*1.5,n),a.frequency.exponentialRampToValueAtTime(s*.75,n+.035),r.gain.setValueAtTime(1e-4,n),r.gain.exponentialRampToValueAtTime(.035*t,n+.004),r.gain.exponentialRampToValueAtTime(1e-4,n+.055),a.connect(r),r.connect(this.hitGain),a.start(n),a.stop(n+.07)}thud(){if(!this.ctx||this.ctx.state!=="running"||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(90,e),t.frequency.exponentialRampToValueAtTime(45,e+.12),n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.05,e+.01),n.gain.exponentialRampToValueAtTime(1e-4,e+.18),t.connect(n),n.connect(this.hitGain),t.start(e),t.stop(e+.2)}}const mu={KeyA:0,KeyS:1,KeyD:2,KeyF:3,KeyJ:4,KeyK:5,KeyL:6,Semicolon:7,Numpad1:0,Numpad2:1,Numpad3:2,Numpad4:3,Numpad5:4,Numpad6:5,Numpad7:6,Numpad8:7},wc={4:[2,3,4,5],6:[1,2,3,4,5,6],8:[0,1,2,3,4,5,6,7]},qa=.185,ca={perfect:.045,great:.09,good:.135},gu={perfect:3e3,great:2e3,good:1e3,bad:300},_u={perfect:1,great:.85,good:.55,bad:.25,miss:0},yu="cryout-best-v2",B1="cryout-best-v1",z1=2.05,vu=512,xe=i=>document.getElementById(i),k={canvas:xe("scene"),hud:xe("hud"),pads:[...document.querySelectorAll(".pad")],centerPad:xe("centerPad"),start:xe("startScreen"),startBtn:xe("startBtn"),startLabel:xe("startBtnLabel"),loadFill:xe("loadFill"),startLanes:xe("startLanes"),startTrack:xe("startTrack"),startLength:xe("startLength"),startLevel:xe("startLevel"),trackCards:[...document.querySelectorAll(".track-card")],score:xe("score"),acc:xe("acc"),maxCombo:xe("maxCombo"),progress:xe("progressFill"),progressGlow:xe("progressGlow"),section:xe("sectionName"),time:xe("timeLabel"),keys:xe("keysCount"),energy:xe("energyFill"),comboHud:xe("comboHud"),comboNum:xe("comboNum"),judge:xe("judge"),pauseBtn:xe("pauseBtn"),pause:xe("pauseScreen"),result:xe("resultScreen"),toast:xe("toast"),rank:xe("rank"),finalScore:xe("finalScore"),finalAcc:xe("finalAcc"),cPerfect:xe("cPerfect"),cGreat:xe("cGreat"),cGood:xe("cGood"),cBad:xe("cBad"),cMiss:xe("cMiss"),fMaxCombo:xe("fMaxCombo"),fcBadge:xe("fcBadge"),resultTag:xe("resultTag"),bestScoreLabel:xe("bestScoreLabel"),bestBadge:xe("bestBadge"),bestNote:xe("bestNote"),bestLine:xe("bestLine"),hudTrack:xe("hudTrack"),hudBpm:xe("hudBpm"),resultTrack:xe("resultTrack"),resultDiff:xe("resultDiff"),resultBpm:xe("resultBpm"),footTrack:xe("footTrack"),footLanes:xe("footLanes"),barPerfect:xe("barPerfect"),barGreat:xe("barGreat"),barGood:xe("barGood"),barBad:xe("barBad"),barMiss:xe("barMiss"),peakCombo:xe("peakCombo"),comboLine:xe("comboLine"),comboFill:xe("comboFill"),accRing:xe("accRing"),scoreDelta:xe("scoreDelta"),resultLoading:xe("resultLoading"),loadTrack:xe("loadTrack"),loadProgress:xe("loadProgress"),loadPct:xe("loadPct"),loadRank:xe("loadRank"),flash:xe("flash"),bossGlitch:xe("bossGlitch"),bossCaption:xe("bossCaption"),bcKicker:xe("bcKicker"),bcTitle:xe("bcTitle"),bcSub:xe("bcSub")},Te=k1(k.canvas),Lt=new O1;let Tt=Go[lf]||Pc[0],Rt=Tt.chart,Jn=[],Ni=[],pi=!1,ft="boot",_a=null,No=0,al=Rt.song.chartEnd,Fo=Rt.song.duration,Fr=0,ua=0,fi=[],ko=0,Oo=0,Bo=0,Tc=0;const ke={score:0,combo:0,maxCombo:0,judged:0,weight:0,perfect:0,great:0,good:0,bad:0,miss:0,dropped:0,health:100},An=new Array(8).fill(!1),Fi=new Array(8).fill(null),Qn=new Set;function xu(){return Qn.size>0}let Ec=0,Ua=0,Na=0;function G1(){const i={};try{const e=localStorage.getItem(B1);e&&(i.cryout=JSON.parse(e))}catch{}try{const e=localStorage.getItem(yu);e&&Object.assign(i,JSON.parse(e)||{})}catch{}return i}let Di=G1(),Ia=Di[Tt.id]||null;function Mu(){Ia=Di[Tt.id]||null;const i=Ia?`${String(Ia.score).padStart(7,"0")} · ${Ia.rank||"—"}`:"—";k.bestScoreLabel&&(k.bestScoreLabel.textContent=i),k.bestLine&&(k.bestLine.innerHTML=`PERSONAL BEST <b>${i}</b>`);for(const e of k.trackCards){const t=Di[e.dataset.track],n=e.querySelector(".tc-best");n&&(n.textContent=t?`PB ${t.rank||"—"}`:"",n.title=t?`Personal best ${t.score} · ${(t.acc||0).toFixed(2)}%`:"")}}Te.setSection(Rt.sections[0]);Te.setTempo(Rt.song.bpm,Rt.song.beatOffset);Te.setCity(Rt.sections[0].city||0);Te.setBoss(Tt.boss?"preview":"off");function H1(){for(const i of Jn)i.group.removeFromParent(),i.head.material.dispose(),i.body&&i.body.material.dispose(),i.tail&&i.tail.material.dispose();Jn=[]}function Su(){H1(),Ni=(Rt.swings||[]).map((e,t)=>({t:e.t,index:t,state:"pending"}));const i=!!Rt.song.freeNotes;Jn=Rt.notes.map((e,t)=>{const n=Te.makeNote(e.lane,e.type,i);return n.group.visible=!1,{data:e,index:t,lane:e.lane,type:e.type,free:i,state:"pending",endTime:e.t+(e.dur||0),group:n.group,head:n.head,body:n.body,tail:n.tail,color:n.color,tickAt:e.t}})}function rl(){for(const i of Jn)i.state="pending",i.tickAt=i.data.t,i.group.visible=!1,i.group.position.set(0,0,0),i.head.visible=!0,i.head.scale.set(1.04,1.04,1),i.head.material.opacity=1,i.body&&(i.body.visible=!0,i.body.scale.set(.52,1,1),i.body.position.y=.5,i.tail.visible=!0,i.tail.position.y=1);Object.assign(ke,{score:0,combo:0,maxCombo:0,judged:0,weight:0,perfect:0,great:0,good:0,bad:0,miss:0,dropped:0,health:100}),An.fill(!1),Fi.fill(null),Qn.clear(),Ua=0,Na=0,fi=[],ko=0,Oo=0,Te.clearGhosts(),Te.clockReset(),Kr(),Te.pendulumReset();for(const i of Ni)i.state="pending";No=0,_a=null,Tu(Rt.sections[0],!0),wu(0),di(0,!1),k.judge.className="";for(const i of k.pads)i.classList.remove("pressed");k.flash.classList.remove("on")}function bu(i){return wc[i]||wc[8]}function V1(i){const e=new Set;for(const t of Jn){if(t.state!=="pending")continue;const n=t.data.t-i;n<z1&&n>-qa&&e.add(t.lane)}return e}function W1(i){return String(i).padStart(2,"0")}function zo(i){const e=Math.max(0,Math.floor(i));return`${Math.floor(e/60)}:${W1(e%60)}`}function wu(i){i-ko>=.32&&(ko=i,fi.push(ke.combo),fi.length>vu&&fi.shift()),k.score.textContent=String(ke.score).padStart(7,"0");const e=ke.judged?ke.weight/ke.judged*100:100;k.acc.textContent=e.toFixed(2)+"%",k.maxCombo.textContent=ke.maxCombo;const t=Math.max(0,Math.min(1,i/al));k.progress.style.width=(t*100).toFixed(2)+"%",k.progressGlow.style.left=(t*100).toFixed(2)+"%";const n=Math.max(0,Math.min(Fo,i));k.time.textContent=`${zo(n)} / ${zo(Fo)}`,k.energy.style.height=Math.max(0,Math.min(100,ke.health)).toFixed(1)+"%"}function Za(i,e){const t=k.judge;t.textContent=e||i.toUpperCase(),t.className=i,t.offsetWidth,t.classList.add("pop")}function di(i,e=!0){ke.combo=i,i>ke.maxCombo&&(ke.maxCombo=i),k.comboNum.textContent=i,k.maxCombo.textContent=ke.maxCombo,i>=2?k.comboHud.classList.add("on"):k.comboHud.classList.remove("on"),i>=2&&e&&(k.comboHud.classList.remove("bump"),k.comboHud.offsetWidth,k.comboHud.classList.add("bump"))}function ya(i,e=1300){k.toast.textContent=i,k.toast.classList.add("on"),clearTimeout(Ec),Ec=setTimeout(()=>k.toast.classList.remove("on"),e)}function Va(i){document.body.classList.toggle("boss-intro",i),i||Ka()}function Ka(){clearTimeout(Bo),k.bossCaption&&(k.bossCaption.classList.remove("on"),k.bossCaption.setAttribute("aria-hidden","true"))}function X1(i){if(!k.bossCaption)return;clearTimeout(Bo),k.bcKicker.textContent=i.kicker||"",k.bcTitle.textContent=i.title||"",k.bcSub.textContent=i.sub||"",k.bossCaption.setAttribute("aria-hidden","false"),k.bossCaption.classList.remove("on"),k.bossCaption.offsetWidth,k.bossCaption.classList.add("on");const e=i.hold??3.4;e>0&&(Bo=setTimeout(()=>{k.bossCaption.classList.remove("on"),k.bossCaption.setAttribute("aria-hidden","true")},e*1e3))}function Y1(i=1){k.bossGlitch&&(k.bossGlitch.classList.remove("on"),k.bossGlitch.offsetWidth,k.bossGlitch.classList.add("on"),clearTimeout(Tc),Tc=setTimeout(()=>k.bossGlitch.classList.remove("on"),340))}function Tu(i,e=!1){if(!i||!e&&i===_a)return;_a=i,Te.setSection(i),i.bpm&&Te.setTempo(i.bpm,i.beatOffset??0),k.section.textContent=i.name,k.keys.textContent=i.keys,k.hudBpm&&i.bpm&&(k.hudBpm.textContent=`${Number(i.bpm).toFixed(1).replace(/\.0$/,"")} BPM`);const t=new Set(bu(i.keys));for(const n of k.pads){const a=Number(n.dataset.lane),r=t.has(a);n.classList.toggle("active",r),n.classList.toggle("sleep",!r),n.setAttribute("aria-hidden",String(!r)),n.tabIndex=r?0:-1}document.documentElement.style.setProperty("--cyan",i.color),document.documentElement.style.setProperty("--magenta",i.accent),e||(Tt.boss&&i.intro||ya(`${i.name} // ${i.keys} LANES`,1100),Te.state.shake=Math.min(.12,Te.state.shake+.035))}function q1(i){const e=Rt.sections;for(let t=e.length-1;t>=0;t--)if(i>=e[t].start)return{index:t,sec:e[t]};return{index:0,sec:e[0]}}function Z1(i,e){const t=Math.abs(e);let n;t<=ca.perfect?n="perfect":t<=ca.great?n="great":t<=ca.good?n="good":n="bad",ke[n]++,ke.judged++,ke.weight+=_u[n],ke.score+=gu[n],ke.health=Math.min(100,ke.health+(n==="perfect"?1.1:n==="great"?.8:n==="good"?.4:-1.6)),n==="bad"?di(0,!1):di(ke.combo+1),i.type==="hold"?(i.state="holding",i.endTime=i.data.t+i.data.dur,i.tickAt=Lt.time,i.head.visible=!1,Fi[i.lane]=i):(i.state="done",i.group.visible=!1),Za(n,n==="perfect"?"PERFECT":n==="great"?"GREAT":n==="good"?"GOOD":"BAD"),Te.hitFx(i.lane,n),Lt.click(i.lane,n==="perfect"?.52:.38)}function K1(i){i.state==="pending"&&(i.state="miss",i.group.visible=!1,ke.miss++,ke.judged++,ke.health=Math.max(0,ke.health-5),di(0,!1),Za("miss","MISS"),Te.missFx(i.lane),Lt.thud())}function Eu(i){i.state==="holding"&&(i.state="dropped",i.group.visible=!1,Fi[i.lane]=null,ke.dropped++,ke.miss++,ke.judged++,ke.health=Math.max(0,ke.health-4),di(0,!1),Za("miss","HOLD LOST"),Te.missFx(i.lane),Lt.thud())}function Au(i){i.state==="holding"&&(i.state="done",i.group.visible=!1,Fi[i.lane]=null,ke.score+=450,ke.health=Math.min(100,ke.health+1.2),Te.pressFx(i.lane),Te.hitFx(i.lane,"great"))}function sl(i){if(ft!=="playing")return;Te.pressFx(i),Lt.click(i,.16);const e=Lt.time;if(e<0)return;let t=null,n=1/0;for(const a of Jn){if(a.lane!==i||a.state!=="pending")continue;const r=e-a.data.t;if(r<-.16||r>qa)continue;const s=Math.abs(r);s<n&&(n=s,t=a)}t&&Z1(t,e-t.data.t)}function ol(i){if(ft!=="playing")return;const e=Fi[i];e&&(xu()||(Fi[i]=null,Lt.time<e.endTime-.12?Eu(e):Au(e)))}function $1(i){Ni.length&&(pi=!0,Te.startPendulum({start:i.t,period:i.period??2.4146,amplitude:i.amplitude??.42,times:Ni.map(e=>e.t)}),document.body.classList.add("pendulum"),k.centerPad.classList.add("show"),k.centerPad.setAttribute("aria-hidden","false"),Cu(),ya("STASIS // TAP THE CENTRE",1800))}function Kr(){pi=!1,Te.stopPendulum(),document.body.classList.remove("pendulum"),k.centerPad&&(k.centerPad.classList.remove("show","pressed"),k.centerPad.setAttribute("aria-hidden","true"))}function Cu(){if(!pi||!k.centerPad)return;const i=Te.pendulumTargetScreen(),e=Math.max(140,i.radius*2);k.centerPad.style.left=i.x.toFixed(1)+"px",k.centerPad.style.top=i.y.toFixed(1)+"px",k.centerPad.style.width=e.toFixed(1)+"px",k.centerPad.style.height=e.toFixed(1)+"px"}function j1(i,e){const t=Math.abs(e);let n;t<=ca.perfect?n="perfect":t<=ca.great?n="great":t<=ca.good?n="good":n="bad",i.state="done",ke[n]++,ke.judged++,ke.weight+=_u[n],ke.score+=gu[n],ke.health=Math.min(100,ke.health+(n==="perfect"?1.2:n==="great"?.9:n==="good"?.5:-1.4)),n==="bad"?di(0,!1):di(ke.combo+1),Za(n,n==="perfect"?"PERFECT":n==="great"?"GREAT":n==="good"?"GOOD":"BAD"),Te.swingResolve(i.index,"hit"),Lt.click(3,n==="perfect"?.56:.4)}function J1(i){i.state==="pending"&&(i.state="miss",ke.miss++,ke.judged++,ke.health=Math.max(0,ke.health-5),di(0,!1),Za("miss","MISS"),Te.swingResolve(i.index,"miss"),Lt.thud())}function Q1(i){if(pi)for(const e of Ni)e.state==="pending"&&i>e.t+qa&&J1(e)}function ll(){if(ft!=="playing"||!pi)return;const i=Lt.time;let e=null,t=1/0;for(const n of Ni){if(n.state!=="pending")continue;const a=i-n.t;if(a<-.16||a>qa)continue;const r=Math.abs(a);r<t&&(t=r,e=n)}if(!e){Te.swingWhiff(),Lt.click(3,.1);return}j1(e,i-e.t)}const Gs=8.4;function eg(i){const e=Te.noteScale;for(const t of Jn)if(t.state==="pending"){const n=(t.data.t-i)*Gs;if(t.free){const a=Te.freeNotePose(t.lane,n,t.index);t.group.position.set(a.x,a.y,a.z)}else t.group.position.set(0,n,.24);if(t.group.visible=n<14.5&&n>-1.3,t.head.scale.set(1.04*e,1.04*e,1),t.body){const a=t.data.dur*Gs;t.body.visible=t.group.visible,t.tail.visible=t.group.visible,t.body.scale.set(.52*e,a,1),t.body.position.y=a/2,t.body.material.rotation=t.free?0:-Te.laneScreenAngle(t.lane),t.tail.scale.set(.68*e,.68*e,1),t.tail.position.y=a}i>t.data.t+qa&&K1(t)}else if(t.state==="holding"){if(!An[t.lane]&&!xu()){Eu(t);continue}if(i>=t.endTime-.02){Au(t);continue}const n=Math.max(0,(t.endTime-i)*Gs);if(t.group.visible=!0,t.free){const a=Te.freeNotePose(t.lane,0,t.index);t.group.position.set(a.x,.02,a.z)}else t.group.position.set(0,.02,.24);t.head.visible=!1,t.body&&(t.body.visible=n>.03,t.body.scale.set(.52*e,n,1),t.body.position.y=n/2,t.body.material.rotation=t.free?0:-Te.laneScreenAngle(t.lane),t.tail.visible=n>.4,t.tail.scale.set(.68*e,.68*e,1),t.tail.position.y=n),i>t.tickAt&&(t.tickAt=i+.12,ke.score+=24,ke.health=Math.min(100,ke.health+.06))}else t.group.visible=!1}async function cl(){if(Lt.loaded){ua++,k.start.classList.remove("show"),k.result.classList.remove("show"),k.resultLoading.classList.remove("show"),k.pause.classList.remove("show"),k.hud.classList.remove("hidden"),k.hud.setAttribute("aria-hidden","false"),document.body.classList.add("playing"),Ka(),k.bossGlitch?.classList.remove("on"),Tt.boss?(Te.setBoss("intro"),Va(!0)):(Te.setBoss("off"),Va(!1)),rl(),ft="starting";try{await Lt.start(0,{fadeStart:Tt.fadeStart,fadeEnd:Tt.fadeEnd}),ft="playing",Tt.boss||ya(`LISTEN // ${Rt.sections[0].keys} LANES`,1500)}catch(i){console.error(i),ft="menu",document.body.classList.remove("playing"),k.hud.classList.add("hidden"),k.start.classList.add("show"),k.startLabel.textContent="AUDIO ERROR",ya("AUDIO COULD NOT START",3e3)}}}function Qr(){ft==="playing"&&(ft="paused",Lt.pause(),k.pause.classList.add("show"))}async function Ru(){ft==="paused"&&(Lt.resume(),k.pause.classList.remove("show"),ft="playing")}function Pu(){ua++,ft="menu",Lt.stop(),Lt.resume(),k.pause.classList.remove("show"),k.result.classList.remove("show"),k.resultLoading.classList.remove("show"),k.hud.classList.add("hidden"),k.hud.setAttribute("aria-hidden","true"),k.start.classList.add("show"),document.body.classList.remove("playing"),Te.setSection(Rt.sections[0]),Te.setTempo(Rt.song.bpm,Rt.song.beatOffset),Te.setCity(Rt.sections[0].city||0),Te.setBoss(Tt.boss?"preview":"off"),Te.setPreviewLanes(new Set),Va(!1),Ka(),k.bossGlitch?.classList.remove("on");for(const i of Jn)i.group.visible=!1;An.fill(!1),Fi.fill(null),Qn.clear(),Ua=0,Na=0,Te.clearGhosts(),Te.clockReset(),Kr(),Te.pendulumReset(),Tt.id==="chronostasis"&&Te.setClock("run",.4);for(const i of k.pads)i.classList.remove("pressed","active","sleep");document.documentElement.style.setProperty("--cyan","#5ee7ff"),document.documentElement.style.setProperty("--magenta","#ff5fd2")}function tg(i,e){return e===0?"F":i>=99.5?"S+":i>=98?"S":i>=93?"A":i>=86?"B":i>=76?"C":i<50?"F":"D"}function ng(i,e){const a=i.length?i:[0,0,0,0],r=Math.max(1,e,...a),s=320/Math.max(1,a.length-1);let o="";for(let l=0;l<a.length;l++){const h=l*s,u=116-a[l]/r*106;o+=`${l?"L":"M"}${h.toFixed(1)} ${u.toFixed(1)}`}const c=`${o}L320 116L0 116Z`;return{line:o,fill:c}}function Ac(i=1){k.flash.style.opacity=String(Math.min(.42,.16+i*.18)),k.flash.classList.add("on"),clearTimeout(Oo),Oo=setTimeout(()=>{k.flash.style.opacity="",k.flash.classList.remove("on")},180)}function Cc(i,e,t,n){const r=performance.now(),s=o=>{const c=Math.min(1,(o-r)/t),l=1-Math.pow(1-c,3);i.textContent=n(Math.round(0+(e-0)*l)),c<1&&requestAnimationFrame(s)};requestAnimationFrame(s)}function ig(i){const{rank:e,acc:t,full:n,isBest:a,prevBest:r,judgeTotals:s}=i;k.rank.textContent=e,k.finalScore.textContent="0000000",k.finalAcc.textContent="0.00%",Cc(k.finalScore,i.score,900,p=>String(p).padStart(7,"0")),Cc(k.fMaxCombo,i.maxCombo,700,p=>String(p));const o=performance.now(),c=p=>{const _=Math.min(1,(p-o)/900),v=t*(1-Math.pow(1-_,3));k.finalAcc.textContent=v.toFixed(2)+"%",k.accRing.style.setProperty("--acc",v.toFixed(2)+"%"),_<1&&requestAnimationFrame(c)};requestAnimationFrame(c),k.cPerfect.textContent=i.counts.perfect,k.cGreat.textContent=i.counts.great,k.cGood.textContent=i.counts.good,k.cBad.textContent=i.counts.bad,k.cMiss.textContent=i.counts.miss;const l=Math.max(1,s);k.barPerfect.style.width=(i.counts.perfect/l*100).toFixed(1)+"%",k.barGreat.style.width=(i.counts.great/l*100).toFixed(1)+"%",k.barGood.style.width=(i.counts.good/l*100).toFixed(1)+"%",k.barBad.style.width=(i.counts.bad/l*100).toFixed(1)+"%",k.barMiss.style.width=(i.counts.miss/l*100).toFixed(1)+"%";const h=ng(fi,ke.maxCombo);k.comboLine.setAttribute("d",h.line),k.comboFill.setAttribute("d",h.fill),k.peakCombo.textContent=ke.maxCombo,k.resultTrack.textContent=Tt.title,k.resultDiff.textContent=Tt.difficulty,k.resultBpm.textContent=Tt.bpmLabel||`${Tt.bpm} BPM`,k.footTrack.textContent=Tt.shortTitle,k.footLanes.textContent=Tt.laneLabel,k.resultTag.textContent=n?"FULL COMBO // FIELD MASTERED":t<50?"SIGNAL LOST // TRY AGAIN":"CLEARED // SIGNAL COMPLETE",k.fcBadge.classList.toggle("on",n),k.bestBadge.classList.toggle("on",a);const u=Di[Tt.id]||null;k.bestNote.innerHTML=u?`${String(u.score).padStart(7,"0")} · ${u.rank||"—"}`:"FIRST RUN";const d=Math.max(0,(u?.score||0)-i.score);k.scoreDelta.textContent=a?r?`NEW BEST +${String(Math.max(0,i.score-r.score)).padStart(5,"0")}`:"FIRST CLEAR":d>0?`PB GAP ${String(d).padStart(5,"0")}`:"PB MATCHED",k.result.classList.remove("show"),k.result.offsetWidth,k.result.classList.add("show"),setTimeout(()=>{k.resultLoading.classList.remove("show")},60),k.resultLoading.setAttribute("aria-hidden","true")}function ag(){if(ft!=="playing"&&ft!=="paused")return;ft="results",Lt.stop(),Lt.resume(),k.hud.classList.add("hidden"),k.hud.setAttribute("aria-hidden","true"),k.pause.classList.remove("show"),document.body.classList.remove("playing");const i=ke.judged?ke.weight/ke.judged*100:100,e=tg(i,ke.judged);fi.push(ke.combo),fi.length>vu&&fi.shift();const t=ke.miss===0&&ke.bad===0&&ke.judged>0,n=ke.score,a=Di[Tt.id]||null,r=!a||n>a.score||n===a.score&&i>a.acc;if(r){Di[Tt.id]={score:n,acc:i,rank:e,maxCombo:ke.maxCombo,full:t,at:Date.now()};try{localStorage.setItem(yu,JSON.stringify(Di))}catch{}}Mu();const s={score:n,acc:i,rank:e,full:t,isBest:r,prevBest:a,maxCombo:ke.maxCombo,counts:{...ke},judgeTotals:ke.judged},o=++ua;k.result.classList.remove("show"),k.resultLoading.classList.add("show"),k.resultLoading.setAttribute("aria-hidden","false"),k.loadTrack.textContent=`${Tt.shortTitle} // ${Tt.difficulty}`,k.loadRank.textContent="?",k.loadProgress.style.width="0%",k.loadPct.textContent="00%";const c=performance.now(),l=1650,h=u=>{if(o!==ua)return;const d=Math.min(1,(u-c)/l),p=1-Math.pow(1-d,3);k.loadProgress.style.width=(p*100).toFixed(1)+"%",k.loadPct.textContent=String(Math.round(p*100)).padStart(2,"0")+"%",d<1?requestAnimationFrame(h):(k.loadRank.textContent=e,setTimeout(()=>{o===ua&&ig(s)},280))};requestAnimationFrame(h)}function rg(){ua++,k.result.classList.remove("show"),cl()}function sg(i=new Set){const e=new Set(_a?bu(_a.keys):[]);for(const t of i)e.add(t);for(let t=0;t<8;t++){const n=Te.laneScreenGeometry(t),a=t>0?n.x-Te.laneScreenGeometry(t-1).x:n.x-Te.laneScreenGeometry(1).x,r=t<7?Te.laneScreenGeometry(t+1).x-n.x:n.x-Te.laneScreenGeometry(6).x,s=Math.max(26,(Math.abs(a)+Math.abs(r))*.5),o=Math.max(48,Math.min(240,s*1.1)),c=n.y+26,l=Math.max(6,Math.min(c-110,n.topY)),h=Math.max(110,c-l),u=k.pads[t],d=`translate(-50%,-100%) rotate(${n.angle.toFixed(4)}rad)`;u.style.left=n.x.toFixed(1)+"px",u.style.top=c.toFixed(1)+"px",u.style.width=o.toFixed(1)+"px",u.style.height=h.toFixed(1)+"px",u.style.transform=d;const p=e.has(t);u.classList.contains("sleep")===p&&u.classList.toggle("sleep",!p),u.setAttribute("aria-hidden",String(!p))}Cu()}function og(i){const e=q1(i);(e.index!==No||_a===null)&&(No=e.index,Tu(e.sec))}function lg(i){const e=Rt.ghosts||[];for(;Ua<e.length&&e[Ua].t<=i;){const t=e[Ua++];Te.ghostFx(t.lane,t.type)}}function cg(i){const e=Rt.events||[];for(;Na<e.length&&e[Na].t<=i;){const t=e[Na++];switch(t.type){case"echo":Te.echoFx(t.lane,t.dir??(t.lane<3.5?-1:1),t.power??1);break;case"pulse":Te.pulseFx(t.power??1);break;case"burst":Te.burstFx(t.lane,t.power??1);break;case"vibe":Te.vibeFx(t.power??1),Ac(t.power??1);break;case"motion":Te.motionEvent(t.style,t.amp,t.speed,t.pitch);break;case"clock":Te.setClock(t.mode,t.power??1,t.t),t.mode!=="freeze"&&Kr();break;case"clockTick":Te.clockTick(t.hand,t.power??1);break;case"pendulum":t.mode==="start"?$1(t):Kr();break;case"bossCamera":Te.bossCameraEvent(t.pos,t.look,t.fov,t.roll,t.dur);break;case"bossGlitch":Te.bossGlitch(t.power??1),Y1(t.power??1),Ac((t.power??1)*.6);break;case"bossTick":Te.bossTick(t.hand,t.power??1);break;case"bossPhase":Te.setBoss(t.mode==="play"?"play":"outro"),t.mode==="play"?(Va(!1),ya("CLOCK STAGE // FREE FIELD",1700)):Ka();break;case"wind":Te.windFx(t.power??1);break;case"caption":X1(t);break}}}function ug(i){if(i.code==="Escape"){ft==="playing"?(i.preventDefault(),Qr()):ft==="paused"&&(i.preventDefault(),Ru());return}if(i.code==="Space"){ft==="playing"&&pi&&(i.preventDefault(),i.repeat||ll());return}if(i.repeat)return;const e=mu[i.code];e!==void 0&&(i.preventDefault(),ft==="playing"&&(An[e]||(An[e]=!0,k.pads[e].classList.add("pressed"),sl(e))))}function fg(i){const e=mu[i.code];e!==void 0&&An[e]&&(An[e]=!1,k.pads[e].classList.remove("pressed"),ol(e))}document.addEventListener("keydown",ug,{passive:!1});document.addEventListener("keyup",fg);for(const i of k.pads){const e=Number(i.dataset.lane),t=a=>{if(a.preventDefault(),ft==="playing"){Qn.add(a.pointerId);try{i.setPointerCapture(a.pointerId)}catch{}An[e]||(An[e]=!0,i.classList.add("pressed"),sl(e))}},n=a=>{a.preventDefault(),Qn.delete(a.pointerId),An[e]&&(An[e]=!1,i.classList.remove("pressed"),ol(e))};i.addEventListener("pointerdown",t,{passive:!1}),i.addEventListener("pointerup",n,{passive:!1}),i.addEventListener("pointercancel",n,{passive:!1}),i.addEventListener("lostpointercapture",n,{passive:!1}),i.addEventListener("contextmenu",a=>a.preventDefault())}if(k.centerPad){const i=t=>{if(t.preventDefault(),!(ft!=="playing"||!pi)){Qn.add(t.pointerId);try{k.centerPad.setPointerCapture(t.pointerId)}catch{}k.centerPad.classList.add("pressed"),ll()}},e=t=>{t.preventDefault(),Qn.delete(t.pointerId),k.centerPad.classList.remove("pressed")};k.centerPad.addEventListener("pointerdown",i,{passive:!1}),k.centerPad.addEventListener("pointerup",e,{passive:!1}),k.centerPad.addEventListener("pointercancel",e,{passive:!1}),k.centerPad.addEventListener("lostpointercapture",e,{passive:!1}),k.centerPad.addEventListener("contextmenu",t=>t.preventDefault())}document.addEventListener("pointerdown",i=>{ft==="playing"&&Qn.add(i.pointerId)},{passive:!0});const ul=i=>{Qn.delete(i.pointerId)};document.addEventListener("pointerup",ul,{passive:!0});document.addEventListener("pointercancel",ul,{passive:!0});document.addEventListener("pointerleave",ul,{passive:!0});k.startBtn.addEventListener("click",()=>{(ft==="boot"||ft==="menu")&&cl()});for(const i of k.trackCards)i.addEventListener("click",()=>{ft!=="boot"&&ft!=="menu"||i.dataset.track!==Tt.id&&Du(i.dataset.track)});k.pauseBtn.addEventListener("click",Qr);xe("resumeBtn").addEventListener("click",Ru);xe("restartBtn").addEventListener("click",()=>{k.pause.classList.remove("show"),cl()});xe("quitBtn").addEventListener("click",Pu);xe("retryBtn").addEventListener("click",rg);xe("menuBtn").addEventListener("click",Pu);document.addEventListener("visibilitychange",()=>{document.hidden&&ft==="playing"&&Qr()});addEventListener("blur",()=>{ft==="playing"&&Qr()});k.canvas.addEventListener("contextmenu",i=>i.preventDefault());function Lu(){const i=Tt;k.startTrack&&(k.startTrack.textContent=i.shortTitle),k.startLength&&(k.startLength.textContent=zo(i.duration)),k.startLevel&&(k.startLevel.textContent=i.difficulty),k.startLanes&&(k.startLanes.textContent=i.laneLabel),k.hudTrack&&(k.hudTrack.textContent=i.shortTitle),k.hudBpm&&(k.hudBpm.textContent=i.bpmLabel||`${i.bpm} BPM`),k.loadTrack&&(k.loadTrack.textContent=`${i.shortTitle} // ${i.difficulty}`),document.body.classList.toggle("boss-track",!!i.boss);for(const e of k.trackCards){const t=Go[e.dataset.track];t&&e.style.setProperty("--card-accent",t.accent);const n=e.dataset.track===i.id;e.classList.toggle("active",n),e.setAttribute("aria-selected",String(n))}document.documentElement.style.setProperty("--track-accent",i.accent),Mu()}async function Du(i,{autoLoad:e=!0}={}){const t=Go[i];t&&(Tt=t,Rt=t.chart,al=Rt.song.chartEnd,Fo=t.duration,Lu(),Va(!1),Ka(),k.bossGlitch?.classList.remove("on"),Te.setBoss(t.boss?"preview":"off"),Te.setSection(Rt.sections[0]),Te.setTempo(Rt.song.bpm,Rt.song.beatOffset),Te.setCity(Rt.sections[0].city||0),Te.setPreviewLanes(new Set),Su(),rl(),t.id==="chronostasis"&&Te.setClock("run",.4),e&&(ft="boot",k.startBtn.disabled=!0,await Iu(t)))}async function Iu(i=Tt){const e=++Fr;k.startLabel.textContent="DECODING AUDIO",k.loadFill.style.width="0%";try{if(await Lt.load(i.audio,t=>{e===Fr&&(k.loadFill.style.width=Math.round(t*100)+"%")}),e!==Fr)return;k.loadFill.style.width="100%",k.startLabel.textContent="START SESSION",k.startBtn.disabled=!1,ft="menu"}catch(t){if(e!==Fr)return;console.error(t),k.startLabel.textContent="AUDIO UNAVAILABLE",ya("COULD NOT LOAD AUDIO",4e3),ft="menu"}}Su();rl();ft="boot";Lu();Iu(Tt);let Rc=performance.now(),Hs=0;function Uu(i){const e=Math.min(.05,Math.max(0,(i-Rc)/1e3));if(Rc=i,Hs+=e,ft==="playing"){const t=Lt.time;og(t);const n=V1(t);Te.setPreviewLanes(n),lg(t),cg(t),Q1(t),eg(t),wu(t),Te.animate(e,t,!0),sg(n),t>=al&&ag()}else if(ft==="paused"){const t=Lt.time;Te.animate(e,t,!0)}else Te.animate(e,Hs,!1);Te.render(),requestAnimationFrame(Uu)}window.__cryout={audio:Lt,stats:ke,scene:Te,pressLane:sl,releaseLane:ol,selectTrack:Du,get chart(){return Rt},get notes(){return Jn},get swings(){return Ni},get swingMode(){return pi},swingTap:ll,get state(){return ft},get best(){return Ia}};requestAnimationFrame(Uu);
