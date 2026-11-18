(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const fu={song:{title:"CRYOUT",shortTitle:"CRYOUT",artist:"ORIGINAL TRACK",bpm:100,duration:138.1,chartEnd:133.5,beatOffset:.535,difficulty:"ADVANCED",laneLabel:"4 · 6 · 8",fadeStart:131.4,fadeEnd:133.4},sections:[{name:"SIGNAL",start:3.535,end:12.535,keys:4,color:"#5ee7ff",accent:"#8f7bff",energy:.18,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.8,bloom:.55,spin:.03,motion:"fan",motionAmp:.045,motionSpeed:.45,motionPitch:.02,city:0},{name:"ASCENT",start:12.535,end:22.735,keys:4,color:"#57d9ff",accent:"#9d7bff",energy:.38,rotY:.05,rotZ:-.02,tilt:.015,spread:1.03,y:.05,camZ:16.6,camY:6.6,bloom:.65,spin:.05,motion:"fan",motionAmp:.075,motionSpeed:.55,motionPitch:.035,city:0},{name:"CURRENT",start:22.735,end:41.335,keys:6,color:"#42e0d0",accent:"#c46bff",energy:.62,rotY:-.1,rotZ:.03,tilt:-.02,spread:1.06,y:.1,camZ:15.9,camY:6.4,bloom:.8,spin:.08,motion:"wave",motionAmp:.1,motionSpeed:.7,motionPitch:.05,city:0},{name:"SURGE",start:41.335,end:64.135,keys:8,color:"#ff5fd2",accent:"#58e6ff",energy:.82,rotY:.16,rotZ:-.05,tilt:.03,spread:1.1,y:.16,camZ:15.1,camY:6.2,bloom:.92,spin:.12,motion:"slope",motionAmp:.15,motionSpeed:.85,motionPitch:.075,city:0},{name:"DRIFT",start:64.135,end:75.535,keys:6,color:"#8f9dff",accent:"#ff7bd5",energy:.3,rotY:-.04,rotZ:.02,tilt:.06,spread:.94,y:.45,camZ:17.6,camY:7.1,bloom:.55,spin:.04,motion:"tiltL",motionAmp:.11,motionSpeed:.5,motionPitch:.04,city:0},{name:"PRESSURE",start:75.535,end:84.535,keys:8,color:"#ffa14a",accent:"#ff4fc8",energy:.86,rotY:-.18,rotZ:.06,tilt:-.03,spread:1.08,y:.22,camZ:14.9,camY:6.1,bloom:.95,spin:.14,motion:"zigzag",motionAmp:.145,motionSpeed:1,motionPitch:.07,city:0},{name:"BREAK",start:84.535,end:87.535,keys:4,color:"#e8f4ff",accent:"#8f7bff",energy:.05,rotY:0,rotZ:0,tilt:.04,spread:.86,y:.3,camZ:19,camY:7.6,bloom:.35,spin:.02,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:0},{name:"CRYOUT",start:87.535,end:125.935,keys:8,color:"#ff4fb8",accent:"#54e8ff",energy:1,rotY:.1,rotZ:-.04,tilt:.02,spread:1.12,y:.12,camZ:14.6,camY:6,bloom:1,spin:.16,motion:"orbit",motionAmp:.175,motionSpeed:1,motionPitch:.085,city:0},{name:"AFTERGLOW",start:125.935,end:131.335,keys:4,color:"#6fa8ff",accent:"#c7a4ff",energy:.22,rotY:.02,rotZ:0,tilt:.01,spread:.92,y:.35,camZ:18.2,camY:7.2,bloom:.45,spin:.02,motion:"fan",motionAmp:.055,motionSpeed:.4,motionPitch:.02,city:0},{name:"OUTRO",start:131.335,end:133.5,keys:4,color:"#6f8fff",accent:"#c7a4ff",energy:.05,rotY:0,rotZ:0,tilt:0,spread:.9,y:.6,camZ:19.5,camY:7.8,bloom:.35,spin:.01,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:0}],notes:[{t:3.535,lane:2},{t:4.735,lane:4},{t:5.935,lane:3},{t:6.535,lane:5},{t:7.135,lane:2},{t:7.735,lane:4},{t:8.335,lane:3},{t:9.235,lane:5},{t:9.535,lane:2},{t:10.135,lane:3},{t:10.735,lane:4},{t:11.335,lane:5},{t:11.935,lane:2},{t:12.235,lane:3},{t:12.535,lane:4},{t:13.135,lane:4},{t:13.735,lane:2},{t:14.335,lane:5},{t:14.935,lane:3},{t:15.535,lane:4},{t:15.835,lane:2},{t:16.135,lane:5},{t:16.735,lane:2},{t:17.335,lane:5},{t:17.935,lane:3},{t:18.535,lane:4},{t:18.835,lane:2},{t:19.135,lane:5},{t:19.435,lane:3},{t:19.735,lane:4},{t:20.035,lane:5},{t:20.335,lane:3},{t:20.935,lane:4},{t:21.235,lane:2},{t:21.535,lane:5},{t:22.135,lane:3},{t:22.735,lane:2},{t:23.335,lane:4},{t:23.935,lane:3},{t:24.535,lane:5},{t:25.135,lane:4},{t:25.735,lane:6},{t:26.335,lane:2},{t:26.935,lane:4},{t:27.535,lane:4},{t:28.135,lane:2},{t:28.735,lane:6},{t:29.335,lane:1},{t:29.635,lane:3},{t:29.935,lane:5},{t:30.235,lane:4},{t:30.535,lane:2},{t:31.135,lane:4},{t:31.735,lane:2},{t:32.035,lane:1},{t:32.335,lane:2},{t:32.335,lane:5},{t:32.935,lane:5},{t:33.535,lane:6},{t:34.135,lane:4},{t:34.735,lane:2},{t:35.335,lane:2},{t:35.635,lane:3},{t:35.935,lane:4},{t:36.535,lane:5},{t:37.135,lane:6},{t:37.735,lane:5},{t:38.335,lane:2},{t:38.635,lane:3},{t:38.935,lane:4},{t:39.235,lane:5},{t:39.535,lane:3},{t:39.835,lane:6},{t:40.135,lane:1},{t:40.735,lane:2},{t:41.335,lane:4},{t:41.335,lane:7},{t:41.635,lane:1},{t:41.935,lane:2},{t:42.535,lane:3},{t:42.835,lane:4},{t:43.135,lane:5},{t:43.735,lane:6},{t:44.335,lane:7},{t:44.635,lane:0},{t:44.935,lane:4},{t:45.235,lane:1},{t:45.535,lane:5},{t:45.835,lane:2},{t:46.135,lane:6},{t:46.435,lane:3},{t:46.735,lane:7},{t:47.035,lane:0},{t:47.335,lane:5},{t:47.635,lane:6},{t:47.935,lane:4},{t:48.535,lane:3},{t:48.835,lane:1},{t:49.135,lane:2},{t:49.435,lane:0},{t:49.735,lane:1},{t:50.035,lane:2},{t:50.335,lane:4},{t:50.485,lane:6},{t:50.635,lane:1},{t:50.635,lane:5},{t:50.785,lane:5},{t:50.935,lane:4},{t:50.935,lane:7},{t:51.235,lane:1},{t:51.535,lane:2},{t:52.135,lane:4},{t:52.435,lane:3},{t:52.735,lane:5},{t:53.335,lane:1},{t:53.935,lane:6},{t:54.235,lane:0},{t:54.535,lane:7},{t:54.835,lane:1},{t:54.985,lane:3},{t:55.135,lane:5},{t:55.435,lane:7},{t:55.585,lane:6},{t:55.735,lane:4},{t:56.035,lane:2},{t:56.335,lane:0},{t:56.635,lane:6},{t:56.935,lane:4},{t:57.235,lane:2},{t:57.535,lane:0},{t:58.135,lane:1},{t:58.435,lane:3},{t:58.735,lane:5},{t:59.035,lane:7},{t:59.335,lane:0},{t:59.635,lane:2},{t:59.935,lane:1},{t:60.085,lane:3},{t:60.235,lane:4},{t:60.235,lane:7},{t:60.385,lane:6},{t:60.535,lane:0,type:"hold",dur:1.2},{t:60.535,lane:5},{t:60.835,lane:7},{t:61.735,lane:1},{t:62.035,lane:2},{t:62.335,lane:3},{t:62.935,lane:4},{t:63.535,lane:5},{t:63.835,lane:6},{t:64.135,lane:1,type:"hold",dur:2.4},{t:65.335,lane:5,type:"hold",dur:2.4},{t:67.735,lane:4},{t:68.335,lane:2},{t:68.935,lane:1,type:"hold",dur:2.4},{t:69.535,lane:5},{t:70.135,lane:6,type:"hold",dur:2.4},{t:71.335,lane:3},{t:72.535,lane:1},{t:73.135,lane:4},{t:73.735,lane:4},{t:74.935,lane:3},{t:75.535,lane:1},{t:75.535,lane:4},{t:76.135,lane:4},{t:76.735,lane:2},{t:77.335,lane:0},{t:77.935,lane:1},{t:78.535,lane:3},{t:79.135,lane:5},{t:79.735,lane:7},{t:80.335,lane:0},{t:80.635,lane:2},{t:80.935,lane:1},{t:81.535,lane:3},{t:81.835,lane:4},{t:82.135,lane:6},{t:82.735,lane:5},{t:83.035,lane:7},{t:83.335,lane:0},{t:83.935,lane:1},{t:84.235,lane:2},{t:87.535,lane:1},{t:87.535,lane:5},{t:87.835,lane:4},{t:88.135,lane:3},{t:88.735,lane:5},{t:89.035,lane:1},{t:89.335,lane:6},{t:89.635,lane:0},{t:89.935,lane:7},{t:90.235,lane:1},{t:90.535,lane:3},{t:90.835,lane:5},{t:91.135,lane:7},{t:91.435,lane:6},{t:91.585,lane:4},{t:91.735,lane:2},{t:92.035,lane:0},{t:92.185,lane:6},{t:92.335,lane:4},{t:92.635,lane:2},{t:92.935,lane:0},{t:93.535,lane:1},{t:93.835,lane:3},{t:94.135,lane:5},{t:94.735,lane:7},{t:95.035,lane:0},{t:95.335,lane:2},{t:95.635,lane:1},{t:95.935,lane:3},{t:96.235,lane:4},{t:96.535,lane:6},{t:96.685,lane:5},{t:96.835,lane:2},{t:96.835,lane:6},{t:96.985,lane:0},{t:97.135,lane:0},{t:97.135,lane:6},{t:97.435,lane:2},{t:97.735,lane:3},{t:98.335,lane:4},{t:98.635,lane:5},{t:98.935,lane:6},{t:99.235,lane:7},{t:99.535,lane:0},{t:99.835,lane:4},{t:100.135,lane:1},{t:100.435,lane:5},{t:100.735,lane:2},{t:101.035,lane:6},{t:101.185,lane:3},{t:101.335,lane:7},{t:101.635,lane:0},{t:101.785,lane:5},{t:101.935,lane:6},{t:102.235,lane:4},{t:102.535,lane:3},{t:103.135,lane:1},{t:103.435,lane:2},{t:103.735,lane:0},{t:104.335,lane:0},{t:104.635,lane:2},{t:104.935,lane:4},{t:105.235,lane:6},{t:105.535,lane:7},{t:105.835,lane:5},{t:106.135,lane:3},{t:106.285,lane:1},{t:106.435,lane:1},{t:106.435,lane:4},{t:106.585,lane:4},{t:106.735,lane:0,type:"hold",dur:1.2},{t:106.735,lane:3},{t:107.035,lane:5},{t:107.335,lane:1},{t:107.935,lane:6},{t:108.235,lane:0},{t:108.535,lane:7},{t:108.835,lane:1},{t:109.135,lane:3},{t:109.435,lane:5},{t:109.735,lane:7},{t:110.035,lane:6},{t:110.335,lane:4},{t:110.635,lane:2},{t:110.785,lane:0},{t:110.935,lane:6},{t:111.235,lane:4},{t:111.385,lane:2},{t:111.535,lane:0},{t:111.835,lane:1},{t:112.135,lane:3},{t:112.735,lane:5},{t:113.035,lane:7},{t:113.335,lane:0},{t:113.935,lane:2},{t:114.235,lane:1},{t:114.535,lane:3},{t:114.835,lane:4},{t:115.135,lane:6},{t:115.435,lane:5},{t:115.735,lane:7},{t:115.885,lane:0},{t:116.035,lane:2},{t:116.035,lane:6},{t:116.185,lane:2},{t:116.335,lane:0},{t:116.335,lane:6},{t:116.635,lane:4},{t:116.935,lane:5},{t:117.535,lane:6},{t:117.835,lane:7},{t:118.135,lane:0},{t:118.435,lane:4},{t:118.735,lane:1},{t:119.035,lane:5},{t:119.335,lane:2},{t:119.635,lane:6},{t:119.935,lane:3},{t:120.235,lane:7},{t:120.385,lane:0},{t:120.535,lane:5},{t:120.835,lane:6},{t:120.985,lane:4},{t:121.135,lane:3},{t:121.435,lane:1},{t:121.735,lane:2},{t:122.335,lane:0},{t:122.635,lane:1},{t:122.935,lane:2},{t:123.535,lane:4},{t:123.835,lane:6},{t:124.135,lane:7},{t:124.435,lane:5},{t:124.735,lane:3},{t:125.035,lane:1},{t:125.335,lane:2},{t:125.485,lane:4},{t:125.635,lane:3},{t:125.935,lane:2},{t:127.135,lane:4},{t:128.335,lane:3},{t:128.935,lane:5},{t:129.535,lane:2},{t:130.135,lane:4},{t:130.735,lane:2},{t:130.735,lane:5}],events:[{t:5.335,type:"pulse",power:.37},{t:5.355,type:"echo",lane:0,dir:-1,power:.58},{t:7.735,type:"pulse",power:.37},{t:10.135,type:"pulse",power:.37},{t:10.155,type:"echo",lane:1,dir:-1,power:.58},{t:12.535,type:"pulse",power:.5},{t:12.555,type:"echo",lane:0,dir:-1,power:.72},{t:14.935,type:"pulse",power:.5},{t:17.335,type:"pulse",power:.5},{t:17.355,type:"echo",lane:1,dir:-1,power:.72},{t:19.735,type:"pulse",power:.5},{t:22.135,type:"pulse",power:.5},{t:22.155,type:"echo",lane:6,dir:1,power:.72},{t:24.535,type:"pulse",power:.65},{t:24.555,type:"echo",lane:0,dir:-1,power:.88},{t:26.935,type:"pulse",power:.65},{t:29.335,type:"pulse",power:.65},{t:29.355,type:"echo",lane:7,dir:1,power:.88},{t:31.735,type:"pulse",power:.65},{t:34.135,type:"pulse",power:.65},{t:34.155,type:"echo",lane:0,dir:-1,power:.88},{t:36.535,type:"pulse",power:.65},{t:38.935,type:"pulse",power:.65},{t:38.955,type:"echo",lane:7,dir:1,power:.88},{t:41.355,type:"vibe",power:.82},{t:43.735,type:"pulse",power:.78},{t:46.135,type:"burst",lane:3,power:1.07},{t:46.135,type:"pulse",power:.78},{t:48.535,type:"pulse",power:.78},{t:50.935,type:"pulse",power:.78},{t:53.335,type:"pulse",power:.78},{t:55.735,type:"burst",lane:7,power:1.07},{t:55.735,type:"pulse",power:.78},{t:58.135,type:"pulse",power:.78},{t:60.535,type:"pulse",power:.78},{t:62.935,type:"pulse",power:.78},{t:65.335,type:"pulse",power:.45},{t:65.355,type:"echo",lane:0,dir:-1,power:.66},{t:67.735,type:"pulse",power:.45},{t:70.135,type:"pulse",power:.45},{t:70.155,type:"echo",lane:7,dir:1,power:.66},{t:72.535,type:"pulse",power:.45},{t:74.935,type:"pulse",power:.45},{t:74.955,type:"echo",lane:0,dir:-1,power:.66},{t:75.555,type:"vibe",power:.86},{t:77.335,type:"pulse",power:.81},{t:79.735,type:"burst",lane:3,power:1.1},{t:79.735,type:"pulse",power:.81},{t:82.135,type:"pulse",power:.81},{t:84.535,type:"pulse",power:.28},{t:84.555,type:"echo",lane:0,dir:-1,power:.48},{t:86.935,type:"pulse",power:.28},{t:87.555,type:"vibe",power:1},{t:89.335,type:"pulse",power:.9},{t:91.735,type:"burst",lane:3,power:1.2},{t:91.735,type:"pulse",power:.9},{t:94.135,type:"pulse",power:.9},{t:96.535,type:"pulse",power:.9},{t:98.935,type:"pulse",power:.9},{t:99.335,type:"motion",style:"wave",amp:.16,speed:1},{t:101.335,type:"burst",lane:7,power:1.2},{t:101.335,type:"pulse",power:.9},{t:103.735,type:"pulse",power:.9},{t:106.135,type:"pulse",power:.9},{t:108.535,type:"pulse",power:.9},{t:110.935,type:"burst",lane:3,power:1.2},{t:110.935,type:"pulse",power:.9},{t:111.335,type:"motion",style:"zigzag",amp:.16,speed:1},{t:113.335,type:"pulse",power:.9},{t:115.735,type:"pulse",power:.9},{t:118.135,type:"pulse",power:.9},{t:120.535,type:"burst",lane:7,power:1.2},{t:120.535,type:"pulse",power:.9},{t:122.935,type:"pulse",power:.9},{t:125.335,type:"pulse",power:.9},{t:127.735,type:"pulse",power:.39},{t:127.755,type:"echo",lane:0,dir:-1,power:.6},{t:130.135,type:"pulse",power:.39},{t:132.535,type:"pulse",power:.28},{t:132.555,type:"echo",lane:0,dir:-1,power:.48}],ghosts:[{t:3.575,lane:0,type:"sweep"},{t:3.63,lane:1,type:"sweep"},{t:3.685,lane:6,type:"sweep"},{t:3.74,lane:7,type:"sweep"},{t:8.335,lane:0,type:"bounce"},{t:8.455,lane:1,type:"bounce"},{t:8.575,lane:6,type:"bounce"},{t:8.695,lane:7,type:"bounce"},{t:12.575,lane:0,type:"sweep"},{t:12.63,lane:1,type:"sweep"},{t:12.685,lane:6,type:"sweep"},{t:12.74,lane:7,type:"sweep"},{t:17.335,lane:0,type:"bounce"},{t:17.455,lane:1,type:"bounce"},{t:17.575,lane:6,type:"bounce"},{t:17.695,lane:7,type:"bounce"},{t:22.775,lane:0,type:"sweep"},{t:22.83,lane:7,type:"sweep"},{t:27.535,lane:0,type:"bounce"},{t:27.655,lane:7,type:"bounce"},{t:64.175,lane:0,type:"sweep"},{t:64.23,lane:7,type:"sweep"},{t:68.935,lane:0,type:"bounce"},{t:69.055,lane:7,type:"bounce"},{t:84.575,lane:0,type:"sweep"},{t:84.63,lane:1,type:"sweep"},{t:84.685,lane:6,type:"sweep"},{t:84.74,lane:7,type:"sweep"},{t:89.335,lane:0,type:"bounce"},{t:89.455,lane:1,type:"bounce"},{t:89.575,lane:6,type:"bounce"},{t:89.695,lane:7,type:"bounce"},{t:125.975,lane:0,type:"sweep"},{t:126.03,lane:1,type:"sweep"},{t:126.085,lane:6,type:"sweep"},{t:126.14,lane:7,type:"sweep"},{t:130.735,lane:0,type:"bounce"},{t:130.855,lane:1,type:"bounce"},{t:130.975,lane:6,type:"bounce"},{t:131.095,lane:7,type:"bounce"},{t:131.375,lane:0,type:"sweep"},{t:131.43,lane:1,type:"sweep"},{t:131.485,lane:6,type:"sweep"},{t:131.54,lane:7,type:"sweep"},{t:136.135,lane:0,type:"bounce"},{t:136.255,lane:1,type:"bounce"},{t:136.375,lane:6,type:"bounce"},{t:136.495,lane:7,type:"bounce"}]},du={song:{title:"WORLD YEARNING FOR AN END",shortTitle:"WORLD YEARNING",artist:"ORIGINAL TRACK",bpm:120,duration:143.47,chartEnd:142.55,beatOffset:.04,difficulty:"HARD",laneLabel:"4 · 6",thumbFriendly:!0,fadeStart:140.8,fadeEnd:142.9},sections:[{name:"INTRO",start:.04,end:10.04,keys:4,color:"#7ec8ff",accent:"#ffb45e",energy:.16,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.6,camY:6.9,bloom:.5,spin:.03,firstNote:2.04,motion:"fan",motionAmp:.05,motionSpeed:.45,motionPitch:.02,city:1},{name:"VERSE",start:10.04,end:22.04,keys:4,color:"#66e0ff",accent:"#ff8ac8",energy:.5,rotY:.03,rotZ:-.015,tilt:.012,spread:1.02,y:.04,camZ:16.9,camY:6.7,bloom:.68,spin:.05,firstNote:10.04,motion:"wave",motionAmp:.075,motionSpeed:.6,motionPitch:.035,city:.16},{name:"BUILD",start:22.04,end:38.04,keys:6,color:"#84a6ff",accent:"#ffc46b",energy:.66,rotY:-.06,rotZ:.025,tilt:-.015,spread:1.05,y:.08,camZ:16.2,camY:6.5,bloom:.8,spin:.07,firstNote:22.04,motion:"fan",motionAmp:.1,motionSpeed:.7,motionPitch:.05,city:.12},{name:"LIFT",start:38.04,end:54.04,keys:6,color:"#b58cff",accent:"#ffa25e",energy:.8,rotY:.1,rotZ:-.04,tilt:.025,spread:1.08,y:.12,camZ:15.5,camY:6.3,bloom:.9,spin:.1,firstNote:38.04,motion:"slope",motionAmp:.13,motionSpeed:.82,motionPitch:.065,city:.2},{name:"CHORUS",start:54.04,end:70.04,keys:6,color:"#ff8f6b",accent:"#ffe27a",energy:.92,rotY:-.13,rotZ:.05,tilt:-.025,spread:1.1,y:.15,camZ:15.1,camY:6.2,bloom:.96,spin:.12,firstNote:54.04,motion:"wave",motionAmp:.15,motionSpeed:.95,motionPitch:.08,city:.16},{name:"DRIVE",start:70.04,end:86.04,keys:6,color:"#ff5f9e",accent:"#7af0ff",energy:1,rotY:.15,rotZ:-.055,tilt:.03,spread:1.12,y:.18,camZ:14.9,camY:6.1,bloom:1,spin:.14,firstNote:70.04,motion:"zigzag",motionAmp:.18,motionSpeed:1.05,motionPitch:.095,city:.24},{name:"BREAK",start:86.04,end:98.04,keys:4,color:"#d9eaff",accent:"#8f9dff",energy:.34,rotY:-.02,rotZ:.01,tilt:.05,spread:.93,y:.4,camZ:18.1,camY:7.3,bloom:.55,spin:.035,firstNote:86.04,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:.62},{name:"RETURN",start:98.04,end:122.04,keys:6,color:"#63e6d8",accent:"#ff8ac8",energy:.82,rotY:.04,rotZ:-.02,tilt:.015,spread:1.06,y:.1,camZ:15.7,camY:6.4,bloom:.88,spin:.09,firstNote:98.04,motion:"orbit",motionAmp:.14,motionSpeed:.9,motionPitch:.07,city:.14},{name:"FINAL",start:122.04,end:138.04,keys:6,color:"#ff6fc4",accent:"#ffd36b",energy:.9,rotY:-.1,rotZ:.04,tilt:-.02,spread:1.09,y:.14,camZ:15,camY:6.2,bloom:.98,spin:.13,firstNote:122.04,motion:"orbit",motionAmp:.17,motionSpeed:1,motionPitch:.085,city:.2},{name:"OUTRO",start:138.04,end:142.55,keys:4,color:"#7fa8ff",accent:"#d7c4ff",energy:.2,rotY:0,rotZ:0,tilt:.03,spread:.9,y:.3,camZ:19.2,camY:7.6,bloom:.42,spin:.02,firstNote:138.04,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:.72}],notes:[{t:2.04,lane:2},{t:3.04,lane:4},{t:4.04,lane:3},{t:5.04,lane:5},{t:6.04,lane:2},{t:6.29,lane:2,type:"hold",dur:1},{t:7.04,lane:4},{t:8.04,lane:3},{t:9.04,lane:5},{t:10.04,lane:4},{t:10.54,lane:2},{t:11.04,lane:5},{t:11.54,lane:3},{t:12.04,lane:4},{t:12.54,lane:2},{t:13.04,lane:5},{t:13.54,lane:3},{t:14.04,lane:3},{t:14.29,lane:2,type:"hold",dur:1},{t:14.54,lane:4},{t:15.54,lane:5},{t:16.04,lane:3},{t:16.54,lane:4},{t:17.04,lane:2},{t:17.54,lane:5},{t:18.04,lane:2},{t:18.29,lane:4,type:"hold",dur:1},{t:18.54,lane:5},{t:19.04,lane:3},{t:19.54,lane:4},{t:20.04,lane:2},{t:20.54,lane:5},{t:21.04,lane:3},{t:21.54,lane:4},{t:22.04,lane:1},{t:22.54,lane:4},{t:23.04,lane:2},{t:23.54,lane:5},{t:24.04,lane:3},{t:24.29,lane:6},{t:24.54,lane:1},{t:25.04,lane:4},{t:25.54,lane:4},{t:26.04,lane:3},{t:26.29,lane:2},{t:26.54,lane:1},{t:26.79,lane:6},{t:27.04,lane:5},{t:27.54,lane:4},{t:28.04,lane:3},{t:28.29,lane:4},{t:28.54,lane:6},{t:28.79,lane:2},{t:29.04,lane:4},{t:29.54,lane:3},{t:30.04,lane:5},{t:30.54,lane:4},{t:30.79,lane:6},{t:31.04,lane:3},{t:31.54,lane:5},{t:32.04,lane:2},{t:32.04,lane:4},{t:32.29,lane:2},{t:32.54,lane:6},{t:32.79,lane:1},{t:33.04,lane:3},{t:33.54,lane:5},{t:34.04,lane:5},{t:34.29,lane:6},{t:34.54,lane:4},{t:34.79,lane:2},{t:35.04,lane:1},{t:35.54,lane:3},{t:36.04,lane:5},{t:36.29,lane:6},{t:36.54,lane:1},{t:37.04,lane:5},{t:37.54,lane:2},{t:38.04,lane:2},{t:38.29,lane:4},{t:38.54,lane:3},{t:38.79,lane:5},{t:39.04,lane:4},{t:39.29,lane:6},{t:39.54,lane:2},{t:39.79,lane:4},{t:40.04,lane:5},{t:40.29,lane:2},{t:40.54,lane:6},{t:41.04,lane:1},{t:41.54,lane:3},{t:42.04,lane:5},{t:42.29,lane:4},{t:42.54,lane:2},{t:42.79,lane:4},{t:43.04,lane:2},{t:43.54,lane:1},{t:43.79,lane:3},{t:44.04,lane:5},{t:44.54,lane:6},{t:45.04,lane:4},{t:45.29,lane:2},{t:45.54,lane:3},{t:45.79,lane:5},{t:46.04,lane:4},{t:46.54,lane:5},{t:46.79,lane:6},{t:47.04,lane:5},{t:47.29,lane:2},{t:47.54,lane:3},{t:48.04,lane:4},{t:48.29,lane:5},{t:48.54,lane:3},{t:48.79,lane:6},{t:49.04,lane:1},{t:49.29,lane:2},{t:49.54,lane:4},{t:49.79,lane:5},{t:50.04,lane:3},{t:50.29,lane:5},{t:50.54,lane:4},{t:50.79,lane:3},{t:51.04,lane:2},{t:51.29,lane:1},{t:51.54,lane:3},{t:51.79,lane:5},{t:52.04,lane:1},{t:52.29,lane:4},{t:52.54,lane:2},{t:52.79,lane:5},{t:53.04,lane:3},{t:53.29,lane:6},{t:53.54,lane:1},{t:53.79,lane:4},{t:54.04,lane:1},{t:54.29,lane:3},{t:54.54,lane:5},{t:54.79,lane:6},{t:55.04,lane:4},{t:55.29,lane:2},{t:55.54,lane:1},{t:55.665,lane:2},{t:55.79,lane:3},{t:56.04,lane:2},{t:56.04,lane:4},{t:56.29,lane:5},{t:56.54,lane:6},{t:56.79,lane:5},{t:57.04,lane:2},{t:57.29,lane:3},{t:57.54,lane:4},{t:57.79,lane:5},{t:58.04,lane:3},{t:58.29,lane:6},{t:58.54,lane:1},{t:58.79,lane:2},{t:59.04,lane:4},{t:59.29,lane:5},{t:59.54,lane:3},{t:59.79,lane:6},{t:60.04,lane:4},{t:60.29,lane:3},{t:60.54,lane:2},{t:60.79,lane:1},{t:61.04,lane:3},{t:61.29,lane:5},{t:61.54,lane:4},{t:61.79,lane:3},{t:62.04,lane:2},{t:62.29,lane:5},{t:62.54,lane:3},{t:62.79,lane:6},{t:63.04,lane:1},{t:63.29,lane:4},{t:63.54,lane:2},{t:63.665,lane:3},{t:63.79,lane:5},{t:64.04,lane:1},{t:64.04,lane:2},{t:64.29,lane:1},{t:64.54,lane:6},{t:64.79,lane:5},{t:65.04,lane:4},{t:65.29,lane:3},{t:65.54,lane:2},{t:65.79,lane:1},{t:66.04,lane:2},{t:66.29,lane:4},{t:66.54,lane:3},{t:66.79,lane:5},{t:67.04,lane:4},{t:67.29,lane:6},{t:67.54,lane:2},{t:67.79,lane:4},{t:68.04,lane:5},{t:68.29,lane:2},{t:68.54,lane:6},{t:68.79,lane:1},{t:69.04,lane:3},{t:69.29,lane:5},{t:69.54,lane:4},{t:69.79,lane:2},{t:70.04,lane:1},{t:70.29,lane:2},{t:70.54,lane:4},{t:70.79,lane:5},{t:71.04,lane:3},{t:71.29,lane:6},{t:71.54,lane:1},{t:71.665,lane:2},{t:71.79,lane:4},{t:72.04,lane:2},{t:72.29,lane:1},{t:72.54,lane:3},{t:72.79,lane:5},{t:73.04,lane:4},{t:73.29,lane:3},{t:73.54,lane:2},{t:73.79,lane:1},{t:74.04,lane:3},{t:74.29,lane:6},{t:74.54,lane:1},{t:74.79,lane:4},{t:75.04,lane:2},{t:75.29,lane:5},{t:75.54,lane:3},{t:75.79,lane:6},{t:76.04,lane:1},{t:76.29,lane:5},{t:76.54,lane:4},{t:76.79,lane:3},{t:77.04,lane:2},{t:77.29,lane:1},{t:77.54,lane:6},{t:77.79,lane:5},{t:78.04,lane:3},{t:78.29,lane:5},{t:78.54,lane:4},{t:78.79,lane:6},{t:79.04,lane:2},{t:79.29,lane:4},{t:79.54,lane:3},{t:79.665,lane:4},{t:79.79,lane:5},{t:80.04,lane:1},{t:80.04,lane:6},{t:80.29,lane:1},{t:80.54,lane:3},{t:80.79,lane:5},{t:81.04,lane:4},{t:81.29,lane:2},{t:81.54,lane:6},{t:81.79,lane:1},{t:82.04,lane:2},{t:82.29,lane:3},{t:82.54,lane:5},{t:82.79,lane:6},{t:83.04,lane:4},{t:83.29,lane:2},{t:83.54,lane:1},{t:83.79,lane:3},{t:84.04,lane:4},{t:84.29,lane:5},{t:84.54,lane:6},{t:84.79,lane:5},{t:85.04,lane:2},{t:85.29,lane:3},{t:85.54,lane:4},{t:85.79,lane:5},{t:86.04,lane:2},{t:86.54,lane:5},{t:87.04,lane:3},{t:87.54,lane:4},{t:88.04,lane:2},{t:88.54,lane:5},{t:89.04,lane:3},{t:89.54,lane:4},{t:90.04,lane:5},{t:90.29,lane:3,type:"hold",dur:1},{t:91.04,lane:4},{t:91.54,lane:2},{t:92.04,lane:5},{t:92.54,lane:3},{t:93.04,lane:4},{t:93.54,lane:2},{t:94.04,lane:2},{t:94.29,lane:2,type:"hold",dur:1},{t:94.54,lane:4},{t:95.04,lane:5},{t:95.54,lane:3},{t:96.04,lane:2},{t:96.54,lane:4},{t:97.04,lane:5},{t:97.54,lane:3},{t:98.04,lane:2},{t:98.29,lane:4},{t:98.54,lane:3},{t:99.04,lane:5},{t:99.29,lane:4},{t:99.54,lane:6},{t:99.79,lane:2},{t:100.04,lane:4},{t:100.29,lane:5},{t:100.54,lane:2},{t:101.04,lane:6},{t:101.29,lane:1},{t:101.54,lane:3},{t:101.79,lane:5},{t:102.04,lane:4},{t:102.54,lane:2},{t:102.79,lane:4},{t:103.04,lane:2},{t:103.29,lane:1},{t:103.54,lane:3},{t:104.04,lane:1},{t:104.04,lane:5},{t:104.54,lane:6},{t:105.04,lane:4},{t:105.54,lane:2},{t:105.79,lane:3},{t:106.04,lane:5},{t:106.54,lane:4},{t:106.79,lane:5},{t:107.04,lane:6},{t:107.29,lane:5},{t:107.54,lane:2},{t:108.04,lane:3},{t:108.29,lane:4},{t:108.54,lane:5},{t:108.79,lane:3},{t:109.04,lane:6},{t:109.29,lane:1},{t:109.54,lane:2},{t:109.79,lane:4},{t:110.04,lane:5},{t:110.29,lane:3},{t:110.54,lane:5},{t:110.79,lane:4},{t:111.04,lane:3},{t:111.29,lane:2},{t:111.54,lane:1},{t:111.79,lane:3},{t:112.04,lane:5},{t:112.29,lane:1},{t:112.54,lane:4},{t:112.79,lane:2},{t:113.04,lane:5},{t:113.29,lane:3},{t:113.54,lane:6},{t:114.04,lane:1},{t:114.29,lane:4},{t:114.54,lane:5},{t:115.04,lane:3},{t:115.29,lane:2},{t:115.54,lane:1},{t:115.79,lane:6},{t:116.04,lane:5},{t:116.29,lane:4},{t:116.54,lane:3},{t:116.79,lane:4},{t:117.04,lane:6},{t:117.29,lane:2},{t:117.54,lane:4},{t:117.79,lane:3},{t:118.04,lane:5},{t:118.29,lane:4},{t:118.54,lane:6},{t:119.04,lane:3},{t:119.29,lane:5},{t:119.54,lane:4},{t:119.79,lane:2},{t:120.04,lane:6},{t:120.54,lane:1},{t:121.04,lane:3},{t:121.29,lane:5},{t:121.54,lane:6},{t:121.79,lane:2},{t:122.04,lane:1},{t:122.29,lane:3},{t:122.54,lane:5},{t:122.79,lane:6},{t:123.04,lane:4},{t:123.29,lane:2},{t:123.54,lane:1},{t:123.79,lane:3},{t:124.04,lane:4},{t:124.29,lane:5},{t:124.54,lane:6},{t:124.79,lane:5},{t:125.04,lane:2},{t:125.29,lane:3},{t:125.54,lane:4},{t:125.79,lane:5},{t:126.04,lane:3},{t:126.29,lane:6},{t:126.54,lane:1},{t:126.79,lane:2},{t:127.04,lane:4},{t:127.29,lane:5},{t:127.54,lane:3},{t:127.665,lane:4},{t:127.79,lane:6},{t:128.04,lane:4},{t:128.29,lane:3},{t:128.54,lane:2},{t:128.79,lane:1},{t:129.04,lane:3},{t:129.29,lane:5},{t:129.54,lane:4},{t:129.79,lane:3},{t:130.04,lane:2},{t:130.29,lane:5},{t:130.54,lane:3},{t:130.79,lane:6},{t:131.04,lane:1},{t:131.29,lane:4},{t:131.54,lane:2},{t:131.79,lane:5},{t:132.04,lane:2},{t:132.29,lane:1},{t:132.54,lane:6},{t:132.79,lane:5},{t:133.04,lane:4},{t:133.29,lane:3},{t:133.54,lane:2},{t:133.79,lane:1},{t:134.04,lane:2},{t:134.29,lane:4},{t:134.54,lane:3},{t:134.79,lane:5},{t:135.04,lane:4},{t:135.29,lane:6},{t:135.54,lane:2},{t:135.665,lane:3},{t:135.79,lane:4},{t:136.04,lane:1},{t:136.04,lane:5},{t:136.29,lane:2},{t:136.54,lane:6},{t:136.79,lane:1},{t:137.04,lane:3},{t:137.29,lane:5},{t:137.54,lane:4},{t:137.79,lane:2},{t:138.04,lane:4},{t:139.04,lane:2},{t:140.04,lane:5},{t:142.04,lane:3}],events:[{t:.04,type:"pulse",power:.33},{t:.07,type:"echo",lane:0,dir:-1,power:.63},{t:2.04,type:"pulse",power:.33},{t:4.04,type:"pulse",power:.33},{t:4.07,type:"echo",lane:1,dir:-1,power:.63},{t:6.04,type:"pulse",power:.33},{t:8.04,type:"pulse",power:.33},{t:8.07,type:"echo",lane:6,dir:1,power:.63},{t:10.04,type:"pulse",power:.57},{t:10.07,type:"echo",lane:0,dir:-1,power:.9},{t:12.04,type:"pulse",power:.57},{t:14.04,type:"pulse",power:.57},{t:14.07,type:"echo",lane:1,dir:-1,power:.9},{t:16.04,type:"pulse",power:.57},{t:18.04,type:"pulse",power:.57},{t:18.07,type:"echo",lane:6,dir:1,power:.9},{t:20.04,type:"pulse",power:.57},{t:22.04,type:"pulse",power:.68},{t:22.07,type:"echo",lane:0,dir:-1,power:1.03},{t:24.04,type:"pulse",power:.68},{t:26.04,type:"burst",lane:4,power:.98},{t:26.04,type:"pulse",power:.68},{t:26.07,type:"echo",lane:7,dir:1,power:1.03},{t:28.04,type:"pulse",power:.68},{t:30.04,type:"pulse",power:.68},{t:30.07,type:"echo",lane:0,dir:-1,power:1.03},{t:32.04,type:"pulse",power:.68},{t:34.04,type:"burst",lane:2,power:.98},{t:34.04,type:"pulse",power:.68},{t:34.07,type:"echo",lane:7,dir:1,power:1.03},{t:36.04,type:"pulse",power:.68},{t:38.04,type:"pulse",power:.78},{t:38.07,type:"echo",lane:0,dir:-1,power:1.14},{t:40.04,type:"pulse",power:.78},{t:42.04,type:"burst",lane:4,power:1.09},{t:42.04,type:"pulse",power:.78},{t:42.07,type:"echo",lane:7,dir:1,power:1.14},{t:44.04,type:"pulse",power:.78},{t:46.04,type:"pulse",power:.78},{t:46.07,type:"echo",lane:0,dir:-1,power:1.14},{t:48.04,type:"pulse",power:.78},{t:50.04,type:"burst",lane:2,power:1.09},{t:50.04,type:"pulse",power:.78},{t:50.07,type:"echo",lane:7,dir:1,power:1.14},{t:52.04,type:"pulse",power:.78},{t:54.04,type:"pulse",power:.86},{t:54.06,type:"vibe",power:.92},{t:54.07,type:"echo",lane:0,dir:-1,power:1.24},{t:56.04,type:"pulse",power:.86},{t:58.04,type:"burst",lane:4,power:1.19},{t:58.04,type:"pulse",power:.86},{t:58.07,type:"echo",lane:7,dir:1,power:1.24},{t:60.04,type:"pulse",power:.86},{t:61.8,type:"vibe",power:.85},{t:61.85,type:"echo",lane:0,dir:-1,power:1.15},{t:61.85,type:"echo",lane:7,dir:1,power:1.15},{t:62.04,type:"pulse",power:.86},{t:62.07,type:"echo",lane:0,dir:-1,power:1.24},{t:64.04,type:"pulse",power:.86},{t:66.04,type:"burst",lane:2,power:1.19},{t:66.04,type:"pulse",power:.86},{t:66.07,type:"echo",lane:7,dir:1,power:1.24},{t:68.04,type:"pulse",power:.86},{t:70.04,type:"pulse",power:.92},{t:70.06,type:"vibe",power:1},{t:70.07,type:"echo",lane:0,dir:-1,power:1.3},{t:72.04,type:"pulse",power:.92},{t:74.04,type:"burst",lane:4,power:1.25},{t:74.04,type:"pulse",power:.92},{t:74.07,type:"echo",lane:7,dir:1,power:1.3},{t:76.04,type:"pulse",power:.92},{t:78.04,type:"pulse",power:.92},{t:78.07,type:"echo",lane:0,dir:-1,power:1.3},{t:80.04,type:"pulse",power:.92},{t:82.04,type:"burst",lane:2,power:1.25},{t:82.04,type:"pulse",power:.92},{t:82.07,type:"echo",lane:7,dir:1,power:1.3},{t:84.04,type:"pulse",power:.92},{t:86.04,type:"pulse",power:.46},{t:86.07,type:"echo",lane:0,dir:-1,power:.77},{t:88.04,type:"pulse",power:.46},{t:90.04,type:"pulse",power:.46},{t:90.07,type:"echo",lane:1,dir:-1,power:.77},{t:92.04,type:"pulse",power:.46},{t:94.04,type:"pulse",power:.46},{t:94.07,type:"echo",lane:6,dir:1,power:.77},{t:96.04,type:"pulse",power:.46},{t:98.04,type:"pulse",power:.79},{t:98.06,type:"vibe",power:.82},{t:98.07,type:"echo",lane:0,dir:-1,power:1.16},{t:100.04,type:"pulse",power:.79},{t:102.04,type:"burst",lane:4,power:1.11},{t:102.04,type:"pulse",power:.79},{t:102.07,type:"echo",lane:7,dir:1,power:1.16},{t:104.04,type:"pulse",power:.79},{t:106.04,type:"pulse",power:.79},{t:106.07,type:"echo",lane:0,dir:-1,power:1.16},{t:108.04,type:"pulse",power:.79},{t:110.04,type:"burst",lane:2,power:1.11},{t:110.04,type:"pulse",power:.79},{t:110.07,type:"echo",lane:7,dir:1,power:1.16},{t:112.04,type:"pulse",power:.79},{t:114.04,type:"pulse",power:.79},{t:114.07,type:"echo",lane:0,dir:-1,power:1.16},{t:116.04,type:"pulse",power:.79},{t:118.04,type:"burst",lane:6,power:1.11},{t:118.04,type:"pulse",power:.79},{t:118.07,type:"echo",lane:7,dir:1,power:1.16},{t:120.04,type:"pulse",power:.79},{t:122.04,type:"pulse",power:.85},{t:122.06,type:"vibe",power:.9},{t:122.07,type:"echo",lane:0,dir:-1,power:1.22},{t:124.04,type:"pulse",power:.85},{t:126.04,type:"burst",lane:4,power:1.17},{t:126.04,type:"pulse",power:.85},{t:126.07,type:"echo",lane:7,dir:1,power:1.22},{t:128.04,type:"pulse",power:.85},{t:130.04,type:"pulse",power:.85},{t:130.07,type:"echo",lane:0,dir:-1,power:1.22},{t:132.04,type:"pulse",power:.85},{t:134.04,type:"burst",lane:2,power:1.17},{t:134.04,type:"pulse",power:.85},{t:134.07,type:"echo",lane:7,dir:1,power:1.22},{t:136.04,type:"pulse",power:.85},{t:138.04,type:"pulse",power:.36},{t:138.07,type:"echo",lane:0,dir:-1,power:.66},{t:140.04,type:"pulse",power:.36},{t:142.04,type:"pulse",power:.36},{t:142.07,type:"echo",lane:1,dir:-1,power:.66}],ghosts:[{t:.08,lane:0,type:"sweep"},{t:.14,lane:1,type:"sweep"},{t:.2,lane:6,type:"sweep"},{t:.26,lane:7,type:"sweep"},{t:4.04,lane:0,type:"bounce"},{t:4.18,lane:1,type:"bounce"},{t:4.32,lane:6,type:"bounce"},{t:4.46,lane:7,type:"bounce"},{t:10.08,lane:0,type:"sweep"},{t:10.14,lane:1,type:"sweep"},{t:10.2,lane:6,type:"sweep"},{t:10.26,lane:7,type:"sweep"},{t:14.04,lane:0,type:"bounce"},{t:14.18,lane:1,type:"bounce"},{t:14.32,lane:6,type:"bounce"},{t:14.46,lane:7,type:"bounce"},{t:22.08,lane:0,type:"sweep"},{t:22.14,lane:7,type:"sweep"},{t:26.04,lane:0,type:"bounce"},{t:26.18,lane:7,type:"bounce"},{t:38.08,lane:0,type:"sweep"},{t:38.14,lane:7,type:"sweep"},{t:42.04,lane:0,type:"bounce"},{t:42.18,lane:7,type:"bounce"},{t:54.08,lane:0,type:"sweep"},{t:54.14,lane:7,type:"sweep"},{t:58.04,lane:0,type:"bounce"},{t:58.18,lane:7,type:"bounce"},{t:70.08,lane:0,type:"sweep"},{t:70.14,lane:7,type:"sweep"},{t:74.04,lane:0,type:"bounce"},{t:74.18,lane:7,type:"bounce"},{t:86.08,lane:0,type:"sweep"},{t:86.14,lane:1,type:"sweep"},{t:86.2,lane:6,type:"sweep"},{t:86.26,lane:7,type:"sweep"},{t:90.04,lane:0,type:"bounce"},{t:90.18,lane:1,type:"bounce"},{t:90.32,lane:6,type:"bounce"},{t:90.46,lane:7,type:"bounce"},{t:98.08,lane:0,type:"sweep"},{t:98.14,lane:7,type:"sweep"},{t:102.04,lane:0,type:"bounce"},{t:102.18,lane:7,type:"bounce"},{t:122.08,lane:0,type:"sweep"},{t:122.14,lane:7,type:"sweep"},{t:126.04,lane:0,type:"bounce"},{t:126.18,lane:7,type:"bounce"},{t:138.08,lane:0,type:"sweep"},{t:138.14,lane:1,type:"sweep"},{t:138.2,lane:6,type:"sweep"},{t:138.26,lane:7,type:"sweep"},{t:142.04,lane:0,type:"bounce"},{t:142.18,lane:1,type:"bounce"},{t:142.32,lane:6,type:"bounce"},{t:142.46,lane:7,type:"bounce"}]},pu={song:{title:"CHRONOSTASIS",shortTitle:"CHRONOSTASIS",artist:"ORIGINAL TRACK",bpm:99.4,duration:142.1,chartEnd:139.85,beatOffset:.323,difficulty:"EXPERT",laneLabel:"4 · 6",thumbFriendly:!0,fadeStart:138.4,fadeEnd:140},sections:[{name:"INTRO",start:0,end:18.431,keys:4,color:"#8ecfff",accent:"#ffd166",energy:.22,rotY:0,rotZ:0,tilt:.02,spread:.94,y:.28,camZ:18.8,camY:7.4,bloom:.48,spin:.02,firstNote:2.4,density:.22,city:.58,clock:"off",motion:"fan",motionAmp:.05,motionSpeed:.45,motionPitch:.02},{name:"GEARS",start:18.431,end:24.483,keys:4,color:"#6fe3ff",accent:"#ffd166",energy:.5,rotY:.02,rotZ:-.012,tilt:.01,spread:1,y:.12,camZ:17.4,camY:7,bloom:.68,spin:.05,firstNote:18.431,density:.5,city:.38,clock:"run",motion:"fan",motionAmp:.06,motionSpeed:.55,motionPitch:.025},{name:"VERSE",start:24.483,end:42.877,keys:6,color:"#78b8ff",accent:"#ffe29a",energy:.64,rotY:.04,rotZ:-.02,tilt:.015,spread:1.04,y:.08,camZ:16.7,camY:6.7,bloom:.78,spin:.07,firstNote:24.483,density:.62,city:.2,clock:"run",motion:"wave",motionAmp:.075,motionSpeed:.6,motionPitch:.035},{name:"PENDULUM",start:42.877,end:66.417,keys:6,color:"#b18cff",accent:"#ffd166",energy:.8,rotY:-.09,rotZ:.035,tilt:-.02,spread:1.08,y:.14,camZ:15.8,camY:6.4,bloom:.9,spin:.1,firstNote:42.877,density:.76,city:.14,clock:"run",motion:"wave",motionAmp:.16,motionSpeed:.95,motionPitch:.08},{name:"STASIS",start:66.417,end:76.075,keys:4,color:"#dfeaff",accent:"#9aa8ff",energy:.26,rotY:-.02,rotZ:.01,tilt:.04,spread:.92,y:.42,camZ:18.4,camY:7.5,bloom:.5,spin:.02,firstNote:66.417,density:0,city:.7,clock:"freeze",swing:!0,motion:"flat",motionAmp:.02,motionSpeed:.2,motionPitch:.01},{name:"RETURN",start:76.075,end:90.561,keys:6,color:"#64e6d8",accent:"#ffe29a",energy:.76,rotY:.05,rotZ:-.02,tilt:.012,spread:1.05,y:.1,camZ:16.2,camY:6.6,bloom:.86,spin:.08,firstNote:76.68,density:.7,city:.16,clock:"run",motion:"orbit",motionAmp:.14,motionSpeed:.9,motionPitch:.07},{name:"TICK",start:90.561,end:110.48,keys:6,color:"#ffd166",accent:"#7af0ff",energy:.84,rotY:-.1,rotZ:.04,tilt:-.02,spread:1.08,y:.15,camZ:15.6,camY:6.3,bloom:.94,spin:.11,firstNote:90.561,density:.8,city:.2,clock:"run",motion:"zigzag",motionAmp:.17,motionSpeed:1.15,motionPitch:.09},{name:"FINAL",start:110.48,end:129.795,keys:6,color:"#ff9f6b",accent:"#ffd166",energy:.94,rotY:.12,rotZ:-.045,tilt:.025,spread:1.1,y:.18,camZ:15,camY:6.1,bloom:1,spin:.14,firstNote:110.48,density:.9,city:.24,clock:"final",motion:"orbit",motionAmp:.17,motionSpeed:1,motionPitch:.085},{name:"OUTRO",start:129.795,end:140,keys:4,color:"#9fb8ff",accent:"#d7c4ff",energy:.3,rotY:0,rotZ:0,tilt:.03,spread:.9,y:.34,camZ:19.2,camY:7.6,bloom:.46,spin:.02,firstNote:129.795,density:.28,city:.72,clock:"off",holds:1,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0}],notes:[{t:3.341,lane:3},{t:4.247,lane:3},{t:5.454,lane:5},{t:5.756,lane:3},{t:7.566,lane:2},{t:8.17,lane:3},{t:9.377,lane:5},{t:9.679,lane:2},{t:10.283,lane:5},{t:10.434,lane:2},{t:10.585,lane:3},{t:11.339,lane:4},{t:12.999,lane:3},{t:18.281,lane:4},{t:18.583,lane:2},{t:19.035,lane:3},{t:19.186,lane:5},{t:19.639,lane:4},{t:20.544,lane:5},{t:20.997,lane:3},{t:21.148,lane:4},{t:21.752,lane:3},{t:22.053,lane:2},{t:22.657,lane:3},{t:22.808,lane:5},{t:24.015,lane:2},{t:24.317,lane:5},{t:24.619,lane:5},{t:25.071,lane:1},{t:25.071,lane:6},{t:25.826,lane:2},{t:26.882,lane:3},{t:26.882,lane:4},{t:27.335,lane:4},{t:27.486,lane:6},{t:28.693,lane:1},{t:28.844,lane:3},{t:28.995,lane:2},{t:29.297,lane:1},{t:29.599,lane:6},{t:29.9,lane:2},{t:30.806,lane:5},{t:30.957,lane:6},{t:31.862,lane:5},{t:32.013,lane:2},{t:32.315,lane:6},{t:32.768,lane:1},{t:32.919,lane:2},{t:33.069,lane:3},{t:33.22,lane:1},{t:33.371,lane:2},{t:33.522,lane:3},{t:33.824,lane:6},{t:34.729,lane:4},{t:35.031,lane:3},{t:35.333,lane:1},{t:35.333,lane:6},{t:35.937,lane:1},{t:36.238,lane:2},{t:36.842,lane:6},{t:37.144,lane:2},{t:37.295,lane:4},{t:38.2,lane:5},{t:38.955,lane:5},{t:39.257,lane:2},{t:39.86,lane:1},{t:40.162,lane:2},{t:40.313,lane:3},{t:40.464,lane:1},{t:40.917,lane:3},{t:41.671,lane:4},{t:41.973,lane:6},{t:42.275,lane:3},{t:42.577,lane:6},{t:42.878,lane:6},{t:43.18,lane:4},{t:43.331,lane:6},{t:43.482,lane:5},{t:43.935,lane:1},{t:44.387,lane:2},{t:44.387,lane:5},{t:44.538,lane:4},{t:44.689,lane:5},{t:44.84,lane:1},{t:44.84,lane:4},{t:44.991,lane:3},{t:44.991,lane:4},{t:45.293,lane:5},{t:45.444,lane:6},{t:46.047,lane:1},{t:46.5,lane:5},{t:46.651,lane:6},{t:46.802,lane:3},{t:46.953,lane:5},{t:47.104,lane:4},{t:47.707,lane:1},{t:47.858,lane:2},{t:48.16,lane:3},{t:48.311,lane:6},{t:48.462,lane:2},{t:48.462,lane:5},{t:48.613,lane:3},{t:49.216,lane:1},{t:49.518,lane:6},{t:49.669,lane:5},{t:49.82,lane:3},{t:50.122,lane:6},{t:50.273,lane:1},{t:50.725,lane:5},{t:50.876,lane:1},{t:50.876,lane:4},{t:51.329,lane:6},{t:51.48,lane:1},{t:51.631,lane:2},{t:51.782,lane:4},{t:52.084,lane:5},{t:52.536,lane:5},{t:52.687,lane:6},{t:52.838,lane:2},{t:53.14,lane:1},{t:53.291,lane:6},{t:53.442,lane:2},{t:53.744,lane:5},{t:53.894,lane:6},{t:54.045,lane:3},{t:54.045,lane:4},{t:54.196,lane:5},{t:54.347,lane:4},{t:54.498,lane:3},{t:54.498,lane:6},{t:54.649,lane:2},{t:54.951,lane:1},{t:55.102,lane:2},{t:55.253,lane:3},{t:55.403,lane:5},{t:55.705,lane:6},{t:56.158,lane:4},{t:56.309,lane:5},{t:56.46,lane:1},{t:56.611,lane:3},{t:56.762,lane:6},{t:57.063,lane:3},{t:57.365,lane:6},{t:57.516,lane:1},{t:57.667,lane:4},{t:58.12,lane:5},{t:58.271,lane:1},{t:58.422,lane:2},{t:58.874,lane:2},{t:59.176,lane:5},{t:59.327,lane:4},{t:59.478,lane:4},{t:60.082,lane:2},{t:60.232,lane:4},{t:60.383,lane:1},{t:60.534,lane:6},{t:61.138,lane:5},{t:61.289,lane:3},{t:61.591,lane:4},{t:61.742,lane:3},{t:61.892,lane:2},{t:62.194,lane:1},{t:62.345,lane:2},{t:62.496,lane:3},{t:62.798,lane:6},{t:63.1,lane:3},{t:63.401,lane:4},{t:63.552,lane:5},{t:64.005,lane:6},{t:64.609,lane:6},{t:64.76,lane:1},{t:64.911,lane:4},{t:65.212,lane:5},{t:65.363,lane:4},{t:65.514,lane:1},{t:66.118,lane:2},{t:76.983,lane:3},{t:76.983,lane:4},{t:77.888,lane:4},{t:78.19,lane:6},{t:78.492,lane:3},{t:78.643,lane:2},{t:78.643,lane:5},{t:78.794,lane:6},{t:79.699,lane:2},{t:79.85,lane:1},{t:79.85,lane:4},{t:80.001,lane:1},{t:80.303,lane:6},{t:80.454,lane:1},{t:80.907,lane:5},{t:81.057,lane:1},{t:81.208,lane:4},{t:81.359,lane:5},{t:81.51,lane:6},{t:81.661,lane:1},{t:82.114,lane:4},{t:82.265,lane:3},{t:82.717,lane:2},{t:82.868,lane:3},{t:83.019,lane:6},{t:83.321,lane:1},{t:83.472,lane:3},{t:83.472,lane:6},{t:83.623,lane:2},{t:83.925,lane:1},{t:84.076,lane:2},{t:84.226,lane:3},{t:84.377,lane:5},{t:84.528,lane:6},{t:84.679,lane:5},{t:85.132,lane:4},{t:86.037,lane:6},{t:86.188,lane:1},{t:86.339,lane:3},{t:86.943,lane:2},{t:87.094,lane:4},{t:87.245,lane:1},{t:87.848,lane:2},{t:87.848,lane:5},{t:88.15,lane:5},{t:88.452,lane:4},{t:88.754,lane:5},{t:89.055,lane:1},{t:89.206,lane:5},{t:89.357,lane:4},{t:89.508,lane:3},{t:89.659,lane:5},{t:89.81,lane:6},{t:89.961,lane:2},{t:90.112,lane:3},{t:90.564,lane:1},{t:90.715,lane:6},{t:90.866,lane:2},{t:90.866,lane:5},{t:91.168,lane:1},{t:91.319,lane:2},{t:91.47,lane:3},{t:91.47,lane:4},{t:91.772,lane:6},{t:91.923,lane:5},{t:92.074,lane:3},{t:92.375,lane:4},{t:92.526,lane:5},{t:92.677,lane:1},{t:92.677,lane:6},{t:92.979,lane:3},{t:93.13,lane:2},{t:93.13,lane:5},{t:93.583,lane:3},{t:93.733,lane:4},{t:94.186,lane:2},{t:94.337,lane:1},{t:94.488,lane:1},{t:94.639,lane:2},{t:94.941,lane:6},{t:95.092,lane:2},{t:95.243,lane:4},{t:95.695,lane:4},{t:95.846,lane:5},{t:95.997,lane:6},{t:96.148,lane:1},{t:96.299,lane:5},{t:96.45,lane:1},{t:96.601,lane:4},{t:96.752,lane:3},{t:97.204,lane:2},{t:97.355,lane:3},{t:97.506,lane:6},{t:97.808,lane:1},{t:97.959,lane:6},{t:98.11,lane:2},{t:98.261,lane:3},{t:98.412,lane:1},{t:98.562,lane:2},{t:98.713,lane:3},{t:98.864,lane:5},{t:99.015,lane:6},{t:99.166,lane:5},{t:99.77,lane:4},{t:100.222,lane:3},{t:100.373,lane:2},{t:100.524,lane:6},{t:101.43,lane:2},{t:101.581,lane:1},{t:101.581,lane:4},{t:101.731,lane:1},{t:101.882,lane:2},{t:102.033,lane:6},{t:102.184,lane:1},{t:102.335,lane:2},{t:102.637,lane:5},{t:102.788,lane:4},{t:102.939,lane:4},{t:103.241,lane:5},{t:103.391,lane:6},{t:103.995,lane:4},{t:104.146,lane:5},{t:104.448,lane:2},{t:104.599,lane:3},{t:104.75,lane:6},{t:105.202,lane:1},{t:105.353,lane:2},{t:105.806,lane:1},{t:105.957,lane:3},{t:106.108,lane:5},{t:106.259,lane:6},{t:106.41,lane:5},{t:106.56,lane:3},{t:106.862,lane:4},{t:107.013,lane:5},{t:107.466,lane:3},{t:107.617,lane:2},{t:107.617,lane:5},{t:107.768,lane:6},{t:108.069,lane:3},{t:108.22,lane:4},{t:108.371,lane:1},{t:108.522,lane:3},{t:108.673,lane:2},{t:108.975,lane:1},{t:109.277,lane:6},{t:109.428,lane:1},{t:109.579,lane:2},{t:109.88,lane:5},{t:110.031,lane:1},{t:110.182,lane:4},{t:110.333,lane:5},{t:110.484,lane:5},{t:110.635,lane:6},{t:110.786,lane:2},{t:110.786,lane:5},{t:111.238,lane:4},{t:111.389,lane:5},{t:111.54,lane:6},{t:111.691,lane:2},{t:111.993,lane:1},{t:111.993,lane:6},{t:112.446,lane:1},{t:112.597,lane:2},{t:112.748,lane:3},{t:112.898,lane:1},{t:113.049,lane:2},{t:113.2,lane:3},{t:113.351,lane:5},{t:113.804,lane:3},{t:114.106,lane:4},{t:114.408,lane:6},{t:114.709,lane:3},{t:115.011,lane:6},{t:115.162,lane:1},{t:115.615,lane:1},{t:115.766,lane:3},{t:116.218,lane:1},{t:116.369,lane:2},{t:116.822,lane:2},{t:117.275,lane:5},{t:117.426,lane:4},{t:117.727,lane:5},{t:117.878,lane:6},{t:118.029,lane:5},{t:118.18,lane:1},{t:118.633,lane:5},{t:118.935,lane:2},{t:119.086,lane:3},{t:119.236,lane:6},{t:119.538,lane:1},{t:119.689,lane:6},{t:119.84,lane:2},{t:119.991,lane:3},{t:120.142,lane:1},{t:120.293,lane:2},{t:120.444,lane:3},{t:120.746,lane:6},{t:120.896,lane:2},{t:121.047,lane:3},{t:121.198,lane:4},{t:121.349,lane:5},{t:121.651,lane:4},{t:121.802,lane:6},{t:122.255,lane:6},{t:122.556,lane:3},{t:122.707,lane:4},{t:122.858,lane:1},{t:123.16,lane:2},{t:123.311,lane:4},{t:123.462,lane:1},{t:124.065,lane:2},{t:124.367,lane:5},{t:124.669,lane:4},{t:124.971,lane:5},{t:125.122,lane:6},{t:125.273,lane:1},{t:125.575,lane:4},{t:125.725,lane:3},{t:126.027,lane:5},{t:126.178,lane:2},{t:126.329,lane:3},{t:126.48,lane:6},{t:126.631,lane:2},{t:126.782,lane:1},{t:126.933,lane:3},{t:126.933,lane:6},{t:127.084,lane:2},{t:127.385,lane:1},{t:127.536,lane:2},{t:127.687,lane:3},{t:127.989,lane:6},{t:128.14,lane:2},{t:128.291,lane:3},{t:128.593,lane:4},{t:128.894,lane:6},{t:129.045,lane:4},{t:129.196,lane:3},{t:129.347,lane:2},{t:129.347,lane:5},{t:129.8,lane:3},{t:130.253,lane:5},{t:130.705,lane:2},{t:131.309,lane:3},{t:131.395,lane:2,type:"hold",dur:1.207},{t:131.913,lane:4},{t:132.214,lane:3},{t:132.818,lane:2},{t:133.12,lane:3},{t:133.723,lane:3},{t:135.836,lane:5},{t:135.987,lane:2},{t:136.138,lane:3},{t:136.289,lane:5},{t:137.043,lane:3},{t:138.251,lane:5}],events:[{t:.001,type:"clock",mode:"off",power:.61},{t:1.509,type:"burst",lane:5,power:1.15},{t:1.529,type:"vibe",power:.91},{t:6.687,type:"burst",lane:2,power:1.15},{t:18.432,type:"clock",mode:"run",power:.75},{t:18.432,type:"clockTick",hand:"fast",power:.78},{t:19.035,type:"clockTick",hand:"slow",power:.86},{t:19.639,type:"clockTick",hand:"fast",power:.8},{t:19.807,type:"burst",lane:5,power:1.15},{t:19.827,type:"vibe",power:.79},{t:19.847,type:"echo",lane:7,dir:1,power:1.1},{t:20.243,type:"clockTick",hand:"slow",power:1.25},{t:20.846,type:"clockTick",hand:"fast",power:1.25},{t:21.45,type:"clockTick",hand:"slow",power:1.25},{t:22.053,type:"clockTick",hand:"fast",power:.85},{t:22.657,type:"clockTick",hand:"slow",power:.84},{t:23.261,type:"clockTick",hand:"fast",power:1.25},{t:23.864,type:"clockTick",hand:"slow",power:.45},{t:24.265,type:"burst",lane:2,power:1.15},{t:24.285,type:"vibe",power:.93},{t:24.305,type:"echo",lane:0,dir:-1,power:1.1},{t:24.484,type:"clock",mode:"run",power:.82},{t:24.513,type:"burst",lane:2,power:.86},{t:24.567,type:"burst",lane:1,power:1.15},{t:24.587,type:"vibe",power:.89},{t:24.607,type:"echo",lane:0,dir:-1,power:1.1},{t:25.071,type:"clockTick",hand:"fast",power:.45},{t:25.675,type:"clockTick",hand:"slow",power:.95},{t:26.279,type:"clockTick",hand:"fast",power:1.14},{t:26.882,type:"clockTick",hand:"slow",power:.76},{t:27.486,type:"clockTick",hand:"fast",power:.96},{t:28.09,type:"clockTick",hand:"slow",power:1.19},{t:28.693,type:"clockTick",hand:"fast",power:.92},{t:29.164,type:"burst",lane:6,power:1.15},{t:29.204,type:"echo",lane:7,dir:1,power:1.1},{t:29.297,type:"clockTick",hand:"slow",power:1.11},{t:29.9,type:"clockTick",hand:"fast",power:1.15},{t:30.504,type:"clockTick",hand:"slow",power:.96},{t:31.108,type:"clockTick",hand:"fast",power:1.12},{t:31.711,type:"clockTick",hand:"slow",power:1.24},{t:32.315,type:"clockTick",hand:"fast",power:1.04},{t:32.919,type:"clockTick",hand:"slow",power:1.25},{t:33.522,type:"clockTick",hand:"fast",power:1.22},{t:34.064,type:"burst",lane:1,power:1.15},{t:34.084,type:"vibe",power:.71},{t:34.104,type:"echo",lane:0,dir:-1,power:1.1},{t:34.126,type:"clockTick",hand:"slow",power:1.25},{t:34.729,type:"clockTick",hand:"fast",power:1.1},{t:35.333,type:"clockTick",hand:"slow",power:1.25},{t:35.937,type:"clockTick",hand:"fast",power:1.25},{t:36.54,type:"clockTick",hand:"slow",power:1.07},{t:37.144,type:"clockTick",hand:"fast",power:.77},{t:37.748,type:"clockTick",hand:"slow",power:1.21},{t:38.351,type:"clockTick",hand:"fast",power:1.25},{t:38.955,type:"clockTick",hand:"slow",power:1.25},{t:38.963,type:"burst",lane:1,power:1.15},{t:38.983,type:"vibe",power:.71},{t:39.003,type:"echo",lane:0,dir:-1,power:1.1},{t:39.558,type:"clockTick",hand:"fast",power:1.12},{t:40.162,type:"clockTick",hand:"slow",power:1.25},{t:40.766,type:"clockTick",hand:"fast",power:1.14},{t:41.369,type:"clockTick",hand:"slow",power:1.25},{t:41.973,type:"clockTick",hand:"fast",power:.92},{t:42.577,type:"clockTick",hand:"slow",power:1.25},{t:42.878,type:"clock",mode:"run",power:.9},{t:42.907,type:"burst",lane:2,power:.92},{t:43.18,type:"clockTick",hand:"fast",power:.92},{t:43.784,type:"clockTick",hand:"slow",power:.88},{t:43.862,type:"burst",lane:6,power:1.15},{t:43.902,type:"echo",lane:7,dir:1,power:1.1},{t:44.387,type:"clockTick",hand:"fast",power:.98},{t:44.991,type:"clockTick",hand:"slow",power:.45},{t:45.595,type:"clockTick",hand:"fast",power:.83},{t:46.198,type:"clockTick",hand:"slow",power:.45},{t:46.802,type:"clockTick",hand:"fast",power:.45},{t:47.405,type:"clockTick",hand:"slow",power:.96},{t:48.009,type:"clockTick",hand:"fast",power:1.18},{t:48.46,type:"burst",lane:1,power:1.15},{t:48.5,type:"echo",lane:0,dir:-1,power:1.1},{t:48.613,type:"clockTick",hand:"slow",power:1.05},{t:49.216,type:"clockTick",hand:"fast",power:1},{t:49.82,type:"clockTick",hand:"slow",power:1.15},{t:50.424,type:"clockTick",hand:"fast",power:1},{t:51.027,type:"clockTick",hand:"slow",power:1.05},{t:51.631,type:"clockTick",hand:"fast",power:1.04},{t:52.234,type:"clockTick",hand:"slow",power:.92},{t:52.535,type:"motion",style:"wave",amp:.18,speed:1.05,pitch:.09},{t:52.838,type:"clockTick",hand:"fast",power:1.16},{t:53.034,type:"burst",lane:6,power:1.15},{t:53.074,type:"echo",lane:7,dir:1,power:1.1},{t:53.442,type:"clockTick",hand:"slow",power:1.12},{t:54.045,type:"clockTick",hand:"fast",power:.93},{t:54.649,type:"clockTick",hand:"slow",power:1.11},{t:55.253,type:"clockTick",hand:"fast",power:1.21},{t:55.856,type:"clockTick",hand:"slow",power:1.25},{t:56.46,type:"clockTick",hand:"fast",power:.77},{t:57.063,type:"clockTick",hand:"slow",power:.72},{t:57.667,type:"clockTick",hand:"fast",power:.45},{t:57.934,type:"burst",lane:6,power:1.15},{t:57.954,type:"vibe",power:.73},{t:57.974,type:"echo",lane:7,dir:1,power:1.1},{t:58.271,type:"clockTick",hand:"slow",power:.73},{t:58.874,type:"clockTick",hand:"fast",power:.84},{t:59.478,type:"clockTick",hand:"slow",power:.45},{t:60.082,type:"clockTick",hand:"fast",power:.45},{t:60.685,type:"clockTick",hand:"slow",power:.45},{t:61.289,type:"clockTick",hand:"fast",power:.75},{t:61.892,type:"clockTick",hand:"slow",power:.88},{t:62.496,type:"clockTick",hand:"fast",power:.78},{t:63.1,type:"clockTick",hand:"slow",power:.81},{t:63.703,type:"clockTick",hand:"fast",power:.81},{t:64.307,type:"clockTick",hand:"slow",power:.92},{t:64.911,type:"clockTick",hand:"fast",power:.98},{t:65.514,type:"clockTick",hand:"slow",power:.88},{t:66.118,type:"clockTick",hand:"fast",power:.95},{t:66.418,type:"clock",mode:"freeze",power:.75},{t:66.419,type:"pendulum",mode:"start",period:2.4145,amplitude:.42},{t:76.073,type:"pendulum",mode:"stop"},{t:76.076,type:"clock",mode:"run",power:.88},{t:76.105,type:"burst",lane:2,power:.9},{t:76.379,type:"clockTick",hand:"fast",power:.45},{t:76.983,type:"clockTick",hand:"slow",power:.77},{t:77.587,type:"clockTick",hand:"fast",power:.78},{t:78.19,type:"clockTick",hand:"slow",power:.77},{t:78.794,type:"clockTick",hand:"fast",power:.75},{t:79.064,type:"burst",lane:6,power:1.15},{t:79.084,type:"vibe",power:.72},{t:79.104,type:"echo",lane:7,dir:1,power:1.1},{t:79.397,type:"clockTick",hand:"slow",power:1.25},{t:80.001,type:"clockTick",hand:"fast",power:.78},{t:80.605,type:"clockTick",hand:"slow",power:.45},{t:81.208,type:"clockTick",hand:"fast",power:.82},{t:81.812,type:"clockTick",hand:"slow",power:.91},{t:82.416,type:"clockTick",hand:"fast",power:.98},{t:83.019,type:"clockTick",hand:"slow",power:1.02},{t:83.623,type:"clockTick",hand:"fast",power:1.01},{t:84.226,type:"clockTick",hand:"slow",power:1.01},{t:84.83,type:"clockTick",hand:"fast",power:.87},{t:85.434,type:"clockTick",hand:"slow",power:.79},{t:86.037,type:"clockTick",hand:"fast",power:.75},{t:86.641,type:"clockTick",hand:"slow",power:.79},{t:87.245,type:"clockTick",hand:"fast",power:.76},{t:87.848,type:"clockTick",hand:"slow",power:.45},{t:88.452,type:"clockTick",hand:"fast",power:1.05},{t:89.055,type:"clockTick",hand:"slow",power:.91},{t:89.659,type:"clockTick",hand:"fast",power:.94},{t:90.263,type:"clockTick",hand:"slow",power:.45},{t:90.395,type:"burst",lane:1,power:1.15},{t:90.415,type:"vibe",power:.77},{t:90.435,type:"echo",lane:0,dir:-1,power:1.1},{t:90.562,type:"clock",mode:"run",power:.92},{t:90.591,type:"burst",lane:2,power:.94},{t:90.621,type:"vibe",power:.84},{t:90.866,type:"clockTick",hand:"fast",power:.88},{t:91.47,type:"clockTick",hand:"slow",power:.45},{t:92.074,type:"clockTick",hand:"fast",power:.77},{t:92.677,type:"clockTick",hand:"slow",power:.45},{t:92.833,type:"burst",lane:1,power:1.15},{t:92.873,type:"echo",lane:0,dir:-1,power:1.1},{t:93.281,type:"clockTick",hand:"fast",power:.88},{t:93.884,type:"clockTick",hand:"slow",power:.45},{t:94.488,type:"clockTick",hand:"fast",power:.85},{t:95.092,type:"clockTick",hand:"slow",power:.45},{t:95.695,type:"clockTick",hand:"fast",power:.77},{t:96.299,type:"clockTick",hand:"slow",power:.8},{t:96.902,type:"clockTick",hand:"fast",power:.77},{t:97.506,type:"clockTick",hand:"slow",power:.83},{t:98.11,type:"clockTick",hand:"fast",power:.82},{t:98.713,type:"clockTick",hand:"slow",power:.85},{t:98.963,type:"burst",lane:1,power:1.15},{t:99.003,type:"echo",lane:0,dir:-1,power:1.1},{t:99.317,type:"clockTick",hand:"fast",power:.85},{t:99.921,type:"clockTick",hand:"slow",power:.88},{t:100.524,type:"clockTick",hand:"fast",power:1.25},{t:101.128,type:"clockTick",hand:"slow",power:.79},{t:101.731,type:"clockTick",hand:"fast",power:.82},{t:102.335,type:"clockTick",hand:"slow",power:.81},{t:102.939,type:"clockTick",hand:"fast",power:.8},{t:103.542,type:"clockTick",hand:"slow",power:.81},{t:103.863,type:"burst",lane:6,power:1.15},{t:103.903,type:"echo",lane:7,dir:1,power:1.1},{t:104.146,type:"clockTick",hand:"fast",power:.82},{t:104.75,type:"clockTick",hand:"slow",power:.82},{t:105.353,type:"clockTick",hand:"fast",power:.89},{t:105.957,type:"clockTick",hand:"slow",power:.76},{t:106.56,type:"clockTick",hand:"fast",power:.81},{t:107.164,type:"clockTick",hand:"slow",power:.79},{t:107.768,type:"clockTick",hand:"fast",power:.79},{t:108.371,type:"clockTick",hand:"slow",power:.8},{t:108.975,type:"clockTick",hand:"fast",power:.82},{t:109.579,type:"clockTick",hand:"slow",power:.93},{t:110.182,type:"clockTick",hand:"fast",power:.82},{t:110.481,type:"clock",mode:"final",power:.97},{t:110.51,type:"burst",lane:2,power:.98},{t:110.54,type:"vibe",power:.94},{t:110.786,type:"clockTick",hand:"fast",power:.45},{t:111.389,type:"clockTick",hand:"slow",power:.45},{t:111.993,type:"clockTick",hand:"fast",power:.45},{t:112.129,type:"burst",lane:1,power:1.15},{t:112.149,type:"vibe",power:.74},{t:112.169,type:"echo",lane:0,dir:-1,power:1.1},{t:112.597,type:"clockTick",hand:"slow",power:.45},{t:113.2,type:"clockTick",hand:"fast",power:.8},{t:113.804,type:"clockTick",hand:"slow",power:.45},{t:114.408,type:"clockTick",hand:"fast",power:.78},{t:115.011,type:"clockTick",hand:"slow",power:.45},{t:115.309,type:"motion",style:"orbit",amp:.19,speed:1.2,pitch:.1},{t:115.615,type:"clockTick",hand:"fast",power:.45},{t:116.218,type:"clockTick",hand:"slow",power:.45},{t:116.727,type:"burst",lane:1,power:1.14},{t:116.767,type:"echo",lane:0,dir:-1,power:1.1},{t:116.822,type:"clockTick",hand:"fast",power:.45},{t:117.426,type:"clockTick",hand:"slow",power:.45},{t:118.029,type:"clockTick",hand:"fast",power:.76},{t:118.633,type:"clockTick",hand:"slow",power:1.12},{t:119.236,type:"clockTick",hand:"fast",power:1.08},{t:119.84,type:"clockTick",hand:"slow",power:1.05},{t:120.444,type:"clockTick",hand:"fast",power:.45},{t:121.047,type:"clockTick",hand:"slow",power:.86},{t:121.651,type:"clockTick",hand:"fast",power:1.12},{t:122.23,type:"burst",lane:1,power:1.15},{t:122.255,type:"clockTick",hand:"slow",power:1.25},{t:122.27,type:"echo",lane:0,dir:-1,power:1.1},{t:122.858,type:"clockTick",hand:"fast",power:1.01},{t:123.462,type:"clockTick",hand:"slow",power:1.19},{t:124.065,type:"clockTick",hand:"fast",power:1.14},{t:124.669,type:"clockTick",hand:"slow",power:1.08},{t:125.273,type:"clockTick",hand:"fast",power:.83},{t:125.876,type:"clockTick",hand:"slow",power:1.18},{t:126.48,type:"clockTick",hand:"fast",power:.88},{t:127.084,type:"clockTick",hand:"slow",power:1.25},{t:127.129,type:"burst",lane:6,power:1.15},{t:127.169,type:"echo",lane:7,dir:1,power:1.1},{t:127.687,type:"clockTick",hand:"fast",power:.79},{t:128.291,type:"clockTick",hand:"slow",power:.86},{t:128.894,type:"clockTick",hand:"fast",power:.83},{t:129.498,type:"clockTick",hand:"slow",power:.76},{t:129.796,type:"clock",mode:"off",power:.65},{t:133.12,type:"burst",lane:5,power:1.15},{t:137.718,type:"burst",lane:5,power:1.15}],ghosts:[{t:18.471,lane:0,type:"sweep"},{t:18.541,lane:7,type:"sweep"},{t:19.867,lane:7,type:"bounce"},{t:24.325,lane:0,type:"bounce"},{t:24.523,lane:0,type:"sweep"},{t:24.593,lane:7,type:"sweep"},{t:24.627,lane:0,type:"bounce"},{t:29.224,lane:7,type:"sweep"},{t:34.124,lane:0,type:"sweep"},{t:39.023,lane:0,type:"sweep"},{t:42.917,lane:0,type:"sweep"},{t:42.987,lane:7,type:"sweep"},{t:43.922,lane:7,type:"sweep"},{t:48.52,lane:0,type:"sweep"},{t:53.094,lane:7,type:"sweep"},{t:57.994,lane:7,type:"sweep"},{t:66.457,lane:0,type:"sweep"},{t:66.527,lane:7,type:"sweep"},{t:76.115,lane:0,type:"sweep"},{t:76.185,lane:7,type:"sweep"},{t:79.124,lane:7,type:"sweep"},{t:90.455,lane:0,type:"bounce"},{t:90.601,lane:0,type:"sweep"},{t:90.671,lane:7,type:"sweep"},{t:92.893,lane:0,type:"sweep"},{t:99.023,lane:0,type:"sweep"},{t:103.923,lane:7,type:"sweep"},{t:110.52,lane:0,type:"sweep"},{t:110.59,lane:7,type:"sweep"},{t:112.189,lane:0,type:"bounce"},{t:116.787,lane:0,type:"sweep"},{t:122.29,lane:0,type:"sweep"},{t:127.189,lane:7,type:"sweep"}],swings:[{t:67.021},{t:68.228},{t:69.435},{t:70.642},{t:71.85},{t:73.057},{t:74.264},{t:75.471}]},rc=[{id:"cryout",title:"CRYOUT",shortTitle:"CRYOUT",artist:"ORIGINAL TRACK",bpm:100,duration:138.1,audio:"./audio/cryout.mp3",difficulty:"ADVANCED",laneLabel:"4 · 6 · 8",blurb:"Neon field • 360° camera • 8-lane climax",accent:"#5ee7ff",chart:fu,fadeStart:131.4,fadeEnd:133.4},{id:"world",title:"WORLD YEARNING FOR AN END",shortTitle:"WORLD YEARNING",artist:"ORIGINAL TRACK",bpm:120,duration:143.47,audio:"./audio/world-yearning.mp3",difficulty:"HARD",laneLabel:"4 · 6",blurb:"City intro • diagonal lanes • thumb-hard patterns",accent:"#ffb45e",chart:du,fadeStart:140.8,fadeEnd:142.9},{id:"chronostasis",title:"CHRONOSTASIS",shortTitle:"CHRONOSTASIS",artist:"ORIGINAL TRACK",bpm:99.4,duration:142.1,audio:"./audio/chronostasis.mp3",difficulty:"EXPERT",laneLabel:"4 · 6",blurb:"Clockwork skyline • frozen time • swinging pendulum",accent:"#ffd166",chart:pu,fadeStart:138.4,fadeEnd:140}],mu="cryout",bo=Object.fromEntries(rc.map(i=>[i.id,i]));const wo="180",gu=0,$o=1,_u=2,ac=1,vu=2,Nn=3,si=0,en=1,Fn=2,kn=0,Bn=1,Rt=2,jo=3,Jo=4,xu=5,vi=100,yu=101,Mu=102,Su=103,Tu=104,bu=200,wu=201,Eu=202,Au=203,As=204,Cs=205,Cu=206,Ru=207,Pu=208,Lu=209,Du=210,Iu=211,Uu=212,Nu=213,Fu=214,Rs=0,Ps=1,Ls=2,ji=3,Ds=4,Is=5,Us=6,Ns=7,sc=0,Ou=1,ku=2,ii=0,oc=1,lc=2,cc=3,Eo=4,uc=5,hc=6,fc=7,dc=300,Ji=301,Qi=302,Fs=303,Os=304,Na=306,Aa=1e3,ni=1001,ks=1002,Mn=1003,Bu=1004,Vr=1005,En=1006,Ya=1007,yi=1008,Hn=1009,pc=1010,mc=1011,Sr=1012,Ao=1013,Si=1014,On=1015,zn=1016,Co=1017,Ro=1018,Tr=1020,gc=35902,_c=35899,vc=1021,xc=1022,xn=1023,br=1026,wr=1027,yc=1028,Po=1029,Mc=1030,Lo=1031,Do=1033,Ma=33776,Sa=33777,Ta=33778,ba=33779,Bs=35840,zs=35841,Gs=35842,Hs=35843,Vs=36196,Ws=37492,Xs=37496,Ys=37808,qs=37809,Zs=37810,Ks=37811,$s=37812,js=37813,Js=37814,Qs=37815,eo=37816,to=37817,no=37818,io=37819,ro=37820,ao=37821,so=36492,oo=36494,lo=36495,co=36283,uo=36284,ho=36285,fo=36286,zu=3200,Gu=3201,Hu=0,Vu=1,ti="",Qt="srgb",er="srgb-linear",Ca="linear",xt="srgb",Ci=7680,Qo=519,Wu=512,Xu=513,Yu=514,Sc=515,qu=516,Zu=517,Ku=518,$u=519,po=35044,el="300 es",An=2e3,Ra=2001;class rr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const a=r.indexOf(t);a!==-1&&r.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let a=0,s=r.length;a<s;a++)r[a].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qa=Math.PI/180,mo=180/Math.PI;function ri(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function ju(i,e){return(i%e+e)%e}function Za(i,e,t){return(1-t)*i+t*e}function wn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Mt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ze{constructor(e=0,t=0){Ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*r+e.x,this.y=a*r+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Rr{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,a,s,o){let c=n[r+0],l=n[r+1],f=n[r+2],h=n[r+3];const d=a[s+0],p=a[s+1],_=a[s+2],x=a[s+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=f,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=x;return}if(h!==x||c!==d||l!==p||f!==_){let m=1-o;const u=c*d+l*p+f*_+h*x,b=u>=0?1:-1,w=1-u*u;if(w>Number.EPSILON){const P=Math.sqrt(w),R=Math.atan2(P,u*b);m=Math.sin(m*R)/P,o=Math.sin(o*R)/P}const S=o*b;if(c=c*m+d*S,l=l*m+p*S,f=f*m+_*S,h=h*m+x*S,m===1-o){const P=1/Math.sqrt(c*c+l*l+f*f+h*h);c*=P,l*=P,f*=P,h*=P}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,a,s){const o=n[r],c=n[r+1],l=n[r+2],f=n[r+3],h=a[s],d=a[s+1],p=a[s+2],_=a[s+3];return e[t]=o*_+f*h+c*p-l*d,e[t+1]=c*_+f*d+l*h-o*p,e[t+2]=l*_+f*p+o*d-c*h,e[t+3]=f*_-o*h-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(r/2),h=o(a/2),d=c(n/2),p=c(r/2),_=c(a/2);switch(s){case"XYZ":this._x=d*f*h+l*p*_,this._y=l*p*h-d*f*_,this._z=l*f*_+d*p*h,this._w=l*f*h-d*p*_;break;case"YXZ":this._x=d*f*h+l*p*_,this._y=l*p*h-d*f*_,this._z=l*f*_-d*p*h,this._w=l*f*h+d*p*_;break;case"ZXY":this._x=d*f*h-l*p*_,this._y=l*p*h+d*f*_,this._z=l*f*_+d*p*h,this._w=l*f*h-d*p*_;break;case"ZYX":this._x=d*f*h-l*p*_,this._y=l*p*h+d*f*_,this._z=l*f*_-d*p*h,this._w=l*f*h+d*p*_;break;case"YZX":this._x=d*f*h+l*p*_,this._y=l*p*h+d*f*_,this._z=l*f*_-d*p*h,this._w=l*f*h-d*p*_;break;case"XZY":this._x=d*f*h-l*p*_,this._y=l*p*h-d*f*_,this._z=l*f*_+d*p*h,this._w=l*f*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],f=t[6],h=t[10],d=n+o+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(f-c)*p,this._y=(a-l)*p,this._z=(s-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(f-c)/p,this._x=.25*p,this._y=(r+s)/p,this._z=(a+l)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(a-l)/p,this._x=(r+s)/p,this._y=.25*p,this._z=(c+f)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(s-r)/p,this._x=(a+l)/p,this._y=(c+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+s*o+r*l-a*c,this._y=r*f+s*c+a*o-n*l,this._z=a*f+s*l+n*c-r*o,this._w=s*f-n*o-r*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+r*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=r,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),f=Math.atan2(l,o),h=Math.sin((1-t)*f)/l,d=Math.sin(t*f)/l;return this._w=s*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=a*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*r,this.y=a[1]*t+a[4]*n+a[7]*r,this.z=a[2]*t+a[5]*n+a[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*r+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*r+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*r+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*r+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*r-o*n),f=2*(o*t-a*r),h=2*(a*n-s*t);return this.x=t+c*l+s*h-o*f,this.y=n+c*f+o*l-a*h,this.z=r+c*h+a*f-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r,this.y=a[1]*t+a[5]*n+a[9]*r,this.z=a[2]*t+a[6]*n+a[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=r*c-a*o,this.y=a*s-n*c,this.z=n*o-r*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ka.copy(this).projectOnVector(e),this.sub(Ka)}reflect(e){return this.sub(Ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ka=new I,tl=new Rr;class et{constructor(e,t,n,r,a,s,o,c,l){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l)}set(e,t,n,r,a,s,o,c,l){const f=this.elements;return f[0]=e,f[1]=r,f[2]=o,f[3]=t,f[4]=a,f[5]=c,f[6]=n,f[7]=s,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],f=n[4],h=n[7],d=n[2],p=n[5],_=n[8],x=r[0],m=r[3],u=r[6],b=r[1],w=r[4],S=r[7],P=r[2],R=r[5],C=r[8];return a[0]=s*x+o*b+c*P,a[3]=s*m+o*w+c*R,a[6]=s*u+o*S+c*C,a[1]=l*x+f*b+h*P,a[4]=l*m+f*w+h*R,a[7]=l*u+f*S+h*C,a[2]=d*x+p*b+_*P,a[5]=d*m+p*w+_*R,a[8]=d*u+p*S+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*s*f-t*o*l-n*a*f+n*o*c+r*a*l-r*s*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],f=e[8],h=f*s-o*l,d=o*c-f*a,p=l*a-s*c,_=t*h+n*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=h*x,e[1]=(r*l-f*n)*x,e[2]=(o*n-r*s)*x,e[3]=d*x,e[4]=(f*t-r*c)*x,e[5]=(r*a-o*t)*x,e[6]=p*x,e[7]=(n*c-l*t)*x,e[8]=(s*t-n*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-r*l,r*c,-r*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($a.makeScale(e,t)),this}rotate(e){return this.premultiply($a.makeRotation(-e)),this}translate(e,t){return this.premultiply($a.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $a=new et;function Tc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Pa(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ju(){const i=Pa("canvas");return i.style.display="block",i}const nl={};function Er(i){i in nl||(nl[i]=!0,console.warn(i))}function Qu(i,e,t){return new Promise(function(n,r){function a(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:n()}}setTimeout(a,t)})}const il=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rl=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eh(){const i={enabled:!0,workingColorSpace:er,spaces:{},convert:function(r,a,s){return this.enabled===!1||a===s||!a||!s||(this.spaces[a].transfer===xt&&(r.r=Gn(r.r),r.g=Gn(r.g),r.b=Gn(r.b)),this.spaces[a].primaries!==this.spaces[s].primaries&&(r.applyMatrix3(this.spaces[a].toXYZ),r.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===xt&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b))),r},workingToColorSpace:function(r,a){return this.convert(r,this.workingColorSpace,a)},colorSpaceToWorking:function(r,a){return this.convert(r,a,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ti?Ca:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,a=this.workingColorSpace){return r.fromArray(this.spaces[a].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,a,s){return r.copy(this.spaces[a].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,a){return Er("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,a)},toWorkingColorSpace:function(r,a){return Er("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[er]:{primaries:e,whitePoint:n,transfer:Ca,toXYZ:il,fromXYZ:rl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Qt},outputColorSpaceConfig:{drawingBufferColorSpace:Qt}},[Qt]:{primaries:e,whitePoint:n,transfer:xt,toXYZ:il,fromXYZ:rl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Qt}}}),i}const ht=eh();function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ri;class th{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ri===void 0&&(Ri=Pa("canvas")),Ri.width=e.width,Ri.height=e.height;const r=Ri.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Ri}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pa("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),a=r.data;for(let s=0;s<a.length;s++)a[s]=Gn(a[s]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nh=0;class Io{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nh++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let a;if(Array.isArray(r)){a=[];for(let s=0,o=r.length;s<o;s++)r[s].isDataTexture?a.push(ja(r[s].image)):a.push(ja(r[s]))}else a=ja(r);n.url=a}return t||(e.images[this.uuid]=n),n}}function ja(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?th.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ih=0;const Ja=new I;class Jt extends rr{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,n=ni,r=ni,a=En,s=yi,o=xn,c=Hn,l=Jt.DEFAULT_ANISOTROPY,f=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ih++}),this.uuid=ri(),this.name="",this.source=new Io(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ja).x}get height(){return this.source.getSize(Ja).y}get depth(){return this.source.getSize(Ja).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Aa:e.x=e.x-Math.floor(e.x);break;case ni:e.x=e.x<0?0:1;break;case ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Aa:e.y=e.y-Math.floor(e.y);break;case ni:e.y=e.y<0?0:1;break;case ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=dc;Jt.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,t=0,n=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*r+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*r+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*r+s[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,a;const c=e.elements,l=c[0],f=c[4],h=c[8],d=c[1],p=c[5],_=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(f-d)<.01&&Math.abs(h-x)<.01&&Math.abs(_-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+x)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(l+1)/2,S=(p+1)/2,P=(u+1)/2,R=(f+d)/4,C=(h+x)/4,F=(_+m)/4;return w>S&&w>P?w<.01?(n=0,r=.707106781,a=.707106781):(n=Math.sqrt(w),r=R/n,a=C/n):S>P?S<.01?(n=.707106781,r=0,a=.707106781):(r=Math.sqrt(S),n=R/r,a=F/r):P<.01?(n=.707106781,r=.707106781,a=0):(a=Math.sqrt(P),n=C/a,r=F/a),this.set(n,r,a,t),this}let b=Math.sqrt((m-_)*(m-_)+(h-x)*(h-x)+(d-f)*(d-f));return Math.abs(b)<.001&&(b=1),this.x=(m-_)/b,this.y=(h-x)/b,this.z=(d-f)/b,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rh extends rr{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);const r={width:e,height:t,depth:n.depth},a=new Jt(r);this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,a=this.textures.length;r<a;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Io(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sn extends rh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class bc extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ah extends Jt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Mn,this.minFilter=Mn,this.wrapR=ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pr{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,gn):gn.fromBufferAttribute(a,s),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(e.matrixWorld),this.union(Wr)}const r=e.children;for(let a=0,s=r.length;a<s;a++)this.expandByObject(r[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(cr),Xr.subVectors(this.max,cr),Pi.subVectors(e.a,cr),Li.subVectors(e.b,cr),Di.subVectors(e.c,cr),Kn.subVectors(Li,Pi),$n.subVectors(Di,Li),ui.subVectors(Pi,Di);let t=[0,-Kn.z,Kn.y,0,-$n.z,$n.y,0,-ui.z,ui.y,Kn.z,0,-Kn.x,$n.z,0,-$n.x,ui.z,0,-ui.x,-Kn.y,Kn.x,0,-$n.y,$n.x,0,-ui.y,ui.x,0];return!Qa(t,Pi,Li,Di,Xr)||(t=[1,0,0,0,1,0,0,0,1],!Qa(t,Pi,Li,Di,Xr))?!1:(Yr.crossVectors(Kn,$n),t=[Yr.x,Yr.y,Yr.z],Qa(t,Pi,Li,Di,Xr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Pn=[new I,new I,new I,new I,new I,new I,new I,new I],gn=new I,Wr=new Pr,Pi=new I,Li=new I,Di=new I,Kn=new I,$n=new I,ui=new I,cr=new I,Xr=new I,Yr=new I,hi=new I;function Qa(i,e,t,n,r){for(let a=0,s=i.length-3;a<=s;a+=3){hi.fromArray(i,a);const o=r.x*Math.abs(hi.x)+r.y*Math.abs(hi.y)+r.z*Math.abs(hi.z),c=e.dot(hi),l=t.dot(hi),f=n.dot(hi);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const sh=new Pr,ur=new I,es=new I;class Lr{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sh.setFromPoints(e).getCenter(n);let r=0;for(let a=0,s=e.length;a<s;a++)r=Math.max(r,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ur.subVectors(e,this.center);const t=ur.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(ur,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(es.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ur.copy(e.center).add(es)),this.expandByPoint(ur.copy(e.center).sub(es))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ln=new I,ts=new I,qr=new I,jn=new I,ns=new I,Zr=new I,is=new I;class Uo{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.origin).addScaledVector(this.direction,t),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ts.copy(e).add(t).multiplyScalar(.5),qr.copy(t).sub(e).normalize(),jn.copy(this.origin).sub(ts);const a=e.distanceTo(t)*.5,s=-this.direction.dot(qr),o=jn.dot(this.direction),c=-jn.dot(qr),l=jn.lengthSq(),f=Math.abs(1-s*s);let h,d,p,_;if(f>0)if(h=s*c-o,d=s*o-c,_=a*f,h>=0)if(d>=-_)if(d<=_){const x=1/f;h*=x,d*=x,p=h*(h+s*d+2*o)+d*(s*h+d+2*c)+l}else d=a,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*c)+l;else d=-a,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*c)+l;else d<=-_?(h=Math.max(0,-(-s*a+o)),d=h>0?-a:Math.min(Math.max(-a,-c),a),p=-h*h+d*(d+2*c)+l):d<=_?(h=0,d=Math.min(Math.max(-a,-c),a),p=d*(d+2*c)+l):(h=Math.max(0,-(s*a+o)),d=h>0?a:Math.min(Math.max(-a,-c),a),p=-h*h+d*(d+2*c)+l);else d=s>0?-a:a,h=Math.max(0,-(s*d+o)),p=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ts).addScaledVector(qr,d),p}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const n=Ln.dot(this.direction),r=Ln.dot(Ln)-n*n,a=e.radius*e.radius;if(r>a)return null;const s=Math.sqrt(a-r),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,a,s,o,c;const l=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),f>=0?(a=(e.min.y-d.y)*f,s=(e.max.y-d.y)*f):(a=(e.max.y-d.y)*f,s=(e.min.y-d.y)*f),n>s||a>r||((a>n||isNaN(n))&&(n=a),(s<r||isNaN(r))&&(r=s),h>=0?(o=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,r,a){ns.subVectors(t,e),Zr.subVectors(n,e),is.crossVectors(ns,Zr);let s=this.direction.dot(is),o;if(s>0){if(r)return null;o=1}else if(s<0)o=-1,s=-s;else return null;jn.subVectors(this.origin,e);const c=o*this.direction.dot(Zr.crossVectors(jn,Zr));if(c<0)return null;const l=o*this.direction.dot(ns.cross(jn));if(l<0||c+l>s)return null;const f=-o*jn.dot(is);return f<0?null:this.at(f/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pt{constructor(e,t,n,r,a,s,o,c,l,f,h,d,p,_,x,m){Pt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,a,s,o,c,l,f,h,d,p,_,x,m)}set(e,t,n,r,a,s,o,c,l,f,h,d,p,_,x,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=a,u[5]=s,u[9]=o,u[13]=c,u[2]=l,u[6]=f,u[10]=h,u[14]=d,u[3]=p,u[7]=_,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/Ii.setFromMatrixColumn(e,0).length(),a=1/Ii.setFromMatrixColumn(e,1).length(),s=1/Ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),f=Math.cos(a),h=Math.sin(a);if(e.order==="XYZ"){const d=s*f,p=s*h,_=o*f,x=o*h;t[0]=c*f,t[4]=-c*h,t[8]=l,t[1]=p+_*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=_+p*l,t[10]=s*c}else if(e.order==="YXZ"){const d=c*f,p=c*h,_=l*f,x=l*h;t[0]=d+x*o,t[4]=_*o-p,t[8]=s*l,t[1]=s*h,t[5]=s*f,t[9]=-o,t[2]=p*o-_,t[6]=x+d*o,t[10]=s*c}else if(e.order==="ZXY"){const d=c*f,p=c*h,_=l*f,x=l*h;t[0]=d-x*o,t[4]=-s*h,t[8]=_+p*o,t[1]=p+_*o,t[5]=s*f,t[9]=x-d*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const d=s*f,p=s*h,_=o*f,x=o*h;t[0]=c*f,t[4]=_*l-p,t[8]=d*l+x,t[1]=c*h,t[5]=x*l+d,t[9]=p*l-_,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const d=s*c,p=s*l,_=o*c,x=o*l;t[0]=c*f,t[4]=x-d*h,t[8]=_*h+p,t[1]=h,t[5]=s*f,t[9]=-o*f,t[2]=-l*f,t[6]=p*h+_,t[10]=d-x*h}else if(e.order==="XZY"){const d=s*c,p=s*l,_=o*c,x=o*l;t[0]=c*f,t[4]=-h,t[8]=l*f,t[1]=d*h+x,t[5]=s*f,t[9]=p*h-_,t[2]=_*h-p,t[6]=o*f,t[10]=x*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oh,e,lh)}lookAt(e,t,n){const r=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Jn.crossVectors(n,an),Jn.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Jn.crossVectors(n,an)),Jn.normalize(),Kr.crossVectors(an,Jn),r[0]=Jn.x,r[4]=Kr.x,r[8]=an.x,r[1]=Jn.y,r[5]=Kr.y,r[9]=an.y,r[2]=Jn.z,r[6]=Kr.z,r[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,a=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],f=n[1],h=n[5],d=n[9],p=n[13],_=n[2],x=n[6],m=n[10],u=n[14],b=n[3],w=n[7],S=n[11],P=n[15],R=r[0],C=r[4],F=r[8],M=r[12],y=r[1],D=r[5],U=r[9],Z=r[13],ee=r[2],J=r[6],Q=r[10],oe=r[14],V=r[3],ge=r[7],Se=r[11],ke=r[15];return a[0]=s*R+o*y+c*ee+l*V,a[4]=s*C+o*D+c*J+l*ge,a[8]=s*F+o*U+c*Q+l*Se,a[12]=s*M+o*Z+c*oe+l*ke,a[1]=f*R+h*y+d*ee+p*V,a[5]=f*C+h*D+d*J+p*ge,a[9]=f*F+h*U+d*Q+p*Se,a[13]=f*M+h*Z+d*oe+p*ke,a[2]=_*R+x*y+m*ee+u*V,a[6]=_*C+x*D+m*J+u*ge,a[10]=_*F+x*U+m*Q+u*Se,a[14]=_*M+x*Z+m*oe+u*ke,a[3]=b*R+w*y+S*ee+P*V,a[7]=b*C+w*D+S*J+P*ge,a[11]=b*F+w*U+S*Q+P*Se,a[15]=b*M+w*Z+S*oe+P*ke,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],f=e[2],h=e[6],d=e[10],p=e[14],_=e[3],x=e[7],m=e[11],u=e[15];return _*(+a*c*h-r*l*h-a*o*d+n*l*d+r*o*p-n*c*p)+x*(+t*c*p-t*l*d+a*s*d-r*s*p+r*l*f-a*c*f)+m*(+t*l*h-t*o*p-a*s*h+n*s*p+a*o*f-n*l*f)+u*(-r*o*f-t*c*h+t*o*d+r*s*h-n*s*d+n*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],f=e[8],h=e[9],d=e[10],p=e[11],_=e[12],x=e[13],m=e[14],u=e[15],b=h*m*l-x*d*l+x*c*p-o*m*p-h*c*u+o*d*u,w=_*d*l-f*m*l-_*c*p+s*m*p+f*c*u-s*d*u,S=f*x*l-_*h*l+_*o*p-s*x*p-f*o*u+s*h*u,P=_*h*c-f*x*c-_*o*d+s*x*d+f*o*m-s*h*m,R=t*b+n*w+r*S+a*P;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=b*C,e[1]=(x*d*a-h*m*a-x*r*p+n*m*p+h*r*u-n*d*u)*C,e[2]=(o*m*a-x*c*a+x*r*l-n*m*l-o*r*u+n*c*u)*C,e[3]=(h*c*a-o*d*a-h*r*l+n*d*l+o*r*p-n*c*p)*C,e[4]=w*C,e[5]=(f*m*a-_*d*a+_*r*p-t*m*p-f*r*u+t*d*u)*C,e[6]=(_*c*a-s*m*a-_*r*l+t*m*l+s*r*u-t*c*u)*C,e[7]=(s*d*a-f*c*a+f*r*l-t*d*l-s*r*p+t*c*p)*C,e[8]=S*C,e[9]=(_*h*a-f*x*a-_*n*p+t*x*p+f*n*u-t*h*u)*C,e[10]=(s*x*a-_*o*a+_*n*l-t*x*l-s*n*u+t*o*u)*C,e[11]=(f*o*a-s*h*a-f*n*l+t*h*l+s*n*p-t*o*p)*C,e[12]=P*C,e[13]=(f*x*r-_*h*r+_*n*d-t*x*d-f*n*m+t*h*m)*C,e[14]=(_*o*r-s*x*r-_*n*c+t*x*c+s*n*m-t*o*m)*C,e[15]=(s*h*r-f*o*r+f*n*c-t*h*c-s*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,a=e.z;return t[0]*=n,t[4]*=r,t[8]*=a,t[1]*=n,t[5]*=r,t[9]*=a,t[2]*=n,t[6]*=r,t[10]*=a,t[3]*=n,t[7]*=r,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),a=1-n,s=e.x,o=e.y,c=e.z,l=a*s,f=a*o;return this.set(l*s+n,l*o-r*c,l*c+r*o,0,l*o+r*c,f*o+n,f*c-r*s,0,l*c-r*o,f*c+r*s,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,a,s){return this.set(1,n,a,0,e,1,s,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,f=s+s,h=o+o,d=a*l,p=a*f,_=a*h,x=s*f,m=s*h,u=o*h,b=c*l,w=c*f,S=c*h,P=n.x,R=n.y,C=n.z;return r[0]=(1-(x+u))*P,r[1]=(p+S)*P,r[2]=(_-w)*P,r[3]=0,r[4]=(p-S)*R,r[5]=(1-(d+u))*R,r[6]=(m+b)*R,r[7]=0,r[8]=(_+w)*C,r[9]=(m-b)*C,r[10]=(1-(d+x))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let a=Ii.set(r[0],r[1],r[2]).length();const s=Ii.set(r[4],r[5],r[6]).length(),o=Ii.set(r[8],r[9],r[10]).length();this.determinant()<0&&(a=-a),e.x=r[12],e.y=r[13],e.z=r[14],_n.copy(this);const l=1/a,f=1/s,h=1/o;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=f,_n.elements[5]*=f,_n.elements[6]*=f,_n.elements[8]*=h,_n.elements[9]*=h,_n.elements[10]*=h,t.setFromRotationMatrix(_n),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,r,a,s,o=An,c=!1){const l=this.elements,f=2*a/(t-e),h=2*a/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r);let _,x;if(c)_=a/(s-a),x=s*a/(s-a);else if(o===An)_=-(s+a)/(s-a),x=-2*s*a/(s-a);else if(o===Ra)_=-s/(s-a),x=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,a,s,o=An,c=!1){const l=this.elements,f=2/(t-e),h=2/(n-r),d=-(t+e)/(t-e),p=-(n+r)/(n-r);let _,x;if(c)_=1/(s-a),x=s/(s-a);else if(o===An)_=-2/(s-a),x=-(s+a)/(s-a);else if(o===Ra)_=-1/(s-a),x=-a/(s-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Ii=new I,_n=new Pt,oh=new I(0,0,0),lh=new I(1,1,1),Jn=new I,Kr=new I,an=new I,al=new Pt,sl=new Rr;class Vn{constructor(e=0,t=0,n=0,r=Vn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,a=r[0],s=r[4],o=r[8],c=r[1],l=r[5],f=r[9],h=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,a),this._z=0);break;case"ZXY":this._x=Math.asin(ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-ot(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ot(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return al.makeRotationFromQuaternion(e),this.setFromRotationMatrix(al,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sl.setFromEuler(this),this.setFromQuaternion(sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vn.DEFAULT_ORDER="XYZ";class wc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ch=0;const ol=new I,Ui=new Rr,Dn=new Pt,$r=new I,hr=new I,uh=new I,hh=new Rr,ll=new I(1,0,0),cl=new I(0,1,0),ul=new I(0,0,1),hl={type:"added"},fh={type:"removed"},Ni={type:"childadded",child:null},rs={type:"childremoved",child:null};class Yt extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ch++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yt.DEFAULT_UP.clone();const e=new I,t=new Vn,n=new Rr,r=new I(1,1,1);function a(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(a),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Pt},normalMatrix:{value:new et}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=Yt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(e,t){return Ui.setFromAxisAngle(e,t),this.quaternion.premultiply(Ui),this}rotateX(e){return this.rotateOnAxis(ll,e)}rotateY(e){return this.rotateOnAxis(cl,e)}rotateZ(e){return this.rotateOnAxis(ul,e)}translateOnAxis(e,t){return ol.copy(e).applyQuaternion(this.quaternion),this.position.add(ol.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ll,e)}translateY(e){return this.translateOnAxis(cl,e)}translateZ(e){return this.translateOnAxis(ul,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$r.copy(e):$r.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(hr,$r,this.up):Dn.lookAt($r,hr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Ui.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ui.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hl),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(fh),rs.child=e,this.dispatchEvent(rs),rs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hl),Ni.child=e,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,e,uh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,hh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let a=0,s=r.length;a<s;a++)r[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const h=c[l];a(e.shapes,h)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));r.material=o}else r.material=a(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),f=s(e.images),h=s(e.shapes),d=s(e.skeletons),p=s(e.animations),_=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=r,n;function s(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}Yt.DEFAULT_UP=new I(0,1,0);Yt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new I,In=new I,as=new I,Un=new I,Fi=new I,Oi=new I,fl=new I,ss=new I,os=new I,ls=new I,cs=new It,us=new It,hs=new It;class pn{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),vn.subVectors(e,t),r.cross(vn);const a=r.lengthSq();return a>0?r.multiplyScalar(1/Math.sqrt(a)):r.set(0,0,0)}static getBarycoord(e,t,n,r,a){vn.subVectors(r,t),In.subVectors(n,t),as.subVectors(e,t);const s=vn.dot(vn),o=vn.dot(In),c=vn.dot(as),l=In.dot(In),f=In.dot(as),h=s*l-o*o;if(h===0)return a.set(0,0,0),null;const d=1/h,p=(l*c-o*f)*d,_=(s*f-o*c)*d;return a.set(1-p-_,_,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Un)===null?!1:Un.x>=0&&Un.y>=0&&Un.x+Un.y<=1}static getInterpolation(e,t,n,r,a,s,o,c){return this.getBarycoord(e,t,n,r,Un)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,Un.x),c.addScaledVector(s,Un.y),c.addScaledVector(o,Un.z),c)}static getInterpolatedAttribute(e,t,n,r,a,s){return cs.setScalar(0),us.setScalar(0),hs.setScalar(0),cs.fromBufferAttribute(e,t),us.fromBufferAttribute(e,n),hs.fromBufferAttribute(e,r),s.setScalar(0),s.addScaledVector(cs,a.x),s.addScaledVector(us,a.y),s.addScaledVector(hs,a.z),s}static isFrontFacing(e,t,n,r){return vn.subVectors(n,t),In.subVectors(e,t),vn.cross(In).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),vn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,a){return pn.getInterpolation(e,this.a,this.b,this.c,t,n,r,a)}containsPoint(e){return pn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,a=this.c;let s,o;Fi.subVectors(r,n),Oi.subVectors(a,n),ss.subVectors(e,n);const c=Fi.dot(ss),l=Oi.dot(ss);if(c<=0&&l<=0)return t.copy(n);os.subVectors(e,r);const f=Fi.dot(os),h=Oi.dot(os);if(f>=0&&h<=f)return t.copy(r);const d=c*h-f*l;if(d<=0&&c>=0&&f<=0)return s=c/(c-f),t.copy(n).addScaledVector(Fi,s);ls.subVectors(e,a);const p=Fi.dot(ls),_=Oi.dot(ls);if(_>=0&&p<=_)return t.copy(a);const x=p*l-c*_;if(x<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Oi,o);const m=f*_-p*h;if(m<=0&&h-f>=0&&p-_>=0)return fl.subVectors(a,r),o=(h-f)/(h-f+(p-_)),t.copy(r).addScaledVector(fl,o);const u=1/(m+x+d);return s=x*u,o=d*u,t.copy(n).addScaledVector(Fi,s).addScaledVector(Oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ec={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},jr={h:0,s:0,l:0};function fs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ge{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Qt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ht.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=ht.workingColorSpace){return this.r=e,this.g=t,this.b=n,ht.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=ht.workingColorSpace){if(e=ju(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=fs(s,a,e+1/3),this.g=fs(s,a,e),this.b=fs(s,a,e-1/3)}return ht.colorSpaceToWorking(this,r),this}setStyle(e,t=Qt){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=r[1],o=r[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=r[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Qt){const n=Ec[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qt){return ht.workingToColorSpace(Xt.copy(this),e),Math.round(ot(Xt.r*255,0,255))*65536+Math.round(ot(Xt.g*255,0,255))*256+Math.round(ot(Xt.b*255,0,255))}getHexString(e=Qt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ht.workingColorSpace){ht.workingToColorSpace(Xt.copy(this),t);const n=Xt.r,r=Xt.g,a=Xt.b,s=Math.max(n,r,a),o=Math.min(n,r,a);let c,l;const f=(o+s)/2;if(o===s)c=0,l=0;else{const h=s-o;switch(l=f<=.5?h/(s+o):h/(2-s-o),s){case n:c=(r-a)/h+(r<a?6:0);break;case r:c=(a-n)/h+2;break;case a:c=(n-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=ht.workingColorSpace){return ht.workingToColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Qt){ht.workingToColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,r=Xt.b;return e!==Qt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(jr);const n=Za(Qn.h,jr.h,t),r=Za(Qn.s,jr.s,t),a=Za(Qn.l,jr.l,t);return this.setHSL(n,r,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*r,this.g=a[1]*t+a[4]*n+a[7]*r,this.b=a[2]*t+a[5]*n+a[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new Ge;Ge.NAMES=Ec;let dh=0;class wi extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=Bn,this.side=si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=As,this.blendDst=Cs,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ge(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bn&&(n.blending=this.blending),this.side!==si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==As&&(n.blendSrc=this.blendSrc),this.blendDst!==Cs&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(t){const a=r(e.textures),s=r(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let a=0;a!==r;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zi extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vn,this.combine=sc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new I,Jr=new Ze;let ph=0;class tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ph++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=po,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,a=this.itemSize;r<a;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jr.fromBufferAttribute(this,t),Jr.applyMatrix3(e),this.setXY(t,Jr.x,Jr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix3(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyMatrix4(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.applyNormalMatrix(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ut.fromBufferAttribute(this,t),Ut.transformDirection(e),this.setXYZ(t,Ut.x,Ut.y,Ut.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e*=this.itemSize,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),a=Mt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==po&&(e.usage=this.usage),e}}class Ac extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cc extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kt extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let mh=0;const fn=new Pt,ds=new Yt,ki=new I,sn=new Pr,fr=new Pr,Gt=new I;class qt extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tc(e)?Cc:Ac)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new et().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fn.makeRotationFromQuaternion(e),this.applyMatrix4(fn),this}rotateX(e){return fn.makeRotationX(e),this.applyMatrix4(fn),this}rotateY(e){return fn.makeRotationY(e),this.applyMatrix4(fn),this}rotateZ(e){return fn.makeRotationZ(e),this.applyMatrix4(fn),this}translate(e,t,n){return fn.makeTranslation(e,t,n),this.applyMatrix4(fn),this}scale(e,t,n){return fn.makeScale(e,t,n),this.applyMatrix4(fn),this}lookAt(e){return ds.lookAt(e),ds.updateMatrix(),this.applyMatrix4(ds.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,a=e.length;r<a;r++){const s=e[r];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new kt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const a=e[r];t.setXYZ(r,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const a=t[n];sn.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(sn.min,fr.min),sn.expandByPoint(Gt),Gt.addVectors(sn.max,fr.max),sn.expandByPoint(Gt)):(sn.expandByPoint(fr.min),sn.expandByPoint(fr.max))}sn.getCenter(n);let r=0;for(let a=0,s=e.count;a<s;a++)Gt.fromBufferAttribute(e,a),r=Math.max(r,n.distanceToSquared(Gt));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)Gt.fromBufferAttribute(o,l),c&&(ki.fromBufferAttribute(e,l),Gt.add(ki)),r=Math.max(r,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let F=0;F<n.count;F++)o[F]=new I,c[F]=new I;const l=new I,f=new I,h=new I,d=new Ze,p=new Ze,_=new Ze,x=new I,m=new I;function u(F,M,y){l.fromBufferAttribute(n,F),f.fromBufferAttribute(n,M),h.fromBufferAttribute(n,y),d.fromBufferAttribute(a,F),p.fromBufferAttribute(a,M),_.fromBufferAttribute(a,y),f.sub(l),h.sub(l),p.sub(d),_.sub(d);const D=1/(p.x*_.y-_.x*p.y);isFinite(D)&&(x.copy(f).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(D),m.copy(h).multiplyScalar(p.x).addScaledVector(f,-_.x).multiplyScalar(D),o[F].add(x),o[M].add(x),o[y].add(x),c[F].add(m),c[M].add(m),c[y].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let F=0,M=b.length;F<M;++F){const y=b[F],D=y.start,U=y.count;for(let Z=D,ee=D+U;Z<ee;Z+=3)u(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const w=new I,S=new I,P=new I,R=new I;function C(F){P.fromBufferAttribute(r,F),R.copy(P);const M=o[F];w.copy(M),w.sub(P.multiplyScalar(P.dot(M))).normalize(),S.crossVectors(R,M);const D=S.dot(c[F])<0?-1:1;s.setXYZW(F,w.x,w.y,w.z,D)}for(let F=0,M=b.length;F<M;++F){const y=b[F],D=y.start,U=y.count;for(let Z=D,ee=D+U;Z<ee;Z+=3)C(e.getX(Z+0)),C(e.getX(Z+1)),C(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const r=new I,a=new I,s=new I,o=new I,c=new I,l=new I,f=new I,h=new I;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,x),s.fromBufferAttribute(t,m),f.subVectors(s,a),h.subVectors(r,a),f.cross(h),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),o.add(f),c.add(f),l.add(f),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),f.subVectors(s,a),h.subVectors(r,a),f.cross(h),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,h=o.normalized,d=new l.constructor(c.length*f);let p=0,_=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?p=c[x]*o.data.stride+o.offset:p=c[x]*f;for(let u=0;u<f;u++)d[_++]=l[p++]}return new tn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new qt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let f=0,h=l.length;f<h;f++){const d=l[f],p=e(d,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let h=0,d=l.length;h<d;h++){const p=l[h];f.push(p.toJSON(e.data))}f.length>0&&(r[c]=f,a=!0)}a&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const f=r[l];this.setAttribute(l,f.clone(t))}const a=e.morphAttributes;for(const l in a){const f=[],h=a[l];for(let d=0,p=h.length;d<p;d++)f.push(h[d].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,f=s.length;l<f;l++){const h=s[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dl=new Pt,fi=new Uo,Qr=new Lr,pl=new I,ea=new I,ta=new I,na=new I,ps=new I,ia=new I,ml=new I,ra=new I;class ln extends Yt{constructor(e=new qt,t=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(a&&o){ia.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const f=o[c],h=a[c];f!==0&&(ps.fromBufferAttribute(h,e),s?ia.addScaledVector(ps,f):ia.addScaledVector(ps.sub(t),f))}t.add(ia)}return t}raycast(e,t){const n=this.geometry,r=this.material,a=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(a),fi.copy(e.ray).recast(e.near),!(Qr.containsPoint(fi.origin)===!1&&(fi.intersectSphere(Qr,pl)===null||fi.origin.distanceToSquared(pl)>(e.far-e.near)**2))&&(dl.copy(a).invert(),fi.copy(e.ray).applyMatrix4(dl),!(n.boundingBox!==null&&fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fi)))}_computeIntersections(e,t,n){let r;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,f=a.attributes.uv1,h=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let _=0,x=d.length;_<x;_++){const m=d[_],u=s[m.materialIndex],b=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,P=w;S<P;S+=3){const R=o.getX(S),C=o.getX(S+1),F=o.getX(S+2);r=aa(this,u,e,n,l,f,h,R,C,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=_,u=x;m<u;m+=3){const b=o.getX(m),w=o.getX(m+1),S=o.getX(m+2);r=aa(this,s,e,n,l,f,h,b,w,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(s))for(let _=0,x=d.length;_<x;_++){const m=d[_],u=s[m.materialIndex],b=Math.max(m.start,p.start),w=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=b,P=w;S<P;S+=3){const R=S,C=S+1,F=S+2;r=aa(this,u,e,n,l,f,h,R,C,F),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),x=Math.min(c.count,p.start+p.count);for(let m=_,u=x;m<u;m+=3){const b=m,w=m+1,S=m+2;r=aa(this,s,e,n,l,f,h,b,w,S),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function gh(i,e,t,n,r,a,s,o){let c;if(e.side===en?c=n.intersectTriangle(s,a,r,!0,o):c=n.intersectTriangle(r,a,s,e.side===si,o),c===null)return null;ra.copy(o),ra.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ra);return l<t.near||l>t.far?null:{distance:l,point:ra.clone(),object:i}}function aa(i,e,t,n,r,a,s,o,c,l){i.getVertexPosition(o,ea),i.getVertexPosition(c,ta),i.getVertexPosition(l,na);const f=gh(i,e,t,n,ea,ta,na,ml);if(f){const h=new I;pn.getBarycoord(ml,ea,ta,na,h),r&&(f.uv=pn.getInterpolatedAttribute(r,o,c,l,h,new Ze)),a&&(f.uv1=pn.getInterpolatedAttribute(a,o,c,l,h,new Ze)),s&&(f.normal=pn.getInterpolatedAttribute(s,o,c,l,h,new I),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new I,materialIndex:0};pn.getNormal(ea,ta,na,d.normal),f.face=d,f.barycoord=h}return f}class Dr extends qt{constructor(e=1,t=1,n=1,r=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:a,depthSegments:s};const o=this;r=Math.floor(r),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],f=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,n,t,e,s,a,0),_("z","y","x",1,-1,n,t,-e,s,a,1),_("x","z","y",1,1,e,n,t,r,s,2),_("x","z","y",1,-1,e,n,-t,r,s,3),_("x","y","z",1,-1,e,t,n,r,a,4),_("x","y","z",-1,-1,e,t,-n,r,a,5),this.setIndex(c),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(f,3)),this.setAttribute("uv",new kt(h,2));function _(x,m,u,b,w,S,P,R,C,F,M){const y=S/C,D=P/F,U=S/2,Z=P/2,ee=R/2,J=C+1,Q=F+1;let oe=0,V=0;const ge=new I;for(let Se=0;Se<Q;Se++){const ke=Se*D-Z;for(let Je=0;Je<J;Je++){const yt=Je*y-U;ge[x]=yt*b,ge[m]=ke*w,ge[u]=ee,l.push(ge.x,ge.y,ge.z),ge[x]=0,ge[m]=0,ge[u]=R>0?1:-1,f.push(ge.x,ge.y,ge.z),h.push(Je/C),h.push(1-Se/F),oe+=1}}for(let Se=0;Se<F;Se++)for(let ke=0;ke<C;ke++){const Je=d+ke+J*Se,yt=d+ke+J*(Se+1),dt=d+(ke+1)+J*(Se+1),ft=d+(ke+1)+J*Se;c.push(Je,yt,ft),c.push(yt,dt,ft),V+=6}o.addGroup(p,V,M),p+=V,d+=oe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function $t(i){const e={};for(let t=0;t<i.length;t++){const n=tr(i[t]);for(const r in n)e[r]=n[r]}return e}function _h(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Rc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ht.workingColorSpace}const Ar={clone:tr,merge:$t};var vh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,xh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jt extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vh,this.fragmentShader=xh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=_h(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const s=this.uniforms[r].value;s&&s.isTexture?t.uniforms[r]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[r]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[r]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[r]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[r]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[r]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[r]={type:"m4",value:s.toArray()}:t.uniforms[r]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Pc extends Yt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=An,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ei=new I,gl=new Ze,_l=new Ze;class dn extends Pc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=mo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return mo*2*Math.atan(Math.tan(qa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ei.x,ei.y).multiplyScalar(-e/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-e/ei.z)}getViewSize(e,t){return this.getViewBounds(e,gl,_l),t.subVectors(_l,gl)}setViewOffset(e,t,n,r,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(qa*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,a=-.5*r;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*r/c,t-=s.offsetY*n/l,r*=s.width/c,n*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bi=-90,zi=1;class yh extends Yt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new dn(Bi,zi,e,t);r.layers=this.layers,this.add(r);const a=new dn(Bi,zi,e,t);a.layers=this.layers,this.add(a);const s=new dn(Bi,zi,e,t);s.layers=this.layers,this.add(s);const o=new dn(Bi,zi,e,t);o.layers=this.layers,this.add(o);const c=new dn(Bi,zi,e,t);c.layers=this.layers,this.add(c);const l=new dn(Bi,zi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,a,s,o,c]=t;for(const l of t)this.remove(l);if(e===An)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,l,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,a),e.setRenderTarget(n,1,r),e.render(t,s),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,f),e.setRenderTarget(h,d,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Lc extends Jt{constructor(e=[],t=Ji,n,r,a,s,o,c,l,f){super(e,t,n,r,a,s,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Mh extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Lc(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Dr(5,5,5),a=new jt({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:kn});a.uniforms.tEquirect.value=t;const s=new ln(r,a),o=t.minFilter;return t.minFilter===yi&&(t.minFilter=En),new yh(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,r);e.setRenderTarget(a)}}class on extends Yt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sh={type:"move"};class ms{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new on,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new on,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new on,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const f=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=f.position.distanceTo(h.position),p=.02,_=.005;l.inputState.pinching&&d>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&a!==null&&(r=a),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Sh)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new on;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class No{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ge(e),this.density=t}clone(){return new No(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Th extends Yt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vn,this.environmentIntensity=1,this.environmentRotation=new Vn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class bh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=po,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,a=this.stride;r<a;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Kt=new I;class La{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=wn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Mt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Mt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Mt(t,this.array),n=Mt(n,this.array),r=Mt(r,this.array),a=Mt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=a,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new La(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[r+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Lt extends wi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Gi;const dr=new I,Hi=new I,Vi=new I,Wi=new Ze,pr=new Ze,Dc=new Pt,sa=new I,mr=new I,oa=new I,vl=new Ze,gs=new Ze,xl=new Ze;class Nt extends Yt{constructor(e=new Lt){if(super(),this.isSprite=!0,this.type="Sprite",Gi===void 0){Gi=new qt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bh(t,5);Gi.setIndex([0,1,2,0,2,3]),Gi.setAttribute("position",new La(n,3,0,!1)),Gi.setAttribute("uv",new La(n,2,3,!1))}this.geometry=Gi,this.material=e,this.center=new Ze(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Hi.setFromMatrixScale(this.matrixWorld),Dc.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Hi.multiplyScalar(-Vi.z);const n=this.material.rotation;let r,a;n!==0&&(a=Math.cos(n),r=Math.sin(n));const s=this.center;la(sa.set(-.5,-.5,0),Vi,s,Hi,r,a),la(mr.set(.5,-.5,0),Vi,s,Hi,r,a),la(oa.set(.5,.5,0),Vi,s,Hi,r,a),vl.set(0,0),gs.set(1,0),xl.set(1,1);let o=e.ray.intersectTriangle(sa,mr,oa,!1,dr);if(o===null&&(la(mr.set(-.5,.5,0),Vi,s,Hi,r,a),gs.set(0,1),o=e.ray.intersectTriangle(sa,oa,mr,!1,dr),o===null))return;const c=e.ray.origin.distanceTo(dr);c<e.near||c>e.far||t.push({distance:c,point:dr.clone(),uv:pn.getInterpolation(dr,sa,mr,oa,vl,gs,xl,new Ze),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function la(i,e,t,n,r,a){Wi.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(pr.x=a*Wi.x-r*Wi.y,pr.y=r*Wi.x+a*Wi.y):pr.copy(Wi),i.copy(e),i.x+=pr.x,i.y+=pr.y,i.applyMatrix4(Dc)}const _s=new I,wh=new I,Eh=new et;class gi{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=_s.subVectors(n,t).cross(wh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(_s),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Eh.getNormalMatrix(e),r=this.coplanarPoint(_s).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const di=new Lr,Ah=new Ze(.5,.5),ca=new I;class Ic{constructor(e=new gi,t=new gi,n=new gi,r=new gi,a=new gi,s=new gi){this.planes=[e,t,n,r,a,s]}set(e,t,n,r,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=An,n=!1){const r=this.planes,a=e.elements,s=a[0],o=a[1],c=a[2],l=a[3],f=a[4],h=a[5],d=a[6],p=a[7],_=a[8],x=a[9],m=a[10],u=a[11],b=a[12],w=a[13],S=a[14],P=a[15];if(r[0].setComponents(l-s,p-f,u-_,P-b).normalize(),r[1].setComponents(l+s,p+f,u+_,P+b).normalize(),r[2].setComponents(l+o,p+h,u+x,P+w).normalize(),r[3].setComponents(l-o,p-h,u-x,P-w).normalize(),n)r[4].setComponents(c,d,m,S).normalize(),r[5].setComponents(l-c,p-d,u-m,P-S).normalize();else if(r[4].setComponents(l-c,p-d,u-m,P-S).normalize(),t===An)r[5].setComponents(l+c,p+d,u+m,P+S).normalize();else if(t===Ra)r[5].setComponents(c,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(di)}intersectsSprite(e){di.center.set(0,0,0);const t=Ah.distanceTo(e.center);return di.radius=.7071067811865476+t,di.applyMatrix4(e.matrixWorld),this.intersectsSphere(di)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(ca.x=r.normal.x>0?e.max.x:e.min.x,ca.y=r.normal.y>0?e.max.y:e.min.y,ca.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ca)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uc extends wi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Da=new I,Ia=new I,yl=new Pt,gr=new Uo,ua=new Lr,vs=new I,Ml=new I;class Ch extends Yt{constructor(e=new qt,t=new Uc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,a=t.count;r<a;r++)Da.fromBufferAttribute(t,r-1),Ia.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Da.distanceTo(Ia);e.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ua.copy(n.boundingSphere),ua.applyMatrix4(r),ua.radius+=a,e.ray.intersectsSphere(ua)===!1)return;yl.copy(r).invert(),gr.copy(e.ray).applyMatrix4(yl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,f=n.index,d=n.attributes.position;if(f!==null){const p=Math.max(0,s.start),_=Math.min(f.count,s.start+s.count);for(let x=p,m=_-1;x<m;x+=l){const u=f.getX(x),b=f.getX(x+1),w=ha(this,e,gr,c,u,b,x);w&&t.push(w)}if(this.isLineLoop){const x=f.getX(_-1),m=f.getX(p),u=ha(this,e,gr,c,x,m,_-1);u&&t.push(u)}}else{const p=Math.max(0,s.start),_=Math.min(d.count,s.start+s.count);for(let x=p,m=_-1;x<m;x+=l){const u=ha(this,e,gr,c,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){const x=ha(this,e,gr,c,_-1,p,_-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function ha(i,e,t,n,r,a,s){const o=i.geometry.attributes.position;if(Da.fromBufferAttribute(o,r),Ia.fromBufferAttribute(o,a),t.distanceSqToSegment(Da,Ia,vs,Ml)>n)return;vs.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(vs);if(!(l<e.near||l>e.far))return{distance:l,point:Ml.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Sl=new I,Tl=new I;class Rh extends Ch{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,a=t.count;r<a;r+=2)Sl.fromBufferAttribute(t,r),Tl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Sl.distanceTo(Tl);e.setAttribute("lineDistance",new kt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class go extends wi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const bl=new Pt,_o=new Uo,fa=new Lr,da=new I;class wl extends Yt{constructor(e=new qt,t=new go){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fa.copy(n.boundingSphere),fa.applyMatrix4(r),fa.radius+=a,e.ray.intersectsSphere(fa)===!1)return;bl.copy(r).invert(),_o.copy(e.ray).applyMatrix4(bl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,s.start),p=Math.min(l.count,s.start+s.count);for(let _=d,x=p;_<x;_++){const m=l.getX(_);da.fromBufferAttribute(h,m),El(da,m,c,r,e,t,this)}}else{const d=Math.max(0,s.start),p=Math.min(h.count,s.start+s.count);for(let _=d,x=p;_<x;_++)da.fromBufferAttribute(h,_),El(da,_,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,s=r.length;a<s;a++){const o=r[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function El(i,e,t,n,r,a,s){const o=_o.distanceSqToPoint(i);if(o<t){const c=new I;_o.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Ph extends Jt{constructor(e,t,n,r,a,s,o,c,l){super(e,t,n,r,a,s,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nc extends Jt{constructor(e,t,n=Si,r,a,s,o=Mn,c=Mn,l,f=br,h=1){if(f!==br&&f!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,r,a,s,o,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Io(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Fc extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Fa extends qt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const a=[],s=[];o(r),l(n),f(),this.setAttribute("position",new kt(a,3)),this.setAttribute("normal",new kt(a.slice(),3)),this.setAttribute("uv",new kt(s,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(b){const w=new I,S=new I,P=new I;for(let R=0;R<t.length;R+=3)p(t[R+0],w),p(t[R+1],S),p(t[R+2],P),c(w,S,P,b)}function c(b,w,S,P){const R=P+1,C=[];for(let F=0;F<=R;F++){C[F]=[];const M=b.clone().lerp(S,F/R),y=w.clone().lerp(S,F/R),D=R-F;for(let U=0;U<=D;U++)U===0&&F===R?C[F][U]=M:C[F][U]=M.clone().lerp(y,U/D)}for(let F=0;F<R;F++)for(let M=0;M<2*(R-F)-1;M++){const y=Math.floor(M/2);M%2===0?(d(C[F][y+1]),d(C[F+1][y]),d(C[F][y])):(d(C[F][y+1]),d(C[F+1][y+1]),d(C[F+1][y]))}}function l(b){const w=new I;for(let S=0;S<a.length;S+=3)w.x=a[S+0],w.y=a[S+1],w.z=a[S+2],w.normalize().multiplyScalar(b),a[S+0]=w.x,a[S+1]=w.y,a[S+2]=w.z}function f(){const b=new I;for(let w=0;w<a.length;w+=3){b.x=a[w+0],b.y=a[w+1],b.z=a[w+2];const S=m(b)/2/Math.PI+.5,P=u(b)/Math.PI+.5;s.push(S,1-P)}_(),h()}function h(){for(let b=0;b<s.length;b+=6){const w=s[b+0],S=s[b+2],P=s[b+4],R=Math.max(w,S,P),C=Math.min(w,S,P);R>.9&&C<.1&&(w<.2&&(s[b+0]+=1),S<.2&&(s[b+2]+=1),P<.2&&(s[b+4]+=1))}}function d(b){a.push(b.x,b.y,b.z)}function p(b,w){const S=b*3;w.x=e[S+0],w.y=e[S+1],w.z=e[S+2]}function _(){const b=new I,w=new I,S=new I,P=new I,R=new Ze,C=new Ze,F=new Ze;for(let M=0,y=0;M<a.length;M+=9,y+=6){b.set(a[M+0],a[M+1],a[M+2]),w.set(a[M+3],a[M+4],a[M+5]),S.set(a[M+6],a[M+7],a[M+8]),R.set(s[y+0],s[y+1]),C.set(s[y+2],s[y+3]),F.set(s[y+4],s[y+5]),P.copy(b).add(w).add(S).divideScalar(3);const D=m(P);x(R,y+0,b,D),x(C,y+2,w,D),x(F,y+4,S,D)}}function x(b,w,S,P){P<0&&b.x===1&&(s[w]=b.x-1),S.x===0&&S.z===0&&(s[w]=P/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function u(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.vertices,e.indices,e.radius,e.details)}}class Fo extends Fa{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],a=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,a,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Fo(e.radius,e.detail)}}class Oo extends Fa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Oo(e.radius,e.detail)}}class Ir extends qt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const a=e/2,s=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,f=c+1,h=e/o,d=t/c,p=[],_=[],x=[],m=[];for(let u=0;u<f;u++){const b=u*d-s;for(let w=0;w<l;w++){const S=w*h-a;_.push(S,-b,0),x.push(0,0,1),m.push(w/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let b=0;b<o;b++){const w=b+l*u,S=b+l*(u+1),P=b+1+l*(u+1),R=b+1+l*u;p.push(w,S,R),p.push(S,P,R)}this.setIndex(p),this.setAttribute("position",new kt(_,3)),this.setAttribute("normal",new kt(x,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ir(e.width,e.height,e.widthSegments,e.heightSegments)}}class ko extends qt{constructor(e=1,t=.4,n=12,r=48,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:a},n=Math.floor(n),r=Math.floor(r);const s=[],o=[],c=[],l=[],f=new I,h=new I,d=new I;for(let p=0;p<=n;p++)for(let _=0;_<=r;_++){const x=_/r*a,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(x),h.y=(e+t*Math.cos(m))*Math.sin(x),h.z=t*Math.sin(m),o.push(h.x,h.y,h.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),l.push(_/r),l.push(p/n)}for(let p=1;p<=n;p++)for(let _=1;_<=r;_++){const x=(r+1)*p+_-1,m=(r+1)*(p-1)+_-1,u=(r+1)*(p-1)+_,b=(r+1)*p+_;s.push(x,m,b),s.push(m,u,b)}this.setIndex(s),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(c,3)),this.setAttribute("uv",new kt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Lh extends jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Dh extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ih extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Oc extends Pc{constructor(e=-1,t=1,n=1,r=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Uh extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Nh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Fh extends Rh{constructor(e=10,t=10,n=4473924,r=8947848){n=new Ge(n),r=new Ge(r);const a=t/2,s=e/t,o=e/2,c=[],l=[];for(let d=0,p=0,_=-o;d<=t;d++,_+=s){c.push(-o,0,_,o,0,_),c.push(_,0,-o,_,0,o);const x=d===a?n:r;x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3,x.toArray(l,p),p+=3}const f=new qt;f.setAttribute("position",new kt(c,3)),f.setAttribute("color",new kt(l,3));const h=new Uc({vertexColors:!0,toneMapped:!1});super(f,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Al(i,e,t,n){const r=Oh(n);switch(t){case vc:return i*e;case yc:return i*e/r.components*r.byteLength;case Po:return i*e/r.components*r.byteLength;case Mc:return i*e*2/r.components*r.byteLength;case Lo:return i*e*2/r.components*r.byteLength;case xc:return i*e*3/r.components*r.byteLength;case xn:return i*e*4/r.components*r.byteLength;case Do:return i*e*4/r.components*r.byteLength;case Ma:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zs:case Hs:return Math.max(i,16)*Math.max(e,8)/4;case Bs:case Gs:return Math.max(i,8)*Math.max(e,8)/2;case Vs:case Ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qs:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ks:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case $s:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case js:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Js:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Qs:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case to:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case no:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case io:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ro:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ao:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case so:case oo:case lo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case co:case uo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ho:case fo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Oh(i){switch(i){case Hn:case pc:return{byteLength:1,components:1};case Sr:case mc:case zn:return{byteLength:2,components:1};case Co:case Ro:return{byteLength:2,components:4};case Si:case Ao:case On:return{byteLength:4,components:1};case gc:case _c:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wo);function kc(){let i=null,e=!1,t=null,n=null;function r(a,s){t(a,s),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){i=a}}}function kh(i){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,f),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const f=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,f);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],x=h[p];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++d,h[d]=x)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const x=h[p];i.bufferSubData(l,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function s(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:a,update:s}}var Bh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zh=`#ifdef USE_ALPHAHASH
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
#endif`,Gh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xh=`#ifdef USE_AOMAP
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
#endif`,Yh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qh=`#ifdef USE_BATCHING
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
#endif`,Zh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$h=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jh=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jh=`#ifdef USE_IRIDESCENCE
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
#endif`,Qh=`#ifdef USE_BUMPMAP
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
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,af=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,sf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,of=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cf=`#define PI 3.141592653589793
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
} // validated`,uf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hf=`vec3 transformedNormal = objectNormal;
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
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",_f=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vf=`#ifdef USE_ENVMAP
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
#endif`,xf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,yf=`#ifdef USE_ENVMAP
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
#endif`,Mf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sf=`#ifdef USE_ENVMAP
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
#endif`,Tf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ef=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Af=`#ifdef USE_GRADIENTMAP
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
}`,Cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lf=`uniform bool receiveShadow;
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
#endif`,Df=`#ifdef USE_ENVMAP
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
#endif`,If=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Uf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Of=`PhysicalMaterial material;
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
#endif`,kf=`struct PhysicalMaterial {
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
}`,Bf=`
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
#endif`,zf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Hf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Vf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kf=`#if defined( USE_POINTS_UV )
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
#endif`,$f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ed=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,td=`#ifdef USE_MORPHTARGETS
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
#endif`,nd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,id=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,od=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ld=`#ifdef USE_NORMALMAP
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
#endif`,cd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ud=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,dd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,md=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Md=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Td=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bd=`float getShadowMask() {
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
}`,wd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ed=`#ifdef USE_SKINNING
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
#endif`,Ad=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cd=`#ifdef USE_SKINNING
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
#endif`,Rd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Pd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ld=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dd=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Id=`#ifdef USE_TRANSMISSION
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
#endif`,Ud=`#ifdef USE_TRANSMISSION
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
#endif`,Nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Od=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Bd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zd=`uniform sampler2D t2D;
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
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xd=`#include <common>
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
}`,Yd=`#if DEPTH_PACKING == 3200
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
}`,qd=`#define DISTANCE
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
}`,Zd=`#define DISTANCE
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
}`,Kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$d=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jd=`uniform float scale;
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
}`,Jd=`uniform vec3 diffuse;
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
}`,Qd=`#include <common>
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
}`,ep=`uniform vec3 diffuse;
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
}`,tp=`#define LAMBERT
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
}`,np=`#define LAMBERT
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
}`,ip=`#define MATCAP
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
}`,rp=`#define MATCAP
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
}`,ap=`#define NORMAL
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
}`,sp=`#define NORMAL
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
}`,op=`#define PHONG
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
}`,lp=`#define PHONG
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
}`,cp=`#define STANDARD
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
}`,up=`#define STANDARD
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
}`,hp=`#define TOON
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
}`,fp=`#define TOON
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
}`,dp=`uniform float size;
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
}`,pp=`uniform vec3 diffuse;
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
}`,mp=`#include <common>
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
}`,gp=`uniform vec3 color;
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
}`,_p=`uniform float rotation;
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
}`,vp=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Bh,alphahash_pars_fragment:zh,alphamap_fragment:Gh,alphamap_pars_fragment:Hh,alphatest_fragment:Vh,alphatest_pars_fragment:Wh,aomap_fragment:Xh,aomap_pars_fragment:Yh,batching_pars_vertex:qh,batching_vertex:Zh,begin_vertex:Kh,beginnormal_vertex:$h,bsdfs:jh,iridescence_fragment:Jh,bumpmap_pars_fragment:Qh,clipping_planes_fragment:ef,clipping_planes_pars_fragment:tf,clipping_planes_pars_vertex:nf,clipping_planes_vertex:rf,color_fragment:af,color_pars_fragment:sf,color_pars_vertex:of,color_vertex:lf,common:cf,cube_uv_reflection_fragment:uf,defaultnormal_vertex:hf,displacementmap_pars_vertex:ff,displacementmap_vertex:df,emissivemap_fragment:pf,emissivemap_pars_fragment:mf,colorspace_fragment:gf,colorspace_pars_fragment:_f,envmap_fragment:vf,envmap_common_pars_fragment:xf,envmap_pars_fragment:yf,envmap_pars_vertex:Mf,envmap_physical_pars_fragment:Df,envmap_vertex:Sf,fog_vertex:Tf,fog_pars_vertex:bf,fog_fragment:wf,fog_pars_fragment:Ef,gradientmap_pars_fragment:Af,lightmap_pars_fragment:Cf,lights_lambert_fragment:Rf,lights_lambert_pars_fragment:Pf,lights_pars_begin:Lf,lights_toon_fragment:If,lights_toon_pars_fragment:Uf,lights_phong_fragment:Nf,lights_phong_pars_fragment:Ff,lights_physical_fragment:Of,lights_physical_pars_fragment:kf,lights_fragment_begin:Bf,lights_fragment_maps:zf,lights_fragment_end:Gf,logdepthbuf_fragment:Hf,logdepthbuf_pars_fragment:Vf,logdepthbuf_pars_vertex:Wf,logdepthbuf_vertex:Xf,map_fragment:Yf,map_pars_fragment:qf,map_particle_fragment:Zf,map_particle_pars_fragment:Kf,metalnessmap_fragment:$f,metalnessmap_pars_fragment:jf,morphinstance_vertex:Jf,morphcolor_vertex:Qf,morphnormal_vertex:ed,morphtarget_pars_vertex:td,morphtarget_vertex:nd,normal_fragment_begin:id,normal_fragment_maps:rd,normal_pars_fragment:ad,normal_pars_vertex:sd,normal_vertex:od,normalmap_pars_fragment:ld,clearcoat_normal_fragment_begin:cd,clearcoat_normal_fragment_maps:ud,clearcoat_pars_fragment:hd,iridescence_pars_fragment:fd,opaque_fragment:dd,packing:pd,premultiplied_alpha_fragment:md,project_vertex:gd,dithering_fragment:_d,dithering_pars_fragment:vd,roughnessmap_fragment:xd,roughnessmap_pars_fragment:yd,shadowmap_pars_fragment:Md,shadowmap_pars_vertex:Sd,shadowmap_vertex:Td,shadowmask_pars_fragment:bd,skinbase_vertex:wd,skinning_pars_vertex:Ed,skinning_vertex:Ad,skinnormal_vertex:Cd,specularmap_fragment:Rd,specularmap_pars_fragment:Pd,tonemapping_fragment:Ld,tonemapping_pars_fragment:Dd,transmission_fragment:Id,transmission_pars_fragment:Ud,uv_pars_fragment:Nd,uv_pars_vertex:Fd,uv_vertex:Od,worldpos_vertex:kd,background_vert:Bd,background_frag:zd,backgroundCube_vert:Gd,backgroundCube_frag:Hd,cube_vert:Vd,cube_frag:Wd,depth_vert:Xd,depth_frag:Yd,distanceRGBA_vert:qd,distanceRGBA_frag:Zd,equirect_vert:Kd,equirect_frag:$d,linedashed_vert:jd,linedashed_frag:Jd,meshbasic_vert:Qd,meshbasic_frag:ep,meshlambert_vert:tp,meshlambert_frag:np,meshmatcap_vert:ip,meshmatcap_frag:rp,meshnormal_vert:ap,meshnormal_frag:sp,meshphong_vert:op,meshphong_frag:lp,meshphysical_vert:cp,meshphysical_frag:up,meshtoon_vert:hp,meshtoon_frag:fp,points_vert:dp,points_frag:pp,shadow_vert:mp,shadow_frag:gp,sprite_vert:_p,sprite_frag:vp},_e={common:{diffuse:{value:new Ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new Ge(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},bn={basic:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:$t([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)},specular:{value:new Ge(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:$t([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:$t([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new Ge(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:$t([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:$t([_e.points,_e.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:$t([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:$t([_e.common,_e.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:$t([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:$t([_e.sprite,_e.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:$t([_e.common,_e.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:$t([_e.lights,_e.fog,{color:{value:new Ge(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};bn.physical={uniforms:$t([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new Ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new Ge(0)},specularColor:{value:new Ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};const pa={r:0,b:0,g:0},pi=new Vn,xp=new Pt;function yp(i,e,t,n,r,a,s){const o=new Ge(0);let c=a===!0?0:1,l,f,h=null,d=0,p=null;function _(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?t:e).get(S)),S}function x(w){let S=!1;const P=_(w);P===null?u(o,c):P&&P.isColor&&(u(P,1),S=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,S){const P=_(S);P&&(P.isCubeTexture||P.mapping===Na)?(f===void 0&&(f=new ln(new Dr(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:tr(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(R,C,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),pi.copy(S.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),f.material.uniforms.envMap.value=P,f.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(xp.makeRotationFromEuler(pi)),f.material.toneMapped=ht.getTransfer(P.colorSpace)!==xt,(h!==P||d!==P.version||p!==i.toneMapping)&&(f.material.needsUpdate=!0,h=P,d=P.version,p=i.toneMapping),f.layers.enableAll(),w.unshift(f,f.geometry,f.material,0,0,null)):P&&P.isTexture&&(l===void 0&&(l=new ln(new Ir(2,2),new jt({name:"BackgroundMaterial",uniforms:tr(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=P,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ht.getTransfer(P.colorSpace)!==xt,P.matrixAutoUpdate===!0&&P.updateMatrix(),l.material.uniforms.uvTransform.value.copy(P.matrix),(h!==P||d!==P.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,h=P,d=P.version,p=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function u(w,S){w.getRGB(pa,Rc(i)),n.buffers.color.setClear(pa.r,pa.g,pa.b,S,s)}function b(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,S=1){o.set(w),c=S,u(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,u(o,c)},render:x,addToRenderList:m,dispose:b}}function Mp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let a=r,s=!1;function o(y,D,U,Z,ee){let J=!1;const Q=h(Z,U,D);a!==Q&&(a=Q,l(a.object)),J=p(y,Z,U,ee),J&&_(y,Z,U,ee),ee!==null&&e.update(ee,i.ELEMENT_ARRAY_BUFFER),(J||s)&&(s=!1,S(y,D,U,Z),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function c(){return i.createVertexArray()}function l(y){return i.bindVertexArray(y)}function f(y){return i.deleteVertexArray(y)}function h(y,D,U){const Z=U.wireframe===!0;let ee=n[y.id];ee===void 0&&(ee={},n[y.id]=ee);let J=ee[D.id];J===void 0&&(J={},ee[D.id]=J);let Q=J[Z];return Q===void 0&&(Q=d(c()),J[Z]=Q),Q}function d(y){const D=[],U=[],Z=[];for(let ee=0;ee<t;ee++)D[ee]=0,U[ee]=0,Z[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:U,attributeDivisors:Z,object:y,attributes:{},index:null}}function p(y,D,U,Z){const ee=a.attributes,J=D.attributes;let Q=0;const oe=U.getAttributes();for(const V in oe)if(oe[V].location>=0){const Se=ee[V];let ke=J[V];if(ke===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(ke=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(ke=y.instanceColor)),Se===void 0||Se.attribute!==ke||ke&&Se.data!==ke.data)return!0;Q++}return a.attributesNum!==Q||a.index!==Z}function _(y,D,U,Z){const ee={},J=D.attributes;let Q=0;const oe=U.getAttributes();for(const V in oe)if(oe[V].location>=0){let Se=J[V];Se===void 0&&(V==="instanceMatrix"&&y.instanceMatrix&&(Se=y.instanceMatrix),V==="instanceColor"&&y.instanceColor&&(Se=y.instanceColor));const ke={};ke.attribute=Se,Se&&Se.data&&(ke.data=Se.data),ee[V]=ke,Q++}a.attributes=ee,a.attributesNum=Q,a.index=Z}function x(){const y=a.newAttributes;for(let D=0,U=y.length;D<U;D++)y[D]=0}function m(y){u(y,0)}function u(y,D){const U=a.newAttributes,Z=a.enabledAttributes,ee=a.attributeDivisors;U[y]=1,Z[y]===0&&(i.enableVertexAttribArray(y),Z[y]=1),ee[y]!==D&&(i.vertexAttribDivisor(y,D),ee[y]=D)}function b(){const y=a.newAttributes,D=a.enabledAttributes;for(let U=0,Z=D.length;U<Z;U++)D[U]!==y[U]&&(i.disableVertexAttribArray(U),D[U]=0)}function w(y,D,U,Z,ee,J,Q){Q===!0?i.vertexAttribIPointer(y,D,U,ee,J):i.vertexAttribPointer(y,D,U,Z,ee,J)}function S(y,D,U,Z){x();const ee=Z.attributes,J=U.getAttributes(),Q=D.defaultAttributeValues;for(const oe in J){const V=J[oe];if(V.location>=0){let ge=ee[oe];if(ge===void 0&&(oe==="instanceMatrix"&&y.instanceMatrix&&(ge=y.instanceMatrix),oe==="instanceColor"&&y.instanceColor&&(ge=y.instanceColor)),ge!==void 0){const Se=ge.normalized,ke=ge.itemSize,Je=e.get(ge);if(Je===void 0)continue;const yt=Je.buffer,dt=Je.type,ft=Je.bytesPerElement,j=dt===i.INT||dt===i.UNSIGNED_INT||ge.gpuType===Ao;if(ge.isInterleavedBufferAttribute){const re=ge.data,Ce=re.stride,Ke=ge.offset;if(re.isInstancedInterleavedBuffer){for(let k=0;k<V.locationSize;k++)u(V.location+k,re.meshPerAttribute);y.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let k=0;k<V.locationSize;k++)m(V.location+k);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let k=0;k<V.locationSize;k++)w(V.location+k,ke/V.locationSize,dt,Se,Ce*ft,(Ke+ke/V.locationSize*k)*ft,j)}else{if(ge.isInstancedBufferAttribute){for(let re=0;re<V.locationSize;re++)u(V.location+re,ge.meshPerAttribute);y.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let re=0;re<V.locationSize;re++)m(V.location+re);i.bindBuffer(i.ARRAY_BUFFER,yt);for(let re=0;re<V.locationSize;re++)w(V.location+re,ke/V.locationSize,dt,Se,ke*ft,ke/V.locationSize*re*ft,j)}}else if(Q!==void 0){const Se=Q[oe];if(Se!==void 0)switch(Se.length){case 2:i.vertexAttrib2fv(V.location,Se);break;case 3:i.vertexAttrib3fv(V.location,Se);break;case 4:i.vertexAttrib4fv(V.location,Se);break;default:i.vertexAttrib1fv(V.location,Se)}}}}b()}function P(){F();for(const y in n){const D=n[y];for(const U in D){const Z=D[U];for(const ee in Z)f(Z[ee].object),delete Z[ee];delete D[U]}delete n[y]}}function R(y){if(n[y.id]===void 0)return;const D=n[y.id];for(const U in D){const Z=D[U];for(const ee in Z)f(Z[ee].object),delete Z[ee];delete D[U]}delete n[y.id]}function C(y){for(const D in n){const U=n[D];if(U[y.id]===void 0)continue;const Z=U[y.id];for(const ee in Z)f(Z[ee].object),delete Z[ee];delete U[y.id]}}function F(){M(),s=!0,a!==r&&(a=r,l(a.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:R,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:m,disableUnusedAttributes:b}}function Sp(i,e,t){let n;function r(l){n=l}function a(l,f){i.drawArrays(n,l,f),t.update(f,n,1)}function s(l,f,h){h!==0&&(i.drawArraysInstanced(n,l,f,h),t.update(f,n,h))}function o(l,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,f,0,h);let p=0;for(let _=0;_<h;_++)p+=f[_];t.update(p,n,1)}function c(l,f,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<l.length;_++)s(l[_],f[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,f,0,d,0,h);let _=0;for(let x=0;x<h;x++)_+=f[x]*d[x];t.update(_,n,1)}}this.setMode=r,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Tp(i,e,t,n){let r;function a(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function s(C){return!(C!==xn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const F=C===zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==Hn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==On&&!F)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=_>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:s,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:S,vertexTextures:P,maxSamples:R}}function bp(i){const e=this;let t=null,n=0,r=!1,a=!1;const s=new gi,o=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||r;return r=d,n=h.length,p},this.beginShadows=function(){a=!0,f(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,x=h.clipIntersection,m=h.clipShadows,u=i.get(h);if(!r||_===null||_.length===0||a&&!m)a?f(null):l();else{const b=a?0:n,w=b*4;let S=u.clippingState||null;c.value=S,S=f(_,d,w,p);for(let P=0;P!==w;++P)S[P]=t[P];u.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,d,p,_){const x=h!==null?h.length:0;let m=null;if(x!==0){if(m=c.value,_!==!0||m===null){const u=p+x*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<u)&&(m=new Float32Array(u));for(let w=0,S=p;w!==x;++w,S+=4)s.copy(h[w]).applyMatrix4(b,o),s.normal.toArray(m,S),m[S+3]=s.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function wp(i){let e=new WeakMap;function t(s,o){return o===Fs?s.mapping=Ji:o===Os&&(s.mapping=Qi),s}function n(s){if(s&&s.isTexture){const o=s.mapping;if(o===Fs||o===Os)if(e.has(s)){const c=e.get(s).texture;return t(c,s.mapping)}else{const c=s.image;if(c&&c.height>0){const l=new Mh(c.height);return l.fromEquirectangularTexture(i,s),e.set(s,l),s.addEventListener("dispose",r),t(l.texture,s.mapping)}else return null}}return s}function r(s){const o=s.target;o.removeEventListener("dispose",r);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function a(){e=new WeakMap}return{get:n,dispose:a}}const Yi=4,Cl=[.125,.215,.35,.446,.526,.582],xi=20,xs=new Oc,Rl=new Ge;let ys=null,Ms=0,Ss=0,Ts=!1;const _i=(1+Math.sqrt(5))/2,Xi=1/_i,Pl=[new I(-_i,Xi,0),new I(_i,Xi,0),new I(-Xi,0,_i),new I(Xi,0,_i),new I(0,_i,-Xi),new I(0,_i,Xi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Ep=new I;class Ll{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100,a={}){const{size:s=256,position:o=Ep}=a;ys=this._renderer.getRenderTarget(),Ms=this._renderer.getActiveCubeFace(),Ss=this._renderer.getActiveMipmapLevel(),Ts=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ul(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ys,Ms,Ss),this._renderer.xr.enabled=Ts,e.scissorTest=!1,ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ys=this._renderer.getRenderTarget(),Ms=this._renderer.getActiveCubeFace(),Ss=this._renderer.getActiveMipmapLevel(),Ts=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:zn,format:xn,colorSpace:er,depthBuffer:!1},r=Dl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dl(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ap(a)),this._blurMaterial=Cp(a,e,t)}return r}_compileMaterial(e){const t=new ln(this._lodPlanes[0],e);this._renderer.compile(t,xs)}_sceneToCubeUV(e,t,n,r,a){const c=new dn(90,1,t,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,p=h.toneMapping;h.getClearColor(Rl),h.toneMapping=ii,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null));const x=new Zi({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),m=new ln(new Dr,x);let u=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,u=!0):(x.color.copy(Rl),u=!0);for(let w=0;w<6;w++){const S=w%3;S===0?(c.up.set(0,l[w],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x+f[w],a.y,a.z)):S===1?(c.up.set(0,0,l[w]),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y+f[w],a.z)):(c.up.set(0,l[w],0),c.position.set(a.x,a.y,a.z),c.lookAt(a.x,a.y,a.z+f[w]));const P=this._cubeSize;ma(r,S*P,w>2?P:0,P,P),h.setRenderTarget(r),u&&h.render(m,c),h.render(e,c)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=p,h.autoClear=d,e.background=b}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ji||e.mapping===Qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ul()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Il());const a=r?this._cubemapMaterial:this._equirectMaterial,s=new ln(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const c=this._cubeSize;ma(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(s,xs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let a=1;a<r;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Pl[(r-a-1)%Pl.length];this._blur(e,a-1,a,s,o)}t.autoClear=n}_blur(e,t,n,r,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,r,"latitudinal",a),this._halfBlur(s,e,n,n,r,"longitudinal",a)}_halfBlur(e,t,n,r,a,s,o){const c=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new ln(this._lodPlanes[r],l),d=l.uniforms,p=this._sizeLods[n]-1,_=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*xi-1),x=a/_,m=isFinite(a)?1+Math.floor(f*x):xi;m>xi&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xi}`);const u=[];let b=0;for(let C=0;C<xi;++C){const F=C/x,M=Math.exp(-F*F/2);u.push(M),C===0?b+=M:C<m&&(b+=2*M)}for(let C=0;C<u.length;C++)u[C]=u[C]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=u,d.latitudinal.value=s==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:w}=this;d.dTheta.value=_,d.mipInt.value=w-n;const S=this._sizeLods[r],P=3*S*(r>w-Yi?r-w+Yi:0),R=4*(this._cubeSize-S);ma(t,P,R,3*S,2*S),c.setRenderTarget(t),c.render(h,xs)}}function Ap(i){const e=[],t=[],n=[];let r=i;const a=i-Yi+1+Cl.length;for(let s=0;s<a;s++){const o=Math.pow(2,r);t.push(o);let c=1/o;s>i-Yi?c=Cl[s-i+Yi-1]:s===0&&(c=0),n.push(c);const l=1/(o-2),f=-l,h=1+l,d=[f,f,h,f,h,h,f,f,h,h,f,h],p=6,_=6,x=3,m=2,u=1,b=new Float32Array(x*_*p),w=new Float32Array(m*_*p),S=new Float32Array(u*_*p);for(let R=0;R<p;R++){const C=R%3*2/3-1,F=R>2?0:-1,M=[C,F,0,C+2/3,F,0,C+2/3,F+1,0,C,F,0,C+2/3,F+1,0,C,F+1,0];b.set(M,x*_*R),w.set(d,m*_*R);const y=[R,R,R,R,R,R];S.set(y,u*_*R)}const P=new qt;P.setAttribute("position",new tn(b,x)),P.setAttribute("uv",new tn(w,m)),P.setAttribute("faceIndex",new tn(S,u)),e.push(P),r>Yi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Dl(i,e,t){const n=new Sn(i,e,t);return n.texture.mapping=Na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ma(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Cp(i,e,t){const n=new Float32Array(xi),r=new I(0,1,0);return new jt({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bo(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Il(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bo(),fragmentShader:`

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
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Ul(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Bo(){return`

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
	`}function Rp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Fs||c===Os,f=c===Ji||c===Qi;if(l||f){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Ll(i)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const p=o.image;return l&&p&&p.height>0||f&&p&&r(p)?(t===null&&(t=new Ll(i)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",a),h.texture):null}}}return o}function r(o){let c=0;const l=6;for(let f=0;f<l;f++)o[f]!==void 0&&c++;return c===l}function a(o){const c=o.target;c.removeEventListener("dispose",a);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Pp(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Er("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Lp(i,e,t,n){const r={},a=new WeakMap;function s(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",s),delete r[d.id];const p=a.get(d);p&&(e.remove(p),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",s),r[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER)}function l(h){const d=[],p=h.index,_=h.attributes.position;let x=0;if(p!==null){const b=p.array;x=p.version;for(let w=0,S=b.length;w<S;w+=3){const P=b[w+0],R=b[w+1],C=b[w+2];d.push(P,R,R,C,C,P)}}else if(_!==void 0){const b=_.array;x=_.version;for(let w=0,S=b.length/3-1;w<S;w+=3){const P=w+0,R=w+1,C=w+2;d.push(P,R,R,C,C,P)}}else return;const m=new(Tc(d)?Cc:Ac)(d,1);m.version=x;const u=a.get(h);u&&e.remove(u),a.set(h,m)}function f(h){const d=a.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&l(h)}else l(h);return a.get(h)}return{get:o,update:c,getWireframeAttribute:f}}function Dp(i,e,t){let n;function r(d){n=d}let a,s;function o(d){a=d.type,s=d.bytesPerElement}function c(d,p){i.drawElements(n,p,a,d*s),t.update(p,n,1)}function l(d,p,_){_!==0&&(i.drawElementsInstanced(n,p,a,d*s,_),t.update(p,n,_))}function f(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,a,d,0,_);let m=0;for(let u=0;u<_;u++)m+=p[u];t.update(m,n,1)}function h(d,p,_,x){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<d.length;u++)l(d[u]/s,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,a,d,0,x,0,_);let u=0;for(let b=0;b<_;b++)u+=p[b]*x[b];t.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function Ip(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,s,o){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=o*(a/3);break;case i.LINES:t.lines+=o*(a/2);break;case i.LINE_STRIP:t.lines+=o*(a-1);break;case i.LINE_LOOP:t.lines+=o*a;break;case i.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Up(i,e,t){const n=new WeakMap,r=new It;function a(s,o,c){const l=s.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let y=function(){F.dispose(),n.delete(o),o.removeEventListener("dispose",y)};var p=y;d!==void 0&&d.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let S=0;_===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let P=o.attributes.position.count*S,R=1;P>e.maxTextureSize&&(R=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const C=new Float32Array(P*R*4*h),F=new bc(C,P,R,h);F.type=On,F.needsUpdate=!0;const M=S*4;for(let D=0;D<h;D++){const U=u[D],Z=b[D],ee=w[D],J=P*R*4*D;for(let Q=0;Q<U.count;Q++){const oe=Q*M;_===!0&&(r.fromBufferAttribute(U,Q),C[J+oe+0]=r.x,C[J+oe+1]=r.y,C[J+oe+2]=r.z,C[J+oe+3]=0),x===!0&&(r.fromBufferAttribute(Z,Q),C[J+oe+4]=r.x,C[J+oe+5]=r.y,C[J+oe+6]=r.z,C[J+oe+7]=0),m===!0&&(r.fromBufferAttribute(ee,Q),C[J+oe+8]=r.x,C[J+oe+9]=r.y,C[J+oe+10]=r.z,C[J+oe+11]=ee.itemSize===4?r.w:1)}}d={count:h,texture:F,size:new Ze(P,R)},n.set(o,d),o.addEventListener("dispose",y)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let _=0;for(let m=0;m<l.length;m++)_+=l[m];const x=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(i,"morphTargetBaseInfluence",x),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function Np(i,e,t,n){let r=new WeakMap;function a(c){const l=n.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==l&&(e.update(h),r.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;r.get(d)!==l&&(d.update(),r.set(d,l))}return h}function s(){r=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:a,dispose:s}}const Bc=new Jt,Nl=new Nc(1,1),zc=new bc,Gc=new ah,Hc=new Lc,Fl=[],Ol=[],kl=new Float32Array(16),Bl=new Float32Array(9),zl=new Float32Array(4);function ar(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let a=Fl[r];if(a===void 0&&(a=new Float32Array(r),Fl[r]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,i[s].toArray(a,o)}return a}function Bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Oa(i,e){let t=Ol[e];t===void 0&&(t=new Int32Array(e),Ol[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Fp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Op(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2fv(this.addr,e),zt(t,e)}}function kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;i.uniform3fv(this.addr,e),zt(t,e)}}function Bp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4fv(this.addr,e),zt(t,e)}}function zp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;zl.set(n),i.uniformMatrix2fv(this.addr,!1,zl),zt(t,n)}}function Gp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;Bl.set(n),i.uniformMatrix3fv(this.addr,!1,Bl),zt(t,n)}}function Hp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,n))return;kl.set(n),i.uniformMatrix4fv(this.addr,!1,kl),zt(t,n)}}function Vp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Wp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2iv(this.addr,e),zt(t,e)}}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3iv(this.addr,e),zt(t,e)}}function Yp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4iv(this.addr,e),zt(t,e)}}function qp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;i.uniform2uiv(this.addr,e),zt(t,e)}}function Kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;i.uniform3uiv(this.addr,e),zt(t,e)}}function $p(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;i.uniform4uiv(this.addr,e),zt(t,e)}}function jp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let a;this.type===i.SAMPLER_2D_SHADOW?(Nl.compareFunction=Sc,a=Nl):a=Bc,t.setTexture2D(e||a,r)}function Jp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Gc,r)}function Qp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||Hc,r)}function em(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||zc,r)}function tm(i){switch(i){case 5126:return Fp;case 35664:return Op;case 35665:return kp;case 35666:return Bp;case 35674:return zp;case 35675:return Gp;case 35676:return Hp;case 5124:case 35670:return Vp;case 35667:case 35671:return Wp;case 35668:case 35672:return Xp;case 35669:case 35673:return Yp;case 5125:return qp;case 36294:return Zp;case 36295:return Kp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return jp;case 35679:case 36299:case 36307:return Jp;case 35680:case 36300:case 36308:case 36293:return Qp;case 36289:case 36303:case 36311:case 36292:return em}}function nm(i,e){i.uniform1fv(this.addr,e)}function im(i,e){const t=ar(e,this.size,2);i.uniform2fv(this.addr,t)}function rm(i,e){const t=ar(e,this.size,3);i.uniform3fv(this.addr,t)}function am(i,e){const t=ar(e,this.size,4);i.uniform4fv(this.addr,t)}function sm(i,e){const t=ar(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function om(i,e){const t=ar(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function lm(i,e){const t=ar(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function cm(i,e){i.uniform1iv(this.addr,e)}function um(i,e){i.uniform2iv(this.addr,e)}function hm(i,e){i.uniform3iv(this.addr,e)}function fm(i,e){i.uniform4iv(this.addr,e)}function dm(i,e){i.uniform1uiv(this.addr,e)}function pm(i,e){i.uniform2uiv(this.addr,e)}function mm(i,e){i.uniform3uiv(this.addr,e)}function gm(i,e){i.uniform4uiv(this.addr,e)}function _m(i,e,t){const n=this.cache,r=e.length,a=Oa(t,r);Bt(n,a)||(i.uniform1iv(this.addr,a),zt(n,a));for(let s=0;s!==r;++s)t.setTexture2D(e[s]||Bc,a[s])}function vm(i,e,t){const n=this.cache,r=e.length,a=Oa(t,r);Bt(n,a)||(i.uniform1iv(this.addr,a),zt(n,a));for(let s=0;s!==r;++s)t.setTexture3D(e[s]||Gc,a[s])}function xm(i,e,t){const n=this.cache,r=e.length,a=Oa(t,r);Bt(n,a)||(i.uniform1iv(this.addr,a),zt(n,a));for(let s=0;s!==r;++s)t.setTextureCube(e[s]||Hc,a[s])}function ym(i,e,t){const n=this.cache,r=e.length,a=Oa(t,r);Bt(n,a)||(i.uniform1iv(this.addr,a),zt(n,a));for(let s=0;s!==r;++s)t.setTexture2DArray(e[s]||zc,a[s])}function Mm(i){switch(i){case 5126:return nm;case 35664:return im;case 35665:return rm;case 35666:return am;case 35674:return sm;case 35675:return om;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return um;case 35668:case 35672:return hm;case 35669:case 35673:return fm;case 5125:return dm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return ym}}class Sm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=tm(t.type)}}class Tm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mm(t.type)}}class bm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let a=0,s=r.length;a!==s;++a){const o=r[a];o.setValue(e,t[o.id],n)}}}const bs=/(\w+)(\])?(\[|\.)?/g;function Gl(i,e){i.seq.push(e),i.map[e.id]=e}function wm(i,e,t){const n=i.name,r=n.length;for(bs.lastIndex=0;;){const a=bs.exec(n),s=bs.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o=o|0),l===void 0||l==="["&&s+2===r){Gl(t,l===void 0?new Sm(o,i,e):new Tm(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new bm(o),Gl(t,h)),t=h}}}class wa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const a=e.getActiveUniform(t,r),s=e.getUniformLocation(t,a.name);wm(a,s,this)}}setValue(e,t,n,r){const a=this.map[t];a!==void 0&&a.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,a=e.length;r!==a;++r){const s=e[r];s.id in t&&n.push(s)}return n}}function Hl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Em=37297;let Am=0;function Cm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=r;s<a;s++){const o=s+1;n.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return n.join(`
`)}const Vl=new et;function Rm(i){ht._getMatrix(Vl,ht.workingColorSpace,i);const e=`mat3( ${Vl.elements.map(t=>t.toFixed(4))} )`;switch(ht.getTransfer(i)){case Ca:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),a=(i.getShaderInfoLog(e)||"").trim();if(n&&a==="")return"";const s=/ERROR: 0:(\d+)/.exec(a);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+a+`

`+Cm(i.getShaderSource(e),o)}else return a}function Pm(i,e){const t=Rm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Lm(i,e){let t;switch(e){case oc:t="Linear";break;case lc:t="Reinhard";break;case cc:t="Cineon";break;case Eo:t="ACESFilmic";break;case hc:t="AgX";break;case fc:t="Neutral";break;case uc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ga=new I;function Dm(){ht.getLuminanceCoefficients(ga);const i=ga.x.toFixed(4),e=ga.y.toFixed(4),t=ga.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Im(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function Um(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const a=i.getActiveAttrib(e,r),s=a.name;let o=1;a.type===i.FLOAT_MAT2&&(o=2),a.type===i.FLOAT_MAT3&&(o=3),a.type===i.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:i.getAttribLocation(e,s),locationSize:o}}return t}function vr(i){return i!==""}function Xl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function vo(i){return i.replace(Fm,km)}const Om=new Map;function km(i,e){let t=tt[e];if(t===void 0){const n=Om.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return vo(t)}const Bm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ql(i){return i.replace(Bm,zm)}function zm(i,e,t,n){let r="";for(let a=parseInt(e);a<parseInt(t);a++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return r}function Zl(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Gm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ac?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===vu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function Hm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ji:case Qi:e="ENVMAP_TYPE_CUBE";break;case Na:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Vm(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Qi&&(e="ENVMAP_MODE_REFRACTION"),e}function Wm(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case sc:e="ENVMAP_BLENDING_MULTIPLY";break;case Ou:e="ENVMAP_BLENDING_MIX";break;case ku:e="ENVMAP_BLENDING_ADD";break}return e}function Xm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ym(i,e,t,n){const r=i.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=Gm(t),l=Hm(t),f=Vm(t),h=Wm(t),d=Xm(t),p=Im(t),_=Um(a),x=r.createProgram();let m,u,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(vr).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(vr).join(`
`),u.length>0&&(u+=`
`)):(m=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),u=[Zl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ii?"#define TONE_MAPPING":"",t.toneMapping!==ii?tt.tonemapping_pars_fragment:"",t.toneMapping!==ii?Lm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,Pm("linearToOutputTexel",t.outputColorSpace),Dm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),s=vo(s),s=Xl(s,t),s=Yl(s,t),o=vo(o),o=Xl(o,t),o=Yl(o,t),s=ql(s),o=ql(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===el?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===el?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const w=b+m+s,S=b+u+o,P=Hl(r,r.VERTEX_SHADER,w),R=Hl(r,r.FRAGMENT_SHADER,S);r.attachShader(x,P),r.attachShader(x,R),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function C(D){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(x)||"",Z=r.getShaderInfoLog(P)||"",ee=r.getShaderInfoLog(R)||"",J=U.trim(),Q=Z.trim(),oe=ee.trim();let V=!0,ge=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(V=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,P,R);else{const Se=Wl(r,P,"vertex"),ke=Wl(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+J+`
`+Se+`
`+ke)}else J!==""?console.warn("THREE.WebGLProgram: Program Info Log:",J):(Q===""||oe==="")&&(ge=!1);ge&&(D.diagnostics={runnable:V,programLog:J,vertexShader:{log:Q,prefix:m},fragmentShader:{log:oe,prefix:u}})}r.deleteShader(P),r.deleteShader(R),F=new wa(r,x),M=Nm(r,x)}let F;this.getUniforms=function(){return F===void 0&&C(this),F};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(x,Em)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Am++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=R,this}let qm=0;class Zm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(r)===!1&&(s.add(r),r.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Km(e),t.set(e,n)),n}}class Km{constructor(e){this.id=qm++,this.code=e,this.usedTimes=0}}function $m(i,e,t,n,r,a,s){const o=new wc,c=new Zm,l=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,y,D,U,Z){const ee=U.fog,J=Z.geometry,Q=M.isMeshStandardMaterial?U.environment:null,oe=(M.isMeshStandardMaterial?t:e).get(M.envMap||Q),V=oe&&oe.mapping===Na?oe.image.height:null,ge=_[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const Se=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ke=Se!==void 0?Se.length:0;let Je=0;J.morphAttributes.position!==void 0&&(Je=1),J.morphAttributes.normal!==void 0&&(Je=2),J.morphAttributes.color!==void 0&&(Je=3);let yt,dt,ft,j;if(ge){const at=bn[ge];yt=at.vertexShader,dt=at.fragmentShader}else yt=M.vertexShader,dt=M.fragmentShader,c.update(M),ft=c.getVertexShaderID(M),j=c.getFragmentShaderID(M);const re=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),Ke=Z.isInstancedMesh===!0,k=Z.isBatchedMesh===!0,rt=!!M.map,ae=!!M.matcap,A=!!oe,gt=!!M.aoMap,He=!!M.lightMap,Ve=!!M.bumpMap,be=!!M.normalMap,pt=!!M.displacementMap,Ae=!!M.emissiveMap,$e=!!M.metalnessMap,wt=!!M.roughnessMap,bt=M.anisotropy>0,T=M.clearcoat>0,g=M.dispersion>0,B=M.iridescence>0,K=M.sheen>0,se=M.transmission>0,Y=bt&&!!M.anisotropyMap,Fe=T&&!!M.clearcoatMap,de=T&&!!M.clearcoatNormalMap,Ue=T&&!!M.clearcoatRoughnessMap,Le=B&&!!M.iridescenceMap,ue=B&&!!M.iridescenceThicknessMap,ye=K&&!!M.sheenColorMap,Xe=K&&!!M.sheenRoughnessMap,Ne=!!M.specularMap,me=!!M.specularColorMap,Ye=!!M.specularIntensityMap,L=se&&!!M.transmissionMap,le=se&&!!M.thicknessMap,fe=!!M.gradientMap,Ee=!!M.alphaMap,ce=M.alphaTest>0,te=!!M.alphaHash,Re=!!M.extensions;let je=ii;M.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(je=i.toneMapping);const ut={shaderID:ge,shaderType:M.type,shaderName:M.name,vertexShader:yt,fragmentShader:dt,defines:M.defines,customVertexShaderID:ft,customFragmentShaderID:j,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:k,batchingColor:k&&Z._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&Z.instanceColor!==null,instancingMorph:Ke&&Z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:re===null?i.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:er,alphaToCoverage:!!M.alphaToCoverage,map:rt,matcap:ae,envMap:A,envMapMode:A&&oe.mapping,envMapCubeUVHeight:V,aoMap:gt,lightMap:He,bumpMap:Ve,normalMap:be,displacementMap:d&&pt,emissiveMap:Ae,normalMapObjectSpace:be&&M.normalMapType===Vu,normalMapTangentSpace:be&&M.normalMapType===Hu,metalnessMap:$e,roughnessMap:wt,anisotropy:bt,anisotropyMap:Y,clearcoat:T,clearcoatMap:Fe,clearcoatNormalMap:de,clearcoatRoughnessMap:Ue,dispersion:g,iridescence:B,iridescenceMap:Le,iridescenceThicknessMap:ue,sheen:K,sheenColorMap:ye,sheenRoughnessMap:Xe,specularMap:Ne,specularColorMap:me,specularIntensityMap:Ye,transmission:se,transmissionMap:L,thicknessMap:le,gradientMap:fe,opaque:M.transparent===!1&&M.blending===Bn&&M.alphaToCoverage===!1,alphaMap:Ee,alphaTest:ce,alphaHash:te,combine:M.combine,mapUv:rt&&x(M.map.channel),aoMapUv:gt&&x(M.aoMap.channel),lightMapUv:He&&x(M.lightMap.channel),bumpMapUv:Ve&&x(M.bumpMap.channel),normalMapUv:be&&x(M.normalMap.channel),displacementMapUv:pt&&x(M.displacementMap.channel),emissiveMapUv:Ae&&x(M.emissiveMap.channel),metalnessMapUv:$e&&x(M.metalnessMap.channel),roughnessMapUv:wt&&x(M.roughnessMap.channel),anisotropyMapUv:Y&&x(M.anisotropyMap.channel),clearcoatMapUv:Fe&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:de&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ue&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:ye&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&x(M.sheenRoughnessMap.channel),specularMapUv:Ne&&x(M.specularMap.channel),specularColorMapUv:me&&x(M.specularColorMap.channel),specularIntensityMapUv:Ye&&x(M.specularIntensityMap.channel),transmissionMapUv:L&&x(M.transmissionMap.channel),thicknessMapUv:le&&x(M.thicknessMap.channel),alphaMapUv:Ee&&x(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(be||bt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!J.attributes.uv&&(rt||Ee),fog:!!ee,useFog:M.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ce,skinning:Z.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ke,morphTextureStride:Je,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:je,decodeVideoTexture:rt&&M.map.isVideoTexture===!0&&ht.getTransfer(M.map.colorSpace)===xt,decodeVideoTextureEmissive:Ae&&M.emissiveMap.isVideoTexture===!0&&ht.getTransfer(M.emissiveMap.colorSpace)===xt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Fn,flipSided:M.side===en,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Re&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Re&&M.extensions.multiDraw===!0||k)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ut.vertexUv1s=l.has(1),ut.vertexUv2s=l.has(2),ut.vertexUv3s=l.has(3),l.clear(),ut}function u(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)y.push(D),y.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(b(y,M),w(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function b(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function w(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function S(M){const y=_[M.type];let D;if(y){const U=bn[y];D=Ar.clone(U.uniforms)}else D=M.uniforms;return D}function P(M,y){let D;for(let U=0,Z=f.length;U<Z;U++){const ee=f[U];if(ee.cacheKey===y){D=ee,++D.usedTimes;break}}return D===void 0&&(D=new Ym(i,y,M,a),f.push(D)),D}function R(M){if(--M.usedTimes===0){const y=f.indexOf(M);f[y]=f[f.length-1],f.pop(),M.destroy()}}function C(M){c.remove(M)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:P,releaseProgram:R,releaseShaderCache:C,programs:f,dispose:F}}function jm(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function n(s){i.delete(s)}function r(s,o,c){i.get(s)[o]=c}function a(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:a}}function Jm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Kl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $l(){const i=[];let e=0;const t=[],n=[],r=[];function a(){e=0,t.length=0,n.length=0,r.length=0}function s(h,d,p,_,x,m){let u=i[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:x,group:m},i[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=p,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=x,u.group=m),e++,u}function o(h,d,p,_,x,m){const u=s(h,d,p,_,x,m);p.transmission>0?n.push(u):p.transparent===!0?r.push(u):t.push(u)}function c(h,d,p,_,x,m){const u=s(h,d,p,_,x,m);p.transmission>0?n.unshift(u):p.transparent===!0?r.unshift(u):t.unshift(u)}function l(h,d){t.length>1&&t.sort(h||Jm),n.length>1&&n.sort(d||Kl),r.length>1&&r.sort(d||Kl)}function f(){for(let h=e,d=i.length;h<d;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:a,push:o,unshift:c,finish:f,sort:l}}function Qm(){let i=new WeakMap;function e(n,r){const a=i.get(n);let s;return a===void 0?(s=new $l,i.set(n,[s])):r>=a.length?(s=new $l,a.push(s)):s=a[r],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function e0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ge};break;case"SpotLight":t={position:new I,direction:new I,color:new Ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ge,groundColor:new Ge};break;case"RectAreaLight":t={color:new Ge,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function t0(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let n0=0;function i0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function r0(i){const e=new e0,t=t0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const r=new I,a=new Pt,s=new Pt;function o(l){let f=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,_=0,x=0,m=0,u=0,b=0,w=0,S=0,P=0,R=0,C=0;l.sort(i0);for(let M=0,y=l.length;M<y;M++){const D=l[M],U=D.color,Z=D.intensity,ee=D.distance,J=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)f+=U.r*Z,h+=U.g*Z,d+=U.b*Z;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(D.sh.coefficients[Q],Z);C++}else if(D.isDirectionalLight){const Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const oe=D.shadow,V=t.get(D);V.shadowIntensity=oe.intensity,V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,n.directionalShadow[p]=V,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=D.shadow.matrix,b++}n.directional[p]=Q,p++}else if(D.isSpotLight){const Q=e.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(U).multiplyScalar(Z),Q.distance=ee,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,n.spot[x]=Q;const oe=D.shadow;if(D.map&&(n.spotLightMap[P]=D.map,P++,oe.updateMatrices(D),D.castShadow&&R++),n.spotLightMatrix[x]=oe.matrix,D.castShadow){const V=t.get(D);V.shadowIntensity=oe.intensity,V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,n.spotShadow[x]=V,n.spotShadowMap[x]=J,S++}x++}else if(D.isRectAreaLight){const Q=e.get(D);Q.color.copy(U).multiplyScalar(Z),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=Q,m++}else if(D.isPointLight){const Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){const oe=D.shadow,V=t.get(D);V.shadowIntensity=oe.intensity,V.shadowBias=oe.bias,V.shadowNormalBias=oe.normalBias,V.shadowRadius=oe.radius,V.shadowMapSize=oe.mapSize,V.shadowCameraNear=oe.camera.near,V.shadowCameraFar=oe.camera.far,n.pointShadow[_]=V,n.pointShadowMap[_]=J,n.pointShadowMatrix[_]=D.shadow.matrix,w++}n.point[_]=Q,_++}else if(D.isHemisphereLight){const Q=e.get(D);Q.skyColor.copy(D.color).multiplyScalar(Z),Q.groundColor.copy(D.groundColor).multiplyScalar(Z),n.hemi[u]=Q,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=d;const F=n.hash;(F.directionalLength!==p||F.pointLength!==_||F.spotLength!==x||F.rectAreaLength!==m||F.hemiLength!==u||F.numDirectionalShadows!==b||F.numPointShadows!==w||F.numSpotShadows!==S||F.numSpotMaps!==P||F.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=S+P-R,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=C,F.directionalLength=p,F.pointLength=_,F.spotLength=x,F.rectAreaLength=m,F.hemiLength=u,F.numDirectionalShadows=b,F.numPointShadows=w,F.numSpotShadows=S,F.numSpotMaps=P,F.numLightProbes=C,n.version=n0++)}function c(l,f){let h=0,d=0,p=0,_=0,x=0;const m=f.matrixWorldInverse;for(let u=0,b=l.length;u<b;u++){const w=l[u];if(w.isDirectionalLight){const S=n.directional[h];S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(w.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const S=n.rectArea[_];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),s.identity(),a.copy(w.matrixWorld),a.premultiply(m),s.extractRotation(a),S.halfWidth.set(w.width*.5,0,0),S.halfHeight.set(0,w.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),_++}else if(w.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(w.matrixWorld),S.position.applyMatrix4(m),d++}else if(w.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(w.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:o,setupView:c,state:n}}function jl(i){const e=new r0(i),t=[],n=[];function r(f){l.camera=f,t.length=0,n.length=0}function a(f){t.push(f)}function s(f){n.push(f)}function o(){e.setup(t)}function c(f){e.setupView(t,f)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:o,setupLightsView:c,pushLight:a,pushShadow:s}}function a0(i){let e=new WeakMap;function t(r,a=0){const s=e.get(r);let o;return s===void 0?(o=new jl(i),e.set(r,[o])):a>=s.length?(o=new jl(i),s.push(o)):o=s[a],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const s0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o0=`uniform sampler2D shadow_pass;
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
}`;function l0(i,e,t){let n=new Ic;const r=new Ze,a=new Ze,s=new It,o=new Dh({depthPacking:Gu}),c=new Ih,l={},f=t.maxTextureSize,h={[si]:en,[en]:si,[Fn]:Fn},d=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:s0,fragmentShader:o0}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new qt;_.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new ln(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let u=this.type;this.render=function(R,C,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),U=i.state;U.setBlending(kn),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const Z=u!==Nn&&this.type===Nn,ee=u===Nn&&this.type!==Nn;for(let J=0,Q=R.length;J<Q;J++){const oe=R[J],V=oe.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",oe,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const ge=V.getFrameExtents();if(r.multiply(ge),a.copy(V.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(a.x=Math.floor(f/ge.x),r.x=a.x*ge.x,V.mapSize.x=a.x),r.y>f&&(a.y=Math.floor(f/ge.y),r.y=a.y*ge.y,V.mapSize.y=a.y)),V.map===null||Z===!0||ee===!0){const ke=this.type!==Nn?{minFilter:Mn,magFilter:Mn}:{};V.map!==null&&V.map.dispose(),V.map=new Sn(r.x,r.y,ke),V.map.texture.name=oe.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const Se=V.getViewportCount();for(let ke=0;ke<Se;ke++){const Je=V.getViewport(ke);s.set(a.x*Je.x,a.y*Je.y,a.x*Je.z,a.y*Je.w),U.viewport(s),V.updateMatrices(oe,ke),n=V.getFrustum(),S(C,F,V.camera,oe,this.type)}V.isPointLightShadow!==!0&&this.type===Nn&&b(V,F),V.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,D)};function b(R,C){const F=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Sn(r.x,r.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(C,null,F,d,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(C,null,F,p,x,null)}function w(R,C,F,M){let y=null;const D=F.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(D!==void 0)y=D;else if(y=F.isPointLight===!0?c:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const U=y.uuid,Z=C.uuid;let ee=l[U];ee===void 0&&(ee={},l[U]=ee);let J=ee[Z];J===void 0&&(J=y.clone(),ee[Z]=J,C.addEventListener("dispose",P)),y=J}if(y.visible=C.visible,y.wireframe=C.wireframe,M===Nn?y.side=C.shadowSide!==null?C.shadowSide:C.side:y.side=C.shadowSide!==null?C.shadowSide:h[C.side],y.alphaMap=C.alphaMap,y.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,y.map=C.map,y.clipShadows=C.clipShadows,y.clippingPlanes=C.clippingPlanes,y.clipIntersection=C.clipIntersection,y.displacementMap=C.displacementMap,y.displacementScale=C.displacementScale,y.displacementBias=C.displacementBias,y.wireframeLinewidth=C.wireframeLinewidth,y.linewidth=C.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const U=i.properties.get(y);U.light=F}return y}function S(R,C,F,M,y){if(R.visible===!1)return;if(R.layers.test(C.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&y===Nn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,R.matrixWorld);const Z=e.update(R),ee=R.material;if(Array.isArray(ee)){const J=Z.groups;for(let Q=0,oe=J.length;Q<oe;Q++){const V=J[Q],ge=ee[V.materialIndex];if(ge&&ge.visible){const Se=w(R,ge,M,y);R.onBeforeShadow(i,R,C,F,Z,Se,V),i.renderBufferDirect(F,null,Z,Se,R,V),R.onAfterShadow(i,R,C,F,Z,Se,V)}}}else if(ee.visible){const J=w(R,ee,M,y);R.onBeforeShadow(i,R,C,F,Z,J,null),i.renderBufferDirect(F,null,Z,J,R,null),R.onAfterShadow(i,R,C,F,Z,J,null)}}const U=R.children;for(let Z=0,ee=U.length;Z<ee;Z++)S(U[Z],C,F,M,y)}function P(R){R.target.removeEventListener("dispose",P);for(const F in l){const M=l[F],y=R.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const c0={[Rs]:Ps,[Ls]:Us,[Ds]:Ns,[ji]:Is,[Ps]:Rs,[Us]:Ls,[Ns]:Ds,[Is]:ji};function u0(i,e){function t(){let L=!1;const le=new It;let fe=null;const Ee=new It(0,0,0,0);return{setMask:function(ce){fe!==ce&&!L&&(i.colorMask(ce,ce,ce,ce),fe=ce)},setLocked:function(ce){L=ce},setClear:function(ce,te,Re,je,ut){ut===!0&&(ce*=je,te*=je,Re*=je),le.set(ce,te,Re,je),Ee.equals(le)===!1&&(i.clearColor(ce,te,Re,je),Ee.copy(le))},reset:function(){L=!1,fe=null,Ee.set(-1,0,0,0)}}}function n(){let L=!1,le=!1,fe=null,Ee=null,ce=null;return{setReversed:function(te){if(le!==te){const Re=e.get("EXT_clip_control");te?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),le=te;const je=ce;ce=null,this.setClear(je)}},getReversed:function(){return le},setTest:function(te){te?re(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(te){fe!==te&&!L&&(i.depthMask(te),fe=te)},setFunc:function(te){if(le&&(te=c0[te]),Ee!==te){switch(te){case Rs:i.depthFunc(i.NEVER);break;case Ps:i.depthFunc(i.ALWAYS);break;case Ls:i.depthFunc(i.LESS);break;case ji:i.depthFunc(i.LEQUAL);break;case Ds:i.depthFunc(i.EQUAL);break;case Is:i.depthFunc(i.GEQUAL);break;case Us:i.depthFunc(i.GREATER);break;case Ns:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=te}},setLocked:function(te){L=te},setClear:function(te){ce!==te&&(le&&(te=1-te),i.clearDepth(te),ce=te)},reset:function(){L=!1,fe=null,Ee=null,ce=null,le=!1}}}function r(){let L=!1,le=null,fe=null,Ee=null,ce=null,te=null,Re=null,je=null,ut=null;return{setTest:function(at){L||(at?re(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(at){le!==at&&!L&&(i.stencilMask(at),le=at)},setFunc:function(at,hn,Ft){(fe!==at||Ee!==hn||ce!==Ft)&&(i.stencilFunc(at,hn,Ft),fe=at,Ee=hn,ce=Ft)},setOp:function(at,hn,Ft){(te!==at||Re!==hn||je!==Ft)&&(i.stencilOp(at,hn,Ft),te=at,Re=hn,je=Ft)},setLocked:function(at){L=at},setClear:function(at){ut!==at&&(i.clearStencil(at),ut=at)},reset:function(){L=!1,le=null,fe=null,Ee=null,ce=null,te=null,Re=null,je=null,ut=null}}}const a=new t,s=new n,o=new r,c=new WeakMap,l=new WeakMap;let f={},h={},d=new WeakMap,p=[],_=null,x=!1,m=null,u=null,b=null,w=null,S=null,P=null,R=null,C=new Ge(0,0,0),F=0,M=!1,y=null,D=null,U=null,Z=null,ee=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,oe=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(V)[1]),Q=oe>=1):V.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),Q=oe>=2);let ge=null,Se={};const ke=i.getParameter(i.SCISSOR_BOX),Je=i.getParameter(i.VIEWPORT),yt=new It().fromArray(ke),dt=new It().fromArray(Je);function ft(L,le,fe,Ee){const ce=new Uint8Array(4),te=i.createTexture();i.bindTexture(L,te),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<fe;Re++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(le+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return te}const j={};j[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),a.setClear(0,0,0,1),s.setClear(1),o.setClear(0),re(i.DEPTH_TEST),s.setFunc(ji),Ve(!1),be($o),re(i.CULL_FACE),gt(kn);function re(L){f[L]!==!0&&(i.enable(L),f[L]=!0)}function Ce(L){f[L]!==!1&&(i.disable(L),f[L]=!1)}function Ke(L,le){return h[L]!==le?(i.bindFramebuffer(L,le),h[L]=le,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=le),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=le),!0):!1}function k(L,le){let fe=p,Ee=!1;if(L){fe=d.get(le),fe===void 0&&(fe=[],d.set(le,fe));const ce=L.textures;if(fe.length!==ce.length||fe[0]!==i.COLOR_ATTACHMENT0){for(let te=0,Re=ce.length;te<Re;te++)fe[te]=i.COLOR_ATTACHMENT0+te;fe.length=ce.length,Ee=!0}}else fe[0]!==i.BACK&&(fe[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(fe)}function rt(L){return _!==L?(i.useProgram(L),_=L,!0):!1}const ae={[vi]:i.FUNC_ADD,[yu]:i.FUNC_SUBTRACT,[Mu]:i.FUNC_REVERSE_SUBTRACT};ae[Su]=i.MIN,ae[Tu]=i.MAX;const A={[bu]:i.ZERO,[wu]:i.ONE,[Eu]:i.SRC_COLOR,[As]:i.SRC_ALPHA,[Du]:i.SRC_ALPHA_SATURATE,[Pu]:i.DST_COLOR,[Cu]:i.DST_ALPHA,[Au]:i.ONE_MINUS_SRC_COLOR,[Cs]:i.ONE_MINUS_SRC_ALPHA,[Lu]:i.ONE_MINUS_DST_COLOR,[Ru]:i.ONE_MINUS_DST_ALPHA,[Iu]:i.CONSTANT_COLOR,[Uu]:i.ONE_MINUS_CONSTANT_COLOR,[Nu]:i.CONSTANT_ALPHA,[Fu]:i.ONE_MINUS_CONSTANT_ALPHA};function gt(L,le,fe,Ee,ce,te,Re,je,ut,at){if(L===kn){x===!0&&(Ce(i.BLEND),x=!1);return}if(x===!1&&(re(i.BLEND),x=!0),L!==xu){if(L!==m||at!==M){if((u!==vi||S!==vi)&&(i.blendEquation(i.FUNC_ADD),u=vi,S=vi),at)switch(L){case Bn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rt:i.blendFunc(i.ONE,i.ONE);break;case jo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Bn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Rt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}b=null,w=null,P=null,R=null,C.set(0,0,0),F=0,m=L,M=at}return}ce=ce||le,te=te||fe,Re=Re||Ee,(le!==u||ce!==S)&&(i.blendEquationSeparate(ae[le],ae[ce]),u=le,S=ce),(fe!==b||Ee!==w||te!==P||Re!==R)&&(i.blendFuncSeparate(A[fe],A[Ee],A[te],A[Re]),b=fe,w=Ee,P=te,R=Re),(je.equals(C)===!1||ut!==F)&&(i.blendColor(je.r,je.g,je.b,ut),C.copy(je),F=ut),m=L,M=!1}function He(L,le){L.side===Fn?Ce(i.CULL_FACE):re(i.CULL_FACE);let fe=L.side===en;le&&(fe=!fe),Ve(fe),L.blending===Bn&&L.transparent===!1?gt(kn):gt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),s.setFunc(L.depthFunc),s.setTest(L.depthTest),s.setMask(L.depthWrite),a.setMask(L.colorWrite);const Ee=L.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ae(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?re(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function be(L){L!==gu?(re(i.CULL_FACE),L!==D&&(L===$o?i.cullFace(i.BACK):L===_u?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),D=L}function pt(L){L!==U&&(Q&&i.lineWidth(L),U=L)}function Ae(L,le,fe){L?(re(i.POLYGON_OFFSET_FILL),(Z!==le||ee!==fe)&&(i.polygonOffset(le,fe),Z=le,ee=fe)):Ce(i.POLYGON_OFFSET_FILL)}function $e(L){L?re(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function wt(L){L===void 0&&(L=i.TEXTURE0+J-1),ge!==L&&(i.activeTexture(L),ge=L)}function bt(L,le,fe){fe===void 0&&(ge===null?fe=i.TEXTURE0+J-1:fe=ge);let Ee=Se[fe];Ee===void 0&&(Ee={type:void 0,texture:void 0},Se[fe]=Ee),(Ee.type!==L||Ee.texture!==le)&&(ge!==fe&&(i.activeTexture(fe),ge=fe),i.bindTexture(L,le||j[L]),Ee.type=L,Ee.texture=le)}function T(){const L=Se[ge];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function B(){try{i.compressedTexImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.texSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{i.texSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Fe(){try{i.compressedTexSubImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{i.texStorage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ue(){try{i.texStorage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Le(){try{i.texImage2D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{i.texImage3D(...arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ye(L){yt.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),yt.copy(L))}function Xe(L){dt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),dt.copy(L))}function Ne(L,le){let fe=l.get(le);fe===void 0&&(fe=new WeakMap,l.set(le,fe));let Ee=fe.get(L);Ee===void 0&&(Ee=i.getUniformBlockIndex(le,L.name),fe.set(L,Ee))}function me(L,le){const Ee=l.get(le).get(L);c.get(le)!==Ee&&(i.uniformBlockBinding(le,Ee,L.__bindingPointIndex),c.set(le,Ee))}function Ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ge=null,Se={},h={},d=new WeakMap,p=[],_=null,x=!1,m=null,u=null,b=null,w=null,S=null,P=null,R=null,C=new Ge(0,0,0),F=0,M=!1,y=null,D=null,U=null,Z=null,ee=null,yt.set(0,0,i.canvas.width,i.canvas.height),dt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),s.reset(),o.reset()}return{buffers:{color:a,depth:s,stencil:o},enable:re,disable:Ce,bindFramebuffer:Ke,drawBuffers:k,useProgram:rt,setBlending:gt,setMaterial:He,setFlipSided:Ve,setCullFace:be,setLineWidth:pt,setPolygonOffset:Ae,setScissorTest:$e,activeTexture:wt,bindTexture:bt,unbindTexture:T,compressedTexImage2D:g,compressedTexImage3D:B,texImage2D:Le,texImage3D:ue,updateUBOMapping:Ne,uniformBlockBinding:me,texStorage2D:de,texStorage3D:Ue,texSubImage2D:K,texSubImage3D:se,compressedTexSubImage2D:Y,compressedTexSubImage3D:Fe,scissor:ye,viewport:Xe,reset:Ye}}function h0(i,e,t,n,r,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ze,f=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return p?new OffscreenCanvas(T,g):Pa("canvas")}function x(T,g,B){let K=1;const se=bt(T);if((se.width>B||se.height>B)&&(K=B/Math.max(se.width,se.height)),K<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Y=Math.floor(K*se.width),Fe=Math.floor(K*se.height);h===void 0&&(h=_(Y,Fe));const de=g?_(Y,Fe):h;return de.width=Y,de.height=Fe,de.getContext("2d").drawImage(T,0,0,Y,Fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+Y+"x"+Fe+")."),de}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function b(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(T,g,B,K,se=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Y=g;if(g===i.RED&&(B===i.FLOAT&&(Y=i.R32F),B===i.HALF_FLOAT&&(Y=i.R16F),B===i.UNSIGNED_BYTE&&(Y=i.R8)),g===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.R8UI),B===i.UNSIGNED_SHORT&&(Y=i.R16UI),B===i.UNSIGNED_INT&&(Y=i.R32UI),B===i.BYTE&&(Y=i.R8I),B===i.SHORT&&(Y=i.R16I),B===i.INT&&(Y=i.R32I)),g===i.RG&&(B===i.FLOAT&&(Y=i.RG32F),B===i.HALF_FLOAT&&(Y=i.RG16F),B===i.UNSIGNED_BYTE&&(Y=i.RG8)),g===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RG8UI),B===i.UNSIGNED_SHORT&&(Y=i.RG16UI),B===i.UNSIGNED_INT&&(Y=i.RG32UI),B===i.BYTE&&(Y=i.RG8I),B===i.SHORT&&(Y=i.RG16I),B===i.INT&&(Y=i.RG32I)),g===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),B===i.UNSIGNED_INT&&(Y=i.RGB32UI),B===i.BYTE&&(Y=i.RGB8I),B===i.SHORT&&(Y=i.RGB16I),B===i.INT&&(Y=i.RGB32I)),g===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),B===i.UNSIGNED_INT&&(Y=i.RGBA32UI),B===i.BYTE&&(Y=i.RGBA8I),B===i.SHORT&&(Y=i.RGBA16I),B===i.INT&&(Y=i.RGBA32I)),g===i.RGB&&(B===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Y=i.R11F_G11F_B10F)),g===i.RGBA){const Fe=se?Ca:ht.getTransfer(K);B===i.FLOAT&&(Y=i.RGBA32F),B===i.HALF_FLOAT&&(Y=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Y=Fe===xt?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function S(T,g){let B;return T?g===null||g===Si||g===Tr?B=i.DEPTH24_STENCIL8:g===On?B=i.DEPTH32F_STENCIL8:g===Sr&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Si||g===Tr?B=i.DEPTH_COMPONENT24:g===On?B=i.DEPTH_COMPONENT32F:g===Sr&&(B=i.DEPTH_COMPONENT16),B}function P(T,g){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Mn&&T.minFilter!==En?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function R(T){const g=T.target;g.removeEventListener("dispose",R),F(g),g.isVideoTexture&&f.delete(g)}function C(T){const g=T.target;g.removeEventListener("dispose",C),y(g)}function F(T){const g=n.get(T);if(g.__webglInit===void 0)return;const B=T.source,K=d.get(B);if(K){const se=K[g.__cacheKey];se.usedTimes--,se.usedTimes===0&&M(T),Object.keys(K).length===0&&d.delete(B)}n.remove(T)}function M(T){const g=n.get(T);i.deleteTexture(g.__webglTexture);const B=T.source,K=d.get(B);delete K[g.__cacheKey],s.memory.textures--}function y(T){const g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(g.__webglFramebuffer[K]))for(let se=0;se<g.__webglFramebuffer[K].length;se++)i.deleteFramebuffer(g.__webglFramebuffer[K][se]);else i.deleteFramebuffer(g.__webglFramebuffer[K]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[K])}else{if(Array.isArray(g.__webglFramebuffer))for(let K=0;K<g.__webglFramebuffer.length;K++)i.deleteFramebuffer(g.__webglFramebuffer[K]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let K=0;K<g.__webglColorRenderbuffer.length;K++)g.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[K]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const B=T.textures;for(let K=0,se=B.length;K<se;K++){const Y=n.get(B[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),s.memory.textures--),n.remove(B[K])}n.remove(T)}let D=0;function U(){D=0}function Z(){const T=D;return T>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+r.maxTextures),D+=1,T}function ee(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function J(T,g){const B=n.get(T);if(T.isVideoTexture&&$e(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){const K=T.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,T,g);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+g)}function Q(T,g){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){j(B,T,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+g)}function oe(T,g){const B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){j(B,T,g);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+g)}function V(T,g){const B=n.get(T);if(T.version>0&&B.__version!==T.version){re(B,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+g)}const ge={[Aa]:i.REPEAT,[ni]:i.CLAMP_TO_EDGE,[ks]:i.MIRRORED_REPEAT},Se={[Mn]:i.NEAREST,[Bu]:i.NEAREST_MIPMAP_NEAREST,[Vr]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[Ya]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},ke={[Wu]:i.NEVER,[$u]:i.ALWAYS,[Xu]:i.LESS,[Sc]:i.LEQUAL,[Yu]:i.EQUAL,[Ku]:i.GEQUAL,[qu]:i.GREATER,[Zu]:i.NOTEQUAL};function Je(T,g){if(g.type===On&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===En||g.magFilter===Ya||g.magFilter===Vr||g.magFilter===yi||g.minFilter===En||g.minFilter===Ya||g.minFilter===Vr||g.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ge[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ge[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ge[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,Se[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,Se[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ke[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Mn||g.minFilter!==Vr&&g.minFilter!==yi||g.type===On&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function yt(T,g){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",R));const K=g.source;let se=d.get(K);se===void 0&&(se={},d.set(K,se));const Y=ee(g);if(Y!==T.__cacheKey){se[Y]===void 0&&(se[Y]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,B=!0),se[Y].usedTimes++;const Fe=se[T.__cacheKey];Fe!==void 0&&(se[T.__cacheKey].usedTimes--,Fe.usedTimes===0&&M(g)),T.__cacheKey=Y,T.__webglTexture=se[Y].texture}return B}function dt(T,g,B){return Math.floor(Math.floor(T/B)/g)}function ft(T,g,B,K){const Y=T.updateRanges;if(Y.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,B,K,g.data);else{Y.sort((ue,ye)=>ue.start-ye.start);let Fe=0;for(let ue=1;ue<Y.length;ue++){const ye=Y[Fe],Xe=Y[ue],Ne=ye.start+ye.count,me=dt(Xe.start,g.width,4),Ye=dt(ye.start,g.width,4);Xe.start<=Ne+1&&me===Ye&&dt(Xe.start+Xe.count-1,g.width,4)===me?ye.count=Math.max(ye.count,Xe.start+Xe.count-ye.start):(++Fe,Y[Fe]=Xe)}Y.length=Fe+1;const de=i.getParameter(i.UNPACK_ROW_LENGTH),Ue=i.getParameter(i.UNPACK_SKIP_PIXELS),Le=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ue=0,ye=Y.length;ue<ye;ue++){const Xe=Y[ue],Ne=Math.floor(Xe.start/4),me=Math.ceil(Xe.count/4),Ye=Ne%g.width,L=Math.floor(Ne/g.width),le=me,fe=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ye),i.pixelStorei(i.UNPACK_SKIP_ROWS,L),t.texSubImage2D(i.TEXTURE_2D,0,Ye,L,le,fe,B,K,g.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,de),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),i.pixelStorei(i.UNPACK_SKIP_ROWS,Le)}}function j(T,g,B){let K=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(K=i.TEXTURE_3D);const se=yt(T,g),Y=g.source;t.bindTexture(K,T.__webglTexture,i.TEXTURE0+B);const Fe=n.get(Y);if(Y.version!==Fe.__version||se===!0){t.activeTexture(i.TEXTURE0+B);const de=ht.getPrimaries(ht.workingColorSpace),Ue=g.colorSpace===ti?null:ht.getPrimaries(g.colorSpace),Le=g.colorSpace===ti||de===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let ue=x(g.image,!1,r.maxTextureSize);ue=wt(g,ue);const ye=a.convert(g.format,g.colorSpace),Xe=a.convert(g.type);let Ne=w(g.internalFormat,ye,Xe,g.colorSpace,g.isVideoTexture);Je(K,g);let me;const Ye=g.mipmaps,L=g.isVideoTexture!==!0,le=Fe.__version===void 0||se===!0,fe=Y.dataReady,Ee=P(g,ue);if(g.isDepthTexture)Ne=S(g.format===wr,g.type),le&&(L?t.texStorage2D(i.TEXTURE_2D,1,Ne,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,Ne,ue.width,ue.height,0,ye,Xe,null));else if(g.isDataTexture)if(Ye.length>0){L&&le&&t.texStorage2D(i.TEXTURE_2D,Ee,Ne,Ye[0].width,Ye[0].height);for(let ce=0,te=Ye.length;ce<te;ce++)me=Ye[ce],L?fe&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,me.width,me.height,ye,Xe,me.data):t.texImage2D(i.TEXTURE_2D,ce,Ne,me.width,me.height,0,ye,Xe,me.data);g.generateMipmaps=!1}else L?(le&&t.texStorage2D(i.TEXTURE_2D,Ee,Ne,ue.width,ue.height),fe&&ft(g,ue,ye,Xe)):t.texImage2D(i.TEXTURE_2D,0,Ne,ue.width,ue.height,0,ye,Xe,ue.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){L&&le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ne,Ye[0].width,Ye[0].height,ue.depth);for(let ce=0,te=Ye.length;ce<te;ce++)if(me=Ye[ce],g.format!==xn)if(ye!==null)if(L){if(fe)if(g.layerUpdates.size>0){const Re=Al(me.width,me.height,g.format,g.type);for(const je of g.layerUpdates){const ut=me.data.subarray(je*Re/me.data.BYTES_PER_ELEMENT,(je+1)*Re/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,je,me.width,me.height,1,ye,ut)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,me.width,me.height,ue.depth,ye,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,Ne,me.width,me.height,ue.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?fe&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,me.width,me.height,ue.depth,ye,Xe,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,Ne,me.width,me.height,ue.depth,0,ye,Xe,me.data)}else{L&&le&&t.texStorage2D(i.TEXTURE_2D,Ee,Ne,Ye[0].width,Ye[0].height);for(let ce=0,te=Ye.length;ce<te;ce++)me=Ye[ce],g.format!==xn?ye!==null?L?fe&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,me.width,me.height,ye,me.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,Ne,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?fe&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,me.width,me.height,ye,Xe,me.data):t.texImage2D(i.TEXTURE_2D,ce,Ne,me.width,me.height,0,ye,Xe,me.data)}else if(g.isDataArrayTexture)if(L){if(le&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ee,Ne,ue.width,ue.height,ue.depth),fe)if(g.layerUpdates.size>0){const ce=Al(ue.width,ue.height,g.format,g.type);for(const te of g.layerUpdates){const Re=ue.data.subarray(te*ce/ue.data.BYTES_PER_ELEMENT,(te+1)*ce/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,te,ue.width,ue.height,1,ye,Xe,Re)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,ye,Xe,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,ue.width,ue.height,ue.depth,0,ye,Xe,ue.data);else if(g.isData3DTexture)L?(le&&t.texStorage3D(i.TEXTURE_3D,Ee,Ne,ue.width,ue.height,ue.depth),fe&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,ye,Xe,ue.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,ue.width,ue.height,ue.depth,0,ye,Xe,ue.data);else if(g.isFramebufferTexture){if(le)if(L)t.texStorage2D(i.TEXTURE_2D,Ee,Ne,ue.width,ue.height);else{let ce=ue.width,te=ue.height;for(let Re=0;Re<Ee;Re++)t.texImage2D(i.TEXTURE_2D,Re,Ne,ce,te,0,ye,Xe,null),ce>>=1,te>>=1}}else if(Ye.length>0){if(L&&le){const ce=bt(Ye[0]);t.texStorage2D(i.TEXTURE_2D,Ee,Ne,ce.width,ce.height)}for(let ce=0,te=Ye.length;ce<te;ce++)me=Ye[ce],L?fe&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,ye,Xe,me):t.texImage2D(i.TEXTURE_2D,ce,Ne,ye,Xe,me);g.generateMipmaps=!1}else if(L){if(le){const ce=bt(ue);t.texStorage2D(i.TEXTURE_2D,Ee,Ne,ce.width,ce.height)}fe&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye,Xe,ue)}else t.texImage2D(i.TEXTURE_2D,0,Ne,ye,Xe,ue);m(g)&&u(K),Fe.__version=Y.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function re(T,g,B){if(g.image.length!==6)return;const K=yt(T,g),se=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const Y=n.get(se);if(se.version!==Y.__version||K===!0){t.activeTexture(i.TEXTURE0+B);const Fe=ht.getPrimaries(ht.workingColorSpace),de=g.colorSpace===ti?null:ht.getPrimaries(g.colorSpace),Ue=g.colorSpace===ti||Fe===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);const Le=g.isCompressedTexture||g.image[0].isCompressedTexture,ue=g.image[0]&&g.image[0].isDataTexture,ye=[];for(let te=0;te<6;te++)!Le&&!ue?ye[te]=x(g.image[te],!0,r.maxCubemapSize):ye[te]=ue?g.image[te].image:g.image[te],ye[te]=wt(g,ye[te]);const Xe=ye[0],Ne=a.convert(g.format,g.colorSpace),me=a.convert(g.type),Ye=w(g.internalFormat,Ne,me,g.colorSpace),L=g.isVideoTexture!==!0,le=Y.__version===void 0||K===!0,fe=se.dataReady;let Ee=P(g,Xe);Je(i.TEXTURE_CUBE_MAP,g);let ce;if(Le){L&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,Ye,Xe.width,Xe.height);for(let te=0;te<6;te++){ce=ye[te].mipmaps;for(let Re=0;Re<ce.length;Re++){const je=ce[Re];g.format!==xn?Ne!==null?L?fe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,0,0,je.width,je.height,Ne,je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,Ye,je.width,je.height,0,je.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,0,0,je.width,je.height,Ne,me,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re,Ye,je.width,je.height,0,Ne,me,je.data)}}}else{if(ce=g.mipmaps,L&&le){ce.length>0&&Ee++;const te=bt(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,Ye,te.width,te.height)}for(let te=0;te<6;te++)if(ue){L?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,ye[te].width,ye[te].height,Ne,me,ye[te].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ye,ye[te].width,ye[te].height,0,Ne,me,ye[te].data);for(let Re=0;Re<ce.length;Re++){const ut=ce[Re].image[te].image;L?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,0,0,ut.width,ut.height,Ne,me,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,Ye,ut.width,ut.height,0,Ne,me,ut.data)}}else{L?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,0,0,Ne,me,ye[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,0,Ye,Ne,me,ye[te]);for(let Re=0;Re<ce.length;Re++){const je=ce[Re];L?fe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,0,0,Ne,me,je.image[te]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+te,Re+1,Ye,Ne,me,je.image[te])}}}m(g)&&u(i.TEXTURE_CUBE_MAP),Y.__version=se.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function Ce(T,g,B,K,se,Y){const Fe=a.convert(B.format,B.colorSpace),de=a.convert(B.type),Ue=w(B.internalFormat,Fe,de,B.colorSpace),Le=n.get(g),ue=n.get(B);if(ue.__renderTarget=g,!Le.__hasExternalTextures){const ye=Math.max(1,g.width>>Y),Xe=Math.max(1,g.height>>Y);se===i.TEXTURE_3D||se===i.TEXTURE_2D_ARRAY?t.texImage3D(se,Y,Ue,ye,Xe,g.depth,0,Fe,de,null):t.texImage2D(se,Y,Ue,ye,Xe,0,Fe,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Ae(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,se,ue.__webglTexture,0,pt(g)):(se===i.TEXTURE_2D||se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,se,ue.__webglTexture,Y),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ke(T,g,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){const K=g.depthTexture,se=K&&K.isDepthTexture?K.type:null,Y=S(g.stencilBuffer,se),Fe=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=pt(g);Ae(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,Y,g.width,g.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,Y,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Y,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Fe,i.RENDERBUFFER,T)}else{const K=g.textures;for(let se=0;se<K.length;se++){const Y=K[se],Fe=a.convert(Y.format,Y.colorSpace),de=a.convert(Y.type),Ue=w(Y.internalFormat,Fe,de,Y.colorSpace),Le=pt(g);B&&Ae(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Ue,g.width,g.height):Ae(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Le,Ue,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Ue,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function k(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=n.get(g.depthTexture);K.__renderTarget=g,(!K.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),J(g.depthTexture,0);const se=K.__webglTexture,Y=pt(g);if(g.depthTexture.format===br)Ae(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,se,0);else if(g.depthTexture.format===wr)Ae(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,se,0);else throw new Error("Unknown depthTexture format")}function rt(T){const g=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const K=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),K){const se=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,K.removeEventListener("dispose",se)};K.addEventListener("dispose",se),g.__depthDisposeCallback=se}g.__boundDepthTexture=K}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");const K=T.texture.mipmaps;K&&K.length>0?k(g.__webglFramebuffer[0],T):k(g.__webglFramebuffer,T)}else if(B){g.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[K]),g.__webglDepthbuffer[K]===void 0)g.__webglDepthbuffer[K]=i.createRenderbuffer(),Ke(g.__webglDepthbuffer[K],T,!1);else{const se=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,Y)}}else{const K=T.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),Ke(g.__webglDepthbuffer,T,!1);else{const se=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,se,i.RENDERBUFFER,Y)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(T,g,B){const K=n.get(T);g!==void 0&&Ce(K.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&rt(T)}function A(T){const g=T.texture,B=n.get(T),K=n.get(g);T.addEventListener("dispose",C);const se=T.textures,Y=T.isWebGLCubeRenderTarget===!0,Fe=se.length>1;if(Fe||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=g.version,s.memory.textures++),Y){B.__webglFramebuffer=[];for(let de=0;de<6;de++)if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer[de]=[];for(let Ue=0;Ue<g.mipmaps.length;Ue++)B.__webglFramebuffer[de][Ue]=i.createFramebuffer()}else B.__webglFramebuffer[de]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){B.__webglFramebuffer=[];for(let de=0;de<g.mipmaps.length;de++)B.__webglFramebuffer[de]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Fe)for(let de=0,Ue=se.length;de<Ue;de++){const Le=n.get(se[de]);Le.__webglTexture===void 0&&(Le.__webglTexture=i.createTexture(),s.memory.textures++)}if(T.samples>0&&Ae(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let de=0;de<se.length;de++){const Ue=se[de];B.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[de]);const Le=a.convert(Ue.format,Ue.colorSpace),ue=a.convert(Ue.type),ye=w(Ue.internalFormat,Le,ue,Ue.colorSpace,T.isXRRenderTarget===!0),Xe=pt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,ye,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,B.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ke(B.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Je(i.TEXTURE_CUBE_MAP,g);for(let de=0;de<6;de++)if(g.mipmaps&&g.mipmaps.length>0)for(let Ue=0;Ue<g.mipmaps.length;Ue++)Ce(B.__webglFramebuffer[de][Ue],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ue);else Ce(B.__webglFramebuffer[de],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(g)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Fe){for(let de=0,Ue=se.length;de<Ue;de++){const Le=se[de],ue=n.get(Le);let ye=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ye=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,ue.__webglTexture),Je(ye,Le),Ce(B.__webglFramebuffer,T,Le,i.COLOR_ATTACHMENT0+de,ye,0),m(Le)&&u(ye)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(de=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,K.__webglTexture),Je(de,g),g.mipmaps&&g.mipmaps.length>0)for(let Ue=0;Ue<g.mipmaps.length;Ue++)Ce(B.__webglFramebuffer[Ue],T,g,i.COLOR_ATTACHMENT0,de,Ue);else Ce(B.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,de,0);m(g)&&u(de),t.unbindTexture()}T.depthBuffer&&rt(T)}function gt(T){const g=T.textures;for(let B=0,K=g.length;B<K;B++){const se=g[B];if(m(se)){const Y=b(T),Fe=n.get(se).__webglTexture;t.bindTexture(Y,Fe),u(Y),t.unbindTexture()}}}const He=[],Ve=[];function be(T){if(T.samples>0){if(Ae(T)===!1){const g=T.textures,B=T.width,K=T.height;let se=i.COLOR_BUFFER_BIT;const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Fe=n.get(T),de=g.length>1;if(de)for(let Le=0;Le<g.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer);const Ue=T.texture.mipmaps;Ue&&Ue.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglFramebuffer);for(let Le=0;Le<g.length;Le++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(se|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(se|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Le]);const ue=n.get(g[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,B,K,0,0,B,K,se,i.NEAREST),c===!0&&(He.length=0,Ve.length=0,He.push(i.COLOR_ATTACHMENT0+Le),T.depthBuffer&&T.resolveDepthBuffer===!1&&(He.push(Y),Ve.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ve)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,He))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let Le=0;Le<g.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Fe.__webglColorRenderbuffer[Le]);const ue=n.get(g[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Fe.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function pt(T){return Math.min(r.maxSamples,T.samples)}function Ae(T){const g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function $e(T){const g=s.render.frame;f.get(T)!==g&&(f.set(T,g),T.update())}function wt(T,g){const B=T.colorSpace,K=T.format,se=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==er&&B!==ti&&(ht.getTransfer(B)===xt?(K!==xn||se!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),g}function bt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=Z,this.resetTextureUnits=U,this.setTexture2D=J,this.setTexture2DArray=Q,this.setTexture3D=oe,this.setTextureCube=V,this.rebindTextures=ae,this.setupRenderTarget=A,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=be,this.setupDepthRenderbuffer=rt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Ae}function f0(i,e){function t(n,r=ti){let a;const s=ht.getTransfer(r);if(n===Hn)return i.UNSIGNED_BYTE;if(n===Co)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ro)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===_c)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===pc)return i.BYTE;if(n===mc)return i.SHORT;if(n===Sr)return i.UNSIGNED_SHORT;if(n===Ao)return i.INT;if(n===Si)return i.UNSIGNED_INT;if(n===On)return i.FLOAT;if(n===zn)return i.HALF_FLOAT;if(n===vc)return i.ALPHA;if(n===xc)return i.RGB;if(n===xn)return i.RGBA;if(n===br)return i.DEPTH_COMPONENT;if(n===wr)return i.DEPTH_STENCIL;if(n===yc)return i.RED;if(n===Po)return i.RED_INTEGER;if(n===Mc)return i.RG;if(n===Lo)return i.RG_INTEGER;if(n===Do)return i.RGBA_INTEGER;if(n===Ma||n===Sa||n===Ta||n===ba)if(s===xt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ma)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ma)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Sa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ta)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bs||n===zs||n===Gs||n===Hs)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===Bs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===zs)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gs)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Hs)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vs||n===Ws||n===Xs)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(n===Vs||n===Ws)return s===xt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===Xs)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ys||n===qs||n===Zs||n===Ks||n===$s||n===js||n===Js||n===Qs||n===eo||n===to||n===no||n===io||n===ro||n===ao)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(n===Ys)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qs)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zs)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ks)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$s)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===js)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Js)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qs)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eo)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===to)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===no)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===io)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ro)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ao)return s===xt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===oo||n===lo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(n===so)return s===xt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===co||n===uo||n===ho||n===fo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(n===co)return a.COMPRESSED_RED_RGTC1_EXT;if(n===uo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ho)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const d0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,p0=`
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

}`;class m0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Fc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new jt({vertexShader:d0,fragmentShader:p0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ln(new Ir(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class g0 extends rr{constructor(e,t){super();const n=this;let r=null,a=1,s=null,o="local-floor",c=1,l=null,f=null,h=null,d=null,p=null,_=null;const x=typeof XRWebGLBinding<"u",m=new m0,u={},b=t.getContextAttributes();let w=null,S=null;const P=[],R=[],C=new Ze;let F=null;const M=new dn;M.viewport=new It;const y=new dn;y.viewport=new It;const D=[M,y],U=new Uh;let Z=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let re=P[j];return re===void 0&&(re=new ms,P[j]=re),re.getTargetRaySpace()},this.getControllerGrip=function(j){let re=P[j];return re===void 0&&(re=new ms,P[j]=re),re.getGripSpace()},this.getHand=function(j){let re=P[j];return re===void 0&&(re=new ms,P[j]=re),re.getHandSpace()};function J(j){const re=R.indexOf(j.inputSource);if(re===-1)return;const Ce=P[re];Ce!==void 0&&(Ce.update(j.inputSource,j.frame,l||s),Ce.dispatchEvent({type:j.type,data:j.inputSource}))}function Q(){r.removeEventListener("select",J),r.removeEventListener("selectstart",J),r.removeEventListener("selectend",J),r.removeEventListener("squeeze",J),r.removeEventListener("squeezestart",J),r.removeEventListener("squeezeend",J),r.removeEventListener("end",Q),r.removeEventListener("inputsourceschange",oe);for(let j=0;j<P.length;j++){const re=R[j];re!==null&&(R[j]=null,P[j].disconnect(re))}Z=null,ee=null,m.reset();for(const j in u)delete u[j];e.setRenderTarget(w),p=null,d=null,h=null,r=null,S=null,ft.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",J),r.addEventListener("selectstart",J),r.addEventListener("selectend",J),r.addEventListener("squeeze",J),r.addEventListener("squeezestart",J),r.addEventListener("squeezeend",J),r.addEventListener("end",Q),r.addEventListener("inputsourceschange",oe),b.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(C),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,Ke=null,k=null;b.depth&&(k=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=b.stencil?wr:br,Ke=b.stencil?Tr:Si);const rt={colorFormat:t.RGBA8,depthFormat:k,scaleFactor:a};h=this.getBinding(),d=h.createProjectionLayer(rt),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Sn(d.textureWidth,d.textureHeight,{format:xn,type:Hn,depthTexture:new Nc(d.textureWidth,d.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const Ce={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(r,t,Ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Sn(p.framebufferWidth,p.framebufferHeight,{format:xn,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await r.requestReferenceSpace(o),ft.setContext(r),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe(j){for(let re=0;re<j.removed.length;re++){const Ce=j.removed[re],Ke=R.indexOf(Ce);Ke>=0&&(R[Ke]=null,P[Ke].disconnect(Ce))}for(let re=0;re<j.added.length;re++){const Ce=j.added[re];let Ke=R.indexOf(Ce);if(Ke===-1){for(let rt=0;rt<P.length;rt++)if(rt>=R.length){R.push(Ce),Ke=rt;break}else if(R[rt]===null){R[rt]=Ce,Ke=rt;break}if(Ke===-1)break}const k=P[Ke];k&&k.connect(Ce)}}const V=new I,ge=new I;function Se(j,re,Ce){V.setFromMatrixPosition(re.matrixWorld),ge.setFromMatrixPosition(Ce.matrixWorld);const Ke=V.distanceTo(ge),k=re.projectionMatrix.elements,rt=Ce.projectionMatrix.elements,ae=k[14]/(k[10]-1),A=k[14]/(k[10]+1),gt=(k[9]+1)/k[5],He=(k[9]-1)/k[5],Ve=(k[8]-1)/k[0],be=(rt[8]+1)/rt[0],pt=ae*Ve,Ae=ae*be,$e=Ke/(-Ve+be),wt=$e*-Ve;if(re.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(wt),j.translateZ($e),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),k[10]===-1)j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const bt=ae+$e,T=A+$e,g=pt-wt,B=Ae+(Ke-wt),K=gt*A/T*bt,se=He*A/T*bt;j.projectionMatrix.makePerspective(g,B,K,se,bt,T),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function ke(j,re){re===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(re.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let re=j.near,Ce=j.far;m.texture!==null&&(m.depthNear>0&&(re=m.depthNear),m.depthFar>0&&(Ce=m.depthFar)),U.near=y.near=M.near=re,U.far=y.far=M.far=Ce,(Z!==U.near||ee!==U.far)&&(r.updateRenderState({depthNear:U.near,depthFar:U.far}),Z=U.near,ee=U.far),U.layers.mask=j.layers.mask|6,M.layers.mask=U.layers.mask&3,y.layers.mask=U.layers.mask&5;const Ke=j.parent,k=U.cameras;ke(U,Ke);for(let rt=0;rt<k.length;rt++)ke(k[rt],Ke);k.length===2?Se(U,M,y):U.projectionMatrix.copy(M.projectionMatrix),Je(j,U,Ke)};function Je(j,re,Ce){Ce===null?j.matrix.copy(re.matrixWorld):(j.matrix.copy(Ce.matrixWorld),j.matrix.invert(),j.matrix.multiply(re.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=mo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(j){return u[j]};let yt=null;function dt(j,re){if(f=re.getViewerPose(l||s),_=re,f!==null){const Ce=f.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Ke=!1;Ce.length!==U.cameras.length&&(U.cameras.length=0,Ke=!0);for(let A=0;A<Ce.length;A++){const gt=Ce[A];let He=null;if(p!==null)He=p.getViewport(gt);else{const be=h.getViewSubImage(d,gt);He=be.viewport,A===0&&(e.setRenderTargetTextures(S,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(S))}let Ve=D[A];Ve===void 0&&(Ve=new dn,Ve.layers.enable(A),Ve.viewport=new It,D[A]=Ve),Ve.matrix.fromArray(gt.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(gt.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(He.x,He.y,He.width,He.height),A===0&&(U.matrix.copy(Ve.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Ke===!0&&U.cameras.push(Ve)}const k=r.enabledFeatures;if(k&&k.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=n.getBinding();const A=h.getDepthInformation(Ce[0]);A&&A.isValid&&A.texture&&m.init(A,r.renderState)}if(k&&k.includes("camera-access")&&x){e.state.unbindTexture(),h=n.getBinding();for(let A=0;A<Ce.length;A++){const gt=Ce[A].camera;if(gt){let He=u[gt];He||(He=new Fc,u[gt]=He);const Ve=h.getCameraImage(gt);He.sourceTexture=Ve}}}}for(let Ce=0;Ce<P.length;Ce++){const Ke=R[Ce],k=P[Ce];Ke!==null&&k!==void 0&&k.update(Ke,re,l||s)}yt&&yt(j,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),_=null}const ft=new kc;ft.setAnimationLoop(dt),this.setAnimationLoop=function(j){yt=j},this.dispose=function(){}}}const mi=new Vn,_0=new Pt;function v0(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Rc(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,b,w,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),h(m,u)):u.isMeshPhongMaterial?(a(m,u),f(m,u)):u.isMeshStandardMaterial?(a(m,u),d(m,u),u.isMeshPhysicalMaterial&&p(m,u,S)):u.isMeshMatcapMaterial?(a(m,u),_(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),x(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(s(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,b,w):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===en&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===en&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const b=e.get(u),w=b.envMap,S=b.envMapRotation;w&&(m.envMap.value=w,mi.copy(S),mi.x*=-1,mi.y*=-1,mi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(mi.y*=-1,mi.z*=-1),m.envMapRotation.value.setFromMatrix4(_0.makeRotationFromEuler(mi)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function s(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,b,w){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*b,m.scale.value=w*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function f(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,b){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===en&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const b=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function x0(i,e,t,n){let r={},a={},s=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,w){const S=w.program;n.uniformBlockBinding(b,S)}function l(b,w){let S=r[b.id];S===void 0&&(_(b),S=f(b),r[b.id]=S,b.addEventListener("dispose",m));const P=w.program;n.updateUBOMapping(b,P);const R=e.render.frame;a[b.id]!==R&&(d(b),a[b.id]=R)}function f(b){const w=h();b.__bindingPointIndex=w;const S=i.createBuffer(),P=b.__size,R=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,P,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,S),S}function h(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const w=r[b.id],S=b.uniforms,P=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let R=0,C=S.length;R<C;R++){const F=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,y=F.length;M<y;M++){const D=F[M];if(p(D,R,M,P)===!0){const U=D.__offset,Z=Array.isArray(D.value)?D.value:[D.value];let ee=0;for(let J=0;J<Z.length;J++){const Q=Z[J],oe=x(Q);typeof Q=="number"||typeof Q=="boolean"?(D.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,U+ee,D.__data)):Q.isMatrix3?(D.__data[0]=Q.elements[0],D.__data[1]=Q.elements[1],D.__data[2]=Q.elements[2],D.__data[3]=0,D.__data[4]=Q.elements[3],D.__data[5]=Q.elements[4],D.__data[6]=Q.elements[5],D.__data[7]=0,D.__data[8]=Q.elements[6],D.__data[9]=Q.elements[7],D.__data[10]=Q.elements[8],D.__data[11]=0):(Q.toArray(D.__data,ee),ee+=oe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,w,S,P){const R=b.value,C=w+"_"+S;if(P[C]===void 0)return typeof R=="number"||typeof R=="boolean"?P[C]=R:P[C]=R.clone(),!0;{const F=P[C];if(typeof R=="number"||typeof R=="boolean"){if(F!==R)return P[C]=R,!0}else if(F.equals(R)===!1)return F.copy(R),!0}return!1}function _(b){const w=b.uniforms;let S=0;const P=16;for(let C=0,F=w.length;C<F;C++){const M=Array.isArray(w[C])?w[C]:[w[C]];for(let y=0,D=M.length;y<D;y++){const U=M[y],Z=Array.isArray(U.value)?U.value:[U.value];for(let ee=0,J=Z.length;ee<J;ee++){const Q=Z[ee],oe=x(Q),V=S%P,ge=V%oe.boundary,Se=V+ge;S+=ge,Se!==0&&P-Se<oe.storage&&(S+=P-Se),U.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=S,S+=oe.storage}}}const R=S%P;return R>0&&(S+=P-R),b.__size=S,b.__cache={},this}function x(b){const w={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(w.boundary=4,w.storage=4):b.isVector2?(w.boundary=8,w.storage=8):b.isVector3||b.isColor?(w.boundary=16,w.storage=12):b.isVector4?(w.boundary=16,w.storage=16):b.isMatrix3?(w.boundary=48,w.storage=48):b.isMatrix4?(w.boundary=64,w.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),w}function m(b){const w=b.target;w.removeEventListener("dispose",m);const S=s.indexOf(w.__bindingPointIndex);s.splice(S,1),i.deleteBuffer(r[w.id]),delete r[w.id],delete a[w.id]}function u(){for(const b in r)i.deleteBuffer(r[b]);s=[],r={},a={}}return{bind:c,update:l,dispose:u}}class y0{constructor(e={}){const{canvas:t=Ju(),context:n=null,depth:r=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;const _=new Uint32Array(4),x=new Int32Array(4);let m=null,u=null;const b=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ii,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let P=!1;this._outputColorSpace=Qt;let R=0,C=0,F=null,M=-1,y=null;const D=new It,U=new It;let Z=null;const ee=new Ge(0);let J=0,Q=t.width,oe=t.height,V=1,ge=null,Se=null;const ke=new It(0,0,Q,oe),Je=new It(0,0,Q,oe);let yt=!1;const dt=new Ic;let ft=!1,j=!1;const re=new Pt,Ce=new I,Ke=new It,k={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function ae(){return F===null?V:1}let A=n;function gt(v,N){return t.getContext(v,N)}try{const v={alpha:!0,depth:r,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wo}`),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",Ee,!1),t.addEventListener("webglcontextcreationerror",ce,!1),A===null){const N="webgl2";if(A=gt(N,v),A===null)throw gt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let He,Ve,be,pt,Ae,$e,wt,bt,T,g,B,K,se,Y,Fe,de,Ue,Le,ue,ye,Xe,Ne,me,Ye;function L(){He=new Pp(A),He.init(),Ne=new f0(A,He),Ve=new Tp(A,He,e,Ne),be=new u0(A,He),Ve.reversedDepthBuffer&&d&&be.buffers.depth.setReversed(!0),pt=new Ip(A),Ae=new jm,$e=new h0(A,He,be,Ae,Ve,Ne,pt),wt=new wp(S),bt=new Rp(S),T=new kh(A),me=new Mp(A,T),g=new Lp(A,T,pt,me),B=new Np(A,g,T,pt),ue=new Up(A,Ve,$e),de=new bp(Ae),K=new $m(S,wt,bt,He,Ve,me,de),se=new v0(S,Ae),Y=new Qm,Fe=new a0(He),Le=new yp(S,wt,bt,be,B,p,c),Ue=new l0(S,B,Ve),Ye=new x0(A,pt,Ve,be),ye=new Sp(A,He,pt),Xe=new Dp(A,He,pt),pt.programs=K.programs,S.capabilities=Ve,S.extensions=He,S.properties=Ae,S.renderLists=Y,S.shadowMap=Ue,S.state=be,S.info=pt}L();const le=new g0(S,A);this.xr=le,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const v=He.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=He.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(v){v!==void 0&&(V=v,this.setSize(Q,oe,!1))},this.getSize=function(v){return v.set(Q,oe)},this.setSize=function(v,N,G=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=v,oe=N,t.width=Math.floor(v*V),t.height=Math.floor(N*V),G===!0&&(t.style.width=v+"px",t.style.height=N+"px"),this.setViewport(0,0,v,N)},this.getDrawingBufferSize=function(v){return v.set(Q*V,oe*V).floor()},this.setDrawingBufferSize=function(v,N,G){Q=v,oe=N,V=G,t.width=Math.floor(v*G),t.height=Math.floor(N*G),this.setViewport(0,0,v,N)},this.getCurrentViewport=function(v){return v.copy(D)},this.getViewport=function(v){return v.copy(ke)},this.setViewport=function(v,N,G,H){v.isVector4?ke.set(v.x,v.y,v.z,v.w):ke.set(v,N,G,H),be.viewport(D.copy(ke).multiplyScalar(V).round())},this.getScissor=function(v){return v.copy(Je)},this.setScissor=function(v,N,G,H){v.isVector4?Je.set(v.x,v.y,v.z,v.w):Je.set(v,N,G,H),be.scissor(U.copy(Je).multiplyScalar(V).round())},this.getScissorTest=function(){return yt},this.setScissorTest=function(v){be.setScissorTest(yt=v)},this.setOpaqueSort=function(v){ge=v},this.setTransparentSort=function(v){Se=v},this.getClearColor=function(v){return v.copy(Le.getClearColor())},this.setClearColor=function(){Le.setClearColor(...arguments)},this.getClearAlpha=function(){return Le.getClearAlpha()},this.setClearAlpha=function(){Le.setClearAlpha(...arguments)},this.clear=function(v=!0,N=!0,G=!0){let H=0;if(v){let O=!1;if(F!==null){const he=F.texture.format;O=he===Do||he===Lo||he===Po}if(O){const he=F.texture.type,ve=he===Hn||he===Si||he===Sr||he===Tr||he===Co||he===Ro,Pe=Le.getClearColor(),we=Le.getClearAlpha(),We=Pe.r,qe=Pe.g,Be=Pe.b;ve?(_[0]=We,_[1]=qe,_[2]=Be,_[3]=we,A.clearBufferuiv(A.COLOR,0,_)):(x[0]=We,x[1]=qe,x[2]=Be,x[3]=we,A.clearBufferiv(A.COLOR,0,x))}else H|=A.COLOR_BUFFER_BIT}N&&(H|=A.DEPTH_BUFFER_BIT),G&&(H|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",Ee,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),Le.dispose(),Y.dispose(),Fe.dispose(),Ae.dispose(),wt.dispose(),bt.dispose(),B.dispose(),me.dispose(),Ye.dispose(),K.dispose(),le.dispose(),le.removeEventListener("sessionstart",Ft),le.removeEventListener("sessionend",ci),Tn.stop()};function fe(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ee(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const v=pt.autoReset,N=Ue.enabled,G=Ue.autoUpdate,H=Ue.needsUpdate,O=Ue.type;L(),pt.autoReset=v,Ue.enabled=N,Ue.autoUpdate=G,Ue.needsUpdate=H,Ue.type=O}function ce(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function te(v){const N=v.target;N.removeEventListener("dispose",te),Re(N)}function Re(v){je(v),Ae.remove(v)}function je(v){const N=Ae.get(v).programs;N!==void 0&&(N.forEach(function(G){K.releaseProgram(G)}),v.isShaderMaterial&&K.releaseShaderCache(v))}this.renderBufferDirect=function(v,N,G,H,O,he){N===null&&(N=k);const ve=O.isMesh&&O.matrixWorld.determinant()<0,Pe=Ba(v,N,G,H,O);be.setMaterial(H,ve);let we=G.index,We=1;if(H.wireframe===!0){if(we=g.getWireframeAttribute(G),we===void 0)return;We=2}const qe=G.drawRange,Be=G.attributes.position;let nt=qe.start*We,mt=(qe.start+qe.count)*We;he!==null&&(nt=Math.max(nt,he.start*We),mt=Math.min(mt,(he.start+he.count)*We)),we!==null?(nt=Math.max(nt,0),mt=Math.min(mt,we.count)):Be!=null&&(nt=Math.max(nt,0),mt=Math.min(mt,Be.count));const Et=mt-nt;if(Et<0||Et===1/0)return;me.setup(O,H,Pe,G,we);let St,_t=ye;if(we!==null&&(St=T.get(we),_t=Xe,_t.setIndex(St)),O.isMesh)H.wireframe===!0?(be.setLineWidth(H.wireframeLinewidth*ae()),_t.setMode(A.LINES)):_t.setMode(A.TRIANGLES);else if(O.isLine){let De=H.linewidth;De===void 0&&(De=1),be.setLineWidth(De*ae()),O.isLineSegments?_t.setMode(A.LINES):O.isLineLoop?_t.setMode(A.LINE_LOOP):_t.setMode(A.LINE_STRIP)}else O.isPoints?_t.setMode(A.POINTS):O.isSprite&&_t.setMode(A.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Er("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(He.get("WEBGL_multi_draw"))_t.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const De=O._multiDrawStarts,Tt=O._multiDrawCounts,ct=O._multiDrawCount,Zt=we?T.get(we).bytesPerElement:1,Zn=Ae.get(H).currentProgram.getUniforms();for(let E=0;E<ct;E++)Zn.setValue(A,"_gl_DrawID",E),_t.render(De[E]/Zt,Tt[E])}else if(O.isInstancedMesh)_t.renderInstances(nt,Et,O.count);else if(G.isInstancedBufferGeometry){const De=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Tt=Math.min(G.instanceCount,De);_t.renderInstances(nt,Et,Tt)}else _t.render(nt,Et)};function ut(v,N,G){v.transparent===!0&&v.side===Fn&&v.forceSinglePass===!1?(v.side=en,v.needsUpdate=!0,Ei(v,N,G),v.side=si,v.needsUpdate=!0,Ei(v,N,G),v.side=Fn):Ei(v,N,G)}this.compile=function(v,N,G=null){G===null&&(G=v),u=Fe.get(G),u.init(N),w.push(u),G.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),v!==G&&v.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();const H=new Set;return v.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const he=O.material;if(he)if(Array.isArray(he))for(let ve=0;ve<he.length;ve++){const Pe=he[ve];ut(Pe,G,O),H.add(Pe)}else ut(he,G,O),H.add(he)}),u=w.pop(),H},this.compileAsync=function(v,N,G=null){const H=this.compile(v,N,G);return new Promise(O=>{function he(){if(H.forEach(function(ve){Ae.get(ve).currentProgram.isReady()&&H.delete(ve)}),H.size===0){O(v);return}setTimeout(he,10)}He.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let at=null;function hn(v){at&&at(v)}function Ft(){Tn.stop()}function ci(){Tn.start()}const Tn=new kc;Tn.setAnimationLoop(hn),typeof self<"u"&&Tn.setContext(self),this.setAnimationLoop=function(v){at=v,le.setAnimationLoop(v),v===null?Tn.stop():Tn.start()},le.addEventListener("sessionstart",Ft),le.addEventListener("sessionend",ci),this.render=function(v,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(N),N=le.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,N,F),u=Fe.get(v,w.length),u.init(N),w.push(u),re.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),dt.setFromProjectionMatrix(re,An,N.reversedDepth),j=this.localClippingEnabled,ft=de.init(this.clippingPlanes,j),m=Y.get(v,b.length),m.init(),b.push(m),le.enabled===!0&&le.isPresenting===!0){const he=S.xr.getDepthSensingMesh();he!==null&&$(he,N,-1/0,S.sortObjects)}$(v,N,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ge,Se),rt=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,rt&&Le.addToRenderList(m,v),this.info.render.frame++,ft===!0&&de.beginShadows();const G=u.state.shadowsArray;Ue.render(G,v,N),ft===!0&&de.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,O=m.transmissive;if(u.setupLights(),N.isArrayCamera){const he=N.cameras;if(O.length>0)for(let ve=0,Pe=he.length;ve<Pe;ve++){const we=he[ve];or(H,O,v,we)}rt&&Le.render(v);for(let ve=0,Pe=he.length;ve<Pe;ve++){const we=he[ve];Fr(m,v,we,we.viewport)}}else O.length>0&&or(H,O,v,N),rt&&Le.render(v),Fr(m,v,N);F!==null&&C===0&&($e.updateMultisampleRenderTarget(F),$e.updateRenderTargetMipmap(F)),v.isScene===!0&&v.onAfterRender(S,v,N),me.resetDefaultState(),M=-1,y=null,w.pop(),w.length>0?(u=w[w.length-1],ft===!0&&de.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function $(v,N,G,H){if(v.visible===!1)return;if(v.layers.test(N.layers)){if(v.isGroup)G=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(N);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||dt.intersectsSprite(v)){H&&Ke.setFromMatrixPosition(v.matrixWorld).applyMatrix4(re);const ve=B.update(v),Pe=v.material;Pe.visible&&m.push(v,ve,Pe,G,Ke.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||dt.intersectsObject(v))){const ve=B.update(v),Pe=v.material;if(H&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ke.copy(v.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ke.copy(ve.boundingSphere.center)),Ke.applyMatrix4(v.matrixWorld).applyMatrix4(re)),Array.isArray(Pe)){const we=ve.groups;for(let We=0,qe=we.length;We<qe;We++){const Be=we[We],nt=Pe[Be.materialIndex];nt&&nt.visible&&m.push(v,ve,nt,G,Ke.z,Be)}}else Pe.visible&&m.push(v,ve,Pe,G,Ke.z,null)}}const he=v.children;for(let ve=0,Pe=he.length;ve<Pe;ve++)$(he[ve],N,G,H)}function Fr(v,N,G,H){const O=v.opaque,he=v.transmissive,ve=v.transparent;u.setupLightsView(G),ft===!0&&de.setGlobalState(S.clippingPlanes,G),H&&be.viewport(D.copy(H)),O.length>0&&Yn(O,N,G),he.length>0&&Yn(he,N,G),ve.length>0&&Yn(ve,N,G),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function or(v,N,G,H){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[H.id]===void 0&&(u.state.transmissionRenderTarget[H.id]=new Sn(1,1,{generateMipmaps:!0,type:He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float")?zn:Hn,minFilter:yi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ht.workingColorSpace}));const he=u.state.transmissionRenderTarget[H.id],ve=H.viewport||D;he.setSize(ve.z*S.transmissionResolutionScale,ve.w*S.transmissionResolutionScale);const Pe=S.getRenderTarget(),we=S.getActiveCubeFace(),We=S.getActiveMipmapLevel();S.setRenderTarget(he),S.getClearColor(ee),J=S.getClearAlpha(),J<1&&S.setClearColor(16777215,.5),S.clear(),rt&&Le.render(G);const qe=S.toneMapping;S.toneMapping=ii;const Be=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),u.setupLightsView(H),ft===!0&&de.setGlobalState(S.clippingPlanes,H),Yn(v,G,H),$e.updateMultisampleRenderTarget(he),$e.updateRenderTargetMipmap(he),He.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let mt=0,Et=N.length;mt<Et;mt++){const St=N[mt],_t=St.object,De=St.geometry,Tt=St.material,ct=St.group;if(Tt.side===Fn&&_t.layers.test(H.layers)){const Zt=Tt.side;Tt.side=en,Tt.needsUpdate=!0,Or(_t,G,H,De,Tt,ct),Tt.side=Zt,Tt.needsUpdate=!0,nt=!0}}nt===!0&&($e.updateMultisampleRenderTarget(he),$e.updateRenderTargetMipmap(he))}S.setRenderTarget(Pe,we,We),S.setClearColor(ee,J),Be!==void 0&&(H.viewport=Be),S.toneMapping=qe}function Yn(v,N,G){const H=N.isScene===!0?N.overrideMaterial:null;for(let O=0,he=v.length;O<he;O++){const ve=v[O],Pe=ve.object,we=ve.geometry,We=ve.group;let qe=ve.material;qe.allowOverride===!0&&H!==null&&(qe=H),Pe.layers.test(G.layers)&&Or(Pe,N,G,we,qe,We)}}function Or(v,N,G,H,O,he){v.onBeforeRender(S,N,G,H,O,he),v.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),O.onBeforeRender(S,N,G,H,v,he),O.transparent===!0&&O.side===Fn&&O.forceSinglePass===!1?(O.side=en,O.needsUpdate=!0,S.renderBufferDirect(G,N,H,O,v,he),O.side=si,O.needsUpdate=!0,S.renderBufferDirect(G,N,H,O,v,he),O.side=Fn):S.renderBufferDirect(G,N,H,O,v,he),v.onAfterRender(S,N,G,H,O,he)}function Ei(v,N,G){N.isScene!==!0&&(N=k);const H=Ae.get(v),O=u.state.lights,he=u.state.shadowsArray,ve=O.state.version,Pe=K.getParameters(v,O.state,he,N,G),we=K.getProgramCacheKey(Pe);let We=H.programs;H.environment=v.isMeshStandardMaterial?N.environment:null,H.fog=N.fog,H.envMap=(v.isMeshStandardMaterial?bt:wt).get(v.envMap||H.environment),H.envMapRotation=H.environment!==null&&v.envMap===null?N.environmentRotation:v.envMapRotation,We===void 0&&(v.addEventListener("dispose",te),We=new Map,H.programs=We);let qe=We.get(we);if(qe!==void 0){if(H.currentProgram===qe&&H.lightsStateVersion===ve)return Br(v,Pe),qe}else Pe.uniforms=K.getUniforms(v),v.onBeforeCompile(Pe,S),qe=K.acquireProgram(Pe,we),We.set(we,qe),H.uniforms=Pe.uniforms;const Be=H.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Be.clippingPlanes=de.uniform),Br(v,Pe),H.needsLights=Ga(v),H.lightsStateVersion=ve,H.needsLights&&(Be.ambientLightColor.value=O.state.ambient,Be.lightProbe.value=O.state.probe,Be.directionalLights.value=O.state.directional,Be.directionalLightShadows.value=O.state.directionalShadow,Be.spotLights.value=O.state.spot,Be.spotLightShadows.value=O.state.spotShadow,Be.rectAreaLights.value=O.state.rectArea,Be.ltc_1.value=O.state.rectAreaLTC1,Be.ltc_2.value=O.state.rectAreaLTC2,Be.pointLights.value=O.state.point,Be.pointLightShadows.value=O.state.pointShadow,Be.hemisphereLights.value=O.state.hemi,Be.directionalShadowMap.value=O.state.directionalShadowMap,Be.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Be.spotShadowMap.value=O.state.spotShadowMap,Be.spotLightMatrix.value=O.state.spotLightMatrix,Be.spotLightMap.value=O.state.spotLightMap,Be.pointShadowMap.value=O.state.pointShadowMap,Be.pointShadowMatrix.value=O.state.pointShadowMatrix),H.currentProgram=qe,H.uniformsList=null,qe}function kr(v){if(v.uniformsList===null){const N=v.currentProgram.getUniforms();v.uniformsList=wa.seqWithValue(N.seq,v.uniforms)}return v.uniformsList}function Br(v,N){const G=Ae.get(v);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Ba(v,N,G,H,O){N.isScene!==!0&&(N=k),$e.resetTextureUnits();const he=N.fog,ve=H.isMeshStandardMaterial?N.environment:null,Pe=F===null?S.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:er,we=(H.isMeshStandardMaterial?bt:wt).get(H.envMap||ve),We=H.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,qe=!!G.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Be=!!G.morphAttributes.position,nt=!!G.morphAttributes.normal,mt=!!G.morphAttributes.color;let Et=ii;H.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Et=S.toneMapping);const St=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,_t=St!==void 0?St.length:0,De=Ae.get(H),Tt=u.state.lights;if(ft===!0&&(j===!0||v!==y)){const Me=v===y&&H.id===M;de.setState(H,v,Me)}let ct=!1;H.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Tt.state.version||De.outputColorSpace!==Pe||O.isBatchedMesh&&De.batching===!1||!O.isBatchedMesh&&De.batching===!0||O.isBatchedMesh&&De.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&De.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&De.instancing===!1||!O.isInstancedMesh&&De.instancing===!0||O.isSkinnedMesh&&De.skinning===!1||!O.isSkinnedMesh&&De.skinning===!0||O.isInstancedMesh&&De.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&De.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&De.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&De.instancingMorph===!1&&O.morphTexture!==null||De.envMap!==we||H.fog===!0&&De.fog!==he||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==de.numPlanes||De.numIntersection!==de.numIntersection)||De.vertexAlphas!==We||De.vertexTangents!==qe||De.morphTargets!==Be||De.morphNormals!==nt||De.morphColors!==mt||De.toneMapping!==Et||De.morphTargetsCount!==_t)&&(ct=!0):(ct=!0,De.__version=H.version);let Zt=De.currentProgram;ct===!0&&(Zt=Ei(H,N,O));let Zn=!1,E=!1,X=!1;const W=Zt.getUniforms(),q=De.uniforms;if(be.useProgram(Zt.program)&&(Zn=!0,E=!0,X=!0),H.id!==M&&(M=H.id,E=!0),Zn||y!==v){be.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),W.setValue(A,"projectionMatrix",v.projectionMatrix),W.setValue(A,"viewMatrix",v.matrixWorldInverse);const xe=W.map.cameraPosition;xe!==void 0&&xe.setValue(A,Ce.setFromMatrixPosition(v.matrixWorld)),Ve.logarithmicDepthBuffer&&W.setValue(A,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&W.setValue(A,"isOrthographic",v.isOrthographicCamera===!0),y!==v&&(y=v,E=!0,X=!0)}if(O.isSkinnedMesh){W.setOptional(A,O,"bindMatrix"),W.setOptional(A,O,"bindMatrixInverse");const Me=O.skeleton;Me&&(Me.boneTexture===null&&Me.computeBoneTexture(),W.setValue(A,"boneTexture",Me.boneTexture,$e))}O.isBatchedMesh&&(W.setOptional(A,O,"batchingTexture"),W.setValue(A,"batchingTexture",O._matricesTexture,$e),W.setOptional(A,O,"batchingIdTexture"),W.setValue(A,"batchingIdTexture",O._indirectTexture,$e),W.setOptional(A,O,"batchingColorTexture"),O._colorsTexture!==null&&W.setValue(A,"batchingColorTexture",O._colorsTexture,$e));const ie=G.morphAttributes;if((ie.position!==void 0||ie.normal!==void 0||ie.color!==void 0)&&ue.update(O,G,Zt),(E||De.receiveShadow!==O.receiveShadow)&&(De.receiveShadow=O.receiveShadow,W.setValue(A,"receiveShadow",O.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(q.envMap.value=we,q.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&N.environment!==null&&(q.envMapIntensity.value=N.environmentIntensity),E&&(W.setValue(A,"toneMappingExposure",S.toneMappingExposure),De.needsLights&&za(q,X),he&&H.fog===!0&&se.refreshFogUniforms(q,he),se.refreshMaterialUniforms(q,H,V,oe,u.state.transmissionRenderTarget[v.id]),wa.upload(A,kr(De),q,$e)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(wa.upload(A,kr(De),q,$e),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&W.setValue(A,"center",O.center),W.setValue(A,"modelViewMatrix",O.modelViewMatrix),W.setValue(A,"normalMatrix",O.normalMatrix),W.setValue(A,"modelMatrix",O.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Me=H.uniformsGroups;for(let xe=0,ze=Me.length;xe<ze;xe++){const it=Me[xe];Ye.update(it,Zt),Ye.bind(it,Zt)}}return Zt}function za(v,N){v.ambientLightColor.needsUpdate=N,v.lightProbe.needsUpdate=N,v.directionalLights.needsUpdate=N,v.directionalLightShadows.needsUpdate=N,v.pointLights.needsUpdate=N,v.pointLightShadows.needsUpdate=N,v.spotLights.needsUpdate=N,v.spotLightShadows.needsUpdate=N,v.rectAreaLights.needsUpdate=N,v.hemisphereLights.needsUpdate=N}function Ga(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(v,N,G){const H=Ae.get(v);H.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Ae.get(v.texture).__webglTexture=N,Ae.get(v.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:G,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,N){const G=Ae.get(v);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0};const Ha=A.createFramebuffer();this.setRenderTarget=function(v,N=0,G=0){F=v,R=N,C=G;let H=!0,O=null,he=!1,ve=!1;if(v){const we=Ae.get(v);if(we.__useDefaultFramebuffer!==void 0)be.bindFramebuffer(A.FRAMEBUFFER,null),H=!1;else if(we.__webglFramebuffer===void 0)$e.setupRenderTarget(v);else if(we.__hasExternalTextures)$e.rebindTextures(v,Ae.get(v.texture).__webglTexture,Ae.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Be=v.depthTexture;if(we.__boundDepthTexture!==Be){if(Be!==null&&Ae.has(Be)&&(v.width!==Be.image.width||v.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");$e.setupDepthRenderbuffer(v)}}const We=v.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(ve=!0);const qe=Ae.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(qe[N])?O=qe[N][G]:O=qe[N],he=!0):v.samples>0&&$e.useMultisampledRTT(v)===!1?O=Ae.get(v).__webglMultisampledFramebuffer:Array.isArray(qe)?O=qe[G]:O=qe,D.copy(v.viewport),U.copy(v.scissor),Z=v.scissorTest}else D.copy(ke).multiplyScalar(V).floor(),U.copy(Je).multiplyScalar(V).floor(),Z=yt;if(G!==0&&(O=Ha),be.bindFramebuffer(A.FRAMEBUFFER,O)&&H&&be.drawBuffers(v,O),be.viewport(D),be.scissor(U),be.setScissorTest(Z),he){const we=Ae.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+N,we.__webglTexture,G)}else if(ve){const we=N;for(let We=0;We<v.textures.length;We++){const qe=Ae.get(v.textures[We]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+We,qe.__webglTexture,G,we)}}else if(v!==null&&G!==0){const we=Ae.get(v.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,we.__webglTexture,G)}M=-1},this.readRenderTargetPixels=function(v,N,G,H,O,he,ve,Pe=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=Ae.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(we=we[ve]),we){be.bindFramebuffer(A.FRAMEBUFFER,we);try{const We=v.textures[Pe],qe=We.format,Be=We.type;if(!Ve.textureFormatReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=v.width-H&&G>=0&&G<=v.height-O&&(v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Pe),A.readPixels(N,G,H,O,Ne.convert(qe),Ne.convert(Be),he))}finally{const We=F!==null?Ae.get(F).__webglFramebuffer:null;be.bindFramebuffer(A.FRAMEBUFFER,We)}}},this.readRenderTargetPixelsAsync=async function(v,N,G,H,O,he,ve,Pe=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=Ae.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ve!==void 0&&(we=we[ve]),we)if(N>=0&&N<=v.width-H&&G>=0&&G<=v.height-O){be.bindFramebuffer(A.FRAMEBUFFER,we);const We=v.textures[Pe],qe=We.format,Be=We.type;if(!Ve.textureFormatReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,nt),A.bufferData(A.PIXEL_PACK_BUFFER,he.byteLength,A.STREAM_READ),v.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Pe),A.readPixels(N,G,H,O,Ne.convert(qe),Ne.convert(Be),0);const mt=F!==null?Ae.get(F).__webglFramebuffer:null;be.bindFramebuffer(A.FRAMEBUFFER,mt);const Et=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Qu(A,Et,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,nt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,he),A.deleteBuffer(nt),A.deleteSync(Et),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,N=null,G=0){const H=Math.pow(2,-G),O=Math.floor(v.image.width*H),he=Math.floor(v.image.height*H),ve=N!==null?N.x:0,Pe=N!==null?N.y:0;$e.setTexture2D(v,0),A.copyTexSubImage2D(A.TEXTURE_2D,G,0,0,ve,Pe,O,he),be.unbindTexture()};const qn=A.createFramebuffer(),lr=A.createFramebuffer();this.copyTextureToTexture=function(v,N,G=null,H=null,O=0,he=null){he===null&&(O!==0?(Er("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),he=O,O=0):he=0);let ve,Pe,we,We,qe,Be,nt,mt,Et;const St=v.isCompressedTexture?v.mipmaps[he]:v.image;if(G!==null)ve=G.max.x-G.min.x,Pe=G.max.y-G.min.y,we=G.isBox3?G.max.z-G.min.z:1,We=G.min.x,qe=G.min.y,Be=G.isBox3?G.min.z:0;else{const ie=Math.pow(2,-O);ve=Math.floor(St.width*ie),Pe=Math.floor(St.height*ie),v.isDataArrayTexture?we=St.depth:v.isData3DTexture?we=Math.floor(St.depth*ie):we=1,We=0,qe=0,Be=0}H!==null?(nt=H.x,mt=H.y,Et=H.z):(nt=0,mt=0,Et=0);const _t=Ne.convert(N.format),De=Ne.convert(N.type);let Tt;N.isData3DTexture?($e.setTexture3D(N,0),Tt=A.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?($e.setTexture2DArray(N,0),Tt=A.TEXTURE_2D_ARRAY):($e.setTexture2D(N,0),Tt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,N.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,N.unpackAlignment);const ct=A.getParameter(A.UNPACK_ROW_LENGTH),Zt=A.getParameter(A.UNPACK_IMAGE_HEIGHT),Zn=A.getParameter(A.UNPACK_SKIP_PIXELS),E=A.getParameter(A.UNPACK_SKIP_ROWS),X=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,St.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,St.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,We),A.pixelStorei(A.UNPACK_SKIP_ROWS,qe),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Be);const W=v.isDataArrayTexture||v.isData3DTexture,q=N.isDataArrayTexture||N.isData3DTexture;if(v.isDepthTexture){const ie=Ae.get(v),Me=Ae.get(N),xe=Ae.get(ie.__renderTarget),ze=Ae.get(Me.__renderTarget);be.bindFramebuffer(A.READ_FRAMEBUFFER,xe.__webglFramebuffer),be.bindFramebuffer(A.DRAW_FRAMEBUFFER,ze.__webglFramebuffer);for(let it=0;it<we;it++)W&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ae.get(v).__webglTexture,O,Be+it),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ae.get(N).__webglTexture,he,Et+it)),A.blitFramebuffer(We,qe,ve,Pe,nt,mt,ve,Pe,A.DEPTH_BUFFER_BIT,A.NEAREST);be.bindFramebuffer(A.READ_FRAMEBUFFER,null),be.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(O!==0||v.isRenderTargetTexture||Ae.has(v)){const ie=Ae.get(v),Me=Ae.get(N);be.bindFramebuffer(A.READ_FRAMEBUFFER,qn),be.bindFramebuffer(A.DRAW_FRAMEBUFFER,lr);for(let xe=0;xe<we;xe++)W?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,ie.__webglTexture,O,Be+xe):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,ie.__webglTexture,O),q?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Me.__webglTexture,he,Et+xe):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Me.__webglTexture,he),O!==0?A.blitFramebuffer(We,qe,ve,Pe,nt,mt,ve,Pe,A.COLOR_BUFFER_BIT,A.NEAREST):q?A.copyTexSubImage3D(Tt,he,nt,mt,Et+xe,We,qe,ve,Pe):A.copyTexSubImage2D(Tt,he,nt,mt,We,qe,ve,Pe);be.bindFramebuffer(A.READ_FRAMEBUFFER,null),be.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else q?v.isDataTexture||v.isData3DTexture?A.texSubImage3D(Tt,he,nt,mt,Et,ve,Pe,we,_t,De,St.data):N.isCompressedArrayTexture?A.compressedTexSubImage3D(Tt,he,nt,mt,Et,ve,Pe,we,_t,St.data):A.texSubImage3D(Tt,he,nt,mt,Et,ve,Pe,we,_t,De,St):v.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,he,nt,mt,ve,Pe,_t,De,St.data):v.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,he,nt,mt,St.width,St.height,_t,St.data):A.texSubImage2D(A.TEXTURE_2D,he,nt,mt,ve,Pe,_t,De,St);A.pixelStorei(A.UNPACK_ROW_LENGTH,ct),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,Zt),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Zn),A.pixelStorei(A.UNPACK_SKIP_ROWS,E),A.pixelStorei(A.UNPACK_SKIP_IMAGES,X),he===0&&N.generateMipmaps&&A.generateMipmap(Tt),be.unbindTexture()},this.initRenderTarget=function(v){Ae.get(v).__webglFramebuffer===void 0&&$e.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?$e.setTextureCube(v,0):v.isData3DTexture?$e.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?$e.setTexture2DArray(v,0):$e.setTexture2D(v,0),be.unbindTexture()},this.resetState=function(){R=0,C=0,F=null,be.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return An}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ht._getDrawingBufferColorSpace(e),t.unpackColorSpace=ht._getUnpackColorSpace()}}const Ea={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class sr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const M0=new Oc(-1,1,1,-1,0,1);class S0 extends qt{constructor(){super(),this.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new kt([0,2,0,0,2,0],2))}}const T0=new S0;class zo{constructor(e){this._mesh=new ln(T0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,M0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class b0 extends sr{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof jt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ar.clone(e.uniforms),this.material=new jt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new zo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Jl extends sr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),a=e.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let s,o;this.inverse?(s=0,o=1):(s=1,o=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),a.buffers.stencil.setFunc(r.ALWAYS,s,4294967295),a.buffers.stencil.setClear(o),a.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(r.EQUAL,1,4294967295),a.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),a.buffers.stencil.setLocked(!0)}}class w0 extends sr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class E0{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ze);this._width=n.width,this._height=n.height,t=new Sn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:zn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new b0(Ea),this.copyPass.material.blending=kn,this.clock=new Nh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,a=this.passes.length;r<a;r++){const s=this.passes[r];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),s.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Jl!==void 0&&(s instanceof Jl?n=!0:s instanceof w0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ze);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class A0 extends sr{constructor(e,t,n=null,r=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ge}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let a,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(a=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=r}}const C0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ge(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class nr extends sr{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new Ze(e.x,e.y):new Ze(256,256),this.clearColor=new Ge(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Sn(a,s,{type:zn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new Sn(a,s,{type:zn});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new Sn(a,s,{type:zn});d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),a=Math.round(a/2),s=Math.round(s/2)}const o=C0;this.highPassUniforms=Ar.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new jt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];a=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Ze(1/a,1/s),a=Math.round(a/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ar.clone(Ea.uniforms),this.blendMaterial=new jt({uniforms:this.copyUniforms,vertexShader:Ea.vertexShader,fragmentShader:Ea.fragmentShader,blending:Rt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Ge,this._oldClearAlpha=1,this._basic=new Zi,this._fsQuad=new zo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,r),this.renderTargetsVertical[a].setSize(n,r),this.separableBlurMaterials[a].uniforms.invSize.value=new Ze(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,a){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),a&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=nr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=nr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new jt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ze(.5,.5)},direction:{value:new Ze(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new jt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}nr.BlurDirectionX=new Ze(1,0);nr.BlurDirectionY=new Ze(0,1);const _a={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class R0 extends sr{constructor(){super(),this.uniforms=Ar.clone(_a.uniforms),this.material=new Lh({name:_a.name,uniforms:this.uniforms,vertexShader:_a.vertexShader,fragmentShader:_a.fragmentShader}),this._fsQuad=new zo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ht.getTransfer(this._outputColorSpace)===xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===oc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===lc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===cc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Eo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===hc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===fc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===uc&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const _r=["#4ff2ff","#43d8ff","#6aa8ff","#9a86ff","#c477ff","#ff79dc","#ff7fb5","#ffb06e"],va=1.75,xa=.015;function cn(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function un(i){const e=new Ph(i);return e.colorSpace=Qt,e.anisotropy=4,e}function P0(){const[i,e]=cn(128,128),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.22,"rgba(255,255,255,.75)"),t.addColorStop(.55,"rgba(255,255,255,.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),un(i)}function L0(){const[i,e]=cn(512,512),t=256;e.translate(t,t);const n=e.createRadialGradient(0,0,110,0,0,250);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.55,"rgba(255,255,255,.03)"),n.addColorStop(.76,"rgba(255,255,255,.14)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,252,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,255,255,.55)",e.lineWidth=4,e.setLineDash([32,30]),e.shadowColor="#fff",e.shadowBlur=14,e.beginPath(),e.arc(0,0,227,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.98)",e.lineWidth=15,e.shadowColor="#fff",e.shadowBlur=26,e.beginPath(),e.arc(0,0,174,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.42)",e.lineWidth=3,e.beginPath(),e.arc(0,0,126,0,Math.PI*2),e.stroke(),e.restore();for(let r=0;r<4;r++)e.save(),e.rotate(r*Math.PI/2),e.strokeStyle="rgba(255,255,255,.9)",e.lineWidth=5,e.shadowColor="#fff",e.shadowBlur=12,e.beginPath(),e.moveTo(0,-226),e.lineTo(0,-196),e.stroke(),e.restore();return e.save(),e.fillStyle="rgba(255,255,255,.85)",e.shadowColor="#fff",e.shadowBlur=20,e.beginPath(),e.arc(0,0,5,0,Math.PI*2),e.fill(),e.restore(),un(i)}function D0(){const[i,e]=cn(96,1024),t=e.createLinearGradient(0,1024,0,0);return t.addColorStop(0,"rgba(255,255,255,.95)"),t.addColorStop(.35,"rgba(255,255,255,.55)"),t.addColorStop(.78,"rgba(255,255,255,.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.strokeStyle=t,e.lineWidth=7,e.shadowColor="#fff",e.shadowBlur=22,e.beginPath(),e.moveTo(48,1024),e.lineTo(48,6),e.stroke(),e.shadowBlur=6,e.lineWidth=2,e.strokeStyle="rgba(255,255,255,.95)",e.beginPath(),e.moveTo(48,1024),e.lineTo(48,6),e.stroke(),un(i)}function I0(){const[i,e]=cn(192,1024),t=e.createLinearGradient(0,1024,0,0);t.addColorStop(0,"rgba(255,255,255,.34)"),t.addColorStop(.5,"rgba(255,255,255,.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,192,1024);const n=e.createLinearGradient(0,0,192,0);return n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.32,"rgba(255,255,255,.5)"),n.addColorStop(.5,"rgba(255,255,255,1)"),n.addColorStop(.68,"rgba(255,255,255,.5)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.globalCompositeOperation="destination-in",e.fillStyle=n,e.fillRect(0,0,192,1024),un(i)}function U0(){const[i,e]=cn(256,256),t=128;e.translate(t,t);const n=e.createRadialGradient(0,0,18,0,0,124);n.addColorStop(0,"rgba(255,255,255,.62)"),n.addColorStop(.45,"rgba(255,255,255,.2)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,124,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,255,255,.98)",e.lineWidth=17,e.shadowColor="#fff",e.shadowBlur=28,e.beginPath(),e.arc(0,0,84,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.5)",e.lineWidth=4,e.shadowColor="#fff",e.shadowBlur=10,e.beginPath(),e.arc(0,0,56,0,Math.PI*2),e.stroke(),e.restore();const r=e.createRadialGradient(0,0,0,0,0,30);r.addColorStop(0,"rgba(255,255,255,1)"),r.addColorStop(.55,"rgba(255,255,255,.75)"),r.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=r,e.beginPath(),e.arc(0,0,30,0,Math.PI*2),e.fill();for(let a=0;a<4;a++)e.save(),e.rotate(a*Math.PI/2),e.strokeStyle="rgba(255,255,255,.9)",e.lineWidth=5,e.shadowColor="#fff",e.shadowBlur=12,e.beginPath(),e.moveTo(0,-122),e.lineTo(0,-100),e.stroke(),e.restore();return un(i)}function N0(){const[i,e]=cn(128,512),t=e.createLinearGradient(0,0,128,0);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.22,"rgba(255,255,255,.35)"),t.addColorStop(.5,"rgba(255,255,255,.95)"),t.addColorStop(.78,"rgba(255,255,255,.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,512),e.fillStyle="rgba(255,255,255,.95)",e.shadowColor="#fff",e.shadowBlur=18,e.fillRect(48,0,32,512);const n=e.createLinearGradient(0,0,0,512);return n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.08,"rgba(255,255,255,1)"),n.addColorStop(.92,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.globalCompositeOperation="destination-in",e.fillStyle=n,e.fillRect(0,0,128,512),un(i)}function F0(){const[i,e]=cn(1024,128),t=e.createLinearGradient(0,0,1024,0);return t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.06,"rgba(255,255,255,.4)"),t.addColorStop(.5,"rgba(255,255,255,1)"),t.addColorStop(.94,"rgba(255,255,255,.4)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.strokeStyle=t,e.lineWidth=7,e.shadowColor="#fff",e.shadowBlur=26,e.beginPath(),e.moveTo(0,64),e.lineTo(1024,64),e.stroke(),e.lineWidth=2,e.shadowBlur=6,e.beginPath(),e.moveTo(0,64),e.lineTo(1024,64),e.stroke(),un(i)}function Ql(i,e){const[t,n]=cn(2048,512);let r=i>>>0;const a=()=>(r=r*1664525+1013904223>>>0,r/4294967296);n.clearRect(0,0,2048,512);const s=n.createLinearGradient(0,150,0,512);s.addColorStop(0,"rgba(80,190,255,0)"),s.addColorStop(.7,"rgba(60,150,255,.09)"),s.addColorStop(1,"rgba(255,110,200,.08)"),n.fillStyle=s,n.fillRect(0,0,2048,512);let o=-40;for(;o<2088;){const l=24+Math.floor(a()*74),f=90+Math.floor(a()*300),h=512-f;n.save(),n.fillStyle="rgba(3,8,24,.82)",n.fillRect(o,h,l,f),n.strokeStyle=a()<.28?"rgba(255,120,200,.7)":"rgba(70,210,255,.55)",n.lineWidth=2,n.shadowColor=n.strokeStyle,n.shadowBlur=10,n.strokeRect(o+1,h+1,l-2,f-2),n.shadowBlur=0;const d=Math.max(1,Math.floor((l-10)/12)),p=Math.max(2,Math.floor((f-16)/17));for(let _=0;_<p;_++)for(let x=0;x<d;x++)a()<.64||(n.fillStyle=a()<.22?"rgba(255,205,130,.9)":a()<.5?"rgba(120,235,255,.85)":"rgba(255,120,195,.8)",n.fillRect(o+6+x*12,h+9+_*17,4,6));a()<.45&&(n.strokeStyle="rgba(150,225,255,.65)",n.lineWidth=1,n.beginPath(),n.moveTo(o+l*.5,h),n.lineTo(o+l*.5,h-18-a()*34),n.stroke(),n.fillStyle="rgba(255,90,150,.95)",n.fillRect(o+l*.5-1.5,h-22-a()*30,3,3)),n.restore(),o+=l+3+Math.floor(a()*11)}if(e){const l=n.createLinearGradient(0,360,0,512);l.addColorStop(0,"rgba(255,140,90,0)"),l.addColorStop(1,"rgba(255,140,90,.12)"),n.fillStyle=l,n.fillRect(0,300,2048,212)}const c=un(t);return c.wrapS=Aa,c.wrapT=ni,c}function O0(){const[i,e]=cn(1024,1024);e.translate(512,512);const t=e.createRadialGradient(0,0,60,0,0,505);t.addColorStop(0,"rgba(255,255,255,.03)"),t.addColorStop(.55,"rgba(255,255,255,.01)"),t.addColorStop(.82,"rgba(255,255,255,.08)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(0,0,505,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,255,255,.5)",e.lineWidth=5,e.shadowColor="#fff",e.shadowBlur=28,e.beginPath(),e.arc(0,0,470,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(255,255,255,.2)",e.lineWidth=2,e.beginPath(),e.arc(0,0,440,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(255,255,255,.13)",e.lineWidth=2,e.setLineDash([7,18]),e.beginPath(),e.arc(0,0,344,0,Math.PI*2),e.stroke(),e.restore();for(let n=0;n<60;n++){const r=n%5===0;e.save(),e.rotate(n*Math.PI/30),e.strokeStyle=r?"rgba(255,255,255,.92)":"rgba(255,255,255,.3)",e.lineWidth=r?7:2,e.shadowColor="#fff",e.shadowBlur=r?18:7,e.beginPath(),e.moveTo(0,-468),e.lineTo(0,-(r?414:444)),e.stroke(),e.restore()}for(let n=0;n<4;n++)e.save(),e.rotate(n*Math.PI/2),e.fillStyle="rgba(255,255,255,.82)",e.shadowColor="#fff",e.shadowBlur=22,e.beginPath(),e.moveTo(0,-500),e.lineTo(13,-516),e.lineTo(0,-532),e.lineTo(-13,-516),e.closePath(),e.fill(),e.restore();return un(i)}function k0(){const[i,e]=cn(512,512);e.translate(256,256);const t=e.createRadialGradient(0,0,40,0,0,250);t.addColorStop(0,"rgba(255,255,255,.05)"),t.addColorStop(.7,"rgba(255,255,255,.02)"),t.addColorStop(.92,"rgba(255,255,255,.16)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(0,0,250,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255,255,255,.42)",e.lineWidth=2,e.beginPath(),e.arc(0,0,206,0,Math.PI*2),e.stroke();for(let n=0;n<12;n++){const r=n%3===0;e.save(),e.rotate(n*Math.PI/6),e.strokeStyle=r?"rgba(255,255,255,.85)":"rgba(255,255,255,.3)",e.lineWidth=r?4:1.5,e.beginPath(),e.moveTo(0,-204),e.lineTo(0,r?-172:-188),e.stroke(),e.restore()}return e.save(),e.shadowColor="#fff",e.shadowBlur=22,e.fillStyle="rgba(255,255,255,.95)",e.beginPath(),e.moveTo(-7,-16),e.lineTo(0,-196),e.lineTo(7,-16),e.closePath(),e.fill(),e.beginPath(),e.arc(0,0,11,0,Math.PI*2),e.fill(),e.restore(),un(i)}function B0(){const[i,e]=cn(128,1024),t=e.createLinearGradient(0,1024,0,0);return t.addColorStop(0,"rgba(255,255,255,.6)"),t.addColorStop(.5,"rgba(255,255,255,.95)"),t.addColorStop(.9,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,.2)"),e.fillStyle=t,e.shadowColor="#fff",e.shadowBlur=22,e.beginPath(),e.moveTo(47,1010),e.lineTo(58,120),e.lineTo(64,34),e.lineTo(70,120),e.lineTo(81,1010),e.closePath(),e.fill(),e.shadowBlur=28,e.fillStyle="rgba(255,255,255,1)",e.beginPath(),e.arc(64,72,15,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(64,942,20,0,Math.PI*2),e.fill(),un(i)}function z0(){const[i,e]=cn(256,256);return e.translate(128,128),e.shadowColor="#fff",e.shadowBlur=26,e.fillStyle="rgba(255,255,255,.98)",e.save(),e.rotate(-.22),e.beginPath(),e.ellipse(-8,56,30,21,-.18,0,Math.PI*2),e.fill(),e.fillRect(16,-84,8,140),e.beginPath(),e.moveTo(24,-84),e.bezierCurveTo(82,-62,86,6,38,32),e.bezierCurveTo(68,-6,56,-50,24,-60),e.closePath(),e.fill(),e.restore(),un(i)}function G0(){const[i,e]=cn(64,1024),t=e.createLinearGradient(0,0,64,0);return t.addColorStop(0,"rgba(255,255,255,.06)"),t.addColorStop(.38,"rgba(255,255,255,.62)"),t.addColorStop(.52,"rgba(255,255,255,1)"),t.addColorStop(.66,"rgba(255,255,255,.58)"),t.addColorStop(1,"rgba(255,255,255,.06)"),e.fillStyle=t,e.shadowColor="#fff",e.shadowBlur=12,e.fillRect(27,26,10,972),e.shadowBlur=22,e.beginPath(),e.arc(32,44,15,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(32,982,25,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255,255,255,.8)",e.lineWidth=3,e.beginPath(),e.arc(32,982,25,0,Math.PI*2),e.stroke(),un(i)}function H0(i){const e=matchMedia("(pointer: coarse)").matches,t=new y0({canvas:i,antialias:!e,powerPreference:"high-performance",alpha:!1,stencil:!1});t.setPixelRatio(Math.min(devicePixelRatio||1,e?1.45:1.8)),t.outputColorSpace=Qt,t.toneMapping=Eo,t.toneMappingExposure=1.06;const n=new Th;n.background=new Ge(197387),n.fog=new No(197387,.0115);const r=new dn(46,innerWidth/innerHeight,.1,240);r.position.set(0,6.7,17.2);const a=new E0(t);a.addPass(new A0(n,r));const s=new nr(new Ze(innerWidth,innerHeight),1,.62,.22);a.addPass(s),a.addPass(new R0);const o={glow:P0(),ring:L0(),line:D0(),beam:I0(),note:U0(),hold:N0(),hitline:F0(),cityFar:Ql(2047066,!1),cityNear:Ql(7023172,!0),clockFace:O0(),clockHand:B0(),clockDial:k0(),floatNote:z0(),pendulumRod:G0()},c=new on;n.add(c);function l(E,X,W,q,ie){const Me=new Float32Array(E*3);for(let st=0;st<E;st++){const Qe=X+Math.random()*X*1.8,Vt=Math.random()*Math.PI*2,vt=Math.acos(2*Math.random()-1);Me[st*3]=Qe*Math.sin(vt)*Math.cos(Vt),Me[st*3+1]=Qe*Math.cos(vt)*.55+3,Me[st*3+2]=Qe*Math.sin(vt)*Math.sin(Vt)-20}const xe=new qt;xe.setAttribute("position",new tn(Me,3));const ze=new go({size:W,map:o.glow,color:q,transparent:!0,opacity:ie,depthWrite:!1,blending:Rt,sizeAttenuation:!0}),it=new wl(xe,ze);return c.add(it),it}const f=l(1500,34,.32,10279167,.7),h=l(650,70,.55,12164351,.5),d=l(220,14,.09,8186367,.45);function p(E,X,W,q,ie,Me){const xe=new Lt({map:o.glow,color:ie,transparent:!0,opacity:Me,depthWrite:!1,blending:Rt,fog:!1}),ze=new Nt(xe);return ze.position.set(E,X,W),ze.scale.set(q,q,1),c.add(ze),ze}const _=p(-16,9,-34,46,1789183,.18),x=p(18,1,-40,54,9314303,.14);p(0,12,-26,30,16723872,.07);const m=new Zi({color:4951551,wireframe:!0,transparent:!0,opacity:.055,fog:!1}),u=[];for(let E=0;E<3;E++){const X=new ln(new ko(12+E*6.5,.045,3,120),m.clone());X.position.set(0,5,-26-E*7),X.rotation.set(.9+E*.16,E*.3,0),c.add(X),u.push(X)}const b=new Fh(90,45,1811928,1254490);b.position.y=-3.6,b.material.transparent=!0,b.material.opacity=.16,b.material.depthWrite=!1,c.add(b);const w=[];for(let E=0;E<14;E++){const X=E%2?new Fo(.5+Math.random()*.8,0):new Oo(.5+Math.random()*.7,0),W=new Zi({color:E%3?5823999:16740312,wireframe:!0,transparent:!0,opacity:.055+Math.random()*.05,fog:!1}),q=new ln(X,W),ie=E%2?1:-1;q.position.set(ie*(9+Math.random()*10),.5+Math.random()*9,-6-Math.random()*14),q.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),q.userData.spin=new I((Math.random()-.5)*.3,(Math.random()-.5)*.4,(Math.random()-.5)*.2),c.add(q),w.push(q)}const S=new on;S.position.z=-1,c.add(S);const P=[];function R(E,X,W,q,ie,Me,xe){const ze=new Zi({map:E,color:xe,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),it=new ln(new Ir(X,W),ze);return it.position.set(q,ie,Me),it.renderOrder=-2,S.add(it),P.push({mesh:it,mat:ze,map:E,base:ie,speed:0}),it}R(o.cityFar,150,42,-24,19,-54,11068671),R(o.cityNear,118,34,38,12,-36,16761504),P[0].speed=.0028,P[1].speed=.0062,S.visible=!1;const C=new on;n.add(C);const F=new on;C.add(F);const M=new on;M.renderOrder=5,C.add(M);const y=new Lt({map:o.hitline,color:10483199,transparent:!0,opacity:.8,depthWrite:!1,depthTest:!1,blending:Rt,fog:!1}),D=new Nt(y);D.position.set(0,.02,.25),D.scale.set(13.2,.9,1),D.renderOrder=2,C.add(D);const U=[],Z=[];for(let E=0;E<8;E++){const X=(E-3.5)*va;Z.push(X);const W=xa*X*X,q=new on;q.position.set(X,0,W),F.add(q);const ie=new Ge(_r[E]),Me=new Lt({map:o.beam,color:ie.clone(),transparent:!0,opacity:.08,depthWrite:!1,depthTest:!1,blending:Rt,fog:!1}),xe=new Nt(Me);xe.center.set(.5,0),xe.position.set(0,.04,-.02),xe.scale.set(1.16,12.6,1),xe.renderOrder=0,q.add(xe);const ze=new Lt({map:o.line,color:ie.clone(),transparent:!0,opacity:.62,depthWrite:!1,depthTest:!1,blending:Bn,fog:!1}),it=new Nt(ze);it.center.set(.5,0),it.position.set(0,.04,.02),it.scale.set(.36,12.4,1),it.renderOrder=1,q.add(it);const st=new Lt({map:o.ring,color:ie.clone(),transparent:!0,opacity:.95,depthWrite:!1,depthTest:!1,blending:Bn,fog:!1}),Qe=new Nt(st);Qe.position.set(0,.02,.22),Qe.scale.set(1.65,1.65,1),Qe.renderOrder=3,q.add(Qe);const Vt=new Lt({map:o.glow,color:ie.clone(),transparent:!0,opacity:.13,depthWrite:!1,depthTest:!1,blending:Rt,fog:!1}),vt=new Nt(Vt);vt.position.set(0,-.02,.18),vt.scale.set(2.2,2.2,1),vt.renderOrder=2,q.add(vt);const Ot=new Lt({map:o.glow,color:ie.clone().lerp(new Ge(16777215),.25),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Rt,fog:!1}),nn=new Nt(Ot);nn.position.set(0,.2,.08),nn.scale.set(1.1,1.1,1),nn.renderOrder=4,nn.visible=!1,q.add(nn),U.push({group:q,beam:xe,line:it,ring:Qe,glow:vt,ghost:nn,color:ie.clone(),targetColor:ie.clone(),flash:0,active:0,baseX:X,ghostFx:null,angle:0,pitch:0,screenAngle:0,screen:null})}const ee=new on;ee.position.set(0,13.2,-28),ee.visible=!1,c.add(ee);const J=new Lt({map:o.clockFace,color:16773576,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Rt,fog:!1}),Q=new Nt(J);Q.scale.set(21.6,21.6,1),Q.renderOrder=-5,ee.add(Q);const oe=new Lt({map:o.glow,color:16762974,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Rt,fog:!1}),V=new Nt(oe);V.scale.set(29,29,1),V.renderOrder=-6,ee.add(V);const ge=new Ge(_r[0]),Se=new Ge(_r[7]),ke=new Lt({map:o.clockHand,color:ge,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Rt,fog:!1}),Je=new Nt(ke);Je.center.set(.5,.07),Je.position.set(0,0,.22),Je.scale.set(1.02,6.8,1),Je.renderOrder=-4,ee.add(Je);const yt=new Lt({map:o.clockHand,color:Se,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Rt,fog:!1}),dt=new Nt(yt);dt.center.set(.5,.07),dt.position.set(0,0,.26),dt.scale.set(.76,9.6,1),dt.renderOrder=-4,ee.add(dt);const ft=new Lt({map:o.glow,color:16774096,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Rt,fog:!1}),j=new Nt(ft);j.scale.set(1.9,1.9,1),j.position.z=.3,j.renderOrder=-3,ee.add(j);function re(E){const X=new Lt({map:o.clockDial,color:new Ge(_r[E]),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Rt,fog:!1}),W=new Nt(X);return W.position.set(E===0?.86:-.86,7.6,.24),W.scale.set(2.75,2.75,1),W.renderOrder=2,W.visible=!1,U[E].group.add(W),W}const Ce=re(0),Ke=re(7),k={group:ee,face:Q,aura:V,hub:j,handSlow:Je,handFast:dt,dialSlow:Ce,dialFast:Ke,slowColor:ge,fastColor:Se,target:0,fade:0,mode:"off",frozen:!1,rate:1,runTime:0,anchorT:0,anchorRun:0,slowAngle:0,fastAngle:0,slowKick:0,fastKick:0,kick:0},rt=16765286,ae={active:!1,target:0,fade:0,period:2.4146,originT:0,baseAmp:.42,pivot:new I(0,11.8,1.2),center:new I(0,2.6,1.32),length:9.2,angle:.42,kick:0,missFlash:0,times:[],states:[],notes:[]},A=new on;A.visible=!1,n.add(A);const gt=new Ge(rt),He=new Ge(16773576),Ve=new Ge(16724831);function be(E,X,W,q){const ie=new Lt({map:E,color:X.clone(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Rt,fog:!1}),Me=new Nt(ie);return Me.scale.set(q,q,1),Me.renderOrder=W,Me.visible=!1,A.add(Me),Me}const pt=be(o.pendulumRod,He,5,1);pt.center.set(.5,0);const Ae=be(o.glow,He,6,1.5),$e=be(o.glow,gt,7,2.2),wt=be(o.ring,He,8,2),bt=be(o.glow,gt,6,3.2),T=be(o.ring,He,10,2.9),g=be(o.glow,He,9,1.5),B=[];for(let E=0;E<7;E++){const X=be(o.floatNote,He,6,1);X.userData.r=2.7+E%3*1.1,X.userData.scale=.8+E%4*.16,X.userData.op=.42+E%3*.12,B.push(X)}function K(){const E=$.portrait;ae.pivot.set(0,E?11:11.8,1.2),ae.length=E?7:7.8,ae.center.set(0,ae.pivot.y-ae.length,1.32),ae.baseAmp=E?.27:.42,Ae.position.copy(ae.pivot),T.position.copy(ae.center),bt.position.copy(ae.center),g.position.copy(ae.center)}function se({start:E=0,period:X=2.4146,amplitude:W=.42,times:q=[]}={}){ae.active=!0,ae.target=1,ae.period=X||2.4146,ae.originT=E,ae.baseAmp=W||.42,ae.times=q.slice(),ae.states=q.map(()=>"pending"),ae.kick=Math.max(ae.kick,.5);for(const ie of ae.notes)A.remove(ie),ie.material.dispose();ae.notes=ae.times.map((ie,Me)=>{const xe=new Lt({map:o.floatNote,color:gt.clone(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Rt,fog:!1}),ze=new Nt(xe),it=Me*2.399963,st=3.3+Me%3*.85;return ze.userData.off={x:Math.cos(it)*st,y:Math.sin(it)*st*.66},ze.renderOrder=7,ze.visible=!1,A.add(ze),ze}),ae.fade=Math.max(ae.fade,.002),K()}function Y(){ae.active=!1,ae.target=0;for(const E of ae.notes)E.visible=!1}function Fe(){Y(),ae.fade=0,ae.kick=0,ae.missFlash=0,ae.states=[],A.visible=!1}function de(E,X="hit"){ae.states[E]!==void 0&&(ae.states[E]=X);const W=ae.notes[E];W&&(W.visible=!1);const q=ae.center;X==="hit"?(ae.kick=1,ut(q,rt,22,3.4),Ft(q,rt,3.1)):(ae.missFlash=1,ut(q,16724831,10,1.5),Ft(q,16724831,1.9))}function Ue(){ae.kick=Math.max(ae.kick,.14)}const Le=new I,ue=new I;function ye(){r.updateMatrixWorld(),Le.copy(ae.center).project(r),ue.copy(ae.center),ue.y+=1.5,ue.project(r);const E=(Le.x*.5+.5)*innerWidth,X=(-Le.y*.5+.5)*innerHeight,W=(-ue.y*.5+.5)*innerHeight;return{x:E,y:X,radius:Math.max(60,Math.min(118,Math.abs(X-W)))}}function Xe(E,X){ae.fade+=(ae.target-ae.fade)*(1-Math.exp(-E*3.1));const W=ae.fade>.012;if(A.visible=W,!W)return;ae.kick=Math.max(0,ae.kick-E*3.2),ae.missFlash=Math.max(0,ae.missFlash-E*2.6);const q=ae.baseAmp,ie=q*Math.cos((X-ae.originT)/ae.period*Math.PI*2);ae.angle=ie;const Me=Math.sin(ie)*ae.length,xe=-Math.cos(ie)*ae.length;pt.position.copy(ae.pivot),pt.scale.set(.5,ae.length,1),pt.material.rotation=Math.PI+ie,Ae.position.copy(ae.pivot),$e.position.set(ae.pivot.x+Me,ae.pivot.y+xe,ae.pivot.z+.12),wt.position.set(ae.pivot.x+Me,ae.pivot.y+xe,ae.pivot.z+.16);const ze=Math.max(0,1-Math.abs(ie)/Math.max(.001,q)),it=1+ae.kick*.22+ze*.05;$e.scale.set(2.2*it,2.2*it,1),wt.scale.set(2*it,2*it,1),pt.visible=!0,Ae.visible=!0,wt.visible=!0,$e.visible=!0;const st=ae.fade,Qe=ae.missFlash;pt.material.opacity=st*.62,Ae.material.opacity=st*(.55+ze*.3),$e.material.opacity=st*(.24+ze*.16+ae.kick*.14),wt.material.opacity=st*(.78+ae.kick*.2),wt.material.color.copy(He).lerp(Ve,Qe),$e.material.color.copy(gt).lerp(Ve,Qe);const Vt=1+ze*.08+ae.kick*.14;T.scale.set(2.9*Vt,2.9*Vt,1),bt.scale.set(3.2*Vt,3.2*Vt,1),g.scale.set(1.5*Vt,1.5*Vt,1),T.material.opacity=st*(.5+ze*.3+ae.kick*.18),bt.material.opacity=st*(.05+ze*.04+ae.kick*.06),g.material.opacity=st*(.16+ze*.12),T.material.color.copy(He).lerp(Ve,Qe*.7);for(const vt of ae.notes){const Ot=ae.notes.indexOf(vt),nn=ae.times[Ot],Ai=ae.states[Ot],Cn=nn-X;if(Ai!=="pending"||Cn>1.55||Cn<-.35){vt.visible=!1;continue}const ne=Math.max(0,Math.min(1,1-Cn/1.55)),pe=1-Math.pow(1-ne,3),Ht=vt.userData.off;vt.position.set(ae.center.x+Ht.x*(1-pe),ae.center.y+Ht.y*(1-pe)+Math.sin(X*2.2+Ot)*.1*(1-pe),ae.center.z+.14);const mn=1.5+pe*.55+Math.sin(X*7+Ot)*.03;vt.scale.set(mn,mn,1),vt.material.opacity=st*(.2+pe*.78),vt.visible=!0}for(let vt=0;vt<B.length;vt++){const Ot=B[vt],nn=X*.24+vt*2.399963,Ai=Ot.userData.r;Ot.position.set(ae.center.x+Math.cos(nn)*Ai,ae.center.y+Math.sin(nn*1.3)*Ai*.6+Math.sin(X*.9+vt)*.24,ae.center.z+.05),Ot.material.rotation=Math.sin(X*.5+vt)*.32;const Cn=Ot.userData.scale;Ot.scale.set(Cn,Cn,1),Ot.material.opacity=st*Ot.userData.op*(.55+.45*Math.sin(X*1.5+vt*1.7)),Ot.visible=!0}}function Ne(E,X){const W=new Ge(_r[E]),q=new on;q.renderOrder=5,U[E].group.add(q);const ie=new Lt({map:o.note,color:W,transparent:!0,opacity:1,depthWrite:!1,depthTest:!1,blending:Bn,fog:!1}),Me=new Nt(ie);Me.scale.set(1.04,1.04,1),Me.renderOrder=6,q.add(Me);let xe=null,ze=null;if(X==="hold"){const it=new Lt({map:o.hold,color:W.clone().lerp(new Ge(16777215),.15),transparent:!0,opacity:.72,depthWrite:!1,depthTest:!1,blending:Rt,fog:!1});xe=new Nt(it),xe.center.set(.5,.5),xe.renderOrder=4,q.add(xe);const st=new Lt({map:o.note,color:W.clone(),transparent:!0,opacity:.85,depthWrite:!1,depthTest:!1,blending:Rt,fog:!1});ze=new Nt(st),ze.scale.set(.68,.68,1),ze.renderOrder=5,q.add(ze)}return{group:q,head:Me,body:xe,tail:ze,color:W}}const me=720,Ye=new Float32Array(me*3).fill(-999),L=new Float32Array(me*3),le=new Float32Array(me*3),fe=new Float32Array(me),Ee=new Float32Array(me),ce=new qt;ce.setAttribute("position",new tn(Ye,3)),ce.setAttribute("color",new tn(L,3));const te=new go({size:.3,map:o.glow,vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!1,blending:Rt,sizeAttenuation:!0,fog:!1}),Re=new wl(ce,te);Re.renderOrder=9,n.add(Re);let je=0;function ut(E,X,W=16,q=3.2){const ie=new Ge(X);for(let Me=0;Me<W;Me++){const xe=je=(je+1)%me;Ye[xe*3]=E.x+(Math.random()-.5)*.15,Ye[xe*3+1]=E.y+(Math.random()-.5)*.15,Ye[xe*3+2]=E.z+(Math.random()-.5)*.15;const ze=Math.random()*Math.PI*2,it=Math.acos(2*Math.random()-1),st=q*(.35+Math.random()*.9);le[xe*3]=Math.sin(it)*Math.cos(ze)*st,le[xe*3+1]=Math.cos(it)*st+.6,le[xe*3+2]=Math.sin(it)*Math.sin(ze)*st;const Qe=Math.random()<.35;L[xe*3]=Qe?1:ie.r,L[xe*3+1]=Qe?1:ie.g,L[xe*3+2]=Qe?1:ie.b,fe[xe]=Ee[xe]=.35+Math.random()*.5}}const at=[];for(let E=0;E<16;E++){const X=new Lt({map:o.ring,color:16777215,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Rt,fog:!1}),W=new Nt(X);W.scale.set(.8,.8,1),W.renderOrder=8,W.visible=!1,n.add(W),at.push({sprite:W,life:0,max:.38})}let hn=0;function Ft(E,X,W=2.8){const q=at[hn=(hn+1)%at.length];q.sprite.position.copy(E),q.sprite.material.color.set(X),q.sprite.material.opacity=.95,q.sprite.scale.set(.7,.7,1),q.sprite.visible=!0,q.life=q.max=.38,q.scale=W}const ci=[];for(let E=0;E<54;E++){const X=new Lt({map:o.ring,color:16777215,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Rt,fog:!1}),W=new Nt(X);W.scale.set(.6,.6,1),W.renderOrder=7,W.visible=!1,C.add(W),ci.push({sprite:W,life:0,max:1,delay:0,vx:0,vy:0,base:.5,alpha:.6,spin:0})}let Tn=0;const $={view:{rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.7,bloom:.8,spin:.04,spacing:va,ring:1.65},target:{rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.7,bloom:.8,spin:.04,spacing:va,ring:1.65},section:null,energy:.4,keyCount:8,active:new Set([0,1,2,3,4,5,6,7]),pulse:0,shake:0,zoomKick:0,noteSpeed:8.2,time:0,playing:!1,spacing:va,ringScale:1.65,portrait:!1,mouse:new Ze,laneXNow:Z.slice(),bpm:100,beatOffset:.535,energyPulse:0,motion:{style:"fan",amp:.06,speed:.5,pitch:.03},targetMotion:{style:"fan",amp:.06,speed:.5,pitch:.03},laneAngle:new Float32Array(8),lanePitch:new Float32Array(8),screenAngle:new Float32Array(8),city:0,cityTarget:0,live:new Set([0,1,2,3,4,5,6,7])};function Fr(E){const X=innerWidth/Math.max(1,innerHeight);if($.portrait)return E<=4?{spacing:1.72,ring:1.62}:E<=6?{spacing:1.3,ring:1.24}:{spacing:1.02,ring:1.04};const W=X>1.9?1.08:1;return E<=4?{spacing:3.15*W,ring:2.35*W}:E<=6?{spacing:2.16*W,ring:1.95*W}:{spacing:1.75*W,ring:1.65*W}}function or(E,X=!1){const W=Fr(E);$.spacing=W.spacing,$.ringScale=W.ring,$.target.spacing=W.spacing,$.target.ring=W.ring,X&&($.view.spacing=W.spacing,$.view.ring=W.ring)}function Yn(){const E=innerWidth,X=innerHeight,W=E/X;$.portrait=W<.92,or($.keyCount,!0),k.group.position.set(0,$.portrait?15.2:13.2,-28),k.group.scale.setScalar($.portrait?.86:1),K();for(let ie=0;ie<8;ie++){const Me=(ie-3.5)*$.spacing;U[ie].baseX=Me,U[ie].group.position.x=Me,U[ie].group.position.z=xa*Me*Me,U[ie].ring.scale.set($.view.ring,$.view.ring,1),U[ie].glow.scale.set($.view.ring*1.35,$.view.ring*1.35,1),$.laneXNow[ie]=Me}D.scale.set(($.keyCount-1)*$.spacing+$.ring*1.5,.9,1),r.aspect=W,r.fov=$.portrait?52:46,r.updateProjectionMatrix();const q=$.section?$.section.camZ:17.2;$.target.camZ=q+($.portrait?6.4:0),$.view.camZ=$.target.camZ,t.setSize(E,X),a.setSize(E,X),s.resolution.set(E/2,X/2)}addEventListener("resize",Yn),Yn(),addEventListener("pointermove",E=>{$.mouse.x=E.clientX/innerWidth*2-1,$.mouse.y=E.clientY/innerHeight*2-1},{passive:!0});function Or(E){if(!E)return;const X=!!$.section&&$.section.keys!==E.keys;$.section=E,$.energy=E.energy,$.keyCount=E.keys,or(E.keys),$.target.rotY=E.rotY,$.target.rotZ=E.rotZ,$.target.tilt=E.tilt,$.target.spread=E.spread,$.target.y=E.y,$.target.camZ=E.camZ+($.portrait?6.4:0),$.target.camY=E.camY,$.target.bloom=E.bloom*.82,$.target.spin=E.spin,$.targetMotion={style:E.motion||"fan",amp:E.motionAmp??.06,speed:E.motionSpeed??.5,pitch:E.motionPitch??.03},$.cityTarget=E.city??0,X&&($.zoomKick=Math.min(1.4,$.zoomKick+.85));const W={4:[2,3,4,5],6:[1,2,3,4,5,6],8:[0,1,2,3,4,5,6,7]};$.active=new Set(W[E.keys]||W[8]),$.live=new Set($.active);for(let q=0;q<8;q++){const ie=$.active.has(q);U[q].active=ie?1:0,ie||(U[q].ghostFx=null),U[q].targetColor.copy(U[q].color).lerp(new Ge(E.color),.24),ie&&(U[q].flash=Math.max(U[q].flash,.22))}k.slowColor.copy(U[0].targetColor),k.fastColor.copy(U[7].targetColor),y.color.set(E.accent)}function Ei(E){const X=new Set($.active);for(const q of E)X.add(q);let W=X.size!==$.live.size;if(!W){for(const q of X)if(!$.live.has(q)){W=!0;break}}if(W){$.live=X;for(const q of E)$.active.has(q)||(U[q].flash=Math.max(U[q].flash,.34),U[q].ghostFx=null)}}function kr(E){$.cityTarget=Math.max(0,Math.min(1,E))}function Br(E="run",X=1,W=null){const q=E||"off",ie=k.mode,Me=W??$.time;ie==="run"||ie==="final"?k.anchorRun+=Math.max(0,Me-k.anchorT):ie==="freeze"&&(k.anchorRun=k.runTime),k.anchorT=Me,k.mode=q,q==="off"?(k.target=0,k.frozen=!1,k.rate=1):(k.target=1,k.frozen=q==="freeze",k.rate=q==="final"?1.65:1,k.kick=Math.max(k.kick,.25+X*.35))}function Ba(E="fast",X=1){if(!(k.fade<.015)&&(k.kick=Math.max(k.kick,.2+X*.32),E==="slow"?k.slowKick=Math.max(k.slowKick,.35+X*.55):k.fastKick=Math.max(k.fastKick,.35+X*.55),X>1.05&&k.fade>.3)){const W=k.group.localToWorld(new I(0,0,.35));Ft(W,E==="slow"?ge.getHex():Se.getHex(),.9+X*.35)}}function za(){k.target=0,k.fade=0,k.mode="off",k.frozen=!1,k.rate=1,k.runTime=0,k.anchorT=0,k.anchorRun=0,k.slowAngle=0,k.fastAngle=0,k.slowKick=0,k.fastKick=0,k.kick=0,k.group.visible=!1,k.dialSlow.visible=!1,k.dialFast.visible=!1}function Ga(E){return U[E].baseX}function Ha(E){return xa*U[E].baseX*U[E].baseX}function qn(E,X){return U[E].group.localToWorld(new I(0,X,.2))}const lr=new I,v=new I;function N(){r.updateMatrixWorld(),C.updateWorldMatrix(!0,!1);for(let E=0;E<8;E++){const X=U[E];X.group.updateWorldMatrix(!1,!1);const W=X.group.matrixWorld;lr.set(0,.04,.22).applyMatrix4(W).project(r),v.set(0,11.4,.22).applyMatrix4(W).project(r);const q=(lr.x*.5+.5)*innerWidth,ie=(-lr.y*.5+.5)*innerHeight,Me=(v.x*.5+.5)*innerWidth,xe=(-v.y*.5+.5)*innerHeight;X.screenAngle=Math.atan2(Me-q,ie-xe),X.screen={x:q,y:ie,topX:Me,topY:xe,angle:X.screenAngle}}}function G(E){return U[E].screen||N(),U[E].screen}function H(){return N(),U.map(E=>E.screen)}function O(){return H().map(E=>E.x)}function he(E){return U[E].screen||N(),U[E].screenAngle}function ve(E,X=0){$.bpm=E||100,$.beatOffset=X}function Pe(E){const X=U[E];X.flash=Math.max(X.flash,.55),X.ring.scale.setScalar($.view.ring*1.1)}function we(E,X="sweep"){const W=U[E];W&&(W.ghostFx={type:X,t:0,dur:X==="bounce"?.85:1.15},X==="bounce"&&(W.flash=Math.max(W.flash,.65),Ft(qn(E,.05),W.color.getHex(),1.7)))}function We(){for(const E of U)E.ghostFx=null,E.ghost.visible=!1,E.ghost.material.opacity=0}function qe(E,X=1,W=1){const q=U[E];if(!q)return;const ie=qn(E,.1+Math.random()*.12),Me=3;for(let xe=0;xe<Me;xe++){const ze=ci[Tn=(Tn+1)%ci.length];ze.sprite.position.copy(ie),ze.sprite.position.y+=xe*.11,ze.sprite.position.z+=xe*.05,ze.sprite.material.color.copy(q.targetColor).lerp(De,.12+xe*.08),ze.sprite.material.rotation=Math.random()*Math.PI*2,ze.sprite.scale.set(.45,.45,1),ze.life=ze.max=1.15+xe*.24,ze.delay=xe*.075,ze.vx=X*(2.4+W*1.7)*(1-xe*.13)+(Math.random()-.5)*.5,ze.vy=.45+W*.35+Math.random()*.25,ze.base=.38+W*.38,ze.alpha=(.62-xe*.13)*Math.min(1,W),ze.spin=(Math.random()-.5)*1.2,ze.sprite.visible=!1}}function Be(E=1){$.energyPulse=Math.min(1.5,$.energyPulse+.35*E),$.shake=Math.min(.18,$.shake+.008*E)}function nt(E,X=1){let W;E==null?(W=C.localToWorld(new I(0,.3,.25)),ut(W,10483199,Math.round(22*X),5.2),Ft(W,10483199,4.2)):(W=qn(E,.08),ut(W,U[E].targetColor,Math.round(14+10*X),3.2+X),Ft(W,U[E].targetColor.getHex(),2.4+X)),$.shake=Math.min(.2,$.shake+.02*X)}function mt(E=1){Be(E),$.zoomKick=Math.min(1.4,$.zoomKick+.22*E),nt(null,.7+E*.7);for(let X=0;X<8;X++)$.active.has(X)||qe(X,X<3.5?-1:1,.7+E*.6)}function Et(E,X,W,q){$.targetMotion={style:E||"fan",amp:X??.08,speed:W??.6,pitch:q??.04}}function St(E,X){const W=U[E];W.flash=1,$.shake=Math.min(.16,$.shake+(X==="perfect"?.025:.016));const q=qn(E,.05);ut(q,W.color,X==="perfect"?22:14,3.5),Ft(q,W.color.getHex(),3)}function _t(E){$.shake=Math.min(.25,$.shake+.13),U[E];const X=qn(E,.05);ut(X,16724831,9,1.4),Ft(X,16724831,2)}const De=new Ge(16777215);new Ge;let Tt=0;function ct(E,X,W){Tt+=E;const q=W?X:Tt;$.time=q,$.playing=W;const ie=$.view,Me=$.target,xe=1-Math.exp(-E*2.2);ie.rotY+=(Me.rotY-ie.rotY)*xe,ie.rotZ+=(Me.rotZ-ie.rotZ)*xe,ie.tilt+=(Me.tilt-ie.tilt)*xe,ie.spread+=(Me.spread-ie.spread)*xe,ie.y+=(Me.y-ie.y)*xe,ie.camZ+=(Me.camZ-ie.camZ)*xe,ie.camY+=(Me.camY-ie.camY)*xe,ie.spin+=(Me.spin-ie.spin)*xe,ie.spacing+=(Me.spacing-ie.spacing)*(1-Math.exp(-E*3.1)),ie.ring+=(Me.ring-ie.ring)*(1-Math.exp(-E*3.1)),s.strength+=(Me.bloom-s.strength)*xe,$.zoomKick*=Math.exp(-E*2.6),$.energyPulse*=Math.exp(-E*3.2);const ze=60/$.bpm,it=((q-$.beatOffset)/ze%1+1)%1,st=Math.exp(-it*5.2);$.pulse=st;const Qe=$.motion,Vt=$.targetMotion,vt=1-Math.exp(-E*2.2);Qe.amp+=(Vt.amp-Qe.amp)*vt,Qe.speed+=(Vt.speed-Qe.speed)*vt,Qe.pitch+=(Vt.pitch-Qe.pitch)*vt,Qe.style=Vt.style;const Ot=$.energyPulse;s.strength+=Ot*.32,C.position.y=ie.y+Math.sin(q*.65)*.035+st*.03,C.rotation.y=ie.rotY+Math.sin(q*.22)*.02+Math.sin(q*.09)*ie.spin,C.rotation.z=ie.rotZ+Math.sin(q*.37)*.006,C.rotation.x=ie.tilt+Math.sin(q*.29)*.006;for(let ne=0;ne<8;ne++){const pe=U[ne],Ht=(ne-3.5)*ie.spacing*ie.spread;pe.baseX=Ht,pe.group.position.x=Ht,pe.group.position.z=xa*Ht*Ht,$.laneXNow[ne]=Ht;const mn=ne-3.5;let rn=0;switch(Qe.style){case"fan":rn=-mn*Qe.amp;break;case"slope":rn=Qe.amp;break;case"tiltL":rn=Qe.amp*1.15;break;case"tiltR":rn=-Qe.amp*1.15;break;case"zigzag":rn=(ne%2?1:-1)*Qe.amp*.95;break;case"wave":rn=Math.sin(q*Qe.speed+ne*.72)*Qe.amp-mn*Qe.amp*.22;break;case"orbit":rn=Math.sin(q*Qe.speed*.72+mn*.38)*Qe.amp*.78-mn*Qe.amp*.3;break;default:rn=-mn*Qe.amp}rn+=Math.sin(q*1.15+ne*.55)*Qe.amp*.12*(.4+$.energy),rn+=st*.006*Math.cos(ne*.9+.4);const Va=Math.sin(q*.55+ne*.7)*Qe.pitch+st*Qe.pitch*.32*Math.sin(ne*.8+.7)+Ot*.006,zr=1-Math.exp(-E*3.4);pe.angle+=(rn-pe.angle)*zr,pe.pitch+=(Va-pe.pitch)*zr,$.laneAngle[ne]=pe.angle,$.lanePitch[ne]=pe.pitch,pe.group.rotation.z=pe.angle,pe.group.rotation.x=pe.pitch,pe.line.scale.y=12.4*Math.cos(pe.pitch),pe.beam.scale.y=12.6*Math.cos(pe.pitch);const Gr=$.live.has(ne);let Rn=0,Wa=0;if(pe.ghostFx){const Hr=pe.ghostFx;Hr.t+=E;const Xa=Hr.t/Hr.dur;if(Xa>=1)pe.ghostFx=null,pe.ghost.visible=!1,pe.ghost.material.opacity=0;else if(Rn=Math.sin(Math.PI*Xa),Hr.type==="sweep"){pe.ghost.visible=!0,pe.ghost.position.set(0,.25+Xa*10.5,.08);const Ko=.85+.55*Rn;pe.ghost.scale.set(Ko,Ko,1),pe.ghost.material.opacity=Rn*.8,pe.ghost.material.color.copy(pe.targetColor).lerp(De,.3+Rn*.4)}else Wa=Rn,pe.ghost.visible=!1}const cu=Gr?(ne%2?.86:.96)*.58:Rn*.34,uu=Gr?.065+st*.03:Rn*.04,hu=Gr?.95:Wa*.78+Rn*.035;pe.line.material.opacity+=(cu-pe.line.material.opacity)*(1-Math.exp(-E*3.5)),pe.beam.material.opacity+=(uu-pe.beam.material.opacity)*(1-Math.exp(-E*3.5)),pe.ring.material.opacity+=(hu-pe.ring.material.opacity)*(1-Math.exp(-E*3.5)),pe.glow.material.opacity+=((Gr?.14:Rn*.07)+pe.flash*.3-pe.glow.material.opacity)*(1-Math.exp(-E*8)),pe.flash=Math.max(0,pe.flash-E*3.4);const Zo=ie.ring*(1+st*.045*(.4+$.energy)+pe.flash*.22+Wa*.5);pe.ring.scale.set(Zo,Zo,1),pe.ring.material.color.copy(pe.targetColor).lerp(De,pe.flash*.8),pe.glow.material.color.copy(pe.targetColor).lerp(De,pe.flash*.5),pe.line.material.color.copy(pe.targetColor).lerp(De,.14+pe.flash*.32),pe.beam.material.color.copy(pe.targetColor)}N();for(let ne=0;ne<8;ne++){const pe=U[ne];pe.line.material.rotation=-pe.screenAngle,pe.beam.material.rotation=-pe.screenAngle}D.scale.x=(ie.spacing*($.keyCount-1)+ie.ring*1.5)*ie.spread,D.material.opacity=.45+st*.3+$.energy*.15+Ot*.16;const nn=$.mouse.x*.55,Ai=ie.camY+$.mouse.y*.18;r.position.x+=(nn-r.position.x)*(1-Math.exp(-E*2)),r.position.y+=(Ai-r.position.y)*(1-Math.exp(-E*2)),r.position.z+=(ie.camZ-$.zoomKick*1.05-r.position.z)*(1-Math.exp(-E*3.4)),$.shake>5e-4&&(r.position.x+=(Math.random()-.5)*$.shake,r.position.y+=(Math.random()-.5)*$.shake,$.shake*=Math.exp(-E*10)),r.lookAt(0,4.05,0),f.rotation.y+=E*.006,h.rotation.y-=E*.004,d.rotation.y+=E*.012,_.position.x=-16+Math.sin(q*.05)*2,x.position.y=1+Math.sin(q*.07+1)*2;for(let ne=0;ne<u.length;ne++)u[ne].rotation.z+=E*(.02+ne*.012),u[ne].rotation.y+=E*.008;if($.city+=($.cityTarget-$.city)*(1-Math.exp(-E*1.6)),S.visible=$.city>.012,S.visible){S.position.x=$.mouse.x*1.4;for(let ne=0;ne<P.length;ne++){const pe=P[ne];pe.map.offset.x+=E*pe.speed*(.7+$.energy*1.6+st*.8),pe.mesh.position.y=pe.base+Math.sin(q*.17+ne*1.7)*.18,pe.mat.opacity=$.city*(ne?.42:.3)}}if(k.fade+=(k.target-k.fade)*(1-Math.exp(-E*2.6)),k.group.visible=k.fade>.008,k.group.visible){if(k.target>0&&!k.frozen&&(k.runTime=k.anchorRun+Math.max(0,q-k.anchorT)),!k.frozen){const mn=60/Math.max(1,$.bpm),rn=k.runTime/(mn*32)*Math.PI*2,Va=mn*(k.mode==="final"?.34:.5),zr=Math.floor((q-$.beatOffset)/Va)*(Math.PI*2/12);k.slowAngle+=(rn-k.slowAngle)*(1-Math.exp(-E*4)),k.fastAngle+=(zr-k.fastAngle)*(1-Math.exp(-E*20)),k.handSlow.material.rotation=-k.slowAngle,k.handFast.material.rotation=-k.fastAngle}k.slowKick=Math.max(0,k.slowKick-E*3.6),k.fastKick=Math.max(0,k.fastKick-E*4.4),k.kick=Math.max(0,k.kick-E*3.1);const ne=k.fade;k.face.material.opacity=ne*(.34+k.kick*.14),k.aura.material.opacity=ne*(.085+k.kick*.08),k.hub.material.opacity=ne*(.5+k.kick*.45),k.handSlow.material.opacity=ne*(.72+k.slowKick*.34),k.handFast.material.opacity=ne*(.82+k.fastKick*.28),k.handSlow.material.color.copy(k.slowColor).lerp(De,k.slowKick*.75),k.handFast.material.color.copy(k.fastColor).lerp(De,k.fastKick*.75);const pe=1.9*(1+k.kick*.26+Math.sin(q*7.5)*.025);k.hub.scale.set(pe,pe,1);const Ht=1+k.kick*.012;k.face.scale.set(21.6*Ht,21.6*Ht,1),k.dialSlow.visible=!0,k.dialFast.visible=!0,k.dialSlow.material.rotation=-k.slowAngle,k.dialFast.material.rotation=-k.fastAngle,k.dialSlow.material.opacity=ne*(.3+k.slowKick*.24),k.dialFast.material.opacity=ne*(.36+k.fastKick*.24),k.dialSlow.material.color.copy(k.slowColor).lerp(De,k.slowKick*.7),k.dialFast.material.color.copy(k.fastColor).lerp(De,k.fastKick*.7)}Xe(E,q);for(const ne of w)ne.rotation.x+=ne.userData.spin.x*E,ne.rotation.y+=ne.userData.spin.y*E,ne.rotation.z+=ne.userData.spin.z*E,ne.position.y+=Math.sin(q*.4+ne.position.x)*E*.06;let Cn=!1;for(let ne=0;ne<me;ne++){if(fe[ne]<=0)continue;if(Cn=!0,fe[ne]-=E,fe[ne]<=0){Ye[ne*3+1]=-999;continue}le[ne*3]*=.972,le[ne*3+1]-=2.4*E,le[ne*3+2]*=.972,Ye[ne*3]+=le[ne*3]*E,Ye[ne*3+1]+=le[ne*3+1]*E,Ye[ne*3+2]+=le[ne*3+2]*E;const pe=Math.max(0,fe[ne]/Ee[ne]);L[ne*3]*=.988,L[ne*3+1]*=.988,L[ne*3+2]*=.988,pe<.25&&(L[ne*3]*=pe/.25,L[ne*3+1]*=pe/.25,L[ne*3+2]*=pe/.25)}Cn&&(ce.attributes.position.needsUpdate=!0,ce.attributes.color.needsUpdate=!0);for(const ne of at){if(ne.life<=0)continue;ne.life-=E;const pe=1-Math.max(0,ne.life/ne.max),Ht=.75+pe*ne.scale;ne.sprite.scale.set(Ht,Ht,1),ne.sprite.material.opacity=(1-pe)*.9,ne.life<=0&&(ne.sprite.visible=!1)}for(const ne of ci){if(ne.delay>0&&(ne.delay-=E,ne.delay>0)||ne.life<=0)continue;if(ne.life-=E,ne.life<=0){ne.sprite.visible=!1;continue}const pe=1-ne.life/ne.max;ne.vx*=Math.exp(-E*2.5),ne.vy*=Math.exp(-E*1.9),ne.sprite.position.x+=ne.vx*E,ne.sprite.position.y+=ne.vy*E,ne.sprite.material.rotation+=ne.spin*E;const Ht=ne.base*(.7+pe*1.15);ne.sprite.scale.set(Ht,Ht,1),ne.sprite.material.opacity=Math.pow(1-pe,1.55)*ne.alpha,ne.sprite.visible=!0}}function Zt(){a.render()}function Zn(){t.dispose()}return{scene:n,camera:r,stage:C,noteRoot:M,state:$,clock:k,makeNote:Ne,setSection:Or,animate:ct,render:Zt,laneX:Ga,laneZ:Ha,worldPoint:qn,laneScreenXs:O,laneScreenPoints:H,laneScreenGeometry:G,laneScreenAngle:he,setPreviewLanes:Ei,setCity:kr,setTempo:ve,setClock:Br,clockTick:Ba,clockReset:za,startPendulum:se,stopPendulum:Y,swingResolve:de,swingWhiff:Ue,pendulumReset:Fe,pendulumTargetScreen:ye,pendulum:ae,pressFx:Pe,hitFx:St,missFx:_t,ghostFx:we,echoFx:qe,pulseFx:Be,burstFx:nt,vibeFx:mt,motionEvent:Et,clearGhosts:We,layout:Yn,dispose:Zn,get noteSpeed(){return $.noteSpeed},set noteSpeed(E){$.noteSpeed=E},get noteScale(){return Math.max(1,Math.min(1.3,$.view.ring/1.65))}}}class V0{constructor(){this.ctx=null,this.buffer=null,this.source=null,this.gain=null,this.startAt=0,this.offset=0,this.duration=0,this.loaded=!1,this.muted=!1,this.hitGain=null,this.cache=new Map}async load(e,t){let n=this.cache.get(e);if(!n){const r=await fetch(e);if(!r.ok)throw new Error("audio fetch failed: "+r.status);const a=Number(r.headers.get("content-length"))||115e4;let s;if(r.body&&r.body.getReader){const o=r.body.getReader(),c=[];let l=0;for(t?.(0);;){const{value:h,done:d}=await o.read();if(d)break;c.push(h),l+=h.length,t?.(Math.min(.94,l/a))}s=new Uint8Array(l);let f=0;for(const h of c)s.set(h,f),f+=h.length}else s=new Uint8Array(await r.arrayBuffer());t?.(.95),this.ctx=this.ctx||new(window.AudioContext||window.webkitAudioContext)({latencyHint:"interactive"}),n=await this.ctx.decodeAudioData(s.buffer),this.cache.set(e,n)}return this.buffer=n,this.duration=n.duration,this.loaded=!0,this.gain||(this.gain=this.ctx.createGain(),this.gain.gain.value=.92,this.gain.connect(this.ctx.destination)),this.hitGain||(this.hitGain=this.ctx.createGain(),this.hitGain.gain.value=.5,this.hitGain.connect(this.ctx.destination)),t?.(1),n}async start(e=0,t={}){if(!this.loaded)return;if(!this.ctx)throw new Error("no audio context");this.ctx.state!=="running"&&await this.ctx.resume(),this.stop(),this.source=this.ctx.createBufferSource(),this.source.buffer=this.buffer,this.source.connect(this.gain);const n=this.ctx.currentTime+.12;this.startAt=n,this.offset=e;try{const r=Math.max(0,(t.fadeStart??this.duration-6.7)-e),a=Math.max(.05,(t.fadeEnd??this.duration-4.7)-e);this.gain.gain.cancelScheduledValues(this.ctx.currentTime),this.gain.gain.setValueAtTime(.92,this.ctx.currentTime),this.gain.gain.setValueAtTime(.92,n+r),this.gain.gain.linearRampToValueAtTime(0,n+a)}catch{}this.source.start(n,e)}stop(){if(this.source){try{this.source.stop()}catch{}this.source.disconnect(),this.source=null}}pause(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}get time(){return this.ctx?this.ctx.currentTime-this.startAt+this.offset:0}get paused(){return!!this.ctx&&this.ctx.state==="suspended"}click(e=3,t=1){if(!this.ctx||this.ctx.state!=="running"||this.muted)return;const n=this.ctx.currentTime,r=this.ctx.createOscillator(),a=this.ctx.createGain();r.type="triangle";const s=360*Math.pow(2,e/12);r.frequency.setValueAtTime(s*1.5,n),r.frequency.exponentialRampToValueAtTime(s*.75,n+.035),a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(.035*t,n+.004),a.gain.exponentialRampToValueAtTime(1e-4,n+.055),r.connect(a),a.connect(this.hitGain),r.start(n),r.stop(n+.07)}thud(){if(!this.ctx||this.ctx.state!=="running"||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(90,e),t.frequency.exponentialRampToValueAtTime(45,e+.12),n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.05,e+.01),n.gain.exponentialRampToValueAtTime(1e-4,e+.18),t.connect(n),n.connect(this.hitGain),t.start(e),t.stop(e+.2)}}const Vc={KeyA:0,KeyS:1,KeyD:2,KeyF:3,KeyJ:4,KeyK:5,KeyL:6,Semicolon:7,Numpad1:0,Numpad2:1,Numpad3:2,Numpad4:3,Numpad5:4,Numpad6:5,Numpad7:6,Numpad8:7},ec={4:[2,3,4,5],6:[1,2,3,4,5,6],8:[0,1,2,3,4,5,6,7]},Ur=.185,Ki={perfect:.045,great:.09,good:.135},Wc={perfect:3e3,great:2e3,good:1e3,bad:300},Xc={perfect:1,great:.85,good:.55,bad:.25,miss:0},Yc="cryout-best-v2",W0="cryout-best-v1",X0=2.05,qc=512,Te=i=>document.getElementById(i),z={canvas:Te("scene"),hud:Te("hud"),pads:[...document.querySelectorAll(".pad")],centerPad:Te("centerPad"),start:Te("startScreen"),startBtn:Te("startBtn"),startLabel:Te("startBtnLabel"),loadFill:Te("loadFill"),startLanes:Te("startLanes"),startTrack:Te("startTrack"),startLength:Te("startLength"),startLevel:Te("startLevel"),trackCards:[...document.querySelectorAll(".track-card")],score:Te("score"),acc:Te("acc"),maxCombo:Te("maxCombo"),progress:Te("progressFill"),progressGlow:Te("progressGlow"),section:Te("sectionName"),time:Te("timeLabel"),keys:Te("keysCount"),energy:Te("energyFill"),comboHud:Te("comboHud"),comboNum:Te("comboNum"),judge:Te("judge"),pauseBtn:Te("pauseBtn"),pause:Te("pauseScreen"),result:Te("resultScreen"),toast:Te("toast"),rank:Te("rank"),finalScore:Te("finalScore"),finalAcc:Te("finalAcc"),cPerfect:Te("cPerfect"),cGreat:Te("cGreat"),cGood:Te("cGood"),cBad:Te("cBad"),cMiss:Te("cMiss"),fMaxCombo:Te("fMaxCombo"),fcBadge:Te("fcBadge"),resultTag:Te("resultTag"),bestScoreLabel:Te("bestScoreLabel"),bestBadge:Te("bestBadge"),bestNote:Te("bestNote"),bestLine:Te("bestLine"),hudTrack:Te("hudTrack"),hudBpm:Te("hudBpm"),resultTrack:Te("resultTrack"),resultDiff:Te("resultDiff"),resultBpm:Te("resultBpm"),footTrack:Te("footTrack"),footLanes:Te("footLanes"),barPerfect:Te("barPerfect"),barGreat:Te("barGreat"),barGood:Te("barGood"),barBad:Te("barBad"),barMiss:Te("barMiss"),peakCombo:Te("peakCombo"),comboLine:Te("comboLine"),comboFill:Te("comboFill"),accRing:Te("accRing"),scoreDelta:Te("scoreDelta"),resultLoading:Te("resultLoading"),loadTrack:Te("loadTrack"),loadProgress:Te("loadProgress"),loadPct:Te("loadPct"),loadRank:Te("loadRank"),flash:Te("flash")},Oe=H0(z.canvas),Ct=new V0;let Dt=bo[mu]||rc[0],At=Dt.chart,Wn=[],Ti=[],li=!1,lt="boot",ir=null,xo=0,Go=At.song.chartEnd,yo=At.song.duration,ya=0,$i=0,ai=[],Mo=0,So=0;const Ie={score:0,combo:0,maxCombo:0,judged:0,weight:0,perfect:0,great:0,good:0,bad:0,miss:0,dropped:0,health:100},yn=new Array(8).fill(!1),bi=new Array(8).fill(null),Xn=new Set;function Zc(){return Xn.size>0}let tc=0,yr=0,Mr=0;function Y0(){const i={};try{const e=localStorage.getItem(W0);e&&(i.cryout=JSON.parse(e))}catch{}try{const e=localStorage.getItem(Yc);e&&Object.assign(i,JSON.parse(e)||{})}catch{}return i}let Mi=Y0(),xr=Mi[Dt.id]||null;function Kc(){xr=Mi[Dt.id]||null;const i=xr?`${String(xr.score).padStart(7,"0")} · ${xr.rank||"—"}`:"—";z.bestScoreLabel&&(z.bestScoreLabel.textContent=i),z.bestLine&&(z.bestLine.innerHTML=`PERSONAL BEST <b>${i}</b>`);for(const e of z.trackCards){const t=Mi[e.dataset.track],n=e.querySelector(".tc-best");n&&(n.textContent=t?`PB ${t.rank||"—"}`:"",n.title=t?`Personal best ${t.score} · ${(t.acc||0).toFixed(2)}%`:"")}}Oe.setSection(At.sections[0]);Oe.setTempo(At.song.bpm,At.song.beatOffset);Oe.setCity(At.sections[0].city||0);function q0(){for(const i of Wn)i.group.removeFromParent(),i.head.material.dispose(),i.body&&i.body.material.dispose(),i.tail&&i.tail.material.dispose();Wn=[]}function $c(){q0(),Ti=(At.swings||[]).map((i,e)=>({t:i.t,index:e,state:"pending"})),Wn=At.notes.map((i,e)=>{const t=Oe.makeNote(i.lane,i.type);return t.group.visible=!1,{data:i,index:e,lane:i.lane,type:i.type,state:"pending",endTime:i.t+(i.dur||0),group:t.group,head:t.head,body:t.body,tail:t.tail,color:t.color,tickAt:i.t}})}function Ho(){for(const i of Wn)i.state="pending",i.tickAt=i.data.t,i.group.visible=!1,i.group.position.set(0,0,0),i.head.visible=!0,i.head.scale.set(1.04,1.04,1),i.head.material.opacity=1,i.body&&(i.body.visible=!0,i.body.scale.set(.52,1,1),i.body.position.y=.5,i.tail.visible=!0,i.tail.position.y=1);Object.assign(Ie,{score:0,combo:0,maxCombo:0,judged:0,weight:0,perfect:0,great:0,good:0,bad:0,miss:0,dropped:0,health:100}),yn.fill(!1),bi.fill(null),Xn.clear(),yr=0,Mr=0,ai=[],Mo=0,So=0,Oe.clearGhosts(),Oe.clockReset(),Ua(),Oe.pendulumReset();for(const i of Ti)i.state="pending";xo=0,ir=null,Qc(At.sections[0],!0),Jc(0),oi(0,!1),z.judge.className="";for(const i of z.pads)i.classList.remove("pressed");z.flash.classList.remove("on")}function jc(i){return ec[i]||ec[8]}function Z0(i){const e=new Set;for(const t of Wn){if(t.state!=="pending")continue;const n=t.data.t-i;n<X0&&n>-Ur&&e.add(t.lane)}return e}function K0(i){return String(i).padStart(2,"0")}function To(i){const e=Math.max(0,Math.floor(i));return`${Math.floor(e/60)}:${K0(e%60)}`}function Jc(i){i-Mo>=.32&&(Mo=i,ai.push(Ie.combo),ai.length>qc&&ai.shift()),z.score.textContent=String(Ie.score).padStart(7,"0");const e=Ie.judged?Ie.weight/Ie.judged*100:100;z.acc.textContent=e.toFixed(2)+"%",z.maxCombo.textContent=Ie.maxCombo;const t=Math.max(0,Math.min(1,i/Go));z.progress.style.width=(t*100).toFixed(2)+"%",z.progressGlow.style.left=(t*100).toFixed(2)+"%";const n=Math.max(0,Math.min(yo,i));z.time.textContent=`${To(n)} / ${To(yo)}`,z.energy.style.height=Math.max(0,Math.min(100,Ie.health)).toFixed(1)+"%"}function Nr(i,e){const t=z.judge;t.textContent=e||i.toUpperCase(),t.className=i,t.offsetWidth,t.classList.add("pop")}function oi(i,e=!0){Ie.combo=i,i>Ie.maxCombo&&(Ie.maxCombo=i),z.comboNum.textContent=i,z.maxCombo.textContent=Ie.maxCombo,i>=2?z.comboHud.classList.add("on"):z.comboHud.classList.remove("on"),i>=2&&e&&(z.comboHud.classList.remove("bump"),z.comboHud.offsetWidth,z.comboHud.classList.add("bump"))}function Cr(i,e=1300){z.toast.textContent=i,z.toast.classList.add("on"),clearTimeout(tc),tc=setTimeout(()=>z.toast.classList.remove("on"),e)}function Qc(i,e=!1){if(!i||!e&&i===ir)return;ir=i,Oe.setSection(i),z.section.textContent=i.name,z.keys.textContent=i.keys;const t=new Set(jc(i.keys));for(const n of z.pads){const r=Number(n.dataset.lane),a=t.has(r);n.classList.toggle("active",a),n.classList.toggle("sleep",!a),n.setAttribute("aria-hidden",String(!a)),n.tabIndex=a?0:-1}document.documentElement.style.setProperty("--cyan",i.color),document.documentElement.style.setProperty("--magenta",i.accent),e||(Cr(`${i.name} // ${i.keys} LANES`,1100),Oe.state.shake=Math.min(.12,Oe.state.shake+.035))}function $0(i){const e=At.sections;for(let t=e.length-1;t>=0;t--)if(i>=e[t].start)return{index:t,sec:e[t]};return{index:0,sec:e[0]}}function j0(i,e){const t=Math.abs(e);let n;t<=Ki.perfect?n="perfect":t<=Ki.great?n="great":t<=Ki.good?n="good":n="bad",Ie[n]++,Ie.judged++,Ie.weight+=Xc[n],Ie.score+=Wc[n],Ie.health=Math.min(100,Ie.health+(n==="perfect"?1.1:n==="great"?.8:n==="good"?.4:-1.6)),n==="bad"?oi(0,!1):oi(Ie.combo+1),i.type==="hold"?(i.state="holding",i.endTime=i.data.t+i.data.dur,i.tickAt=Ct.time,i.head.visible=!1,bi[i.lane]=i):(i.state="done",i.group.visible=!1),Nr(n,n==="perfect"?"PERFECT":n==="great"?"GREAT":n==="good"?"GOOD":"BAD"),Oe.hitFx(i.lane,n),Ct.click(i.lane,n==="perfect"?.52:.38)}function J0(i){i.state==="pending"&&(i.state="miss",i.group.visible=!1,Ie.miss++,Ie.judged++,Ie.health=Math.max(0,Ie.health-5),oi(0,!1),Nr("miss","MISS"),Oe.missFx(i.lane),Ct.thud())}function eu(i){i.state==="holding"&&(i.state="dropped",i.group.visible=!1,bi[i.lane]=null,Ie.dropped++,Ie.miss++,Ie.judged++,Ie.health=Math.max(0,Ie.health-4),oi(0,!1),Nr("miss","HOLD LOST"),Oe.missFx(i.lane),Ct.thud())}function tu(i){i.state==="holding"&&(i.state="done",i.group.visible=!1,bi[i.lane]=null,Ie.score+=450,Ie.health=Math.min(100,Ie.health+1.2),Oe.pressFx(i.lane),Oe.hitFx(i.lane,"great"))}function Vo(i){if(lt!=="playing")return;Oe.pressFx(i),Ct.click(i,.16);const e=Ct.time;if(e<0)return;let t=null,n=1/0;for(const r of Wn){if(r.lane!==i||r.state!=="pending")continue;const a=e-r.data.t;if(a<-.16||a>Ur)continue;const s=Math.abs(a);s<n&&(n=s,t=r)}t&&j0(t,e-t.data.t)}function Wo(i){if(lt!=="playing")return;const e=bi[i];e&&(Zc()||(bi[i]=null,Ct.time<e.endTime-.12?eu(e):tu(e)))}function Q0(i){Ti.length&&(li=!0,Oe.startPendulum({start:i.t,period:i.period??2.4146,amplitude:i.amplitude??.42,times:Ti.map(e=>e.t)}),document.body.classList.add("pendulum"),z.centerPad.classList.add("show"),z.centerPad.setAttribute("aria-hidden","false"),nu(),Cr("STASIS // TAP THE CENTRE",1800))}function Ua(){li=!1,Oe.stopPendulum(),document.body.classList.remove("pendulum"),z.centerPad&&(z.centerPad.classList.remove("show","pressed"),z.centerPad.setAttribute("aria-hidden","true"))}function nu(){if(!li||!z.centerPad)return;const i=Oe.pendulumTargetScreen(),e=Math.max(140,i.radius*2);z.centerPad.style.left=i.x.toFixed(1)+"px",z.centerPad.style.top=i.y.toFixed(1)+"px",z.centerPad.style.width=e.toFixed(1)+"px",z.centerPad.style.height=e.toFixed(1)+"px"}function eg(i,e){const t=Math.abs(e);let n;t<=Ki.perfect?n="perfect":t<=Ki.great?n="great":t<=Ki.good?n="good":n="bad",i.state="done",Ie[n]++,Ie.judged++,Ie.weight+=Xc[n],Ie.score+=Wc[n],Ie.health=Math.min(100,Ie.health+(n==="perfect"?1.2:n==="great"?.9:n==="good"?.5:-1.4)),n==="bad"?oi(0,!1):oi(Ie.combo+1),Nr(n,n==="perfect"?"PERFECT":n==="great"?"GREAT":n==="good"?"GOOD":"BAD"),Oe.swingResolve(i.index,"hit"),Ct.click(3,n==="perfect"?.56:.4)}function tg(i){i.state==="pending"&&(i.state="miss",Ie.miss++,Ie.judged++,Ie.health=Math.max(0,Ie.health-5),oi(0,!1),Nr("miss","MISS"),Oe.swingResolve(i.index,"miss"),Ct.thud())}function ng(i){if(li)for(const e of Ti)e.state==="pending"&&i>e.t+Ur&&tg(e)}function Xo(){if(lt!=="playing"||!li)return;const i=Ct.time;let e=null,t=1/0;for(const n of Ti){if(n.state!=="pending")continue;const r=i-n.t;if(r<-.16||r>Ur)continue;const a=Math.abs(r);a<t&&(t=a,e=n)}if(!e){Oe.swingWhiff(),Ct.click(3,.1);return}eg(e,i-e.t)}const ws=8.4;function ig(i){const e=Oe.noteScale;for(const t of Wn)if(t.state==="pending"){const n=(t.data.t-i)*ws;if(t.group.position.set(0,n,.24),t.group.visible=n<14.5&&n>-1.3,t.head.scale.set(1.04*e,1.04*e,1),t.body){const r=t.data.dur*ws;t.body.visible=t.group.visible,t.tail.visible=t.group.visible,t.body.scale.set(.52*e,r,1),t.body.position.y=r/2,t.body.material.rotation=-Oe.laneScreenAngle(t.lane),t.tail.scale.set(.68*e,.68*e,1),t.tail.position.y=r}i>t.data.t+Ur&&J0(t)}else if(t.state==="holding"){if(!yn[t.lane]&&!Zc()){eu(t);continue}if(i>=t.endTime-.02){tu(t);continue}const n=Math.max(0,(t.endTime-i)*ws);t.group.visible=!0,t.group.position.set(0,.02,.24),t.head.visible=!1,t.body&&(t.body.visible=n>.03,t.body.scale.set(.52*e,n,1),t.body.position.y=n/2,t.body.material.rotation=-Oe.laneScreenAngle(t.lane),t.tail.visible=n>.4,t.tail.scale.set(.68*e,.68*e,1),t.tail.position.y=n),i>t.tickAt&&(t.tickAt=i+.12,Ie.score+=24,Ie.health=Math.min(100,Ie.health+.06))}else t.group.visible=!1}async function Yo(){if(Ct.loaded){$i++,z.start.classList.remove("show"),z.result.classList.remove("show"),z.resultLoading.classList.remove("show"),z.pause.classList.remove("show"),z.hud.classList.remove("hidden"),z.hud.setAttribute("aria-hidden","false"),document.body.classList.add("playing"),Ho(),lt="starting";try{await Ct.start(0,{fadeStart:Dt.fadeStart,fadeEnd:Dt.fadeEnd}),lt="playing",Cr(`LISTEN // ${At.sections[0].keys} LANES`,1500)}catch(i){console.error(i),lt="menu",document.body.classList.remove("playing"),z.hud.classList.add("hidden"),z.start.classList.add("show"),z.startLabel.textContent="AUDIO ERROR",Cr("AUDIO COULD NOT START",3e3)}}}function ka(){lt==="playing"&&(lt="paused",Ct.pause(),z.pause.classList.add("show"))}async function iu(){lt==="paused"&&(Ct.resume(),z.pause.classList.remove("show"),lt="playing")}function ru(){$i++,lt="menu",Ct.stop(),Ct.resume(),z.pause.classList.remove("show"),z.result.classList.remove("show"),z.resultLoading.classList.remove("show"),z.hud.classList.add("hidden"),z.hud.setAttribute("aria-hidden","true"),z.start.classList.add("show"),document.body.classList.remove("playing"),Oe.setSection(At.sections[0]),Oe.setTempo(At.song.bpm,At.song.beatOffset),Oe.setCity(At.sections[0].city||0),Oe.setPreviewLanes(new Set);for(const i of Wn)i.group.visible=!1;yn.fill(!1),bi.fill(null),Xn.clear(),yr=0,Mr=0,Oe.clearGhosts(),Oe.clockReset(),Ua(),Oe.pendulumReset(),Dt.id==="chronostasis"&&Oe.setClock("run",.4);for(const i of z.pads)i.classList.remove("pressed","active","sleep");document.documentElement.style.setProperty("--cyan","#5ee7ff"),document.documentElement.style.setProperty("--magenta","#ff5fd2")}function rg(i,e){return e===0?"F":i>=99.5?"S+":i>=98?"S":i>=93?"A":i>=86?"B":i>=76?"C":i<50?"F":"D"}function ag(i,e){const r=i.length?i:[0,0,0,0],a=Math.max(1,e,...r),s=320/Math.max(1,r.length-1);let o="";for(let l=0;l<r.length;l++){const f=l*s,h=116-r[l]/a*106;o+=`${l?"L":"M"}${f.toFixed(1)} ${h.toFixed(1)}`}const c=`${o}L320 116L0 116Z`;return{line:o,fill:c}}function sg(i=1){z.flash.style.opacity=String(Math.min(.42,.16+i*.18)),z.flash.classList.add("on"),clearTimeout(So),So=setTimeout(()=>{z.flash.style.opacity="",z.flash.classList.remove("on")},180)}function nc(i,e,t,n){const a=performance.now(),s=o=>{const c=Math.min(1,(o-a)/t),l=1-Math.pow(1-c,3);i.textContent=n(Math.round(0+(e-0)*l)),c<1&&requestAnimationFrame(s)};requestAnimationFrame(s)}function og(i){const{rank:e,acc:t,full:n,isBest:r,prevBest:a,judgeTotals:s}=i;z.rank.textContent=e,z.finalScore.textContent="0000000",z.finalAcc.textContent="0.00%",nc(z.finalScore,i.score,900,p=>String(p).padStart(7,"0")),nc(z.fMaxCombo,i.maxCombo,700,p=>String(p));const o=performance.now(),c=p=>{const _=Math.min(1,(p-o)/900),x=t*(1-Math.pow(1-_,3));z.finalAcc.textContent=x.toFixed(2)+"%",z.accRing.style.setProperty("--acc",x.toFixed(2)+"%"),_<1&&requestAnimationFrame(c)};requestAnimationFrame(c),z.cPerfect.textContent=i.counts.perfect,z.cGreat.textContent=i.counts.great,z.cGood.textContent=i.counts.good,z.cBad.textContent=i.counts.bad,z.cMiss.textContent=i.counts.miss;const l=Math.max(1,s);z.barPerfect.style.width=(i.counts.perfect/l*100).toFixed(1)+"%",z.barGreat.style.width=(i.counts.great/l*100).toFixed(1)+"%",z.barGood.style.width=(i.counts.good/l*100).toFixed(1)+"%",z.barBad.style.width=(i.counts.bad/l*100).toFixed(1)+"%",z.barMiss.style.width=(i.counts.miss/l*100).toFixed(1)+"%";const f=ag(ai,Ie.maxCombo);z.comboLine.setAttribute("d",f.line),z.comboFill.setAttribute("d",f.fill),z.peakCombo.textContent=Ie.maxCombo,z.resultTrack.textContent=Dt.title,z.resultDiff.textContent=Dt.difficulty,z.resultBpm.textContent=`${Dt.bpm} BPM`,z.footTrack.textContent=Dt.shortTitle,z.footLanes.textContent=Dt.laneLabel,z.resultTag.textContent=n?"FULL COMBO // FIELD MASTERED":t<50?"SIGNAL LOST // TRY AGAIN":"CLEARED // SIGNAL COMPLETE",z.fcBadge.classList.toggle("on",n),z.bestBadge.classList.toggle("on",r);const h=Mi[Dt.id]||null;z.bestNote.innerHTML=h?`${String(h.score).padStart(7,"0")} · ${h.rank||"—"}`:"FIRST RUN";const d=Math.max(0,(h?.score||0)-i.score);z.scoreDelta.textContent=r?a?`NEW BEST +${String(Math.max(0,i.score-a.score)).padStart(5,"0")}`:"FIRST CLEAR":d>0?`PB GAP ${String(d).padStart(5,"0")}`:"PB MATCHED",z.result.classList.remove("show"),z.result.offsetWidth,z.result.classList.add("show"),setTimeout(()=>{z.resultLoading.classList.remove("show")},60),z.resultLoading.setAttribute("aria-hidden","true")}function lg(){if(lt!=="playing"&&lt!=="paused")return;lt="results",Ct.stop(),Ct.resume(),z.hud.classList.add("hidden"),z.hud.setAttribute("aria-hidden","true"),z.pause.classList.remove("show"),document.body.classList.remove("playing");const i=Ie.judged?Ie.weight/Ie.judged*100:100,e=rg(i,Ie.judged);ai.push(Ie.combo),ai.length>qc&&ai.shift();const t=Ie.miss===0&&Ie.bad===0&&Ie.judged>0,n=Ie.score,r=Mi[Dt.id]||null,a=!r||n>r.score||n===r.score&&i>r.acc;if(a){Mi[Dt.id]={score:n,acc:i,rank:e,maxCombo:Ie.maxCombo,full:t,at:Date.now()};try{localStorage.setItem(Yc,JSON.stringify(Mi))}catch{}}Kc();const s={score:n,acc:i,rank:e,full:t,isBest:a,prevBest:r,maxCombo:Ie.maxCombo,counts:{...Ie},judgeTotals:Ie.judged},o=++$i;z.result.classList.remove("show"),z.resultLoading.classList.add("show"),z.resultLoading.setAttribute("aria-hidden","false"),z.loadTrack.textContent=`${Dt.shortTitle} // ${Dt.difficulty}`,z.loadRank.textContent="?",z.loadProgress.style.width="0%",z.loadPct.textContent="00%";const c=performance.now(),l=1650,f=h=>{if(o!==$i)return;const d=Math.min(1,(h-c)/l),p=1-Math.pow(1-d,3);z.loadProgress.style.width=(p*100).toFixed(1)+"%",z.loadPct.textContent=String(Math.round(p*100)).padStart(2,"0")+"%",d<1?requestAnimationFrame(f):(z.loadRank.textContent=e,setTimeout(()=>{o===$i&&og(s)},280))};requestAnimationFrame(f)}function cg(){$i++,z.result.classList.remove("show"),Yo()}function ug(i=new Set){const e=new Set(ir?jc(ir.keys):[]);for(const t of i)e.add(t);for(let t=0;t<8;t++){const n=Oe.laneScreenGeometry(t),r=t>0?n.x-Oe.laneScreenGeometry(t-1).x:n.x-Oe.laneScreenGeometry(1).x,a=t<7?Oe.laneScreenGeometry(t+1).x-n.x:n.x-Oe.laneScreenGeometry(6).x,s=Math.max(26,(Math.abs(r)+Math.abs(a))*.5),o=Math.max(48,Math.min(240,s*1.1)),c=n.y+26,l=Math.max(6,Math.min(c-110,n.topY)),f=Math.max(110,c-l),h=z.pads[t],d=`translate(-50%,-100%) rotate(${n.angle.toFixed(4)}rad)`;h.style.left=n.x.toFixed(1)+"px",h.style.top=c.toFixed(1)+"px",h.style.width=o.toFixed(1)+"px",h.style.height=f.toFixed(1)+"px",h.style.transform=d;const p=e.has(t);h.classList.contains("sleep")===p&&h.classList.toggle("sleep",!p),h.setAttribute("aria-hidden",String(!p))}nu()}function hg(i){const e=$0(i);(e.index!==xo||ir===null)&&(xo=e.index,Qc(e.sec))}function fg(i){const e=At.ghosts||[];for(;yr<e.length&&e[yr].t<=i;){const t=e[yr++];Oe.ghostFx(t.lane,t.type)}}function dg(i){const e=At.events||[];for(;Mr<e.length&&e[Mr].t<=i;){const t=e[Mr++];switch(t.type){case"echo":Oe.echoFx(t.lane,t.dir??(t.lane<3.5?-1:1),t.power??1);break;case"pulse":Oe.pulseFx(t.power??1);break;case"burst":Oe.burstFx(t.lane,t.power??1);break;case"vibe":Oe.vibeFx(t.power??1),sg(t.power??1);break;case"motion":Oe.motionEvent(t.style,t.amp,t.speed,t.pitch);break;case"clock":Oe.setClock(t.mode,t.power??1,t.t),t.mode!=="freeze"&&Ua();break;case"clockTick":Oe.clockTick(t.hand,t.power??1);break;case"pendulum":t.mode==="start"?Q0(t):Ua();break}}}function pg(i){if(i.code==="Escape"){lt==="playing"?(i.preventDefault(),ka()):lt==="paused"&&(i.preventDefault(),iu());return}if(i.code==="Space"){lt==="playing"&&li&&(i.preventDefault(),i.repeat||Xo());return}if(i.repeat)return;const e=Vc[i.code];e!==void 0&&(i.preventDefault(),lt==="playing"&&(yn[e]||(yn[e]=!0,z.pads[e].classList.add("pressed"),Vo(e))))}function mg(i){const e=Vc[i.code];e!==void 0&&yn[e]&&(yn[e]=!1,z.pads[e].classList.remove("pressed"),Wo(e))}document.addEventListener("keydown",pg,{passive:!1});document.addEventListener("keyup",mg);for(const i of z.pads){const e=Number(i.dataset.lane),t=r=>{if(r.preventDefault(),lt==="playing"){Xn.add(r.pointerId);try{i.setPointerCapture(r.pointerId)}catch{}yn[e]||(yn[e]=!0,i.classList.add("pressed"),Vo(e))}},n=r=>{r.preventDefault(),Xn.delete(r.pointerId),yn[e]&&(yn[e]=!1,i.classList.remove("pressed"),Wo(e))};i.addEventListener("pointerdown",t,{passive:!1}),i.addEventListener("pointerup",n,{passive:!1}),i.addEventListener("pointercancel",n,{passive:!1}),i.addEventListener("lostpointercapture",n,{passive:!1}),i.addEventListener("contextmenu",r=>r.preventDefault())}if(z.centerPad){const i=t=>{if(t.preventDefault(),!(lt!=="playing"||!li)){Xn.add(t.pointerId);try{z.centerPad.setPointerCapture(t.pointerId)}catch{}z.centerPad.classList.add("pressed"),Xo()}},e=t=>{t.preventDefault(),Xn.delete(t.pointerId),z.centerPad.classList.remove("pressed")};z.centerPad.addEventListener("pointerdown",i,{passive:!1}),z.centerPad.addEventListener("pointerup",e,{passive:!1}),z.centerPad.addEventListener("pointercancel",e,{passive:!1}),z.centerPad.addEventListener("lostpointercapture",e,{passive:!1}),z.centerPad.addEventListener("contextmenu",t=>t.preventDefault())}document.addEventListener("pointerdown",i=>{lt==="playing"&&Xn.add(i.pointerId)},{passive:!0});const qo=i=>{Xn.delete(i.pointerId)};document.addEventListener("pointerup",qo,{passive:!0});document.addEventListener("pointercancel",qo,{passive:!0});document.addEventListener("pointerleave",qo,{passive:!0});z.startBtn.addEventListener("click",()=>{(lt==="boot"||lt==="menu")&&Yo()});for(const i of z.trackCards)i.addEventListener("click",()=>{lt!=="boot"&&lt!=="menu"||i.dataset.track!==Dt.id&&su(i.dataset.track)});z.pauseBtn.addEventListener("click",ka);Te("resumeBtn").addEventListener("click",iu);Te("restartBtn").addEventListener("click",()=>{z.pause.classList.remove("show"),Yo()});Te("quitBtn").addEventListener("click",ru);Te("retryBtn").addEventListener("click",cg);Te("menuBtn").addEventListener("click",ru);document.addEventListener("visibilitychange",()=>{document.hidden&&lt==="playing"&&ka()});addEventListener("blur",()=>{lt==="playing"&&ka()});z.canvas.addEventListener("contextmenu",i=>i.preventDefault());function au(){const i=Dt;z.startTrack&&(z.startTrack.textContent=i.shortTitle),z.startLength&&(z.startLength.textContent=To(i.duration)),z.startLevel&&(z.startLevel.textContent=i.difficulty),z.startLanes&&(z.startLanes.textContent=i.laneLabel),z.hudTrack&&(z.hudTrack.textContent=i.shortTitle),z.hudBpm&&(z.hudBpm.textContent=`${i.bpm} BPM`),z.loadTrack&&(z.loadTrack.textContent=`${i.shortTitle} // ${i.difficulty}`);for(const e of z.trackCards){const t=bo[e.dataset.track];t&&e.style.setProperty("--card-accent",t.accent);const n=e.dataset.track===i.id;e.classList.toggle("active",n),e.setAttribute("aria-selected",String(n))}document.documentElement.style.setProperty("--track-accent",i.accent),Kc()}async function su(i,{autoLoad:e=!0}={}){const t=bo[i];t&&(Dt=t,At=t.chart,Go=At.song.chartEnd,yo=t.duration,au(),Oe.setSection(At.sections[0]),Oe.setTempo(At.song.bpm,At.song.beatOffset),Oe.setCity(At.sections[0].city||0),Oe.setPreviewLanes(new Set),$c(),Ho(),t.id==="chronostasis"&&Oe.setClock("run",.4),e&&(lt="boot",z.startBtn.disabled=!0,await ou(t)))}async function ou(i=Dt){const e=++ya;z.startLabel.textContent="DECODING AUDIO",z.loadFill.style.width="0%";try{if(await Ct.load(i.audio,t=>{e===ya&&(z.loadFill.style.width=Math.round(t*100)+"%")}),e!==ya)return;z.loadFill.style.width="100%",z.startLabel.textContent="START SESSION",z.startBtn.disabled=!1,lt="menu"}catch(t){if(e!==ya)return;console.error(t),z.startLabel.textContent="AUDIO UNAVAILABLE",Cr("COULD NOT LOAD AUDIO",4e3),lt="menu"}}$c();Ho();lt="boot";au();ou(Dt);let ic=performance.now(),Es=0;function lu(i){const e=Math.min(.05,Math.max(0,(i-ic)/1e3));if(ic=i,Es+=e,lt==="playing"){const t=Ct.time;hg(t);const n=Z0(t);Oe.setPreviewLanes(n),fg(t),dg(t),ng(t),ig(t),Jc(t),Oe.animate(e,t,!0),ug(n),t>=Go&&lg()}else if(lt==="paused"){const t=Ct.time;Oe.animate(e,t,!0)}else Oe.animate(e,Es,!1);Oe.render(),requestAnimationFrame(lu)}window.__cryout={audio:Ct,stats:Ie,scene:Oe,pressLane:Vo,releaseLane:Wo,selectTrack:su,get chart(){return At},get notes(){return Wn},get swings(){return Ti},get swingMode(){return li},swingTap:Xo,get state(){return lt},get best(){return xr}};requestAnimationFrame(lu);
