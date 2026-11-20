(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const Xd={song:{title:"CRYOUT",shortTitle:"CRYOUT",artist:"ORIGINAL TRACK",bpm:100,duration:138.1,chartEnd:133.5,beatOffset:.535,difficulty:"ADVANCED",laneLabel:"4 · 6 · 8",fadeStart:131.4,fadeEnd:133.4},sections:[{name:"SIGNAL",start:3.535,end:12.535,keys:4,color:"#5ee7ff",accent:"#8f7bff",energy:.18,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.8,bloom:.55,spin:.03,motion:"fan",motionAmp:.045,motionSpeed:.45,motionPitch:.02,city:0},{name:"ASCENT",start:12.535,end:22.735,keys:4,color:"#57d9ff",accent:"#9d7bff",energy:.38,rotY:.05,rotZ:-.02,tilt:.015,spread:1.03,y:.05,camZ:16.6,camY:6.6,bloom:.65,spin:.05,motion:"fan",motionAmp:.075,motionSpeed:.55,motionPitch:.035,city:0},{name:"CURRENT",start:22.735,end:41.335,keys:6,color:"#42e0d0",accent:"#c46bff",energy:.62,rotY:-.1,rotZ:.03,tilt:-.02,spread:1.06,y:.1,camZ:15.9,camY:6.4,bloom:.8,spin:.08,motion:"wave",motionAmp:.1,motionSpeed:.7,motionPitch:.05,city:0},{name:"SURGE",start:41.335,end:64.135,keys:8,color:"#ff5fd2",accent:"#58e6ff",energy:.82,rotY:.16,rotZ:-.05,tilt:.03,spread:1.1,y:.16,camZ:15.1,camY:6.2,bloom:.92,spin:.12,motion:"slope",motionAmp:.15,motionSpeed:.85,motionPitch:.075,city:0},{name:"DRIFT",start:64.135,end:75.535,keys:6,color:"#8f9dff",accent:"#ff7bd5",energy:.3,rotY:-.04,rotZ:.02,tilt:.06,spread:.94,y:.45,camZ:17.6,camY:7.1,bloom:.55,spin:.04,motion:"tiltL",motionAmp:.11,motionSpeed:.5,motionPitch:.04,city:0},{name:"PRESSURE",start:75.535,end:84.535,keys:8,color:"#ffa14a",accent:"#ff4fc8",energy:.86,rotY:-.18,rotZ:.06,tilt:-.03,spread:1.08,y:.22,camZ:14.9,camY:6.1,bloom:.95,spin:.14,motion:"zigzag",motionAmp:.145,motionSpeed:1,motionPitch:.07,city:0},{name:"BREAK",start:84.535,end:87.535,keys:4,color:"#e8f4ff",accent:"#8f7bff",energy:.05,rotY:0,rotZ:0,tilt:.04,spread:.86,y:.3,camZ:19,camY:7.6,bloom:.35,spin:.02,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:0},{name:"CRYOUT",start:87.535,end:125.935,keys:8,color:"#ff4fb8",accent:"#54e8ff",energy:1,rotY:.1,rotZ:-.04,tilt:.02,spread:1.12,y:.12,camZ:14.6,camY:6,bloom:1,spin:.16,motion:"orbit",motionAmp:.175,motionSpeed:1,motionPitch:.085,city:0},{name:"AFTERGLOW",start:125.935,end:131.335,keys:4,color:"#6fa8ff",accent:"#c7a4ff",energy:.22,rotY:.02,rotZ:0,tilt:.01,spread:.92,y:.35,camZ:18.2,camY:7.2,bloom:.45,spin:.02,motion:"fan",motionAmp:.055,motionSpeed:.4,motionPitch:.02,city:0},{name:"OUTRO",start:131.335,end:133.5,keys:4,color:"#6f8fff",accent:"#c7a4ff",energy:.05,rotY:0,rotZ:0,tilt:0,spread:.9,y:.6,camZ:19.5,camY:7.8,bloom:.35,spin:.01,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:0}],notes:[{t:3.535,lane:2},{t:4.735,lane:4},{t:5.935,lane:3},{t:6.535,lane:5},{t:7.135,lane:2},{t:7.735,lane:4},{t:8.335,lane:3},{t:9.235,lane:5},{t:9.535,lane:2},{t:10.135,lane:3},{t:10.735,lane:4},{t:11.335,lane:5},{t:11.935,lane:2},{t:12.235,lane:3},{t:12.535,lane:4},{t:13.135,lane:4},{t:13.735,lane:2},{t:14.335,lane:5},{t:14.935,lane:3},{t:15.535,lane:4},{t:15.835,lane:2},{t:16.135,lane:5},{t:16.735,lane:2},{t:17.335,lane:5},{t:17.935,lane:3},{t:18.535,lane:4},{t:18.835,lane:2},{t:19.135,lane:5},{t:19.435,lane:3},{t:19.735,lane:4},{t:20.035,lane:5},{t:20.335,lane:3},{t:20.935,lane:4},{t:21.235,lane:2},{t:21.535,lane:5},{t:22.135,lane:3},{t:22.735,lane:2},{t:23.335,lane:4},{t:23.935,lane:3},{t:24.535,lane:5},{t:25.135,lane:4},{t:25.735,lane:6},{t:26.335,lane:2},{t:26.935,lane:4},{t:27.535,lane:4},{t:28.135,lane:2},{t:28.735,lane:6},{t:29.335,lane:1},{t:29.635,lane:3},{t:29.935,lane:5},{t:30.235,lane:4},{t:30.535,lane:2},{t:31.135,lane:4},{t:31.735,lane:2},{t:32.035,lane:1},{t:32.335,lane:2},{t:32.335,lane:5},{t:32.935,lane:5},{t:33.535,lane:6},{t:34.135,lane:4},{t:34.735,lane:2},{t:35.335,lane:2},{t:35.635,lane:3},{t:35.935,lane:4},{t:36.535,lane:5},{t:37.135,lane:6},{t:37.735,lane:5},{t:38.335,lane:2},{t:38.635,lane:3},{t:38.935,lane:4},{t:39.235,lane:5},{t:39.535,lane:3},{t:39.835,lane:6},{t:40.135,lane:1},{t:40.735,lane:2},{t:41.335,lane:4},{t:41.335,lane:7},{t:41.635,lane:1},{t:41.935,lane:2},{t:42.535,lane:3},{t:42.835,lane:4},{t:43.135,lane:5},{t:43.735,lane:6},{t:44.335,lane:7},{t:44.635,lane:0},{t:44.935,lane:4},{t:45.235,lane:1},{t:45.535,lane:5},{t:45.835,lane:2},{t:46.135,lane:6},{t:46.435,lane:3},{t:46.735,lane:7},{t:47.035,lane:0},{t:47.335,lane:5},{t:47.635,lane:6},{t:47.935,lane:4},{t:48.535,lane:3},{t:48.835,lane:1},{t:49.135,lane:2},{t:49.435,lane:0},{t:49.735,lane:1},{t:50.035,lane:2},{t:50.335,lane:4},{t:50.485,lane:6},{t:50.635,lane:1},{t:50.635,lane:5},{t:50.785,lane:5},{t:50.935,lane:4},{t:50.935,lane:7},{t:51.235,lane:1},{t:51.535,lane:2},{t:52.135,lane:4},{t:52.435,lane:3},{t:52.735,lane:5},{t:53.335,lane:1},{t:53.935,lane:6},{t:54.235,lane:0},{t:54.535,lane:7},{t:54.835,lane:1},{t:54.985,lane:3},{t:55.135,lane:5},{t:55.435,lane:7},{t:55.585,lane:6},{t:55.735,lane:4},{t:56.035,lane:2},{t:56.335,lane:0},{t:56.635,lane:6},{t:56.935,lane:4},{t:57.235,lane:2},{t:57.535,lane:0},{t:58.135,lane:1},{t:58.435,lane:3},{t:58.735,lane:5},{t:59.035,lane:7},{t:59.335,lane:0},{t:59.635,lane:2},{t:59.935,lane:1},{t:60.085,lane:3},{t:60.235,lane:4},{t:60.235,lane:7},{t:60.385,lane:6},{t:60.535,lane:0,type:"hold",dur:1.2},{t:60.535,lane:5},{t:60.835,lane:7},{t:61.735,lane:1},{t:62.035,lane:2},{t:62.335,lane:3},{t:62.935,lane:4},{t:63.535,lane:5},{t:63.835,lane:6},{t:64.135,lane:1,type:"hold",dur:2.4},{t:65.335,lane:5,type:"hold",dur:2.4},{t:67.735,lane:4},{t:68.335,lane:2},{t:68.935,lane:1,type:"hold",dur:2.4},{t:69.535,lane:5},{t:70.135,lane:6,type:"hold",dur:2.4},{t:71.335,lane:3},{t:72.535,lane:1},{t:73.135,lane:4},{t:73.735,lane:4},{t:74.935,lane:3},{t:75.535,lane:1},{t:75.535,lane:4},{t:76.135,lane:4},{t:76.735,lane:2},{t:77.335,lane:0},{t:77.935,lane:1},{t:78.535,lane:3},{t:79.135,lane:5},{t:79.735,lane:7},{t:80.335,lane:0},{t:80.635,lane:2},{t:80.935,lane:1},{t:81.535,lane:3},{t:81.835,lane:4},{t:82.135,lane:6},{t:82.735,lane:5},{t:83.035,lane:7},{t:83.335,lane:0},{t:83.935,lane:1},{t:84.235,lane:2},{t:87.535,lane:1},{t:87.535,lane:5},{t:87.835,lane:4},{t:88.135,lane:3},{t:88.735,lane:5},{t:89.035,lane:1},{t:89.335,lane:6},{t:89.635,lane:0},{t:89.935,lane:7},{t:90.235,lane:1},{t:90.535,lane:3},{t:90.835,lane:5},{t:91.135,lane:7},{t:91.435,lane:6},{t:91.585,lane:4},{t:91.735,lane:2},{t:92.035,lane:0},{t:92.185,lane:6},{t:92.335,lane:4},{t:92.635,lane:2},{t:92.935,lane:0},{t:93.535,lane:1},{t:93.835,lane:3},{t:94.135,lane:5},{t:94.735,lane:7},{t:95.035,lane:0},{t:95.335,lane:2},{t:95.635,lane:1},{t:95.935,lane:3},{t:96.235,lane:4},{t:96.535,lane:6},{t:96.685,lane:5},{t:96.835,lane:2},{t:96.835,lane:6},{t:96.985,lane:0},{t:97.135,lane:0},{t:97.135,lane:6},{t:97.435,lane:2},{t:97.735,lane:3},{t:98.335,lane:4},{t:98.635,lane:5},{t:98.935,lane:6},{t:99.235,lane:7},{t:99.535,lane:0},{t:99.835,lane:4},{t:100.135,lane:1},{t:100.435,lane:5},{t:100.735,lane:2},{t:101.035,lane:6},{t:101.185,lane:3},{t:101.335,lane:7},{t:101.635,lane:0},{t:101.785,lane:5},{t:101.935,lane:6},{t:102.235,lane:4},{t:102.535,lane:3},{t:103.135,lane:1},{t:103.435,lane:2},{t:103.735,lane:0},{t:104.335,lane:0},{t:104.635,lane:2},{t:104.935,lane:4},{t:105.235,lane:6},{t:105.535,lane:7},{t:105.835,lane:5},{t:106.135,lane:3},{t:106.285,lane:1},{t:106.435,lane:1},{t:106.435,lane:4},{t:106.585,lane:4},{t:106.735,lane:0,type:"hold",dur:1.2},{t:106.735,lane:3},{t:107.035,lane:5},{t:107.335,lane:1},{t:107.935,lane:6},{t:108.235,lane:0},{t:108.535,lane:7},{t:108.835,lane:1},{t:109.135,lane:3},{t:109.435,lane:5},{t:109.735,lane:7},{t:110.035,lane:6},{t:110.335,lane:4},{t:110.635,lane:2},{t:110.785,lane:0},{t:110.935,lane:6},{t:111.235,lane:4},{t:111.385,lane:2},{t:111.535,lane:0},{t:111.835,lane:1},{t:112.135,lane:3},{t:112.735,lane:5},{t:113.035,lane:7},{t:113.335,lane:0},{t:113.935,lane:2},{t:114.235,lane:1},{t:114.535,lane:3},{t:114.835,lane:4},{t:115.135,lane:6},{t:115.435,lane:5},{t:115.735,lane:7},{t:115.885,lane:0},{t:116.035,lane:2},{t:116.035,lane:6},{t:116.185,lane:2},{t:116.335,lane:0},{t:116.335,lane:6},{t:116.635,lane:4},{t:116.935,lane:5},{t:117.535,lane:6},{t:117.835,lane:7},{t:118.135,lane:0},{t:118.435,lane:4},{t:118.735,lane:1},{t:119.035,lane:5},{t:119.335,lane:2},{t:119.635,lane:6},{t:119.935,lane:3},{t:120.235,lane:7},{t:120.385,lane:0},{t:120.535,lane:5},{t:120.835,lane:6},{t:120.985,lane:4},{t:121.135,lane:3},{t:121.435,lane:1},{t:121.735,lane:2},{t:122.335,lane:0},{t:122.635,lane:1},{t:122.935,lane:2},{t:123.535,lane:4},{t:123.835,lane:6},{t:124.135,lane:7},{t:124.435,lane:5},{t:124.735,lane:3},{t:125.035,lane:1},{t:125.335,lane:2},{t:125.485,lane:4},{t:125.635,lane:3},{t:125.935,lane:2},{t:127.135,lane:4},{t:128.335,lane:3},{t:128.935,lane:5},{t:129.535,lane:2},{t:130.135,lane:4},{t:130.735,lane:2},{t:130.735,lane:5}],events:[{t:5.335,type:"pulse",power:.37},{t:5.355,type:"echo",lane:0,dir:-1,power:.58},{t:7.735,type:"pulse",power:.37},{t:10.135,type:"pulse",power:.37},{t:10.155,type:"echo",lane:1,dir:-1,power:.58},{t:12.535,type:"pulse",power:.5},{t:12.555,type:"echo",lane:0,dir:-1,power:.72},{t:14.935,type:"pulse",power:.5},{t:17.335,type:"pulse",power:.5},{t:17.355,type:"echo",lane:1,dir:-1,power:.72},{t:19.735,type:"pulse",power:.5},{t:22.135,type:"pulse",power:.5},{t:22.155,type:"echo",lane:6,dir:1,power:.72},{t:24.535,type:"pulse",power:.65},{t:24.555,type:"echo",lane:0,dir:-1,power:.88},{t:26.935,type:"pulse",power:.65},{t:29.335,type:"pulse",power:.65},{t:29.355,type:"echo",lane:7,dir:1,power:.88},{t:31.735,type:"pulse",power:.65},{t:34.135,type:"pulse",power:.65},{t:34.155,type:"echo",lane:0,dir:-1,power:.88},{t:36.535,type:"pulse",power:.65},{t:38.935,type:"pulse",power:.65},{t:38.955,type:"echo",lane:7,dir:1,power:.88},{t:41.355,type:"vibe",power:.82},{t:43.735,type:"pulse",power:.78},{t:46.135,type:"burst",lane:3,power:1.07},{t:46.135,type:"pulse",power:.78},{t:48.535,type:"pulse",power:.78},{t:50.935,type:"pulse",power:.78},{t:53.335,type:"pulse",power:.78},{t:55.735,type:"burst",lane:7,power:1.07},{t:55.735,type:"pulse",power:.78},{t:58.135,type:"pulse",power:.78},{t:60.535,type:"pulse",power:.78},{t:62.935,type:"pulse",power:.78},{t:65.335,type:"pulse",power:.45},{t:65.355,type:"echo",lane:0,dir:-1,power:.66},{t:67.735,type:"pulse",power:.45},{t:70.135,type:"pulse",power:.45},{t:70.155,type:"echo",lane:7,dir:1,power:.66},{t:72.535,type:"pulse",power:.45},{t:74.935,type:"pulse",power:.45},{t:74.955,type:"echo",lane:0,dir:-1,power:.66},{t:75.555,type:"vibe",power:.86},{t:77.335,type:"pulse",power:.81},{t:79.735,type:"burst",lane:3,power:1.1},{t:79.735,type:"pulse",power:.81},{t:82.135,type:"pulse",power:.81},{t:84.535,type:"pulse",power:.28},{t:84.555,type:"echo",lane:0,dir:-1,power:.48},{t:86.935,type:"pulse",power:.28},{t:87.555,type:"vibe",power:1},{t:89.335,type:"pulse",power:.9},{t:91.735,type:"burst",lane:3,power:1.2},{t:91.735,type:"pulse",power:.9},{t:94.135,type:"pulse",power:.9},{t:96.535,type:"pulse",power:.9},{t:98.935,type:"pulse",power:.9},{t:99.335,type:"motion",style:"wave",amp:.16,speed:1},{t:101.335,type:"burst",lane:7,power:1.2},{t:101.335,type:"pulse",power:.9},{t:103.735,type:"pulse",power:.9},{t:106.135,type:"pulse",power:.9},{t:108.535,type:"pulse",power:.9},{t:110.935,type:"burst",lane:3,power:1.2},{t:110.935,type:"pulse",power:.9},{t:111.335,type:"motion",style:"zigzag",amp:.16,speed:1},{t:113.335,type:"pulse",power:.9},{t:115.735,type:"pulse",power:.9},{t:118.135,type:"pulse",power:.9},{t:120.535,type:"burst",lane:7,power:1.2},{t:120.535,type:"pulse",power:.9},{t:122.935,type:"pulse",power:.9},{t:125.335,type:"pulse",power:.9},{t:127.735,type:"pulse",power:.39},{t:127.755,type:"echo",lane:0,dir:-1,power:.6},{t:130.135,type:"pulse",power:.39},{t:132.535,type:"pulse",power:.28},{t:132.555,type:"echo",lane:0,dir:-1,power:.48}],ghosts:[{t:3.575,lane:0,type:"sweep"},{t:3.63,lane:1,type:"sweep"},{t:3.685,lane:6,type:"sweep"},{t:3.74,lane:7,type:"sweep"},{t:8.335,lane:0,type:"bounce"},{t:8.455,lane:1,type:"bounce"},{t:8.575,lane:6,type:"bounce"},{t:8.695,lane:7,type:"bounce"},{t:12.575,lane:0,type:"sweep"},{t:12.63,lane:1,type:"sweep"},{t:12.685,lane:6,type:"sweep"},{t:12.74,lane:7,type:"sweep"},{t:17.335,lane:0,type:"bounce"},{t:17.455,lane:1,type:"bounce"},{t:17.575,lane:6,type:"bounce"},{t:17.695,lane:7,type:"bounce"},{t:22.775,lane:0,type:"sweep"},{t:22.83,lane:7,type:"sweep"},{t:27.535,lane:0,type:"bounce"},{t:27.655,lane:7,type:"bounce"},{t:64.175,lane:0,type:"sweep"},{t:64.23,lane:7,type:"sweep"},{t:68.935,lane:0,type:"bounce"},{t:69.055,lane:7,type:"bounce"},{t:84.575,lane:0,type:"sweep"},{t:84.63,lane:1,type:"sweep"},{t:84.685,lane:6,type:"sweep"},{t:84.74,lane:7,type:"sweep"},{t:89.335,lane:0,type:"bounce"},{t:89.455,lane:1,type:"bounce"},{t:89.575,lane:6,type:"bounce"},{t:89.695,lane:7,type:"bounce"},{t:125.975,lane:0,type:"sweep"},{t:126.03,lane:1,type:"sweep"},{t:126.085,lane:6,type:"sweep"},{t:126.14,lane:7,type:"sweep"},{t:130.735,lane:0,type:"bounce"},{t:130.855,lane:1,type:"bounce"},{t:130.975,lane:6,type:"bounce"},{t:131.095,lane:7,type:"bounce"},{t:131.375,lane:0,type:"sweep"},{t:131.43,lane:1,type:"sweep"},{t:131.485,lane:6,type:"sweep"},{t:131.54,lane:7,type:"sweep"},{t:136.135,lane:0,type:"bounce"},{t:136.255,lane:1,type:"bounce"},{t:136.375,lane:6,type:"bounce"},{t:136.495,lane:7,type:"bounce"}]},Yd={song:{title:"WORLD YEARNING FOR AN END",shortTitle:"WORLD YEARNING",artist:"ORIGINAL TRACK",bpm:120,duration:143.47,chartEnd:142.55,beatOffset:.04,difficulty:"HARD",laneLabel:"4 · 6",thumbFriendly:!0,fadeStart:140.8,fadeEnd:142.9},sections:[{name:"INTRO",start:.04,end:10.04,keys:4,color:"#7ec8ff",accent:"#ffb45e",energy:.16,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.6,camY:6.9,bloom:.5,spin:.03,firstNote:2.04,motion:"fan",motionAmp:.05,motionSpeed:.45,motionPitch:.02,city:1},{name:"VERSE",start:10.04,end:22.04,keys:4,color:"#66e0ff",accent:"#ff8ac8",energy:.5,rotY:.03,rotZ:-.015,tilt:.012,spread:1.02,y:.04,camZ:16.9,camY:6.7,bloom:.68,spin:.05,firstNote:10.04,motion:"wave",motionAmp:.075,motionSpeed:.6,motionPitch:.035,city:.16},{name:"BUILD",start:22.04,end:38.04,keys:6,color:"#84a6ff",accent:"#ffc46b",energy:.66,rotY:-.06,rotZ:.025,tilt:-.015,spread:1.05,y:.08,camZ:16.2,camY:6.5,bloom:.8,spin:.07,firstNote:22.04,motion:"fan",motionAmp:.1,motionSpeed:.7,motionPitch:.05,city:.12},{name:"LIFT",start:38.04,end:54.04,keys:6,color:"#b58cff",accent:"#ffa25e",energy:.8,rotY:.1,rotZ:-.04,tilt:.025,spread:1.08,y:.12,camZ:15.5,camY:6.3,bloom:.9,spin:.1,firstNote:38.04,motion:"slope",motionAmp:.13,motionSpeed:.82,motionPitch:.065,city:.2},{name:"CHORUS",start:54.04,end:70.04,keys:6,color:"#ff8f6b",accent:"#ffe27a",energy:.92,rotY:-.13,rotZ:.05,tilt:-.025,spread:1.1,y:.15,camZ:15.1,camY:6.2,bloom:.96,spin:.12,firstNote:54.04,motion:"wave",motionAmp:.15,motionSpeed:.95,motionPitch:.08,city:.16},{name:"DRIVE",start:70.04,end:86.04,keys:6,color:"#ff5f9e",accent:"#7af0ff",energy:1,rotY:.15,rotZ:-.055,tilt:.03,spread:1.12,y:.18,camZ:14.9,camY:6.1,bloom:1,spin:.14,firstNote:70.04,motion:"zigzag",motionAmp:.18,motionSpeed:1.05,motionPitch:.095,city:.24},{name:"BREAK",start:86.04,end:98.04,keys:4,color:"#d9eaff",accent:"#8f9dff",energy:.34,rotY:-.02,rotZ:.01,tilt:.05,spread:.93,y:.4,camZ:18.1,camY:7.3,bloom:.55,spin:.035,firstNote:86.04,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:.62},{name:"RETURN",start:98.04,end:122.04,keys:6,color:"#63e6d8",accent:"#ff8ac8",energy:.82,rotY:.04,rotZ:-.02,tilt:.015,spread:1.06,y:.1,camZ:15.7,camY:6.4,bloom:.88,spin:.09,firstNote:98.04,motion:"orbit",motionAmp:.14,motionSpeed:.9,motionPitch:.07,city:.14},{name:"FINAL",start:122.04,end:138.04,keys:6,color:"#ff6fc4",accent:"#ffd36b",energy:.9,rotY:-.1,rotZ:.04,tilt:-.02,spread:1.09,y:.14,camZ:15,camY:6.2,bloom:.98,spin:.13,firstNote:122.04,motion:"orbit",motionAmp:.17,motionSpeed:1,motionPitch:.085,city:.2},{name:"OUTRO",start:138.04,end:142.55,keys:4,color:"#7fa8ff",accent:"#d7c4ff",energy:.2,rotY:0,rotZ:0,tilt:.03,spread:.9,y:.3,camZ:19.2,camY:7.6,bloom:.42,spin:.02,firstNote:138.04,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:.72}],notes:[{t:2.04,lane:2},{t:3.04,lane:4},{t:4.04,lane:3},{t:5.04,lane:5},{t:6.04,lane:2},{t:6.29,lane:2,type:"hold",dur:1},{t:7.04,lane:4},{t:8.04,lane:3},{t:9.04,lane:5},{t:10.04,lane:4},{t:10.54,lane:2},{t:11.04,lane:5},{t:11.54,lane:3},{t:12.04,lane:4},{t:12.54,lane:2},{t:13.04,lane:5},{t:13.54,lane:3},{t:14.04,lane:3},{t:14.29,lane:2,type:"hold",dur:1},{t:14.54,lane:4},{t:15.54,lane:5},{t:16.04,lane:3},{t:16.54,lane:4},{t:17.04,lane:2},{t:17.54,lane:5},{t:18.04,lane:2},{t:18.29,lane:4,type:"hold",dur:1},{t:18.54,lane:5},{t:19.04,lane:3},{t:19.54,lane:4},{t:20.04,lane:2},{t:20.54,lane:5},{t:21.04,lane:3},{t:21.54,lane:4},{t:22.04,lane:1},{t:22.54,lane:4},{t:23.04,lane:2},{t:23.54,lane:5},{t:24.04,lane:3},{t:24.29,lane:6},{t:24.54,lane:1},{t:25.04,lane:4},{t:25.54,lane:4},{t:26.04,lane:3},{t:26.29,lane:2},{t:26.54,lane:1},{t:26.79,lane:6},{t:27.04,lane:5},{t:27.54,lane:4},{t:28.04,lane:3},{t:28.29,lane:4},{t:28.54,lane:6},{t:28.79,lane:2},{t:29.04,lane:4},{t:29.54,lane:3},{t:30.04,lane:5},{t:30.54,lane:4},{t:30.79,lane:6},{t:31.04,lane:3},{t:31.54,lane:5},{t:32.04,lane:2},{t:32.04,lane:4},{t:32.29,lane:2},{t:32.54,lane:6},{t:32.79,lane:1},{t:33.04,lane:3},{t:33.54,lane:5},{t:34.04,lane:5},{t:34.29,lane:6},{t:34.54,lane:4},{t:34.79,lane:2},{t:35.04,lane:1},{t:35.54,lane:3},{t:36.04,lane:5},{t:36.29,lane:6},{t:36.54,lane:1},{t:37.04,lane:5},{t:37.54,lane:2},{t:38.04,lane:2},{t:38.29,lane:4},{t:38.54,lane:3},{t:38.79,lane:5},{t:39.04,lane:4},{t:39.29,lane:6},{t:39.54,lane:2},{t:39.79,lane:4},{t:40.04,lane:5},{t:40.29,lane:2},{t:40.54,lane:6},{t:41.04,lane:1},{t:41.54,lane:3},{t:42.04,lane:5},{t:42.29,lane:4},{t:42.54,lane:2},{t:42.79,lane:4},{t:43.04,lane:2},{t:43.54,lane:1},{t:43.79,lane:3},{t:44.04,lane:5},{t:44.54,lane:6},{t:45.04,lane:4},{t:45.29,lane:2},{t:45.54,lane:3},{t:45.79,lane:5},{t:46.04,lane:4},{t:46.54,lane:5},{t:46.79,lane:6},{t:47.04,lane:5},{t:47.29,lane:2},{t:47.54,lane:3},{t:48.04,lane:4},{t:48.29,lane:5},{t:48.54,lane:3},{t:48.79,lane:6},{t:49.04,lane:1},{t:49.29,lane:2},{t:49.54,lane:4},{t:49.79,lane:5},{t:50.04,lane:3},{t:50.29,lane:5},{t:50.54,lane:4},{t:50.79,lane:3},{t:51.04,lane:2},{t:51.29,lane:1},{t:51.54,lane:3},{t:51.79,lane:5},{t:52.04,lane:1},{t:52.29,lane:4},{t:52.54,lane:2},{t:52.79,lane:5},{t:53.04,lane:3},{t:53.29,lane:6},{t:53.54,lane:1},{t:53.79,lane:4},{t:54.04,lane:1},{t:54.29,lane:3},{t:54.54,lane:5},{t:54.79,lane:6},{t:55.04,lane:4},{t:55.29,lane:2},{t:55.54,lane:1},{t:55.665,lane:2},{t:55.79,lane:3},{t:56.04,lane:2},{t:56.04,lane:4},{t:56.29,lane:5},{t:56.54,lane:6},{t:56.79,lane:5},{t:57.04,lane:2},{t:57.29,lane:3},{t:57.54,lane:4},{t:57.79,lane:5},{t:58.04,lane:3},{t:58.29,lane:6},{t:58.54,lane:1},{t:58.79,lane:2},{t:59.04,lane:4},{t:59.29,lane:5},{t:59.54,lane:3},{t:59.79,lane:6},{t:60.04,lane:4},{t:60.29,lane:3},{t:60.54,lane:2},{t:60.79,lane:1},{t:61.04,lane:3},{t:61.29,lane:5},{t:61.54,lane:4},{t:61.79,lane:3},{t:62.04,lane:2},{t:62.29,lane:5},{t:62.54,lane:3},{t:62.79,lane:6},{t:63.04,lane:1},{t:63.29,lane:4},{t:63.54,lane:2},{t:63.665,lane:3},{t:63.79,lane:5},{t:64.04,lane:1},{t:64.04,lane:2},{t:64.29,lane:1},{t:64.54,lane:6},{t:64.79,lane:5},{t:65.04,lane:4},{t:65.29,lane:3},{t:65.54,lane:2},{t:65.79,lane:1},{t:66.04,lane:2},{t:66.29,lane:4},{t:66.54,lane:3},{t:66.79,lane:5},{t:67.04,lane:4},{t:67.29,lane:6},{t:67.54,lane:2},{t:67.79,lane:4},{t:68.04,lane:5},{t:68.29,lane:2},{t:68.54,lane:6},{t:68.79,lane:1},{t:69.04,lane:3},{t:69.29,lane:5},{t:69.54,lane:4},{t:69.79,lane:2},{t:70.04,lane:1},{t:70.29,lane:2},{t:70.54,lane:4},{t:70.79,lane:5},{t:71.04,lane:3},{t:71.29,lane:6},{t:71.54,lane:1},{t:71.665,lane:2},{t:71.79,lane:4},{t:72.04,lane:2},{t:72.29,lane:1},{t:72.54,lane:3},{t:72.79,lane:5},{t:73.04,lane:4},{t:73.29,lane:3},{t:73.54,lane:2},{t:73.79,lane:1},{t:74.04,lane:3},{t:74.29,lane:6},{t:74.54,lane:1},{t:74.79,lane:4},{t:75.04,lane:2},{t:75.29,lane:5},{t:75.54,lane:3},{t:75.79,lane:6},{t:76.04,lane:1},{t:76.29,lane:5},{t:76.54,lane:4},{t:76.79,lane:3},{t:77.04,lane:2},{t:77.29,lane:1},{t:77.54,lane:6},{t:77.79,lane:5},{t:78.04,lane:3},{t:78.29,lane:5},{t:78.54,lane:4},{t:78.79,lane:6},{t:79.04,lane:2},{t:79.29,lane:4},{t:79.54,lane:3},{t:79.665,lane:4},{t:79.79,lane:5},{t:80.04,lane:1},{t:80.04,lane:6},{t:80.29,lane:1},{t:80.54,lane:3},{t:80.79,lane:5},{t:81.04,lane:4},{t:81.29,lane:2},{t:81.54,lane:6},{t:81.79,lane:1},{t:82.04,lane:2},{t:82.29,lane:3},{t:82.54,lane:5},{t:82.79,lane:6},{t:83.04,lane:4},{t:83.29,lane:2},{t:83.54,lane:1},{t:83.79,lane:3},{t:84.04,lane:4},{t:84.29,lane:5},{t:84.54,lane:6},{t:84.79,lane:5},{t:85.04,lane:2},{t:85.29,lane:3},{t:85.54,lane:4},{t:85.79,lane:5},{t:86.04,lane:2},{t:86.54,lane:5},{t:87.04,lane:3},{t:87.54,lane:4},{t:88.04,lane:2},{t:88.54,lane:5},{t:89.04,lane:3},{t:89.54,lane:4},{t:90.04,lane:5},{t:90.29,lane:3,type:"hold",dur:1},{t:91.04,lane:4},{t:91.54,lane:2},{t:92.04,lane:5},{t:92.54,lane:3},{t:93.04,lane:4},{t:93.54,lane:2},{t:94.04,lane:2},{t:94.29,lane:2,type:"hold",dur:1},{t:94.54,lane:4},{t:95.04,lane:5},{t:95.54,lane:3},{t:96.04,lane:2},{t:96.54,lane:4},{t:97.04,lane:5},{t:97.54,lane:3},{t:98.04,lane:2},{t:98.29,lane:4},{t:98.54,lane:3},{t:99.04,lane:5},{t:99.29,lane:4},{t:99.54,lane:6},{t:99.79,lane:2},{t:100.04,lane:4},{t:100.29,lane:5},{t:100.54,lane:2},{t:101.04,lane:6},{t:101.29,lane:1},{t:101.54,lane:3},{t:101.79,lane:5},{t:102.04,lane:4},{t:102.54,lane:2},{t:102.79,lane:4},{t:103.04,lane:2},{t:103.29,lane:1},{t:103.54,lane:3},{t:104.04,lane:1},{t:104.04,lane:5},{t:104.54,lane:6},{t:105.04,lane:4},{t:105.54,lane:2},{t:105.79,lane:3},{t:106.04,lane:5},{t:106.54,lane:4},{t:106.79,lane:5},{t:107.04,lane:6},{t:107.29,lane:5},{t:107.54,lane:2},{t:108.04,lane:3},{t:108.29,lane:4},{t:108.54,lane:5},{t:108.79,lane:3},{t:109.04,lane:6},{t:109.29,lane:1},{t:109.54,lane:2},{t:109.79,lane:4},{t:110.04,lane:5},{t:110.29,lane:3},{t:110.54,lane:5},{t:110.79,lane:4},{t:111.04,lane:3},{t:111.29,lane:2},{t:111.54,lane:1},{t:111.79,lane:3},{t:112.04,lane:5},{t:112.29,lane:1},{t:112.54,lane:4},{t:112.79,lane:2},{t:113.04,lane:5},{t:113.29,lane:3},{t:113.54,lane:6},{t:114.04,lane:1},{t:114.29,lane:4},{t:114.54,lane:5},{t:115.04,lane:3},{t:115.29,lane:2},{t:115.54,lane:1},{t:115.79,lane:6},{t:116.04,lane:5},{t:116.29,lane:4},{t:116.54,lane:3},{t:116.79,lane:4},{t:117.04,lane:6},{t:117.29,lane:2},{t:117.54,lane:4},{t:117.79,lane:3},{t:118.04,lane:5},{t:118.29,lane:4},{t:118.54,lane:6},{t:119.04,lane:3},{t:119.29,lane:5},{t:119.54,lane:4},{t:119.79,lane:2},{t:120.04,lane:6},{t:120.54,lane:1},{t:121.04,lane:3},{t:121.29,lane:5},{t:121.54,lane:6},{t:121.79,lane:2},{t:122.04,lane:1},{t:122.29,lane:3},{t:122.54,lane:5},{t:122.79,lane:6},{t:123.04,lane:4},{t:123.29,lane:2},{t:123.54,lane:1},{t:123.79,lane:3},{t:124.04,lane:4},{t:124.29,lane:5},{t:124.54,lane:6},{t:124.79,lane:5},{t:125.04,lane:2},{t:125.29,lane:3},{t:125.54,lane:4},{t:125.79,lane:5},{t:126.04,lane:3},{t:126.29,lane:6},{t:126.54,lane:1},{t:126.79,lane:2},{t:127.04,lane:4},{t:127.29,lane:5},{t:127.54,lane:3},{t:127.665,lane:4},{t:127.79,lane:6},{t:128.04,lane:4},{t:128.29,lane:3},{t:128.54,lane:2},{t:128.79,lane:1},{t:129.04,lane:3},{t:129.29,lane:5},{t:129.54,lane:4},{t:129.79,lane:3},{t:130.04,lane:2},{t:130.29,lane:5},{t:130.54,lane:3},{t:130.79,lane:6},{t:131.04,lane:1},{t:131.29,lane:4},{t:131.54,lane:2},{t:131.79,lane:5},{t:132.04,lane:2},{t:132.29,lane:1},{t:132.54,lane:6},{t:132.79,lane:5},{t:133.04,lane:4},{t:133.29,lane:3},{t:133.54,lane:2},{t:133.79,lane:1},{t:134.04,lane:2},{t:134.29,lane:4},{t:134.54,lane:3},{t:134.79,lane:5},{t:135.04,lane:4},{t:135.29,lane:6},{t:135.54,lane:2},{t:135.665,lane:3},{t:135.79,lane:4},{t:136.04,lane:1},{t:136.04,lane:5},{t:136.29,lane:2},{t:136.54,lane:6},{t:136.79,lane:1},{t:137.04,lane:3},{t:137.29,lane:5},{t:137.54,lane:4},{t:137.79,lane:2},{t:138.04,lane:4},{t:139.04,lane:2},{t:140.04,lane:5},{t:142.04,lane:3}],events:[{t:.04,type:"pulse",power:.33},{t:.07,type:"echo",lane:0,dir:-1,power:.63},{t:2.04,type:"pulse",power:.33},{t:4.04,type:"pulse",power:.33},{t:4.07,type:"echo",lane:1,dir:-1,power:.63},{t:6.04,type:"pulse",power:.33},{t:8.04,type:"pulse",power:.33},{t:8.07,type:"echo",lane:6,dir:1,power:.63},{t:10.04,type:"pulse",power:.57},{t:10.07,type:"echo",lane:0,dir:-1,power:.9},{t:12.04,type:"pulse",power:.57},{t:14.04,type:"pulse",power:.57},{t:14.07,type:"echo",lane:1,dir:-1,power:.9},{t:16.04,type:"pulse",power:.57},{t:18.04,type:"pulse",power:.57},{t:18.07,type:"echo",lane:6,dir:1,power:.9},{t:20.04,type:"pulse",power:.57},{t:22.04,type:"pulse",power:.68},{t:22.07,type:"echo",lane:0,dir:-1,power:1.03},{t:24.04,type:"pulse",power:.68},{t:26.04,type:"burst",lane:4,power:.98},{t:26.04,type:"pulse",power:.68},{t:26.07,type:"echo",lane:7,dir:1,power:1.03},{t:28.04,type:"pulse",power:.68},{t:30.04,type:"pulse",power:.68},{t:30.07,type:"echo",lane:0,dir:-1,power:1.03},{t:32.04,type:"pulse",power:.68},{t:34.04,type:"burst",lane:2,power:.98},{t:34.04,type:"pulse",power:.68},{t:34.07,type:"echo",lane:7,dir:1,power:1.03},{t:36.04,type:"pulse",power:.68},{t:38.04,type:"pulse",power:.78},{t:38.07,type:"echo",lane:0,dir:-1,power:1.14},{t:40.04,type:"pulse",power:.78},{t:42.04,type:"burst",lane:4,power:1.09},{t:42.04,type:"pulse",power:.78},{t:42.07,type:"echo",lane:7,dir:1,power:1.14},{t:44.04,type:"pulse",power:.78},{t:46.04,type:"pulse",power:.78},{t:46.07,type:"echo",lane:0,dir:-1,power:1.14},{t:48.04,type:"pulse",power:.78},{t:50.04,type:"burst",lane:2,power:1.09},{t:50.04,type:"pulse",power:.78},{t:50.07,type:"echo",lane:7,dir:1,power:1.14},{t:52.04,type:"pulse",power:.78},{t:54.04,type:"pulse",power:.86},{t:54.06,type:"vibe",power:.92},{t:54.07,type:"echo",lane:0,dir:-1,power:1.24},{t:56.04,type:"pulse",power:.86},{t:58.04,type:"burst",lane:4,power:1.19},{t:58.04,type:"pulse",power:.86},{t:58.07,type:"echo",lane:7,dir:1,power:1.24},{t:60.04,type:"pulse",power:.86},{t:61.8,type:"vibe",power:.85},{t:61.85,type:"echo",lane:0,dir:-1,power:1.15},{t:61.85,type:"echo",lane:7,dir:1,power:1.15},{t:62.04,type:"pulse",power:.86},{t:62.07,type:"echo",lane:0,dir:-1,power:1.24},{t:64.04,type:"pulse",power:.86},{t:66.04,type:"burst",lane:2,power:1.19},{t:66.04,type:"pulse",power:.86},{t:66.07,type:"echo",lane:7,dir:1,power:1.24},{t:68.04,type:"pulse",power:.86},{t:70.04,type:"pulse",power:.92},{t:70.06,type:"vibe",power:1},{t:70.07,type:"echo",lane:0,dir:-1,power:1.3},{t:72.04,type:"pulse",power:.92},{t:74.04,type:"burst",lane:4,power:1.25},{t:74.04,type:"pulse",power:.92},{t:74.07,type:"echo",lane:7,dir:1,power:1.3},{t:76.04,type:"pulse",power:.92},{t:78.04,type:"pulse",power:.92},{t:78.07,type:"echo",lane:0,dir:-1,power:1.3},{t:80.04,type:"pulse",power:.92},{t:82.04,type:"burst",lane:2,power:1.25},{t:82.04,type:"pulse",power:.92},{t:82.07,type:"echo",lane:7,dir:1,power:1.3},{t:84.04,type:"pulse",power:.92},{t:86.04,type:"pulse",power:.46},{t:86.07,type:"echo",lane:0,dir:-1,power:.77},{t:88.04,type:"pulse",power:.46},{t:90.04,type:"pulse",power:.46},{t:90.07,type:"echo",lane:1,dir:-1,power:.77},{t:92.04,type:"pulse",power:.46},{t:94.04,type:"pulse",power:.46},{t:94.07,type:"echo",lane:6,dir:1,power:.77},{t:96.04,type:"pulse",power:.46},{t:98.04,type:"pulse",power:.79},{t:98.06,type:"vibe",power:.82},{t:98.07,type:"echo",lane:0,dir:-1,power:1.16},{t:100.04,type:"pulse",power:.79},{t:102.04,type:"burst",lane:4,power:1.11},{t:102.04,type:"pulse",power:.79},{t:102.07,type:"echo",lane:7,dir:1,power:1.16},{t:104.04,type:"pulse",power:.79},{t:106.04,type:"pulse",power:.79},{t:106.07,type:"echo",lane:0,dir:-1,power:1.16},{t:108.04,type:"pulse",power:.79},{t:110.04,type:"burst",lane:2,power:1.11},{t:110.04,type:"pulse",power:.79},{t:110.07,type:"echo",lane:7,dir:1,power:1.16},{t:112.04,type:"pulse",power:.79},{t:114.04,type:"pulse",power:.79},{t:114.07,type:"echo",lane:0,dir:-1,power:1.16},{t:116.04,type:"pulse",power:.79},{t:118.04,type:"burst",lane:6,power:1.11},{t:118.04,type:"pulse",power:.79},{t:118.07,type:"echo",lane:7,dir:1,power:1.16},{t:120.04,type:"pulse",power:.79},{t:122.04,type:"pulse",power:.85},{t:122.06,type:"vibe",power:.9},{t:122.07,type:"echo",lane:0,dir:-1,power:1.22},{t:124.04,type:"pulse",power:.85},{t:126.04,type:"burst",lane:4,power:1.17},{t:126.04,type:"pulse",power:.85},{t:126.07,type:"echo",lane:7,dir:1,power:1.22},{t:128.04,type:"pulse",power:.85},{t:130.04,type:"pulse",power:.85},{t:130.07,type:"echo",lane:0,dir:-1,power:1.22},{t:132.04,type:"pulse",power:.85},{t:134.04,type:"burst",lane:2,power:1.17},{t:134.04,type:"pulse",power:.85},{t:134.07,type:"echo",lane:7,dir:1,power:1.22},{t:136.04,type:"pulse",power:.85},{t:138.04,type:"pulse",power:.36},{t:138.07,type:"echo",lane:0,dir:-1,power:.66},{t:140.04,type:"pulse",power:.36},{t:142.04,type:"pulse",power:.36},{t:142.07,type:"echo",lane:1,dir:-1,power:.66}],ghosts:[{t:.08,lane:0,type:"sweep"},{t:.14,lane:1,type:"sweep"},{t:.2,lane:6,type:"sweep"},{t:.26,lane:7,type:"sweep"},{t:4.04,lane:0,type:"bounce"},{t:4.18,lane:1,type:"bounce"},{t:4.32,lane:6,type:"bounce"},{t:4.46,lane:7,type:"bounce"},{t:10.08,lane:0,type:"sweep"},{t:10.14,lane:1,type:"sweep"},{t:10.2,lane:6,type:"sweep"},{t:10.26,lane:7,type:"sweep"},{t:14.04,lane:0,type:"bounce"},{t:14.18,lane:1,type:"bounce"},{t:14.32,lane:6,type:"bounce"},{t:14.46,lane:7,type:"bounce"},{t:22.08,lane:0,type:"sweep"},{t:22.14,lane:7,type:"sweep"},{t:26.04,lane:0,type:"bounce"},{t:26.18,lane:7,type:"bounce"},{t:38.08,lane:0,type:"sweep"},{t:38.14,lane:7,type:"sweep"},{t:42.04,lane:0,type:"bounce"},{t:42.18,lane:7,type:"bounce"},{t:54.08,lane:0,type:"sweep"},{t:54.14,lane:7,type:"sweep"},{t:58.04,lane:0,type:"bounce"},{t:58.18,lane:7,type:"bounce"},{t:70.08,lane:0,type:"sweep"},{t:70.14,lane:7,type:"sweep"},{t:74.04,lane:0,type:"bounce"},{t:74.18,lane:7,type:"bounce"},{t:86.08,lane:0,type:"sweep"},{t:86.14,lane:1,type:"sweep"},{t:86.2,lane:6,type:"sweep"},{t:86.26,lane:7,type:"sweep"},{t:90.04,lane:0,type:"bounce"},{t:90.18,lane:1,type:"bounce"},{t:90.32,lane:6,type:"bounce"},{t:90.46,lane:7,type:"bounce"},{t:98.08,lane:0,type:"sweep"},{t:98.14,lane:7,type:"sweep"},{t:102.04,lane:0,type:"bounce"},{t:102.18,lane:7,type:"bounce"},{t:122.08,lane:0,type:"sweep"},{t:122.14,lane:7,type:"sweep"},{t:126.04,lane:0,type:"bounce"},{t:126.18,lane:7,type:"bounce"},{t:138.08,lane:0,type:"sweep"},{t:138.14,lane:1,type:"sweep"},{t:138.2,lane:6,type:"sweep"},{t:138.26,lane:7,type:"sweep"},{t:142.04,lane:0,type:"bounce"},{t:142.18,lane:1,type:"bounce"},{t:142.32,lane:6,type:"bounce"},{t:142.46,lane:7,type:"bounce"}]},qd={song:{title:"CHRONOSTASIS",shortTitle:"CHRONOSTASIS",artist:"ORIGINAL TRACK",bpm:99.4,duration:142.1,chartEnd:139.85,beatOffset:.323,difficulty:"EXPERT",laneLabel:"4 · 6",thumbFriendly:!0,fadeStart:138.4,fadeEnd:140},sections:[{name:"INTRO",start:0,end:18.431,keys:4,color:"#8ecfff",accent:"#ffd166",energy:.22,rotY:0,rotZ:0,tilt:.02,spread:.94,y:.28,camZ:18.8,camY:7.4,bloom:.48,spin:.02,firstNote:2.4,density:.22,city:.58,clock:"off",motion:"fan",motionAmp:.05,motionSpeed:.45,motionPitch:.02},{name:"GEARS",start:18.431,end:24.483,keys:4,color:"#6fe3ff",accent:"#ffd166",energy:.5,rotY:.02,rotZ:-.012,tilt:.01,spread:1,y:.12,camZ:17.4,camY:7,bloom:.68,spin:.05,firstNote:18.431,density:.5,city:.38,clock:"run",motion:"fan",motionAmp:.06,motionSpeed:.55,motionPitch:.025},{name:"VERSE",start:24.483,end:42.877,keys:6,color:"#78b8ff",accent:"#ffe29a",energy:.64,rotY:.04,rotZ:-.02,tilt:.015,spread:1.04,y:.08,camZ:16.7,camY:6.7,bloom:.78,spin:.07,firstNote:24.483,density:.62,city:.2,clock:"run",motion:"wave",motionAmp:.075,motionSpeed:.6,motionPitch:.035},{name:"PENDULUM",start:42.877,end:66.417,keys:6,color:"#b18cff",accent:"#ffd166",energy:.8,rotY:-.09,rotZ:.035,tilt:-.02,spread:1.08,y:.14,camZ:15.8,camY:6.4,bloom:.9,spin:.1,firstNote:42.877,density:.76,city:.14,clock:"run",motion:"wave",motionAmp:.16,motionSpeed:.95,motionPitch:.08},{name:"STASIS",start:66.417,end:76.075,keys:4,color:"#dfeaff",accent:"#9aa8ff",energy:.26,rotY:-.02,rotZ:.01,tilt:.04,spread:.92,y:.42,camZ:18.4,camY:7.5,bloom:.5,spin:.02,firstNote:66.417,density:0,city:.7,clock:"freeze",swing:!0,motion:"flat",motionAmp:.02,motionSpeed:.2,motionPitch:.01},{name:"RETURN",start:76.075,end:90.561,keys:6,color:"#64e6d8",accent:"#ffe29a",energy:.76,rotY:.05,rotZ:-.02,tilt:.012,spread:1.05,y:.1,camZ:16.2,camY:6.6,bloom:.86,spin:.08,firstNote:76.68,density:.7,city:.16,clock:"run",motion:"orbit",motionAmp:.14,motionSpeed:.9,motionPitch:.07},{name:"TICK",start:90.561,end:110.48,keys:6,color:"#ffd166",accent:"#7af0ff",energy:.84,rotY:-.1,rotZ:.04,tilt:-.02,spread:1.08,y:.15,camZ:15.6,camY:6.3,bloom:.94,spin:.11,firstNote:90.561,density:.8,city:.2,clock:"run",motion:"zigzag",motionAmp:.17,motionSpeed:1.15,motionPitch:.09},{name:"FINAL",start:110.48,end:129.795,keys:6,color:"#ff9f6b",accent:"#ffd166",energy:.94,rotY:.12,rotZ:-.045,tilt:.025,spread:1.1,y:.18,camZ:15,camY:6.1,bloom:1,spin:.14,firstNote:110.48,density:.9,city:.24,clock:"final",motion:"orbit",motionAmp:.17,motionSpeed:1,motionPitch:.085},{name:"OUTRO",start:129.795,end:140,keys:4,color:"#9fb8ff",accent:"#d7c4ff",energy:.3,rotY:0,rotZ:0,tilt:.03,spread:.9,y:.34,camZ:19.2,camY:7.6,bloom:.46,spin:.02,firstNote:129.795,density:.28,city:.72,clock:"off",holds:1,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0}],notes:[{t:3.341,lane:3},{t:4.247,lane:3},{t:5.454,lane:5},{t:5.756,lane:3},{t:7.566,lane:2},{t:8.17,lane:3},{t:9.377,lane:5},{t:9.679,lane:2},{t:10.283,lane:5},{t:10.434,lane:2},{t:10.585,lane:3},{t:11.339,lane:4},{t:12.999,lane:3},{t:18.281,lane:4},{t:18.583,lane:2},{t:19.035,lane:3},{t:19.186,lane:5},{t:19.639,lane:4},{t:20.544,lane:5},{t:20.997,lane:3},{t:21.148,lane:4},{t:21.752,lane:3},{t:22.053,lane:2},{t:22.657,lane:3},{t:22.808,lane:5},{t:24.015,lane:2},{t:24.317,lane:5},{t:24.619,lane:5},{t:25.071,lane:1},{t:25.071,lane:6},{t:25.826,lane:2},{t:26.882,lane:3},{t:26.882,lane:4},{t:27.335,lane:4},{t:27.486,lane:6},{t:28.693,lane:1},{t:28.844,lane:3},{t:28.995,lane:2},{t:29.297,lane:1},{t:29.599,lane:6},{t:29.9,lane:2},{t:30.806,lane:5},{t:30.957,lane:6},{t:31.862,lane:5},{t:32.013,lane:2},{t:32.315,lane:6},{t:32.768,lane:1},{t:32.919,lane:2},{t:33.069,lane:3},{t:33.22,lane:1},{t:33.371,lane:2},{t:33.522,lane:3},{t:33.824,lane:6},{t:34.729,lane:4},{t:35.031,lane:3},{t:35.333,lane:1},{t:35.333,lane:6},{t:35.937,lane:1},{t:36.238,lane:2},{t:36.842,lane:6},{t:37.144,lane:2},{t:37.295,lane:4},{t:38.2,lane:5},{t:38.955,lane:5},{t:39.257,lane:2},{t:39.86,lane:1},{t:40.162,lane:2},{t:40.313,lane:3},{t:40.464,lane:1},{t:40.917,lane:3},{t:41.671,lane:4},{t:41.973,lane:6},{t:42.275,lane:3},{t:42.577,lane:6},{t:42.878,lane:6},{t:43.18,lane:4},{t:43.331,lane:6},{t:43.482,lane:5},{t:43.935,lane:1},{t:44.387,lane:2},{t:44.387,lane:5},{t:44.538,lane:4},{t:44.689,lane:5},{t:44.84,lane:1},{t:44.84,lane:4},{t:44.991,lane:3},{t:44.991,lane:4},{t:45.293,lane:5},{t:45.444,lane:6},{t:46.047,lane:1},{t:46.5,lane:5},{t:46.651,lane:6},{t:46.802,lane:3},{t:46.953,lane:5},{t:47.104,lane:4},{t:47.707,lane:1},{t:47.858,lane:2},{t:48.16,lane:3},{t:48.311,lane:6},{t:48.462,lane:2},{t:48.462,lane:5},{t:48.613,lane:3},{t:49.216,lane:1},{t:49.518,lane:6},{t:49.669,lane:5},{t:49.82,lane:3},{t:50.122,lane:6},{t:50.273,lane:1},{t:50.725,lane:5},{t:50.876,lane:1},{t:50.876,lane:4},{t:51.329,lane:6},{t:51.48,lane:1},{t:51.631,lane:2},{t:51.782,lane:4},{t:52.084,lane:5},{t:52.536,lane:5},{t:52.687,lane:6},{t:52.838,lane:2},{t:53.14,lane:1},{t:53.291,lane:6},{t:53.442,lane:2},{t:53.744,lane:5},{t:53.894,lane:6},{t:54.045,lane:3},{t:54.045,lane:4},{t:54.196,lane:5},{t:54.347,lane:4},{t:54.498,lane:3},{t:54.498,lane:6},{t:54.649,lane:2},{t:54.951,lane:1},{t:55.102,lane:2},{t:55.253,lane:3},{t:55.403,lane:5},{t:55.705,lane:6},{t:56.158,lane:4},{t:56.309,lane:5},{t:56.46,lane:1},{t:56.611,lane:3},{t:56.762,lane:6},{t:57.063,lane:3},{t:57.365,lane:6},{t:57.516,lane:1},{t:57.667,lane:4},{t:58.12,lane:5},{t:58.271,lane:1},{t:58.422,lane:2},{t:58.874,lane:2},{t:59.176,lane:5},{t:59.327,lane:4},{t:59.478,lane:4},{t:60.082,lane:2},{t:60.232,lane:4},{t:60.383,lane:1},{t:60.534,lane:6},{t:61.138,lane:5},{t:61.289,lane:3},{t:61.591,lane:4},{t:61.742,lane:3},{t:61.892,lane:2},{t:62.194,lane:1},{t:62.345,lane:2},{t:62.496,lane:3},{t:62.798,lane:6},{t:63.1,lane:3},{t:63.401,lane:4},{t:63.552,lane:5},{t:64.005,lane:6},{t:64.609,lane:6},{t:64.76,lane:1},{t:64.911,lane:4},{t:65.212,lane:5},{t:65.363,lane:4},{t:65.514,lane:1},{t:66.118,lane:2},{t:76.983,lane:3},{t:76.983,lane:4},{t:77.888,lane:4},{t:78.19,lane:6},{t:78.492,lane:3},{t:78.643,lane:2},{t:78.643,lane:5},{t:78.794,lane:6},{t:79.699,lane:2},{t:79.85,lane:1},{t:79.85,lane:4},{t:80.001,lane:1},{t:80.303,lane:6},{t:80.454,lane:1},{t:80.907,lane:5},{t:81.057,lane:1},{t:81.208,lane:4},{t:81.359,lane:5},{t:81.51,lane:6},{t:81.661,lane:1},{t:82.114,lane:4},{t:82.265,lane:3},{t:82.717,lane:2},{t:82.868,lane:3},{t:83.019,lane:6},{t:83.321,lane:1},{t:83.472,lane:3},{t:83.472,lane:6},{t:83.623,lane:2},{t:83.925,lane:1},{t:84.076,lane:2},{t:84.226,lane:3},{t:84.377,lane:5},{t:84.528,lane:6},{t:84.679,lane:5},{t:85.132,lane:4},{t:86.037,lane:6},{t:86.188,lane:1},{t:86.339,lane:3},{t:86.943,lane:2},{t:87.094,lane:4},{t:87.245,lane:1},{t:87.848,lane:2},{t:87.848,lane:5},{t:88.15,lane:5},{t:88.452,lane:4},{t:88.754,lane:5},{t:89.055,lane:1},{t:89.206,lane:5},{t:89.357,lane:4},{t:89.508,lane:3},{t:89.659,lane:5},{t:89.81,lane:6},{t:89.961,lane:2},{t:90.112,lane:3},{t:90.564,lane:1},{t:90.715,lane:6},{t:90.866,lane:2},{t:90.866,lane:5},{t:91.168,lane:1},{t:91.319,lane:2},{t:91.47,lane:3},{t:91.47,lane:4},{t:91.772,lane:6},{t:91.923,lane:5},{t:92.074,lane:3},{t:92.375,lane:4},{t:92.526,lane:5},{t:92.677,lane:1},{t:92.677,lane:6},{t:92.979,lane:3},{t:93.13,lane:2},{t:93.13,lane:5},{t:93.583,lane:3},{t:93.733,lane:4},{t:94.186,lane:2},{t:94.337,lane:1},{t:94.488,lane:1},{t:94.639,lane:2},{t:94.941,lane:6},{t:95.092,lane:2},{t:95.243,lane:4},{t:95.695,lane:4},{t:95.846,lane:5},{t:95.997,lane:6},{t:96.148,lane:1},{t:96.299,lane:5},{t:96.45,lane:1},{t:96.601,lane:4},{t:96.752,lane:3},{t:97.204,lane:2},{t:97.355,lane:3},{t:97.506,lane:6},{t:97.808,lane:1},{t:97.959,lane:6},{t:98.11,lane:2},{t:98.261,lane:3},{t:98.412,lane:1},{t:98.562,lane:2},{t:98.713,lane:3},{t:98.864,lane:5},{t:99.015,lane:6},{t:99.166,lane:5},{t:99.77,lane:4},{t:100.222,lane:3},{t:100.373,lane:2},{t:100.524,lane:6},{t:101.43,lane:2},{t:101.581,lane:1},{t:101.581,lane:4},{t:101.731,lane:1},{t:101.882,lane:2},{t:102.033,lane:6},{t:102.184,lane:1},{t:102.335,lane:2},{t:102.637,lane:5},{t:102.788,lane:4},{t:102.939,lane:4},{t:103.241,lane:5},{t:103.391,lane:6},{t:103.995,lane:4},{t:104.146,lane:5},{t:104.448,lane:2},{t:104.599,lane:3},{t:104.75,lane:6},{t:105.202,lane:1},{t:105.353,lane:2},{t:105.806,lane:1},{t:105.957,lane:3},{t:106.108,lane:5},{t:106.259,lane:6},{t:106.41,lane:5},{t:106.56,lane:3},{t:106.862,lane:4},{t:107.013,lane:5},{t:107.466,lane:3},{t:107.617,lane:2},{t:107.617,lane:5},{t:107.768,lane:6},{t:108.069,lane:3},{t:108.22,lane:4},{t:108.371,lane:1},{t:108.522,lane:3},{t:108.673,lane:2},{t:108.975,lane:1},{t:109.277,lane:6},{t:109.428,lane:1},{t:109.579,lane:2},{t:109.88,lane:5},{t:110.031,lane:1},{t:110.182,lane:4},{t:110.333,lane:5},{t:110.484,lane:5},{t:110.635,lane:6},{t:110.786,lane:2},{t:110.786,lane:5},{t:111.238,lane:4},{t:111.389,lane:5},{t:111.54,lane:6},{t:111.691,lane:2},{t:111.993,lane:1},{t:111.993,lane:6},{t:112.446,lane:1},{t:112.597,lane:2},{t:112.748,lane:3},{t:112.898,lane:1},{t:113.049,lane:2},{t:113.2,lane:3},{t:113.351,lane:5},{t:113.804,lane:3},{t:114.106,lane:4},{t:114.408,lane:6},{t:114.709,lane:3},{t:115.011,lane:6},{t:115.162,lane:1},{t:115.615,lane:1},{t:115.766,lane:3},{t:116.218,lane:1},{t:116.369,lane:2},{t:116.822,lane:2},{t:117.275,lane:5},{t:117.426,lane:4},{t:117.727,lane:5},{t:117.878,lane:6},{t:118.029,lane:5},{t:118.18,lane:1},{t:118.633,lane:5},{t:118.935,lane:2},{t:119.086,lane:3},{t:119.236,lane:6},{t:119.538,lane:1},{t:119.689,lane:6},{t:119.84,lane:2},{t:119.991,lane:3},{t:120.142,lane:1},{t:120.293,lane:2},{t:120.444,lane:3},{t:120.746,lane:6},{t:120.896,lane:2},{t:121.047,lane:3},{t:121.198,lane:4},{t:121.349,lane:5},{t:121.651,lane:4},{t:121.802,lane:6},{t:122.255,lane:6},{t:122.556,lane:3},{t:122.707,lane:4},{t:122.858,lane:1},{t:123.16,lane:2},{t:123.311,lane:4},{t:123.462,lane:1},{t:124.065,lane:2},{t:124.367,lane:5},{t:124.669,lane:4},{t:124.971,lane:5},{t:125.122,lane:6},{t:125.273,lane:1},{t:125.575,lane:4},{t:125.725,lane:3},{t:126.027,lane:5},{t:126.178,lane:2},{t:126.329,lane:3},{t:126.48,lane:6},{t:126.631,lane:2},{t:126.782,lane:1},{t:126.933,lane:3},{t:126.933,lane:6},{t:127.084,lane:2},{t:127.385,lane:1},{t:127.536,lane:2},{t:127.687,lane:3},{t:127.989,lane:6},{t:128.14,lane:2},{t:128.291,lane:3},{t:128.593,lane:4},{t:128.894,lane:6},{t:129.045,lane:4},{t:129.196,lane:3},{t:129.347,lane:2},{t:129.347,lane:5},{t:129.8,lane:3},{t:130.253,lane:5},{t:130.705,lane:2},{t:131.309,lane:3},{t:131.395,lane:2,type:"hold",dur:1.207},{t:131.913,lane:4},{t:132.214,lane:3},{t:132.818,lane:2},{t:133.12,lane:3},{t:133.723,lane:3},{t:135.836,lane:5},{t:135.987,lane:2},{t:136.138,lane:3},{t:136.289,lane:5},{t:137.043,lane:3},{t:138.251,lane:5}],events:[{t:.001,type:"clock",mode:"off",power:.61},{t:1.509,type:"burst",lane:5,power:1.15},{t:1.529,type:"vibe",power:.91},{t:6.687,type:"burst",lane:2,power:1.15},{t:18.432,type:"clock",mode:"run",power:.75},{t:18.432,type:"clockTick",hand:"fast",power:.78},{t:19.035,type:"clockTick",hand:"slow",power:.86},{t:19.639,type:"clockTick",hand:"fast",power:.8},{t:19.807,type:"burst",lane:5,power:1.15},{t:19.827,type:"vibe",power:.79},{t:19.847,type:"echo",lane:7,dir:1,power:1.1},{t:20.243,type:"clockTick",hand:"slow",power:1.25},{t:20.846,type:"clockTick",hand:"fast",power:1.25},{t:21.45,type:"clockTick",hand:"slow",power:1.25},{t:22.053,type:"clockTick",hand:"fast",power:.85},{t:22.657,type:"clockTick",hand:"slow",power:.84},{t:23.261,type:"clockTick",hand:"fast",power:1.25},{t:23.864,type:"clockTick",hand:"slow",power:.45},{t:24.265,type:"burst",lane:2,power:1.15},{t:24.285,type:"vibe",power:.93},{t:24.305,type:"echo",lane:0,dir:-1,power:1.1},{t:24.484,type:"clock",mode:"run",power:.82},{t:24.513,type:"burst",lane:2,power:.86},{t:24.567,type:"burst",lane:1,power:1.15},{t:24.587,type:"vibe",power:.89},{t:24.607,type:"echo",lane:0,dir:-1,power:1.1},{t:25.071,type:"clockTick",hand:"fast",power:.45},{t:25.675,type:"clockTick",hand:"slow",power:.95},{t:26.279,type:"clockTick",hand:"fast",power:1.14},{t:26.882,type:"clockTick",hand:"slow",power:.76},{t:27.486,type:"clockTick",hand:"fast",power:.96},{t:28.09,type:"clockTick",hand:"slow",power:1.19},{t:28.693,type:"clockTick",hand:"fast",power:.92},{t:29.164,type:"burst",lane:6,power:1.15},{t:29.204,type:"echo",lane:7,dir:1,power:1.1},{t:29.297,type:"clockTick",hand:"slow",power:1.11},{t:29.9,type:"clockTick",hand:"fast",power:1.15},{t:30.504,type:"clockTick",hand:"slow",power:.96},{t:31.108,type:"clockTick",hand:"fast",power:1.12},{t:31.711,type:"clockTick",hand:"slow",power:1.24},{t:32.315,type:"clockTick",hand:"fast",power:1.04},{t:32.919,type:"clockTick",hand:"slow",power:1.25},{t:33.522,type:"clockTick",hand:"fast",power:1.22},{t:34.064,type:"burst",lane:1,power:1.15},{t:34.084,type:"vibe",power:.71},{t:34.104,type:"echo",lane:0,dir:-1,power:1.1},{t:34.126,type:"clockTick",hand:"slow",power:1.25},{t:34.729,type:"clockTick",hand:"fast",power:1.1},{t:35.333,type:"clockTick",hand:"slow",power:1.25},{t:35.937,type:"clockTick",hand:"fast",power:1.25},{t:36.54,type:"clockTick",hand:"slow",power:1.07},{t:37.144,type:"clockTick",hand:"fast",power:.77},{t:37.748,type:"clockTick",hand:"slow",power:1.21},{t:38.351,type:"clockTick",hand:"fast",power:1.25},{t:38.955,type:"clockTick",hand:"slow",power:1.25},{t:38.963,type:"burst",lane:1,power:1.15},{t:38.983,type:"vibe",power:.71},{t:39.003,type:"echo",lane:0,dir:-1,power:1.1},{t:39.558,type:"clockTick",hand:"fast",power:1.12},{t:40.162,type:"clockTick",hand:"slow",power:1.25},{t:40.766,type:"clockTick",hand:"fast",power:1.14},{t:41.369,type:"clockTick",hand:"slow",power:1.25},{t:41.973,type:"clockTick",hand:"fast",power:.92},{t:42.577,type:"clockTick",hand:"slow",power:1.25},{t:42.878,type:"clock",mode:"run",power:.9},{t:42.907,type:"burst",lane:2,power:.92},{t:43.18,type:"clockTick",hand:"fast",power:.92},{t:43.784,type:"clockTick",hand:"slow",power:.88},{t:43.862,type:"burst",lane:6,power:1.15},{t:43.902,type:"echo",lane:7,dir:1,power:1.1},{t:44.387,type:"clockTick",hand:"fast",power:.98},{t:44.991,type:"clockTick",hand:"slow",power:.45},{t:45.595,type:"clockTick",hand:"fast",power:.83},{t:46.198,type:"clockTick",hand:"slow",power:.45},{t:46.802,type:"clockTick",hand:"fast",power:.45},{t:47.405,type:"clockTick",hand:"slow",power:.96},{t:48.009,type:"clockTick",hand:"fast",power:1.18},{t:48.46,type:"burst",lane:1,power:1.15},{t:48.5,type:"echo",lane:0,dir:-1,power:1.1},{t:48.613,type:"clockTick",hand:"slow",power:1.05},{t:49.216,type:"clockTick",hand:"fast",power:1},{t:49.82,type:"clockTick",hand:"slow",power:1.15},{t:50.424,type:"clockTick",hand:"fast",power:1},{t:51.027,type:"clockTick",hand:"slow",power:1.05},{t:51.631,type:"clockTick",hand:"fast",power:1.04},{t:52.234,type:"clockTick",hand:"slow",power:.92},{t:52.535,type:"motion",style:"wave",amp:.18,speed:1.05,pitch:.09},{t:52.838,type:"clockTick",hand:"fast",power:1.16},{t:53.034,type:"burst",lane:6,power:1.15},{t:53.074,type:"echo",lane:7,dir:1,power:1.1},{t:53.442,type:"clockTick",hand:"slow",power:1.12},{t:54.045,type:"clockTick",hand:"fast",power:.93},{t:54.649,type:"clockTick",hand:"slow",power:1.11},{t:55.253,type:"clockTick",hand:"fast",power:1.21},{t:55.856,type:"clockTick",hand:"slow",power:1.25},{t:56.46,type:"clockTick",hand:"fast",power:.77},{t:57.063,type:"clockTick",hand:"slow",power:.72},{t:57.667,type:"clockTick",hand:"fast",power:.45},{t:57.934,type:"burst",lane:6,power:1.15},{t:57.954,type:"vibe",power:.73},{t:57.974,type:"echo",lane:7,dir:1,power:1.1},{t:58.271,type:"clockTick",hand:"slow",power:.73},{t:58.874,type:"clockTick",hand:"fast",power:.84},{t:59.478,type:"clockTick",hand:"slow",power:.45},{t:60.082,type:"clockTick",hand:"fast",power:.45},{t:60.685,type:"clockTick",hand:"slow",power:.45},{t:61.289,type:"clockTick",hand:"fast",power:.75},{t:61.892,type:"clockTick",hand:"slow",power:.88},{t:62.496,type:"clockTick",hand:"fast",power:.78},{t:63.1,type:"clockTick",hand:"slow",power:.81},{t:63.703,type:"clockTick",hand:"fast",power:.81},{t:64.307,type:"clockTick",hand:"slow",power:.92},{t:64.911,type:"clockTick",hand:"fast",power:.98},{t:65.514,type:"clockTick",hand:"slow",power:.88},{t:66.118,type:"clockTick",hand:"fast",power:.95},{t:66.418,type:"clock",mode:"freeze",power:.75},{t:66.419,type:"pendulum",mode:"start",period:2.4145,amplitude:.42},{t:76.073,type:"pendulum",mode:"stop"},{t:76.076,type:"clock",mode:"run",power:.88},{t:76.105,type:"burst",lane:2,power:.9},{t:76.379,type:"clockTick",hand:"fast",power:.45},{t:76.983,type:"clockTick",hand:"slow",power:.77},{t:77.587,type:"clockTick",hand:"fast",power:.78},{t:78.19,type:"clockTick",hand:"slow",power:.77},{t:78.794,type:"clockTick",hand:"fast",power:.75},{t:79.064,type:"burst",lane:6,power:1.15},{t:79.084,type:"vibe",power:.72},{t:79.104,type:"echo",lane:7,dir:1,power:1.1},{t:79.397,type:"clockTick",hand:"slow",power:1.25},{t:80.001,type:"clockTick",hand:"fast",power:.78},{t:80.605,type:"clockTick",hand:"slow",power:.45},{t:81.208,type:"clockTick",hand:"fast",power:.82},{t:81.812,type:"clockTick",hand:"slow",power:.91},{t:82.416,type:"clockTick",hand:"fast",power:.98},{t:83.019,type:"clockTick",hand:"slow",power:1.02},{t:83.623,type:"clockTick",hand:"fast",power:1.01},{t:84.226,type:"clockTick",hand:"slow",power:1.01},{t:84.83,type:"clockTick",hand:"fast",power:.87},{t:85.434,type:"clockTick",hand:"slow",power:.79},{t:86.037,type:"clockTick",hand:"fast",power:.75},{t:86.641,type:"clockTick",hand:"slow",power:.79},{t:87.245,type:"clockTick",hand:"fast",power:.76},{t:87.848,type:"clockTick",hand:"slow",power:.45},{t:88.452,type:"clockTick",hand:"fast",power:1.05},{t:89.055,type:"clockTick",hand:"slow",power:.91},{t:89.659,type:"clockTick",hand:"fast",power:.94},{t:90.263,type:"clockTick",hand:"slow",power:.45},{t:90.395,type:"burst",lane:1,power:1.15},{t:90.415,type:"vibe",power:.77},{t:90.435,type:"echo",lane:0,dir:-1,power:1.1},{t:90.562,type:"clock",mode:"run",power:.92},{t:90.591,type:"burst",lane:2,power:.94},{t:90.621,type:"vibe",power:.84},{t:90.866,type:"clockTick",hand:"fast",power:.88},{t:91.47,type:"clockTick",hand:"slow",power:.45},{t:92.074,type:"clockTick",hand:"fast",power:.77},{t:92.677,type:"clockTick",hand:"slow",power:.45},{t:92.833,type:"burst",lane:1,power:1.15},{t:92.873,type:"echo",lane:0,dir:-1,power:1.1},{t:93.281,type:"clockTick",hand:"fast",power:.88},{t:93.884,type:"clockTick",hand:"slow",power:.45},{t:94.488,type:"clockTick",hand:"fast",power:.85},{t:95.092,type:"clockTick",hand:"slow",power:.45},{t:95.695,type:"clockTick",hand:"fast",power:.77},{t:96.299,type:"clockTick",hand:"slow",power:.8},{t:96.902,type:"clockTick",hand:"fast",power:.77},{t:97.506,type:"clockTick",hand:"slow",power:.83},{t:98.11,type:"clockTick",hand:"fast",power:.82},{t:98.713,type:"clockTick",hand:"slow",power:.85},{t:98.963,type:"burst",lane:1,power:1.15},{t:99.003,type:"echo",lane:0,dir:-1,power:1.1},{t:99.317,type:"clockTick",hand:"fast",power:.85},{t:99.921,type:"clockTick",hand:"slow",power:.88},{t:100.524,type:"clockTick",hand:"fast",power:1.25},{t:101.128,type:"clockTick",hand:"slow",power:.79},{t:101.731,type:"clockTick",hand:"fast",power:.82},{t:102.335,type:"clockTick",hand:"slow",power:.81},{t:102.939,type:"clockTick",hand:"fast",power:.8},{t:103.542,type:"clockTick",hand:"slow",power:.81},{t:103.863,type:"burst",lane:6,power:1.15},{t:103.903,type:"echo",lane:7,dir:1,power:1.1},{t:104.146,type:"clockTick",hand:"fast",power:.82},{t:104.75,type:"clockTick",hand:"slow",power:.82},{t:105.353,type:"clockTick",hand:"fast",power:.89},{t:105.957,type:"clockTick",hand:"slow",power:.76},{t:106.56,type:"clockTick",hand:"fast",power:.81},{t:107.164,type:"clockTick",hand:"slow",power:.79},{t:107.768,type:"clockTick",hand:"fast",power:.79},{t:108.371,type:"clockTick",hand:"slow",power:.8},{t:108.975,type:"clockTick",hand:"fast",power:.82},{t:109.579,type:"clockTick",hand:"slow",power:.93},{t:110.182,type:"clockTick",hand:"fast",power:.82},{t:110.481,type:"clock",mode:"final",power:.97},{t:110.51,type:"burst",lane:2,power:.98},{t:110.54,type:"vibe",power:.94},{t:110.786,type:"clockTick",hand:"fast",power:.45},{t:111.389,type:"clockTick",hand:"slow",power:.45},{t:111.993,type:"clockTick",hand:"fast",power:.45},{t:112.129,type:"burst",lane:1,power:1.15},{t:112.149,type:"vibe",power:.74},{t:112.169,type:"echo",lane:0,dir:-1,power:1.1},{t:112.597,type:"clockTick",hand:"slow",power:.45},{t:113.2,type:"clockTick",hand:"fast",power:.8},{t:113.804,type:"clockTick",hand:"slow",power:.45},{t:114.408,type:"clockTick",hand:"fast",power:.78},{t:115.011,type:"clockTick",hand:"slow",power:.45},{t:115.309,type:"motion",style:"orbit",amp:.19,speed:1.2,pitch:.1},{t:115.615,type:"clockTick",hand:"fast",power:.45},{t:116.218,type:"clockTick",hand:"slow",power:.45},{t:116.727,type:"burst",lane:1,power:1.14},{t:116.767,type:"echo",lane:0,dir:-1,power:1.1},{t:116.822,type:"clockTick",hand:"fast",power:.45},{t:117.426,type:"clockTick",hand:"slow",power:.45},{t:118.029,type:"clockTick",hand:"fast",power:.76},{t:118.633,type:"clockTick",hand:"slow",power:1.12},{t:119.236,type:"clockTick",hand:"fast",power:1.08},{t:119.84,type:"clockTick",hand:"slow",power:1.05},{t:120.444,type:"clockTick",hand:"fast",power:.45},{t:121.047,type:"clockTick",hand:"slow",power:.86},{t:121.651,type:"clockTick",hand:"fast",power:1.12},{t:122.23,type:"burst",lane:1,power:1.15},{t:122.255,type:"clockTick",hand:"slow",power:1.25},{t:122.27,type:"echo",lane:0,dir:-1,power:1.1},{t:122.858,type:"clockTick",hand:"fast",power:1.01},{t:123.462,type:"clockTick",hand:"slow",power:1.19},{t:124.065,type:"clockTick",hand:"fast",power:1.14},{t:124.669,type:"clockTick",hand:"slow",power:1.08},{t:125.273,type:"clockTick",hand:"fast",power:.83},{t:125.876,type:"clockTick",hand:"slow",power:1.18},{t:126.48,type:"clockTick",hand:"fast",power:.88},{t:127.084,type:"clockTick",hand:"slow",power:1.25},{t:127.129,type:"burst",lane:6,power:1.15},{t:127.169,type:"echo",lane:7,dir:1,power:1.1},{t:127.687,type:"clockTick",hand:"fast",power:.79},{t:128.291,type:"clockTick",hand:"slow",power:.86},{t:128.894,type:"clockTick",hand:"fast",power:.83},{t:129.498,type:"clockTick",hand:"slow",power:.76},{t:129.796,type:"clock",mode:"off",power:.65},{t:133.12,type:"burst",lane:5,power:1.15},{t:137.718,type:"burst",lane:5,power:1.15}],ghosts:[{t:18.471,lane:0,type:"sweep"},{t:18.541,lane:7,type:"sweep"},{t:19.867,lane:7,type:"bounce"},{t:24.325,lane:0,type:"bounce"},{t:24.523,lane:0,type:"sweep"},{t:24.593,lane:7,type:"sweep"},{t:24.627,lane:0,type:"bounce"},{t:29.224,lane:7,type:"sweep"},{t:34.124,lane:0,type:"sweep"},{t:39.023,lane:0,type:"sweep"},{t:42.917,lane:0,type:"sweep"},{t:42.987,lane:7,type:"sweep"},{t:43.922,lane:7,type:"sweep"},{t:48.52,lane:0,type:"sweep"},{t:53.094,lane:7,type:"sweep"},{t:57.994,lane:7,type:"sweep"},{t:66.457,lane:0,type:"sweep"},{t:66.527,lane:7,type:"sweep"},{t:76.115,lane:0,type:"sweep"},{t:76.185,lane:7,type:"sweep"},{t:79.124,lane:7,type:"sweep"},{t:90.455,lane:0,type:"bounce"},{t:90.601,lane:0,type:"sweep"},{t:90.671,lane:7,type:"sweep"},{t:92.893,lane:0,type:"sweep"},{t:99.023,lane:0,type:"sweep"},{t:103.923,lane:7,type:"sweep"},{t:110.52,lane:0,type:"sweep"},{t:110.59,lane:7,type:"sweep"},{t:112.189,lane:0,type:"bounce"},{t:116.787,lane:0,type:"sweep"},{t:122.29,lane:0,type:"sweep"},{t:127.189,lane:7,type:"sweep"}],swings:[{t:67.021},{t:68.228},{t:69.435},{t:70.642},{t:71.85},{t:73.057},{t:74.264},{t:75.471}]},Zd={song:{title:"THE UNTOUCHABLE OF f RA IA'S LAND",shortTitle:"THE UNTOUCHABLE",artist:"f RA IA",bpm:111.1,bpmLabel:"111 / 96 BPM",bpmMap:[{t:0,bpm:111.1},{t:28.492,bpm:96},{t:63.59,bpm:111.1}],duration:147.541,chartEnd:141.829,introEnd:28.492,beatOffset:.409,difficulty:"BOSS",laneLabel:"4 · 6 · 8",freeNotes:!0,boss:!0,fadeStart:140.2,fadeEnd:142.6},sections:[{name:"OVERTURE",start:0,end:9.05,keys:8,intro:!0,color:"#ffcf6e",accent:"#ff3b5c",energy:.42,bloom:.68,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:19.5,camY:7.2,spin:.02,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.03,motionSpeed:.25,motionPitch:.015,city:0},{name:"RELIQUARY",start:9.05,end:18.77,keys:8,intro:!0,color:"#ffb45e",accent:"#9b6bff",energy:.62,bloom:.8,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:19.5,camY:7.2,spin:.03,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"wave",motionAmp:.05,motionSpeed:.35,motionPitch:.02,city:0},{name:"HUSH",start:18.77,end:20.39,keys:8,intro:!0,color:"#b8c8ff",accent:"#ffd166",energy:.2,bloom:.42,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:19.5,camY:7.2,spin:.01,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"flat",motionAmp:.01,motionSpeed:.2,motionPitch:.005,city:0},{name:"PROCESSION",start:20.39,end:28.492,keys:8,intro:!0,color:"#ff8a5e",accent:"#ffd166",energy:.84,bloom:.96,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:19.5,camY:7.2,spin:.05,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.1,motionSpeed:.6,motionPitch:.04,city:0},{name:"CHAMBER",start:28.492,end:48.492,keys:4,firstNote:29.742,color:"#a99bff",accent:"#ffd166",energy:.32,bloom:.62,rotY:0,rotZ:0,tilt:.02,spread:.98,y:.08,camZ:18.8,camY:7,spin:.025,lookY:5,lookZ:-2,bpm:96,beatOffset:28.492,motion:"wave",motionAmp:.04,motionSpeed:.4,motionPitch:.018,city:0},{name:"MECHANISM",start:48.492,end:61.492,keys:6,color:"#ffb45e",accent:"#ff4d6d",energy:.62,bloom:.82,rotY:.05,rotZ:-.018,tilt:.015,spread:1.03,y:.1,camZ:17.4,camY:6.8,spin:.06,lookY:5.4,lookZ:-4,bpm:96,beatOffset:28.492,motion:"clock",motionAmp:.075,motionSpeed:.55,motionPitch:.03,city:0},{name:"DESCENT",start:61.492,end:63.59,keys:6,color:"#ff6b7a",accent:"#ffd166",energy:.76,bloom:.9,rotY:-.06,rotZ:.025,tilt:-.02,spread:1.05,y:.12,camZ:16.4,camY:6.4,spin:.09,lookY:5.6,lookZ:-5,bpm:96,beatOffset:28.492,motion:"slope",motionAmp:.12,motionSpeed:.7,motionPitch:.05,city:0},{name:"GALLERY",start:63.59,end:70.069,keys:6,color:"#ff7a5e",accent:"#ffd166",energy:.84,bloom:.98,rotY:.08,rotZ:-.03,tilt:.025,spread:1.06,y:.14,camZ:16.2,camY:6.7,spin:.1,lookY:5.8,lookZ:-6,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.13,motionSpeed:.75,motionPitch:.05,city:0},{name:"HUNT",start:70.069,end:89.449,keys:6,color:"#ff4d6d",accent:"#ffd166",energy:.98,bloom:1.08,rotY:-.1,rotZ:.04,tilt:-.025,spread:1.08,y:.16,camZ:15.8,camY:6.6,spin:.13,lookY:6,lookZ:-6,bpm:111.1,beatOffset:.409,motion:"zigzag",motionAmp:.16,motionSpeed:.95,motionPitch:.065,city:0},{name:"FROZEN",start:89.449,end:105.429,keys:4,color:"#9fc7ff",accent:"#d7e8ff",energy:.3,bloom:.58,rotY:-.02,rotZ:.01,tilt:.04,spread:.94,y:.24,camZ:19.2,camY:7.8,spin:.02,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"flat",motionAmp:.02,motionSpeed:.2,motionPitch:.008,city:0},{name:"ASCENT",start:105.429,end:107.509,keys:6,color:"#ffd166",accent:"#ff7a5e",energy:.88,bloom:1,rotY:.06,rotZ:-.025,tilt:.02,spread:1.04,y:.12,camZ:16.4,camY:6.5,spin:.1,lookY:5.8,lookZ:-5,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.16,motionSpeed:.9,motionPitch:.06,city:0},{name:"APOTHEOSIS",start:107.509,end:123.829,keys:8,color:"#ff9a5e",accent:"#ff3b5c",energy:1.04,bloom:1.14,rotY:-.12,rotZ:.05,tilt:-.03,spread:1.1,y:.18,camZ:15.4,camY:6.5,spin:.15,lookY:6,lookZ:-6,bpm:111.1,beatOffset:.409,motion:"clock",motionAmp:.18,motionSpeed:1.05,motionPitch:.075,city:0},{name:"FINALE",start:123.829,end:141.829,keys:8,color:"#ff3b5c",accent:"#ffd166",energy:1.12,bloom:1.2,rotY:.14,rotZ:-.055,tilt:.035,spread:1.12,y:.2,camZ:14.8,camY:6.3,spin:.17,lookY:6.2,lookZ:-7,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.2,motionSpeed:1.15,motionPitch:.085,city:0},{name:"OUTRO",start:141.829,end:147.541,keys:4,color:"#c9b8ff",accent:"#ffd166",energy:.18,bloom:.46,rotY:0,rotZ:0,tilt:.02,spread:.92,y:.3,camZ:19.6,camY:7.8,spin:.02,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"flat",motionAmp:0,motionSpeed:.2,motionPitch:0,city:0}],notes:[{t:30.367,lane:5},{t:30.992,lane:3},{t:31.617,lane:4},{t:32.555,lane:2},{t:33.492,lane:4},{t:35.055,lane:5,type:"hold",dur:1.25},{t:35.367,lane:4},{t:35.992,lane:2},{t:36.617,lane:2},{t:38.492,lane:2},{t:38.492,lane:5},{t:39.43,lane:5},{t:40.367,lane:5},{t:40.992,lane:3},{t:41.617,lane:4},{t:42.555,lane:3,type:"hold",dur:1.25},{t:43.492,lane:2},{t:44.43,lane:4},{t:45.992,lane:3},{t:47.555,lane:3},{t:48.492,lane:1},{t:48.492,lane:6},{t:49.43,lane:6},{t:50.055,lane:5},{t:50.68,lane:6},{t:50.992,lane:1},{t:51.305,lane:5},{t:51.93,lane:6},{t:52.242,lane:3},{t:52.867,lane:4},{t:53.492,lane:4},{t:54.117,lane:2},{t:54.43,lane:1},{t:55.055,lane:5},{t:55.68,lane:4},{t:55.992,lane:3},{t:56.305,lane:2},{t:56.93,lane:1},{t:57.242,lane:3},{t:57.867,lane:6},{t:58.492,lane:1},{t:58.492,lane:6},{t:59.117,lane:5},{t:59.43,lane:2},{t:60.055,lane:6},{t:60.68,lane:5},{t:60.992,lane:1},{t:61.305,lane:3},{t:61.617,lane:2},{t:61.93,lane:5},{t:62.242,lane:3},{t:62.555,lane:4},{t:62.867,lane:3},{t:63.492,lane:1},{t:63.595,lane:4},{t:63.73,lane:6},{t:64,lane:1},{t:64.135,lane:5},{t:64.405,lane:2},{t:64.81,lane:5},{t:64.945,lane:4},{t:65.215,lane:4},{t:65.486,lane:2},{t:65.621,lane:1},{t:65.891,lane:5},{t:66.161,lane:4},{t:66.296,lane:2},{t:66.566,lane:4},{t:66.836,lane:2},{t:66.971,lane:1},{t:67.241,lane:5},{t:67.376,lane:2},{t:67.646,lane:4},{t:67.916,lane:2},{t:68.321,lane:5},{t:68.456,lane:6},{t:68.726,lane:2},{t:69.131,lane:3},{t:69.266,lane:2},{t:69.536,lane:3},{t:69.536,lane:4},{t:69.806,lane:2},{t:69.941,lane:4},{t:70.346,lane:2},{t:70.616,lane:3},{t:70.751,lane:4},{t:71.021,lane:5},{t:71.291,lane:6},{t:71.426,lane:1},{t:71.561,lane:6},{t:71.696,lane:3},{t:72.236,lane:2},{t:72.371,lane:6},{t:72.776,lane:2},{t:73.046,lane:3},{t:73.181,lane:4},{t:73.451,lane:5},{t:73.721,lane:6},{t:73.856,lane:3},{t:73.991,lane:4},{t:74.261,lane:6},{t:74.396,lane:5},{t:74.666,lane:3},{t:74.936,lane:1},{t:75.071,lane:2},{t:75.341,lane:4},{t:75.477,lane:5},{t:75.747,lane:5},{t:76.017,lane:1},{t:76.287,lane:3},{t:76.422,lane:4},{t:76.827,lane:5},{t:77.097,lane:3},{t:77.232,lane:2},{t:77.502,lane:2},{t:77.772,lane:4},{t:77.907,lane:5},{t:78.042,lane:6},{t:78.177,lane:3},{t:78.177,lane:4},{t:78.447,lane:1},{t:78.717,lane:2},{t:79.122,lane:6},{t:79.257,lane:4},{t:79.527,lane:3},{t:79.662,lane:5},{t:79.932,lane:4},{t:80.202,lane:5},{t:80.337,lane:4},{t:80.472,lane:1},{t:80.877,lane:1},{t:81.147,lane:2},{t:81.417,lane:3},{t:81.552,lane:6},{t:81.822,lane:1},{t:81.957,lane:3},{t:82.227,lane:1},{t:82.497,lane:3},{t:82.767,lane:4},{t:82.902,lane:6},{t:83.172,lane:1},{t:83.307,lane:5},{t:83.577,lane:2},{t:83.712,lane:6},{t:83.982,lane:5},{t:84.252,lane:6},{t:84.387,lane:3},{t:84.522,lane:1},{t:84.657,lane:2},{t:84.927,lane:3},{t:85.197,lane:4},{t:85.332,lane:6},{t:85.603,lane:1},{t:85.738,lane:5},{t:86.008,lane:2},{t:86.143,lane:6},{t:86.413,lane:5},{t:86.683,lane:6},{t:86.818,lane:3},{t:86.818,lane:4},{t:86.953,lane:3},{t:87.223,lane:1},{t:87.358,lane:3},{t:87.628,lane:6},{t:87.898,lane:2},{t:88.033,lane:1},{t:88.303,lane:3},{t:88.438,lane:2},{t:88.708,lane:3},{t:88.978,lane:2},{t:89.248,lane:4},{t:90.058,lane:4},{t:90.733,lane:5},{t:91.138,lane:4},{t:92.218,lane:4},{t:93.028,lane:3},{t:93.298,lane:5},{t:93.568,lane:2},{t:94.039,lane:5,type:"hold",dur:.81},{t:94.783,lane:4},{t:95.053,lane:5},{t:95.459,lane:2},{t:95.459,lane:5},{t:95.864,lane:3},{t:96.269,lane:3},{t:96.539,lane:5},{t:96.944,lane:3},{t:97.349,lane:3},{t:97.619,lane:4},{t:98.294,lane:4},{t:98.699,lane:4},{t:99.104,lane:5},{t:99.779,lane:4},{t:100.184,lane:2},{t:100.52,lane:3,type:"hold",dur:.81},{t:100.859,lane:4},{t:101.264,lane:2},{t:101.669,lane:3},{t:101.939,lane:5},{t:102.209,lane:2},{t:102.614,lane:4},{t:103.019,lane:5},{t:103.424,lane:5},{t:104.099,lane:2},{t:104.099,lane:5},{t:104.504,lane:5},{t:104.909,lane:2},{t:105.179,lane:2},{t:105.45,lane:3},{t:105.585,lane:5},{t:105.72,lane:6},{t:105.855,lane:4},{t:105.99,lane:2},{t:106.125,lane:1},{t:106.26,lane:2},{t:106.395,lane:1},{t:106.53,lane:3},{t:106.665,lane:5},{t:106.8,lane:6},{t:107.205,lane:1},{t:107.34,lane:4},{t:107.61,lane:2},{t:107.88,lane:1},{t:108.15,lane:0},{t:108.285,lane:7},{t:108.42,lane:4},{t:108.69,lane:6},{t:108.96,lane:6},{t:109.095,lane:5},{t:109.365,lane:3},{t:109.5,lane:2},{t:109.77,lane:0},{t:109.905,lane:1},{t:110.175,lane:3},{t:110.31,lane:4},{t:110.58,lane:6},{t:110.715,lane:5},{t:110.985,lane:3},{t:111.12,lane:2},{t:111.39,lane:0},{t:111.525,lane:1},{t:111.795,lane:3},{t:111.93,lane:4},{t:112.2,lane:6},{t:112.47,lane:6},{t:112.605,lane:5},{t:112.74,lane:0},{t:112.74,lane:7},{t:113.01,lane:0},{t:113.28,lane:4},{t:113.415,lane:7},{t:113.685,lane:2},{t:113.82,lane:5},{t:114.09,lane:2},{t:114.225,lane:4},{t:114.495,lane:6},{t:114.63,lane:0},{t:114.9,lane:4},{t:115.035,lane:7},{t:115.305,lane:2},{t:115.441,lane:5},{t:115.711,lane:2},{t:115.846,lane:4},{t:116.251,lane:0},{t:116.521,lane:0},{t:116.791,lane:4},{t:116.926,lane:7},{t:117.061,lane:3},{t:117.331,lane:3},{t:117.601,lane:2},{t:117.736,lane:5},{t:118.006,lane:4},{t:118.141,lane:0},{t:118.411,lane:1},{t:118.546,lane:5},{t:118.816,lane:6},{t:118.951,lane:3},{t:119.221,lane:2},{t:119.356,lane:5},{t:119.626,lane:4},{t:119.761,lane:0},{t:120.031,lane:1},{t:120.166,lane:5},{t:120.436,lane:6},{t:120.571,lane:3},{t:120.841,lane:3},{t:121.111,lane:2},{t:121.246,lane:5},{t:121.381,lane:0},{t:121.381,lane:7},{t:121.651,lane:5},{t:121.921,lane:3},{t:122.056,lane:2},{t:122.326,lane:0},{t:122.461,lane:2},{t:122.731,lane:1},{t:122.866,lane:5},{t:123.136,lane:7},{t:123.271,lane:6},{t:123.541,lane:3},{t:123.676,lane:2},{t:123.946,lane:4},{t:124.081,lane:3},{t:124.216,lane:5},{t:124.486,lane:6},{t:124.621,lane:1},{t:124.891,lane:0},{t:125.026,lane:7},{t:125.161,lane:1},{t:125.432,lane:2},{t:125.567,lane:5},{t:125.702,lane:6},{t:125.972,lane:4},{t:126.107,lane:3},{t:126.242,lane:2},{t:126.377,lane:1},{t:126.647,lane:1},{t:126.782,lane:2},{t:126.917,lane:3},{t:127.187,lane:5},{t:127.322,lane:6},{t:127.592,lane:6},{t:127.727,lane:5},{t:127.862,lane:2},{t:127.862,lane:5},{t:127.997,lane:1},{t:128.132,lane:0},{t:128.402,lane:2},{t:128.537,lane:3},{t:128.672,lane:4},{t:128.942,lane:6},{t:129.077,lane:7},{t:129.347,lane:5},{t:129.482,lane:4},{t:129.617,lane:3},{t:129.887,lane:1},{t:130.022,lane:3},{t:130.022,lane:4},{t:130.157,lane:7},{t:130.427,lane:2},{t:130.562,lane:5},{t:130.697,lane:6},{t:130.967,lane:4},{t:131.102,lane:1},{t:131.372,lane:0},{t:131.507,lane:7},{t:131.642,lane:0},{t:131.912,lane:4},{t:132.047,lane:7},{t:132.182,lane:2},{t:132.182,lane:5},{t:132.452,lane:2},{t:132.587,lane:4},{t:132.722,lane:1},{t:132.857,lane:6},{t:133.127,lane:7},{t:133.262,lane:0},{t:133.397,lane:3},{t:133.667,lane:7},{t:133.802,lane:1},{t:134.072,lane:5},{t:134.207,lane:6},{t:134.342,lane:2},{t:134.477,lane:5},{t:134.612,lane:1},{t:134.882,lane:0},{t:135.017,lane:4},{t:135.152,lane:1},{t:135.423,lane:2},{t:135.558,lane:6},{t:135.828,lane:7},{t:135.963,lane:3},{t:136.098,lane:6},{t:136.368,lane:5},{t:136.503,lane:0},{t:136.503,lane:7},{t:136.638,lane:4},{t:136.908,lane:5},{t:137.043,lane:2},{t:137.178,lane:6},{t:137.448,lane:7},{t:137.583,lane:3},{t:137.853,lane:2},{t:137.988,lane:5},{t:138.123,lane:1},{t:138.393,lane:0},{t:138.528,lane:4},{t:138.663,lane:3},{t:138.663,lane:4},{t:138.933,lane:1},{t:139.068,lane:0},{t:139.203,lane:2},{t:139.338,lane:4},{t:139.608,lane:5},{t:139.743,lane:3},{t:139.878,lane:7},{t:140.148,lane:6},{t:140.283,lane:5},{t:140.553,lane:3},{t:140.688,lane:2},{t:140.823,lane:3},{t:140.823,lane:4},{t:140.958,lane:1},{t:141.093,lane:5},{t:141.363,lane:3},{t:141.498,lane:7},{t:141.633,lane:6}],events:[{t:0,type:"bossCamera",pos:[0,15,48],look:[0,18,-70],fov:48,roll:0,dur:.02},{t:.409,type:"bossCamera",pos:[0,14,46],look:[0,20,-74],fov:48,roll:0,dur:1.1},{t:.409,type:"bossGlitch",power:.5},{t:.409,type:"pulse",power:.51},{t:.429,type:"wind",power:.95},{t:.7,type:"caption",kicker:"OVERTURE",title:"THE UNTOUCHABLE",sub:"OF f RA IA'S LAND",hold:5.6},{t:2.569,type:"bossCamera",pos:[0,10,31],look:[0,20,-78],fov:52,roll:-.02,dur:.85},{t:2.569,type:"pulse",power:.51},{t:4.729,type:"bossCamera",pos:[-7,5.5,20],look:[2,23,-86],fov:58,roll:.025,dur:.78},{t:4.729,type:"bossGlitch",power:.7},{t:4.729,type:"pulse",power:.51},{t:6.889,type:"bossCamera",pos:[8,3.1,10],look:[-4,19,-82],fov:61,roll:.035,dur:.72},{t:6.89,type:"pulse",power:.51},{t:8.95,type:"bossGlitch",power:.9},{t:9.05,type:"bossCamera",pos:[-16,10,-2],look:[8,15,-66],fov:55,roll:-.03,dur:.92},{t:9.05,type:"pulse",power:.62},{t:9.07,type:"wind",power:1.07},{t:9.2,type:"caption",kicker:"I",title:"THE NAVE",sub:"EVERY SAINT HAS TURNED AWAY",hold:4.2},{t:11.21,type:"bossCamera",pos:[13,17,-14],look:[-10,12,-82],fov:52,roll:.05,dur:.85},{t:11.21,type:"pulse",power:.62},{t:13.37,type:"bossCamera",pos:[0,24,16],look:[0,14,-44],fov:50,roll:0,dur:.72},{t:13.37,type:"bossGlitch",power:.65},{t:13.37,type:"pulse",power:.62},{t:15.53,type:"bossCamera",pos:[0,3,6],look:[0,23,-88],fov:63,roll:.02,dur:.68},{t:15.531,type:"pulse",power:.62},{t:17.69,type:"bossCamera",pos:[0,12,38],look:[0,21,-88],fov:48,roll:0,dur:1.05},{t:17.691,type:"pulse",power:.62},{t:17.711,type:"wind",power:1.07},{t:18.77,type:"bossGlitch",power:1},{t:19.85,type:"bossCamera",pos:[0,6,18],look:[0,25,-88],fov:58,roll:-.03,dur:.52},{t:19.851,type:"pulse",power:.39},{t:20.43,type:"vibe",power:.84},{t:20.5,type:"caption",kicker:"II",title:"THE PROCESSION",sub:"THE HOUR HAND FALLS",hold:4},{t:21.49,type:"bossCamera",pos:[-12,15,10],look:[6,11,-48],fov:55,roll:.04,dur:.8},{t:21.49,type:"bossGlitch",power:.8},{t:22.011,type:"pulse",power:.74},{t:23.65,type:"bossCamera",pos:[12,4,4],look:[-4,19,-74],fov:60,roll:-.05,dur:.62},{t:23.65,type:"bossGlitch",power:.9},{t:24.171,type:"pulse",power:.74},{t:25.81,type:"bossCamera",pos:[0,26,26],look:[0,0,-4],fov:58,roll:.03,dur:.72},{t:26.3,type:"caption",kicker:"III",title:"THE CLOCK",sub:"DO NOT LET IT STRIKE",hold:2.4},{t:26.332,type:"pulse",power:.74},{t:26.352,type:"wind",power:1.2},{t:27.97,type:"bossCamera",pos:[0,9.5,26],look:[0,5,-2],fov:51,roll:0,dur:.52},{t:27.97,type:"bossGlitch",power:1.15},{t:28.492,type:"bossCamera",pos:[0,7.4,19.2],look:[0,4.87,-2],fov:48.62,roll:0,dur:.6},{t:28.492,type:"bossGlitch",power:1.3},{t:28.492,type:"bossPhase",mode:"play"},{t:28.492,type:"bossTick",hand:"fast",power:.54},{t:28.492,type:"pulse",power:.42},{t:28.522,type:"echo",lane:0,dir:-1,power:.72},{t:30.992,type:"bossTick",hand:"slow",power:.54},{t:30.992,type:"pulse",power:.42},{t:33.492,type:"bossTick",hand:"fast",power:.54},{t:33.492,type:"pulse",power:.42},{t:33.522,type:"echo",lane:7,dir:1,power:.72},{t:33.55,type:"bossCamera",pos:[0,8.1,18.4],look:[0,4.88,-3],fov:51.58,roll:0,dur:.8},{t:35.992,type:"bossTick",hand:"slow",power:.54},{t:35.992,type:"pulse",power:.42},{t:38.492,type:"bossTick",hand:"fast",power:.54},{t:38.492,type:"pulse",power:.42},{t:38.522,type:"echo",lane:0,dir:-1,power:.72},{t:40.742,type:"bossCamera",pos:[-5,9.2,18.8],look:[2,5.2,-4],fov:52.07,roll:.02,dur:1},{t:40.992,type:"bossTick",hand:"slow",power:.54},{t:40.992,type:"pulse",power:.42},{t:43.492,type:"bossTick",hand:"fast",power:.54},{t:43.492,type:"pulse",power:.42},{t:43.522,type:"echo",lane:7,dir:1,power:.72},{t:45.992,type:"bossTick",hand:"slow",power:.54},{t:45.992,type:"pulse",power:.42},{t:48.492,type:"bossCamera",pos:[-4,7.8,17.2],look:[2,4.38,-6],fov:52.36,roll:-.02,dur:.9},{t:48.492,type:"bossGlitch",power:.7},{t:48.492,type:"bossTick",hand:"fast",power:.72},{t:48.492,type:"pulse",power:.6},{t:48.522,type:"echo",lane:0,dir:-1,power:.93},{t:50.992,type:"bossTick",hand:"slow",power:.72},{t:50.992,type:"pulse",power:.6},{t:53.492,type:"bossTick",hand:"fast",power:.72},{t:53.492,type:"pulse",power:.6},{t:53.522,type:"echo",lane:7,dir:1,power:.93},{t:54.92,type:"bossCamera",pos:[5,8.05,16.4],look:[-2,4.43,-6],fov:54,roll:.03,dur:.9},{t:55.992,type:"bossTick",hand:"slow",power:.72},{t:55.992,type:"pulse",power:.6},{t:58.492,type:"bossTick",hand:"fast",power:.72},{t:58.492,type:"pulse",power:.6},{t:58.522,type:"echo",lane:0,dir:-1,power:.93},{t:60.992,type:"bossTick",hand:"slow",power:.72},{t:60.992,type:"pulse",power:.6},{t:61.492,type:"bossCamera",pos:[-7,6.6,15.4],look:[4,3.81,-10],fov:51,roll:-.04,dur:.7},{t:63.492,type:"bossTick",hand:"fast",power:.81},{t:63.492,type:"pulse",power:.69},{t:63.522,type:"echo",lane:7,dir:1,power:1.03},{t:63.59,type:"bossCamera",pos:[0,7.32,16.2],look:[0,3.91,-7],fov:54,roll:.03,dur:.6},{t:63.59,type:"bossGlitch",power:1.1},{t:64.656,type:"burst",lane:4,power:1.2},{t:65.215,type:"bossTick",hand:"fast",power:.85},{t:65.215,type:"pulse",power:.74},{t:65.245,type:"echo",lane:7,dir:1,power:1.09},{t:67.376,type:"bossTick",hand:"slow",power:.85},{t:67.376,type:"pulse",power:.74},{t:67.91,type:"motion",style:"orbit",amp:.16,speed:1.05,pitch:.08},{t:68.975,type:"burst",lane:6,power:1.2},{t:68.995,type:"wind",power:1.3},{t:69.005,type:"vibe",power:.86},{t:69.536,type:"bossTick",hand:"fast",power:.85},{t:69.536,type:"pulse",power:.74},{t:69.566,type:"echo",lane:0,dir:-1,power:1.09},{t:70.069,type:"bossCamera",pos:[0,6.7,15.4],look:[0,3.46,-9],fov:54,roll:0,dur:.7},{t:70.069,type:"bossGlitch",power:1.2},{t:70.6,type:"burst",lane:4,power:1.2},{t:70.62,type:"wind",power:1.3},{t:71.696,type:"bossTick",hand:"slow",power:.94},{t:71.696,type:"pulse",power:.83},{t:71.966,type:"pulse",power:.85},{t:73.856,type:"bossTick",hand:"fast",power:.94},{t:73.856,type:"pulse",power:.83},{t:73.886,type:"echo",lane:7,dir:1,power:1.19},{t:74.39,type:"bossCamera",pos:[-6,6.9,14.6],look:[3,3.61,-10],fov:54,roll:.035,dur:.85},{t:75.732,type:"burst",lane:2,power:1.2},{t:76.017,type:"bossTick",hand:"slow",power:.94},{t:76.017,type:"pulse",power:.83},{t:78.177,type:"bossTick",hand:"fast",power:.94},{t:78.177,type:"pulse",power:.83},{t:78.207,type:"echo",lane:0,dir:-1,power:1.19},{t:78.71,type:"bossCamera",pos:[6,7.19,15],look:[-3,3.67,-10],fov:54,roll:-.04,dur:.85},{t:79.575,type:"burst",lane:4,power:1.2},{t:79.595,type:"wind",power:1.3},{t:79.605,type:"vibe",power:.9},{t:80.337,type:"bossTick",hand:"slow",power:.94},{t:80.337,type:"pulse",power:.83},{t:80.607,type:"pulse",power:.85},{t:82.497,type:"bossTick",hand:"fast",power:.94},{t:82.497,type:"pulse",power:.83},{t:82.527,type:"echo",lane:7,dir:1,power:1.19},{t:83.03,type:"bossCamera",pos:[0,5.55,13.8],look:[0,3.27,-8],fov:54,roll:.02,dur:.85},{t:84.37,type:"burst",lane:1,power:1.2},{t:84.39,type:"wind",power:1.3},{t:84.657,type:"bossTick",hand:"slow",power:.94},{t:84.657,type:"pulse",power:.83},{t:86.818,type:"bossTick",hand:"fast",power:.94},{t:86.818,type:"pulse",power:.83},{t:86.848,type:"echo",lane:0,dir:-1,power:1.19},{t:87.35,type:"bossCamera",pos:[-8,7.23,14.2],look:[4,4,-9],fov:54,roll:-.03,dur:.65},{t:88.282,type:"burst",lane:3,power:1.2},{t:88.978,type:"bossTick",hand:"slow",power:.94},{t:88.978,type:"pulse",power:.83},{t:89.248,type:"pulse",power:.85},{t:89.449,type:"bossCamera",pos:[0,8.8,20.2],look:[0,5.34,-2],fov:49.91,roll:0,dur:.9},{t:89.449,type:"bossGlitch",power:.9},{t:90.035,type:"burst",lane:2,power:1.2},{t:90.055,type:"wind",power:1.3},{t:90.065,type:"vibe",power:1.15},{t:91.138,type:"bossTick",hand:"fast",power:.53},{t:91.138,type:"pulse",power:.41},{t:91.168,type:"echo",lane:7,dir:1,power:.71},{t:93.298,type:"bossTick",hand:"slow",power:.53},{t:93.298,type:"pulse",power:.41},{t:95.459,type:"bossTick",hand:"fast",power:.53},{t:95.459,type:"pulse",power:.41},{t:95.489,type:"echo",lane:0,dir:-1,power:.71},{t:97.438,type:"bossCamera",pos:[-8,9.6,18.4],look:[4,5.19,-6],fov:51.91,roll:.025,dur:1.1},{t:97.619,type:"bossTick",hand:"slow",power:.53},{t:97.619,type:"pulse",power:.41},{t:99.779,type:"bossTick",hand:"fast",power:.53},{t:99.779,type:"pulse",power:.41},{t:99.809,type:"echo",lane:7,dir:1,power:.71},{t:101.939,type:"bossTick",hand:"slow",power:.53},{t:101.939,type:"pulse",power:.41},{t:104.099,type:"bossTick",hand:"fast",power:.53},{t:104.099,type:"pulse",power:.41},{t:104.129,type:"echo",lane:0,dir:-1,power:.71},{t:105.429,type:"bossCamera",pos:[0,7.16,16],look:[0,4.01,-6],fov:54,roll:-.03,dur:.55},{t:105.429,type:"bossGlitch",power:.75},{t:106.26,type:"bossTick",hand:"slow",power:.88},{t:106.26,type:"pulse",power:.77},{t:106.53,type:"pulse",power:.85},{t:107.323,type:"burst",lane:5,power:1.2},{t:107.509,type:"bossCamera",pos:[0,6.7,15.4],look:[0,3.6,-8],fov:54,roll:.02,dur:.6},{t:107.509,type:"bossGlitch",power:1.15},{t:108.42,type:"bossTick",hand:"fast",power:.97},{t:108.42,type:"pulse",power:.86},{t:110.58,type:"bossTick",hand:"slow",power:.97},{t:110.58,type:"pulse",power:.86},{t:111.829,type:"bossCamera",pos:[-7,6.9,14.2],look:[0,3.82,-9],fov:54,roll:-.04,dur:.9},{t:111.829,type:"motion",style:"orbit",amp:.16,speed:1.05,pitch:.08},{t:112.74,type:"bossTick",hand:"fast",power:.97},{t:112.74,type:"pulse",power:.86},{t:114.9,type:"bossTick",hand:"slow",power:.97},{t:114.9,type:"pulse",power:.86},{t:115.17,type:"pulse",power:.85},{t:116.149,type:"bossCamera",pos:[5,5.7,13.2],look:[0,3.26,-10],fov:54,roll:.045,dur:.9},{t:117.061,type:"bossTick",hand:"fast",power:.97},{t:117.061,type:"pulse",power:.86},{t:119.221,type:"bossTick",hand:"slow",power:.97},{t:119.221,type:"pulse",power:.86},{t:120.469,type:"bossCamera",pos:[0,4.78,12.6],look:[0,2.7,-12],fov:54,roll:-.02,dur:.9},{t:121.381,type:"bossTick",hand:"fast",power:.97},{t:121.381,type:"pulse",power:.86},{t:123.541,type:"bossTick",hand:"slow",power:.97},{t:123.541,type:"pulse",power:.86},{t:123.811,type:"pulse",power:.85},{t:123.829,type:"bossCamera",pos:[0,5.69,14],look:[0,3.1,-10],fov:54,roll:.03,dur:.7},{t:123.829,type:"bossGlitch",power:1.25},{t:125.702,type:"bossTick",hand:"fast",power:1.02},{t:125.702,type:"pulse",power:.91},{t:127.862,type:"bossTick",hand:"slow",power:1.02},{t:127.862,type:"pulse",power:.91},{t:128.149,type:"bossCamera",pos:[-8,6.41,13],look:[0,3.68,-10],fov:54,roll:-.045,dur:.95},{t:128.511,type:"burst",lane:1,power:1.2},{t:128.531,type:"wind",power:1.3},{t:128.541,type:"vibe",power:.89},{t:130.022,type:"bossTick",hand:"fast",power:1.02},{t:130.022,type:"pulse",power:.91},{t:130.31,type:"motion",style:"clock",amp:.2,speed:1.2,pitch:.1},{t:132.182,type:"bossTick",hand:"slow",power:1.02},{t:132.182,type:"pulse",power:.91},{t:132.226,type:"burst",lane:0,power:1.2},{t:132.246,type:"wind",power:1.3},{t:132.256,type:"vibe",power:.85},{t:132.452,type:"pulse",power:.85},{t:132.469,type:"bossCamera",pos:[8,6.03,12.4],look:[0,3.59,-10],fov:54,roll:.05,dur:.95},{t:134.342,type:"bossTick",hand:"fast",power:1.02},{t:134.342,type:"pulse",power:.91},{t:136.503,type:"bossTick",hand:"slow",power:1.02},{t:136.503,type:"pulse",power:.91},{t:136.789,type:"bossCamera",pos:[0,3.96,11.2],look:[0,2.53,-12],fov:54,roll:-.03,dur:.9},{t:137.149,type:"burst",lane:2,power:1.2},{t:138.663,type:"bossTick",hand:"fast",power:1.02},{t:138.663,type:"pulse",power:.91},{t:140.823,type:"bossTick",hand:"slow",power:1.02},{t:140.823,type:"pulse",power:.91},{t:141.093,type:"pulse",power:.85},{t:141.829,type:"bossCamera",pos:[0,9,19],look:[0,5.69,0],fov:52.39,roll:0,dur:1.2},{t:141.829,type:"bossGlitch",power:.7},{t:141.829,type:"bossPhase",mode:"outro"},{t:142.983,type:"bossTick",hand:"fast",power:.46},{t:142.983,type:"pulse",power:.33},{t:143.013,type:"echo",lane:7,dir:1,power:.63},{t:145.143,type:"bossTick",hand:"slow",power:.46},{t:145.143,type:"pulse",power:.33},{t:147.304,type:"bossTick",hand:"fast",power:.46},{t:147.304,type:"pulse",power:.33},{t:147.334,type:"echo",lane:0,dir:-1,power:.63}],ghosts:[{t:28.542,lane:0,type:"sweep"},{t:28.622,lane:1,type:"sweep"},{t:28.702,lane:6,type:"sweep"},{t:28.782,lane:7,type:"sweep"},{t:33.492,lane:0,type:"bounce"},{t:33.622,lane:1,type:"bounce"},{t:33.752,lane:6,type:"bounce"},{t:33.882,lane:7,type:"bounce"},{t:48.542,lane:0,type:"sweep"},{t:48.622,lane:7,type:"sweep"},{t:53.492,lane:0,type:"bounce"},{t:53.622,lane:7,type:"bounce"},{t:61.542,lane:0,type:"sweep"},{t:61.622,lane:7,type:"sweep"},{t:63.64,lane:0,type:"sweep"},{t:63.72,lane:7,type:"sweep"},{t:66.492,lane:0,type:"bounce"},{t:66.622,lane:7,type:"bounce"},{t:67.91,lane:0,type:"bounce"},{t:68.04,lane:7,type:"bounce"},{t:70.119,lane:0,type:"sweep"},{t:70.199,lane:7,type:"sweep"},{t:74.389,lane:0,type:"bounce"},{t:74.519,lane:7,type:"bounce"},{t:89.499,lane:0,type:"sweep"},{t:89.579,lane:1,type:"sweep"},{t:89.659,lane:6,type:"sweep"},{t:89.739,lane:7,type:"sweep"},{t:93.769,lane:0,type:"bounce"},{t:93.899,lane:1,type:"bounce"},{t:94.029,lane:6,type:"bounce"},{t:94.159,lane:7,type:"bounce"},{t:105.479,lane:0,type:"sweep"},{t:105.559,lane:7,type:"sweep"},{t:109.749,lane:0,type:"bounce"},{t:109.879,lane:7,type:"bounce"},{t:141.879,lane:0,type:"sweep"},{t:141.959,lane:1,type:"sweep"},{t:142.039,lane:6,type:"sweep"},{t:142.119,lane:7,type:"sweep"},{t:146.149,lane:0,type:"bounce"},{t:146.279,lane:1,type:"bounce"},{t:146.409,lane:6,type:"bounce"},{t:146.539,lane:7,type:"bounce"}]},Kd={song:{title:"INTENTION",shortTitle:"INTENTION",artist:"ORIGINAL TRACK",bpm:180,bpmLabel:"180 / 195 BPM",bpmMap:[{t:0,bpm:75},{t:17.5,bpm:150},{t:74.5,bpm:165},{t:81,bpm:180},{t:94.2,bpm:195},{t:104,bpm:150},{t:181,bpm:150},{t:204.5,bpm:150}],duration:213.505,chartEnd:212.8,introEnd:17.5,beatOffset:.075,difficulty:"BOSS",laneLabel:"1 · 2 · 4 · 6",boss:!0,theme:"intention",laneColors:["#ffffff"],fadeStart:209.6,fadeEnd:212.2},sections:[{name:"VOID",start:0,end:17.5,keys:4,bpm:75,beatOffset:0,color:"#ffffff",accent:"#ffffff",energy:.2,bloom:.36,intro:!0,phase:"void",notes:!1,firstNote:0,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1},{name:"REVELATION",start:17.5,end:28.5,keys:4,bpm:150,beatOffset:.075,color:"#dff4ff",accent:"#ffffff",energy:.36,bloom:.5,phase:"ocean",firstNote:19.675,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:.95},{name:"DESCENT",start:28.5,end:33.5,keys:1,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.55,bloom:.48,phase:"spin",firstNote:30.875,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1},{name:"ASSAIL",start:33.5,end:46,keys:4,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.62,bloom:.5,phase:"field",firstNote:35.875,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.02},{name:"LIBRA",start:46,end:61.5,keys:4,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.68,bloom:.55,phase:"pillars",firstNote:46.475,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1},{name:"HALO",start:61.5,end:72,keys:4,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.7,bloom:.58,phase:"halo",firstNote:61.675,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.05},{name:"DISTORTION",start:72,end:74.5,keys:4,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.3,bloom:.38,phase:"dark",notes:!1,firstNote:72,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:.9},{name:"GUILT",start:74.5,end:81,keys:1,bpm:165,beatOffset:.075,color:"#ff3355",accent:"#ff3355",energy:.58,bloom:.32,phase:"guilt",firstNote:76.8,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.05},{name:"GUILT II",start:81,end:88,keys:1,bpm:180,beatOffset:.075,color:"#ff3355",accent:"#ff3355",energy:.72,bloom:.34,phase:"guilt",firstNote:81.357,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.12},{name:"OFFBEAT",start:88,end:94.2,keys:2,bpm:185,beatOffset:.19,color:"#ffffff",accent:"#ffffff",energy:.7,bloom:.4,phase:"offbeat",gimmick:!0,firstNote:89.819,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.18},{name:"FASTBEAT",start:94.2,end:104,keys:1,bpm:195,beatOffset:.005,color:"#ffffff",accent:"#ffffff",energy:.82,bloom:.42,phase:"fastbeat",firstNote:94.2,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.28},{name:"TIDE",start:104,end:117,keys:4,bpm:150,beatOffset:.375,color:"#dff4ff",accent:"#ffffff",energy:.5,bloom:.52,phase:"ocean2",firstNote:106.375,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.02},{name:"MEMORY",start:117,end:139,keys:4,bpm:150,beatOffset:.375,color:"#dfe9ff",accent:"#ffffff",energy:.48,bloom:.5,phase:"memory",firstNote:117.175,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1},{name:"STATIC",start:139,end:157,keys:4,bpm:145,beatOffset:.375,color:"#e6ecff",accent:"#ffffff",energy:.55,bloom:.48,phase:"static",firstNote:139.616,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.04},{name:"DETERMINATION",start:157,end:181,keys:6,bpm:150,beatOffset:.375,color:"#fff6d8",accent:"#ffffff",energy:.78,bloom:.6,phase:"determined",firstNote:159.4,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.12},{name:"WHITEOUT",start:181,end:182,keys:4,bpm:150,beatOffset:.375,color:"#ffffff",accent:"#ffffff",energy:.2,bloom:.2,phase:"white",notes:!1,firstNote:181,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1},{name:"FAKE GUILT",start:182,end:204.5,keys:4,bpm:150,beatOffset:.385,color:"#ff3355",accent:"#ff3355",energy:.7,bloom:.36,phase:"fake",firstNote:184.4,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.15},{name:"DAWN",start:204.5,end:213.505,keys:4,bpm:150,beatOffset:.385,color:"#ffe9a8",accent:"#ffffff",energy:.22,bloom:.6,phase:"dawn",notes:!1,firstNote:204.5,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1}],notes:[{t:19.675,lane:2},{t:20.875,lane:5},{t:21.275,lane:4},{t:22.275,lane:3},{t:22.875,lane:4},{t:23.275,lane:5},{t:23.675,lane:4},{t:23.875,lane:3},{t:24.075,lane:2},{t:24.275,lane:5},{t:24.475,lane:2},{t:24.675,lane:4},{t:24.875,lane:3},{t:25.275,lane:2},{t:25.475,lane:5},{t:25.675,lane:3},{t:25.875,lane:4},{t:26.075,lane:2},{t:26.275,lane:3},{t:26.675,lane:5},{t:26.875,lane:2},{t:27.075,lane:4},{t:27.275,lane:3},{t:27.475,lane:5},{t:27.675,lane:2},{t:28.275,lane:4},{t:28.475,lane:2},{t:30.875,lane:3},{t:31.075,lane:3},{t:31.275,lane:3},{t:31.475,lane:3},{t:31.675,lane:3},{t:31.875,lane:3},{t:32.075,lane:3},{t:32.475,lane:3},{t:32.675,lane:3},{t:32.875,lane:3},{t:33.075,lane:3},{t:33.275,lane:3},{t:33.475,lane:3},{t:35.875,lane:5},{t:36.075,lane:4},{t:36.475,lane:2},{t:36.675,lane:3},{t:36.875,lane:4},{t:37.075,lane:5},{t:38.075,lane:5},{t:38.275,lane:5},{t:38.475,lane:4},{t:38.875,lane:2},{t:39.075,lane:3},{t:39.275,lane:4},{t:39.675,lane:4},{t:39.875,lane:3},{t:40.075,lane:2},{t:40.275,lane:3},{t:40.475,lane:2},{t:40.675,lane:4},{t:40.875,lane:3},{t:41.075,lane:5},{t:41.275,lane:4},{t:41.475,lane:5},{t:41.675,lane:2},{t:41.875,lane:4},{t:42.075,lane:5},{t:42.275,lane:3},{t:42.675,lane:3},{t:42.875,lane:2},{t:43.075,lane:4},{t:43.275,lane:3},{t:43.475,lane:5},{t:43.875,lane:5},{t:44.075,lane:2},{t:44.275,lane:4},{t:44.475,lane:5},{t:44.875,lane:2},{t:45.075,lane:3},{t:45.275,lane:2},{t:45.475,lane:4},{t:45.675,lane:3},{t:45.875,lane:5},{t:46.475,lane:3},{t:46.875,lane:2},{t:47.075,lane:5},{t:47.1,lane:2,type:"hold",dur:1.25},{t:47.275,lane:3},{t:47.875,lane:3},{t:48.075,lane:4},{t:48.275,lane:5},{t:48.875,lane:3},{t:49.275,lane:2},{t:49.475,lane:5},{t:49.675,lane:3},{t:50.075,lane:2},{t:50.275,lane:3},{t:50.475,lane:4},{t:50.675,lane:5},{t:50.875,lane:2},{t:51.275,lane:3},{t:51.675,lane:2},{t:52.275,lane:3},{t:52.4,lane:5,type:"hold",dur:1.6},{t:52.475,lane:4},{t:53.075,lane:3},{t:53.675,lane:4},{t:53.875,lane:3},{t:54.075,lane:2},{t:54.475,lane:2},{t:54.875,lane:4},{t:55.075,lane:5},{t:55.675,lane:5},{t:55.875,lane:2},{t:56.075,lane:4},{t:56.275,lane:3},{t:56.475,lane:2},{t:56.675,lane:5},{t:57.15,lane:3,type:"hold",dur:1.75},{t:57.275,lane:4},{t:57.475,lane:5},{t:57.675,lane:4},{t:58.475,lane:2},{t:59.275,lane:4},{t:59.475,lane:5},{t:59.675,lane:2},{t:59.875,lane:4},{t:60.075,lane:5},{t:60.275,lane:3},{t:60.475,lane:2},{t:60.875,lane:2},{t:61.675,lane:5},{t:61.875,lane:4},{t:62.075,lane:3},{t:62.1,lane:4,type:"hold",dur:1.3},{t:62.475,lane:3},{t:62.875,lane:5},{t:63.275,lane:3},{t:63.675,lane:4},{t:63.875,lane:5},{t:64.075,lane:5},{t:64.275,lane:4},{t:64.675,lane:2},{t:64.875,lane:3},{t:65.275,lane:5},{t:65.475,lane:4},{t:65.875,lane:2},{t:66.375,lane:4},{t:66.875,lane:3},{t:67.175,lane:3},{t:67.775,lane:5},{t:67.875,lane:2},{t:68.075,lane:3},{t:68.175,lane:4},{t:68.675,lane:2},{t:68.775,lane:4},{t:69.075,lane:2},{t:69.575,lane:3},{t:69.775,lane:5},{t:70.075,lane:3},{t:70.175,lane:5},{t:70.575,lane:4},{t:70.675,lane:2},{t:70.775,lane:3},{t:71.175,lane:4},{t:71.475,lane:2},{t:71.675,lane:3},{t:71.775,lane:4},{t:76.8,lane:3},{t:77.2,lane:3},{t:77.595,lane:3},{t:77.987,lane:3},{t:78.373,lane:3},{t:78.756,lane:3},{t:79.135,lane:3},{t:79.51,lane:3},{t:79.881,lane:3},{t:80.249,lane:3},{t:80.613,lane:3},{t:80.974,lane:3},{t:81.357,lane:3},{t:81.713,lane:3},{t:82.068,lane:3},{t:82.421,lane:3},{t:82.773,lane:3},{t:83.124,lane:3},{t:83.473,lane:3},{t:83.822,lane:3},{t:84.169,lane:3},{t:84.372,lane:3},{t:84.515,lane:3},{t:84.859,lane:3},{t:85.203,lane:3},{t:85.401,lane:3},{t:85.546,lane:3},{t:85.887,lane:3},{t:86.227,lane:3},{t:86.566,lane:3},{t:86.904,lane:3},{t:87.241,lane:3},{t:87.431,lane:3},{t:87.577,lane:3},{t:87.911,lane:3},{t:89.819,lane:4},{t:90.31,lane:2},{t:91.124,lane:4},{t:91.61,lane:2},{t:91.771,lane:4},{t:92.414,lane:4},{t:92.894,lane:2},{t:93.293,lane:2},{t:93.452,lane:4},{t:93.611,lane:2},{t:93.77,lane:4},{t:93.928,lane:2},{t:94.086,lane:4},{t:94.2,lane:3},{t:94.354,lane:3},{t:94.508,lane:3},{t:94.662,lane:3},{t:94.815,lane:3},{t:94.969,lane:3},{t:95.123,lane:3},{t:95.277,lane:3},{t:95.431,lane:3},{t:95.585,lane:3},{t:95.738,lane:3},{t:95.892,lane:3},{t:96.046,lane:3},{t:96.2,lane:3},{t:96.354,lane:3},{t:96.508,lane:3},{t:96.815,lane:3},{t:96.969,lane:3},{t:97.123,lane:3},{t:97.277,lane:3},{t:97.431,lane:3},{t:97.585,lane:3},{t:97.738,lane:3},{t:98.046,lane:3},{t:98.2,lane:3},{t:98.354,lane:3},{t:98.508,lane:3},{t:98.662,lane:3},{t:98.815,lane:3},{t:98.969,lane:3},{t:99.123,lane:3},{t:99.277,lane:3},{t:99.431,lane:3},{t:99.585,lane:3},{t:99.738,lane:3},{t:99.892,lane:3},{t:100.046,lane:3},{t:100.2,lane:3},{t:100.354,lane:3},{t:100.508,lane:3},{t:100.662,lane:3},{t:100.815,lane:3},{t:100.969,lane:3},{t:101.123,lane:3},{t:101.277,lane:3},{t:101.431,lane:3},{t:101.585,lane:3},{t:101.738,lane:3},{t:102.046,lane:3},{t:102.2,lane:3},{t:102.354,lane:3},{t:102.508,lane:3},{t:102.662,lane:3},{t:102.815,lane:3},{t:102.969,lane:3},{t:103.123,lane:3},{t:103.431,lane:3},{t:103.585,lane:3},{t:103.738,lane:3},{t:103.892,lane:3},{t:106.375,lane:5},{t:106.4,lane:3,type:"hold",dur:1.6},{t:106.975,lane:2},{t:107.375,lane:4},{t:108.175,lane:2},{t:108.375,lane:4},{t:108.775,lane:5},{t:108.975,lane:4},{t:109.175,lane:3},{t:109.4,lane:2,type:"hold",dur:1.8},{t:109.575,lane:3},{t:109.775,lane:4},{t:109.975,lane:5},{t:110.375,lane:3},{t:110.575,lane:4},{t:110.775,lane:5},{t:110.975,lane:4},{t:111.175,lane:3},{t:111.575,lane:2},{t:111.975,lane:3},{t:112.175,lane:2},{t:112.3,lane:5,type:"hold",dur:2},{t:112.575,lane:2},{t:112.775,lane:3},{t:112.975,lane:4},{t:113.375,lane:4},{t:113.575,lane:3},{t:113.975,lane:2},{t:114.375,lane:3},{t:114.775,lane:5},{t:115.1,lane:4,type:"hold",dur:1.5},{t:115.175,lane:3},{t:115.575,lane:5},{t:115.975,lane:3},{t:116.175,lane:5},{t:117.175,lane:2},{t:117.6,lane:3,type:"hold",dur:2.2},{t:119.575,lane:2},{t:120.375,lane:2},{t:120.975,lane:4},{t:121.3,lane:5,type:"hold",dur:1.8},{t:121.575,lane:4},{t:121.975,lane:2},{t:123.175,lane:3},{t:124.4,lane:2,type:"hold",dur:2.5},{t:125.375,lane:5},{t:126.375,lane:3},{t:127.775,lane:2},{t:127.975,lane:4},{t:128.375,lane:3},{t:128.6,lane:4,type:"hold",dur:1.6},{t:128.775,lane:3},{t:129.375,lane:3},{t:129.975,lane:5},{t:130.175,lane:2},{t:130.375,lane:4},{t:130.575,lane:5},{t:130.775,lane:3},{t:130.975,lane:2},{t:131.575,lane:4},{t:132.175,lane:4},{t:132.2,lane:5,type:"hold",dur:2.1},{t:132.575,lane:2},{t:133.375,lane:2},{t:133.575,lane:3},{t:133.775,lane:2},{t:134.175,lane:3},{t:134.775,lane:5},{t:134.975,lane:2},{t:135.375,lane:5},{t:136,lane:3,type:"hold",dur:1.9},{t:136.175,lane:2},{t:136.375,lane:4},{t:136.775,lane:5},{t:136.975,lane:4},{t:137.175,lane:5},{t:137.775,lane:5},{t:138.175,lane:2},{t:138.375,lane:3},{t:138.575,lane:2},{t:138.775,lane:4},{t:139.616,lane:3},{t:140.03,lane:3},{t:140.2,lane:2,type:"hold",dur:1.5},{t:140.237,lane:4},{t:140.444,lane:5},{t:140.651,lane:4},{t:141.272,lane:4},{t:141.892,lane:4},{t:142.513,lane:3},{t:142.72,lane:4},{t:142.927,lane:5},{t:143.134,lane:4},{t:143.341,lane:3},{t:143.547,lane:2},{t:143.754,lane:4},{t:143.961,lane:5},{t:144.168,lane:5},{t:144.375,lane:4},{t:144.582,lane:3},{t:144.789,lane:2},{t:144.996,lane:3},{t:145.8,lane:5,type:"hold",dur:1.8},{t:146.237,lane:4},{t:147.065,lane:3},{t:147.272,lane:2},{t:147.685,lane:4},{t:147.892,lane:5},{t:148.099,lane:2},{t:148.306,lane:4},{t:148.513,lane:3},{t:148.72,lane:5},{t:148.927,lane:2},{t:149.134,lane:5},{t:149.341,lane:3},{t:149.547,lane:4},{t:149.754,lane:2},{t:149.961,lane:3},{t:150.789,lane:4},{t:151.1,lane:3,type:"hold",dur:2},{t:151.203,lane:5},{t:151.409,lane:2},{t:151.616,lane:5},{t:152.03,lane:4},{t:152.237,lane:2},{t:152.651,lane:4},{t:152.858,lane:5},{t:153.065,lane:2},{t:153.272,lane:4},{t:153.478,lane:3},{t:154.099,lane:5},{t:154.513,lane:4},{t:155.134,lane:4},{t:155.547,lane:2},{t:159.4,lane:2,type:"hold",dur:2},{t:159.575,lane:1},{t:159.775,lane:3},{t:160.175,lane:4},{t:160.375,lane:1},{t:160.575,lane:4},{t:160.975,lane:3},{t:161.175,lane:1},{t:161.575,lane:3},{t:161.775,lane:4},{t:161.975,lane:1},{t:162.175,lane:3},{t:162.375,lane:2},{t:162.575,lane:4},{t:162.775,lane:1},{t:162.975,lane:4},{t:163.175,lane:2},{t:163.375,lane:3},{t:163.4,lane:6,type:"hold",dur:1.8},{t:163.575,lane:1},{t:163.775,lane:2},{t:163.975,lane:3},{t:164.175,lane:4},{t:164.375,lane:1},{t:164.775,lane:2},{t:164.975,lane:4},{t:165.175,lane:1},{t:165.375,lane:4},{t:165.575,lane:2},{t:165.775,lane:3},{t:165.975,lane:1},{t:166.175,lane:2},{t:166.375,lane:3},{t:166.575,lane:4},{t:166.775,lane:1},{t:167,lane:3,type:"hold",dur:2.4},{t:167.175,lane:2},{t:167.375,lane:4},{t:167.575,lane:1},{t:167.775,lane:4},{t:167.975,lane:2},{t:168.375,lane:1},{t:168.575,lane:2},{t:168.975,lane:4},{t:169.175,lane:1},{t:169.575,lane:2},{t:169.775,lane:4},{t:169.975,lane:1},{t:170.175,lane:4},{t:170.375,lane:2},{t:170.775,lane:1},{t:170.975,lane:2},{t:171.175,lane:3},{t:171.2,lane:4,type:"hold",dur:1.7},{t:171.575,lane:1},{t:171.775,lane:3},{t:171.975,lane:2},{t:172.375,lane:1},{t:172.775,lane:2},{t:172.975,lane:3},{t:173.175,lane:1},{t:173.375,lane:2},{t:173.575,lane:3},{t:173.775,lane:4},{t:173.975,lane:1},{t:174.175,lane:3},{t:174.375,lane:2},{t:174.575,lane:4},{t:174.775,lane:1},{t:174.975,lane:4},{t:175,lane:2,type:"hold",dur:2.2},{t:175.375,lane:3},{t:175.575,lane:1},{t:175.975,lane:3},{t:176.175,lane:4},{t:176.375,lane:1},{t:176.575,lane:3},{t:176.975,lane:4},{t:177.175,lane:1},{t:177.375,lane:4},{t:177.575,lane:2},{t:177.775,lane:3},{t:177.975,lane:1},{t:178.175,lane:2},{t:178.375,lane:3},{t:178.4,lane:6,type:"hold",dur:1.9},{t:178.575,lane:4},{t:178.775,lane:1},{t:178.975,lane:3},{t:179.175,lane:2},{t:179.375,lane:4},{t:179.575,lane:1},{t:179.775,lane:4},{t:179.975,lane:2},{t:180.175,lane:3},{t:180.375,lane:1},{t:180.575,lane:2},{t:180.775,lane:3},{t:180.975,lane:4},{t:184.4,lane:2,type:"hold",dur:1.4},{t:184.585,lane:4},{t:184.785,lane:3},{t:185.185,lane:3},{t:185.385,lane:4},{t:185.585,lane:5},{t:185.785,lane:4},{t:185.985,lane:3},{t:186.185,lane:2},{t:186.385,lane:4},{t:186.585,lane:5},{t:186.785,lane:5},{t:186.985,lane:4},{t:187.185,lane:3},{t:187.385,lane:2},{t:187.785,lane:4},{t:187.985,lane:5},{t:188.185,lane:4},{t:188.385,lane:3},{t:188.4,lane:5,type:"hold",dur:1.6},{t:188.585,lane:2},{t:188.785,lane:4},{t:189.385,lane:4},{t:189.785,lane:2},{t:189.985,lane:3},{t:190.185,lane:4},{t:190.785,lane:3},{t:190.985,lane:2},{t:191.185,lane:4},{t:191.385,lane:5},{t:191.585,lane:5},{t:191.785,lane:4},{t:191.985,lane:3},{t:192.385,lane:3},{t:192.585,lane:4},{t:192.985,lane:4},{t:193.185,lane:3},{t:193.385,lane:2},{t:193.785,lane:5},{t:193.985,lane:5},{t:194.185,lane:4},{t:194.585,lane:2},{t:194.785,lane:3},{t:194.985,lane:4},{t:195.185,lane:5},{t:195.385,lane:4},{t:195.6,lane:3,type:"hold",dur:1.5},{t:195.785,lane:2},{t:195.985,lane:4},{t:196.185,lane:5},{t:196.385,lane:5},{t:196.985,lane:2},{t:197.185,lane:3},{t:197.385,lane:4},{t:197.785,lane:4},{t:197.985,lane:3},{t:198.385,lane:4},{t:198.785,lane:5},{t:198.985,lane:4},{t:199.385,lane:2},{t:199.485,lane:4},{t:199.785,lane:4},{t:199.885,lane:5},{t:199.985,lane:2},{t:200.085,lane:4},{t:200.285,lane:3},{t:200.385,lane:2},{t:200.485,lane:3},{t:200.585,lane:2},{t:200.685,lane:4},{t:200.985,lane:4},{t:201.185,lane:2},{t:201.385,lane:5},{t:201.685,lane:3},{t:201.985,lane:3},{t:202.185,lane:4},{t:202.285,lane:5},{t:202.485,lane:4},{t:202.585,lane:5},{t:202.785,lane:2},{t:203.085,lane:4},{t:203.285,lane:5},{t:203.385,lane:4},{t:203.585,lane:2},{t:203.685,lane:4},{t:203.985,lane:2},{t:204.085,lane:3},{t:204.185,lane:2},{t:204.485,lane:5}],events:[{t:0,type:"bossCamera",pos:[0,10,34],look:[0,11,-70],fov:52,roll:0,dur:.01},{t:0,type:"intent",mode:"phase",phase:"void"},{t:0,type:"bossGlitch",power:.35},{t:1.1,type:"caption",kicker:"PROLOGUE",title:"INTENTION",sub:"A BOSS IN FOUR MEMORIES",hold:4.6},{t:4.6,type:"pulse",power:.5},{t:4.8,type:"bossCamera",pos:[0,9,31],look:[0,10,-66],fov:54,roll:-.012,dur:1.6},{t:8.4,type:"pulse",power:.45},{t:8.6,type:"bossCamera",pos:[-7,7,25],look:[5,9,-58],fov:58,roll:.02,dur:1.8},{t:10.6,type:"bossGlitch",power:.55},{t:12.8,type:"pulse",power:.5},{t:12.8,type:"bossCamera",pos:[5,8.5,28],look:[-4,9,-62],fov:55,roll:-.018,dur:1.7},{t:13.2,type:"caption",kicker:"REVELATION",title:"THE OCEAN REMEMBERS",sub:"ONE LINE. ONE BREATH.",hold:3.2},{t:17.5,type:"intent",mode:"phase",phase:"ocean"},{t:17.5,type:"intent",mode:"hud",hud:"clear"},{t:17.5,type:"bossCamera",pos:[0,7.2,20],look:[0,4,-12],fov:55,roll:0,dur:1.6},{t:17.5,type:"bossGlitch",power:.7},{t:17.5,type:"pulse",power:.7},{t:17.5,type:"bossPhase",mode:"play"},{t:19.9,type:"pulse",power:.31801185334043114},{t:20.6,type:"bossCamera",pos:[-5.5,6.2,17],look:[1.8,3.4,-6],fov:53,roll:.012,dur:1.3},{t:20.6,type:"pulse",power:.4},{t:23.1,type:"pulse",power:.4328700641075557},{t:24,type:"bossCamera",pos:[5.5,6.8,16],look:[-1.8,3.5,-7],fov:53,roll:-.015,dur:1.3},{t:24,type:"pulse",power:.4},{t:24.7,type:"pulse",power:.22824067791771085},{t:26.3,type:"pulse",power:.3364749751355703},{t:27,type:"bossCamera",pos:[0,7,18],look:[0,4,-9],fov:54,roll:0,dur:1},{t:28.5,type:"intent",mode:"phase",phase:"spin"},{t:28.5,type:"bossCamera",pos:[0,2.6,7.2],look:[0,1.5,0],fov:58,roll:0,dur:.4},{t:28.8,type:"caption",kicker:"DESCENT",title:"ONE LINE",sub:"HOLD THE CENTRE",hold:2.4},{t:29.2,type:"bossCamera",pos:[1.7134407061580625,1.7,5.4526683736126955],look:[0,1.2,0],fov:60,roll:.03894183423086506,dur:.55},{t:29.2,type:"bossGlitch",power:.32},{t:29.3,type:"pulse",power:.31136139347436254},{t:29.92,type:"bossCamera",pos:[4.36643411774139,2.8,1.9424510073951176],look:[0,1.2,0],fov:60,roll:.09923713903957704,dur:.55},{t:29.92,type:"bossGlitch",power:.32},{t:30.64,type:"bossCamera",pos:[2.6529934115833282,1.7,-2.1102173662175763],look:[0,1.2,0],fov:60,roll:.06029530480871201,dur:.55},{t:30.64,type:"bossGlitch",power:.32},{t:31.36,type:"bossCamera",pos:[-1.7134407061580614,2.8,-2.6526683736126953],look:[0,1.2,0],fov:60,roll:-.03894183423086503,dur:.55},{t:31.36,type:"bossGlitch",power:.32},{t:32.08,type:"bossCamera",pos:[-4.366434117741389,1.7,.8575489926048817],look:[0,1.2,0],fov:60,roll:-.09923713903957702,dur:.55},{t:32.08,type:"bossGlitch",power:.32},{t:32.8,type:"bossCamera",pos:[-2.6529934115833256,2.8,4.910217366217578],look:[0,1.2,0],fov:60,roll:-.06029530480871194,dur:.55},{t:32.8,type:"bossGlitch",power:.32},{t:33.2,type:"intent",mode:"phase",phase:"field"},{t:33.2,type:"bossCamera",pos:[0,7,17.2],look:[0,4.05,0],fov:50,roll:0,dur:.7},{t:33.2,type:"pulse",power:.55},{t:35.9,type:"pulse",power:.24252340486127652},{t:36,type:"bossCamera",pos:[-4.5,6,15.5],look:[1.2,3.5,-2],fov:52,roll:.02,dur:1.2},{t:40,type:"bossCamera",pos:[4.5,6.4,16.5],look:[-1.2,3.6,-2],fov:52,roll:-.02,dur:1.2},{t:40,type:"pulse",power:.45},{t:43.9,type:"pulse",power:.26406500280281764},{t:45.5,type:"pulse",power:.34969276278425243},{t:46,type:"intent",mode:"phase",phase:"pillars"},{t:46,type:"bossCamera",pos:[-9,5.2,16],look:[2.5,3.1,-7],fov:56,roll:.025,dur:1.5},{t:46,type:"bossGlitch",power:.55},{t:46,type:"pulse",power:.7},{t:46.4,type:"caption",kicker:"APOTHEOSIS",title:"LIBRA",sub:"FOUR PILLARS. ONE WEIGHT.",hold:3.4},{t:49.4,type:"bossCamera",pos:[-14,6,10],look:[4.5,3.4,-12],fov:58,roll:.035,dur:1.4},{t:50,type:"pulse",power:.22043379610186095},{t:52.8,type:"bossCamera",pos:[12,5.6,12],look:[-3.5,3.2,-10],fov:58,roll:-.03,dur:1.5},{t:52.8,type:"pulse",power:.5},{t:53.2,type:"pulse",power:.29354439017006373},{t:56.2,type:"bossCamera",pos:[15,6.6,5],look:[-4,3.8,-16],fov:58,roll:-.04,dur:1.4},{t:59.2,type:"bossCamera",pos:[3,7.2,10],look:[0,4,-12],fov:56,roll:.02,dur:1.2},{t:59.6,type:"pulse",power:.411503669796366},{t:61.5,type:"intent",mode:"phase",phase:"halo"},{t:61.5,type:"bossCamera",pos:[0,14.5,13],look:[0,0,-12],fov:62,roll:0,dur:1.2},{t:61.5,type:"bossGlitch",power:.8},{t:61.5,type:"pulse",power:.8},{t:61.8,type:"intent",mode:"hud",hud:"text",text:"INTENTIONS",sub:"LOOK UP",hold:3.4},{t:63.4,type:"bossCamera",pos:[0,15.5,7],look:[0,0,-16],fov:62,roll:.03,dur:1.1},{t:65.5,type:"pulse",power:.3069565658232932},{t:65.8,type:"bossCamera",pos:[0,13,8],look:[0,0,-8],fov:60,roll:-.03,dur:1.2},{t:68.4,type:"bossCamera",pos:[4,9,14],look:[-1,2.4,-6],fov:55,roll:.035,dur:1.3},{t:70.6,type:"bossCamera",pos:[0,8,17],look:[0,4,0],fov:53,roll:0,dur:1},{t:72,type:"intent",mode:"phase",phase:"dark"},{t:72,type:"intent",mode:"hud",hud:"distort",power:1},{t:72,type:"intent",mode:"hud",hud:"heartbeat",on:!0,bpm:150},{t:72,type:"bossCamera",pos:[0,3.2,8],look:[0,2.5,-1],fov:56,roll:.025,dur:.8},{t:72,type:"bossGlitch",power:1.2},{t:72,type:"pulse",power:.8},{t:73.3,type:"bossCamera",pos:[0,2.4,6.2],look:[0,2.2,-1],fov:60,roll:-.04,dur:.7},{t:74.5,type:"intent",mode:"phase",phase:"guilt"},{t:74.5,type:"intent",mode:"hud",hud:"distort",on:!1},{t:74.5,type:"intent",mode:"hud",hud:"black",on:!0},{t:74.5,type:"intent",mode:"hud",hud:"guilt",on:!0,value:100},{t:74.5,type:"intent",mode:"hud",hud:"heartbeat",on:!0,bpm:160},{t:74.5,type:"bossCamera",pos:[0,2.8,11.4],look:[0,2.4,0],fov:52,roll:0,dur:.7},{t:74.5,type:"bossGlitch",power:1.1},{t:74.5,type:"pulse",power:.8},{t:75,type:"caption",kicker:"GUILT",title:"READY",sub:"KEEP IT FULL",hold:2.6},{t:76.682,type:"pulse",power:.337305690336143},{t:78,type:"bossCamera",pos:[0,2.6,9.4],look:[0,2.2,0],fov:54,roll:.015,dur:1},{t:79.591,type:"pulse",power:.2746014728989394},{t:81,type:"bossCamera",pos:[0,3.2,12.2],look:[0,2.6,0],fov:52,roll:-.015,dur:1},{t:81,type:"bossGlitch",power:.75},{t:81.2,type:"caption",kicker:"GUILT II",title:"FASTER",sub:"TRUST THE PULSE",hold:2.2},{t:83,type:"pulse",power:.3491753366426565},{t:84.333,type:"pulse",power:.4891692686818715},{t:85.667,type:"pulse",power:.2627465131678036},{t:88,type:"intent",mode:"phase",phase:"offbeat"},{t:88,type:"intent",mode:"hud",hud:"glitch",on:!0},{t:88,type:"bossCamera",pos:[0,4,14.8],look:[0,3.1,0],fov:54,roll:0,dur:.8},{t:88,type:"bossGlitch",power:1},{t:88,type:"pulse",power:.8},{t:88.2,type:"caption",kicker:"FRACTURE",title:"OFFBEAT",sub:"TWO LINES. FOURTH BEAT.",hold:3},{t:89.946,type:"pulse",power:.3588750687840275},{t:91,type:"bossCamera",pos:[-3,3.6,12.5],look:[1,2.8,0],fov:52,roll:.02,dur:.9},{t:92.541,type:"pulse",power:.42116306682801224},{t:93.838,type:"pulse",power:.3988907457143796},{t:94.2,type:"intent",mode:"phase",phase:"fastbeat"},{t:94.2,type:"intent",mode:"hud",hud:"heartbeat",on:!0,bpm:195},{t:94.2,type:"caption",kicker:"FASTBEAT",title:"READY",sub:"FASTER STILL",hold:2.2},{t:94.2,type:"bossGlitch",power:.9},{t:94.2,type:"pulse",power:.7},{t:94.2,type:"bossCamera",pos:[3,4.2,14.2],look:[-1,3.1,0],fov:52,roll:-.02,dur:.9},{t:97,type:"bossCamera",pos:[0,3.5,11.5],look:[0,2.7,0],fov:50,roll:0,dur:.8},{t:98.508,type:"pulse",power:.2635838325593795},{t:100,type:"bossCamera",pos:[0,3.2,10.5],look:[0,2.5,0],fov:50,roll:.045,dur:.8},{t:100,type:"bossGlitch",power:1},{t:100.2,type:"caption",kicker:"FASTBEAT II",title:"ONE LINE",sub:"NO ROOM LEFT",hold:2.2},{t:100.969,type:"pulse",power:.23577556502641528},{t:102,type:"pulse",power:.7},{t:102.4,type:"bossCamera",pos:[-2.4,2.9,9.4],look:[.6,2.4,0],fov:52,roll:.055,dur:.6},{t:103.4,type:"bossCamera",pos:[2.4,3.1,9],look:[-.6,2.5,0],fov:53,roll:-.06,dur:.5},{t:103.4,type:"bossGlitch",power:1.2},{t:103.4,type:"pulse",power:.8},{t:103.431,type:"pulse",power:.33967631597006404},{t:104,type:"intent",mode:"phase",phase:"ocean2"},{t:104,type:"intent",mode:"hud",hud:"black",on:!1},{t:104,type:"intent",mode:"hud",hud:"guilt",on:!1},{t:104,type:"intent",mode:"hud",hud:"heartbeat",on:!1},{t:104,type:"intent",mode:"hud",hud:"glitch",on:!1},{t:104,type:"intent",mode:"hud",hud:"clear"},{t:104,type:"bossCamera",pos:[0,8,21],look:[0,4.2,-12],fov:55,roll:0,dur:1.3},{t:104,type:"pulse",power:.7},{t:108,type:"bossCamera",pos:[-6,7,19],look:[1.8,4,-10],fov:54,roll:.02,dur:1.4},{t:109.6,type:"pulse",power:.20495252255277593},{t:112,type:"bossCamera",pos:[6,8,18],look:[-1.8,4.2,-9],fov:54,roll:-.02,dur:1.4},{t:114.4,type:"pulse",power:.47218407345935703},{t:115.5,type:"bossCamera",pos:[0,8.6,21],look:[0,4.8,-14],fov:54,roll:0,dur:1.1},{t:117,type:"intent",mode:"phase",phase:"memory"},{t:117,type:"intent",mode:"hud",hud:"static",on:!0,power:.6},{t:117,type:"intent",mode:"hud",hud:"heartbeat",on:!0,bpm:90},{t:117,type:"bossCamera",pos:[0,8.2,21],look:[0,5.2,-16],fov:55,roll:0,dur:1.4},{t:117,type:"pulse",power:.6},{t:117,type:"bossGlitch",power:.6},{t:117.6,type:"caption",kicker:"MEMORY",title:"THE MEMORY RISES",sub:"DO NOT LET GO",hold:3.4},{t:117.8,type:"pulse",power:.43080995891141355},{t:122.6,type:"pulse",power:.29258769790940276},{t:123,type:"bossCamera",pos:[0,8,19],look:[0,6,-20],fov:55,roll:.015,dur:1.6},{t:129,type:"bossCamera",pos:[0,8.4,19.5],look:[0,5.8,-18],fov:55,roll:-.012,dur:1.6},{t:129,type:"pulse",power:.5},{t:129,type:"pulse",power:.46177528726911987},{t:130.6,type:"pulse",power:.2799541600677912},{t:135,type:"bossCamera",pos:[0,8.2,20],look:[0,5.2,-15],fov:55,roll:0,dur:1.4},{t:135.4,type:"pulse",power:.3501645236326567},{t:137,type:"pulse",power:.23478294414817358},{t:138.6,type:"pulse",power:.4835242815384845},{t:139,type:"intent",mode:"phase",phase:"static"},{t:139,type:"intent",mode:"hud",hud:"static",on:!0,power:1},{t:139,type:"intent",mode:"hud",hud:"distort",on:!0,power:.6},{t:139,type:"bossCamera",pos:[0,7.4,18.5],look:[0,4.4,-8],fov:55,roll:.015,dur:1.2},{t:139,type:"bossGlitch",power:.8},{t:139.4,type:"caption",kicker:"",title:"STATIC",sub:"SOMETHING REMAINS",hold:2.8},{t:141.483,type:"pulse",power:.20299066991374276},{t:145,type:"bossCamera",pos:[-4,7.2,17],look:[1.4,4.2,-6],fov:54,roll:.02,dur:1.5},{t:149.759,type:"pulse",power:.3827745426344336},{t:151,type:"bossCamera",pos:[4,7.8,19],look:[-1.4,4.4,-7],fov:54,roll:-.02,dur:1.5},{t:151,type:"pulse",power:.55},{t:151.414,type:"pulse",power:.31769049501453994},{t:153.069,type:"pulse",power:.44149055485631833},{t:154.724,type:"pulse",power:.4521634243126755},{t:157,type:"intent",mode:"phase",phase:"determined"},{t:157,type:"intent",mode:"hud",hud:"static",on:!1},{t:157,type:"intent",mode:"hud",hud:"distort",on:!1},{t:157,type:"intent",mode:"hud",hud:"heartbeat",on:!1},{t:157,type:"intent",mode:"hud",hud:"bright",on:!0},{t:157,type:"bossCamera",pos:[0,8.6,23],look:[0,4.8,-9],fov:55,roll:0,dur:1.4},{t:157,type:"pulse",power:.8},{t:157,type:"bossGlitch",power:.5},{t:157.4,type:"caption",kicker:"",title:"DETERMINATION",sub:"ALL OF IT, NOW",hold:3.2},{t:157.8,type:"pulse",power:.3364853035993292},{t:161,type:"pulse",power:.3397216281566216},{t:162.6,type:"pulse",power:.2205745529041451},{t:163,type:"bossCamera",pos:[-5,7.4,19],look:[1.6,4.2,-4],fov:53,roll:.018,dur:1.4},{t:165.8,type:"pulse",power:.4107105894545384},{t:167.4,type:"pulse",power:.3216622482264938},{t:169,type:"bossCamera",pos:[5,7.8,20],look:[-1.6,4.4,-5],fov:53,roll:-.018,dur:1.4},{t:169,type:"pulse",power:.55},{t:172.2,type:"pulse",power:.4976313073246274},{t:173.8,type:"pulse",power:.2565163280833076},{t:175,type:"bossCamera",pos:[0,8.4,22],look:[0,4.8,-8],fov:54,roll:0,dur:1.4},{t:175,type:"pulse",power:.6},{t:178.6,type:"pulse",power:.4476420528990275},{t:181,type:"intent",mode:"phase",phase:"white"},{t:181,type:"intent",mode:"hud",hud:"white",on:!0},{t:181,type:"bossCamera",pos:[0,8,20],look:[0,4,0],fov:54,roll:0,dur:.4},{t:181,type:"bossGlitch",power:1.2},{t:181.8,type:"pulse",power:.2693350468696735},{t:182,type:"intent",mode:"phase",phase:"fake"},{t:182,type:"intent",mode:"hud",hud:"white",on:!1},{t:182,type:"intent",mode:"hud",hud:"black",on:!0},{t:182,type:"intent",mode:"hud",hud:"fakeGuilt",on:!0,value:14},{t:182,type:"intent",mode:"hud",hud:"heartbeat",on:!0,bpm:150},{t:182,type:"intent",mode:"hud",hud:"glitch",on:!0},{t:182,type:"bossCamera",pos:[0,3.3,12],look:[0,2.7,0],fov:50,roll:.02,dur:.6},{t:182,type:"bossGlitch",power:1.2},{t:182,type:"pulse",power:.8},{t:182.4,type:"caption",kicker:"",title:"GUILT",sub:"IT WILL NOT REFILL",hold:3},{t:186,type:"pulse",power:.4040200282564911},{t:188,type:"bossCamera",pos:[0,3.1,10.8],look:[0,2.5,0],fov:49,roll:-.02,dur:1},{t:189.2,type:"pulse",power:.44157374770366004},{t:190.8,type:"pulse",power:.493953934237652},{t:192.4,type:"pulse",power:.4297825657384237},{t:194,type:"bossCamera",pos:[0,3.7,13.2],look:[0,3,0],fov:51,roll:.015,dur:1},{t:194,type:"bossGlitch",power:.8},{t:194,type:"pulse",power:.2188491503828118},{t:198.8,type:"pulse",power:.21982333704345366},{t:200,type:"bossCamera",pos:[0,3.4,11.5],look:[0,2.8,0],fov:50,roll:-.015,dur:.9},{t:200,type:"bossGlitch",power:.9},{t:202,type:"pulse",power:.47114880231238204},{t:203.6,type:"pulse",power:.40513001879853616},{t:204.5,type:"intent",mode:"phase",phase:"dawn"},{t:204.5,type:"intent",mode:"hud",hud:"fakeGuilt",on:!1},{t:204.5,type:"intent",mode:"hud",hud:"black",on:!1},{t:204.5,type:"intent",mode:"hud",hud:"glitch",on:!1},{t:204.5,type:"intent",mode:"hud",hud:"heartbeat",on:!1},{t:204.5,type:"intent",mode:"hud",hud:"bright",on:!1},{t:204.5,type:"intent",mode:"hud",hud:"yellow",on:!0},{t:204.5,type:"intent",mode:"hud",hud:"rainbow",on:!0},{t:204.5,type:"bossPhase",mode:"outro"},{t:204.5,type:"caption",kicker:"",title:"DAWN",sub:"THE WEIGHT IS LIGHT",hold:4},{t:204.5,type:"bossCamera",pos:[0,7.5,20],look:[0,4.5,-12],fov:55,roll:0,dur:1.4},{t:204.5,type:"bossGlitch",power:.8},{t:204.6,type:"pulse",power:.8},{t:208,type:"bossCamera",pos:[0,9.5,25],look:[0,8,-40],fov:56,roll:0,dur:2.2},{t:211.2,type:"bossCamera",pos:[0,12,30],look:[0,12,-60],fov:58,roll:0,dur:2},{t:211.5,type:"intent",mode:"hud",hud:"white",on:!1}],ghosts:[],swings:[]},ha=[{id:"cryout",title:"CRYOUT",shortTitle:"CRYOUT",artist:"ORIGINAL TRACK",bpm:100,duration:138.1,audio:"./audio/cryout.mp3",difficulty:"ADVANCED",laneLabel:"4 · 6 · 8",blurb:"Neon field • 360° camera • 8-lane climax",accent:"#5ee7ff",chart:Xd,fadeStart:131.4,fadeEnd:133.4},{id:"world",title:"WORLD YEARNING FOR AN END",shortTitle:"WORLD YEARNING",artist:"ORIGINAL TRACK",bpm:120,duration:143.47,audio:"./audio/world-yearning.mp3",difficulty:"HARD",laneLabel:"4 · 6",blurb:"City intro • diagonal lanes • thumb-hard patterns",accent:"#ffb45e",chart:Yd,fadeStart:140.8,fadeEnd:142.9},{id:"chronostasis",title:"CHRONOSTASIS",shortTitle:"CHRONOSTASIS",artist:"ORIGINAL TRACK",bpm:99.4,duration:142.1,audio:"./audio/chronostasis.mp3",difficulty:"EXPERT",laneLabel:"4 · 6",blurb:"Clockwork skyline • frozen time • swinging pendulum",accent:"#ffd166",chart:qd,fadeStart:138.4,fadeEnd:140},{id:"untouchable",title:"THE UNTOUCHABLE OF f RA IA'S LAND",shortTitle:"THE UNTOUCHABLE",artist:"f RA IA",bpm:111.1,bpmLabel:"111 / 96 BPM",duration:147.54,audio:"./audio/untouchable.mp3",difficulty:"BOSS",laneLabel:"4 · 6 · 8",blurb:"Gothic nave • cathedral clock • free-flying notes",accent:"#ff3b5c",chart:Zd,boss:!0,theme:"untouchable",fadeStart:139.8,fadeEnd:141.8,clearTag:"THE UNTOUCHABLE // FELLED"},{id:"intention",title:"INTENTION",shortTitle:"INTENTION",artist:"ORIGINAL TRACK",bpm:180,bpmLabel:"180 / 195 BPM",duration:213.5,audio:"./audio/intention.mp3",difficulty:"BOSS",laneLabel:"1 · 2 · 4 · 6",blurb:"Ocean void • golden libra • guilt engine",accent:"#ffd166",chart:Kd,boss:!0,theme:"intention",fadeStart:209.6,fadeEnd:212.2,clearTag:"INTENTION // FORGIVEN"}],$d="cryout",cl=Object.fromEntries(ha.map(i=>[i.id,i]));const fl="180",jd=0,Wl=1,Jd=2,af=1,Qd=2,$n=3,Mi=0,pn=1,jn=2,Qn=0,xn=1,xt=2,Xl=3,Yl=4,eu=5,ki=100,tu=101,nu=102,iu=103,au=104,ou=200,ru=201,su=202,lu=203,ds=204,us=205,cu=206,fu=207,du=208,uu=209,hu=210,pu=211,mu=212,gu=213,yu=214,hs=0,ps=1,ms=2,ya=3,gs=4,ys=5,_s=6,vs=7,of=0,_u=1,vu=2,_i=0,rf=1,sf=2,lf=3,dl=4,cf=5,ff=6,df=7,uf=300,_a=301,va=302,xs=303,bs=304,fr=306,Oi=1e3,yi=1001,Ms=1002,Un=1003,xu=1004,go=1005,Bn=1006,Pr=1007,Fi=1008,ni=1009,hf=1010,pf=1011,Ka=1012,ul=1013,Bi=1014,Jn=1015,ei=1016,hl=1017,pl=1018,$a=1020,mf=35902,gf=35899,yf=1021,_f=1022,In=1023,ja=1026,Ja=1027,vf=1028,ml=1029,xf=1030,gl=1031,yl=1033,Ko=33776,$o=33777,jo=33778,Jo=33779,ws=35840,Ss=35841,Ts=35842,Es=35843,As=36196,Cs=37492,Rs=37496,Ps=37808,Ls=37809,Is=37810,Ds=37811,Us=37812,ks=37813,Ns=37814,Fs=37815,Os=37816,Bs=37817,zs=37818,Gs=37819,Hs=37820,Vs=37821,Ws=36492,Xs=36494,Ys=36495,qs=36283,Zs=36284,Ks=36285,$s=36286,bu=3200,Mu=3201,wu=0,Su=1,gi="",un="srgb",xa="srgb-linear",nr="linear",It="srgb",Yi=7680,ql=519,Tu=512,Eu=513,Au=514,bf=515,Cu=516,Ru=517,Pu=518,Lu=519,js=35044,Zl="300 es",zn=2e3,ir=2001;class Aa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let o=0,r=a.length;o<r;o++)a[o].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lr=Math.PI/180,Js=180/Math.PI;function vi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function Iu(i,e){return(i%e+e)%e}function Ir(i,e,t){return(1-t)*i+t*e}function Fn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Dt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),o=this.x-e.x,r=this.y-e.y;return this.x=o*n-r*a+e.x,this.y=o*a+r*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class io{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,o,r,s){let l=n[a+0],c=n[a+1],d=n[a+2],f=n[a+3];const h=o[r+0],p=o[r+1],y=o[r+2],x=o[r+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f;return}if(s===1){e[t+0]=h,e[t+1]=p,e[t+2]=y,e[t+3]=x;return}if(f!==x||l!==h||c!==p||d!==y){let m=1-s;const u=l*h+c*p+d*y+f*x,T=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const P=Math.sqrt(E),C=Math.atan2(P,u*T);m=Math.sin(m*C)/P,s=Math.sin(s*C)/P}const S=s*T;if(l=l*m+h*S,c=c*m+p*S,d=d*m+y*S,f=f*m+x*S,m===1-s){const P=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=P,c*=P,d*=P,f*=P}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,a,o,r){const s=n[a],l=n[a+1],c=n[a+2],d=n[a+3],f=o[r],h=o[r+1],p=o[r+2],y=o[r+3];return e[t]=s*y+d*f+l*p-c*h,e[t+1]=l*y+d*h+c*f-s*p,e[t+2]=c*y+d*p+s*h-l*f,e[t+3]=d*y-s*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,o=e._z,r=e._order,s=Math.cos,l=Math.sin,c=s(n/2),d=s(a/2),f=s(o/2),h=l(n/2),p=l(a/2),y=l(o/2);switch(r){case"XYZ":this._x=h*d*f+c*p*y,this._y=c*p*f-h*d*y,this._z=c*d*y+h*p*f,this._w=c*d*f-h*p*y;break;case"YXZ":this._x=h*d*f+c*p*y,this._y=c*p*f-h*d*y,this._z=c*d*y-h*p*f,this._w=c*d*f+h*p*y;break;case"ZXY":this._x=h*d*f-c*p*y,this._y=c*p*f+h*d*y,this._z=c*d*y+h*p*f,this._w=c*d*f-h*p*y;break;case"ZYX":this._x=h*d*f-c*p*y,this._y=c*p*f+h*d*y,this._z=c*d*y-h*p*f,this._w=c*d*f+h*p*y;break;case"YZX":this._x=h*d*f+c*p*y,this._y=c*p*f+h*d*y,this._z=c*d*y-h*p*f,this._w=c*d*f-h*p*y;break;case"XZY":this._x=h*d*f-c*p*y,this._y=c*p*f-h*d*y,this._z=c*d*y+h*p*f,this._w=c*d*f+h*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],o=t[8],r=t[1],s=t[5],l=t[9],c=t[2],d=t[6],f=t[10],h=n+s+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(d-l)*p,this._y=(o-c)*p,this._z=(r-a)*p}else if(n>s&&n>f){const p=2*Math.sqrt(1+n-s-f);this._w=(d-l)/p,this._x=.25*p,this._y=(a+r)/p,this._z=(o+c)/p}else if(s>f){const p=2*Math.sqrt(1+s-n-f);this._w=(o-c)/p,this._x=(a+r)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-n-s);this._w=(r-a)/p,this._x=(o+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,o=e._z,r=e._w,s=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+r*s+a*c-o*l,this._y=a*d+r*l+o*s-n*c,this._z=o*d+r*c+n*l-a*s,this._w=r*d-n*s-a*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,o=this._z,r=this._w;let s=r*e._w+n*e._x+a*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=r,this._x=n,this._y=a,this._z=o,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*n+t*this._x,this._y=p*a+t*this._y,this._z=p*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,s),f=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=r*f+this._w*h,this._x=n*f+this._x*h,this._y=a*f+this._y*h,this._z=o*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Kl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Kl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*a,this.y=o[1]*t+o[4]*n+o[7]*a,this.z=o[2]*t+o[5]*n+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=e.elements,r=1/(o[3]*t+o[7]*n+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*a+o[12])*r,this.y=(o[1]*t+o[5]*n+o[9]*a+o[13])*r,this.z=(o[2]*t+o[6]*n+o[10]*a+o[14])*r,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,o=e.x,r=e.y,s=e.z,l=e.w,c=2*(r*a-s*n),d=2*(s*t-o*a),f=2*(o*n-r*t);return this.x=t+l*c+r*f-s*d,this.y=n+l*d+s*c-o*f,this.z=a+l*f+o*d-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*a,this.y=o[1]*t+o[5]*n+o[9]*a,this.z=o[2]*t+o[6]*n+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,o=e.z,r=t.x,s=t.y,l=t.z;return this.x=a*l-o*s,this.y=o*r-n*l,this.z=n*s-a*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Dr.copy(this).projectOnVector(e),this.sub(Dr)}reflect(e){return this.sub(Dr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Dr=new k,Kl=new io;class lt{constructor(e,t,n,a,o,r,s,l,c){lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,r,s,l,c)}set(e,t,n,a,o,r,s,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=s,d[3]=t,d[4]=o,d[5]=l,d[6]=n,d[7]=r,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,r=n[0],s=n[3],l=n[6],c=n[1],d=n[4],f=n[7],h=n[2],p=n[5],y=n[8],x=a[0],m=a[3],u=a[6],T=a[1],E=a[4],S=a[7],P=a[2],C=a[5],I=a[8];return o[0]=r*x+s*T+l*P,o[3]=r*m+s*E+l*C,o[6]=r*u+s*S+l*I,o[1]=c*x+d*T+f*P,o[4]=c*m+d*E+f*C,o[7]=c*u+d*S+f*I,o[2]=h*x+p*T+y*P,o[5]=h*m+p*E+y*C,o[8]=h*u+p*S+y*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],r=e[4],s=e[5],l=e[6],c=e[7],d=e[8];return t*r*d-t*s*c-n*o*d+n*s*l+a*o*c-a*r*l}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],r=e[4],s=e[5],l=e[6],c=e[7],d=e[8],f=d*r-s*c,h=s*l-d*o,p=c*o-r*l,y=t*f+n*h+a*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return e[0]=f*x,e[1]=(a*c-d*n)*x,e[2]=(s*n-a*r)*x,e[3]=h*x,e[4]=(d*t-a*l)*x,e[5]=(a*o-s*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(r*t-n*o)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,o,r,s){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*r+c*s)+r+e,-a*c,a*l,-a*(-c*r+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(Ur.makeScale(e,t)),this}rotate(e){return this.premultiply(Ur.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ur.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ur=new lt;function Mf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ar(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Du(){const i=ar("canvas");return i.style.display="block",i}const $l={};function Qa(i){i in $l||($l[i]=!0,console.warn(i))}function Uu(i,e,t){return new Promise(function(n,a){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const jl=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Jl=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ku(){const i={enabled:!0,workingColorSpace:xa,spaces:{},convert:function(a,o,r){return this.enabled===!1||o===r||!o||!r||(this.spaces[o].transfer===It&&(a.r=ti(a.r),a.g=ti(a.g),a.b=ti(a.b)),this.spaces[o].primaries!==this.spaces[r].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===It&&(a.r=pa(a.r),a.g=pa(a.g),a.b=pa(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===gi?nr:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,r){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return Qa("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return Qa("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[xa]:{primaries:e,whitePoint:n,transfer:nr,toXYZ:jl,fromXYZ:Jl,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:un},outputColorSpaceConfig:{drawingBufferColorSpace:un}},[un]:{primaries:e,whitePoint:n,transfer:It,toXYZ:jl,fromXYZ:Jl,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:un}}}),i}const Et=ku();function ti(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function pa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qi;class Nu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{qi===void 0&&(qi=ar("canvas")),qi.width=e.width,qi.height=e.height;const a=qi.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=qi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ar("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),o=a.data;for(let r=0;r<o.length;r++)o[r]=ti(o[r]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ti(t[n]/255)*255):t[n]=ti(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fu=0;class _l{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let r=0,s=a.length;r<s;r++)a[r].isDataTexture?o.push(kr(a[r].image)):o.push(kr(a[r]))}else o=kr(a);n.url=o}return t||(e.images[this.uuid]=n),n}}function kr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Nu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ou=0;const Nr=new k;class mn extends Aa{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=yi,a=yi,o=Bn,r=Fi,s=In,l=ni,c=mn.DEFAULT_ANISOTROPY,d=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=vi(),this.name="",this.source=new _l(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=o,this.minFilter=r,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nr).x}get height(){return this.source.getSize(Nr).y}get depth(){return this.source.getSize(Nr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Oi:e.x=e.x-Math.floor(e.x);break;case yi:e.x=e.x<0?0:1;break;case Ms:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Oi:e.y=e.y-Math.floor(e.y);break;case yi:e.y=e.y<0?0:1;break;case Ms:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=uf;mn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,n=0,a=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=this.w,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*a+r[12]*o,this.y=r[1]*t+r[5]*n+r[9]*a+r[13]*o,this.z=r[2]*t+r[6]*n+r[10]*a+r[14]*o,this.w=r[3]*t+r[7]*n+r[11]*a+r[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,o;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],p=l[5],y=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-x)<.01&&Math.abs(y-m)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+x)<.1&&Math.abs(y+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(p+1)/2,P=(u+1)/2,C=(d+h)/4,I=(f+x)/4,R=(y+m)/4;return E>S&&E>P?E<.01?(n=0,a=.707106781,o=.707106781):(n=Math.sqrt(E),a=C/n,o=I/n):S>P?S<.01?(n=.707106781,a=0,o=.707106781):(a=Math.sqrt(S),n=C/a,o=R/a):P<.01?(n=.707106781,a=.707106781,o=0):(o=Math.sqrt(P),n=I/o,a=R/o),this.set(n,a,o,t),this}let T=Math.sqrt((m-y)*(m-y)+(f-x)*(f-x)+(h-d)*(h-d));return Math.abs(T)<.001&&(T=1),this.x=(m-y)/T,this.y=(f-x)/T,this.z=(h-d)/T,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bu extends Aa{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const a={width:e,height:t,depth:n.depth},o=new mn(a);this.textures=[];const r=n.count;for(let s=0;s<r;s++)this.textures[s]=o.clone(),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new _l(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kn extends Bu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class wf extends mn{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Un,this.minFilter=Un,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zu extends mn{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=Un,this.minFilter=Un,this.wrapR=yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ao{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Rn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Rn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Rn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let r=0,s=o.count;r<s;r++)e.isMesh===!0?e.getVertexPosition(r,Rn):Rn.fromBufferAttribute(o,r),Rn.applyMatrix4(e.matrixWorld),this.expandByPoint(Rn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),yo.copy(n.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}const a=e.children;for(let o=0,r=a.length;o<r;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Rn),Rn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Na),_o.subVectors(this.max,Na),Zi.subVectors(e.a,Na),Ki.subVectors(e.b,Na),$i.subVectors(e.c,Na),fi.subVectors(Ki,Zi),di.subVectors($i,Ki),Ai.subVectors(Zi,$i);let t=[0,-fi.z,fi.y,0,-di.z,di.y,0,-Ai.z,Ai.y,fi.z,0,-fi.x,di.z,0,-di.x,Ai.z,0,-Ai.x,-fi.y,fi.x,0,-di.y,di.x,0,-Ai.y,Ai.x,0];return!Fr(t,Zi,Ki,$i,_o)||(t=[1,0,0,0,1,0,0,0,1],!Fr(t,Zi,Ki,$i,_o))?!1:(vo.crossVectors(fi,di),t=[vo.x,vo.y,vo.z],Fr(t,Zi,Ki,$i,_o))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Rn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Rn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xn=[new k,new k,new k,new k,new k,new k,new k,new k],Rn=new k,yo=new ao,Zi=new k,Ki=new k,$i=new k,fi=new k,di=new k,Ai=new k,Na=new k,_o=new k,vo=new k,Ci=new k;function Fr(i,e,t,n,a){for(let o=0,r=i.length-3;o<=r;o+=3){Ci.fromArray(i,o);const s=a.x*Math.abs(Ci.x)+a.y*Math.abs(Ci.y)+a.z*Math.abs(Ci.z),l=e.dot(Ci),c=t.dot(Ci),d=n.dot(Ci);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>s)return!1}return!0}const Gu=new ao,Fa=new k,Or=new k;class oo{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gu.setFromPoints(e).getCenter(n);let a=0;for(let o=0,r=e.length;o<r;o++)a=Math.max(a,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fa.subVectors(e,this.center);const t=Fa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Fa,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Or.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fa.copy(e.center).add(Or)),this.expandByPoint(Fa.copy(e.center).sub(Or))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yn=new k,Br=new k,xo=new k,ui=new k,zr=new k,bo=new k,Gr=new k;class vl{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){Br.copy(e).add(t).multiplyScalar(.5),xo.copy(t).sub(e).normalize(),ui.copy(this.origin).sub(Br);const o=e.distanceTo(t)*.5,r=-this.direction.dot(xo),s=ui.dot(this.direction),l=-ui.dot(xo),c=ui.lengthSq(),d=Math.abs(1-r*r);let f,h,p,y;if(d>0)if(f=r*l-s,h=r*s-l,y=o*d,f>=0)if(h>=-y)if(h<=y){const x=1/d;f*=x,h*=x,p=f*(f+r*h+2*s)+h*(r*f+h+2*l)+c}else h=o,f=Math.max(0,-(r*h+s)),p=-f*f+h*(h+2*l)+c;else h=-o,f=Math.max(0,-(r*h+s)),p=-f*f+h*(h+2*l)+c;else h<=-y?(f=Math.max(0,-(-r*o+s)),h=f>0?-o:Math.min(Math.max(-o,-l),o),p=-f*f+h*(h+2*l)+c):h<=y?(f=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+c):(f=Math.max(0,-(r*o+s)),h=f>0?o:Math.min(Math.max(-o,-l),o),p=-f*f+h*(h+2*l)+c);else h=r>0?-o:o,f=Math.max(0,-(r*h+s)),p=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),a&&a.copy(Br).addScaledVector(xo,h),p}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),a=Yn.dot(Yn)-n*n,o=e.radius*e.radius;if(a>o)return null;const r=Math.sqrt(o-a),s=n-r,l=n+r;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,o,r,s,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,a=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,a=(e.min.x-h.x)*c),d>=0?(o=(e.min.y-h.y)*d,r=(e.max.y-h.y)*d):(o=(e.max.y-h.y)*d,r=(e.min.y-h.y)*d),n>r||o>a||((o>n||isNaN(n))&&(n=o),(r<a||isNaN(a))&&(a=r),f>=0?(s=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(s=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||s>a)||((s>n||n!==n)&&(n=s),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,a,o){zr.subVectors(t,e),bo.subVectors(n,e),Gr.crossVectors(zr,bo);let r=this.direction.dot(Gr),s;if(r>0){if(a)return null;s=1}else if(r<0)s=-1,r=-r;else return null;ui.subVectors(this.origin,e);const l=s*this.direction.dot(bo.crossVectors(ui,bo));if(l<0)return null;const c=s*this.direction.dot(zr.cross(ui));if(c<0||l+c>r)return null;const d=-s*ui.dot(Gr);return d<0?null:this.at(d/r,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Gt{constructor(e,t,n,a,o,r,s,l,c,d,f,h,p,y,x,m){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,r,s,l,c,d,f,h,p,y,x,m)}set(e,t,n,a,o,r,s,l,c,d,f,h,p,y,x,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=a,u[1]=o,u[5]=r,u[9]=s,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=p,u[7]=y,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/ji.setFromMatrixColumn(e,0).length(),o=1/ji.setFromMatrixColumn(e,1).length(),r=1/ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*r,t[9]=n[9]*r,t[10]=n[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,o=e.z,r=Math.cos(n),s=Math.sin(n),l=Math.cos(a),c=Math.sin(a),d=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const h=r*d,p=r*f,y=s*d,x=s*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=p+y*c,t[5]=h-x*c,t[9]=-s*l,t[2]=x-h*c,t[6]=y+p*c,t[10]=r*l}else if(e.order==="YXZ"){const h=l*d,p=l*f,y=c*d,x=c*f;t[0]=h+x*s,t[4]=y*s-p,t[8]=r*c,t[1]=r*f,t[5]=r*d,t[9]=-s,t[2]=p*s-y,t[6]=x+h*s,t[10]=r*l}else if(e.order==="ZXY"){const h=l*d,p=l*f,y=c*d,x=c*f;t[0]=h-x*s,t[4]=-r*f,t[8]=y+p*s,t[1]=p+y*s,t[5]=r*d,t[9]=x-h*s,t[2]=-r*c,t[6]=s,t[10]=r*l}else if(e.order==="ZYX"){const h=r*d,p=r*f,y=s*d,x=s*f;t[0]=l*d,t[4]=y*c-p,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=p*c-y,t[2]=-c,t[6]=s*l,t[10]=r*l}else if(e.order==="YZX"){const h=r*l,p=r*c,y=s*l,x=s*c;t[0]=l*d,t[4]=x-h*f,t[8]=y*f+p,t[1]=f,t[5]=r*d,t[9]=-s*d,t[2]=-c*d,t[6]=p*f+y,t[10]=h-x*f}else if(e.order==="XZY"){const h=r*l,p=r*c,y=s*l,x=s*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=h*f+x,t[5]=r*d,t[9]=p*f-y,t[2]=y*f-p,t[6]=s*d,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hu,e,Vu)}lookAt(e,t,n){const a=this.elements;return Mn.subVectors(e,t),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),hi.crossVectors(n,Mn),hi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),hi.crossVectors(n,Mn)),hi.normalize(),Mo.crossVectors(Mn,hi),a[0]=hi.x,a[4]=Mo.x,a[8]=Mn.x,a[1]=hi.y,a[5]=Mo.y,a[9]=Mn.y,a[2]=hi.z,a[6]=Mo.z,a[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,r=n[0],s=n[4],l=n[8],c=n[12],d=n[1],f=n[5],h=n[9],p=n[13],y=n[2],x=n[6],m=n[10],u=n[14],T=n[3],E=n[7],S=n[11],P=n[15],C=a[0],I=a[4],R=a[8],w=a[12],b=a[1],D=a[5],H=a[9],Q=a[13],re=a[2],ie=a[6],oe=a[10],ce=a[14],ee=a[3],xe=a[7],Me=a[11],Fe=a[15];return o[0]=r*C+s*b+l*re+c*ee,o[4]=r*I+s*D+l*ie+c*xe,o[8]=r*R+s*H+l*oe+c*Me,o[12]=r*w+s*Q+l*ce+c*Fe,o[1]=d*C+f*b+h*re+p*ee,o[5]=d*I+f*D+h*ie+p*xe,o[9]=d*R+f*H+h*oe+p*Me,o[13]=d*w+f*Q+h*ce+p*Fe,o[2]=y*C+x*b+m*re+u*ee,o[6]=y*I+x*D+m*ie+u*xe,o[10]=y*R+x*H+m*oe+u*Me,o[14]=y*w+x*Q+m*ce+u*Fe,o[3]=T*C+E*b+S*re+P*ee,o[7]=T*I+E*D+S*ie+P*xe,o[11]=T*R+E*H+S*oe+P*Me,o[15]=T*w+E*Q+S*ce+P*Fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],o=e[12],r=e[1],s=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],p=e[14],y=e[3],x=e[7],m=e[11],u=e[15];return y*(+o*l*f-a*c*f-o*s*h+n*c*h+a*s*p-n*l*p)+x*(+t*l*p-t*c*h+o*r*h-a*r*p+a*c*d-o*l*d)+m*(+t*c*f-t*s*p-o*r*f+n*r*p+o*s*d-n*c*d)+u*(-a*s*d-t*l*f+t*s*h+a*r*f-n*r*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],r=e[4],s=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],p=e[11],y=e[12],x=e[13],m=e[14],u=e[15],T=f*m*c-x*h*c+x*l*p-s*m*p-f*l*u+s*h*u,E=y*h*c-d*m*c-y*l*p+r*m*p+d*l*u-r*h*u,S=d*x*c-y*f*c+y*s*p-r*x*p-d*s*u+r*f*u,P=y*f*l-d*x*l-y*s*h+r*x*h+d*s*m-r*f*m,C=t*T+n*E+a*S+o*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/C;return e[0]=T*I,e[1]=(x*h*o-f*m*o-x*a*p+n*m*p+f*a*u-n*h*u)*I,e[2]=(s*m*o-x*l*o+x*a*c-n*m*c-s*a*u+n*l*u)*I,e[3]=(f*l*o-s*h*o-f*a*c+n*h*c+s*a*p-n*l*p)*I,e[4]=E*I,e[5]=(d*m*o-y*h*o+y*a*p-t*m*p-d*a*u+t*h*u)*I,e[6]=(y*l*o-r*m*o-y*a*c+t*m*c+r*a*u-t*l*u)*I,e[7]=(r*h*o-d*l*o+d*a*c-t*h*c-r*a*p+t*l*p)*I,e[8]=S*I,e[9]=(y*f*o-d*x*o-y*n*p+t*x*p+d*n*u-t*f*u)*I,e[10]=(r*x*o-y*s*o+y*n*c-t*x*c-r*n*u+t*s*u)*I,e[11]=(d*s*o-r*f*o-d*n*c+t*f*c+r*n*p-t*s*p)*I,e[12]=P*I,e[13]=(d*x*a-y*f*a+y*n*h-t*x*h-d*n*m+t*f*m)*I,e[14]=(y*s*a-r*x*a-y*n*l+t*x*l+r*n*m-t*s*m)*I,e[15]=(r*f*a-d*s*a+d*n*l-t*f*l-r*n*h+t*s*h)*I,this}scale(e){const t=this.elements,n=e.x,a=e.y,o=e.z;return t[0]*=n,t[4]*=a,t[8]*=o,t[1]*=n,t[5]*=a,t[9]*=o,t[2]*=n,t[6]*=a,t[10]*=o,t[3]*=n,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),o=1-n,r=e.x,s=e.y,l=e.z,c=o*r,d=o*s;return this.set(c*r+n,c*s-a*l,c*l+a*s,0,c*s+a*l,d*s+n,d*l-a*r,0,c*l-a*s,d*l+a*r,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,o,r){return this.set(1,n,o,0,e,1,r,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,o=t._x,r=t._y,s=t._z,l=t._w,c=o+o,d=r+r,f=s+s,h=o*c,p=o*d,y=o*f,x=r*d,m=r*f,u=s*f,T=l*c,E=l*d,S=l*f,P=n.x,C=n.y,I=n.z;return a[0]=(1-(x+u))*P,a[1]=(p+S)*P,a[2]=(y-E)*P,a[3]=0,a[4]=(p-S)*C,a[5]=(1-(h+u))*C,a[6]=(m+T)*C,a[7]=0,a[8]=(y+E)*I,a[9]=(m-T)*I,a[10]=(1-(h+x))*I,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let o=ji.set(a[0],a[1],a[2]).length();const r=ji.set(a[4],a[5],a[6]).length(),s=ji.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],Pn.copy(this);const c=1/o,d=1/r,f=1/s;return Pn.elements[0]*=c,Pn.elements[1]*=c,Pn.elements[2]*=c,Pn.elements[4]*=d,Pn.elements[5]*=d,Pn.elements[6]*=d,Pn.elements[8]*=f,Pn.elements[9]*=f,Pn.elements[10]*=f,t.setFromRotationMatrix(Pn),n.x=o,n.y=r,n.z=s,this}makePerspective(e,t,n,a,o,r,s=zn,l=!1){const c=this.elements,d=2*o/(t-e),f=2*o/(n-a),h=(t+e)/(t-e),p=(n+a)/(n-a);let y,x;if(l)y=o/(r-o),x=r*o/(r-o);else if(s===zn)y=-(r+o)/(r-o),x=-2*r*o/(r-o);else if(s===ir)y=-r/(r-o),x=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return c[0]=d,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,a,o,r,s=zn,l=!1){const c=this.elements,d=2/(t-e),f=2/(n-a),h=-(t+e)/(t-e),p=-(n+a)/(n-a);let y,x;if(l)y=1/(r-o),x=r/(r-o);else if(s===zn)y=-2/(r-o),x=-(r+o)/(r-o);else if(s===ir)y=-1/(r-o),x=-o/(r-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return c[0]=d,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=y,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ji=new k,Pn=new Gt,Hu=new k(0,0,0),Vu=new k(1,1,1),hi=new k,Mo=new k,Mn=new k,Ql=new Gt,ec=new io;class ii{constructor(e=0,t=0,n=0,a=ii.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,o=a[0],r=a[4],s=a[8],l=a[1],c=a[5],d=a[9],f=a[2],h=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(bt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin(bt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-bt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-bt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-d,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ql.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ql,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ec.setFromEuler(this),this.setFromQuaternion(ec,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ii.DEFAULT_ORDER="XYZ";class Sf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wu=0;const tc=new k,Ji=new io,qn=new Gt,wo=new k,Oa=new k,Xu=new k,Yu=new io,nc=new k(1,0,0),ic=new k(0,1,0),ac=new k(0,0,1),oc={type:"added"},qu={type:"removed"},Qi={type:"childadded",child:null},Hr={type:"childremoved",child:null};class cn extends Aa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=cn.DEFAULT_UP.clone();const e=new k,t=new ii,n=new io,a=new k(1,1,1);function o(){n.setFromEuler(t,!1)}function r(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Gt},normalMatrix:{value:new lt}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(nc,e)}rotateY(e){return this.rotateOnAxis(ic,e)}rotateZ(e){return this.rotateOnAxis(ac,e)}translateOnAxis(e,t){return tc.copy(e).applyQuaternion(this.quaternion),this.position.add(tc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(nc,e)}translateY(e){return this.translateOnAxis(ic,e)}translateZ(e){return this.translateOnAxis(ac,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wo.copy(e):wo.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qn.lookAt(Oa,wo,this.up):qn.lookAt(wo,Oa,this.up),this.quaternion.setFromRotationMatrix(qn),a&&(qn.extractRotation(a.matrixWorld),Ji.setFromRotationMatrix(qn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oc),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qu),Hr.child=e,this.dispatchEvent(Hr),Hr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oc),Qi.child=e,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let o=0,r=a.length;o<r;o++)a[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,Xu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,Yu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,r=a.length;o<r;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(s=>({...s,boundingBox:s.boundingBox?s.boundingBox.toJSON():void 0,boundingSphere:s.boundingSphere?s.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(s=>({...s})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(o(e.materials,this.material[l]));a.material=s}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let s=0;s<this.children.length;s++)a.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];a.animations.push(o(e.animations,l))}}if(t){const s=r(e.geometries),l=r(e.materials),c=r(e.textures),d=r(e.images),f=r(e.shapes),h=r(e.skeletons),p=r(e.animations),y=r(e.nodes);s.length>0&&(n.geometries=s),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),y.length>0&&(n.nodes=y)}return n.object=a,n;function r(s){const l=[];for(const c in s){const d=s[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}cn.DEFAULT_UP=new k(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ln=new k,Zn=new k,Vr=new k,Kn=new k,ea=new k,ta=new k,rc=new k,Wr=new k,Xr=new k,Yr=new k,qr=new Vt,Zr=new Vt,Kr=new Vt;class En{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Ln.subVectors(e,t),a.cross(Ln);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,n,a,o){Ln.subVectors(a,t),Zn.subVectors(n,t),Vr.subVectors(e,t);const r=Ln.dot(Ln),s=Ln.dot(Zn),l=Ln.dot(Vr),c=Zn.dot(Zn),d=Zn.dot(Vr),f=r*c-s*s;if(f===0)return o.set(0,0,0),null;const h=1/f,p=(c*l-s*d)*h,y=(r*d-s*l)*h;return o.set(1-p-y,y,p)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,a,o,r,s,l){return this.getBarycoord(e,t,n,a,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Kn.x),l.addScaledVector(r,Kn.y),l.addScaledVector(s,Kn.z),l)}static getInterpolatedAttribute(e,t,n,a,o,r){return qr.setScalar(0),Zr.setScalar(0),Kr.setScalar(0),qr.fromBufferAttribute(e,t),Zr.fromBufferAttribute(e,n),Kr.fromBufferAttribute(e,a),r.setScalar(0),r.addScaledVector(qr,o.x),r.addScaledVector(Zr,o.y),r.addScaledVector(Kr,o.z),r}static isFrontFacing(e,t,n,a){return Ln.subVectors(n,t),Zn.subVectors(e,t),Ln.cross(Zn).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),Zn.subVectors(this.a,this.b),Ln.cross(Zn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return En.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,o){return En.getInterpolation(e,this.a,this.b,this.c,t,n,a,o)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,o=this.c;let r,s;ea.subVectors(a,n),ta.subVectors(o,n),Wr.subVectors(e,n);const l=ea.dot(Wr),c=ta.dot(Wr);if(l<=0&&c<=0)return t.copy(n);Xr.subVectors(e,a);const d=ea.dot(Xr),f=ta.dot(Xr);if(d>=0&&f<=d)return t.copy(a);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return r=l/(l-d),t.copy(n).addScaledVector(ea,r);Yr.subVectors(e,o);const p=ea.dot(Yr),y=ta.dot(Yr);if(y>=0&&p<=y)return t.copy(o);const x=p*c-l*y;if(x<=0&&c>=0&&y<=0)return s=c/(c-y),t.copy(n).addScaledVector(ta,s);const m=d*y-p*f;if(m<=0&&f-d>=0&&p-y>=0)return rc.subVectors(o,a),s=(f-d)/(f-d+(p-y)),t.copy(a).addScaledVector(rc,s);const u=1/(m+x+h);return r=x*u,s=h*u,t.copy(n).addScaledVector(ea,r).addScaledVector(ta,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},So={h:0,s:0,l:0};function $r(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=un){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=Et.workingColorSpace){return this.r=e,this.g=t,this.b=n,Et.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=Et.workingColorSpace){if(e=Iu(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,r=2*n-o;this.r=$r(r,o,e+1/3),this.g=$r(r,o,e),this.b=$r(r,o,e-1/3)}return Et.colorSpaceToWorking(this,a),this}setStyle(e,t=un){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const r=a[1],s=a[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=un){const n=Tf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ti(e.r),this.g=ti(e.g),this.b=ti(e.b),this}copyLinearToSRGB(e){return this.r=pa(e.r),this.g=pa(e.g),this.b=pa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=un){return Et.workingToColorSpace(ln.copy(this),e),Math.round(bt(ln.r*255,0,255))*65536+Math.round(bt(ln.g*255,0,255))*256+Math.round(bt(ln.b*255,0,255))}getHexString(e=un){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(ln.copy(this),t);const n=ln.r,a=ln.g,o=ln.b,r=Math.max(n,a,o),s=Math.min(n,a,o);let l,c;const d=(s+r)/2;if(s===r)l=0,c=0;else{const f=r-s;switch(c=d<=.5?f/(r+s):f/(2-r-s),r){case n:l=(a-o)/f+(a<o?6:0);break;case a:l=(o-n)/f+2;break;case o:l=(n-a)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(ln.copy(this),t),e.r=ln.r,e.g=ln.g,e.b=ln.b,e}getStyle(e=un){Et.workingToColorSpace(ln.copy(this),e);const t=ln.r,n=ln.g,a=ln.b;return e!==un?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(pi),this.setHSL(pi.h+e,pi.s+t,pi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pi),e.getHSL(So);const n=Ir(pi.h,So.h,t),a=Ir(pi.s,So.s,t),o=Ir(pi.l,So.l,t);return this.setHSL(n,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*a,this.g=o[1]*t+o[4]*n+o[7]*a,this.b=o[2]*t+o[5]*n+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new He;He.NAMES=Tf;let Zu=0;class Hi extends Aa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=xn,this.side=Mi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ds,this.blendDst=us,this.blendEquation=ki,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xn&&(n.blending=this.blending),this.side!==Mi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ds&&(n.blendSrc=this.blendSrc),this.blendDst!==us&&(n.blendDst=this.blendDst),this.blendEquation!==ki&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ya&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(o){const r=[];for(const s in o){const l=o[s];delete l.metadata,r.push(l)}return r}if(t){const o=a(e.textures),r=a(e.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let o=0;o!==a;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qt extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Xt=new k,To=new Je;let Ku=0;class tn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ku++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=js,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)To.fromBufferAttribute(this,t),To.applyMatrix3(e),this.setXY(t,To.x,To.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix3(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyMatrix4(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.applyNormalMatrix(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Xt.fromBufferAttribute(this,t),Xt.transformDirection(e),this.setXYZ(t,Xt.x,Xt.y,Xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),a=Dt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,o){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),a=Dt(a,this.array),o=Dt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==js&&(e.usage=this.usage),e}}class Ef extends tn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Af extends tn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Bt extends tn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let $u=0;const Sn=new Gt,jr=new cn,na=new k,wn=new ao,Ba=new ao,Qt=new k;class Wt extends Aa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mf(e)?Af:Ef)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new lt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Sn.makeRotationFromQuaternion(e),this.applyMatrix4(Sn),this}rotateX(e){return Sn.makeRotationX(e),this.applyMatrix4(Sn),this}rotateY(e){return Sn.makeRotationY(e),this.applyMatrix4(Sn),this}rotateZ(e){return Sn.makeRotationZ(e),this.applyMatrix4(Sn),this}translate(e,t,n){return Sn.makeTranslation(e,t,n),this.applyMatrix4(Sn),this}scale(e,t,n){return Sn.makeScale(e,t,n),this.applyMatrix4(Sn),this}lookAt(e){return jr.lookAt(e),jr.updateMatrix(),this.applyMatrix4(jr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(na).negate(),this.translate(na.x,na.y,na.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,o=e.length;a<o;a++){const r=e[a];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Bt(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ao);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];wn.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let o=0,r=t.length;o<r;o++){const s=t[o];Ba.setFromBufferAttribute(s),this.morphTargetsRelative?(Qt.addVectors(wn.min,Ba.min),wn.expandByPoint(Qt),Qt.addVectors(wn.max,Ba.max),wn.expandByPoint(Qt)):(wn.expandByPoint(Ba.min),wn.expandByPoint(Ba.max))}wn.getCenter(n);let a=0;for(let o=0,r=e.count;o<r;o++)Qt.fromBufferAttribute(e,o),a=Math.max(a,n.distanceToSquared(Qt));if(t)for(let o=0,r=t.length;o<r;o++){const s=t[o],l=this.morphTargetsRelative;for(let c=0,d=s.count;c<d;c++)Qt.fromBufferAttribute(s,c),l&&(na.fromBufferAttribute(e,c),Qt.add(na)),a=Math.max(a,n.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),s=[],l=[];for(let R=0;R<n.count;R++)s[R]=new k,l[R]=new k;const c=new k,d=new k,f=new k,h=new Je,p=new Je,y=new Je,x=new k,m=new k;function u(R,w,b){c.fromBufferAttribute(n,R),d.fromBufferAttribute(n,w),f.fromBufferAttribute(n,b),h.fromBufferAttribute(o,R),p.fromBufferAttribute(o,w),y.fromBufferAttribute(o,b),d.sub(c),f.sub(c),p.sub(h),y.sub(h);const D=1/(p.x*y.y-y.x*p.y);isFinite(D)&&(x.copy(d).multiplyScalar(y.y).addScaledVector(f,-p.y).multiplyScalar(D),m.copy(f).multiplyScalar(p.x).addScaledVector(d,-y.x).multiplyScalar(D),s[R].add(x),s[w].add(x),s[b].add(x),l[R].add(m),l[w].add(m),l[b].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let R=0,w=T.length;R<w;++R){const b=T[R],D=b.start,H=b.count;for(let Q=D,re=D+H;Q<re;Q+=3)u(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const E=new k,S=new k,P=new k,C=new k;function I(R){P.fromBufferAttribute(a,R),C.copy(P);const w=s[R];E.copy(w),E.sub(P.multiplyScalar(P.dot(w))).normalize(),S.crossVectors(C,w);const D=S.dot(l[R])<0?-1:1;r.setXYZW(R,E.x,E.y,E.z,D)}for(let R=0,w=T.length;R<w;++R){const b=T[R],D=b.start,H=b.count;for(let Q=D,re=D+H;Q<re;Q+=3)I(e.getX(Q+0)),I(e.getX(Q+1)),I(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const a=new k,o=new k,r=new k,s=new k,l=new k,c=new k,d=new k,f=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const y=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);a.fromBufferAttribute(t,y),o.fromBufferAttribute(t,x),r.fromBufferAttribute(t,m),d.subVectors(r,o),f.subVectors(a,o),d.cross(f),s.fromBufferAttribute(n,y),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),s.add(d),l.add(d),c.add(d),n.setXYZ(y,s.x,s.y,s.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)a.fromBufferAttribute(t,h+0),o.fromBufferAttribute(t,h+1),r.fromBufferAttribute(t,h+2),d.subVectors(r,o),f.subVectors(a,o),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(s,l){const c=s.array,d=s.itemSize,f=s.normalized,h=new c.constructor(l.length*d);let p=0,y=0;for(let x=0,m=l.length;x<m;x++){s.isInterleavedBufferAttribute?p=l[x]*s.data.stride+s.offset:p=l[x]*d;for(let u=0;u<d;u++)h[y++]=c[p++]}return new tn(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,a=this.attributes;for(const s in a){const l=a[s],c=e(l,n);t.setAttribute(s,c)}const o=this.morphAttributes;for(const s in o){const l=[],c=o[s];for(let d=0,f=c.length;d<f;d++){const h=c[d],p=e(h,n);l.push(p)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let s=0,l=r.length;s<l;s++){const c=r[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(a[l]=d,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere=s.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(t))}const o=e.morphAttributes;for(const c in o){const d=[],f=o[c];for(let h=0,p=f.length;h<p;h++)d.push(f[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,d=r.length;c<d;c++){const f=r[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sc=new Gt,Ri=new vl,Eo=new oo,lc=new k,Ao=new k,Co=new k,Ro=new k,Jr=new k,Po=new k,cc=new k,Lo=new k;class Pt extends cn{constructor(e=new Wt,t=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=a.length;o<r;o++){const s=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const s=this.morphTargetInfluences;if(o&&s){Po.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const d=s[l],f=o[l];d!==0&&(Jr.fromBufferAttribute(f,e),r?Po.addScaledVector(Jr,d):Po.addScaledVector(Jr.sub(t),d))}t.add(Po)}return t}raycast(e,t){const n=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Eo.copy(n.boundingSphere),Eo.applyMatrix4(o),Ri.copy(e.ray).recast(e.near),!(Eo.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Eo,lc)===null||Ri.origin.distanceToSquared(lc)>(e.far-e.near)**2))&&(sc.copy(o).invert(),Ri.copy(e.ray).applyMatrix4(sc),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ri)))}_computeIntersections(e,t,n){let a;const o=this.geometry,r=this.material,s=o.index,l=o.attributes.position,c=o.attributes.uv,d=o.attributes.uv1,f=o.attributes.normal,h=o.groups,p=o.drawRange;if(s!==null)if(Array.isArray(r))for(let y=0,x=h.length;y<x;y++){const m=h[y],u=r[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,P=E;S<P;S+=3){const C=s.getX(S),I=s.getX(S+1),R=s.getX(S+2);a=Io(this,u,e,n,c,d,f,C,I,R),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const y=Math.max(0,p.start),x=Math.min(s.count,p.start+p.count);for(let m=y,u=x;m<u;m+=3){const T=s.getX(m),E=s.getX(m+1),S=s.getX(m+2);a=Io(this,r,e,n,c,d,f,T,E,S),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let y=0,x=h.length;y<x;y++){const m=h[y],u=r[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,P=E;S<P;S+=3){const C=S,I=S+1,R=S+2;a=Io(this,u,e,n,c,d,f,C,I,R),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const y=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=y,u=x;m<u;m+=3){const T=m,E=m+1,S=m+2;a=Io(this,r,e,n,c,d,f,T,E,S),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function ju(i,e,t,n,a,o,r,s){let l;if(e.side===pn?l=n.intersectTriangle(r,o,a,!0,s):l=n.intersectTriangle(a,o,r,e.side===Mi,s),l===null)return null;Lo.copy(s),Lo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Lo);return c<t.near||c>t.far?null:{distance:c,point:Lo.clone(),object:i}}function Io(i,e,t,n,a,o,r,s,l,c){i.getVertexPosition(s,Ao),i.getVertexPosition(l,Co),i.getVertexPosition(c,Ro);const d=ju(i,e,t,n,Ao,Co,Ro,cc);if(d){const f=new k;En.getBarycoord(cc,Ao,Co,Ro,f),a&&(d.uv=En.getInterpolatedAttribute(a,s,l,c,f,new Je)),o&&(d.uv1=En.getInterpolatedAttribute(o,s,l,c,f,new Je)),r&&(d.normal=En.getInterpolatedAttribute(r,s,l,c,f,new k),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:s,b:l,c,normal:new k,materialIndex:0};En.getNormal(Ao,Co,Ro,h.normal),d.face=h,d.barycoord=f}return d}class Vi extends Wt{constructor(e=1,t=1,n=1,a=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:o,depthSegments:r};const s=this;a=Math.floor(a),o=Math.floor(o),r=Math.floor(r);const l=[],c=[],d=[],f=[];let h=0,p=0;y("z","y","x",-1,-1,n,t,e,r,o,0),y("z","y","x",1,-1,n,t,-e,r,o,1),y("x","z","y",1,1,e,n,t,a,r,2),y("x","z","y",1,-1,e,n,-t,a,r,3),y("x","y","z",1,-1,e,t,n,a,o,4),y("x","y","z",-1,-1,e,t,-n,a,o,5),this.setIndex(l),this.setAttribute("position",new Bt(c,3)),this.setAttribute("normal",new Bt(d,3)),this.setAttribute("uv",new Bt(f,2));function y(x,m,u,T,E,S,P,C,I,R,w){const b=S/I,D=P/R,H=S/2,Q=P/2,re=C/2,ie=I+1,oe=R+1;let ce=0,ee=0;const xe=new k;for(let Me=0;Me<oe;Me++){const Fe=Me*D-Q;for(let ot=0;ot<ie;ot++){const _t=ot*b-H;xe[x]=_t*T,xe[m]=Fe*E,xe[u]=re,c.push(xe.x,xe.y,xe.z),xe[x]=0,xe[m]=0,xe[u]=C>0?1:-1,d.push(xe.x,xe.y,xe.z),f.push(ot/I),f.push(1-Me/R),ce+=1}}for(let Me=0;Me<R;Me++)for(let Fe=0;Fe<I;Fe++){const ot=h+Fe+ie*Me,_t=h+Fe+ie*(Me+1),Qe=h+(Fe+1)+ie*(Me+1),dt=h+(Fe+1)+ie*Me;l.push(ot,_t,dt),l.push(_t,Qe,dt),ee+=6}s.addGroup(p,ee,w),p+=ee,h+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ba(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function dn(i){const e={};for(let t=0;t<i.length;t++){const n=ba(i[t]);for(const a in n)e[a]=n[a]}return e}function Ju(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Cf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const eo={clone:ba,merge:dn};var Qu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hn extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qu,this.fragmentShader=eh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ba(e.uniforms),this.uniformsGroups=Ju(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const r=this.uniforms[a].value;r&&r.isTexture?t.uniforms[a]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[a]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[a]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[a]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[a]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[a]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[a]={type:"m4",value:r.toArray()}:t.uniforms[a]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Rf extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mi=new k,fc=new Je,dc=new Je;class Tn extends Rf{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,fc,dc),t.subVectors(dc,fc)}setViewOffset(e,t,n,a,o,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,o=-.5*a;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;o+=r.offsetX*a/l,t-=r.offsetY*n/c,a*=r.width/l,n*=r.height/c}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ia=-90,aa=1;class th extends cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Tn(ia,aa,e,t);a.layers=this.layers,this.add(a);const o=new Tn(ia,aa,e,t);o.layers=this.layers,this.add(o);const r=new Tn(ia,aa,e,t);r.layers=this.layers,this.add(r);const s=new Tn(ia,aa,e,t);s.layers=this.layers,this.add(s);const l=new Tn(ia,aa,e,t);l.layers=this.layers,this.add(l);const c=new Tn(ia,aa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,o,r,s,l]=t;for(const c of t)this.remove(c);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ir)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,r,s,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,o),e.setRenderTarget(n,1,a),e.render(t,r),e.setRenderTarget(n,2,a),e.render(t,s),e.setRenderTarget(n,3,a),e.render(t,l),e.setRenderTarget(n,4,a),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,a),e.render(t,d),e.setRenderTarget(f,h,p),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Pf extends mn{constructor(e=[],t=_a,n,a,o,r,s,l,c,d){super(e,t,n,a,o,r,s,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nh extends kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new Pf(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Vi(5,5,5),o=new hn({name:"CubemapFromEquirect",uniforms:ba(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:pn,blending:Qn});o.uniforms.tEquirect.value=t;const r=new Pt(a,o),s=t.minFilter;return t.minFilter===Fi&&(t.minFilter=Bn),new th(1,10,this).update(e,r),t.minFilter=s,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const o=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,n,a);e.setRenderTarget(o)}}class Yt extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ih={type:"move"};class Qr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,o=null,r=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),p=.02,y=.005;c.inputState.pinching&&h>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&o!==null&&(a=o),a!==null&&(s.matrix.fromArray(a.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,a.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(a.linearVelocity)):s.hasLinearVelocity=!1,a.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(a.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(ih)))}return s!==null&&(s.visible=a!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class xl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new xl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class ah extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class oh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=js,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let a=0,o=this.stride;a<o;a++)this.array[e+a]=t.array[n+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const fn=new k;class or{constructor(e,t,n,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Fn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Fn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Fn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Fn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Fn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),a=Dt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this}setXYZW(e,t,n,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),a=Dt(a,this.array),o=Dt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return new tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new or(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class mt extends Hi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let oa;const za=new k,ra=new k,sa=new k,la=new Je,Ga=new Je,Lf=new Gt,Do=new k,Ha=new k,Uo=new k,uc=new Je,es=new Je,hc=new Je;class yt extends cn{constructor(e=new mt){if(super(),this.isSprite=!0,this.type="Sprite",oa===void 0){oa=new Wt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new oh(t,5);oa.setIndex([0,1,2,0,2,3]),oa.setAttribute("position",new or(n,3,0,!1)),oa.setAttribute("uv",new or(n,2,3,!1))}this.geometry=oa,this.material=e,this.center=new Je(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ra.setFromMatrixScale(this.matrixWorld),Lf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),sa.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ra.multiplyScalar(-sa.z);const n=this.material.rotation;let a,o;n!==0&&(o=Math.cos(n),a=Math.sin(n));const r=this.center;ko(Do.set(-.5,-.5,0),sa,r,ra,a,o),ko(Ha.set(.5,-.5,0),sa,r,ra,a,o),ko(Uo.set(.5,.5,0),sa,r,ra,a,o),uc.set(0,0),es.set(1,0),hc.set(1,1);let s=e.ray.intersectTriangle(Do,Ha,Uo,!1,za);if(s===null&&(ko(Ha.set(-.5,.5,0),sa,r,ra,a,o),es.set(0,1),s=e.ray.intersectTriangle(Do,Uo,Ha,!1,za),s===null))return;const l=e.ray.origin.distanceTo(za);l<e.near||l>e.far||t.push({distance:l,point:za.clone(),uv:En.getInterpolation(za,Do,Ha,Uo,uc,es,hc,new Je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ko(i,e,t,n,a,o){la.subVectors(i,t).addScalar(.5).multiply(n),a!==void 0?(Ga.x=o*la.x-a*la.y,Ga.y=a*la.x+o*la.y):Ga.copy(la),i.copy(e),i.x+=Ga.x,i.y+=Ga.y,i.applyMatrix4(Lf)}const ts=new k,rh=new k,sh=new lt;class Di{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=ts.subVectors(n,t).cross(rh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ts),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||sh.getNormalMatrix(e),a=this.coplanarPoint(ts).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Pi=new oo,lh=new Je(.5,.5),No=new k;class If{constructor(e=new Di,t=new Di,n=new Di,a=new Di,o=new Di,r=new Di){this.planes=[e,t,n,a,o,r]}set(e,t,n,a,o,r){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(n),s[3].copy(a),s[4].copy(o),s[5].copy(r),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn,n=!1){const a=this.planes,o=e.elements,r=o[0],s=o[1],l=o[2],c=o[3],d=o[4],f=o[5],h=o[6],p=o[7],y=o[8],x=o[9],m=o[10],u=o[11],T=o[12],E=o[13],S=o[14],P=o[15];if(a[0].setComponents(c-r,p-d,u-y,P-T).normalize(),a[1].setComponents(c+r,p+d,u+y,P+T).normalize(),a[2].setComponents(c+s,p+f,u+x,P+E).normalize(),a[3].setComponents(c-s,p-f,u-x,P-E).normalize(),n)a[4].setComponents(l,h,m,S).normalize(),a[5].setComponents(c-l,p-h,u-m,P-S).normalize();else if(a[4].setComponents(c-l,p-h,u-m,P-S).normalize(),t===zn)a[5].setComponents(c+l,p+h,u+m,P+S).normalize();else if(t===ir)a[5].setComponents(l,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pi)}intersectsSprite(e){Pi.center.set(0,0,0);const t=lh.distanceTo(e.center);return Pi.radius=.7071067811865476+t,Pi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pi)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(No.x=a.normal.x>0?e.max.x:e.min.x,No.y=a.normal.y>0?e.max.y:e.min.y,No.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class bl extends Hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rr=new k,sr=new k,pc=new Gt,Va=new vl,Fo=new oo,ns=new k,mc=new k;class Df extends cn{constructor(e=new Wt,t=new bl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,o=t.count;a<o;a++)rr.fromBufferAttribute(t,a-1),sr.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=rr.distanceTo(sr);e.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Fo.copy(n.boundingSphere),Fo.applyMatrix4(a),Fo.radius+=o,e.ray.intersectsSphere(Fo)===!1)return;pc.copy(a).invert(),Va.copy(e.ray).applyMatrix4(pc);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=this.isLineSegments?2:1,d=n.index,h=n.attributes.position;if(d!==null){const p=Math.max(0,r.start),y=Math.min(d.count,r.start+r.count);for(let x=p,m=y-1;x<m;x+=c){const u=d.getX(x),T=d.getX(x+1),E=Oo(this,e,Va,l,u,T,x);E&&t.push(E)}if(this.isLineLoop){const x=d.getX(y-1),m=d.getX(p),u=Oo(this,e,Va,l,x,m,y-1);u&&t.push(u)}}else{const p=Math.max(0,r.start),y=Math.min(h.count,r.start+r.count);for(let x=p,m=y-1;x<m;x+=c){const u=Oo(this,e,Va,l,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){const x=Oo(this,e,Va,l,y-1,p,y-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=a.length;o<r;o++){const s=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}function Oo(i,e,t,n,a,o,r){const s=i.geometry.attributes.position;if(rr.fromBufferAttribute(s,a),sr.fromBufferAttribute(s,o),t.distanceSqToSegment(rr,sr,ns,mc)>n)return;ns.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ns);if(!(c<e.near||c>e.far))return{distance:c,point:mc.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}const gc=new k,yc=new k;class ch extends Df{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let a=0,o=t.count;a<o;a+=2)gc.fromBufferAttribute(t,a),yc.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+gc.distanceTo(yc);e.setAttribute("lineDistance",new Bt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class to extends Hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _c=new Gt,Qs=new vl,Bo=new oo,zo=new k;class lr extends cn{constructor(e=new Wt,t=new to){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,o=e.params.Points.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(a),Bo.radius+=o,e.ray.intersectsSphere(Bo)===!1)return;_c.copy(a).invert(),Qs.copy(e.ray).applyMatrix4(_c);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let y=h,x=p;y<x;y++){const m=c.getX(y);zo.fromBufferAttribute(f,m),vc(zo,m,l,a,e,t,this)}}else{const h=Math.max(0,r.start),p=Math.min(f.count,r.start+r.count);for(let y=h,x=p;y<x;y++)zo.fromBufferAttribute(f,y),vc(zo,y,l,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=a.length;o<r;o++){const s=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}function vc(i,e,t,n,a,o,r){const s=Qs.distanceSqToPoint(i);if(s<t){const l=new k;Qs.closestPointToPoint(i,l),l.applyMatrix4(n);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;o.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Uf extends mn{constructor(e,t,n,a,o,r,s,l,c){super(e,t,n,a,o,r,s,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class kf extends mn{constructor(e,t,n=Bi,a,o,r,s=Un,l=Un,c,d=ja,f=1){if(d!==ja&&d!==Ja)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:f};super(h,a,o,r,s,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _l(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Nf extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class da extends Wt{constructor(e=1,t=1,n=1,a=32,o=1,r=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:a,heightSegments:o,openEnded:r,thetaStart:s,thetaLength:l};const c=this;a=Math.floor(a),o=Math.floor(o);const d=[],f=[],h=[],p=[];let y=0;const x=[],m=n/2;let u=0;T(),r===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(d),this.setAttribute("position",new Bt(f,3)),this.setAttribute("normal",new Bt(h,3)),this.setAttribute("uv",new Bt(p,2));function T(){const S=new k,P=new k;let C=0;const I=(t-e)/n;for(let R=0;R<=o;R++){const w=[],b=R/o,D=b*(t-e)+e;for(let H=0;H<=a;H++){const Q=H/a,re=Q*l+s,ie=Math.sin(re),oe=Math.cos(re);P.x=D*ie,P.y=-b*n+m,P.z=D*oe,f.push(P.x,P.y,P.z),S.set(ie,I,oe).normalize(),h.push(S.x,S.y,S.z),p.push(Q,1-b),w.push(y++)}x.push(w)}for(let R=0;R<a;R++)for(let w=0;w<o;w++){const b=x[w][R],D=x[w+1][R],H=x[w+1][R+1],Q=x[w][R+1];(e>0||w!==0)&&(d.push(b,D,Q),C+=3),(t>0||w!==o-1)&&(d.push(D,H,Q),C+=3)}c.addGroup(u,C,0),u+=C}function E(S){const P=y,C=new Je,I=new k;let R=0;const w=S===!0?e:t,b=S===!0?1:-1;for(let H=1;H<=a;H++)f.push(0,m*b,0),h.push(0,b,0),p.push(.5,.5),y++;const D=y;for(let H=0;H<=a;H++){const re=H/a*l+s,ie=Math.cos(re),oe=Math.sin(re);I.x=w*oe,I.y=m*b,I.z=w*ie,f.push(I.x,I.y,I.z),h.push(0,b,0),C.x=ie*.5+.5,C.y=oe*.5*b+.5,p.push(C.x,C.y),y++}for(let H=0;H<a;H++){const Q=P+H,re=D+H;S===!0?d.push(re,re+1,Q):d.push(re+1,re,Q),R+=3}c.addGroup(u,R,S===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dr extends Wt{constructor(e=[],t=[],n=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:a};const o=[],r=[];s(a),c(n),d(),this.setAttribute("position",new Bt(o,3)),this.setAttribute("normal",new Bt(o.slice(),3)),this.setAttribute("uv",new Bt(r,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function s(T){const E=new k,S=new k,P=new k;for(let C=0;C<t.length;C+=3)p(t[C+0],E),p(t[C+1],S),p(t[C+2],P),l(E,S,P,T)}function l(T,E,S,P){const C=P+1,I=[];for(let R=0;R<=C;R++){I[R]=[];const w=T.clone().lerp(S,R/C),b=E.clone().lerp(S,R/C),D=C-R;for(let H=0;H<=D;H++)H===0&&R===C?I[R][H]=w:I[R][H]=w.clone().lerp(b,H/D)}for(let R=0;R<C;R++)for(let w=0;w<2*(C-R)-1;w++){const b=Math.floor(w/2);w%2===0?(h(I[R][b+1]),h(I[R+1][b]),h(I[R][b])):(h(I[R][b+1]),h(I[R+1][b+1]),h(I[R+1][b]))}}function c(T){const E=new k;for(let S=0;S<o.length;S+=3)E.x=o[S+0],E.y=o[S+1],E.z=o[S+2],E.normalize().multiplyScalar(T),o[S+0]=E.x,o[S+1]=E.y,o[S+2]=E.z}function d(){const T=new k;for(let E=0;E<o.length;E+=3){T.x=o[E+0],T.y=o[E+1],T.z=o[E+2];const S=m(T)/2/Math.PI+.5,P=u(T)/Math.PI+.5;r.push(S,1-P)}y(),f()}function f(){for(let T=0;T<r.length;T+=6){const E=r[T+0],S=r[T+2],P=r[T+4],C=Math.max(E,S,P),I=Math.min(E,S,P);C>.9&&I<.1&&(E<.2&&(r[T+0]+=1),S<.2&&(r[T+2]+=1),P<.2&&(r[T+4]+=1))}}function h(T){o.push(T.x,T.y,T.z)}function p(T,E){const S=T*3;E.x=e[S+0],E.y=e[S+1],E.z=e[S+2]}function y(){const T=new k,E=new k,S=new k,P=new k,C=new Je,I=new Je,R=new Je;for(let w=0,b=0;w<o.length;w+=9,b+=6){T.set(o[w+0],o[w+1],o[w+2]),E.set(o[w+3],o[w+4],o[w+5]),S.set(o[w+6],o[w+7],o[w+8]),C.set(r[b+0],r[b+1]),I.set(r[b+2],r[b+3]),R.set(r[b+4],r[b+5]),P.copy(T).add(E).add(S).divideScalar(3);const D=m(P);x(C,b+0,T,D),x(I,b+2,E,D),x(R,b+4,S,D)}}function x(T,E,S,P){P<0&&T.x===1&&(r[E]=T.x-1),S.x===0&&S.z===0&&(r[E]=P/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function u(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new dr(e.vertices,e.indices,e.radius,e.details)}}class ur extends dr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,a=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ur(e.radius,e.detail)}}class Ml extends dr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ml(e.radius,e.detail)}}class On extends Wt{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const o=e/2,r=t/2,s=Math.floor(n),l=Math.floor(a),c=s+1,d=l+1,f=e/s,h=t/l,p=[],y=[],x=[],m=[];for(let u=0;u<d;u++){const T=u*h-r;for(let E=0;E<c;E++){const S=E*f-o;y.push(S,-T,0),x.push(0,0,1),m.push(E/s),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<s;T++){const E=T+c*u,S=T+c*(u+1),P=T+1+c*(u+1),C=T+1+c*u;p.push(E,S,C),p.push(S,P,C)}this.setIndex(p),this.setAttribute("position",new Bt(y,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ya extends Wt{constructor(e=1,t=32,n=16,a=0,o=Math.PI*2,r=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:a,phiLength:o,thetaStart:r,thetaLength:s},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(r+s,Math.PI);let c=0;const d=[],f=new k,h=new k,p=[],y=[],x=[],m=[];for(let u=0;u<=n;u++){const T=[],E=u/n;let S=0;u===0&&r===0?S=.5/t:u===n&&l===Math.PI&&(S=-.5/t);for(let P=0;P<=t;P++){const C=P/t;f.x=-e*Math.cos(a+C*o)*Math.sin(r+E*s),f.y=e*Math.cos(r+E*s),f.z=e*Math.sin(a+C*o)*Math.sin(r+E*s),y.push(f.x,f.y,f.z),h.copy(f).normalize(),x.push(h.x,h.y,h.z),m.push(C+S,1-E),T.push(c++)}d.push(T)}for(let u=0;u<n;u++)for(let T=0;T<t;T++){const E=d[u][T+1],S=d[u][T],P=d[u+1][T],C=d[u+1][T+1];(u!==0||r>0)&&p.push(E,S,C),(u!==n-1||l<Math.PI)&&p.push(S,P,C)}this.setIndex(p),this.setAttribute("position",new Bt(y,3)),this.setAttribute("normal",new Bt(x,3)),this.setAttribute("uv",new Bt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class no extends Wt{constructor(e=1,t=.4,n=12,a=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:a,arc:o},n=Math.floor(n),a=Math.floor(a);const r=[],s=[],l=[],c=[],d=new k,f=new k,h=new k;for(let p=0;p<=n;p++)for(let y=0;y<=a;y++){const x=y/a*o,m=p/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),s.push(f.x,f.y,f.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),h.subVectors(f,d).normalize(),l.push(h.x,h.y,h.z),c.push(y/a),c.push(p/n)}for(let p=1;p<=n;p++)for(let y=1;y<=a;y++){const x=(a+1)*p+y-1,m=(a+1)*(p-1)+y-1,u=(a+1)*(p-1)+y,T=(a+1)*p+y;r.push(x,m,T),r.push(m,u,T)}this.setIndex(r),this.setAttribute("position",new Bt(s,3)),this.setAttribute("normal",new Bt(l,3)),this.setAttribute("uv",new Bt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fh extends hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dh extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uh extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ff extends Rf{constructor(e=-1,t=1,n=1,a=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=n-e,r=n+e,s=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,r=o+c*this.view.width,s-=d*this.view.offsetY,l=s-d*this.view.height}this.projectionMatrix.makeOrthographic(o,r,s,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class hh extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class ph{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class mh extends ch{constructor(e=10,t=10,n=4473924,a=8947848){n=new He(n),a=new He(a);const o=t/2,r=e/t,s=e/2,l=[],c=[];for(let h=0,p=0,y=-s;h<=t;h++,y+=r){l.push(-s,0,y,s,0,y),l.push(y,0,-s,y,0,s);const x=h===o?n:a;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}const d=new Wt;d.setAttribute("position",new Bt(l,3)),d.setAttribute("color",new Bt(c,3));const f=new bl({vertexColors:!0,toneMapped:!1});super(d,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function xc(i,e,t,n){const a=gh(n);switch(t){case yf:return i*e;case vf:return i*e/a.components*a.byteLength;case ml:return i*e/a.components*a.byteLength;case xf:return i*e*2/a.components*a.byteLength;case gl:return i*e*2/a.components*a.byteLength;case _f:return i*e*3/a.components*a.byteLength;case In:return i*e*4/a.components*a.byteLength;case yl:return i*e*4/a.components*a.byteLength;case Ko:case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case jo:case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ss:case Es:return Math.max(i,16)*Math.max(e,8)/4;case ws:case Ts:return Math.max(i,8)*Math.max(e,8)/2;case As:case Cs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ls:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Is:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ds:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Us:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ks:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ns:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Fs:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Os:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Bs:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case zs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Gs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Hs:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Vs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ws:case Xs:case Ys:return Math.ceil(i/4)*Math.ceil(e/4)*16;case qs:case Zs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ks:case $s:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gh(i){switch(i){case ni:case hf:return{byteLength:1,components:1};case Ka:case pf:case ei:return{byteLength:2,components:1};case hl:case pl:return{byteLength:2,components:4};case Bi:case ul:case Jn:return{byteLength:4,components:1};case mf:case gf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=fl);function Of(){let i=null,e=!1,t=null,n=null;function a(o,r){t(o,r),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function yh(i){const e=new WeakMap;function t(s,l){const c=s.array,d=s.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),s.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)s.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:s.version,size:f}}function n(s,l,c){const d=l.array,f=l.updateRanges;if(i.bindBuffer(c,s),f.length===0)i.bufferSubData(c,0,d);else{f.sort((p,y)=>p.start-y.start);let h=0;for(let p=1;p<f.length;p++){const y=f[h],x=f[p];x.start<=y.start+y.count+1?y.count=Math.max(y.count,x.start+x.count-y.start):(++h,f[h]=x)}f.length=h+1;for(let p=0,y=f.length;p<y;p++){const x=f[p];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function o(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(i.deleteBuffer(l.buffer),e.delete(s))}function r(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const d=e.get(s);(!d||d.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const c=e.get(s);if(c===void 0)e.set(s,t(s,l));else if(c.version<s.version){if(c.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,s,l),c.version=s.version}}return{get:a,remove:o,update:r}}var _h=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vh=`#ifdef USE_ALPHAHASH
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
#endif`,xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sh=`#ifdef USE_AOMAP
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
#endif`,Th=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Eh=`#ifdef USE_BATCHING
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
#endif`,Ah=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ch=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ph=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lh=`#ifdef USE_IRIDESCENCE
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
#endif`,Ih=`#ifdef USE_BUMPMAP
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
#endif`,Dh=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Uh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nh=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Oh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gh=`#define PI 3.141592653589793
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
} // validated`,Hh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vh=`vec3 transformedNormal = objectNormal;
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
#endif`,Wh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$h=`#ifdef USE_ENVMAP
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
#endif`,jh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jh=`#ifdef USE_ENVMAP
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
#endif`,Qh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
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
#endif`,tp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,op=`#ifdef USE_GRADIENTMAP
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
}`,rp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cp=`uniform bool receiveShadow;
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
#endif`,fp=`#ifdef USE_ENVMAP
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
#endif`,dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mp=`PhysicalMaterial material;
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
#endif`,gp=`struct PhysicalMaterial {
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
}`,yp=`
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
#endif`,_p=`#if defined( RE_IndirectDiffuse )
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
#endif`,vp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ep=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ap=`#if defined( USE_POINTS_UV )
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
#endif`,Cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ip=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dp=`#ifdef USE_MORPHTARGETS
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
#endif`,Up=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Np=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zp=`#ifdef USE_NORMALMAP
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
#endif`,Gp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$p=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,n0=`float getShadowMask() {
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
}`,i0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,a0=`#ifdef USE_SKINNING
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
#endif`,o0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,s0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,l0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d0=`#ifdef USE_TRANSMISSION
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
#endif`,u0=`#ifdef USE_TRANSMISSION
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
#endif`,h0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const y0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_0=`uniform sampler2D t2D;
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
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,x0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,b0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`#include <common>
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
}`,S0=`#if DEPTH_PACKING == 3200
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
}`,T0=`#define DISTANCE
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
}`,E0=`#define DISTANCE
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
}`,A0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,C0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R0=`uniform float scale;
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
}`,P0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,I0=`uniform vec3 diffuse;
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
}`,D0=`#define LAMBERT
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
}`,U0=`#define LAMBERT
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
}`,k0=`#define MATCAP
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
}`,N0=`#define MATCAP
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
}`,F0=`#define NORMAL
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
}`,O0=`#define NORMAL
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
}`,B0=`#define PHONG
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
}`,z0=`#define PHONG
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
}`,G0=`#define STANDARD
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
}`,H0=`#define STANDARD
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
}`,V0=`#define TOON
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
}`,W0=`#define TOON
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
}`,X0=`uniform float size;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,q0=`#include <common>
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
}`,Z0=`uniform vec3 color;
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
}`,K0=`uniform float rotation;
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
}`,$0=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:_h,alphahash_pars_fragment:vh,alphamap_fragment:xh,alphamap_pars_fragment:bh,alphatest_fragment:Mh,alphatest_pars_fragment:wh,aomap_fragment:Sh,aomap_pars_fragment:Th,batching_pars_vertex:Eh,batching_vertex:Ah,begin_vertex:Ch,beginnormal_vertex:Rh,bsdfs:Ph,iridescence_fragment:Lh,bumpmap_pars_fragment:Ih,clipping_planes_fragment:Dh,clipping_planes_pars_fragment:Uh,clipping_planes_pars_vertex:kh,clipping_planes_vertex:Nh,color_fragment:Fh,color_pars_fragment:Oh,color_pars_vertex:Bh,color_vertex:zh,common:Gh,cube_uv_reflection_fragment:Hh,defaultnormal_vertex:Vh,displacementmap_pars_vertex:Wh,displacementmap_vertex:Xh,emissivemap_fragment:Yh,emissivemap_pars_fragment:qh,colorspace_fragment:Zh,colorspace_pars_fragment:Kh,envmap_fragment:$h,envmap_common_pars_fragment:jh,envmap_pars_fragment:Jh,envmap_pars_vertex:Qh,envmap_physical_pars_fragment:fp,envmap_vertex:ep,fog_vertex:tp,fog_pars_vertex:np,fog_fragment:ip,fog_pars_fragment:ap,gradientmap_pars_fragment:op,lightmap_pars_fragment:rp,lights_lambert_fragment:sp,lights_lambert_pars_fragment:lp,lights_pars_begin:cp,lights_toon_fragment:dp,lights_toon_pars_fragment:up,lights_phong_fragment:hp,lights_phong_pars_fragment:pp,lights_physical_fragment:mp,lights_physical_pars_fragment:gp,lights_fragment_begin:yp,lights_fragment_maps:_p,lights_fragment_end:vp,logdepthbuf_fragment:xp,logdepthbuf_pars_fragment:bp,logdepthbuf_pars_vertex:Mp,logdepthbuf_vertex:wp,map_fragment:Sp,map_pars_fragment:Tp,map_particle_fragment:Ep,map_particle_pars_fragment:Ap,metalnessmap_fragment:Cp,metalnessmap_pars_fragment:Rp,morphinstance_vertex:Pp,morphcolor_vertex:Lp,morphnormal_vertex:Ip,morphtarget_pars_vertex:Dp,morphtarget_vertex:Up,normal_fragment_begin:kp,normal_fragment_maps:Np,normal_pars_fragment:Fp,normal_pars_vertex:Op,normal_vertex:Bp,normalmap_pars_fragment:zp,clearcoat_normal_fragment_begin:Gp,clearcoat_normal_fragment_maps:Hp,clearcoat_pars_fragment:Vp,iridescence_pars_fragment:Wp,opaque_fragment:Xp,packing:Yp,premultiplied_alpha_fragment:qp,project_vertex:Zp,dithering_fragment:Kp,dithering_pars_fragment:$p,roughnessmap_fragment:jp,roughnessmap_pars_fragment:Jp,shadowmap_pars_fragment:Qp,shadowmap_pars_vertex:e0,shadowmap_vertex:t0,shadowmask_pars_fragment:n0,skinbase_vertex:i0,skinning_pars_vertex:a0,skinning_vertex:o0,skinnormal_vertex:r0,specularmap_fragment:s0,specularmap_pars_fragment:l0,tonemapping_fragment:c0,tonemapping_pars_fragment:f0,transmission_fragment:d0,transmission_pars_fragment:u0,uv_pars_fragment:h0,uv_pars_vertex:p0,uv_vertex:m0,worldpos_vertex:g0,background_vert:y0,background_frag:_0,backgroundCube_vert:v0,backgroundCube_frag:x0,cube_vert:b0,cube_frag:M0,depth_vert:w0,depth_frag:S0,distanceRGBA_vert:T0,distanceRGBA_frag:E0,equirect_vert:A0,equirect_frag:C0,linedashed_vert:R0,linedashed_frag:P0,meshbasic_vert:L0,meshbasic_frag:I0,meshlambert_vert:D0,meshlambert_frag:U0,meshmatcap_vert:k0,meshmatcap_frag:N0,meshnormal_vert:F0,meshnormal_frag:O0,meshphong_vert:B0,meshphong_frag:z0,meshphysical_vert:G0,meshphysical_frag:H0,meshtoon_vert:V0,meshtoon_frag:W0,points_vert:X0,points_frag:Y0,shadow_vert:q0,shadow_frag:Z0,sprite_vert:K0,sprite_frag:$0},Ae={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},Nn={basic:{uniforms:dn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:dn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new He(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:dn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:dn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:dn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new He(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:dn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:dn([Ae.points,Ae.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:dn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:dn([Ae.common,Ae.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:dn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:dn([Ae.sprite,Ae.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:dn([Ae.common,Ae.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:dn([Ae.lights,Ae.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Nn.physical={uniforms:dn([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Go={r:0,b:0,g:0},Li=new ii,j0=new Gt;function J0(i,e,t,n,a,o,r){const s=new He(0);let l=o===!0?0:1,c,d,f=null,h=0,p=null;function y(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function x(E){let S=!1;const P=y(E);P===null?u(s,l):P&&P.isColor&&(u(P,1),S=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,r):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){const P=y(S);P&&(P.isCubeTexture||P.mapping===fr)?(d===void 0&&(d=new Pt(new Vi(1,1,1),new hn({name:"BackgroundCubeMaterial",uniforms:ba(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(C,I,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),Li.copy(S.backgroundRotation),Li.x*=-1,Li.y*=-1,Li.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Li.y*=-1,Li.z*=-1),d.material.uniforms.envMap.value=P,d.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(j0.makeRotationFromEuler(Li)),d.material.toneMapped=Et.getTransfer(P.colorSpace)!==It,(f!==P||h!==P.version||p!==i.toneMapping)&&(d.material.needsUpdate=!0,f=P,h=P.version,p=i.toneMapping),d.layers.enableAll(),E.unshift(d,d.geometry,d.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new Pt(new On(2,2),new hn({name:"BackgroundMaterial",uniforms:ba(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Et.getTransfer(P.colorSpace)!==It,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(f!==P||h!==P.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,f=P,h=P.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function u(E,S){E.getRGB(Go,Cf(i)),n.buffers.color.setClear(Go.r,Go.g,Go.b,S,r)}function T(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return s},setClearColor:function(E,S=1){s.set(E),l=S,u(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,u(s,l)},render:x,addToRenderList:m,dispose:T}}function Q0(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=h(null);let o=a,r=!1;function s(b,D,H,Q,re){let ie=!1;const oe=f(Q,H,D);o!==oe&&(o=oe,c(o.object)),ie=p(b,Q,H,re),ie&&y(b,Q,H,re),re!==null&&e.update(re,i.ELEMENT_ARRAY_BUFFER),(ie||r)&&(r=!1,S(b,D,H,Q),re!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function d(b){return i.deleteVertexArray(b)}function f(b,D,H){const Q=H.wireframe===!0;let re=n[b.id];re===void 0&&(re={},n[b.id]=re);let ie=re[D.id];ie===void 0&&(ie={},re[D.id]=ie);let oe=ie[Q];return oe===void 0&&(oe=h(l()),ie[Q]=oe),oe}function h(b){const D=[],H=[],Q=[];for(let re=0;re<t;re++)D[re]=0,H[re]=0,Q[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:H,attributeDivisors:Q,object:b,attributes:{},index:null}}function p(b,D,H,Q){const re=o.attributes,ie=D.attributes;let oe=0;const ce=H.getAttributes();for(const ee in ce)if(ce[ee].location>=0){const Me=re[ee];let Fe=ie[ee];if(Fe===void 0&&(ee==="instanceMatrix"&&b.instanceMatrix&&(Fe=b.instanceMatrix),ee==="instanceColor"&&b.instanceColor&&(Fe=b.instanceColor)),Me===void 0||Me.attribute!==Fe||Fe&&Me.data!==Fe.data)return!0;oe++}return o.attributesNum!==oe||o.index!==Q}function y(b,D,H,Q){const re={},ie=D.attributes;let oe=0;const ce=H.getAttributes();for(const ee in ce)if(ce[ee].location>=0){let Me=ie[ee];Me===void 0&&(ee==="instanceMatrix"&&b.instanceMatrix&&(Me=b.instanceMatrix),ee==="instanceColor"&&b.instanceColor&&(Me=b.instanceColor));const Fe={};Fe.attribute=Me,Me&&Me.data&&(Fe.data=Me.data),re[ee]=Fe,oe++}o.attributes=re,o.attributesNum=oe,o.index=Q}function x(){const b=o.newAttributes;for(let D=0,H=b.length;D<H;D++)b[D]=0}function m(b){u(b,0)}function u(b,D){const H=o.newAttributes,Q=o.enabledAttributes,re=o.attributeDivisors;H[b]=1,Q[b]===0&&(i.enableVertexAttribArray(b),Q[b]=1),re[b]!==D&&(i.vertexAttribDivisor(b,D),re[b]=D)}function T(){const b=o.newAttributes,D=o.enabledAttributes;for(let H=0,Q=D.length;H<Q;H++)D[H]!==b[H]&&(i.disableVertexAttribArray(H),D[H]=0)}function E(b,D,H,Q,re,ie,oe){oe===!0?i.vertexAttribIPointer(b,D,H,re,ie):i.vertexAttribPointer(b,D,H,Q,re,ie)}function S(b,D,H,Q){x();const re=Q.attributes,ie=H.getAttributes(),oe=D.defaultAttributeValues;for(const ce in ie){const ee=ie[ce];if(ee.location>=0){let xe=re[ce];if(xe===void 0&&(ce==="instanceMatrix"&&b.instanceMatrix&&(xe=b.instanceMatrix),ce==="instanceColor"&&b.instanceColor&&(xe=b.instanceColor)),xe!==void 0){const Me=xe.normalized,Fe=xe.itemSize,ot=e.get(xe);if(ot===void 0)continue;const _t=ot.buffer,Qe=ot.type,dt=ot.bytesPerElement,ae=Qe===i.INT||Qe===i.UNSIGNED_INT||xe.gpuType===ul;if(xe.isInterleavedBufferAttribute){const fe=xe.data,Le=fe.stride,$e=xe.offset;if(fe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<ee.locationSize;Oe++)u(ee.location+Oe,fe.meshPerAttribute);b.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Oe=0;Oe<ee.locationSize;Oe++)m(ee.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let Oe=0;Oe<ee.locationSize;Oe++)E(ee.location+Oe,Fe/ee.locationSize,Qe,Me,Le*dt,($e+Fe/ee.locationSize*Oe)*dt,ae)}else{if(xe.isInstancedBufferAttribute){for(let fe=0;fe<ee.locationSize;fe++)u(ee.location+fe,xe.meshPerAttribute);b.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let fe=0;fe<ee.locationSize;fe++)m(ee.location+fe);i.bindBuffer(i.ARRAY_BUFFER,_t);for(let fe=0;fe<ee.locationSize;fe++)E(ee.location+fe,Fe/ee.locationSize,Qe,Me,Fe*dt,Fe/ee.locationSize*fe*dt,ae)}}else if(oe!==void 0){const Me=oe[ce];if(Me!==void 0)switch(Me.length){case 2:i.vertexAttrib2fv(ee.location,Me);break;case 3:i.vertexAttrib3fv(ee.location,Me);break;case 4:i.vertexAttrib4fv(ee.location,Me);break;default:i.vertexAttrib1fv(ee.location,Me)}}}}T()}function P(){R();for(const b in n){const D=n[b];for(const H in D){const Q=D[H];for(const re in Q)d(Q[re].object),delete Q[re];delete D[H]}delete n[b]}}function C(b){if(n[b.id]===void 0)return;const D=n[b.id];for(const H in D){const Q=D[H];for(const re in Q)d(Q[re].object),delete Q[re];delete D[H]}delete n[b.id]}function I(b){for(const D in n){const H=n[D];if(H[b.id]===void 0)continue;const Q=H[b.id];for(const re in Q)d(Q[re].object),delete Q[re];delete H[b.id]}}function R(){w(),r=!0,o!==a&&(o=a,c(o.object))}function w(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:s,reset:R,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:I,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function em(i,e,t){let n;function a(c){n=c}function o(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function r(c,d,f){f!==0&&(i.drawArraysInstanced(n,c,d,f),t.update(d,n,f))}function s(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,f);let p=0;for(let y=0;y<f;y++)p+=d[y];t.update(p,n,1)}function l(c,d,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<c.length;y++)r(c[y],d[y],h[y]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,f);let y=0;for(let x=0;x<f;x++)y+=d[x]*h[x];t.update(y,n,1)}}this.setMode=a,this.render=o,this.renderInstances=r,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function tm(i,e,t,n){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function r(I){return!(I!==In&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(I){const R=I===ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ni&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Jn&&!R)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=y>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:s,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:y,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:P,maxSamples:C}}function nm(i){const e=this;let t=null,n=0,a=!1,o=!1;const r=new Di,s=new lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||n!==0||a;return a=h,n=f.length,p},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,p){const y=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!a||y===null||y.length===0||o&&!m)o?d(null):c();else{const T=o?0:n,E=T*4;let S=u.clippingState||null;l.value=S,S=d(y,h,E,p);for(let P=0;P!==E;++P)S[P]=t[P];u.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,h,p,y){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,y!==!0||m===null){const u=p+x*4,T=h.matrixWorldInverse;s.getNormalMatrix(T),(m===null||m.length<u)&&(m=new Float32Array(u));for(let E=0,S=p;E!==x;++E,S+=4)r.copy(f[E]).applyMatrix4(T,s),r.normal.toArray(m,S),m[S+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function im(i){let e=new WeakMap;function t(r,s){return s===xs?r.mapping=_a:s===bs&&(r.mapping=va),r}function n(r){if(r&&r.isTexture){const s=r.mapping;if(s===xs||s===bs)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new nh(l.height);return c.fromEquirectangularTexture(i,r),e.set(r,c),r.addEventListener("dispose",a),t(c.texture,r.mapping)}else return null}}return r}function a(r){const s=r.target;s.removeEventListener("dispose",a);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const ua=4,bc=[.125,.215,.35,.446,.526,.582],Ni=20,is=new Ff,Mc=new He;let as=null,os=0,rs=0,ss=!1;const Ui=(1+Math.sqrt(5))/2,ca=1/Ui,wc=[new k(-Ui,ca,0),new k(Ui,ca,0),new k(-ca,0,Ui),new k(ca,0,Ui),new k(0,Ui,-ca),new k(0,Ui,ca),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],am=new k;class Sc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100,o={}){const{size:r=256,position:s=am}=o;as=this._renderer.getRenderTarget(),os=this._renderer.getActiveCubeFace(),rs=this._renderer.getActiveMipmapLevel(),ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,a,l,s),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ec(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(as,os,rs),this._renderer.xr.enabled=ss,e.scissorTest=!1,Ho(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_a||e.mapping===va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),as=this._renderer.getRenderTarget(),os=this._renderer.getActiveCubeFace(),rs=this._renderer.getActiveMipmapLevel(),ss=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ei,format:In,colorSpace:xa,depthBuffer:!1},a=Tc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Tc(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=om(o)),this._blurMaterial=rm(o,e,t)}return a}_compileMaterial(e){const t=new Pt(this._lodPlanes[0],e);this._renderer.compile(t,is)}_sceneToCubeUV(e,t,n,a,o){const l=new Tn(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,p=f.toneMapping;f.getClearColor(Mc),f.toneMapping=_i,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(a),f.clearDepth(),f.setRenderTarget(null));const x=new qt({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),m=new Pt(new Vi,x);let u=!1;const T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,u=!0):(x.color.copy(Mc),u=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+d[E],o.y,o.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+d[E],o.z)):(l.up.set(0,c[E],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+d[E]));const P=this._cubeSize;Ho(a,S*P,E>2?P:0,P,P),f.setRenderTarget(a),u&&f.render(m,l),f.render(e,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=p,f.autoClear=h,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===_a||e.mapping===va;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ec());const o=a?this._cubemapMaterial:this._equirectMaterial,r=new Pt(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const l=this._cubeSize;Ho(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(r,is)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let o=1;o<a;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),s=wc[(a-o-1)%wc.length];this._blur(e,o-1,o,r,s)}t.autoClear=n}_blur(e,t,n,a,o){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,n,a,"latitudinal",o),this._halfBlur(r,e,n,n,a,"longitudinal",o)}_halfBlur(e,t,n,a,o,r,s){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Pt(this._lodPlanes[a],c),h=c.uniforms,p=this._sizeLods[n]-1,y=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Ni-1),x=o/y,m=isFinite(o)?1+Math.floor(d*x):Ni;m>Ni&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ni}`);const u=[];let T=0;for(let I=0;I<Ni;++I){const R=I/x,w=Math.exp(-R*R/2);u.push(w),I===0?T+=w:I<m&&(T+=2*w)}for(let I=0;I<u.length;I++)u[I]=u[I]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=u,h.latitudinal.value=r==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:E}=this;h.dTheta.value=y,h.mipInt.value=E-n;const S=this._sizeLods[a],P=3*S*(a>E-ua?a-E+ua:0),C=4*(this._cubeSize-S);Ho(t,P,C,3*S,2*S),l.setRenderTarget(t),l.render(f,is)}}function om(i){const e=[],t=[],n=[];let a=i;const o=i-ua+1+bc.length;for(let r=0;r<o;r++){const s=Math.pow(2,a);t.push(s);let l=1/s;r>i-ua?l=bc[r-i+ua-1]:r===0&&(l=0),n.push(l);const c=1/(s-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,y=6,x=3,m=2,u=1,T=new Float32Array(x*y*p),E=new Float32Array(m*y*p),S=new Float32Array(u*y*p);for(let C=0;C<p;C++){const I=C%3*2/3-1,R=C>2?0:-1,w=[I,R,0,I+2/3,R,0,I+2/3,R+1,0,I,R,0,I+2/3,R+1,0,I,R+1,0];T.set(w,x*y*C),E.set(h,m*y*C);const b=[C,C,C,C,C,C];S.set(b,u*y*C)}const P=new Wt;P.setAttribute("position",new tn(T,x)),P.setAttribute("uv",new tn(E,m)),P.setAttribute("faceIndex",new tn(S,u)),e.push(P),a>ua&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Tc(i,e,t){const n=new kn(i,e,t);return n.texture.mapping=fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ho(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function rm(i,e,t){const n=new Float32Array(Ni),a=new k(0,1,0);return new hn({name:"SphericalGaussianBlur",defines:{n:Ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:wl(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ec(){return new hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wl(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Ac(){return new hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function wl(){return`

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
	`}function sm(i){let e=new WeakMap,t=null;function n(s){if(s&&s.isTexture){const l=s.mapping,c=l===xs||l===bs,d=l===_a||l===va;if(c||d){let f=e.get(s);const h=f!==void 0?f.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==h)return t===null&&(t=new Sc(i)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),f.texture;if(f!==void 0)return f.texture;{const p=s.image;return c&&p&&p.height>0||d&&p&&a(p)?(t===null&&(t=new Sc(i)),f=c?t.fromEquirectangular(s):t.fromCubemap(s),f.texture.pmremVersion=s.pmremVersion,e.set(s,f),s.addEventListener("dispose",o),f.texture):null}}}return s}function a(s){let l=0;const c=6;for(let d=0;d<c;d++)s[d]!==void 0&&l++;return l===c}function o(s){const l=s.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:r}}function lm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&Qa("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function cm(i,e,t,n){const a={},o=new WeakMap;function r(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);h.removeEventListener("dispose",r),delete a[h.id];const p=o.get(h);p&&(e.remove(p),o.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function s(f,h){return a[h.id]===!0||(h.addEventListener("dispose",r),a[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(f){const h=[],p=f.index,y=f.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let E=0,S=T.length;E<S;E+=3){const P=T[E+0],C=T[E+1],I=T[E+2];h.push(P,C,C,I,I,P)}}else if(y!==void 0){const T=y.array;x=y.version;for(let E=0,S=T.length/3-1;E<S;E+=3){const P=E+0,C=E+1,I=E+2;h.push(P,C,C,I,I,P)}}else return;const m=new(Mf(h)?Af:Ef)(h,1);m.version=x;const u=o.get(f);u&&e.remove(u),o.set(f,m)}function d(f){const h=o.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return o.get(f)}return{get:s,update:l,getWireframeAttribute:d}}function fm(i,e,t){let n;function a(h){n=h}let o,r;function s(h){o=h.type,r=h.bytesPerElement}function l(h,p){i.drawElements(n,p,o,h*r),t.update(p,n,1)}function c(h,p,y){y!==0&&(i.drawElementsInstanced(n,p,o,h*r,y),t.update(p,n,y))}function d(h,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,h,0,y);let m=0;for(let u=0;u<y;u++)m+=p[u];t.update(m,n,1)}function f(h,p,y,x){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<h.length;u++)c(h[u]/r,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,o,h,0,x,0,y);let u=0;for(let T=0;T<y;T++)u+=p[T]*x[T];t.update(u,n,1)}}this.setMode=a,this.setIndex=s,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function dm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,s){switch(t.calls++,r){case i.TRIANGLES:t.triangles+=s*(o/3);break;case i.LINES:t.lines+=s*(o/2);break;case i.LINE_STRIP:t.lines+=s*(o-1);break;case i.LINE_LOOP:t.lines+=s*o;break;case i.POINTS:t.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function um(i,e,t){const n=new WeakMap,a=new Vt;function o(r,s,l){const c=r.morphTargetInfluences,d=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,f=d!==void 0?d.length:0;let h=n.get(s);if(h===void 0||h.count!==f){let b=function(){R.dispose(),n.delete(s),s.removeEventListener("dispose",b)};var p=b;h!==void 0&&h.texture.dispose();const y=s.morphAttributes.position!==void 0,x=s.morphAttributes.normal!==void 0,m=s.morphAttributes.color!==void 0,u=s.morphAttributes.position||[],T=s.morphAttributes.normal||[],E=s.morphAttributes.color||[];let S=0;y===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let P=s.attributes.position.count*S,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const I=new Float32Array(P*C*4*f),R=new wf(I,P,C,f);R.type=Jn,R.needsUpdate=!0;const w=S*4;for(let D=0;D<f;D++){const H=u[D],Q=T[D],re=E[D],ie=P*C*4*D;for(let oe=0;oe<H.count;oe++){const ce=oe*w;y===!0&&(a.fromBufferAttribute(H,oe),I[ie+ce+0]=a.x,I[ie+ce+1]=a.y,I[ie+ce+2]=a.z,I[ie+ce+3]=0),x===!0&&(a.fromBufferAttribute(Q,oe),I[ie+ce+4]=a.x,I[ie+ce+5]=a.y,I[ie+ce+6]=a.z,I[ie+ce+7]=0),m===!0&&(a.fromBufferAttribute(re,oe),I[ie+ce+8]=a.x,I[ie+ce+9]=a.y,I[ie+ce+10]=a.z,I[ie+ce+11]=re.itemSize===4?a.w:1)}}h={count:f,texture:R,size:new Je(P,C)},n.set(s,h),s.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",r.morphTexture,t);else{let y=0;for(let m=0;m<c.length;m++)y+=c[m];const x=s.morphTargetsRelative?1:1-y;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:o}}function hm(i,e,t,n){let a=new WeakMap;function o(l){const c=n.render.frame,d=l.geometry,f=e.get(l,d);if(a.get(f)!==c&&(e.update(f),a.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),a.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return f}function r(){a=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:r}}const Bf=new mn,Cc=new kf(1,1),zf=new wf,Gf=new zu,Hf=new Pf,Rc=[],Pc=[],Lc=new Float32Array(16),Ic=new Float32Array(9),Dc=new Float32Array(4);function Ca(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let o=Rc[a];if(o===void 0&&(o=new Float32Array(a),Rc[a]=o),e!==0){n.toArray(o,0);for(let r=1,s=0;r!==e;++r)s+=t,i[r].toArray(o,s)}return o}function Zt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function hr(i,e){let t=Pc[e];t===void 0&&(t=new Int32Array(e),Pc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function pm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2fv(this.addr,e),Kt(t,e)}}function gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;i.uniform3fv(this.addr,e),Kt(t,e)}}function ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4fv(this.addr,e),Kt(t,e)}}function _m(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;Dc.set(n),i.uniformMatrix2fv(this.addr,!1,Dc),Kt(t,n)}}function vm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;Ic.set(n),i.uniformMatrix3fv(this.addr,!1,Ic),Kt(t,n)}}function xm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Kt(t,e)}else{if(Zt(t,n))return;Lc.set(n),i.uniformMatrix4fv(this.addr,!1,Lc),Kt(t,n)}}function bm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2iv(this.addr,e),Kt(t,e)}}function wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3iv(this.addr,e),Kt(t,e)}}function Sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4iv(this.addr,e),Kt(t,e)}}function Tm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;i.uniform2uiv(this.addr,e),Kt(t,e)}}function Am(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;i.uniform3uiv(this.addr,e),Kt(t,e)}}function Cm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;i.uniform4uiv(this.addr,e),Kt(t,e)}}function Rm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let o;this.type===i.SAMPLER_2D_SHADOW?(Cc.compareFunction=bf,o=Cc):o=Bf,t.setTexture2D(e||o,a)}function Pm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||Gf,a)}function Lm(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||Hf,a)}function Im(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||zf,a)}function Dm(i){switch(i){case 5126:return pm;case 35664:return mm;case 35665:return gm;case 35666:return ym;case 35674:return _m;case 35675:return vm;case 35676:return xm;case 5124:case 35670:return bm;case 35667:case 35671:return Mm;case 35668:case 35672:return wm;case 35669:case 35673:return Sm;case 5125:return Tm;case 36294:return Em;case 36295:return Am;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Rm;case 35679:case 36299:case 36307:return Pm;case 35680:case 36300:case 36308:case 36293:return Lm;case 36289:case 36303:case 36311:case 36292:return Im}}function Um(i,e){i.uniform1fv(this.addr,e)}function km(i,e){const t=Ca(e,this.size,2);i.uniform2fv(this.addr,t)}function Nm(i,e){const t=Ca(e,this.size,3);i.uniform3fv(this.addr,t)}function Fm(i,e){const t=Ca(e,this.size,4);i.uniform4fv(this.addr,t)}function Om(i,e){const t=Ca(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Bm(i,e){const t=Ca(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function zm(i,e){const t=Ca(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Gm(i,e){i.uniform1iv(this.addr,e)}function Hm(i,e){i.uniform2iv(this.addr,e)}function Vm(i,e){i.uniform3iv(this.addr,e)}function Wm(i,e){i.uniform4iv(this.addr,e)}function Xm(i,e){i.uniform1uiv(this.addr,e)}function Ym(i,e){i.uniform2uiv(this.addr,e)}function qm(i,e){i.uniform3uiv(this.addr,e)}function Zm(i,e){i.uniform4uiv(this.addr,e)}function Km(i,e,t){const n=this.cache,a=e.length,o=hr(t,a);Zt(n,o)||(i.uniform1iv(this.addr,o),Kt(n,o));for(let r=0;r!==a;++r)t.setTexture2D(e[r]||Bf,o[r])}function $m(i,e,t){const n=this.cache,a=e.length,o=hr(t,a);Zt(n,o)||(i.uniform1iv(this.addr,o),Kt(n,o));for(let r=0;r!==a;++r)t.setTexture3D(e[r]||Gf,o[r])}function jm(i,e,t){const n=this.cache,a=e.length,o=hr(t,a);Zt(n,o)||(i.uniform1iv(this.addr,o),Kt(n,o));for(let r=0;r!==a;++r)t.setTextureCube(e[r]||Hf,o[r])}function Jm(i,e,t){const n=this.cache,a=e.length,o=hr(t,a);Zt(n,o)||(i.uniform1iv(this.addr,o),Kt(n,o));for(let r=0;r!==a;++r)t.setTexture2DArray(e[r]||zf,o[r])}function Qm(i){switch(i){case 5126:return Um;case 35664:return km;case 35665:return Nm;case 35666:return Fm;case 35674:return Om;case 35675:return Bm;case 35676:return zm;case 5124:case 35670:return Gm;case 35667:case 35671:return Hm;case 35668:case 35672:return Vm;case 35669:case 35673:return Wm;case 5125:return Xm;case 36294:return Ym;case 36295:return qm;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return Jm}}class e1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dm(t.type)}}class t1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qm(t.type)}}class n1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let o=0,r=a.length;o!==r;++o){const s=a[o];s.setValue(e,t[s.id],n)}}}const ls=/(\w+)(\])?(\[|\.)?/g;function Uc(i,e){i.seq.push(e),i.map[e.id]=e}function i1(i,e,t){const n=i.name,a=n.length;for(ls.lastIndex=0;;){const o=ls.exec(n),r=ls.lastIndex;let s=o[1];const l=o[2]==="]",c=o[3];if(l&&(s=s|0),c===void 0||c==="["&&r+2===a){Uc(t,c===void 0?new e1(s,i,e):new t1(s,i,e));break}else{let f=t.map[s];f===void 0&&(f=new n1(s),Uc(t,f)),t=f}}}class Qo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),r=e.getUniformLocation(t,o.name);i1(o,r,this)}}setValue(e,t,n,a){const o=this.map[t];o!==void 0&&o.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let o=0,r=t.length;o!==r;++o){const s=t[o],l=n[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,o=e.length;a!==o;++a){const r=e[a];r.id in t&&n.push(r)}return n}}function kc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const a1=37297;let o1=0;function r1(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let r=a;r<o;r++){const s=r+1;n.push(`${s===e?">":" "} ${s}: ${t[r]}`)}return n.join(`
`)}const Nc=new lt;function s1(i){Et._getMatrix(Nc,Et.workingColorSpace,i);const e=`mat3( ${Nc.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(i)){case nr:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Fc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const r=/ERROR: 0:(\d+)/.exec(o);if(r){const s=parseInt(r[1]);return t.toUpperCase()+`

`+o+`

`+r1(i.getShaderSource(e),s)}else return o}function l1(i,e){const t=s1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function c1(i,e){let t;switch(e){case rf:t="Linear";break;case sf:t="Reinhard";break;case lf:t="Cineon";break;case dl:t="ACESFilmic";break;case ff:t="AgX";break;case df:t="Neutral";break;case cf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vo=new k;function f1(){Et.getLuminanceCoefficients(Vo);const i=Vo.x.toFixed(4),e=Vo.y.toFixed(4),t=Vo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function d1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function u1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function h1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const o=i.getActiveAttrib(e,a),r=o.name;let s=1;o.type===i.FLOAT_MAT2&&(s=2),o.type===i.FLOAT_MAT3&&(s=3),o.type===i.FLOAT_MAT4&&(s=4),t[r]={type:o.type,location:i.getAttribLocation(e,r),locationSize:s}}return t}function Wa(i){return i!==""}function Oc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Bc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const p1=/^[ \t]*#include +<([\w\d./]+)>/gm;function el(i){return i.replace(p1,g1)}const m1=new Map;function g1(i,e){let t=ft[e];if(t===void 0){const n=m1.get(e);if(n!==void 0)t=ft[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return el(t)}const y1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zc(i){return i.replace(y1,_1)}function _1(i,e,t,n){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Gc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function v1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===af?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Qd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function x1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case _a:case va:e="ENVMAP_TYPE_CUBE";break;case fr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function b1(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===va&&(e="ENVMAP_MODE_REFRACTION"),e}function M1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case of:e="ENVMAP_BLENDING_MULTIPLY";break;case _u:e="ENVMAP_BLENDING_MIX";break;case vu:e="ENVMAP_BLENDING_ADD";break}return e}function w1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function S1(i,e,t,n){const a=i.getContext(),o=t.defines;let r=t.vertexShader,s=t.fragmentShader;const l=v1(t),c=x1(t),d=b1(t),f=M1(t),h=w1(t),p=d1(t),y=u1(o),x=a.createProgram();let m,u,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Wa).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Wa).join(`
`),u.length>0&&(u+=`
`)):(m=[Gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),u=[Gc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_i?"#define TONE_MAPPING":"",t.toneMapping!==_i?ft.tonemapping_pars_fragment:"",t.toneMapping!==_i?c1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,l1("linearToOutputTexel",t.outputColorSpace),f1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wa).join(`
`)),r=el(r),r=Oc(r,t),r=Bc(r,t),s=el(s),s=Oc(s,t),s=Bc(s,t),r=zc(r),s=zc(s),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=T+m+r,S=T+u+s,P=kc(a,a.VERTEX_SHADER,E),C=kc(a,a.FRAGMENT_SHADER,S);a.attachShader(x,P),a.attachShader(x,C),t.index0AttributeName!==void 0?a.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function I(D){if(i.debug.checkShaderErrors){const H=a.getProgramInfoLog(x)||"",Q=a.getShaderInfoLog(P)||"",re=a.getShaderInfoLog(C)||"",ie=H.trim(),oe=Q.trim(),ce=re.trim();let ee=!0,xe=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,x,P,C);else{const Me=Fc(a,P,"vertex"),Fe=Fc(a,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+ie+`
`+Me+`
`+Fe)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(oe===""||ce==="")&&(xe=!1);xe&&(D.diagnostics={runnable:ee,programLog:ie,vertexShader:{log:oe,prefix:m},fragmentShader:{log:ce,prefix:u}})}a.deleteShader(P),a.deleteShader(C),R=new Qo(a,x),w=h1(a,x)}let R;this.getUniforms=function(){return R===void 0&&I(this),R};let w;this.getAttributes=function(){return w===void 0&&I(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=a.getProgramParameter(x,a1)),b},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=o1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=C,this}let T1=0;class E1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(e);return r.has(a)===!1&&(r.add(a),a.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new A1(e),t.set(e,n)),n}}class A1{constructor(e){this.id=T1++,this.code=e,this.usedTimes=0}}function C1(i,e,t,n,a,o,r){const s=new Sf,l=new E1,c=new Set,d=[],f=a.logarithmicDepthBuffer,h=a.vertexTextures;let p=a.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,D,H,Q){const re=H.fog,ie=Q.geometry,oe=w.isMeshStandardMaterial?H.environment:null,ce=(w.isMeshStandardMaterial?t:e).get(w.envMap||oe),ee=ce&&ce.mapping===fr?ce.image.height:null,xe=y[w.type];w.precision!==null&&(p=a.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Me=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Fe=Me!==void 0?Me.length:0;let ot=0;ie.morphAttributes.position!==void 0&&(ot=1),ie.morphAttributes.normal!==void 0&&(ot=2),ie.morphAttributes.color!==void 0&&(ot=3);let _t,Qe,dt,ae;if(xe){const vt=Nn[xe];_t=vt.vertexShader,Qe=vt.fragmentShader}else _t=w.vertexShader,Qe=w.fragmentShader,l.update(w),dt=l.getVertexShaderID(w),ae=l.getFragmentShaderID(w);const fe=i.getRenderTarget(),Le=i.state.buffers.depth.getReversed(),$e=Q.isInstancedMesh===!0,Oe=Q.isBatchedMesh===!0,ct=!!w.map,Nt=!!w.matcap,A=!!ce,rt=!!w.aoMap,et=!!w.lightMap,je=!!w.bumpMap,Be=!!w.normalMap,st=!!w.displacementMap,Ie=!!w.emissiveMap,tt=!!w.metalnessMap,se=!!w.roughnessMap,we=w.anisotropy>0,_=w.clearcoat>0,g=w.dispersion>0,O=w.iridescence>0,J=w.sheen>0,te=w.transmission>0,q=we&&!!w.anisotropyMap,$=_&&!!w.clearcoatMap,le=_&&!!w.clearcoatNormalMap,Pe=_&&!!w.clearcoatRoughnessMap,De=O&&!!w.iridescenceMap,ue=O&&!!w.iridescenceThicknessMap,Se=J&&!!w.sheenColorMap,nt=J&&!!w.sheenRoughnessMap,ze=!!w.specularMap,Te=!!w.specularColorMap,at=!!w.specularIntensityMap,N=te&&!!w.transmissionMap,pe=te&&!!w.thicknessMap,ve=!!w.gradientMap,ke=!!w.alphaMap,me=w.alphaTest>0,L=!!w.alphaHash,Ge=!!w.extensions;let ne=_i;w.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ne=i.toneMapping);const wt={shaderID:xe,shaderType:w.type,shaderName:w.name,vertexShader:_t,fragmentShader:Qe,defines:w.defines,customVertexShaderID:dt,customFragmentShaderID:ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&Q._colorsTexture!==null,instancing:$e,instancingColor:$e&&Q.instanceColor!==null,instancingMorph:$e&&Q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:xa,alphaToCoverage:!!w.alphaToCoverage,map:ct,matcap:Nt,envMap:A,envMapMode:A&&ce.mapping,envMapCubeUVHeight:ee,aoMap:rt,lightMap:et,bumpMap:je,normalMap:Be,displacementMap:h&&st,emissiveMap:Ie,normalMapObjectSpace:Be&&w.normalMapType===Su,normalMapTangentSpace:Be&&w.normalMapType===wu,metalnessMap:tt,roughnessMap:se,anisotropy:we,anisotropyMap:q,clearcoat:_,clearcoatMap:$,clearcoatNormalMap:le,clearcoatRoughnessMap:Pe,dispersion:g,iridescence:O,iridescenceMap:De,iridescenceThicknessMap:ue,sheen:J,sheenColorMap:Se,sheenRoughnessMap:nt,specularMap:ze,specularColorMap:Te,specularIntensityMap:at,transmission:te,transmissionMap:N,thicknessMap:pe,gradientMap:ve,opaque:w.transparent===!1&&w.blending===xn&&w.alphaToCoverage===!1,alphaMap:ke,alphaTest:me,alphaHash:L,combine:w.combine,mapUv:ct&&x(w.map.channel),aoMapUv:rt&&x(w.aoMap.channel),lightMapUv:et&&x(w.lightMap.channel),bumpMapUv:je&&x(w.bumpMap.channel),normalMapUv:Be&&x(w.normalMap.channel),displacementMapUv:st&&x(w.displacementMap.channel),emissiveMapUv:Ie&&x(w.emissiveMap.channel),metalnessMapUv:tt&&x(w.metalnessMap.channel),roughnessMapUv:se&&x(w.roughnessMap.channel),anisotropyMapUv:q&&x(w.anisotropyMap.channel),clearcoatMapUv:$&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:nt&&x(w.sheenRoughnessMap.channel),specularMapUv:ze&&x(w.specularMap.channel),specularColorMapUv:Te&&x(w.specularColorMap.channel),specularIntensityMapUv:at&&x(w.specularIntensityMap.channel),transmissionMapUv:N&&x(w.transmissionMap.channel),thicknessMapUv:pe&&x(w.thicknessMap.channel),alphaMapUv:ke&&x(w.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Be||we),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ie.attributes.uv&&(ct||ke),fog:!!re,useFog:w.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Le,skinning:Q.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:ot,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:ct&&w.map.isVideoTexture===!0&&Et.getTransfer(w.map.colorSpace)===It,decodeVideoTextureEmissive:Ie&&w.emissiveMap.isVideoTexture===!0&&Et.getTransfer(w.emissiveMap.colorSpace)===It,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===jn,flipSided:w.side===pn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ge&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&w.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function u(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)b.push(D),b.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(T(b,w),E(b,w),b.push(i.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function T(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function E(w,b){s.disableAll(),b.supportsVertexTextures&&s.enable(0),b.instancing&&s.enable(1),b.instancingColor&&s.enable(2),b.instancingMorph&&s.enable(3),b.matcap&&s.enable(4),b.envMap&&s.enable(5),b.normalMapObjectSpace&&s.enable(6),b.normalMapTangentSpace&&s.enable(7),b.clearcoat&&s.enable(8),b.iridescence&&s.enable(9),b.alphaTest&&s.enable(10),b.vertexColors&&s.enable(11),b.vertexAlphas&&s.enable(12),b.vertexUv1s&&s.enable(13),b.vertexUv2s&&s.enable(14),b.vertexUv3s&&s.enable(15),b.vertexTangents&&s.enable(16),b.anisotropy&&s.enable(17),b.alphaHash&&s.enable(18),b.batching&&s.enable(19),b.dispersion&&s.enable(20),b.batchingColor&&s.enable(21),b.gradientMap&&s.enable(22),w.push(s.mask),s.disableAll(),b.fog&&s.enable(0),b.useFog&&s.enable(1),b.flatShading&&s.enable(2),b.logarithmicDepthBuffer&&s.enable(3),b.reversedDepthBuffer&&s.enable(4),b.skinning&&s.enable(5),b.morphTargets&&s.enable(6),b.morphNormals&&s.enable(7),b.morphColors&&s.enable(8),b.premultipliedAlpha&&s.enable(9),b.shadowMapEnabled&&s.enable(10),b.doubleSided&&s.enable(11),b.flipSided&&s.enable(12),b.useDepthPacking&&s.enable(13),b.dithering&&s.enable(14),b.transmission&&s.enable(15),b.sheen&&s.enable(16),b.opaque&&s.enable(17),b.pointsUvs&&s.enable(18),b.decodeVideoTexture&&s.enable(19),b.decodeVideoTextureEmissive&&s.enable(20),b.alphaToCoverage&&s.enable(21),w.push(s.mask)}function S(w){const b=y[w.type];let D;if(b){const H=Nn[b];D=eo.clone(H.uniforms)}else D=w.uniforms;return D}function P(w,b){let D;for(let H=0,Q=d.length;H<Q;H++){const re=d[H];if(re.cacheKey===b){D=re,++D.usedTimes;break}}return D===void 0&&(D=new S1(i,b,w,o),d.push(D)),D}function C(w){if(--w.usedTimes===0){const b=d.indexOf(w);d[b]=d[d.length-1],d.pop(),w.destroy()}}function I(w){l.remove(w)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:P,releaseProgram:C,releaseShaderCache:I,programs:d,dispose:R}}function R1(){let i=new WeakMap;function e(r){return i.has(r)}function t(r){let s=i.get(r);return s===void 0&&(s={},i.set(r,s)),s}function n(r){i.delete(r)}function a(r,s,l){i.get(r)[s]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:o}}function P1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Hc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Vc(){const i=[];let e=0;const t=[],n=[],a=[];function o(){e=0,t.length=0,n.length=0,a.length=0}function r(f,h,p,y,x,m){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:p,groupOrder:y,renderOrder:f.renderOrder,z:x,group:m},i[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=p,u.groupOrder=y,u.renderOrder=f.renderOrder,u.z=x,u.group=m),e++,u}function s(f,h,p,y,x,m){const u=r(f,h,p,y,x,m);p.transmission>0?n.push(u):p.transparent===!0?a.push(u):t.push(u)}function l(f,h,p,y,x,m){const u=r(f,h,p,y,x,m);p.transmission>0?n.unshift(u):p.transparent===!0?a.unshift(u):t.unshift(u)}function c(f,h){t.length>1&&t.sort(f||P1),n.length>1&&n.sort(h||Hc),a.length>1&&a.sort(h||Hc)}function d(){for(let f=e,h=i.length;f<h;f++){const p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:a,init:o,push:s,unshift:l,finish:d,sort:c}}function L1(){let i=new WeakMap;function e(n,a){const o=i.get(n);let r;return o===void 0?(r=new Vc,i.set(n,[r])):a>=o.length?(r=new Vc,o.push(r)):r=o[a],r}function t(){i=new WeakMap}return{get:e,dispose:t}}function I1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new He};break;case"SpotLight":t={position:new k,direction:new k,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function D1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let U1=0;function k1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function N1(i){const e=new I1,t=D1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const a=new k,o=new Gt,r=new Gt;function s(c){let d=0,f=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,y=0,x=0,m=0,u=0,T=0,E=0,S=0,P=0,C=0,I=0;c.sort(k1);for(let w=0,b=c.length;w<b;w++){const D=c[w],H=D.color,Q=D.intensity,re=D.distance,ie=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=H.r*Q,f+=H.g*Q,h+=H.b*Q;else if(D.isLightProbe){for(let oe=0;oe<9;oe++)n.probe[oe].addScaledVector(D.sh.coefficients[oe],Q);I++}else if(D.isDirectionalLight){const oe=e.get(D);if(oe.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const ce=D.shadow,ee=t.get(D);ee.shadowIntensity=ce.intensity,ee.shadowBias=ce.bias,ee.shadowNormalBias=ce.normalBias,ee.shadowRadius=ce.radius,ee.shadowMapSize=ce.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=ie,n.directionalShadowMatrix[p]=D.shadow.matrix,T++}n.directional[p]=oe,p++}else if(D.isSpotLight){const oe=e.get(D);oe.position.setFromMatrixPosition(D.matrixWorld),oe.color.copy(H).multiplyScalar(Q),oe.distance=re,oe.coneCos=Math.cos(D.angle),oe.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),oe.decay=D.decay,n.spot[x]=oe;const ce=D.shadow;if(D.map&&(n.spotLightMap[P]=D.map,P++,ce.updateMatrices(D),D.castShadow&&C++),n.spotLightMatrix[x]=ce.matrix,D.castShadow){const ee=t.get(D);ee.shadowIntensity=ce.intensity,ee.shadowBias=ce.bias,ee.shadowNormalBias=ce.normalBias,ee.shadowRadius=ce.radius,ee.shadowMapSize=ce.mapSize,n.spotShadow[x]=ee,n.spotShadowMap[x]=ie,S++}x++}else if(D.isRectAreaLight){const oe=e.get(D);oe.color.copy(H).multiplyScalar(Q),oe.halfWidth.set(D.width*.5,0,0),oe.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=oe,m++}else if(D.isPointLight){const oe=e.get(D);if(oe.color.copy(D.color).multiplyScalar(D.intensity),oe.distance=D.distance,oe.decay=D.decay,D.castShadow){const ce=D.shadow,ee=t.get(D);ee.shadowIntensity=ce.intensity,ee.shadowBias=ce.bias,ee.shadowNormalBias=ce.normalBias,ee.shadowRadius=ce.radius,ee.shadowMapSize=ce.mapSize,ee.shadowCameraNear=ce.camera.near,ee.shadowCameraFar=ce.camera.far,n.pointShadow[y]=ee,n.pointShadowMap[y]=ie,n.pointShadowMatrix[y]=D.shadow.matrix,E++}n.point[y]=oe,y++}else if(D.isHemisphereLight){const oe=e.get(D);oe.skyColor.copy(D.color).multiplyScalar(Q),oe.groundColor.copy(D.groundColor).multiplyScalar(Q),n.hemi[u]=oe,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ae.LTC_FLOAT_1,n.rectAreaLTC2=Ae.LTC_FLOAT_2):(n.rectAreaLTC1=Ae.LTC_HALF_1,n.rectAreaLTC2=Ae.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=h;const R=n.hash;(R.directionalLength!==p||R.pointLength!==y||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==T||R.numPointShadows!==E||R.numSpotShadows!==S||R.numSpotMaps!==P||R.numLightProbes!==I)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=y,n.hemi.length=u,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=I,R.directionalLength=p,R.pointLength=y,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=T,R.numPointShadows=E,R.numSpotShadows=S,R.numSpotMaps=P,R.numLightProbes=I,n.version=U1++)}function l(c,d){let f=0,h=0,p=0,y=0,x=0;const m=d.matrixWorldInverse;for(let u=0,T=c.length;u<T;u++){const E=c[u];if(E.isDirectionalLight){const S=n.directional[f];S.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(m),f++}else if(E.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const S=n.rectArea[y];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),r.identity(),o.copy(E.matrixWorld),o.premultiply(m),r.extractRotation(o),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(r),S.halfHeight.applyMatrix4(r),y++}else if(E.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:s,setupView:l,state:n}}function Wc(i){const e=new N1(i),t=[],n=[];function a(d){c.camera=d,t.length=0,n.length=0}function o(d){t.push(d)}function r(d){n.push(d)}function s(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:s,setupLightsView:l,pushLight:o,pushShadow:r}}function F1(i){let e=new WeakMap;function t(a,o=0){const r=e.get(a);let s;return r===void 0?(s=new Wc(i),e.set(a,[s])):o>=r.length?(s=new Wc(i),r.push(s)):s=r[o],s}function n(){e=new WeakMap}return{get:t,dispose:n}}const O1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B1=`uniform sampler2D shadow_pass;
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
}`;function z1(i,e,t){let n=new If;const a=new Je,o=new Je,r=new Vt,s=new dh({depthPacking:Mu}),l=new uh,c={},d=t.maxTextureSize,f={[Mi]:pn,[pn]:Mi,[jn]:jn},h=new hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:O1,fragmentShader:B1}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const y=new Wt;y.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Pt(y,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=af;let u=this.type;this.render=function(C,I,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=i.getRenderTarget(),b=i.getActiveCubeFace(),D=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Qn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Q=u!==$n&&this.type===$n,re=u===$n&&this.type!==$n;for(let ie=0,oe=C.length;ie<oe;ie++){const ce=C[ie],ee=ce.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;a.copy(ee.mapSize);const xe=ee.getFrameExtents();if(a.multiply(xe),o.copy(ee.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/xe.x),a.x=o.x*xe.x,ee.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/xe.y),a.y=o.y*xe.y,ee.mapSize.y=o.y)),ee.map===null||Q===!0||re===!0){const Fe=this.type!==$n?{minFilter:Un,magFilter:Un}:{};ee.map!==null&&ee.map.dispose(),ee.map=new kn(a.x,a.y,Fe),ee.map.texture.name=ce.name+".shadowMap",ee.camera.updateProjectionMatrix()}i.setRenderTarget(ee.map),i.clear();const Me=ee.getViewportCount();for(let Fe=0;Fe<Me;Fe++){const ot=ee.getViewport(Fe);r.set(o.x*ot.x,o.y*ot.y,o.x*ot.z,o.y*ot.w),H.viewport(r),ee.updateMatrices(ce,Fe),n=ee.getFrustum(),S(I,R,ee.camera,ce,this.type)}ee.isPointLightShadow!==!0&&this.type===$n&&T(ee,R),ee.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(w,b,D)};function T(C,I){const R=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new kn(a.x,a.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(I,null,R,h,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(I,null,R,p,x,null)}function E(C,I,R,w){let b=null;const D=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(D!==void 0)b=D;else if(b=R.isPointLight===!0?l:s,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const H=b.uuid,Q=I.uuid;let re=c[H];re===void 0&&(re={},c[H]=re);let ie=re[Q];ie===void 0&&(ie=b.clone(),re[Q]=ie,I.addEventListener("dispose",P)),b=ie}if(b.visible=I.visible,b.wireframe=I.wireframe,w===$n?b.side=I.shadowSide!==null?I.shadowSide:I.side:b.side=I.shadowSide!==null?I.shadowSide:f[I.side],b.alphaMap=I.alphaMap,b.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,b.map=I.map,b.clipShadows=I.clipShadows,b.clippingPlanes=I.clippingPlanes,b.clipIntersection=I.clipIntersection,b.displacementMap=I.displacementMap,b.displacementScale=I.displacementScale,b.displacementBias=I.displacementBias,b.wireframeLinewidth=I.wireframeLinewidth,b.linewidth=I.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const H=i.properties.get(b);H.light=R}return b}function S(C,I,R,w,b){if(C.visible===!1)return;if(C.layers.test(I.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===$n)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const Q=e.update(C),re=C.material;if(Array.isArray(re)){const ie=Q.groups;for(let oe=0,ce=ie.length;oe<ce;oe++){const ee=ie[oe],xe=re[ee.materialIndex];if(xe&&xe.visible){const Me=E(C,xe,w,b);C.onBeforeShadow(i,C,I,R,Q,Me,ee),i.renderBufferDirect(R,null,Q,Me,C,ee),C.onAfterShadow(i,C,I,R,Q,Me,ee)}}}else if(re.visible){const ie=E(C,re,w,b);C.onBeforeShadow(i,C,I,R,Q,ie,null),i.renderBufferDirect(R,null,Q,ie,C,null),C.onAfterShadow(i,C,I,R,Q,ie,null)}}const H=C.children;for(let Q=0,re=H.length;Q<re;Q++)S(H[Q],I,R,w,b)}function P(C){C.target.removeEventListener("dispose",P);for(const R in c){const w=c[R],b=C.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const G1={[hs]:ps,[ms]:_s,[gs]:vs,[ya]:ys,[ps]:hs,[_s]:ms,[vs]:gs,[ys]:ya};function H1(i,e){function t(){let N=!1;const pe=new Vt;let ve=null;const ke=new Vt(0,0,0,0);return{setMask:function(me){ve!==me&&!N&&(i.colorMask(me,me,me,me),ve=me)},setLocked:function(me){N=me},setClear:function(me,L,Ge,ne,wt){wt===!0&&(me*=ne,L*=ne,Ge*=ne),pe.set(me,L,Ge,ne),ke.equals(pe)===!1&&(i.clearColor(me,L,Ge,ne),ke.copy(pe))},reset:function(){N=!1,ve=null,ke.set(-1,0,0,0)}}}function n(){let N=!1,pe=!1,ve=null,ke=null,me=null;return{setReversed:function(L){if(pe!==L){const Ge=e.get("EXT_clip_control");L?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),pe=L;const ne=me;me=null,this.setClear(ne)}},getReversed:function(){return pe},setTest:function(L){L?fe(i.DEPTH_TEST):Le(i.DEPTH_TEST)},setMask:function(L){ve!==L&&!N&&(i.depthMask(L),ve=L)},setFunc:function(L){if(pe&&(L=G1[L]),ke!==L){switch(L){case hs:i.depthFunc(i.NEVER);break;case ps:i.depthFunc(i.ALWAYS);break;case ms:i.depthFunc(i.LESS);break;case ya:i.depthFunc(i.LEQUAL);break;case gs:i.depthFunc(i.EQUAL);break;case ys:i.depthFunc(i.GEQUAL);break;case _s:i.depthFunc(i.GREATER);break;case vs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ke=L}},setLocked:function(L){N=L},setClear:function(L){me!==L&&(pe&&(L=1-L),i.clearDepth(L),me=L)},reset:function(){N=!1,ve=null,ke=null,me=null,pe=!1}}}function a(){let N=!1,pe=null,ve=null,ke=null,me=null,L=null,Ge=null,ne=null,wt=null;return{setTest:function(vt){N||(vt?fe(i.STENCIL_TEST):Le(i.STENCIL_TEST))},setMask:function(vt){pe!==vt&&!N&&(i.stencilMask(vt),pe=vt)},setFunc:function(vt,Jt,gn){(ve!==vt||ke!==Jt||me!==gn)&&(i.stencilFunc(vt,Jt,gn),ve=vt,ke=Jt,me=gn)},setOp:function(vt,Jt,gn){(L!==vt||Ge!==Jt||ne!==gn)&&(i.stencilOp(vt,Jt,gn),L=vt,Ge=Jt,ne=gn)},setLocked:function(vt){N=vt},setClear:function(vt){wt!==vt&&(i.clearStencil(vt),wt=vt)},reset:function(){N=!1,pe=null,ve=null,ke=null,me=null,L=null,Ge=null,ne=null,wt=null}}}const o=new t,r=new n,s=new a,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,p=[],y=null,x=!1,m=null,u=null,T=null,E=null,S=null,P=null,C=null,I=new He(0,0,0),R=0,w=!1,b=null,D=null,H=null,Q=null,re=null;const ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ce=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(ee)[1]),oe=ce>=1):ee.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),oe=ce>=2);let xe=null,Me={};const Fe=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),_t=new Vt().fromArray(Fe),Qe=new Vt().fromArray(ot);function dt(N,pe,ve,ke){const me=new Uint8Array(4),L=i.createTexture();i.bindTexture(N,L),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<ve;Ge++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,ke,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(pe+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return L}const ae={};ae[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),s.setClear(0),fe(i.DEPTH_TEST),r.setFunc(ya),je(!1),Be(Wl),fe(i.CULL_FACE),rt(Qn);function fe(N){d[N]!==!0&&(i.enable(N),d[N]=!0)}function Le(N){d[N]!==!1&&(i.disable(N),d[N]=!1)}function $e(N,pe){return f[N]!==pe?(i.bindFramebuffer(N,pe),f[N]=pe,N===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=pe),N===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Oe(N,pe){let ve=p,ke=!1;if(N){ve=h.get(pe),ve===void 0&&(ve=[],h.set(pe,ve));const me=N.textures;if(ve.length!==me.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let L=0,Ge=me.length;L<Ge;L++)ve[L]=i.COLOR_ATTACHMENT0+L;ve.length=me.length,ke=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,ke=!0);ke&&i.drawBuffers(ve)}function ct(N){return y!==N?(i.useProgram(N),y=N,!0):!1}const Nt={[ki]:i.FUNC_ADD,[tu]:i.FUNC_SUBTRACT,[nu]:i.FUNC_REVERSE_SUBTRACT};Nt[iu]=i.MIN,Nt[au]=i.MAX;const A={[ou]:i.ZERO,[ru]:i.ONE,[su]:i.SRC_COLOR,[ds]:i.SRC_ALPHA,[hu]:i.SRC_ALPHA_SATURATE,[du]:i.DST_COLOR,[cu]:i.DST_ALPHA,[lu]:i.ONE_MINUS_SRC_COLOR,[us]:i.ONE_MINUS_SRC_ALPHA,[uu]:i.ONE_MINUS_DST_COLOR,[fu]:i.ONE_MINUS_DST_ALPHA,[pu]:i.CONSTANT_COLOR,[mu]:i.ONE_MINUS_CONSTANT_COLOR,[gu]:i.CONSTANT_ALPHA,[yu]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(N,pe,ve,ke,me,L,Ge,ne,wt,vt){if(N===Qn){x===!0&&(Le(i.BLEND),x=!1);return}if(x===!1&&(fe(i.BLEND),x=!0),N!==eu){if(N!==m||vt!==w){if((u!==ki||S!==ki)&&(i.blendEquation(i.FUNC_ADD),u=ki,S=ki),vt)switch(N){case xn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xt:i.blendFunc(i.ONE,i.ONE);break;case Xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case xn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case xt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Xl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,E=null,P=null,C=null,I.set(0,0,0),R=0,m=N,w=vt}return}me=me||pe,L=L||ve,Ge=Ge||ke,(pe!==u||me!==S)&&(i.blendEquationSeparate(Nt[pe],Nt[me]),u=pe,S=me),(ve!==T||ke!==E||L!==P||Ge!==C)&&(i.blendFuncSeparate(A[ve],A[ke],A[L],A[Ge]),T=ve,E=ke,P=L,C=Ge),(ne.equals(I)===!1||wt!==R)&&(i.blendColor(ne.r,ne.g,ne.b,wt),I.copy(ne),R=wt),m=N,w=!1}function et(N,pe){N.side===jn?Le(i.CULL_FACE):fe(i.CULL_FACE);let ve=N.side===pn;pe&&(ve=!ve),je(ve),N.blending===xn&&N.transparent===!1?rt(Qn):rt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),o.setMask(N.colorWrite);const ke=N.stencilWrite;s.setTest(ke),ke&&(s.setMask(N.stencilWriteMask),s.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),s.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ie(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):Le(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(N){b!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),b=N)}function Be(N){N!==jd?(fe(i.CULL_FACE),N!==D&&(N===Wl?i.cullFace(i.BACK):N===Jd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Le(i.CULL_FACE),D=N}function st(N){N!==H&&(oe&&i.lineWidth(N),H=N)}function Ie(N,pe,ve){N?(fe(i.POLYGON_OFFSET_FILL),(Q!==pe||re!==ve)&&(i.polygonOffset(pe,ve),Q=pe,re=ve)):Le(i.POLYGON_OFFSET_FILL)}function tt(N){N?fe(i.SCISSOR_TEST):Le(i.SCISSOR_TEST)}function se(N){N===void 0&&(N=i.TEXTURE0+ie-1),xe!==N&&(i.activeTexture(N),xe=N)}function we(N,pe,ve){ve===void 0&&(xe===null?ve=i.TEXTURE0+ie-1:ve=xe);let ke=Me[ve];ke===void 0&&(ke={type:void 0,texture:void 0},Me[ve]=ke),(ke.type!==N||ke.texture!==pe)&&(xe!==ve&&(i.activeTexture(ve),xe=ve),i.bindTexture(N,pe||ae[N]),ke.type=N,ke.texture=pe)}function _(){const N=Me[xe];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function De(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ue(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Se(N){_t.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),_t.copy(N))}function nt(N){Qe.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Qe.copy(N))}function ze(N,pe){let ve=c.get(pe);ve===void 0&&(ve=new WeakMap,c.set(pe,ve));let ke=ve.get(N);ke===void 0&&(ke=i.getUniformBlockIndex(pe,N.name),ve.set(N,ke))}function Te(N,pe){const ke=c.get(pe).get(N);l.get(pe)!==ke&&(i.uniformBlockBinding(pe,ke,N.__bindingPointIndex),l.set(pe,ke))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},xe=null,Me={},f={},h=new WeakMap,p=[],y=null,x=!1,m=null,u=null,T=null,E=null,S=null,P=null,C=null,I=new He(0,0,0),R=0,w=!1,b=null,D=null,H=null,Q=null,re=null,_t.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),s.reset()}return{buffers:{color:o,depth:r,stencil:s},enable:fe,disable:Le,bindFramebuffer:$e,drawBuffers:Oe,useProgram:ct,setBlending:rt,setMaterial:et,setFlipSided:je,setCullFace:Be,setLineWidth:st,setPolygonOffset:Ie,setScissorTest:tt,activeTexture:se,bindTexture:we,unbindTexture:_,compressedTexImage2D:g,compressedTexImage3D:O,texImage2D:De,texImage3D:ue,updateUBOMapping:ze,uniformBlockBinding:Te,texStorage2D:le,texStorage3D:Pe,texSubImage2D:J,texSubImage3D:te,compressedTexSubImage2D:q,compressedTexSubImage3D:$,scissor:Se,viewport:nt,reset:at}}function V1(i,e,t,n,a,o,r){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,d=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(_,g){return p?new OffscreenCanvas(_,g):ar("canvas")}function x(_,g,O){let J=1;const te=we(_);if((te.width>O||te.height>O)&&(J=O/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const q=Math.floor(J*te.width),$=Math.floor(J*te.height);f===void 0&&(f=y(q,$));const le=g?y(q,$):f;return le.width=q,le.height=$,le.getContext("2d").drawImage(_,0,0,q,$),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+q+"x"+$+")."),le}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),_;return _}function m(_){return _.generateMipmaps}function u(_){i.generateMipmap(_)}function T(_){return _.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?i.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(_,g,O,J,te=!1){if(_!==null){if(i[_]!==void 0)return i[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let q=g;if(g===i.RED&&(O===i.FLOAT&&(q=i.R32F),O===i.HALF_FLOAT&&(q=i.R16F),O===i.UNSIGNED_BYTE&&(q=i.R8)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.R8UI),O===i.UNSIGNED_SHORT&&(q=i.R16UI),O===i.UNSIGNED_INT&&(q=i.R32UI),O===i.BYTE&&(q=i.R8I),O===i.SHORT&&(q=i.R16I),O===i.INT&&(q=i.R32I)),g===i.RG&&(O===i.FLOAT&&(q=i.RG32F),O===i.HALF_FLOAT&&(q=i.RG16F),O===i.UNSIGNED_BYTE&&(q=i.RG8)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RG8UI),O===i.UNSIGNED_SHORT&&(q=i.RG16UI),O===i.UNSIGNED_INT&&(q=i.RG32UI),O===i.BYTE&&(q=i.RG8I),O===i.SHORT&&(q=i.RG16I),O===i.INT&&(q=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGB8UI),O===i.UNSIGNED_SHORT&&(q=i.RGB16UI),O===i.UNSIGNED_INT&&(q=i.RGB32UI),O===i.BYTE&&(q=i.RGB8I),O===i.SHORT&&(q=i.RGB16I),O===i.INT&&(q=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),O===i.UNSIGNED_INT&&(q=i.RGBA32UI),O===i.BYTE&&(q=i.RGBA8I),O===i.SHORT&&(q=i.RGBA16I),O===i.INT&&(q=i.RGBA32I)),g===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),g===i.RGBA){const $=te?nr:Et.getTransfer(J);O===i.FLOAT&&(q=i.RGBA32F),O===i.HALF_FLOAT&&(q=i.RGBA16F),O===i.UNSIGNED_BYTE&&(q=$===It?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function S(_,g){let O;return _?g===null||g===Bi||g===$a?O=i.DEPTH24_STENCIL8:g===Jn?O=i.DEPTH32F_STENCIL8:g===Ka&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Bi||g===$a?O=i.DEPTH_COMPONENT24:g===Jn?O=i.DEPTH_COMPONENT32F:g===Ka&&(O=i.DEPTH_COMPONENT16),O}function P(_,g){return m(_)===!0||_.isFramebufferTexture&&_.minFilter!==Un&&_.minFilter!==Bn?Math.log2(Math.max(g.width,g.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?g.mipmaps.length:1}function C(_){const g=_.target;g.removeEventListener("dispose",C),R(g),g.isVideoTexture&&d.delete(g)}function I(_){const g=_.target;g.removeEventListener("dispose",I),b(g)}function R(_){const g=n.get(_);if(g.__webglInit===void 0)return;const O=_.source,J=h.get(O);if(J){const te=J[g.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(_),Object.keys(J).length===0&&h.delete(O)}n.remove(_)}function w(_){const g=n.get(_);i.deleteTexture(g.__webglTexture);const O=_.source,J=h.get(O);delete J[g.__cacheKey],r.memory.textures--}function b(_){const g=n.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),n.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(g.__webglFramebuffer[J]))for(let te=0;te<g.__webglFramebuffer[J].length;te++)i.deleteFramebuffer(g.__webglFramebuffer[J][te]);else i.deleteFramebuffer(g.__webglFramebuffer[J]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[J])}else{if(Array.isArray(g.__webglFramebuffer))for(let J=0;J<g.__webglFramebuffer.length;J++)i.deleteFramebuffer(g.__webglFramebuffer[J]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let J=0;J<g.__webglColorRenderbuffer.length;J++)g.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[J]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=_.textures;for(let J=0,te=O.length;J<te;J++){const q=n.get(O[J]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),r.memory.textures--),n.remove(O[J])}n.remove(_)}let D=0;function H(){D=0}function Q(){const _=D;return _>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+a.maxTextures),D+=1,_}function re(_){const g=[];return g.push(_.wrapS),g.push(_.wrapT),g.push(_.wrapR||0),g.push(_.magFilter),g.push(_.minFilter),g.push(_.anisotropy),g.push(_.internalFormat),g.push(_.format),g.push(_.type),g.push(_.generateMipmaps),g.push(_.premultiplyAlpha),g.push(_.flipY),g.push(_.unpackAlignment),g.push(_.colorSpace),g.join()}function ie(_,g){const O=n.get(_);if(_.isVideoTexture&&tt(_),_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&O.__version!==_.version){const J=_.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(O,_,g);return}}else _.isExternalTexture&&(O.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function oe(_,g){const O=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&O.__version!==_.version){ae(O,_,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function ce(_,g){const O=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&O.__version!==_.version){ae(O,_,g);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function ee(_,g){const O=n.get(_);if(_.version>0&&O.__version!==_.version){fe(O,_,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}const xe={[Oi]:i.REPEAT,[yi]:i.CLAMP_TO_EDGE,[Ms]:i.MIRRORED_REPEAT},Me={[Un]:i.NEAREST,[xu]:i.NEAREST_MIPMAP_NEAREST,[go]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[Pr]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},Fe={[Tu]:i.NEVER,[Lu]:i.ALWAYS,[Eu]:i.LESS,[bf]:i.LEQUAL,[Au]:i.EQUAL,[Pu]:i.GEQUAL,[Cu]:i.GREATER,[Ru]:i.NOTEQUAL};function ot(_,g){if(g.type===Jn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Bn||g.magFilter===Pr||g.magFilter===go||g.magFilter===Fi||g.minFilter===Bn||g.minFilter===Pr||g.minFilter===go||g.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(_,i.TEXTURE_WRAP_S,xe[g.wrapS]),i.texParameteri(_,i.TEXTURE_WRAP_T,xe[g.wrapT]),(_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY)&&i.texParameteri(_,i.TEXTURE_WRAP_R,xe[g.wrapR]),i.texParameteri(_,i.TEXTURE_MAG_FILTER,Me[g.magFilter]),i.texParameteri(_,i.TEXTURE_MIN_FILTER,Me[g.minFilter]),g.compareFunction&&(i.texParameteri(_,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(_,i.TEXTURE_COMPARE_FUNC,Fe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===Un||g.minFilter!==go&&g.minFilter!==Fi||g.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(_,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function _t(_,g){let O=!1;_.__webglInit===void 0&&(_.__webglInit=!0,g.addEventListener("dispose",C));const J=g.source;let te=h.get(J);te===void 0&&(te={},h.set(J,te));const q=re(g);if(q!==_.__cacheKey){te[q]===void 0&&(te[q]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,O=!0),te[q].usedTimes++;const $=te[_.__cacheKey];$!==void 0&&(te[_.__cacheKey].usedTimes--,$.usedTimes===0&&w(g)),_.__cacheKey=q,_.__webglTexture=te[q].texture}return O}function Qe(_,g,O){return Math.floor(Math.floor(_/O)/g)}function dt(_,g,O,J){const q=_.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,J,g.data);else{q.sort((ue,Se)=>ue.start-Se.start);let $=0;for(let ue=1;ue<q.length;ue++){const Se=q[$],nt=q[ue],ze=Se.start+Se.count,Te=Qe(nt.start,g.width,4),at=Qe(Se.start,g.width,4);nt.start<=ze+1&&Te===at&&Qe(nt.start+nt.count-1,g.width,4)===Te?Se.count=Math.max(Se.count,nt.start+nt.count-Se.start):(++$,q[$]=nt)}q.length=$+1;const le=i.getParameter(i.UNPACK_ROW_LENGTH),Pe=i.getParameter(i.UNPACK_SKIP_PIXELS),De=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let ue=0,Se=q.length;ue<Se;ue++){const nt=q[ue],ze=Math.floor(nt.start/4),Te=Math.ceil(nt.count/4),at=ze%g.width,N=Math.floor(ze/g.width),pe=Te,ve=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,at),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,at,N,pe,ve,O,J,g.data)}_.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pe),i.pixelStorei(i.UNPACK_SKIP_ROWS,De)}}function ae(_,g,O){let J=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(J=i.TEXTURE_3D);const te=_t(_,g),q=g.source;t.bindTexture(J,_.__webglTexture,i.TEXTURE0+O);const $=n.get(q);if(q.version!==$.__version||te===!0){t.activeTexture(i.TEXTURE0+O);const le=Et.getPrimaries(Et.workingColorSpace),Pe=g.colorSpace===gi?null:Et.getPrimaries(g.colorSpace),De=g.colorSpace===gi||le===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let ue=x(g.image,!1,a.maxTextureSize);ue=se(g,ue);const Se=o.convert(g.format,g.colorSpace),nt=o.convert(g.type);let ze=E(g.internalFormat,Se,nt,g.colorSpace,g.isVideoTexture);ot(J,g);let Te;const at=g.mipmaps,N=g.isVideoTexture!==!0,pe=$.__version===void 0||te===!0,ve=q.dataReady,ke=P(g,ue);if(g.isDepthTexture)ze=S(g.format===Ja,g.type),pe&&(N?t.texStorage2D(i.TEXTURE_2D,1,ze,ue.width,ue.height):t.texImage2D(i.TEXTURE_2D,0,ze,ue.width,ue.height,0,Se,nt,null));else if(g.isDataTexture)if(at.length>0){N&&pe&&t.texStorage2D(i.TEXTURE_2D,ke,ze,at[0].width,at[0].height);for(let me=0,L=at.length;me<L;me++)Te=at[me],N?ve&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Te.width,Te.height,Se,nt,Te.data):t.texImage2D(i.TEXTURE_2D,me,ze,Te.width,Te.height,0,Se,nt,Te.data);g.generateMipmaps=!1}else N?(pe&&t.texStorage2D(i.TEXTURE_2D,ke,ze,ue.width,ue.height),ve&&dt(g,ue,Se,nt)):t.texImage2D(i.TEXTURE_2D,0,ze,ue.width,ue.height,0,Se,nt,ue.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){N&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,ze,at[0].width,at[0].height,ue.depth);for(let me=0,L=at.length;me<L;me++)if(Te=at[me],g.format!==In)if(Se!==null)if(N){if(ve)if(g.layerUpdates.size>0){const Ge=xc(Te.width,Te.height,g.format,g.type);for(const ne of g.layerUpdates){const wt=Te.data.subarray(ne*Ge/Te.data.BYTES_PER_ELEMENT,(ne+1)*Ge/Te.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,ne,Te.width,Te.height,1,Se,wt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Te.width,Te.height,ue.depth,Se,Te.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,ze,Te.width,Te.height,ue.depth,0,Te.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Te.width,Te.height,ue.depth,Se,nt,Te.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,ze,Te.width,Te.height,ue.depth,0,Se,nt,Te.data)}else{N&&pe&&t.texStorage2D(i.TEXTURE_2D,ke,ze,at[0].width,at[0].height);for(let me=0,L=at.length;me<L;me++)Te=at[me],g.format!==In?Se!==null?N?ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,Te.width,Te.height,Se,Te.data):t.compressedTexImage2D(i.TEXTURE_2D,me,ze,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ve&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Te.width,Te.height,Se,nt,Te.data):t.texImage2D(i.TEXTURE_2D,me,ze,Te.width,Te.height,0,Se,nt,Te.data)}else if(g.isDataArrayTexture)if(N){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ke,ze,ue.width,ue.height,ue.depth),ve)if(g.layerUpdates.size>0){const me=xc(ue.width,ue.height,g.format,g.type);for(const L of g.layerUpdates){const Ge=ue.data.subarray(L*me/ue.data.BYTES_PER_ELEMENT,(L+1)*me/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,L,ue.width,ue.height,1,Se,nt,Ge)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,Se,nt,ue.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,ue.width,ue.height,ue.depth,0,Se,nt,ue.data);else if(g.isData3DTexture)N?(pe&&t.texStorage3D(i.TEXTURE_3D,ke,ze,ue.width,ue.height,ue.depth),ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,Se,nt,ue.data)):t.texImage3D(i.TEXTURE_3D,0,ze,ue.width,ue.height,ue.depth,0,Se,nt,ue.data);else if(g.isFramebufferTexture){if(pe)if(N)t.texStorage2D(i.TEXTURE_2D,ke,ze,ue.width,ue.height);else{let me=ue.width,L=ue.height;for(let Ge=0;Ge<ke;Ge++)t.texImage2D(i.TEXTURE_2D,Ge,ze,me,L,0,Se,nt,null),me>>=1,L>>=1}}else if(at.length>0){if(N&&pe){const me=we(at[0]);t.texStorage2D(i.TEXTURE_2D,ke,ze,me.width,me.height)}for(let me=0,L=at.length;me<L;me++)Te=at[me],N?ve&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Se,nt,Te):t.texImage2D(i.TEXTURE_2D,me,ze,Se,nt,Te);g.generateMipmaps=!1}else if(N){if(pe){const me=we(ue);t.texStorage2D(i.TEXTURE_2D,ke,ze,me.width,me.height)}ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se,nt,ue)}else t.texImage2D(i.TEXTURE_2D,0,ze,Se,nt,ue);m(g)&&u(J),$.__version=q.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function fe(_,g,O){if(g.image.length!==6)return;const J=_t(_,g),te=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture,i.TEXTURE0+O);const q=n.get(te);if(te.version!==q.__version||J===!0){t.activeTexture(i.TEXTURE0+O);const $=Et.getPrimaries(Et.workingColorSpace),le=g.colorSpace===gi?null:Et.getPrimaries(g.colorSpace),Pe=g.colorSpace===gi||$===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const De=g.isCompressedTexture||g.image[0].isCompressedTexture,ue=g.image[0]&&g.image[0].isDataTexture,Se=[];for(let L=0;L<6;L++)!De&&!ue?Se[L]=x(g.image[L],!0,a.maxCubemapSize):Se[L]=ue?g.image[L].image:g.image[L],Se[L]=se(g,Se[L]);const nt=Se[0],ze=o.convert(g.format,g.colorSpace),Te=o.convert(g.type),at=E(g.internalFormat,ze,Te,g.colorSpace),N=g.isVideoTexture!==!0,pe=q.__version===void 0||J===!0,ve=te.dataReady;let ke=P(g,nt);ot(i.TEXTURE_CUBE_MAP,g);let me;if(De){N&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,at,nt.width,nt.height);for(let L=0;L<6;L++){me=Se[L].mipmaps;for(let Ge=0;Ge<me.length;Ge++){const ne=me[Ge];g.format!==In?ze!==null?N?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ge,0,0,ne.width,ne.height,ze,ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ge,at,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ge,0,0,ne.width,ne.height,ze,Te,ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ge,at,ne.width,ne.height,0,ze,Te,ne.data)}}}else{if(me=g.mipmaps,N&&pe){me.length>0&&ke++;const L=we(Se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ke,at,L.width,L.height)}for(let L=0;L<6;L++)if(ue){N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,Se[L].width,Se[L].height,ze,Te,Se[L].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,at,Se[L].width,Se[L].height,0,ze,Te,Se[L].data);for(let Ge=0;Ge<me.length;Ge++){const wt=me[Ge].image[L].image;N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ge+1,0,0,wt.width,wt.height,ze,Te,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ge+1,at,wt.width,wt.height,0,ze,Te,wt.data)}}else{N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,ze,Te,Se[L]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,at,ze,Te,Se[L]);for(let Ge=0;Ge<me.length;Ge++){const ne=me[Ge];N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ge+1,0,0,ze,Te,ne.image[L]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ge+1,at,ze,Te,ne.image[L])}}}m(g)&&u(i.TEXTURE_CUBE_MAP),q.__version=te.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function Le(_,g,O,J,te,q){const $=o.convert(O.format,O.colorSpace),le=o.convert(O.type),Pe=E(O.internalFormat,$,le,O.colorSpace),De=n.get(g),ue=n.get(O);if(ue.__renderTarget=g,!De.__hasExternalTextures){const Se=Math.max(1,g.width>>q),nt=Math.max(1,g.height>>q);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,q,Pe,Se,nt,g.depth,0,$,le,null):t.texImage2D(te,q,Pe,Se,nt,0,$,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,_),Ie(g)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,te,ue.__webglTexture,0,st(g)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,te,ue.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(_,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,_),g.depthBuffer){const J=g.depthTexture,te=J&&J.isDepthTexture?J.type:null,q=S(g.stencilBuffer,te),$=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=st(g);Ie(g)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,q,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,q,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,q,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,_)}else{const J=g.textures;for(let te=0;te<J.length;te++){const q=J[te],$=o.convert(q.format,q.colorSpace),le=o.convert(q.type),Pe=E(q.internalFormat,$,le,q.colorSpace),De=st(g);O&&Ie(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,De,Pe,g.width,g.height):Ie(g)?s.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,De,Pe,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Pe,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(_,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,_),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(g.depthTexture);J.__renderTarget=g,(!J.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ie(g.depthTexture,0);const te=J.__webglTexture,q=st(g);if(g.depthTexture.format===ja)Ie(g)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(g.depthTexture.format===Ja)Ie(g)?s.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ct(_){const g=n.get(_),O=_.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==_.depthTexture){const J=_.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),J){const te=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),g.__depthDisposeCallback=te}g.__boundDepthTexture=J}if(_.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const J=_.texture.mipmaps;J&&J.length>0?Oe(g.__webglFramebuffer[0],_):Oe(g.__webglFramebuffer,_)}else if(O){g.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[J]),g.__webglDepthbuffer[J]===void 0)g.__webglDepthbuffer[J]=i.createRenderbuffer(),$e(g.__webglDepthbuffer[J],_,!1);else{const te=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,q)}}else{const J=_.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),$e(g.__webglDepthbuffer,_,!1);else{const te=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(_,g,O){const J=n.get(_);g!==void 0&&Le(J.__webglFramebuffer,_,_.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ct(_)}function A(_){const g=_.texture,O=n.get(_),J=n.get(g);_.addEventListener("dispose",I);const te=_.textures,q=_.isWebGLCubeRenderTarget===!0,$=te.length>1;if($||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=g.version,r.memory.textures++),q){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let Pe=0;Pe<g.mipmaps.length;Pe++)O.__webglFramebuffer[le][Pe]=i.createFramebuffer()}else O.__webglFramebuffer[le]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<g.mipmaps.length;le++)O.__webglFramebuffer[le]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if($)for(let le=0,Pe=te.length;le<Pe;le++){const De=n.get(te[le]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),r.memory.textures++)}if(_.samples>0&&Ie(_)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){const Pe=te[le];O.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[le]);const De=o.convert(Pe.format,Pe.colorSpace),ue=o.convert(Pe.type),Se=E(Pe.internalFormat,De,ue,Pe.colorSpace,_.isXRRenderTarget===!0),nt=st(_);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Se,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,O.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),_.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),$e(O.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ot(i.TEXTURE_CUBE_MAP,g);for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0)for(let Pe=0;Pe<g.mipmaps.length;Pe++)Le(O.__webglFramebuffer[le][Pe],_,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Pe);else Le(O.__webglFramebuffer[le],_,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(g)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if($){for(let le=0,Pe=te.length;le<Pe;le++){const De=te[le],ue=n.get(De);let Se=i.TEXTURE_2D;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(Se=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Se,ue.__webglTexture),ot(Se,De),Le(O.__webglFramebuffer,_,De,i.COLOR_ATTACHMENT0+le,Se,0),m(De)&&u(Se)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(le=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,J.__webglTexture),ot(le,g),g.mipmaps&&g.mipmaps.length>0)for(let Pe=0;Pe<g.mipmaps.length;Pe++)Le(O.__webglFramebuffer[Pe],_,g,i.COLOR_ATTACHMENT0,le,Pe);else Le(O.__webglFramebuffer,_,g,i.COLOR_ATTACHMENT0,le,0);m(g)&&u(le),t.unbindTexture()}_.depthBuffer&&ct(_)}function rt(_){const g=_.textures;for(let O=0,J=g.length;O<J;O++){const te=g[O];if(m(te)){const q=T(_),$=n.get(te).__webglTexture;t.bindTexture(q,$),u(q),t.unbindTexture()}}}const et=[],je=[];function Be(_){if(_.samples>0){if(Ie(_)===!1){const g=_.textures,O=_.width,J=_.height;let te=i.COLOR_BUFFER_BIT;const q=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=n.get(_),le=g.length>1;if(le)for(let De=0;De<g.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,$.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer);const Pe=_.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let De=0;De<g.length;De++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,$.__webglColorRenderbuffer[De]);const ue=n.get(g[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ue,0)}i.blitFramebuffer(0,0,O,J,0,0,O,J,te,i.NEAREST),l===!0&&(et.length=0,je.length=0,et.push(i.COLOR_ATTACHMENT0+De),_.depthBuffer&&_.resolveDepthBuffer===!1&&(et.push(q),je.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,je)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let De=0;De<g.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,$.__webglColorRenderbuffer[De]);const ue=n.get(g[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,$.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){const g=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function st(_){return Math.min(a.maxSamples,_.samples)}function Ie(_){const g=n.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function tt(_){const g=r.render.frame;d.get(_)!==g&&(d.set(_,g),_.update())}function se(_,g){const O=_.colorSpace,J=_.format,te=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||O!==xa&&O!==gi&&(Et.getTransfer(O)===It?(J!==In||te!==ni)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),g}function we(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=H,this.setTexture2D=ie,this.setTexture2DArray=oe,this.setTexture3D=ce,this.setTextureCube=ee,this.rebindTextures=Nt,this.setupRenderTarget=A,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=ct,this.setupFrameBufferTexture=Le,this.useMultisampledRTT=Ie}function W1(i,e){function t(n,a=gi){let o;const r=Et.getTransfer(a);if(n===ni)return i.UNSIGNED_BYTE;if(n===hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===pl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===mf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===gf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hf)return i.BYTE;if(n===pf)return i.SHORT;if(n===Ka)return i.UNSIGNED_SHORT;if(n===ul)return i.INT;if(n===Bi)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===ei)return i.HALF_FLOAT;if(n===yf)return i.ALPHA;if(n===_f)return i.RGB;if(n===In)return i.RGBA;if(n===ja)return i.DEPTH_COMPONENT;if(n===Ja)return i.DEPTH_STENCIL;if(n===vf)return i.RED;if(n===ml)return i.RED_INTEGER;if(n===xf)return i.RG;if(n===gl)return i.RG_INTEGER;if(n===yl)return i.RGBA_INTEGER;if(n===Ko||n===$o||n===jo||n===Jo)if(r===It)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ko)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$o)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Jo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ko)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$o)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===jo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Jo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ws||n===Ss||n===Ts||n===Es)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ws)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ss)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ts)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Es)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===As||n===Cs||n===Rs)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===As||n===Cs)return r===It?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Rs)return r===It?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ps||n===Ls||n===Is||n===Ds||n===Us||n===ks||n===Ns||n===Fs||n===Os||n===Bs||n===zs||n===Gs||n===Hs||n===Vs)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===Ps)return r===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ls)return r===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Is)return r===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ds)return r===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Us)return r===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ks)return r===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ns)return r===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Fs)return r===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Os)return r===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bs)return r===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zs)return r===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gs)return r===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Hs)return r===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Vs)return r===It?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ws||n===Xs||n===Ys)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Ws)return r===It?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xs)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ys)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qs||n===Zs||n===Ks||n===$s)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===qs)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Zs)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ks)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$s)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===$a?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const X1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y1=`
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

}`;class q1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Nf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new hn({vertexShader:X1,fragmentShader:Y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new On(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z1 extends Aa{constructor(e,t){super();const n=this;let a=null,o=1,r=null,s="local-floor",l=1,c=null,d=null,f=null,h=null,p=null,y=null;const x=typeof XRWebGLBinding<"u",m=new q1,u={},T=t.getContextAttributes();let E=null,S=null;const P=[],C=[],I=new Je;let R=null;const w=new Tn;w.viewport=new Vt;const b=new Tn;b.viewport=new Vt;const D=[w,b],H=new hh;let Q=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let fe=P[ae];return fe===void 0&&(fe=new Qr,P[ae]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ae){let fe=P[ae];return fe===void 0&&(fe=new Qr,P[ae]=fe),fe.getGripSpace()},this.getHand=function(ae){let fe=P[ae];return fe===void 0&&(fe=new Qr,P[ae]=fe),fe.getHandSpace()};function ie(ae){const fe=C.indexOf(ae.inputSource);if(fe===-1)return;const Le=P[fe];Le!==void 0&&(Le.update(ae.inputSource,ae.frame,c||r),Le.dispatchEvent({type:ae.type,data:ae.inputSource}))}function oe(){a.removeEventListener("select",ie),a.removeEventListener("selectstart",ie),a.removeEventListener("selectend",ie),a.removeEventListener("squeeze",ie),a.removeEventListener("squeezestart",ie),a.removeEventListener("squeezeend",ie),a.removeEventListener("end",oe),a.removeEventListener("inputsourceschange",ce);for(let ae=0;ae<P.length;ae++){const fe=C[ae];fe!==null&&(C[ae]=null,P[ae].disconnect(fe))}Q=null,re=null,m.reset();for(const ae in u)delete u[ae];e.setRenderTarget(E),p=null,h=null,f=null,a=null,S=null,dt.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){o=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){s=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(a,t)),f},this.getFrame=function(){return y},this.getSession=function(){return a},this.setSession=async function(ae){if(a=ae,a!==null){if(E=e.getRenderTarget(),a.addEventListener("select",ie),a.addEventListener("selectstart",ie),a.addEventListener("selectend",ie),a.addEventListener("squeeze",ie),a.addEventListener("squeezestart",ie),a.addEventListener("squeezeend",ie),a.addEventListener("end",oe),a.addEventListener("inputsourceschange",ce),T.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(I),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Le=null,$e=null,Oe=null;T.depth&&(Oe=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Le=T.stencil?Ja:ja,$e=T.stencil?$a:Bi);const ct={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:o};f=this.getBinding(),h=f.createProjectionLayer(ct),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new kn(h.textureWidth,h.textureHeight,{format:In,type:ni,depthTexture:new kf(h.textureWidth,h.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,Le),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Le={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(a,t,Le),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new kn(p.framebufferWidth,p.framebufferHeight,{format:In,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await a.requestReferenceSpace(s),dt.setContext(a),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ce(ae){for(let fe=0;fe<ae.removed.length;fe++){const Le=ae.removed[fe],$e=C.indexOf(Le);$e>=0&&(C[$e]=null,P[$e].disconnect(Le))}for(let fe=0;fe<ae.added.length;fe++){const Le=ae.added[fe];let $e=C.indexOf(Le);if($e===-1){for(let ct=0;ct<P.length;ct++)if(ct>=C.length){C.push(Le),$e=ct;break}else if(C[ct]===null){C[ct]=Le,$e=ct;break}if($e===-1)break}const Oe=P[$e];Oe&&Oe.connect(Le)}}const ee=new k,xe=new k;function Me(ae,fe,Le){ee.setFromMatrixPosition(fe.matrixWorld),xe.setFromMatrixPosition(Le.matrixWorld);const $e=ee.distanceTo(xe),Oe=fe.projectionMatrix.elements,ct=Le.projectionMatrix.elements,Nt=Oe[14]/(Oe[10]-1),A=Oe[14]/(Oe[10]+1),rt=(Oe[9]+1)/Oe[5],et=(Oe[9]-1)/Oe[5],je=(Oe[8]-1)/Oe[0],Be=(ct[8]+1)/ct[0],st=Nt*je,Ie=Nt*Be,tt=$e/(-je+Be),se=tt*-je;if(fe.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(se),ae.translateZ(tt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Oe[10]===-1)ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const we=Nt+tt,_=A+tt,g=st-se,O=Ie+($e-se),J=rt*A/_*we,te=et*A/_*we;ae.projectionMatrix.makePerspective(g,O,J,te,we,_),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function Fe(ae,fe){fe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(fe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(a===null)return;let fe=ae.near,Le=ae.far;m.texture!==null&&(m.depthNear>0&&(fe=m.depthNear),m.depthFar>0&&(Le=m.depthFar)),H.near=b.near=w.near=fe,H.far=b.far=w.far=Le,(Q!==H.near||re!==H.far)&&(a.updateRenderState({depthNear:H.near,depthFar:H.far}),Q=H.near,re=H.far),H.layers.mask=ae.layers.mask|6,w.layers.mask=H.layers.mask&3,b.layers.mask=H.layers.mask&5;const $e=ae.parent,Oe=H.cameras;Fe(H,$e);for(let ct=0;ct<Oe.length;ct++)Fe(Oe[ct],$e);Oe.length===2?Me(H,w,b):H.projectionMatrix.copy(w.projectionMatrix),ot(ae,H,$e)};function ot(ae,fe,Le){Le===null?ae.matrix.copy(fe.matrixWorld):(ae.matrix.copy(Le.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(fe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Js*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ae){l=ae,h!==null&&(h.fixedFoveation=ae),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ae)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(ae){return u[ae]};let _t=null;function Qe(ae,fe){if(d=fe.getViewerPose(c||r),y=fe,d!==null){const Le=d.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let $e=!1;Le.length!==H.cameras.length&&(H.cameras.length=0,$e=!0);for(let A=0;A<Le.length;A++){const rt=Le[A];let et=null;if(p!==null)et=p.getViewport(rt);else{const Be=f.getViewSubImage(h,rt);et=Be.viewport,A===0&&(e.setRenderTargetTextures(S,Be.colorTexture,Be.depthStencilTexture),e.setRenderTarget(S))}let je=D[A];je===void 0&&(je=new Tn,je.layers.enable(A),je.viewport=new Vt,D[A]=je),je.matrix.fromArray(rt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(rt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(et.x,et.y,et.width,et.height),A===0&&(H.matrix.copy(je.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),$e===!0&&H.cameras.push(je)}const Oe=a.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&x){f=n.getBinding();const A=f.getDepthInformation(Le[0]);A&&A.isValid&&A.texture&&m.init(A,a.renderState)}if(Oe&&Oe.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let A=0;A<Le.length;A++){const rt=Le[A].camera;if(rt){let et=u[rt];et||(et=new Nf,u[rt]=et);const je=f.getCameraImage(rt);et.sourceTexture=je}}}}for(let Le=0;Le<P.length;Le++){const $e=C[Le],Oe=P[Le];$e!==null&&Oe!==void 0&&Oe.update($e,fe,c||r)}_t&&_t(ae,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),y=null}const dt=new Of;dt.setAnimationLoop(Qe),this.setAnimationLoop=function(ae){_t=ae},this.dispose=function(){}}}const Ii=new ii,K1=new Gt;function $1(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Cf(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function a(m,u,T,E,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?o(m,u):u.isMeshToonMaterial?(o(m,u),f(m,u)):u.isMeshPhongMaterial?(o(m,u),d(m,u)):u.isMeshStandardMaterial?(o(m,u),h(m,u),u.isMeshPhysicalMaterial&&p(m,u,S)):u.isMeshMatcapMaterial?(o(m,u),y(m,u)):u.isMeshDepthMaterial?o(m,u):u.isMeshDistanceMaterial?(o(m,u),x(m,u)):u.isMeshNormalMaterial?o(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&s(m,u)):u.isPointsMaterial?l(m,u,T,E):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function o(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===pn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===pn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const T=e.get(u),E=T.envMap,S=T.envMapRotation;E&&(m.envMap.value=E,Ii.copy(S),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(K1.makeRotationFromEuler(Ii)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function s(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,T,E){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*T,m.scale.value=E*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function h(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,T){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===pn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const T=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function j1(i,e,t,n){let a={},o={},r=[];const s=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const S=E.program;n.uniformBlockBinding(T,S)}function c(T,E){let S=a[T.id];S===void 0&&(y(T),S=d(T),a[T.id]=S,T.addEventListener("dispose",m));const P=E.program;n.updateUBOMapping(T,P);const C=e.render.frame;o[T.id]!==C&&(h(T),o[T.id]=C)}function d(T){const E=f();T.__bindingPointIndex=E;const S=i.createBuffer(),P=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,P,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function f(){for(let T=0;T<s;T++)if(r.indexOf(T)===-1)return r.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const E=a[T.id],S=T.uniforms,P=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,I=S.length;C<I;C++){const R=Array.isArray(S[C])?S[C]:[S[C]];for(let w=0,b=R.length;w<b;w++){const D=R[w];if(p(D,C,w,P)===!0){const H=D.__offset,Q=Array.isArray(D.value)?D.value:[D.value];let re=0;for(let ie=0;ie<Q.length;ie++){const oe=Q[ie],ce=x(oe);typeof oe=="number"||typeof oe=="boolean"?(D.__data[0]=oe,i.bufferSubData(i.UNIFORM_BUFFER,H+re,D.__data)):oe.isMatrix3?(D.__data[0]=oe.elements[0],D.__data[1]=oe.elements[1],D.__data[2]=oe.elements[2],D.__data[3]=0,D.__data[4]=oe.elements[3],D.__data[5]=oe.elements[4],D.__data[6]=oe.elements[5],D.__data[7]=0,D.__data[8]=oe.elements[6],D.__data[9]=oe.elements[7],D.__data[10]=oe.elements[8],D.__data[11]=0):(oe.toArray(D.__data,re),re+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,D.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,E,S,P){const C=T.value,I=E+"_"+S;if(P[I]===void 0)return typeof C=="number"||typeof C=="boolean"?P[I]=C:P[I]=C.clone(),!0;{const R=P[I];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return P[I]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function y(T){const E=T.uniforms;let S=0;const P=16;for(let I=0,R=E.length;I<R;I++){const w=Array.isArray(E[I])?E[I]:[E[I]];for(let b=0,D=w.length;b<D;b++){const H=w[b],Q=Array.isArray(H.value)?H.value:[H.value];for(let re=0,ie=Q.length;re<ie;re++){const oe=Q[re],ce=x(oe),ee=S%P,xe=ee%ce.boundary,Me=ee+xe;S+=xe,Me!==0&&P-Me<ce.storage&&(S+=P-Me),H.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=ce.storage}}}const C=S%P;return C>0&&(S+=P-C),T.__size=S,T.__cache={},this}function x(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const S=r.indexOf(E.__bindingPointIndex);r.splice(S,1),i.deleteBuffer(a[E.id]),delete a[E.id],delete o[E.id]}function u(){for(const T in a)i.deleteBuffer(a[T]);r=[],a={},o={}}return{bind:l,update:c,dispose:u}}class J1{constructor(e={}){const{canvas:t=Du(),context:n=null,depth:a=!0,stencil:o=!1,alpha:r=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const y=new Uint32Array(4),x=new Int32Array(4);let m=null,u=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_i,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let P=!1;this._outputColorSpace=un;let C=0,I=0,R=null,w=-1,b=null;const D=new Vt,H=new Vt;let Q=null;const re=new He(0);let ie=0,oe=t.width,ce=t.height,ee=1,xe=null,Me=null;const Fe=new Vt(0,0,oe,ce),ot=new Vt(0,0,oe,ce);let _t=!1;const Qe=new If;let dt=!1,ae=!1;const fe=new Gt,Le=new k,$e=new Vt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function Nt(){return R===null?ee:1}let A=n;function rt(M,z){return t.getContext(M,z)}try{const M={alpha:!0,depth:a,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${fl}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",me,!1),A===null){const z="webgl2";if(A=rt(z,M),A===null)throw rt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let et,je,Be,st,Ie,tt,se,we,_,g,O,J,te,q,$,le,Pe,De,ue,Se,nt,ze,Te,at;function N(){et=new lm(A),et.init(),ze=new W1(A,et),je=new tm(A,et,e,ze),Be=new H1(A,et),je.reversedDepthBuffer&&h&&Be.buffers.depth.setReversed(!0),st=new dm(A),Ie=new R1,tt=new V1(A,et,Be,Ie,je,ze,st),se=new im(S),we=new sm(S),_=new yh(A),Te=new Q0(A,_),g=new cm(A,_,st,Te),O=new hm(A,g,_,st),ue=new um(A,je,tt),le=new nm(Ie),J=new C1(S,se,we,et,je,Te,le),te=new $1(S,Ie),q=new L1,$=new F1(et),De=new J0(S,se,we,Be,O,p,l),Pe=new z1(S,O,je),at=new j1(A,st,je,Be),Se=new em(A,et,st),nt=new fm(A,et,st),st.programs=J.programs,S.capabilities=je,S.extensions=et,S.properties=Ie,S.renderLists=q,S.shadowMap=Pe,S.state=Be,S.info=st}N();const pe=new Z1(S,A);this.xr=pe,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const M=et.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=et.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(M){M!==void 0&&(ee=M,this.setSize(oe,ce,!1))},this.getSize=function(M){return M.set(oe,ce)},this.setSize=function(M,z,Z=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=M,ce=z,t.width=Math.floor(M*ee),t.height=Math.floor(z*ee),Z===!0&&(t.style.width=M+"px",t.style.height=z+"px"),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(oe*ee,ce*ee).floor()},this.setDrawingBufferSize=function(M,z,Z){oe=M,ce=z,ee=Z,t.width=Math.floor(M*Z),t.height=Math.floor(z*Z),this.setViewport(0,0,M,z)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(Fe)},this.setViewport=function(M,z,Z,K){M.isVector4?Fe.set(M.x,M.y,M.z,M.w):Fe.set(M,z,Z,K),Be.viewport(D.copy(Fe).multiplyScalar(ee).round())},this.getScissor=function(M){return M.copy(ot)},this.setScissor=function(M,z,Z,K){M.isVector4?ot.set(M.x,M.y,M.z,M.w):ot.set(M,z,Z,K),Be.scissor(H.copy(ot).multiplyScalar(ee).round())},this.getScissorTest=function(){return _t},this.setScissorTest=function(M){Be.setScissorTest(_t=M)},this.setOpaqueSort=function(M){xe=M},this.setTransparentSort=function(M){Me=M},this.getClearColor=function(M){return M.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(M=!0,z=!0,Z=!0){let K=0;if(M){let G=!1;if(R!==null){const de=R.texture.format;G=de===yl||de===gl||de===ml}if(G){const de=R.texture.type,be=de===ni||de===Bi||de===Ka||de===$a||de===hl||de===pl,Re=De.getClearColor(),Ee=De.getClearAlpha(),qe=Re.r,it=Re.g,Ye=Re.b;be?(y[0]=qe,y[1]=it,y[2]=Ye,y[3]=Ee,A.clearBufferuiv(A.COLOR,0,y)):(x[0]=qe,x[1]=it,x[2]=Ye,x[3]=Ee,A.clearBufferiv(A.COLOR,0,x))}else K|=A.COLOR_BUFFER_BIT}z&&(K|=A.DEPTH_BUFFER_BIT),Z&&(K|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",me,!1),De.dispose(),q.dispose(),$.dispose(),Ie.dispose(),se.dispose(),we.dispose(),O.dispose(),Te.dispose(),at.dispose(),J.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",gn),pe.removeEventListener("sessionend",An),yn.stop()};function ve(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const M=st.autoReset,z=Pe.enabled,Z=Pe.autoUpdate,K=Pe.needsUpdate,G=Pe.type;N(),st.autoReset=M,Pe.enabled=z,Pe.autoUpdate=Z,Pe.needsUpdate=K,Pe.type=G}function me(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function L(M){const z=M.target;z.removeEventListener("dispose",L),Ge(z)}function Ge(M){ne(M),Ie.remove(M)}function ne(M){const z=Ie.get(M).programs;z!==void 0&&(z.forEach(function(Z){J.releaseProgram(Z)}),M.isShaderMaterial&&J.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,Z,K,G,de){z===null&&(z=Oe);const be=G.isMesh&&G.matrixWorld.determinant()<0,Re=gr(M,z,Z,K,G);Be.setMaterial(K,be);let Ee=Z.index,qe=1;if(K.wireframe===!0){if(Ee=g.getWireframeAttribute(Z),Ee===void 0)return;qe=2}const it=Z.drawRange,Ye=Z.attributes.position;let ht=it.start*qe,Ct=(it.start+it.count)*qe;de!==null&&(ht=Math.max(ht,de.start*qe),Ct=Math.min(Ct,(de.start+de.count)*qe)),Ee!==null?(ht=Math.max(ht,0),Ct=Math.min(Ct,Ee.count)):Ye!=null&&(ht=Math.max(ht,0),Ct=Math.min(Ct,Ye.count));const Ft=Ct-ht;if(Ft<0||Ft===1/0)return;Te.setup(G,K,Re,Z,Ee);let St,At=Se;if(Ee!==null&&(St=_.get(Ee),At=nt,At.setIndex(St)),G.isMesh)K.wireframe===!0?(Be.setLineWidth(K.wireframeLinewidth*Nt()),At.setMode(A.LINES)):At.setMode(A.TRIANGLES);else if(G.isLine){let Ze=K.linewidth;Ze===void 0&&(Ze=1),Be.setLineWidth(Ze*Nt()),G.isLineSegments?At.setMode(A.LINES):G.isLineLoop?At.setMode(A.LINE_LOOP):At.setMode(A.LINE_STRIP)}else G.isPoints?At.setMode(A.POINTS):G.isSprite&&At.setMode(A.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)Qa("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))At.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Ze=G._multiDrawStarts,Tt=G._multiDrawCounts,pt=G._multiDrawCount,nn=Ee?_.get(Ee).bytesPerElement:1,W=Ie.get(K).currentProgram.getUniforms();for(let X=0;X<pt;X++)W.setValue(A,"_gl_DrawID",X),At.render(Ze[X]/nn,Tt[X])}else if(G.isInstancedMesh)At.renderInstances(ht,Ft,G.count);else if(Z.isInstancedBufferGeometry){const Ze=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Tt=Math.min(Z.instanceCount,Ze);At.renderInstances(ht,Ft,Tt)}else At.render(ht,Ft)};function wt(M,z,Z){M.transparent===!0&&M.side===jn&&M.forceSinglePass===!1?(M.side=pn,M.needsUpdate=!0,ci(M,z,Z),M.side=Mi,M.needsUpdate=!0,ci(M,z,Z),M.side=jn):ci(M,z,Z)}this.compile=function(M,z,Z=null){Z===null&&(Z=M),u=$.get(Z),u.init(z),E.push(u),Z.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(u.pushLight(G),G.castShadow&&u.pushShadow(G))}),M!==Z&&M.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(u.pushLight(G),G.castShadow&&u.pushShadow(G))}),u.setupLights();const K=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const de=G.material;if(de)if(Array.isArray(de))for(let be=0;be<de.length;be++){const Re=de[be];wt(Re,Z,G),K.add(Re)}else wt(de,Z,G),K.add(de)}),u=E.pop(),K},this.compileAsync=function(M,z,Z=null){const K=this.compile(M,z,Z);return new Promise(G=>{function de(){if(K.forEach(function(be){Ie.get(be).currentProgram.isReady()&&K.delete(be)}),K.size===0){G(M);return}setTimeout(de,10)}et.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let vt=null;function Jt(M){vt&&vt(M)}function gn(){yn.stop()}function An(){yn.start()}const yn=new Of;yn.setAnimationLoop(Jt),typeof self<"u"&&yn.setContext(self),this.setAnimationLoop=function(M){vt=M,pe.setAnimationLoop(M),M===null?yn.stop():yn.start()},pe.addEventListener("sessionstart",gn),pe.addEventListener("sessionend",An),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(z),z=pe.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,z,R),u=$.get(M,E.length),u.init(z),E.push(u),fe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Qe.setFromProjectionMatrix(fe,zn,z.reversedDepth),ae=this.localClippingEnabled,dt=le.init(this.clippingPlanes,ae),m=q.get(M,T.length),m.init(),T.push(m),pe.enabled===!0&&pe.isPresenting===!0){const de=S.xr.getDepthSensingMesh();de!==null&&oi(de,z,-1/0,S.sortObjects)}oi(M,z,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(xe,Me),ct=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,ct&&De.addToRenderList(m,M),this.info.render.frame++,dt===!0&&le.beginShadows();const Z=u.state.shadowsArray;Pe.render(Z,M,z),dt===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,G=m.transmissive;if(u.setupLights(),z.isArrayCamera){const de=z.cameras;if(G.length>0)for(let be=0,Re=de.length;be<Re;be++){const Ee=de[be];si(K,G,M,Ee)}ct&&De.render(M);for(let be=0,Re=de.length;be<Re;be++){const Ee=de[be];ri(m,M,Ee,Ee.viewport)}}else G.length>0&&si(K,G,M,z),ct&&De.render(M),ri(m,M,z);R!==null&&I===0&&(tt.updateMultisampleRenderTarget(R),tt.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(S,M,z),Te.resetDefaultState(),w=-1,b=null,E.pop(),E.length>0?(u=E[E.length-1],dt===!0&&le.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function oi(M,z,Z,K){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)Z=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Qe.intersectsSprite(M)){K&&$e.setFromMatrixPosition(M.matrixWorld).applyMatrix4(fe);const be=O.update(M),Re=M.material;Re.visible&&m.push(M,be,Re,Z,$e.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Qe.intersectsObject(M))){const be=O.update(M),Re=M.material;if(K&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),$e.copy(M.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),$e.copy(be.boundingSphere.center)),$e.applyMatrix4(M.matrixWorld).applyMatrix4(fe)),Array.isArray(Re)){const Ee=be.groups;for(let qe=0,it=Ee.length;qe<it;qe++){const Ye=Ee[qe],ht=Re[Ye.materialIndex];ht&&ht.visible&&m.push(M,be,ht,Z,$e.z,Ye)}}else Re.visible&&m.push(M,be,Re,Z,$e.z,null)}}const de=M.children;for(let be=0,Re=de.length;be<Re;be++)oi(de[be],z,Z,K)}function ri(M,z,Z,K){const G=M.opaque,de=M.transmissive,be=M.transparent;u.setupLightsView(Z),dt===!0&&le.setGlobalState(S.clippingPlanes,Z),K&&Be.viewport(D.copy(K)),G.length>0&&li(G,z,Z),de.length>0&&li(de,z,Z),be.length>0&&li(be,z,Z),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function si(M,z,Z,K){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[K.id]===void 0&&(u.state.transmissionRenderTarget[K.id]=new kn(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?ei:ni,minFilter:Fi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const de=u.state.transmissionRenderTarget[K.id],be=K.viewport||D;de.setSize(be.z*S.transmissionResolutionScale,be.w*S.transmissionResolutionScale);const Re=S.getRenderTarget(),Ee=S.getActiveCubeFace(),qe=S.getActiveMipmapLevel();S.setRenderTarget(de),S.getClearColor(re),ie=S.getClearAlpha(),ie<1&&S.setClearColor(16777215,.5),S.clear(),ct&&De.render(Z);const it=S.toneMapping;S.toneMapping=_i;const Ye=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),u.setupLightsView(K),dt===!0&&le.setGlobalState(S.clippingPlanes,K),li(M,Z,K),tt.updateMultisampleRenderTarget(de),tt.updateRenderTargetMipmap(de),et.has("WEBGL_multisampled_render_to_texture")===!1){let ht=!1;for(let Ct=0,Ft=z.length;Ct<Ft;Ct++){const St=z[Ct],At=St.object,Ze=St.geometry,Tt=St.material,pt=St.group;if(Tt.side===jn&&At.layers.test(K.layers)){const nn=Tt.side;Tt.side=pn,Tt.needsUpdate=!0,Ti(At,Z,K,Ze,Tt,pt),Tt.side=nn,Tt.needsUpdate=!0,ht=!0}}ht===!0&&(tt.updateMultisampleRenderTarget(de),tt.updateRenderTargetMipmap(de))}S.setRenderTarget(Re,Ee,qe),S.setClearColor(re,ie),Ye!==void 0&&(K.viewport=Ye),S.toneMapping=it}function li(M,z,Z){const K=z.isScene===!0?z.overrideMaterial:null;for(let G=0,de=M.length;G<de;G++){const be=M[G],Re=be.object,Ee=be.geometry,qe=be.group;let it=be.material;it.allowOverride===!0&&K!==null&&(it=K),Re.layers.test(Z.layers)&&Ti(Re,z,Z,Ee,it,qe)}}function Ti(M,z,Z,K,G,de){M.onBeforeRender(S,z,Z,K,G,de),M.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(S,z,Z,K,M,de),G.transparent===!0&&G.side===jn&&G.forceSinglePass===!1?(G.side=pn,G.needsUpdate=!0,S.renderBufferDirect(Z,z,K,G,M,de),G.side=Mi,G.needsUpdate=!0,S.renderBufferDirect(Z,z,K,G,M,de),G.side=jn):S.renderBufferDirect(Z,z,K,G,M,de),M.onAfterRender(S,z,Z,K,G,de)}function ci(M,z,Z){z.isScene!==!0&&(z=Oe);const K=Ie.get(M),G=u.state.lights,de=u.state.shadowsArray,be=G.state.version,Re=J.getParameters(M,G.state,de,z,Z),Ee=J.getProgramCacheKey(Re);let qe=K.programs;K.environment=M.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(M.isMeshStandardMaterial?we:se).get(M.envMap||K.environment),K.envMapRotation=K.environment!==null&&M.envMap===null?z.environmentRotation:M.envMapRotation,qe===void 0&&(M.addEventListener("dispose",L),qe=new Map,K.programs=qe);let it=qe.get(Ee);if(it!==void 0){if(K.currentProgram===it&&K.lightsStateVersion===be)return Da(M,Re),it}else Re.uniforms=J.getUniforms(M),M.onBeforeCompile(Re,S),it=J.acquireProgram(Re,Ee),qe.set(Ee,it),K.uniforms=Re.uniforms;const Ye=K.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ye.clippingPlanes=le.uniform),Da(M,Re),K.needsLights=yr(M),K.lightsStateVersion=be,K.needsLights&&(Ye.ambientLightColor.value=G.state.ambient,Ye.lightProbe.value=G.state.probe,Ye.directionalLights.value=G.state.directional,Ye.directionalLightShadows.value=G.state.directionalShadow,Ye.spotLights.value=G.state.spot,Ye.spotLightShadows.value=G.state.spotShadow,Ye.rectAreaLights.value=G.state.rectArea,Ye.ltc_1.value=G.state.rectAreaLTC1,Ye.ltc_2.value=G.state.rectAreaLTC2,Ye.pointLights.value=G.state.point,Ye.pointLightShadows.value=G.state.pointShadow,Ye.hemisphereLights.value=G.state.hemi,Ye.directionalShadowMap.value=G.state.directionalShadowMap,Ye.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ye.spotShadowMap.value=G.state.spotShadowMap,Ye.spotLightMatrix.value=G.state.spotLightMatrix,Ye.spotLightMap.value=G.state.spotLightMap,Ye.pointShadowMap.value=G.state.pointShadowMap,Ye.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=it,K.uniformsList=null,it}function Wi(M){if(M.uniformsList===null){const z=M.currentProgram.getUniforms();M.uniformsList=Qo.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function Da(M,z){const Z=Ie.get(M);Z.outputColorSpace=z.outputColorSpace,Z.batching=z.batching,Z.batchingColor=z.batchingColor,Z.instancing=z.instancing,Z.instancingColor=z.instancingColor,Z.instancingMorph=z.instancingMorph,Z.skinning=z.skinning,Z.morphTargets=z.morphTargets,Z.morphNormals=z.morphNormals,Z.morphColors=z.morphColors,Z.morphTargetsCount=z.morphTargetsCount,Z.numClippingPlanes=z.numClippingPlanes,Z.numIntersection=z.numClipIntersection,Z.vertexAlphas=z.vertexAlphas,Z.vertexTangents=z.vertexTangents,Z.toneMapping=z.toneMapping}function gr(M,z,Z,K,G){z.isScene!==!0&&(z=Oe),tt.resetTextureUnits();const de=z.fog,be=K.isMeshStandardMaterial?z.environment:null,Re=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:xa,Ee=(K.isMeshStandardMaterial?we:se).get(K.envMap||be),qe=K.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,it=!!Z.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ye=!!Z.morphAttributes.position,ht=!!Z.morphAttributes.normal,Ct=!!Z.morphAttributes.color;let Ft=_i;K.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ft=S.toneMapping);const St=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,At=St!==void 0?St.length:0,Ze=Ie.get(K),Tt=u.state.lights;if(dt===!0&&(ae===!0||M!==b)){const en=M===b&&K.id===w;le.setState(K,M,en)}let pt=!1;K.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Tt.state.version||Ze.outputColorSpace!==Re||G.isBatchedMesh&&Ze.batching===!1||!G.isBatchedMesh&&Ze.batching===!0||G.isBatchedMesh&&Ze.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ze.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ze.instancing===!1||!G.isInstancedMesh&&Ze.instancing===!0||G.isSkinnedMesh&&Ze.skinning===!1||!G.isSkinnedMesh&&Ze.skinning===!0||G.isInstancedMesh&&Ze.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ze.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ze.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ze.instancingMorph===!1&&G.morphTexture!==null||Ze.envMap!==Ee||K.fog===!0&&Ze.fog!==de||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==le.numPlanes||Ze.numIntersection!==le.numIntersection)||Ze.vertexAlphas!==qe||Ze.vertexTangents!==it||Ze.morphTargets!==Ye||Ze.morphNormals!==ht||Ze.morphColors!==Ct||Ze.toneMapping!==Ft||Ze.morphTargetsCount!==At)&&(pt=!0):(pt=!0,Ze.__version=K.version);let nn=Ze.currentProgram;pt===!0&&(nn=ci(K,z,G));let W=!1,X=!1,Rt=!1;const Ut=nn.getUniforms(),_n=Ze.uniforms;if(Be.useProgram(nn.program)&&(W=!0,X=!0,Rt=!0),K.id!==w&&(w=K.id,X=!0),W||b!==M){Be.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Ut.setValue(A,"projectionMatrix",M.projectionMatrix),Ut.setValue(A,"viewMatrix",M.matrixWorldInverse);const an=Ut.map.cameraPosition;an!==void 0&&an.setValue(A,Le.setFromMatrixPosition(M.matrixWorld)),je.logarithmicDepthBuffer&&Ut.setValue(A,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ut.setValue(A,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,X=!0,Rt=!0)}if(G.isSkinnedMesh){Ut.setOptional(A,G,"bindMatrix"),Ut.setOptional(A,G,"bindMatrixInverse");const en=G.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),Ut.setValue(A,"boneTexture",en.boneTexture,tt))}G.isBatchedMesh&&(Ut.setOptional(A,G,"batchingTexture"),Ut.setValue(A,"batchingTexture",G._matricesTexture,tt),Ut.setOptional(A,G,"batchingIdTexture"),Ut.setValue(A,"batchingIdTexture",G._indirectTexture,tt),Ut.setOptional(A,G,"batchingColorTexture"),G._colorsTexture!==null&&Ut.setValue(A,"batchingColorTexture",G._colorsTexture,tt));const vn=Z.morphAttributes;if((vn.position!==void 0||vn.normal!==void 0||vn.color!==void 0)&&ue.update(G,Z,nn),(X||Ze.receiveShadow!==G.receiveShadow)&&(Ze.receiveShadow=G.receiveShadow,Ut.setValue(A,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(_n.envMap.value=Ee,_n.flipEnvMap.value=Ee.isCubeTexture&&Ee.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(_n.envMapIntensity.value=z.environmentIntensity),X&&(Ut.setValue(A,"toneMappingExposure",S.toneMappingExposure),Ze.needsLights&&lo(_n,Rt),de&&K.fog===!0&&te.refreshFogUniforms(_n,de),te.refreshMaterialUniforms(_n,K,ee,ce,u.state.transmissionRenderTarget[M.id]),Qo.upload(A,Wi(Ze),_n,tt)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Qo.upload(A,Wi(Ze),_n,tt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ut.setValue(A,"center",G.center),Ut.setValue(A,"modelViewMatrix",G.modelViewMatrix),Ut.setValue(A,"normalMatrix",G.normalMatrix),Ut.setValue(A,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const en=K.uniformsGroups;for(let an=0,ka=en.length;an<ka;an++){const Hn=en[an];at.update(Hn,nn),at.bind(Hn,nn)}}return nn}function lo(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function yr(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,z,Z){const K=Ie.get(M);K.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Ie.get(M.texture).__webglTexture=z,Ie.get(M.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Z,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,z){const Z=Ie.get(M);Z.__webglFramebuffer=z,Z.__useDefaultFramebuffer=z===void 0};const _r=A.createFramebuffer();this.setRenderTarget=function(M,z=0,Z=0){R=M,C=z,I=Z;let K=!0,G=null,de=!1,be=!1;if(M){const Ee=Ie.get(M);if(Ee.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(A.FRAMEBUFFER,null),K=!1;else if(Ee.__webglFramebuffer===void 0)tt.setupRenderTarget(M);else if(Ee.__hasExternalTextures)tt.rebindTextures(M,Ie.get(M.texture).__webglTexture,Ie.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ye=M.depthTexture;if(Ee.__boundDepthTexture!==Ye){if(Ye!==null&&Ie.has(Ye)&&(M.width!==Ye.image.width||M.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(M)}}const qe=M.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(be=!0);const it=Ie.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(it[z])?G=it[z][Z]:G=it[z],de=!0):M.samples>0&&tt.useMultisampledRTT(M)===!1?G=Ie.get(M).__webglMultisampledFramebuffer:Array.isArray(it)?G=it[Z]:G=it,D.copy(M.viewport),H.copy(M.scissor),Q=M.scissorTest}else D.copy(Fe).multiplyScalar(ee).floor(),H.copy(ot).multiplyScalar(ee).floor(),Q=_t;if(Z!==0&&(G=_r),Be.bindFramebuffer(A.FRAMEBUFFER,G)&&K&&Be.drawBuffers(M,G),Be.viewport(D),Be.scissor(H),Be.setScissorTest(Q),de){const Ee=Ie.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ee.__webglTexture,Z)}else if(be){const Ee=z;for(let qe=0;qe<M.textures.length;qe++){const it=Ie.get(M.textures[qe]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+qe,it.__webglTexture,Z,Ee)}}else if(M!==null&&Z!==0){const Ee=Ie.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ee.__webglTexture,Z)}w=-1},this.readRenderTargetPixels=function(M,z,Z,K,G,de,be,Re=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Ie.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&be!==void 0&&(Ee=Ee[be]),Ee){Be.bindFramebuffer(A.FRAMEBUFFER,Ee);try{const qe=M.textures[Re],it=qe.format,Ye=qe.type;if(!je.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-K&&Z>=0&&Z<=M.height-G&&(M.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Re),A.readPixels(z,Z,K,G,ze.convert(it),ze.convert(Ye),de))}finally{const qe=R!==null?Ie.get(R).__webglFramebuffer:null;Be.bindFramebuffer(A.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(M,z,Z,K,G,de,be,Re=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Ie.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&be!==void 0&&(Ee=Ee[be]),Ee)if(z>=0&&z<=M.width-K&&Z>=0&&Z<=M.height-G){Be.bindFramebuffer(A.FRAMEBUFFER,Ee);const qe=M.textures[Re],it=qe.format,Ye=qe.type;if(!je.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,ht),A.bufferData(A.PIXEL_PACK_BUFFER,de.byteLength,A.STREAM_READ),M.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Re),A.readPixels(z,Z,K,G,ze.convert(it),ze.convert(Ye),0);const Ct=R!==null?Ie.get(R).__webglFramebuffer:null;Be.bindFramebuffer(A.FRAMEBUFFER,Ct);const Ft=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await Uu(A,Ft,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,ht),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,de),A.deleteBuffer(ht),A.deleteSync(Ft),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,z=null,Z=0){const K=Math.pow(2,-Z),G=Math.floor(M.image.width*K),de=Math.floor(M.image.height*K),be=z!==null?z.x:0,Re=z!==null?z.y:0;tt.setTexture2D(M,0),A.copyTexSubImage2D(A.TEXTURE_2D,Z,0,0,be,Re,G,de),Be.unbindTexture()};const vr=A.createFramebuffer(),Ua=A.createFramebuffer();this.copyTextureToTexture=function(M,z,Z=null,K=null,G=0,de=null){de===null&&(G!==0?(Qa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),de=G,G=0):de=0);let be,Re,Ee,qe,it,Ye,ht,Ct,Ft;const St=M.isCompressedTexture?M.mipmaps[de]:M.image;if(Z!==null)be=Z.max.x-Z.min.x,Re=Z.max.y-Z.min.y,Ee=Z.isBox3?Z.max.z-Z.min.z:1,qe=Z.min.x,it=Z.min.y,Ye=Z.isBox3?Z.min.z:0;else{const vn=Math.pow(2,-G);be=Math.floor(St.width*vn),Re=Math.floor(St.height*vn),M.isDataArrayTexture?Ee=St.depth:M.isData3DTexture?Ee=Math.floor(St.depth*vn):Ee=1,qe=0,it=0,Ye=0}K!==null?(ht=K.x,Ct=K.y,Ft=K.z):(ht=0,Ct=0,Ft=0);const At=ze.convert(z.format),Ze=ze.convert(z.type);let Tt;z.isData3DTexture?(tt.setTexture3D(z,0),Tt=A.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(tt.setTexture2DArray(z,0),Tt=A.TEXTURE_2D_ARRAY):(tt.setTexture2D(z,0),Tt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,z.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,z.unpackAlignment);const pt=A.getParameter(A.UNPACK_ROW_LENGTH),nn=A.getParameter(A.UNPACK_IMAGE_HEIGHT),W=A.getParameter(A.UNPACK_SKIP_PIXELS),X=A.getParameter(A.UNPACK_SKIP_ROWS),Rt=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,St.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,St.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,qe),A.pixelStorei(A.UNPACK_SKIP_ROWS,it),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ye);const Ut=M.isDataArrayTexture||M.isData3DTexture,_n=z.isDataArrayTexture||z.isData3DTexture;if(M.isDepthTexture){const vn=Ie.get(M),en=Ie.get(z),an=Ie.get(vn.__renderTarget),ka=Ie.get(en.__renderTarget);Be.bindFramebuffer(A.READ_FRAMEBUFFER,an.__webglFramebuffer),Be.bindFramebuffer(A.DRAW_FRAMEBUFFER,ka.__webglFramebuffer);for(let Hn=0;Hn<Ee;Hn++)Ut&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ie.get(M).__webglTexture,G,Ye+Hn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,Ie.get(z).__webglTexture,de,Ft+Hn)),A.blitFramebuffer(qe,it,be,Re,ht,Ct,be,Re,A.DEPTH_BUFFER_BIT,A.NEAREST);Be.bindFramebuffer(A.READ_FRAMEBUFFER,null),Be.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||Ie.has(M)){const vn=Ie.get(M),en=Ie.get(z);Be.bindFramebuffer(A.READ_FRAMEBUFFER,vr),Be.bindFramebuffer(A.DRAW_FRAMEBUFFER,Ua);for(let an=0;an<Ee;an++)Ut?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,vn.__webglTexture,G,Ye+an):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,vn.__webglTexture,G),_n?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,en.__webglTexture,de,Ft+an):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,en.__webglTexture,de),G!==0?A.blitFramebuffer(qe,it,be,Re,ht,Ct,be,Re,A.COLOR_BUFFER_BIT,A.NEAREST):_n?A.copyTexSubImage3D(Tt,de,ht,Ct,Ft+an,qe,it,be,Re):A.copyTexSubImage2D(Tt,de,ht,Ct,qe,it,be,Re);Be.bindFramebuffer(A.READ_FRAMEBUFFER,null),Be.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else _n?M.isDataTexture||M.isData3DTexture?A.texSubImage3D(Tt,de,ht,Ct,Ft,be,Re,Ee,At,Ze,St.data):z.isCompressedArrayTexture?A.compressedTexSubImage3D(Tt,de,ht,Ct,Ft,be,Re,Ee,At,St.data):A.texSubImage3D(Tt,de,ht,Ct,Ft,be,Re,Ee,At,Ze,St):M.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,de,ht,Ct,be,Re,At,Ze,St.data):M.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,de,ht,Ct,St.width,St.height,At,St.data):A.texSubImage2D(A.TEXTURE_2D,de,ht,Ct,be,Re,At,Ze,St);A.pixelStorei(A.UNPACK_ROW_LENGTH,pt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,nn),A.pixelStorei(A.UNPACK_SKIP_PIXELS,W),A.pixelStorei(A.UNPACK_SKIP_ROWS,X),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Rt),de===0&&z.generateMipmaps&&A.generateMipmap(Tt),Be.unbindTexture()},this.initRenderTarget=function(M){Ie.get(M).__webglFramebuffer===void 0&&tt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?tt.setTextureCube(M,0):M.isData3DTexture?tt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?tt.setTexture2DArray(M,0):tt.setTexture2D(M,0),Be.unbindTexture()},this.resetState=function(){C=0,I=0,R=null,Be.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}const er={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ra{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Q1=new Ff(-1,1,1,-1,0,1);class eg extends Wt{constructor(){super(),this.setAttribute("position",new Bt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Bt([0,2,0,0,2,0],2))}}const tg=new eg;class Sl{constructor(e){this._mesh=new Pt(tg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Q1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ng extends Ra{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof hn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=eo.clone(e.uniforms),this.material=new hn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Sl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Xc extends Ra{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const a=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,s;this.inverse?(r=0,s=1):(r=1,s=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),o.buffers.stencil.setFunc(a.ALWAYS,r,4294967295),o.buffers.stencil.setClear(s),o.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(a.EQUAL,1,4294967295),o.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),o.buffers.stencil.setLocked(!0)}}class ig extends Ra{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class ag{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Je);this._width=n.width,this._height=n.height,t=new kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ei}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ng(er),this.copyPass.material.blending=Qn,this.clock=new ph}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let a=0,o=this.passes.length;a<o;a++){const r=this.passes[a];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}Xc!==void 0&&(r instanceof Xc?n=!0:r instanceof ig&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Je);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(n,a),this.renderTarget2.setSize(n,a);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class og extends Ra{constructor(e,t,n=null,a=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=a,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new He}render(e,t,n){const a=e.autoClear;e.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),e.autoClear=a}}const rg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new He(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ma extends Ra{constructor(e,t=1,n,a){super(),this.strength=t,this.radius=n,this.threshold=a,this.resolution=e!==void 0?new Je(e.x,e.y):new Je(256,256),this.clearColor=new He(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new kn(o,r,{type:ei}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const f=new kn(o,r,{type:ei});f.texture.name="UnrealBloomPass.h"+d,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const h=new kn(o,r,{type:ei});h.texture.name="UnrealBloomPass.v"+d,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),o=Math.round(o/2),r=Math.round(r/2)}const s=rg;this.highPassUniforms=eo.clone(s.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new hn({uniforms:this.highPassUniforms,vertexShader:s.vertexShader,fragmentShader:s.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new Je(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=eo.clone(er.uniforms),this.blendMaterial=new hn({uniforms:this.copyUniforms,vertexShader:er.vertexShader,fragmentShader:er.fragmentShader,blending:xt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new He,this._oldClearAlpha=1,this._basic=new qt,this._fsQuad=new Sl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),a=Math.round(t/2);this.renderTargetBright.setSize(n,a);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,a),this.renderTargetsVertical[o].setSize(n,a),this.separableBlurMaterials[o].uniforms.invSize.value=new Je(1/n,1/a),n=Math.round(n/2),a=Math.round(a/2)}render(e,t,n,a,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const r=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let s=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ma.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ma.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),s=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=r}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new hn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Je(.5,.5)},direction:{value:new Je(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new hn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ma.BlurDirectionX=new Je(1,0);Ma.BlurDirectionY=new Je(0,1);const Wo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class sg extends Ra{constructor(){super(),this.uniforms=eo.clone(Wo.uniforms),this.material=new fh({name:Wo.name,uniforms:this.uniforms,vertexShader:Wo.vertexShader,fragmentShader:Wo.fragmentShader}),this._fsQuad=new Sl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Et.getTransfer(this._outputColorSpace)===It&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===rf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===sf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===lf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===dl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ff?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===df?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===cf&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function Pa(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function La(i){const e=new Uf(i);return e.colorSpace=un,e.anisotropy=4,e}function lg(){const[i,e]=Pa(1024,512),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#02040c"),t.addColorStop(.34,"#06152c"),t.addColorStop(.56,"#123a60"),t.addColorStop(.72,"#5c8cae"),t.addColorStop(.82,"#a8c6d8"),t.addColorStop(1,"#0b2438"),e.fillStyle=t,e.fillRect(0,0,1024,512);const n=e.createLinearGradient(0,350,0,470);n.addColorStop(0,"rgba(210,235,255,0)"),n.addColorStop(.55,"rgba(200,228,247,.28)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,340,1024,140);for(let a=0;a<26;a++){const o=Math.random()*1100-40,r=190+Math.random()*190,s=40+Math.random()*150,l=e.createRadialGradient(o,r,0,o,r,s);l.addColorStop(0,`rgba(7,16,30,${.16+Math.random()*.24})`),l.addColorStop(.6,`rgba(10,22,40,${.1+Math.random()*.14})`),l.addColorStop(1,"rgba(10,22,40,0)"),e.fillStyle=l,e.beginPath(),e.arc(o,r,s,0,Math.PI*2),e.fill()}return La(i)}function cg(){const[i,e]=Pa(512,512),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"rgba(45,100,145,.48)"),t.addColorStop(.42,"rgba(22,59,96,.62)"),t.addColorStop(1,"rgba(5,20,38,.9)"),e.fillStyle=t,e.fillRect(0,0,512,512);for(let a=0;a<170;a++){const o=Math.random()*512,r=.03+Math.random()*.12;e.strokeStyle=`rgba(180,225,250,${r})`,e.lineWidth=1+Math.random()*2.5,e.beginPath(),e.moveTo(Math.random()*512,o),e.quadraticCurveTo(Math.random()*512,o+5,Math.random()*512,o),e.stroke()}for(let a=0;a<20;a++){const o=40+Math.random()*420,r=Math.random()*512,s=10+Math.random()*55;e.strokeStyle=`rgba(210,240,255,${.04+Math.random()*.07})`,e.lineWidth=2,e.beginPath(),e.ellipse(r,o,s,s*.18,0,0,Math.PI*2),e.stroke()}const n=La(i);return n.wrapS=n.wrapT=Oi,n.repeat.set(4,4),n}function fg(){const[i,e]=Pa(128,128);e.translate(64,64);const t=e.createRadialGradient(0,0,4,0,0,62);t.addColorStop(0,"rgba(255,255,255,.3)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(0,0,62,0,Math.PI*2),e.fill();for(let a=0;a<6;a++){e.save(),e.rotate(a/6*Math.PI*2);const o=e.createRadialGradient(0,-18,2,0,-18,24);o.addColorStop(0,"rgba(255,255,255,.98)"),o.addColorStop(.7,"rgba(240,247,255,.9)"),o.addColorStop(1,"rgba(210,235,255,0)"),e.fillStyle=o,e.beginPath(),e.ellipse(0,-22,13,24,0,0,Math.PI*2),e.fill(),e.restore()}const n=e.createRadialGradient(0,0,0,0,0,13);return n.addColorStop(0,"#fff8d0"),n.addColorStop(.5,"#ffd166"),n.addColorStop(1,"rgba(255,190,60,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,13,0,Math.PI*2),e.fill(),La(i)}function dg(){const[i,e]=Pa(256,128);for(let t=0;t<10;t++){const n=40+Math.random()*176,a=45+Math.random()*40,o=24+Math.random()*46,r=e.createRadialGradient(n,a,1,n,a,o);r.addColorStop(0,"rgba(40,66,95,.6)"),r.addColorStop(.55,"rgba(24,44,68,.35)"),r.addColorStop(1,"rgba(16,30,50,0)"),e.fillStyle=r,e.beginPath(),e.arc(n,a,o,0,Math.PI*2),e.fill()}return La(i)}function ug(){const[i,e]=Pa(256,256);e.translate(128,128);const t=e.createRadialGradient(0,0,0,0,0,124);t.addColorStop(0,"rgba(255,244,190,.9)"),t.addColorStop(.3,"rgba(255,210,105,.42)"),t.addColorStop(1,"rgba(255,190,80,0)"),e.fillStyle=t,e.beginPath(),e.arc(0,0,124,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,248,215,.98)",e.shadowColor="#ffd166",e.shadowBlur=26,e.beginPath();for(let n=0;n<8;n++){const a=n/8*Math.PI*2,o=n%2===0?92:23;e.lineTo(Math.cos(a-Math.PI/2)*o,Math.sin(a-Math.PI/2)*o)}return e.closePath(),e.fill(),e.shadowBlur=0,e.fillStyle="#fff9e0",e.beginPath(),e.arc(0,0,15,0,Math.PI*2),e.fill(),La(i)}function hg(){const[i,e]=Pa(128,128),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.2,"rgba(255,255,255,.7)"),t.addColorStop(.6,"rgba(255,255,255,.15)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),La(i)}function pg({scene:i,camera:e,lanes:t,stage:n,TEX:a}){const o=new Yt;o.name="intentionStage",o.visible=!1,i.add(o);const r={sky:lg(),ocean:cg(),flower:fg(),cloud:dg(),star:ug(),glow:hg()},s={world:0,void:0,flowers:0,pillars:0,halo:0,memory:0,bright:0,glitch:0,active:!1,phase:"off",portrait:!1},l={world:0,void:0,flowers:0,pillars:0,halo:0,memory:0,bright:0},c={off:{},preview:{world:.72,void:.3,flowers:.55,bright:.5},void:{world:0,void:1,flowers:0,bright:.35},ocean:{world:1,void:.42,flowers:.58,bright:.55},spin:{world:1,void:.34,flowers:.55,bright:.5},field:{world:1,void:.34,flowers:.62,bright:.55},pillars:{world:1,void:.3,flowers:.68,pillars:1,bright:.68},halo:{world:1,void:.26,flowers:.7,pillars:1,halo:1,bright:.74},dark:{world:.16,void:.5,flowers:.12,pillars:.5,halo:.15,bright:.25},guilt:{world:0,void:.06,flowers:0,pillars:0,halo:0,bright:.2},offbeat:{world:0,void:.22,flowers:0,bright:.25},fastbeat:{world:0,void:.22,flowers:0,bright:.25},ocean2:{world:.92,void:.3,flowers:.7,pillars:.25,halo:.18,bright:.55},memory:{world:.95,void:.3,flowers:.8,pillars:.3,halo:.22,memory:1,bright:.62},static:{world:.9,void:.38,flowers:.6,pillars:.3,halo:.16,memory:.4,bright:.5},determined:{world:1,void:.2,flowers:1.12,pillars:.6,halo:.5,bright:1},white:{world:.2,void:.1,flowers:.2,bright:1},fake:{world:0,void:.16,flowers:0,bright:.2},dawn:{world:1,void:.22,flowers:1.5,pillars:.12,halo:.8,memory:.2,bright:1.15}},d=new qt({map:r.sky,side:pn,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),f=new Pt(new Ya(190,32,18),d);f.renderOrder=-30,o.add(f);const h=new qt({map:r.ocean,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),p=new Pt(new On(340,260),h);p.rotation.x=-Math.PI/2,p.position.set(0,-5.6,-72),p.renderOrder=-20,o.add(p);const y=[];for(let se=0;se<16;se++){const we=new mt({map:r.cloud,color:se%3?8101050:4020856,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),_=new yt(we),g=se%2?1:-1;_.position.set(g*(16+Math.random()*74),6+Math.random()*30,-62-Math.random()*80);const O=30+Math.random()*62;_.scale.set(O,O*.4,1),_.renderOrder=-18,o.add(_),y.push({sprite:_,mat:we,base:.24+Math.random()*.24,phase:Math.random()*6.28,x:_.position.x,sx:O,sy:O*.4})}const x=340,m=new Float32Array(x*3),u=new Float32Array(x*3),T=new Float32Array(x*3),E=new Float32Array(x),S=[new He(16777215),new He(16771572),new He(16773832),new He(14216447)];for(let se=0;se<x;se++){const we=(Math.random()-.5)*140,_=-12-Math.random()*118,g=-5.32+Math.random()*.22;T[se*3]=we,T[se*3+1]=g,T[se*3+2]=_,m[se*3]=we,m[se*3+1]=g,m[se*3+2]=_;const O=S[se%S.length];u[se*3]=O.r,u[se*3+1]=O.g,u[se*3+2]=O.b,E[se]=Math.random()*6.28}const P=new Wt;P.setAttribute("position",new tn(m,3)),P.setAttribute("color",new tn(u,3));const C=new to({size:1.15,map:r.flower,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:xn,sizeAttenuation:!0,fog:!1}),I=new lr(P,C);I.renderOrder=-12,o.add(I);const R=new Yt;let w=-27;R.position.set(0,-5.4,w),o.add(R);const b=new qt({color:16762186,transparent:!0,opacity:0,fog:!1}),D=new qt({color:16773052,transparent:!0,opacity:0,fog:!1}),H=new qt({color:7031322,transparent:!0,opacity:0,fog:!1}),Q=[b,D,H];function re(se,we,_,g,O,J=12){const te=new Pt(new da(we,_,g,J),se);return te.position.y=O,R.add(te),te}re(H,2.8,3.5,.7,.35),re(b,2.2,2.8,.5,.9),re(H,1.25,2,.4,1.32),re(b,.42,.62,6.6,4.8),re(D,.8,.5,.5,8.2);const ie=new Pt(new Vi(13.6,.34,.44),b);ie.position.y=8.7,R.add(ie);const oe=new Pt(new Ya(.42,10,8),D);oe.position.y=8.7,R.add(oe);for(const se of[-1,1]){const we=new Pt(new Ya(.3,8,6),D);we.position.set(se*6.7,8.7,0),R.add(we);const _=[];for(let q=0;q<=8;q++){const $=q/8;_.push(new k(se*6.7,8.7-$*4.4+Math.sin($*Math.PI)*.42,0))}const g=new Df(new Wt().setFromPoints(_),new bl({color:16765286,transparent:!0,opacity:0,fog:!1}));R.add(g),Q.push(g.material);const O=new Pt(new da(2.2,1.7,.26,20),b);O.position.set(se*6.7,4.05,0),R.add(O);const J=new Pt(new no(2.12,.09,6,28),D);J.rotation.x=Math.PI/2,J.position.set(se*6.7,4.18,0),R.add(J);const te=new Pt(new ur(.52,0),D);te.position.set(se*6.7,4.5,0),R.add(te)}const ce=new Yt;ce.position.set(0,9.9,0),R.add(ce);const ee=new mt({map:r.star,color:16770976,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),xe=new yt(ee);xe.scale.set(4.2,4.2,1),xe.renderOrder=2,ce.add(xe);const Me=[ee];for(let se=0;se<3;se++){const we=new Pt(new no(2.7+se*1.05,.055,4,64),new qt({color:se?16765286:16774095,transparent:!0,opacity:0,fog:!1}));we.rotation.set(Math.PI/2+se*.32,se*.6,se*.2),ce.add(we),Me.push(we.material)}const Fe=new mt({map:r.glow,color:16765286,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),ot=new yt(Fe);ot.scale.set(14,14,1),ot.renderOrder=1,ce.add(ot),Me.push(Fe);const _t=[{x:0,z:-58,h:25,w:2.1,hue:3497866},{x:-34,z:-36,h:17,w:1.8,hue:2706546},{x:34,z:-36,h:21,w:1.9,hue:2904700},{x:0,z:-14,h:10,w:1.5,hue:2112862}],Qe=[];for(const se of _t){const we=new Yt;we.position.set(se.x,-5.6,se.z),o.add(we);const _=new qt({color:se.hue,transparent:!0,opacity:0,fog:!1}),g=new qt({color:10475775,transparent:!0,opacity:0,fog:!1}),O=new Pt(new da(se.w*.83,se.w,1,8,1,!0),_);O.position.y=.5,we.add(O);const J=new Pt(new da(se.w*.86,se.w*1.03,1,8,1,!0),g);J.position.y=.5,we.add(J);const te=new mt({map:r.glow,color:12576511,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),q=new yt(te);q.scale.set(4.5,4.5,1),q.position.y=1,we.add(q),Qe.push({group:we,body:O,edge:J,cap:q,mat:_,edgeMat:g,capMat:te,def:se,h:0,flash:0,grow:0})}const dt=420,ae=new Float32Array(dt*3),fe=new Float32Array(dt*3),Le=new Float32Array(dt);for(let se=0;se<dt;se++){const we=(Math.random()-.5)*64,_=-3+Math.random()*24,g=-26+Math.random()*42;fe[se*3]=we,fe[se*3+1]=_,fe[se*3+2]=g,ae[se*3]=we,ae[se*3+1]=_,ae[se*3+2]=g,Le[se]=Math.random()*6.28}const $e=new Wt;$e.setAttribute("position",new tn(ae,3));const Oe=new to({size:.34,map:r.glow,color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:xt,sizeAttenuation:!0,fog:!1}),ct=new lr($e,Oe);ct.renderOrder=6,o.add(ct);const Nt=[];for(let se=0;se<18;se++){const we=new mt({map:r.glow,color:se%3?16736127:16765286,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),_=new yt(we);_.scale.set(.8+Math.random()*1.8,.8+Math.random()*1.8,1),_.renderOrder=-8,o.add(_),Nt.push({sprite:_,mat:we,x:(Math.random()-.5)*18,z:-20-Math.random()*28,phase:Math.random()*6.28,speed:.5+Math.random()*.7})}let A=0,rt=0;function et(se){s.phase=se;const we=c[se]||c.off;l.world=we.world??0,l.void=we.void??0,l.flowers=we.flowers??0,l.pillars=we.pillars??0,l.halo=we.halo??0,l.memory=we.memory??0,l.bright=we.bright??0,(se==="guilt"||se==="fake"||se==="offbeat"||se==="fastbeat")&&(s.world=Math.min(s.world,l.world+.01),s.flowers=Math.min(s.flowers,l.flowers+.01),s.pillars=Math.min(s.pillars,l.pillars+.01),s.halo=Math.min(s.halo,l.halo+.01),s.memory=Math.min(s.memory,l.memory+.01))}function je(se){if(s.active=!!se,o.visible=!!se,!se){s.phase="off";for(const we of Object.keys(l))l[we]=0}}function Be(se=1){rt=Math.max(rt,Math.min(1.4,se));for(const we of Qe)we.flash=Math.max(we.flash,se*.8)}function st(se=1){s.glitch=Math.min(2.2,s.glitch+se)}function Ie(se,we){if(!s.active)return;A=we,rt*=Math.exp(-se*4.2),s.glitch*=Math.exp(-se*4.8);for(const $ of Object.keys(l))s[$]+=(l[$]-s[$])*(1-Math.exp(-se*2.6));const _=s.world,g=s.void,O=s.glitch;o.visible=_>.012||g>.012||s.flowers>.01,d.opacity=_*(.9+s.bright*.08),h.opacity=_*.94,r.ocean.offset.x=A*.005%1,r.ocean.offset.y=A*.013%1,p.position.x=Math.sin(A*.04)*2,R.position.y=-5.4+Math.sin(A*.38)*.08,R.rotation.z=Math.sin(A*.31)*.012+rt*.006,ie.rotation.z=Math.sin(A*.5)*.025+Math.sin(A*.17)*.012,ie.rotation.y=Math.sin(A*.2)*.03,oe.scale.setScalar(1+rt*.18),ce.rotation.y+=se*(1.1+rt*2.2),ce.rotation.z+=se*.45,ce.rotation.x=Math.sin(A*.3)*.12;const J=s.halo;xe.scale.set(4.2*(1+rt*.16),4.2*(1+rt*.16),1),ee.opacity=(_*.55+J*.4)*(.85+rt*.15),Me[1].opacity=J*(.5+rt*.25),Me[2].opacity=J*(.32+rt*.2),Me[3].opacity=J*(.2+rt*.14),Me[4].opacity=J*(.07+rt*.07);for(const $ of Q)$===b?$.opacity=_*.96:$===D?$.opacity=_*.92:$===H?$.opacity=_*.8:$.opacity=_*.55;for(const $ of Me);for(const $ of y)$.sprite.position.x=$.x+Math.sin(A*.035+$.phase)*3.2,$.sprite.position.y+=Math.sin(A*.055+$.phase)*se*.12,$.mat.opacity=_*$.base*(.85+.15*Math.sin(A*.2+$.phase));const te=Math.min(1.8,s.flowers);C.opacity=_*Math.min(1,.18+te*.68),C.size=1.05+te*.2,P.setDrawRange(0,Math.min(x,Math.floor(x*(.62+Math.min(.5,te*.36)))));for(let $=0;$<x;$++){const le=E[$],Pe=T[$*3],De=T[$*3+1]+Math.sin(A*.75+le)*.16+Math.sin(A*.27+le*2.1)*.1,ue=T[$*3+2];m[$*3]=Pe+Math.sin(A*.19+le)*.45,m[$*3+1]=De+te*.1,m[$*3+2]=ue}P.attributes.position.needsUpdate=!0;for(const $ of Qe){const le=s.pillars*(1+Math.sin(A*.33+$.def.x*.04)*.012);$.grow+=(le-$.grow)*(1-Math.exp(-se*1.7)),$.flash*=Math.exp(-se*2.4);const Pe=Math.max(.001,$.def.h*$.grow);$.h=Pe,$.body.scale.y=Pe,$.edge.scale.y=Pe,$.body.position.y=Pe*.5,$.edge.position.y=Pe*.5,$.cap.position.y=Pe+.4,$.cap.scale.setScalar((2.6+rt*1.5)*Math.min(1,$.grow*2)),$.mat.opacity=_*(.3+$.flash*.5),$.edgeMat.opacity=_*(.14+$.flash*.45),$.capMat.opacity=_*(.04+$.flash*.2+rt*.05),$.mat.color.set($.def.hue).lerp(new He(16765286),Math.min(1,$.flash)),$.edgeMat.color.set(10475775).lerp(new He(16773568),Math.min(1,$.flash))}const q=s.memory;for(let $=0;$<Nt.length;$++){const le=Nt[$],De=-6+((A*le.speed+le.phase*3.1)%24+24)%24*1.15;le.sprite.position.set(le.x+Math.sin(A*.24+le.phase)*1.8,De,le.z+Math.cos(A*.18+le.phase)*1.2);const ue=Math.sin(Math.min(1,Math.max(0,De/20))*Math.PI);le.mat.opacity=Math.max(0,q*.5*ue*(.7+.3*Math.sin(A*3+le.phase))),le.sprite.visible=le.mat.opacity>.004}Oe.opacity=Math.max(g,_*.26)*.84,Oe.size=.3+g*.08;for(let $=0;$<dt;$++){const le=Le[$];ae[$*3]=fe[$*3]+Math.sin(A*.11+le)*1.7,ae[$*3+1]=fe[$*3+1]+Math.sin(A*.17+le*1.7)*1.3+(A*(.16+$%5*.035)+le*2.4)%22-8,ae[$*3+2]=fe[$*3+2]+Math.cos(A*.09+le)*1.3}if($e.attributes.position.needsUpdate=!0,O>.005){const $=O*.12;R.position.x=(Math.random()-.5)*$,R.position.z=w+(Math.random()-.5)*$;for(const le of y)le.sprite.position.x+=(Math.random()-.5)*$*.4;f.rotation.z=(Math.random()-.5)*O*.01}else R.position.x*=.92,R.position.z=w+(R.position.z-w)*.92,f.rotation.z*=.9}function tt(se){s.portrait=se;const we=se?.92:1.35;R.scale.setScalar(we),w=se?-36:-27,R.position.z=w,R.position.y=-5.4,f.scale.setScalar(se?1.15:1),Qe[0].group.position.z=se?-64:-58,Qe[1].group.position.x=se?-27:-34,Qe[2].group.position.x=se?27:34,ce.position.y=se?9.4:9.9;for(const _ of y){const g=se?.82:1;_.sprite.scale.set(_.sx*g,_.sy*g,1)}}return{root:o,setPhase:et,setActive:je,update:Ie,beat:Be,glitch:st,layout:tt,level:s}}const fa=["#4ff2ff","#43d8ff","#6aa8ff","#9a86ff","#c477ff","#ff79dc","#ff7fb5","#ffb06e"],Yc=Array.from({length:8},()=>"#ffffff"),Xo=["#ff2d55","#ff5e78","#ff8a3d","#ffd166","#ffd166","#ff8a3d","#ff5e78","#ff2d55"],Yo=1.75,qo=.015;function $t(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function jt(i){const e=new Uf(i);return e.colorSpace=un,e.anisotropy=4,e}function mg(){const[i,e]=$t(128,128),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.22,"rgba(255,255,255,.75)"),t.addColorStop(.55,"rgba(255,255,255,.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),jt(i)}function gg(){const[i,e]=$t(512,512),t=256;e.translate(t,t);const n=e.createRadialGradient(0,0,110,0,0,250);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.55,"rgba(255,255,255,.03)"),n.addColorStop(.76,"rgba(255,255,255,.14)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,252,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,255,255,.55)",e.lineWidth=4,e.setLineDash([32,30]),e.shadowColor="#fff",e.shadowBlur=14,e.beginPath(),e.arc(0,0,227,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.98)",e.lineWidth=15,e.shadowColor="#fff",e.shadowBlur=26,e.beginPath(),e.arc(0,0,174,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.42)",e.lineWidth=3,e.beginPath(),e.arc(0,0,126,0,Math.PI*2),e.stroke(),e.restore();for(let a=0;a<4;a++)e.save(),e.rotate(a*Math.PI/2),e.strokeStyle="rgba(255,255,255,.9)",e.lineWidth=5,e.shadowColor="#fff",e.shadowBlur=12,e.beginPath(),e.moveTo(0,-226),e.lineTo(0,-196),e.stroke(),e.restore();return e.save(),e.fillStyle="rgba(255,255,255,.85)",e.shadowColor="#fff",e.shadowBlur=20,e.beginPath(),e.arc(0,0,5,0,Math.PI*2),e.fill(),e.restore(),jt(i)}function yg(){const[i,e]=$t(96,1024),t=e.createLinearGradient(0,1024,0,0);return t.addColorStop(0,"rgba(255,255,255,.95)"),t.addColorStop(.35,"rgba(255,255,255,.55)"),t.addColorStop(.78,"rgba(255,255,255,.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.strokeStyle=t,e.lineWidth=7,e.shadowColor="#fff",e.shadowBlur=22,e.beginPath(),e.moveTo(48,1024),e.lineTo(48,6),e.stroke(),e.shadowBlur=6,e.lineWidth=2,e.strokeStyle="rgba(255,255,255,.95)",e.beginPath(),e.moveTo(48,1024),e.lineTo(48,6),e.stroke(),jt(i)}function _g(){const[i,e]=$t(192,1024),t=e.createLinearGradient(0,1024,0,0);t.addColorStop(0,"rgba(255,255,255,.34)"),t.addColorStop(.5,"rgba(255,255,255,.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,192,1024);const n=e.createLinearGradient(0,0,192,0);return n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.32,"rgba(255,255,255,.5)"),n.addColorStop(.5,"rgba(255,255,255,1)"),n.addColorStop(.68,"rgba(255,255,255,.5)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.globalCompositeOperation="destination-in",e.fillStyle=n,e.fillRect(0,0,192,1024),jt(i)}function vg(){const[i,e]=$t(256,256),t=128;e.translate(t,t);const n=e.createRadialGradient(0,0,18,0,0,124);n.addColorStop(0,"rgba(255,255,255,.62)"),n.addColorStop(.45,"rgba(255,255,255,.2)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,124,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,255,255,.98)",e.lineWidth=17,e.shadowColor="#fff",e.shadowBlur=28,e.beginPath(),e.arc(0,0,84,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.5)",e.lineWidth=4,e.shadowColor="#fff",e.shadowBlur=10,e.beginPath(),e.arc(0,0,56,0,Math.PI*2),e.stroke(),e.restore();const a=e.createRadialGradient(0,0,0,0,0,30);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.55,"rgba(255,255,255,.75)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,30,0,Math.PI*2),e.fill();for(let o=0;o<4;o++)e.save(),e.rotate(o*Math.PI/2),e.strokeStyle="rgba(255,255,255,.9)",e.lineWidth=5,e.shadowColor="#fff",e.shadowBlur=12,e.beginPath(),e.moveTo(0,-122),e.lineTo(0,-100),e.stroke(),e.restore();return jt(i)}function xg(){const[i,e]=$t(128,512),t=e.createLinearGradient(0,0,128,0);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.22,"rgba(255,255,255,.35)"),t.addColorStop(.5,"rgba(255,255,255,.95)"),t.addColorStop(.78,"rgba(255,255,255,.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,512),e.fillStyle="rgba(255,255,255,.95)",e.shadowColor="#fff",e.shadowBlur=18,e.fillRect(48,0,32,512);const n=e.createLinearGradient(0,0,0,512);return n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.08,"rgba(255,255,255,1)"),n.addColorStop(.92,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.globalCompositeOperation="destination-in",e.fillStyle=n,e.fillRect(0,0,128,512),jt(i)}function bg(){const[i,e]=$t(1024,128),t=e.createLinearGradient(0,0,1024,0);return t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.06,"rgba(255,255,255,.4)"),t.addColorStop(.5,"rgba(255,255,255,1)"),t.addColorStop(.94,"rgba(255,255,255,.4)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.strokeStyle=t,e.lineWidth=7,e.shadowColor="#fff",e.shadowBlur=26,e.beginPath(),e.moveTo(0,64),e.lineTo(1024,64),e.stroke(),e.lineWidth=2,e.shadowBlur=6,e.beginPath(),e.moveTo(0,64),e.lineTo(1024,64),e.stroke(),jt(i)}function qc(i,e){const[t,n]=$t(2048,512);let a=i>>>0;const o=()=>(a=a*1664525+1013904223>>>0,a/4294967296);n.clearRect(0,0,2048,512);const r=n.createLinearGradient(0,150,0,512);r.addColorStop(0,"rgba(80,190,255,0)"),r.addColorStop(.7,"rgba(60,150,255,.09)"),r.addColorStop(1,"rgba(255,110,200,.08)"),n.fillStyle=r,n.fillRect(0,0,2048,512);let s=-40;for(;s<2088;){const c=24+Math.floor(o()*74),d=90+Math.floor(o()*300),f=512-d;n.save(),n.fillStyle="rgba(3,8,24,.82)",n.fillRect(s,f,c,d),n.strokeStyle=o()<.28?"rgba(255,120,200,.7)":"rgba(70,210,255,.55)",n.lineWidth=2,n.shadowColor=n.strokeStyle,n.shadowBlur=10,n.strokeRect(s+1,f+1,c-2,d-2),n.shadowBlur=0;const h=Math.max(1,Math.floor((c-10)/12)),p=Math.max(2,Math.floor((d-16)/17));for(let y=0;y<p;y++)for(let x=0;x<h;x++)o()<.64||(n.fillStyle=o()<.22?"rgba(255,205,130,.9)":o()<.5?"rgba(120,235,255,.85)":"rgba(255,120,195,.8)",n.fillRect(s+6+x*12,f+9+y*17,4,6));o()<.45&&(n.strokeStyle="rgba(150,225,255,.65)",n.lineWidth=1,n.beginPath(),n.moveTo(s+c*.5,f),n.lineTo(s+c*.5,f-18-o()*34),n.stroke(),n.fillStyle="rgba(255,90,150,.95)",n.fillRect(s+c*.5-1.5,f-22-o()*30,3,3)),n.restore(),s+=c+3+Math.floor(o()*11)}if(e){const c=n.createLinearGradient(0,360,0,512);c.addColorStop(0,"rgba(255,140,90,0)"),c.addColorStop(1,"rgba(255,140,90,.12)"),n.fillStyle=c,n.fillRect(0,300,2048,212)}const l=jt(t);return l.wrapS=Oi,l.wrapT=yi,l}function Mg(){const[i,e]=$t(1024,1024);e.translate(512,512);const t=e.createRadialGradient(0,0,60,0,0,505);t.addColorStop(0,"rgba(255,255,255,.03)"),t.addColorStop(.55,"rgba(255,255,255,.01)"),t.addColorStop(.82,"rgba(255,255,255,.08)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(0,0,505,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,255,255,.5)",e.lineWidth=5,e.shadowColor="#fff",e.shadowBlur=28,e.beginPath(),e.arc(0,0,470,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(255,255,255,.2)",e.lineWidth=2,e.beginPath(),e.arc(0,0,440,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(255,255,255,.13)",e.lineWidth=2,e.setLineDash([7,18]),e.beginPath(),e.arc(0,0,344,0,Math.PI*2),e.stroke(),e.restore();for(let n=0;n<60;n++){const a=n%5===0;e.save(),e.rotate(n*Math.PI/30),e.strokeStyle=a?"rgba(255,255,255,.92)":"rgba(255,255,255,.3)",e.lineWidth=a?7:2,e.shadowColor="#fff",e.shadowBlur=a?18:7,e.beginPath(),e.moveTo(0,-468),e.lineTo(0,-(a?414:444)),e.stroke(),e.restore()}for(let n=0;n<4;n++)e.save(),e.rotate(n*Math.PI/2),e.fillStyle="rgba(255,255,255,.82)",e.shadowColor="#fff",e.shadowBlur=22,e.beginPath(),e.moveTo(0,-500),e.lineTo(13,-516),e.lineTo(0,-532),e.lineTo(-13,-516),e.closePath(),e.fill(),e.restore();return jt(i)}function wg(){const[i,e]=$t(512,512);e.translate(256,256);const t=e.createRadialGradient(0,0,40,0,0,250);t.addColorStop(0,"rgba(255,255,255,.05)"),t.addColorStop(.7,"rgba(255,255,255,.02)"),t.addColorStop(.92,"rgba(255,255,255,.16)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(0,0,250,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255,255,255,.42)",e.lineWidth=2,e.beginPath(),e.arc(0,0,206,0,Math.PI*2),e.stroke();for(let n=0;n<12;n++){const a=n%3===0;e.save(),e.rotate(n*Math.PI/6),e.strokeStyle=a?"rgba(255,255,255,.85)":"rgba(255,255,255,.3)",e.lineWidth=a?4:1.5,e.beginPath(),e.moveTo(0,-204),e.lineTo(0,a?-172:-188),e.stroke(),e.restore()}return e.save(),e.shadowColor="#fff",e.shadowBlur=22,e.fillStyle="rgba(255,255,255,.95)",e.beginPath(),e.moveTo(-7,-16),e.lineTo(0,-196),e.lineTo(7,-16),e.closePath(),e.fill(),e.beginPath(),e.arc(0,0,11,0,Math.PI*2),e.fill(),e.restore(),jt(i)}function Sg(){const[i,e]=$t(128,1024),t=e.createLinearGradient(0,1024,0,0);return t.addColorStop(0,"rgba(255,255,255,.6)"),t.addColorStop(.5,"rgba(255,255,255,.95)"),t.addColorStop(.9,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,.2)"),e.fillStyle=t,e.shadowColor="#fff",e.shadowBlur=22,e.beginPath(),e.moveTo(47,1010),e.lineTo(58,120),e.lineTo(64,34),e.lineTo(70,120),e.lineTo(81,1010),e.closePath(),e.fill(),e.shadowBlur=28,e.fillStyle="rgba(255,255,255,1)",e.beginPath(),e.arc(64,72,15,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(64,942,20,0,Math.PI*2),e.fill(),jt(i)}function Tg(){const[i,e]=$t(256,256);return e.translate(128,128),e.shadowColor="#fff",e.shadowBlur=26,e.fillStyle="rgba(255,255,255,.98)",e.save(),e.rotate(-.22),e.beginPath(),e.ellipse(-8,56,30,21,-.18,0,Math.PI*2),e.fill(),e.fillRect(16,-84,8,140),e.beginPath(),e.moveTo(24,-84),e.bezierCurveTo(82,-62,86,6,38,32),e.bezierCurveTo(68,-6,56,-50,24,-60),e.closePath(),e.fill(),e.restore(),jt(i)}function Eg(){const[i,e]=$t(64,1024),t=e.createLinearGradient(0,0,64,0);return t.addColorStop(0,"rgba(255,255,255,.06)"),t.addColorStop(.38,"rgba(255,255,255,.62)"),t.addColorStop(.52,"rgba(255,255,255,1)"),t.addColorStop(.66,"rgba(255,255,255,.58)"),t.addColorStop(1,"rgba(255,255,255,.06)"),e.fillStyle=t,e.shadowColor="#fff",e.shadowBlur=12,e.fillRect(27,26,10,972),e.shadowBlur=22,e.beginPath(),e.arc(32,44,15,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(32,982,25,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255,255,255,.8)",e.lineWidth=3,e.beginPath(),e.arc(32,982,25,0,Math.PI*2),e.stroke(),jt(i)}function Zc(i=1){const[e,t]=$t(256,512);let n=i>>>0;const a=()=>(n=n*1664525+1013904223>>>0,n/4294967296);t.clearRect(0,0,256,512),t.save(),t.beginPath(),t.moveTo(12,512),t.lineTo(12,206),t.bezierCurveTo(18,104,82,38,128,10),t.bezierCurveTo(174,38,238,104,244,206),t.lineTo(244,512),t.closePath(),t.clip(),t.fillStyle="rgba(4,5,14,.96)",t.fillRect(0,0,256,512);const o=["#ff4d6d","#ff9a5e","#ffd27a","#4ff2ff","#9b6bff","#ff6fb5"];for(let s=0;s<4;s++)for(let l=0;l<8;l++){const c=o[(s+l+i)%o.length];t.globalAlpha=.32+a()*.28,t.fillStyle=c;const d=20+s*56+l%2*12,f=160+l*44;t.beginPath(),t.moveTo(d+22,f),t.lineTo(d+44,f+20),t.lineTo(d+22,f+40),t.lineTo(d,f+20),t.closePath(),t.fill()}const r=t.createLinearGradient(0,40,0,512);r.addColorStop(0,"rgba(255,240,190,.9)"),r.addColorStop(.35,"rgba(255,150,120,.55)"),r.addColorStop(1,"rgba(120,70,190,.32)"),t.globalAlpha=1,t.fillStyle=r,t.beginPath(),t.moveTo(102,512),t.lineTo(102,190),t.quadraticCurveTo(108,118,128,92),t.quadraticCurveTo(148,118,154,190),t.lineTo(154,512),t.closePath(),t.fill(),t.strokeStyle="rgba(8,8,18,.92)",t.lineWidth=7;for(let s=1;s<4;s++)t.beginPath(),t.moveTo(20+s*56,150),t.lineTo(20+s*56,512),t.stroke();for(let s=1;s<8;s++)t.beginPath(),t.moveTo(14,160+s*44),t.lineTo(242,160+s*44),t.stroke();return t.lineWidth=5,t.beginPath(),t.arc(128,182,58,0,Math.PI*2),t.stroke(),t.beginPath(),t.arc(128,182,30,0,Math.PI*2),t.stroke(),t.restore(),t.save(),t.strokeStyle="rgba(255,226,160,.92)",t.lineWidth=7,t.shadowColor="#ffd27a",t.shadowBlur=18,t.beginPath(),t.moveTo(12,512),t.lineTo(12,206),t.bezierCurveTo(18,104,82,38,128,10),t.bezierCurveTo(174,38,238,104,244,206),t.lineTo(244,512),t.stroke(),t.restore(),jt(e)}function Ag(){const[i,e]=$t(1024,1024);e.translate(512,512);const t=["#ff4d6d","#ffb45e","#ffd27a","#4ff2ff","#9b6bff","#ff6fb5"],n=e.createRadialGradient(0,0,260,0,0,500);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.82,"rgba(255,210,122,.12)"),n.addColorStop(1,"rgba(255,210,122,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,500,0,Math.PI*2),e.fill();for(let o=0;o<12;o++){e.save(),e.rotate(o*Math.PI/6);const r=e.createRadialGradient(0,-210,20,0,-300,150);r.addColorStop(0,t[o%t.length]),r.addColorStop(.62,"rgba(255,235,190,.75)"),r.addColorStop(1,"rgba(20,12,40,0)"),e.fillStyle=r,e.beginPath(),e.moveTo(0,-118),e.bezierCurveTo(116,-206,96,-356,0,-414),e.bezierCurveTo(-96,-356,-116,-206,0,-118),e.closePath(),e.fill(),e.strokeStyle="rgba(10,8,20,.9)",e.lineWidth=7,e.stroke(),e.strokeStyle="rgba(255,226,160,.75)",e.lineWidth=3,e.beginPath(),e.moveTo(0,-148),e.quadraticCurveTo(50,-250,0,-380),e.stroke(),e.restore()}e.strokeStyle="rgba(255,226,160,.9)",e.shadowColor="#ffd27a",e.shadowBlur=18;for(const o of[414,286,168,82])e.lineWidth=o===414?12:7,e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.stroke();for(let o=0;o<24;o++)e.save(),e.rotate(o*Math.PI/12),e.fillStyle=t[o%t.length],e.shadowColor=t[o%t.length],e.shadowBlur=16,e.beginPath(),e.arc(0,-352,22,0,Math.PI*2),e.fill(),e.restore();const a=e.createRadialGradient(0,0,0,0,0,78);return a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.4,"rgba(255,220,150,.8)"),a.addColorStop(1,"rgba(255,90,120,0)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,78,0,Math.PI*2),e.fill(),jt(i)}function Kc(i=1){const[e,t]=$t(512,512);let n=i>>>0;const a=()=>(n=n*1664525+1013904223>>>0,n/4294967296);t.fillStyle="#090711",t.fillRect(0,0,512,512);const o=8,r=5,s=512/r,l=512/o;for(let d=0;d<o;d++){const f=d%2*s*.5;for(let h=-1;h<=r;h++){const p=16+a()*14;t.fillStyle=`rgb(${Math.round(p+4)},${Math.round(p+1)},${Math.round(p+12)})`,t.fillRect(h*s+f+1.5,d*l+1.5,s-3,l-3),t.strokeStyle=`rgba(190,160,190,${.035+a()*.04})`,t.lineWidth=1,t.strokeRect(h*s+f+2,d*l+2,s-4,l-4)}}for(let d=0;d<4;d++){const f=t.createLinearGradient(d*128,0,d*128+128,0);f.addColorStop(0,"rgba(0,0,0,.34)"),f.addColorStop(.5,"rgba(0,0,0,0)"),f.addColorStop(1,"rgba(0,0,0,.22)"),t.fillStyle=f,t.fillRect(d*128,0,128,512)}for(let d=0;d<80;d++)t.fillStyle=`rgba(255,210,150,${.01+a()*.025})`,t.fillRect(a()*512,a()*512,1+a()*2,1+a()*2);const c=jt(e);return c.wrapS=c.wrapT=Oi,c}function Cg(){const[i,e]=$t(2048,2048),t=1024;e.translate(t,t);const n=["XII","I","II","III","IV","V","VI","VII","VIII","IX","X","XI"],a=e.createRadialGradient(0,0,80,0,0,980);a.addColorStop(0,"rgba(60,24,44,.18)"),a.addColorStop(.72,"rgba(18,8,26,.32)"),a.addColorStop(.95,"rgba(255,190,100,.1)"),a.addColorStop(1,"rgba(255,190,100,0)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,980,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,226,170,.92)",e.shadowColor="#ffcf6e",e.shadowBlur=34;for(const[o,r]of[[944,10],[888,3],[720,3],[510,2],[300,2]])e.lineWidth=r,e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.stroke();e.restore();for(let o=0;o<60;o++){const r=o%5===0;e.save(),e.rotate(o*Math.PI/30),e.strokeStyle=r?"rgba(255,240,200,.95)":"rgba(255,210,130,.45)",e.lineWidth=r?13:4,e.shadowColor="#ffcf6e",e.shadowBlur=r?22:8,e.beginPath(),e.moveTo(0,-936),e.lineTo(0,-(r?836:892)),e.stroke(),e.restore()}e.save(),e.strokeStyle="rgba(255,210,130,.4)",e.lineWidth=4,e.shadowColor="#ffcf6e",e.shadowBlur=10;for(let o=0;o<24;o++)e.save(),e.rotate(o*Math.PI/12),e.beginPath(),e.moveTo(-86,-748),e.quadraticCurveTo(0,-880,86,-748),e.stroke(),e.restore();e.restore(),e.fillStyle="rgba(255,244,215,.97)",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#ffcf6e",e.shadowBlur=30,e.font='700 148px Georgia, "Times New Roman", serif',n.forEach((o,r)=>{const s=r/12*Math.PI*2-Math.PI/2;e.save(),e.translate(Math.cos(s)*678,Math.sin(s)*678),e.rotate(s+Math.PI/2),e.fillText(o,0,0),e.restore()}),e.save(),e.strokeStyle="rgba(255,226,170,.7)",e.lineWidth=5,e.shadowColor="#ffcf6e",e.shadowBlur=22;for(let o=0;o<12;o++)e.save(),e.rotate(o*Math.PI/6),e.beginPath(),e.moveTo(0,-40),e.bezierCurveTo(90,-100,92,-236,0,-278),e.bezierCurveTo(-92,-236,-90,-100,0,-40),e.stroke(),e.restore();return e.beginPath(),e.arc(0,0,72,0,Math.PI*2),e.stroke(),e.restore(),jt(i)}function Rg(){const[i,e]=$t(1024,1024),t=e.createRadialGradient(512,512,80,512,512,512);t.addColorStop(0,"rgba(12,7,20,.99)"),t.addColorStop(.6,"rgba(10,6,18,.99)"),t.addColorStop(.8,"rgba(24,12,24,.96)"),t.addColorStop(.94,"rgba(88,43,34,.6)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.beginPath(),e.arc(512,512,512,0,Math.PI*2),e.fill();for(let n=0;n<90;n++){const a=Math.random()*Math.PI*2,o=180+Math.random()*300;e.fillStyle=`rgba(255,205,140,${.02+Math.random()*.05})`,e.beginPath(),e.arc(512+Math.cos(a)*o,512+Math.sin(a)*o,.6+Math.random()*1.8,0,Math.PI*2),e.fill()}return jt(i)}function Pg(){const[i,e]=$t(512,512);e.fillStyle="#07070d",e.fillRect(0,0,512,512),e.strokeStyle="rgba(160,140,120,.22)",e.lineWidth=3;for(let n=0;n<=4;n++)e.beginPath(),e.moveTo(n*128,0),e.lineTo(n*128,512),e.stroke(),e.beginPath(),e.moveTo(0,n*128),e.lineTo(512,n*128),e.stroke();e.strokeStyle="rgba(255,202,120,.14)",e.lineWidth=1;for(let n=-4;n<8;n++)e.beginPath(),e.moveTo(n*128,0),e.lineTo(n*128+512,512),e.stroke(),e.beginPath(),e.moveTo(n*128+512,0),e.lineTo(n*128,512),e.stroke();for(let n=0;n<70;n++)e.fillStyle=`rgba(255,220,150,${.015+Math.random()*.03})`,e.fillRect(Math.random()*512,Math.random()*512,1+Math.random()*3,1+Math.random()*3);const t=jt(i);return t.wrapS=t.wrapT=Oi,t.repeat.set(6,14),t}function Lg(i){const e=matchMedia("(pointer: coarse)").matches,t=new J1({canvas:i,antialias:!e,powerPreference:"high-performance",alpha:!1,stencil:!1});t.setPixelRatio(Math.min(devicePixelRatio||1,e?1.45:1.8)),t.outputColorSpace=un,t.toneMapping=dl,t.toneMappingExposure=1.06;const n=new ah;n.background=new He(197387),n.fog=new xl(197387,.0115);const a=new Tn(46,innerWidth/innerHeight,.1,240);a.position.set(0,6.7,17.2);const o=new ag(t);o.addPass(new og(n,a));const r=new Ma(new Je(innerWidth,innerHeight),1,.62,.22);o.addPass(r),o.addPass(new sg);const s={glow:mg(),ring:gg(),line:yg(),beam:_g(),note:vg(),hold:xg(),hitline:bg(),cityFar:qc(2047066,!1),cityNear:qc(7023172,!0),clockFace:Mg(),clockHand:Sg(),clockDial:wg(),floatNote:Tg(),pendulumRod:Eg(),gothicA:Zc(1),gothicB:Zc(2),rose:Ag(),bossClock:Cg(),bossBack:Rg(),bossFloor:Pg(),naveSide:Kc(3),naveEnd:Kc(7)};s.naveSide.repeat.set(8,4),s.naveEnd.repeat.set(5,5);const l=new Yt;n.add(l);function c(v,F,B,V,Y){const he=new Float32Array(v*3);for(let Xe=0;Xe<v;Xe++){const Ue=F+Math.random()*F*1.8,Lt=Math.random()*Math.PI*2,gt=Math.acos(2*Math.random()-1);he[Xe*3]=Ue*Math.sin(gt)*Math.cos(Lt),he[Xe*3+1]=Ue*Math.cos(gt)*.55+3,he[Xe*3+2]=Ue*Math.sin(gt)*Math.sin(Lt)-20}const ge=new Wt;ge.setAttribute("position",new tn(he,3));const Ve=new to({size:B,map:s.glow,color:V,transparent:!0,opacity:Y,depthWrite:!1,blending:xt,sizeAttenuation:!0}),Ke=new lr(ge,Ve);return l.add(Ke),Ke}const d=c(1500,34,.32,10279167,.7),f=c(650,70,.55,12164351,.5),h=c(220,14,.09,8186367,.45);function p(v,F,B,V,Y,he){const ge=new mt({map:s.glow,color:Y,transparent:!0,opacity:he,depthWrite:!1,blending:xt,fog:!1}),Ve=new yt(ge);return Ve.position.set(v,F,B),Ve.scale.set(V,V,1),l.add(Ve),Ve}const y=p(-16,9,-34,46,1789183,.18),x=p(18,1,-40,54,9314303,.14),m=p(0,12,-26,30,16723872,.07),u=new qt({color:4951551,wireframe:!0,transparent:!0,opacity:.055,fog:!1}),T=[];for(let v=0;v<3;v++){const F=new Pt(new no(12+v*6.5,.045,3,120),u.clone());F.position.set(0,5,-26-v*7),F.rotation.set(.9+v*.16,v*.3,0),l.add(F),T.push(F)}const E=new mh(90,45,1811928,1254490);E.position.y=-3.6,E.material.transparent=!0,E.material.opacity=.16,E.material.depthWrite=!1,l.add(E);const S=[];for(let v=0;v<14;v++){const F=v%2?new ur(.5+Math.random()*.8,0):new Ml(.5+Math.random()*.7,0),B=new qt({color:v%3?5823999:16740312,wireframe:!0,transparent:!0,opacity:.055+Math.random()*.05,fog:!1}),V=new Pt(F,B),Y=v%2?1:-1;V.position.set(Y*(9+Math.random()*10),.5+Math.random()*9,-6-Math.random()*14),V.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),V.userData.spin=new k((Math.random()-.5)*.3,(Math.random()-.5)*.4,(Math.random()-.5)*.2),l.add(V),S.push(V)}const P=new Yt;P.position.z=-1,l.add(P);const C=[];function I(v,F,B,V,Y,he,ge){const Ve=new qt({map:v,color:ge,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),Ke=new Pt(new On(F,B),Ve);return Ke.position.set(V,Y,he),Ke.renderOrder=-2,P.add(Ke),C.push({mesh:Ke,mat:Ve,map:v,base:Y,speed:0}),Ke}I(s.cityFar,150,42,-24,19,-54,11068671),I(s.cityNear,118,34,38,12,-36,16761504),C[0].speed=.0028,C[1].speed=.0062,P.visible=!1;const R=new Yt;R.name="bossChurch",R.visible=!1,l.add(R);const w=[];function b(v,F=1){return v.transparent=!0,v.opacity=0,v.depthWrite=!1,w.push({mat:v,base:F}),v}const D=b(new qt({map:s.bossFloor,color:12167566,fog:!1}),.95),H=new Pt(new On(48,116),D);H.rotation.x=-Math.PI/2,H.position.set(0,-3.64,-26),H.renderOrder=-9,R.add(H);const Q=b(new qt({map:s.naveSide,color:16777215,fog:!1}),.9),re=new On(78,34);for(const v of[-1,1]){const F=new Pt(re,Q);F.position.set(v*11.62,10,-27),F.rotation.y=v<0?Math.PI/2:-Math.PI/2,F.renderOrder=-8,R.add(F)}const ie=b(new qt({map:s.naveEnd,color:3813448,fog:!1}),.96),oe=new Pt(new On(52,46),ie);oe.position.set(0,12,-66),oe.renderOrder=-8,R.add(oe);const ce=b(new qt({color:1314589,fog:!1}),1),ee=new Vi(1.35,18,1.35);for(let v=0;v<6;v++){const F=4-v*11;for(const B of[-1,1]){const V=new Pt(ee,ce);V.position.set(B*11.4,4.2,F),V.renderOrder=-7,R.add(V)}}const xe=new On(4.7,11.4);for(let v=0;v<5;v++){const F=-1.5-v*11.4;for(const B of[-1,1]){const V=b(new qt({map:v%2?s.gothicB:s.gothicA,color:B<0?16769723:16762058,transparent:!0,depthWrite:!1,blending:xn,fog:!1}),.96),Y=new Pt(xe,V);Y.position.set(B*11.34,7.4,F),Y.rotation.y=B<0?Math.PI/2:-Math.PI/2,Y.renderOrder=-5,R.add(Y)}}const Me=b(new mt({map:s.rose,color:16773576,transparent:!0,depthWrite:!1,depthTest:!1,blending:xn,fog:!1}),.6),Fe=new yt(Me);Fe.position.set(0,12.6,-56),Fe.scale.set(34,34,1),Fe.renderOrder=-4,R.add(Fe);const ot=b(new mt({map:s.glow,color:16731501,transparent:!0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),.045),_t=new yt(ot);_t.position.set(0,12.6,-57),_t.scale.set(44,44,1),_t.renderOrder=-5,R.add(_t);const Qe=new Yt;Qe.name="bossClock",Qe.position.set(0,10.4,-39),R.add(Qe);const dt=b(new mt({map:s.bossBack,color:16777215,transparent:!0,depthWrite:!1,depthTest:!1,blending:xn,fog:!1}),1),ae=new yt(dt);ae.scale.set(21.6,21.6,1),ae.position.z=-.06,ae.renderOrder=-3.5,Qe.add(ae);const fe=b(new mt({map:s.bossClock,color:16774096,transparent:!0,depthWrite:!1,depthTest:!1,blending:xn,fog:!1}),.74),Le=new yt(fe);Le.scale.set(21,21,1),Le.renderOrder=-3,Qe.add(Le);const $e=b(new mt({map:s.glow,color:16751198,transparent:!0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),.055),Oe=new yt($e);Oe.scale.set(29,29,1),Oe.renderOrder=-4,Qe.add(Oe);function ct(v,F,B,V){const Y=b(new mt({map:v,color:F,transparent:!0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),V),he=new yt(Y);return he.center.set(.5,.06),he.position.set(0,0,.4),he.scale.set(B,B*7.1,1),he.renderOrder=-2,Qe.add(he),he}const Nt=ct(s.clockHand,16765286,1.1,.72),A=ct(s.clockHand,16731501,.8,.86),rt=b(new mt({map:s.glow,color:16774096,transparent:!0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),.38),et=new yt(rt);et.scale.set(2.2,2.2,1),et.position.z=.5,et.renderOrder=-1,Qe.add(et);const je=[];for(let v=0;v<22;v++){const F=v%2?1:-1,B=2-Math.floor(v/2)*5.4,V=b(new mt({map:s.glow,color:16763514,transparent:!0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),.15),Y=new yt(V);Y.position.set(F*(3.6+v%3*1.6),-2.7+v%2*.5,B),Y.scale.set(.62,.62,1),Y.renderOrder=-4,R.add(Y),je.push({sprite:Y,mat:V,base:.15,phase:v*1.7})}const Be=[];for(let v=0;v<5;v++){const F=b(new mt({map:s.glow,color:v%2?10185727:16751198,transparent:!0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),.018),B=new yt(F);B.position.set((v%2?1:-1)*(6+v*2.2),1.6+v*1.3,-10-v*9),B.scale.set(16+v*3,9+v*1.5,1),B.renderOrder=-6,R.add(B),Be.push({sprite:B,mat:F,base:.018,phase:v*2.1})}const st=new Yt;n.add(st);const Ie=new Yt;st.add(Ie);const tt=new Yt;tt.renderOrder=5,st.add(tt);const se=new mt({map:s.hitline,color:10483199,transparent:!0,opacity:.8,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),we=new yt(se);we.position.set(0,.02,.25),we.scale.set(13.2,.9,1),we.renderOrder=2,st.add(we);const _=[],g=[];for(let v=0;v<8;v++){const F=(v-3.5)*Yo;g.push(F);const B=qo*F*F,V=new Yt;V.position.set(F,0,B),Ie.add(V);const Y=new He(fa[v]),he=new mt({map:s.beam,color:Y.clone(),transparent:!0,opacity:.08,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),ge=new yt(he);ge.center.set(.5,0),ge.position.set(0,.04,-.02),ge.scale.set(1.16,12.6,1),ge.renderOrder=0,V.add(ge);const Ve=new mt({map:s.line,color:Y.clone(),transparent:!0,opacity:.62,depthWrite:!1,depthTest:!1,blending:xn,fog:!1}),Ke=new yt(Ve);Ke.center.set(.5,0),Ke.position.set(0,.04,.02),Ke.scale.set(.36,12.4,1),Ke.renderOrder=1,V.add(Ke);const Xe=new mt({map:s.ring,color:Y.clone(),transparent:!0,opacity:.95,depthWrite:!1,depthTest:!1,blending:xn,fog:!1}),Ue=new yt(Xe);Ue.position.set(0,.02,.22),Ue.scale.set(1.65,1.65,1),Ue.renderOrder=3,V.add(Ue);const Lt=new mt({map:s.glow,color:Y.clone(),transparent:!0,opacity:.13,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),gt=new yt(Lt);gt.position.set(0,-.02,.18),gt.scale.set(2.2,2.2,1),gt.renderOrder=2,V.add(gt);const Ht=new mt({map:s.glow,color:Y.clone().lerp(new He(16777215),.25),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),on=new yt(Ht);on.position.set(0,.2,.08),on.scale.set(1.1,1.1,1),on.renderOrder=4,on.visible=!1,V.add(on),_.push({group:V,beam:ge,line:Ke,ring:Ue,glow:gt,ghost:on,color:Y.clone(),targetColor:Y.clone(),flash:0,active:0,baseX:F,ghostFx:null,angle:0,pitch:0,screenAngle:0,screen:null})}const O=new Yt;O.name="bossWind",st.add(O);const J=[];for(let v=0;v<8;v++){const F=new He(Xo[v]),B=[];for(let Y=0;Y<6;Y++){const he=new mt({map:s.beam,color:F.clone().lerp(new He(16777215),.24+Y*.03),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),ge=new yt(he);ge.center.set(.5,.5),ge.renderOrder=4,ge.visible=!1,O.add(ge),B.push(ge)}const V=[];for(let Y=0;Y<3;Y++){const he=new mt({map:s.glow,color:F.clone(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),ge=new yt(he);ge.renderOrder=5,ge.visible=!1,O.add(ge),V.push(ge)}J.push({lane:v,ribbons:B,glows:V,power:0,seed:v*2.399963})}const te=pg({scene:n,camera:a,lanes:_,stage:st,TEX:s}),q=new Yt;q.position.set(0,13.2,-28),q.visible=!1,l.add(q);const $=new mt({map:s.clockFace,color:16773576,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),le=new yt($);le.scale.set(21.6,21.6,1),le.renderOrder=-5,q.add(le);const Pe=new mt({map:s.glow,color:16762974,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),De=new yt(Pe);De.scale.set(29,29,1),De.renderOrder=-6,q.add(De);const ue=new He(fa[0]),Se=new He(fa[7]),nt=new mt({map:s.clockHand,color:ue,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),ze=new yt(nt);ze.center.set(.5,.07),ze.position.set(0,0,.22),ze.scale.set(1.02,6.8,1),ze.renderOrder=-4,q.add(ze);const Te=new mt({map:s.clockHand,color:Se,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),at=new yt(Te);at.center.set(.5,.07),at.position.set(0,0,.26),at.scale.set(.76,9.6,1),at.renderOrder=-4,q.add(at);const N=new mt({map:s.glow,color:16774096,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),pe=new yt(N);pe.scale.set(1.9,1.9,1),pe.position.z=.3,pe.renderOrder=-3,q.add(pe);function ve(v){const F=new mt({map:s.clockDial,color:new He(fa[v]),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),B=new yt(F);return B.position.set(v===0?.86:-.86,7.6,.24),B.scale.set(2.75,2.75,1),B.renderOrder=2,B.visible=!1,_[v].group.add(B),B}const ke=ve(0),me=ve(7),L={group:q,face:le,aura:De,hub:pe,handSlow:ze,handFast:at,dialSlow:ke,dialFast:me,slowColor:ue,fastColor:Se,target:0,fade:0,mode:"off",frozen:!1,rate:1,runTime:0,anchorT:0,anchorRun:0,slowAngle:0,fastAngle:0,slowKick:0,fastKick:0,kick:0},Ge=16765286,ne={active:!1,target:0,fade:0,period:2.4146,originT:0,baseAmp:.42,pivot:new k(0,11.8,1.2),center:new k(0,2.6,1.32),length:9.2,angle:.42,kick:0,missFlash:0,times:[],states:[],notes:[]},wt=new Yt;wt.visible=!1,n.add(wt);const vt=new He(Ge),Jt=new He(16773576),gn=new He(16724831);function An(v,F,B,V){const Y=new mt({map:v,color:F.clone(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),he=new yt(Y);return he.scale.set(V,V,1),he.renderOrder=B,he.visible=!1,wt.add(he),he}const yn=An(s.pendulumRod,Jt,5,1);yn.center.set(.5,0);const oi=An(s.glow,Jt,6,1.5),ri=An(s.glow,vt,7,2.2),si=An(s.ring,Jt,8,2),li=An(s.glow,vt,6,3.2),Ti=An(s.ring,Jt,10,2.9),ci=An(s.glow,Jt,9,1.5),Wi=[];for(let v=0;v<7;v++){const F=An(s.floatNote,Jt,6,1);F.userData.r=2.7+v%3*1.1,F.userData.scale=.8+v%4*.16,F.userData.op=.42+v%3*.12,Wi.push(F)}function Da(){const v=W.portrait;ne.pivot.set(0,v?11:11.8,1.2),ne.length=v?7:7.8,ne.center.set(0,ne.pivot.y-ne.length,1.32),ne.baseAmp=v?.27:.42,oi.position.copy(ne.pivot),Ti.position.copy(ne.center),li.position.copy(ne.center),ci.position.copy(ne.center)}function gr({start:v=0,period:F=2.4146,amplitude:B=.42,times:V=[]}={}){ne.active=!0,ne.target=1,ne.period=F||2.4146,ne.originT=v,ne.baseAmp=B||.42,ne.times=V.slice(),ne.states=V.map(()=>"pending"),ne.kick=Math.max(ne.kick,.5);for(const Y of ne.notes)wt.remove(Y),Y.material.dispose();ne.notes=ne.times.map((Y,he)=>{const ge=new mt({map:s.floatNote,color:vt.clone(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),Ve=new yt(ge),Ke=he*2.399963,Xe=3.3+he%3*.85;return Ve.userData.off={x:Math.cos(Ke)*Xe,y:Math.sin(Ke)*Xe*.66},Ve.renderOrder=7,Ve.visible=!1,wt.add(Ve),Ve}),ne.fade=Math.max(ne.fade,.002),Da()}function lo(){ne.active=!1,ne.target=0;for(const v of ne.notes)v.visible=!1}function yr(){lo(),ne.fade=0,ne.kick=0,ne.missFlash=0,ne.states=[],wt.visible=!1}function _r(v,F="hit"){ne.states[v]!==void 0&&(ne.states[v]=F);const B=ne.notes[v];B&&(B.visible=!1);const V=ne.center;F==="hit"?(ne.kick=1,St(V,Ge,22,3.4),Tt(V,Ge,3.1)):(ne.missFlash=1,St(V,16724831,10,1.5),Tt(V,16724831,1.9))}function vr(){ne.kick=Math.max(ne.kick,.14)}const Ua=new k,M=new k;function z(){a.updateMatrixWorld(),Ua.copy(ne.center).project(a),M.copy(ne.center),M.y+=1.5,M.project(a);const v=(Ua.x*.5+.5)*innerWidth,F=(-Ua.y*.5+.5)*innerHeight,B=(-M.y*.5+.5)*innerHeight;return{x:v,y:F,radius:Math.max(60,Math.min(118,Math.abs(F-B)))}}function Z(v,F){ne.fade+=(ne.target-ne.fade)*(1-Math.exp(-v*3.1));const B=ne.fade>.012;if(wt.visible=B,!B)return;ne.kick=Math.max(0,ne.kick-v*3.2),ne.missFlash=Math.max(0,ne.missFlash-v*2.6);const V=ne.baseAmp,Y=V*Math.cos((F-ne.originT)/ne.period*Math.PI*2);ne.angle=Y;const he=Math.sin(Y)*ne.length,ge=-Math.cos(Y)*ne.length;yn.position.copy(ne.pivot),yn.scale.set(.5,ne.length,1),yn.material.rotation=Math.PI+Y,oi.position.copy(ne.pivot),ri.position.set(ne.pivot.x+he,ne.pivot.y+ge,ne.pivot.z+.12),si.position.set(ne.pivot.x+he,ne.pivot.y+ge,ne.pivot.z+.16);const Ve=Math.max(0,1-Math.abs(Y)/Math.max(.001,V)),Ke=1+ne.kick*.22+Ve*.05;ri.scale.set(2.2*Ke,2.2*Ke,1),si.scale.set(2*Ke,2*Ke,1),yn.visible=!0,oi.visible=!0,si.visible=!0,ri.visible=!0;const Xe=ne.fade,Ue=ne.missFlash;yn.material.opacity=Xe*.62,oi.material.opacity=Xe*(.55+Ve*.3),ri.material.opacity=Xe*(.24+Ve*.16+ne.kick*.14),si.material.opacity=Xe*(.78+ne.kick*.2),si.material.color.copy(Jt).lerp(gn,Ue),ri.material.color.copy(vt).lerp(gn,Ue);const Lt=1+Ve*.08+ne.kick*.14;Ti.scale.set(2.9*Lt,2.9*Lt,1),li.scale.set(3.2*Lt,3.2*Lt,1),ci.scale.set(1.5*Lt,1.5*Lt,1),Ti.material.opacity=Xe*(.5+Ve*.3+ne.kick*.18),li.material.opacity=Xe*(.05+Ve*.04+ne.kick*.06),ci.material.opacity=Xe*(.16+Ve*.12),Ti.material.color.copy(Jt).lerp(gn,Ue*.7);for(const gt of ne.notes){const Ht=ne.notes.indexOf(gt),on=ne.times[Ht],Vn=ne.states[Ht],j=on-F;if(Vn!=="pending"||j>1.55||j<-.35){gt.visible=!1;continue}const ye=Math.max(0,Math.min(1,1-j/1.55)),zt=1-Math.pow(1-ye,3),bn=gt.userData.off;gt.position.set(ne.center.x+bn.x*(1-zt),ne.center.y+bn.y*(1-zt)+Math.sin(F*2.2+Ht)*.1*(1-zt),ne.center.z+.14);const rn=1.5+zt*.55+Math.sin(F*7+Ht)*.03;gt.scale.set(rn,rn,1),gt.material.opacity=Xe*(.2+zt*.78),gt.visible=!0}for(let gt=0;gt<Wi.length;gt++){const Ht=Wi[gt],on=F*.24+gt*2.399963,Vn=Ht.userData.r;Ht.position.set(ne.center.x+Math.cos(on)*Vn,ne.center.y+Math.sin(on*1.3)*Vn*.6+Math.sin(F*.9+gt)*.24,ne.center.z+.05),Ht.material.rotation=Math.sin(F*.5+gt)*.32;const j=Ht.userData.scale;Ht.scale.set(j,j,1),Ht.material.opacity=Xe*Ht.userData.op*(.55+.45*Math.sin(F*1.5+gt*1.7)),Ht.visible=!0}}function K(v,F,B=!1){const V=X.active?X.theme==="intention"?Yc:Xo:fa,Y=new He(V[v]),he=new Yt;he.renderOrder=5,B?tt.add(he):_[v].group.add(he);const ge=new mt({map:s.note,color:Y,transparent:!0,opacity:1,depthWrite:!1,depthTest:!1,blending:xn,fog:!1}),Ve=new yt(ge);Ve.scale.set(1.04,1.04,1),Ve.renderOrder=6,he.add(Ve);let Ke=null,Xe=null;if(F==="hold"){const Ue=new mt({map:s.hold,color:Y.clone().lerp(new He(16777215),.15),transparent:!0,opacity:.72,depthWrite:!1,depthTest:!1,blending:xt,fog:!1});Ke=new yt(Ue),Ke.center.set(.5,.5),Ke.renderOrder=4,he.add(Ke);const Lt=new mt({map:s.note,color:Y.clone(),transparent:!0,opacity:.85,depthWrite:!1,depthTest:!1,blending:xt,fog:!1});Xe=new yt(Lt),Xe.scale.set(.68,.68,1),Xe.renderOrder=5,he.add(Xe)}return{group:he,head:Ve,body:Ke,tail:Xe,color:Y,free:!!B}}function G(v,F,B=0){const V=_[v].group,Y=Math.max(0,Math.min(1,F/12.2)),he=Math.pow(Y,.82),ge=Math.sin(B*2.17+F*.37)*(1.45+B%3*.22)+Math.sin(B*.73+F*.19)*.7,Ve=Math.cos(B*1.31+F*.29)*1.4;return{x:V.position.x+ge*he,y:F,z:V.position.z+.24+Ve*he,sway:ge*he}}const de=720,be=new Float32Array(de*3).fill(-999),Re=new Float32Array(de*3),Ee=new Float32Array(de*3),qe=new Float32Array(de),it=new Float32Array(de),Ye=new Wt;Ye.setAttribute("position",new tn(be,3)),Ye.setAttribute("color",new tn(Re,3));const ht=new to({size:.3,map:s.glow,vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!1,blending:xt,sizeAttenuation:!0,fog:!1}),Ct=new lr(Ye,ht);Ct.renderOrder=9,n.add(Ct);let Ft=0;function St(v,F,B=16,V=3.2){const Y=new He(F);for(let he=0;he<B;he++){const ge=Ft=(Ft+1)%de;be[ge*3]=v.x+(Math.random()-.5)*.15,be[ge*3+1]=v.y+(Math.random()-.5)*.15,be[ge*3+2]=v.z+(Math.random()-.5)*.15;const Ve=Math.random()*Math.PI*2,Ke=Math.acos(2*Math.random()-1),Xe=V*(.35+Math.random()*.9);Ee[ge*3]=Math.sin(Ke)*Math.cos(Ve)*Xe,Ee[ge*3+1]=Math.cos(Ke)*Xe+.6,Ee[ge*3+2]=Math.sin(Ke)*Math.sin(Ve)*Xe;const Ue=Math.random()<.35;Re[ge*3]=Ue?1:Y.r,Re[ge*3+1]=Ue?1:Y.g,Re[ge*3+2]=Ue?1:Y.b,qe[ge]=it[ge]=.35+Math.random()*.5}}const At=[];for(let v=0;v<16;v++){const F=new mt({map:s.ring,color:16777215,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),B=new yt(F);B.scale.set(.8,.8,1),B.renderOrder=8,B.visible=!1,n.add(B),At.push({sprite:B,life:0,max:.38})}let Ze=0;function Tt(v,F,B=2.8){const V=At[Ze=(Ze+1)%At.length];V.sprite.position.copy(v),V.sprite.material.color.set(F),V.sprite.material.opacity=.95,V.sprite.scale.set(.7,.7,1),V.sprite.visible=!0,V.life=V.max=.38,V.scale=B}const pt=[];for(let v=0;v<54;v++){const F=new mt({map:s.ring,color:16777215,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:xt,fog:!1}),B=new yt(F);B.scale.set(.6,.6,1),B.renderOrder=7,B.visible=!1,st.add(B),pt.push({sprite:B,life:0,max:1,delay:0,vx:0,vy:0,base:.5,alpha:.6,spin:0})}let nn=0;const W={view:{rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.7,bloom:.8,spin:.04,spacing:Yo,ring:1.65},target:{rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.7,bloom:.8,spin:.04,spacing:Yo,ring:1.65},section:null,energy:.4,keyCount:8,active:new Set([0,1,2,3,4,5,6,7]),pulse:0,shake:0,zoomKick:0,noteSpeed:8.2,time:0,playing:!1,spacing:Yo,ringScale:1.65,portrait:!1,mouse:new Je,laneXNow:g.slice(),bpm:100,beatOffset:.535,energyPulse:0,motion:{style:"fan",amp:.06,speed:.5,pitch:.03},targetMotion:{style:"fan",amp:.06,speed:.5,pitch:.03},laneAngle:new Float32Array(8),lanePitch:new Float32Array(8),screenAngle:new Float32Array(8),city:0,cityTarget:0,live:new Set([0,1,2,3,4,5,6,7])},X={active:!1,mode:"off",intro:!1,theme:"untouchable",fieldFade:1,fieldTarget:1,fieldHidden:!1,intentFocus:0,intentFocusTarget:0,churchFade:0,churchTarget:0,clockFade:0,clockTarget:0,windBoost:0,glitch:0,slowAngle:0,fastAngle:0,handKick:0,hubKick:0,palette:"normal"},Rt={lock:!1,pos:new k(0,6.7,17.2),look:new k(0,4.05,0),targetPos:new k(0,6.7,17.2),targetLook:new k(0,4.05,0),fov:46,targetFov:46,roll:0,targetRoll:0,rate:3};function Ut(v){const F=v?X.theme==="intention"?Yc:Xo:fa;X.palette=v?"boss":"normal";const B=W.section?.color;for(let V=0;V<8;V++)_[V].color.set(F[V]),_[V].targetColor.copy(_[V].color),B&&X.theme!=="intention"&&_[V].targetColor.lerp(new He(B),.24)}function _n(v="off",F=X.theme){const B=v||"off",V=F==="intention"?"intention":"untouchable",Y=X.theme!==V;X.theme=V;const he=V==="intention";X.mode=B,X.active=B!=="off",X.intro=B==="intro"||B==="preview",X.fieldTarget=B==="play"||B==="outro"?1:0,F==="intention"&&B==="intro"&&(X.fieldTarget=1),he?(X.churchTarget=0,X.clockTarget=0,Y&&(X.churchFade=0,X.clockFade=0,R.visible=!1,Qe.visible=!1),te.setActive(X.active),B==="preview"?te.setPhase("preview"):B==="intro"?te.setPhase("void"):B==="play"&&X.intro?te.setPhase("ocean"):B==="outro"&&te.setPhase("dawn")):(X.churchTarget=B==="off"?0:B==="intro"?1:B==="preview"?.66:.46,X.clockTarget=B==="off"?0:B==="intro"?1:.94,(Y||B==="off")&&te.setActive(!1)),(B==="off"||B==="preview")&&(X.cameraLock=!1),(B==="off"||B==="preview"||B==="intro")&&(X.intentFocus=0,X.intentFocusTarget=0),B==="intro"&&(X.cameraLock=!0,he?(Rt.pos.set(0,10,34),Rt.look.set(0,11,-70)):(Rt.pos.set(0,12,34),Rt.look.set(0,14,-60)),Rt.targetPos.copy(Rt.pos),Rt.targetLook.copy(Rt.look),Rt.fov=Rt.targetFov=he?52:54,Rt.roll=Rt.targetRoll=0,X.slowAngle=0,X.fastAngle=0,X.glitch=0,X.windBoost=0,X.handKick=0,X.hubKick=0),(B==="off"||B==="preview")&&(Rt.fov=Rt.targetFov=W.portrait?52:46,Rt.roll=Rt.targetRoll=0,Rt.lock=!1,a.fov=Rt.fov,a.updateProjectionMatrix()),he||(X.fieldHidden=!1,tt.visible=!0),Ut(X.active)}function vn(v){tt.visible=!v}function en(v){X.fieldHidden=!!v,tt.visible=!v}function an(v,F,B=49,V=0,Y=.8){X.cameraLock=!0,Rt.targetPos.set(v[0],v[1],v[2]),Rt.targetLook.set(F[0],F[1],F[2]),Rt.targetFov=B,Rt.targetRoll=V,Rt.rate=5.2/Math.max(.18,Math.min(2.2,Y))}const ka=.785,Hn=.84,Dl=.93,Xi=new k,xr=new k,br=new k,co=new k,Mr=Array.from({length:8},()=>new k);function pd(){st.updateWorldMatrix(!0,!1),Ie.updateWorldMatrix(!1,!1);for(let v=0;v<8;v++)_[v].group.updateWorldMatrix(!1,!1),Mr[v].set(0,.02,.22).applyMatrix4(_[v].group.matrixWorld)}function md(v=0){const F=Qe.position.y+10.5*Qe.scale.y,B=W.active,V=W.portrait?66:57,Y=Math.sin(v)/a.aspect;let he=Math.max(46,a.fov);W.portrait&&(a.position.x=0,co.set(0,a.position.y,a.position.z-40),a.lookAt(co)),pd();for(let ge=0;ge<14;ge++){a.fov=he,a.updateProjectionMatrix(),a.updateMatrixWorld();const Ve=Math.tan(he*Math.PI/360);let Ke=1/0;for(const Ue of B)Xi.copy(Mr[Ue]).project(a),Xi.y<Ke&&(Ke=Xi.y);Ke!==1/0&&(a.rotateX(Math.atan(Ke*Ve)-Math.atan((1-2*ka)*Ve)),a.updateMatrixWorld());let Xe=1;xr.set(0,F,Qe.position.z).project(a),xr.y>Dl&&(Xe=xr.y/Dl);for(const Ue of B){Xi.copy(Mr[Ue]).project(a);const Lt=Math.abs(Xi.x+Xi.y*Y)/Hn;Lt>Xe&&(Xe=Lt)}if(Xe>1.002){const Ue=2*Math.atan(Ve*Math.min(Xe*1.02,1.6))*180/Math.PI;if(Ue<=V+.01){he=Math.max(he,Ue);continue}if(he<V){he=V;continue}a.getWorldDirection(br),a.position.addScaledVector(br,-1.1),co.copy(a.position).addScaledVector(br,40),a.lookAt(co);continue}break}a.fov=he,a.updateProjectionMatrix()}function gd(v=1){X.glitch=Math.min(1.5,X.glitch+v),X.windBoost=Math.min(2.4,X.windBoost+v*.7),W.shake=Math.min(.24,W.shake+v*.035),W.zoomKick=Math.min(1.5,W.zoomKick+v*.3),X.theme==="intention"&&te.glitch(v)}function wr(v=1){X.windBoost=Math.min(2.6,X.windBoost+v*.9),X.glitch=Math.min(1.4,X.glitch+v*.12);for(let F=0;F<3;F++){const B=Math.floor(Math.random()*8),V=Ei(B,1+Math.random()*7);St(V,new He(Xo[B]).getHex(),4,1.4+v)}}function yd(v="fast",F=1){if(X.handKick=Math.max(X.handKick,.35+F*.55),X.hubKick=Math.max(X.hubKick,.25+F*.4),X.theme==="intention"&&te.beat(F),F>.9&&X.clockFade>.3){const B=Qe.localToWorld(new k(0,0,.8));Tt(B,v==="slow"?16765286:16731501,1.1+F*.4)}}function Ul(v,F){const B=1+X.windBoost*.85;for(const V of J){let Y;X.active?X.theme==="intention"?Y=0:Y=X.intro?1:W.active.has(V.lane)?0:.95:Y=0,V.power+=(Y-V.power)*(1-Math.exp(-v*2.1));const he=V.power,ge=he>.012;let Ve=_[V.lane].group.position.x;if(!X.intro){const Ke=(Math.max(4,W.keyCount)-1)*W.spacing*.5,Xe=Math.max(1,Math.abs(a.position.z)),Ue=Math.tan(a.fov*Math.PI/360)*Xe*a.aspect,Lt=Math.min(Ke+W.spacing*(.55+V.lane%2*.45),Ue*.86);Ve=V.lane<3.5?-Lt:Lt}for(let Ke=0;Ke<V.ribbons.length;Ke++){const Xe=V.ribbons[Ke];if(Xe.visible=ge,!ge)continue;X.theme==="intention"&&Xe.material.color.setRGB(.92,.96,1);const Ue=F*1.15*B+V.seed+Ke*1.71,Lt=((F*1.05*B+Ke*1.9+V.seed*.8)%13+13)%13,gt=-1.4+Lt,Ht=Math.max(0,Math.min(1,(gt+1.4)/2.6))*Math.max(0,Math.min(1,(12.6-gt)/3.2));Xe.position.set(Ve+Math.sin(Ue*1.07)*(1.15+Lt*.14)+Math.sin(Ue*.43)*.8,gt,.3+Math.cos(Ue*.91)*1.5+Math.sin(Ue*.37)*.8),Xe.material.rotation=Ue*1.55;const on=4.2+2.8*Math.abs(Math.sin(Ue*1.3)),Vn=.85+.5*Math.abs(Math.cos(Ue*.8));Xe.scale.set(Vn,on,1),Xe.material.opacity=he*Ht*(.14+.09*Math.pow(Math.sin(Ue*2.1),2))}for(let Ke=0;Ke<V.glows.length;Ke++){const Xe=V.glows[Ke];if(Xe.visible=ge,!ge)continue;const Ue=F*.85*B+V.seed*1.7+Ke*2.3,Lt=-.4+(F*1.35*B+Ke*4.3+V.seed)%13;Xe.position.set(Ve+Math.sin(Ue*.83)*1.5,Lt,.45+Math.cos(Ue*.71)*1.3);const gt=.22+.1*Math.sin(Ue*1.6);Xe.scale.set(gt,gt,1),Xe.material.rotation=Ue,Xe.material.opacity=he*.075*(.55+.45*Math.sin(Ue*1.3))}}}function _d(v,F){if(X.fieldFade+=(X.fieldTarget-X.fieldFade)*(1-Math.exp(-v*4.2)),X.churchFade+=(X.churchTarget-X.churchFade)*(1-Math.exp(-v*1.5)),X.clockFade+=(X.clockTarget-X.clockFade)*(1-Math.exp(-v*1.7)),X.windBoost*=Math.exp(-v*1.8),X.glitch*=Math.exp(-v*6.2),X.handKick*=Math.exp(-v*3.3),X.hubKick*=Math.exp(-v*2.8),X.active&&X.theme==="intention"){for(const Y of[y,x,m,E,...T,...S])Y.visible=!1;R.visible=!1,Qe.visible=!1,te.update(v,F),Ul(v,F);return}const B=X.active&&X.churchFade>.02;for(const Y of[y,x,m,E,...T,...S])Y.visible=!B;const V=X.churchFade;if(R.visible=V>.008,R.visible){for(const ge of w)ge.mat.opacity=ge.base*V;const Y=X.clockFade;dt.opacity=Y,fe.opacity=Y*(.72+X.hubKick*.08),$e.opacity=Y*(.05+X.hubKick*.045),rt.opacity=Y*(.36+X.hubKick*.2),Nt.material.opacity=Y*(.62+X.handKick*.18),A.material.opacity=Y*(.76+X.handKick*.14),Qe.visible=Y>.01;const he=1+X.hubKick*.035+Math.sin(F*1.8)*.004;Le.scale.set(21*he,21*he,1),Oe.scale.set(29*he,29*he,1),et.scale.set(1.9*(1+X.hubKick*.22),1.9*(1+X.hubKick*.22),1),X.slowAngle+=v*.075,X.fastAngle+=v*.62,Nt.material.rotation=-X.slowAngle,A.material.rotation=-X.fastAngle,Nt.material.color.set(16765286).lerp(Cn,X.handKick*.65),A.material.color.set(16731501).lerp(Cn,X.handKick*.65),Nt.scale.set(1.1,1.1*7.1,1),A.scale.set(.8,.8*7.1,1);for(const ge of je)ge.mat.opacity=ge.base*V*(.58+.3*Math.sin(F*3.1+ge.phase)+.12*Math.sin(F*9.7+ge.phase*2.3));for(const ge of Be)ge.mat.opacity=ge.base*V*(.7+.3*Math.sin(F*.24+ge.phase)),ge.sprite.position.x+=Math.sin(F*.11+ge.phase)*v*.08,ge.sprite.position.y+=Math.cos(F*.09+ge.phase)*v*.05;D.map.offset.y=F*.0035%1}else Qe.visible=!1;Ul(v,F)}function vd(v){const F=innerWidth/Math.max(1,innerHeight);if(W.portrait)return v<=1?{spacing:2.3,ring:2.35}:v<=2?{spacing:2,ring:2.05}:v<=4?{spacing:1.72,ring:1.62}:v<=6?{spacing:1.3,ring:1.24}:{spacing:1.02,ring:1.04};const B=F>1.9?1.08:1;return v<=1?{spacing:4.2*B,ring:3.15*B}:v<=2?{spacing:3.8*B,ring:2.85*B}:v<=4?{spacing:3.15*B,ring:2.35*B}:v<=6?{spacing:2.16*B,ring:1.95*B}:{spacing:1.75*B,ring:1.65*B}}function kl(v,F=!1){const B=vd(v);W.spacing=B.spacing,W.ringScale=B.ring,W.target.spacing=B.spacing,W.target.ring=B.ring,F&&(W.view.spacing=B.spacing,W.view.ring=B.ring)}function Sr(){const v=innerWidth,F=innerHeight,B=v/F;W.portrait=B<.92,kl(W.keyCount,!0),L.group.position.set(0,W.portrait?15.2:13.2,-28),L.group.scale.setScalar(W.portrait?.86:1),Qe.position.set(0,W.portrait?13.4:10.4,W.portrait?-46:-39),Qe.scale.setScalar(W.portrait?.76:1),Fe.position.set(0,W.portrait?15:12.6,W.portrait?-62:-56),Fe.scale.set(W.portrait?26:34,W.portrait?26:34,1),_t.position.set(0,W.portrait?15:12.6,W.portrait?-63:-57),_t.scale.set(W.portrait?36:44,W.portrait?36:44,1),Da();for(let Y=0;Y<8;Y++){const he=(Y-3.5)*W.spacing;_[Y].baseX=he,_[Y].group.position.x=he,_[Y].group.position.z=qo*he*he,_[Y].ring.scale.set(W.view.ring,W.view.ring,1),_[Y].glow.scale.set(W.view.ring*1.35,W.view.ring*1.35,1),W.laneXNow[Y]=he}we.scale.set((W.keyCount-1)*W.spacing+W.ring*1.5,.9,1),a.aspect=B,a.fov=W.portrait?52:46,a.updateProjectionMatrix();const V=W.section?W.section.camZ:17.2;W.target.camZ=V+(W.portrait?6.4:0),W.view.camZ=W.target.camZ,t.setSize(v,F),o.setSize(v,F),r.resolution.set(v/2,F/2),te.layout(W.portrait)}addEventListener("resize",Sr),Sr(),addEventListener("pointermove",v=>{W.mouse.x=v.clientX/innerWidth*2-1,W.mouse.y=v.clientY/innerHeight*2-1},{passive:!0});function xd(v){if(!v)return;const F=!!W.section&&W.section.keys!==v.keys;W.section=v,W.energy=v.energy,W.keyCount=v.keys,v.bpm&&Fl(v.bpm,v.beatOffset??0),X.active&&Ut(!0),kl(v.keys),W.target.rotY=v.rotY,W.target.rotZ=v.rotZ,W.target.tilt=v.tilt,W.target.spread=v.spread,W.target.y=v.y,W.target.camZ=v.camZ+(W.portrait?6.4:0),W.target.camY=v.camY,W.target.bloom=X.active?X.theme==="intention"?X.intro?.42:.56:X.intro?Math.min(.38,v.bloom*.45):Math.min(.28,v.bloom*.3):v.bloom*.82,W.target.spin=v.spin,W.targetMotion={style:v.motion||"fan",amp:v.motionAmp??.06,speed:v.motionSpeed??.5,pitch:v.motionPitch??.03},W.cityTarget=v.city??0,F&&(W.zoomKick=Math.min(1.4,W.zoomKick+.85));const B={1:[3],2:[2,4],4:[2,3,4,5],6:[1,2,3,4,5,6],8:[0,1,2,3,4,5,6,7]};W.active=new Set(B[v.keys]||B[8]),W.live=new Set(W.active);for(let V=0;V<8;V++){const Y=W.active.has(V);_[V].active=Y?1:0,Y||(_[V].ghostFx=null),_[V].targetColor.copy(_[V].color).lerp(new He(v.color),.24),X.theme==="intention"&&_[V].targetColor.copy(_[V].color),Y&&(_[V].flash=Math.max(_[V].flash,.22))}L.slowColor.copy(_[0].targetColor),L.fastColor.copy(_[7].targetColor),se.color.set(v.accent)}function bd(v){const F=new Set(W.active);for(const V of v)F.add(V);let B=F.size!==W.live.size;if(!B){for(const V of F)if(!W.live.has(V)){B=!0;break}}if(B){W.live=F;for(const V of v)W.active.has(V)||(_[V].flash=Math.max(_[V].flash,.34),_[V].ghostFx=null)}}function Md(v){W.cityTarget=Math.max(0,Math.min(1,v))}function wd(v="run",F=1,B=null){const V=v||"off",Y=L.mode,he=B??W.time;Y==="run"||Y==="final"?L.anchorRun+=Math.max(0,he-L.anchorT):Y==="freeze"&&(L.anchorRun=L.runTime),L.anchorT=he,L.mode=V,V==="off"?(L.target=0,L.frozen=!1,L.rate=1):(L.target=1,L.frozen=V==="freeze",L.rate=V==="final"?1.65:1,L.kick=Math.max(L.kick,.25+F*.35))}function Sd(v="fast",F=1){if(!(L.fade<.015)&&(L.kick=Math.max(L.kick,.2+F*.32),v==="slow"?L.slowKick=Math.max(L.slowKick,.35+F*.55):L.fastKick=Math.max(L.fastKick,.35+F*.55),F>1.05&&L.fade>.3)){const B=L.group.localToWorld(new k(0,0,.35));Tt(B,v==="slow"?ue.getHex():Se.getHex(),.9+F*.35)}}function Td(){L.target=0,L.fade=0,L.mode="off",L.frozen=!1,L.rate=1,L.runTime=0,L.anchorT=0,L.anchorRun=0,L.slowAngle=0,L.fastAngle=0,L.slowKick=0,L.fastKick=0,L.kick=0,L.group.visible=!1,L.dialSlow.visible=!1,L.dialFast.visible=!1}function Ed(v){return _[v].baseX}function Ad(v){return qo*_[v].baseX*_[v].baseX}function Ei(v,F){return _[v].group.localToWorld(new k(0,F,.2))}const Tr=new k,Er=new k;function fo(){a.updateMatrixWorld(),st.updateWorldMatrix(!0,!1);for(let v=0;v<8;v++){const F=_[v];F.group.updateWorldMatrix(!1,!1);const B=F.group.matrixWorld;Tr.set(0,.04,.22).applyMatrix4(B).project(a),Er.set(0,11.4,.22).applyMatrix4(B).project(a);const V=(Tr.x*.5+.5)*innerWidth,Y=(-Tr.y*.5+.5)*innerHeight,he=(Er.x*.5+.5)*innerWidth,ge=(-Er.y*.5+.5)*innerHeight;F.screenAngle=Math.atan2(he-V,Y-ge),F.screen={x:V,y:Y,topX:he,topY:ge,angle:F.screenAngle}}}function Cd(v){return _[v].screen||fo(),_[v].screen}function Nl(){return fo(),_.map(v=>v.screen)}function Rd(){return Nl().map(v=>v.x)}function Pd(v){return _[v].screen||fo(),_[v].screenAngle}function Fl(v,F=0){W.bpm=v||100,W.beatOffset=F}function Ld(v){const F=_[v];F.flash=Math.max(F.flash,.55),F.ring.scale.setScalar(W.view.ring*1.1)}function Id(v,F="sweep"){const B=_[v];if(B){if(X.active){wr(F==="bounce"?.35:.2);return}B.ghostFx={type:F,t:0,dur:F==="bounce"?.85:1.15},F==="bounce"&&(B.flash=Math.max(B.flash,.65),Tt(Ei(v,.05),B.color.getHex(),1.7))}}function Dd(){for(const v of _)v.ghostFx=null,v.ghost.visible=!1,v.ghost.material.opacity=0}function Ol(v,F=1,B=1){const V=_[v];if(!V)return;if(X.active){wr(B*.28);return}const Y=Ei(v,.1+Math.random()*.12),he=3;for(let ge=0;ge<he;ge++){const Ve=pt[nn=(nn+1)%pt.length];Ve.sprite.position.copy(Y),Ve.sprite.position.y+=ge*.11,Ve.sprite.position.z+=ge*.05,Ve.sprite.material.color.copy(V.targetColor).lerp(Cn,.12+ge*.08),Ve.sprite.material.rotation=Math.random()*Math.PI*2,Ve.sprite.scale.set(.45,.45,1),Ve.life=Ve.max=1.15+ge*.24,Ve.delay=ge*.075,Ve.vx=F*(2.4+B*1.7)*(1-ge*.13)+(Math.random()-.5)*.5,Ve.vy=.45+B*.35+Math.random()*.25,Ve.base=.38+B*.38,Ve.alpha=(.62-ge*.13)*Math.min(1,B),Ve.spin=(Math.random()-.5)*1.2,Ve.sprite.visible=!1}}function Bl(v=1){W.energyPulse=Math.min(1.5,W.energyPulse+.35*v),W.shake=Math.min(.18,W.shake+.008*v),X.active&&X.theme==="intention"&&te.beat(v*.85)}function zl(v,F=1){let B;v==null?(B=st.localToWorld(new k(0,.3,.25)),St(B,10483199,Math.round(22*F),5.2),Tt(B,10483199,4.2)):(B=Ei(v,.08),St(B,_[v].targetColor,Math.round(14+10*F),3.2+F),Tt(B,_[v].targetColor.getHex(),2.4+F)),W.shake=Math.min(.2,W.shake+.02*F)}function Ud(v=1){Bl(v),W.zoomKick=Math.min(1.4,W.zoomKick+.22*v),zl(null,.7+v*.7);for(let F=0;F<8;F++)W.active.has(F)||Ol(F,F<3.5?-1:1,.7+v*.6)}function kd(v,F,B,V){W.targetMotion={style:v||"fan",amp:F??.08,speed:B??.6,pitch:V??.04}}function Nd(v,F){const B=_[v];B.flash=1,W.shake=Math.min(.16,W.shake+(F==="perfect"?.025:.016));const V=Ei(v,.05);if(St(V,B.color,F==="perfect"?22:14,3.5),Tt(V,B.color.getHex(),3),X.active&&X.theme==="intention"){const Y=te.level.phase;(Y==="field"||Y==="pillars"||Y==="halo")&&(X.intentFocusTarget=(v-3.5)*.2)}}function Fd(v){W.shake=Math.min(.25,W.shake+.13),_[v];const F=Ei(v,.05);St(F,16724831,9,1.4),Tt(F,16724831,2)}const Cn=new He(16777215);new He;let Gl=0;function Od(v,F,B){Gl+=v;const V=B?F:Gl;W.time=V,W.playing=B;const Y=W.view,he=W.target,ge=1-Math.exp(-v*2.2);Y.rotY+=(he.rotY-Y.rotY)*ge,Y.rotZ+=(he.rotZ-Y.rotZ)*ge,Y.tilt+=(he.tilt-Y.tilt)*ge,Y.spread+=(he.spread-Y.spread)*ge,Y.y+=(he.y-Y.y)*ge,Y.camZ+=(he.camZ-Y.camZ)*ge,Y.camY+=(he.camY-Y.camY)*ge,Y.spin+=(he.spin-Y.spin)*ge,Y.spacing+=(he.spacing-Y.spacing)*(1-Math.exp(-v*3.1)),Y.ring+=(he.ring-Y.ring)*(1-Math.exp(-v*3.1)),r.strength+=(he.bloom-r.strength)*ge,W.zoomKick*=Math.exp(-v*2.6),W.energyPulse*=Math.exp(-v*3.2);const Ve=60/W.bpm,Ke=((V-W.beatOffset)/Ve%1+1)%1,Xe=Math.exp(-Ke*5.2);W.pulse=Xe;const Ue=W.motion,Lt=W.targetMotion,gt=1-Math.exp(-v*2.2);Ue.amp+=(Lt.amp-Ue.amp)*gt,Ue.speed+=(Lt.speed-Ue.speed)*gt,Ue.pitch+=(Lt.pitch-Ue.pitch)*gt,Ue.style=Lt.style;const Ht=W.energyPulse;r.strength+=Ht*(X.active?.1:.32),X.active&&(r.strength=Math.min(r.strength,X.theme==="intention"?X.intro?.56:.72:X.intro?.5:.38)),_d(v,V),st.position.y=Y.y+Math.sin(V*.65)*.035+Xe*.03,st.rotation.y=Y.rotY+Math.sin(V*.22)*.02+Math.sin(V*.09)*Y.spin+(X.glitch>.01?(Math.random()-.5)*X.glitch*.012:0),st.rotation.z=Y.rotZ+Math.sin(V*.37)*.006+(X.glitch>.01?(Math.random()-.5)*X.glitch*.01:0),st.rotation.x=Y.tilt+Math.sin(V*.29)*.006;for(let j=0;j<8;j++){const ye=_[j];let zt=(j-3.5)*Y.spacing*Y.spread;W.keyCount===1?zt=j===3?0:(j<3?-1:1)*Y.spacing*4:W.keyCount===2&&(j===2?zt=-Y.spacing*.78:j===4&&(zt=Y.spacing*.78)),ye.baseX=zt,ye.group.position.x=zt,ye.group.position.z=qo*zt*zt,W.laneXNow[j]=zt;const bn=j-3.5;let rn=0;switch(Ue.style){case"fan":rn=-bn*Ue.amp;break;case"slope":rn=Ue.amp;break;case"tiltL":rn=Ue.amp*1.15;break;case"tiltR":rn=-Ue.amp*1.15;break;case"zigzag":rn=(j%2?1:-1)*Ue.amp*.95;break;case"wave":rn=Math.sin(V*Ue.speed+j*.72)*Ue.amp-bn*Ue.amp*.22;break;case"orbit":rn=Math.sin(V*Ue.speed*.72+bn*.38)*Ue.amp*.78-bn*Ue.amp*.3;break;default:rn=-bn*Ue.amp}rn+=Math.sin(V*1.15+j*.55)*Ue.amp*.12*(.4+W.energy),rn+=Xe*.006*Math.cos(j*.9+.4);const Ar=Math.sin(V*.55+j*.7)*Ue.pitch+Xe*Ue.pitch*.32*Math.sin(j*.8+.7)+Ht*.006,uo=1-Math.exp(-v*3.4);ye.angle+=(rn-ye.angle)*uo,ye.pitch+=(Ar-ye.pitch)*uo,W.laneAngle[j]=ye.angle,W.lanePitch[j]=ye.pitch,ye.group.rotation.z=ye.angle,ye.group.rotation.x=ye.pitch,ye.line.scale.y=12.4*Math.cos(ye.pitch),ye.beam.scale.y=12.6*Math.cos(ye.pitch);const ho=W.live.has(j);let Wn=0,Cr=0;if(ye.ghostFx){const mo=ye.ghostFx;mo.t+=v;const Rr=mo.t/mo.dur;if(Rr>=1)ye.ghostFx=null,ye.ghost.visible=!1,ye.ghost.material.opacity=0;else if(Wn=Math.sin(Math.PI*Rr),mo.type==="sweep"){ye.ghost.visible=!0,ye.ghost.position.set(0,.25+Rr*10.5,.08);const Vl=.85+.55*Wn;ye.ghost.scale.set(Vl,Vl,1),ye.ghost.material.opacity=Wn*.8,ye.ghost.material.color.copy(ye.targetColor).lerp(Cn,.3+Wn*.4)}else Cr=Wn,ye.ghost.visible=!1}const po=X.active?X.fieldFade:1,Gd=(ho?(j%2?.86:.96)*.58:Wn*.34)*po*(X.active?.45:1),Hd=(ho?.065+Xe*.03:Wn*.04)*po*(X.active?.55:1),Vd=(ho?.95:Cr*.78+Wn*.035)*po,Wd=X.active?.48:1;ye.line.material.opacity+=(Gd-ye.line.material.opacity)*(1-Math.exp(-v*3.5)),ye.beam.material.opacity+=(Hd-ye.beam.material.opacity)*(1-Math.exp(-v*3.5)),ye.ring.material.opacity+=(Vd-ye.ring.material.opacity)*(1-Math.exp(-v*3.5)),ye.glow.material.opacity+=(((ho?.14:Wn*.07)+ye.flash*.3)*po*Wd-ye.glow.material.opacity)*(1-Math.exp(-v*8)),ye.flash=Math.max(0,ye.flash-v*3.4);const Hl=Y.ring*(1+Xe*.045*(.4+W.energy)+ye.flash*.22+Cr*.5);ye.ring.scale.set(Hl,Hl,1),ye.ring.material.color.copy(ye.targetColor).lerp(Cn,ye.flash*.8),ye.glow.material.color.copy(ye.targetColor).lerp(Cn,ye.flash*.5),ye.line.material.color.copy(ye.targetColor).lerp(Cn,.14+ye.flash*.32),ye.beam.material.color.copy(ye.targetColor)}const on=(!X.active||X.fieldFade>.03)&&!X.fieldHidden;Ie.visible=on,we.visible=on,fo();for(let j=0;j<8;j++){const ye=_[j];ye.line.material.rotation=-ye.screenAngle,ye.beam.material.rotation=-ye.screenAngle}if(we.scale.x=(Y.spacing*(W.keyCount-1)+Y.ring*1.5)*Y.spread,we.material.opacity=(.45+Xe*.3+W.energy*.15+Ht*.16)*(X.active?X.fieldFade:1),X.active&&X.cameraLock){const j=Rt,ye=1-Math.exp(-v*j.rate);j.pos.lerp(j.targetPos,ye),j.look.lerp(j.targetLook,ye),j.fov+=(j.targetFov-j.fov)*ye,j.roll+=(j.targetRoll-j.roll)*ye,X.intentFocusTarget*=Math.exp(-v*.8);const bn=X.theme==="intention"&&!X.intro&&(te.level.phase==="field"||te.level.phase==="pillars"||te.level.phase==="halo")?X.intentFocusTarget:0;X.intentFocus+=(bn-X.intentFocus)*(1-Math.exp(-v*4.6)),a.position.copy(j.pos),a.position.x+=X.intentFocus,a.fov=j.fov,a.updateProjectionMatrix(),a.lookAt(j.look.x+X.intentFocus*.82,j.look.y,j.look.z),!X.intro&&X.theme!=="intention"&&md(j.roll),a.rotation.z+=j.roll,X.glitch>.01&&(a.position.x+=(Math.random()-.5)*X.glitch*.24,a.position.y+=(Math.random()-.5)*X.glitch*.2,a.rotation.z+=(Math.random()-.5)*X.glitch*.022),W.shake>5e-4&&(a.position.x+=(Math.random()-.5)*W.shake,a.position.y+=(Math.random()-.5)*W.shake,W.shake*=Math.exp(-v*10))}else{const j=W.mouse.x*.55,ye=Y.camY+W.mouse.y*.18;a.position.x+=(j-a.position.x)*(1-Math.exp(-v*2)),a.position.y+=(ye-a.position.y)*(1-Math.exp(-v*2)),a.position.z+=(Y.camZ-W.zoomKick*1.05-a.position.z)*(1-Math.exp(-v*3.4)),W.shake>5e-4&&(a.position.x+=(Math.random()-.5)*W.shake,a.position.y+=(Math.random()-.5)*W.shake,W.shake*=Math.exp(-v*10)),a.lookAt(0,4.05,0)}d.rotation.y+=v*.006,f.rotation.y-=v*.004,h.rotation.y+=v*.012,y.position.x=-16+Math.sin(V*.05)*2,x.position.y=1+Math.sin(V*.07+1)*2;for(let j=0;j<T.length;j++)T[j].rotation.z+=v*(.02+j*.012),T[j].rotation.y+=v*.008;if(W.city+=(W.cityTarget-W.city)*(1-Math.exp(-v*1.6)),P.visible=W.city>.012,P.visible){P.position.x=W.mouse.x*1.4;for(let j=0;j<C.length;j++){const ye=C[j];ye.map.offset.x+=v*ye.speed*(.7+W.energy*1.6+Xe*.8),ye.mesh.position.y=ye.base+Math.sin(V*.17+j*1.7)*.18,ye.mat.opacity=W.city*(j?.42:.3)}}if(L.fade+=(L.target-L.fade)*(1-Math.exp(-v*2.6)),L.group.visible=L.fade>.008,L.group.visible){if(L.target>0&&!L.frozen&&(L.runTime=L.anchorRun+Math.max(0,V-L.anchorT)),!L.frozen){const bn=60/Math.max(1,W.bpm),rn=L.runTime/(bn*32)*Math.PI*2,Ar=bn*(L.mode==="final"?.34:.5),uo=Math.floor((V-W.beatOffset)/Ar)*(Math.PI*2/12);L.slowAngle+=(rn-L.slowAngle)*(1-Math.exp(-v*4)),L.fastAngle+=(uo-L.fastAngle)*(1-Math.exp(-v*20)),L.handSlow.material.rotation=-L.slowAngle,L.handFast.material.rotation=-L.fastAngle}L.slowKick=Math.max(0,L.slowKick-v*3.6),L.fastKick=Math.max(0,L.fastKick-v*4.4),L.kick=Math.max(0,L.kick-v*3.1);const j=L.fade;L.face.material.opacity=j*(.34+L.kick*.14),L.aura.material.opacity=j*(.085+L.kick*.08),L.hub.material.opacity=j*(.5+L.kick*.45),L.handSlow.material.opacity=j*(.72+L.slowKick*.34),L.handFast.material.opacity=j*(.82+L.fastKick*.28),L.handSlow.material.color.copy(L.slowColor).lerp(Cn,L.slowKick*.75),L.handFast.material.color.copy(L.fastColor).lerp(Cn,L.fastKick*.75);const ye=1.9*(1+L.kick*.26+Math.sin(V*7.5)*.025);L.hub.scale.set(ye,ye,1);const zt=1+L.kick*.012;L.face.scale.set(21.6*zt,21.6*zt,1),L.dialSlow.visible=!0,L.dialFast.visible=!0,L.dialSlow.material.rotation=-L.slowAngle,L.dialFast.material.rotation=-L.fastAngle,L.dialSlow.material.opacity=j*(.3+L.slowKick*.24),L.dialFast.material.opacity=j*(.36+L.fastKick*.24),L.dialSlow.material.color.copy(L.slowColor).lerp(Cn,L.slowKick*.7),L.dialFast.material.color.copy(L.fastColor).lerp(Cn,L.fastKick*.7)}Z(v,V);for(const j of S)j.rotation.x+=j.userData.spin.x*v,j.rotation.y+=j.userData.spin.y*v,j.rotation.z+=j.userData.spin.z*v,j.position.y+=Math.sin(V*.4+j.position.x)*v*.06;let Vn=!1;for(let j=0;j<de;j++){if(qe[j]<=0)continue;if(Vn=!0,qe[j]-=v,qe[j]<=0){be[j*3+1]=-999;continue}Ee[j*3]*=.972,Ee[j*3+1]-=2.4*v,Ee[j*3+2]*=.972,be[j*3]+=Ee[j*3]*v,be[j*3+1]+=Ee[j*3+1]*v,be[j*3+2]+=Ee[j*3+2]*v;const ye=Math.max(0,qe[j]/it[j]);Re[j*3]*=.988,Re[j*3+1]*=.988,Re[j*3+2]*=.988,ye<.25&&(Re[j*3]*=ye/.25,Re[j*3+1]*=ye/.25,Re[j*3+2]*=ye/.25)}Vn&&(Ye.attributes.position.needsUpdate=!0,Ye.attributes.color.needsUpdate=!0);for(const j of At){if(j.life<=0)continue;j.life-=v;const ye=1-Math.max(0,j.life/j.max),zt=.75+ye*j.scale;j.sprite.scale.set(zt,zt,1),j.sprite.material.opacity=(1-ye)*.9,j.life<=0&&(j.sprite.visible=!1)}for(const j of pt){if(j.delay>0&&(j.delay-=v,j.delay>0)||j.life<=0)continue;if(j.life-=v,j.life<=0){j.sprite.visible=!1;continue}const ye=1-j.life/j.max;j.vx*=Math.exp(-v*2.5),j.vy*=Math.exp(-v*1.9),j.sprite.position.x+=j.vx*v,j.sprite.position.y+=j.vy*v,j.sprite.material.rotation+=j.spin*v;const zt=j.base*(.7+ye*1.15);j.sprite.scale.set(zt,zt,1),j.sprite.material.opacity=Math.pow(1-ye,1.55)*j.alpha,j.sprite.visible=!0}}function Bd(){o.render()}function zd(){t.dispose()}return{scene:n,camera:a,stage:st,noteRoot:tt,state:W,clock:L,boss:X,bloom:r,laneRoot:Ie,windRoot:O,church:R,intention:te,makeNote:K,setSection:xd,animate:Od,render:Bd,laneX:Ed,laneZ:Ad,worldPoint:Ei,laneScreenXs:Rd,laneScreenPoints:Nl,laneScreenGeometry:Cd,laneScreenAngle:Pd,setPreviewLanes:bd,setCity:Md,setTempo:Fl,setClock:wd,clockTick:Sd,clockReset:Td,setBoss:_n,bossCameraEvent:an,bossGlitch:gd,bossTick:yd,windFx:wr,freeNotePose:G,setIntentionPhase:v=>te.setPhase(v),intentionPulse:v=>te.beat(v),setIntentFieldHidden:en,setIntentNoteLayerHidden:vn,startPendulum:gr,stopPendulum:lo,swingResolve:_r,swingWhiff:vr,pendulumReset:yr,pendulumTargetScreen:z,pendulum:ne,pressFx:Ld,hitFx:Nd,missFx:Fd,ghostFx:Id,echoFx:Ol,pulseFx:Bl,burstFx:zl,vibeFx:Ud,motionEvent:kd,clearGhosts:Dd,layout:Sr,dispose:zd,get noteSpeed(){return W.noteSpeed},set noteSpeed(v){W.noteSpeed=v},get noteScale(){return Math.max(1,Math.min(1.3,W.view.ring/1.65))}}}class Ig{constructor(){this.ctx=null,this.buffer=null,this.source=null,this.gain=null,this.startAt=0,this.offset=0,this.duration=0,this.loaded=!1,this.muted=!1,this.hitGain=null,this.cache=new Map}async load(e,t){let n=this.cache.get(e);if(!n){const a=await fetch(e);if(!a.ok)throw new Error("audio fetch failed: "+a.status);const o=Number(a.headers.get("content-length"))||115e4;let r;if(a.body&&a.body.getReader){const s=a.body.getReader(),l=[];let c=0;for(t?.(0);;){const{value:f,done:h}=await s.read();if(h)break;l.push(f),c+=f.length,t?.(Math.min(.94,c/o))}r=new Uint8Array(c);let d=0;for(const f of l)r.set(f,d),d+=f.length}else r=new Uint8Array(await a.arrayBuffer());t?.(.95),this.ctx=this.ctx||new(window.AudioContext||window.webkitAudioContext)({latencyHint:"interactive"}),n=await this.ctx.decodeAudioData(r.buffer),this.cache.set(e,n)}return this.gain||(this.gain=this.ctx.createGain(),this.gain.gain.value=.92,this.gain.connect(this.ctx.destination)),this.hitGain||(this.hitGain=this.ctx.createGain(),this.hitGain.gain.value=.5,this.hitGain.connect(this.ctx.destination)),t?.(1),n}setBuffer(e){e&&(this.buffer=e,this.duration=e.duration,this.loaded=!0)}async start(e=0,t={}){if(!this.loaded)return;if(!this.ctx)throw new Error("no audio context");this.ctx.state!=="running"&&await this.ctx.resume(),this.stop(),this.source=this.ctx.createBufferSource(),this.source.buffer=this.buffer,this.source.connect(this.gain);const n=this.ctx.currentTime+.12;this.startAt=n,this.offset=e;try{const a=Math.max(0,(t.fadeStart??this.duration-6.7)-e),o=Math.max(.05,(t.fadeEnd??this.duration-4.7)-e);this.gain.gain.cancelScheduledValues(this.ctx.currentTime),this.gain.gain.setValueAtTime(.92,this.ctx.currentTime),this.gain.gain.setValueAtTime(.92,n+a),this.gain.gain.linearRampToValueAtTime(0,n+o)}catch{}this.source.start(n,e)}stop(){if(this.source){try{this.source.stop()}catch{}this.source.disconnect(),this.source=null}}pause(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}get time(){return this.ctx?this.ctx.currentTime-this.startAt+this.offset:0}get paused(){return!!this.ctx&&this.ctx.state==="suspended"}click(e=3,t=1){if(!this.ctx||this.ctx.state!=="running"||this.muted)return;const n=this.ctx.currentTime,a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="triangle";const r=360*Math.pow(2,e/12);a.frequency.setValueAtTime(r*1.5,n),a.frequency.exponentialRampToValueAtTime(r*.75,n+.035),o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(.035*t,n+.004),o.gain.exponentialRampToValueAtTime(1e-4,n+.055),a.connect(o),o.connect(this.hitGain),a.start(n),a.stop(n+.07)}thud(){if(!this.ctx||this.ctx.state!=="running"||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(90,e),t.frequency.exponentialRampToValueAtTime(45,e+.12),n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.05,e+.01),n.gain.exponentialRampToValueAtTime(1e-4,e+.18),t.connect(n),n.connect(this.hitGain),t.start(e),t.stop(e+.2)}}const Vf={KeyA:0,KeyS:1,KeyD:2,KeyF:3,KeyJ:4,KeyK:5,KeyL:6,Semicolon:7,Numpad1:0,Numpad2:1,Numpad3:2,Numpad4:3,Numpad5:4,Numpad6:5,Numpad7:6,Numpad8:7},$c={4:[2,3,4,5],6:[1,2,3,4,5,6],8:[0,1,2,3,4,5,6,7]},ro=.185,ma={perfect:.045,great:.09,good:.135},Wf={perfect:3e3,great:2e3,good:1e3,bad:300},Xf={perfect:1,great:.85,good:.55,bad:.25,miss:0},Yf="cryout-best-v2",Dg="cryout-best-v1",Ug=2.05,qf=512,_e=i=>document.getElementById(i),U={canvas:_e("scene"),hud:_e("hud"),pads:[...document.querySelectorAll(".pad")],centerPad:_e("centerPad"),start:_e("startScreen"),startBtn:_e("startBtn"),startLabel:_e("startBtnLabel"),loadFill:_e("loadFill"),startLanes:_e("startLanes"),startTrack:_e("startTrack"),startLength:_e("startLength"),startLevel:_e("startLevel"),trackCards:[...document.querySelectorAll(".track-card")],score:_e("score"),acc:_e("acc"),maxCombo:_e("maxCombo"),progress:_e("progressFill"),progressGlow:_e("progressGlow"),section:_e("sectionName"),time:_e("timeLabel"),keys:_e("keysCount"),energy:_e("energyFill"),comboHud:_e("comboHud"),comboNum:_e("comboNum"),judge:_e("judge"),pauseBtn:_e("pauseBtn"),pause:_e("pauseScreen"),result:_e("resultScreen"),toast:_e("toast"),rank:_e("rank"),finalScore:_e("finalScore"),finalAcc:_e("finalAcc"),cPerfect:_e("cPerfect"),cGreat:_e("cGreat"),cGood:_e("cGood"),cBad:_e("cBad"),cMiss:_e("cMiss"),fMaxCombo:_e("fMaxCombo"),fcBadge:_e("fcBadge"),resultTag:_e("resultTag"),bestScoreLabel:_e("bestScoreLabel"),bestBadge:_e("bestBadge"),bestNote:_e("bestNote"),bestLine:_e("bestLine"),hudTrack:_e("hudTrack"),hudBpm:_e("hudBpm"),clearCount:_e("clearCount"),resultTrack:_e("resultTrack"),resultDiff:_e("resultDiff"),resultBpm:_e("resultBpm"),footTrack:_e("footTrack"),footLanes:_e("footLanes"),barPerfect:_e("barPerfect"),barGreat:_e("barGreat"),barGood:_e("barGood"),barBad:_e("barBad"),barMiss:_e("barMiss"),peakCombo:_e("peakCombo"),comboLine:_e("comboLine"),comboFill:_e("comboFill"),accRing:_e("accRing"),scoreDelta:_e("scoreDelta"),resultLoading:_e("resultLoading"),loadTrack:_e("loadTrack"),loadProgress:_e("loadProgress"),loadPct:_e("loadPct"),loadRank:_e("loadRank"),flash:_e("flash"),bossGlitch:_e("bossGlitch"),bossCaption:_e("bossCaption"),bcKicker:_e("bcKicker"),bcTitle:_e("bcTitle"),bcSub:_e("bcSub"),guilt:_e("guiltHud"),guiltFill:_e("guiltFill"),guiltPct:_e("guiltPct"),guiltCopy:_e("guiltCopy"),heartbeat:_e("heartbeat"),intentText:_e("intentGlitchText"),intentTextSub:_e("intentGlitchSub"),yellow:_e("yellowVignette"),rainbow:_e("rainbowWash"),whiteout:_e("whiteout"),syncEl:document.querySelector(".sync")},Ce=Lg(U.canvas),kt=new Ig;let ut=cl[$d]||ha[0],Ot=ut.chart,Gn=[],zi=[],Si=!1,Mt="boot",wa=null,tl=0,Tl=Ot.song.chartEnd,nl=Ot.song.duration,Zo=0,ga=0,xi=[],il=0,al=0,ol=0,jc=0,rl=0,cs=!1;const Ne={phase:"off",guiltOn:!1,guilt:100,fakeGuilt:!1,fakeValue:14,fakeBase:14,fakeStart:0,heartOn:!1,heartBpm:150,hbAcc:0,screenGlitch:!1,glitchAcc:0,forceSync:!1,notesHidden:!1},We={score:0,combo:0,maxCombo:0,judged:0,weight:0,perfect:0,great:0,good:0,bad:0,miss:0,dropped:0,health:100},Dn=new Array(8).fill(!1),Gi=new Array(8).fill(null),ai=new Set;function Zf(){return ai.size>0}let Jc=0,qa=0,Za=0;function kg(){const i={};try{const e=localStorage.getItem(Dg);e&&(i.cryout=JSON.parse(e))}catch{}try{const e=localStorage.getItem(Yf);e&&Object.assign(i,JSON.parse(e)||{})}catch{}for(const[e,t]of Object.entries(i)){if(!t||typeof t!="object"||!(Number(t.score)>0)){delete i[e];continue}t.score=Math.round(Number(t.score)),t.acc=Number.isFinite(t.acc)?t.acc:0,t.maxCombo=Number.isFinite(t.maxCombo)?t.maxCombo:0}return i}let bi=kg(),Xa=bi[ut.id]||null;function Qc(i){return!!i&&(i.acc||0)>=50}function Kf(){Xa=bi[ut.id]||null;const i=Xa?`${String(Xa.score).padStart(7,"0")} · ${Xa.rank||"—"}`:"—";U.bestScoreLabel&&(U.bestScoreLabel.textContent=i),U.bestLine&&(U.bestLine.innerHTML=`PERSONAL BEST <b>${i}</b>`);for(const e of U.trackCards){const t=bi[e.dataset.track],n=e.querySelector(".tc-best");n&&(n.textContent=t?`PB ${t.rank||"—"}`:"",n.title=t?`Personal best ${t.score} · ${(t.acc||0).toFixed(2)}%`:""),e.classList.toggle("cleared",Qc(t))}if(U.clearCount){const e=ha.filter(t=>Qc(bi[t.id])).length;U.clearCount.textContent=`${e} / ${ha.length} CLEARED`,U.clearCount.classList.toggle("all",e===ha.length)}}Ce.setSection(Ot.sections[0]);Ce.setTempo(Ot.song.bpm,Ot.song.beatOffset);Ce.setCity(Ot.sections[0].city||0);Ce.setBoss(ut.boss?"preview":"off",ut.theme||"untouchable");function Ng(){for(const i of Gn)i.group.removeFromParent(),i.head.material.dispose(),i.body&&i.body.material.dispose(),i.tail&&i.tail.material.dispose();Gn=[]}function $f(){Ng(),zi=(Ot.swings||[]).map((e,t)=>({t:e.t,index:t,state:"pending"}));const i=!!Ot.song.freeNotes;Gn=Ot.notes.map((e,t)=>{const n=Ce.makeNote(e.lane,e.type,i);return n.group.visible=!1,{data:e,index:t,lane:e.lane,type:e.type,free:i,state:"pending",endTime:e.t+(e.dur||0),group:n.group,head:n.head,body:n.body,tail:n.tail,color:n.color,tickAt:e.t}})}function El(){for(const i of Gn)i.state="pending",i.tickAt=i.data.t,i.group.visible=!1,i.group.position.set(0,0,0),i.head.visible=!0,i.head.scale.set(1.04,1.04,1),i.head.material.opacity=1,i.body&&(i.body.visible=!0,i.body.scale.set(.52,1,1),i.body.position.y=.5,i.tail.visible=!0,i.tail.position.y=1);Object.assign(We,{score:0,combo:0,maxCombo:0,judged:0,weight:0,perfect:0,great:0,good:0,bad:0,miss:0,dropped:0,health:100}),Dn.fill(!1),Gi.fill(null),ai.clear(),qa=0,Za=0,xi=[],il=0,al=0,Ce.clearGhosts(),Ce.clockReset(),cr(),Ce.pendulumReset(),nd();for(const i of zi)i.state="pending";tl=0,wa=null,id(Ot.sections[0],!0),Jf(0),wi(0,!1),U.judge.className="";for(const i of U.pads)i.classList.remove("pressed");U.flash.classList.remove("on")}function jf(i){return $c[i]||$c[8]}function Fg(i){const e=new Set;for(const t of Gn){if(t.state!=="pending")continue;const n=t.data.t-i;n<Ug&&n>-ro&&e.add(t.lane)}return e}function Og(i){return String(i).padStart(2,"0")}function sl(i){const e=Math.max(0,Math.floor(i));return`${Math.floor(e/60)}:${Og(e%60)}`}function Jf(i){i-il>=.32&&(il=i,xi.push(We.combo),xi.length>qf&&xi.shift()),U.score.textContent=String(We.score).padStart(7,"0");const e=We.judged?We.weight/We.judged*100:100;U.acc.textContent=e.toFixed(2)+"%",U.maxCombo.textContent=We.maxCombo;const t=Math.max(0,Math.min(1,i/Tl));U.progress.style.width=(t*100).toFixed(2)+"%",U.progressGlow.style.left=(t*100).toFixed(2)+"%";const n=Math.max(0,Math.min(nl,i));U.time.textContent=`${sl(n)} / ${sl(nl)}`,U.energy.style.height=(Ne.forceSync?100:Math.max(0,Math.min(100,We.health))).toFixed(1)+"%"}function so(i,e){const t=U.judge;t.textContent=e||i.toUpperCase(),t.className=i,t.offsetWidth,t.classList.add("pop")}function wi(i,e=!0){We.combo=i,i>We.maxCombo&&(We.maxCombo=i),U.comboNum.textContent=i,U.maxCombo.textContent=We.maxCombo,i>=2?U.comboHud.classList.add("on"):U.comboHud.classList.remove("on"),i>=2&&e&&(U.comboHud.classList.remove("bump"),U.comboHud.offsetWidth,U.comboHud.classList.add("bump"))}function Sa(i,e=1300){U.toast.textContent=i,U.toast.classList.add("on"),clearTimeout(Jc),Jc=setTimeout(()=>U.toast.classList.remove("on"),e)}function Ta(i){document.body.classList.toggle("boss-intro",i),i||Ia()}function pr(i,e=!1){const t=i&&ut.theme==="intention";document.body.classList.toggle("intent-clean",t),ll(t&&e)}function ll(i){cs=!!i&&ut.theme==="intention",document.body.classList.toggle("intent-cutscene",cs),cs||Ia()}function Ia(){clearTimeout(ol),U.bossCaption&&(U.bossCaption.classList.remove("on"),U.bossCaption.setAttribute("aria-hidden","true"))}function Bg(i){if(!U.bossCaption)return;clearTimeout(ol),U.bcKicker.textContent=i.kicker||"",U.bcTitle.textContent=i.title||"",U.bcSub.textContent=i.sub||"",U.bossCaption.setAttribute("aria-hidden","false"),U.bossCaption.classList.remove("on"),U.bossCaption.offsetWidth,U.bossCaption.classList.add("on");const e=i.hold??3.4;e>0&&(ol=setTimeout(()=>{U.bossCaption.classList.remove("on"),U.bossCaption.setAttribute("aria-hidden","true")},e*1e3))}function Qf(i=1){U.bossGlitch&&(U.bossGlitch.classList.remove("on"),U.bossGlitch.offsetWidth,U.bossGlitch.classList.add("on"),clearTimeout(jc),jc=setTimeout(()=>U.bossGlitch.classList.remove("on"),340))}function Ea(){const i=Math.max(0,Math.min(100,Ne.fakeGuilt?Ne.fakeValue:Ne.guilt));U.guiltFill&&(U.guiltFill.style.width=i.toFixed(1)+"%"),U.guiltPct&&(U.guiltPct.textContent=String(Math.round(i)))}function ed(i){Ne.notesHidden!==i&&(Ne.notesHidden=i,Ce.setIntentNoteLayerHidden(i))}function zg(i,e="",t=3.2){if(!U.intentText)return;clearTimeout(rl);const n=U.intentText.querySelector("span");n&&(n.textContent=i||"INTENTIONS",n.setAttribute("data-text",i||"INTENTIONS")),U.intentTextSub&&(U.intentTextSub.textContent=e||""),U.intentText.classList.remove("on"),U.intentText.offsetWidth,U.intentText.classList.add("on"),t>0&&(rl=setTimeout(()=>U.intentText.classList.remove("on"),t*1e3))}function td(){for(const i of["guilt-on","guilt-fake","heartbeat-on","static-on","static-heavy","distort-on","bright-on","intent-whiteout","intent-black","intent-yellow","intent-glitch"])document.body.classList.remove(i);U.heartbeat?.classList.remove("on","beat"),U.intentText?.classList.remove("on"),U.whiteout?.classList.remove("on"),U.yellow?.classList.remove("on"),U.rainbow?.classList.remove("on"),U.syncEl?.classList.remove("rainbow")}function nd(){clearTimeout(rl),td(),Ne.phase="off",Ne.guiltOn=!1,Ne.guilt=100,Ne.fakeGuilt=!1,Ne.fakeValue=14,Ne.fakeBase=14,Ne.fakeStart=0,Ne.heartOn=!1,Ne.heartBpm=150,Ne.hbAcc=0,Ne.screenGlitch=!1,Ne.glitchAcc=0,Ne.forceSync=!1,Ne.notesHidden&&(Ne.notesHidden=!1,document.body.classList.remove("intent-field-hidden"),Ce.setIntentNoteLayerHidden(!1)),U.guiltCopy&&(U.guiltCopy.textContent="CONSISTENT PERFECTS KEEP IT FULL"),Ea()}function Gg(i){const e=i.on!==!1;switch(i.hud){case"clear":td(),Ne.guiltOn=!1,Ne.fakeGuilt=!1,Ne.heartOn=!1,Ne.screenGlitch=!1,Ne.forceSync=!1,Ne.notesHidden&&ed(!1);break;case"black":document.body.classList.toggle("intent-black",e);break;case"guilt":Ne.guiltOn=e,Ne.fakeGuilt=!1,e&&(Ne.guilt=i.value??100),document.body.classList.toggle("guilt-on",e),document.body.classList.remove("guilt-fake"),U.guiltCopy&&(U.guiltCopy.textContent="CONSISTENT PERFECTS KEEP IT FULL"),Ea();break;case"fakeGuilt":Ne.fakeGuilt=e,Ne.guiltOn=e,e&&(Ne.fakeBase=i.value??14,Ne.fakeValue=Ne.fakeBase,Ne.fakeStart=kt.time),document.body.classList.toggle("guilt-fake",e),document.body.classList.toggle("guilt-on",e),U.guiltCopy&&(U.guiltCopy.textContent="IT WILL NOT REFILL"),Ea();break;case"heartbeat":Ne.heartOn=e,i.bpm&&(Ne.heartBpm=i.bpm),Ne.hbAcc=0,U.heartbeat?.classList.toggle("on",e),document.body.classList.toggle("heartbeat-on",e);break;case"glitch":Ne.screenGlitch=e,document.body.classList.toggle("intent-glitch",e);break;case"text":e?zg(i.text,i.sub,i.hold??3.2):U.intentText?.classList.remove("on");break;case"static":document.body.classList.toggle("static-on",e),document.body.classList.toggle("static-heavy",e&&(i.power??0)>=.9),document.body.classList.toggle("static-soft",e&&(i.power??0)<.9);break;case"distort":document.body.classList.toggle("distort-on",e);break;case"bright":document.body.classList.toggle("bright-on",e);break;case"white":U.whiteout?.classList.toggle("on",e),document.body.classList.toggle("intent-whiteout",e);break;case"yellow":document.body.classList.toggle("intent-yellow",e),U.yellow?.classList.toggle("on",e);break;case"rainbow":Ne.forceSync=e,U.syncEl?.classList.toggle("rainbow",e),U.rainbow?.classList.toggle("on",e),e&&(U.energy.style.height="100%");break}}function Hg(i){if(i.mode==="phase"){Ne.phase=i.phase,Ce.setIntentionPhase(i.phase),ed(i.phase==="dawn");return}i.mode==="hud"&&Gg(i)}function Al(i){if(!Ne.guiltOn||Ne.fakeGuilt)return;const e=i==="perfect"?1.35:i==="great"?.95:i==="good"?.5:i==="bad"?-2.2:-6;Ne.guilt=Math.max(0,Math.min(100,Ne.guilt+e)),Ea()}function Vg(i,e){if(Ne.guiltOn&&!Ne.fakeGuilt){let t=0;for(const o of Gn)o.state==="pending"&&o.data.t>=e&&o.data.t<e+2.4&&t++;const n=t/2.4,a=.5+Math.min(1.5,n*.55);Ne.guilt=Math.max(0,Math.min(100,Ne.guilt-a*i)),Ea()}if(Ne.fakeGuilt){const t=Math.max(0,kt.time-Ne.fakeStart);Ne.fakeValue=Math.max(2.6,Ne.fakeBase-t*.5),Ea()}if(Ne.heartOn){Ne.hbAcc+=i;const t=60/Math.max(40,Ne.heartBpm);if(Ne.hbAcc>=t){Ne.hbAcc%=t;const n=U.heartbeat;n&&(n.classList.remove("beat"),n.offsetWidth,n.classList.add("beat"))}}else Ne.hbAcc=0;Ne.screenGlitch&&(Ne.glitchAcc+=i,Ne.glitchAcc>.52+Math.random()*.4&&(Ne.glitchAcc=0,Ce.bossGlitch(.32+Math.random()*.3),Qf(.45)))}function id(i,e=!1){if(!i||!e&&i===wa)return;wa=i,Ce.setSection(i),i.bpm&&Ce.setTempo(i.bpm,i.beatOffset??0),tr=sd*(i.noteSpeed||1),U.section.textContent=i.name,U.keys.textContent=i.keys,U.hudBpm&&i.bpm&&(U.hudBpm.textContent=`${Number(i.bpm).toFixed(1).replace(/\.0$/,"")} BPM`);const t=new Set(jf(i.keys));for(const n of U.pads){const a=Number(n.dataset.lane),o=t.has(a);n.classList.toggle("active",o),n.classList.toggle("sleep",!o),n.setAttribute("aria-hidden",String(!o)),n.tabIndex=o?0:-1}document.documentElement.style.setProperty("--cyan",i.color),document.documentElement.style.setProperty("--magenta",i.accent),e||(ut.boss&&i.intro||Sa(`${i.name} // ${i.keys} LANES`,1100),Ce.state.shake=Math.min(.12,Ce.state.shake+.035))}function Wg(i){const e=Ot.sections;for(let t=e.length-1;t>=0;t--)if(i>=e[t].start)return{index:t,sec:e[t]};return{index:0,sec:e[0]}}function Xg(i,e){const t=Math.abs(e);let n;t<=ma.perfect?n="perfect":t<=ma.great?n="great":t<=ma.good?n="good":n="bad",We[n]++,We.judged++,We.weight+=Xf[n],We.score+=Wf[n],We.health=Math.min(100,We.health+(n==="perfect"?1.1:n==="great"?.8:n==="good"?.4:-1.6)),Al(n),n==="bad"?wi(0,!1):wi(We.combo+1),i.type==="hold"?(i.state="holding",i.endTime=i.data.t+i.data.dur,i.tickAt=kt.time,i.head.visible=!1,Gi[i.lane]=i):(i.state="done",i.group.visible=!1),so(n,n==="perfect"?"PERFECT":n==="great"?"GREAT":n==="good"?"GOOD":"BAD"),Ce.hitFx(i.lane,n),kt.click(i.lane,n==="perfect"?.52:.38)}function Yg(i){i.state==="pending"&&(i.state="miss",i.group.visible=!1,We.miss++,We.judged++,We.health=Math.max(0,We.health-5),wi(0,!1),so("miss","MISS"),Ce.missFx(i.lane),kt.thud(),Al("miss"))}function ad(i){i.state==="holding"&&(i.state="dropped",i.group.visible=!1,Gi[i.lane]=null,We.dropped++,We.miss++,We.judged++,We.health=Math.max(0,We.health-4),wi(0,!1),so("miss","HOLD LOST"),Ce.missFx(i.lane),kt.thud(),Al("miss"))}function od(i){i.state==="holding"&&(i.state="done",i.group.visible=!1,Gi[i.lane]=null,We.score+=450,We.health=Math.min(100,We.health+1.2),Ce.pressFx(i.lane),Ce.hitFx(i.lane,"great"))}function Cl(i){if(Mt!=="playing")return;Ce.pressFx(i),kt.click(i,.16);const e=kt.time;if(e<0)return;let t=null,n=1/0;for(const a of Gn){if(a.lane!==i||a.state!=="pending")continue;const o=e-a.data.t;if(o<-.16||o>ro)continue;const r=Math.abs(o);r<n&&(n=r,t=a)}t&&Xg(t,e-t.data.t)}function Rl(i){if(Mt!=="playing")return;const e=Gi[i];e&&(Zf()||(Gi[i]=null,kt.time<e.endTime-.12?ad(e):od(e)))}function qg(i){zi.length&&(Si=!0,Ce.startPendulum({start:i.t,period:i.period??2.4146,amplitude:i.amplitude??.42,times:zi.map(e=>e.t)}),document.body.classList.add("pendulum"),U.centerPad.classList.add("show"),U.centerPad.setAttribute("aria-hidden","false"),rd(),Sa("STASIS // TAP THE CENTRE",1800))}function cr(){Si=!1,Ce.stopPendulum(),document.body.classList.remove("pendulum"),U.centerPad&&(U.centerPad.classList.remove("show","pressed"),U.centerPad.setAttribute("aria-hidden","true"))}function rd(){if(!Si||!U.centerPad)return;const i=Ce.pendulumTargetScreen(),e=Math.max(140,i.radius*2);U.centerPad.style.left=i.x.toFixed(1)+"px",U.centerPad.style.top=i.y.toFixed(1)+"px",U.centerPad.style.width=e.toFixed(1)+"px",U.centerPad.style.height=e.toFixed(1)+"px"}function Zg(i,e){const t=Math.abs(e);let n;t<=ma.perfect?n="perfect":t<=ma.great?n="great":t<=ma.good?n="good":n="bad",i.state="done",We[n]++,We.judged++,We.weight+=Xf[n],We.score+=Wf[n],We.health=Math.min(100,We.health+(n==="perfect"?1.2:n==="great"?.9:n==="good"?.5:-1.4)),n==="bad"?wi(0,!1):wi(We.combo+1),so(n,n==="perfect"?"PERFECT":n==="great"?"GREAT":n==="good"?"GOOD":"BAD"),Ce.swingResolve(i.index,"hit"),kt.click(3,n==="perfect"?.56:.4)}function Kg(i){i.state==="pending"&&(i.state="miss",We.miss++,We.judged++,We.health=Math.max(0,We.health-5),wi(0,!1),so("miss","MISS"),Ce.swingResolve(i.index,"miss"),kt.thud())}function $g(i){if(Si)for(const e of zi)e.state==="pending"&&i>e.t+ro&&Kg(e)}function Pl(){if(Mt!=="playing"||!Si)return;const i=kt.time;let e=null,t=1/0;for(const n of zi){if(n.state!=="pending")continue;const a=i-n.t;if(a<-.16||a>ro)continue;const o=Math.abs(a);o<t&&(t=o,e=n)}if(!e){Ce.swingWhiff(),kt.click(3,.1);return}Zg(e,i-e.t)}const sd=8.4;let tr=sd;function jg(i){const e=Ce.noteScale;for(const t of Gn)if(t.state==="pending"){const n=(t.data.t-i)*tr;if(t.free){const a=Ce.freeNotePose(t.lane,n,t.index);t.group.position.set(a.x,a.y,a.z)}else t.group.position.set(0,n,.24);if(t.group.visible=n<14.5&&n>-1.3,t.head.scale.set(1.04*e,1.04*e,1),t.body){const a=t.data.dur*tr;t.body.visible=t.group.visible,t.tail.visible=t.group.visible,t.body.scale.set(.52*e,a,1),t.body.position.y=a/2,t.body.material.rotation=t.free?0:-Ce.laneScreenAngle(t.lane),t.tail.scale.set(.68*e,.68*e,1),t.tail.position.y=a}i>t.data.t+ro&&Yg(t)}else if(t.state==="holding"){if(!Dn[t.lane]&&!Zf()){ad(t);continue}if(i>=t.endTime-.02){od(t);continue}const n=Math.max(0,(t.endTime-i)*tr);if(t.group.visible=!0,t.free){const a=Ce.freeNotePose(t.lane,0,t.index);t.group.position.set(a.x,.02,a.z)}else t.group.position.set(0,.02,.24);t.head.visible=!1,t.body&&(t.body.visible=n>.03,t.body.scale.set(.52*e,n,1),t.body.position.y=n/2,t.body.material.rotation=t.free?0:-Ce.laneScreenAngle(t.lane),t.tail.visible=n>.4,t.tail.scale.set(.68*e,.68*e,1),t.tail.position.y=n),i>t.tickAt&&(t.tickAt=i+.12,We.score+=24,We.health=Math.min(100,We.health+.06))}else t.group.visible=!1}async function Ll(){if(kt.loaded){ga++,U.start.classList.remove("show"),U.result.classList.remove("show"),U.resultLoading.classList.remove("show"),U.pause.classList.remove("show"),U.hud.classList.remove("hidden"),U.hud.setAttribute("aria-hidden","false"),document.body.classList.add("playing"),Ia(),U.bossGlitch?.classList.remove("on"),ut.boss?(Ce.setBoss("intro",ut.theme||"untouchable"),Ta(!0)):(Ce.setBoss("off",ut.theme||"untouchable"),Ta(!1)),pr(ut.theme==="intention",!0),El(),Mt="starting";try{await kt.start(0,{fadeStart:ut.fadeStart,fadeEnd:ut.fadeEnd}),Mt="playing",ut.boss||Sa(`LISTEN // ${Ot.sections[0].keys} LANES`,1500)}catch(i){console.error(i),Mt="menu",document.body.classList.remove("playing"),U.hud.classList.add("hidden"),U.start.classList.add("show"),U.startLabel.textContent="AUDIO ERROR",Sa("AUDIO COULD NOT START",3e3)}}}function mr(){Mt==="playing"&&(Mt="paused",kt.pause(),U.pause.classList.add("show"))}async function ld(){Mt==="paused"&&(kt.resume(),U.pause.classList.remove("show"),Mt="playing")}function cd(){ga++,Mt="menu",kt.stop(),kt.resume(),U.pause.classList.remove("show"),U.result.classList.remove("show"),U.resultLoading.classList.remove("show"),U.hud.classList.add("hidden"),U.hud.setAttribute("aria-hidden","true"),U.start.classList.add("show"),document.body.classList.remove("playing"),Ce.setSection(Ot.sections[0]),Ce.setTempo(Ot.song.bpm,Ot.song.beatOffset),Ce.setCity(Ot.sections[0].city||0),Ce.setBoss(ut.boss?"preview":"off",ut.theme||"untouchable"),Ce.setPreviewLanes(new Set),Ta(!1),pr(!1),Ia(),U.bossGlitch?.classList.remove("on"),nd();for(const i of Gn)i.group.visible=!1;Dn.fill(!1),Gi.fill(null),ai.clear(),qa=0,Za=0,Ce.clearGhosts(),Ce.clockReset(),cr(),Ce.pendulumReset(),ut.id==="chronostasis"&&Ce.setClock("run",.4);for(const i of U.pads)i.classList.remove("pressed","active","sleep");document.documentElement.style.setProperty("--cyan","#5ee7ff"),document.documentElement.style.setProperty("--magenta","#ff5fd2")}function Jg(i,e){return e===0?"F":i>=99.5?"S+":i>=98?"S":i>=93?"A":i>=86?"B":i>=76?"C":i<50?"F":"D"}function Qg(i,e){const a=i.length?i:[0,0,0,0],o=Math.max(1,e,...a),r=320/Math.max(1,a.length-1);let s="";for(let c=0;c<a.length;c++){const d=c*r,f=116-a[c]/o*106;s+=`${c?"L":"M"}${d.toFixed(1)} ${f.toFixed(1)}`}const l=`${s}L320 116L0 116Z`;return{line:s,fill:l}}function ef(i=1){U.flash.style.opacity=String(Math.min(.42,.16+i*.18)),U.flash.classList.add("on"),clearTimeout(al),al=setTimeout(()=>{U.flash.style.opacity="",U.flash.classList.remove("on")},180)}function tf(i,e,t,n){const o=performance.now(),r=s=>{const l=Math.min(1,(s-o)/t),c=1-Math.pow(1-l,3);i.textContent=n(Math.round(0+(e-0)*c)),l<1&&requestAnimationFrame(r)};requestAnimationFrame(r)}function e2(i){const{rank:e,acc:t,full:n,isBest:a,prevBest:o,judgeTotals:r}=i;U.rank.textContent=e,U.finalScore.textContent="0000000",U.finalAcc.textContent="0.00%",tf(U.finalScore,i.score,900,p=>String(p).padStart(7,"0")),tf(U.fMaxCombo,i.maxCombo,700,p=>String(p));const s=performance.now(),l=p=>{const y=Math.min(1,(p-s)/900),x=t*(1-Math.pow(1-y,3));U.finalAcc.textContent=x.toFixed(2)+"%",U.accRing.style.setProperty("--acc",x.toFixed(2)+"%"),y<1&&requestAnimationFrame(l)};requestAnimationFrame(l),U.cPerfect.textContent=i.counts.perfect,U.cGreat.textContent=i.counts.great,U.cGood.textContent=i.counts.good,U.cBad.textContent=i.counts.bad,U.cMiss.textContent=i.counts.miss;const c=Math.max(1,r);U.barPerfect.style.width=(i.counts.perfect/c*100).toFixed(1)+"%",U.barGreat.style.width=(i.counts.great/c*100).toFixed(1)+"%",U.barGood.style.width=(i.counts.good/c*100).toFixed(1)+"%",U.barBad.style.width=(i.counts.bad/c*100).toFixed(1)+"%",U.barMiss.style.width=(i.counts.miss/c*100).toFixed(1)+"%";const d=Qg(xi,We.maxCombo);U.comboLine.setAttribute("d",d.line),U.comboFill.setAttribute("d",d.fill),U.peakCombo.textContent=We.maxCombo,U.resultTrack.textContent=ut.title,U.resultDiff.textContent=ut.difficulty,U.resultBpm.textContent=ut.bpmLabel||`${ut.bpm} BPM`,U.footTrack.textContent=ut.shortTitle,U.footLanes.textContent=ut.laneLabel,U.resultTag.textContent=n?"FULL COMBO // FIELD MASTERED":i.cleared?ut.boss?ut.clearTag||"THE UNTOUCHABLE // FELLED":"CLEARED // SIGNAL COMPLETE":"SIGNAL LOST // TRY AGAIN",U.fcBadge.classList.toggle("on",n),U.bestBadge.classList.toggle("on",a);const f=bi[ut.id]||null;U.bestNote.innerHTML=f?`${String(f.score).padStart(7,"0")} · ${f.rank||"—"}`:"FIRST RUN";const h=Math.max(0,(f?.score||0)-i.score);U.scoreDelta.textContent=a?o?`NEW BEST +${String(Math.max(0,i.score-o.score)).padStart(5,"0")}`:i.cleared?"FIRST CLEAR":"FIRST SCORE":i.scored?h>0?`PB GAP ${String(h).padStart(5,"0")}`:"PB MATCHED":"NO SCORE RECORDED",U.result.classList.remove("show"),U.result.offsetWidth,U.result.classList.add("show"),setTimeout(()=>{U.resultLoading.classList.remove("show")},60),U.resultLoading.setAttribute("aria-hidden","true")}function t2(){if(Mt!=="playing"&&Mt!=="paused")return;Mt="results",kt.stop(),kt.resume(),U.hud.classList.add("hidden"),U.hud.setAttribute("aria-hidden","true"),U.pause.classList.remove("show"),document.body.classList.remove("playing"),pr(!1),Ta(!1);const i=We.judged?We.weight/We.judged*100:100,e=Jg(i,We.judged);xi.push(We.combo),xi.length>qf&&xi.shift();const t=We.miss===0&&We.bad===0&&We.judged>0,n=We.score,a=n>0,o=a&&i>=50,r=bi[ut.id]||null,s=a&&(!r||n>r.score||n===r.score&&i>r.acc);if(s){bi[ut.id]={score:n,acc:i,rank:e,maxCombo:We.maxCombo,full:t,at:Date.now()};try{localStorage.setItem(Yf,JSON.stringify(bi))}catch{}}Kf();const l={score:n,acc:i,rank:e,full:t,isBest:s,prevBest:r,scored:a,cleared:o,maxCombo:We.maxCombo,counts:{...We},judgeTotals:We.judged},c=++ga;U.result.classList.remove("show"),U.resultLoading.classList.add("show"),U.resultLoading.setAttribute("aria-hidden","false"),U.loadTrack.textContent=`${ut.shortTitle} // ${ut.difficulty}`,U.loadRank.textContent="?",U.loadProgress.style.width="0%",U.loadPct.textContent="00%";const d=performance.now(),f=1650,h=p=>{if(c!==ga)return;const y=Math.min(1,(p-d)/f),x=1-Math.pow(1-y,3);U.loadProgress.style.width=(x*100).toFixed(1)+"%",U.loadPct.textContent=String(Math.round(x*100)).padStart(2,"0")+"%",y<1?requestAnimationFrame(h):(U.loadRank.textContent=e,setTimeout(()=>{c===ga&&e2(l)},280))};requestAnimationFrame(h)}function n2(){ga++,U.result.classList.remove("show"),Ll()}function i2(i=new Set){const e=new Set(wa?jf(wa.keys):[]);for(const t of i)e.add(t);for(let t=0;t<8;t++){const n=Ce.laneScreenGeometry(t),a=t>0?n.x-Ce.laneScreenGeometry(t-1).x:n.x-Ce.laneScreenGeometry(1).x,o=t<7?Ce.laneScreenGeometry(t+1).x-n.x:n.x-Ce.laneScreenGeometry(6).x,r=Math.max(26,(Math.abs(a)+Math.abs(o))*.5),s=Math.max(48,Math.min(240,r*1.1)),l=n.y+26,c=Math.max(6,Math.min(l-110,n.topY)),d=Math.max(110,l-c),f=U.pads[t],h=`translate(-50%,-100%) rotate(${n.angle.toFixed(4)}rad)`;f.style.left=n.x.toFixed(1)+"px",f.style.top=l.toFixed(1)+"px",f.style.width=s.toFixed(1)+"px",f.style.height=d.toFixed(1)+"px",f.style.transform=h;const p=e.has(t);f.classList.contains("sleep")===p&&f.classList.toggle("sleep",!p),f.setAttribute("aria-hidden",String(!p))}rd()}function a2(i){const e=Wg(i);(e.index!==tl||wa===null)&&(tl=e.index,id(e.sec))}function o2(i){const e=Ot.ghosts||[];for(;qa<e.length&&e[qa].t<=i;){const t=e[qa++];Ce.ghostFx(t.lane,t.type)}}function r2(i){const e=Ot.events||[];for(;Za<e.length&&e[Za].t<=i;){const t=e[Za++];switch(t.type){case"echo":Ce.echoFx(t.lane,t.dir??(t.lane<3.5?-1:1),t.power??1);break;case"pulse":Ce.pulseFx(t.power??1);break;case"burst":Ce.burstFx(t.lane,t.power??1);break;case"vibe":Ce.vibeFx(t.power??1),ef(t.power??1);break;case"motion":Ce.motionEvent(t.style,t.amp,t.speed,t.pitch);break;case"clock":Ce.setClock(t.mode,t.power??1,t.t),t.mode!=="freeze"&&cr();break;case"clockTick":Ce.clockTick(t.hand,t.power??1);break;case"pendulum":t.mode==="start"?qg(t):cr();break;case"bossCamera":Ce.bossCameraEvent(t.pos,t.look,t.fov,t.roll,t.dur);break;case"bossGlitch":Ce.bossGlitch(t.power??1),Qf(t.power??1),ef((t.power??1)*.6);break;case"bossTick":Ce.bossTick(t.hand,t.power??1);break;case"bossPhase":Ce.setBoss(t.mode==="play"?"play":"outro",ut.theme),t.mode==="play"?(Ta(!1),ut.theme==="intention"?ll(!1):Sa("CLOCK STAGE // FREE FIELD",1700)):ut.theme==="intention"?ll(!0):Ia();break;case"intent":Hg(t);break;case"wind":Ce.windFx(t.power??1);break;case"caption":Bg(t);break}}}function s2(i){if(i.code==="Escape"){Mt==="playing"?(i.preventDefault(),mr()):Mt==="paused"&&(i.preventDefault(),ld());return}if(i.code==="Space"){Mt==="playing"&&Si&&(i.preventDefault(),i.repeat||Pl());return}if(i.repeat)return;const e=Vf[i.code];e!==void 0&&(i.preventDefault(),Mt==="playing"&&(Dn[e]||(Dn[e]=!0,U.pads[e].classList.add("pressed"),Cl(e))))}function l2(i){const e=Vf[i.code];e!==void 0&&Dn[e]&&(Dn[e]=!1,U.pads[e].classList.remove("pressed"),Rl(e))}document.addEventListener("keydown",s2,{passive:!1});document.addEventListener("keyup",l2);for(const i of U.pads){const e=Number(i.dataset.lane),t=a=>{if(a.preventDefault(),Mt==="playing"){ai.add(a.pointerId);try{i.setPointerCapture(a.pointerId)}catch{}Dn[e]||(Dn[e]=!0,i.classList.add("pressed"),Cl(e))}},n=a=>{a.preventDefault(),ai.delete(a.pointerId),Dn[e]&&(Dn[e]=!1,i.classList.remove("pressed"),Rl(e))};i.addEventListener("pointerdown",t,{passive:!1}),i.addEventListener("pointerup",n,{passive:!1}),i.addEventListener("pointercancel",n,{passive:!1}),i.addEventListener("lostpointercapture",n,{passive:!1}),i.addEventListener("contextmenu",a=>a.preventDefault())}if(U.centerPad){const i=t=>{if(t.preventDefault(),!(Mt!=="playing"||!Si)){ai.add(t.pointerId);try{U.centerPad.setPointerCapture(t.pointerId)}catch{}U.centerPad.classList.add("pressed"),Pl()}},e=t=>{t.preventDefault(),ai.delete(t.pointerId),U.centerPad.classList.remove("pressed")};U.centerPad.addEventListener("pointerdown",i,{passive:!1}),U.centerPad.addEventListener("pointerup",e,{passive:!1}),U.centerPad.addEventListener("pointercancel",e,{passive:!1}),U.centerPad.addEventListener("lostpointercapture",e,{passive:!1}),U.centerPad.addEventListener("contextmenu",t=>t.preventDefault())}document.addEventListener("pointerdown",i=>{Mt==="playing"&&ai.add(i.pointerId)},{passive:!0});const Il=i=>{ai.delete(i.pointerId)};document.addEventListener("pointerup",Il,{passive:!0});document.addEventListener("pointercancel",Il,{passive:!0});document.addEventListener("pointerleave",Il,{passive:!0});U.startBtn.addEventListener("click",()=>{(Mt==="boot"||Mt==="menu")&&Ll()});for(const i of U.trackCards)i.addEventListener("click",()=>{Mt!=="boot"&&Mt!=="menu"||i.dataset.track!==ut.id&&dd(i.dataset.track)});U.pauseBtn.addEventListener("click",mr);_e("resumeBtn").addEventListener("click",ld);_e("restartBtn").addEventListener("click",()=>{U.pause.classList.remove("show"),Ll()});_e("quitBtn").addEventListener("click",cd);_e("retryBtn").addEventListener("click",n2);_e("menuBtn").addEventListener("click",cd);document.addEventListener("visibilitychange",()=>{document.hidden&&Mt==="playing"&&mr()});addEventListener("blur",()=>{Mt==="playing"&&mr()});U.canvas.addEventListener("contextmenu",i=>i.preventDefault());function fd(){const i=ut;U.startTrack&&(U.startTrack.textContent=i.shortTitle),U.startLength&&(U.startLength.textContent=sl(i.duration)),U.startLevel&&(U.startLevel.textContent=i.difficulty),U.startLanes&&(U.startLanes.textContent=i.laneLabel),U.hudTrack&&(U.hudTrack.textContent=i.shortTitle),U.hudBpm&&(U.hudBpm.textContent=i.bpmLabel||`${i.bpm} BPM`),U.loadTrack&&(U.loadTrack.textContent=`${i.shortTitle} // ${i.difficulty}`);const e=_e("trackCount");e&&(e.textContent=String(ha.length).padStart(2,"0")),document.body.classList.toggle("boss-track",!!i.boss);for(const t of U.trackCards){const n=cl[t.dataset.track];n&&t.style.setProperty("--card-accent",n.accent);const a=t.dataset.track===i.id;t.classList.toggle("active",a),t.setAttribute("aria-selected",String(a))}document.documentElement.style.setProperty("--track-accent",i.accent),Kf()}async function dd(i,{autoLoad:e=!0}={}){const t=cl[i];t&&(ut=t,Ot=t.chart,Tl=Ot.song.chartEnd,nl=t.duration,fd(),Ta(!1),pr(!1),Ia(),U.bossGlitch?.classList.remove("on"),Ce.setBoss(t.boss?"preview":"off",t.theme||"untouchable"),Ce.setSection(Ot.sections[0]),Ce.setTempo(Ot.song.bpm,Ot.song.beatOffset),Ce.setCity(Ot.sections[0].city||0),Ce.setPreviewLanes(new Set),$f(),El(),t.id==="chronostasis"&&Ce.setClock("run",.4),e&&(Mt="boot",U.startBtn.disabled=!0,await ud(t)))}async function ud(i=ut){const e=++Zo;U.startLabel.textContent="DECODING AUDIO",U.loadFill.style.width="0%";try{const t=await kt.load(i.audio,n=>{e===Zo&&(U.loadFill.style.width=Math.round(n*100)+"%")});if(e!==Zo)return;kt.setBuffer(t),U.loadFill.style.width="100%",U.startLabel.textContent="START SESSION",U.startBtn.disabled=!1,Mt="menu"}catch(t){if(e!==Zo)return;console.error(t),U.startLabel.textContent="AUDIO UNAVAILABLE",Sa("COULD NOT LOAD AUDIO",4e3),Mt="menu"}}$f();El();Mt="boot";fd();ud(ut);let nf=performance.now(),fs=0;function hd(i){const e=Math.min(.05,Math.max(0,(i-nf)/1e3));if(nf=i,fs+=e,Mt==="playing"){const t=kt.time;a2(t);const n=Fg(t);Ce.setPreviewLanes(n),o2(t),r2(t),Vg(e,t),$g(t),jg(t),Jf(t),Ce.animate(e,t,!0),i2(n),t>=Tl&&t2()}else if(Mt==="paused"){const t=kt.time;Ce.animate(e,t,!0)}else Ce.animate(e,fs,!1);Ce.render(),requestAnimationFrame(hd)}window.__cryout={audio:kt,stats:We,scene:Ce,pressLane:Cl,releaseLane:Rl,selectTrack:dd,get chart(){return Ot},get notes(){return Gn},get swings(){return zi},get swingMode(){return Si},swingTap:Pl,get state(){return Mt},get best(){return Xa},get intent(){return Ne}};requestAnimationFrame(hd);
