(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const Zp={song:{title:"CRYOUT",shortTitle:"CRYOUT",artist:"ORIGINAL TRACK",bpm:100,duration:138.1,chartEnd:133.5,beatOffset:.535,difficulty:"ADVANCED",laneLabel:"4 · 6 · 8",fadeStart:131.4,fadeEnd:133.4},sections:[{name:"SIGNAL",start:3.535,end:12.535,keys:4,color:"#5ee7ff",accent:"#8f7bff",energy:.18,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.8,bloom:.55,spin:.03,motion:"fan",motionAmp:.045,motionSpeed:.45,motionPitch:.02,city:0},{name:"ASCENT",start:12.535,end:22.735,keys:4,color:"#57d9ff",accent:"#9d7bff",energy:.38,rotY:.05,rotZ:-.02,tilt:.015,spread:1.03,y:.05,camZ:16.6,camY:6.6,bloom:.65,spin:.05,motion:"fan",motionAmp:.075,motionSpeed:.55,motionPitch:.035,city:0},{name:"CURRENT",start:22.735,end:41.335,keys:6,color:"#42e0d0",accent:"#c46bff",energy:.62,rotY:-.1,rotZ:.03,tilt:-.02,spread:1.06,y:.1,camZ:15.9,camY:6.4,bloom:.8,spin:.08,motion:"wave",motionAmp:.1,motionSpeed:.7,motionPitch:.05,city:0},{name:"SURGE",start:41.335,end:64.135,keys:8,color:"#ff5fd2",accent:"#58e6ff",energy:.82,rotY:.16,rotZ:-.05,tilt:.03,spread:1.1,y:.16,camZ:15.1,camY:6.2,bloom:.92,spin:.12,motion:"slope",motionAmp:.15,motionSpeed:.85,motionPitch:.075,city:0},{name:"DRIFT",start:64.135,end:75.535,keys:6,color:"#8f9dff",accent:"#ff7bd5",energy:.3,rotY:-.04,rotZ:.02,tilt:.06,spread:.94,y:.45,camZ:17.6,camY:7.1,bloom:.55,spin:.04,motion:"tiltL",motionAmp:.11,motionSpeed:.5,motionPitch:.04,city:0},{name:"PRESSURE",start:75.535,end:84.535,keys:8,color:"#ffa14a",accent:"#ff4fc8",energy:.86,rotY:-.18,rotZ:.06,tilt:-.03,spread:1.08,y:.22,camZ:14.9,camY:6.1,bloom:.95,spin:.14,motion:"zigzag",motionAmp:.145,motionSpeed:1,motionPitch:.07,city:0},{name:"BREAK",start:84.535,end:87.535,keys:4,color:"#e8f4ff",accent:"#8f7bff",energy:.05,rotY:0,rotZ:0,tilt:.04,spread:.86,y:.3,camZ:19,camY:7.6,bloom:.35,spin:.02,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:0},{name:"CRYOUT",start:87.535,end:125.935,keys:8,color:"#ff4fb8",accent:"#54e8ff",energy:1,rotY:.1,rotZ:-.04,tilt:.02,spread:1.12,y:.12,camZ:14.6,camY:6,bloom:1,spin:.16,motion:"orbit",motionAmp:.175,motionSpeed:1,motionPitch:.085,city:0},{name:"AFTERGLOW",start:125.935,end:131.335,keys:4,color:"#6fa8ff",accent:"#c7a4ff",energy:.22,rotY:.02,rotZ:0,tilt:.01,spread:.92,y:.35,camZ:18.2,camY:7.2,bloom:.45,spin:.02,motion:"fan",motionAmp:.055,motionSpeed:.4,motionPitch:.02,city:0},{name:"OUTRO",start:131.335,end:133.5,keys:4,color:"#6f8fff",accent:"#c7a4ff",energy:.05,rotY:0,rotZ:0,tilt:0,spread:.9,y:.6,camZ:19.5,camY:7.8,bloom:.35,spin:.01,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:0}],notes:[{t:4.203,lane:3,type:"hold",dur:1.2},{t:5.335,lane:4,type:"hold",dur:1.2},{t:5.935,lane:5,type:"hold",dur:1.2},{t:7.198,lane:2},{t:7.802,lane:2},{t:8.266,lane:3},{t:9.009,lane:4},{t:9.535,lane:5},{t:10.135,lane:3},{t:11.401,lane:5},{t:11.54,lane:4},{t:11.842,lane:4},{t:12.144,lane:3},{t:13.735,lane:2},{t:14.861,lane:4},{t:15.163,lane:2,type:"hold",dur:1.2},{t:15.464,lane:3},{t:15.604,lane:4},{t:15.906,lane:5},{t:16.045,lane:3},{t:16.208,lane:3},{t:16.649,lane:4,type:"hold",dur:1.2},{t:17.335,lane:3,type:"hold",dur:1.2},{t:17.554,lane:5},{t:18.46,lane:2},{t:19.737,lane:5},{t:19.969,lane:4},{t:20.248,lane:3},{t:20.41,lane:2},{t:20.712,lane:4},{t:20.935,lane:4},{t:21.455,lane:3},{t:21.595,lane:2},{t:22.135,lane:5},{t:23.266,lane:1},{t:23.635,lane:2},{t:23.847,lane:3},{t:24.172,lane:4},{t:24.288,lane:5},{t:24.535,lane:6,type:"hold",dur:1.2},{t:24.835,lane:5},{t:25.135,lane:4},{t:25.435,lane:3},{t:25.735,lane:2},{t:26.035,lane:1,type:"hold",dur:1.2},{t:26.239,lane:5},{t:26.703,lane:5},{t:26.865,lane:4},{t:27.144,lane:2},{t:28.143,lane:3},{t:28.435,lane:4},{t:28.653,lane:3},{t:29.095,lane:5},{t:29.335,lane:6},{t:29.635,lane:4},{t:30.604,lane:5},{t:30.906,lane:3},{t:31.045,lane:2},{t:31.208,lane:1},{t:31.509,lane:4},{t:31.735,lane:6},{t:32.035,lane:4},{t:32.335,lane:5},{t:32.635,lane:3},{t:32.935,lane:2},{t:33.297,lane:1},{t:33.762,lane:4},{t:34.203,lane:1},{t:34.342,lane:3},{t:34.807,lane:5},{t:35.335,lane:6},{t:35.573,lane:4},{t:35.712,lane:2},{t:36.014,lane:1},{t:36.153,lane:3},{t:36.535,lane:1},{t:36.757,lane:2},{t:37.198,lane:3},{t:37.663,lane:4},{t:38.104,lane:5},{t:38.545,lane:6},{t:38.935,lane:1},{t:39.288,lane:4},{t:39.753,lane:2},{t:40.194,lane:5},{t:40.435,lane:3},{t:40.658,lane:6},{t:41.099,lane:4},{t:41.633,lane:0},{t:41.935,lane:3},{t:42.075,lane:5},{t:42.376,lane:6},{t:42.516,lane:4},{t:42.818,lane:2},{t:43.282,lane:1},{t:43.421,lane:0},{t:43.723,lane:0},{t:44.025,lane:4},{t:44.327,lane:4},{t:44.559,lane:6},{t:44.785,lane:3},{t:44.861,lane:5},{t:45.302,lane:2},{t:45.685,lane:0},{t:45.767,lane:1},{t:46.135,lane:0},{t:46.347,lane:1},{t:46.649,lane:2},{t:47.035,lane:3},{t:47.335,lane:4},{t:47.554,lane:5},{t:47.856,lane:6},{t:48.298,lane:7},{t:48.599,lane:4},{t:48.901,lane:4},{t:49.135,lane:1},{t:49.285,lane:5},{t:49.644,lane:2},{t:49.735,lane:6},{t:50.109,lane:3},{t:50.635,lane:7},{t:50.935,lane:4},{t:51.293,lane:4},{t:51.455,lane:1},{t:51.685,lane:5},{t:52.059,lane:2},{t:52.198,lane:6},{t:52.5,lane:3},{t:52.64,lane:7},{t:52.885,lane:4},{t:53.243,lane:4},{t:53.406,lane:2},{t:53.708,lane:4},{t:53.935,lane:3},{t:54.01,lane:5},{t:54.451,lane:1},{t:54.535,lane:6},{t:54.892,lane:7},{t:55.496,lane:7},{t:55.798,lane:3},{t:55.885,lane:5},{t:56.185,lane:5},{t:56.485,lane:6},{t:56.703,lane:4},{t:56.866,lane:2},{t:57.144,lane:1},{t:57.446,lane:0},{t:57.685,lane:0},{t:57.771,lane:3},{t:58.135,lane:0},{t:58.435,lane:2},{t:58.654,lane:4},{t:58.816,lane:6},{t:59.257,lane:7},{t:59.397,lane:5},{t:59.699,lane:3},{t:59.785,lane:1},{t:60.085,lane:0},{t:60.385,lane:2},{t:60.465,lane:4},{t:60.767,lane:0},{t:61.208,lane:2},{t:61.579,lane:4},{t:61.735,lane:6},{t:62.044,lane:7},{t:62.415,lane:5},{t:62.694,lane:3},{t:62.996,lane:0},{t:63.235,lane:1},{t:64.807,lane:2},{t:65.335,lane:6},{t:65.55,lane:5,type:"hold",dur:1.2},{t:66.535,lane:4},{t:67.735,lane:2},{t:68.335,lane:3},{t:68.708,lane:4},{t:68.935,lane:3},{t:70.124,lane:5},{t:70.426,lane:2,type:"hold",dur:1.2},{t:70.844,lane:3},{t:71.169,lane:4,type:"hold",dur:1.2},{t:71.335,lane:3},{t:72.307,lane:5},{t:72.535,lane:3},{t:72.748,lane:5},{t:73.735,lane:2},{t:74.374,lane:4},{t:74.559,lane:1},{t:74.935,lane:1},{t:75.14,lane:3},{t:75.743,lane:2},{t:76.045,lane:4},{t:76.208,lane:3},{t:76.435,lane:5},{t:76.649,lane:1},{t:76.951,lane:0},{t:77.253,lane:0},{t:77.335,lane:3},{t:77.335,lane:7},{t:77.635,lane:3},{t:77.935,lane:5},{t:78.019,lane:6},{t:78.385,lane:4},{t:78.6,lane:2},{t:78.901,lane:1},{t:79.343,lane:0},{t:79.505,lane:3},{t:79.807,lane:0},{t:79.946,lane:3},{t:80.248,lane:5},{t:80.55,lane:6},{t:80.635,lane:4},{t:80.935,lane:2},{t:81.154,lane:1},{t:81.456,lane:0},{t:81.835,lane:0},{t:82.135,lane:4},{t:82.285,lane:6},{t:82.585,lane:6},{t:82.942,lane:3},{t:83.267,lane:5},{t:83.545,lane:2},{t:83.847,lane:0},{t:84.149,lane:1},{t:85.055,lane:3},{t:85.735,lane:2},{t:86.866,lane:4},{t:87.685,lane:7},{t:88.05,lane:4},{t:88.135,lane:6},{t:88.435,lane:3},{t:88.654,lane:5},{t:88.816,lane:2},{t:89.258,lane:0},{t:89.335,lane:4},{t:89.699,lane:4},{t:89.785,lane:6},{t:90.085,lane:3},{t:90.385,lane:5},{t:90.535,lane:2},{t:90.767,lane:0},{t:90.906,lane:1},{t:91.045,lane:4},{t:91.347,lane:4},{t:91.51,lane:6},{t:91.649,lane:3},{t:91.735,lane:0},{t:92.044,lane:2},{t:92.253,lane:4},{t:92.415,lane:6},{t:92.717,lane:7},{t:92.935,lane:5},{t:93.298,lane:3},{t:93.46,lane:1},{t:93.685,lane:0},{t:93.985,lane:2},{t:94.203,lane:7},{t:94.366,lane:6},{t:94.645,lane:5},{t:94.946,lane:4},{t:95.109,lane:3},{t:95.248,lane:2},{t:95.335,lane:1},{t:95.635,lane:0},{t:95.852,lane:5},{t:96.154,lane:6},{t:96.316,lane:5},{t:96.535,lane:2},{t:96.897,lane:4},{t:97.199,lane:3},{t:97.285,lane:5},{t:97.585,lane:1},{t:97.802,lane:6},{t:98.104,lane:7},{t:98.485,lane:7},{t:98.708,lane:4},{t:98.935,lane:2},{t:99.149,lane:4},{t:99.312,lane:3},{t:99.451,lane:5},{t:99.753,lane:1},{t:99.846,lane:0},{t:100.135,lane:0},{t:100.217,lane:2},{t:100.659,lane:2},{t:100.821,lane:4},{t:101.1,lane:3},{t:101.262,lane:5},{t:101.402,lane:1},{t:101.703,lane:3},{t:101.866,lane:5},{t:102.307,lane:7},{t:102.609,lane:6},{t:102.835,lane:4},{t:103.135,lane:2},{t:103.435,lane:0},{t:103.735,lane:4},{t:104.035,lane:4},{t:104.335,lane:6},{t:104.42,lane:3},{t:104.785,lane:5},{t:105.001,lane:2},{t:105.302,lane:0},{t:105.744,lane:1},{t:105.837,lane:4},{t:106.138,lane:0},{t:106.285,lane:1},{t:106.585,lane:2},{t:106.812,lane:3},{t:107.346,lane:4},{t:107.485,lane:5},{t:108.089,lane:6},{t:108.205,lane:7},{t:108.535,lane:1},{t:108.902,lane:1},{t:108.985,lane:2},{t:109.285,lane:3},{t:109.585,lane:4},{t:109.668,lane:5},{t:110.109,lane:6},{t:110.248,lane:7},{t:110.55,lane:2},{t:110.713,lane:1},{t:110.852,lane:2},{t:110.935,lane:7},{t:111.235,lane:6},{t:111.535,lane:5},{t:111.618,lane:4},{t:111.985,lane:3},{t:112.06,lane:2},{t:112.501,lane:1},{t:112.885,lane:0},{t:113.104,lane:5},{t:113.267,lane:6},{t:113.662,lane:2},{t:113.894,lane:4},{t:114.01,lane:3},{t:114.126,lane:5},{t:114.335,lane:1},{t:114.535,lane:6},{t:114.835,lane:7},{t:115.217,lane:7},{t:115.496,lane:4},{t:115.798,lane:0},{t:116.1,lane:3},{t:116.402,lane:5},{t:116.485,lane:6},{t:116.785,lane:4},{t:116.936,lane:2},{t:117.307,lane:1},{t:117.748,lane:0},{t:117.835,lane:3},{t:118.135,lane:0},{t:118.445,lane:3},{t:118.735,lane:5},{t:119.095,lane:6},{t:119.351,lane:4},{t:119.699,lane:2},{t:120.001,lane:1},{t:120.303,lane:0},{t:120.604,lane:4},{t:120.906,lane:4},{t:121.208,lane:6},{t:121.285,lane:3},{t:121.51,lane:5},{t:121.649,lane:2},{t:121.735,lane:0},{t:122.035,lane:1},{t:122.416,lane:4},{t:122.635,lane:6},{t:122.935,lane:0},{t:123.298,lane:1},{t:123.385,lane:2},{t:123.685,lane:3},{t:123.985,lane:4},{t:124.204,lane:5},{t:124.32,lane:6},{t:124.436,lane:7},{t:124.552,lane:2},{t:124.761,lane:1},{t:124.877,lane:2},{t:124.993,lane:3},{t:125.109,lane:4},{t:125.225,lane:5},{t:125.318,lane:6},{t:125.635,lane:4},{t:126.535,lane:4,type:"hold",dur:.98},{t:127.735,lane:4},{t:128.935,lane:5},{t:130.135,lane:2}],events:[{t:5.335,type:"pulse",power:.42},{t:5.355,type:"echo",lane:0,dir:-1,power:.65},{t:7.735,type:"pulse",power:.47},{t:10.135,type:"pulse",power:.47},{t:10.155,type:"echo",lane:1,dir:-1,power:.7},{t:12.535,type:"pulse",power:.63},{t:12.555,type:"echo",lane:0,dir:-1,power:.86},{t:14.935,type:"pulse",power:.51},{t:17.335,type:"pulse",power:.6},{t:17.355,type:"echo",lane:1,dir:-1,power:.83},{t:19.735,type:"pulse",power:.5},{t:22.135,type:"pulse",power:.7},{t:22.155,type:"echo",lane:6,dir:1,power:.93},{t:24.535,type:"pulse",power:.76},{t:24.555,type:"echo",lane:0,dir:-1,power:1},{t:26.935,type:"pulse",power:.77},{t:29.335,type:"pulse",power:.7},{t:29.355,type:"echo",lane:7,dir:1,power:.94},{t:29.935,type:"burst",lane:4,power:1.01},{t:31.735,type:"pulse",power:.74},{t:34.135,type:"pulse",power:.73},{t:34.155,type:"echo",lane:0,dir:-1,power:.96},{t:36.535,type:"pulse",power:.73},{t:38.935,type:"pulse",power:.74},{t:38.955,type:"echo",lane:7,dir:1,power:.98},{t:39.535,type:"burst",lane:2,power:1.05},{t:41.335,type:"pulse",power:.71},{t:41.365,type:"motion",style:"slope",amp:.15,speed:.85,pitch:.075},{t:43.735,type:"pulse",power:.75},{t:46.135,type:"pulse",power:.81},{t:46.735,type:"burst",lane:2,power:1.12},{t:48.535,type:"pulse",power:.78},{t:50.935,type:"pulse",power:.86},{t:53.335,type:"pulse",power:.84},{t:55.735,type:"pulse",power:.86},{t:56.335,type:"burst",lane:5,power:1.18},{t:58.135,type:"pulse",power:.88},{t:60.535,type:"pulse",power:.93},{t:62.935,type:"pulse",power:.89},{t:65.335,type:"pulse",power:.59},{t:65.355,type:"echo",lane:0,dir:-1,power:.83},{t:67.735,type:"pulse",power:.63},{t:70.135,type:"pulse",power:.61},{t:70.155,type:"echo",lane:7,dir:1,power:.85},{t:72.535,type:"pulse",power:.63},{t:74.935,type:"pulse",power:.71},{t:74.955,type:"echo",lane:0,dir:-1,power:.95},{t:75.555,type:"vibe",power:.69},{t:75.565,type:"motion",style:"zigzag",amp:.145,speed:1,pitch:.07},{t:77.335,type:"pulse",power:.7},{t:79.735,type:"pulse",power:.77},{t:82.135,type:"pulse",power:.84},{t:82.735,type:"burst",lane:6,power:1.15},{t:84.535,type:"pulse",power:.61},{t:84.555,type:"echo",lane:0,dir:-1,power:.84},{t:86.935,type:"pulse",power:.85},{t:87.555,type:"vibe",power:.8},{t:87.565,type:"motion",style:"orbit",amp:.175,speed:1,pitch:.085},{t:89.335,type:"pulse",power:.96},{t:91.735,type:"pulse",power:.95},{t:94.135,type:"pulse",power:.95},{t:94.735,type:"burst",lane:5,power:1.25},{t:96.535,type:"pulse",power:.96},{t:98.935,type:"pulse",power:.96},{t:101.335,type:"pulse",power:.96},{t:103.735,type:"pulse",power:.96},{t:104.335,type:"burst",lane:6,power:1.25},{t:106.135,type:"pulse",power:.9},{t:108.535,type:"pulse",power:.91},{t:110.935,type:"pulse",power:.98},{t:113.335,type:"pulse",power:1.01},{t:113.935,type:"burst",lane:4,power:1.25},{t:115.735,type:"pulse",power:.99},{t:118.135,type:"pulse",power:.99},{t:120.535,type:"pulse",power:.97},{t:122.935,type:"pulse",power:1.02},{t:123.535,type:"burst",lane:2,power:1.25},{t:125.335,type:"pulse",power:.9},{t:127.735,type:"pulse",power:.73},{t:127.755,type:"echo",lane:0,dir:-1,power:.96},{t:130.135,type:"pulse",power:.52}],ghosts:[{t:3.575,lane:0,type:"sweep"},{t:3.63,lane:1,type:"sweep"},{t:3.685,lane:6,type:"sweep"},{t:3.74,lane:7,type:"sweep"},{t:8.335,lane:0,type:"bounce"},{t:8.455,lane:1,type:"bounce"},{t:8.575,lane:6,type:"bounce"},{t:8.695,lane:7,type:"bounce"},{t:12.575,lane:0,type:"sweep"},{t:12.63,lane:1,type:"sweep"},{t:12.685,lane:6,type:"sweep"},{t:12.74,lane:7,type:"sweep"},{t:17.335,lane:0,type:"bounce"},{t:17.455,lane:1,type:"bounce"},{t:17.575,lane:6,type:"bounce"},{t:17.695,lane:7,type:"bounce"},{t:22.775,lane:0,type:"sweep"},{t:22.83,lane:7,type:"sweep"},{t:27.535,lane:0,type:"bounce"},{t:27.655,lane:7,type:"bounce"},{t:64.175,lane:0,type:"sweep"},{t:64.23,lane:7,type:"sweep"},{t:68.935,lane:0,type:"bounce"},{t:69.055,lane:7,type:"bounce"},{t:84.575,lane:0,type:"sweep"},{t:84.63,lane:1,type:"sweep"},{t:84.685,lane:6,type:"sweep"},{t:84.74,lane:7,type:"sweep"},{t:125.975,lane:0,type:"sweep"},{t:126.03,lane:1,type:"sweep"},{t:126.085,lane:6,type:"sweep"},{t:126.14,lane:7,type:"sweep"},{t:130.735,lane:0,type:"bounce"},{t:130.855,lane:1,type:"bounce"},{t:130.975,lane:6,type:"bounce"},{t:131.095,lane:7,type:"bounce"},{t:131.375,lane:0,type:"sweep"},{t:131.43,lane:1,type:"sweep"},{t:131.485,lane:6,type:"sweep"},{t:131.54,lane:7,type:"sweep"}]},qp={song:{title:"WORLD YEARNING FOR AN END",shortTitle:"WORLD YEARNING",artist:"ORIGINAL TRACK",bpm:120,duration:143.47,chartEnd:142.55,beatOffset:.04,difficulty:"HARD",laneLabel:"4 · 6",thumbFriendly:!0,fadeStart:140.8,fadeEnd:142.9},sections:[{name:"INTRO",start:.04,end:10.04,keys:4,color:"#7ec8ff",accent:"#ffb45e",energy:.16,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.6,camY:6.9,bloom:.5,spin:.03,motion:"fan",motionAmp:.05,motionSpeed:.45,motionPitch:.02,city:1},{name:"VERSE",start:10.04,end:22.04,keys:4,color:"#66e0ff",accent:"#ff8ac8",energy:.5,rotY:.03,rotZ:-.015,tilt:.012,spread:1.02,y:.04,camZ:16.9,camY:6.7,bloom:.68,spin:.05,motion:"wave",motionAmp:.075,motionSpeed:.6,motionPitch:.035,city:.16},{name:"BUILD",start:22.04,end:38.04,keys:6,color:"#84a6ff",accent:"#ffc46b",energy:.66,rotY:-.06,rotZ:.025,tilt:-.015,spread:1.05,y:.08,camZ:16.2,camY:6.5,bloom:.8,spin:.07,motion:"fan",motionAmp:.1,motionSpeed:.7,motionPitch:.05,city:.12},{name:"LIFT",start:38.04,end:54.04,keys:6,color:"#b58cff",accent:"#ffa25e",energy:.8,rotY:.1,rotZ:-.04,tilt:.025,spread:1.08,y:.12,camZ:15.5,camY:6.3,bloom:.9,spin:.1,motion:"slope",motionAmp:.13,motionSpeed:.82,motionPitch:.065,city:.2},{name:"CHORUS",start:54.04,end:70.04,keys:6,color:"#ff8f6b",accent:"#ffe27a",energy:.92,rotY:-.13,rotZ:.05,tilt:-.025,spread:1.1,y:.15,camZ:15.1,camY:6.2,bloom:.96,spin:.12,motion:"wave",motionAmp:.15,motionSpeed:.95,motionPitch:.08,city:.16},{name:"DRIVE",start:70.04,end:86.04,keys:6,color:"#ff5f9e",accent:"#7af0ff",energy:1,rotY:.15,rotZ:-.055,tilt:.03,spread:1.12,y:.18,camZ:14.9,camY:6.1,bloom:1,spin:.14,motion:"zigzag",motionAmp:.18,motionSpeed:1.05,motionPitch:.095,city:.24},{name:"BREAK",start:86.04,end:98.04,keys:4,color:"#d9eaff",accent:"#8f9dff",energy:.34,rotY:-.02,rotZ:.01,tilt:.05,spread:.93,y:.4,camZ:18.1,camY:7.3,bloom:.55,spin:.035,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:.62},{name:"RETURN",start:98.04,end:122.04,keys:6,color:"#63e6d8",accent:"#ff8ac8",energy:.82,rotY:.04,rotZ:-.02,tilt:.015,spread:1.06,y:.1,camZ:15.7,camY:6.4,bloom:.88,spin:.09,motion:"orbit",motionAmp:.14,motionSpeed:.9,motionPitch:.07,city:.14},{name:"FINAL",start:122.04,end:138.04,keys:6,color:"#ff6fc4",accent:"#ffd36b",energy:.9,rotY:-.1,rotZ:.04,tilt:-.02,spread:1.09,y:.14,camZ:15,camY:6.2,bloom:.98,spin:.13,motion:"orbit",motionAmp:.17,motionSpeed:1,motionPitch:.085,city:.2},{name:"OUTRO",start:138.04,end:142.55,keys:4,color:"#7fa8ff",accent:"#d7c4ff",energy:.2,rotY:0,rotZ:0,tilt:.03,spread:.9,y:.3,camZ:19.2,camY:7.6,bloom:.42,spin:.02,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:.72}],notes:[{t:2.04,lane:3,type:"hold",dur:1},{t:2.54,lane:2},{t:3.553,lane:4},{t:4.04,lane:4,type:"hold",dur:1},{t:4.551,lane:5,type:"hold",dur:1},{t:5.55,lane:2},{t:6.037,lane:3},{t:6.54,lane:2},{t:7.036,lane:3},{t:7.546,lane:4},{t:8.04,lane:3},{t:8.54,lane:5},{t:9.543,lane:2},{t:10.194,lane:4},{t:10.356,lane:3},{t:10.79,lane:3},{t:11.029,lane:2},{t:11.517,lane:4},{t:11.79,lane:4},{t:12.028,lane:3},{t:12.864,lane:3},{t:13.05,lane:2},{t:13.79,lane:4},{t:14.048,lane:2},{t:14.861,lane:4},{t:15.047,lane:3},{t:15.534,lane:5,type:"hold",dur:1},{t:15.859,lane:4},{t:16.045,lane:4},{t:16.533,lane:2},{t:16.858,lane:3},{t:17.043,lane:3},{t:17.531,lane:4},{t:17.717,lane:2},{t:18.042,lane:4},{t:18.204,lane:2,type:"hold",dur:1},{t:18.855,lane:3},{t:19.04,lane:3},{t:20.039,lane:4},{t:20.201,lane:3},{t:20.79,lane:5},{t:21.037,lane:2},{t:21.2,lane:4},{t:22.198,lane:2},{t:22.547,lane:4},{t:22.872,lane:6},{t:23.034,lane:5},{t:23.197,lane:3},{t:23.545,lane:1},{t:23.87,lane:2},{t:24.033,lane:4},{t:25.031,lane:6,type:"hold",dur:1},{t:25.29,lane:5},{t:25.542,lane:4},{t:25.867,lane:3},{t:26.03,lane:2},{t:26.29,lane:5},{t:26.54,lane:5},{t:26.865,lane:4},{t:27.028,lane:3},{t:27.29,lane:2},{t:27.539,lane:1},{t:27.864,lane:5},{t:28.026,lane:5},{t:28.212,lane:4},{t:28.537,lane:4},{t:28.862,lane:2},{t:29.048,lane:5},{t:29.29,lane:3},{t:29.536,lane:6},{t:30.047,lane:3},{t:30.29,lane:5},{t:30.534,lane:2,type:"hold",dur:1},{t:30.859,lane:4},{t:31.045,lane:1},{t:31.29,lane:3},{t:32.044,lane:1},{t:32.29,lane:3},{t:33.042,lane:5},{t:33.29,lane:6},{t:33.53,lane:4},{t:34.04,lane:1},{t:34.203,lane:3},{t:34.876,lane:5},{t:35.039,lane:6},{t:35.29,lane:4},{t:35.875,lane:2},{t:36.037,lane:1},{t:36.223,lane:2},{t:37.036,lane:4},{t:37.291,lane:6},{t:38.22,lane:6},{t:38.708,lane:5},{t:39.033,lane:4},{t:39.29,lane:3},{t:39.706,lane:2},{t:39.869,lane:1},{t:40.031,lane:6},{t:40.217,lane:3},{t:40.38,lane:4},{t:40.705,lane:4},{t:41.03,lane:3},{t:41.285,lane:5},{t:41.378,lane:6},{t:41.703,lane:3},{t:41.866,lane:4},{t:42.028,lane:4},{t:42.79,lane:2},{t:43.05,lane:3},{t:43.212,lane:4},{t:43.375,lane:3},{t:43.7,lane:5},{t:43.862,lane:6},{t:44.048,lane:3},{t:44.373,lane:5},{t:44.698,lane:2},{t:44.79,lane:4},{t:45.047,lane:1},{t:45.209,lane:3},{t:45.372,lane:5},{t:45.697,lane:5},{t:45.859,lane:2},{t:46.045,lane:1},{t:46.37,lane:3},{t:46.79,lane:5},{t:47.044,lane:6},{t:47.206,lane:4},{t:47.369,lane:2},{t:47.79,lane:1},{t:48.042,lane:1},{t:48.29,lane:2},{t:49.041,lane:3},{t:49.296,lane:4},{t:49.876,lane:5},{t:50.039,lane:6},{t:50.225,lane:2},{t:51.037,lane:2},{t:51.363,lane:3},{t:51.873,lane:4},{t:52.036,lane:5},{t:52.222,lane:6},{t:52.547,lane:5},{t:52.709,lane:4},{t:53.034,lane:3},{t:53.29,lane:2},{t:53.708,lane:1},{t:53.79,lane:5},{t:54.219,lane:2},{t:54.381,lane:3},{t:54.706,lane:4},{t:54.79,lane:3},{t:55.031,lane:5},{t:55.124,lane:6},{t:55.705,lane:3},{t:55.79,lane:4},{t:56.03,lane:4},{t:56.308,lane:6},{t:56.54,lane:4},{t:56.79,lane:5},{t:57.04,lane:3},{t:57.54,lane:2},{t:58.05,lane:6},{t:58.375,lane:4},{t:58.7,lane:5},{t:59.025,lane:3},{t:59.35,lane:2},{t:59.722,lane:1},{t:60.047,lane:1},{t:60.325,lane:3},{t:60.627,lane:5},{t:60.86,lane:6},{t:61.04,lane:4},{t:61.29,lane:2},{t:61.37,lane:1},{t:61.695,lane:3},{t:62.044,lane:1},{t:62.276,lane:2},{t:62.531,lane:3},{t:62.717,lane:4},{t:62.973,lane:5},{t:63.042,lane:6},{t:63.228,lane:2},{t:63.623,lane:2},{t:63.808,lane:3},{t:64.064,lane:1},{t:64.134,lane:4},{t:64.366,lane:2},{t:64.714,lane:5},{t:64.79,lane:3},{t:65.04,lane:6},{t:65.132,lane:4},{t:65.387,lane:4},{t:65.643,lane:2},{t:65.79,lane:5},{t:66.038,lane:3},{t:66.293,lane:1},{t:66.548,lane:4},{t:66.99,lane:2},{t:67.04,lane:5},{t:67.361,lane:3},{t:67.709,lane:6},{t:68.034,lane:1},{t:68.22,lane:2},{t:68.36,lane:3},{t:68.708,lane:4},{t:69.033,lane:3},{t:69.381,lane:5},{t:69.706,lane:6},{t:69.79,lane:3},{t:70.217,lane:6},{t:70.38,lane:4},{t:70.705,lane:5},{t:71.03,lane:3},{t:71.29,lane:2},{t:71.378,lane:1},{t:71.703,lane:4},{t:71.889,lane:5},{t:72.028,lane:3},{t:72.29,lane:2},{t:72.562,lane:4},{t:72.79,lane:6},{t:73.05,lane:5},{t:73.29,lane:3},{t:73.54,lane:1},{t:73.79,lane:2},{t:74.048,lane:2},{t:74.374,lane:4},{t:74.699,lane:6},{t:74.79,lane:5},{t:75.047,lane:3},{t:75.372,lane:1},{t:75.697,lane:2},{t:75.79,lane:4},{t:76.045,lane:1},{t:76.29,lane:2},{t:76.37,lane:3},{t:76.696,lane:4},{t:76.881,lane:5},{t:77.044,lane:6},{t:77.23,lane:2},{t:77.369,lane:3},{t:77.717,lane:3},{t:78.042,lane:1},{t:78.29,lane:4},{t:78.367,lane:2},{t:78.692,lane:5},{t:78.878,lane:3},{t:79.041,lane:6},{t:79.29,lane:4},{t:79.366,lane:2},{t:79.714,lane:2},{t:80.039,lane:5},{t:80.364,lane:3},{t:80.713,lane:5},{t:81.038,lane:2},{t:81.223,lane:4},{t:81.363,lane:1},{t:81.711,lane:3},{t:81.874,lane:5},{t:82.036,lane:5},{t:82.338,lane:3},{t:82.54,lane:5},{t:82.872,lane:2},{t:83.035,lane:4},{t:83.29,lane:1},{t:83.708,lane:3},{t:83.79,lane:5},{t:84.033,lane:5},{t:84.288,lane:6},{t:84.544,lane:4},{t:84.637,lane:5},{t:84.869,lane:3},{t:85.031,lane:2},{t:85.287,lane:1},{t:85.821,lane:4},{t:86.494,lane:2,type:"hold",dur:1},{t:87.052,lane:3},{t:87.377,lane:4},{t:87.539,lane:5},{t:88.04,lane:3},{t:89.049,lane:5},{t:89.699,lane:4,type:"hold",dur:1},{t:90.047,lane:3},{t:91.045,lane:5,type:"hold",dur:1},{t:92.044,lane:2},{t:92.369,lane:3},{t:93.042,lane:3},{t:93.693,lane:4},{t:94.041,lane:3},{t:94.528,lane:2},{t:95.039,lane:4},{t:95.527,lane:5},{t:95.968,lane:3},{t:96.2,lane:2},{t:96.549,lane:4},{t:97.036,lane:3},{t:97.199,lane:5},{t:97.71,lane:4},{t:98.29,lane:1},{t:98.545,lane:4},{t:99.04,lane:2},{t:99.219,lane:5},{t:99.706,lane:3},{t:99.79,lane:6},{t:100.032,lane:1},{t:100.217,lane:2},{t:100.612,lane:3},{t:100.79,lane:4},{t:101.03,lane:3},{t:101.216,lane:5},{t:101.541,lane:6},{t:101.79,lane:3},{t:102.028,lane:3},{t:102.29,lane:6},{t:102.539,lane:4},{t:102.702,lane:5},{t:102.888,lane:3},{t:103.05,lane:2},{t:103.29,lane:1},{t:103.7,lane:4},{t:103.79,lane:5},{t:104.049,lane:2},{t:104.29,lane:4},{t:104.559,lane:6},{t:104.79,lane:5},{t:105.047,lane:3},{t:105.29,lane:1},{t:105.558,lane:2},{t:105.79,lane:4},{t:106.046,lane:2},{t:106.29,lane:4},{t:106.556,lane:6},{t:106.719,lane:5},{t:107.044,lane:3},{t:107.299,lane:1},{t:107.555,lane:2},{t:107.717,lane:4},{t:108.042,lane:1},{t:108.368,lane:2},{t:108.716,lane:3},{t:108.79,lane:4},{t:109.041,lane:5},{t:109.79,lane:6},{t:110.039,lane:1},{t:110.225,lane:4},{t:110.713,lane:4},{t:111.038,lane:2},{t:111.293,lane:5},{t:111.711,lane:3},{t:112.04,lane:3},{t:112.222,lane:5},{t:112.547,lane:2},{t:113.035,lane:4},{t:113.22,lane:1},{t:113.79,lane:3},{t:114.033,lane:3},{t:114.219,lane:5},{t:114.544,lane:5},{t:114.79,lane:2},{t:115.032,lane:4},{t:115.217,lane:1},{t:115.542,lane:6},{t:115.79,lane:3},{t:116.04,lane:6},{t:116.216,lane:4},{t:116.541,lane:5},{t:116.79,lane:3},{t:117.052,lane:2},{t:117.29,lane:1},{t:117.539,lane:6},{t:117.864,lane:4},{t:118.05,lane:2},{t:118.213,lane:4},{t:118.375,lane:6},{t:118.79,lane:5},{t:119.049,lane:3},{t:120.04,lane:6},{t:120.79,lane:5},{t:121.046,lane:4},{t:121.208,lane:3},{t:121.371,lane:2},{t:121.696,lane:1},{t:121.858,lane:5},{t:122.207,lane:6},{t:122.369,lane:5},{t:122.857,lane:4},{t:123.043,lane:3},{t:123.205,lane:2},{t:123.368,lane:1},{t:123.855,lane:5},{t:124.041,lane:1},{t:124.29,lane:4},{t:124.529,lane:2},{t:124.854,lane:5},{t:125.039,lane:3},{t:125.365,lane:6},{t:125.79,lane:4},{t:126.038,lane:4},{t:126.2,lane:3},{t:126.79,lane:5},{t:127.036,lane:2},{t:127.199,lane:4},{t:127.71,lane:1},{t:127.79,lane:3},{t:128.035,lane:3},{t:128.36,lane:1},{t:128.522,lane:3},{t:128.79,lane:5},{t:129.033,lane:6},{t:129.29,lane:4},{t:129.521,lane:2},{t:129.79,lane:1},{t:130.032,lane:3},{t:130.29,lane:1},{t:130.38,lane:3},{t:130.705,lane:5},{t:130.868,lane:6},{t:131.04,lane:4},{t:131.29,lane:2},{t:131.704,lane:1},{t:131.866,lane:3},{t:132.029,lane:5},{t:132.29,lane:2},{t:132.54,lane:4},{t:132.79,lane:6},{t:133.027,lane:5},{t:133.29,lane:3},{t:133.538,lane:1},{t:133.863,lane:2},{t:134.049,lane:6},{t:134.29,lane:5},{t:134.536,lane:4},{t:134.861,lane:3},{t:135.047,lane:2},{t:135.29,lane:1},{t:135.697,lane:5},{t:135.86,lane:4},{t:136.046,lane:2},{t:136.29,lane:3},{t:136.533,lane:4},{t:136.858,lane:3},{t:137.044,lane:5},{t:137.29,lane:6},{t:137.857,lane:3}],events:[{t:.04,type:"pulse",power:.3},{t:.06,type:"echo",lane:0,dir:-1,power:.52},{t:2.04,type:"pulse",power:.4},{t:4.04,type:"pulse",power:.52},{t:4.06,type:"echo",lane:1,dir:-1,power:.75},{t:6.04,type:"pulse",power:.49},{t:8.04,type:"pulse",power:.71},{t:8.06,type:"echo",lane:6,dir:1,power:.95},{t:10.04,type:"pulse",power:.76},{t:10.06,type:"echo",lane:0,dir:-1,power:1},{t:12.04,type:"pulse",power:.79},{t:14.04,type:"pulse",power:.82},{t:14.06,type:"echo",lane:1,dir:-1,power:1.06},{t:16.04,type:"pulse",power:.82},{t:18.04,type:"pulse",power:.83},{t:18.06,type:"echo",lane:6,dir:1,power:1.07},{t:20.04,type:"pulse",power:.83},{t:22.04,type:"pulse",power:.83},{t:22.06,type:"echo",lane:0,dir:-1,power:1.07},{t:24.04,type:"pulse",power:.78},{t:26.04,type:"pulse",power:.84},{t:26.06,type:"echo",lane:7,dir:1,power:1.08},{t:26.54,type:"burst",lane:5,power:1.15},{t:28.04,type:"pulse",power:.83},{t:30.04,type:"pulse",power:.79},{t:30.06,type:"echo",lane:0,dir:-1,power:1.04},{t:32.04,type:"pulse",power:.78},{t:34.04,type:"pulse",power:.79},{t:34.06,type:"echo",lane:7,dir:1,power:1.04},{t:34.54,type:"burst",lane:5,power:1.11},{t:36.04,type:"pulse",power:.78},{t:38.04,type:"pulse",power:.8},{t:38.06,type:"echo",lane:0,dir:-1,power:1.04},{t:38.07,type:"motion",style:"slope",amp:.13,speed:.82,pitch:.065},{t:40.04,type:"pulse",power:.8},{t:42.04,type:"pulse",power:.79},{t:42.06,type:"echo",lane:7,dir:1,power:1.03},{t:42.54,type:"burst",lane:2,power:1.1},{t:44.04,type:"pulse",power:.79},{t:46.04,type:"pulse",power:.75},{t:46.06,type:"echo",lane:0,dir:-1,power:.99},{t:48.04,type:"pulse",power:.78},{t:50.04,type:"pulse",power:.79},{t:50.06,type:"echo",lane:7,dir:1,power:1.04},{t:50.54,type:"burst",lane:2,power:1.11},{t:52.04,type:"pulse",power:.79},{t:54.04,type:"pulse",power:.83},{t:54.06,type:"echo",lane:0,dir:-1,power:1.07},{t:54.06,type:"vibe",power:.74},{t:54.07,type:"motion",style:"wave",amp:.15,speed:.95,pitch:.08},{t:56.04,type:"pulse",power:.71},{t:58.04,type:"pulse",power:.7},{t:58.06,type:"echo",lane:7,dir:1,power:.93},{t:58.54,type:"burst",lane:5,power:1},{t:60.04,type:"pulse",power:.78},{t:62.04,type:"pulse",power:.88},{t:62.06,type:"echo",lane:0,dir:-1,power:1.12},{t:64.04,type:"pulse",power:.84},{t:66.04,type:"pulse",power:.82},{t:66.06,type:"echo",lane:7,dir:1,power:1.07},{t:66.54,type:"burst",lane:4,power:1.14},{t:68.04,type:"pulse",power:.86},{t:70.04,type:"pulse",power:.84},{t:70.06,type:"echo",lane:0,dir:-1,power:1.08},{t:70.06,type:"vibe",power:.8},{t:70.07,type:"motion",style:"zigzag",amp:.18,speed:1.05,pitch:.095},{t:72.04,type:"pulse",power:.87},{t:74.04,type:"pulse",power:.89},{t:74.06,type:"echo",lane:7,dir:1,power:1.14},{t:74.54,type:"burst",lane:6,power:1.21},{t:76.04,type:"pulse",power:.89},{t:78.04,type:"pulse",power:.82},{t:78.06,type:"echo",lane:0,dir:-1,power:1.07},{t:80.04,type:"pulse",power:.89},{t:82.04,type:"pulse",power:.88},{t:82.06,type:"echo",lane:7,dir:1,power:1.13},{t:82.54,type:"burst",lane:5,power:1.2},{t:84.04,type:"pulse",power:.89},{t:86.04,type:"pulse",power:.7},{t:86.06,type:"echo",lane:0,dir:-1,power:.93},{t:88.04,type:"pulse",power:.7},{t:90.04,type:"pulse",power:.65},{t:90.06,type:"echo",lane:1,dir:-1,power:.89},{t:92.04,type:"pulse",power:.63},{t:94.04,type:"pulse",power:.74},{t:94.06,type:"echo",lane:6,dir:1,power:.98},{t:96.04,type:"pulse",power:.71},{t:98.04,type:"pulse",power:.71},{t:98.06,type:"echo",lane:0,dir:-1,power:.95},{t:98.07,type:"motion",style:"orbit",amp:.14,speed:.9,pitch:.07},{t:100.04,type:"pulse",power:.74},{t:102.04,type:"pulse",power:.73},{t:102.06,type:"echo",lane:7,dir:1,power:.97},{t:102.54,type:"burst",lane:4,power:1.04},{t:104.04,type:"pulse",power:.75},{t:106.04,type:"pulse",power:.75},{t:106.06,type:"echo",lane:0,dir:-1,power:.99},{t:108.04,type:"pulse",power:.77},{t:110.04,type:"pulse",power:.71},{t:110.06,type:"echo",lane:7,dir:1,power:.95},{t:110.54,type:"burst",lane:4,power:1.01},{t:112.04,type:"pulse",power:.7},{t:114.04,type:"pulse",power:.71},{t:114.06,type:"echo",lane:0,dir:-1,power:.95},{t:116.04,type:"pulse",power:.75},{t:118.04,type:"pulse",power:.69},{t:118.06,type:"echo",lane:7,dir:1,power:.93},{t:118.54,type:"burst",lane:6,power:1},{t:120.04,type:"pulse",power:.68},{t:122.04,type:"pulse",power:.75},{t:122.06,type:"echo",lane:0,dir:-1,power:.99},{t:122.06,type:"vibe",power:.72},{t:122.07,type:"motion",style:"orbit",amp:.17,speed:1,pitch:.085},{t:124.04,type:"pulse",power:.76},{t:126.04,type:"pulse",power:.75},{t:126.06,type:"echo",lane:7,dir:1,power:.99},{t:126.54,type:"burst",lane:5,power:1.06},{t:128.04,type:"pulse",power:.75},{t:130.04,type:"pulse",power:.75},{t:130.06,type:"echo",lane:0,dir:-1,power:.99},{t:132.04,type:"pulse",power:.74},{t:134.04,type:"pulse",power:.75},{t:134.06,type:"echo",lane:7,dir:1,power:.99},{t:134.54,type:"burst",lane:4,power:1.06},{t:136.04,type:"pulse",power:.75}],ghosts:[{t:.08,lane:0,type:"sweep"},{t:.135,lane:1,type:"sweep"},{t:.19,lane:6,type:"sweep"},{t:.245,lane:7,type:"sweep"},{t:4.04,lane:0,type:"bounce"},{t:4.16,lane:1,type:"bounce"},{t:4.28,lane:6,type:"bounce"},{t:4.4,lane:7,type:"bounce"},{t:10.08,lane:0,type:"sweep"},{t:10.135,lane:1,type:"sweep"},{t:10.19,lane:6,type:"sweep"},{t:10.245,lane:7,type:"sweep"},{t:14.04,lane:0,type:"bounce"},{t:14.16,lane:1,type:"bounce"},{t:14.28,lane:6,type:"bounce"},{t:14.4,lane:7,type:"bounce"},{t:22.08,lane:0,type:"sweep"},{t:22.135,lane:7,type:"sweep"},{t:26.04,lane:0,type:"bounce"},{t:26.16,lane:7,type:"bounce"},{t:38.08,lane:0,type:"sweep"},{t:38.135,lane:7,type:"sweep"},{t:42.04,lane:0,type:"bounce"},{t:42.16,lane:7,type:"bounce"},{t:54.08,lane:0,type:"sweep"},{t:54.135,lane:7,type:"sweep"},{t:58.04,lane:0,type:"bounce"},{t:58.16,lane:7,type:"bounce"},{t:70.08,lane:0,type:"sweep"},{t:70.135,lane:7,type:"sweep"},{t:74.04,lane:0,type:"bounce"},{t:74.16,lane:7,type:"bounce"},{t:86.08,lane:0,type:"sweep"},{t:86.135,lane:1,type:"sweep"},{t:86.19,lane:6,type:"sweep"},{t:86.245,lane:7,type:"sweep"},{t:90.04,lane:0,type:"bounce"},{t:90.16,lane:1,type:"bounce"},{t:90.28,lane:6,type:"bounce"},{t:90.4,lane:7,type:"bounce"},{t:98.08,lane:0,type:"sweep"},{t:98.135,lane:7,type:"sweep"},{t:102.04,lane:0,type:"bounce"},{t:102.16,lane:7,type:"bounce"},{t:122.08,lane:0,type:"sweep"},{t:122.135,lane:7,type:"sweep"},{t:126.04,lane:0,type:"bounce"},{t:126.16,lane:7,type:"bounce"},{t:138.08,lane:0,type:"sweep"},{t:138.135,lane:1,type:"sweep"},{t:138.19,lane:6,type:"sweep"},{t:138.245,lane:7,type:"sweep"},{t:142.04,lane:0,type:"bounce"},{t:142.16,lane:1,type:"bounce"},{t:142.28,lane:6,type:"bounce"},{t:142.4,lane:7,type:"bounce"}]},Kp={song:{title:"CHRONOSTASIS",shortTitle:"CHRONOSTASIS",artist:"ORIGINAL TRACK",bpm:99.4,duration:142.1,chartEnd:139.85,beatOffset:.323,difficulty:"EXPERT",laneLabel:"4 · 6",thumbFriendly:!0,fadeStart:138.4,fadeEnd:140},sections:[{name:"INTRO",start:0,end:18.431,keys:4,color:"#8ecfff",accent:"#ffd166",energy:.22,rotY:0,rotZ:0,tilt:.02,spread:.94,y:.28,camZ:18.8,camY:7.4,bloom:.48,spin:.02,density:.22,city:.58,clock:"off",motion:"fan",motionAmp:.05,motionSpeed:.45,motionPitch:.02},{name:"GEARS",start:18.431,end:24.483,keys:4,color:"#6fe3ff",accent:"#ffd166",energy:.5,rotY:.02,rotZ:-.012,tilt:.01,spread:1,y:.12,camZ:17.4,camY:7,bloom:.68,spin:.05,density:.5,city:.38,clock:"run",motion:"fan",motionAmp:.06,motionSpeed:.55,motionPitch:.025},{name:"VERSE",start:24.483,end:42.877,keys:6,color:"#78b8ff",accent:"#ffe29a",energy:.64,rotY:.04,rotZ:-.02,tilt:.015,spread:1.04,y:.08,camZ:16.7,camY:6.7,bloom:.78,spin:.07,density:.62,city:.2,clock:"run",motion:"wave",motionAmp:.075,motionSpeed:.6,motionPitch:.035},{name:"PENDULUM",start:42.877,end:66.417,keys:6,color:"#b18cff",accent:"#ffd166",energy:.8,rotY:-.09,rotZ:.035,tilt:-.02,spread:1.08,y:.14,camZ:15.8,camY:6.4,bloom:.9,spin:.1,density:.76,city:.14,clock:"run",motion:"wave",motionAmp:.16,motionSpeed:.95,motionPitch:.08},{name:"STASIS",start:66.417,end:76.075,keys:4,color:"#dfeaff",accent:"#9aa8ff",energy:.26,rotY:-.02,rotZ:.01,tilt:.04,spread:.92,y:.42,camZ:18.4,camY:7.5,bloom:.5,spin:.02,density:0,city:.7,clock:"freeze",swing:!0,motion:"flat",motionAmp:.02,motionSpeed:.2,motionPitch:.01},{name:"RETURN",start:76.075,end:90.561,keys:6,color:"#64e6d8",accent:"#ffe29a",energy:.76,rotY:.05,rotZ:-.02,tilt:.012,spread:1.05,y:.1,camZ:16.2,camY:6.6,bloom:.86,spin:.08,density:.7,city:.16,clock:"run",motion:"orbit",motionAmp:.14,motionSpeed:.9,motionPitch:.07},{name:"TICK",start:90.561,end:110.48,keys:6,color:"#ffd166",accent:"#7af0ff",energy:.84,rotY:-.1,rotZ:.04,tilt:-.02,spread:1.08,y:.15,camZ:15.6,camY:6.3,bloom:.94,spin:.11,density:.8,city:.2,clock:"run",motion:"zigzag",motionAmp:.17,motionSpeed:1.15,motionPitch:.09},{name:"FINAL",start:110.48,end:129.795,keys:6,color:"#ff9f6b",accent:"#ffd166",energy:.94,rotY:.12,rotZ:-.045,tilt:.025,spread:1.1,y:.18,camZ:15,camY:6.1,bloom:1,spin:.14,density:.9,city:.24,clock:"final",motion:"orbit",motionAmp:.17,motionSpeed:1,motionPitch:.085},{name:"OUTRO",start:129.795,end:140,keys:4,color:"#9fb8ff",accent:"#d7c4ff",energy:.3,rotY:0,rotZ:0,tilt:.03,spread:.9,y:.34,camZ:19.2,camY:7.6,bloom:.46,spin:.02,density:.28,city:.72,clock:"off",holds:1,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0}],notes:[{t:3.924,lane:2,type:"hold",dur:1.207},{t:4.551,lane:4},{t:4.853,lane:5},{t:5.155,lane:4},{t:5.457,lane:5},{t:6.084,lane:3},{t:6.385,lane:3},{t:6.687,lane:4},{t:6.989,lane:5},{t:7.291,lane:3},{t:7.593,lane:2},{t:7.918,lane:3},{t:8.22,lane:4},{t:8.522,lane:5},{t:8.824,lane:3},{t:9.451,lane:3},{t:9.752,lane:4},{t:10.054,lane:3},{t:10.356,lane:5},{t:10.658,lane:2,type:"hold",dur:1.207},{t:11.726,lane:4},{t:12.469,lane:3,type:"hold",dur:1.207},{t:13.603,lane:5},{t:14.791,lane:2},{t:16.017,lane:2},{t:17.229,lane:3},{t:17.856,lane:2},{t:19.389,lane:4},{t:19.639,lane:4},{t:19.807,lane:5},{t:20.271,lane:3},{t:20.434,lane:4},{t:20.596,lane:5},{t:20.735,lane:2},{t:20.898,lane:2},{t:21.362,lane:3,type:"hold",dur:1.207},{t:21.595,lane:4},{t:21.664,lane:5,type:"hold",dur:1.207},{t:21.989,lane:2},{t:22.732,lane:4},{t:23.261,lane:5},{t:23.661,lane:3},{t:23.963,lane:3},{t:24.166,lane:4},{t:24.729,lane:6},{t:24.869,lane:4},{t:25.17,lane:5},{t:25.333,lane:3},{t:25.658,lane:2},{t:25.797,lane:1},{t:26.099,lane:4},{t:26.262,lane:5},{t:26.401,lane:3},{t:26.882,lane:3},{t:27.492,lane:2},{t:27.934,lane:4},{t:28.096,lane:6},{t:28.398,lane:5},{t:28.561,lane:3},{t:29.164,lane:1},{t:29.327,lane:6},{t:29.791,lane:5},{t:29.931,lane:4},{t:30.395,lane:3},{t:30.557,lane:2},{t:30.859,lane:1},{t:30.999,lane:5},{t:31.161,lane:4},{t:31.626,lane:4},{t:31.765,lane:6,type:"hold",dur:1.207},{t:32.067,lane:5},{t:32.229,lane:4},{t:32.392,lane:3},{t:32.919,lane:2},{t:33.158,lane:1},{t:33.46,lane:5},{t:33.599,lane:4},{t:34.064,lane:4},{t:34.226,lane:1,type:"hold",dur:1.207},{t:34.691,lane:4},{t:34.83,lane:2},{t:35.294,lane:5},{t:35.434,lane:3},{t:35.898,lane:6},{t:36.061,lane:4},{t:36.525,lane:4},{t:36.827,lane:3},{t:37.291,lane:5},{t:37.732,lane:2},{t:37.895,lane:4},{t:38.359,lane:1},{t:38.499,lane:3},{t:38.963,lane:1},{t:39.126,lane:3},{t:39.59,lane:5},{t:39.729,lane:6},{t:40.194,lane:4},{t:40.333,lane:2},{t:40.496,lane:1},{t:40.797,lane:3},{t:40.96,lane:5},{t:41.401,lane:1},{t:41.657,lane:3},{t:42.632,lane:5},{t:43.793,lane:1},{t:44.095,lane:3},{t:44.327,lane:5},{t:44.629,lane:6},{t:44.954,lane:4},{t:45.232,lane:2},{t:46.198,lane:1},{t:47.229,lane:1},{t:47.392,lane:2},{t:47.531,lane:3},{t:47.833,lane:4},{t:47.996,lane:5},{t:48.135,lane:6},{t:48.298,lane:2},{t:48.46,lane:3},{t:48.599,lane:4},{t:48.762,lane:1},{t:48.901,lane:4},{t:49.064,lane:2},{t:49.226,lane:5},{t:49.366,lane:3},{t:49.528,lane:6},{t:49.667,lane:4},{t:49.83,lane:4},{t:49.993,lane:2},{t:50.132,lane:5},{t:50.294,lane:3},{t:50.596,lane:6},{t:50.898,lane:4},{t:51.061,lane:1},{t:51.2,lane:4},{t:51.363,lane:2},{t:51.664,lane:5},{t:51.827,lane:3},{t:51.966,lane:6},{t:52.129,lane:4},{t:52.268,lane:2},{t:52.431,lane:5},{t:52.593,lane:3},{t:52.733,lane:6},{t:52.895,lane:4},{t:53.034,lane:1},{t:53.197,lane:4},{t:53.359,lane:2},{t:53.499,lane:3},{t:53.661,lane:4},{t:53.963,lane:4},{t:54.265,lane:3},{t:54.428,lane:5},{t:54.649,lane:6},{t:54.892,lane:3},{t:55.031,lane:4},{t:55.194,lane:3},{t:55.333,lane:5},{t:55.496,lane:6},{t:55.798,lane:6},{t:56.099,lane:6},{t:56.564,lane:4},{t:57.028,lane:5},{t:57.33,lane:3},{t:57.493,lane:2},{t:57.794,lane:1},{t:57.934,lane:4},{t:58.096,lane:5},{t:58.259,lane:5},{t:58.398,lane:2},{t:58.561,lane:4},{t:58.863,lane:6},{t:59.164,lane:5},{t:59.327,lane:3},{t:59.478,lane:1},{t:59.629,lane:2},{t:59.768,lane:4},{t:59.931,lane:6},{t:60.233,lane:5},{t:60.395,lane:3},{t:60.534,lane:1},{t:60.685,lane:2},{t:60.999,lane:2},{t:61.161,lane:4},{t:61.463,lane:6},{t:61.928,lane:5},{t:62.229,lane:3},{t:63.158,lane:1},{t:63.39,lane:2},{t:63.901,lane:3},{t:64.307,lane:4},{t:64.609,lane:5},{t:65.132,lane:6},{t:65.457,lane:1},{t:65.759,lane:1},{t:66.061,lane:4},{t:76.379,lane:1},{t:76.681,lane:3},{t:77.392,lane:5},{t:77.531,lane:6},{t:77.833,lane:2},{t:78.298,lane:2},{t:78.46,lane:3},{t:78.6,lane:4},{t:78.762,lane:5},{t:79.064,lane:6},{t:79.366,lane:2},{t:79.668,lane:2},{t:79.993,lane:3},{t:80.295,lane:1},{t:81.061,lane:2},{t:81.2,lane:3},{t:81.363,lane:4},{t:81.525,lane:5},{t:81.665,lane:6},{t:81.827,lane:2},{t:81.966,lane:3},{t:82.129,lane:4},{t:82.268,lane:5},{t:82.431,lane:6,type:"hold",dur:1.207},{t:82.593,lane:5},{t:82.733,lane:4},{t:82.895,lane:3},{t:83.035,lane:2},{t:83.197,lane:1},{t:83.336,lane:5},{t:83.499,lane:4},{t:83.661,lane:4},{t:83.894,lane:3},{t:84.126,lane:2},{t:84.196,lane:1},{t:84.265,lane:5},{t:84.428,lane:4},{t:84.497,lane:3},{t:84.66,lane:2},{t:84.73,lane:1,type:"hold",dur:1.207},{t:84.892,lane:2},{t:85.496,lane:3},{t:85.728,lane:4},{t:86.03,lane:3},{t:86.401,lane:5},{t:87.245,lane:6},{t:88.422,lane:4},{t:89.025,lane:5},{t:89.188,lane:3},{t:89.327,lane:2},{t:89.629,lane:1},{t:89.629,lane:6},{t:89.792,lane:4},{t:89.861,lane:5},{t:90.86,lane:1},{t:91.162,lane:4},{t:91.626,lane:2},{t:91.765,lane:5},{t:91.928,lane:3},{t:92.067,lane:6},{t:92.23,lane:3},{t:92.532,lane:3},{t:92.833,lane:4},{t:92.996,lane:3},{t:93.158,lane:5},{t:93.298,lane:6},{t:93.46,lane:3},{t:93.6,lane:4},{t:93.762,lane:3},{t:94.064,lane:3},{t:94.227,lane:5},{t:94.366,lane:6},{t:94.528,lane:6},{t:94.691,lane:4},{t:94.923,lane:5},{t:95.295,lane:3},{t:95.434,lane:2},{t:95.759,lane:1},{t:95.898,lane:4},{t:96.061,lane:5},{t:96.502,lane:5},{t:96.752,lane:3},{t:96.967,lane:2},{t:97.129,lane:4},{t:97.292,lane:6},{t:97.657,lane:5},{t:97.895,lane:3},{t:98.058,lane:1},{t:98.36,lane:2},{t:98.864,lane:4},{t:99.126,lane:6},{t:99.265,lane:5},{t:99.567,lane:2},{t:99.73,lane:4},{t:99.892,lane:6},{t:100.194,lane:5},{t:100.496,lane:3},{t:100.826,lane:1},{t:101.402,lane:2},{t:101.564,lane:4},{t:101.727,lane:6},{t:102.028,lane:2},{t:102.191,lane:3},{t:102.486,lane:3},{t:102.632,lane:4},{t:102.795,lane:5},{t:102.957,lane:6},{t:103.259,lane:2},{t:103.398,lane:3},{t:103.693,lane:3},{t:103.863,lane:4},{t:104.025,lane:5},{t:104.165,lane:1},{t:104.467,lane:4},{t:104.722,lane:2},{t:105.094,lane:5},{t:105.233,lane:3},{t:105.395,lane:6},{t:105.655,lane:4},{t:106.162,lane:4},{t:106.324,lane:2},{t:106.463,lane:5},{t:106.556,lane:3},{t:107.067,lane:3},{t:107.315,lane:5},{t:107.532,lane:2},{t:107.694,lane:4},{t:107.833,lane:1},{t:107.996,lane:3},{t:108.46,lane:3},{t:108.762,lane:5},{t:108.994,lane:3},{t:109.389,lane:5},{t:109.691,lane:2},{t:110.132,lane:4},{t:110.786,lane:2},{t:110.899,lane:4},{t:111.088,lane:6},{t:111.2,lane:5},{t:111.389,lane:3},{t:111.525,lane:1},{t:111.827,lane:2},{t:111.993,lane:3},{t:112.129,lane:4},{t:112.431,lane:5},{t:112.597,lane:6},{t:112.733,lane:2},{t:112.895,lane:3},{t:113.058,lane:4},{t:113.36,lane:4},{t:113.502,lane:5},{t:113.662,lane:6},{t:113.804,lane:1},{t:113.964,lane:4},{t:114.265,lane:2},{t:114.59,lane:5},{t:114.892,lane:3},{t:115.011,lane:6},{t:115.194,lane:4},{t:115.496,lane:4},{t:115.798,lane:2},{t:115.917,lane:5},{t:116.1,lane:3},{t:116.218,lane:6},{t:116.52,lane:3},{t:116.727,lane:5},{t:117.029,lane:2},{t:117.261,lane:4},{t:117.426,lane:1},{t:117.632,lane:3},{t:117.795,lane:5},{t:117.878,lane:2},{t:118.18,lane:2},{t:118.491,lane:4},{t:118.561,lane:1},{t:118.863,lane:3},{t:119.165,lane:5},{t:119.467,lane:2},{t:119.792,lane:4},{t:120.094,lane:1},{t:120.444,lane:6},{t:120.746,lane:3},{t:120.999,lane:5},{t:121.162,lane:6},{t:121.464,lane:4},{t:121.626,lane:5},{t:121.765,lane:3},{t:121.928,lane:2},{t:122.23,lane:1},{t:122.392,lane:4},{t:122.694,lane:4},{t:122.834,lane:5},{t:122.996,lane:3},{t:123.159,lane:2},{t:123.46,lane:1},{t:123.6,lane:2},{t:123.762,lane:4},{t:124.064,lane:6},{t:124.227,lane:5},{t:124.389,lane:3},{t:124.691,lane:1},{t:124.83,lane:2},{t:124.993,lane:4},{t:125.295,lane:6},{t:125.434,lane:5},{t:125.597,lane:3},{t:125.899,lane:6},{t:126.061,lane:5},{t:126.2,lane:4},{t:126.363,lane:3},{t:126.665,lane:2},{t:127.129,lane:1},{t:127.269,lane:5},{t:127.431,lane:4},{t:127.594,lane:3},{t:127.896,lane:3},{t:128.197,lane:2},{t:128.36,lane:6},{t:128.592,lane:5},{t:128.964,lane:4},{t:129.126,lane:3},{t:129.428,lane:2},{t:130.705,lane:3},{t:131.286,lane:4},{t:132.493,lane:5},{t:133.12,lane:2,type:"hold",dur:1.207},{t:133.422,lane:3},{t:133.724,lane:4},{t:134.351,lane:5},{t:134.653,lane:3},{t:135.256,lane:3},{t:135.558,lane:3},{t:136.487,lane:5},{t:136.789,lane:2},{t:137.091,lane:4},{t:137.718,lane:3},{t:138.019,lane:3},{t:138.321,lane:5},{t:138.623,lane:2},{t:139.76,lane:4}],events:[{t:.001,type:"clock",mode:"off",power:.61},{t:.323,type:"pulse",power:.3},{t:.343,type:"echo",lane:0,dir:-1,power:.52},{t:2.737,type:"pulse",power:.49},{t:5.152,type:"pulse",power:.49},{t:5.172,type:"echo",lane:1,dir:-1,power:.72},{t:7.566,type:"pulse",power:.48},{t:9.981,type:"pulse",power:.49},{t:10.001,type:"echo",lane:6,dir:1,power:.72},{t:12.395,type:"pulse",power:.52},{t:14.81,type:"pulse",power:.51},{t:14.83,type:"echo",lane:7,dir:1,power:.74},{t:17.224,type:"pulse",power:.5},{t:18.432,type:"clock",mode:"run",power:.75},{t:18.432,type:"clockTick",hand:"fast",power:.78},{t:19.035,type:"clockTick",hand:"slow",power:.86},{t:19.639,type:"clockTick",hand:"fast",power:.8},{t:19.639,type:"pulse",power:.79},{t:19.659,type:"echo",lane:0,dir:-1,power:1.03},{t:20.243,type:"clockTick",hand:"slow",power:1.25},{t:20.846,type:"clockTick",hand:"fast",power:1.25},{t:21.45,type:"clockTick",hand:"slow",power:1.25},{t:22.053,type:"clockTick",hand:"fast",power:.85},{t:22.053,type:"pulse",power:.7},{t:22.657,type:"clockTick",hand:"slow",power:.84},{t:23.261,type:"clockTick",hand:"fast",power:1.25},{t:23.864,type:"clockTick",hand:"slow",power:.45},{t:24.484,type:"clock",mode:"run",power:.82},{t:25.071,type:"clockTick",hand:"fast",power:.45},{t:25.675,type:"clockTick",hand:"slow",power:.95},{t:26.279,type:"clockTick",hand:"fast",power:1.14},{t:26.882,type:"clockTick",hand:"slow",power:.76},{t:26.882,type:"pulse",power:.77},{t:26.902,type:"echo",lane:0,dir:-1,power:1.01},{t:27.486,type:"clockTick",hand:"fast",power:.96},{t:28.09,type:"clockTick",hand:"slow",power:1.19},{t:28.693,type:"clockTick",hand:"fast",power:.92},{t:29.297,type:"clockTick",hand:"slow",power:1.11},{t:29.297,type:"pulse",power:.74},{t:29.9,type:"clockTick",hand:"fast",power:1.15},{t:30.504,type:"clockTick",hand:"slow",power:.96},{t:31.108,type:"clockTick",hand:"fast",power:1.12},{t:31.711,type:"clockTick",hand:"slow",power:1.24},{t:31.711,type:"pulse",power:.76},{t:31.731,type:"echo",lane:7,dir:1,power:1},{t:32.315,type:"clockTick",hand:"fast",power:1.04},{t:32.315,type:"burst",lane:3,power:1.07},{t:32.919,type:"clockTick",hand:"slow",power:1.25},{t:33.522,type:"clockTick",hand:"fast",power:1.22},{t:34.126,type:"clockTick",hand:"slow",power:1.25},{t:34.126,type:"pulse",power:.78},{t:34.729,type:"clockTick",hand:"fast",power:1.1},{t:35.333,type:"clockTick",hand:"slow",power:1.25},{t:35.937,type:"clockTick",hand:"fast",power:1.25},{t:36.54,type:"clockTick",hand:"slow",power:1.07},{t:36.54,type:"pulse",power:.78},{t:36.56,type:"echo",lane:0,dir:-1,power:1.02},{t:37.144,type:"clockTick",hand:"fast",power:.77},{t:37.748,type:"clockTick",hand:"slow",power:1.21},{t:38.351,type:"clockTick",hand:"fast",power:1.25},{t:38.955,type:"clockTick",hand:"slow",power:1.25},{t:38.955,type:"pulse",power:.75},{t:39.558,type:"clockTick",hand:"fast",power:1.12},{t:40.162,type:"clockTick",hand:"slow",power:1.25},{t:40.766,type:"clockTick",hand:"fast",power:1.14},{t:41.369,type:"clockTick",hand:"slow",power:1.25},{t:41.369,type:"pulse",power:.82},{t:41.389,type:"echo",lane:7,dir:1,power:1.06},{t:41.973,type:"clockTick",hand:"fast",power:.92},{t:41.973,type:"burst",lane:3,power:1.13},{t:42.577,type:"clockTick",hand:"slow",power:1.25},{t:42.878,type:"clock",mode:"run",power:.9},{t:42.907,type:"motion",style:"wave",amp:.16,speed:.95,pitch:.08},{t:43.18,type:"clockTick",hand:"fast",power:.92},{t:43.784,type:"clockTick",hand:"slow",power:.88},{t:43.784,type:"pulse",power:.8},{t:43.804,type:"echo",lane:0,dir:-1,power:1.04},{t:44.387,type:"clockTick",hand:"fast",power:.98},{t:44.991,type:"clockTick",hand:"slow",power:.45},{t:45.595,type:"clockTick",hand:"fast",power:.83},{t:46.198,type:"clockTick",hand:"slow",power:.45},{t:46.198,type:"pulse",power:.79},{t:46.802,type:"clockTick",hand:"fast",power:.45},{t:47.405,type:"clockTick",hand:"slow",power:.96},{t:48.009,type:"clockTick",hand:"fast",power:1.18},{t:48.613,type:"clockTick",hand:"slow",power:1.05},{t:48.613,type:"pulse",power:.79},{t:48.633,type:"echo",lane:7,dir:1,power:1.04},{t:49.216,type:"clockTick",hand:"fast",power:1},{t:49.216,type:"burst",lane:5,power:1.11},{t:49.82,type:"clockTick",hand:"slow",power:1.15},{t:50.424,type:"clockTick",hand:"fast",power:1},{t:51.027,type:"clockTick",hand:"slow",power:1.05},{t:51.027,type:"pulse",power:.8},{t:51.631,type:"clockTick",hand:"fast",power:1.04},{t:52.234,type:"clockTick",hand:"slow",power:.92},{t:52.838,type:"clockTick",hand:"fast",power:1.16},{t:53.442,type:"clockTick",hand:"slow",power:1.12},{t:53.442,type:"pulse",power:.78},{t:53.462,type:"echo",lane:0,dir:-1,power:1.02},{t:54.045,type:"clockTick",hand:"fast",power:.93},{t:54.649,type:"clockTick",hand:"slow",power:1.11},{t:55.253,type:"clockTick",hand:"fast",power:1.21},{t:55.856,type:"clockTick",hand:"slow",power:1.25},{t:55.856,type:"pulse",power:.81},{t:56.46,type:"clockTick",hand:"fast",power:.77},{t:57.063,type:"clockTick",hand:"slow",power:.72},{t:57.667,type:"clockTick",hand:"fast",power:.45},{t:58.271,type:"clockTick",hand:"slow",power:.73},{t:58.271,type:"pulse",power:.78},{t:58.291,type:"echo",lane:7,dir:1,power:1.02},{t:58.874,type:"clockTick",hand:"fast",power:.84},{t:58.874,type:"burst",lane:6,power:1.09},{t:59.478,type:"clockTick",hand:"slow",power:.45},{t:60.082,type:"clockTick",hand:"fast",power:.45},{t:60.685,type:"clockTick",hand:"slow",power:.45},{t:60.685,type:"pulse",power:.81},{t:61.289,type:"clockTick",hand:"fast",power:.75},{t:61.892,type:"clockTick",hand:"slow",power:.88},{t:62.496,type:"clockTick",hand:"fast",power:.78},{t:63.1,type:"clockTick",hand:"slow",power:.81},{t:63.1,type:"pulse",power:.82},{t:63.12,type:"echo",lane:0,dir:-1,power:1.06},{t:63.703,type:"clockTick",hand:"fast",power:.81},{t:64.307,type:"clockTick",hand:"slow",power:.92},{t:64.911,type:"clockTick",hand:"fast",power:.98},{t:65.514,type:"clockTick",hand:"slow",power:.88},{t:65.514,type:"pulse",power:.61},{t:66.118,type:"clockTick",hand:"fast",power:.95},{t:66.418,type:"clock",mode:"freeze",power:.75},{t:66.419,type:"pendulum",mode:"start",period:2.4145,amplitude:.42},{t:76.073,type:"pendulum",mode:"stop"},{t:76.076,type:"clock",mode:"run",power:.88},{t:76.379,type:"clockTick",hand:"fast",power:.45},{t:76.983,type:"clockTick",hand:"slow",power:.77},{t:77.587,type:"clockTick",hand:"fast",power:.78},{t:77.587,type:"pulse",power:.77},{t:77.607,type:"echo",lane:0,dir:-1,power:1.01},{t:78.19,type:"clockTick",hand:"slow",power:.77},{t:78.794,type:"clockTick",hand:"fast",power:.75},{t:79.397,type:"clockTick",hand:"slow",power:1.25},{t:80.001,type:"clockTick",hand:"fast",power:.78},{t:80.001,type:"pulse",power:.82},{t:80.605,type:"clockTick",hand:"slow",power:.45},{t:81.208,type:"clockTick",hand:"fast",power:.82},{t:81.812,type:"clockTick",hand:"slow",power:.91},{t:82.416,type:"clockTick",hand:"fast",power:.98},{t:82.416,type:"pulse",power:.76},{t:82.436,type:"echo",lane:7,dir:1,power:1},{t:83.019,type:"clockTick",hand:"slow",power:1.02},{t:83.019,type:"burst",lane:2,power:1.07},{t:83.623,type:"clockTick",hand:"fast",power:1.01},{t:84.226,type:"clockTick",hand:"slow",power:1.01},{t:84.83,type:"clockTick",hand:"fast",power:.87},{t:84.83,type:"pulse",power:.68},{t:85.434,type:"clockTick",hand:"slow",power:.79},{t:86.037,type:"clockTick",hand:"fast",power:.75},{t:86.641,type:"clockTick",hand:"slow",power:.79},{t:87.245,type:"clockTick",hand:"fast",power:.76},{t:87.245,type:"pulse",power:.59},{t:87.265,type:"echo",lane:0,dir:-1,power:.83},{t:87.848,type:"clockTick",hand:"slow",power:.45},{t:88.452,type:"clockTick",hand:"fast",power:1.05},{t:89.055,type:"clockTick",hand:"slow",power:.91},{t:89.659,type:"clockTick",hand:"fast",power:.94},{t:89.659,type:"pulse",power:.7},{t:90.263,type:"clockTick",hand:"slow",power:.45},{t:90.562,type:"clock",mode:"run",power:.92},{t:90.581,type:"vibe",power:.67},{t:90.591,type:"motion",style:"zigzag",amp:.17,speed:1.15,pitch:.09},{t:90.866,type:"clockTick",hand:"fast",power:.88},{t:91.47,type:"clockTick",hand:"slow",power:.45},{t:92.074,type:"clockTick",hand:"fast",power:.77},{t:92.074,type:"pulse",power:.77},{t:92.094,type:"echo",lane:0,dir:-1,power:1.01},{t:92.677,type:"clockTick",hand:"slow",power:.45},{t:93.281,type:"clockTick",hand:"fast",power:.88},{t:93.884,type:"clockTick",hand:"slow",power:.45},{t:94.488,type:"clockTick",hand:"fast",power:.85},{t:94.488,type:"pulse",power:.77},{t:95.092,type:"clockTick",hand:"slow",power:.45},{t:95.695,type:"clockTick",hand:"fast",power:.77},{t:96.299,type:"clockTick",hand:"slow",power:.8},{t:96.902,type:"clockTick",hand:"fast",power:.77},{t:96.902,type:"pulse",power:.76},{t:96.922,type:"echo",lane:7,dir:1,power:1},{t:97.506,type:"clockTick",hand:"slow",power:.83},{t:97.506,type:"burst",lane:5,power:1.07},{t:98.11,type:"clockTick",hand:"fast",power:.82},{t:98.713,type:"clockTick",hand:"slow",power:.85},{t:99.317,type:"clockTick",hand:"fast",power:.85},{t:99.317,type:"pulse",power:.79},{t:99.921,type:"clockTick",hand:"slow",power:.88},{t:100.524,type:"clockTick",hand:"fast",power:1.25},{t:101.128,type:"clockTick",hand:"slow",power:.79},{t:101.731,type:"clockTick",hand:"fast",power:.82},{t:101.731,type:"pulse",power:.76},{t:101.751,type:"echo",lane:0,dir:-1,power:1},{t:102.335,type:"clockTick",hand:"slow",power:.81},{t:102.939,type:"clockTick",hand:"fast",power:.8},{t:103.542,type:"clockTick",hand:"slow",power:.81},{t:104.146,type:"clockTick",hand:"fast",power:.82},{t:104.146,type:"pulse",power:.79},{t:104.75,type:"clockTick",hand:"slow",power:.82},{t:105.353,type:"clockTick",hand:"fast",power:.89},{t:105.957,type:"clockTick",hand:"slow",power:.76},{t:106.56,type:"clockTick",hand:"fast",power:.81},{t:106.56,type:"pulse",power:.82},{t:106.58,type:"echo",lane:7,dir:1,power:1.06},{t:107.164,type:"clockTick",hand:"slow",power:.79},{t:107.164,type:"burst",lane:3,power:1.13},{t:107.768,type:"clockTick",hand:"fast",power:.79},{t:108.371,type:"clockTick",hand:"slow",power:.8},{t:108.975,type:"clockTick",hand:"fast",power:.82},{t:108.975,type:"pulse",power:.75},{t:109.579,type:"clockTick",hand:"slow",power:.93},{t:110.182,type:"clockTick",hand:"fast",power:.82},{t:110.481,type:"clock",mode:"final",power:.97},{t:110.5,type:"vibe",power:.75},{t:110.51,type:"motion",style:"orbit",amp:.17,speed:1,pitch:.085},{t:110.786,type:"clockTick",hand:"fast",power:.45},{t:111.389,type:"clockTick",hand:"slow",power:.45},{t:111.389,type:"pulse",power:.7},{t:111.409,type:"echo",lane:0,dir:-1,power:.93},{t:111.993,type:"clockTick",hand:"fast",power:.45},{t:112.597,type:"clockTick",hand:"slow",power:.45},{t:113.2,type:"clockTick",hand:"fast",power:.8},{t:113.804,type:"clockTick",hand:"slow",power:.45},{t:113.804,type:"pulse",power:.7},{t:114.408,type:"clockTick",hand:"fast",power:.78},{t:115.011,type:"clockTick",hand:"slow",power:.45},{t:115.615,type:"clockTick",hand:"fast",power:.45},{t:116.218,type:"clockTick",hand:"slow",power:.45},{t:116.218,type:"pulse",power:.7},{t:116.238,type:"echo",lane:7,dir:1,power:.94},{t:116.822,type:"clockTick",hand:"fast",power:.45},{t:116.822,type:"burst",lane:5,power:1.01},{t:117.426,type:"clockTick",hand:"slow",power:.45},{t:118.029,type:"clockTick",hand:"fast",power:.76},{t:118.633,type:"clockTick",hand:"slow",power:1.12},{t:118.633,type:"pulse",power:.75},{t:119.236,type:"clockTick",hand:"fast",power:1.08},{t:119.84,type:"clockTick",hand:"slow",power:1.05},{t:120.444,type:"clockTick",hand:"fast",power:.45},{t:121.047,type:"clockTick",hand:"slow",power:.86},{t:121.047,type:"pulse",power:.81},{t:121.067,type:"echo",lane:0,dir:-1,power:1.05},{t:121.651,type:"clockTick",hand:"fast",power:1.12},{t:122.255,type:"clockTick",hand:"slow",power:1.25},{t:122.858,type:"clockTick",hand:"fast",power:1.01},{t:123.462,type:"clockTick",hand:"slow",power:1.19},{t:123.462,type:"pulse",power:.83},{t:124.065,type:"clockTick",hand:"fast",power:1.14},{t:124.669,type:"clockTick",hand:"slow",power:1.08},{t:125.273,type:"clockTick",hand:"fast",power:.83},{t:125.876,type:"clockTick",hand:"slow",power:1.18},{t:125.876,type:"pulse",power:.82},{t:125.896,type:"echo",lane:7,dir:1,power:1.07},{t:126.48,type:"clockTick",hand:"fast",power:.88},{t:126.48,type:"burst",lane:3,power:1.14},{t:127.084,type:"clockTick",hand:"slow",power:1.25},{t:127.687,type:"clockTick",hand:"fast",power:.79},{t:128.291,type:"clockTick",hand:"slow",power:.86},{t:128.291,type:"pulse",power:.73},{t:128.894,type:"clockTick",hand:"fast",power:.83},{t:129.498,type:"clockTick",hand:"slow",power:.76},{t:129.796,type:"clock",mode:"off",power:.65},{t:130.705,type:"pulse",power:.45},{t:130.725,type:"echo",lane:0,dir:-1,power:.68},{t:133.12,type:"pulse",power:.49},{t:135.534,type:"pulse",power:.49},{t:135.554,type:"echo",lane:1,dir:-1,power:.72},{t:137.949,type:"pulse",power:.42}],ghosts:[{t:.04,lane:0,type:"sweep"},{t:.095,lane:1,type:"sweep"},{t:.15,lane:6,type:"sweep"},{t:.205,lane:7,type:"sweep"},{t:4.829,lane:0,type:"bounce"},{t:4.949,lane:1,type:"bounce"},{t:5.069,lane:6,type:"bounce"},{t:5.189,lane:7,type:"bounce"},{t:18.471,lane:0,type:"sweep"},{t:18.526,lane:1,type:"sweep"},{t:18.581,lane:6,type:"sweep"},{t:18.636,lane:7,type:"sweep"},{t:23.26,lane:0,type:"bounce"},{t:23.38,lane:1,type:"bounce"},{t:23.5,lane:6,type:"bounce"},{t:23.62,lane:7,type:"bounce"},{t:24.523,lane:0,type:"sweep"},{t:24.578,lane:7,type:"sweep"},{t:29.312,lane:0,type:"bounce"},{t:29.432,lane:7,type:"bounce"},{t:42.917,lane:0,type:"sweep"},{t:42.972,lane:7,type:"sweep"},{t:47.706,lane:0,type:"bounce"},{t:47.826,lane:7,type:"bounce"},{t:66.457,lane:0,type:"sweep"},{t:66.512,lane:1,type:"sweep"},{t:66.567,lane:6,type:"sweep"},{t:66.622,lane:7,type:"sweep"},{t:71.246,lane:0,type:"bounce"},{t:71.366,lane:1,type:"bounce"},{t:71.486,lane:6,type:"bounce"},{t:71.606,lane:7,type:"bounce"},{t:76.115,lane:0,type:"sweep"},{t:76.17,lane:7,type:"sweep"},{t:80.904,lane:0,type:"bounce"},{t:81.024,lane:7,type:"bounce"},{t:90.601,lane:0,type:"sweep"},{t:90.656,lane:7,type:"sweep"},{t:95.39,lane:0,type:"bounce"},{t:95.51,lane:7,type:"bounce"},{t:110.52,lane:0,type:"sweep"},{t:110.575,lane:7,type:"sweep"},{t:115.309,lane:0,type:"bounce"},{t:115.429,lane:7,type:"bounce"},{t:129.835,lane:0,type:"sweep"},{t:129.89,lane:1,type:"sweep"},{t:129.945,lane:6,type:"sweep"},{t:130,lane:7,type:"sweep"},{t:134.624,lane:0,type:"bounce"},{t:134.744,lane:1,type:"bounce"},{t:134.864,lane:6,type:"bounce"},{t:134.984,lane:7,type:"bounce"}],swings:[{t:67.021},{t:68.228},{t:69.435},{t:70.642},{t:71.85},{t:73.057},{t:74.264},{t:75.471}]},$p={song:{title:"THE UNTOUCHABLE OF f RA IA'S LAND",shortTitle:"THE UNTOUCHABLE",artist:"f RA IA",bpm:111.1,bpmLabel:"111 / 96 BPM",bpmMap:[{t:0,bpm:111.1},{t:28.492,bpm:96},{t:63.59,bpm:111.1}],duration:147.541,chartEnd:141.829,introEnd:28.492,beatOffset:.409,difficulty:"BOSS",laneLabel:"4 · 6 · 8",freeNotes:!0,boss:!0,fadeStart:140.2,fadeEnd:142.6},sections:[{name:"OVERTURE",start:0,end:9.05,keys:8,intro:!0,color:"#ffcf6e",accent:"#ff3b5c",energy:.42,bloom:.68,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:19.5,camY:7.2,spin:.02,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.03,motionSpeed:.25,motionPitch:.015,city:0},{name:"RELIQUARY",start:9.05,end:18.77,keys:8,intro:!0,color:"#ffb45e",accent:"#9b6bff",energy:.62,bloom:.8,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:19.5,camY:7.2,spin:.03,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"wave",motionAmp:.05,motionSpeed:.35,motionPitch:.02,city:0},{name:"HUSH",start:18.77,end:20.39,keys:8,intro:!0,color:"#b8c8ff",accent:"#ffd166",energy:.2,bloom:.42,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:19.5,camY:7.2,spin:.01,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"flat",motionAmp:.01,motionSpeed:.2,motionPitch:.005,city:0},{name:"PROCESSION",start:20.39,end:28.492,keys:8,intro:!0,color:"#ff8a5e",accent:"#ffd166",energy:.84,bloom:.96,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:19.5,camY:7.2,spin:.05,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.1,motionSpeed:.6,motionPitch:.04,city:0},{name:"CHAMBER",start:28.492,end:48.492,keys:4,color:"#a99bff",accent:"#ffd166",energy:.32,bloom:.62,rotY:0,rotZ:0,tilt:.02,spread:.98,y:.08,camZ:18.8,camY:7,spin:.025,lookY:5,lookZ:-2,bpm:96,beatOffset:28.492,motion:"wave",motionAmp:.04,motionSpeed:.4,motionPitch:.018,city:0},{name:"MECHANISM",start:48.492,end:61.492,keys:6,color:"#ffb45e",accent:"#ff4d6d",energy:.62,bloom:.82,rotY:.05,rotZ:-.018,tilt:.015,spread:1.03,y:.1,camZ:17.4,camY:6.8,spin:.06,lookY:5.4,lookZ:-4,bpm:96,beatOffset:28.492,motion:"clock",motionAmp:.075,motionSpeed:.55,motionPitch:.03,city:0},{name:"DESCENT",start:61.492,end:63.59,keys:6,color:"#ff6b7a",accent:"#ffd166",energy:.76,bloom:.9,rotY:-.06,rotZ:.025,tilt:-.02,spread:1.05,y:.12,camZ:16.4,camY:6.4,spin:.09,lookY:5.6,lookZ:-5,bpm:96,beatOffset:28.492,motion:"slope",motionAmp:.12,motionSpeed:.7,motionPitch:.05,city:0},{name:"GALLERY",start:63.59,end:70.069,keys:6,color:"#ff7a5e",accent:"#ffd166",energy:.84,bloom:.98,rotY:.08,rotZ:-.03,tilt:.025,spread:1.06,y:.14,camZ:16.2,camY:6.7,spin:.1,lookY:5.8,lookZ:-6,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.13,motionSpeed:.75,motionPitch:.05,city:0},{name:"HUNT",start:70.069,end:89.449,keys:6,color:"#ff4d6d",accent:"#ffd166",energy:.98,bloom:1.08,rotY:-.1,rotZ:.04,tilt:-.025,spread:1.08,y:.16,camZ:15.8,camY:6.6,spin:.13,lookY:6,lookZ:-6,bpm:111.1,beatOffset:.409,motion:"zigzag",motionAmp:.16,motionSpeed:.95,motionPitch:.065,city:0},{name:"FROZEN",start:89.449,end:105.429,keys:4,color:"#9fc7ff",accent:"#d7e8ff",energy:.3,bloom:.58,rotY:-.02,rotZ:.01,tilt:.04,spread:.94,y:.24,camZ:19.2,camY:7.8,spin:.02,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"flat",motionAmp:.02,motionSpeed:.2,motionPitch:.008,city:0},{name:"ASCENT",start:105.429,end:107.509,keys:6,color:"#ffd166",accent:"#ff7a5e",energy:.88,bloom:1,rotY:.06,rotZ:-.025,tilt:.02,spread:1.04,y:.12,camZ:16.4,camY:6.5,spin:.1,lookY:5.8,lookZ:-5,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.16,motionSpeed:.9,motionPitch:.06,city:0},{name:"APOTHEOSIS",start:107.509,end:123.829,keys:8,color:"#ff9a5e",accent:"#ff3b5c",energy:1.04,bloom:1.14,rotY:-.12,rotZ:.05,tilt:-.03,spread:1.1,y:.18,camZ:15.4,camY:6.5,spin:.15,lookY:6,lookZ:-6,bpm:111.1,beatOffset:.409,motion:"clock",motionAmp:.18,motionSpeed:1.05,motionPitch:.075,city:0},{name:"FINALE",start:123.829,end:141.829,keys:8,color:"#ff3b5c",accent:"#ffd166",energy:1.12,bloom:1.2,rotY:.14,rotZ:-.055,tilt:.035,spread:1.12,y:.2,camZ:14.8,camY:6.3,spin:.17,lookY:6.2,lookZ:-7,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.2,motionSpeed:1.15,motionPitch:.085,city:0},{name:"OUTRO",start:141.829,end:147.541,keys:4,color:"#c9b8ff",accent:"#ffd166",energy:.18,bloom:.46,rotY:0,rotZ:0,tilt:.02,spread:.92,y:.3,camZ:19.6,camY:7.8,spin:.02,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"flat",motionAmp:0,motionSpeed:.2,motionPitch:0,city:0}],notes:[{t:29.71,lane:2},{t:31.022,lane:2},{t:32.183,lane:4},{t:33.492,lane:2,type:"hold",dur:1.25},{t:34.516,lane:3},{t:34.742,lane:4},{t:35.143,lane:5},{t:35.306,lane:3},{t:35.992,lane:3},{t:36.386,lane:5},{t:37.242,lane:2},{t:37.64,lane:4},{t:37.953,lane:3},{t:38.266,lane:5},{t:38.492,lane:5},{t:38.893,lane:4},{t:39.117,lane:3,type:"hold",dur:1.25},{t:39.742,lane:2},{t:40.136,lane:4},{t:40.763,lane:4},{t:40.992,lane:5,type:"hold",dur:1.25},{t:41.39,lane:4},{t:42.017,lane:3},{t:42.242,lane:2},{t:42.643,lane:4},{t:42.794,lane:3},{t:43.421,lane:3},{t:44.199,lane:3},{t:44.513,lane:2},{t:44.742,lane:4},{t:45.453,lane:5},{t:45.767,lane:3},{t:45.992,lane:2},{t:46.393,lane:4},{t:46.707,lane:3},{t:47.242,lane:5},{t:47.647,lane:4},{t:49.737,lane:3},{t:50.968,lane:5},{t:51.304,lane:3},{t:51.699,lane:5},{t:52.013,lane:2},{t:52.242,lane:4},{t:52.555,lane:1},{t:52.953,lane:3},{t:53.267,lane:3},{t:53.492,lane:6,type:"hold",dur:1.25},{t:53.882,lane:4},{t:54.195,lane:5},{t:54.509,lane:3},{t:54.741,lane:2},{t:55.055,lane:1},{t:55.449,lane:4},{t:55.763,lane:4},{t:55.992,lane:2},{t:56.308,lane:4},{t:56.622,lane:6},{t:56.924,lane:5},{t:57.249,lane:3},{t:57.551,lane:1,type:"hold",dur:1.25},{t:57.864,lane:2},{t:57.945,lane:4},{t:58.178,lane:6},{t:58.259,lane:5},{t:58.468,lane:3},{t:58.805,lane:6},{t:59.117,lane:5},{t:59.43,lane:4},{t:59.742,lane:3},{t:60.055,lane:2},{t:60.453,lane:1},{t:60.767,lane:5},{t:60.992,lane:6},{t:61.305,lane:5},{t:61.614,lane:4},{t:61.707,lane:2},{t:61.928,lane:2},{t:62.02,lane:5},{t:62.241,lane:3},{t:62.555,lane:6},{t:62.961,lane:4},{t:63.994,lane:6},{t:64.122,lane:5},{t:64.389,lane:4},{t:64.795,lane:3},{t:64.935,lane:2},{t:65.202,lane:1},{t:65.35,lane:4},{t:65.608,lane:4},{t:65.891,lane:2},{t:66.014,lane:5},{t:66.296,lane:3},{t:66.421,lane:6},{t:66.701,lane:4},{t:66.971,lane:4},{t:67.094,lane:2},{t:67.376,lane:3},{t:67.5,lane:5},{t:68.051,lane:2},{t:68.452,lane:4},{t:68.591,lane:1},{t:69.266,lane:3},{t:69.521,lane:3},{t:69.799,lane:1},{t:70.333,lane:1},{t:70.6,lane:4},{t:70.867,lane:2},{t:71.134,lane:5},{t:71.413,lane:3},{t:71.68,lane:6},{t:72.101,lane:4},{t:72.353,lane:4},{t:72.493,lane:2},{t:72.76,lane:5},{t:72.899,lane:3},{t:73.166,lane:6},{t:73.451,lane:4},{t:73.572,lane:2},{t:73.839,lane:2},{t:74.106,lane:2},{t:74.246,lane:3},{t:74.385,lane:4},{t:74.652,lane:3},{t:74.919,lane:5},{t:75.186,lane:6},{t:75.465,lane:2},{t:75.732,lane:3},{t:75.999,lane:4},{t:76.266,lane:6},{t:76.405,lane:4},{t:76.533,lane:5},{t:76.812,lane:3},{t:77.079,lane:2},{t:77.367,lane:1},{t:77.485,lane:4},{t:77.624,lane:5},{t:77.907,lane:5},{t:78.019,lane:3},{t:78.158,lane:2},{t:78.312,lane:4},{t:78.565,lane:4},{t:78.971,lane:6},{t:79.257,lane:5},{t:79.377,lane:3},{t:79.644,lane:1},{t:79.911,lane:2},{t:80.051,lane:4},{t:80.318,lane:6},{t:80.585,lane:4},{t:80.863,lane:4},{t:80.991,lane:6},{t:81.131,lane:5},{t:81.398,lane:3},{t:81.676,lane:1},{t:82.21,lane:2},{t:82.477,lane:4},{t:82.744,lane:1},{t:82.884,lane:2},{t:83.023,lane:3},{t:83.29,lane:4},{t:83.557,lane:5},{t:83.824,lane:6},{t:84.103,lane:1},{t:84.37,lane:2},{t:84.637,lane:3},{t:84.904,lane:1},{t:85.043,lane:4},{t:85.182,lane:2},{t:85.738,lane:5},{t:85.995,lane:3},{t:86.262,lane:6},{t:86.548,lane:4},{t:86.796,lane:4},{t:86.953,lane:3},{t:87.203,lane:5},{t:87.539,lane:2},{t:87.876,lane:4},{t:88.015,lane:1},{t:88.282,lane:3},{t:88.549,lane:3},{t:88.689,lane:5},{t:88.956,lane:2},{t:88.956,lane:5},{t:89.095,lane:3},{t:90.035,lane:4,type:"hold",dur:1.08},{t:91.138,lane:2,type:"hold",dur:1.08},{t:92.218,lane:3,type:"hold",dur:1.08},{t:93.286,lane:5},{t:94.366,lane:5},{t:95.446,lane:4},{t:96.525,lane:4},{t:97.605,lane:5},{t:98.159,lane:4},{t:98.673,lane:5},{t:99.091,lane:3},{t:99.765,lane:3},{t:100.299,lane:2},{t:100.833,lane:4},{t:101.251,lane:3},{t:101.518,lane:5},{t:101.645,lane:4},{t:101.912,lane:4},{t:102.191,lane:4},{t:102.33,lane:2},{t:102.597,lane:3},{t:102.737,lane:4},{t:103.004,lane:4},{t:103.41,lane:2},{t:103.816,lane:3},{t:104.083,lane:3},{t:104.49,lane:2},{t:104.618,lane:3},{t:105.163,lane:3},{t:105.43,lane:1},{t:105.57,lane:4},{t:105.697,lane:2},{t:105.837,lane:5},{t:105.964,lane:3},{t:106.104,lane:6},{t:106.243,lane:1},{t:106.243,lane:4},{t:107.323,lane:1},{t:107.59,lane:4},{t:107.996,lane:4},{t:108.124,lane:6},{t:108.402,lane:3},{t:108.669,lane:0},{t:108.936,lane:2},{t:109.215,lane:4},{t:109.482,lane:6},{t:109.749,lane:7},{t:110.016,lane:5},{t:110.295,lane:3},{t:110.562,lane:1},{t:110.701,lane:6},{t:110.968,lane:6},{t:111.235,lane:5},{t:111.375,lane:4},{t:111.642,lane:3},{t:111.781,lane:2},{t:112.048,lane:1},{t:112.315,lane:0},{t:112.454,lane:5},{t:112.721,lane:6},{t:112.988,lane:2},{t:113.128,lane:4},{t:113.395,lane:3},{t:113.662,lane:5},{t:113.801,lane:1},{t:114.068,lane:0},{t:114.207,lane:2},{t:114.474,lane:2},{t:114.741,lane:2},{t:114.881,lane:4},{t:115.148,lane:2},{t:115.287,lane:4},{t:115.554,lane:3},{t:115.821,lane:5},{t:115.96,lane:1},{t:116.227,lane:0},{t:116.367,lane:2},{t:116.634,lane:2},{t:116.901,lane:2},{t:117.04,lane:4},{t:117.18,lane:1},{t:117.447,lane:3},{t:117.714,lane:5},{t:117.853,lane:7},{t:118.12,lane:6},{t:118.526,lane:4},{t:118.793,lane:2},{t:118.933,lane:0},{t:119.2,lane:1},{t:119.467,lane:4},{t:119.606,lane:6},{t:119.873,lane:6},{t:120.14,lane:3},{t:120.279,lane:5},{t:120.546,lane:2},{t:120.686,lane:0},{t:120.953,lane:1},{t:121.22,lane:4},{t:121.359,lane:6},{t:121.626,lane:1},{t:121.893,lane:1},{t:122.032,lane:2},{t:122.3,lane:3},{t:122.439,lane:4},{t:122.706,lane:5},{t:123.112,lane:6},{t:123.252,lane:7},{t:123.519,lane:1},{t:123.519,lane:6},{t:124.064,lane:1},{t:124.331,lane:3},{t:124.621,lane:5},{t:124.865,lane:7},{t:125.144,lane:6},{t:125.411,lane:4},{t:125.678,lane:2},{t:125.945,lane:0},{t:126.084,lane:3},{t:126.351,lane:5},{t:126.63,lane:6},{t:126.758,lane:4},{t:127.025,lane:2},{t:127.164,lane:1},{t:127.431,lane:0},{t:127.71,lane:0},{t:127.837,lane:3},{t:128.104,lane:0},{t:128.383,lane:2},{t:128.511,lane:4},{t:128.789,lane:6},{t:128.917,lane:7},{t:129.184,lane:5},{t:129.591,lane:3},{t:129.73,lane:1},{t:129.997,lane:0},{t:130.264,lane:5},{t:130.543,lane:6},{t:130.67,lane:5},{t:130.949,lane:4},{t:131.077,lane:3},{t:131.216,lane:2},{t:131.344,lane:1},{t:131.75,lane:0},{t:131.889,lane:5},{t:132.156,lane:6},{t:132.296,lane:7},{t:132.563,lane:6},{t:132.83,lane:5},{t:132.969,lane:4},{t:133.236,lane:3},{t:133.375,lane:2},{t:133.642,lane:1},{t:133.921,lane:0},{t:134.049,lane:5},{t:134.316,lane:6},{t:134.583,lane:4},{t:134.861,lane:4},{t:135.129,lane:1},{t:135.268,lane:5},{t:135.396,lane:2},{t:135.663,lane:6},{t:135.941,lane:3},{t:136.208,lane:7},{t:136.475,lane:4},{t:136.615,lane:1},{t:136.882,lane:3},{t:137.149,lane:5},{t:137.288,lane:7},{t:137.427,lane:6},{t:137.555,lane:4},{t:137.694,lane:2},{t:137.961,lane:0},{t:138.228,lane:1},{t:138.368,lane:3},{t:138.635,lane:5},{t:138.774,lane:7},{t:139.041,lane:4},{t:139.308,lane:6},{t:139.447,lane:3},{t:139.587,lane:5},{t:139.714,lane:2},{t:139.854,lane:0},{t:140.121,lane:1},{t:140.388,lane:4},{t:140.527,lane:6},{t:140.794,lane:1},{t:140.794,lane:6},{t:141.061,lane:7},{t:141.34,lane:4},{t:141.607,lane:6}],events:[{t:0,type:"bossCamera",pos:[0,15,48],look:[0,18,-70],fov:48,roll:0,dur:.02},{t:.409,type:"bossCamera",pos:[0,14,46],look:[0,20,-74],fov:48,roll:0,dur:1.1},{t:.409,type:"bossGlitch",power:.5},{t:.409,type:"pulse",power:.91},{t:.429,type:"wind",power:.95},{t:.7,type:"caption",kicker:"OVERTURE",title:"THE UNTOUCHABLE",sub:"OF f RA IA'S LAND",hold:5.6},{t:2.569,type:"bossCamera",pos:[0,10,31],look:[0,20,-78],fov:52,roll:-.02,dur:.85},{t:2.569,type:"pulse",power:.97},{t:4.729,type:"bossCamera",pos:[-7,5.5,20],look:[2,23,-86],fov:58,roll:.025,dur:.78},{t:4.729,type:"bossGlitch",power:.7},{t:4.729,type:"pulse",power:.88},{t:6.889,type:"bossCamera",pos:[8,3.1,10],look:[-4,19,-82],fov:61,roll:.035,dur:.72},{t:6.89,type:"pulse",power:.94},{t:8.95,type:"bossGlitch",power:.9},{t:9.05,type:"bossCamera",pos:[-16,10,-2],look:[8,15,-66],fov:55,roll:-.03,dur:.92},{t:9.07,type:"wind",power:1.07},{t:9.2,type:"caption",kicker:"I",title:"THE NAVE",sub:"EVERY SAINT HAS TURNED AWAY",hold:4.2},{t:11.21,type:"bossCamera",pos:[13,17,-14],look:[-10,12,-82],fov:52,roll:.05,dur:.85},{t:11.21,type:"pulse",power:.74},{t:13.37,type:"bossCamera",pos:[0,24,16],look:[0,14,-44],fov:50,roll:0,dur:.72},{t:13.37,type:"bossGlitch",power:.65},{t:13.37,type:"pulse",power:.77},{t:15.53,type:"bossCamera",pos:[0,3,6],look:[0,23,-88],fov:63,roll:.02,dur:.68},{t:15.531,type:"pulse",power:.74},{t:17.69,type:"bossCamera",pos:[0,12,38],look:[0,21,-88],fov:48,roll:0,dur:1.05},{t:17.691,type:"pulse",power:.45},{t:17.711,type:"wind",power:1.07},{t:18.77,type:"bossGlitch",power:1},{t:19.85,type:"bossCamera",pos:[0,6,18],look:[0,25,-88],fov:58,roll:-.03,dur:.52},{t:19.851,type:"pulse",power:.92},{t:20.41,type:"vibe",power:.67},{t:20.42,type:"motion",style:"orbit",amp:.1,speed:.6,pitch:.04},{t:20.5,type:"caption",kicker:"II",title:"THE PROCESSION",sub:"THE HOUR HAND FALLS",hold:4},{t:21.49,type:"bossCamera",pos:[-12,15,10],look:[6,11,-48],fov:55,roll:.04,dur:.8},{t:21.49,type:"bossGlitch",power:.8},{t:22.011,type:"pulse",power:.7},{t:23.65,type:"bossCamera",pos:[12,4,4],look:[-4,19,-74],fov:60,roll:-.05,dur:.62},{t:23.65,type:"bossGlitch",power:.9},{t:24.171,type:"pulse",power:.72},{t:25.81,type:"bossCamera",pos:[0,26,26],look:[0,0,-4],fov:58,roll:.03,dur:.72},{t:26.3,type:"caption",kicker:"III",title:"THE CLOCK",sub:"DO NOT LET IT STRIKE",hold:2.4},{t:26.332,type:"pulse",power:.68},{t:26.352,type:"wind",power:1.2},{t:27.97,type:"bossCamera",pos:[0,9.5,26],look:[0,5,-2],fov:51,roll:0,dur:.52},{t:27.97,type:"bossGlitch",power:1.15},{t:28.492,type:"bossCamera",pos:[0,7.4,19.2],look:[0,4.87,-2],fov:48.62,roll:0,dur:.6},{t:28.492,type:"bossGlitch",power:1.3},{t:28.492,type:"bossPhase",mode:"play"},{t:28.492,type:"bossTick",hand:"fast",power:.54},{t:28.492,type:"pulse",power:.61},{t:28.512,type:"echo",lane:0,dir:-1,power:.85},{t:30.992,type:"bossTick",hand:"slow",power:.54},{t:30.992,type:"pulse",power:.71},{t:33.492,type:"bossTick",hand:"fast",power:.54},{t:33.492,type:"pulse",power:.65},{t:33.512,type:"echo",lane:1,dir:-1,power:.88},{t:33.55,type:"bossCamera",pos:[0,8.1,18.4],look:[0,4.88,-3],fov:51.58,roll:0,dur:.8},{t:35.992,type:"bossTick",hand:"slow",power:.54},{t:35.992,type:"pulse",power:.61},{t:38.492,type:"bossTick",hand:"fast",power:.54},{t:38.492,type:"pulse",power:.61},{t:38.512,type:"echo",lane:6,dir:1,power:.85},{t:40.742,type:"bossCamera",pos:[-5,9.2,18.8],look:[2,5.2,-4],fov:52.07,roll:.02,dur:1},{t:40.992,type:"bossTick",hand:"slow",power:.54},{t:40.992,type:"pulse",power:.71},{t:43.492,type:"bossTick",hand:"fast",power:.54},{t:43.492,type:"pulse",power:.61},{t:43.512,type:"echo",lane:7,dir:1,power:.85},{t:45.992,type:"bossTick",hand:"slow",power:.54},{t:45.992,type:"pulse",power:.61},{t:48.492,type:"bossCamera",pos:[-4,7.8,17.2],look:[2,4.38,-6],fov:52.36,roll:-.02,dur:.9},{t:48.492,type:"bossGlitch",power:.7},{t:48.492,type:"bossTick",hand:"fast",power:.72},{t:48.492,type:"pulse",power:.62},{t:48.512,type:"echo",lane:0,dir:-1,power:.86},{t:50.992,type:"bossTick",hand:"slow",power:.72},{t:50.992,type:"pulse",power:.62},{t:53.492,type:"bossTick",hand:"fast",power:.72},{t:53.492,type:"pulse",power:.67},{t:53.512,type:"echo",lane:7,dir:1,power:.91},{t:54.117,type:"burst",lane:5,power:.97},{t:54.92,type:"bossCamera",pos:[5,8.05,16.4],look:[-2,4.43,-6],fov:54,roll:.03,dur:.9},{t:55.992,type:"bossTick",hand:"slow",power:.72},{t:55.992,type:"pulse",power:.77},{t:58.492,type:"bossTick",hand:"fast",power:.72},{t:58.492,type:"pulse",power:.62},{t:58.512,type:"echo",lane:0,dir:-1,power:.86},{t:60.992,type:"bossTick",hand:"slow",power:.72},{t:60.992,type:"pulse",power:.6},{t:61.492,type:"bossCamera",pos:[-7,6.6,15.4],look:[4,3.81,-10],fov:51,roll:-.04,dur:.7},{t:63.492,type:"bossTick",hand:"fast",power:.81},{t:63.492,type:"pulse",power:.64},{t:63.512,type:"echo",lane:0,dir:-1,power:.87},{t:63.59,type:"bossCamera",pos:[0,7.32,16.2],look:[0,3.91,-7],fov:54,roll:.03,dur:.6},{t:63.59,type:"bossGlitch",power:1.1},{t:63.61,type:"vibe",power:.67},{t:63.62,type:"motion",style:"orbit",amp:.13,speed:.75,pitch:.05},{t:65.215,type:"bossTick",hand:"fast",power:.85},{t:65.215,type:"pulse",power:.58},{t:65.235,type:"echo",lane:0,dir:-1,power:.81},{t:67.376,type:"bossTick",hand:"slow",power:.85},{t:67.376,type:"pulse",power:.54},{t:68.995,type:"wind",power:1.3},{t:69.536,type:"bossTick",hand:"fast",power:.85},{t:69.536,type:"pulse",power:.74},{t:69.556,type:"echo",lane:7,dir:1,power:.98},{t:70.069,type:"bossCamera",pos:[0,6.7,15.4],look:[0,3.46,-9],fov:54,roll:0,dur:.7},{t:70.069,type:"bossGlitch",power:1.2},{t:70.076,type:"burst",lane:1,power:1.05},{t:70.089,type:"vibe",power:.78},{t:70.099,type:"motion",style:"zigzag",amp:.16,speed:.95,pitch:.065},{t:70.62,type:"wind",power:1.3},{t:71.696,type:"bossTick",hand:"slow",power:.94},{t:71.696,type:"pulse",power:.65},{t:71.716,type:"echo",lane:0,dir:-1,power:.89},{t:73.856,type:"bossTick",hand:"fast",power:.94},{t:73.856,type:"pulse",power:.72},{t:74.39,type:"bossCamera",pos:[-6,6.9,14.6],look:[3,3.61,-10],fov:54,roll:.035,dur:.85},{t:76.017,type:"bossTick",hand:"slow",power:.94},{t:76.017,type:"pulse",power:.61},{t:76.037,type:"echo",lane:7,dir:1,power:.85},{t:76.557,type:"burst",lane:5,power:.91},{t:78.177,type:"bossTick",hand:"fast",power:.94},{t:78.177,type:"pulse",power:.72},{t:78.71,type:"bossCamera",pos:[6,7.19,15],look:[-3,3.67,-10],fov:54,roll:-.04,dur:.85},{t:79.595,type:"wind",power:1.3},{t:80.337,type:"bossTick",hand:"slow",power:.94},{t:80.337,type:"pulse",power:.63},{t:80.357,type:"echo",lane:0,dir:-1,power:.87},{t:82.497,type:"bossTick",hand:"fast",power:.94},{t:82.497,type:"pulse",power:.69},{t:83.03,type:"bossCamera",pos:[0,5.55,13.8],look:[0,3.27,-8],fov:54,roll:.02,dur:.85},{t:84.39,type:"wind",power:1.3},{t:84.657,type:"bossTick",hand:"slow",power:.94},{t:84.657,type:"pulse",power:.59},{t:84.677,type:"echo",lane:7,dir:1,power:.83},{t:85.197,type:"burst",lane:2,power:.89},{t:86.818,type:"bossTick",hand:"fast",power:.94},{t:86.818,type:"pulse",power:.65},{t:87.35,type:"bossCamera",pos:[-8,7.23,14.2],look:[4,4,-9],fov:54,roll:-.03,dur:.65},{t:88.978,type:"bossTick",hand:"slow",power:.94},{t:88.978,type:"pulse",power:.5},{t:88.998,type:"echo",lane:0,dir:-1,power:.73},{t:89.449,type:"bossCamera",pos:[0,8.8,20.2],look:[0,5.34,-2],fov:49.91,roll:0,dur:.9},{t:89.449,type:"bossGlitch",power:.9},{t:90.055,type:"wind",power:1.3},{t:91.138,type:"bossTick",hand:"fast",power:.53},{t:91.138,type:"pulse",power:.49},{t:91.158,type:"echo",lane:0,dir:-1,power:.72},{t:93.298,type:"bossTick",hand:"slow",power:.53},{t:93.298,type:"pulse",power:.65},{t:95.459,type:"bossTick",hand:"fast",power:.53},{t:95.459,type:"pulse",power:.69},{t:95.479,type:"echo",lane:1,dir:-1,power:.92},{t:97.438,type:"bossCamera",pos:[-8,9.6,18.4],look:[4,5.19,-6],fov:51.91,roll:.025,dur:1.1},{t:97.619,type:"bossTick",hand:"slow",power:.53},{t:97.619,type:"pulse",power:.52},{t:99.779,type:"bossTick",hand:"fast",power:.53},{t:99.779,type:"pulse",power:.72},{t:99.799,type:"echo",lane:6,dir:1,power:.96},{t:101.939,type:"bossTick",hand:"slow",power:.53},{t:101.939,type:"pulse",power:.75},{t:104.099,type:"bossTick",hand:"fast",power:.53},{t:104.099,type:"pulse",power:.89},{t:104.119,type:"echo",lane:7,dir:1,power:1.13},{t:105.429,type:"bossCamera",pos:[0,7.16,16],look:[0,4.01,-6],fov:54,roll:-.03,dur:.55},{t:105.429,type:"bossGlitch",power:.75},{t:105.459,type:"motion",style:"orbit",amp:.16,speed:.9,pitch:.06},{t:106.26,type:"bossTick",hand:"slow",power:.88},{t:106.26,type:"pulse",power:.55},{t:106.28,type:"echo",lane:0,dir:-1,power:.78},{t:107.509,type:"bossCamera",pos:[0,6.7,15.4],look:[0,3.6,-8],fov:54,roll:.02,dur:.6},{t:107.509,type:"bossGlitch",power:1.15},{t:107.529,type:"vibe",power:.83},{t:107.539,type:"motion",style:"clock",amp:.18,speed:1.05,pitch:.075},{t:108.42,type:"bossTick",hand:"fast",power:.97},{t:108.42,type:"pulse",power:.69},{t:110.58,type:"bossTick",hand:"slow",power:.97},{t:110.58,type:"pulse",power:.71},{t:111.829,type:"bossCamera",pos:[-7,6.9,14.2],look:[0,3.82,-9],fov:54,roll:-.04,dur:.9},{t:112.74,type:"bossTick",hand:"fast",power:.97},{t:112.74,type:"pulse",power:.69},{t:113.28,type:"burst",lane:3,power:1},{t:114.9,type:"bossTick",hand:"slow",power:.97},{t:114.9,type:"pulse",power:.69},{t:116.149,type:"bossCamera",pos:[5,5.7,13.2],look:[0,3.26,-10],fov:54,roll:.045,dur:.9},{t:117.061,type:"bossTick",hand:"fast",power:.97},{t:117.061,type:"pulse",power:.66},{t:119.221,type:"bossTick",hand:"slow",power:.97},{t:119.221,type:"pulse",power:.69},{t:120.469,type:"bossCamera",pos:[0,4.78,12.6],look:[0,2.7,-12],fov:54,roll:-.02,dur:.9},{t:121.381,type:"bossTick",hand:"fast",power:.97},{t:121.381,type:"pulse",power:.69},{t:121.921,type:"burst",lane:1,power:1},{t:123.541,type:"bossTick",hand:"slow",power:.97},{t:123.541,type:"pulse",power:.69},{t:123.829,type:"bossCamera",pos:[0,5.69,14],look:[0,3.1,-10],fov:54,roll:.03,dur:.7},{t:123.829,type:"bossGlitch",power:1.25},{t:123.849,type:"vibe",power:.9},{t:123.859,type:"motion",style:"orbit",amp:.2,speed:1.15,pitch:.085},{t:125.702,type:"bossTick",hand:"fast",power:1.02},{t:125.702,type:"pulse",power:.63},{t:127.862,type:"bossTick",hand:"slow",power:1.02},{t:127.862,type:"pulse",power:.64},{t:128.149,type:"bossCamera",pos:[-8,6.41,13],look:[0,3.68,-10],fov:54,roll:-.045,dur:.95},{t:128.531,type:"wind",power:1.3},{t:130.022,type:"bossTick",hand:"fast",power:1.02},{t:130.022,type:"pulse",power:.64},{t:130.562,type:"burst",lane:6,power:.94},{t:132.182,type:"bossTick",hand:"slow",power:1.02},{t:132.182,type:"pulse",power:.68},{t:132.246,type:"wind",power:1.3},{t:132.469,type:"bossCamera",pos:[8,6.03,12.4],look:[0,3.59,-10],fov:54,roll:.05,dur:.95},{t:134.342,type:"bossTick",hand:"fast",power:1.02},{t:134.342,type:"pulse",power:.63},{t:136.503,type:"bossTick",hand:"slow",power:1.02},{t:136.503,type:"pulse",power:.64},{t:136.789,type:"bossCamera",pos:[0,3.96,11.2],look:[0,2.53,-12],fov:54,roll:-.03,dur:.9},{t:138.663,type:"bossTick",hand:"fast",power:1.02},{t:138.663,type:"pulse",power:.63},{t:139.203,type:"burst",lane:6,power:.93},{t:140.823,type:"bossTick",hand:"slow",power:1.02},{t:140.823,type:"pulse",power:.51},{t:141.829,type:"bossCamera",pos:[0,9,19],look:[0,5.69,0],fov:52.39,roll:0,dur:1.2},{t:141.829,type:"bossGlitch",power:.7},{t:141.829,type:"bossPhase",mode:"outro"},{t:142.983,type:"bossTick",hand:"fast",power:.46},{t:145.143,type:"bossTick",hand:"slow",power:.46},{t:147.304,type:"bossTick",hand:"fast",power:.46}],ghosts:[{t:28.532,lane:0,type:"sweep"},{t:28.587,lane:1,type:"sweep"},{t:28.642,lane:6,type:"sweep"},{t:28.697,lane:7,type:"sweep"},{t:33.492,lane:0,type:"bounce"},{t:33.612,lane:1,type:"bounce"},{t:33.732,lane:6,type:"bounce"},{t:33.852,lane:7,type:"bounce"},{t:48.532,lane:0,type:"sweep"},{t:48.587,lane:7,type:"sweep"},{t:53.492,lane:0,type:"bounce"},{t:53.612,lane:7,type:"bounce"},{t:61.532,lane:0,type:"sweep"},{t:61.587,lane:7,type:"sweep"},{t:63.63,lane:0,type:"sweep"},{t:63.685,lane:7,type:"sweep"},{t:67.91,lane:0,type:"bounce"},{t:68.03,lane:7,type:"bounce"},{t:70.109,lane:0,type:"sweep"},{t:70.164,lane:7,type:"sweep"},{t:74.389,lane:0,type:"bounce"},{t:74.509,lane:7,type:"bounce"},{t:89.489,lane:0,type:"sweep"},{t:89.544,lane:1,type:"sweep"},{t:89.599,lane:6,type:"sweep"},{t:89.654,lane:7,type:"sweep"},{t:93.769,lane:0,type:"bounce"},{t:93.889,lane:1,type:"bounce"},{t:94.009,lane:6,type:"bounce"},{t:94.129,lane:7,type:"bounce"},{t:105.469,lane:0,type:"sweep"},{t:105.524,lane:7,type:"sweep"},{t:141.869,lane:0,type:"sweep"},{t:141.924,lane:1,type:"sweep"},{t:141.979,lane:6,type:"sweep"},{t:142.034,lane:7,type:"sweep"},{t:146.149,lane:0,type:"bounce"},{t:146.269,lane:1,type:"bounce"},{t:146.389,lane:6,type:"bounce"},{t:146.509,lane:7,type:"bounce"}]},jp={song:{title:"INTENTION",shortTitle:"INTENTION",artist:"ORIGINAL TRACK",bpm:180,bpmLabel:"180 / 195 BPM",bpmMap:[{t:0,bpm:75},{t:17.5,bpm:150},{t:74.5,bpm:165},{t:81,bpm:180},{t:94.2,bpm:195},{t:104,bpm:150},{t:181,bpm:150},{t:204.5,bpm:150}],duration:213.505,chartEnd:212.8,introEnd:17.5,beatOffset:.075,difficulty:"BOSS",laneLabel:"1 · 2 · 4 · 6",boss:!0,theme:"intention",laneColors:["#ffffff"],fadeStart:209.6,fadeEnd:212.2},sections:[{name:"VOID",start:0,end:17.5,keys:4,bpm:75,beatOffset:0,color:"#ffffff",accent:"#ffffff",energy:.2,bloom:.36,intro:!0,phase:"void",notes:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1},{name:"REVELATION",start:17.5,end:28.5,keys:4,bpm:150,beatOffset:.075,color:"#dff4ff",accent:"#ffffff",energy:.36,bloom:.5,phase:"ocean",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:.95},{name:"DESCENT",start:28.5,end:33.5,keys:1,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.55,bloom:.48,phase:"spin",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1},{name:"ASSAIL",start:33.5,end:46,keys:4,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.62,bloom:.5,phase:"field",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.02},{name:"LIBRA",start:46,end:61.5,keys:4,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.68,bloom:.55,phase:"pillars",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1},{name:"HALO",start:61.5,end:72,keys:4,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.7,bloom:.58,phase:"halo",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.05},{name:"DISTORTION",start:72,end:74.5,keys:4,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.3,bloom:.38,phase:"dark",notes:!1,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:.9},{name:"GUILT",start:74.5,end:81,keys:1,bpm:165,beatOffset:.075,color:"#ff3355",accent:"#ff3355",energy:.58,bloom:.32,phase:"guilt",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.05},{name:"GUILT II",start:81,end:88,keys:1,bpm:180,beatOffset:.075,color:"#ff3355",accent:"#ff3355",energy:.72,bloom:.34,phase:"guilt",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.12},{name:"OFFBEAT",start:88,end:94.2,keys:2,bpm:185,beatOffset:.19,color:"#ffffff",accent:"#ffffff",energy:.7,bloom:.4,phase:"offbeat",gimmick:!0,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.18},{name:"FASTBEAT",start:94.2,end:104,keys:1,bpm:195,beatOffset:.005,color:"#ffffff",accent:"#ffffff",energy:.82,bloom:.42,phase:"fastbeat",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.28},{name:"TIDE",start:104,end:117,keys:4,bpm:150,beatOffset:.375,color:"#dff4ff",accent:"#ffffff",energy:.5,bloom:.52,phase:"ocean2",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.02},{name:"MEMORY",start:117,end:139,keys:4,bpm:150,beatOffset:.375,color:"#dfe9ff",accent:"#ffffff",energy:.48,bloom:.5,phase:"memory",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1},{name:"STATIC",start:139,end:157,keys:4,bpm:145,beatOffset:.375,color:"#e6ecff",accent:"#ffffff",energy:.55,bloom:.48,phase:"static",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.04},{name:"DETERMINATION",start:157,end:181,keys:6,bpm:150,beatOffset:.375,color:"#fff6d8",accent:"#ffffff",energy:.78,bloom:.6,phase:"determined",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.12},{name:"WHITEOUT",start:181,end:182,keys:4,bpm:150,beatOffset:.375,color:"#ffffff",accent:"#ffffff",energy:.2,bloom:.2,phase:"white",notes:!1,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1},{name:"FAKE GUILT",start:182,end:204.5,keys:4,bpm:150,beatOffset:.385,color:"#ff3355",accent:"#ff3355",energy:.7,bloom:.36,phase:"fake",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.15},{name:"DAWN",start:204.5,end:213.505,keys:4,bpm:150,beatOffset:.385,color:"#ffe9a8",accent:"#ffffff",energy:.22,bloom:.6,phase:"dawn",notes:!1,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1}],notes:[{t:20.095,lane:2},{t:20.496,lane:3},{t:20.917,lane:2},{t:21.288,lane:3,type:"hold",dur:.8},{t:21.689,lane:4},{t:22.1,lane:5},{t:22.491,lane:4},{t:22.892,lane:2},{t:23.293,lane:5},{t:23.684,lane:3},{t:23.904,lane:4},{t:24.084,lane:2,type:"hold",dur:.8},{t:24.896,lane:5,type:"hold",dur:.8},{t:25.287,lane:3},{t:25.648,lane:4},{t:26.31,lane:3},{t:26.5,lane:2},{t:26.901,lane:4},{t:27.101,lane:5},{t:27.302,lane:3},{t:27.703,lane:2},{t:28.104,lane:4},{t:28.875,lane:3},{t:28.996,lane:3},{t:29.096,lane:3},{t:29.296,lane:3},{t:29.397,lane:3},{t:29.497,lane:3},{t:29.697,lane:3},{t:30.238,lane:3},{t:30.499,lane:3},{t:31.281,lane:3},{t:32.073,lane:3},{t:32.884,lane:3},{t:33.105,lane:3},{t:33.696,lane:3},{t:33.917,lane:5,type:"hold",dur:.8},{t:34.498,lane:2},{t:34.699,lane:4},{t:34.889,lane:3},{t:35.32,lane:2},{t:35.49,lane:3},{t:35.721,lane:3},{t:35.921,lane:4},{t:36.122,lane:2},{t:36.292,lane:3},{t:36.883,lane:3},{t:37.084,lane:2},{t:37.284,lane:4},{t:37.525,lane:5},{t:37.685,lane:3},{t:37.875,lane:2},{t:38.096,lane:4},{t:38.517,lane:2},{t:38.728,lane:4},{t:38.888,lane:3},{t:39.068,lane:5,type:"hold",dur:.8},{t:39.259,lane:2},{t:39.449,lane:4},{t:40.091,lane:2},{t:40.852,lane:4},{t:41.063,lane:3},{t:41.684,lane:2},{t:41.855,lane:3},{t:42.526,lane:4},{t:42.657,lane:5},{t:43.288,lane:3},{t:44.1,lane:5},{t:44.501,lane:4},{t:44.882,lane:5},{t:45.683,lane:4},{t:46.485,lane:2},{t:47.287,lane:4},{t:47.475,lane:3},{t:48.089,lane:2,type:"hold",dur:.8},{t:48.259,lane:3},{t:48.77,lane:4},{t:48.901,lane:5},{t:49.075,lane:3},{t:49.652,lane:3},{t:49.853,lane:5},{t:50.053,lane:5},{t:50.254,lane:4},{t:50.474,lane:4},{t:50.635,lane:3},{t:50.855,lane:5},{t:51.296,lane:5},{t:51.436,lane:4},{t:51.978,lane:3},{t:52.098,lane:2},{t:52.248,lane:4},{t:52.489,lane:4},{t:52.769,lane:3},{t:52.91,lane:5},{t:53.05,lane:4},{t:53.301,lane:3},{t:53.461,lane:2},{t:53.691,lane:5},{t:53.862,lane:4},{t:54.483,lane:3},{t:54.675,lane:2},{t:54.874,lane:4},{t:55.085,lane:5},{t:55.285,lane:3},{t:55.455,lane:2},{t:56.097,lane:2},{t:56.247,lane:4},{t:56.488,lane:3,type:"hold",dur:.8},{t:56.738,lane:5},{t:56.889,lane:2},{t:57.049,lane:4},{t:57.701,lane:4},{t:58.482,lane:2},{t:58.653,lane:3},{t:59.284,lane:4},{t:60.086,lane:2},{t:60.266,lane:3},{t:60.487,lane:3},{t:60.888,lane:3},{t:61.68,lane:2},{t:61.87,lane:3},{t:62.231,lane:3},{t:62.491,lane:3},{t:62.622,lane:2},{t:62.882,lane:4},{t:63.293,lane:5},{t:63.475,lane:3},{t:63.684,lane:2},{t:64.105,lane:2},{t:64.636,lane:4},{t:64.897,lane:3},{t:65.438,lane:5},{t:65.689,lane:2},{t:65.839,lane:4},{t:66.075,lane:3},{t:66.27,lane:5},{t:66.5,lane:2},{t:66.681,lane:4},{t:67.172,lane:3},{t:67.302,lane:2,type:"hold",dur:.8},{t:67.813,lane:3},{t:68.084,lane:4,type:"hold",dur:.8},{t:68.535,lane:5},{t:68.635,lane:3},{t:68.916,lane:3},{t:69.708,lane:5},{t:70.449,lane:2},{t:70.62,lane:4},{t:70.72,lane:3},{t:70.83,lane:2},{t:71.301,lane:2},{t:71.432,lane:4},{t:74.984,lane:3},{t:75.17,lane:3},{t:75.701,lane:3},{t:76.092,lane:3},{t:76.403,lane:3},{t:76.653,lane:3},{t:76.884,lane:3},{t:77.175,lane:3},{t:77.936,lane:3},{t:78.047,lane:3},{t:78.608,lane:3},{t:79.38,lane:3},{t:79.53,lane:3},{t:80.075,lane:3},{t:80.242,lane:3},{t:80.382,lane:3},{t:80.592,lane:3},{t:80.753,lane:3},{t:81.404,lane:3},{t:81.575,lane:3},{t:81.725,lane:3},{t:81.895,lane:3},{t:82.086,lane:3},{t:82.246,lane:3},{t:82.742,lane:3},{t:82.908,lane:3},{t:83.075,lane:3},{t:83.238,lane:3},{t:83.379,lane:3},{t:83.539,lane:3},{t:84.1,lane:3},{t:84.461,lane:3},{t:84.702,lane:3},{t:85.193,lane:3},{t:85.423,lane:3},{t:86.075,lane:3},{t:86.265,lane:3},{t:86.776,lane:3},{t:86.987,lane:3},{t:87.448,lane:3},{t:88.43,lane:4},{t:88.568,lane:2},{t:88.731,lane:4},{t:88.871,lane:2},{t:89.051,lane:4},{t:89.202,lane:2},{t:89.693,lane:4},{t:89.853,lane:2},{t:90.044,lane:2},{t:90.214,lane:4},{t:90.374,lane:2},{t:90.545,lane:4},{t:90.976,lane:2},{t:91.627,lane:2},{t:92.299,lane:4},{t:92.469,lane:2},{t:92.91,lane:4},{t:93.071,lane:2},{t:93.552,lane:4},{t:94.353,lane:3},{t:94.744,lane:3},{t:95.346,lane:3},{t:95.851,lane:3},{t:95.987,lane:3},{t:96.148,lane:3},{t:96.288,lane:3},{t:96.619,lane:3},{t:96.729,lane:3},{t:97.26,lane:3},{t:97.39,lane:3},{t:97.541,lane:3},{t:97.861,lane:3},{t:98.032,lane:3},{t:98.322,lane:3},{t:98.493,lane:3},{t:98.593,lane:3},{t:99.084,lane:3},{t:99.235,lane:3},{t:99.696,lane:3},{t:99.846,lane:3},{t:100.006,lane:3},{t:100.337,lane:3},{t:100.437,lane:3},{t:100.798,lane:3},{t:100.948,lane:3},{t:101.109,lane:3},{t:101.55,lane:3},{t:101.69,lane:3},{t:102.171,lane:3},{t:102.62,lane:3},{t:102.793,lane:3},{t:103.224,lane:3},{t:103.344,lane:3},{t:103.543,lane:3},{t:104.156,lane:4},{t:104.416,lane:4},{t:104.957,lane:5},{t:105.168,lane:2},{t:106.02,lane:2},{t:106.13,lane:4},{t:106.762,lane:3},{t:106.962,lane:5,type:"hold",dur:.8},{t:107.623,lane:4,type:"hold",dur:.8},{t:107.974,lane:2},{t:108.185,lane:3},{t:108.395,lane:3},{t:109.207,lane:2},{t:109.367,lane:3},{t:109.979,lane:3},{t:110.149,lane:4},{t:110.791,lane:2},{t:111.375,lane:3},{t:111.592,lane:3},{t:112.184,lane:4},{t:112.394,lane:5},{t:112.825,lane:4},{t:112.986,lane:3},{t:113.206,lane:2},{t:113.787,lane:4},{t:114.038,lane:4},{t:114.138,lane:5},{t:114.79,lane:2},{t:114.94,lane:3},{t:115.581,lane:2},{t:116.133,lane:3},{t:116.375,lane:4},{t:117.155,lane:4},{t:117.947,lane:4},{t:118.779,lane:3},{t:119.16,lane:5},{t:119.56,lane:2,type:"hold",dur:.8},{t:120.175,lane:4},{t:120.362,lane:3},{t:120.944,lane:5},{t:121.175,lane:4},{t:121.956,lane:3},{t:122.175,lane:4},{t:122.775,lane:5},{t:122.975,lane:3},{t:123.575,lane:4},{t:123.775,lane:5,type:"hold",dur:.8},{t:124.375,lane:2},{t:124.592,lane:3},{t:125.153,lane:4},{t:125.554,lane:2},{t:125.955,lane:4},{t:126.546,lane:3},{t:126.775,lane:4},{t:127.575,lane:2},{t:128.26,lane:3},{t:128.4,lane:2},{t:129.002,lane:3},{t:129.202,lane:3},{t:129.784,lane:4},{t:130.004,lane:2},{t:130.175,lane:3},{t:130.375,lane:4},{t:130.605,lane:4},{t:130.746,lane:2},{t:130.966,lane:3},{t:131.588,lane:5},{t:131.758,lane:4},{t:132.4,lane:3},{t:132.57,lane:2},{t:133.191,lane:4},{t:133.783,lane:5},{t:134.003,lane:2},{t:134.745,lane:3},{t:135.206,lane:2},{t:135.575,lane:3},{t:136.188,lane:4},{t:136.389,lane:2},{t:136.779,lane:3},{t:136.99,lane:4},{t:137.2,lane:5},{t:137.802,lane:3},{t:137.982,lane:4},{t:138.584,lane:2},{t:138.804,lane:5},{t:139.375,lane:5},{t:139.977,lane:4},{t:140.187,lane:5},{t:140.999,lane:2},{t:141.881,lane:4},{t:142.001,lane:5},{t:142.773,lane:2},{t:143.404,lane:4},{t:143.545,lane:3},{t:143.775,lane:5,type:"hold",dur:.828},{t:144.106,lane:4},{t:144.407,lane:4},{t:144.587,lane:2},{t:144.888,lane:3},{t:144.988,lane:4},{t:145.199,lane:4},{t:145.379,lane:2},{t:145.78,lane:3},{t:146,lane:3},{t:146.181,lane:2},{t:146.692,lane:3},{t:146.902,lane:3},{t:147.103,lane:4},{t:147.714,lane:2},{t:148.516,lane:5},{t:148.666,lane:3},{t:149.057,lane:4},{t:149.388,lane:5},{t:149.588,lane:4},{t:149.789,lane:3},{t:149.999,lane:2,type:"hold",dur:.828},{t:150.168,lane:5},{t:150.375,lane:4},{t:150.982,lane:3},{t:151.382,lane:4},{t:151.783,lane:5},{t:152.004,lane:3},{t:152.605,lane:3},{t:152.876,lane:2},{t:153.507,lane:3},{t:153.688,lane:4},{t:153.888,lane:5},{t:154.306,lane:2},{t:154.55,lane:2},{t:155.161,lane:3},{t:155.361,lane:4},{t:155.961,lane:5},{t:156.789,lane:4},{t:157.206,lane:2},{t:157.326,lane:4},{t:157.546,lane:6},{t:157.977,lane:5},{t:158.168,lane:3},{t:158.549,lane:1,type:"hold",dur:.8},{t:158.789,lane:6,type:"hold",dur:.8},{t:159.01,lane:5},{t:159.2,lane:4},{t:159.571,lane:3},{t:159.761,lane:2},{t:160.383,lane:2},{t:160.575,lane:3},{t:161.175,lane:4},{t:161.415,lane:3},{t:162.007,lane:2},{t:162.575,lane:3},{t:162.778,lane:4},{t:163.199,lane:3},{t:163.4,lane:5},{t:163.6,lane:3},{t:163.75,lane:5},{t:163.991,lane:2},{t:164.372,lane:4},{t:164.943,lane:1},{t:165.174,lane:6},{t:165.745,lane:3},{t:165.976,lane:3},{t:166.547,lane:5},{t:166.787,lane:1},{t:167.339,lane:2},{t:167.579,lane:3},{t:168.14,lane:4},{t:168.391,lane:1},{t:168.541,lane:2},{t:169.213,lane:3},{t:169.343,lane:4},{t:169.874,lane:5},{t:169.985,lane:6},{t:170.145,lane:5},{t:170.335,lane:4},{t:170.776,lane:3},{t:170.927,lane:2},{t:171.358,lane:1},{t:171.578,lane:2},{t:172.16,lane:3},{t:172.39,lane:4},{t:172.54,lane:3},{t:172.921,lane:5},{t:173.041,lane:6},{t:173.192,lane:4},{t:173.813,lane:4},{t:173.974,lane:5},{t:174.124,lane:3},{t:174.535,lane:2},{t:174.645,lane:1},{t:174.775,lane:6},{t:174.946,lane:4},{t:175.196,lane:5},{t:175.347,lane:3},{t:175.587,lane:2},{t:175.718,lane:1},{t:175.978,lane:6},{t:176.128,lane:4},{t:176.249,lane:5},{t:176.359,lane:3},{t:176.539,lane:1},{t:177.201,lane:3},{t:177.391,lane:5},{t:177.943,lane:6},{t:178.133,lane:2},{t:178.394,lane:2},{t:178.784,lane:3},{t:179.005,lane:4},{t:179.406,lane:5},{t:179.606,lane:1},{t:179.777,lane:4},{t:179.997,lane:2},{t:180.198,lane:5},{t:180.388,lane:3},{t:180.599,lane:6},{t:180.799,lane:1},{t:182.172,lane:2},{t:182.383,lane:3},{t:182.613,lane:4},{t:182.784,lane:5},{t:182.985,lane:4,type:"hold",dur:.8},{t:183.185,lane:2},{t:183.385,lane:3},{t:183.585,lane:3},{t:184.385,lane:2},{t:185.185,lane:5},{t:185.951,lane:3},{t:186.161,lane:2},{t:186.362,lane:4},{t:186.763,lane:4},{t:186.993,lane:5},{t:187.574,lane:3},{t:187.805,lane:3},{t:187.945,lane:2},{t:188.346,lane:4},{t:188.577,lane:5},{t:189.178,lane:3},{t:189.96,lane:4},{t:190.551,lane:5},{t:190.772,lane:2,type:"hold",dur:.8},{t:190.942,lane:3},{t:191.152,lane:3},{t:191.385,lane:4},{t:191.563,lane:5},{t:191.764,lane:3},{t:192.155,lane:3},{t:192.355,lane:4},{t:192.566,lane:3},{t:193.147,lane:5},{t:193.385,lane:4},{t:193.578,lane:3},{t:194.009,lane:3},{t:194.179,lane:5},{t:194.36,lane:2},{t:194.58,lane:4},{t:194.761,lane:3},{t:194.981,lane:5},{t:195.121,lane:4},{t:195.572,lane:4},{t:196.364,lane:2},{t:196.545,lane:3},{t:196.775,lane:3},{t:196.835,lane:4},{t:197.185,lane:3},{t:197.617,lane:2},{t:197.958,lane:4},{t:198.198,lane:5},{t:198.76,lane:3},{t:198.96,lane:2},{t:199.161,lane:4},{t:199.361,lane:3},{t:199.541,lane:5},{t:199.772,lane:4},{t:199.972,lane:3},{t:200.353,lane:3},{t:200.554,lane:2},{t:200.965,lane:4},{t:201.165,lane:3},{t:201.356,lane:5},{t:201.556,lane:4},{t:201.756,lane:3},{t:202.007,lane:2},{t:202.157,lane:3},{t:202.228,lane:4},{t:202.779,lane:5},{t:203.571,lane:2},{t:204.152,lane:3}],events:[{t:0,type:"bossCamera",pos:[0,10,34],look:[0,11,-70],fov:52,roll:0,dur:.01},{t:0,type:"intent",mode:"phase",phase:"void"},{t:0,type:"bossGlitch",power:.35},{t:0,type:"pulse",power:.35},{t:1.1,type:"caption",kicker:"PROLOGUE",title:"INTENTION",sub:"A BOSS IN FOUR MEMORIES",hold:4.6},{t:3.2,type:"pulse",power:.58},{t:4.8,type:"bossCamera",pos:[0,9,31],look:[0,10,-66],fov:54,roll:-.012,dur:1.6},{t:6.4,type:"pulse",power:.55},{t:8.6,type:"bossCamera",pos:[-7,7,25],look:[5,9,-58],fov:58,roll:.02,dur:1.8},{t:9.6,type:"pulse",power:.58},{t:10.6,type:"bossGlitch",power:.55},{t:12.8,type:"bossCamera",pos:[5,8.5,28],look:[-4,9,-62],fov:55,roll:-.018,dur:1.7},{t:12.8,type:"pulse",power:.61},{t:13.2,type:"caption",kicker:"REVELATION",title:"THE OCEAN REMEMBERS",sub:"ONE LINE. ONE BREATH.",hold:3.2},{t:16,type:"pulse",power:.94},{t:16.01,type:"vibe",power:.94},{t:17.5,type:"intent",mode:"phase",phase:"ocean"},{t:17.5,type:"intent",mode:"hud",hud:"clear"},{t:17.5,type:"bossCamera",pos:[0,7.2,20],look:[0,4,-12],fov:55,roll:0,dur:1.6},{t:17.5,type:"bossGlitch",power:.7},{t:17.5,type:"bossPhase",mode:"play"},{t:17.675,type:"pulse",power:.76},{t:19.275,type:"pulse",power:.76},{t:20.6,type:"bossCamera",pos:[-5.5,6.2,17],look:[1.8,3.4,-6],fov:53,roll:.012,dur:1.3},{t:20.875,type:"pulse",power:.78},{t:22.475,type:"pulse",power:.73},{t:24,type:"bossCamera",pos:[5.5,6.8,16],look:[-1.8,3.5,-7],fov:53,roll:-.015,dur:1.3},{t:24.075,type:"pulse",power:.62},{t:25.675,type:"pulse",power:.73},{t:27,type:"bossCamera",pos:[0,7,18],look:[0,4,-9],fov:54,roll:0,dur:1},{t:27.275,type:"pulse",power:.78},{t:28.5,type:"intent",mode:"phase",phase:"spin"},{t:28.5,type:"bossCamera",pos:[0,2.6,7.2],look:[0,1.5,0],fov:58,roll:0,dur:.4},{t:28.8,type:"caption",kicker:"DESCENT",title:"ONE LINE",sub:"HOLD THE CENTRE",hold:2.4},{t:28.875,type:"pulse",power:.95},{t:29.2,type:"bossCamera",pos:[1.7134407061580625,1.7,5.4526683736126955],look:[0,1.2,0],fov:60,roll:.03894183423086506,dur:.55},{t:29.2,type:"bossGlitch",power:.32},{t:29.92,type:"bossCamera",pos:[4.36643411774139,2.8,1.9424510073951176],look:[0,1.2,0],fov:60,roll:.09923713903957704,dur:.55},{t:29.92,type:"bossGlitch",power:.32},{t:30.475,type:"pulse",power:.58},{t:30.64,type:"bossCamera",pos:[2.6529934115833282,1.7,-2.1102173662175763],look:[0,1.2,0],fov:60,roll:.06029530480871201,dur:.55},{t:30.64,type:"bossGlitch",power:.32},{t:31.36,type:"bossCamera",pos:[-1.7134407061580614,2.8,-2.6526683736126953],look:[0,1.2,0],fov:60,roll:-.03894183423086503,dur:.55},{t:31.36,type:"bossGlitch",power:.32},{t:32.075,type:"pulse",power:.58},{t:32.08,type:"bossCamera",pos:[-4.366434117741389,1.7,.8575489926048817],look:[0,1.2,0],fov:60,roll:-.09923713903957702,dur:.55},{t:32.08,type:"bossGlitch",power:.32},{t:32.8,type:"bossCamera",pos:[-2.6529934115833256,2.8,4.910217366217578],look:[0,1.2,0],fov:60,roll:-.06029530480871194,dur:.55},{t:32.8,type:"bossGlitch",power:.32},{t:33.2,type:"intent",mode:"phase",phase:"field"},{t:33.2,type:"bossCamera",pos:[0,7,17.2],look:[0,4.05,0],fov:50,roll:0,dur:.7},{t:33.675,type:"pulse",power:.67},{t:35.275,type:"pulse",power:.67},{t:36,type:"bossCamera",pos:[-4.5,6,15.5],look:[1.2,3.5,-2],fov:52,roll:.02,dur:1.2},{t:36.875,type:"pulse",power:.67},{t:38.475,type:"pulse",power:.69},{t:40,type:"bossCamera",pos:[4.5,6.4,16.5],look:[-1.2,3.6,-2],fov:52,roll:-.02,dur:1.2},{t:40.075,type:"pulse",power:.77},{t:41.675,type:"pulse",power:.69},{t:43.275,type:"pulse",power:.58},{t:44.875,type:"pulse",power:.65},{t:46,type:"intent",mode:"phase",phase:"pillars"},{t:46,type:"bossCamera",pos:[-9,5.2,16],look:[2.5,3.1,-7],fov:56,roll:.025,dur:1.5},{t:46,type:"bossGlitch",power:.55},{t:46.4,type:"caption",kicker:"APOTHEOSIS",title:"LIBRA",sub:"FOUR PILLARS. ONE WEIGHT.",hold:3.4},{t:46.475,type:"pulse",power:.57},{t:48.075,type:"pulse",power:.57},{t:49.4,type:"bossCamera",pos:[-14,6,10],look:[4.5,3.4,-12],fov:58,roll:.035,dur:1.4},{t:49.675,type:"pulse",power:.63},{t:51.275,type:"pulse",power:.57},{t:52.8,type:"bossCamera",pos:[12,5.6,12],look:[-3.5,3.2,-10],fov:58,roll:-.03,dur:1.5},{t:52.875,type:"pulse",power:.59},{t:54.475,type:"pulse",power:.55},{t:56.075,type:"pulse",power:.61},{t:56.2,type:"bossCamera",pos:[15,6.6,5],look:[-4,3.8,-16],fov:58,roll:-.04,dur:1.4},{t:57.675,type:"pulse",power:.57},{t:59.2,type:"bossCamera",pos:[3,7.2,10],look:[0,4,-12],fov:56,roll:.02,dur:1.2},{t:59.275,type:"pulse",power:.61},{t:60.875,type:"pulse",power:.69},{t:61.5,type:"intent",mode:"phase",phase:"halo"},{t:61.5,type:"bossCamera",pos:[0,14.5,13],look:[0,0,-12],fov:62,roll:0,dur:1.2},{t:61.5,type:"bossGlitch",power:.8},{t:61.8,type:"intent",mode:"hud",hud:"text",text:"INTENTIONS",sub:"LOOK UP",hold:3.4},{t:62.475,type:"pulse",power:.63},{t:63.4,type:"bossCamera",pos:[0,15.5,7],look:[0,0,-16],fov:62,roll:.03,dur:1.1},{t:64.075,type:"pulse",power:.61},{t:65.675,type:"pulse",power:.59},{t:65.8,type:"bossCamera",pos:[0,13,8],look:[0,0,-8],fov:60,roll:-.03,dur:1.2},{t:67.275,type:"pulse",power:.61},{t:68.4,type:"bossCamera",pos:[4,9,14],look:[-1,2.4,-6],fov:55,roll:.035,dur:1.3},{t:68.875,type:"pulse",power:.59},{t:70.475,type:"pulse",power:.57},{t:70.6,type:"bossCamera",pos:[0,8,17],look:[0,4,0],fov:53,roll:0,dur:1},{t:72,type:"intent",mode:"phase",phase:"dark"},{t:72,type:"intent",mode:"hud",hud:"distort",power:1},{t:72,type:"intent",mode:"hud",hud:"heartbeat",on:!0,bpm:150},{t:72,type:"bossCamera",pos:[0,3.2,8],look:[0,2.5,-1],fov:56,roll:.025,dur:.8},{t:72,type:"bossGlitch",power:1.2},{t:73.3,type:"bossCamera",pos:[0,2.4,6.2],look:[0,2.2,-1],fov:60,roll:-.04,dur:.7},{t:74.5,type:"intent",mode:"phase",phase:"guilt"},{t:74.5,type:"intent",mode:"hud",hud:"distort",on:!1},{t:74.5,type:"intent",mode:"hud",hud:"black",on:!0},{t:74.5,type:"intent",mode:"hud",hud:"guilt",on:!0,value:100},{t:74.5,type:"intent",mode:"hud",hud:"heartbeat",on:!0,bpm:160},{t:74.5,type:"bossCamera",pos:[0,2.8,11.4],look:[0,2.4,0],fov:52,roll:0,dur:.7},{t:74.5,type:"bossGlitch",power:1.1},{t:75,type:"caption",kicker:"GUILT",title:"READY",sub:"KEEP IT FULL",hold:2.6},{t:75.711,type:"pulse",power:.66},{t:77.166,type:"pulse",power:.7},{t:78,type:"bossCamera",pos:[0,2.6,9.4],look:[0,2.2,0],fov:54,roll:.015,dur:1},{t:78.62,type:"pulse",power:.68},{t:80.075,type:"pulse",power:.66},{t:81,type:"bossCamera",pos:[0,3.2,12.2],look:[0,2.6,0],fov:52,roll:-.015,dur:1},{t:81,type:"bossGlitch",power:.75},{t:81.2,type:"caption",kicker:"GUILT II",title:"FASTER",sub:"TRUST THE PULSE",hold:2.2},{t:81.408,type:"pulse",power:.62},{t:82.742,type:"pulse",power:.6},{t:84.075,type:"pulse",power:.58},{t:85.408,type:"pulse",power:.6},{t:86.742,type:"pulse",power:.66},{t:88,type:"intent",mode:"phase",phase:"offbeat"},{t:88,type:"intent",mode:"hud",hud:"glitch",on:!0},{t:88,type:"bossCamera",pos:[0,4,14.8],look:[0,3.1,0],fov:54,roll:0,dur:.8},{t:88,type:"bossGlitch",power:1},{t:88.2,type:"caption",kicker:"FRACTURE",title:"OFFBEAT",sub:"TWO LINES. FOURTH BEAT.",hold:3},{t:88.406,type:"pulse",power:.63},{t:89.704,type:"pulse",power:.65},{t:91,type:"bossCamera",pos:[-3,3.6,12.5],look:[1,2.8,0],fov:52,roll:.02,dur:.9},{t:91.001,type:"pulse",power:.61},{t:92.298,type:"pulse",power:.59},{t:93.595,type:"pulse",power:.59},{t:94.2,type:"intent",mode:"phase",phase:"fastbeat"},{t:94.2,type:"intent",mode:"hud",hud:"heartbeat",on:!0,bpm:195},{t:94.2,type:"caption",kicker:"FASTBEAT",title:"READY",sub:"FASTER STILL",hold:2.2},{t:94.2,type:"bossGlitch",power:.9},{t:94.2,type:"bossCamera",pos:[3,4.2,14.2],look:[-1,3.1,0],fov:52,roll:-.02,dur:.9},{t:94.774,type:"pulse",power:.53},{t:96.005,type:"pulse",power:.59},{t:97,type:"bossCamera",pos:[0,3.5,11.5],look:[0,2.7,0],fov:50,roll:0,dur:.8},{t:97.236,type:"pulse",power:.55},{t:98.467,type:"pulse",power:.59},{t:99.697,type:"pulse",power:.51},{t:100,type:"bossCamera",pos:[0,3.2,10.5],look:[0,2.5,0],fov:50,roll:.045,dur:.8},{t:100,type:"bossGlitch",power:1},{t:100.2,type:"caption",kicker:"FASTBEAT II",title:"ONE LINE",sub:"NO ROOM LEFT",hold:2.2},{t:100.928,type:"pulse",power:.6},{t:102.159,type:"pulse",power:.53},{t:102.4,type:"bossCamera",pos:[-2.4,2.9,9.4],look:[.6,2.4,0],fov:52,roll:.055,dur:.6},{t:103.39,type:"pulse",power:.59},{t:103.4,type:"bossCamera",pos:[2.4,3.1,9],look:[-.6,2.5,0],fov:53,roll:-.06,dur:.5},{t:103.4,type:"bossGlitch",power:1.2},{t:104,type:"intent",mode:"phase",phase:"ocean2"},{t:104,type:"intent",mode:"hud",hud:"black",on:!1},{t:104,type:"intent",mode:"hud",hud:"guilt",on:!1},{t:104,type:"intent",mode:"hud",hud:"heartbeat",on:!1},{t:104,type:"intent",mode:"hud",hud:"glitch",on:!1},{t:104,type:"intent",mode:"hud",hud:"clear"},{t:104,type:"bossCamera",pos:[0,8,21],look:[0,4.2,-12],fov:55,roll:0,dur:1.3},{t:104.375,type:"pulse",power:.75},{t:105.975,type:"pulse",power:.7},{t:107.575,type:"pulse",power:.68},{t:108,type:"bossCamera",pos:[-6,7,19],look:[1.8,4,-10],fov:54,roll:.02,dur:1.4},{t:109.175,type:"pulse",power:.63},{t:110.775,type:"pulse",power:.56},{t:112,type:"bossCamera",pos:[6,8,18],look:[-1.8,4.2,-9],fov:54,roll:-.02,dur:1.4},{t:112.375,type:"pulse",power:.66},{t:113.975,type:"pulse",power:.84},{t:115.5,type:"bossCamera",pos:[0,8.6,21],look:[0,4.8,-14],fov:54,roll:0,dur:1.1},{t:115.575,type:"pulse",power:.49},{t:117,type:"intent",mode:"phase",phase:"memory"},{t:117,type:"intent",mode:"hud",hud:"static",on:!0,power:.6},{t:117,type:"intent",mode:"hud",hud:"heartbeat",on:!0,bpm:90},{t:117,type:"bossCamera",pos:[0,8.2,21],look:[0,5.2,-16],fov:55,roll:0,dur:1.4},{t:117,type:"bossGlitch",power:.6},{t:117.175,type:"pulse",power:.45},{t:117.6,type:"caption",kicker:"MEMORY",title:"THE MEMORY RISES",sub:"DO NOT LET GO",hold:3.4},{t:118.775,type:"pulse",power:.45},{t:120.375,type:"pulse",power:.47},{t:121.975,type:"pulse",power:.43},{t:123,type:"bossCamera",pos:[0,8,19],look:[0,6,-20],fov:55,roll:.015,dur:1.6},{t:123.575,type:"pulse",power:.4},{t:125.175,type:"pulse",power:.52},{t:126.775,type:"pulse",power:.5},{t:128.375,type:"pulse",power:.69},{t:129,type:"bossCamera",pos:[0,8.4,19.5],look:[0,5.8,-18],fov:55,roll:-.012,dur:1.6},{t:129.975,type:"pulse",power:.73},{t:131.575,type:"pulse",power:.73},{t:133.175,type:"pulse",power:.76},{t:134.775,type:"pulse",power:.66},{t:135,type:"bossCamera",pos:[0,8.2,20],look:[0,5.2,-15],fov:55,roll:0,dur:1.4},{t:136.375,type:"pulse",power:.71},{t:137.975,type:"pulse",power:.64},{t:139,type:"intent",mode:"phase",phase:"static"},{t:139,type:"intent",mode:"hud",hud:"static",on:!0,power:1},{t:139,type:"intent",mode:"hud",hud:"distort",on:!0,power:.6},{t:139,type:"bossCamera",pos:[0,7.4,18.5],look:[0,4.4,-8],fov:55,roll:.015,dur:1.2},{t:139,type:"bossGlitch",power:.8},{t:139.4,type:"caption",kicker:"",title:"STATIC",sub:"SOMETHING REMAINS",hold:2.8},{t:139.409,type:"pulse",power:.6},{t:141.065,type:"pulse",power:.62},{t:142.72,type:"pulse",power:.66},{t:144.375,type:"pulse",power:.71},{t:145,type:"bossCamera",pos:[-4,7.2,17],look:[1.4,4.2,-6],fov:54,roll:.02,dur:1.5},{t:146.03,type:"pulse",power:.66},{t:147.685,type:"pulse",power:.71},{t:149.341,type:"pulse",power:.69},{t:150.996,type:"pulse",power:.66},{t:151,type:"bossCamera",pos:[4,7.8,19],look:[-1.4,4.4,-7],fov:54,roll:-.02,dur:1.5},{t:152.651,type:"pulse",power:.71},{t:154.306,type:"pulse",power:.58},{t:155.961,type:"pulse",power:.49},{t:157,type:"intent",mode:"phase",phase:"determined"},{t:157,type:"intent",mode:"hud",hud:"static",on:!1},{t:157,type:"intent",mode:"hud",hud:"distort",on:!1},{t:157,type:"intent",mode:"hud",hud:"heartbeat",on:!1},{t:157,type:"intent",mode:"hud",hud:"bright",on:!0},{t:157,type:"bossCamera",pos:[0,8.6,23],look:[0,4.8,-9],fov:55,roll:0,dur:1.4},{t:157,type:"bossGlitch",power:.5},{t:157.175,type:"pulse",power:.57},{t:157.4,type:"caption",kicker:"",title:"DETERMINATION",sub:"ALL OF IT, NOW",hold:3.2},{t:158.775,type:"pulse",power:.63},{t:160.375,type:"pulse",power:.57},{t:161.975,type:"pulse",power:.52},{t:163,type:"bossCamera",pos:[-5,7.4,19],look:[1.6,4.2,-4],fov:53,roll:.018,dur:1.4},{t:163.575,type:"pulse",power:.56},{t:165.175,type:"pulse",power:.52},{t:166.775,type:"pulse",power:.59},{t:168.375,type:"pulse",power:.63},{t:169,type:"bossCamera",pos:[5,7.8,20],look:[-1.6,4.4,-5],fov:53,roll:-.018,dur:1.4},{t:169.975,type:"pulse",power:.59},{t:171.575,type:"pulse",power:.61},{t:173.175,type:"pulse",power:.61},{t:174.775,type:"pulse",power:.63},{t:175,type:"bossCamera",pos:[0,8.4,22],look:[0,4.8,-8],fov:54,roll:0,dur:1.4},{t:176.375,type:"pulse",power:.63},{t:177.975,type:"pulse",power:.61},{t:179.575,type:"pulse",power:.63},{t:181,type:"intent",mode:"phase",phase:"white"},{t:181,type:"intent",mode:"hud",hud:"white",on:!0},{t:181,type:"bossCamera",pos:[0,8,20],look:[0,4,0],fov:54,roll:0,dur:.4},{t:181,type:"bossGlitch",power:1.2},{t:182,type:"intent",mode:"phase",phase:"fake"},{t:182,type:"intent",mode:"hud",hud:"white",on:!1},{t:182,type:"intent",mode:"hud",hud:"black",on:!0},{t:182,type:"intent",mode:"hud",hud:"fakeGuilt",on:!0,value:14},{t:182,type:"intent",mode:"hud",hud:"heartbeat",on:!0,bpm:150},{t:182,type:"intent",mode:"hud",hud:"glitch",on:!0},{t:182,type:"bossCamera",pos:[0,3.3,12],look:[0,2.7,0],fov:50,roll:.02,dur:.6},{t:182,type:"bossGlitch",power:1.2},{t:182.4,type:"caption",kicker:"",title:"GUILT",sub:"IT WILL NOT REFILL",hold:3},{t:182.785,type:"pulse",power:.35},{t:184.385,type:"pulse",power:.37},{t:185.985,type:"pulse",power:.59},{t:187.585,type:"pulse",power:.51},{t:188,type:"bossCamera",pos:[0,3.1,10.8],look:[0,2.5,0],fov:49,roll:-.02,dur:1},{t:189.185,type:"pulse",power:.49},{t:190.785,type:"pulse",power:.47},{t:192.385,type:"pulse",power:.61},{t:193.985,type:"pulse",power:.76},{t:194,type:"bossCamera",pos:[0,3.7,13.2],look:[0,3,0],fov:51,roll:.015,dur:1},{t:194,type:"bossGlitch",power:.8},{t:195.585,type:"pulse",power:.55},{t:197.185,type:"pulse",power:.57},{t:198.785,type:"pulse",power:.55},{t:200,type:"bossCamera",pos:[0,3.4,11.5],look:[0,2.8,0],fov:50,roll:-.015,dur:.9},{t:200,type:"bossGlitch",power:.9},{t:200.385,type:"pulse",power:.57},{t:201.985,type:"pulse",power:.65},{t:203.585,type:"pulse",power:.43},{t:204.5,type:"intent",mode:"phase",phase:"dawn"},{t:204.5,type:"intent",mode:"hud",hud:"fakeGuilt",on:!1},{t:204.5,type:"intent",mode:"hud",hud:"black",on:!1},{t:204.5,type:"intent",mode:"hud",hud:"glitch",on:!1},{t:204.5,type:"intent",mode:"hud",hud:"heartbeat",on:!1},{t:204.5,type:"intent",mode:"hud",hud:"bright",on:!1},{t:204.5,type:"intent",mode:"hud",hud:"yellow",on:!0},{t:204.5,type:"intent",mode:"hud",hud:"rainbow",on:!0},{t:204.5,type:"bossPhase",mode:"outro"},{t:204.5,type:"caption",kicker:"",title:"DAWN",sub:"THE WEIGHT IS LIGHT",hold:4},{t:204.5,type:"bossCamera",pos:[0,7.5,20],look:[0,4.5,-12],fov:55,roll:0,dur:1.4},{t:204.5,type:"bossGlitch",power:.8},{t:208,type:"bossCamera",pos:[0,9.5,25],look:[0,8,-40],fov:56,roll:0,dur:2.2},{t:211.2,type:"bossCamera",pos:[0,12,30],look:[0,12,-60],fov:58,roll:0,dur:2},{t:211.5,type:"intent",mode:"hud",hud:"white",on:!1}],ghosts:[]},Jp={song:{title:"INTENTION // CHAOS",shortTitle:"INTENTION CHAOS",artist:"ORIGINAL TRACK",bpm:180,bpmLabel:"CHAOS / 195",bpmMap:[{t:0,bpm:75},{t:17.5,bpm:150},{t:74.5,bpm:165},{t:81,bpm:180},{t:94.2,bpm:195},{t:104,bpm:150},{t:181,bpm:150},{t:204.5,bpm:150}],duration:213.505,chartEnd:212.8,introEnd:17.5,beatOffset:.075,difficulty:"CHAOS",laneLabel:"8 · 6 · 4",boss:!0,theme:"intention",laneColors:["#ffffff"],fadeStart:209.6,fadeEnd:212.2,chaos:!0,freeNotes:!1},sections:[{name:"IGNITION",start:0,end:17.5,keys:8,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.9,bloom:.72,intro:!1,phase:"chaos",notes:!0,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1.08,y:.06,spin:.06,motion:"fan",noteSpeed:1,blurb:"The field starts hot. No overture."},{name:"SURGE",start:17.5,end:33.5,keys:8,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.9,bloom:.72,intro:!1,phase:"chaos",notes:!0,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1.08,y:.06,spin:.06,motion:"fan",noteSpeed:1},{name:"FRACTURE",start:33.5,end:46,keys:8,bpm:165,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.9,bloom:.72,intro:!1,phase:"storm",notes:!0,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1.08,y:.06,spin:.18,motion:"zigzag",noteSpeed:1.12},{name:"LIBRA",start:46,end:61.5,keys:6,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.9,bloom:.72,intro:!1,phase:"chaos",notes:!0,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1.08,y:.06,spin:.06,motion:"fan",noteSpeed:1},{name:"HALO",start:61.5,end:72,keys:8,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.9,bloom:.72,intro:!1,phase:"chaos2",notes:!0,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1.08,y:.06,spin:.06,motion:"fan",noteSpeed:1},{name:"GUILT",start:72,end:88,keys:4,bpm:180,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.9,bloom:.72,intro:!1,phase:"glide",notes:!0,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1.08,y:.06,spin:.06,motion:"fan",noteSpeed:1},{name:"FASTBEAT",start:88,end:104,keys:8,bpm:195,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.9,bloom:.72,intro:!1,phase:"storm",notes:!0,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1.08,y:.06,spin:.18,motion:"zigzag",noteSpeed:1.12},{name:"TIDE",start:104,end:117,keys:8,bpm:160,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.9,bloom:.72,intro:!1,phase:"chaos",notes:!0,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1.08,y:.06,spin:.06,motion:"fan",noteSpeed:1},{name:"MEMORY",start:117,end:139,keys:6,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffd166",energy:.9,bloom:.72,intro:!1,phase:"memory",notes:!0,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1.08,y:.06,spin:.06,motion:"fan",noteSpeed:1},{name:"STATIC",start:139,end:157,keys:8,bpm:170,beatOffset:.075,color:"#ffffff",accent:"#ff3b5c",energy:.9,bloom:.72,intro:!1,phase:"collapse",notes:!0,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1.08,y:.06,spin:.18,motion:"orbit",noteSpeed:1.12},{name:"DETERMINATION",start:157,end:181,keys:8,bpm:165,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.9,bloom:.72,intro:!1,phase:"chaos2",notes:!0,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1.08,y:.06,spin:.06,motion:"fan",noteSpeed:1},{name:"FAKE GUILT",start:181,end:204.5,keys:8,bpm:180,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.9,bloom:.72,intro:!1,phase:"chaos2",notes:!0,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1.08,y:.06,spin:.06,motion:"fan",noteSpeed:1},{name:"DAWN",start:204.5,end:213.505,keys:4,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.9,bloom:.9,intro:!1,phase:"dawn",notes:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1.08,y:.06,spin:.06,motion:"fan",noteSpeed:1}],notes:[{t:1.05,lane:6,type:"hold",dur:.75},{t:2.35,lane:0},{t:2.55,lane:0,type:"hold",dur:.75},{t:2.55,lane:4,type:"hold",dur:.75},{t:2.65,lane:5,type:"hold",dur:.75},{t:2.85,lane:1},{t:3.15,lane:7,type:"hold",dur:.75},{t:3.25,lane:1,type:"hold",dur:.75},{t:3.65,lane:4},{t:3.75,lane:0,type:"hold",dur:.75},{t:3.75,lane:2,type:"hold",dur:.75},{t:3.75,lane:4,type:"hold",dur:.75},{t:3.95,lane:3,type:"hold",dur:.75},{t:3.95,lane:5,type:"hold",dur:.42},{t:4.15,lane:7,type:"hold",dur:.75},{t:4.55,lane:5,type:"hold",dur:.75},{t:5.05,lane:2},{t:5.25,lane:4,type:"hold",dur:.72},{t:5.25,lane:6},{t:5.45,lane:2,type:"hold",dur:.52},{t:5.65,lane:6,type:"hold",dur:.42},{t:5.75,lane:0},{t:6.15,lane:0,type:"hold",dur:.52},{t:6.15,lane:2,type:"hold",dur:.75},{t:6.15,lane:4,type:"hold",dur:.75},{t:6.25,lane:3},{t:6.25,lane:5,type:"hold",dur:.75},{t:6.25,lane:6,type:"hold",dur:.75},{t:6.35,lane:1,type:"hold",dur:.75},{t:6.45,lane:7,type:"hold",dur:.75},{t:6.65,lane:3,type:"hold",dur:.32},{t:6.85,lane:0,type:"hold",dur:.845},{t:7.15,lane:3,type:"hold",dur:.75},{t:7.35,lane:1,type:"hold",dur:.72},{t:7.55,lane:7,type:"hold",dur:.32},{t:7.75,lane:6,type:"hold",dur:.42},{t:7.85,lane:2,type:"hold",dur:.75},{t:7.95,lane:4,type:"hold",dur:.32},{t:8.05,lane:7,type:"hold",dur:1.098},{t:8.25,lane:1},{t:8.35,lane:6,type:"hold",dur:.75},{t:8.45,lane:4,type:"hold",dur:.52},{t:8.55,lane:5,type:"hold",dur:.75},{t:8.65,lane:1},{t:8.75,lane:3},{t:9.05,lane:1,type:"hold",dur:.808},{t:9.15,lane:3,type:"hold",dur:.62},{t:9.15,lane:4,type:"hold",dur:.72},{t:9.45,lane:2,type:"hold",dur:.75},{t:9.45,lane:7},{t:9.55,lane:5,type:"hold",dur:.75},{t:9.65,lane:7,type:"hold",dur:.62},{t:9.75,lane:6,type:"hold",dur:.981},{t:9.95,lane:3,type:"hold",dur:.75},{t:10.05,lane:4,type:"hold",dur:.75},{t:10.45,lane:2},{t:10.45,lane:7,type:"hold",dur:.62},{t:10.55,lane:1,type:"hold",dur:.42},{t:10.65,lane:2},{t:10.75,lane:2,type:"hold",dur:.643},{t:10.85,lane:5,type:"hold",dur:.75},{t:10.95,lane:0},{t:11.05,lane:3,type:"hold",dur:.75},{t:11.15,lane:0,type:"hold",dur:.75},{t:11.15,lane:1,type:"hold",dur:.75},{t:11.15,lane:4,type:"hold",dur:.75},{t:11.25,lane:7,type:"hold",dur:1.122},{t:11.55,lane:6},{t:11.65,lane:2,type:"hold",dur:.32},{t:11.75,lane:6,type:"hold",dur:.52},{t:12.15,lane:2,type:"hold",dur:.75},{t:12.25,lane:4,type:"hold",dur:.75},{t:12.25,lane:5,type:"hold",dur:.75},{t:12.45,lane:1,type:"hold",dur:.32},{t:12.45,lane:6,type:"hold",dur:.75},{t:12.85,lane:3,type:"hold",dur:.75},{t:12.95,lane:1,type:"hold",dur:.75},{t:13.35,lane:4,type:"hold",dur:.52},{t:13.65,lane:6,type:"hold",dur:.75},{t:13.85,lane:2,type:"hold",dur:.75},{t:14.05,lane:4,type:"hold",dur:.402},{t:14.15,lane:7},{t:14.25,lane:1,type:"hold",dur:.32},{t:14.35,lane:0,type:"hold",dur:.75},{t:14.55,lane:7,type:"hold",dur:.75},{t:14.65,lane:5,type:"hold",dur:.62},{t:14.75,lane:1},{t:14.95,lane:3,type:"hold",dur:1.062},{t:15.15,lane:1,type:"hold",dur:.75},{t:15.25,lane:4,type:"hold",dur:.75},{t:15.35,lane:2,type:"hold",dur:.75},{t:15.45,lane:5,type:"hold",dur:.32},{t:15.55,lane:0,type:"hold",dur:.75},{t:15.95,lane:5,type:"hold",dur:.75},{t:16.45,lane:1},{t:16.45,lane:4},{t:16.75,lane:6},{t:16.85,lane:0},{t:16.85,lane:2},{t:16.95,lane:6},{t:17.6,lane:2},{t:18.1,lane:4,type:"hold",dur:.842},{t:18.3,lane:7},{t:18.4,lane:3},{t:18.4,lane:6},{t:18.5,lane:0},{t:18.5,lane:1},{t:18.5,lane:7},{t:18.7,lane:2},{t:18.7,lane:7},{t:18.8,lane:5},{t:18.9,lane:1},{t:18.9,lane:3},{t:19,lane:2},{t:19,lane:3},{t:19.1,lane:1},{t:19.1,lane:6},{t:19.4,lane:7},{t:19.6,lane:6},{t:19.7,lane:3},{t:19.7,lane:7},{t:20.1,lane:0},{t:20.2,lane:7,type:"hold",dur:.964},{t:20.4,lane:1},{t:20.8,lane:6},{t:20.9,lane:2},{t:21,lane:6},{t:21.3,lane:0},{t:21.6,lane:4},{t:21.7,lane:5,type:"hold",dur:.647},{t:21.8,lane:0},{t:22,lane:3},{t:22.2,lane:1},{t:22.4,lane:0},{t:22.4,lane:4},{t:22.4,lane:7},{t:22.7,lane:2},{t:22.7,lane:7},{t:22.8,lane:5},{t:23.1,lane:0},{t:23.1,lane:4},{t:23.7,lane:5},{t:23.9,lane:2},{t:24,lane:1},{t:24,lane:4},{t:24,lane:5},{t:24.6,lane:7},{t:24.7,lane:1},{t:25,lane:0},{t:25.2,lane:7},{t:25.3,lane:3,type:"hold",dur:1.093},{t:25.4,lane:0},{t:25.8,lane:2},{t:25.8,lane:4},{t:25.8,lane:7},{t:26,lane:5},{t:26.1,lane:0},{t:26.1,lane:7},{t:26.3,lane:5},{t:26.4,lane:0},{t:26.4,lane:1},{t:26.4,lane:2},{t:26.5,lane:4},{t:27.6,lane:7},{t:28.2,lane:1},{t:28.2,lane:2},{t:28.2,lane:3},{t:28.3,lane:0},{t:28.4,lane:7},{t:28.5,lane:3},{t:28.8,lane:0},{t:28.9,lane:3,type:"hold",dur:1.13},{t:29.1,lane:1},{t:29.7,lane:1},{t:29.7,lane:4},{t:29.7,lane:5},{t:30,lane:5},{t:30,lane:6},{t:30,lane:7},{t:30.2,lane:6},{t:30.3,lane:0},{t:30.4,lane:4},{t:30.4,lane:5},{t:30.4,lane:6},{t:30.5,lane:2},{t:30.7,lane:4,type:"hold",dur:1.136},{t:30.9,lane:7},{t:31.5,lane:6},{t:31.7,lane:0},{t:31.8,lane:7},{t:31.9,lane:3},{t:32.2,lane:0},{t:32.3,lane:3,type:"hold",dur:.642},{t:32.4,lane:5},{t:33.591,lane:2},{t:33.682,lane:1},{t:33.682,lane:2},{t:33.682,lane:6},{t:33.773,lane:1},{t:33.864,lane:0},{t:33.864,lane:2},{t:33.864,lane:7},{t:33.955,lane:1},{t:34.318,lane:2},{t:34.318,lane:4},{t:34.591,lane:2},{t:34.682,lane:5,type:"hold",dur:.788},{t:34.864,lane:7},{t:35.045,lane:2},{t:35.045,lane:4},{t:35.045,lane:6},{t:35.136,lane:2},{t:35.136,lane:3},{t:35.136,lane:7},{t:35.682,lane:4},{t:35.773,lane:7},{t:35.864,lane:2},{t:35.864,lane:3},{t:35.864,lane:6},{t:35.955,lane:1},{t:36.227,lane:7,type:"hold",dur:.921},{t:36.318,lane:1},{t:36.318,lane:3},{t:36.318,lane:6},{t:36.409,lane:4},{t:36.5,lane:6},{t:36.682,lane:2},{t:36.773,lane:4,type:"hold",dur:.497},{t:36.864,lane:1},{t:37.045,lane:2},{t:37.045,lane:6},{t:37.136,lane:0},{t:37.227,lane:3},{t:37.318,lane:3},{t:37.591,lane:0},{t:37.591,lane:5},{t:37.682,lane:2},{t:37.773,lane:3},{t:37.864,lane:0},{t:37.955,lane:7},{t:38.045,lane:6},{t:38.136,lane:0,type:"hold",dur:.875},{t:38.227,lane:4},{t:38.318,lane:5},{t:38.409,lane:1},{t:38.591,lane:7},{t:38.773,lane:1},{t:38.864,lane:4},{t:38.955,lane:2},{t:38.955,lane:6},{t:39.136,lane:3},{t:39.227,lane:0},{t:39.318,lane:5},{t:39.409,lane:2},{t:39.409,lane:5},{t:39.409,lane:7},{t:39.591,lane:2},{t:39.591,lane:6},{t:39.591,lane:7},{t:39.682,lane:2},{t:39.773,lane:1},{t:39.773,lane:6},{t:39.955,lane:1},{t:39.955,lane:5},{t:40.045,lane:7},{t:40.136,lane:1},{t:40.318,lane:7},{t:46.3,lane:3},{t:46.4,lane:4},{t:46.4,lane:5},{t:46.5,lane:3},{t:46.7,lane:5},{t:47.2,lane:2},{t:47.4,lane:6},{t:48,lane:3},{t:48.5,lane:6},{t:48.8,lane:5,type:"hold",dur:.556},{t:48.9,lane:1},{t:48.9,lane:4},{t:49,lane:1},{t:49.1,lane:4},{t:49.3,lane:3},{t:49.4,lane:1},{t:49.4,lane:4},{t:49.4,lane:6},{t:49.7,lane:3},{t:49.9,lane:5},{t:50,lane:4},{t:50.1,lane:5},{t:50.1,lane:6},{t:50.2,lane:3},{t:50.2,lane:4},{t:50.2,lane:6},{t:50.5,lane:3},{t:50.7,lane:1},{t:50.7,lane:5},{t:51,lane:1},{t:51,lane:2},{t:51.1,lane:3},{t:51.1,lane:4},{t:51.1,lane:5},{t:51.6,lane:1},{t:51.6,lane:2},{t:51.6,lane:4},{t:51.7,lane:6,type:"hold",dur:.878},{t:51.9,lane:1},{t:51.9,lane:2},{t:52,lane:3},{t:52.1,lane:3},{t:52.2,lane:4},{t:52.3,lane:2},{t:52.5,lane:5,type:"hold",dur:.402},{t:52.6,lane:2},{t:52.8,lane:2},{t:52.9,lane:2},{t:53.1,lane:4},{t:53.2,lane:3},{t:53.3,lane:1},{t:53.3,lane:2},{t:53.3,lane:6},{t:53.7,lane:1},{t:53.7,lane:6},{t:54.1,lane:2},{t:54.3,lane:1},{t:54.3,lane:5},{t:54.7,lane:1,type:"hold",dur:.46},{t:55.2,lane:4},{t:55.3,lane:3},{t:55.3,lane:5},{t:55.5,lane:3},{t:55.6,lane:3},{t:55.9,lane:5},{t:56,lane:5,type:"hold",dur:.406},{t:56.1,lane:6},{t:56.2,lane:3},{t:56.3,lane:2},{t:56.6,lane:4},{t:56.6,lane:6},{t:56.8,lane:1},{t:56.8,lane:3},{t:56.8,lane:5},{t:56.9,lane:6},{t:57,lane:2},{t:57.3,lane:5},{t:57.5,lane:1},{t:57.5,lane:4},{t:57.5,lane:6},{t:57.6,lane:3},{t:57.6,lane:5},{t:57.7,lane:1},{t:57.7,lane:6},{t:58,lane:3},{t:58,lane:4},{t:58.1,lane:6,type:"hold",dur:.864},{t:58.4,lane:3},{t:58.5,lane:3},{t:58.5,lane:5},{t:58.6,lane:5},{t:61.8,lane:4},{t:62,lane:7},{t:62.1,lane:1,type:"hold",dur:1.053},{t:62.2,lane:3},{t:62.2,lane:6},{t:62.2,lane:7},{t:62.3,lane:2},{t:62.3,lane:3},{t:62.4,lane:6},{t:62.6,lane:7},{t:62.9,lane:4},{t:62.9,lane:7},{t:63,lane:4},{t:63.4,lane:4},{t:63.9,lane:6},{t:64,lane:3},{t:64.2,lane:4},{t:64.2,lane:5},{t:64.6,lane:2},{t:64.9,lane:6},{t:65,lane:0},{t:65.1,lane:4},{t:65.2,lane:0},{t:65.2,lane:3},{t:65.2,lane:6},{t:65.3,lane:0},{t:65.5,lane:3},{t:65.7,lane:1},{t:65.8,lane:4},{t:65.9,lane:2},{t:65.9,lane:3},{t:65.9,lane:6},{t:66.4,lane:5},{t:66.6,lane:3},{t:66.6,lane:6},{t:66.6,lane:7},{t:66.7,lane:5},{t:67.1,lane:1,type:"hold",dur:.516},{t:67.2,lane:6},{t:67.4,lane:2},{t:67.5,lane:5},{t:67.5,lane:6},{t:67.8,lane:0},{t:68.2,lane:4},{t:68.4,lane:5,type:"hold",dur:1.089},{t:68.6,lane:0},{t:68.7,lane:3},{t:68.8,lane:1},{t:68.9,lane:4},{t:69,lane:1},{t:69,lane:2},{t:69.1,lane:6},{t:69.3,lane:7},{t:69.8,lane:6},{t:69.9,lane:2},{t:70,lane:1},{t:70,lane:4},{t:70,lane:5},{t:70.1,lane:7,type:"hold",dur:1.047},{t:70.4,lane:1},{t:70.8,lane:6},{t:70.9,lane:2},{t:72,lane:3},{t:72.083,lane:5},{t:72.333,lane:4},{t:72.417,lane:5,type:"hold",dur:.684},{t:72.5,lane:3},{t:72.5,lane:4},{t:72.667,lane:2},{t:72.75,lane:3},{t:72.833,lane:2},{t:72.833,lane:4},{t:73.167,lane:3,type:"hold",dur:.67},{t:73.417,lane:2},{t:73.583,lane:4},{t:73.75,lane:5},{t:74,lane:5},{t:74.25,lane:2},{t:74.25,lane:3},{t:74.25,lane:4},{t:74.417,lane:2},{t:74.583,lane:5},{t:74.75,lane:4},{t:74.833,lane:2},{t:74.833,lane:3},{t:74.833,lane:5},{t:75.083,lane:3,type:"hold",dur:1.043},{t:75.167,lane:4},{t:75.25,lane:2},{t:75.333,lane:5},{t:75.5,lane:5},{t:75.583,lane:4},{t:75.833,lane:2},{t:76.083,lane:4,type:"hold",dur:.489},{t:76.167,lane:2},{t:76.417,lane:2},{t:76.5,lane:3},{t:76.667,lane:5},{t:76.75,lane:2},{t:76.833,lane:5},{t:77,lane:2},{t:77,lane:3},{t:77.25,lane:3},{t:77.333,lane:5},{t:77.417,lane:3},{t:77.5,lane:5},{t:77.667,lane:2},{t:77.667,lane:3},{t:77.667,lane:4},{t:77.75,lane:5},{t:77.833,lane:3},{t:77.917,lane:2},{t:78.083,lane:3},{t:78.083,lane:4},{t:78.083,lane:5},{t:78.333,lane:2},{t:78.417,lane:4},{t:78.5,lane:2},{t:78.5,lane:3},{t:78.667,lane:5},{t:78.75,lane:4},{t:78.833,lane:2},{t:78.917,lane:3},{t:78.917,lane:4},{t:78.917,lane:5},{t:79,lane:2},{t:79.333,lane:3},{t:79.333,lane:4},{t:79.333,lane:5},{t:79.833,lane:2},{t:80.083,lane:3},{t:80.25,lane:4},{t:80.25,lane:5},{t:80.417,lane:3},{t:80.5,lane:4},{t:80.583,lane:5,type:"hold",dur:.373},{t:80.833,lane:2},{t:80.833,lane:3},{t:80.833,lane:4},{t:81,lane:2},{t:81,lane:3},{t:81.333,lane:2},{t:81.333,lane:4},{t:81.333,lane:5},{t:81.417,lane:3},{t:81.5,lane:2},{t:81.583,lane:5},{t:81.833,lane:3},{t:82.083,lane:2},{t:82.083,lane:5},{t:82.75,lane:3},{t:82.833,lane:2},{t:82.917,lane:4},{t:83,lane:2},{t:83.083,lane:5},{t:83.167,lane:3},{t:88.077,lane:5,type:"hold",dur:1.032},{t:88.308,lane:0},{t:88.385,lane:1},{t:88.385,lane:3},{t:88.385,lane:4},{t:88.462,lane:7},{t:88.615,lane:1},{t:88.615,lane:4},{t:88.692,lane:6},{t:88.769,lane:3},{t:88.846,lane:0},{t:89,lane:2},{t:89,lane:6},{t:89.154,lane:2},{t:89.462,lane:4,type:"hold",dur:1.146},{t:89.538,lane:7},{t:89.615,lane:1},{t:89.769,lane:1},{t:89.769,lane:6},{t:89.846,lane:2},{t:89.846,lane:3},{t:89.846,lane:7},{t:89.923,lane:6},{t:90,lane:0},{t:90.231,lane:5},{t:90.308,lane:6},{t:90.385,lane:0},{t:90.385,lane:1},{t:90.462,lane:5},{t:90.462,lane:7},{t:90.538,lane:0},{t:90.538,lane:3},{t:90.615,lane:1},{t:90.769,lane:2},{t:90.923,lane:0},{t:90.923,lane:5},{t:91,lane:1},{t:91,lane:7},{t:91.154,lane:5},{t:91.231,lane:2},{t:91.231,lane:3},{t:91.308,lane:5},{t:91.308,lane:6},{t:91.462,lane:2},{t:91.769,lane:0},{t:91.769,lane:5},{t:92.077,lane:1},{t:92.231,lane:7},{t:92.462,lane:0},{t:92.462,lane:1},{t:92.538,lane:4},{t:92.615,lane:1},{t:92.615,lane:6},{t:92.692,lane:2},{t:92.692,lane:7},{t:92.769,lane:4},{t:92.846,lane:7,type:"hold",dur:.826},{t:93.077,lane:1},{t:93.154,lane:0},{t:93.231,lane:4},{t:93.385,lane:5},{t:93.462,lane:0},{t:93.462,lane:1},{t:93.538,lane:2},{t:93.615,lane:1},{t:93.692,lane:4},{t:93.769,lane:2},{t:93.846,lane:5},{t:93.923,lane:7},{t:94,lane:6},{t:94.077,lane:2},{t:94.077,lane:7},{t:94.154,lane:4},{t:94.462,lane:7},{t:94.538,lane:1},{t:94.538,lane:4},{t:94.538,lane:6},{t:94.692,lane:6,type:"hold",dur:1.122},{t:94.769,lane:0},{t:94.769,lane:2},{t:94.769,lane:4},{t:94.846,lane:3},{t:95,lane:0},{t:95.077,lane:7},{t:95.308,lane:1,type:"hold",dur:.802},{t:95.462,lane:3},{t:95.462,lane:4},{t:95.538,lane:2},{t:95.615,lane:3},{t:95.615,lane:5},{t:95.692,lane:7},{t:95.769,lane:0},{t:95.846,lane:3},{t:96.077,lane:4},{t:104,lane:2},{t:104.094,lane:5},{t:104.188,lane:1},{t:104.188,lane:7},{t:104.281,lane:5,type:"hold",dur:.446},{t:104.375,lane:1},{t:104.469,lane:0},{t:104.656,lane:4},{t:104.75,lane:1},{t:104.938,lane:1},{t:105.031,lane:7},{t:105.219,lane:0},{t:105.219,lane:1},{t:105.219,lane:4},{t:105.406,lane:3},{t:105.406,lane:4},{t:105.5,lane:2},{t:105.688,lane:1},{t:105.688,lane:2},{t:105.688,lane:5},{t:105.781,lane:0},{t:105.781,lane:6},{t:105.875,lane:5},{t:106.156,lane:1},{t:106.25,lane:1},{t:106.25,lane:6},{t:106.344,lane:4},{t:106.438,lane:3},{t:106.531,lane:0},{t:106.531,lane:1},{t:106.625,lane:3},{t:106.719,lane:1},{t:106.906,lane:4,type:"hold",dur:.705},{t:107.188,lane:2},{t:107.656,lane:5},{t:107.75,lane:0},{t:107.75,lane:7},{t:107.938,lane:5},{t:108.219,lane:2},{t:108.313,lane:3},{t:108.313,lane:6},{t:108.406,lane:2},{t:108.688,lane:6},{t:108.781,lane:0},{t:108.781,lane:3},{t:108.781,lane:5},{t:109.156,lane:4,type:"hold",dur:.671},{t:109.25,lane:5},{t:109.25,lane:7},{t:109.438,lane:1},{t:109.531,lane:7},{t:109.906,lane:3},{t:110.094,lane:0},{t:110.188,lane:3,type:"hold",dur:.353},{t:110.281,lane:1},{t:110.375,lane:6},{t:110.375,lane:7},{t:110.656,lane:5},{t:110.75,lane:1},{t:110.938,lane:0},{t:111.031,lane:4,type:"hold",dur:.546},{t:111.406,lane:0},{t:111.406,lane:1},{t:111.406,lane:5},{t:111.5,lane:1},{t:111.594,lane:7},{t:111.688,lane:3},{t:111.969,lane:4,type:"hold",dur:.876},{t:112.344,lane:0},{t:112.344,lane:2},{t:112.625,lane:3},{t:112.719,lane:0},{t:112.813,lane:5},{t:113.188,lane:2},{t:113.656,lane:4,type:"hold",dur:.945},{t:113.75,lane:7},{t:117.2,lane:5},{t:117.3,lane:1},{t:117.3,lane:4},{t:117.3,lane:5},{t:117.4,lane:1},{t:117.4,lane:3},{t:117.4,lane:5},{t:117.5,lane:5},{t:117.7,lane:1},{t:117.8,lane:5},{t:117.9,lane:2},{t:118.1,lane:4},{t:118.1,lane:5},{t:118.4,lane:2},{t:118.7,lane:2},{t:118.7,lane:3},{t:118.7,lane:6},{t:119,lane:1},{t:119.3,lane:6},{t:119.7,lane:3,type:"hold",dur:.534},{t:119.8,lane:4},{t:119.8,lane:6},{t:119.9,lane:2},{t:120,lane:5},{t:120.1,lane:1},{t:120.1,lane:6},{t:120.2,lane:5},{t:120.2,lane:6},{t:120.3,lane:6},{t:120.4,lane:5},{t:120.5,lane:5},{t:120.6,lane:1},{t:120.6,lane:2},{t:120.6,lane:4},{t:120.7,lane:4},{t:120.7,lane:5},{t:120.7,lane:6},{t:120.9,lane:2},{t:121,lane:5},{t:121.3,lane:1},{t:121.4,lane:3,type:"hold",dur:.658},{t:121.6,lane:1},{t:121.7,lane:4},{t:121.9,lane:6},{t:122.1,lane:1},{t:122.4,lane:3},{t:122.4,lane:4},{t:122.9,lane:1,type:"hold",dur:.565},{t:123.1,lane:6},{t:123.2,lane:3},{t:123.4,lane:3},{t:123.4,lane:4},{t:123.5,lane:2},{t:123.5,lane:4},{t:123.5,lane:5},{t:123.7,lane:1},{t:124,lane:3},{t:124,lane:5},{t:124,lane:6},{t:124.1,lane:3},{t:124.2,lane:6},{t:124.3,lane:2,type:"hold",dur:1.013},{t:124.4,lane:5},{t:125.1,lane:3},{t:125.7,lane:3},{t:125.7,lane:6},{t:126.5,lane:3},{t:126.6,lane:4},{t:126.7,lane:2},{t:126.7,lane:5},{t:126.8,lane:6},{t:126.9,lane:4},{t:127,lane:4},{t:127.2,lane:3},{t:127.3,lane:3},{t:127.3,lane:4},{t:127.3,lane:5},{t:127.5,lane:6},{t:127.7,lane:3},{t:127.9,lane:3},{t:128.2,lane:5},{t:128.3,lane:1},{t:128.5,lane:6,type:"hold",dur:.565},{t:128.6,lane:2},{t:128.7,lane:5},{t:128.8,lane:1},{t:128.8,lane:5},{t:128.9,lane:4},{t:129.3,lane:3},{t:129.4,lane:4,type:"hold",dur:.784},{t:129.6,lane:2},{t:129.9,lane:1},{t:129.9,lane:5},{t:130.2,lane:6},{t:130.5,lane:5},{t:130.6,lane:1},{t:130.6,lane:3},{t:130.7,lane:1},{t:130.7,lane:6},{t:131.1,lane:2},{t:131.3,lane:6},{t:131.5,lane:5},{t:131.7,lane:3},{t:131.7,lane:6},{t:131.8,lane:3},{t:132,lane:6},{t:132.1,lane:2},{t:132.1,lane:3},{t:132.1,lane:6},{t:132.2,lane:5},{t:132.5,lane:6,type:"hold",dur:.708},{t:132.6,lane:4},{t:132.6,lane:5},{t:132.7,lane:2},{t:132.8,lane:4},{t:133.1,lane:2},{t:133.1,lane:4},{t:133.2,lane:3},{t:133.4,lane:4},{t:133.5,lane:2},{t:133.5,lane:4},{t:133.5,lane:6},{t:134,lane:3},{t:134.1,lane:1},{t:134.2,lane:3,type:"hold",dur:1.093},{t:134.3,lane:1},{t:134.4,lane:4},{t:134.5,lane:2},{t:134.8,lane:5},{t:139,lane:7},{t:139.088,lane:3},{t:139.176,lane:0,type:"hold",dur:.654},{t:139.265,lane:3},{t:139.353,lane:1},{t:139.441,lane:4},{t:139.529,lane:2},{t:139.618,lane:3},{t:139.618,lane:5},{t:139.618,lane:6},{t:139.794,lane:7},{t:139.882,lane:6},{t:139.971,lane:3},{t:139.971,lane:5},{t:140.059,lane:0},{t:140.235,lane:4},{t:140.235,lane:5},{t:140.5,lane:1},{t:140.853,lane:6},{t:141.029,lane:0},{t:141.029,lane:2},{t:141.206,lane:2},{t:141.206,lane:4},{t:141.206,lane:6},{t:141.382,lane:0},{t:141.735,lane:1},{t:141.735,lane:4},{t:141.735,lane:7},{t:141.824,lane:1},{t:141.912,lane:4},{t:142,lane:2,type:"hold",dur:.51},{t:142.088,lane:3},{t:142.088,lane:5},{t:142.265,lane:0},{t:142.265,lane:1},{t:142.265,lane:6},{t:142.353,lane:7},{t:142.529,lane:1},{t:142.529,lane:6},{t:142.882,lane:6},{t:142.971,lane:2},{t:143.059,lane:5},{t:143.147,lane:1},{t:143.147,lane:3},{t:143.235,lane:7,type:"hold",dur:.589},{t:143.412,lane:3},{t:143.676,lane:4},{t:143.853,lane:1},{t:143.853,lane:2},{t:143.853,lane:5},{t:143.941,lane:1},{t:143.941,lane:3},{t:144.029,lane:0},{t:144.029,lane:2},{t:144.029,lane:4},{t:144.118,lane:4},{t:144.118,lane:7},{t:144.382,lane:1},{t:144.382,lane:4},{t:144.559,lane:0},{t:144.559,lane:6},{t:144.647,lane:1},{t:144.647,lane:4},{t:144.647,lane:6},{t:144.912,lane:5},{t:145,lane:1,type:"hold",dur:1.002},{t:145.088,lane:7},{t:145.265,lane:3},{t:145.353,lane:0},{t:145.441,lane:3},{t:145.441,lane:5},{t:145.529,lane:7},{t:145.706,lane:2},{t:145.706,lane:4},{t:145.971,lane:2},{t:146.059,lane:3},{t:146.059,lane:6},{t:146.147,lane:0},{t:146.324,lane:5},{t:146.5,lane:1},{t:146.5,lane:2},{t:146.588,lane:4},{t:146.676,lane:2},{t:146.853,lane:5},{t:146.941,lane:1},{t:147.029,lane:3},{t:147.118,lane:1,type:"hold",dur:.454},{t:147.206,lane:4},{t:147.294,lane:6},{t:147.559,lane:2},{t:147.735,lane:6},{t:147.824,lane:4},{t:148.088,lane:5},{t:148.265,lane:0},{t:148.265,lane:3},{t:148.529,lane:0},{t:148.529,lane:3},{t:148.618,lane:1},{t:148.706,lane:4},{t:148.794,lane:2},{t:148.882,lane:5,type:"hold",dur:.694},{t:148.971,lane:7},{t:149.059,lane:3},{t:149.147,lane:2},{t:149.235,lane:4},{t:149.324,lane:7},{t:157,lane:5},{t:157.273,lane:1,type:"hold",dur:1.054},{t:157.364,lane:7},{t:157.455,lane:3},{t:157.455,lane:4},{t:157.545,lane:0},{t:157.818,lane:2},{t:158,lane:5},{t:158,lane:6},{t:158.091,lane:7},{t:158.455,lane:4},{t:158.455,lane:6},{t:158.455,lane:7},{t:158.545,lane:3},{t:158.727,lane:4},{t:158.818,lane:7,type:"hold",dur:.799},{t:158.909,lane:1},{t:158.909,lane:3},{t:158.909,lane:6},{t:159.091,lane:0},{t:159.182,lane:4},{t:159.273,lane:3},{t:159.455,lane:4,type:"hold",dur:.855},{t:159.818,lane:2},{t:160.182,lane:5},{t:160.273,lane:5},{t:160.273,lane:7},{t:160.455,lane:6},{t:160.545,lane:2},{t:160.727,lane:2},{t:160.727,lane:6},{t:161,lane:2},{t:161,lane:4},{t:161,lane:7},{t:161.364,lane:2},{t:161.364,lane:4},{t:161.364,lane:6},{t:161.545,lane:0},{t:161.636,lane:4},{t:161.727,lane:5},{t:161.818,lane:1},{t:162,lane:7},{t:162.273,lane:1},{t:162.273,lane:5},{t:162.636,lane:7},{t:162.818,lane:6},{t:162.909,lane:2},{t:163.091,lane:4},{t:163.182,lane:0},{t:163.182,lane:7},{t:163.273,lane:1},{t:163.273,lane:4},{t:163.545,lane:6},{t:163.818,lane:2},{t:164,lane:5},{t:164.091,lane:0},{t:164.273,lane:2},{t:164.455,lane:3,type:"hold",dur:.923},{t:164.545,lane:0},{t:164.818,lane:0},{t:164.818,lane:5},{t:165,lane:2},{t:165,lane:6},{t:165,lane:7},{t:165.091,lane:4,type:"hold",dur:.952},{t:165.273,lane:7},{t:165.455,lane:1},{t:165.455,lane:7},{t:165.636,lane:6},{t:165.727,lane:6},{t:165.818,lane:5},{t:166,lane:1},{t:166,lane:2},{t:166,lane:7},{t:166.091,lane:7},{t:166.182,lane:0},{t:166.182,lane:3},{t:166.182,lane:5},{t:166.364,lane:0,type:"hold",dur:1.112},{t:166.455,lane:2},{t:166.455,lane:4},{t:166.545,lane:5},{t:166.636,lane:4},{t:166.636,lane:7},{t:166.727,lane:6},{t:166.727,lane:7},{t:167.091,lane:2},{t:167.182,lane:4},{t:167.182,lane:7},{t:167.364,lane:1},{t:167.364,lane:4},{t:167.364,lane:7},{t:167.545,lane:1,type:"hold",dur:1.024},{t:167.818,lane:0},{t:167.818,lane:3},{t:167.818,lane:6},{t:167.909,lane:2},{t:168.091,lane:3},{t:168.091,lane:4},{t:168.091,lane:6},{t:168.182,lane:0},{t:168.273,lane:4},{t:168.455,lane:5},{t:168.727,lane:4},{t:168.727,lane:6},{t:169,lane:7},{t:169.091,lane:3,type:"hold",dur:.999},{t:169.182,lane:0},{t:169.455,lane:2},{t:169.455,lane:6},{t:169.545,lane:0},{t:169.545,lane:5},{t:169.818,lane:7},{t:169.909,lane:5,type:"hold",dur:.548},{t:170.182,lane:2},{t:170.273,lane:6},{t:170.545,lane:2},{t:170.545,lane:3},{t:170.636,lane:6},{t:170.727,lane:0},{t:170.818,lane:4},{t:170.818,lane:7},{t:170.909,lane:5},{t:171.091,lane:1},{t:171.182,lane:1},{t:171.182,lane:2},{t:171.182,lane:7},{t:171.273,lane:1,type:"hold",dur:.665},{t:171.364,lane:4},{t:171.455,lane:2},{t:171.727,lane:5},{t:171.818,lane:0},{t:171.909,lane:0},{t:171.909,lane:5},{t:172,lane:2,type:"hold",dur:.726},{t:172.273,lane:6},{t:172.364,lane:7},{t:173,lane:0},{t:173,lane:6},{t:173.091,lane:0},{t:173.091,lane:3},{t:181,lane:0},{t:181,lane:5},{t:181.167,lane:0},{t:181.167,lane:2},{t:181.167,lane:5},{t:181.333,lane:3},{t:181.667,lane:1},{t:181.917,lane:3},{t:181.917,lane:7},{t:182,lane:5},{t:182,lane:6},{t:182.25,lane:2},{t:182.5,lane:4},{t:182.583,lane:1},{t:182.583,lane:2},{t:182.75,lane:5},{t:182.833,lane:1},{t:182.917,lane:7},{t:183,lane:2},{t:183,lane:3},{t:183.083,lane:0},{t:183.167,lane:3,type:"hold",dur:1.136},{t:183.333,lane:0},{t:183.333,lane:1},{t:183.5,lane:4},{t:183.917,lane:2},{t:184.083,lane:4},{t:184.083,lane:5},{t:184.25,lane:4},{t:184.25,lane:7},{t:184.5,lane:6},{t:184.583,lane:2},{t:184.667,lane:4},{t:184.75,lane:2},{t:185.333,lane:0},{t:185.333,lane:5},{t:185.333,lane:7},{t:185.417,lane:3},{t:185.667,lane:0},{t:185.667,lane:3},{t:185.833,lane:1},{t:186,lane:4},{t:186.167,lane:6,type:"hold",dur:.467},{t:186.25,lane:3},{t:186.333,lane:0},{t:186.583,lane:7},{t:187,lane:1},{t:187.083,lane:6},{t:187.083,lane:7},{t:187.25,lane:4,type:"hold",dur:.864},{t:187.333,lane:5},{t:187.583,lane:0},{t:187.667,lane:3},{t:187.667,lane:5},{t:187.667,lane:7},{t:187.75,lane:1},{t:188.083,lane:6},{t:188.083,lane:7},{t:188.167,lane:5},{t:188.333,lane:2},{t:188.417,lane:4},{t:188.417,lane:7},{t:188.583,lane:2},{t:188.75,lane:0},{t:188.75,lane:5},{t:188.75,lane:6},{t:188.833,lane:1},{t:188.833,lane:3},{t:189.083,lane:1},{t:189.083,lane:7},{t:189.167,lane:3,type:"hold",dur:.429},{t:189.25,lane:4},{t:189.333,lane:2},{t:189.5,lane:5},{t:189.667,lane:4},{t:189.833,lane:3},{t:189.833,lane:7},{t:190,lane:6,type:"hold",dur:.437},{t:190.083,lane:0},{t:190.167,lane:4},{t:190.333,lane:3},{t:190.417,lane:4},{t:190.917,lane:2},{t:190.917,lane:6},{t:191,lane:5,type:"hold",dur:.484},{t:191.083,lane:7},{t:191.167,lane:1},{t:191.167,lane:6},{t:191.25,lane:2},{t:191.417,lane:4},{t:191.5,lane:7},{t:191.583,lane:6,type:"hold",dur:1.122},{t:191.667,lane:0},{t:192.083,lane:4},{t:192.167,lane:5},{t:192.25,lane:1},{t:192.333,lane:7},{t:192.5,lane:1},{t:192.583,lane:2},{t:192.583,lane:4},{t:192.667,lane:5},{t:192.833,lane:5},{t:192.917,lane:0},{t:192.917,lane:6},{t:192.917,lane:7},{t:193.167,lane:5,type:"hold",dur:.727},{t:193.333,lane:2},{t:193.417,lane:4},{t:193.5,lane:1},{t:193.5,lane:7},{t:193.583,lane:3},{t:193.667,lane:0},{t:193.667,lane:6},{t:193.833,lane:2},{t:193.917,lane:1},{t:193.917,lane:6},{t:194,lane:0},{t:194,lane:3},{t:194.167,lane:3},{t:194.167,lane:7},{t:194.333,lane:3},{t:194.371,lane:6},{t:194.417,lane:0},{t:194.512,lane:6},{t:194.583,lane:3},{t:194.583,lane:4},{t:194.583,lane:5},{t:194.667,lane:1},{t:194.75,lane:4,type:"hold",dur:1.049},{t:195,lane:2},{t:195,lane:5},{t:195,lane:7},{t:195.083,lane:1},{t:195.333,lane:7},{t:195.417,lane:5},{t:195.5,lane:2,type:"hold",dur:.68},{t:195.917,lane:3},{t:196.083,lane:7},{t:196.167,lane:1},{t:196.25,lane:0}],events:[{t:0,type:"intent",mode:"phase",phase:"chaos"},{t:0,type:"intent",mode:"phase",phase:"chaos"},{t:.05,type:"intent",mode:"hud",hud:"clear"},{t:.1,type:"intent",mode:"hud",hud:"black",on:!1},{t:.2,type:"intent",mode:"hud",hud:"rainbow",on:!1},{t:.3,type:"cutscene",chapter:"CHAOS // 00",title:"NO OVERTURE",sub:"THE FIELD IS ALREADY BURNING",partner:"kai",hold:2.2},{t:6,type:"bossGlitch",power:.859149987413548},{t:6,type:"vibe",power:.8},{t:6.03,type:"pulse",power:1.1},{t:8,type:"intent",mode:"hud",hud:"heartbeat",on:!0,bpm:168},{t:14,type:"bossGlitch",power:.5508335222955794},{t:14,type:"vibe",power:.8},{t:14.03,type:"pulse",power:1.1},{t:17.5,type:"intent",mode:"phase",phase:"chaos"},{t:18,type:"intent",mode:"hud",hud:"glitch",on:!0},{t:18.5,type:"bossCamera",pos:[-25,12,8],look:[0,4.6,-24],fov:38,roll:-.12,dur:1.5},{t:18.5,type:"cutscene",chapter:"CHAOS // GLIDE",title:"HOLD THE LEFT",sub:"THE FIELD MOVES. KEEP YOUR HANDS ON THE LINE.",partner:"kai",hold:2.1,glide:"left",glideDur:1.5},{t:20,type:"cutscene",chapter:"CHAPTER 01 // THE LAST FLYER",title:"PLAY LIKE SOMEONE IS STILL LISTENING",sub:"KAI",partner:"kai",hold:3.2,glow:!1},{t:20.05,type:"bossCamera",pos:[0,7.4,17.4],look:[0,4.05,0],fov:46,roll:0,dur:.55},{t:22,type:"bossGlitch",power:.5867330355802551},{t:22,type:"vibe",power:.8},{t:22.03,type:"pulse",power:1.1},{t:24,type:"intent",mode:"hud",hud:"static",on:!0,power:.65},{t:30,type:"intent",mode:"hud",hud:"static",on:!1},{t:30,type:"bossGlitch",power:.7240832105278969},{t:30,type:"vibe",power:.8},{t:30.03,type:"pulse",power:1.1},{t:33.5,type:"intent",mode:"phase",phase:"storm"},{t:34,type:"bossCamera",pos:[27,16,4],look:[0,4.2,-18],fov:42,roll:.15,dur:1.7},{t:34,type:"cutscene",chapter:"CHAOS // GLIDE",title:"HOLD THE RIGHT",sub:"THE FIELD MOVES. KEEP YOUR HANDS ON THE LINE.",partner:"rei",hold:2.3,glide:"right",glideDur:1.7},{t:34,type:"intent",mode:"hud",hud:"heartbeat",on:!0,bpm:184},{t:35.75,type:"bossCamera",pos:[0,7.4,17.4],look:[0,4.05,0],fov:46,roll:0,dur:.55},{t:38,type:"bossGlitch",power:1.0240379339782522},{t:38,type:"vibe",power:.8},{t:38.03,type:"pulse",power:1.1},{t:46,type:"intent",mode:"phase",phase:"chaos"},{t:46,type:"intent",mode:"hud",hud:"guilt",on:!0,value:100},{t:46,type:"bossGlitch",power:.6600891365204007},{t:46,type:"vibe",power:.8},{t:46.03,type:"pulse",power:1.1},{t:47,type:"bossCamera",pos:[0,28,6],look:[0,4,-20],fov:52,roll:0,dur:1.3},{t:47,type:"cutscene",chapter:"CHAOS // GLIDE",title:"LOOK UP",sub:"THE FIELD MOVES. KEEP YOUR HANDS ON THE LINE.",partner:"rei",hold:1.9,glide:"up",glideDur:1.3},{t:48,type:"cutscene",chapter:"CHAPTER 01 // THE LAST FLYER",title:"TWELVE SONGS. SMALLER ROOMS.",sub:"KAI",partner:"kai",hold:3.2,glow:!1},{t:48.35,type:"bossCamera",pos:[0,7.4,17.4],look:[0,4.05,0],fov:46,roll:0,dur:.55},{t:54,type:"bossGlitch",power:.7880006063031033},{t:54,type:"vibe",power:.8},{t:54.03,type:"pulse",power:1.1},{t:61.5,type:"intent",mode:"phase",phase:"chaos2"},{t:61.5,type:"intent",mode:"hud",hud:"guilt",on:!1},{t:62,type:"bossCamera",pos:[-30,5,-4],look:[0,6,-34],fov:34,roll:-.2,dur:1.8},{t:62,type:"cutscene",chapter:"CHAOS // GLIDE",title:"HOLD THE LEFT",sub:"THE FIELD MOVES. KEEP YOUR HANDS ON THE LINE.",partner:"kai",hold:2.4,glide:"left",glideDur:1.8},{t:62,type:"intent",mode:"hud",hud:"glitch",on:!0},{t:62,type:"bossGlitch",power:.6272406593896449},{t:62,type:"vibe",power:.8},{t:62.03,type:"pulse",power:1.1},{t:63.85,type:"bossCamera",pos:[0,7.4,17.4],look:[0,4.05,0],fov:46,roll:0,dur:.55},{t:70,type:"bossGlitch",power:.6766045350348577},{t:70,type:"vibe",power:.8},{t:70.03,type:"pulse",power:1.1},{t:72,type:"intent",mode:"phase",phase:"glide"},{t:72,type:"intent",mode:"hud",hud:"fakeGuilt",on:!0,value:18},{t:73,type:"bossCamera",pos:[24,3,14],look:[0,3.6,-14],fov:60,roll:.18,dur:1.2},{t:73,type:"cutscene",chapter:"CHAOS // GLIDE",title:"HOLD THE RIGHT",sub:"THE FIELD MOVES. KEEP YOUR HANDS ON THE LINE.",partner:"rei",hold:1.7999999999999998,glide:"right",glideDur:1.2},{t:74.25,type:"bossCamera",pos:[0,7.4,17.4],look:[0,4.05,0],fov:46,roll:0,dur:.55},{t:76,type:"intent",mode:"hud",hud:"heartbeat",on:!0,bpm:195},{t:78,type:"bossGlitch",power:.5817128829192371},{t:78,type:"vibe",power:.8},{t:78.03,type:"pulse",power:1.1},{t:81,type:"intent",mode:"hud",hud:"fakeGuilt",on:!1},{t:82,type:"cutscene",chapter:"CHAPTER 02 // THE EMPTY CHAIR",title:"REI COUNTS THE MISSING BARS",sub:"REI",partner:"rei",hold:3.2,glow:!1},{t:86,type:"bossGlitch",power:.5544751294190065},{t:86,type:"vibe",power:.8},{t:86.03,type:"pulse",power:1.1},{t:88,type:"intent",mode:"phase",phase:"storm"},{t:88,type:"intent",mode:"hud",hud:"distort",on:!0},{t:89,type:"bossCamera",pos:[-18,22,18],look:[0,5,-28],fov:58,roll:-.1,dur:1.4},{t:89,type:"cutscene",chapter:"CHAOS // GLIDE",title:"HOLD THE LEFT",sub:"THE FIELD MOVES. KEEP YOUR HANDS ON THE LINE.",partner:"kai",hold:2,glide:"left",glideDur:1.4},{t:90.45,type:"bossCamera",pos:[0,7.4,17.4],look:[0,4.05,0],fov:46,roll:0,dur:.55},{t:94,type:"bossGlitch",power:.6328301580622793},{t:94,type:"vibe",power:.8},{t:94.03,type:"pulse",power:1.1},{t:96,type:"intent",mode:"hud",hud:"distort",on:!1},{t:102,type:"bossGlitch",power:1.0368826017482207},{t:102,type:"vibe",power:.8},{t:102.03,type:"pulse",power:1.1},{t:104,type:"intent",mode:"phase",phase:"chaos"},{t:104,type:"intent",mode:"hud",hud:"heartbeat",on:!1},{t:105,type:"bossCamera",pos:[32,10,8],look:[0,5,-26],fov:36,roll:.22,dur:1.8},{t:105,type:"cutscene",chapter:"CHAOS // GLIDE",title:"HOLD THE RIGHT",sub:"THE FIELD MOVES. KEEP YOUR HANDS ON THE LINE.",partner:"rei",hold:2.4,glide:"right",glideDur:1.8},{t:105,type:"intent",mode:"hud",hud:"yellow",on:!0},{t:106.85,type:"bossCamera",pos:[0,7.4,17.4],look:[0,4.05,0],fov:46,roll:0,dur:.55},{t:110,type:"bossGlitch",power:.9307089433539659},{t:110,type:"vibe",power:.8},{t:110.03,type:"pulse",power:1.1},{t:113,type:"intent",mode:"hud",hud:"yellow",on:!1},{t:117,type:"intent",mode:"phase",phase:"memory"},{t:118,type:"bossCamera",pos:[0,36,12],look:[0,2,-34],fov:62,roll:0,dur:2},{t:118,type:"cutscene",chapter:"CHAOS // GLIDE",title:"LOOK UP",sub:"THE FIELD MOVES. KEEP YOUR HANDS ON THE LINE.",partner:"rei",hold:2.4,glide:"up",glideDur:2},{t:118,type:"intent",mode:"hud",hud:"static",on:!0,power:.55},{t:118,type:"bossGlitch",power:.7219702464761213},{t:118,type:"vibe",power:.8},{t:118.03,type:"pulse",power:1.1},{t:119,type:"cutscene",chapter:"MEMORY // 01 / 02 / ??",title:"THE PICTURES DO NOT AGREE",sub:"REI",partner:"rei",hold:3.2,glow:!1},{t:120.05,type:"bossCamera",pos:[0,7.4,17.4],look:[0,4.05,0],fov:46,roll:0,dur:.55},{t:126,type:"bossGlitch",power:.9425496521405876},{t:126,type:"vibe",power:.8},{t:126.03,type:"pulse",power:1.1},{t:134,type:"bossGlitch",power:.8777632979443297},{t:134,type:"vibe",power:.8},{t:134.03,type:"pulse",power:1.1},{t:139,type:"intent",mode:"phase",phase:"collapse"},{t:139,type:"intent",mode:"hud",hud:"static",on:!0,power:1},{t:140,type:"bossCamera",pos:[-38,14,2],look:[0,4.8,-20],fov:33,roll:-.25,dur:1.6},{t:140,type:"cutscene",chapter:"CHAOS // GLIDE",title:"HOLD THE LEFT",sub:"THE FIELD MOVES. KEEP YOUR HANDS ON THE LINE.",partner:"kai",hold:2.2,glide:"left",glideDur:1.6},{t:141.65,type:"bossCamera",pos:[0,7.4,17.4],look:[0,4.05,0],fov:46,roll:0,dur:.55},{t:142,type:"bossGlitch",power:.8715447717811913},{t:142,type:"vibe",power:.8},{t:142.03,type:"pulse",power:1.1},{t:145,type:"intent",mode:"hud",hud:"static",on:!1},{t:146,type:"intent",mode:"hud",hud:"bright",on:!0},{t:150,type:"bossGlitch",power:.9792830737540499},{t:150,type:"vibe",power:.8},{t:150.03,type:"pulse",power:1.1},{t:157,type:"intent",mode:"phase",phase:"chaos2"},{t:157,type:"intent",mode:"hud",hud:"bright",on:!1},{t:158,type:"bossCamera",pos:[34,24,-8],look:[0,5.6,-32],fov:46,roll:.24,dur:1.7},{t:158,type:"cutscene",chapter:"CHAOS // GLIDE",title:"HOLD THE RIGHT",sub:"THE FIELD MOVES. KEEP YOUR HANDS ON THE LINE.",partner:"rei",hold:2.3,glide:"right",glideDur:1.7},{t:158,type:"intent",mode:"hud",hud:"rainbow",on:!0},{t:158,type:"bossGlitch",power:.5763744462281466},{t:158,type:"vibe",power:.8},{t:158.03,type:"pulse",power:1.1},{t:159.75,type:"bossCamera",pos:[0,7.4,17.4],look:[0,4.05,0],fov:46,roll:0,dur:.55},{t:160,type:"cutscene",chapter:"CHAPTER 03 // STILL HERE",title:"DO NOT MOVE THE JACKET",sub:"KAI",partner:"kai",hold:3.2,glow:!1},{t:166,type:"bossGlitch",power:.5931418920634315},{t:166,type:"vibe",power:.8},{t:166.03,type:"pulse",power:1.1},{t:174,type:"bossGlitch",power:.9259208696428687},{t:174,type:"vibe",power:.8},{t:174.03,type:"pulse",power:1.1},{t:181,type:"intent",mode:"phase",phase:"chaos2"},{t:181,type:"intent",mode:"hud",hud:"white",on:!0},{t:182,type:"bossCamera",pos:[-26,4,18],look:[0,3.8,-12],fov:64,roll:-.16,dur:1.2},{t:182,type:"cutscene",chapter:"CHAOS // GLIDE",title:"HOLD THE LEFT",sub:"THE FIELD MOVES. KEEP YOUR HANDS ON THE LINE.",partner:"kai",hold:1.7999999999999998,glide:"left",glideDur:1.2},{t:182,type:"intent",mode:"hud",hud:"white",on:!1},{t:182,type:"bossGlitch",power:.8535762823419646},{t:182,type:"vibe",power:.8},{t:182.03,type:"pulse",power:1.1},{t:182.1,type:"intent",mode:"hud",hud:"fakeGuilt",on:!0,value:14},{t:183,type:"cutscene",chapter:"CHAPTER ?? // SIGNAL NOT FOUND",title:"THE THIRD VOICE IS UNDER THE STATIC",sub:"NOVA",partner:"nova",hold:3.2,glow:!0},{t:183.25,type:"bossCamera",pos:[0,7.4,17.4],look:[0,4.05,0],fov:46,roll:0,dur:.55},{t:190,type:"bossGlitch",power:.979399244952947},{t:190,type:"vibe",power:.8},{t:190.03,type:"pulse",power:1.1},{t:196,type:"bossCamera",pos:[0,42,2],look:[0,2.5,-26],fov:70,roll:0,dur:2.2},{t:196,type:"cutscene",chapter:"CHAOS // GLIDE",title:"LOOK UP",sub:"THE FIELD MOVES. KEEP YOUR HANDS ON THE LINE.",partner:"rei",hold:2.4,glide:"up",glideDur:2.2},{t:198,type:"bossGlitch",power:.9462392903631553},{t:198,type:"vibe",power:.8},{t:198.03,type:"pulse",power:1.1},{t:198.25,type:"bossCamera",pos:[0,7.4,17.4],look:[0,4.05,0],fov:46,roll:0,dur:.55},{t:199,type:"intent",mode:"hud",hud:"fakeGuilt",on:!1},{t:199.2,type:"intent",mode:"hud",hud:"static",on:!0,power:1},{t:204.5,type:"intent",mode:"phase",phase:"dawn"},{t:204.5,type:"intent",mode:"hud",hud:"clear"},{t:204.5,type:"intent",mode:"hud",hud:"rainbow",on:!0},{t:204.5,type:"cutscene",chapter:"CHAPTER 03 // DAWN",title:"STILL HERE",sub:"THE OCEAN KEEPS THE MISSING PART",partner:"rei",hold:5.2},{t:204.5,type:"intent",mode:"hud",hud:"static",on:!1},{t:205.2,type:"cutscene",chapter:"CHAPTER 03 // DAWN",title:"THE BAND IS QUIET. THE OCEAN IS NOT.",sub:"REI",partner:"rei",hold:3.2,glow:!1}],swings:[]},Na=[{id:"cryout",title:"CRYOUT",shortTitle:"CRYOUT",artist:"ORIGINAL TRACK",bpm:100,duration:138.1,audio:"./audio/cryout.mp3",difficulty:"ADVANCED",laneLabel:"4 · 6 · 8",blurb:"Neon field • 360° camera • 8-lane climax",accent:"#5ee7ff",chart:Zp,fadeStart:131.4,fadeEnd:133.4},{id:"world",title:"WORLD YEARNING FOR AN END",shortTitle:"WORLD YEARNING",artist:"ORIGINAL TRACK",bpm:120,duration:143.47,audio:"./audio/world-yearning.mp3",difficulty:"HARD",laneLabel:"4 · 6",blurb:"City intro • diagonal lanes • thumb-hard patterns",accent:"#ffb45e",chart:qp,fadeStart:140.8,fadeEnd:142.9},{id:"chronostasis",title:"CHRONOSTASIS",shortTitle:"CHRONOSTASIS",artist:"ORIGINAL TRACK",bpm:99.4,duration:142.1,audio:"./audio/chronostasis.mp3",difficulty:"EXPERT",laneLabel:"4 · 6",blurb:"Clockwork skyline • frozen time • swinging pendulum",accent:"#ffd166",chart:Kp,fadeStart:138.4,fadeEnd:140},{id:"untouchable",title:"THE UNTOUCHABLE OF f RA IA'S LAND",shortTitle:"THE UNTOUCHABLE",artist:"f RA IA",bpm:111.1,bpmLabel:"111 / 96 BPM",duration:147.54,audio:"./audio/untouchable.mp3",difficulty:"BOSS",laneLabel:"4 · 6 · 8",blurb:"Gothic nave • cathedral clock • free-flying notes",accent:"#ff3b5c",chart:$p,boss:!0,theme:"untouchable",fadeStart:139.8,fadeEnd:141.8,clearTag:"THE UNTOUCHABLE // FELLED"},{id:"intention",title:"INTENTION",shortTitle:"INTENTION",artist:"ORIGINAL TRACK",bpm:180,bpmLabel:"180 / 195 BPM",duration:213.5,audio:"./audio/intention.mp3",difficulty:"BOSS",laneLabel:"1 · 2 · 4 · 6",blurb:"Ocean void • golden libra • guilt engine",accent:"#ffd166",chart:jp,boss:!0,theme:"intention",fadeStart:209.6,fadeEnd:212.2,clearTag:"INTENTION // FORGIVEN"}],Qp="cryout",Bl=Object.fromEntries(Na.map(i=>[i.id,i])),Cc={intention:Jp},na=[{id:"kai",num:"01",name:"KAI",role:"VOCAL / GUITAR",tagline:"THE ONE WHO STILL BELIEVES",portrait:"./art/kai.svg",accent:"#5ee7ff",accent2:"#ff5fd2",aura:"rgba(94,231,255,.42)",accessories:"ear cuff · choker · guitar-pick chain · stage headphones",story:["KAI founded CRYOUT out of a bedroom and a borrowed amp. For three years the band played every basement in the city. Now the rooms are half empty and the booker has stopped calling.","He still prints flyers for shows nobody attends. He tells the others it is a slump. He knows the band is dying, and he is terrified that the songs will outlive the people who made them."],quote:"“If I stop moving, the silence wins.”",file:"CHAPTER 01 // THE LAST FLYER"},{id:"rei",num:"02",name:"REI",role:"BASS / SIGNAL",tagline:"THE ONE WHO KEEPS THE DISTANCE",portrait:"./art/rei.svg",accent:"#ffd166",accent2:"#65e5ff",aura:"rgba(255,209,102,.4)",accessories:"crescent clips · wired earbuds · constellation hoodie · pick necklace",story:["REI joined through a classified ad and has spoken fewer than a hundred words to KAI since. She answers in basslines. She stands at the edge of every photo, as if she might leave before the shutter.","She is not cold. She is waiting. The third chair in the practice room still has NOVA’s jacket on it, and REI is the only one who has not moved it."],quote:"“I can hear the part that is missing.”",file:"CHAPTER 02 // THE EMPTY CHAIR"}],Ki={id:"nova",num:"??",name:"NOVA",role:"KEYS / VOICE",portrait:"./art/nova.svg",accent:"#ff3b5c",quote:"“Do not look for me in the mix.”",file:"CHAPTER ?? // SIGNAL NOT FOUND"},ef={lore:"KAI’s band CRYOUT is dying: the same twelve songs, smaller rooms, a van that needs a jump every morning. REI keeps her distance from everyone except the low end, because getting close means admitting that NOVA is not coming back. The ocean in INTENTION is the place where guilt becomes sound."};function Wd(i){return na.find(e=>e.id===i)||na[0]}function tf(i){const e=document.documentElement;e.style.setProperty("--partner",i.accent),e.style.setProperty("--partner-2",i.accent2),e.style.setProperty("--partner-aura",i.aura)}const zl="180",nf=0,Rc=1,af=2,Xd=1,of=2,pi=3,Ii=0,En=1,Fn=2,hi=0,Rn=1,vt=2,Pc=3,Lc=4,rf=5,Ji=100,sf=101,lf=102,cf=103,df=104,uf=200,pf=201,ff=202,hf=203,zs=204,Gs=205,mf=206,gf=207,yf=208,_f=209,vf=210,xf=211,bf=212,Mf=213,wf=214,Hs=0,Vs=1,Ws=2,Ga=3,Xs=4,Ys=5,Zs=6,qs=7,Yd=0,Sf=1,Tf=2,Pi=0,Zd=1,qd=2,Kd=3,Gl=4,$d=5,jd=6,Jd=7,Qd=300,Ha=301,Va=302,Ks=303,$s=304,Nr=306,aa=1e3,Ri=1001,js=1002,qn=1003,Ef=1004,zo=1005,Qn=1006,as=1007,ta=1008,_i=1009,eu=1010,tu=1011,xo=1012,Hl=1013,oa=1014,fi=1015,mi=1016,Vl=1017,Wl=1018,bo=1020,nu=35902,iu=35899,au=1021,ou=1022,Zn=1023,Mo=1026,wo=1027,ru=1028,Xl=1029,su=1030,Yl=1031,Zl=1033,xr=33776,br=33777,Mr=33778,wr=33779,Js=35840,Qs=35841,el=35842,tl=35843,nl=36196,il=37492,al=37496,ol=37808,rl=37809,sl=37810,ll=37811,cl=37812,dl=37813,ul=37814,pl=37815,fl=37816,hl=37817,ml=37818,gl=37819,yl=37820,_l=37821,vl=36492,xl=36494,bl=36495,Ml=36283,wl=36284,Sl=36285,Tl=36286,Af=3200,Cf=3201,Rf=0,Pf=1,Ci="",xn="srgb",Wa="srgb-linear",Cr="linear",Ut="srgb",ha=7680,Ic=519,Lf=512,If=513,Df=514,lu=515,kf=516,Nf=517,Uf=518,Of=519,El=35044,Dc="300 es",ei=2e3,Rr=2001;class Ka{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let o=0,s=a.length;o<s;o++)a[o].call(this,e);e.target=null}}}const _n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kc=1234567;const ho=Math.PI/180,So=180/Math.PI;function gi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function bt(i,e,t){return Math.max(e,Math.min(t,i))}function ql(i,e){return(i%e+e)%e}function Ff(i,e,t,n,a){return n+(i-e)*(a-n)/(t-e)}function Bf(i,e,t){return i!==e?(t-i)/(e-i):0}function mo(i,e,t){return(1-t)*i+t*e}function zf(i,e,t,n){return mo(i,e,1-Math.exp(-t*n))}function Gf(i,e=1){return e-Math.abs(ql(i,e*2)-e)}function Hf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Vf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Wf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Xf(i,e){return i+Math.random()*(e-i)}function Yf(i){return i*(.5-Math.random())}function Zf(i){i!==void 0&&(kc=i);let e=kc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qf(i){return i*ho}function Kf(i){return i*So}function $f(i){return(i&i-1)===0&&i!==0}function jf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Jf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Qf(i,e,t,n,a){const o=Math.cos,s=Math.sin,r=o(t/2),l=s(t/2),c=o((e+n)/2),d=s((e+n)/2),u=o((e-n)/2),f=s((e-n)/2),h=o((n-e)/2),g=s((n-e)/2);switch(a){case"XYX":i.set(r*d,l*u,l*f,r*c);break;case"YZY":i.set(l*f,r*d,l*u,r*c);break;case"ZXZ":i.set(l*u,l*f,r*d,r*c);break;case"XZX":i.set(r*d,l*g,l*h,r*c);break;case"YXY":i.set(l*h,r*d,l*g,r*c);break;case"ZYZ":i.set(l*g,l*h,r*d,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ot(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Go={DEG2RAD:ho,RAD2DEG:So,generateUUID:gi,clamp:bt,euclideanModulo:ql,mapLinear:Ff,inverseLerp:Bf,lerp:mo,damp:zf,pingpong:Gf,smoothstep:Hf,smootherstep:Vf,randInt:Wf,randFloat:Xf,randFloatSpread:Yf,seededRandom:Zf,degToRad:qf,radToDeg:Kf,isPowerOfTwo:$f,ceilPowerOfTwo:jf,floorPowerOfTwo:Jf,setQuaternionFromProperEuler:Qf,normalize:Ot,denormalize:Yn};class it{constructor(e=0,t=0){it.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*a+e.x,this.y=o*a+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ro{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,o,s,r){let l=n[a+0],c=n[a+1],d=n[a+2],u=n[a+3];const f=o[s+0],h=o[s+1],g=o[s+2],x=o[s+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u;return}if(r===1){e[t+0]=f,e[t+1]=h,e[t+2]=g,e[t+3]=x;return}if(u!==x||l!==f||c!==h||d!==g){let m=1-r;const p=l*f+c*h+d*g+u*x,A=p>=0?1:-1,C=1-p*p;if(C>Number.EPSILON){const I=Math.sqrt(C),L=Math.atan2(I,p*A);m=Math.sin(m*L)/I,r=Math.sin(r*L)/I}const T=r*A;if(l=l*m+f*T,c=c*m+h*T,d=d*m+g*T,u=u*m+x*T,m===1-r){const I=1/Math.sqrt(l*l+c*c+d*d+u*u);l*=I,c*=I,d*=I,u*=I}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,a,o,s){const r=n[a],l=n[a+1],c=n[a+2],d=n[a+3],u=o[s],f=o[s+1],h=o[s+2],g=o[s+3];return e[t]=r*g+d*u+l*h-c*f,e[t+1]=l*g+d*f+c*u-r*h,e[t+2]=c*g+d*h+r*f-l*u,e[t+3]=d*g-r*u-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,o=e._z,s=e._order,r=Math.cos,l=Math.sin,c=r(n/2),d=r(a/2),u=r(o/2),f=l(n/2),h=l(a/2),g=l(o/2);switch(s){case"XYZ":this._x=f*d*u+c*h*g,this._y=c*h*u-f*d*g,this._z=c*d*g+f*h*u,this._w=c*d*u-f*h*g;break;case"YXZ":this._x=f*d*u+c*h*g,this._y=c*h*u-f*d*g,this._z=c*d*g-f*h*u,this._w=c*d*u+f*h*g;break;case"ZXY":this._x=f*d*u-c*h*g,this._y=c*h*u+f*d*g,this._z=c*d*g+f*h*u,this._w=c*d*u-f*h*g;break;case"ZYX":this._x=f*d*u-c*h*g,this._y=c*h*u+f*d*g,this._z=c*d*g-f*h*u,this._w=c*d*u+f*h*g;break;case"YZX":this._x=f*d*u+c*h*g,this._y=c*h*u+f*d*g,this._z=c*d*g-f*h*u,this._w=c*d*u-f*h*g;break;case"XZY":this._x=f*d*u-c*h*g,this._y=c*h*u-f*d*g,this._z=c*d*g+f*h*u,this._w=c*d*u+f*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],o=t[8],s=t[1],r=t[5],l=t[9],c=t[2],d=t[6],u=t[10],f=n+r+u;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(d-l)*h,this._y=(o-c)*h,this._z=(s-a)*h}else if(n>r&&n>u){const h=2*Math.sqrt(1+n-r-u);this._w=(d-l)/h,this._x=.25*h,this._y=(a+s)/h,this._z=(o+c)/h}else if(r>u){const h=2*Math.sqrt(1+r-n-u);this._w=(o-c)/h,this._x=(a+s)/h,this._y=.25*h,this._z=(l+d)/h}else{const h=2*Math.sqrt(1+u-n-r);this._w=(s-a)/h,this._x=(o+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,o=e._z,s=e._w,r=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+s*r+a*c-o*l,this._y=a*d+s*l+o*r-n*c,this._z=o*d+s*c+n*l-a*r,this._w=s*d-n*r-a*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,o=this._z,s=this._w;let r=s*e._w+n*e._x+a*e._y+o*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=s,this._x=n,this._y=a,this._z=o,this;const l=1-r*r;if(l<=Number.EPSILON){const h=1-t;return this._w=h*s+t*this._w,this._x=h*n+t*this._x,this._y=h*a+t*this._y,this._z=h*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,r),u=Math.sin((1-t)*d)/c,f=Math.sin(t*d)/c;return this._w=s*u+this._w*f,this._x=n*u+this._x*f,this._y=a*u+this._y*f,this._z=o*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*a,this.y=o[1]*t+o[4]*n+o[7]*a,this.z=o[2]*t+o[5]*n+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*a+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*a+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*a+o[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,o=e.x,s=e.y,r=e.z,l=e.w,c=2*(s*a-r*n),d=2*(r*t-o*a),u=2*(o*n-s*t);return this.x=t+l*c+s*u-r*d,this.y=n+l*d+r*c-o*u,this.z=a+l*u+o*d-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*a,this.y=o[1]*t+o[5]*n+o[9]*a,this.z=o[2]*t+o[6]*n+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,o=e.z,s=t.x,r=t.y,l=t.z;return this.x=a*l-o*r,this.y=o*s-n*l,this.z=n*r-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return os.copy(this).projectOnVector(e),this.sub(os)}reflect(e){return this.sub(os.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(bt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const os=new U,Nc=new Ro;class pt{constructor(e,t,n,a,o,s,r,l,c){pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,s,r,l,c)}set(e,t,n,a,o,s,r,l,c){const d=this.elements;return d[0]=e,d[1]=a,d[2]=r,d[3]=t,d[4]=o,d[5]=l,d[6]=n,d[7]=s,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,s=n[0],r=n[3],l=n[6],c=n[1],d=n[4],u=n[7],f=n[2],h=n[5],g=n[8],x=a[0],m=a[3],p=a[6],A=a[1],C=a[4],T=a[7],I=a[2],L=a[5],k=a[8];return o[0]=s*x+r*A+l*I,o[3]=s*m+r*C+l*L,o[6]=s*p+r*T+l*k,o[1]=c*x+d*A+u*I,o[4]=c*m+d*C+u*L,o[7]=c*p+d*T+u*k,o[2]=f*x+h*A+g*I,o[5]=f*m+h*C+g*L,o[8]=f*p+h*T+g*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],s=e[4],r=e[5],l=e[6],c=e[7],d=e[8];return t*s*d-t*r*c-n*o*d+n*r*l+a*o*c-a*s*l}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],s=e[4],r=e[5],l=e[6],c=e[7],d=e[8],u=d*s-r*c,f=r*l-d*o,h=c*o-s*l,g=t*u+n*f+a*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(a*c-d*n)*x,e[2]=(r*n-a*s)*x,e[3]=f*x,e[4]=(d*t-a*l)*x,e[5]=(a*o-r*t)*x,e[6]=h*x,e[7]=(n*l-c*t)*x,e[8]=(s*t-n*o)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,o,s,r){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*r)+s+e,-a*c,a*l,-a*(-c*s+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(rs.makeScale(e,t)),this}rotate(e){return this.premultiply(rs.makeRotation(-e)),this}translate(e,t){return this.premultiply(rs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rs=new pt;function cu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function To(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eh(){const i=To("canvas");return i.style.display="block",i}const Uc={};function Eo(i){i in Uc||(Uc[i]=!0,console.warn(i))}function th(i,e,t){return new Promise(function(n,a){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const Oc=new pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fc=new pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function nh(){const i={enabled:!0,workingColorSpace:Wa,spaces:{},convert:function(a,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===Ut&&(a.r=yi(a.r),a.g=yi(a.g),a.b=yi(a.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Ut&&(a.r=Ua(a.r),a.g=Ua(a.g),a.b=Ua(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ci?Cr:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,s){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return Eo("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return Eo("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Wa]:{primaries:e,whitePoint:n,transfer:Cr,toXYZ:Oc,fromXYZ:Fc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:xn},outputColorSpaceConfig:{drawingBufferColorSpace:xn}},[xn]:{primaries:e,whitePoint:n,transfer:Ut,toXYZ:Oc,fromXYZ:Fc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:xn}}}),i}const Ct=nh();function yi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ua(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ma;class ih{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ma===void 0&&(ma=To("canvas")),ma.width=e.width,ma.height=e.height;const a=ma.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=ma}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=To("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),o=a.data;for(let s=0;s<o.length;s++)o[s]=yi(o[s]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(yi(t[n]/255)*255):t[n]=yi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ah=0;class Kl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ah++}),this.uuid=gi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let s=0,r=a.length;s<r;s++)a[s].isDataTexture?o.push(ss(a[s].image)):o.push(ss(a[s]))}else o=ss(a);n.url=o}return t||(e.images[this.uuid]=n),n}}function ss(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ih.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let oh=0;const ls=new U;class bn extends Ka{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,n=Ri,a=Ri,o=Qn,s=ta,r=Zn,l=_i,c=bn.DEFAULT_ANISOTROPY,d=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:oh++}),this.uuid=gi(),this.name="",this.source=new Kl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ls).x}get height(){return this.source.getSize(ls).y}get depth(){return this.source.getSize(ls).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case aa:e.x=e.x-Math.floor(e.x);break;case Ri:e.x=e.x<0?0:1;break;case js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case aa:e.y=e.y-Math.floor(e.y);break;case Ri:e.y=e.y<0?0:1;break;case js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Qd;bn.DEFAULT_ANISOTROPY=1;class Qt{constructor(e=0,t=0,n=0,a=1){Qt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*a+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*a+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*a+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,o;const l=e.elements,c=l[0],d=l[4],u=l[8],f=l[1],h=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(d-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(c+1)/2,T=(h+1)/2,I=(p+1)/2,L=(d+f)/4,k=(u+x)/4,P=(g+m)/4;return C>T&&C>I?C<.01?(n=0,a=.707106781,o=.707106781):(n=Math.sqrt(C),a=L/n,o=k/n):T>I?T<.01?(n=.707106781,a=0,o=.707106781):(a=Math.sqrt(T),n=L/a,o=P/a):I<.01?(n=.707106781,a=.707106781,o=0):(o=Math.sqrt(I),n=k/o,a=P/o),this.set(n,a,o,t),this}let A=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-d)*(f-d));return Math.abs(A)<.001&&(A=1),this.x=(m-g)/A,this.y=(u-x)/A,this.z=(f-d)/A,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=bt(this.x,e.x,t.x),this.y=bt(this.y,e.y,t.y),this.z=bt(this.z,e.z,t.z),this.w=bt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=bt(this.x,e,t),this.y=bt(this.y,e,t),this.z=bt(this.z,e,t),this.w=bt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(bt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rh extends Ka{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Qt(0,0,e,t),this.scissorTest=!1,this.viewport=new Qt(0,0,e,t);const a={width:e,height:t,depth:n.depth},o=new bn(a);this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=o.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Qn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Kl(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends rh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class du extends bn{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=qn,this.minFilter=qn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sh extends bn{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=qn,this.minFilter=qn,this.wrapR=Ri,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,r=o.count;s<r;s++)e.isMesh===!0?e.getVertexPosition(s,Vn):Vn.fromBufferAttribute(o,s),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ho.copy(n.boundingBox)),Ho.applyMatrix4(e.matrixWorld),this.union(Ho)}const a=e.children;for(let o=0,s=a.length;o<s;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),Vo.subVectors(this.max,io),ga.subVectors(e.a,io),ya.subVectors(e.b,io),_a.subVectors(e.c,io),Mi.subVectors(ya,ga),wi.subVectors(_a,ya),Vi.subVectors(ga,_a);let t=[0,-Mi.z,Mi.y,0,-wi.z,wi.y,0,-Vi.z,Vi.y,Mi.z,0,-Mi.x,wi.z,0,-wi.x,Vi.z,0,-Vi.x,-Mi.y,Mi.x,0,-wi.y,wi.x,0,-Vi.y,Vi.x,0];return!cs(t,ga,ya,_a,Vo)||(t=[1,0,0,0,1,0,0,0,1],!cs(t,ga,ya,_a,Vo))?!1:(Wo.crossVectors(Mi,wi),t=[Wo.x,Wo.y,Wo.z],cs(t,ga,ya,_a,Vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const si=[new U,new U,new U,new U,new U,new U,new U,new U],Vn=new U,Ho=new Po,ga=new U,ya=new U,_a=new U,Mi=new U,wi=new U,Vi=new U,io=new U,Vo=new U,Wo=new U,Wi=new U;function cs(i,e,t,n,a){for(let o=0,s=i.length-3;o<=s;o+=3){Wi.fromArray(i,o);const r=a.x*Math.abs(Wi.x)+a.y*Math.abs(Wi.y)+a.z*Math.abs(Wi.z),l=e.dot(Wi),c=t.dot(Wi),d=n.dot(Wi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>r)return!1}return!0}const lh=new Po,ao=new U,ds=new U;class Lo{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):lh.setFromPoints(e).getCenter(n);let a=0;for(let o=0,s=e.length;o<s;o++)a=Math.max(a,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ao.subVectors(e,this.center);const t=ao.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(ao,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ds.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ao.copy(e.center).add(ds)),this.expandByPoint(ao.copy(e.center).sub(ds))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const li=new U,us=new U,Xo=new U,Si=new U,ps=new U,Yo=new U,fs=new U;class $l{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){us.copy(e).add(t).multiplyScalar(.5),Xo.copy(t).sub(e).normalize(),Si.copy(this.origin).sub(us);const o=e.distanceTo(t)*.5,s=-this.direction.dot(Xo),r=Si.dot(this.direction),l=-Si.dot(Xo),c=Si.lengthSq(),d=Math.abs(1-s*s);let u,f,h,g;if(d>0)if(u=s*l-r,f=s*r-l,g=o*d,u>=0)if(f>=-g)if(f<=g){const x=1/d;u*=x,f*=x,h=u*(u+s*f+2*r)+f*(s*u+f+2*l)+c}else f=o,u=Math.max(0,-(s*f+r)),h=-u*u+f*(f+2*l)+c;else f=-o,u=Math.max(0,-(s*f+r)),h=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-s*o+r)),f=u>0?-o:Math.min(Math.max(-o,-l),o),h=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-o,-l),o),h=f*(f+2*l)+c):(u=Math.max(0,-(s*o+r)),f=u>0?o:Math.min(Math.max(-o,-l),o),h=-u*u+f*(f+2*l)+c);else f=s>0?-o:o,u=Math.max(0,-(s*f+r)),h=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),a&&a.copy(us).addScaledVector(Xo,f),h}intersectSphere(e,t){li.subVectors(e.center,this.origin);const n=li.dot(this.direction),a=li.dot(li)-n*n,o=e.radius*e.radius;if(a>o)return null;const s=Math.sqrt(o-a),r=n-s,l=n+s;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,o,s,r,l;const c=1/this.direction.x,d=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,a=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,a=(e.min.x-f.x)*c),d>=0?(o=(e.min.y-f.y)*d,s=(e.max.y-f.y)*d):(o=(e.max.y-f.y)*d,s=(e.min.y-f.y)*d),n>s||o>a||((o>n||isNaN(n))&&(n=o),(s<a||isNaN(a))&&(a=s),u>=0?(r=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(r=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||r>a)||((r>n||n!==n)&&(n=r),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,n,a,o){ps.subVectors(t,e),Yo.subVectors(n,e),fs.crossVectors(ps,Yo);let s=this.direction.dot(fs),r;if(s>0){if(a)return null;r=1}else if(s<0)r=-1,s=-s;else return null;Si.subVectors(this.origin,e);const l=r*this.direction.dot(Yo.crossVectors(Si,Yo));if(l<0)return null;const c=r*this.direction.dot(ps.cross(Si));if(c<0||l+c>s)return null;const d=-r*Si.dot(fs);return d<0?null:this.at(d/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Jt{constructor(e,t,n,a,o,s,r,l,c,d,u,f,h,g,x,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,s,r,l,c,d,u,f,h,g,x,m)}set(e,t,n,a,o,s,r,l,c,d,u,f,h,g,x,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=a,p[1]=o,p[5]=s,p[9]=r,p[13]=l,p[2]=c,p[6]=d,p[10]=u,p[14]=f,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/va.setFromMatrixColumn(e,0).length(),o=1/va.setFromMatrixColumn(e,1).length(),s=1/va.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,o=e.z,s=Math.cos(n),r=Math.sin(n),l=Math.cos(a),c=Math.sin(a),d=Math.cos(o),u=Math.sin(o);if(e.order==="XYZ"){const f=s*d,h=s*u,g=r*d,x=r*u;t[0]=l*d,t[4]=-l*u,t[8]=c,t[1]=h+g*c,t[5]=f-x*c,t[9]=-r*l,t[2]=x-f*c,t[6]=g+h*c,t[10]=s*l}else if(e.order==="YXZ"){const f=l*d,h=l*u,g=c*d,x=c*u;t[0]=f+x*r,t[4]=g*r-h,t[8]=s*c,t[1]=s*u,t[5]=s*d,t[9]=-r,t[2]=h*r-g,t[6]=x+f*r,t[10]=s*l}else if(e.order==="ZXY"){const f=l*d,h=l*u,g=c*d,x=c*u;t[0]=f-x*r,t[4]=-s*u,t[8]=g+h*r,t[1]=h+g*r,t[5]=s*d,t[9]=x-f*r,t[2]=-s*c,t[6]=r,t[10]=s*l}else if(e.order==="ZYX"){const f=s*d,h=s*u,g=r*d,x=r*u;t[0]=l*d,t[4]=g*c-h,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=h*c-g,t[2]=-c,t[6]=r*l,t[10]=s*l}else if(e.order==="YZX"){const f=s*l,h=s*c,g=r*l,x=r*c;t[0]=l*d,t[4]=x-f*u,t[8]=g*u+h,t[1]=u,t[5]=s*d,t[9]=-r*d,t[2]=-c*d,t[6]=h*u+g,t[10]=f-x*u}else if(e.order==="XZY"){const f=s*l,h=s*c,g=r*l,x=r*c;t[0]=l*d,t[4]=-u,t[8]=c*d,t[1]=f*u+x,t[5]=s*d,t[9]=h*u-g,t[2]=g*u-h,t[6]=r*d,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ch,e,dh)}lookAt(e,t,n){const a=this.elements;return In.subVectors(e,t),In.lengthSq()===0&&(In.z=1),In.normalize(),Ti.crossVectors(n,In),Ti.lengthSq()===0&&(Math.abs(n.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),Ti.crossVectors(n,In)),Ti.normalize(),Zo.crossVectors(In,Ti),a[0]=Ti.x,a[4]=Zo.x,a[8]=In.x,a[1]=Ti.y,a[5]=Zo.y,a[9]=In.y,a[2]=Ti.z,a[6]=Zo.z,a[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,s=n[0],r=n[4],l=n[8],c=n[12],d=n[1],u=n[5],f=n[9],h=n[13],g=n[2],x=n[6],m=n[10],p=n[14],A=n[3],C=n[7],T=n[11],I=n[15],L=a[0],k=a[4],P=a[8],S=a[12],b=a[1],N=a[5],W=a[9],ee=a[13],ce=a[2],ie=a[6],le=a[10],ue=a[14],te=a[3],Me=a[7],Ae=a[11],ze=a[15];return o[0]=s*L+r*b+l*ce+c*te,o[4]=s*k+r*N+l*ie+c*Me,o[8]=s*P+r*W+l*le+c*Ae,o[12]=s*S+r*ee+l*ue+c*ze,o[1]=d*L+u*b+f*ce+h*te,o[5]=d*k+u*N+f*ie+h*Me,o[9]=d*P+u*W+f*le+h*Ae,o[13]=d*S+u*ee+f*ue+h*ze,o[2]=g*L+x*b+m*ce+p*te,o[6]=g*k+x*N+m*ie+p*Me,o[10]=g*P+x*W+m*le+p*Ae,o[14]=g*S+x*ee+m*ue+p*ze,o[3]=A*L+C*b+T*ce+I*te,o[7]=A*k+C*N+T*ie+I*Me,o[11]=A*P+C*W+T*le+I*Ae,o[15]=A*S+C*ee+T*ue+I*ze,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],o=e[12],s=e[1],r=e[5],l=e[9],c=e[13],d=e[2],u=e[6],f=e[10],h=e[14],g=e[3],x=e[7],m=e[11],p=e[15];return g*(+o*l*u-a*c*u-o*r*f+n*c*f+a*r*h-n*l*h)+x*(+t*l*h-t*c*f+o*s*f-a*s*h+a*c*d-o*l*d)+m*(+t*c*u-t*r*h-o*s*u+n*s*h+o*r*d-n*c*d)+p*(-a*r*d-t*l*u+t*r*f+a*s*u-n*s*f+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],s=e[4],r=e[5],l=e[6],c=e[7],d=e[8],u=e[9],f=e[10],h=e[11],g=e[12],x=e[13],m=e[14],p=e[15],A=u*m*c-x*f*c+x*l*h-r*m*h-u*l*p+r*f*p,C=g*f*c-d*m*c-g*l*h+s*m*h+d*l*p-s*f*p,T=d*x*c-g*u*c+g*r*h-s*x*h-d*r*p+s*u*p,I=g*u*l-d*x*l-g*r*f+s*x*f+d*r*m-s*u*m,L=t*A+n*C+a*T+o*I;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const k=1/L;return e[0]=A*k,e[1]=(x*f*o-u*m*o-x*a*h+n*m*h+u*a*p-n*f*p)*k,e[2]=(r*m*o-x*l*o+x*a*c-n*m*c-r*a*p+n*l*p)*k,e[3]=(u*l*o-r*f*o-u*a*c+n*f*c+r*a*h-n*l*h)*k,e[4]=C*k,e[5]=(d*m*o-g*f*o+g*a*h-t*m*h-d*a*p+t*f*p)*k,e[6]=(g*l*o-s*m*o-g*a*c+t*m*c+s*a*p-t*l*p)*k,e[7]=(s*f*o-d*l*o+d*a*c-t*f*c-s*a*h+t*l*h)*k,e[8]=T*k,e[9]=(g*u*o-d*x*o-g*n*h+t*x*h+d*n*p-t*u*p)*k,e[10]=(s*x*o-g*r*o+g*n*c-t*x*c-s*n*p+t*r*p)*k,e[11]=(d*r*o-s*u*o-d*n*c+t*u*c+s*n*h-t*r*h)*k,e[12]=I*k,e[13]=(d*x*a-g*u*a+g*n*f-t*x*f-d*n*m+t*u*m)*k,e[14]=(g*r*a-s*x*a-g*n*l+t*x*l+s*n*m-t*r*m)*k,e[15]=(s*u*a-d*r*a+d*n*l-t*u*l-s*n*f+t*r*f)*k,this}scale(e){const t=this.elements,n=e.x,a=e.y,o=e.z;return t[0]*=n,t[4]*=a,t[8]*=o,t[1]*=n,t[5]*=a,t[9]*=o,t[2]*=n,t[6]*=a,t[10]*=o,t[3]*=n,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),o=1-n,s=e.x,r=e.y,l=e.z,c=o*s,d=o*r;return this.set(c*s+n,c*r-a*l,c*l+a*r,0,c*r+a*l,d*r+n,d*l-a*s,0,c*l-a*r,d*l+a*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,o,s){return this.set(1,n,o,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,o=t._x,s=t._y,r=t._z,l=t._w,c=o+o,d=s+s,u=r+r,f=o*c,h=o*d,g=o*u,x=s*d,m=s*u,p=r*u,A=l*c,C=l*d,T=l*u,I=n.x,L=n.y,k=n.z;return a[0]=(1-(x+p))*I,a[1]=(h+T)*I,a[2]=(g-C)*I,a[3]=0,a[4]=(h-T)*L,a[5]=(1-(f+p))*L,a[6]=(m+A)*L,a[7]=0,a[8]=(g+C)*k,a[9]=(m-A)*k,a[10]=(1-(f+x))*k,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let o=va.set(a[0],a[1],a[2]).length();const s=va.set(a[4],a[5],a[6]).length(),r=va.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],Wn.copy(this);const c=1/o,d=1/s,u=1/r;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=d,Wn.elements[5]*=d,Wn.elements[6]*=d,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,t.setFromRotationMatrix(Wn),n.x=o,n.y=s,n.z=r,this}makePerspective(e,t,n,a,o,s,r=ei,l=!1){const c=this.elements,d=2*o/(t-e),u=2*o/(n-a),f=(t+e)/(t-e),h=(n+a)/(n-a);let g,x;if(l)g=o/(s-o),x=s*o/(s-o);else if(r===ei)g=-(s+o)/(s-o),x=-2*s*o/(s-o);else if(r===Rr)g=-s/(s-o),x=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,a,o,s,r=ei,l=!1){const c=this.elements,d=2/(t-e),u=2/(n-a),f=-(t+e)/(t-e),h=-(n+a)/(n-a);let g,x;if(l)g=1/(s-o),x=s/(s-o);else if(r===ei)g=-2/(s-o),x=-(s+o)/(s-o);else if(r===Rr)g=-1/(s-o),x=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const va=new U,Wn=new Jt,ch=new U(0,0,0),dh=new U(1,1,1),Ti=new U,Zo=new U,In=new U,Bc=new Jt,zc=new Ro;class vi{constructor(e=0,t=0,n=0,a=vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,o=a[0],s=a[4],r=a[8],l=a[1],c=a[5],d=a[9],u=a[2],f=a[6],h=a[10];switch(t){case"XYZ":this._y=Math.asin(bt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-bt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(r,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(bt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,h),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-bt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(bt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(r,h));break;case"XZY":this._z=Math.asin(-bt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-d,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zc.setFromEuler(this),this.setFromQuaternion(zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vi.DEFAULT_ORDER="XYZ";class uu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uh=0;const Gc=new U,xa=new Ro,ci=new Jt,qo=new U,oo=new U,ph=new U,fh=new Ro,Hc=new U(1,0,0),Vc=new U(0,1,0),Wc=new U(0,0,1),Xc={type:"added"},hh={type:"removed"},ba={type:"childadded",child:null},hs={type:"childremoved",child:null};class Mn extends Ka{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uh++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new U,t=new vi,n=new Ro,a=new U(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Jt},normalMatrix:{value:new pt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new uu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xa.setFromAxisAngle(e,t),this.quaternion.multiply(xa),this}rotateOnWorldAxis(e,t){return xa.setFromAxisAngle(e,t),this.quaternion.premultiply(xa),this}rotateX(e){return this.rotateOnAxis(Hc,e)}rotateY(e){return this.rotateOnAxis(Vc,e)}rotateZ(e){return this.rotateOnAxis(Wc,e)}translateOnAxis(e,t){return Gc.copy(e).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Hc,e)}translateY(e){return this.translateOnAxis(Vc,e)}translateZ(e){return this.translateOnAxis(Wc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?qo.copy(e):qo.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(oo,qo,this.up):ci.lookAt(qo,oo,this.up),this.quaternion.setFromRotationMatrix(ci),a&&(ci.extractRotation(a.matrixWorld),xa.setFromRotationMatrix(ci),this.quaternion.premultiply(xa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xc),ba.child=e,this.dispatchEvent(ba),ba.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hh),hs.child=e,this.dispatchEvent(hs),hs.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xc),ba.child=e,this.dispatchEvent(ba),ba.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let o=0,s=a.length;o<s;o++)a[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,e,ph),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,fh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,s=a.length;o<s;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(r=>({...r,boundingBox:r.boundingBox?r.boundingBox.toJSON():void 0,boundingSphere:r.boundingSphere?r.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(r=>({...r})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const u=l[c];o(e.shapes,u)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(o(e.materials,this.material[l]));a.material=r}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let r=0;r<this.children.length;r++)a.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];a.animations.push(o(e.animations,l))}}if(t){const r=s(e.geometries),l=s(e.materials),c=s(e.textures),d=s(e.images),u=s(e.shapes),f=s(e.skeletons),h=s(e.animations),g=s(e.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=a,n;function s(r){const l=[];for(const c in r){const d=r[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}Mn.DEFAULT_UP=new U(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new U,di=new U,ms=new U,ui=new U,Ma=new U,wa=new U,Yc=new U,gs=new U,ys=new U,_s=new U,vs=new Qt,xs=new Qt,bs=new Qt;class Bn{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),Xn.subVectors(e,t),a.cross(Xn);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,n,a,o){Xn.subVectors(a,t),di.subVectors(n,t),ms.subVectors(e,t);const s=Xn.dot(Xn),r=Xn.dot(di),l=Xn.dot(ms),c=di.dot(di),d=di.dot(ms),u=s*c-r*r;if(u===0)return o.set(0,0,0),null;const f=1/u,h=(c*l-r*d)*f,g=(s*d-r*l)*f;return o.set(1-h-g,g,h)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,t,n,a,o,s,r,l){return this.getBarycoord(e,t,n,a,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,ui.x),l.addScaledVector(s,ui.y),l.addScaledVector(r,ui.z),l)}static getInterpolatedAttribute(e,t,n,a,o,s){return vs.setScalar(0),xs.setScalar(0),bs.setScalar(0),vs.fromBufferAttribute(e,t),xs.fromBufferAttribute(e,n),bs.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(vs,o.x),s.addScaledVector(xs,o.y),s.addScaledVector(bs,o.z),s}static isFrontFacing(e,t,n,a){return Xn.subVectors(n,t),di.subVectors(e,t),Xn.cross(di).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),Xn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,o){return Bn.getInterpolation(e,this.a,this.b,this.c,t,n,a,o)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,o=this.c;let s,r;Ma.subVectors(a,n),wa.subVectors(o,n),gs.subVectors(e,n);const l=Ma.dot(gs),c=wa.dot(gs);if(l<=0&&c<=0)return t.copy(n);ys.subVectors(e,a);const d=Ma.dot(ys),u=wa.dot(ys);if(d>=0&&u<=d)return t.copy(a);const f=l*u-d*c;if(f<=0&&l>=0&&d<=0)return s=l/(l-d),t.copy(n).addScaledVector(Ma,s);_s.subVectors(e,o);const h=Ma.dot(_s),g=wa.dot(_s);if(g>=0&&h<=g)return t.copy(o);const x=h*c-l*g;if(x<=0&&c>=0&&g<=0)return r=c/(c-g),t.copy(n).addScaledVector(wa,r);const m=d*g-h*u;if(m<=0&&u-d>=0&&h-g>=0)return Yc.subVectors(o,a),r=(u-d)/(u-d+(h-g)),t.copy(a).addScaledVector(Yc,r);const p=1/(m+x+f);return s=x*p,r=f*p,t.copy(n).addScaledVector(Ma,s).addScaledVector(wa,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Ko={h:0,s:0,l:0};function Ms(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Oe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ct.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=Ct.workingColorSpace){if(e=ql(e,1),t=bt(t,0,1),n=bt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=Ms(s,o,e+1/3),this.g=Ms(s,o,e),this.b=Ms(s,o,e-1/3)}return Ct.colorSpaceToWorking(this,a),this}setStyle(e,t=xn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=a[1],r=a[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xn){const n=pu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=Ua(e.r),this.g=Ua(e.g),this.b=Ua(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xn){return Ct.workingToColorSpace(vn.copy(this),e),Math.round(bt(vn.r*255,0,255))*65536+Math.round(bt(vn.g*255,0,255))*256+Math.round(bt(vn.b*255,0,255))}getHexString(e=xn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(vn.copy(this),t);const n=vn.r,a=vn.g,o=vn.b,s=Math.max(n,a,o),r=Math.min(n,a,o);let l,c;const d=(r+s)/2;if(r===s)l=0,c=0;else{const u=s-r;switch(c=d<=.5?u/(s+r):u/(2-s-r),s){case n:l=(a-o)/u+(a<o?6:0);break;case a:l=(o-n)/u+2;break;case o:l=(n-a)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=xn){Ct.workingToColorSpace(vn.copy(this),e);const t=vn.r,n=vn.g,a=vn.b;return e!==xn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(Ei),this.setHSL(Ei.h+e,Ei.s+t,Ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ei),e.getHSL(Ko);const n=mo(Ei.h,Ko.h,t),a=mo(Ei.s,Ko.s,t),o=mo(Ei.l,Ko.l,t);return this.setHSL(n,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*a,this.g=o[1]*t+o[4]*n+o[7]*a,this.b=o[2]*t+o[5]*n+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Oe;Oe.NAMES=pu;let mh=0;class la extends Ka{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mh++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=Rn,this.side=Ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zs,this.blendDst=Gs,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ga,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ic,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ha,this.stencilZFail=ha,this.stencilZPass=ha,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rn&&(n.blending=this.blending),this.side!==Ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==zs&&(n.blendSrc=this.blendSrc),this.blendDst!==Gs&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ga&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ic&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ha&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ha&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ha&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(o){const s=[];for(const r in o){const l=o[r];delete l.metadata,s.push(l)}return s}if(t){const o=a(e.textures),s=a(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let o=0;o!==a;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Zt extends la{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const en=new U,$o=new it;let gh=0;class rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:gh++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=El,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$o.fromBufferAttribute(this,t),$o.applyMatrix3(e),this.setXY(t,$o.x,$o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Yn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Yn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Yn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Yn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),a=Ot(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,o){return e*=this.itemSize,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),a=Ot(a,this.array),o=Ot(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==El&&(e.usage=this.usage),e}}class fu extends rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class hu extends rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Wt extends rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let yh=0;const Un=new Jt,ws=new Mn,Sa=new U,Dn=new Po,ro=new Po,un=new U;class jt extends Ka{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cu(e)?hu:fu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new pt().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return ws.lookAt(e),ws.updateMatrix(),this.applyMatrix4(ws.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Sa).negate(),this.translate(Sa.x,Sa.y,Sa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,o=e.length;a<o;a++){const s=e[a];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Wt(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Po);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];Dn.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const r=t[o];ro.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(Dn.min,ro.min),Dn.expandByPoint(un),un.addVectors(Dn.max,ro.max),Dn.expandByPoint(un)):(Dn.expandByPoint(ro.min),Dn.expandByPoint(ro.max))}Dn.getCenter(n);let a=0;for(let o=0,s=e.count;o<s;o++)un.fromBufferAttribute(e,o),a=Math.max(a,n.distanceToSquared(un));if(t)for(let o=0,s=t.length;o<s;o++){const r=t[o],l=this.morphTargetsRelative;for(let c=0,d=r.count;c<d;c++)un.fromBufferAttribute(r,c),l&&(Sa.fromBufferAttribute(e,c),un.add(Sa)),a=Math.max(a,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),r=[],l=[];for(let P=0;P<n.count;P++)r[P]=new U,l[P]=new U;const c=new U,d=new U,u=new U,f=new it,h=new it,g=new it,x=new U,m=new U;function p(P,S,b){c.fromBufferAttribute(n,P),d.fromBufferAttribute(n,S),u.fromBufferAttribute(n,b),f.fromBufferAttribute(o,P),h.fromBufferAttribute(o,S),g.fromBufferAttribute(o,b),d.sub(c),u.sub(c),h.sub(f),g.sub(f);const N=1/(h.x*g.y-g.x*h.y);isFinite(N)&&(x.copy(d).multiplyScalar(g.y).addScaledVector(u,-h.y).multiplyScalar(N),m.copy(u).multiplyScalar(h.x).addScaledVector(d,-g.x).multiplyScalar(N),r[P].add(x),r[S].add(x),r[b].add(x),l[P].add(m),l[S].add(m),l[b].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let P=0,S=A.length;P<S;++P){const b=A[P],N=b.start,W=b.count;for(let ee=N,ce=N+W;ee<ce;ee+=3)p(e.getX(ee+0),e.getX(ee+1),e.getX(ee+2))}const C=new U,T=new U,I=new U,L=new U;function k(P){I.fromBufferAttribute(a,P),L.copy(I);const S=r[P];C.copy(S),C.sub(I.multiplyScalar(I.dot(S))).normalize(),T.crossVectors(L,S);const N=T.dot(l[P])<0?-1:1;s.setXYZW(P,C.x,C.y,C.z,N)}for(let P=0,S=A.length;P<S;++P){const b=A[P],N=b.start,W=b.count;for(let ee=N,ce=N+W;ee<ce;ee+=3)k(e.getX(ee+0)),k(e.getX(ee+1)),k(e.getX(ee+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);const a=new U,o=new U,s=new U,r=new U,l=new U,c=new U,d=new U,u=new U;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);a.fromBufferAttribute(t,g),o.fromBufferAttribute(t,x),s.fromBufferAttribute(t,m),d.subVectors(s,o),u.subVectors(a,o),d.cross(u),r.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),r.add(d),l.add(d),c.add(d),n.setXYZ(g,r.x,r.y,r.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)a.fromBufferAttribute(t,f+0),o.fromBufferAttribute(t,f+1),s.fromBufferAttribute(t,f+2),d.subVectors(s,o),u.subVectors(a,o),d.cross(u),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(r,l){const c=r.array,d=r.itemSize,u=r.normalized,f=new c.constructor(l.length*d);let h=0,g=0;for(let x=0,m=l.length;x<m;x++){r.isInterleavedBufferAttribute?h=l[x]*r.data.stride+r.offset:h=l[x]*d;for(let p=0;p<d;p++)f[g++]=c[h++]}return new rn(f,d,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jt,n=this.index.array,a=this.attributes;for(const r in a){const l=a[r],c=e(l,n);t.setAttribute(r,c)}const o=this.morphAttributes;for(const r in o){const l=[],c=o[r];for(let d=0,u=c.length;d<u;d++){const f=c[d],h=e(f,n);l.push(h)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let r=0,l=s.length;r<l;r++){const c=s[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let u=0,f=c.length;u<f;u++){const h=c[u];d.push(h.toJSON(e.data))}d.length>0&&(a[l]=d,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere=r.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const c in a){const d=a[c];this.setAttribute(c,d.clone(t))}const o=e.morphAttributes;for(const c in o){const d=[],u=o[c];for(let f=0,h=u.length;f<h;f++)d.push(u[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,d=s.length;c<d;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zc=new Jt,Xi=new $l,jo=new Lo,qc=new U,Jo=new U,Qo=new U,er=new U,Ss=new U,tr=new U,Kc=new U,nr=new U;class wt extends Mn{constructor(e=new jt,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=a.length;o<s;o++){const r=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const r=this.morphTargetInfluences;if(o&&r){tr.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const d=r[l],u=o[l];d!==0&&(Ss.fromBufferAttribute(u,e),s?tr.addScaledVector(Ss,d):tr.addScaledVector(Ss.sub(t),d))}t.add(tr)}return t}raycast(e,t){const n=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(o),Xi.copy(e.ray).recast(e.near),!(jo.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(jo,qc)===null||Xi.origin.distanceToSquared(qc)>(e.far-e.near)**2))&&(Zc.copy(o).invert(),Xi.copy(e.ray).applyMatrix4(Zc),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Xi)))}_computeIntersections(e,t,n){let a;const o=this.geometry,s=this.material,r=o.index,l=o.attributes.position,c=o.attributes.uv,d=o.attributes.uv1,u=o.attributes.normal,f=o.groups,h=o.drawRange;if(r!==null)if(Array.isArray(s))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=s[m.materialIndex],A=Math.max(m.start,h.start),C=Math.min(r.count,Math.min(m.start+m.count,h.start+h.count));for(let T=A,I=C;T<I;T+=3){const L=r.getX(T),k=r.getX(T+1),P=r.getX(T+2);a=ir(this,p,e,n,c,d,u,L,k,P),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,h.start),x=Math.min(r.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const A=r.getX(m),C=r.getX(m+1),T=r.getX(m+2);a=ir(this,s,e,n,c,d,u,A,C,T),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=s[m.materialIndex],A=Math.max(m.start,h.start),C=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let T=A,I=C;T<I;T+=3){const L=T,k=T+1,P=T+2;a=ir(this,p,e,n,c,d,u,L,k,P),a&&(a.faceIndex=Math.floor(T/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const g=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const A=m,C=m+1,T=m+2;a=ir(this,s,e,n,c,d,u,A,C,T),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function _h(i,e,t,n,a,o,s,r){let l;if(e.side===En?l=n.intersectTriangle(s,o,a,!0,r):l=n.intersectTriangle(a,o,s,e.side===Ii,r),l===null)return null;nr.copy(r),nr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(nr);return c<t.near||c>t.far?null:{distance:c,point:nr.clone(),object:i}}function ir(i,e,t,n,a,o,s,r,l,c){i.getVertexPosition(r,Jo),i.getVertexPosition(l,Qo),i.getVertexPosition(c,er);const d=_h(i,e,t,n,Jo,Qo,er,Kc);if(d){const u=new U;Bn.getBarycoord(Kc,Jo,Qo,er,u),a&&(d.uv=Bn.getInterpolatedAttribute(a,r,l,c,u,new it)),o&&(d.uv1=Bn.getInterpolatedAttribute(o,r,l,c,u,new it)),s&&(d.normal=Bn.getInterpolatedAttribute(s,r,l,c,u,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const f={a:r,b:l,c,normal:new U,materialIndex:0};Bn.getNormal(Jo,Qo,er,f.normal),d.face=f,d.barycoord=u}return d}class ca extends jt{constructor(e=1,t=1,n=1,a=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:o,depthSegments:s};const r=this;a=Math.floor(a),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],d=[],u=[];let f=0,h=0;g("z","y","x",-1,-1,n,t,e,s,o,0),g("z","y","x",1,-1,n,t,-e,s,o,1),g("x","z","y",1,1,e,n,t,a,s,2),g("x","z","y",1,-1,e,n,-t,a,s,3),g("x","y","z",1,-1,e,t,n,a,o,4),g("x","y","z",-1,-1,e,t,-n,a,o,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(u,2));function g(x,m,p,A,C,T,I,L,k,P,S){const b=T/k,N=I/P,W=T/2,ee=I/2,ce=L/2,ie=k+1,le=P+1;let ue=0,te=0;const Me=new U;for(let Ae=0;Ae<le;Ae++){const ze=Ae*N-ee;for(let dt=0;dt<ie;dt++){const Mt=dt*b-W;Me[x]=Mt*A,Me[m]=ze*C,Me[p]=ce,c.push(Me.x,Me.y,Me.z),Me[x]=0,Me[m]=0,Me[p]=L>0?1:-1,d.push(Me.x,Me.y,Me.z),u.push(dt/k),u.push(1-Ae/P),ue+=1}}for(let Ae=0;Ae<P;Ae++)for(let ze=0;ze<k;ze++){const dt=f+ze+ie*Ae,Mt=f+ze+ie*(Ae+1),tt=f+(ze+1)+ie*(Ae+1),gt=f+(ze+1)+ie*Ae;l.push(dt,Mt,gt),l.push(Mt,tt,gt),te+=6}r.addGroup(h,te,S),h+=te,f+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Xa(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function Sn(i){const e={};for(let t=0;t<i.length;t++){const n=Xa(i[t]);for(const a in n)e[a]=n[a]}return e}function vh(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function mu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const Ao={clone:Xa,merge:Sn};var xh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Tn extends la{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xh,this.fragmentShader=bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xa(e.uniforms),this.uniformsGroups=vh(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gu extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ai=new U,$c=new it,jc=new it;class On extends gu{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=So*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ho*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return So*2*Math.atan(Math.tan(ho*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-e/Ai.z)}getViewSize(e,t){return this.getViewBounds(e,$c,jc),t.subVectors(jc,$c)}setViewOffset(e,t,n,a,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ho*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,o=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*a/l,t-=s.offsetY*n/c,a*=s.width/l,n*=s.height/c}const r=this.filmOffset;r!==0&&(o+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ta=-90,Ea=1;class Mh extends Mn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new On(Ta,Ea,e,t);a.layers=this.layers,this.add(a);const o=new On(Ta,Ea,e,t);o.layers=this.layers,this.add(o);const s=new On(Ta,Ea,e,t);s.layers=this.layers,this.add(s);const r=new On(Ta,Ea,e,t);r.layers=this.layers,this.add(r);const l=new On(Ta,Ea,e,t);l.layers=this.layers,this.add(l);const c=new On(Ta,Ea,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,o,s,r,l]=t;for(const c of t)this.remove(c);if(e===ei)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Rr)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,r,l,c,d]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,o),e.setRenderTarget(n,1,a),e.render(t,s),e.setRenderTarget(n,2,a),e.render(t,r),e.setRenderTarget(n,3,a),e.render(t,l),e.setRenderTarget(n,4,a),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,a),e.render(t,d),e.setRenderTarget(u,f,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class yu extends bn{constructor(e=[],t=Ha,n,a,o,s,r,l,c,d){super(e,t,n,a,o,s,r,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wh extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new yu(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ca(5,5,5),o=new Tn({name:"CubemapFromEquirect",uniforms:Xa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:hi});o.uniforms.tEquirect.value=t;const s=new wt(a,o),r=t.minFilter;return t.minFilter===ta&&(t.minFilter=Qn),new Mh(1,10,this).update(e,s),t.minFilter=r,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,a);e.setRenderTarget(o)}}class $t extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sh={type:"move"};class Ts{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,o=null,s=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const d=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=d.position.distanceTo(u.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&o!==null&&(a=o),a!==null&&(r.matrix.fromArray(a.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,a.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(a.linearVelocity)):r.hasLinearVelocity=!1,a.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(a.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Sh)))}return r!==null&&(r.visible=a!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class jl{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Oe(e),this.density=t}clone(){return new jl(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Th extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Eh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=El,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let a=0,o=this.stride;a<o;a++)this.array[e+a]=t.array[n+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=gi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wn=new U;class Pr{constructor(e,t,n,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyMatrix4(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.applyNormalMatrix(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wn.fromBufferAttribute(this,t),wn.transformDirection(e),this.setXYZ(t,wn.x,wn.y,wn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Yn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ot(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Yn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Yn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Yn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Yn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),a=Ot(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this}setXYZW(e,t,n,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ot(t,this.array),n=Ot(n,this.array),a=Ot(a,this.array),o=Ot(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return new rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Pr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class mt extends la{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Aa;const so=new U,Ca=new U,Ra=new U,Pa=new it,lo=new it,_u=new Jt,ar=new U,co=new U,or=new U,Jc=new it,Es=new it,Qc=new it;class yt extends Mn{constructor(e=new mt){if(super(),this.isSprite=!0,this.type="Sprite",Aa===void 0){Aa=new jt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Eh(t,5);Aa.setIndex([0,1,2,0,2,3]),Aa.setAttribute("position",new Pr(n,3,0,!1)),Aa.setAttribute("uv",new Pr(n,2,3,!1))}this.geometry=Aa,this.material=e,this.center=new it(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ca.setFromMatrixScale(this.matrixWorld),_u.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ra.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ca.multiplyScalar(-Ra.z);const n=this.material.rotation;let a,o;n!==0&&(o=Math.cos(n),a=Math.sin(n));const s=this.center;rr(ar.set(-.5,-.5,0),Ra,s,Ca,a,o),rr(co.set(.5,-.5,0),Ra,s,Ca,a,o),rr(or.set(.5,.5,0),Ra,s,Ca,a,o),Jc.set(0,0),Es.set(1,0),Qc.set(1,1);let r=e.ray.intersectTriangle(ar,co,or,!1,so);if(r===null&&(rr(co.set(-.5,.5,0),Ra,s,Ca,a,o),Es.set(0,1),r=e.ray.intersectTriangle(ar,or,co,!1,so),r===null))return;const l=e.ray.origin.distanceTo(so);l<e.near||l>e.far||t.push({distance:l,point:so.clone(),uv:Bn.getInterpolation(so,ar,co,or,Jc,Es,Qc,new it),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function rr(i,e,t,n,a,o){Pa.subVectors(i,t).addScalar(.5).multiply(n),a!==void 0?(lo.x=o*Pa.x-a*Pa.y,lo.y=a*Pa.x+o*Pa.y):lo.copy(Pa),i.copy(e),i.x+=lo.x,i.y+=lo.y,i.applyMatrix4(_u)}const As=new U,Ah=new U,Ch=new pt;class $i{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=As.subVectors(n,t).cross(Ah.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(As),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ch.getNormalMatrix(e),a=this.coplanarPoint(As).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new Lo,Rh=new it(.5,.5),sr=new U;class vu{constructor(e=new $i,t=new $i,n=new $i,a=new $i,o=new $i,s=new $i){this.planes=[e,t,n,a,o,s]}set(e,t,n,a,o,s){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(a),r[4].copy(o),r[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ei,n=!1){const a=this.planes,o=e.elements,s=o[0],r=o[1],l=o[2],c=o[3],d=o[4],u=o[5],f=o[6],h=o[7],g=o[8],x=o[9],m=o[10],p=o[11],A=o[12],C=o[13],T=o[14],I=o[15];if(a[0].setComponents(c-s,h-d,p-g,I-A).normalize(),a[1].setComponents(c+s,h+d,p+g,I+A).normalize(),a[2].setComponents(c+r,h+u,p+x,I+C).normalize(),a[3].setComponents(c-r,h-u,p-x,I-C).normalize(),n)a[4].setComponents(l,f,m,T).normalize(),a[5].setComponents(c-l,h-f,p-m,I-T).normalize();else if(a[4].setComponents(c-l,h-f,p-m,I-T).normalize(),t===ei)a[5].setComponents(c+l,h+f,p+m,I+T).normalize();else if(t===Rr)a[5].setComponents(l,f,m,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(e){Yi.center.set(0,0,0);const t=Rh.distanceTo(e.center);return Yi.radius=.7071067811865476+t,Yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(sr.x=a.normal.x>0?e.max.x:e.min.x,sr.y=a.normal.y>0?e.max.y:e.min.y,sr.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jl extends la{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Lr=new U,Ir=new U,ed=new Jt,uo=new $l,lr=new Lo,Cs=new U,td=new U;class xu extends Mn{constructor(e=new jt,t=new Jl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,o=t.count;a<o;a++)Lr.fromBufferAttribute(t,a-1),Ir.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=Lr.distanceTo(Ir);e.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lr.copy(n.boundingSphere),lr.applyMatrix4(a),lr.radius+=o,e.ray.intersectsSphere(lr)===!1)return;ed.copy(a).invert(),uo.copy(e.ray).applyMatrix4(ed);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=this.isLineSegments?2:1,d=n.index,f=n.attributes.position;if(d!==null){const h=Math.max(0,s.start),g=Math.min(d.count,s.start+s.count);for(let x=h,m=g-1;x<m;x+=c){const p=d.getX(x),A=d.getX(x+1),C=cr(this,e,uo,l,p,A,x);C&&t.push(C)}if(this.isLineLoop){const x=d.getX(g-1),m=d.getX(h),p=cr(this,e,uo,l,x,m,g-1);p&&t.push(p)}}else{const h=Math.max(0,s.start),g=Math.min(f.count,s.start+s.count);for(let x=h,m=g-1;x<m;x+=c){const p=cr(this,e,uo,l,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){const x=cr(this,e,uo,l,g-1,h,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=a.length;o<s;o++){const r=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function cr(i,e,t,n,a,o,s){const r=i.geometry.attributes.position;if(Lr.fromBufferAttribute(r,a),Ir.fromBufferAttribute(r,o),t.distanceSqToSegment(Lr,Ir,Cs,td)>n)return;Cs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Cs);if(!(c<e.near||c>e.far))return{distance:c,point:td.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const nd=new U,id=new U;class Ph extends xu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let a=0,o=t.count;a<o;a+=2)nd.fromBufferAttribute(t,a),id.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+nd.distanceTo(id);e.setAttribute("lineDistance",new Wt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Oa extends la{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ad=new Jt,Al=new $l,dr=new Lo,ur=new U;class go extends Mn{constructor(e=new jt,t=new Oa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,o=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere),dr.applyMatrix4(a),dr.radius+=o,e.ray.intersectsSphere(dr)===!1)return;ad.copy(a).invert(),Al.copy(e.ray).applyMatrix4(ad);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,s.start),h=Math.min(c.count,s.start+s.count);for(let g=f,x=h;g<x;g++){const m=c.getX(g);ur.fromBufferAttribute(u,m),od(ur,m,l,a,e,t,this)}}else{const f=Math.max(0,s.start),h=Math.min(u.count,s.start+s.count);for(let g=f,x=h;g<x;g++)ur.fromBufferAttribute(u,g),od(ur,g,l,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=a.length;o<s;o++){const r=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function od(i,e,t,n,a,o,s){const r=Al.distanceSqToPoint(i);if(r<t){const l=new U;Al.closestPointToPoint(i,l),l.applyMatrix4(n);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;o.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class bu extends bn{constructor(e,t,n,a,o,s,r,l,c){super(e,t,n,a,o,s,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mu extends bn{constructor(e,t,n=oa,a,o,s,r=qn,l=qn,c,d=Mo,u=1){if(d!==Mo&&d!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,a,o,s,r,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class wu extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Qi extends jt{constructor(e=1,t=1,n=1,a=32,o=1,s=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:a,heightSegments:o,openEnded:s,thetaStart:r,thetaLength:l};const c=this;a=Math.floor(a),o=Math.floor(o);const d=[],u=[],f=[],h=[];let g=0;const x=[],m=n/2;let p=0;A(),s===!1&&(e>0&&C(!0),t>0&&C(!1)),this.setIndex(d),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(h,2));function A(){const T=new U,I=new U;let L=0;const k=(t-e)/n;for(let P=0;P<=o;P++){const S=[],b=P/o,N=b*(t-e)+e;for(let W=0;W<=a;W++){const ee=W/a,ce=ee*l+r,ie=Math.sin(ce),le=Math.cos(ce);I.x=N*ie,I.y=-b*n+m,I.z=N*le,u.push(I.x,I.y,I.z),T.set(ie,k,le).normalize(),f.push(T.x,T.y,T.z),h.push(ee,1-b),S.push(g++)}x.push(S)}for(let P=0;P<a;P++)for(let S=0;S<o;S++){const b=x[S][P],N=x[S+1][P],W=x[S+1][P+1],ee=x[S][P+1];(e>0||S!==0)&&(d.push(b,N,ee),L+=3),(t>0||S!==o-1)&&(d.push(N,W,ee),L+=3)}c.addGroup(p,L,0),p+=L}function C(T){const I=g,L=new it,k=new U;let P=0;const S=T===!0?e:t,b=T===!0?1:-1;for(let W=1;W<=a;W++)u.push(0,m*b,0),f.push(0,b,0),h.push(.5,.5),g++;const N=g;for(let W=0;W<=a;W++){const ce=W/a*l+r,ie=Math.cos(ce),le=Math.sin(ce);k.x=S*le,k.y=m*b,k.z=S*ie,u.push(k.x,k.y,k.z),f.push(0,b,0),L.x=ie*.5+.5,L.y=le*.5*b+.5,h.push(L.x,L.y),g++}for(let W=0;W<a;W++){const ee=I+W,ce=N+W;T===!0?d.push(ce,ce+1,ee):d.push(ce+1,ce,ee),P+=3}c.addGroup(p,P,T===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ur extends jt{constructor(e=[],t=[],n=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:a};const o=[],s=[];r(a),c(n),d(),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(o.slice(),3)),this.setAttribute("uv",new Wt(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function r(A){const C=new U,T=new U,I=new U;for(let L=0;L<t.length;L+=3)h(t[L+0],C),h(t[L+1],T),h(t[L+2],I),l(C,T,I,A)}function l(A,C,T,I){const L=I+1,k=[];for(let P=0;P<=L;P++){k[P]=[];const S=A.clone().lerp(T,P/L),b=C.clone().lerp(T,P/L),N=L-P;for(let W=0;W<=N;W++)W===0&&P===L?k[P][W]=S:k[P][W]=S.clone().lerp(b,W/N)}for(let P=0;P<L;P++)for(let S=0;S<2*(L-P)-1;S++){const b=Math.floor(S/2);S%2===0?(f(k[P][b+1]),f(k[P+1][b]),f(k[P][b])):(f(k[P][b+1]),f(k[P+1][b+1]),f(k[P+1][b]))}}function c(A){const C=new U;for(let T=0;T<o.length;T+=3)C.x=o[T+0],C.y=o[T+1],C.z=o[T+2],C.normalize().multiplyScalar(A),o[T+0]=C.x,o[T+1]=C.y,o[T+2]=C.z}function d(){const A=new U;for(let C=0;C<o.length;C+=3){A.x=o[C+0],A.y=o[C+1],A.z=o[C+2];const T=m(A)/2/Math.PI+.5,I=p(A)/Math.PI+.5;s.push(T,1-I)}g(),u()}function u(){for(let A=0;A<s.length;A+=6){const C=s[A+0],T=s[A+2],I=s[A+4],L=Math.max(C,T,I),k=Math.min(C,T,I);L>.9&&k<.1&&(C<.2&&(s[A+0]+=1),T<.2&&(s[A+2]+=1),I<.2&&(s[A+4]+=1))}}function f(A){o.push(A.x,A.y,A.z)}function h(A,C){const T=A*3;C.x=e[T+0],C.y=e[T+1],C.z=e[T+2]}function g(){const A=new U,C=new U,T=new U,I=new U,L=new it,k=new it,P=new it;for(let S=0,b=0;S<o.length;S+=9,b+=6){A.set(o[S+0],o[S+1],o[S+2]),C.set(o[S+3],o[S+4],o[S+5]),T.set(o[S+6],o[S+7],o[S+8]),L.set(s[b+0],s[b+1]),k.set(s[b+2],s[b+3]),P.set(s[b+4],s[b+5]),I.copy(A).add(C).add(T).divideScalar(3);const N=m(I);x(L,b+0,A,N),x(k,b+2,C,N),x(P,b+4,T,N)}}function x(A,C,T,I){I<0&&A.x===1&&(s[C]=A.x-1),T.x===0&&T.z===0&&(s[C]=I/2/Math.PI+.5)}function m(A){return Math.atan2(A.z,-A.x)}function p(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.vertices,e.indices,e.radius,e.details)}}class Or extends Ur{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,a=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Or(e.radius,e.detail)}}class Ql extends Ur{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ql(e.radius,e.detail)}}class kn extends jt{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const o=e/2,s=t/2,r=Math.floor(n),l=Math.floor(a),c=r+1,d=l+1,u=e/r,f=t/l,h=[],g=[],x=[],m=[];for(let p=0;p<d;p++){const A=p*f-s;for(let C=0;C<c;C++){const T=C*u-o;g.push(T,-A,0),x.push(0,0,1),m.push(C/r),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let A=0;A<r;A++){const C=A+c*p,T=A+c*(p+1),I=A+1+c*(p+1),L=A+1+c*p;h.push(C,T,L),h.push(T,I,L)}this.setIndex(h),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.width,e.height,e.widthSegments,e.heightSegments)}}class yo extends jt{constructor(e=1,t=32,n=16,a=0,o=Math.PI*2,s=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:a,phiLength:o,thetaStart:s,thetaLength:r},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+r,Math.PI);let c=0;const d=[],u=new U,f=new U,h=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){const A=[],C=p/n;let T=0;p===0&&s===0?T=.5/t:p===n&&l===Math.PI&&(T=-.5/t);for(let I=0;I<=t;I++){const L=I/t;u.x=-e*Math.cos(a+L*o)*Math.sin(s+C*r),u.y=e*Math.cos(s+C*r),u.z=e*Math.sin(a+L*o)*Math.sin(s+C*r),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(L+T,1-C),A.push(c++)}d.push(A)}for(let p=0;p<n;p++)for(let A=0;A<t;A++){const C=d[p][A+1],T=d[p][A],I=d[p+1][A],L=d[p+1][A+1];(p!==0||s>0)&&h.push(C,T,L),(p!==n-1||l<Math.PI)&&h.push(T,I,L)}this.setIndex(h),this.setAttribute("position",new Wt(g,3)),this.setAttribute("normal",new Wt(x,3)),this.setAttribute("uv",new Wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fa extends jt{constructor(e=1,t=.4,n=12,a=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:a,arc:o},n=Math.floor(n),a=Math.floor(a);const s=[],r=[],l=[],c=[],d=new U,u=new U,f=new U;for(let h=0;h<=n;h++)for(let g=0;g<=a;g++){const x=g/a*o,m=h/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),r.push(u.x,u.y,u.z),d.x=e*Math.cos(x),d.y=e*Math.sin(x),f.subVectors(u,d).normalize(),l.push(f.x,f.y,f.z),c.push(g/a),c.push(h/n)}for(let h=1;h<=n;h++)for(let g=1;g<=a;g++){const x=(a+1)*h+g-1,m=(a+1)*(h-1)+g-1,p=(a+1)*(h-1)+g,A=(a+1)*h+g;s.push(x,m,A),s.push(m,p,A)}this.setIndex(s),this.setAttribute("position",new Wt(r,3)),this.setAttribute("normal",new Wt(l,3)),this.setAttribute("uv",new Wt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Lh extends Tn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ih extends la{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Af,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dh extends la{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class kh{constructor(e,t,n){const a=this;let o=!1,s=0,r=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){r++,o===!1&&a.onStart!==void 0&&a.onStart(d,s,r),o=!0},this.itemEnd=function(d){s++,a.onProgress!==void 0&&a.onProgress(d,s,r),s===r&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(d){a.onError!==void 0&&a.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,u){return c.push(d,u),this},this.removeHandler=function(d){const u=c.indexOf(d);return u!==-1&&c.splice(u,2),this},this.getHandler=function(d){for(let u=0,f=c.length;u<f;u+=2){const h=c[u],g=c[u+1];if(h.global&&(h.lastIndex=0),h.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const Nh=new kh;class ec{constructor(e){this.manager=e!==void 0?e:Nh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(a,o){n.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}ec.DEFAULT_MATERIAL_NAME="__DEFAULT";const La=new WeakMap;class Uh extends ec{constructor(e){super(e)}load(e,t,n,a){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,s=Rs.get(`image:${e}`);if(s!==void 0){if(s.complete===!0)o.manager.itemStart(e),setTimeout(function(){t&&t(s),o.manager.itemEnd(e)},0);else{let u=La.get(s);u===void 0&&(u=[],La.set(s,u)),u.push({onLoad:t,onError:a})}return s}const r=To("img");function l(){d(),t&&t(this);const u=La.get(this)||[];for(let f=0;f<u.length;f++){const h=u[f];h.onLoad&&h.onLoad(this)}La.delete(this),o.manager.itemEnd(e)}function c(u){d(),a&&a(u),Rs.remove(`image:${e}`);const f=La.get(this)||[];for(let h=0;h<f.length;h++){const g=f[h];g.onError&&g.onError(u)}La.delete(this),o.manager.itemError(e),o.manager.itemEnd(e)}function d(){r.removeEventListener("load",l,!1),r.removeEventListener("error",c,!1)}return r.addEventListener("load",l,!1),r.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(r.crossOrigin=this.crossOrigin),Rs.add(`image:${e}`,r),o.manager.itemStart(e),r.src=e,r}}class Oh extends ec{constructor(e){super(e)}load(e,t,n,a){const o=new bn,s=new Uh(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(r){o.image=r,o.needsUpdate=!0,t!==void 0&&t(o)},n,a),o}}class Su extends gu{constructor(e=-1,t=1,n=1,a=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=n-e,s=n+e,r=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,r-=d*this.view.offsetY,l=r-d*this.view.height}this.projectionMatrix.makeOrthographic(o,s,r,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Fh extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Bh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class zh extends Ph{constructor(e=10,t=10,n=4473924,a=8947848){n=new Oe(n),a=new Oe(a);const o=t/2,s=e/t,r=e/2,l=[],c=[];for(let f=0,h=0,g=-r;f<=t;f++,g+=s){l.push(-r,0,g,r,0,g),l.push(g,0,-r,g,0,r);const x=f===o?n:a;x.toArray(c,h),h+=3,x.toArray(c,h),h+=3,x.toArray(c,h),h+=3,x.toArray(c,h),h+=3}const d=new jt;d.setAttribute("position",new Wt(l,3)),d.setAttribute("color",new Wt(c,3));const u=new Jl({vertexColors:!0,toneMapped:!1});super(d,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function rd(i,e,t,n){const a=Gh(n);switch(t){case au:return i*e;case ru:return i*e/a.components*a.byteLength;case Xl:return i*e/a.components*a.byteLength;case su:return i*e*2/a.components*a.byteLength;case Yl:return i*e*2/a.components*a.byteLength;case ou:return i*e*3/a.components*a.byteLength;case Zn:return i*e*4/a.components*a.byteLength;case Zl:return i*e*4/a.components*a.byteLength;case xr:case br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mr:case wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qs:case tl:return Math.max(i,16)*Math.max(e,8)/4;case Js:case el:return Math.max(i,8)*Math.max(e,8)/2;case nl:case il:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case al:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ol:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case sl:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ll:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case cl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case dl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ul:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case pl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case hl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ml:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case gl:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case yl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case _l:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vl:case xl:case bl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ml:case wl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sl:case Tl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Gh(i){switch(i){case _i:case eu:return{byteLength:1,components:1};case xo:case tu:case mi:return{byteLength:2,components:1};case Vl:case Wl:return{byteLength:2,components:4};case oa:case Hl:case fi:return{byteLength:4,components:1};case nu:case iu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zl);function Tu(){let i=null,e=!1,t=null,n=null;function a(o,s){t(o,s),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Hh(i){const e=new WeakMap;function t(r,l){const c=r.array,d=r.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),r.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:u}}function n(r,l,c){const d=l.array,u=l.updateRanges;if(i.bindBuffer(c,r),u.length===0)i.bufferSubData(c,0,d);else{u.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<u.length;h++){const g=u[f],x=u[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,u[f]=x)}u.length=f+1;for(let h=0,g=u.length;h<g;h++){const x=u[h];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(i.deleteBuffer(l.buffer),e.delete(r))}function s(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const d=e.get(r);(!d||d.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:a,remove:o,update:s}}var Vh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wh=`#ifdef USE_ALPHAHASH
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
#endif`,Xh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kh=`#ifdef USE_AOMAP
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
#endif`,$h=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jh=`#ifdef USE_BATCHING
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
#endif`,Jh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qh=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,e0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,t0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,n0=`#ifdef USE_IRIDESCENCE
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
#endif`,i0=`#ifdef USE_BUMPMAP
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
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,p0=`#define PI 3.141592653589793
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
} // validated`,f0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,h0=`vec3 transformedNormal = objectNormal;
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
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,g0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",x0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,b0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,S0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,T0=`#ifdef USE_ENVMAP
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
#endif`,E0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,A0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,C0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,P0=`#ifdef USE_GRADIENTMAP
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
}`,L0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,I0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,D0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k0=`uniform bool receiveShadow;
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
#endif`,N0=`#ifdef USE_ENVMAP
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
#endif`,U0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,O0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,F0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z0=`PhysicalMaterial material;
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
#endif`,G0=`struct PhysicalMaterial {
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
}`,H0=`
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
#endif`,V0=`#if defined( RE_IndirectDiffuse )
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
#endif`,W0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,X0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Y0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,K0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,j0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,J0=`#if defined( USE_POINTS_UV )
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
#endif`,Q0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a1=`#ifdef USE_MORPHTARGETS
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
#endif`,o1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,s1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,l1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,c1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,d1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,u1=`#ifdef USE_NORMALMAP
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
#endif`,p1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,h1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,y1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,v1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,x1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,b1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,w1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,S1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,T1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,E1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,A1=`float getShadowMask() {
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
}`,C1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R1=`#ifdef USE_SKINNING
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
#endif`,P1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L1=`#ifdef USE_SKINNING
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
#endif`,I1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,D1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,U1=`#ifdef USE_TRANSMISSION
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
#endif`,O1=`#ifdef USE_TRANSMISSION
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
#endif`,F1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,B1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,z1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,G1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const H1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V1=`uniform sampler2D t2D;
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
}`,W1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Y1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,q1=`#include <common>
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
}`,K1=`#if DEPTH_PACKING == 3200
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
}`,$1=`#define DISTANCE
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
}`,j1=`#define DISTANCE
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
}`,J1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,em=`uniform float scale;
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
}`,tm=`uniform vec3 diffuse;
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
}`,nm=`#include <common>
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
}`,im=`uniform vec3 diffuse;
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
}`,am=`#define LAMBERT
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
}`,om=`#define LAMBERT
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
}`,rm=`#define MATCAP
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
}`,sm=`#define MATCAP
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
}`,lm=`#define NORMAL
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
}`,cm=`#define NORMAL
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
}`,dm=`#define PHONG
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
}`,um=`#define PHONG
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
}`,pm=`#define STANDARD
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
}`,fm=`#define STANDARD
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
}`,hm=`#define TOON
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
}`,mm=`#define TOON
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
}`,gm=`uniform float size;
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
}`,ym=`uniform vec3 diffuse;
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
}`,_m=`#include <common>
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
}`,vm=`uniform vec3 color;
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
}`,xm=`uniform float rotation;
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
}`,bm=`uniform vec3 diffuse;
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
}`,ht={alphahash_fragment:Vh,alphahash_pars_fragment:Wh,alphamap_fragment:Xh,alphamap_pars_fragment:Yh,alphatest_fragment:Zh,alphatest_pars_fragment:qh,aomap_fragment:Kh,aomap_pars_fragment:$h,batching_pars_vertex:jh,batching_vertex:Jh,begin_vertex:Qh,beginnormal_vertex:e0,bsdfs:t0,iridescence_fragment:n0,bumpmap_pars_fragment:i0,clipping_planes_fragment:a0,clipping_planes_pars_fragment:o0,clipping_planes_pars_vertex:r0,clipping_planes_vertex:s0,color_fragment:l0,color_pars_fragment:c0,color_pars_vertex:d0,color_vertex:u0,common:p0,cube_uv_reflection_fragment:f0,defaultnormal_vertex:h0,displacementmap_pars_vertex:m0,displacementmap_vertex:g0,emissivemap_fragment:y0,emissivemap_pars_fragment:_0,colorspace_fragment:v0,colorspace_pars_fragment:x0,envmap_fragment:b0,envmap_common_pars_fragment:M0,envmap_pars_fragment:w0,envmap_pars_vertex:S0,envmap_physical_pars_fragment:N0,envmap_vertex:T0,fog_vertex:E0,fog_pars_vertex:A0,fog_fragment:C0,fog_pars_fragment:R0,gradientmap_pars_fragment:P0,lightmap_pars_fragment:L0,lights_lambert_fragment:I0,lights_lambert_pars_fragment:D0,lights_pars_begin:k0,lights_toon_fragment:U0,lights_toon_pars_fragment:O0,lights_phong_fragment:F0,lights_phong_pars_fragment:B0,lights_physical_fragment:z0,lights_physical_pars_fragment:G0,lights_fragment_begin:H0,lights_fragment_maps:V0,lights_fragment_end:W0,logdepthbuf_fragment:X0,logdepthbuf_pars_fragment:Y0,logdepthbuf_pars_vertex:Z0,logdepthbuf_vertex:q0,map_fragment:K0,map_pars_fragment:$0,map_particle_fragment:j0,map_particle_pars_fragment:J0,metalnessmap_fragment:Q0,metalnessmap_pars_fragment:e1,morphinstance_vertex:t1,morphcolor_vertex:n1,morphnormal_vertex:i1,morphtarget_pars_vertex:a1,morphtarget_vertex:o1,normal_fragment_begin:r1,normal_fragment_maps:s1,normal_pars_fragment:l1,normal_pars_vertex:c1,normal_vertex:d1,normalmap_pars_fragment:u1,clearcoat_normal_fragment_begin:p1,clearcoat_normal_fragment_maps:f1,clearcoat_pars_fragment:h1,iridescence_pars_fragment:m1,opaque_fragment:g1,packing:y1,premultiplied_alpha_fragment:_1,project_vertex:v1,dithering_fragment:x1,dithering_pars_fragment:b1,roughnessmap_fragment:M1,roughnessmap_pars_fragment:w1,shadowmap_pars_fragment:S1,shadowmap_pars_vertex:T1,shadowmap_vertex:E1,shadowmask_pars_fragment:A1,skinbase_vertex:C1,skinning_pars_vertex:R1,skinning_vertex:P1,skinnormal_vertex:L1,specularmap_fragment:I1,specularmap_pars_fragment:D1,tonemapping_fragment:k1,tonemapping_pars_fragment:N1,transmission_fragment:U1,transmission_pars_fragment:O1,uv_pars_fragment:F1,uv_pars_vertex:B1,uv_vertex:z1,worldpos_vertex:G1,background_vert:H1,background_frag:V1,backgroundCube_vert:W1,backgroundCube_frag:X1,cube_vert:Y1,cube_frag:Z1,depth_vert:q1,depth_frag:K1,distanceRGBA_vert:$1,distanceRGBA_frag:j1,equirect_vert:J1,equirect_frag:Q1,linedashed_vert:em,linedashed_frag:tm,meshbasic_vert:nm,meshbasic_frag:im,meshlambert_vert:am,meshlambert_frag:om,meshmatcap_vert:rm,meshmatcap_frag:sm,meshnormal_vert:lm,meshnormal_frag:cm,meshphong_vert:dm,meshphong_frag:um,meshphysical_vert:pm,meshphysical_frag:fm,meshtoon_vert:hm,meshtoon_frag:mm,points_vert:gm,points_frag:ym,shadow_vert:_m,shadow_frag:vm,sprite_vert:xm,sprite_frag:bm},Re={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pt}},envmap:{envMap:{value:null},envMapRotation:{value:new pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0},uvTransform:{value:new pt}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pt},alphaMap:{value:null},alphaMapTransform:{value:new pt},alphaTest:{value:0}}},jn={basic:{uniforms:Sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Oe(0)}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Sn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Sn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Sn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Oe(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Sn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Sn([Re.points,Re.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Sn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Sn([Re.common,Re.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Sn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Sn([Re.sprite,Re.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distanceRGBA:{uniforms:Sn([Re.common,Re.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distanceRGBA_vert,fragmentShader:ht.distanceRGBA_frag},shadow:{uniforms:Sn([Re.lights,Re.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};jn.physical={uniforms:Sn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pt},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pt},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const pr={r:0,b:0,g:0},Zi=new vi,Mm=new Jt;function wm(i,e,t,n,a,o,s){const r=new Oe(0);let l=o===!0?0:1,c,d,u=null,f=0,h=null;function g(C){let T=C.isScene===!0?C.background:null;return T&&T.isTexture&&(T=(C.backgroundBlurriness>0?t:e).get(T)),T}function x(C){let T=!1;const I=g(C);I===null?p(r,l):I&&I.isColor&&(p(I,1),T=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,s):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(C,T){const I=g(T);I&&(I.isCubeTexture||I.mapping===Nr)?(d===void 0&&(d=new wt(new ca(1,1,1),new Tn({name:"BackgroundCubeMaterial",uniforms:Xa(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(L,k,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(d)),Zi.copy(T.backgroundRotation),Zi.x*=-1,Zi.y*=-1,Zi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Zi.y*=-1,Zi.z*=-1),d.material.uniforms.envMap.value=I,d.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Mm.makeRotationFromEuler(Zi)),d.material.toneMapped=Ct.getTransfer(I.colorSpace)!==Ut,(u!==I||f!==I.version||h!==i.toneMapping)&&(d.material.needsUpdate=!0,u=I,f=I.version,h=i.toneMapping),d.layers.enableAll(),C.unshift(d,d.geometry,d.material,0,0,null)):I&&I.isTexture&&(c===void 0&&(c=new wt(new kn(2,2),new Tn({name:"BackgroundMaterial",uniforms:Xa(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Ii,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=I,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Ct.getTransfer(I.colorSpace)!==Ut,I.matrixAutoUpdate===!0&&I.updateMatrix(),c.material.uniforms.uvTransform.value.copy(I.matrix),(u!==I||f!==I.version||h!==i.toneMapping)&&(c.material.needsUpdate=!0,u=I,f=I.version,h=i.toneMapping),c.layers.enableAll(),C.unshift(c,c.geometry,c.material,0,0,null))}function p(C,T){C.getRGB(pr,mu(i)),n.buffers.color.setClear(pr.r,pr.g,pr.b,T,s)}function A(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(C,T=1){r.set(C),l=T,p(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(C){l=C,p(r,l)},render:x,addToRenderList:m,dispose:A}}function Sm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=f(null);let o=a,s=!1;function r(b,N,W,ee,ce){let ie=!1;const le=u(ee,W,N);o!==le&&(o=le,c(o.object)),ie=h(b,ee,W,ce),ie&&g(b,ee,W,ce),ce!==null&&e.update(ce,i.ELEMENT_ARRAY_BUFFER),(ie||s)&&(s=!1,T(b,N,W,ee),ce!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ce).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function d(b){return i.deleteVertexArray(b)}function u(b,N,W){const ee=W.wireframe===!0;let ce=n[b.id];ce===void 0&&(ce={},n[b.id]=ce);let ie=ce[N.id];ie===void 0&&(ie={},ce[N.id]=ie);let le=ie[ee];return le===void 0&&(le=f(l()),ie[ee]=le),le}function f(b){const N=[],W=[],ee=[];for(let ce=0;ce<t;ce++)N[ce]=0,W[ce]=0,ee[ce]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:W,attributeDivisors:ee,object:b,attributes:{},index:null}}function h(b,N,W,ee){const ce=o.attributes,ie=N.attributes;let le=0;const ue=W.getAttributes();for(const te in ue)if(ue[te].location>=0){const Ae=ce[te];let ze=ie[te];if(ze===void 0&&(te==="instanceMatrix"&&b.instanceMatrix&&(ze=b.instanceMatrix),te==="instanceColor"&&b.instanceColor&&(ze=b.instanceColor)),Ae===void 0||Ae.attribute!==ze||ze&&Ae.data!==ze.data)return!0;le++}return o.attributesNum!==le||o.index!==ee}function g(b,N,W,ee){const ce={},ie=N.attributes;let le=0;const ue=W.getAttributes();for(const te in ue)if(ue[te].location>=0){let Ae=ie[te];Ae===void 0&&(te==="instanceMatrix"&&b.instanceMatrix&&(Ae=b.instanceMatrix),te==="instanceColor"&&b.instanceColor&&(Ae=b.instanceColor));const ze={};ze.attribute=Ae,Ae&&Ae.data&&(ze.data=Ae.data),ce[te]=ze,le++}o.attributes=ce,o.attributesNum=le,o.index=ee}function x(){const b=o.newAttributes;for(let N=0,W=b.length;N<W;N++)b[N]=0}function m(b){p(b,0)}function p(b,N){const W=o.newAttributes,ee=o.enabledAttributes,ce=o.attributeDivisors;W[b]=1,ee[b]===0&&(i.enableVertexAttribArray(b),ee[b]=1),ce[b]!==N&&(i.vertexAttribDivisor(b,N),ce[b]=N)}function A(){const b=o.newAttributes,N=o.enabledAttributes;for(let W=0,ee=N.length;W<ee;W++)N[W]!==b[W]&&(i.disableVertexAttribArray(W),N[W]=0)}function C(b,N,W,ee,ce,ie,le){le===!0?i.vertexAttribIPointer(b,N,W,ce,ie):i.vertexAttribPointer(b,N,W,ee,ce,ie)}function T(b,N,W,ee){x();const ce=ee.attributes,ie=W.getAttributes(),le=N.defaultAttributeValues;for(const ue in ie){const te=ie[ue];if(te.location>=0){let Me=ce[ue];if(Me===void 0&&(ue==="instanceMatrix"&&b.instanceMatrix&&(Me=b.instanceMatrix),ue==="instanceColor"&&b.instanceColor&&(Me=b.instanceColor)),Me!==void 0){const Ae=Me.normalized,ze=Me.itemSize,dt=e.get(Me);if(dt===void 0)continue;const Mt=dt.buffer,tt=dt.type,gt=dt.bytesPerElement,ae=tt===i.INT||tt===i.UNSIGNED_INT||Me.gpuType===Hl;if(Me.isInterleavedBufferAttribute){const pe=Me.data,Ie=pe.stride,Qe=Me.offset;if(pe.isInstancedInterleavedBuffer){for(let Ge=0;Ge<te.locationSize;Ge++)p(te.location+Ge,pe.meshPerAttribute);b.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ge=0;Ge<te.locationSize;Ge++)m(te.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let Ge=0;Ge<te.locationSize;Ge++)C(te.location+Ge,ze/te.locationSize,tt,Ae,Ie*gt,(Qe+ze/te.locationSize*Ge)*gt,ae)}else{if(Me.isInstancedBufferAttribute){for(let pe=0;pe<te.locationSize;pe++)p(te.location+pe,Me.meshPerAttribute);b.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let pe=0;pe<te.locationSize;pe++)m(te.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Mt);for(let pe=0;pe<te.locationSize;pe++)C(te.location+pe,ze/te.locationSize,tt,Ae,ze*gt,ze/te.locationSize*pe*gt,ae)}}else if(le!==void 0){const Ae=le[ue];if(Ae!==void 0)switch(Ae.length){case 2:i.vertexAttrib2fv(te.location,Ae);break;case 3:i.vertexAttrib3fv(te.location,Ae);break;case 4:i.vertexAttrib4fv(te.location,Ae);break;default:i.vertexAttrib1fv(te.location,Ae)}}}}A()}function I(){P();for(const b in n){const N=n[b];for(const W in N){const ee=N[W];for(const ce in ee)d(ee[ce].object),delete ee[ce];delete N[W]}delete n[b]}}function L(b){if(n[b.id]===void 0)return;const N=n[b.id];for(const W in N){const ee=N[W];for(const ce in ee)d(ee[ce].object),delete ee[ce];delete N[W]}delete n[b.id]}function k(b){for(const N in n){const W=n[N];if(W[b.id]===void 0)continue;const ee=W[b.id];for(const ce in ee)d(ee[ce].object),delete ee[ce];delete W[b.id]}}function P(){S(),s=!0,o!==a&&(o=a,c(o.object))}function S(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:r,reset:P,resetDefaultState:S,dispose:I,releaseStatesOfGeometry:L,releaseStatesOfProgram:k,initAttributes:x,enableAttribute:m,disableUnusedAttributes:A}}function Tm(i,e,t){let n;function a(c){n=c}function o(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function s(c,d,u){u!==0&&(i.drawArraysInstanced(n,c,d,u),t.update(d,n,u))}function r(c,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,u);let h=0;for(let g=0;g<u;g++)h+=d[g];t.update(h,n,1)}function l(c,d,u,f){if(u===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)s(c[g],d[g],f[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,d,0,f,0,u);let g=0;for(let x=0;x<u;x++)g+=d[x]*f[x];t.update(g,n,1)}}this.setMode=a,this.render=o,this.renderInstances=s,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function Em(i,e,t,n){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(k){return!(k!==Zn&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(k){const P=k===mi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==_i&&n.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&k!==fi&&!P)}function l(k){if(k==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),T=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:A,maxVaryings:C,maxFragmentUniforms:T,vertexTextures:I,maxSamples:L}}function Am(i){const e=this;let t=null,n=0,a=!1,o=!1;const s=new $i,r=new pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const h=u.length!==0||f||n!==0||a;return a=f,n=u.length,h},this.beginShadows=function(){o=!0,d(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){t=d(u,f,0)},this.setState=function(u,f,h){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!a||g===null||g.length===0||o&&!m)o?d(null):c();else{const A=o?0:n,C=A*4;let T=p.clippingState||null;l.value=T,T=d(g,f,C,h);for(let I=0;I!==C;++I)T[I]=t[I];p.clippingState=T,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(u,f,h,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=h+x*4,A=f.matrixWorldInverse;r.getNormalMatrix(A),(m===null||m.length<p)&&(m=new Float32Array(p));for(let C=0,T=h;C!==x;++C,T+=4)s.copy(u[C]).applyMatrix4(A,r),s.normal.toArray(m,T),m[T+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Cm(i){let e=new WeakMap;function t(s,r){return r===Ks?s.mapping=Ha:r===$s&&(s.mapping=Va),s}function n(s){if(s&&s.isTexture){const r=s.mapping;if(r===Ks||r===$s)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new wh(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",a),t(c.texture,s.mapping)}else return null}}return s}function a(s){const r=s.target;r.removeEventListener("dispose",a);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const ka=4,sd=[.125,.215,.35,.446,.526,.582],ea=20,Ps=new Su,ld=new Oe;let Ls=null,Is=0,Ds=0,ks=!1;const ji=(1+Math.sqrt(5))/2,Ia=1/ji,cd=[new U(-ji,Ia,0),new U(ji,Ia,0),new U(-Ia,0,ji),new U(Ia,0,ji),new U(0,ji,-Ia),new U(0,ji,Ia),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Rm=new U;class dd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100,o={}){const{size:s=256,position:r=Rm}=o;Ls=this._renderer.getRenderTarget(),Is=this._renderer.getActiveCubeFace(),Ds=this._renderer.getActiveMipmapLevel(),ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,a,l,r),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ls,Is,Ds),this._renderer.xr.enabled=ks,e.scissorTest=!1,fr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ha||e.mapping===Va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ls=this._renderer.getRenderTarget(),Is=this._renderer.getActiveCubeFace(),Ds=this._renderer.getActiveMipmapLevel(),ks=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:mi,format:Zn,colorSpace:Wa,depthBuffer:!1},a=ud(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ud(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pm(o)),this._blurMaterial=Lm(o,e,t)}return a}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,Ps)}_sceneToCubeUV(e,t,n,a,o){const l=new On(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(ld),u.toneMapping=Pi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(a),u.clearDepth(),u.setRenderTarget(null));const x=new Zt({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1}),m=new wt(new ca,x);let p=!1;const A=e.background;A?A.isColor&&(x.color.copy(A),e.background=null,p=!0):(x.color.copy(ld),p=!0);for(let C=0;C<6;C++){const T=C%3;T===0?(l.up.set(0,c[C],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+d[C],o.y,o.z)):T===1?(l.up.set(0,0,c[C]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+d[C],o.z)):(l.up.set(0,c[C],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+d[C]));const I=this._cubeSize;fr(a,T*I,C>2?I:0,I,I),u.setRenderTarget(a),p&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===Ha||e.mapping===Va;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=fd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pd());const o=a?this._cubemapMaterial:this._equirectMaterial,s=new wt(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=e;const l=this._cubeSize;fr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,Ps)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let o=1;o<a;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),r=cd[(a-o-1)%cd.length];this._blur(e,o-1,o,s,r)}t.autoClear=n}_blur(e,t,n,a,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,a,"latitudinal",o),this._halfBlur(s,e,n,n,a,"longitudinal",o)}_halfBlur(e,t,n,a,o,s,r){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,u=new wt(this._lodPlanes[a],c),f=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*h):2*Math.PI/(2*ea-1),x=o/g,m=isFinite(o)?1+Math.floor(d*x):ea;m>ea&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ea}`);const p=[];let A=0;for(let k=0;k<ea;++k){const P=k/x,S=Math.exp(-P*P/2);p.push(S),k===0?A+=S:k<m&&(A+=2*S)}for(let k=0;k<p.length;k++)p[k]=p[k]/A;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=s==="latitudinal",r&&(f.poleAxis.value=r);const{_lodMax:C}=this;f.dTheta.value=g,f.mipInt.value=C-n;const T=this._sizeLods[a],I=3*T*(a>C-ka?a-C+ka:0),L=4*(this._cubeSize-T);fr(t,I,L,3*T,2*T),l.setRenderTarget(t),l.render(u,Ps)}}function Pm(i){const e=[],t=[],n=[];let a=i;const o=i-ka+1+sd.length;for(let s=0;s<o;s++){const r=Math.pow(2,a);t.push(r);let l=1/r;s>i-ka?l=sd[s-i+ka-1]:s===0&&(l=0),n.push(l);const c=1/(r-2),d=-c,u=1+c,f=[d,d,u,d,u,u,d,d,u,u,d,u],h=6,g=6,x=3,m=2,p=1,A=new Float32Array(x*g*h),C=new Float32Array(m*g*h),T=new Float32Array(p*g*h);for(let L=0;L<h;L++){const k=L%3*2/3-1,P=L>2?0:-1,S=[k,P,0,k+2/3,P,0,k+2/3,P+1,0,k,P,0,k+2/3,P+1,0,k,P+1,0];A.set(S,x*g*L),C.set(f,m*g*L);const b=[L,L,L,L,L,L];T.set(b,p*g*L)}const I=new jt;I.setAttribute("position",new rn(A,x)),I.setAttribute("uv",new rn(C,m)),I.setAttribute("faceIndex",new rn(T,p)),e.push(I),a>ka&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ud(i,e,t){const n=new Kn(i,e,t);return n.texture.mapping=Nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function Lm(i,e,t){const n=new Float32Array(ea),a=new U(0,1,0);return new Tn({name:"SphericalGaussianBlur",defines:{n:ea,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:tc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function pd(){return new Tn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tc(),fragmentShader:`

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
		`,blending:hi,depthTest:!1,depthWrite:!1})}function fd(){return new Tn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hi,depthTest:!1,depthWrite:!1})}function tc(){return`

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
	`}function Im(i){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===Ks||l===$s,d=l===Ha||l===Va;if(c||d){let u=e.get(r);const f=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==f)return t===null&&(t=new dd(i)),u=c?t.fromEquirectangular(r,u):t.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),u.texture;if(u!==void 0)return u.texture;{const h=r.image;return c&&h&&h.height>0||d&&h&&a(h)?(t===null&&(t=new dd(i)),u=c?t.fromEquirectangular(r):t.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),r.addEventListener("dispose",o),u.texture):null}}}return r}function a(r){let l=0;const c=6;for(let d=0;d<c;d++)r[d]!==void 0&&l++;return l===c}function o(r){const l=r.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Dm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&Eo("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function km(i,e,t,n){const a={},o=new WeakMap;function s(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",s),delete a[f.id];const h=o.get(f);h&&(e.remove(h),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function r(u,f){return a[f.id]===!0||(f.addEventListener("dispose",s),a[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const h in f)e.update(f[h],i.ARRAY_BUFFER)}function c(u){const f=[],h=u.index,g=u.attributes.position;let x=0;if(h!==null){const A=h.array;x=h.version;for(let C=0,T=A.length;C<T;C+=3){const I=A[C+0],L=A[C+1],k=A[C+2];f.push(I,L,L,k,k,I)}}else if(g!==void 0){const A=g.array;x=g.version;for(let C=0,T=A.length/3-1;C<T;C+=3){const I=C+0,L=C+1,k=C+2;f.push(I,L,L,k,k,I)}}else return;const m=new(cu(f)?hu:fu)(f,1);m.version=x;const p=o.get(u);p&&e.remove(p),o.set(u,m)}function d(u){const f=o.get(u);if(f){const h=u.index;h!==null&&f.version<h.version&&c(u)}else c(u);return o.get(u)}return{get:r,update:l,getWireframeAttribute:d}}function Nm(i,e,t){let n;function a(f){n=f}let o,s;function r(f){o=f.type,s=f.bytesPerElement}function l(f,h){i.drawElements(n,h,o,f*s),t.update(h,n,1)}function c(f,h,g){g!==0&&(i.drawElementsInstanced(n,h,o,f*s,g),t.update(h,n,g))}function d(f,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,o,f,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function u(f,h,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/s,h[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,o,f,0,x,0,g);let p=0;for(let A=0;A<g;A++)p+=h[A]*x[A];t.update(p,n,1)}}this.setMode=a,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=u}function Um(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,r){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=r*(o/3);break;case i.LINES:t.lines+=r*(o/2);break;case i.LINE_STRIP:t.lines+=r*(o-1);break;case i.LINE_LOOP:t.lines+=r*o;break;case i.POINTS:t.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Om(i,e,t){const n=new WeakMap,a=new Qt;function o(s,r,l){const c=s.morphTargetInfluences,d=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=d!==void 0?d.length:0;let f=n.get(r);if(f===void 0||f.count!==u){let b=function(){P.dispose(),n.delete(r),r.removeEventListener("dispose",b)};var h=b;f!==void 0&&f.texture.dispose();const g=r.morphAttributes.position!==void 0,x=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,p=r.morphAttributes.position||[],A=r.morphAttributes.normal||[],C=r.morphAttributes.color||[];let T=0;g===!0&&(T=1),x===!0&&(T=2),m===!0&&(T=3);let I=r.attributes.position.count*T,L=1;I>e.maxTextureSize&&(L=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const k=new Float32Array(I*L*4*u),P=new du(k,I,L,u);P.type=fi,P.needsUpdate=!0;const S=T*4;for(let N=0;N<u;N++){const W=p[N],ee=A[N],ce=C[N],ie=I*L*4*N;for(let le=0;le<W.count;le++){const ue=le*S;g===!0&&(a.fromBufferAttribute(W,le),k[ie+ue+0]=a.x,k[ie+ue+1]=a.y,k[ie+ue+2]=a.z,k[ie+ue+3]=0),x===!0&&(a.fromBufferAttribute(ee,le),k[ie+ue+4]=a.x,k[ie+ue+5]=a.y,k[ie+ue+6]=a.z,k[ie+ue+7]=0),m===!0&&(a.fromBufferAttribute(ce,le),k[ie+ue+8]=a.x,k[ie+ue+9]=a.y,k[ie+ue+10]=a.z,k[ie+ue+11]=ce.itemSize===4?a.w:1)}}f={count:u,texture:P,size:new it(I,L)},n.set(r,f),r.addEventListener("dispose",b)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=r.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function Fm(i,e,t,n){let a=new WeakMap;function o(l){const c=n.render.frame,d=l.geometry,u=e.get(l,d);if(a.get(u)!==c&&(e.update(u),a.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),a.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;a.get(f)!==c&&(f.update(),a.set(f,c))}return u}function s(){a=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}const Eu=new bn,hd=new Mu(1,1),Au=new du,Cu=new sh,Ru=new yu,md=[],gd=[],yd=new Float32Array(16),_d=new Float32Array(9),vd=new Float32Array(4);function $a(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let o=md[a];if(o===void 0&&(o=new Float32Array(a),md[a]=o),e!==0){n.toArray(o,0);for(let s=1,r=0;s!==e;++s)r+=t,i[s].toArray(o,r)}return o}function sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ln(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fr(i,e){let t=gd[e];t===void 0&&(t=new Int32Array(e),gd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Bm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2fv(this.addr,e),ln(t,e)}}function Gm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;i.uniform3fv(this.addr,e),ln(t,e)}}function Hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4fv(this.addr,e),ln(t,e)}}function Vm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(sn(t,n))return;vd.set(n),i.uniformMatrix2fv(this.addr,!1,vd),ln(t,n)}}function Wm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(sn(t,n))return;_d.set(n),i.uniformMatrix3fv(this.addr,!1,_d),ln(t,n)}}function Xm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(sn(t,n))return;yd.set(n),i.uniformMatrix4fv(this.addr,!1,yd),ln(t,n)}}function Ym(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2iv(this.addr,e),ln(t,e)}}function qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3iv(this.addr,e),ln(t,e)}}function Km(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4iv(this.addr,e),ln(t,e)}}function $m(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;i.uniform2uiv(this.addr,e),ln(t,e)}}function Jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;i.uniform3uiv(this.addr,e),ln(t,e)}}function Qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;i.uniform4uiv(this.addr,e),ln(t,e)}}function e2(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let o;this.type===i.SAMPLER_2D_SHADOW?(hd.compareFunction=lu,o=hd):o=Eu,t.setTexture2D(e||o,a)}function t2(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||Cu,a)}function n2(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||Ru,a)}function i2(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||Au,a)}function a2(i){switch(i){case 5126:return Bm;case 35664:return zm;case 35665:return Gm;case 35666:return Hm;case 35674:return Vm;case 35675:return Wm;case 35676:return Xm;case 5124:case 35670:return Ym;case 35667:case 35671:return Zm;case 35668:case 35672:return qm;case 35669:case 35673:return Km;case 5125:return $m;case 36294:return jm;case 36295:return Jm;case 36296:return Qm;case 35678:case 36198:case 36298:case 36306:case 35682:return e2;case 35679:case 36299:case 36307:return t2;case 35680:case 36300:case 36308:case 36293:return n2;case 36289:case 36303:case 36311:case 36292:return i2}}function o2(i,e){i.uniform1fv(this.addr,e)}function r2(i,e){const t=$a(e,this.size,2);i.uniform2fv(this.addr,t)}function s2(i,e){const t=$a(e,this.size,3);i.uniform3fv(this.addr,t)}function l2(i,e){const t=$a(e,this.size,4);i.uniform4fv(this.addr,t)}function c2(i,e){const t=$a(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function d2(i,e){const t=$a(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function u2(i,e){const t=$a(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function p2(i,e){i.uniform1iv(this.addr,e)}function f2(i,e){i.uniform2iv(this.addr,e)}function h2(i,e){i.uniform3iv(this.addr,e)}function m2(i,e){i.uniform4iv(this.addr,e)}function g2(i,e){i.uniform1uiv(this.addr,e)}function y2(i,e){i.uniform2uiv(this.addr,e)}function _2(i,e){i.uniform3uiv(this.addr,e)}function v2(i,e){i.uniform4uiv(this.addr,e)}function x2(i,e,t){const n=this.cache,a=e.length,o=Fr(t,a);sn(n,o)||(i.uniform1iv(this.addr,o),ln(n,o));for(let s=0;s!==a;++s)t.setTexture2D(e[s]||Eu,o[s])}function b2(i,e,t){const n=this.cache,a=e.length,o=Fr(t,a);sn(n,o)||(i.uniform1iv(this.addr,o),ln(n,o));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||Cu,o[s])}function M2(i,e,t){const n=this.cache,a=e.length,o=Fr(t,a);sn(n,o)||(i.uniform1iv(this.addr,o),ln(n,o));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||Ru,o[s])}function w2(i,e,t){const n=this.cache,a=e.length,o=Fr(t,a);sn(n,o)||(i.uniform1iv(this.addr,o),ln(n,o));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||Au,o[s])}function S2(i){switch(i){case 5126:return o2;case 35664:return r2;case 35665:return s2;case 35666:return l2;case 35674:return c2;case 35675:return d2;case 35676:return u2;case 5124:case 35670:return p2;case 35667:case 35671:return f2;case 35668:case 35672:return h2;case 35669:case 35673:return m2;case 5125:return g2;case 36294:return y2;case 36295:return _2;case 36296:return v2;case 35678:case 36198:case 36298:case 36306:case 35682:return x2;case 35679:case 36299:case 36307:return b2;case 35680:case 36300:case 36308:case 36293:return M2;case 36289:case 36303:case 36311:case 36292:return w2}}class T2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=a2(t.type)}}class E2{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=S2(t.type)}}class A2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let o=0,s=a.length;o!==s;++o){const r=a[o];r.setValue(e,t[r.id],n)}}}const Ns=/(\w+)(\])?(\[|\.)?/g;function xd(i,e){i.seq.push(e),i.map[e.id]=e}function C2(i,e,t){const n=i.name,a=n.length;for(Ns.lastIndex=0;;){const o=Ns.exec(n),s=Ns.lastIndex;let r=o[1];const l=o[2]==="]",c=o[3];if(l&&(r=r|0),c===void 0||c==="["&&s+2===a){xd(t,c===void 0?new T2(r,i,e):new E2(r,i,e));break}else{let u=t.map[r];u===void 0&&(u=new A2(r),xd(t,u)),t=u}}}class Sr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),s=e.getUniformLocation(t,o.name);C2(o,s,this)}}setValue(e,t,n,a){const o=this.map[t];o!==void 0&&o.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let o=0,s=t.length;o!==s;++o){const r=t[o],l=n[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,o=e.length;a!==o;++a){const s=e[a];s.id in t&&n.push(s)}return n}}function bd(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const R2=37297;let P2=0;function L2(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=a;s<o;s++){const r=s+1;n.push(`${r===e?">":" "} ${r}: ${t[s]}`)}return n.join(`
`)}const Md=new pt;function I2(i){Ct._getMatrix(Md,Ct.workingColorSpace,i);const e=`mat3( ${Md.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(i)){case Cr:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function wd(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+L2(i.getShaderSource(e),r)}else return o}function D2(i,e){const t=I2(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function k2(i,e){let t;switch(e){case Zd:t="Linear";break;case qd:t="Reinhard";break;case Kd:t="Cineon";break;case Gl:t="ACESFilmic";break;case jd:t="AgX";break;case Jd:t="Neutral";break;case $d:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hr=new U;function N2(){Ct.getLuminanceCoefficients(hr);const i=hr.x.toFixed(4),e=hr.y.toFixed(4),t=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function U2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(po).join(`
`)}function O2(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function F2(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const o=i.getActiveAttrib(e,a),s=o.name;let r=1;o.type===i.FLOAT_MAT2&&(r=2),o.type===i.FLOAT_MAT3&&(r=3),o.type===i.FLOAT_MAT4&&(r=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:r}}return t}function po(i){return i!==""}function Sd(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Td(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const B2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cl(i){return i.replace(B2,G2)}const z2=new Map;function G2(i,e){let t=ht[e];if(t===void 0){const n=z2.get(e);if(n!==void 0)t=ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Cl(t)}const H2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ed(i){return i.replace(H2,V2)}function V2(i,e,t,n){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function Ad(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function W2(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Xd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===of?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function X2(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ha:case Va:e="ENVMAP_TYPE_CUBE";break;case Nr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Y2(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Va&&(e="ENVMAP_MODE_REFRACTION"),e}function Z2(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yd:e="ENVMAP_BLENDING_MULTIPLY";break;case Sf:e="ENVMAP_BLENDING_MIX";break;case Tf:e="ENVMAP_BLENDING_ADD";break}return e}function q2(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function K2(i,e,t,n){const a=i.getContext(),o=t.defines;let s=t.vertexShader,r=t.fragmentShader;const l=W2(t),c=X2(t),d=Y2(t),u=Z2(t),f=q2(t),h=U2(t),g=O2(o),x=a.createProgram();let m,p,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(po).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(po).join(`
`),p.length>0&&(p+=`
`)):(m=[Ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(po).join(`
`),p=[Ad(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?ht.tonemapping_pars_fragment:"",t.toneMapping!==Pi?k2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,D2("linearToOutputTexel",t.outputColorSpace),N2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(po).join(`
`)),s=Cl(s),s=Sd(s,t),s=Td(s,t),r=Cl(r),r=Sd(r,t),r=Td(r,t),s=Ed(s),r=Ed(r),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const C=A+m+s,T=A+p+r,I=bd(a,a.VERTEX_SHADER,C),L=bd(a,a.FRAGMENT_SHADER,T);a.attachShader(x,I),a.attachShader(x,L),t.index0AttributeName!==void 0?a.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function k(N){if(i.debug.checkShaderErrors){const W=a.getProgramInfoLog(x)||"",ee=a.getShaderInfoLog(I)||"",ce=a.getShaderInfoLog(L)||"",ie=W.trim(),le=ee.trim(),ue=ce.trim();let te=!0,Me=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,x,I,L);else{const Ae=wd(a,I,"vertex"),ze=wd(a,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+ie+`
`+Ae+`
`+ze)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(le===""||ue==="")&&(Me=!1);Me&&(N.diagnostics={runnable:te,programLog:ie,vertexShader:{log:le,prefix:m},fragmentShader:{log:ue,prefix:p}})}a.deleteShader(I),a.deleteShader(L),P=new Sr(a,x),S=F2(a,x)}let P;this.getUniforms=function(){return P===void 0&&k(this),P};let S;this.getAttributes=function(){return S===void 0&&k(this),S};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=a.getProgramParameter(x,R2)),b},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=P2++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=L,this}let $2=0;class j2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new J2(e),t.set(e,n)),n}}class J2{constructor(e){this.id=$2++,this.code=e,this.usedTimes=0}}function Q2(i,e,t,n,a,o,s){const r=new uu,l=new j2,c=new Set,d=[],u=a.logarithmicDepthBuffer,f=a.vertexTextures;let h=a.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,b,N,W,ee){const ce=W.fog,ie=ee.geometry,le=S.isMeshStandardMaterial?W.environment:null,ue=(S.isMeshStandardMaterial?t:e).get(S.envMap||le),te=ue&&ue.mapping===Nr?ue.image.height:null,Me=g[S.type];S.precision!==null&&(h=a.getMaxPrecision(S.precision),h!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",h,"instead."));const Ae=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,ze=Ae!==void 0?Ae.length:0;let dt=0;ie.morphAttributes.position!==void 0&&(dt=1),ie.morphAttributes.normal!==void 0&&(dt=2),ie.morphAttributes.color!==void 0&&(dt=3);let Mt,tt,gt,ae;if(Me){const ct=jn[Me];Mt=ct.vertexShader,tt=ct.fragmentShader}else Mt=S.vertexShader,tt=S.fragmentShader,l.update(S),gt=l.getVertexShaderID(S),ae=l.getFragmentShaderID(S);const pe=i.getRenderTarget(),Ie=i.state.buffers.depth.getReversed(),Qe=ee.isInstancedMesh===!0,Ge=ee.isBatchedMesh===!0,ft=!!S.map,Ht=!!S.matcap,D=!!ue,Dt=!!S.aoMap,Ke=!!S.lightMap,De=!!S.bumpMap,ke=!!S.normalMap,st=!!S.displacementMap,Ne=!!S.emissiveMap,nt=!!S.metalnessMap,Bt=!!S.roughnessMap,St=S.anisotropy>0,w=S.clearcoat>0,y=S.dispersion>0,X=S.iridescence>0,oe=S.sheen>0,re=S.transmission>0,V=St&&!!S.anisotropyMap,Se=w&&!!S.clearcoatMap,xe=w&&!!S.clearcoatNormalMap,We=w&&!!S.clearcoatRoughnessMap,He=X&&!!S.iridescenceMap,_e=X&&!!S.iridescenceThicknessMap,Te=oe&&!!S.sheenColorMap,et=oe&&!!S.sheenRoughnessMap,Fe=!!S.specularMap,Ee=!!S.specularColorMap,at=!!S.specularIntensityMap,_=re&&!!S.transmissionMap,Y=re&&!!S.thicknessMap,q=!!S.gradientMap,fe=!!S.alphaMap,se=S.alphaTest>0,R=!!S.alphaHash,be=!!S.extensions;let $=Pi;S.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&($=i.toneMapping);const lt={shaderID:Me,shaderType:S.type,shaderName:S.name,vertexShader:Mt,fragmentShader:tt,defines:S.defines,customVertexShaderID:gt,customFragmentShaderID:ae,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:h,batching:Ge,batchingColor:Ge&&ee._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&ee.instanceColor!==null,instancingMorph:Qe&&ee.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Wa,alphaToCoverage:!!S.alphaToCoverage,map:ft,matcap:Ht,envMap:D,envMapMode:D&&ue.mapping,envMapCubeUVHeight:te,aoMap:Dt,lightMap:Ke,bumpMap:De,normalMap:ke,displacementMap:f&&st,emissiveMap:Ne,normalMapObjectSpace:ke&&S.normalMapType===Pf,normalMapTangentSpace:ke&&S.normalMapType===Rf,metalnessMap:nt,roughnessMap:Bt,anisotropy:St,anisotropyMap:V,clearcoat:w,clearcoatMap:Se,clearcoatNormalMap:xe,clearcoatRoughnessMap:We,dispersion:y,iridescence:X,iridescenceMap:He,iridescenceThicknessMap:_e,sheen:oe,sheenColorMap:Te,sheenRoughnessMap:et,specularMap:Fe,specularColorMap:Ee,specularIntensityMap:at,transmission:re,transmissionMap:_,thicknessMap:Y,gradientMap:q,opaque:S.transparent===!1&&S.blending===Rn&&S.alphaToCoverage===!1,alphaMap:fe,alphaTest:se,alphaHash:R,combine:S.combine,mapUv:ft&&x(S.map.channel),aoMapUv:Dt&&x(S.aoMap.channel),lightMapUv:Ke&&x(S.lightMap.channel),bumpMapUv:De&&x(S.bumpMap.channel),normalMapUv:ke&&x(S.normalMap.channel),displacementMapUv:st&&x(S.displacementMap.channel),emissiveMapUv:Ne&&x(S.emissiveMap.channel),metalnessMapUv:nt&&x(S.metalnessMap.channel),roughnessMapUv:Bt&&x(S.roughnessMap.channel),anisotropyMapUv:V&&x(S.anisotropyMap.channel),clearcoatMapUv:Se&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:xe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:et&&x(S.sheenRoughnessMap.channel),specularMapUv:Fe&&x(S.specularMap.channel),specularColorMapUv:Ee&&x(S.specularColorMap.channel),specularIntensityMapUv:at&&x(S.specularIntensityMap.channel),transmissionMapUv:_&&x(S.transmissionMap.channel),thicknessMapUv:Y&&x(S.thicknessMap.channel),alphaMapUv:fe&&x(S.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(ke||St),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:ee.isPoints===!0&&!!ie.attributes.uv&&(ft||fe),fog:!!ce,useFog:S.fog===!0,fogExp2:!!ce&&ce.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ie,skinning:ee.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:ze,morphTextureStride:dt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:$,decodeVideoTexture:ft&&S.map.isVideoTexture===!0&&Ct.getTransfer(S.map.colorSpace)===Ut,decodeVideoTextureEmissive:Ne&&S.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(S.emissiveMap.colorSpace)===Ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Fn,flipSided:S.side===En,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:be&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(be&&S.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function p(S){const b=[];if(S.shaderID?b.push(S.shaderID):(b.push(S.customVertexShaderID),b.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)b.push(N),b.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(A(b,S),C(b,S),b.push(i.outputColorSpace)),b.push(S.customProgramCacheKey),b.join()}function A(S,b){S.push(b.precision),S.push(b.outputColorSpace),S.push(b.envMapMode),S.push(b.envMapCubeUVHeight),S.push(b.mapUv),S.push(b.alphaMapUv),S.push(b.lightMapUv),S.push(b.aoMapUv),S.push(b.bumpMapUv),S.push(b.normalMapUv),S.push(b.displacementMapUv),S.push(b.emissiveMapUv),S.push(b.metalnessMapUv),S.push(b.roughnessMapUv),S.push(b.anisotropyMapUv),S.push(b.clearcoatMapUv),S.push(b.clearcoatNormalMapUv),S.push(b.clearcoatRoughnessMapUv),S.push(b.iridescenceMapUv),S.push(b.iridescenceThicknessMapUv),S.push(b.sheenColorMapUv),S.push(b.sheenRoughnessMapUv),S.push(b.specularMapUv),S.push(b.specularColorMapUv),S.push(b.specularIntensityMapUv),S.push(b.transmissionMapUv),S.push(b.thicknessMapUv),S.push(b.combine),S.push(b.fogExp2),S.push(b.sizeAttenuation),S.push(b.morphTargetsCount),S.push(b.morphAttributeCount),S.push(b.numDirLights),S.push(b.numPointLights),S.push(b.numSpotLights),S.push(b.numSpotLightMaps),S.push(b.numHemiLights),S.push(b.numRectAreaLights),S.push(b.numDirLightShadows),S.push(b.numPointLightShadows),S.push(b.numSpotLightShadows),S.push(b.numSpotLightShadowsWithMaps),S.push(b.numLightProbes),S.push(b.shadowMapType),S.push(b.toneMapping),S.push(b.numClippingPlanes),S.push(b.numClipIntersection),S.push(b.depthPacking)}function C(S,b){r.disableAll(),b.supportsVertexTextures&&r.enable(0),b.instancing&&r.enable(1),b.instancingColor&&r.enable(2),b.instancingMorph&&r.enable(3),b.matcap&&r.enable(4),b.envMap&&r.enable(5),b.normalMapObjectSpace&&r.enable(6),b.normalMapTangentSpace&&r.enable(7),b.clearcoat&&r.enable(8),b.iridescence&&r.enable(9),b.alphaTest&&r.enable(10),b.vertexColors&&r.enable(11),b.vertexAlphas&&r.enable(12),b.vertexUv1s&&r.enable(13),b.vertexUv2s&&r.enable(14),b.vertexUv3s&&r.enable(15),b.vertexTangents&&r.enable(16),b.anisotropy&&r.enable(17),b.alphaHash&&r.enable(18),b.batching&&r.enable(19),b.dispersion&&r.enable(20),b.batchingColor&&r.enable(21),b.gradientMap&&r.enable(22),S.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reversedDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),S.push(r.mask)}function T(S){const b=g[S.type];let N;if(b){const W=jn[b];N=Ao.clone(W.uniforms)}else N=S.uniforms;return N}function I(S,b){let N;for(let W=0,ee=d.length;W<ee;W++){const ce=d[W];if(ce.cacheKey===b){N=ce,++N.usedTimes;break}}return N===void 0&&(N=new K2(i,b,S,o),d.push(N)),N}function L(S){if(--S.usedTimes===0){const b=d.indexOf(S);d[b]=d[d.length-1],d.pop(),S.destroy()}}function k(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:T,acquireProgram:I,releaseProgram:L,releaseShaderCache:k,programs:d,dispose:P}}function eg(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let r=i.get(s);return r===void 0&&(r={},i.set(s,r)),r}function n(s){i.delete(s)}function a(s,r,l){i.get(s)[r]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:o}}function tg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Cd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Rd(){const i=[];let e=0;const t=[],n=[],a=[];function o(){e=0,t.length=0,n.length=0,a.length=0}function s(u,f,h,g,x,m){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:f,material:h,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[e]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=h,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),e++,p}function r(u,f,h,g,x,m){const p=s(u,f,h,g,x,m);h.transmission>0?n.push(p):h.transparent===!0?a.push(p):t.push(p)}function l(u,f,h,g,x,m){const p=s(u,f,h,g,x,m);h.transmission>0?n.unshift(p):h.transparent===!0?a.unshift(p):t.unshift(p)}function c(u,f){t.length>1&&t.sort(u||tg),n.length>1&&n.sort(f||Cd),a.length>1&&a.sort(f||Cd)}function d(){for(let u=e,f=i.length;u<f;u++){const h=i[u];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:a,init:o,push:r,unshift:l,finish:d,sort:c}}function ng(){let i=new WeakMap;function e(n,a){const o=i.get(n);let s;return o===void 0?(s=new Rd,i.set(n,[s])):a>=o.length?(s=new Rd,o.push(s)):s=o[a],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function ig(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Oe};break;case"SpotLight":t={position:new U,direction:new U,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":t={color:new Oe,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function ag(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let og=0;function rg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function sg(i){const e=new ig,t=ag(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const a=new U,o=new Jt,s=new Jt;function r(c){let d=0,u=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,A=0,C=0,T=0,I=0,L=0,k=0;c.sort(rg);for(let S=0,b=c.length;S<b;S++){const N=c[S],W=N.color,ee=N.intensity,ce=N.distance,ie=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)d+=W.r*ee,u+=W.g*ee,f+=W.b*ee;else if(N.isLightProbe){for(let le=0;le<9;le++)n.probe[le].addScaledVector(N.sh.coefficients[le],ee);k++}else if(N.isDirectionalLight){const le=e.get(N);if(le.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ue=N.shadow,te=t.get(N);te.shadowIntensity=ue.intensity,te.shadowBias=ue.bias,te.shadowNormalBias=ue.normalBias,te.shadowRadius=ue.radius,te.shadowMapSize=ue.mapSize,n.directionalShadow[h]=te,n.directionalShadowMap[h]=ie,n.directionalShadowMatrix[h]=N.shadow.matrix,A++}n.directional[h]=le,h++}else if(N.isSpotLight){const le=e.get(N);le.position.setFromMatrixPosition(N.matrixWorld),le.color.copy(W).multiplyScalar(ee),le.distance=ce,le.coneCos=Math.cos(N.angle),le.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),le.decay=N.decay,n.spot[x]=le;const ue=N.shadow;if(N.map&&(n.spotLightMap[I]=N.map,I++,ue.updateMatrices(N),N.castShadow&&L++),n.spotLightMatrix[x]=ue.matrix,N.castShadow){const te=t.get(N);te.shadowIntensity=ue.intensity,te.shadowBias=ue.bias,te.shadowNormalBias=ue.normalBias,te.shadowRadius=ue.radius,te.shadowMapSize=ue.mapSize,n.spotShadow[x]=te,n.spotShadowMap[x]=ie,T++}x++}else if(N.isRectAreaLight){const le=e.get(N);le.color.copy(W).multiplyScalar(ee),le.halfWidth.set(N.width*.5,0,0),le.halfHeight.set(0,N.height*.5,0),n.rectArea[m]=le,m++}else if(N.isPointLight){const le=e.get(N);if(le.color.copy(N.color).multiplyScalar(N.intensity),le.distance=N.distance,le.decay=N.decay,N.castShadow){const ue=N.shadow,te=t.get(N);te.shadowIntensity=ue.intensity,te.shadowBias=ue.bias,te.shadowNormalBias=ue.normalBias,te.shadowRadius=ue.radius,te.shadowMapSize=ue.mapSize,te.shadowCameraNear=ue.camera.near,te.shadowCameraFar=ue.camera.far,n.pointShadow[g]=te,n.pointShadowMap[g]=ie,n.pointShadowMatrix[g]=N.shadow.matrix,C++}n.point[g]=le,g++}else if(N.isHemisphereLight){const le=e.get(N);le.skyColor.copy(N.color).multiplyScalar(ee),le.groundColor.copy(N.groundColor).multiplyScalar(ee),n.hemi[p]=le,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==h||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==A||P.numPointShadows!==C||P.numSpotShadows!==T||P.numSpotMaps!==I||P.numLightProbes!==k)&&(n.directional.length=h,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=T,n.spotShadowMap.length=T,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=T+I-L,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=k,P.directionalLength=h,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=A,P.numPointShadows=C,P.numSpotShadows=T,P.numSpotMaps=I,P.numLightProbes=k,n.version=og++)}function l(c,d){let u=0,f=0,h=0,g=0,x=0;const m=d.matrixWorldInverse;for(let p=0,A=c.length;p<A;p++){const C=c[p];if(C.isDirectionalLight){const T=n.directional[u];T.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(m),u++}else if(C.isSpotLight){const T=n.spot[h];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(C.matrixWorld),a.setFromMatrixPosition(C.target.matrixWorld),T.direction.sub(a),T.direction.transformDirection(m),h++}else if(C.isRectAreaLight){const T=n.rectArea[g];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(m),s.identity(),o.copy(C.matrixWorld),o.premultiply(m),s.extractRotation(o),T.halfWidth.set(C.width*.5,0,0),T.halfHeight.set(0,C.height*.5,0),T.halfWidth.applyMatrix4(s),T.halfHeight.applyMatrix4(s),g++}else if(C.isPointLight){const T=n.point[f];T.position.setFromMatrixPosition(C.matrixWorld),T.position.applyMatrix4(m),f++}else if(C.isHemisphereLight){const T=n.hemi[x];T.direction.setFromMatrixPosition(C.matrixWorld),T.direction.transformDirection(m),x++}}}return{setup:r,setupView:l,state:n}}function Pd(i){const e=new sg(i),t=[],n=[];function a(d){c.camera=d,t.length=0,n.length=0}function o(d){t.push(d)}function s(d){n.push(d)}function r(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:r,setupLightsView:l,pushLight:o,pushShadow:s}}function lg(i){let e=new WeakMap;function t(a,o=0){const s=e.get(a);let r;return s===void 0?(r=new Pd(i),e.set(a,[r])):o>=s.length?(r=new Pd(i),s.push(r)):r=s[o],r}function n(){e=new WeakMap}return{get:t,dispose:n}}const cg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dg=`uniform sampler2D shadow_pass;
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
}`;function ug(i,e,t){let n=new vu;const a=new it,o=new it,s=new Qt,r=new Ih({depthPacking:Cf}),l=new Dh,c={},d=t.maxTextureSize,u={[Ii]:En,[En]:Ii,[Fn]:Fn},f=new Tn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:cg,fragmentShader:dg}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new jt;g.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new wt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xd;let p=this.type;this.render=function(L,k,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||L.length===0)return;const S=i.getRenderTarget(),b=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),W=i.state;W.setBlending(hi),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const ee=p!==pi&&this.type===pi,ce=p===pi&&this.type!==pi;for(let ie=0,le=L.length;ie<le;ie++){const ue=L[ie],te=ue.shadow;if(te===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(te.autoUpdate===!1&&te.needsUpdate===!1)continue;a.copy(te.mapSize);const Me=te.getFrameExtents();if(a.multiply(Me),o.copy(te.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/Me.x),a.x=o.x*Me.x,te.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/Me.y),a.y=o.y*Me.y,te.mapSize.y=o.y)),te.map===null||ee===!0||ce===!0){const ze=this.type!==pi?{minFilter:qn,magFilter:qn}:{};te.map!==null&&te.map.dispose(),te.map=new Kn(a.x,a.y,ze),te.map.texture.name=ue.name+".shadowMap",te.camera.updateProjectionMatrix()}i.setRenderTarget(te.map),i.clear();const Ae=te.getViewportCount();for(let ze=0;ze<Ae;ze++){const dt=te.getViewport(ze);s.set(o.x*dt.x,o.y*dt.y,o.x*dt.z,o.y*dt.w),W.viewport(s),te.updateMatrices(ue,ze),n=te.getFrustum(),T(k,P,te.camera,ue,this.type)}te.isPointLightShadow!==!0&&this.type===pi&&A(te,P),te.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,b,N)};function A(L,k){const P=e.update(x);f.defines.VSM_SAMPLES!==L.blurSamples&&(f.defines.VSM_SAMPLES=L.blurSamples,h.defines.VSM_SAMPLES=L.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Kn(a.x,a.y)),f.uniforms.shadow_pass.value=L.map.texture,f.uniforms.resolution.value=L.mapSize,f.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(k,null,P,f,x,null),h.uniforms.shadow_pass.value=L.mapPass.texture,h.uniforms.resolution.value=L.mapSize,h.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(k,null,P,h,x,null)}function C(L,k,P,S){let b=null;const N=P.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(N!==void 0)b=N;else if(b=P.isPointLight===!0?l:r,i.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const W=b.uuid,ee=k.uuid;let ce=c[W];ce===void 0&&(ce={},c[W]=ce);let ie=ce[ee];ie===void 0&&(ie=b.clone(),ce[ee]=ie,k.addEventListener("dispose",I)),b=ie}if(b.visible=k.visible,b.wireframe=k.wireframe,S===pi?b.side=k.shadowSide!==null?k.shadowSide:k.side:b.side=k.shadowSide!==null?k.shadowSide:u[k.side],b.alphaMap=k.alphaMap,b.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,b.map=k.map,b.clipShadows=k.clipShadows,b.clippingPlanes=k.clippingPlanes,b.clipIntersection=k.clipIntersection,b.displacementMap=k.displacementMap,b.displacementScale=k.displacementScale,b.displacementBias=k.displacementBias,b.wireframeLinewidth=k.wireframeLinewidth,b.linewidth=k.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const W=i.properties.get(b);W.light=P}return b}function T(L,k,P,S,b){if(L.visible===!1)return;if(L.layers.test(k.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&b===pi)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,L.matrixWorld);const ee=e.update(L),ce=L.material;if(Array.isArray(ce)){const ie=ee.groups;for(let le=0,ue=ie.length;le<ue;le++){const te=ie[le],Me=ce[te.materialIndex];if(Me&&Me.visible){const Ae=C(L,Me,S,b);L.onBeforeShadow(i,L,k,P,ee,Ae,te),i.renderBufferDirect(P,null,ee,Ae,L,te),L.onAfterShadow(i,L,k,P,ee,Ae,te)}}}else if(ce.visible){const ie=C(L,ce,S,b);L.onBeforeShadow(i,L,k,P,ee,ie,null),i.renderBufferDirect(P,null,ee,ie,L,null),L.onAfterShadow(i,L,k,P,ee,ie,null)}}const W=L.children;for(let ee=0,ce=W.length;ee<ce;ee++)T(W[ee],k,P,S,b)}function I(L){L.target.removeEventListener("dispose",I);for(const P in c){const S=c[P],b=L.target.uuid;b in S&&(S[b].dispose(),delete S[b])}}}const pg={[Hs]:Vs,[Ws]:Zs,[Xs]:qs,[Ga]:Ys,[Vs]:Hs,[Zs]:Ws,[qs]:Xs,[Ys]:Ga};function fg(i,e){function t(){let _=!1;const Y=new Qt;let q=null;const fe=new Qt(0,0,0,0);return{setMask:function(se){q!==se&&!_&&(i.colorMask(se,se,se,se),q=se)},setLocked:function(se){_=se},setClear:function(se,R,be,$,lt){lt===!0&&(se*=$,R*=$,be*=$),Y.set(se,R,be,$),fe.equals(Y)===!1&&(i.clearColor(se,R,be,$),fe.copy(Y))},reset:function(){_=!1,q=null,fe.set(-1,0,0,0)}}}function n(){let _=!1,Y=!1,q=null,fe=null,se=null;return{setReversed:function(R){if(Y!==R){const be=e.get("EXT_clip_control");R?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),Y=R;const $=se;se=null,this.setClear($)}},getReversed:function(){return Y},setTest:function(R){R?pe(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(R){q!==R&&!_&&(i.depthMask(R),q=R)},setFunc:function(R){if(Y&&(R=pg[R]),fe!==R){switch(R){case Hs:i.depthFunc(i.NEVER);break;case Vs:i.depthFunc(i.ALWAYS);break;case Ws:i.depthFunc(i.LESS);break;case Ga:i.depthFunc(i.LEQUAL);break;case Xs:i.depthFunc(i.EQUAL);break;case Ys:i.depthFunc(i.GEQUAL);break;case Zs:i.depthFunc(i.GREATER);break;case qs:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}fe=R}},setLocked:function(R){_=R},setClear:function(R){se!==R&&(Y&&(R=1-R),i.clearDepth(R),se=R)},reset:function(){_=!1,q=null,fe=null,se=null,Y=!1}}}function a(){let _=!1,Y=null,q=null,fe=null,se=null,R=null,be=null,$=null,lt=null;return{setTest:function(ct){_||(ct?pe(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(ct){Y!==ct&&!_&&(i.stencilMask(ct),Y=ct)},setFunc:function(ct,Ft,nn){(q!==ct||fe!==Ft||se!==nn)&&(i.stencilFunc(ct,Ft,nn),q=ct,fe=Ft,se=nn)},setOp:function(ct,Ft,nn){(R!==ct||be!==Ft||$!==nn)&&(i.stencilOp(ct,Ft,nn),R=ct,be=Ft,$=nn)},setLocked:function(ct){_=ct},setClear:function(ct){lt!==ct&&(i.clearStencil(ct),lt=ct)},reset:function(){_=!1,Y=null,q=null,fe=null,se=null,R=null,be=null,$=null,lt=null}}}const o=new t,s=new n,r=new a,l=new WeakMap,c=new WeakMap;let d={},u={},f=new WeakMap,h=[],g=null,x=!1,m=null,p=null,A=null,C=null,T=null,I=null,L=null,k=new Oe(0,0,0),P=0,S=!1,b=null,N=null,W=null,ee=null,ce=null;const ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,ue=0;const te=i.getParameter(i.VERSION);te.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(te)[1]),le=ue>=1):te.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),le=ue>=2);let Me=null,Ae={};const ze=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),Mt=new Qt().fromArray(ze),tt=new Qt().fromArray(dt);function gt(_,Y,q,fe){const se=new Uint8Array(4),R=i.createTexture();i.bindTexture(_,R),i.texParameteri(_,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(_,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<q;be++)_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY?i.texImage3D(Y,0,i.RGBA,1,1,fe,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(Y+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return R}const ae={};ae[i.TEXTURE_2D]=gt(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=gt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=gt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=gt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),r.setClear(0),pe(i.DEPTH_TEST),s.setFunc(Ga),De(!1),ke(Rc),pe(i.CULL_FACE),Dt(hi);function pe(_){d[_]!==!0&&(i.enable(_),d[_]=!0)}function Ie(_){d[_]!==!1&&(i.disable(_),d[_]=!1)}function Qe(_,Y){return u[_]!==Y?(i.bindFramebuffer(_,Y),u[_]=Y,_===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Y),_===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Y),!0):!1}function Ge(_,Y){let q=h,fe=!1;if(_){q=f.get(Y),q===void 0&&(q=[],f.set(Y,q));const se=_.textures;if(q.length!==se.length||q[0]!==i.COLOR_ATTACHMENT0){for(let R=0,be=se.length;R<be;R++)q[R]=i.COLOR_ATTACHMENT0+R;q.length=se.length,fe=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,fe=!0);fe&&i.drawBuffers(q)}function ft(_){return g!==_?(i.useProgram(_),g=_,!0):!1}const Ht={[Ji]:i.FUNC_ADD,[sf]:i.FUNC_SUBTRACT,[lf]:i.FUNC_REVERSE_SUBTRACT};Ht[cf]=i.MIN,Ht[df]=i.MAX;const D={[uf]:i.ZERO,[pf]:i.ONE,[ff]:i.SRC_COLOR,[zs]:i.SRC_ALPHA,[vf]:i.SRC_ALPHA_SATURATE,[yf]:i.DST_COLOR,[mf]:i.DST_ALPHA,[hf]:i.ONE_MINUS_SRC_COLOR,[Gs]:i.ONE_MINUS_SRC_ALPHA,[_f]:i.ONE_MINUS_DST_COLOR,[gf]:i.ONE_MINUS_DST_ALPHA,[xf]:i.CONSTANT_COLOR,[bf]:i.ONE_MINUS_CONSTANT_COLOR,[Mf]:i.CONSTANT_ALPHA,[wf]:i.ONE_MINUS_CONSTANT_ALPHA};function Dt(_,Y,q,fe,se,R,be,$,lt,ct){if(_===hi){x===!0&&(Ie(i.BLEND),x=!1);return}if(x===!1&&(pe(i.BLEND),x=!0),_!==rf){if(_!==m||ct!==S){if((p!==Ji||T!==Ji)&&(i.blendEquation(i.FUNC_ADD),p=Ji,T=Ji),ct)switch(_){case Rn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vt:i.blendFunc(i.ONE,i.ONE);break;case Pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Lc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}else switch(_){case Rn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case vt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Pc:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",_);break}A=null,C=null,I=null,L=null,k.set(0,0,0),P=0,m=_,S=ct}return}se=se||Y,R=R||q,be=be||fe,(Y!==p||se!==T)&&(i.blendEquationSeparate(Ht[Y],Ht[se]),p=Y,T=se),(q!==A||fe!==C||R!==I||be!==L)&&(i.blendFuncSeparate(D[q],D[fe],D[R],D[be]),A=q,C=fe,I=R,L=be),($.equals(k)===!1||lt!==P)&&(i.blendColor($.r,$.g,$.b,lt),k.copy($),P=lt),m=_,S=!1}function Ke(_,Y){_.side===Fn?Ie(i.CULL_FACE):pe(i.CULL_FACE);let q=_.side===En;Y&&(q=!q),De(q),_.blending===Rn&&_.transparent===!1?Dt(hi):Dt(_.blending,_.blendEquation,_.blendSrc,_.blendDst,_.blendEquationAlpha,_.blendSrcAlpha,_.blendDstAlpha,_.blendColor,_.blendAlpha,_.premultipliedAlpha),s.setFunc(_.depthFunc),s.setTest(_.depthTest),s.setMask(_.depthWrite),o.setMask(_.colorWrite);const fe=_.stencilWrite;r.setTest(fe),fe&&(r.setMask(_.stencilWriteMask),r.setFunc(_.stencilFunc,_.stencilRef,_.stencilFuncMask),r.setOp(_.stencilFail,_.stencilZFail,_.stencilZPass)),Ne(_.polygonOffset,_.polygonOffsetFactor,_.polygonOffsetUnits),_.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(_){b!==_&&(_?i.frontFace(i.CW):i.frontFace(i.CCW),b=_)}function ke(_){_!==nf?(pe(i.CULL_FACE),_!==N&&(_===Rc?i.cullFace(i.BACK):_===af?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),N=_}function st(_){_!==W&&(le&&i.lineWidth(_),W=_)}function Ne(_,Y,q){_?(pe(i.POLYGON_OFFSET_FILL),(ee!==Y||ce!==q)&&(i.polygonOffset(Y,q),ee=Y,ce=q)):Ie(i.POLYGON_OFFSET_FILL)}function nt(_){_?pe(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function Bt(_){_===void 0&&(_=i.TEXTURE0+ie-1),Me!==_&&(i.activeTexture(_),Me=_)}function St(_,Y,q){q===void 0&&(Me===null?q=i.TEXTURE0+ie-1:q=Me);let fe=Ae[q];fe===void 0&&(fe={type:void 0,texture:void 0},Ae[q]=fe),(fe.type!==_||fe.texture!==Y)&&(Me!==q&&(i.activeTexture(q),Me=q),i.bindTexture(_,Y||ae[_]),fe.type=_,fe.texture=Y)}function w(){const _=Ae[Me];_!==void 0&&_.type!==void 0&&(i.bindTexture(_.type,null),_.type=void 0,_.texture=void 0)}function y(){try{i.compressedTexImage2D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function X(){try{i.compressedTexImage3D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function oe(){try{i.texSubImage2D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function re(){try{i.texSubImage3D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function V(){try{i.compressedTexSubImage2D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Se(){try{i.compressedTexSubImage3D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function xe(){try{i.texStorage2D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function We(){try{i.texStorage3D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function He(){try{i.texImage2D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function _e(){try{i.texImage3D(...arguments)}catch(_){console.error("THREE.WebGLState:",_)}}function Te(_){Mt.equals(_)===!1&&(i.scissor(_.x,_.y,_.z,_.w),Mt.copy(_))}function et(_){tt.equals(_)===!1&&(i.viewport(_.x,_.y,_.z,_.w),tt.copy(_))}function Fe(_,Y){let q=c.get(Y);q===void 0&&(q=new WeakMap,c.set(Y,q));let fe=q.get(_);fe===void 0&&(fe=i.getUniformBlockIndex(Y,_.name),q.set(_,fe))}function Ee(_,Y){const fe=c.get(Y).get(_);l.get(Y)!==fe&&(i.uniformBlockBinding(Y,fe,_.__bindingPointIndex),l.set(Y,fe))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},Me=null,Ae={},u={},f=new WeakMap,h=[],g=null,x=!1,m=null,p=null,A=null,C=null,T=null,I=null,L=null,k=new Oe(0,0,0),P=0,S=!1,b=null,N=null,W=null,ee=null,ce=null,Mt.set(0,0,i.canvas.width,i.canvas.height),tt.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),r.reset()}return{buffers:{color:o,depth:s,stencil:r},enable:pe,disable:Ie,bindFramebuffer:Qe,drawBuffers:Ge,useProgram:ft,setBlending:Dt,setMaterial:Ke,setFlipSided:De,setCullFace:ke,setLineWidth:st,setPolygonOffset:Ne,setScissorTest:nt,activeTexture:Bt,bindTexture:St,unbindTexture:w,compressedTexImage2D:y,compressedTexImage3D:X,texImage2D:He,texImage3D:_e,updateUBOMapping:Fe,uniformBlockBinding:Ee,texStorage2D:xe,texStorage3D:We,texSubImage2D:oe,texSubImage3D:re,compressedTexSubImage2D:V,compressedTexSubImage3D:Se,scissor:Te,viewport:et,reset:at}}function hg(i,e,t,n,a,o,s){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,d=new WeakMap;let u;const f=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,y){return h?new OffscreenCanvas(w,y):To("canvas")}function x(w,y,X){let oe=1;const re=St(w);if((re.width>X||re.height>X)&&(oe=X/Math.max(re.width,re.height)),oe<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const V=Math.floor(oe*re.width),Se=Math.floor(oe*re.height);u===void 0&&(u=g(V,Se));const xe=y?g(V,Se):u;return xe.width=V,xe.height=Se,xe.getContext("2d").drawImage(w,0,0,V,Se),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+re.width+"x"+re.height+") to ("+V+"x"+Se+")."),xe}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+re.width+"x"+re.height+")."),w;return w}function m(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function A(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(w,y,X,oe,re=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let V=y;if(y===i.RED&&(X===i.FLOAT&&(V=i.R32F),X===i.HALF_FLOAT&&(V=i.R16F),X===i.UNSIGNED_BYTE&&(V=i.R8)),y===i.RED_INTEGER&&(X===i.UNSIGNED_BYTE&&(V=i.R8UI),X===i.UNSIGNED_SHORT&&(V=i.R16UI),X===i.UNSIGNED_INT&&(V=i.R32UI),X===i.BYTE&&(V=i.R8I),X===i.SHORT&&(V=i.R16I),X===i.INT&&(V=i.R32I)),y===i.RG&&(X===i.FLOAT&&(V=i.RG32F),X===i.HALF_FLOAT&&(V=i.RG16F),X===i.UNSIGNED_BYTE&&(V=i.RG8)),y===i.RG_INTEGER&&(X===i.UNSIGNED_BYTE&&(V=i.RG8UI),X===i.UNSIGNED_SHORT&&(V=i.RG16UI),X===i.UNSIGNED_INT&&(V=i.RG32UI),X===i.BYTE&&(V=i.RG8I),X===i.SHORT&&(V=i.RG16I),X===i.INT&&(V=i.RG32I)),y===i.RGB_INTEGER&&(X===i.UNSIGNED_BYTE&&(V=i.RGB8UI),X===i.UNSIGNED_SHORT&&(V=i.RGB16UI),X===i.UNSIGNED_INT&&(V=i.RGB32UI),X===i.BYTE&&(V=i.RGB8I),X===i.SHORT&&(V=i.RGB16I),X===i.INT&&(V=i.RGB32I)),y===i.RGBA_INTEGER&&(X===i.UNSIGNED_BYTE&&(V=i.RGBA8UI),X===i.UNSIGNED_SHORT&&(V=i.RGBA16UI),X===i.UNSIGNED_INT&&(V=i.RGBA32UI),X===i.BYTE&&(V=i.RGBA8I),X===i.SHORT&&(V=i.RGBA16I),X===i.INT&&(V=i.RGBA32I)),y===i.RGB&&(X===i.UNSIGNED_INT_5_9_9_9_REV&&(V=i.RGB9_E5),X===i.UNSIGNED_INT_10F_11F_11F_REV&&(V=i.R11F_G11F_B10F)),y===i.RGBA){const Se=re?Cr:Ct.getTransfer(oe);X===i.FLOAT&&(V=i.RGBA32F),X===i.HALF_FLOAT&&(V=i.RGBA16F),X===i.UNSIGNED_BYTE&&(V=Se===Ut?i.SRGB8_ALPHA8:i.RGBA8),X===i.UNSIGNED_SHORT_4_4_4_4&&(V=i.RGBA4),X===i.UNSIGNED_SHORT_5_5_5_1&&(V=i.RGB5_A1)}return(V===i.R16F||V===i.R32F||V===i.RG16F||V===i.RG32F||V===i.RGBA16F||V===i.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function T(w,y){let X;return w?y===null||y===oa||y===bo?X=i.DEPTH24_STENCIL8:y===fi?X=i.DEPTH32F_STENCIL8:y===xo&&(X=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===oa||y===bo?X=i.DEPTH_COMPONENT24:y===fi?X=i.DEPTH_COMPONENT32F:y===xo&&(X=i.DEPTH_COMPONENT16),X}function I(w,y){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==qn&&w.minFilter!==Qn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function L(w){const y=w.target;y.removeEventListener("dispose",L),P(y),y.isVideoTexture&&d.delete(y)}function k(w){const y=w.target;y.removeEventListener("dispose",k),b(y)}function P(w){const y=n.get(w);if(y.__webglInit===void 0)return;const X=w.source,oe=f.get(X);if(oe){const re=oe[y.__cacheKey];re.usedTimes--,re.usedTimes===0&&S(w),Object.keys(oe).length===0&&f.delete(X)}n.remove(w)}function S(w){const y=n.get(w);i.deleteTexture(y.__webglTexture);const X=w.source,oe=f.get(X);delete oe[y.__cacheKey],s.memory.textures--}function b(w){const y=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(y.__webglFramebuffer[oe]))for(let re=0;re<y.__webglFramebuffer[oe].length;re++)i.deleteFramebuffer(y.__webglFramebuffer[oe][re]);else i.deleteFramebuffer(y.__webglFramebuffer[oe]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[oe])}else{if(Array.isArray(y.__webglFramebuffer))for(let oe=0;oe<y.__webglFramebuffer.length;oe++)i.deleteFramebuffer(y.__webglFramebuffer[oe]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let oe=0;oe<y.__webglColorRenderbuffer.length;oe++)y.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[oe]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const X=w.textures;for(let oe=0,re=X.length;oe<re;oe++){const V=n.get(X[oe]);V.__webglTexture&&(i.deleteTexture(V.__webglTexture),s.memory.textures--),n.remove(X[oe])}n.remove(w)}let N=0;function W(){N=0}function ee(){const w=N;return w>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+a.maxTextures),N+=1,w}function ce(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function ie(w,y){const X=n.get(w);if(w.isVideoTexture&&nt(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&X.__version!==w.version){const oe=w.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(X,w,y);return}}else w.isExternalTexture&&(X.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,X.__webglTexture,i.TEXTURE0+y)}function le(w,y){const X=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){ae(X,w,y);return}t.bindTexture(i.TEXTURE_2D_ARRAY,X.__webglTexture,i.TEXTURE0+y)}function ue(w,y){const X=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&X.__version!==w.version){ae(X,w,y);return}t.bindTexture(i.TEXTURE_3D,X.__webglTexture,i.TEXTURE0+y)}function te(w,y){const X=n.get(w);if(w.version>0&&X.__version!==w.version){pe(X,w,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture,i.TEXTURE0+y)}const Me={[aa]:i.REPEAT,[Ri]:i.CLAMP_TO_EDGE,[js]:i.MIRRORED_REPEAT},Ae={[qn]:i.NEAREST,[Ef]:i.NEAREST_MIPMAP_NEAREST,[zo]:i.NEAREST_MIPMAP_LINEAR,[Qn]:i.LINEAR,[as]:i.LINEAR_MIPMAP_NEAREST,[ta]:i.LINEAR_MIPMAP_LINEAR},ze={[Lf]:i.NEVER,[Of]:i.ALWAYS,[If]:i.LESS,[lu]:i.LEQUAL,[Df]:i.EQUAL,[Uf]:i.GEQUAL,[kf]:i.GREATER,[Nf]:i.NOTEQUAL};function dt(w,y){if(y.type===fi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Qn||y.magFilter===as||y.magFilter===zo||y.magFilter===ta||y.minFilter===Qn||y.minFilter===as||y.minFilter===zo||y.minFilter===ta)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Me[y.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Me[y.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Me[y.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Ae[y.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Ae[y.minFilter]),y.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ze[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===qn||y.minFilter!==zo&&y.minFilter!==ta||y.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const X=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,a.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Mt(w,y){let X=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",L));const oe=y.source;let re=f.get(oe);re===void 0&&(re={},f.set(oe,re));const V=ce(y);if(V!==w.__cacheKey){re[V]===void 0&&(re[V]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,X=!0),re[V].usedTimes++;const Se=re[w.__cacheKey];Se!==void 0&&(re[w.__cacheKey].usedTimes--,Se.usedTimes===0&&S(y)),w.__cacheKey=V,w.__webglTexture=re[V].texture}return X}function tt(w,y,X){return Math.floor(Math.floor(w/X)/y)}function gt(w,y,X,oe){const V=w.updateRanges;if(V.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,X,oe,y.data);else{V.sort((_e,Te)=>_e.start-Te.start);let Se=0;for(let _e=1;_e<V.length;_e++){const Te=V[Se],et=V[_e],Fe=Te.start+Te.count,Ee=tt(et.start,y.width,4),at=tt(Te.start,y.width,4);et.start<=Fe+1&&Ee===at&&tt(et.start+et.count-1,y.width,4)===Ee?Te.count=Math.max(Te.count,et.start+et.count-Te.start):(++Se,V[Se]=et)}V.length=Se+1;const xe=i.getParameter(i.UNPACK_ROW_LENGTH),We=i.getParameter(i.UNPACK_SKIP_PIXELS),He=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let _e=0,Te=V.length;_e<Te;_e++){const et=V[_e],Fe=Math.floor(et.start/4),Ee=Math.ceil(et.count/4),at=Fe%y.width,_=Math.floor(Fe/y.width),Y=Ee,q=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,at),i.pixelStorei(i.UNPACK_SKIP_ROWS,_),t.texSubImage2D(i.TEXTURE_2D,0,at,_,Y,q,X,oe,y.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,xe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,We),i.pixelStorei(i.UNPACK_SKIP_ROWS,He)}}function ae(w,y,X){let oe=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(oe=i.TEXTURE_3D);const re=Mt(w,y),V=y.source;t.bindTexture(oe,w.__webglTexture,i.TEXTURE0+X);const Se=n.get(V);if(V.version!==Se.__version||re===!0){t.activeTexture(i.TEXTURE0+X);const xe=Ct.getPrimaries(Ct.workingColorSpace),We=y.colorSpace===Ci?null:Ct.getPrimaries(y.colorSpace),He=y.colorSpace===Ci||xe===We?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let _e=x(y.image,!1,a.maxTextureSize);_e=Bt(y,_e);const Te=o.convert(y.format,y.colorSpace),et=o.convert(y.type);let Fe=C(y.internalFormat,Te,et,y.colorSpace,y.isVideoTexture);dt(oe,y);let Ee;const at=y.mipmaps,_=y.isVideoTexture!==!0,Y=Se.__version===void 0||re===!0,q=V.dataReady,fe=I(y,_e);if(y.isDepthTexture)Fe=T(y.format===wo,y.type),Y&&(_?t.texStorage2D(i.TEXTURE_2D,1,Fe,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Te,et,null));else if(y.isDataTexture)if(at.length>0){_&&Y&&t.texStorage2D(i.TEXTURE_2D,fe,Fe,at[0].width,at[0].height);for(let se=0,R=at.length;se<R;se++)Ee=at[se],_?q&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Ee.width,Ee.height,Te,et,Ee.data):t.texImage2D(i.TEXTURE_2D,se,Fe,Ee.width,Ee.height,0,Te,et,Ee.data);y.generateMipmaps=!1}else _?(Y&&t.texStorage2D(i.TEXTURE_2D,fe,Fe,_e.width,_e.height),q&&gt(y,_e,Te,et)):t.texImage2D(i.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Te,et,_e.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){_&&Y&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Fe,at[0].width,at[0].height,_e.depth);for(let se=0,R=at.length;se<R;se++)if(Ee=at[se],y.format!==Zn)if(Te!==null)if(_){if(q)if(y.layerUpdates.size>0){const be=rd(Ee.width,Ee.height,y.format,y.type);for(const $ of y.layerUpdates){const lt=Ee.data.subarray($*be/Ee.data.BYTES_PER_ELEMENT,($+1)*be/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,$,Ee.width,Ee.height,1,Te,lt)}y.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Ee.width,Ee.height,_e.depth,Te,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Fe,Ee.width,Ee.height,_e.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else _?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Ee.width,Ee.height,_e.depth,Te,et,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Fe,Ee.width,Ee.height,_e.depth,0,Te,et,Ee.data)}else{_&&Y&&t.texStorage2D(i.TEXTURE_2D,fe,Fe,at[0].width,at[0].height);for(let se=0,R=at.length;se<R;se++)Ee=at[se],y.format!==Zn?Te!==null?_?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Ee.width,Ee.height,Te,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Fe,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):_?q&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Ee.width,Ee.height,Te,et,Ee.data):t.texImage2D(i.TEXTURE_2D,se,Fe,Ee.width,Ee.height,0,Te,et,Ee.data)}else if(y.isDataArrayTexture)if(_){if(Y&&t.texStorage3D(i.TEXTURE_2D_ARRAY,fe,Fe,_e.width,_e.height,_e.depth),q)if(y.layerUpdates.size>0){const se=rd(_e.width,_e.height,y.format,y.type);for(const R of y.layerUpdates){const be=_e.data.subarray(R*se/_e.data.BYTES_PER_ELEMENT,(R+1)*se/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,R,_e.width,_e.height,1,Te,et,be)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Te,et,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,_e.width,_e.height,_e.depth,0,Te,et,_e.data);else if(y.isData3DTexture)_?(Y&&t.texStorage3D(i.TEXTURE_3D,fe,Fe,_e.width,_e.height,_e.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Te,et,_e.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,_e.width,_e.height,_e.depth,0,Te,et,_e.data);else if(y.isFramebufferTexture){if(Y)if(_)t.texStorage2D(i.TEXTURE_2D,fe,Fe,_e.width,_e.height);else{let se=_e.width,R=_e.height;for(let be=0;be<fe;be++)t.texImage2D(i.TEXTURE_2D,be,Fe,se,R,0,Te,et,null),se>>=1,R>>=1}}else if(at.length>0){if(_&&Y){const se=St(at[0]);t.texStorage2D(i.TEXTURE_2D,fe,Fe,se.width,se.height)}for(let se=0,R=at.length;se<R;se++)Ee=at[se],_?q&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,Te,et,Ee):t.texImage2D(i.TEXTURE_2D,se,Fe,Te,et,Ee);y.generateMipmaps=!1}else if(_){if(Y){const se=St(_e);t.texStorage2D(i.TEXTURE_2D,fe,Fe,se.width,se.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,et,_e)}else t.texImage2D(i.TEXTURE_2D,0,Fe,Te,et,_e);m(y)&&p(oe),Se.__version=V.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function pe(w,y,X){if(y.image.length!==6)return;const oe=Mt(w,y),re=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+X);const V=n.get(re);if(re.version!==V.__version||oe===!0){t.activeTexture(i.TEXTURE0+X);const Se=Ct.getPrimaries(Ct.workingColorSpace),xe=y.colorSpace===Ci?null:Ct.getPrimaries(y.colorSpace),We=y.colorSpace===Ci||Se===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const He=y.isCompressedTexture||y.image[0].isCompressedTexture,_e=y.image[0]&&y.image[0].isDataTexture,Te=[];for(let R=0;R<6;R++)!He&&!_e?Te[R]=x(y.image[R],!0,a.maxCubemapSize):Te[R]=_e?y.image[R].image:y.image[R],Te[R]=Bt(y,Te[R]);const et=Te[0],Fe=o.convert(y.format,y.colorSpace),Ee=o.convert(y.type),at=C(y.internalFormat,Fe,Ee,y.colorSpace),_=y.isVideoTexture!==!0,Y=V.__version===void 0||oe===!0,q=re.dataReady;let fe=I(y,et);dt(i.TEXTURE_CUBE_MAP,y);let se;if(He){_&&Y&&t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,at,et.width,et.height);for(let R=0;R<6;R++){se=Te[R].mipmaps;for(let be=0;be<se.length;be++){const $=se[be];y.format!==Zn?Fe!==null?_?q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,be,0,0,$.width,$.height,Fe,$.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,be,at,$.width,$.height,0,$.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):_?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,be,0,0,$.width,$.height,Fe,Ee,$.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,be,at,$.width,$.height,0,Fe,Ee,$.data)}}}else{if(se=y.mipmaps,_&&Y){se.length>0&&fe++;const R=St(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,fe,at,R.width,R.height)}for(let R=0;R<6;R++)if(_e){_?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Te[R].width,Te[R].height,Fe,Ee,Te[R].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,at,Te[R].width,Te[R].height,0,Fe,Ee,Te[R].data);for(let be=0;be<se.length;be++){const lt=se[be].image[R].image;_?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,be+1,0,0,lt.width,lt.height,Fe,Ee,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,be+1,at,lt.width,lt.height,0,Fe,Ee,lt.data)}}else{_?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Fe,Ee,Te[R]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,at,Fe,Ee,Te[R]);for(let be=0;be<se.length;be++){const $=se[be];_?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,be+1,0,0,Fe,Ee,$.image[R]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,be+1,at,Fe,Ee,$.image[R])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),V.__version=re.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Ie(w,y,X,oe,re,V){const Se=o.convert(X.format,X.colorSpace),xe=o.convert(X.type),We=C(X.internalFormat,Se,xe,X.colorSpace),He=n.get(y),_e=n.get(X);if(_e.__renderTarget=y,!He.__hasExternalTextures){const Te=Math.max(1,y.width>>V),et=Math.max(1,y.height>>V);re===i.TEXTURE_3D||re===i.TEXTURE_2D_ARRAY?t.texImage3D(re,V,We,Te,et,y.depth,0,Se,xe,null):t.texImage2D(re,V,We,Te,et,0,Se,xe,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),Ne(y)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,re,_e.__webglTexture,0,st(y)):(re===i.TEXTURE_2D||re>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&re<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,re,_e.__webglTexture,V),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Qe(w,y,X){if(i.bindRenderbuffer(i.RENDERBUFFER,w),y.depthBuffer){const oe=y.depthTexture,re=oe&&oe.isDepthTexture?oe.type:null,V=T(y.stencilBuffer,re),Se=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=st(y);Ne(y)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe,V,y.width,y.height):X?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe,V,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,V,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Se,i.RENDERBUFFER,w)}else{const oe=y.textures;for(let re=0;re<oe.length;re++){const V=oe[re],Se=o.convert(V.format,V.colorSpace),xe=o.convert(V.type),We=C(V.internalFormat,Se,xe,V.colorSpace),He=st(y);X&&Ne(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,We,y.width,y.height):Ne(y)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,We,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,We,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ge(w,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const oe=n.get(y.depthTexture);oe.__renderTarget=y,(!oe.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),ie(y.depthTexture,0);const re=oe.__webglTexture,V=st(y);if(y.depthTexture.format===Mo)Ne(y)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(y.depthTexture.format===wo)Ne(y)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,V):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function ft(w){const y=n.get(w),X=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const oe=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),oe){const re=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,oe.removeEventListener("dispose",re)};oe.addEventListener("dispose",re),y.__depthDisposeCallback=re}y.__boundDepthTexture=oe}if(w.depthTexture&&!y.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");const oe=w.texture.mipmaps;oe&&oe.length>0?Ge(y.__webglFramebuffer[0],w):Ge(y.__webglFramebuffer,w)}else if(X){y.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[oe]),y.__webglDepthbuffer[oe]===void 0)y.__webglDepthbuffer[oe]=i.createRenderbuffer(),Qe(y.__webglDepthbuffer[oe],w,!1);else{const re=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,V)}}else{const oe=w.texture.mipmaps;if(oe&&oe.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Qe(y.__webglDepthbuffer,w,!1);else{const re=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,V=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,V),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,V)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ht(w,y,X){const oe=n.get(w);y!==void 0&&Ie(oe.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),X!==void 0&&ft(w)}function D(w){const y=w.texture,X=n.get(w),oe=n.get(y);w.addEventListener("dispose",k);const re=w.textures,V=w.isWebGLCubeRenderTarget===!0,Se=re.length>1;if(Se||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=y.version,s.memory.textures++),V){X.__webglFramebuffer=[];for(let xe=0;xe<6;xe++)if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer[xe]=[];for(let We=0;We<y.mipmaps.length;We++)X.__webglFramebuffer[xe][We]=i.createFramebuffer()}else X.__webglFramebuffer[xe]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){X.__webglFramebuffer=[];for(let xe=0;xe<y.mipmaps.length;xe++)X.__webglFramebuffer[xe]=i.createFramebuffer()}else X.__webglFramebuffer=i.createFramebuffer();if(Se)for(let xe=0,We=re.length;xe<We;xe++){const He=n.get(re[xe]);He.__webglTexture===void 0&&(He.__webglTexture=i.createTexture(),s.memory.textures++)}if(w.samples>0&&Ne(w)===!1){X.__webglMultisampledFramebuffer=i.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let xe=0;xe<re.length;xe++){const We=re[xe];X.__webglColorRenderbuffer[xe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,X.__webglColorRenderbuffer[xe]);const He=o.convert(We.format,We.colorSpace),_e=o.convert(We.type),Te=C(We.internalFormat,He,_e,We.colorSpace,w.isXRRenderTarget===!0),et=st(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,et,Te,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xe,i.RENDERBUFFER,X.__webglColorRenderbuffer[xe])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(X.__webglDepthRenderbuffer=i.createRenderbuffer(),Qe(X.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(V){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),dt(i.TEXTURE_CUBE_MAP,y);for(let xe=0;xe<6;xe++)if(y.mipmaps&&y.mipmaps.length>0)for(let We=0;We<y.mipmaps.length;We++)Ie(X.__webglFramebuffer[xe][We],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,We);else Ie(X.__webglFramebuffer[xe],w,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0);m(y)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let xe=0,We=re.length;xe<We;xe++){const He=re[xe],_e=n.get(He);let Te=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Te=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,_e.__webglTexture),dt(Te,He),Ie(X.__webglFramebuffer,w,He,i.COLOR_ATTACHMENT0+xe,Te,0),m(He)&&p(Te)}t.unbindTexture()}else{let xe=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(xe=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(xe,oe.__webglTexture),dt(xe,y),y.mipmaps&&y.mipmaps.length>0)for(let We=0;We<y.mipmaps.length;We++)Ie(X.__webglFramebuffer[We],w,y,i.COLOR_ATTACHMENT0,xe,We);else Ie(X.__webglFramebuffer,w,y,i.COLOR_ATTACHMENT0,xe,0);m(y)&&p(xe),t.unbindTexture()}w.depthBuffer&&ft(w)}function Dt(w){const y=w.textures;for(let X=0,oe=y.length;X<oe;X++){const re=y[X];if(m(re)){const V=A(w),Se=n.get(re).__webglTexture;t.bindTexture(V,Se),p(V),t.unbindTexture()}}}const Ke=[],De=[];function ke(w){if(w.samples>0){if(Ne(w)===!1){const y=w.textures,X=w.width,oe=w.height;let re=i.COLOR_BUFFER_BIT;const V=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Se=n.get(w),xe=y.length>1;if(xe)for(let He=0;He<y.length;He++)t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const We=w.texture.mipmaps;We&&We.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let He=0;He<y.length;He++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(re|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(re|=i.STENCIL_BUFFER_BIT)),xe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Se.__webglColorRenderbuffer[He]);const _e=n.get(y[He]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_e,0)}i.blitFramebuffer(0,0,X,oe,0,0,X,oe,re,i.NEAREST),l===!0&&(Ke.length=0,De.length=0,Ke.push(i.COLOR_ATTACHMENT0+He),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ke.push(V),De.push(V),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,De)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xe)for(let He=0;He<y.length;He++){t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,Se.__webglColorRenderbuffer[He]);const _e=n.get(y[He]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Se.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,_e,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function st(w){return Math.min(a.maxSamples,w.samples)}function Ne(w){const y=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function nt(w){const y=s.render.frame;d.get(w)!==y&&(d.set(w,y),w.update())}function Bt(w,y){const X=w.colorSpace,oe=w.format,re=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||X!==Wa&&X!==Ci&&(Ct.getTransfer(X)===Ut?(oe!==Zn||re!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),y}function St(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=ee,this.resetTextureUnits=W,this.setTexture2D=ie,this.setTexture2DArray=le,this.setTexture3D=ue,this.setTextureCube=te,this.rebindTextures=Ht,this.setupRenderTarget=D,this.updateRenderTargetMipmap=Dt,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=ft,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=Ne}function mg(i,e){function t(n,a=Ci){let o;const s=Ct.getTransfer(a);if(n===_i)return i.UNSIGNED_BYTE;if(n===Vl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Wl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===nu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===iu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===eu)return i.BYTE;if(n===tu)return i.SHORT;if(n===xo)return i.UNSIGNED_SHORT;if(n===Hl)return i.INT;if(n===oa)return i.UNSIGNED_INT;if(n===fi)return i.FLOAT;if(n===mi)return i.HALF_FLOAT;if(n===au)return i.ALPHA;if(n===ou)return i.RGB;if(n===Zn)return i.RGBA;if(n===Mo)return i.DEPTH_COMPONENT;if(n===wo)return i.DEPTH_STENCIL;if(n===ru)return i.RED;if(n===Xl)return i.RED_INTEGER;if(n===su)return i.RG;if(n===Yl)return i.RG_INTEGER;if(n===Zl)return i.RGBA_INTEGER;if(n===xr||n===br||n===Mr||n===wr)if(s===Ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===xr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===br)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Mr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===wr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===xr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===br)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Mr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===wr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Js||n===Qs||n===el||n===tl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Js)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Qs)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===el)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===tl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nl||n===il||n===al)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===nl||n===il)return s===Ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===al)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ol||n===rl||n===sl||n===ll||n===cl||n===dl||n===ul||n===pl||n===fl||n===hl||n===ml||n===gl||n===yl||n===_l)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ol)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rl)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sl)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ll)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===cl)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===dl)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ul)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===pl)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fl)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hl)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ml)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===gl)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===yl)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_l)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vl||n===xl||n===bl)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===vl)return s===Ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xl)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bl)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ml||n===wl||n===Sl||n===Tl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ml)return o.COMPRESSED_RED_RGTC1_EXT;if(n===wl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Tl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const gg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yg=`
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

}`;class _g{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new wu(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Tn({vertexShader:gg,fragmentShader:yg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new wt(new kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vg extends Ka{constructor(e,t){super();const n=this;let a=null,o=1,s=null,r="local-floor",l=1,c=null,d=null,u=null,f=null,h=null,g=null;const x=typeof XRWebGLBinding<"u",m=new _g,p={},A=t.getContextAttributes();let C=null,T=null;const I=[],L=[],k=new it;let P=null;const S=new On;S.viewport=new Qt;const b=new On;b.viewport=new Qt;const N=[S,b],W=new Fh;let ee=null,ce=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let pe=I[ae];return pe===void 0&&(pe=new Ts,I[ae]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ae){let pe=I[ae];return pe===void 0&&(pe=new Ts,I[ae]=pe),pe.getGripSpace()},this.getHand=function(ae){let pe=I[ae];return pe===void 0&&(pe=new Ts,I[ae]=pe),pe.getHandSpace()};function ie(ae){const pe=L.indexOf(ae.inputSource);if(pe===-1)return;const Ie=I[pe];Ie!==void 0&&(Ie.update(ae.inputSource,ae.frame,c||s),Ie.dispatchEvent({type:ae.type,data:ae.inputSource}))}function le(){a.removeEventListener("select",ie),a.removeEventListener("selectstart",ie),a.removeEventListener("selectend",ie),a.removeEventListener("squeeze",ie),a.removeEventListener("squeezestart",ie),a.removeEventListener("squeezeend",ie),a.removeEventListener("end",le),a.removeEventListener("inputsourceschange",ue);for(let ae=0;ae<I.length;ae++){const pe=L[ae];pe!==null&&(L[ae]=null,I[ae].disconnect(pe))}ee=null,ce=null,m.reset();for(const ae in p)delete p[ae];e.setRenderTarget(C),h=null,f=null,u=null,a=null,T=null,gt.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(k.width,k.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){o=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){r=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(a,t)),u},this.getFrame=function(){return g},this.getSession=function(){return a},this.setSession=async function(ae){if(a=ae,a!==null){if(C=e.getRenderTarget(),a.addEventListener("select",ie),a.addEventListener("selectstart",ie),a.addEventListener("selectend",ie),a.addEventListener("squeeze",ie),a.addEventListener("squeezestart",ie),a.addEventListener("squeezeend",ie),a.addEventListener("end",le),a.addEventListener("inputsourceschange",ue),A.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(k),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,Qe=null,Ge=null;A.depth&&(Ge=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=A.stencil?wo:Mo,Qe=A.stencil?bo:oa);const ft={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:o};u=this.getBinding(),f=u.createProjectionLayer(ft),a.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),T=new Kn(f.textureWidth,f.textureHeight,{format:Zn,type:_i,depthTexture:new Mu(f.textureWidth,f.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const Ie={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:o};h=new XRWebGLLayer(a,t,Ie),a.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),T=new Kn(h.framebufferWidth,h.framebufferHeight,{format:Zn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(r),gt.setContext(a),gt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ue(ae){for(let pe=0;pe<ae.removed.length;pe++){const Ie=ae.removed[pe],Qe=L.indexOf(Ie);Qe>=0&&(L[Qe]=null,I[Qe].disconnect(Ie))}for(let pe=0;pe<ae.added.length;pe++){const Ie=ae.added[pe];let Qe=L.indexOf(Ie);if(Qe===-1){for(let ft=0;ft<I.length;ft++)if(ft>=L.length){L.push(Ie),Qe=ft;break}else if(L[ft]===null){L[ft]=Ie,Qe=ft;break}if(Qe===-1)break}const Ge=I[Qe];Ge&&Ge.connect(Ie)}}const te=new U,Me=new U;function Ae(ae,pe,Ie){te.setFromMatrixPosition(pe.matrixWorld),Me.setFromMatrixPosition(Ie.matrixWorld);const Qe=te.distanceTo(Me),Ge=pe.projectionMatrix.elements,ft=Ie.projectionMatrix.elements,Ht=Ge[14]/(Ge[10]-1),D=Ge[14]/(Ge[10]+1),Dt=(Ge[9]+1)/Ge[5],Ke=(Ge[9]-1)/Ge[5],De=(Ge[8]-1)/Ge[0],ke=(ft[8]+1)/ft[0],st=Ht*De,Ne=Ht*ke,nt=Qe/(-De+ke),Bt=nt*-De;if(pe.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Bt),ae.translateZ(nt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Ge[10]===-1)ae.projectionMatrix.copy(pe.projectionMatrix),ae.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const St=Ht+nt,w=D+nt,y=st-Bt,X=Ne+(Qe-Bt),oe=Dt*D/w*St,re=Ke*D/w*St;ae.projectionMatrix.makePerspective(y,X,oe,re,St,w),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function ze(ae,pe){pe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(pe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(a===null)return;let pe=ae.near,Ie=ae.far;m.texture!==null&&(m.depthNear>0&&(pe=m.depthNear),m.depthFar>0&&(Ie=m.depthFar)),W.near=b.near=S.near=pe,W.far=b.far=S.far=Ie,(ee!==W.near||ce!==W.far)&&(a.updateRenderState({depthNear:W.near,depthFar:W.far}),ee=W.near,ce=W.far),W.layers.mask=ae.layers.mask|6,S.layers.mask=W.layers.mask&3,b.layers.mask=W.layers.mask&5;const Qe=ae.parent,Ge=W.cameras;ze(W,Qe);for(let ft=0;ft<Ge.length;ft++)ze(Ge[ft],Qe);Ge.length===2?Ae(W,S,b):W.projectionMatrix.copy(S.projectionMatrix),dt(ae,W,Qe)};function dt(ae,pe,Ie){Ie===null?ae.matrix.copy(pe.matrixWorld):(ae.matrix.copy(Ie.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(pe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(pe.projectionMatrix),ae.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=So*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ae){l=ae,f!==null&&(f.fixedFoveation=ae),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ae)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(W)},this.getCameraTexture=function(ae){return p[ae]};let Mt=null;function tt(ae,pe){if(d=pe.getViewerPose(c||s),g=pe,d!==null){const Ie=d.views;h!==null&&(e.setRenderTargetFramebuffer(T,h.framebuffer),e.setRenderTarget(T));let Qe=!1;Ie.length!==W.cameras.length&&(W.cameras.length=0,Qe=!0);for(let D=0;D<Ie.length;D++){const Dt=Ie[D];let Ke=null;if(h!==null)Ke=h.getViewport(Dt);else{const ke=u.getViewSubImage(f,Dt);Ke=ke.viewport,D===0&&(e.setRenderTargetTextures(T,ke.colorTexture,ke.depthStencilTexture),e.setRenderTarget(T))}let De=N[D];De===void 0&&(De=new On,De.layers.enable(D),De.viewport=new Qt,N[D]=De),De.matrix.fromArray(Dt.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(Dt.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),D===0&&(W.matrix.copy(De.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Qe===!0&&W.cameras.push(De)}const Ge=a.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const D=u.getDepthInformation(Ie[0]);D&&D.isValid&&D.texture&&m.init(D,a.renderState)}if(Ge&&Ge.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let D=0;D<Ie.length;D++){const Dt=Ie[D].camera;if(Dt){let Ke=p[Dt];Ke||(Ke=new wu,p[Dt]=Ke);const De=u.getCameraImage(Dt);Ke.sourceTexture=De}}}}for(let Ie=0;Ie<I.length;Ie++){const Qe=L[Ie],Ge=I[Ie];Qe!==null&&Ge!==void 0&&Ge.update(Qe,pe,c||s)}Mt&&Mt(ae,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),g=null}const gt=new Tu;gt.setAnimationLoop(tt),this.setAnimationLoop=function(ae){Mt=ae},this.dispose=function(){}}}const qi=new vi,xg=new Jt;function bg(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,mu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function a(m,p,A,C,T){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),u(m,p)):p.isMeshPhongMaterial?(o(m,p),d(m,p)):p.isMeshStandardMaterial?(o(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,T)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),x(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(s(m,p),p.isLineDashedMaterial&&r(m,p)):p.isPointsMaterial?l(m,p,A,C):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const A=e.get(p),C=A.envMap,T=A.envMapRotation;C&&(m.envMap.value=C,qi.copy(T),qi.x*=-1,qi.y*=-1,qi.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),m.envMapRotation.value.setFromMatrix4(xg.makeRotationFromEuler(qi)),m.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function s(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function r(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,A,C){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*A,m.scale.value=C*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function d(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,A){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=A.texture,m.transmissionSamplerSize.value.set(A.width,A.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const A=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(A.matrixWorld),m.nearDistance.value=A.shadow.camera.near,m.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function Mg(i,e,t,n){let a={},o={},s=[];const r=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,C){const T=C.program;n.uniformBlockBinding(A,T)}function c(A,C){let T=a[A.id];T===void 0&&(g(A),T=d(A),a[A.id]=T,A.addEventListener("dispose",m));const I=C.program;n.updateUBOMapping(A,I);const L=e.render.frame;o[A.id]!==L&&(f(A),o[A.id]=L)}function d(A){const C=u();A.__bindingPointIndex=C;const T=i.createBuffer(),I=A.__size,L=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,I,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,C,T),T}function u(){for(let A=0;A<r;A++)if(s.indexOf(A)===-1)return s.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(A){const C=a[A.id],T=A.uniforms,I=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,C);for(let L=0,k=T.length;L<k;L++){const P=Array.isArray(T[L])?T[L]:[T[L]];for(let S=0,b=P.length;S<b;S++){const N=P[S];if(h(N,L,S,I)===!0){const W=N.__offset,ee=Array.isArray(N.value)?N.value:[N.value];let ce=0;for(let ie=0;ie<ee.length;ie++){const le=ee[ie],ue=x(le);typeof le=="number"||typeof le=="boolean"?(N.__data[0]=le,i.bufferSubData(i.UNIFORM_BUFFER,W+ce,N.__data)):le.isMatrix3?(N.__data[0]=le.elements[0],N.__data[1]=le.elements[1],N.__data[2]=le.elements[2],N.__data[3]=0,N.__data[4]=le.elements[3],N.__data[5]=le.elements[4],N.__data[6]=le.elements[5],N.__data[7]=0,N.__data[8]=le.elements[6],N.__data[9]=le.elements[7],N.__data[10]=le.elements[8],N.__data[11]=0):(le.toArray(N.__data,ce),ce+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,N.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(A,C,T,I){const L=A.value,k=C+"_"+T;if(I[k]===void 0)return typeof L=="number"||typeof L=="boolean"?I[k]=L:I[k]=L.clone(),!0;{const P=I[k];if(typeof L=="number"||typeof L=="boolean"){if(P!==L)return I[k]=L,!0}else if(P.equals(L)===!1)return P.copy(L),!0}return!1}function g(A){const C=A.uniforms;let T=0;const I=16;for(let k=0,P=C.length;k<P;k++){const S=Array.isArray(C[k])?C[k]:[C[k]];for(let b=0,N=S.length;b<N;b++){const W=S[b],ee=Array.isArray(W.value)?W.value:[W.value];for(let ce=0,ie=ee.length;ce<ie;ce++){const le=ee[ce],ue=x(le),te=T%I,Me=te%ue.boundary,Ae=te+Me;T+=Me,Ae!==0&&I-Ae<ue.storage&&(T+=I-Ae),W.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=T,T+=ue.storage}}}const L=T%I;return L>0&&(T+=I-L),A.__size=T,A.__cache={},this}function x(A){const C={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(C.boundary=4,C.storage=4):A.isVector2?(C.boundary=8,C.storage=8):A.isVector3||A.isColor?(C.boundary=16,C.storage=12):A.isVector4?(C.boundary=16,C.storage=16):A.isMatrix3?(C.boundary=48,C.storage=48):A.isMatrix4?(C.boundary=64,C.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),C}function m(A){const C=A.target;C.removeEventListener("dispose",m);const T=s.indexOf(C.__bindingPointIndex);s.splice(T,1),i.deleteBuffer(a[C.id]),delete a[C.id],delete o[C.id]}function p(){for(const A in a)i.deleteBuffer(a[A]);s=[],a={},o={}}return{bind:l,update:c,dispose:p}}class wg{constructor(e={}){const{canvas:t=eh(),context:n=null,depth:a=!0,stencil:o=!1,alpha:s=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=s;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const A=[],C=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let I=!1;this._outputColorSpace=xn;let L=0,k=0,P=null,S=-1,b=null;const N=new Qt,W=new Qt;let ee=null;const ce=new Oe(0);let ie=0,le=t.width,ue=t.height,te=1,Me=null,Ae=null;const ze=new Qt(0,0,le,ue),dt=new Qt(0,0,le,ue);let Mt=!1;const tt=new vu;let gt=!1,ae=!1;const pe=new Jt,Ie=new U,Qe=new Qt,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ft=!1;function Ht(){return P===null?te:1}let D=n;function Dt(M,z){return t.getContext(M,z)}try{const M={alpha:!0,depth:a,stencil:o,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${zl}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",fe,!1),t.addEventListener("webglcontextcreationerror",se,!1),D===null){const z="webgl2";if(D=Dt(z,M),D===null)throw Dt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Ke,De,ke,st,Ne,nt,Bt,St,w,y,X,oe,re,V,Se,xe,We,He,_e,Te,et,Fe,Ee,at;function _(){Ke=new Dm(D),Ke.init(),Fe=new mg(D,Ke),De=new Em(D,Ke,e,Fe),ke=new fg(D,Ke),De.reversedDepthBuffer&&f&&ke.buffers.depth.setReversed(!0),st=new Um(D),Ne=new eg,nt=new hg(D,Ke,ke,Ne,De,Fe,st),Bt=new Cm(T),St=new Im(T),w=new Hh(D),Ee=new Sm(D,w),y=new km(D,w,st,Ee),X=new Fm(D,y,w,st),_e=new Om(D,De,nt),xe=new Am(Ne),oe=new Q2(T,Bt,St,Ke,De,Ee,xe),re=new bg(T,Ne),V=new ng,Se=new lg(Ke),He=new wm(T,Bt,St,ke,X,h,l),We=new ug(T,X,De),at=new Mg(D,st,De,ke),Te=new Tm(D,Ke,st),et=new Nm(D,Ke,st),st.programs=oe.programs,T.capabilities=De,T.extensions=Ke,T.properties=Ne,T.renderLists=V,T.shadowMap=We,T.state=ke,T.info=st}_();const Y=new vg(T,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=Ke.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Ke.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(M){M!==void 0&&(te=M,this.setSize(le,ue,!1))},this.getSize=function(M){return M.set(le,ue)},this.setSize=function(M,z,j=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}le=M,ue=z,t.width=Math.floor(M*te),t.height=Math.floor(z*te),j===!0&&(t.style.width=M+"px",t.style.height=z+"px"),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(le*te,ue*te).floor()},this.setDrawingBufferSize=function(M,z,j){le=M,ue=z,te=j,t.width=Math.floor(M*j),t.height=Math.floor(z*j),this.setViewport(0,0,M,z)},this.getCurrentViewport=function(M){return M.copy(N)},this.getViewport=function(M){return M.copy(ze)},this.setViewport=function(M,z,j,J){M.isVector4?ze.set(M.x,M.y,M.z,M.w):ze.set(M,z,j,J),ke.viewport(N.copy(ze).multiplyScalar(te).round())},this.getScissor=function(M){return M.copy(dt)},this.setScissor=function(M,z,j,J){M.isVector4?dt.set(M.x,M.y,M.z,M.w):dt.set(M,z,j,J),ke.scissor(W.copy(dt).multiplyScalar(te).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(M){ke.setScissorTest(Mt=M)},this.setOpaqueSort=function(M){Me=M},this.setTransparentSort=function(M){Ae=M},this.getClearColor=function(M){return M.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor(...arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha(...arguments)},this.clear=function(M=!0,z=!0,j=!0){let J=0;if(M){let H=!1;if(P!==null){const ge=P.texture.format;H=ge===Zl||ge===Yl||ge===Xl}if(H){const ge=P.texture.type,we=ge===_i||ge===oa||ge===xo||ge===bo||ge===Vl||ge===Wl,Le=He.getClearColor(),Ce=He.getClearAlpha(),$e=Le.r,ot=Le.g,qe=Le.b;we?(g[0]=$e,g[1]=ot,g[2]=qe,g[3]=Ce,D.clearBufferuiv(D.COLOR,0,g)):(x[0]=$e,x[1]=ot,x[2]=qe,x[3]=Ce,D.clearBufferiv(D.COLOR,0,x))}else J|=D.COLOR_BUFFER_BIT}z&&(J|=D.DEPTH_BUFFER_BIT),j&&(J|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",fe,!1),t.removeEventListener("webglcontextcreationerror",se,!1),He.dispose(),V.dispose(),Se.dispose(),Ne.dispose(),Bt.dispose(),St.dispose(),X.dispose(),Ee.dispose(),at.dispose(),oe.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",nn),Y.removeEventListener("sessionend",an),on.stop()};function q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const M=st.autoReset,z=We.enabled,j=We.autoUpdate,J=We.needsUpdate,H=We.type;_(),st.autoReset=M,We.enabled=z,We.autoUpdate=j,We.needsUpdate=J,We.type=H}function se(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function R(M){const z=M.target;z.removeEventListener("dispose",R),be(z)}function be(M){$(M),Ne.remove(M)}function $(M){const z=Ne.get(M).programs;z!==void 0&&(z.forEach(function(j){oe.releaseProgram(j)}),M.isShaderMaterial&&oe.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,j,J,H,ge){z===null&&(z=Ge);const we=H.isMesh&&H.matrixWorld.determinant()<0,Le=Fi(M,z,j,J,H);ke.setMaterial(J,we);let Ce=j.index,$e=1;if(J.wireframe===!0){if(Ce=y.getWireframeAttribute(j),Ce===void 0)return;$e=2}const ot=j.drawRange,qe=j.attributes.position;let _t=ot.start*$e,It=(ot.start+ot.count)*$e;ge!==null&&(_t=Math.max(_t,ge.start*$e),It=Math.min(It,(ge.start+ge.count)*$e)),Ce!==null?(_t=Math.max(_t,0),It=Math.min(It,Ce.count)):qe!=null&&(_t=Math.max(_t,0),It=Math.min(It,qe.count));const Vt=It-_t;if(Vt<0||Vt===1/0)return;Ee.setup(H,J,Le,j,Ce);let Et,Pt=Te;if(Ce!==null&&(Et=w.get(Ce),Pt=et,Pt.setIndex(Et)),H.isMesh)J.wireframe===!0?(ke.setLineWidth(J.wireframeLinewidth*Ht()),Pt.setMode(D.LINES)):Pt.setMode(D.TRIANGLES);else if(H.isLine){let je=J.linewidth;je===void 0&&(je=1),ke.setLineWidth(je*Ht()),H.isLineSegments?Pt.setMode(D.LINES):H.isLineLoop?Pt.setMode(D.LINE_LOOP):Pt.setMode(D.LINE_STRIP)}else H.isPoints?Pt.setMode(D.POINTS):H.isSprite&&Pt.setMode(D.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Eo("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(Ke.get("WEBGL_multi_draw"))Pt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const je=H._multiDrawStarts,At=H._multiDrawCounts,xt=H._multiDrawCount,hn=Ce?w.get(Ce).bytesPerElement:1,G=Ne.get(J).currentProgram.getUniforms();for(let Z=0;Z<xt;Z++)G.setValue(D,"_gl_DrawID",Z),Pt.render(je[Z]/hn,At[Z])}else if(H.isInstancedMesh)Pt.renderInstances(_t,Vt,H.count);else if(j.isInstancedBufferGeometry){const je=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,At=Math.min(j.instanceCount,je);Pt.renderInstances(_t,Vt,At)}else Pt.render(_t,Vt)};function lt(M,z,j){M.transparent===!0&&M.side===Fn&&M.forceSinglePass===!1?(M.side=En,M.needsUpdate=!0,Kt(M,z,j),M.side=Ii,M.needsUpdate=!0,Kt(M,z,j),M.side=Fn):Kt(M,z,j)}this.compile=function(M,z,j=null){j===null&&(j=M),p=Se.get(j),p.init(z),C.push(p),j.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),M!==j&&M.traverseVisible(function(H){H.isLight&&H.layers.test(z.layers)&&(p.pushLight(H),H.castShadow&&p.pushShadow(H))}),p.setupLights();const J=new Set;return M.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ge=H.material;if(ge)if(Array.isArray(ge))for(let we=0;we<ge.length;we++){const Le=ge[we];lt(Le,j,H),J.add(Le)}else lt(ge,j,H),J.add(ge)}),p=C.pop(),J},this.compileAsync=function(M,z,j=null){const J=this.compile(M,z,j);return new Promise(H=>{function ge(){if(J.forEach(function(we){Ne.get(we).currentProgram.isReady()&&J.delete(we)}),J.size===0){H(M);return}setTimeout(ge,10)}Ke.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let ct=null;function Ft(M){ct&&ct(M)}function nn(){on.stop()}function an(){on.start()}const on=new Tu;on.setAnimationLoop(Ft),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(M){ct=M,Y.setAnimationLoop(M),M===null?on.stop():on.start()},Y.addEventListener("sessionstart",nn),Y.addEventListener("sessionend",an),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(z),z=Y.getCamera()),M.isScene===!0&&M.onBeforeRender(T,M,z,P),p=Se.get(M,C.length),p.init(z),C.push(p),pe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),tt.setFromProjectionMatrix(pe,ei,z.reversedDepth),ae=this.localClippingEnabled,gt=xe.init(this.clippingPlanes,ae),m=V.get(M,A.length),m.init(),A.push(m),Y.enabled===!0&&Y.isPresenting===!0){const ge=T.xr.getDepthSensingMesh();ge!==null&&zn(ge,z,-1/0,T.sortObjects)}zn(M,z,0,T.sortObjects),m.finish(),T.sortObjects===!0&&m.sort(Me,Ae),ft=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,ft&&He.addToRenderList(m,M),this.info.render.frame++,gt===!0&&xe.beginShadows();const j=p.state.shadowsArray;We.render(j,M,z),gt===!0&&xe.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,H=m.transmissive;if(p.setupLights(),z.isArrayCamera){const ge=z.cameras;if(H.length>0)for(let we=0,Le=ge.length;we<Le;we++){const Ce=ge[we];Nn(J,H,M,Ce)}ft&&He.render(M);for(let we=0,Le=ge.length;we<Le;we++){const Ce=ge[we];$n(m,M,Ce,Ce.viewport)}}else H.length>0&&Nn(J,H,M,z),ft&&He.render(M),$n(m,M,z);P!==null&&k===0&&(nt.updateMultisampleRenderTarget(P),nt.updateRenderTargetMipmap(P)),M.isScene===!0&&M.onAfterRender(T,M,z),Ee.resetDefaultState(),S=-1,b=null,C.pop(),C.length>0?(p=C[C.length-1],gt===!0&&xe.setGlobalState(T.clippingPlanes,p.state.camera)):p=null,A.pop(),A.length>0?m=A[A.length-1]:m=null};function zn(M,z,j,J){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)j=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||tt.intersectsSprite(M)){J&&Qe.setFromMatrixPosition(M.matrixWorld).applyMatrix4(pe);const we=X.update(M),Le=M.material;Le.visible&&m.push(M,we,Le,j,Qe.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||tt.intersectsObject(M))){const we=X.update(M),Le=M.material;if(J&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Qe.copy(M.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Qe.copy(we.boundingSphere.center)),Qe.applyMatrix4(M.matrixWorld).applyMatrix4(pe)),Array.isArray(Le)){const Ce=we.groups;for(let $e=0,ot=Ce.length;$e<ot;$e++){const qe=Ce[$e],_t=Le[qe.materialIndex];_t&&_t.visible&&m.push(M,we,_t,j,Qe.z,qe)}}else Le.visible&&m.push(M,we,Le,j,Qe.z,null)}}const ge=M.children;for(let we=0,Le=ge.length;we<Le;we++)zn(ge[we],z,j,J)}function $n(M,z,j,J){const H=M.opaque,ge=M.transmissive,we=M.transparent;p.setupLightsView(j),gt===!0&&xe.setGlobalState(T.clippingPlanes,j),J&&ke.viewport(N.copy(J)),H.length>0&&ne(H,z,j),ge.length>0&&ne(ge,z,j),we.length>0&&ne(we,z,j),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function Nn(M,z,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new Kn(1,1,{generateMipmaps:!0,type:Ke.has("EXT_color_buffer_half_float")||Ke.has("EXT_color_buffer_float")?mi:_i,minFilter:ta,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const ge=p.state.transmissionRenderTarget[J.id],we=J.viewport||N;ge.setSize(we.z*T.transmissionResolutionScale,we.w*T.transmissionResolutionScale);const Le=T.getRenderTarget(),Ce=T.getActiveCubeFace(),$e=T.getActiveMipmapLevel();T.setRenderTarget(ge),T.getClearColor(ce),ie=T.getClearAlpha(),ie<1&&T.setClearColor(16777215,.5),T.clear(),ft&&He.render(j);const ot=T.toneMapping;T.toneMapping=Pi;const qe=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),gt===!0&&xe.setGlobalState(T.clippingPlanes,J),ne(M,j,J),nt.updateMultisampleRenderTarget(ge),nt.updateRenderTargetMipmap(ge),Ke.has("WEBGL_multisampled_render_to_texture")===!1){let _t=!1;for(let It=0,Vt=z.length;It<Vt;It++){const Et=z[It],Pt=Et.object,je=Et.geometry,At=Et.material,xt=Et.group;if(At.side===Fn&&Pt.layers.test(J.layers)){const hn=At.side;At.side=En,At.needsUpdate=!0,Ye(Pt,j,J,je,At,xt),At.side=hn,At.needsUpdate=!0,_t=!0}}_t===!0&&(nt.updateMultisampleRenderTarget(ge),nt.updateRenderTargetMipmap(ge))}T.setRenderTarget(Le,Ce,$e),T.setClearColor(ce,ie),qe!==void 0&&(J.viewport=qe),T.toneMapping=ot}function ne(M,z,j){const J=z.isScene===!0?z.overrideMaterial:null;for(let H=0,ge=M.length;H<ge;H++){const we=M[H],Le=we.object,Ce=we.geometry,$e=we.group;let ot=we.material;ot.allowOverride===!0&&J!==null&&(ot=J),Le.layers.test(j.layers)&&Ye(Le,z,j,Ce,ot,$e)}}function Ye(M,z,j,J,H,ge){M.onBeforeRender(T,z,j,J,H,ge),M.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),H.onBeforeRender(T,z,j,J,M,ge),H.transparent===!0&&H.side===Fn&&H.forceSinglePass===!1?(H.side=En,H.needsUpdate=!0,T.renderBufferDirect(j,z,J,H,M,ge),H.side=Ii,H.needsUpdate=!0,T.renderBufferDirect(j,z,J,H,M,ge),H.side=Fn):T.renderBufferDirect(j,z,J,H,M,ge),M.onAfterRender(T,z,j,J,H,ge)}function Kt(M,z,j){z.isScene!==!0&&(z=Ge);const J=Ne.get(M),H=p.state.lights,ge=p.state.shadowsArray,we=H.state.version,Le=oe.getParameters(M,H.state,ge,z,j),Ce=oe.getProgramCacheKey(Le);let $e=J.programs;J.environment=M.isMeshStandardMaterial?z.environment:null,J.fog=z.fog,J.envMap=(M.isMeshStandardMaterial?St:Bt).get(M.envMap||J.environment),J.envMapRotation=J.environment!==null&&M.envMap===null?z.environmentRotation:M.envMapRotation,$e===void 0&&(M.addEventListener("dispose",R),$e=new Map,J.programs=$e);let ot=$e.get(Ce);if(ot!==void 0){if(J.currentProgram===ot&&J.lightsStateVersion===we)return Gn(M,Le),ot}else Le.uniforms=oe.getUniforms(M),M.onBeforeCompile(Le,T),ot=oe.acquireProgram(Le,Ce),$e.set(Ce,ot),J.uniforms=Le.uniforms;const qe=J.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(qe.clippingPlanes=xe.uniform),Gn(M,Le),J.needsLights=Qa(M),J.lightsStateVersion=we,J.needsLights&&(qe.ambientLightColor.value=H.state.ambient,qe.lightProbe.value=H.state.probe,qe.directionalLights.value=H.state.directional,qe.directionalLightShadows.value=H.state.directionalShadow,qe.spotLights.value=H.state.spot,qe.spotLightShadows.value=H.state.spotShadow,qe.rectAreaLights.value=H.state.rectArea,qe.ltc_1.value=H.state.rectAreaLTC1,qe.ltc_2.value=H.state.rectAreaLTC2,qe.pointLights.value=H.state.point,qe.pointLightShadows.value=H.state.pointShadow,qe.hemisphereLights.value=H.state.hemi,qe.directionalShadowMap.value=H.state.directionalShadowMap,qe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,qe.spotShadowMap.value=H.state.spotShadowMap,qe.spotLightMatrix.value=H.state.spotLightMatrix,qe.spotLightMap.value=H.state.spotLightMap,qe.pointShadowMap.value=H.state.pointShadowMap,qe.pointShadowMatrix.value=H.state.pointShadowMatrix),J.currentProgram=ot,J.uniformsList=null,ot}function Pn(M){if(M.uniformsList===null){const z=M.currentProgram.getUniforms();M.uniformsList=Sr.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function Gn(M,z){const j=Ne.get(M);j.outputColorSpace=z.outputColorSpace,j.batching=z.batching,j.batchingColor=z.batchingColor,j.instancing=z.instancing,j.instancingColor=z.instancingColor,j.instancingMorph=z.instancingMorph,j.skinning=z.skinning,j.morphTargets=z.morphTargets,j.morphNormals=z.morphNormals,j.morphColors=z.morphColors,j.morphTargetsCount=z.morphTargetsCount,j.numClippingPlanes=z.numClippingPlanes,j.numIntersection=z.numClipIntersection,j.vertexAlphas=z.vertexAlphas,j.vertexTangents=z.vertexTangents,j.toneMapping=z.toneMapping}function Fi(M,z,j,J,H){z.isScene!==!0&&(z=Ge),nt.resetTextureUnits();const ge=z.fog,we=J.isMeshStandardMaterial?z.environment:null,Le=P===null?T.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Wa,Ce=(J.isMeshStandardMaterial?St:Bt).get(J.envMap||we),$e=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ot=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),qe=!!j.morphAttributes.position,_t=!!j.morphAttributes.normal,It=!!j.morphAttributes.color;let Vt=Pi;J.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Vt=T.toneMapping);const Et=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Pt=Et!==void 0?Et.length:0,je=Ne.get(J),At=p.state.lights;if(gt===!0&&(ae===!0||M!==b)){const pn=M===b&&J.id===S;xe.setState(J,M,pn)}let xt=!1;J.version===je.__version?(je.needsLights&&je.lightsStateVersion!==At.state.version||je.outputColorSpace!==Le||H.isBatchedMesh&&je.batching===!1||!H.isBatchedMesh&&je.batching===!0||H.isBatchedMesh&&je.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&je.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&je.instancing===!1||!H.isInstancedMesh&&je.instancing===!0||H.isSkinnedMesh&&je.skinning===!1||!H.isSkinnedMesh&&je.skinning===!0||H.isInstancedMesh&&je.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&je.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&je.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&je.instancingMorph===!1&&H.morphTexture!==null||je.envMap!==Ce||J.fog===!0&&je.fog!==ge||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==xe.numPlanes||je.numIntersection!==xe.numIntersection)||je.vertexAlphas!==$e||je.vertexTangents!==ot||je.morphTargets!==qe||je.morphNormals!==_t||je.morphColors!==It||je.toneMapping!==Vt||je.morphTargetsCount!==Pt)&&(xt=!0):(xt=!0,je.__version=J.version);let hn=je.currentProgram;xt===!0&&(hn=Kt(J,z,H));let G=!1,Z=!1,kt=!1;const zt=hn.getUniforms(),An=je.uniforms;if(ke.useProgram(hn.program)&&(G=!0,Z=!0,kt=!0),J.id!==S&&(S=J.id,Z=!0),G||b!==M){ke.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),zt.setValue(D,"projectionMatrix",M.projectionMatrix),zt.setValue(D,"viewMatrix",M.matrixWorldInverse);const mn=zt.map.cameraPosition;mn!==void 0&&mn.setValue(D,Ie.setFromMatrixPosition(M.matrixWorld)),De.logarithmicDepthBuffer&&zt.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&zt.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,Z=!0,kt=!0)}if(H.isSkinnedMesh){zt.setOptional(D,H,"bindMatrix"),zt.setOptional(D,H,"bindMatrixInverse");const pn=H.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),zt.setValue(D,"boneTexture",pn.boneTexture,nt))}H.isBatchedMesh&&(zt.setOptional(D,H,"batchingTexture"),zt.setValue(D,"batchingTexture",H._matricesTexture,nt),zt.setOptional(D,H,"batchingIdTexture"),zt.setValue(D,"batchingIdTexture",H._indirectTexture,nt),zt.setOptional(D,H,"batchingColorTexture"),H._colorsTexture!==null&&zt.setValue(D,"batchingColorTexture",H._colorsTexture,nt));const Cn=j.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&_e.update(H,j,hn),(Z||je.receiveShadow!==H.receiveShadow)&&(je.receiveShadow=H.receiveShadow,zt.setValue(D,"receiveShadow",H.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(An.envMap.value=Ce,An.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&z.environment!==null&&(An.envMapIntensity.value=z.environmentIntensity),Z&&(zt.setValue(D,"toneMappingExposure",T.toneMappingExposure),je.needsLights&&ua(An,kt),ge&&J.fog===!0&&re.refreshFogUniforms(An,ge),re.refreshMaterialUniforms(An,J,te,ue,p.state.transmissionRenderTarget[M.id]),Sr.upload(D,Pn(je),An,nt)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Sr.upload(D,Pn(je),An,nt),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&zt.setValue(D,"center",H.center),zt.setValue(D,"modelViewMatrix",H.modelViewMatrix),zt.setValue(D,"normalMatrix",H.normalMatrix),zt.setValue(D,"modelMatrix",H.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const pn=J.uniformsGroups;for(let mn=0,pa=pn.length;mn<pa;mn++){const ai=pn[mn];at.update(ai,hn),at.bind(ai,hn)}}return hn}function ua(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function Qa(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(M,z,j){const J=Ne.get(M);J.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),Ne.get(M.texture).__webglTexture=z,Ne.get(M.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:j,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,z){const j=Ne.get(M);j.__webglFramebuffer=z,j.__useDefaultFramebuffer=z===void 0};const ii=D.createFramebuffer();this.setRenderTarget=function(M,z=0,j=0){P=M,L=z,k=j;let J=!0,H=null,ge=!1,we=!1;if(M){const Ce=Ne.get(M);if(Ce.__useDefaultFramebuffer!==void 0)ke.bindFramebuffer(D.FRAMEBUFFER,null),J=!1;else if(Ce.__webglFramebuffer===void 0)nt.setupRenderTarget(M);else if(Ce.__hasExternalTextures)nt.rebindTextures(M,Ne.get(M.texture).__webglTexture,Ne.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const qe=M.depthTexture;if(Ce.__boundDepthTexture!==qe){if(qe!==null&&Ne.has(qe)&&(M.width!==qe.image.width||M.height!==qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");nt.setupDepthRenderbuffer(M)}}const $e=M.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(we=!0);const ot=Ne.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ot[z])?H=ot[z][j]:H=ot[z],ge=!0):M.samples>0&&nt.useMultisampledRTT(M)===!1?H=Ne.get(M).__webglMultisampledFramebuffer:Array.isArray(ot)?H=ot[j]:H=ot,N.copy(M.viewport),W.copy(M.scissor),ee=M.scissorTest}else N.copy(ze).multiplyScalar(te).floor(),W.copy(dt).multiplyScalar(te).floor(),ee=Mt;if(j!==0&&(H=ii),ke.bindFramebuffer(D.FRAMEBUFFER,H)&&J&&ke.drawBuffers(M,H),ke.viewport(N),ke.scissor(W),ke.setScissorTest(ee),ge){const Ce=Ne.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ce.__webglTexture,j)}else if(we){const Ce=z;for(let $e=0;$e<M.textures.length;$e++){const ot=Ne.get(M.textures[$e]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+$e,ot.__webglTexture,j,Ce)}}else if(M!==null&&j!==0){const Ce=Ne.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ce.__webglTexture,j)}S=-1},this.readRenderTargetPixels=function(M,z,j,J,H,ge,we,Le=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){ke.bindFramebuffer(D.FRAMEBUFFER,Ce);try{const $e=M.textures[Le],ot=$e.format,qe=$e.type;if(!De.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!De.textureTypeReadable(qe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-J&&j>=0&&j<=M.height-H&&(M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Le),D.readPixels(z,j,J,H,Fe.convert(ot),Fe.convert(qe),ge))}finally{const $e=P!==null?Ne.get(P).__webglFramebuffer:null;ke.bindFramebuffer(D.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(M,z,j,J,H,ge,we,Le=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Ne.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce)if(z>=0&&z<=M.width-J&&j>=0&&j<=M.height-H){ke.bindFramebuffer(D.FRAMEBUFFER,Ce);const $e=M.textures[Le],ot=$e.format,qe=$e.type;if(!De.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!De.textureTypeReadable(qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const _t=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,_t),D.bufferData(D.PIXEL_PACK_BUFFER,ge.byteLength,D.STREAM_READ),M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Le),D.readPixels(z,j,J,H,Fe.convert(ot),Fe.convert(qe),0);const It=P!==null?Ne.get(P).__webglFramebuffer:null;ke.bindFramebuffer(D.FRAMEBUFFER,It);const Vt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await th(D,Vt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,_t),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ge),D.deleteBuffer(_t),D.deleteSync(Vt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,z=null,j=0){const J=Math.pow(2,-j),H=Math.floor(M.image.width*J),ge=Math.floor(M.image.height*J),we=z!==null?z.x:0,Le=z!==null?z.y:0;nt.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,we,Le,H,ge),ke.unbindTexture()};const Bi=D.createFramebuffer(),eo=D.createFramebuffer();this.copyTextureToTexture=function(M,z,j=null,J=null,H=0,ge=null){ge===null&&(H!==0?(Eo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ge=H,H=0):ge=0);let we,Le,Ce,$e,ot,qe,_t,It,Vt;const Et=M.isCompressedTexture?M.mipmaps[ge]:M.image;if(j!==null)we=j.max.x-j.min.x,Le=j.max.y-j.min.y,Ce=j.isBox3?j.max.z-j.min.z:1,$e=j.min.x,ot=j.min.y,qe=j.isBox3?j.min.z:0;else{const Cn=Math.pow(2,-H);we=Math.floor(Et.width*Cn),Le=Math.floor(Et.height*Cn),M.isDataArrayTexture?Ce=Et.depth:M.isData3DTexture?Ce=Math.floor(Et.depth*Cn):Ce=1,$e=0,ot=0,qe=0}J!==null?(_t=J.x,It=J.y,Vt=J.z):(_t=0,It=0,Vt=0);const Pt=Fe.convert(z.format),je=Fe.convert(z.type);let At;z.isData3DTexture?(nt.setTexture3D(z,0),At=D.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(nt.setTexture2DArray(z,0),At=D.TEXTURE_2D_ARRAY):(nt.setTexture2D(z,0),At=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,z.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,z.unpackAlignment);const xt=D.getParameter(D.UNPACK_ROW_LENGTH),hn=D.getParameter(D.UNPACK_IMAGE_HEIGHT),G=D.getParameter(D.UNPACK_SKIP_PIXELS),Z=D.getParameter(D.UNPACK_SKIP_ROWS),kt=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Et.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Et.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,$e),D.pixelStorei(D.UNPACK_SKIP_ROWS,ot),D.pixelStorei(D.UNPACK_SKIP_IMAGES,qe);const zt=M.isDataArrayTexture||M.isData3DTexture,An=z.isDataArrayTexture||z.isData3DTexture;if(M.isDepthTexture){const Cn=Ne.get(M),pn=Ne.get(z),mn=Ne.get(Cn.__renderTarget),pa=Ne.get(pn.__renderTarget);ke.bindFramebuffer(D.READ_FRAMEBUFFER,mn.__webglFramebuffer),ke.bindFramebuffer(D.DRAW_FRAMEBUFFER,pa.__webglFramebuffer);for(let ai=0;ai<Ce;ai++)zt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ne.get(M).__webglTexture,H,qe+ai),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ne.get(z).__webglTexture,ge,Vt+ai)),D.blitFramebuffer($e,ot,we,Le,_t,It,we,Le,D.DEPTH_BUFFER_BIT,D.NEAREST);ke.bindFramebuffer(D.READ_FRAMEBUFFER,null),ke.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(H!==0||M.isRenderTargetTexture||Ne.has(M)){const Cn=Ne.get(M),pn=Ne.get(z);ke.bindFramebuffer(D.READ_FRAMEBUFFER,Bi),ke.bindFramebuffer(D.DRAW_FRAMEBUFFER,eo);for(let mn=0;mn<Ce;mn++)zt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Cn.__webglTexture,H,qe+mn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Cn.__webglTexture,H),An?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,pn.__webglTexture,ge,Vt+mn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,pn.__webglTexture,ge),H!==0?D.blitFramebuffer($e,ot,we,Le,_t,It,we,Le,D.COLOR_BUFFER_BIT,D.NEAREST):An?D.copyTexSubImage3D(At,ge,_t,It,Vt+mn,$e,ot,we,Le):D.copyTexSubImage2D(At,ge,_t,It,$e,ot,we,Le);ke.bindFramebuffer(D.READ_FRAMEBUFFER,null),ke.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else An?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(At,ge,_t,It,Vt,we,Le,Ce,Pt,je,Et.data):z.isCompressedArrayTexture?D.compressedTexSubImage3D(At,ge,_t,It,Vt,we,Le,Ce,Pt,Et.data):D.texSubImage3D(At,ge,_t,It,Vt,we,Le,Ce,Pt,je,Et):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,ge,_t,It,we,Le,Pt,je,Et.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,ge,_t,It,Et.width,Et.height,Pt,Et.data):D.texSubImage2D(D.TEXTURE_2D,ge,_t,It,we,Le,Pt,je,Et);D.pixelStorei(D.UNPACK_ROW_LENGTH,xt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,hn),D.pixelStorei(D.UNPACK_SKIP_PIXELS,G),D.pixelStorei(D.UNPACK_SKIP_ROWS,Z),D.pixelStorei(D.UNPACK_SKIP_IMAGES,kt),ge===0&&z.generateMipmaps&&D.generateMipmap(At),ke.unbindTexture()},this.initRenderTarget=function(M){Ne.get(M).__webglFramebuffer===void 0&&nt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?nt.setTextureCube(M,0):M.isData3DTexture?nt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?nt.setTexture2DArray(M,0):nt.setTexture2D(M,0),ke.unbindTexture()},this.resetState=function(){L=0,k=0,P=null,ke.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}const Tr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class ja{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Sg=new Su(-1,1,1,-1,0,1);class Tg extends jt{constructor(){super(),this.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wt([0,2,0,0,2,0],2))}}const Eg=new Tg;class nc{constructor(e){this._mesh=new wt(Eg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Sg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ag extends ja{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Tn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ao.clone(e.uniforms),this.material=new Tn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new nc(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ld extends ja{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const a=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let s,r;this.inverse?(s=0,r=1):(s=1,r=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),o.buffers.stencil.setFunc(a.ALWAYS,s,4294967295),o.buffers.stencil.setClear(r),o.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(a.EQUAL,1,4294967295),o.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),o.buffers.stencil.setLocked(!0)}}class Cg extends ja{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Rg{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new it);this._width=n.width,this._height=n.height,t=new Kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:mi}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ag(Tr),this.copyPass.material.blending=hi,this.clock=new Bh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let a=0,o=this.passes.length;a<o;a++){const s=this.passes[a];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),s.needsSwap){if(n){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}Ld!==void 0&&(s instanceof Ld?n=!0:s instanceof Cg&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new it);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(n,a),this.renderTarget2.setSize(n,a);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Pg extends ja{constructor(e,t,n=null,a=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=a,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Oe}render(e,t,n){const a=e.autoClear;e.autoClear=!1;let o,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=a}}const Lg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Oe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ya extends ja{constructor(e,t=1,n,a){super(),this.strength=t,this.radius=n,this.threshold=a,this.resolution=e!==void 0?new it(e.x,e.y):new it(256,256),this.clearColor=new Oe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Kn(o,s,{type:mi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const u=new Kn(o,s,{type:mi});u.texture.name="UnrealBloomPass.h"+d,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const f=new Kn(o,s,{type:mi});f.texture.name="UnrealBloomPass.v"+d,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),o=Math.round(o/2),s=Math.round(s/2)}const r=Lg;this.highPassUniforms=Ao.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Tn({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new it(1/o,1/s),o=Math.round(o/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Ao.clone(Tr.uniforms),this.blendMaterial=new Tn({uniforms:this.copyUniforms,vertexShader:Tr.vertexShader,fragmentShader:Tr.fragmentShader,blending:vt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Oe,this._oldClearAlpha=1,this._basic=new Zt,this._fsQuad=new nc(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),a=Math.round(t/2);this.renderTargetBright.setSize(n,a);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,a),this.renderTargetsVertical[o].setSize(n,a),this.separableBlurMaterials[o].uniforms.invSize.value=new it(1/n,1/a),n=Math.round(n/2),a=Math.round(a/2)}render(e,t,n,a,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=Ya.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Ya.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),r=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Tn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new it(.5,.5)},direction:{value:new it(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new Tn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ya.BlurDirectionX=new it(1,0);Ya.BlurDirectionY=new it(0,1);const mr={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Ig extends ja{constructor(){super(),this.uniforms=Ao.clone(mr.uniforms),this.material=new Lh({name:mr.name,uniforms:this.uniforms,vertexShader:mr.vertexShader,fragmentShader:mr.fragmentShader}),this._fsQuad=new nc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ct.getTransfer(this._outputColorSpace)===Ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Zd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===qd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Kd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Gl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Jd?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===$d&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function Ui(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function Oi(i){const e=new bu(i);return e.colorSpace=xn,e.anisotropy=4,e}function Dg(){const[i,e]=Ui(1024,512),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#02040c"),t.addColorStop(.34,"#06152c"),t.addColorStop(.56,"#123a60"),t.addColorStop(.72,"#5c8cae"),t.addColorStop(.82,"#a8c6d8"),t.addColorStop(1,"#0b2438"),e.fillStyle=t,e.fillRect(0,0,1024,512);const n=e.createLinearGradient(0,350,0,470);n.addColorStop(0,"rgba(210,235,255,0)"),n.addColorStop(.55,"rgba(200,228,247,.28)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,340,1024,140);for(let a=0;a<26;a++){const o=Math.random()*1100-40,s=190+Math.random()*190,r=40+Math.random()*150,l=e.createRadialGradient(o,s,0,o,s,r);l.addColorStop(0,`rgba(7,16,30,${.16+Math.random()*.24})`),l.addColorStop(.6,`rgba(10,22,40,${.1+Math.random()*.14})`),l.addColorStop(1,"rgba(10,22,40,0)"),e.fillStyle=l,e.beginPath(),e.arc(o,s,r,0,Math.PI*2),e.fill()}return Oi(i)}function kg(){const[i,e]=Ui(512,512),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"rgba(45,100,145,.48)"),t.addColorStop(.42,"rgba(22,59,96,.62)"),t.addColorStop(1,"rgba(5,20,38,.9)"),e.fillStyle=t,e.fillRect(0,0,512,512);for(let a=0;a<170;a++){const o=Math.random()*512,s=.03+Math.random()*.12;e.strokeStyle=`rgba(180,225,250,${s})`,e.lineWidth=1+Math.random()*2.5,e.beginPath(),e.moveTo(Math.random()*512,o),e.quadraticCurveTo(Math.random()*512,o+5,Math.random()*512,o),e.stroke()}for(let a=0;a<20;a++){const o=40+Math.random()*420,s=Math.random()*512,r=10+Math.random()*55;e.strokeStyle=`rgba(210,240,255,${.04+Math.random()*.07})`,e.lineWidth=2,e.beginPath(),e.ellipse(s,o,r,r*.18,0,0,Math.PI*2),e.stroke()}const n=Oi(i);return n.wrapS=n.wrapT=aa,n.repeat.set(4,4),n}function Ng(){const[i,e]=Ui(128,128);e.translate(64,64);const t=e.createRadialGradient(0,0,4,0,0,62);t.addColorStop(0,"rgba(255,255,255,.3)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(0,0,62,0,Math.PI*2),e.fill();for(let a=0;a<6;a++){e.save(),e.rotate(a/6*Math.PI*2);const o=e.createRadialGradient(0,-18,2,0,-18,24);o.addColorStop(0,"rgba(255,255,255,.98)"),o.addColorStop(.7,"rgba(240,247,255,.9)"),o.addColorStop(1,"rgba(210,235,255,0)"),e.fillStyle=o,e.beginPath(),e.ellipse(0,-22,13,24,0,0,Math.PI*2),e.fill(),e.restore()}const n=e.createRadialGradient(0,0,0,0,0,13);return n.addColorStop(0,"#fff8d0"),n.addColorStop(.5,"#ffd166"),n.addColorStop(1,"rgba(255,190,60,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,13,0,Math.PI*2),e.fill(),Oi(i)}function Ug(){const[i,e]=Ui(256,128);for(let t=0;t<10;t++){const n=40+Math.random()*176,a=45+Math.random()*40,o=24+Math.random()*46,s=e.createRadialGradient(n,a,1,n,a,o);s.addColorStop(0,"rgba(40,66,95,.6)"),s.addColorStop(.55,"rgba(24,44,68,.35)"),s.addColorStop(1,"rgba(16,30,50,0)"),e.fillStyle=s,e.beginPath(),e.arc(n,a,o,0,Math.PI*2),e.fill()}return Oi(i)}function Og(){const[i,e]=Ui(256,256);e.translate(128,128);const t=e.createRadialGradient(0,0,0,0,0,124);t.addColorStop(0,"rgba(255,244,190,.9)"),t.addColorStop(.3,"rgba(255,210,105,.42)"),t.addColorStop(1,"rgba(255,190,80,0)"),e.fillStyle=t,e.beginPath(),e.arc(0,0,124,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,248,215,.98)",e.shadowColor="#ffd166",e.shadowBlur=26,e.beginPath();for(let n=0;n<8;n++){const a=n/8*Math.PI*2,o=n%2===0?92:23;e.lineTo(Math.cos(a-Math.PI/2)*o,Math.sin(a-Math.PI/2)*o)}return e.closePath(),e.fill(),e.shadowBlur=0,e.fillStyle="#fff9e0",e.beginPath(),e.arc(0,0,15,0,Math.PI*2),e.fill(),Oi(i)}function Fg(){const[i,e]=Ui(128,128),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.2,"rgba(255,255,255,.7)"),t.addColorStop(.6,"rgba(255,255,255,.15)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Oi(i)}function Bg(){const[i,e]=Ui(256,320),t=e.createImageData(256,320);for(let n=0;n<t.data.length;n+=4){const a=Math.random()<.5?0:255;t.data[n]=a,t.data[n+1]=Math.random()<.88?0:80,t.data[n+2]=Math.random()<.72?40:255,t.data[n+3]=Math.random()<.35?230:0}e.putImageData(t,0,0),e.fillStyle="rgba(255,255,255,.75)";for(let n=0;n<9;n++)e.fillRect(0,Math.random()*320,256,1+Math.random()*3);e.fillStyle="rgba(255,45,90,.55)";for(let n=0;n<6;n++)e.fillRect(0,Math.random()*320,256,2+Math.random()*5);return Oi(i)}function Us(i,e="#ffd166"){const[t,n]=Ui(512,128);return n.clearRect(0,0,512,128),n.fillStyle="rgba(3,6,14,.82)",n.fillRect(0,0,512,128),n.strokeStyle=e,n.globalAlpha=.8,n.lineWidth=3,n.strokeRect(2,2,508,124),n.globalAlpha=1,n.fillStyle=e,n.font="700 46px monospace",n.letterSpacing="8px",n.fillText(i,26,72),n.font="20px monospace",n.fillStyle="rgba(220,240,255,.62)",n.fillText("MEMORY FRAME",26,104),Oi(t)}function Os(i){const e=new Oh().load(i);return e.colorSpace=xn,e.anisotropy=4,e}function zg({scene:i,camera:e,lanes:t,stage:n,TEX:a}){const o=new $t;o.name="intentionStage",o.visible=!1,i.add(o);const s={sky:Dg(),ocean:kg(),flower:Ng(),cloud:Ug(),star:Og(),glow:Fg(),static:Bg(),labelKai:Us("01 / KAI","#8ffaff"),labelRei:Us("02 / REI","#ffe9a8"),labelNova:Us("?? / NOVA","#ff7d9e"),kai:Os("./art/kai.svg"),rei:Os("./art/rei.svg"),nova:Os("./art/nova.svg")},r={world:0,void:0,flowers:0,pillars:0,halo:0,memory:0,bright:0,glitch:0,active:!1,phase:"off",portrait:!1,chaos:0,cutscene:0,side:0,partner:"kai",time:0,chaosOn:0,cutsceneOn:0,cutsceneTarget:0,sideTarget:0,cutsceneDur:2.2,cutsceneT:0},l={world:0,void:0,flowers:0,pillars:0,halo:0,memory:0,bright:0},c={off:{},preview:{world:.72,void:.3,flowers:.55,bright:.5},void:{world:0,void:1,flowers:0,bright:.35},ocean:{world:1,void:.42,flowers:.58,bright:.55},spin:{world:1,void:.34,flowers:.55,bright:.5},field:{world:1,void:.34,flowers:.62,bright:.55},pillars:{world:1,void:.3,flowers:.68,pillars:1,bright:.68},halo:{world:1,void:.26,flowers:.7,pillars:1,halo:1,bright:.74},dark:{world:.16,void:.5,flowers:.12,pillars:.5,halo:.15,bright:.25},guilt:{world:0,void:.06,flowers:0,pillars:0,halo:0,bright:.2},offbeat:{world:0,void:.22,flowers:0,bright:.25},fastbeat:{world:0,void:.22,flowers:0,bright:.25},ocean2:{world:.92,void:.3,flowers:.7,pillars:.25,halo:.18,bright:.55},memory:{world:.95,void:.3,flowers:.8,pillars:.3,halo:.22,memory:1,bright:.62},static:{world:.9,void:.38,flowers:.6,pillars:.3,halo:.16,memory:.4,bright:.5},determined:{world:1,void:.2,flowers:1.12,pillars:.6,halo:.5,bright:1},white:{world:.2,void:.1,flowers:.2,bright:1},fake:{world:0,void:.16,flowers:0,bright:.2},dawn:{world:1,void:.22,flowers:1.5,pillars:.12,halo:.8,memory:.2,bright:1.15},chaos:{world:1,void:.5,flowers:.72,pillars:.35,halo:.22,memory:.35,bright:.86},chaos2:{world:1,void:.34,flowers:.9,pillars:.65,halo:.55,memory:.9,bright:1},storm:{world:.7,void:.86,flowers:.42,pillars:.55,halo:.42,memory:.55,bright:.78},collapse:{world:.52,void:1,flowers:.28,pillars:.38,halo:.24,memory:1,bright:.66},glide:{world:.18,void:.82,flowers:.16,pillars:.28,halo:.18,memory:.8,bright:.48}},d=new Zt({map:s.sky,side:En,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),u=new wt(new yo(190,32,18),d);u.renderOrder=-30,o.add(u);const f=new Zt({map:s.ocean,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),h=new wt(new kn(340,260),f);h.rotation.x=-Math.PI/2,h.position.set(0,-5.6,-72),h.renderOrder=-20,o.add(h);const g=[];for(let _=0;_<16;_++){const Y=new mt({map:s.cloud,color:_%3?8101050:4020856,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),q=new yt(Y),fe=_%2?1:-1;q.position.set(fe*(16+Math.random()*74),6+Math.random()*30,-62-Math.random()*80);const se=30+Math.random()*62;q.scale.set(se,se*.4,1),q.renderOrder=-18,o.add(q),g.push({sprite:q,mat:Y,base:.24+Math.random()*.24,phase:Math.random()*6.28,x:q.position.x,sx:se,sy:se*.4})}const x=340,m=new Float32Array(x*3),p=new Float32Array(x*3),A=new Float32Array(x*3),C=new Float32Array(x),T=[new Oe(16777215),new Oe(16771572),new Oe(16773832),new Oe(14216447)];for(let _=0;_<x;_++){const Y=(Math.random()-.5)*140,q=-12-Math.random()*118,fe=-5.32+Math.random()*.22;A[_*3]=Y,A[_*3+1]=fe,A[_*3+2]=q,m[_*3]=Y,m[_*3+1]=fe,m[_*3+2]=q;const se=T[_%T.length];p[_*3]=se.r,p[_*3+1]=se.g,p[_*3+2]=se.b,C[_]=Math.random()*6.28}const I=new jt;I.setAttribute("position",new rn(m,3)),I.setAttribute("color",new rn(p,3));const L=new Oa({size:1.15,map:s.flower,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:Rn,sizeAttenuation:!0,fog:!1}),k=new go(I,L);k.renderOrder=-12,o.add(k);const P=new $t;let S=-27;P.position.set(0,-5.4,S),o.add(P);const b=new Zt({color:16762186,transparent:!0,opacity:0,fog:!1}),N=new Zt({color:16773052,transparent:!0,opacity:0,fog:!1}),W=new Zt({color:7031322,transparent:!0,opacity:0,fog:!1}),ee=[b,N,W];function ce(_,Y,q,fe,se,R=12){const be=new wt(new Qi(Y,q,fe,R),_);return be.position.y=se,P.add(be),be}ce(W,2.8,3.5,.7,.35),ce(b,2.2,2.8,.5,.9),ce(W,1.25,2,.4,1.32),ce(b,.42,.62,6.6,4.8),ce(N,.8,.5,.5,8.2);const ie=new wt(new ca(13.6,.34,.44),b);ie.position.y=8.7,P.add(ie);const le=new wt(new yo(.42,10,8),N);le.position.y=8.7,P.add(le);for(const _ of[-1,1]){const Y=new wt(new yo(.3,8,6),N);Y.position.set(_*6.7,8.7,0),P.add(Y);const q=[];for(let $=0;$<=8;$++){const lt=$/8;q.push(new U(_*6.7,8.7-lt*4.4+Math.sin(lt*Math.PI)*.42,0))}const fe=new xu(new jt().setFromPoints(q),new Jl({color:16765286,transparent:!0,opacity:0,fog:!1}));P.add(fe),ee.push(fe.material);const se=new wt(new Qi(2.2,1.7,.26,20),b);se.position.set(_*6.7,4.05,0),P.add(se);const R=new wt(new Fa(2.12,.09,6,28),N);R.rotation.x=Math.PI/2,R.position.set(_*6.7,4.18,0),P.add(R);const be=new wt(new Or(.52,0),N);be.position.set(_*6.7,4.5,0),P.add(be)}const ue=new $t;ue.position.set(0,9.9,0),P.add(ue);const te=new mt({map:s.star,color:16770976,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),Me=new yt(te);Me.scale.set(4.2,4.2,1),Me.renderOrder=2,ue.add(Me);const Ae=[te];for(let _=0;_<3;_++){const Y=new wt(new Fa(2.7+_*1.05,.055,4,64),new Zt({color:_?16765286:16774095,transparent:!0,opacity:0,fog:!1}));Y.rotation.set(Math.PI/2+_*.32,_*.6,_*.2),ue.add(Y),Ae.push(Y.material)}const ze=new mt({map:s.glow,color:16765286,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),dt=new yt(ze);dt.scale.set(14,14,1),dt.renderOrder=1,ue.add(dt),Ae.push(ze);const Mt=[{x:0,z:-58,h:25,w:2.1,hue:3497866},{x:-34,z:-36,h:17,w:1.8,hue:2706546},{x:34,z:-36,h:21,w:1.9,hue:2904700},{x:0,z:-14,h:10,w:1.5,hue:2112862}],tt=[];for(const _ of Mt){const Y=new $t;Y.position.set(_.x,-5.6,_.z),o.add(Y);const q=new Zt({color:_.hue,transparent:!0,opacity:0,fog:!1}),fe=new Zt({color:10475775,transparent:!0,opacity:0,fog:!1}),se=new wt(new Qi(_.w*.83,_.w,1,8,1,!0),q);se.position.y=.5,Y.add(se);const R=new wt(new Qi(_.w*.86,_.w*1.03,1,8,1,!0),fe);R.position.y=.5,Y.add(R);const be=new mt({map:s.glow,color:12576511,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),$=new yt(be);$.scale.set(4.5,4.5,1),$.position.y=1,Y.add($),tt.push({group:Y,body:se,edge:R,cap:$,mat:q,edgeMat:fe,capMat:be,def:_,h:0,flash:0,grow:0})}const gt=420,ae=new Float32Array(gt*3),pe=new Float32Array(gt*3),Ie=new Float32Array(gt);for(let _=0;_<gt;_++){const Y=(Math.random()-.5)*64,q=-3+Math.random()*24,fe=-26+Math.random()*42;pe[_*3]=Y,pe[_*3+1]=q,pe[_*3+2]=fe,ae[_*3]=Y,ae[_*3+1]=q,ae[_*3+2]=fe,Ie[_]=Math.random()*6.28}const Qe=new jt;Qe.setAttribute("position",new rn(ae,3));const Ge=new Oa({size:.34,map:s.glow,color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:vt,sizeAttenuation:!0,fog:!1}),ft=new go(Qe,Ge);ft.renderOrder=6,o.add(ft);const Ht=[];for(let _=0;_<18;_++){const Y=new mt({map:s.glow,color:_%3?16736127:16765286,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),q=new yt(Y);q.scale.set(.8+Math.random()*1.8,.8+Math.random()*1.8,1),q.renderOrder=-8,o.add(q),Ht.push({sprite:q,mat:Y,x:(Math.random()-.5)*18,z:-20-Math.random()*28,phase:Math.random()*6.28,speed:.5+Math.random()*.7})}const Dt=[{id:"kai",num:"01",map:s.kai,label:s.labelKai,color:9435903,x:-13.5,y:7.2,z:-25,rot:.24,scale:1},{id:"rei",num:"02",map:s.rei,label:s.labelRei,color:16765286,x:13.5,y:6.1,z:-31,rot:-.25,scale:.94},{id:"nova",num:"??",map:s.nova,label:s.labelNova,color:16736127,x:0,y:10.4,z:-40,rot:.04,scale:1.08}].map((_,Y)=>{const q=new $t;q.position.set(_.x,_.y,_.z),q.rotation.y=_.rot,q.renderOrder=-7,o.add(q);const fe=new mt({map:s.glow,color:_.color,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),se=new yt(fe);se.scale.set(9,10.8,1),se.position.z=-.06,se.renderOrder=-9,q.add(se);const R=new Zt({color:_.color,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:Fn,fog:!1}),be=new wt(new kn(4.9,6.05),R);be.position.z=-.02,be.renderOrder=-8,q.add(be);const $=new Zt({map:_.map,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:Fn,fog:!1}),lt=new wt(new kn(4.6,5.75),$);lt.renderOrder=-7,q.add(lt);const ct=new Zt({map:s.static,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,side:Fn,fog:!1}),Ft=new wt(new kn(4.6,5.75),ct);Ft.position.z=.03,Ft.renderOrder=-6,q.add(Ft);const nn=new mt({map:_.label,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,fog:!1}),an=new yt(nn);return an.scale.set(4.6,1.15,1),an.position.set(0,-3.5,.08),an.renderOrder=-5,q.add(an),{..._,group:q,aura:se,auraMat:fe,border:be,borderMat:R,photo:lt,photoMat:$,tear:Ft,tearMat:ct,label:an,labelMat:nn,phase:Y*2.1,homeY:_.y,homeX:_.x,homeZ:_.z,glitch:Y===2?1:0}}),Ke=560,De=new Float32Array(Ke*3),ke=new Float32Array(Ke*3),st=new Float32Array(Ke*3),Ne=new Float32Array(Ke),nt=[new Oe(16726876),new Oe(16736210),new Oe(9435903),new Oe(16765286)];for(let _=0;_<Ke;_++){De[_*3]=(Math.random()-.5)*92,De[_*3+1]=-5+Math.random()*34,De[_*3+2]=-8-Math.random()*46,ke[_*3]=(Math.random()<.5?-1:1)*(7+Math.random()*18),ke[_*3+1]=1.5+Math.random()*7,ke[_*3+2]=(Math.random()-.5)*6;const Y=nt[_%nt.length];st[_*3]=Y.r,st[_*3+1]=Y.g,st[_*3+2]=Y.b,Ne[_]=Math.random()*6.28}const Bt=new jt;Bt.setAttribute("position",new rn(De,3)),Bt.setAttribute("color",new rn(st,3));const St=new Oa({size:.42,map:s.glow,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vt,sizeAttenuation:!0,fog:!1}),w=new go(Bt,St);w.renderOrder=7,w.visible=!1,o.add(w);const y=new $t;y.position.set(0,-.02,0),P.add(y);const X=[];for(let _=0;_<3;_++){const Y=5.4+_*3.2,q=new Zt({color:_===1?16771496:16762186,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),fe=new wt(new Fa(Y,.055+_*.012,4,96),q);fe.rotation.x=Math.PI/2,fe.position.y=.1+_*.01,y.add(fe),X.push({mat:q,base:.46-_*.1,ring:fe,spin:(_%2?-1:1)*(.04+_*.012)})}const oe=[];for(let _=0;_<8;_++){const Y=_/8*Math.PI*2+.2,q=new Zt({color:_%3?2906754:8215074,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),fe=new wt(new Qi(.16,.5,2.8+_%3,4),q);fe.position.set(Math.cos(Y)*(12+_%2*2.4),1.4,Math.sin(Y)*(12+_%2*2.4)),fe.rotation.y=Y,y.add(fe),oe.push({mat:q,mesh:fe,phase:_*.8,baseY:fe.position.y})}const re=[];for(let _=0;_<14;_++){const Y=new mt({map:s.glow,color:_%4===0?16774095:16762186,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),q=new yt(Y),fe=10-_*2.6,se=Math.sin(_*.8)*(1.6+_*.18);q.position.set(se,.08,fe),q.scale.set(.5+_%3*.18,.5+_%3*.18,1),y.add(q),re.push({mat:Y,sprite:q,phase:_*.55})}let V=0,Se=0;function xe(_){r.phase=_;const Y=c[_]||c.off;l.world=Y.world??0,l.void=Y.void??0,l.flowers=Y.flowers??0,l.pillars=Y.pillars??0,l.halo=Y.halo??0,l.memory=Y.memory??0,l.bright=Y.bright??0,(_==="guilt"||_==="fake"||_==="offbeat"||_==="fastbeat")&&(r.world=Math.min(r.world,l.world+.01),r.flowers=Math.min(r.flowers,l.flowers+.01),r.pillars=Math.min(r.pillars,l.pillars+.01),r.halo=Math.min(r.halo,l.halo+.01),r.memory=Math.min(r.memory,l.memory+.01))}function We(_){if(r.active=!!_,o.visible=!!_,!_){r.phase="off";for(const Y of Object.keys(l))l[Y]=0}}function He(_=1){Se=Math.max(Se,Math.min(1.4,_));for(const Y of tt)Y.flash=Math.max(Y.flash,_*.8)}function _e(_=1){r.glitch=Math.min(2.2,r.glitch+_)}function Te(_){r.partner=_==="rei"||_==="nova"?_:"kai"}function et(_){r.chaosOn=_?1:0,r.chaos=_?Math.max(r.chaos,.18):r.chaos,_||(r.chaos=0,w.visible=!1,St.opacity=0)}function Fe(_,Y="center",q=2.2){r.cutsceneTarget=_?1:0,_?(r.sideTarget=Y==="left"?-1:Y==="right"?1:0,r.cutsceneDur=Math.max(.35,q),r.cutsceneT=0,r.cutscene||(r.cutscene=1e-4)):r.sideTarget=0}function Ee(_,Y){if(!r.active)return;V=Y,Se*=Math.exp(-_*4.2),r.glitch*=Math.exp(-_*4.8),r.chaos+=((r.chaosOn?1:0)-r.chaos)*(1-Math.exp(-_*2.2)),r.cutscene+=((r.cutsceneTarget?1:0)-r.cutscene)*(1-Math.exp(-_*4.6)),r.side+=(r.sideTarget-r.side)*(1-Math.exp(-_*3.6)),r.cutsceneT+=_;for(const ne of Object.keys(l))r[ne]+=(l[ne]-r[ne])*(1-Math.exp(-_*2.6));const q=r.world,fe=r.void,se=r.glitch,R=r.chaos,be=r.cutscene,$=r.side,lt=$*be*11;o.visible=q>.012||fe>.012||r.flowers>.01,d.opacity=q*(.9+r.bright*.08),f.opacity=q*.94,s.ocean.offset.x=V*(.005+R*.009)%1,s.ocean.offset.y=V*(.013+R*.02)%1,h.position.x=Math.sin(V*.04)*2+lt*.4,P.position.y=-5.4+Math.sin(V*.38)*.08,P.rotation.z=Math.sin(V*.31)*.012+Se*.006,ie.rotation.z=Math.sin(V*.5)*.025+Math.sin(V*.17)*.012,ie.rotation.y=Math.sin(V*.2)*.03,le.scale.setScalar(1+Se*.18),ue.rotation.y+=_*(1.1+Se*2.2+R*.6),ue.rotation.z+=_*.45,ue.rotation.x=Math.sin(V*.3)*.12,y.rotation.y+=_*(.035+R*.12);for(const ne of X)ne.mat.opacity=q*ne.base*(.82+Se*.18);for(const ne of oe)ne.mat.opacity=q*.36*(.72+.28*Math.sin(V*.7+ne.phase)),ne.mesh.position.y=ne.baseY+Math.sin(V*.55+ne.phase)*.1;for(const ne of re){ne.mat.opacity=q*(.16+.2*Math.sin(V*1.6-ne.phase))+(q*.1+Se*.2);const Ye=.7+.25*Math.sin(V*1.3+ne.phase);ne.sprite.scale.set(.5*Ye+.2,.5*Ye+.2,1)}const ct=r.halo;Me.scale.set(4.2*(1+Se*.16),4.2*(1+Se*.16),1),te.opacity=(q*.55+ct*.4)*(.85+Se*.15),Ae[1].opacity=ct*(.5+Se*.25),Ae[2].opacity=ct*(.32+Se*.2),Ae[3].opacity=ct*(.2+Se*.14),Ae[4].opacity=ct*(.07+Se*.07);for(const ne of ee)ne===b?ne.opacity=q*.96:ne===N?ne.opacity=q*.92:ne===W?ne.opacity=q*.8:ne.opacity=q*.55;for(const ne of Ae);for(const ne of g)ne.sprite.position.x=ne.x+Math.sin(V*.035+ne.phase)*3.2,ne.sprite.position.y+=Math.sin(V*.055+ne.phase)*_*.12,ne.mat.opacity=q*ne.base*(.85+.15*Math.sin(V*.2+ne.phase));const Ft=Math.min(1.8,r.flowers);L.opacity=q*Math.min(1,.18+Ft*.68),L.size=1.05+Ft*.2,I.setDrawRange(0,Math.min(x,Math.floor(x*(.62+Math.min(.5,Ft*.36)))));for(let ne=0;ne<x;ne++){const Ye=C[ne],Kt=A[ne*3],Pn=A[ne*3+1]+Math.sin(V*.75+Ye)*.16+Math.sin(V*.27+Ye*2.1)*.1,Gn=A[ne*3+2];m[ne*3]=Kt+Math.sin(V*.19+Ye)*.45,m[ne*3+1]=Pn+Ft*.1,m[ne*3+2]=Gn}I.attributes.position.needsUpdate=!0;const nn=new Oe(16765286),an=new Oe(16773568);for(const ne of tt){const Ye=r.pillars*(1+Math.sin(V*.33+ne.def.x*.04)*.012);ne.grow+=(Ye-ne.grow)*(1-Math.exp(-_*1.7)),ne.flash*=Math.exp(-_*2.4);const Kt=Math.max(.001,ne.def.h*ne.grow);ne.h=Kt,ne.body.scale.y=Kt,ne.edge.scale.y=Kt,ne.body.position.y=Kt*.5,ne.edge.position.y=Kt*.5,ne.cap.position.y=Kt+.4,ne.cap.scale.setScalar((2.6+Se*1.5)*Math.min(1,ne.grow*2)),ne.mat.opacity=q*(.3+ne.flash*.5),ne.edgeMat.opacity=q*(.14+ne.flash*.45),ne.capMat.opacity=q*(.04+ne.flash*.2+Se*.05),ne.mat.color.set(ne.def.hue).lerp(nn,Math.min(1,ne.flash)),ne.edgeMat.color.set(10475775).lerp(an,Math.min(1,ne.flash))}const on=r.memory;for(let ne=0;ne<Ht.length;ne++){const Ye=Ht[ne],Pn=-6+((V*Ye.speed+Ye.phase*3.1)%24+24)%24*1.15;Ye.sprite.position.set(Ye.x+Math.sin(V*.24+Ye.phase)*1.8,Pn,Ye.z+Math.cos(V*.18+Ye.phase)*1.2);const Gn=Math.sin(Math.min(1,Math.max(0,Pn/20))*Math.PI);Ye.mat.opacity=Math.max(0,on*.5*Gn*(.7+.3*Math.sin(V*3+Ye.phase))),Ye.sprite.visible=Ye.mat.opacity>.004}const zn=Math.min(1.4,on+be*.4+R*.2);for(let ne=0;ne<Dt.length;ne++){const Ye=Dt[ne],Kt=Ye.id===r.partner,Pn=Math.sin(V*.42+Ye.phase)*.42,Gn=Math.sin(V*.16+Ye.phase)*1.5,Fi=Ye.glitch&&Math.sin(V*11.3+Ye.phase)>.68,ua=Fi?(Math.random()-.5)*.34:0;Ye.group.position.set(Ye.homeX+Gn+$*be*9+ua+(ne-1)*zn*.7,Ye.homeY+Pn+be*(Kt?1.1:-.35)+(Kt?.55:0)*on,Ye.homeZ+Math.cos(V*.18+Ye.phase)*.8-be*4),Ye.group.rotation.y=Ye.rot+Math.sin(V*.22+Ye.phase)*.045+$*be*.16;const Qa=(.88+Math.min(1.6,zn)*.2)*Ye.scale*(1+Se*.012);Ye.group.scale.setScalar(Qa);const ii=(.05+on*.7+be*.17+R*.08)*(Kt?1.18:.86),Bi=.82+.18*Math.sin(V*1.7+Ye.phase);Ye.auraMat.opacity=ii*.32*Bi,Ye.borderMat.opacity=ii*.76*Bi,Ye.photoMat.opacity=Math.min(1,ii*1.16)*Bi,Ye.labelMat.opacity=Math.min(1,ii*1.3),Ye.tearMat.opacity=Ye.glitch?ii*(.1+(Fi?.8:.06)):0,Ye.photo.position.x=Fi?(Math.random()-.5)*.16:0,Ye.group.visible=Ye.photoMat.opacity>.004}if(St.opacity=R*.68,w.visible=R>.012,w.visible){for(let ne=0;ne<Ke;ne++)De[ne*3]+=ke[ne*3]*_*(.7+R*.9),De[ne*3+1]+=ke[ne*3+1]*_,De[ne*3+2]+=ke[ne*3+2]*_,De[ne*3]>52?De[ne*3]=-52:De[ne*3]<-52&&(De[ne*3]=52),De[ne*3+1]>34&&(De[ne*3+1]=-5),De[ne*3+2]>4?De[ne*3+2]=-54:De[ne*3+2]<-58&&(De[ne*3+2]=4),De[ne*3+1]+=Math.sin(V*2.2+Ne[ne])*_*.5;Bt.attributes.position.needsUpdate=!0}const $n=1+R*3.6;Ge.opacity=Math.max(fe,q*.26)*.84,Ge.size=.3+fe*.08+R*.07;for(let ne=0;ne<gt;ne++){const Ye=Ie[ne];ae[ne*3]=pe[ne*3]+Math.sin(V*.11+Ye)*1.7,ae[ne*3+1]=pe[ne*3+1]+Math.sin(V*.17+Ye*1.7)*1.3+(V*(.16+ne%5*.035)*$n+Ye*2.4)%22-8,ae[ne*3+2]=pe[ne*3+2]+Math.cos(V*.09+Ye)*1.3}Qe.attributes.position.needsUpdate=!0;const Nn=S-be*5;if(se>.005){const ne=se*.12;P.position.x=lt+(Math.random()-.5)*ne,P.position.z=Nn+(Math.random()-.5)*ne;for(const Ye of g)Ye.sprite.position.x+=(Math.random()-.5)*ne*.4;u.rotation.z=(Math.random()-.5)*se*.01}else P.position.x+=(lt-P.position.x)*.08,P.position.z=Nn+(P.position.z-Nn)*.92,u.rotation.z*=.9}function at(_){r.portrait=_;const Y=_?.92:1.35;P.scale.setScalar(Y),S=_?-36:-27,P.position.z=S,P.position.y=-5.4,u.scale.setScalar(_?1.15:1),tt[0].group.position.z=_?-64:-58,tt[1].group.position.x=_?-27:-34,tt[2].group.position.x=_?27:34,ue.position.y=_?9.4:9.9;for(const q of g){const fe=_?.82:1;q.sprite.scale.set(q.sx*fe,q.sy*fe,1)}}return{root:o,setPhase:xe,setActive:We,update:Ee,beat:He,glitch:_e,layout:at,level:r,setPartner:Te,setChaos:et,setCutscene:Fe}}const Da=["#4ff2ff","#43d8ff","#6aa8ff","#9a86ff","#c477ff","#ff79dc","#ff7fb5","#ffb06e"],Id=Array.from({length:8},()=>"#ffffff"),gr=["#ff2d55","#ff5e78","#ff8a3d","#ffd166","#ffd166","#ff8a3d","#ff5e78","#ff2d55"],yr=1.75,_r=.015;function cn(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function dn(i){const e=new bu(i);return e.colorSpace=xn,e.anisotropy=4,e}function Gg(){const[i,e]=cn(128,128),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.22,"rgba(255,255,255,.75)"),t.addColorStop(.55,"rgba(255,255,255,.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),dn(i)}function Hg(){const[i,e]=cn(512,512),t=256;e.translate(t,t);const n=e.createRadialGradient(0,0,110,0,0,250);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.55,"rgba(255,255,255,.03)"),n.addColorStop(.76,"rgba(255,255,255,.14)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,252,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,255,255,.55)",e.lineWidth=4,e.setLineDash([32,30]),e.shadowColor="#fff",e.shadowBlur=14,e.beginPath(),e.arc(0,0,227,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.98)",e.lineWidth=15,e.shadowColor="#fff",e.shadowBlur=26,e.beginPath(),e.arc(0,0,174,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.42)",e.lineWidth=3,e.beginPath(),e.arc(0,0,126,0,Math.PI*2),e.stroke(),e.restore();for(let a=0;a<4;a++)e.save(),e.rotate(a*Math.PI/2),e.strokeStyle="rgba(255,255,255,.9)",e.lineWidth=5,e.shadowColor="#fff",e.shadowBlur=12,e.beginPath(),e.moveTo(0,-226),e.lineTo(0,-196),e.stroke(),e.restore();return e.save(),e.fillStyle="rgba(255,255,255,.85)",e.shadowColor="#fff",e.shadowBlur=20,e.beginPath(),e.arc(0,0,5,0,Math.PI*2),e.fill(),e.restore(),dn(i)}function Vg(){const[i,e]=cn(96,1024),t=e.createLinearGradient(0,1024,0,0);return t.addColorStop(0,"rgba(255,255,255,.95)"),t.addColorStop(.35,"rgba(255,255,255,.55)"),t.addColorStop(.78,"rgba(255,255,255,.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.strokeStyle=t,e.lineWidth=7,e.shadowColor="#fff",e.shadowBlur=22,e.beginPath(),e.moveTo(48,1024),e.lineTo(48,6),e.stroke(),e.shadowBlur=6,e.lineWidth=2,e.strokeStyle="rgba(255,255,255,.95)",e.beginPath(),e.moveTo(48,1024),e.lineTo(48,6),e.stroke(),dn(i)}function Wg(){const[i,e]=cn(192,1024),t=e.createLinearGradient(0,1024,0,0);t.addColorStop(0,"rgba(255,255,255,.34)"),t.addColorStop(.5,"rgba(255,255,255,.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,192,1024);const n=e.createLinearGradient(0,0,192,0);return n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.32,"rgba(255,255,255,.5)"),n.addColorStop(.5,"rgba(255,255,255,1)"),n.addColorStop(.68,"rgba(255,255,255,.5)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.globalCompositeOperation="destination-in",e.fillStyle=n,e.fillRect(0,0,192,1024),dn(i)}function Xg(){const[i,e]=cn(256,256),t=128;e.translate(t,t);const n=e.createRadialGradient(0,0,18,0,0,124);n.addColorStop(0,"rgba(255,255,255,.62)"),n.addColorStop(.45,"rgba(255,255,255,.2)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,124,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,255,255,.98)",e.lineWidth=17,e.shadowColor="#fff",e.shadowBlur=28,e.beginPath(),e.arc(0,0,84,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.5)",e.lineWidth=4,e.shadowColor="#fff",e.shadowBlur=10,e.beginPath(),e.arc(0,0,56,0,Math.PI*2),e.stroke(),e.restore();const a=e.createRadialGradient(0,0,0,0,0,30);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.55,"rgba(255,255,255,.75)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,30,0,Math.PI*2),e.fill();for(let o=0;o<4;o++)e.save(),e.rotate(o*Math.PI/2),e.strokeStyle="rgba(255,255,255,.9)",e.lineWidth=5,e.shadowColor="#fff",e.shadowBlur=12,e.beginPath(),e.moveTo(0,-122),e.lineTo(0,-100),e.stroke(),e.restore();return dn(i)}function Yg(){const[i,e]=cn(128,512),t=e.createLinearGradient(0,0,128,0);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.22,"rgba(255,255,255,.35)"),t.addColorStop(.5,"rgba(255,255,255,.95)"),t.addColorStop(.78,"rgba(255,255,255,.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,512),e.fillStyle="rgba(255,255,255,.95)",e.shadowColor="#fff",e.shadowBlur=18,e.fillRect(48,0,32,512);const n=e.createLinearGradient(0,0,0,512);return n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.08,"rgba(255,255,255,1)"),n.addColorStop(.92,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.globalCompositeOperation="destination-in",e.fillStyle=n,e.fillRect(0,0,128,512),dn(i)}function Zg(){const[i,e]=cn(1024,128),t=e.createLinearGradient(0,0,1024,0);return t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.06,"rgba(255,255,255,.4)"),t.addColorStop(.5,"rgba(255,255,255,1)"),t.addColorStop(.94,"rgba(255,255,255,.4)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.strokeStyle=t,e.lineWidth=7,e.shadowColor="#fff",e.shadowBlur=26,e.beginPath(),e.moveTo(0,64),e.lineTo(1024,64),e.stroke(),e.lineWidth=2,e.shadowBlur=6,e.beginPath(),e.moveTo(0,64),e.lineTo(1024,64),e.stroke(),dn(i)}function Dd(i,e){const[t,n]=cn(2048,512);let a=i>>>0;const o=()=>(a=a*1664525+1013904223>>>0,a/4294967296);n.clearRect(0,0,2048,512);const s=n.createLinearGradient(0,150,0,512);s.addColorStop(0,"rgba(80,190,255,0)"),s.addColorStop(.7,"rgba(60,150,255,.09)"),s.addColorStop(1,"rgba(255,110,200,.08)"),n.fillStyle=s,n.fillRect(0,0,2048,512);let r=-40;for(;r<2088;){const c=24+Math.floor(o()*74),d=90+Math.floor(o()*300),u=512-d;n.save(),n.fillStyle="rgba(3,8,24,.82)",n.fillRect(r,u,c,d),n.strokeStyle=o()<.28?"rgba(255,120,200,.7)":"rgba(70,210,255,.55)",n.lineWidth=2,n.shadowColor=n.strokeStyle,n.shadowBlur=10,n.strokeRect(r+1,u+1,c-2,d-2),n.shadowBlur=0;const f=Math.max(1,Math.floor((c-10)/12)),h=Math.max(2,Math.floor((d-16)/17));for(let g=0;g<h;g++)for(let x=0;x<f;x++)o()<.64||(n.fillStyle=o()<.22?"rgba(255,205,130,.9)":o()<.5?"rgba(120,235,255,.85)":"rgba(255,120,195,.8)",n.fillRect(r+6+x*12,u+9+g*17,4,6));o()<.45&&(n.strokeStyle="rgba(150,225,255,.65)",n.lineWidth=1,n.beginPath(),n.moveTo(r+c*.5,u),n.lineTo(r+c*.5,u-18-o()*34),n.stroke(),n.fillStyle="rgba(255,90,150,.95)",n.fillRect(r+c*.5-1.5,u-22-o()*30,3,3)),n.restore(),r+=c+3+Math.floor(o()*11)}if(e){const c=n.createLinearGradient(0,360,0,512);c.addColorStop(0,"rgba(255,140,90,0)"),c.addColorStop(1,"rgba(255,140,90,.12)"),n.fillStyle=c,n.fillRect(0,300,2048,212)}const l=dn(t);return l.wrapS=aa,l.wrapT=Ri,l}function qg(){const[i,e]=cn(1024,1024);e.translate(512,512);const t=e.createRadialGradient(0,0,60,0,0,505);t.addColorStop(0,"rgba(255,255,255,.03)"),t.addColorStop(.55,"rgba(255,255,255,.01)"),t.addColorStop(.82,"rgba(255,255,255,.08)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(0,0,505,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,255,255,.5)",e.lineWidth=5,e.shadowColor="#fff",e.shadowBlur=28,e.beginPath(),e.arc(0,0,470,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(255,255,255,.2)",e.lineWidth=2,e.beginPath(),e.arc(0,0,440,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(255,255,255,.13)",e.lineWidth=2,e.setLineDash([7,18]),e.beginPath(),e.arc(0,0,344,0,Math.PI*2),e.stroke(),e.restore();for(let n=0;n<60;n++){const a=n%5===0;e.save(),e.rotate(n*Math.PI/30),e.strokeStyle=a?"rgba(255,255,255,.92)":"rgba(255,255,255,.3)",e.lineWidth=a?7:2,e.shadowColor="#fff",e.shadowBlur=a?18:7,e.beginPath(),e.moveTo(0,-468),e.lineTo(0,-(a?414:444)),e.stroke(),e.restore()}for(let n=0;n<4;n++)e.save(),e.rotate(n*Math.PI/2),e.fillStyle="rgba(255,255,255,.82)",e.shadowColor="#fff",e.shadowBlur=22,e.beginPath(),e.moveTo(0,-500),e.lineTo(13,-516),e.lineTo(0,-532),e.lineTo(-13,-516),e.closePath(),e.fill(),e.restore();return dn(i)}function Kg(){const[i,e]=cn(512,512);e.translate(256,256);const t=e.createRadialGradient(0,0,40,0,0,250);t.addColorStop(0,"rgba(255,255,255,.05)"),t.addColorStop(.7,"rgba(255,255,255,.02)"),t.addColorStop(.92,"rgba(255,255,255,.16)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(0,0,250,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255,255,255,.42)",e.lineWidth=2,e.beginPath(),e.arc(0,0,206,0,Math.PI*2),e.stroke();for(let n=0;n<12;n++){const a=n%3===0;e.save(),e.rotate(n*Math.PI/6),e.strokeStyle=a?"rgba(255,255,255,.85)":"rgba(255,255,255,.3)",e.lineWidth=a?4:1.5,e.beginPath(),e.moveTo(0,-204),e.lineTo(0,a?-172:-188),e.stroke(),e.restore()}return e.save(),e.shadowColor="#fff",e.shadowBlur=22,e.fillStyle="rgba(255,255,255,.95)",e.beginPath(),e.moveTo(-7,-16),e.lineTo(0,-196),e.lineTo(7,-16),e.closePath(),e.fill(),e.beginPath(),e.arc(0,0,11,0,Math.PI*2),e.fill(),e.restore(),dn(i)}function $g(){const[i,e]=cn(128,1024),t=e.createLinearGradient(0,1024,0,0);return t.addColorStop(0,"rgba(255,255,255,.6)"),t.addColorStop(.5,"rgba(255,255,255,.95)"),t.addColorStop(.9,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,.2)"),e.fillStyle=t,e.shadowColor="#fff",e.shadowBlur=22,e.beginPath(),e.moveTo(47,1010),e.lineTo(58,120),e.lineTo(64,34),e.lineTo(70,120),e.lineTo(81,1010),e.closePath(),e.fill(),e.shadowBlur=28,e.fillStyle="rgba(255,255,255,1)",e.beginPath(),e.arc(64,72,15,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(64,942,20,0,Math.PI*2),e.fill(),dn(i)}function jg(){const[i,e]=cn(256,256);return e.translate(128,128),e.shadowColor="#fff",e.shadowBlur=26,e.fillStyle="rgba(255,255,255,.98)",e.save(),e.rotate(-.22),e.beginPath(),e.ellipse(-8,56,30,21,-.18,0,Math.PI*2),e.fill(),e.fillRect(16,-84,8,140),e.beginPath(),e.moveTo(24,-84),e.bezierCurveTo(82,-62,86,6,38,32),e.bezierCurveTo(68,-6,56,-50,24,-60),e.closePath(),e.fill(),e.restore(),dn(i)}function Jg(){const[i,e]=cn(64,1024),t=e.createLinearGradient(0,0,64,0);return t.addColorStop(0,"rgba(255,255,255,.06)"),t.addColorStop(.38,"rgba(255,255,255,.62)"),t.addColorStop(.52,"rgba(255,255,255,1)"),t.addColorStop(.66,"rgba(255,255,255,.58)"),t.addColorStop(1,"rgba(255,255,255,.06)"),e.fillStyle=t,e.shadowColor="#fff",e.shadowBlur=12,e.fillRect(27,26,10,972),e.shadowBlur=22,e.beginPath(),e.arc(32,44,15,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(32,982,25,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255,255,255,.8)",e.lineWidth=3,e.beginPath(),e.arc(32,982,25,0,Math.PI*2),e.stroke(),dn(i)}function kd(i=1){const[e,t]=cn(256,512);let n=i>>>0;const a=()=>(n=n*1664525+1013904223>>>0,n/4294967296);t.clearRect(0,0,256,512),t.save(),t.beginPath(),t.moveTo(12,512),t.lineTo(12,206),t.bezierCurveTo(18,104,82,38,128,10),t.bezierCurveTo(174,38,238,104,244,206),t.lineTo(244,512),t.closePath(),t.clip(),t.fillStyle="rgba(4,5,14,.96)",t.fillRect(0,0,256,512);const o=["#ff4d6d","#ff9a5e","#ffd27a","#4ff2ff","#9b6bff","#ff6fb5"];for(let r=0;r<4;r++)for(let l=0;l<8;l++){const c=o[(r+l+i)%o.length];t.globalAlpha=.32+a()*.28,t.fillStyle=c;const d=20+r*56+l%2*12,u=160+l*44;t.beginPath(),t.moveTo(d+22,u),t.lineTo(d+44,u+20),t.lineTo(d+22,u+40),t.lineTo(d,u+20),t.closePath(),t.fill()}const s=t.createLinearGradient(0,40,0,512);s.addColorStop(0,"rgba(255,240,190,.9)"),s.addColorStop(.35,"rgba(255,150,120,.55)"),s.addColorStop(1,"rgba(120,70,190,.32)"),t.globalAlpha=1,t.fillStyle=s,t.beginPath(),t.moveTo(102,512),t.lineTo(102,190),t.quadraticCurveTo(108,118,128,92),t.quadraticCurveTo(148,118,154,190),t.lineTo(154,512),t.closePath(),t.fill(),t.strokeStyle="rgba(8,8,18,.92)",t.lineWidth=7;for(let r=1;r<4;r++)t.beginPath(),t.moveTo(20+r*56,150),t.lineTo(20+r*56,512),t.stroke();for(let r=1;r<8;r++)t.beginPath(),t.moveTo(14,160+r*44),t.lineTo(242,160+r*44),t.stroke();return t.lineWidth=5,t.beginPath(),t.arc(128,182,58,0,Math.PI*2),t.stroke(),t.beginPath(),t.arc(128,182,30,0,Math.PI*2),t.stroke(),t.restore(),t.save(),t.strokeStyle="rgba(255,226,160,.92)",t.lineWidth=7,t.shadowColor="#ffd27a",t.shadowBlur=18,t.beginPath(),t.moveTo(12,512),t.lineTo(12,206),t.bezierCurveTo(18,104,82,38,128,10),t.bezierCurveTo(174,38,238,104,244,206),t.lineTo(244,512),t.stroke(),t.restore(),dn(e)}function Qg(){const[i,e]=cn(1024,1024);e.translate(512,512);const t=["#ff4d6d","#ffb45e","#ffd27a","#4ff2ff","#9b6bff","#ff6fb5"],n=e.createRadialGradient(0,0,260,0,0,500);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.82,"rgba(255,210,122,.12)"),n.addColorStop(1,"rgba(255,210,122,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,500,0,Math.PI*2),e.fill();for(let o=0;o<12;o++){e.save(),e.rotate(o*Math.PI/6);const s=e.createRadialGradient(0,-210,20,0,-300,150);s.addColorStop(0,t[o%t.length]),s.addColorStop(.62,"rgba(255,235,190,.75)"),s.addColorStop(1,"rgba(20,12,40,0)"),e.fillStyle=s,e.beginPath(),e.moveTo(0,-118),e.bezierCurveTo(116,-206,96,-356,0,-414),e.bezierCurveTo(-96,-356,-116,-206,0,-118),e.closePath(),e.fill(),e.strokeStyle="rgba(10,8,20,.9)",e.lineWidth=7,e.stroke(),e.strokeStyle="rgba(255,226,160,.75)",e.lineWidth=3,e.beginPath(),e.moveTo(0,-148),e.quadraticCurveTo(50,-250,0,-380),e.stroke(),e.restore()}e.strokeStyle="rgba(255,226,160,.9)",e.shadowColor="#ffd27a",e.shadowBlur=18;for(const o of[414,286,168,82])e.lineWidth=o===414?12:7,e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.stroke();for(let o=0;o<24;o++)e.save(),e.rotate(o*Math.PI/12),e.fillStyle=t[o%t.length],e.shadowColor=t[o%t.length],e.shadowBlur=16,e.beginPath(),e.arc(0,-352,22,0,Math.PI*2),e.fill(),e.restore();const a=e.createRadialGradient(0,0,0,0,0,78);return a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.4,"rgba(255,220,150,.8)"),a.addColorStop(1,"rgba(255,90,120,0)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,78,0,Math.PI*2),e.fill(),dn(i)}function Nd(i=1){const[e,t]=cn(512,512);let n=i>>>0;const a=()=>(n=n*1664525+1013904223>>>0,n/4294967296);t.fillStyle="#090711",t.fillRect(0,0,512,512);const o=8,s=5,r=512/s,l=512/o;for(let d=0;d<o;d++){const u=d%2*r*.5;for(let f=-1;f<=s;f++){const h=16+a()*14;t.fillStyle=`rgb(${Math.round(h+4)},${Math.round(h+1)},${Math.round(h+12)})`,t.fillRect(f*r+u+1.5,d*l+1.5,r-3,l-3),t.strokeStyle=`rgba(190,160,190,${.035+a()*.04})`,t.lineWidth=1,t.strokeRect(f*r+u+2,d*l+2,r-4,l-4)}}for(let d=0;d<4;d++){const u=t.createLinearGradient(d*128,0,d*128+128,0);u.addColorStop(0,"rgba(0,0,0,.34)"),u.addColorStop(.5,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(0,0,0,.22)"),t.fillStyle=u,t.fillRect(d*128,0,128,512)}for(let d=0;d<80;d++)t.fillStyle=`rgba(255,210,150,${.01+a()*.025})`,t.fillRect(a()*512,a()*512,1+a()*2,1+a()*2);const c=dn(e);return c.wrapS=c.wrapT=aa,c}function e5(){const[i,e]=cn(2048,2048),t=1024;e.translate(t,t);const n=["XII","I","II","III","IV","V","VI","VII","VIII","IX","X","XI"],a=e.createRadialGradient(0,0,80,0,0,980);a.addColorStop(0,"rgba(60,24,44,.18)"),a.addColorStop(.72,"rgba(18,8,26,.32)"),a.addColorStop(.95,"rgba(255,190,100,.1)"),a.addColorStop(1,"rgba(255,190,100,0)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,980,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,226,170,.92)",e.shadowColor="#ffcf6e",e.shadowBlur=34;for(const[o,s]of[[944,10],[888,3],[720,3],[510,2],[300,2]])e.lineWidth=s,e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.stroke();e.restore();for(let o=0;o<60;o++){const s=o%5===0;e.save(),e.rotate(o*Math.PI/30),e.strokeStyle=s?"rgba(255,240,200,.95)":"rgba(255,210,130,.45)",e.lineWidth=s?13:4,e.shadowColor="#ffcf6e",e.shadowBlur=s?22:8,e.beginPath(),e.moveTo(0,-936),e.lineTo(0,-(s?836:892)),e.stroke(),e.restore()}e.save(),e.strokeStyle="rgba(255,210,130,.4)",e.lineWidth=4,e.shadowColor="#ffcf6e",e.shadowBlur=10;for(let o=0;o<24;o++)e.save(),e.rotate(o*Math.PI/12),e.beginPath(),e.moveTo(-86,-748),e.quadraticCurveTo(0,-880,86,-748),e.stroke(),e.restore();e.restore(),e.fillStyle="rgba(255,244,215,.97)",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#ffcf6e",e.shadowBlur=30,e.font='700 148px Georgia, "Times New Roman", serif',n.forEach((o,s)=>{const r=s/12*Math.PI*2-Math.PI/2;e.save(),e.translate(Math.cos(r)*678,Math.sin(r)*678),e.rotate(r+Math.PI/2),e.fillText(o,0,0),e.restore()}),e.save(),e.strokeStyle="rgba(255,226,170,.7)",e.lineWidth=5,e.shadowColor="#ffcf6e",e.shadowBlur=22;for(let o=0;o<12;o++)e.save(),e.rotate(o*Math.PI/6),e.beginPath(),e.moveTo(0,-40),e.bezierCurveTo(90,-100,92,-236,0,-278),e.bezierCurveTo(-92,-236,-90,-100,0,-40),e.stroke(),e.restore();return e.beginPath(),e.arc(0,0,72,0,Math.PI*2),e.stroke(),e.restore(),dn(i)}function t5(){const[i,e]=cn(1024,1024),t=e.createRadialGradient(512,512,80,512,512,512);t.addColorStop(0,"rgba(12,7,20,.99)"),t.addColorStop(.6,"rgba(10,6,18,.99)"),t.addColorStop(.8,"rgba(24,12,24,.96)"),t.addColorStop(.94,"rgba(88,43,34,.6)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.beginPath(),e.arc(512,512,512,0,Math.PI*2),e.fill();for(let n=0;n<90;n++){const a=Math.random()*Math.PI*2,o=180+Math.random()*300;e.fillStyle=`rgba(255,205,140,${.02+Math.random()*.05})`,e.beginPath(),e.arc(512+Math.cos(a)*o,512+Math.sin(a)*o,.6+Math.random()*1.8,0,Math.PI*2),e.fill()}return dn(i)}function n5(){const[i,e]=cn(512,512);e.fillStyle="#07070d",e.fillRect(0,0,512,512),e.strokeStyle="rgba(160,140,120,.22)",e.lineWidth=3;for(let n=0;n<=4;n++)e.beginPath(),e.moveTo(n*128,0),e.lineTo(n*128,512),e.stroke(),e.beginPath(),e.moveTo(0,n*128),e.lineTo(512,n*128),e.stroke();e.strokeStyle="rgba(255,202,120,.14)",e.lineWidth=1;for(let n=-4;n<8;n++)e.beginPath(),e.moveTo(n*128,0),e.lineTo(n*128+512,512),e.stroke(),e.beginPath(),e.moveTo(n*128+512,0),e.lineTo(n*128,512),e.stroke();for(let n=0;n<70;n++)e.fillStyle=`rgba(255,220,150,${.015+Math.random()*.03})`,e.fillRect(Math.random()*512,Math.random()*512,1+Math.random()*3,1+Math.random()*3);const t=dn(i);return t.wrapS=t.wrapT=aa,t.repeat.set(6,14),t}function i5(i){const e=matchMedia("(pointer: coarse)").matches,t=new wg({canvas:i,antialias:!e,powerPreference:"high-performance",alpha:!1,stencil:!1});t.setPixelRatio(Math.min(devicePixelRatio||1,e?1.45:1.8)),t.outputColorSpace=xn,t.toneMapping=Gl,t.toneMappingExposure=1.06;const n=new Th;n.background=new Oe(197387),n.fog=new jl(197387,.0115);const a=new On(46,innerWidth/innerHeight,.1,240);a.position.set(0,6.7,17.2);const o=new Rg(t);o.addPass(new Pg(n,a));const s=new Ya(new it(innerWidth,innerHeight),1,.62,.22);o.addPass(s),o.addPass(new Ig);const r={glow:Gg(),ring:Hg(),line:Vg(),beam:Wg(),note:Xg(),hold:Yg(),hitline:Zg(),cityFar:Dd(2047066,!1),cityNear:Dd(7023172,!0),clockFace:qg(),clockHand:$g(),clockDial:Kg(),floatNote:jg(),pendulumRod:Jg(),gothicA:kd(1),gothicB:kd(2),rose:Qg(),bossClock:e5(),bossBack:t5(),bossFloor:n5(),naveSide:Nd(3),naveEnd:Nd(7)};r.naveSide.repeat.set(8,4),r.naveEnd.repeat.set(5,5);const l=new $t;n.add(l);function c(v,O,F,B,K){const me=new Float32Array(v*3);for(let Ve=0;Ve<v;Ve++){const Be=O+Math.random()*O*1.8,Lt=Math.random()*Math.PI*2,ut=Math.acos(2*Math.random()-1);me[Ve*3]=Be*Math.sin(ut)*Math.cos(Lt),me[Ve*3+1]=Be*Math.cos(ut)*.55+3,me[Ve*3+2]=Be*Math.sin(ut)*Math.sin(Lt)-20}const ye=new jt;ye.setAttribute("position",new rn(me,3));const Ue=new Oa({size:F,map:r.glow,color:B,transparent:!0,opacity:K,depthWrite:!1,blending:vt,sizeAttenuation:!0}),Ze=new go(ye,Ue);return l.add(Ze),Ze}const d=c(1500,34,.32,10279167,.7),u=c(650,70,.55,12164351,.5),f=c(220,14,.09,8186367,.45);function h(v,O,F,B,K,me){const ye=new mt({map:r.glow,color:K,transparent:!0,opacity:me,depthWrite:!1,blending:vt,fog:!1}),Ue=new yt(ye);return Ue.position.set(v,O,F),Ue.scale.set(B,B,1),l.add(Ue),Ue}const g=h(-16,9,-34,46,1789183,.18),x=h(18,1,-40,54,9314303,.14),m=h(0,12,-26,30,16723872,.07),p=new Zt({color:4951551,wireframe:!0,transparent:!0,opacity:.055,fog:!1}),A=[];for(let v=0;v<3;v++){const O=new wt(new Fa(12+v*6.5,.045,3,120),p.clone());O.position.set(0,5,-26-v*7),O.rotation.set(.9+v*.16,v*.3,0),l.add(O),A.push(O)}const C=new zh(90,45,1811928,1254490);C.position.y=-3.6,C.material.transparent=!0,C.material.opacity=.16,C.material.depthWrite=!1,l.add(C);const T=[];for(let v=0;v<14;v++){const O=v%2?new Or(.5+Math.random()*.8,0):new Ql(.5+Math.random()*.7,0),F=new Zt({color:v%3?5823999:16740312,wireframe:!0,transparent:!0,opacity:.055+Math.random()*.05,fog:!1}),B=new wt(O,F),K=v%2?1:-1;B.position.set(K*(9+Math.random()*10),.5+Math.random()*9,-6-Math.random()*14),B.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),B.userData.spin=new U((Math.random()-.5)*.3,(Math.random()-.5)*.4,(Math.random()-.5)*.2),l.add(B),T.push(B)}const I=new $t;I.position.z=-1,l.add(I);const L=[];function k(v,O,F,B,K,me,ye){const Ue=new Zt({map:v,color:ye,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),Ze=new wt(new kn(O,F),Ue);return Ze.position.set(B,K,me),Ze.renderOrder=-2,I.add(Ze),L.push({mesh:Ze,mat:Ue,map:v,base:K,speed:0}),Ze}k(r.cityFar,150,42,-24,19,-54,11068671),k(r.cityNear,118,34,38,12,-36,16761504),L[0].speed=.0028,L[1].speed=.0062,I.visible=!1;const P=new $t;P.name="bossChurch",P.visible=!1,l.add(P);const S=[];function b(v,O=1){return v.transparent=!0,v.opacity=0,v.depthWrite=!1,S.push({mat:v,base:O}),v}const N=b(new Zt({map:r.bossFloor,color:12167566,fog:!1}),.95),W=new wt(new kn(48,116),N);W.rotation.x=-Math.PI/2,W.position.set(0,-3.64,-26),W.renderOrder=-9,P.add(W);const ee=b(new Zt({map:r.naveSide,color:16777215,fog:!1}),.9),ce=new kn(78,34);for(const v of[-1,1]){const O=new wt(ce,ee);O.position.set(v*11.62,10,-27),O.rotation.y=v<0?Math.PI/2:-Math.PI/2,O.renderOrder=-8,P.add(O)}const ie=b(new Zt({map:r.naveEnd,color:3813448,fog:!1}),.96),le=new wt(new kn(52,46),ie);le.position.set(0,12,-66),le.renderOrder=-8,P.add(le);const ue=b(new Zt({color:1314589,fog:!1}),1),te=new ca(1.35,18,1.35);for(let v=0;v<6;v++){const O=4-v*11;for(const F of[-1,1]){const B=new wt(te,ue);B.position.set(F*11.4,4.2,O),B.renderOrder=-7,P.add(B)}}const Me=new kn(4.7,11.4);for(let v=0;v<5;v++){const O=-1.5-v*11.4;for(const F of[-1,1]){const B=b(new Zt({map:v%2?r.gothicB:r.gothicA,color:F<0?16769723:16762058,transparent:!0,depthWrite:!1,blending:Rn,fog:!1}),.96),K=new wt(Me,B);K.position.set(F*11.34,7.4,O),K.rotation.y=F<0?Math.PI/2:-Math.PI/2,K.renderOrder=-5,P.add(K)}}const Ae=b(new mt({map:r.rose,color:16773576,transparent:!0,depthWrite:!1,depthTest:!1,blending:Rn,fog:!1}),.6),ze=new yt(Ae);ze.position.set(0,12.6,-56),ze.scale.set(34,34,1),ze.renderOrder=-4,P.add(ze);const dt=b(new mt({map:r.glow,color:16731501,transparent:!0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),.045),Mt=new yt(dt);Mt.position.set(0,12.6,-57),Mt.scale.set(44,44,1),Mt.renderOrder=-5,P.add(Mt);const tt=new $t;tt.name="bossClock",tt.position.set(0,10.4,-39),P.add(tt);const gt=b(new mt({map:r.bossBack,color:16777215,transparent:!0,depthWrite:!1,depthTest:!1,blending:Rn,fog:!1}),1),ae=new yt(gt);ae.scale.set(21.6,21.6,1),ae.position.z=-.06,ae.renderOrder=-3.5,tt.add(ae);const pe=b(new mt({map:r.bossClock,color:16774096,transparent:!0,depthWrite:!1,depthTest:!1,blending:Rn,fog:!1}),.74),Ie=new yt(pe);Ie.scale.set(21,21,1),Ie.renderOrder=-3,tt.add(Ie);const Qe=b(new mt({map:r.glow,color:16751198,transparent:!0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),.055),Ge=new yt(Qe);Ge.scale.set(29,29,1),Ge.renderOrder=-4,tt.add(Ge);function ft(v,O,F,B){const K=b(new mt({map:v,color:O,transparent:!0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),B),me=new yt(K);return me.center.set(.5,.06),me.position.set(0,0,.4),me.scale.set(F,F*7.1,1),me.renderOrder=-2,tt.add(me),me}const Ht=ft(r.clockHand,16765286,1.1,.72),D=ft(r.clockHand,16731501,.8,.86),Dt=b(new mt({map:r.glow,color:16774096,transparent:!0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),.38),Ke=new yt(Dt);Ke.scale.set(2.2,2.2,1),Ke.position.z=.5,Ke.renderOrder=-1,tt.add(Ke);const De=[];for(let v=0;v<22;v++){const O=v%2?1:-1,F=2-Math.floor(v/2)*5.4,B=b(new mt({map:r.glow,color:16763514,transparent:!0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),.15),K=new yt(B);K.position.set(O*(3.6+v%3*1.6),-2.7+v%2*.5,F),K.scale.set(.62,.62,1),K.renderOrder=-4,P.add(K),De.push({sprite:K,mat:B,base:.15,phase:v*1.7})}const ke=[];for(let v=0;v<5;v++){const O=b(new mt({map:r.glow,color:v%2?10185727:16751198,transparent:!0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),.018),F=new yt(O);F.position.set((v%2?1:-1)*(6+v*2.2),1.6+v*1.3,-10-v*9),F.scale.set(16+v*3,9+v*1.5,1),F.renderOrder=-6,P.add(F),ke.push({sprite:F,mat:O,base:.018,phase:v*2.1})}const st=new $t;n.add(st);const Ne=new $t;st.add(Ne);const nt=new $t;nt.renderOrder=5,st.add(nt);const Bt=new mt({map:r.hitline,color:10483199,transparent:!0,opacity:.8,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),St=new yt(Bt);St.position.set(0,.02,.25),St.scale.set(13.2,.9,1),St.renderOrder=2,st.add(St);const w=[],y=[];for(let v=0;v<8;v++){const O=(v-3.5)*yr;y.push(O);const F=_r*O*O,B=new $t;B.position.set(O,0,F),Ne.add(B);const K=new Oe(Da[v]),me=new mt({map:r.beam,color:K.clone(),transparent:!0,opacity:.08,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),ye=new yt(me);ye.center.set(.5,0),ye.position.set(0,.04,-.02),ye.scale.set(1.16,12.6,1),ye.renderOrder=0,B.add(ye);const Ue=new mt({map:r.line,color:K.clone(),transparent:!0,opacity:.62,depthWrite:!1,depthTest:!1,blending:Rn,fog:!1}),Ze=new yt(Ue);Ze.center.set(.5,0),Ze.position.set(0,.04,.02),Ze.scale.set(.36,12.4,1),Ze.renderOrder=1,B.add(Ze);const Ve=new mt({map:r.ring,color:K.clone(),transparent:!0,opacity:.95,depthWrite:!1,depthTest:!1,blending:Rn,fog:!1}),Be=new yt(Ve);Be.position.set(0,.02,.22),Be.scale.set(1.65,1.65,1),Be.renderOrder=3,B.add(Be);const Lt=new mt({map:r.glow,color:K.clone(),transparent:!0,opacity:.13,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),ut=new yt(Lt);ut.position.set(0,-.02,.18),ut.scale.set(2.2,2.2,1),ut.renderOrder=2,B.add(ut);const Yt=new mt({map:r.glow,color:K.clone().lerp(new Oe(16777215),.25),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),gn=new yt(Yt);gn.position.set(0,.2,.08),gn.scale.set(1.1,1.1,1),gn.renderOrder=4,gn.visible=!1,B.add(gn),w.push({group:B,beam:ye,line:Ze,ring:Be,glow:ut,ghost:gn,color:K.clone(),targetColor:K.clone(),flash:0,active:0,baseX:O,ghostFx:null,angle:0,pitch:0,screenAngle:0,screen:null})}const X=new $t;X.name="bossWind",st.add(X);const oe=[];for(let v=0;v<8;v++){const O=new Oe(gr[v]),F=[];for(let K=0;K<6;K++){const me=new mt({map:r.beam,color:O.clone().lerp(new Oe(16777215),.24+K*.03),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),ye=new yt(me);ye.center.set(.5,.5),ye.renderOrder=4,ye.visible=!1,X.add(ye),F.push(ye)}const B=[];for(let K=0;K<3;K++){const me=new mt({map:r.glow,color:O.clone(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),ye=new yt(me);ye.renderOrder=5,ye.visible=!1,X.add(ye),B.push(ye)}oe.push({lane:v,ribbons:F,glows:B,power:0,seed:v*2.399963})}const re=zg({scene:n,camera:a,lanes:w,stage:st,TEX:r}),V=new $t;V.position.set(0,13.2,-28),V.visible=!1,l.add(V);const Se=new mt({map:r.clockFace,color:16773576,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),xe=new yt(Se);xe.scale.set(21.6,21.6,1),xe.renderOrder=-5,V.add(xe);const We=new mt({map:r.glow,color:16762974,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),He=new yt(We);He.scale.set(29,29,1),He.renderOrder=-6,V.add(He);const _e=new Oe(Da[0]),Te=new Oe(Da[7]),et=new mt({map:r.clockHand,color:_e,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),Fe=new yt(et);Fe.center.set(.5,.07),Fe.position.set(0,0,.22),Fe.scale.set(1.02,6.8,1),Fe.renderOrder=-4,V.add(Fe);const Ee=new mt({map:r.clockHand,color:Te,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),at=new yt(Ee);at.center.set(.5,.07),at.position.set(0,0,.26),at.scale.set(.76,9.6,1),at.renderOrder=-4,V.add(at);const _=new mt({map:r.glow,color:16774096,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),Y=new yt(_);Y.scale.set(1.9,1.9,1),Y.position.z=.3,Y.renderOrder=-3,V.add(Y);function q(v){const O=new mt({map:r.clockDial,color:new Oe(Da[v]),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),F=new yt(O);return F.position.set(v===0?.86:-.86,7.6,.24),F.scale.set(2.75,2.75,1),F.renderOrder=2,F.visible=!1,w[v].group.add(F),F}const fe=q(0),se=q(7),R={group:V,face:xe,aura:He,hub:Y,handSlow:Fe,handFast:at,dialSlow:fe,dialFast:se,slowColor:_e,fastColor:Te,target:0,fade:0,mode:"off",frozen:!1,rate:1,runTime:0,anchorT:0,anchorRun:0,slowAngle:0,fastAngle:0,slowKick:0,fastKick:0,kick:0},be=16765286,$={active:!1,target:0,fade:0,period:2.4146,originT:0,baseAmp:.42,pivot:new U(0,11.8,1.2),center:new U(0,2.6,1.32),length:9.2,angle:.42,kick:0,missFlash:0,times:[],states:[],notes:[]},lt=new $t;lt.visible=!1,n.add(lt);const ct=new Oe(be),Ft=new Oe(16773576),nn=new Oe(16724831);function an(v,O,F,B){const K=new mt({map:v,color:O.clone(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),me=new yt(K);return me.scale.set(B,B,1),me.renderOrder=F,me.visible=!1,lt.add(me),me}const on=an(r.pendulumRod,Ft,5,1);on.center.set(.5,0);const zn=an(r.glow,Ft,6,1.5),$n=an(r.glow,ct,7,2.2),Nn=an(r.ring,Ft,8,2),ne=an(r.glow,ct,6,3.2),Ye=an(r.ring,Ft,10,2.9),Kt=an(r.glow,Ft,9,1.5),Pn=[];for(let v=0;v<7;v++){const O=an(r.floatNote,Ft,6,1);O.userData.r=2.7+v%3*1.1,O.userData.scale=.8+v%4*.16,O.userData.op=.42+v%3*.12,Pn.push(O)}function Gn(){const v=G.portrait;$.pivot.set(0,v?11:11.8,1.2),$.length=v?7:7.8,$.center.set(0,$.pivot.y-$.length,1.32),$.baseAmp=v?.27:.42,zn.position.copy($.pivot),Ye.position.copy($.center),ne.position.copy($.center),Kt.position.copy($.center)}function Fi({start:v=0,period:O=2.4146,amplitude:F=.42,times:B=[]}={}){$.active=!0,$.target=1,$.period=O||2.4146,$.originT=v,$.baseAmp=F||.42,$.times=B.slice(),$.states=B.map(()=>"pending"),$.kick=Math.max($.kick,.5);for(const K of $.notes)lt.remove(K),K.material.dispose();$.notes=$.times.map((K,me)=>{const ye=new mt({map:r.floatNote,color:ct.clone(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),Ue=new yt(ye),Ze=me*2.399963,Ve=3.3+me%3*.85;return Ue.userData.off={x:Math.cos(Ze)*Ve,y:Math.sin(Ze)*Ve*.66},Ue.renderOrder=7,Ue.visible=!1,lt.add(Ue),Ue}),$.fade=Math.max($.fade,.002),Gn()}function ua(){$.active=!1,$.target=0;for(const v of $.notes)v.visible=!1}function Qa(){ua(),$.fade=0,$.kick=0,$.missFlash=0,$.states=[],lt.visible=!1}function ii(v,O="hit"){$.states[v]!==void 0&&($.states[v]=O);const F=$.notes[v];F&&(F.visible=!1);const B=$.center;O==="hit"?($.kick=1,Et(B,be,22,3.4),At(B,be,3.1)):($.missFlash=1,Et(B,16724831,10,1.5),At(B,16724831,1.9))}function Bi(){$.kick=Math.max($.kick,.14)}const eo=new U,M=new U;function z(){a.updateMatrixWorld(),eo.copy($.center).project(a),M.copy($.center),M.y+=1.5,M.project(a);const v=(eo.x*.5+.5)*innerWidth,O=(-eo.y*.5+.5)*innerHeight,F=(-M.y*.5+.5)*innerHeight;return{x:v,y:O,radius:Math.max(60,Math.min(118,Math.abs(O-F)))}}function j(v,O){$.fade+=($.target-$.fade)*(1-Math.exp(-v*3.1));const F=$.fade>.012;if(lt.visible=F,!F)return;$.kick=Math.max(0,$.kick-v*3.2),$.missFlash=Math.max(0,$.missFlash-v*2.6);const B=$.baseAmp,K=B*Math.cos((O-$.originT)/$.period*Math.PI*2);$.angle=K;const me=Math.sin(K)*$.length,ye=-Math.cos(K)*$.length;on.position.copy($.pivot),on.scale.set(.5,$.length,1),on.material.rotation=Math.PI+K,zn.position.copy($.pivot),$n.position.set($.pivot.x+me,$.pivot.y+ye,$.pivot.z+.12),Nn.position.set($.pivot.x+me,$.pivot.y+ye,$.pivot.z+.16);const Ue=Math.max(0,1-Math.abs(K)/Math.max(.001,B)),Ze=1+$.kick*.22+Ue*.05;$n.scale.set(2.2*Ze,2.2*Ze,1),Nn.scale.set(2*Ze,2*Ze,1),on.visible=!0,zn.visible=!0,Nn.visible=!0,$n.visible=!0;const Ve=$.fade,Be=$.missFlash;on.material.opacity=Ve*.62,zn.material.opacity=Ve*(.55+Ue*.3),$n.material.opacity=Ve*(.24+Ue*.16+$.kick*.14),Nn.material.opacity=Ve*(.78+$.kick*.2),Nn.material.color.copy(Ft).lerp(nn,Be),$n.material.color.copy(ct).lerp(nn,Be);const Lt=1+Ue*.08+$.kick*.14;Ye.scale.set(2.9*Lt,2.9*Lt,1),ne.scale.set(3.2*Lt,3.2*Lt,1),Kt.scale.set(1.5*Lt,1.5*Lt,1),Ye.material.opacity=Ve*(.5+Ue*.3+$.kick*.18),ne.material.opacity=Ve*(.05+Ue*.04+$.kick*.06),Kt.material.opacity=Ve*(.16+Ue*.12),Ye.material.color.copy(Ft).lerp(nn,Be*.7);for(const ut of $.notes){const Yt=$.notes.indexOf(ut),gn=$.times[Yt],oi=$.states[Yt],Q=gn-O;if(oi!=="pending"||Q>1.55||Q<-.35){ut.visible=!1;continue}const ve=Math.max(0,Math.min(1,1-Q/1.55)),Nt=1-Math.pow(1-ve,3),Ln=ut.userData.off;ut.position.set($.center.x+Ln.x*(1-Nt),$.center.y+Ln.y*(1-Nt)+Math.sin(O*2.2+Yt)*.1*(1-Nt),$.center.z+.14);const yn=1.5+Nt*.55+Math.sin(O*7+Yt)*.03;ut.scale.set(yn,yn,1),ut.material.opacity=Ve*(.2+Nt*.78),ut.visible=!0}for(let ut=0;ut<Pn.length;ut++){const Yt=Pn[ut],gn=O*.24+ut*2.399963,oi=Yt.userData.r;Yt.position.set($.center.x+Math.cos(gn)*oi,$.center.y+Math.sin(gn*1.3)*oi*.6+Math.sin(O*.9+ut)*.24,$.center.z+.05),Yt.material.rotation=Math.sin(O*.5+ut)*.32;const Q=Yt.userData.scale;Yt.scale.set(Q,Q,1),Yt.material.opacity=Ve*Yt.userData.op*(.55+.45*Math.sin(O*1.5+ut*1.7)),Yt.visible=!0}}function J(v,O,F=!1){const B=Z.active?Z.theme==="intention"?Id:gr:Da,K=new Oe(B[v]),me=new $t;me.renderOrder=5,F?nt.add(me):w[v].group.add(me);const ye=new mt({map:r.note,color:K,transparent:!0,opacity:1,depthWrite:!1,depthTest:!1,blending:Rn,fog:!1}),Ue=new yt(ye);Ue.scale.set(1.04,1.04,1),Ue.renderOrder=6,me.add(Ue);let Ze=null,Ve=null;if(O==="hold"){const Be=new mt({map:r.hold,color:K.clone().lerp(new Oe(16777215),.15),transparent:!0,opacity:.72,depthWrite:!1,depthTest:!1,blending:vt,fog:!1});Ze=new yt(Be),Ze.center.set(.5,.5),Ze.renderOrder=4,me.add(Ze);const Lt=new mt({map:r.note,color:K.clone(),transparent:!0,opacity:.85,depthWrite:!1,depthTest:!1,blending:vt,fog:!1});Ve=new yt(Lt),Ve.scale.set(.68,.68,1),Ve.renderOrder=5,me.add(Ve)}return{group:me,head:Ue,body:Ze,tail:Ve,color:K,free:!!F}}function H(v,O,F=0){const B=w[v].group,K=Math.max(0,Math.min(1,O/12.2)),me=Math.pow(K,.82),ye=Math.sin(F*2.17+O*.37)*(1.45+F%3*.22)+Math.sin(F*.73+O*.19)*.7,Ue=Math.cos(F*1.31+O*.29)*1.4;return{x:B.position.x+ye*me,y:O,z:B.position.z+.24+Ue*me,sway:ye*me}}const ge=720,we=new Float32Array(ge*3).fill(-999),Le=new Float32Array(ge*3),Ce=new Float32Array(ge*3),$e=new Float32Array(ge),ot=new Float32Array(ge),qe=new jt;qe.setAttribute("position",new rn(we,3)),qe.setAttribute("color",new rn(Le,3));const _t=new Oa({size:.3,map:r.glow,vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!1,blending:vt,sizeAttenuation:!0,fog:!1}),It=new go(qe,_t);It.renderOrder=9,n.add(It);let Vt=0;function Et(v,O,F=16,B=3.2){const K=new Oe(O);for(let me=0;me<F;me++){const ye=Vt=(Vt+1)%ge;we[ye*3]=v.x+(Math.random()-.5)*.15,we[ye*3+1]=v.y+(Math.random()-.5)*.15,we[ye*3+2]=v.z+(Math.random()-.5)*.15;const Ue=Math.random()*Math.PI*2,Ze=Math.acos(2*Math.random()-1),Ve=B*(.35+Math.random()*.9);Ce[ye*3]=Math.sin(Ze)*Math.cos(Ue)*Ve,Ce[ye*3+1]=Math.cos(Ze)*Ve+.6,Ce[ye*3+2]=Math.sin(Ze)*Math.sin(Ue)*Ve;const Be=Math.random()<.35;Le[ye*3]=Be?1:K.r,Le[ye*3+1]=Be?1:K.g,Le[ye*3+2]=Be?1:K.b,$e[ye]=ot[ye]=.35+Math.random()*.5}}const Pt=[];for(let v=0;v<16;v++){const O=new mt({map:r.ring,color:16777215,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),F=new yt(O);F.scale.set(.8,.8,1),F.renderOrder=8,F.visible=!1,n.add(F),Pt.push({sprite:F,life:0,max:.38})}let je=0;function At(v,O,F=2.8){const B=Pt[je=(je+1)%Pt.length];B.sprite.position.copy(v),B.sprite.material.color.set(O),B.sprite.material.opacity=.95,B.sprite.scale.set(.7,.7,1),B.sprite.visible=!0,B.life=B.max=.38,B.scale=F}const xt=[];for(let v=0;v<54;v++){const O=new mt({map:r.ring,color:16777215,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:vt,fog:!1}),F=new yt(O);F.scale.set(.6,.6,1),F.renderOrder=7,F.visible=!1,st.add(F),xt.push({sprite:F,life:0,max:1,delay:0,vx:0,vy:0,base:.5,alpha:.6,spin:0})}let hn=0;const G={view:{rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.7,bloom:.8,spin:.04,spacing:yr,ring:1.65},target:{rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.7,bloom:.8,spin:.04,spacing:yr,ring:1.65},section:null,energy:.4,keyCount:8,active:new Set([0,1,2,3,4,5,6,7]),pulse:0,shake:0,zoomKick:0,noteSpeed:8.2,time:0,playing:!1,gameOver:!1,gameOverElapsed:0,gameOverFromPos:new U(0,6.7,17.2),gameOverFromFov:46,spacing:yr,ringScale:1.65,portrait:!1,mouse:new it,laneXNow:y.slice(),bpm:100,beatOffset:.535,energyPulse:0,motion:{style:"fan",amp:.06,speed:.5,pitch:.03},targetMotion:{style:"fan",amp:.06,speed:.5,pitch:.03},laneAngle:new Float32Array(8),lanePitch:new Float32Array(8),screenAngle:new Float32Array(8),city:0,cityTarget:0,live:new Set([0,1,2,3,4,5,6,7])},Z={active:!1,mode:"off",intro:!1,theme:"untouchable",fieldFade:1,fieldTarget:1,fieldHidden:!1,fieldGuard:0,intentFocus:0,intentFocusTarget:0,churchFade:0,churchTarget:0,clockFade:0,clockTarget:0,windBoost:0,glitch:0,slowAngle:0,fastAngle:0,handKick:0,hubKick:0,palette:"normal"},kt={lock:!1,pos:new U(0,6.7,17.2),look:new U(0,4.05,0),targetPos:new U(0,6.7,17.2),targetLook:new U(0,4.05,0),fov:46,targetFov:46,roll:0,targetRoll:0,rate:3};function zt(v){const O=v?Z.theme==="intention"?Id:gr:Da;Z.palette=v?"boss":"normal";const F=G.section?.color;for(let B=0;B<8;B++)w[B].color.set(O[B]),w[B].targetColor.copy(w[B].color),F&&Z.theme!=="intention"&&w[B].targetColor.lerp(new Oe(F),.24)}function An(v="off",O=Z.theme){const F=v||"off",B=O==="intention"?"intention":"untouchable",K=Z.theme!==B;Z.theme=B;const me=B==="intention";Z.mode=F,Z.active=F!=="off",Z.intro=F==="intro"||F==="preview",Z.fieldTarget=F==="play"||F==="outro"?1:0,O==="intention"&&F==="intro"&&(Z.fieldTarget=1),me?(Z.churchTarget=0,Z.clockTarget=0,K&&(Z.churchFade=0,Z.clockFade=0,P.visible=!1,tt.visible=!1),re.setActive(Z.active),F==="preview"?re.setPhase("preview"):F==="intro"?re.setPhase("void"):F==="play"&&Z.intro?re.setPhase("ocean"):F==="outro"&&re.setPhase("dawn")):(Z.churchTarget=F==="off"?0:F==="intro"?1:F==="preview"?.66:.46,Z.clockTarget=F==="off"?0:F==="intro"?1:.94,(K||F==="off")&&re.setActive(!1)),(F==="off"||F==="preview")&&(Z.cameraLock=!1),(F==="off"||F==="preview"||F==="intro")&&(Z.intentFocus=0,Z.intentFocusTarget=0,Z.fieldGuard=0),F==="intro"&&(Z.cameraLock=!0,me?(kt.pos.set(0,10,34),kt.look.set(0,11,-70)):(kt.pos.set(0,12,34),kt.look.set(0,14,-60)),kt.targetPos.copy(kt.pos),kt.targetLook.copy(kt.look),kt.fov=kt.targetFov=me?52:54,kt.roll=kt.targetRoll=0,Z.slowAngle=0,Z.fastAngle=0,Z.glitch=0,Z.windBoost=0,Z.handKick=0,Z.hubKick=0),(F==="off"||F==="preview")&&(kt.fov=kt.targetFov=G.portrait?52:46,kt.roll=kt.targetRoll=0,kt.lock=!1,a.fov=kt.fov,a.updateProjectionMatrix()),me||(Z.fieldHidden=!1,nt.visible=!0),zt(Z.active)}function Cn(v){nt.visible=!v}function pn(v){Z.fieldHidden=!!v,nt.visible=!v}function mn(v,O,F=49,B=0,K=.8){Z.cameraLock=!0,kt.targetPos.set(v[0],v[1],v[2]),kt.targetLook.set(O[0],O[1],O[2]),kt.targetFov=F,kt.targetRoll=B,kt.rate=5.2/Math.max(.18,Math.min(2.2,K))}const pa=.785,ai=.84,hc=.93,Xt=new U,to=new U,fa=new U,qr=new U,no=new U,zi=new U,mc=new U,pp=new U(0,4.05,0),Gi=Array.from({length:8},()=>new U),Kr=Array.from({length:8},()=>new U),$r=Array.from({length:8},()=>new U);function fp(){st.updateWorldMatrix(!0,!1),Ne.updateWorldMatrix(!1,!1);for(let v=0;v<8;v++){w[v].group.updateWorldMatrix(!1,!1);const O=w[v].group.matrixWorld;Gi[v].set(0,.02,.22).applyMatrix4(O),Kr[v].set(0,6.4,.22).applyMatrix4(O),$r[v].set(0,10.5,.22).applyMatrix4(O)}}function gc(){const v=G.active;if(!v.size)return 0;a.updateMatrixWorld();const O=Math.max(.6,G.view.ring||1.6),F=G.keyCount<=2;let B=0,K=-1/0;for(const me of v){if(fa.copy(Gi[me]).applyMatrix4(a.matrixWorldInverse),fa.z>-.6)return 1;Xt.copy(Gi[me]).project(a);const ye=Math.abs(Xt.x);ye>.68&&(B=Math.max(B,(ye-.68)/.1)),Xt.y<-.88&&(B=Math.max(B,(-.88-Xt.y)/.12)),Xt.y>.22&&(B=Math.max(B,(Xt.y-.22)/.15)),Xt.y>K&&(K=Xt.y),to.copy(Gi[me]),to.x+=O,to.project(a);const Ue=Math.hypot(to.x-Xt.x,to.y-Xt.y);if(Ue<.12&&(B=Math.max(B,(.12-Ue)/.1)),fa.copy(Kr[me]).applyMatrix4(a.matrixWorldInverse),fa.z>-.6)return 1;if(Xt.copy(Kr[me]).project(a),Xt.y<K+.05&&(B=Math.max(B,(K+.05-Xt.y)/.3)),F){if(fa.copy($r[me]).applyMatrix4(a.matrixWorldInverse),fa.z>-.6)return 1;Xt.copy($r[me]).project(a);const Ze=Math.abs(Xt.x);Ze>.9&&(B=Math.max(B,(Ze-.9)/.12))}}return Math.min(1,B)}function yc(v){const O=Math.max(0,Math.min(1,v));if(O<=.001)return;const F=G.view;mc.set(G.mouse.x*.55,F.camY+G.mouse.y*.18,F.camZ-G.zoomKick*1.05),a.getWorldDirection(no),zi.copy(a.position).addScaledVector(no,40),a.position.lerp(mc,O),zi.lerp(pp,O),a.lookAt(zi),a.fov+=((G.portrait?52:46)-a.fov)*O,a.updateProjectionMatrix(),a.updateMatrixWorld()}function hp(v=0,O=.016){if(!G.active.size)return;fp();const F=gc(),B=F>Z.fieldGuard?14:2.6;Z.fieldGuard+=(F-Z.fieldGuard)*(1-Math.exp(-O*B)),yc(Z.fieldGuard);const K=G.active,me=G.portrait?68:58,ye=Math.sin(v)/a.aspect;let Ue=Math.max(46,a.fov);G.portrait&&(a.position.x=0,zi.set(0,a.position.y,a.position.z-40),a.lookAt(zi));for(let Ze=0;Ze<14;Ze++){a.fov=Ue,a.updateProjectionMatrix(),a.updateMatrixWorld();const Ve=Math.tan(Ue*Math.PI/360);let Be=1/0;for(const ut of K)Xt.copy(Gi[ut]).project(a),Xt.y<Be&&(Be=Xt.y);Be!==1/0&&(a.rotateX(Math.atan(Be*Ve)-Math.atan((1-2*pa)*Ve)),a.updateMatrixWorld());let Lt=1;tt.visible&&Z.clockFade>.05&&(qr.set(0,mp(),tt.position.z).project(a),qr.y>hc&&(Lt=qr.y/hc));for(const ut of K){Xt.copy(Gi[ut]).project(a);const Yt=Math.abs(Xt.x+Xt.y*ye)/ai;Yt>Lt&&(Lt=Yt)}if(Lt>1.002){const ut=2*Math.atan(Ve*Math.min(Lt*1.02,1.6))*180/Math.PI;if(ut<=me+.01){Ue=Math.max(Ue,ut);continue}if(Ue<me){Ue=me;continue}a.getWorldDirection(no),a.position.addScaledVector(no,-1.1),zi.copy(a.position).addScaledVector(no,40),a.lookAt(zi);continue}break}if(a.fov=Ue,a.updateProjectionMatrix(),a.updateMatrixWorld(),gc()>.45){yc(1);let Ze=1/0;for(const Ve of K)Xt.copy(Gi[Ve]).project(a),Xt.y<Ze&&(Ze=Xt.y);if(Ze!==1/0){const Ve=Math.tan(a.fov*Math.PI/360);a.rotateX(Math.atan(Ze*Ve)-Math.atan((1-2*pa)*Ve)),a.updateMatrixWorld()}Z.fieldGuard=1}}function mp(){return tt.position.y+10.5*tt.scale.y}function gp(v=1){Z.glitch=Math.min(1.5,Z.glitch+v),Z.windBoost=Math.min(2.4,Z.windBoost+v*.7),G.shake=Math.min(.24,G.shake+v*.035),G.zoomKick=Math.min(1.5,G.zoomKick+v*.3),Z.theme==="intention"&&re.glitch(v)}function jr(v=1){Z.windBoost=Math.min(2.6,Z.windBoost+v*.9),Z.glitch=Math.min(1.4,Z.glitch+v*.12);for(let O=0;O<3;O++){const F=Math.floor(Math.random()*8),B=Hi(F,1+Math.random()*7);Et(B,new Oe(gr[F]).getHex(),4,1.4+v)}}function yp(v="fast",O=1){if(Z.handKick=Math.max(Z.handKick,.35+O*.55),Z.hubKick=Math.max(Z.hubKick,.25+O*.4),Z.theme==="intention"&&re.beat(O),O>.9&&Z.clockFade>.3){const F=tt.localToWorld(new U(0,0,.8));At(F,v==="slow"?16765286:16731501,1.1+O*.4)}}function _c(v,O){const F=1+Z.windBoost*.85;for(const B of oe){let K;Z.active?Z.theme==="intention"?K=0:K=Z.intro?1:G.active.has(B.lane)?0:.95:K=0,B.power+=(K-B.power)*(1-Math.exp(-v*2.1));const me=B.power,ye=me>.012;let Ue=w[B.lane].group.position.x;if(!Z.intro){const Ze=(Math.max(4,G.keyCount)-1)*G.spacing*.5,Ve=Math.max(1,Math.abs(a.position.z)),Be=Math.tan(a.fov*Math.PI/360)*Ve*a.aspect,Lt=Math.min(Ze+G.spacing*(.55+B.lane%2*.45),Be*.86);Ue=B.lane<3.5?-Lt:Lt}for(let Ze=0;Ze<B.ribbons.length;Ze++){const Ve=B.ribbons[Ze];if(Ve.visible=ye,!ye)continue;Z.theme==="intention"&&Ve.material.color.setRGB(.92,.96,1);const Be=O*1.15*F+B.seed+Ze*1.71,Lt=((O*1.05*F+Ze*1.9+B.seed*.8)%13+13)%13,ut=-1.4+Lt,Yt=Math.max(0,Math.min(1,(ut+1.4)/2.6))*Math.max(0,Math.min(1,(12.6-ut)/3.2));Ve.position.set(Ue+Math.sin(Be*1.07)*(1.15+Lt*.14)+Math.sin(Be*.43)*.8,ut,.3+Math.cos(Be*.91)*1.5+Math.sin(Be*.37)*.8),Ve.material.rotation=Be*1.55;const gn=4.2+2.8*Math.abs(Math.sin(Be*1.3)),oi=.85+.5*Math.abs(Math.cos(Be*.8));Ve.scale.set(oi,gn,1),Ve.material.opacity=me*Yt*(.14+.09*Math.pow(Math.sin(Be*2.1),2))}for(let Ze=0;Ze<B.glows.length;Ze++){const Ve=B.glows[Ze];if(Ve.visible=ye,!ye)continue;const Be=O*.85*F+B.seed*1.7+Ze*2.3,Lt=-.4+(O*1.35*F+Ze*4.3+B.seed)%13;Ve.position.set(Ue+Math.sin(Be*.83)*1.5,Lt,.45+Math.cos(Be*.71)*1.3);const ut=.22+.1*Math.sin(Be*1.6);Ve.scale.set(ut,ut,1),Ve.material.rotation=Be,Ve.material.opacity=me*.075*(.55+.45*Math.sin(Be*1.3))}}}function _p(v,O){if(Z.fieldFade+=(Z.fieldTarget-Z.fieldFade)*(1-Math.exp(-v*4.2)),Z.churchFade+=(Z.churchTarget-Z.churchFade)*(1-Math.exp(-v*1.5)),Z.clockFade+=(Z.clockTarget-Z.clockFade)*(1-Math.exp(-v*1.7)),Z.windBoost*=Math.exp(-v*1.8),Z.glitch*=Math.exp(-v*6.2),Z.handKick*=Math.exp(-v*3.3),Z.hubKick*=Math.exp(-v*2.8),Z.active&&Z.theme==="intention"){for(const K of[g,x,m,C,...A,...T])K.visible=!1;P.visible=!1,tt.visible=!1,re.update(v,O),_c(v,O);return}const F=Z.active&&Z.churchFade>.02;for(const K of[g,x,m,C,...A,...T])K.visible=!F;const B=Z.churchFade;if(P.visible=B>.008,P.visible){for(const ye of S)ye.mat.opacity=ye.base*B;const K=Z.clockFade;gt.opacity=K,pe.opacity=K*(.72+Z.hubKick*.08),Qe.opacity=K*(.05+Z.hubKick*.045),Dt.opacity=K*(.36+Z.hubKick*.2),Ht.material.opacity=K*(.62+Z.handKick*.18),D.material.opacity=K*(.76+Z.handKick*.14),tt.visible=K>.01;const me=1+Z.hubKick*.035+Math.sin(O*1.8)*.004;Ie.scale.set(21*me,21*me,1),Ge.scale.set(29*me,29*me,1),Ke.scale.set(1.9*(1+Z.hubKick*.22),1.9*(1+Z.hubKick*.22),1),Z.slowAngle+=v*.075,Z.fastAngle+=v*.62,Ht.material.rotation=-Z.slowAngle,D.material.rotation=-Z.fastAngle,Ht.material.color.set(16765286).lerp(Hn,Z.handKick*.65),D.material.color.set(16731501).lerp(Hn,Z.handKick*.65),Ht.scale.set(1.1,1.1*7.1,1),D.scale.set(.8,.8*7.1,1);for(const ye of De)ye.mat.opacity=ye.base*B*(.58+.3*Math.sin(O*3.1+ye.phase)+.12*Math.sin(O*9.7+ye.phase*2.3));for(const ye of ke)ye.mat.opacity=ye.base*B*(.7+.3*Math.sin(O*.24+ye.phase)),ye.sprite.position.x+=Math.sin(O*.11+ye.phase)*v*.08,ye.sprite.position.y+=Math.cos(O*.09+ye.phase)*v*.05;N.map.offset.y=O*.0035%1}else tt.visible=!1;_c(v,O)}function vp(v){const O=innerWidth/Math.max(1,innerHeight);if(G.portrait)return v<=1?{spacing:2.3,ring:2.35}:v<=2?{spacing:2,ring:2.05}:v<=4?{spacing:1.72,ring:1.62}:v<=6?{spacing:1.3,ring:1.24}:{spacing:1.02,ring:1.04};const F=O>1.9?1.08:1;return v<=1?{spacing:4.2*F,ring:3.15*F}:v<=2?{spacing:3.8*F,ring:2.85*F}:v<=4?{spacing:3.15*F,ring:2.35*F}:v<=6?{spacing:2.16*F,ring:1.95*F}:{spacing:1.75*F,ring:1.65*F}}function vc(v,O=!1){const F=vp(v);G.spacing=F.spacing,G.ringScale=F.ring,G.target.spacing=F.spacing,G.target.ring=F.ring,O&&(G.view.spacing=F.spacing,G.view.ring=F.ring)}function Jr(){const v=innerWidth,O=innerHeight,F=v/O;G.portrait=F<.92,vc(G.keyCount,!0),R.group.position.set(0,G.portrait?15.2:13.2,-28),R.group.scale.setScalar(G.portrait?.86:1),tt.position.set(0,G.portrait?13.4:10.4,G.portrait?-46:-39),tt.scale.setScalar(G.portrait?.76:1),ze.position.set(0,G.portrait?15:12.6,G.portrait?-62:-56),ze.scale.set(G.portrait?26:34,G.portrait?26:34,1),Mt.position.set(0,G.portrait?15:12.6,G.portrait?-63:-57),Mt.scale.set(G.portrait?36:44,G.portrait?36:44,1),Gn();for(let K=0;K<8;K++){const me=(K-3.5)*G.spacing;w[K].baseX=me,w[K].group.position.x=me,w[K].group.position.z=_r*me*me,w[K].ring.scale.set(G.view.ring,G.view.ring,1),w[K].glow.scale.set(G.view.ring*1.35,G.view.ring*1.35,1),G.laneXNow[K]=me}St.scale.set((G.keyCount-1)*G.spacing+G.ring*1.5,.9,1),a.aspect=F,a.fov=G.portrait?52:46,a.updateProjectionMatrix();const B=G.section?G.section.camZ:17.2;G.target.camZ=B+(G.portrait?6.4:0),G.view.camZ=G.target.camZ,t.setSize(v,O),o.setSize(v,O),s.resolution.set(v/2,O/2),re.layout(G.portrait)}addEventListener("resize",Jr),Jr(),addEventListener("pointermove",v=>{G.mouse.x=v.clientX/innerWidth*2-1,G.mouse.y=v.clientY/innerHeight*2-1},{passive:!0});function xp(v){if(!v)return;const O=!!G.section&&G.section.keys!==v.keys;G.section=v,G.energy=v.energy,G.keyCount=v.keys,v.bpm&&bc(v.bpm,v.beatOffset??0),Z.active&&zt(!0),vc(v.keys),G.target.rotY=v.rotY,G.target.rotZ=v.rotZ,G.target.tilt=v.tilt,G.target.spread=v.spread,G.target.y=v.y,G.target.camZ=v.camZ+(G.portrait?6.4:0),G.target.camY=v.camY,G.target.bloom=Z.active?Z.theme==="intention"?Z.intro?.42:.56:Z.intro?Math.min(.38,v.bloom*.45):Math.min(.28,v.bloom*.3):v.bloom*.82,G.target.spin=v.spin,G.targetMotion={style:v.motion||"fan",amp:v.motionAmp??.06,speed:v.motionSpeed??.5,pitch:v.motionPitch??.03},G.cityTarget=v.city??0,O&&(G.zoomKick=Math.min(1.4,G.zoomKick+.85));const F={1:[3],2:[2,4],4:[2,3,4,5],6:[1,2,3,4,5,6],8:[0,1,2,3,4,5,6,7]};G.active=new Set(F[v.keys]||F[8]),G.live=new Set(G.active);for(let B=0;B<8;B++){const K=G.active.has(B);w[B].active=K?1:0,K||(w[B].ghostFx=null),w[B].targetColor.copy(w[B].color).lerp(new Oe(v.color),.24),Z.theme==="intention"&&w[B].targetColor.copy(w[B].color),K&&(w[B].flash=Math.max(w[B].flash,.22))}R.slowColor.copy(w[0].targetColor),R.fastColor.copy(w[7].targetColor),Bt.color.set(v.accent)}function bp(v){const O=new Set(G.active);for(const B of v)O.add(B);let F=O.size!==G.live.size;if(!F){for(const B of O)if(!G.live.has(B)){F=!0;break}}if(F){G.live=O;for(const B of v)G.active.has(B)||(w[B].flash=Math.max(w[B].flash,.34),w[B].ghostFx=null)}}function Mp(v){G.cityTarget=Math.max(0,Math.min(1,v))}function wp(v="run",O=1,F=null){const B=v||"off",K=R.mode,me=F??G.time;K==="run"||K==="final"?R.anchorRun+=Math.max(0,me-R.anchorT):K==="freeze"&&(R.anchorRun=R.runTime),R.anchorT=me,R.mode=B,B==="off"?(R.target=0,R.frozen=!1,R.rate=1):(R.target=1,R.frozen=B==="freeze",R.rate=B==="final"?1.65:1,R.kick=Math.max(R.kick,.25+O*.35))}function Sp(v="fast",O=1){if(!(R.fade<.015)&&(R.kick=Math.max(R.kick,.2+O*.32),v==="slow"?R.slowKick=Math.max(R.slowKick,.35+O*.55):R.fastKick=Math.max(R.fastKick,.35+O*.55),O>1.05&&R.fade>.3)){const F=R.group.localToWorld(new U(0,0,.35));At(F,v==="slow"?_e.getHex():Te.getHex(),.9+O*.35)}}function Tp(){R.target=0,R.fade=0,R.mode="off",R.frozen=!1,R.rate=1,R.runTime=0,R.anchorT=0,R.anchorRun=0,R.slowAngle=0,R.fastAngle=0,R.slowKick=0,R.fastKick=0,R.kick=0,R.group.visible=!1,R.dialSlow.visible=!1,R.dialFast.visible=!1}function Ep(v){return w[v].baseX}function Ap(v){return _r*w[v].baseX*w[v].baseX}function Hi(v,O){return w[v].group.localToWorld(new U(0,O,.2))}const Qr=new U,es=new U;function No(){a.updateMatrixWorld(),st.updateWorldMatrix(!0,!1);for(let v=0;v<8;v++){const O=w[v];O.group.updateWorldMatrix(!1,!1);const F=O.group.matrixWorld;Qr.set(0,.04,.22).applyMatrix4(F).project(a),es.set(0,11.4,.22).applyMatrix4(F).project(a);const B=(Qr.x*.5+.5)*innerWidth,K=(-Qr.y*.5+.5)*innerHeight,me=(es.x*.5+.5)*innerWidth,ye=(-es.y*.5+.5)*innerHeight;O.screenAngle=Math.atan2(me-B,K-ye),O.screen={x:B,y:K,topX:me,topY:ye,angle:O.screenAngle}}}function Cp(v){return w[v].screen||No(),w[v].screen}function xc(){return No(),w.map(v=>v.screen)}function Rp(){return xc().map(v=>v.x)}function Pp(v){return w[v].screen||No(),w[v].screenAngle}function bc(v,O=0){G.bpm=v||100,G.beatOffset=O}function Lp(v){const O=w[v];O.flash=Math.max(O.flash,.55),O.ring.scale.setScalar(G.view.ring*1.1)}function Ip(v,O="sweep"){const F=w[v];if(F){if(Z.active){jr(O==="bounce"?.35:.2);return}F.ghostFx={type:O,t:0,dur:O==="bounce"?.85:1.15},O==="bounce"&&(F.flash=Math.max(F.flash,.65),At(Hi(v,.05),F.color.getHex(),1.7))}}function Dp(){for(const v of w)v.ghostFx=null,v.ghost.visible=!1,v.ghost.material.opacity=0}function Mc(v,O=1,F=1){const B=w[v];if(!B)return;if(Z.active){jr(F*.28);return}const K=Hi(v,.1+Math.random()*.12),me=3;for(let ye=0;ye<me;ye++){const Ue=xt[hn=(hn+1)%xt.length];Ue.sprite.position.copy(K),Ue.sprite.position.y+=ye*.11,Ue.sprite.position.z+=ye*.05,Ue.sprite.material.color.copy(B.targetColor).lerp(Hn,.12+ye*.08),Ue.sprite.material.rotation=Math.random()*Math.PI*2,Ue.sprite.scale.set(.45,.45,1),Ue.life=Ue.max=1.15+ye*.24,Ue.delay=ye*.075,Ue.vx=O*(2.4+F*1.7)*(1-ye*.13)+(Math.random()-.5)*.5,Ue.vy=.45+F*.35+Math.random()*.25,Ue.base=.38+F*.38,Ue.alpha=(.62-ye*.13)*Math.min(1,F),Ue.spin=(Math.random()-.5)*1.2,Ue.sprite.visible=!1}}function wc(v=1){G.energyPulse=Math.min(1.5,G.energyPulse+.35*v),G.shake=Math.min(.18,G.shake+.008*v),Z.active&&Z.theme==="intention"&&re.beat(v*.85)}function Sc(v,O=1){let F;v==null?(F=st.localToWorld(new U(0,.3,.25)),Et(F,10483199,Math.round(22*O),5.2),At(F,10483199,4.2)):(F=Hi(v,.08),Et(F,w[v].targetColor,Math.round(14+10*O),3.2+O),At(F,w[v].targetColor.getHex(),2.4+O)),G.shake=Math.min(.2,G.shake+.02*O)}function kp(v=1){wc(v),G.zoomKick=Math.min(1.4,G.zoomKick+.22*v),Sc(null,.7+v*.7);for(let O=0;O<8;O++)G.active.has(O)||Mc(O,O<3.5?-1:1,.7+v*.6)}function Np(v,O,F,B){G.targetMotion={style:v||"fan",amp:O??.08,speed:F??.6,pitch:B??.04}}function Up(v,O){const F=w[v];F.flash=1,G.shake=Math.min(.16,G.shake+(O==="perfect"?.025:.016));const B=Hi(v,.05);if(Et(B,F.color,O==="perfect"?22:14,3.5),At(B,F.color.getHex(),3),Z.active&&Z.theme==="intention"){const K=re.level.phase;(K==="field"||K==="pillars"||K==="halo")&&(Z.intentFocusTarget=(v-3.5)*.2)}}function Op(v){G.shake=Math.min(.25,G.shake+.13),w[v];const O=Hi(v,.05);Et(O,16724831,9,1.4),At(O,16724831,2)}const Hn=new Oe(16777215);new Oe;let Tc=0;function Fp(v,O,F){Tc+=v;const B=F?O:Tc;G.time=B,G.playing=F;const K=G.view,me=G.target,ye=1-Math.exp(-v*2.2);K.rotY+=(me.rotY-K.rotY)*ye,K.rotZ+=(me.rotZ-K.rotZ)*ye,K.tilt+=(me.tilt-K.tilt)*ye,K.spread+=(me.spread-K.spread)*ye,K.y+=(me.y-K.y)*ye,K.camZ+=(me.camZ-K.camZ)*ye,K.camY+=(me.camY-K.camY)*ye,K.spin+=(me.spin-K.spin)*ye,K.spacing+=(me.spacing-K.spacing)*(1-Math.exp(-v*3.1)),K.ring+=(me.ring-K.ring)*(1-Math.exp(-v*3.1)),s.strength+=(me.bloom-s.strength)*ye,G.zoomKick*=Math.exp(-v*2.6),G.energyPulse*=Math.exp(-v*3.2);const Ue=60/G.bpm,Ze=((B-G.beatOffset)/Ue%1+1)%1,Ve=Math.exp(-Ze*5.2);G.pulse=Ve;const Be=G.motion,Lt=G.targetMotion,ut=1-Math.exp(-v*2.2);Be.amp+=(Lt.amp-Be.amp)*ut,Be.speed+=(Lt.speed-Be.speed)*ut,Be.pitch+=(Lt.pitch-Be.pitch)*ut,Be.style=Lt.style;const Yt=G.energyPulse;s.strength+=Yt*(Z.active?.1:.32),Z.active&&(s.strength=Math.min(s.strength,Z.theme==="intention"?Z.intro?.56:.72:Z.intro?.5:.38)),_p(v,B),st.position.y=K.y+Math.sin(B*.65)*.035+Ve*.03,st.rotation.y=K.rotY+Math.sin(B*.22)*.02+Math.sin(B*.09)*K.spin+(Z.glitch>.01?(Math.random()-.5)*Z.glitch*.012:0),st.rotation.z=K.rotZ+Math.sin(B*.37)*.006+(Z.glitch>.01?(Math.random()-.5)*Z.glitch*.01:0),st.rotation.x=K.tilt+Math.sin(B*.29)*.006;for(let Q=0;Q<8;Q++){const ve=w[Q];let Nt=(Q-3.5)*K.spacing*K.spread;G.keyCount===1?Nt=Q===3?0:(Q<3?-1:1)*K.spacing*4:G.keyCount===2&&(Q===2?Nt=-K.spacing*.78:Q===4&&(Nt=K.spacing*.78)),ve.baseX=Nt,ve.group.position.x=Nt,ve.group.position.z=_r*Nt*Nt,G.laneXNow[Q]=Nt;const Ln=Q-3.5;let yn=0;switch(Be.style){case"fan":yn=-Ln*Be.amp;break;case"slope":yn=Be.amp;break;case"tiltL":yn=Be.amp*1.15;break;case"tiltR":yn=-Be.amp*1.15;break;case"zigzag":yn=(Q%2?1:-1)*Be.amp*.95;break;case"wave":yn=Math.sin(B*Be.speed+Q*.72)*Be.amp-Ln*Be.amp*.22;break;case"orbit":yn=Math.sin(B*Be.speed*.72+Ln*.38)*Be.amp*.78-Ln*Be.amp*.3;break;default:yn=-Ln*Be.amp}yn+=Math.sin(B*1.15+Q*.55)*Be.amp*.12*(.4+G.energy),yn+=Ve*.006*Math.cos(Q*.9+.4);const ts=Math.sin(B*.55+Q*.7)*Be.pitch+Ve*Be.pitch*.32*Math.sin(Q*.8+.7)+Yt*.006,Uo=1-Math.exp(-v*3.4);ve.angle+=(yn-ve.angle)*Uo,ve.pitch+=(ts-ve.pitch)*Uo,G.laneAngle[Q]=ve.angle,G.lanePitch[Q]=ve.pitch,ve.group.rotation.z=ve.angle,ve.group.rotation.x=ve.pitch,ve.line.scale.y=12.4*Math.cos(ve.pitch),ve.beam.scale.y=12.6*Math.cos(ve.pitch);const Oo=G.live.has(Q);let ri=0,ns=0;if(ve.ghostFx){const Bo=ve.ghostFx;Bo.t+=v;const is=Bo.t/Bo.dur;if(is>=1)ve.ghostFx=null,ve.ghost.visible=!1,ve.ghost.material.opacity=0;else if(ri=Math.sin(Math.PI*is),Bo.type==="sweep"){ve.ghost.visible=!0,ve.ghost.position.set(0,.25+is*10.5,.08);const Ac=.85+.55*ri;ve.ghost.scale.set(Ac,Ac,1),ve.ghost.material.opacity=ri*.8,ve.ghost.material.color.copy(ve.targetColor).lerp(Hn,.3+ri*.4)}else ns=ri,ve.ghost.visible=!1}const Fo=Z.active?Z.fieldFade:1,Vp=(Oo?(Q%2?.86:.96)*.58:ri*.34)*Fo*(Z.active?.45:1),Wp=(Oo?.065+Ve*.03:ri*.04)*Fo*(Z.active?.55:1),Xp=(Oo?.95:ns*.78+ri*.035)*Fo,Yp=Z.active?.48:1;ve.line.material.opacity+=(Vp-ve.line.material.opacity)*(1-Math.exp(-v*3.5)),ve.beam.material.opacity+=(Wp-ve.beam.material.opacity)*(1-Math.exp(-v*3.5)),ve.ring.material.opacity+=(Xp-ve.ring.material.opacity)*(1-Math.exp(-v*3.5)),ve.glow.material.opacity+=(((Oo?.14:ri*.07)+ve.flash*.3)*Fo*Yp-ve.glow.material.opacity)*(1-Math.exp(-v*8)),ve.flash=Math.max(0,ve.flash-v*3.4);const Ec=K.ring*(1+Ve*.045*(.4+G.energy)+ve.flash*.22+ns*.5);ve.ring.scale.set(Ec,Ec,1),ve.ring.material.color.copy(ve.targetColor).lerp(Hn,ve.flash*.8),ve.glow.material.color.copy(ve.targetColor).lerp(Hn,ve.flash*.5),ve.line.material.color.copy(ve.targetColor).lerp(Hn,.14+ve.flash*.32),ve.beam.material.color.copy(ve.targetColor)}const gn=(!Z.active||Z.fieldFade>.03)&&!Z.fieldHidden;Ne.visible=gn,St.visible=gn,No();for(let Q=0;Q<8;Q++){const ve=w[Q];ve.line.material.rotation=-ve.screenAngle,ve.beam.material.rotation=-ve.screenAngle}if(St.scale.x=(K.spacing*(G.keyCount-1)+K.ring*1.5)*K.spread,St.material.opacity=(.45+Ve*.3+G.energy*.15+Yt*.16)*(Z.active?Z.fieldFade:1),Z.active&&Z.cameraLock){const Q=kt,ve=1-Math.exp(-v*Q.rate);Q.pos.lerp(Q.targetPos,ve),Q.look.lerp(Q.targetLook,ve),Q.fov+=(Q.targetFov-Q.fov)*ve,Q.roll+=(Q.targetRoll-Q.roll)*ve,Z.intentFocusTarget*=Math.exp(-v*.8);const Ln=Z.theme==="intention"&&!Z.intro&&(re.level.phase==="field"||re.level.phase==="pillars"||re.level.phase==="halo")?Z.intentFocusTarget:0;Z.intentFocus+=(Ln-Z.intentFocus)*(1-Math.exp(-v*4.6)),a.position.copy(Q.pos),a.position.x+=Z.intentFocus,a.fov=Q.fov,a.updateProjectionMatrix(),a.lookAt(Q.look.x+Z.intentFocus*.82,Q.look.y,Q.look.z),Z.intro||hp(Q.roll,v),a.rotation.z+=Q.roll,Z.glitch>.01&&(a.position.x+=(Math.random()-.5)*Z.glitch*.24,a.position.y+=(Math.random()-.5)*Z.glitch*.2,a.rotation.z+=(Math.random()-.5)*Z.glitch*.022),G.shake>5e-4&&(a.position.x+=(Math.random()-.5)*G.shake,a.position.y+=(Math.random()-.5)*G.shake,G.shake*=Math.exp(-v*10))}else{const Q=G.mouse.x*.55,ve=K.camY+G.mouse.y*.18;a.position.x+=(Q-a.position.x)*(1-Math.exp(-v*2)),a.position.y+=(ve-a.position.y)*(1-Math.exp(-v*2)),a.position.z+=(K.camZ-G.zoomKick*1.05-a.position.z)*(1-Math.exp(-v*3.4)),G.shake>5e-4&&(a.position.x+=(Math.random()-.5)*G.shake,a.position.y+=(Math.random()-.5)*G.shake,G.shake*=Math.exp(-v*10)),a.lookAt(0,4.05,0)}if(G.gameOver){G.gameOverElapsed+=v;const Q=Math.min(1,G.gameOverElapsed/2.8),ve=1-Math.pow(1-Q,3),Nt=G.gameOverFromPos;a.position.set(Go.lerp(Nt.x,0,ve),Go.lerp(Nt.y,Nt.y+11,ve),Go.lerp(Nt.z,Nt.z+27,ve)),a.fov=Go.lerp(G.gameOverFromFov,60,ve),a.updateProjectionMatrix(),a.lookAt(0,3.1,0),a.rotation.z+=Math.sin(ve*Math.PI)*.05}d.rotation.y+=v*.006,u.rotation.y-=v*.004,f.rotation.y+=v*.012,g.position.x=-16+Math.sin(B*.05)*2,x.position.y=1+Math.sin(B*.07+1)*2;for(let Q=0;Q<A.length;Q++)A[Q].rotation.z+=v*(.02+Q*.012),A[Q].rotation.y+=v*.008;if(G.city+=(G.cityTarget-G.city)*(1-Math.exp(-v*1.6)),I.visible=G.city>.012,I.visible){I.position.x=G.mouse.x*1.4;for(let Q=0;Q<L.length;Q++){const ve=L[Q];ve.map.offset.x+=v*ve.speed*(.7+G.energy*1.6+Ve*.8),ve.mesh.position.y=ve.base+Math.sin(B*.17+Q*1.7)*.18,ve.mat.opacity=G.city*(Q?.42:.3)}}if(R.fade+=(R.target-R.fade)*(1-Math.exp(-v*2.6)),R.group.visible=R.fade>.008,R.group.visible){if(R.target>0&&!R.frozen&&(R.runTime=R.anchorRun+Math.max(0,B-R.anchorT)),!R.frozen){const Ln=60/Math.max(1,G.bpm),yn=R.runTime/(Ln*32)*Math.PI*2,ts=Ln*(R.mode==="final"?.34:.5),Uo=Math.floor((B-G.beatOffset)/ts)*(Math.PI*2/12);R.slowAngle+=(yn-R.slowAngle)*(1-Math.exp(-v*4)),R.fastAngle+=(Uo-R.fastAngle)*(1-Math.exp(-v*20)),R.handSlow.material.rotation=-R.slowAngle,R.handFast.material.rotation=-R.fastAngle}R.slowKick=Math.max(0,R.slowKick-v*3.6),R.fastKick=Math.max(0,R.fastKick-v*4.4),R.kick=Math.max(0,R.kick-v*3.1);const Q=R.fade;R.face.material.opacity=Q*(.34+R.kick*.14),R.aura.material.opacity=Q*(.085+R.kick*.08),R.hub.material.opacity=Q*(.5+R.kick*.45),R.handSlow.material.opacity=Q*(.72+R.slowKick*.34),R.handFast.material.opacity=Q*(.82+R.fastKick*.28),R.handSlow.material.color.copy(R.slowColor).lerp(Hn,R.slowKick*.75),R.handFast.material.color.copy(R.fastColor).lerp(Hn,R.fastKick*.75);const ve=1.9*(1+R.kick*.26+Math.sin(B*7.5)*.025);R.hub.scale.set(ve,ve,1);const Nt=1+R.kick*.012;R.face.scale.set(21.6*Nt,21.6*Nt,1),R.dialSlow.visible=!0,R.dialFast.visible=!0,R.dialSlow.material.rotation=-R.slowAngle,R.dialFast.material.rotation=-R.fastAngle,R.dialSlow.material.opacity=Q*(.3+R.slowKick*.24),R.dialFast.material.opacity=Q*(.36+R.fastKick*.24),R.dialSlow.material.color.copy(R.slowColor).lerp(Hn,R.slowKick*.7),R.dialFast.material.color.copy(R.fastColor).lerp(Hn,R.fastKick*.7)}j(v,B);for(const Q of T)Q.rotation.x+=Q.userData.spin.x*v,Q.rotation.y+=Q.userData.spin.y*v,Q.rotation.z+=Q.userData.spin.z*v,Q.position.y+=Math.sin(B*.4+Q.position.x)*v*.06;let oi=!1;for(let Q=0;Q<ge;Q++){if($e[Q]<=0)continue;if(oi=!0,$e[Q]-=v,$e[Q]<=0){we[Q*3+1]=-999;continue}Ce[Q*3]*=.972,Ce[Q*3+1]-=2.4*v,Ce[Q*3+2]*=.972,we[Q*3]+=Ce[Q*3]*v,we[Q*3+1]+=Ce[Q*3+1]*v,we[Q*3+2]+=Ce[Q*3+2]*v;const ve=Math.max(0,$e[Q]/ot[Q]);Le[Q*3]*=.988,Le[Q*3+1]*=.988,Le[Q*3+2]*=.988,ve<.25&&(Le[Q*3]*=ve/.25,Le[Q*3+1]*=ve/.25,Le[Q*3+2]*=ve/.25)}oi&&(qe.attributes.position.needsUpdate=!0,qe.attributes.color.needsUpdate=!0);for(const Q of Pt){if(Q.life<=0)continue;Q.life-=v;const ve=1-Math.max(0,Q.life/Q.max),Nt=.75+ve*Q.scale;Q.sprite.scale.set(Nt,Nt,1),Q.sprite.material.opacity=(1-ve)*.9,Q.life<=0&&(Q.sprite.visible=!1)}for(const Q of xt){if(Q.delay>0&&(Q.delay-=v,Q.delay>0)||Q.life<=0)continue;if(Q.life-=v,Q.life<=0){Q.sprite.visible=!1;continue}const ve=1-Q.life/Q.max;Q.vx*=Math.exp(-v*2.5),Q.vy*=Math.exp(-v*1.9),Q.sprite.position.x+=Q.vx*v,Q.sprite.position.y+=Q.vy*v,Q.sprite.material.rotation+=Q.spin*v;const Nt=Q.base*(.7+ve*1.15);Q.sprite.scale.set(Nt,Nt,1),Q.sprite.material.opacity=Math.pow(1-ve,1.55)*Q.alpha,Q.sprite.visible=!0}}function Bp(){G.gameOver=!0,G.gameOverElapsed=0,G.gameOverFromPos.copy(a.position),G.gameOverFromFov=a.fov}function zp(){G.gameOver=!1,G.gameOverElapsed=0}function Gp(){o.render()}function Hp(){t.dispose()}return{scene:n,camera:a,stage:st,noteRoot:nt,state:G,clock:R,boss:Z,bloom:s,laneRoot:Ne,windRoot:X,church:P,intention:re,makeNote:J,setSection:xp,animate:Fp,render:Gp,laneX:Ep,laneZ:Ap,worldPoint:Hi,laneScreenXs:Rp,laneScreenPoints:xc,laneScreenGeometry:Cp,laneScreenAngle:Pp,setPreviewLanes:bp,setCity:Mp,setTempo:bc,setClock:wp,clockTick:Sp,clockReset:Tp,setBoss:An,bossCameraEvent:mn,bossGlitch:gp,bossTick:yp,windFx:jr,freeNotePose:H,startGameOver:Bp,resetGameOver:zp,setIntentionPhase:v=>re.setPhase(v),intentionPulse:v=>re.beat(v),setPartner:v=>re.setPartner?.(v),setChaos:v=>re.setChaos?.(v),intentionCutscene:(v,O="center",F=2.2)=>re.setCutscene?.(v,O,F),setIntentFieldHidden:pn,setIntentNoteLayerHidden:Cn,startPendulum:Fi,stopPendulum:ua,swingResolve:ii,swingWhiff:Bi,pendulumReset:Qa,pendulumTargetScreen:z,pendulum:$,pressFx:Lp,hitFx:Up,missFx:Op,ghostFx:Ip,echoFx:Mc,pulseFx:wc,burstFx:Sc,vibeFx:kp,motionEvent:Np,clearGhosts:Dp,layout:Jr,dispose:Hp,get noteSpeed(){return G.noteSpeed},set noteSpeed(v){G.noteSpeed=v},get noteScale(){return Math.max(1,Math.min(1.3,G.view.ring/1.65))}}}class a5{constructor(){this.ctx=null,this.buffer=null,this.source=null,this.gain=null,this.startAt=0,this.offset=0,this.duration=0,this.loaded=!1,this.muted=!1,this.hitGain=null,this.cache=new Map}async load(e,t){let n=this.cache.get(e);if(!n){const a=await fetch(e);if(!a.ok)throw new Error("audio fetch failed: "+a.status);const o=Number(a.headers.get("content-length"))||115e4;let s;if(a.body&&a.body.getReader){const r=a.body.getReader(),l=[];let c=0;for(t?.(0);;){const{value:u,done:f}=await r.read();if(f)break;l.push(u),c+=u.length,t?.(Math.min(.94,c/o))}s=new Uint8Array(c);let d=0;for(const u of l)s.set(u,d),d+=u.length}else s=new Uint8Array(await a.arrayBuffer());t?.(.95),this.ctx=this.ctx||new(window.AudioContext||window.webkitAudioContext)({latencyHint:"interactive"}),n=await this.ctx.decodeAudioData(s.buffer),this.cache.set(e,n)}return this.gain||(this.gain=this.ctx.createGain(),this.gain.gain.value=.92,this.gain.connect(this.ctx.destination)),this.hitGain||(this.hitGain=this.ctx.createGain(),this.hitGain.gain.value=.5,this.hitGain.connect(this.ctx.destination)),t?.(1),n}setBuffer(e){e&&(this.buffer=e,this.duration=e.duration,this.loaded=!0)}async start(e=0,t={}){if(!this.loaded)return;if(!this.ctx)throw new Error("no audio context");this.ctx.state!=="running"&&await this.ctx.resume(),this.stop(),this.source=this.ctx.createBufferSource(),this.source.buffer=this.buffer,this.source.connect(this.gain);const n=this.ctx.currentTime+.12;this.startAt=n,this.offset=e;try{const a=Math.max(0,(t.fadeStart??this.duration-6.7)-e),o=Math.max(.05,(t.fadeEnd??this.duration-4.7)-e);this.gain.gain.cancelScheduledValues(this.ctx.currentTime),this.gain.gain.setValueAtTime(.92,this.ctx.currentTime),this.gain.gain.setValueAtTime(.92,n+a),this.gain.gain.linearRampToValueAtTime(0,n+o)}catch{}this.source.start(n,e)}stop(){if(this.source){try{this.source.stop()}catch{}this.source.disconnect(),this.source=null}}pitchDrop(e=.5,t=2.4){if(!this.ctx||!this.source)return;const n=this.ctx.currentTime;try{const a=this.source.playbackRate;a.cancelScheduledValues(n),a.setValueAtTime(Math.max(.05,a.value||1),n),a.linearRampToValueAtTime(Math.max(.05,e),n+t)}catch{}try{if(this.gain){const a=this.gain.gain;a.cancelScheduledValues(n),a.setValueAtTime(Math.max(.02,a.value||.92),n),a.linearRampToValueAtTime(0,n+t+.6)}}catch{}}pause(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}get time(){return this.ctx?this.ctx.currentTime-this.startAt+this.offset:0}get paused(){return!!this.ctx&&this.ctx.state==="suspended"}click(e=3,t=1){if(!this.ctx||this.ctx.state!=="running"||this.muted)return;const n=this.ctx.currentTime,a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="triangle";const s=360*Math.pow(2,e/12);a.frequency.setValueAtTime(s*1.5,n),a.frequency.exponentialRampToValueAtTime(s*.75,n+.035),o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(.035*t,n+.004),o.gain.exponentialRampToValueAtTime(1e-4,n+.055),a.connect(o),o.connect(this.hitGain),a.start(n),a.stop(n+.07)}thud(){if(!this.ctx||this.ctx.state!=="running"||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(90,e),t.frequency.exponentialRampToValueAtTime(45,e+.12),n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.05,e+.01),n.gain.exponentialRampToValueAtTime(1e-4,e+.18),t.connect(n),n.connect(this.hitGain),t.start(e),t.stop(e+.2)}}const Pu={KeyA:0,KeyS:1,KeyD:2,KeyF:3,KeyJ:4,KeyK:5,KeyL:6,Semicolon:7,Numpad1:0,Numpad2:1,Numpad3:2,Numpad4:3,Numpad5:4,Numpad6:5,Numpad7:6,Numpad8:7},Ud={1:[3],2:[2,4],4:[2,3,4,5],6:[1,2,3,4,5,6],8:[0,1,2,3,4,5,6,7]},Io=.185,Ba={perfect:.045,great:.09,good:.135},Lu={perfect:3e3,great:2e3,good:1e3,bad:300},Iu={perfect:1,great:.85,good:.55,bad:.25,miss:0},Du="cryout-best-v2",o5="cryout-best-v1",r5=2.05,ku=512,de=i=>document.getElementById(i),E={canvas:de("scene"),hud:de("hud"),pads:[...document.querySelectorAll(".pad")],centerPad:de("centerPad"),start:de("startScreen"),startBtn:de("startBtn"),startLabel:de("startBtnLabel"),loadFill:de("loadFill"),startLanes:de("startLanes"),startTrack:de("startTrack"),startLength:de("startLength"),startLevel:de("startLevel"),trackCards:[...document.querySelectorAll(".track-card")],score:de("score"),acc:de("acc"),maxCombo:de("maxCombo"),progress:de("progressFill"),progressGlow:de("progressGlow"),section:de("sectionName"),time:de("timeLabel"),keys:de("keysCount"),energy:de("energyFill"),comboHud:de("comboHud"),comboNum:de("comboNum"),judge:de("judge"),pauseBtn:de("pauseBtn"),pause:de("pauseScreen"),result:de("resultScreen"),toast:de("toast"),rank:de("rank"),finalScore:de("finalScore"),finalAcc:de("finalAcc"),cPerfect:de("cPerfect"),cGreat:de("cGreat"),cGood:de("cGood"),cBad:de("cBad"),cMiss:de("cMiss"),fMaxCombo:de("fMaxCombo"),fcBadge:de("fcBadge"),resultTag:de("resultTag"),bestScoreLabel:de("bestScoreLabel"),bestBadge:de("bestBadge"),bestNote:de("bestNote"),bestLine:de("bestLine"),hudTrack:de("hudTrack"),hudBpm:de("hudBpm"),clearCount:de("clearCount"),resultTrack:de("resultTrack"),resultDiff:de("resultDiff"),resultBpm:de("resultBpm"),footTrack:de("footTrack"),footLanes:de("footLanes"),barPerfect:de("barPerfect"),barGreat:de("barGreat"),barGood:de("barGood"),barBad:de("barBad"),barMiss:de("barMiss"),peakCombo:de("peakCombo"),comboLine:de("comboLine"),comboFill:de("comboFill"),accRing:de("accRing"),scoreDelta:de("scoreDelta"),resultLoading:de("resultLoading"),loadTrack:de("loadTrack"),loadProgress:de("loadProgress"),loadPct:de("loadPct"),loadRank:de("loadRank"),flash:de("flash"),bossGlitch:de("bossGlitch"),bossCaption:de("bossCaption"),bcKicker:de("bcKicker"),bcTitle:de("bcTitle"),bcSub:de("bcSub"),guilt:de("guiltHud"),guiltFill:de("guiltFill"),guiltPct:de("guiltPct"),guiltCopy:de("guiltCopy"),heartbeat:de("heartbeat"),intentText:de("intentGlitchText"),intentTextSub:de("intentGlitchSub"),yellow:de("yellowVignette"),rainbow:de("rainbowWash"),whiteout:de("whiteout"),syncEl:document.querySelector(".sync"),partnerButtons:[...document.querySelectorAll(".partner-chip")],partnerStory:de("partnerStory"),partnerName:de("partnerName"),partnerRole:de("partnerRole"),partnerQuote:de("partnerQuote"),partnerPortrait:de("partnerPortrait"),partnerFile:de("partnerFile"),partnerAcc:de("partnerAccessories"),storyBtn:de("storyBtn"),storyScreen:de("storyScreen"),storyClose:de("storyClose"),storyCards:de("storyCards"),storyLore:de("storyLore"),modeRow:de("modeRow"),modeNormal:de("modeNormal"),modeChaos:de("modeChaos"),storyCard:de("storyCard"),scChapter:de("scChapter"),scTitle:de("scTitle"),scSub:de("scSub"),scName:de("scName"),scPortrait:de("scPortrait"),modBtn:de("modBtn"),modScreen:de("modScreen"),modClose:de("modClose"),modCount:de("modCount"),modItems:[...document.querySelectorAll(".mod-item")]},he=i5(E.canvas),Rt=new a5,Nu="cryout-partner-v1";let tn=Wd((()=>{try{return localStorage.getItem(Nu)||"kai"}catch{return"kai"}})()),ti=!1,rt=Bl[Qp]||Na[0],Tt=rt.chart,Rl=0,Pl=0,ni=[],ra=[],bi=!1,Je="boot",Za=null,Ll=0,Br=Tt.song.chartEnd,Dr=Tt.song.duration,vr=0,za=0,Li=[],Il=0,Dl=0,kl=0,Od=0,Nl=0,Er=!1;const Pe={phase:"off",guiltOn:!1,guilt:100,fakeGuilt:!1,fakeValue:14,fakeBase:14,fakeStart:0,heartOn:!1,heartBpm:150,hbAcc:0,hbBeat:-1,screenGlitch:!1,glitchAcc:0,forceSync:!1,notesHidden:!1},Gt={active:!1,elapsed:0,wallStart:0,t0:0,visualT:0,finished:!1},Uu="cryout-mods-v1",zr=["suddenFail","perfectPlay","noFail"],qt=(()=>{const i={suddenFail:!1,perfectPlay:!1,noFail:!1};try{const e=JSON.parse(localStorage.getItem(Uu)||"{}");for(const t of zr)i[t]=!!e[t]}catch{}return i.suddenFail&&(i.noFail=!1),i})();function Ou(){return zr.some(i=>qt[i])}function s5(){try{localStorage.setItem(Uu,JSON.stringify(qt))}catch{}}const Xe={score:0,combo:0,maxCombo:0,judged:0,weight:0,perfect:0,great:0,good:0,bad:0,miss:0,dropped:0,health:100},ic=new Array(8).fill(!1),xi=new Array(8).fill(null),Di=new Set,sa=new Set,Fd=new Array(8).fill(0);function Fu(){return Di.size>0||sa.size>0}function Bu(){return Fu()}let Ul=0,_o=0,vo=0;function l5(){const i={};try{const e=localStorage.getItem(o5);e&&(i.cryout=JSON.parse(e))}catch{}try{const e=localStorage.getItem(Du);e&&Object.assign(i,JSON.parse(e)||{})}catch{}for(const[e,t]of Object.entries(i)){if(!t||typeof t!="object"||!(Number(t.score)>0)){delete i[e];continue}t.score=Math.round(Number(t.score)),t.acc=Number.isFinite(t.acc)?t.acc:0,t.maxCombo=Number.isFinite(t.maxCombo)?t.maxCombo:0}return i}let Jn=l5(),fo=Jn[rt.id]||null;function ac(){return ti&&rt.id==="intention"?"intention-chaos":rt.id}function fn(){return!!ti&&rt.id==="intention"}function zu(i,e=!1){return e&&i.id==="intention"&&Cc.intention?Cc.intention:i.chart}function kr(i){return i||"./art/kai.svg"}function Gu(){tf(tn),document.body.classList.toggle("partner-kai",tn.id==="kai"),document.body.classList.toggle("partner-rei",tn.id==="rei"),document.body.dataset.partner=tn.id;for(const i of E.partnerButtons){const e=i.dataset.partner===tn.id;i.classList.toggle("active",e),i.setAttribute("aria-pressed",String(e))}E.partnerName&&(E.partnerName.textContent=tn.name),E.partnerRole&&(E.partnerRole.textContent=tn.role),E.partnerQuote&&(E.partnerQuote.textContent=tn.quote),E.partnerFile&&(E.partnerFile.textContent=tn.file),E.partnerAcc&&(E.partnerAcc.textContent=tn.accessories),E.partnerStory&&(E.partnerStory.innerHTML=tn.story.map(i=>`<p>${i}</p>`).join("")),E.partnerPortrait&&(E.partnerPortrait.src=kr(tn.portrait),E.partnerPortrait.alt=`${tn.name} — ${tn.role}`),E.startBtn&&Rt.loaded&&(E.startLabel.textContent=fn()?"ENTER CHAOS":"START SESSION"),he.setPartner?.(tn.id)}function oc(i){const e=na.find(t=>t.id===i);if(!(!e||e.id===tn.id)){tn=e;try{localStorage.setItem(Nu,e.id)}catch{}Gu(),Ni(`${e.name} // ${e.role}`,1200)}}function Hu(){const i=zr.filter(e=>qt[e]).length;for(const e of E.modItems){const t=!!qt[e.dataset.mod];e.classList.toggle("active",t),e.setAttribute("aria-checked",String(t))}document.body.classList.toggle("mods-active",i>0),E.modBtn?.classList.toggle("has-mods",i>0),E.modCount&&(E.modCount.textContent=String(i),E.modCount.hidden=i===0)}function Vu(i,e){zr.includes(i)&&(qt[i]=!!e,qt[i]&&i==="suddenFail"&&(qt.noFail=!1),qt[i]&&i==="noFail"&&(qt.suddenFail=!1),s5(),Hu())}function Wu(){Je!=="menu"&&Je!=="boot"||(E.modScreen?.classList.add("show"),E.modScreen?.setAttribute("aria-hidden","false"),E.modBtn?.setAttribute("aria-expanded","true"),setTimeout(()=>{E.modScreen?.classList.contains("show")&&E.modItems[0]?.focus({preventScroll:!0})},40))}function Gr(){E.modScreen?.classList.remove("show"),E.modScreen?.setAttribute("aria-hidden","true"),E.modBtn?.setAttribute("aria-expanded","false"),E.modBtn?.focus({preventScroll:!0})}function c5(){if(!E.storyCards)return;const i=na.map(t=>`
    <article class="story-char" style="--char:${t.accent};--char2:${t.accent2}">
      <div class="story-char-art"><img src="${kr(t.portrait)}" alt="${t.name}"/></div>
      <div class="story-char-copy">
        <span>${t.num} / ${t.role}</span>
        <b>${t.name}</b>
        <em>${t.tagline}</em>
        <p>${t.story[0]}</p>
        <q>${t.quote}</q>
      </div>
    </article>`).join(""),e=`
    <article class="story-char missing" style="--char:${Ki.accent};--char2:#65e5ff">
      <div class="story-char-art glitch"><img src="${kr(Ki.portrait)}" alt="Unknown missing member"/></div>
      <div class="story-char-copy">
        <span>${Ki.num} / ${Ki.role}</span>
        <b>${Ki.name}</b>
        <em>SIGNAL NOT FOUND</em>
        <p>The third chair is still set. The jacket still smells like rain. REI will not move it, and KAI will not ask why.</p>
        <q>${Ki.quote}</q>
      </div>
    </article>`;E.storyCards.innerHTML=i+e,E.storyLore&&(E.storyLore.textContent=ef.lore)}function d5(){c5(),E.storyScreen?.classList.add("show"),E.storyScreen?.setAttribute("aria-hidden","false")}function Xu(){E.storyScreen?.classList.remove("show"),E.storyScreen?.setAttribute("aria-hidden","true")}function Do(){clearTimeout(Rl),clearTimeout(Pl),E.storyCard?.classList.remove("on","nova","glide-left","glide-right","glide-up"),E.storyCard?.setAttribute("aria-hidden","true"),he.intentionCutscene?.(!1)}function Yu(i){if(!E.storyCard)return;const e=i.partner==="nova"?Ki:Wd(i.partner||tn.id);clearTimeout(Rl),clearTimeout(Pl),E.scChapter.textContent=i.chapter||e.file,E.scTitle.textContent=i.title||e.name,E.scSub.textContent=i.sub||e.quote,E.scName.textContent=e.name,E.scPortrait.src=kr(e.portrait),E.scPortrait.alt=`${e.name} memory frame`,E.storyCard.classList.toggle("nova",e.id==="nova"),E.storyCard.classList.remove("glide-left","glide-right","glide-up"),i.glide==="left"?E.storyCard.classList.add("glide-left"):i.glide==="right"?E.storyCard.classList.add("glide-right"):i.glide==="up"&&E.storyCard.classList.add("glide-up"),E.storyCard.setAttribute("aria-hidden","false"),E.storyCard.offsetWidth,E.storyCard.classList.add("on"),i.glide&&(he.intentionCutscene?.(!0,i.glide,i.glideDur||2.2),Pl=setTimeout(()=>he.intentionCutscene?.(!1),(i.glideDur||2.2)*1e3)),Rl=setTimeout(()=>{E.storyCard.classList.remove("on"),E.storyCard.setAttribute("aria-hidden","true"),he.intentionCutscene?.(!1)},Math.max(1.2,i.hold??3)*1e3)}function u5(){Tt=zu(rt,ti),Br=Tt.song.chartEnd,Dr=Tt.song.duration||rt.duration,document.body.classList.toggle("chaos-mode",fn()),he.setBoss(rt.boss?"preview":"off",rt.theme||"untouchable"),he.setChaos?.(fn()),fn()&&he.setIntentionPhase?.("chaos"),he.setSection(Tt.sections[0]),he.setTempo(Tt.song.bpm,Tt.song.beatOffset),he.setCity(Tt.sections[0].city||0),he.setPreviewLanes(new Set),sc(),Vr(),rt.id==="chronostasis"&&!ti&&he.setClock("run",.4)}function Hr(i){if(Je!=="menu"&&Je!=="boot")return;const e=!!i&&rt.id==="intention";e!==ti&&(ti=e,u5(),fc(),rc(),Ni(ti?"CHAOS // 1200 NOTES · 150 HOLDS · NO OVERTURE":"INTENTION // STANDARD FIELD",2200))}function Fs(i){return!!i&&(i.acc||0)>=50}function rc(){fo=Jn[ac()]||null;const i=fo?`${String(fo.score).padStart(7,"0")} · ${fo.rank||"—"}`:"—";E.bestScoreLabel&&(E.bestScoreLabel.textContent=i),E.bestLine&&(E.bestLine.innerHTML=`PERSONAL BEST <b>${i}</b>`);for(const e of E.trackCards){const t=e.dataset.track,n=Jn[t]||(t==="intention"&&ti?Jn["intention-chaos"]:null),a=e.querySelector(".tc-best");a&&(a.textContent=n?`PB ${n.rank||"—"}`:"",a.title=n?`Personal best ${n.score} · ${(n.acc||0).toFixed(2)}%`:""),e.classList.toggle("cleared",Fs(n))}if(E.clearCount){const e=Na.filter(t=>Fs(Jn[t.id])||t.id==="intention"&&Fs(Jn["intention-chaos"])).length;E.clearCount.textContent=`${e} / ${Na.length} CLEARED`,E.clearCount.classList.toggle("all",e===Na.length)}}he.setSection(Tt.sections[0]);he.setTempo(Tt.song.bpm,Tt.song.beatOffset);he.setCity(Tt.sections[0].city||0);he.setBoss(rt.boss?"preview":"off",rt.theme||"untouchable");function p5(){for(const i of ni)i.group.removeFromParent(),i.head.material.dispose(),i.body&&i.body.material.dispose(),i.tail&&i.tail.material.dispose();ni=[]}function sc(){p5(),ra=(Tt.swings||[]).map((e,t)=>({t:e.t,index:t,state:"pending"}));const i=!!Tt.song.freeNotes;ni=Tt.notes.map((e,t)=>{const n=he.makeNote(e.lane,e.type,i);return n.group.visible=!1,{data:e,index:t,lane:e.lane,type:e.type,free:i,state:"pending",endTime:e.t+(e.dur||0),group:n.group,head:n.head,body:n.body,tail:n.tail,color:n.color,tickAt:e.t}})}function Vr(){Gt.active=!1,Gt.finished=!1,Gt.elapsed=0,Gt.visualT=0,document.body.classList.remove("game-over"),he.resetGameOver();for(const i of ni)i.state="pending",i.tickAt=i.data.t,i.group.visible=!1,i.group.position.set(0,0,0),i.head.visible=!0,i.head.scale.set(1.04,1.04,1),i.head.material.opacity=1,i.body&&(i.body.visible=!0,i.body.scale.set(.52,1,1),i.body.position.y=.5,i.tail.visible=!0,i.tail.position.y=1);Object.assign(Xe,{score:0,combo:0,maxCombo:0,judged:0,weight:0,perfect:0,great:0,good:0,bad:0,miss:0,dropped:0,health:100}),ic.fill(!1),xi.fill(null),Di.clear(),sa.clear(),_o=0,vo=0,Li=[],Il=0,Dl=0,Do(),he.clearGhosts(),he.clockReset(),Co(),he.pendulumReset(),Qu();for(const i of ra)i.state="pending";Ll=0,Za=null,ep(Tt.sections[0],!0),qu(0),ki(0,!1),E.judge.className="";for(const i of E.pads)i.classList.remove("pressed");E.flash.classList.remove("on")}function Zu(i){return Ud[i]||Ud[8]}function f5(i){const e=new Set;for(const t of ni){if(t.state!=="pending")continue;const n=t.data.t-i;n<r5&&n>-Io&&e.add(t.lane)}return e}function h5(i){return String(i).padStart(2,"0")}function Ol(i){const e=Math.max(0,Math.floor(i));return`${Math.floor(e/60)}:${h5(e%60)}`}function qu(i){i-Il>=.32&&(Il=i,Li.push(Xe.combo),Li.length>ku&&Li.shift()),E.score.textContent=String(Xe.score).padStart(7,"0");const e=Xe.judged?Xe.weight/Xe.judged*100:100;E.acc.textContent=e.toFixed(2)+"%",E.maxCombo.textContent=Xe.maxCombo;const t=Math.max(0,Math.min(1,i/Br));E.progress.style.width=(t*100).toFixed(2)+"%",E.progressGlow.style.left=(t*100).toFixed(2)+"%";const n=Math.max(0,Math.min(Dr,i));E.time.textContent=`${Ol(n)} / ${Ol(Dr)}`,E.energy.style.height=(Pe.forceSync?100:Math.max(0,Math.min(100,Xe.health))).toFixed(1)+"%"}function ko(i,e){const t=E.judge;t.textContent=e||i.toUpperCase(),t.className=i,t.offsetWidth,t.classList.add("pop")}function ki(i,e=!0){Xe.combo=i,i>Xe.maxCombo&&(Xe.maxCombo=i),E.comboNum.textContent=i,E.maxCombo.textContent=Xe.maxCombo,i>=2?E.comboHud.classList.add("on"):E.comboHud.classList.remove("on"),i>=2&&e&&(E.comboHud.classList.remove("bump"),E.comboHud.offsetWidth,E.comboHud.classList.add("bump"))}function Ni(i,e=1300){E.toast.textContent=i,E.toast.classList.add("on"),clearTimeout(Ul),Ul=setTimeout(()=>E.toast.classList.remove("on"),e)}function ia(i){document.body.classList.toggle("boss-intro",i),i||da()}function Wr(i,e=!1){const t=i&&rt.theme==="intention";document.body.classList.toggle("intent-clean",t),Fl(t&&e)}function Fl(i){Er=!!i&&rt.theme==="intention",document.body.classList.toggle("intent-cutscene",Er),Er||da()}function da(){clearTimeout(kl),E.bossCaption&&(E.bossCaption.classList.remove("on"),E.bossCaption.setAttribute("aria-hidden","true"))}function m5(i){if(!E.bossCaption||rt.theme==="intention"&&!Er)return;clearTimeout(kl),E.bcKicker.textContent=i.kicker||"",E.bcTitle.textContent=i.title||"",E.bcSub.textContent=i.sub||"",E.bossCaption.setAttribute("aria-hidden","false"),E.bossCaption.classList.remove("on"),E.bossCaption.offsetWidth,E.bossCaption.classList.add("on");const e=i.hold??3.4;e>0&&(kl=setTimeout(()=>{E.bossCaption.classList.remove("on"),E.bossCaption.setAttribute("aria-hidden","true")},e*1e3))}function Ku(i=1){E.bossGlitch&&(E.bossGlitch.classList.remove("on"),E.bossGlitch.offsetWidth,E.bossGlitch.classList.add("on"),clearTimeout(Od),Od=setTimeout(()=>E.bossGlitch.classList.remove("on"),340))}const g5=["70%","50%","30%"],y5=["bottom","middle","top"];function $u(i){if(!E.heartbeat)return;const e=(i%3+3)%3;E.heartbeat.style.setProperty("--hb-y",g5[e]),E.heartbeat.dataset.beat=String(e),E.heartbeat.dataset.position=y5[e]}function qa(){const i=Math.max(0,Math.min(100,Pe.fakeGuilt?Pe.fakeValue:Pe.guilt));E.guiltFill&&(E.guiltFill.style.width=i.toFixed(1)+"%"),E.guiltPct&&(E.guiltPct.textContent=String(Math.round(i)))}function ju(i){Pe.notesHidden!==i&&(Pe.notesHidden=i,he.setIntentNoteLayerHidden(i))}function _5(i,e="",t=3.2){if(!E.intentText)return;clearTimeout(Nl);const n=E.intentText.querySelector("span");n&&(n.textContent=i||"INTENTIONS",n.setAttribute("data-text",i||"INTENTIONS")),E.intentTextSub&&(E.intentTextSub.textContent=e||""),E.intentText.classList.remove("on"),E.intentText.offsetWidth,E.intentText.classList.add("on"),t>0&&(Nl=setTimeout(()=>E.intentText.classList.remove("on"),t*1e3))}function Ju(){for(const i of["guilt-on","guilt-fake","heartbeat-on","static-on","static-heavy","distort-on","bright-on","intent-whiteout","intent-black","intent-yellow","intent-glitch"])document.body.classList.remove(i);E.heartbeat?.classList.remove("on","beat"),E.intentText?.classList.remove("on"),E.whiteout?.classList.remove("on"),E.yellow?.classList.remove("on"),E.rainbow?.classList.remove("on"),E.syncEl?.classList.remove("rainbow")}function Qu(){clearTimeout(Nl),Ju(),Do(),Pe.phase="off",Pe.guiltOn=!1,Pe.guilt=100,Pe.fakeGuilt=!1,Pe.fakeValue=14,Pe.fakeBase=14,Pe.fakeStart=0,Pe.heartOn=!1,Pe.heartBpm=150,Pe.hbAcc=0,Pe.hbBeat=-1,Pe.screenGlitch=!1,Pe.glitchAcc=0,Pe.forceSync=!1,E.heartbeat&&(E.heartbeat.classList.remove("on","beat"),E.heartbeat.style.setProperty("--hb-y","70%"),E.heartbeat.dataset.beat="0",E.heartbeat.dataset.position="bottom"),Pe.notesHidden&&(Pe.notesHidden=!1,document.body.classList.remove("intent-field-hidden"),he.setIntentNoteLayerHidden(!1)),E.guiltCopy&&(E.guiltCopy.textContent="CONSISTENT PERFECTS KEEP IT FULL"),qa()}function v5(i){const e=i.on!==!1;switch(i.hud){case"clear":Ju(),Pe.guiltOn=!1,Pe.fakeGuilt=!1,Pe.heartOn=!1,Pe.screenGlitch=!1,Pe.forceSync=!1,Pe.notesHidden&&ju(!1);break;case"black":document.body.classList.toggle("intent-black",e);break;case"guilt":Pe.guiltOn=e,Pe.fakeGuilt=!1,e&&(Pe.guilt=i.value??100),document.body.classList.toggle("guilt-on",e),document.body.classList.remove("guilt-fake"),E.guiltCopy&&(E.guiltCopy.textContent="CONSISTENT PERFECTS KEEP IT FULL"),qa();break;case"fakeGuilt":Pe.fakeGuilt=e,Pe.guiltOn=e,e&&(Pe.fakeBase=i.value??14,Pe.fakeValue=Pe.fakeBase,Pe.fakeStart=Rt.time),document.body.classList.toggle("guilt-fake",e),document.body.classList.toggle("guilt-on",e),E.guiltCopy&&(E.guiltCopy.textContent="IT WILL NOT REFILL"),qa();break;case"heartbeat":Pe.heartOn=e,i.bpm&&(Pe.heartBpm=i.bpm),Pe.hbAcc=0,e?(Pe.hbBeat=-1,$u(0)):Pe.hbBeat=-1,E.heartbeat?.classList.toggle("on",e),document.body.classList.toggle("heartbeat-on",e);break;case"glitch":Pe.screenGlitch=e,document.body.classList.toggle("intent-glitch",e);break;case"text":if(rt.theme==="intention"&&String(i.text||"").trim().toUpperCase()!=="INTENTION")break;e?_5(i.text,i.sub,i.hold??3.2):E.intentText?.classList.remove("on");break;case"static":document.body.classList.toggle("static-on",e),document.body.classList.toggle("static-heavy",e&&(i.power??0)>=.9),document.body.classList.toggle("static-soft",e&&(i.power??0)<.9);break;case"distort":document.body.classList.toggle("distort-on",e);break;case"bright":document.body.classList.toggle("bright-on",e);break;case"white":E.whiteout?.classList.toggle("on",e),document.body.classList.toggle("intent-whiteout",e);break;case"yellow":document.body.classList.toggle("intent-yellow",e),E.yellow?.classList.toggle("on",e);break;case"rainbow":Pe.forceSync=e,E.syncEl?.classList.toggle("rainbow",e),E.rainbow?.classList.toggle("on",e),e&&(E.energy.style.height="100%");break}}function x5(i){if(i.mode==="phase"){Pe.phase=i.phase,he.setIntentionPhase(i.phase),ju(i.phase==="dawn");return}i.mode==="hud"&&v5(i)}function lc(i){if(!Pe.guiltOn||Pe.fakeGuilt)return;const e=i==="perfect"?1.35:i==="great"?.95:i==="good"?.5:i==="bad"?-2.2:-6;Pe.guilt=Math.max(qt.noFail?1:0,Math.min(100,Pe.guilt+e)),qa()}function b5(i,e){if(Pe.guiltOn&&!Pe.fakeGuilt){let t=0;for(const o of ni)o.state==="pending"&&o.data.t>=e&&o.data.t<e+2.4&&t++;const n=t/2.4,a=.5+Math.min(1.5,n*.55);Pe.guilt=Math.max(qt.noFail?1:0,Math.min(100,Pe.guilt-a*i)),qa()}if(Pe.fakeGuilt){const t=Math.max(0,Rt.time-Pe.fakeStart);Pe.fakeValue=Math.max(2.6,Pe.fakeBase-t*.5),qa()}if(Pe.heartOn){Pe.hbAcc+=i;const t=60/Math.max(40,Pe.heartBpm);if(Pe.hbAcc>=t){Pe.hbAcc%=t,Pe.hbBeat=(Pe.hbBeat+1)%3,$u(Pe.hbBeat);const n=E.heartbeat;n&&(n.classList.remove("beat"),setTimeout(()=>{Pe.heartOn&&n.classList.add("beat")},18))}}else Pe.hbAcc=0;Pe.screenGlitch&&(Pe.glitchAcc+=i,Pe.glitchAcc>.52+Math.random()*.4&&(Pe.glitchAcc=0,he.bossGlitch(.32+Math.random()*.3),Ku(.45)))}function ep(i,e=!1){if(!i||!e&&i===Za)return;Za=i,he.setSection(i),i.bpm&&he.setTempo(i.bpm,i.beatOffset??0),Ar=ap*(i.noteSpeed||1),E.section.textContent=i.name,E.keys.textContent=i.keys,E.hudBpm&&i.bpm&&(E.hudBpm.textContent=`${Number(i.bpm).toFixed(1).replace(/\.0$/,"")} BPM`);const t=new Set(Zu(i.keys));for(const n of E.pads){const a=Number(n.dataset.lane),o=t.has(a);n.classList.toggle("active",o),n.classList.toggle("sleep",!o),n.setAttribute("aria-hidden",String(!o)),n.tabIndex=o?0:-1}document.documentElement.style.setProperty("--cyan",i.color),document.documentElement.style.setProperty("--magenta",i.accent),e||(rt.boss&&i.intro||Ni(`${i.name} // ${i.keys} LANES`,1100),he.state.shake=Math.min(.12,he.state.shake+.035))}function M5(i){const e=Tt.sections;for(let t=e.length-1;t>=0;t--)if(i>=e[t].start)return{index:t,sec:e[t]};return{index:0,sec:e[0]}}function w5(i,e){const t=Math.abs(e);let n;qt.perfectPlay||t<=Ba.perfect?n="perfect":t<=Ba.great?n="great":t<=Ba.good?n="good":n="bad",Xe[n]++,Xe.judged++,Xe.weight+=Iu[n],Xe.score+=Lu[n],Xe.health=Math.min(100,Xe.health+(n==="perfect"?1.1:n==="great"?.8:n==="good"?.4:-1.6)),lc(n),n==="bad"?ki(0,!1):ki(Xe.combo+1),i.type==="hold"?(i.state="holding",i.endTime=i.data.t+i.data.dur,i.tickAt=Rt.time,i.head.visible=!1,xi[i.lane]=i):(i.state="done",i.group.visible=!1),ko(n,n==="perfect"?"PERFECT":n==="great"?"GREAT":n==="good"?"GOOD":"BAD"),he.hitFx(i.lane,n),Rt.click(i.lane,n==="perfect"?.52:.38),qt.suddenFail&&n==="bad"&&Ja()}function S5(i){i.state==="pending"&&(i.state="miss",i.group.visible=!1,Xe.miss++,Xe.judged++,Xe.health=Math.max(qt.noFail?1:0,Xe.health-5),ki(0,!1),ko("miss","MISS"),he.missFx(i.lane),Rt.thud(),lc("miss"),qt.suddenFail&&Ja())}function cc(i){i.state==="holding"&&(i.state="dropped",i.group.visible=!1,xi[i.lane]=null,Xe.dropped++,Xe.miss++,Xe.judged++,Xe.health=Math.max(qt.noFail?1:0,Xe.health-4),ki(0,!1),ko("miss","HOLD LOST"),he.missFx(i.lane),Rt.thud(),lc("miss"),qt.suddenFail&&Ja())}function dc(i){i.state==="holding"&&(i.state="done",i.group.visible=!1,xi[i.lane]=null,Xe.score+=450,Xe.health=Math.min(100,Xe.health+1.2),he.pressFx(i.lane),he.hitFx(i.lane,"great"))}function tp(i,e=null){let t=null,n=1/0;for(const a of ni){if(a.state!=="pending"||e!==null&&a.lane!==e)continue;const o=i-a.data.t;if(o<-.16||o>Io)continue;const s=Math.abs(o);s<n-1e-6&&(n=s,t=a)}return t}function T5(i){const e=E.pads[i];e&&(e.classList.add("pressed"),clearTimeout(Fd[i]),Fd[i]=setTimeout(()=>e.classList.remove("pressed"),90))}function np(i,e){T5(i.lane),he.pressFx(i.lane),w5(i,e-i.data.t)}function uc(){if(Je!=="playing")return;const i=Rt.time;if(i<0)return;const e=tp(i);if(!e){Rt.click(3,.07);return}np(e,i)}function E5(i){if(Je!=="playing")return;const e=Rt.time;if(e<0)return;const t=tp(e,i);if(!t){he.pressFx(i),Rt.click(i,.1);return}np(t,e)}function Xr(){if(Je!=="playing"||Fu())return;const i=xi.filter(e=>e&&e.state==="holding");for(const e of i)xi[e.lane]=null,Rt.time<e.endTime-.12?cc(e):dc(e)}function A5(i){if(Je!=="playing")return;const e=xi[i];e&&(Bu()||(xi[i]=null,Rt.time<e.endTime-.12?cc(e):dc(e)))}function C5(i){ra.length&&(bi=!0,he.startPendulum({start:i.t,period:i.period??2.4146,amplitude:i.amplitude??.42,times:ra.map(e=>e.t)}),document.body.classList.add("pendulum"),E.centerPad.classList.add("show"),E.centerPad.setAttribute("aria-hidden","false"),ip(),Ni("STASIS // TAP THE CENTRE",1800))}function Co(){bi=!1,he.stopPendulum(),document.body.classList.remove("pendulum"),E.centerPad&&(E.centerPad.classList.remove("show","pressed"),E.centerPad.setAttribute("aria-hidden","true"))}function ip(){if(!bi||!E.centerPad)return;const i=he.pendulumTargetScreen(),e=Math.max(140,i.radius*2);E.centerPad.style.left=i.x.toFixed(1)+"px",E.centerPad.style.top=i.y.toFixed(1)+"px",E.centerPad.style.width=e.toFixed(1)+"px",E.centerPad.style.height=e.toFixed(1)+"px"}function R5(i,e){const t=Math.abs(e);let n;qt.perfectPlay||t<=Ba.perfect?n="perfect":t<=Ba.great?n="great":t<=Ba.good?n="good":n="bad",i.state="done",Xe[n]++,Xe.judged++,Xe.weight+=Iu[n],Xe.score+=Lu[n],Xe.health=Math.min(100,Xe.health+(n==="perfect"?1.2:n==="great"?.9:n==="good"?.5:-1.4)),n==="bad"?ki(0,!1):ki(Xe.combo+1),ko(n,n==="perfect"?"PERFECT":n==="great"?"GREAT":n==="good"?"GOOD":"BAD"),he.swingResolve(i.index,"hit"),Rt.click(3,n==="perfect"?.56:.4),qt.suddenFail&&n==="bad"&&Ja()}function P5(i){i.state==="pending"&&(i.state="miss",Xe.miss++,Xe.judged++,Xe.health=Math.max(qt.noFail?1:0,Xe.health-5),ki(0,!1),ko("miss","MISS"),he.swingResolve(i.index,"miss"),Rt.thud(),qt.suddenFail&&Ja())}function L5(i){if(bi)for(const e of ra)e.state==="pending"&&i>e.t+Io&&P5(e)}function Yr(){if(Je!=="playing"||!bi)return;const i=Rt.time;let e=null,t=1/0;for(const n of ra){if(n.state!=="pending")continue;const a=i-n.t;if(a<-.16||a>Io)continue;const o=Math.abs(a);o<t&&(t=o,e=n)}if(!e){he.swingWhiff(),Rt.click(3,.1);return}R5(e,i-e.t)}const ap=8.4;let Ar=ap;function Bd(i){const e=he.noteScale;for(const t of ni)if(t.state==="pending"){const n=(t.data.t-i)*Ar;if(t.free){const a=he.freeNotePose(t.lane,n,t.index);t.group.position.set(a.x,a.y,a.z)}else t.group.position.set(0,n,.24);if(t.group.visible=n<14.5&&n>-1.3,t.head.scale.set(1.04*e,1.04*e,1),t.body){const a=t.data.dur*Ar;t.body.visible=t.group.visible,t.tail.visible=t.group.visible,t.body.scale.set(.52*e,a,1),t.body.position.y=a/2,t.body.material.rotation=t.free?0:-he.laneScreenAngle(t.lane),t.tail.scale.set(.68*e,.68*e,1),t.tail.position.y=a}i>t.data.t+Io&&Je==="playing"&&S5(t)}else if(t.state==="holding"){if(!ic[t.lane]&&!Bu()){cc(t);continue}if(i>=t.endTime-.02){dc(t);continue}const n=Math.max(0,(t.endTime-i)*Ar);if(t.group.visible=!0,t.free){const a=he.freeNotePose(t.lane,0,t.index);t.group.position.set(a.x,.02,a.z)}else t.group.position.set(0,.02,.24);t.head.visible=!1,t.body&&(t.body.visible=n>.03,t.body.scale.set(.52*e,n,1),t.body.position.y=n/2,t.body.material.rotation=t.free?0:-he.laneScreenAngle(t.lane),t.tail.visible=n>.4,t.tail.scale.set(.68*e,.68*e,1),t.tail.position.y=n),i>t.tickAt&&(t.tickAt=i+.12,Xe.score+=24,Xe.health=Math.min(100,Xe.health+.06))}else t.group.visible=!1}async function pc(){if(Rt.loaded){za++,E.modScreen?.classList.remove("show"),E.modScreen?.setAttribute("aria-hidden","true"),E.modBtn?.setAttribute("aria-expanded","false"),E.start.classList.remove("show"),E.result.classList.remove("show"),E.resultLoading.classList.remove("show"),E.pause.classList.remove("show"),E.hud.classList.remove("hidden"),E.hud.setAttribute("aria-hidden","false"),document.body.classList.add("playing"),document.body.classList.toggle("chaos-mode",fn()),da(),Do(),E.bossGlitch?.classList.remove("on"),rt.boss&&!fn()?(he.setBoss("intro",rt.theme||"untouchable"),ia(!0)):rt.boss?(he.setBoss("play","intention"),ia(!1)):(he.setBoss("off",rt.theme||"untouchable"),ia(!1)),Wr(rt.theme==="intention",!fn()),Vr(),fn()?(he.setBoss("play","intention"),he.setChaos?.(!0),he.setIntentFieldHidden(!1),he.setIntentNoteLayerHidden(!1),he.setIntentionPhase("chaos")):he.setChaos?.(!1),Je="starting";try{await Rt.start(0,{fadeStart:rt.fadeStart,fadeEnd:rt.fadeEnd}),Je="playing",rt.boss||Ni(`LISTEN // ${Tt.sections[0].keys} LANES`,1500)}catch(i){console.error(i),Je="menu",document.body.classList.remove("playing"),E.hud.classList.add("hidden"),E.start.classList.add("show"),E.startLabel.textContent="AUDIO ERROR",Ni("AUDIO COULD NOT START",3e3)}}}function Zr(){Je==="playing"&&(Je="paused",Rt.pause(),E.pause.classList.add("show"))}async function op(){Je==="paused"&&(Rt.resume(),E.pause.classList.remove("show"),Je="playing")}function rp(){za++,Je="menu",Gt.active=!1,Gt.finished=!1,Gt.elapsed=0,document.body.classList.remove("game-over"),he.resetGameOver(),Rt.stop(),Rt.resume(),E.pause.classList.remove("show"),E.result.classList.remove("show"),E.resultLoading.classList.remove("show"),E.hud.classList.add("hidden"),E.hud.setAttribute("aria-hidden","true"),E.start.classList.add("show"),document.body.classList.remove("playing"),he.setSection(Tt.sections[0]),he.setTempo(Tt.song.bpm,Tt.song.beatOffset),he.setCity(Tt.sections[0].city||0),he.setBoss(rt.boss?"preview":"off",rt.theme||"untouchable"),he.setPreviewLanes(new Set),ia(!1),Wr(!1),da(),Do(),E.bossGlitch?.classList.remove("on"),Qu(),he.setChaos?.(fn());for(const i of ni)i.group.visible=!1;ic.fill(!1),xi.fill(null),Di.clear(),sa.clear(),_o=0,vo=0,he.clearGhosts(),he.clockReset(),Co(),he.pendulumReset(),rt.id==="chronostasis"&&he.setClock("run",.4);for(const i of E.pads)i.classList.remove("pressed","active","sleep");document.documentElement.style.setProperty("--cyan","#5ee7ff"),document.documentElement.style.setProperty("--magenta","#ff5fd2")}function I5(i,e){return e===0?"F":i>=99.5?"S+":i>=98?"S":i>=93?"A":i>=86?"B":i>=76?"C":i<50?"F":"D"}function D5(i,e){const a=i.length?i:[0,0,0,0],o=Math.max(1,e,...a),s=320/Math.max(1,a.length-1);let r="";for(let c=0;c<a.length;c++){const d=c*s,u=116-a[c]/o*106;r+=`${c?"L":"M"}${d.toFixed(1)} ${u.toFixed(1)}`}const l=`${r}L320 116L0 116Z`;return{line:r,fill:l}}function zd(i=1){E.flash.style.opacity=String(Math.min(.42,.16+i*.18)),E.flash.classList.add("on"),clearTimeout(Dl),Dl=setTimeout(()=>{E.flash.style.opacity="",E.flash.classList.remove("on")},180)}function Gd(i,e,t,n){const o=performance.now(),s=r=>{const l=Math.min(1,(r-o)/t),c=1-Math.pow(1-l,3);i.textContent=n(Math.round(0+(e-0)*c)),l<1&&requestAnimationFrame(s)};requestAnimationFrame(s)}function k5(i){const{rank:e,acc:t,full:n,isBest:a,prevBest:o,judgeTotals:s}=i;E.rank.textContent=e,E.finalScore.textContent="0000000",E.finalAcc.textContent="0.00%",Gd(E.finalScore,i.score,900,h=>String(h).padStart(7,"0")),Gd(E.fMaxCombo,i.maxCombo,700,h=>String(h));const r=performance.now(),l=h=>{const g=Math.min(1,(h-r)/900),x=t*(1-Math.pow(1-g,3));E.finalAcc.textContent=x.toFixed(2)+"%",E.accRing.style.setProperty("--acc",x.toFixed(2)+"%"),g<1&&requestAnimationFrame(l)};requestAnimationFrame(l),E.cPerfect.textContent=i.counts.perfect,E.cGreat.textContent=i.counts.great,E.cGood.textContent=i.counts.good,E.cBad.textContent=i.counts.bad,E.cMiss.textContent=i.counts.miss;const c=Math.max(1,s);E.barPerfect.style.width=(i.counts.perfect/c*100).toFixed(1)+"%",E.barGreat.style.width=(i.counts.great/c*100).toFixed(1)+"%",E.barGood.style.width=(i.counts.good/c*100).toFixed(1)+"%",E.barBad.style.width=(i.counts.bad/c*100).toFixed(1)+"%",E.barMiss.style.width=(i.counts.miss/c*100).toFixed(1)+"%";const d=D5(Li,Xe.maxCombo);E.comboLine.setAttribute("d",d.line),E.comboFill.setAttribute("d",d.fill),E.peakCombo.textContent=Xe.maxCombo,E.resultTrack.textContent=`${rt.title}${fn()?" // CHAOS":""}`,E.resultDiff.textContent=fn()?"CHAOS":rt.difficulty,E.resultBpm.textContent=fn()?Tt.song.bpmLabel||"CHAOS":rt.bpmLabel||`${rt.bpm} BPM`,E.footTrack.textContent=rt.shortTitle,E.footLanes.textContent=fn()?"8 · 6 · 4":rt.laneLabel,E.resultTag.textContent=i.failed?"SIGNAL LOST // GAME OVER":i.assisted?n?"ASSISTED // FULL COMBO · PB NOT SAVED":"ASSISTED RUN // PB NOT SAVED":n?"FULL COMBO // FIELD MASTERED":i.cleared?fn()?"CHAOS // OCEAN BROKEN OPEN":rt.boss?rt.clearTag||"THE UNTOUCHABLE // FELLED":"CLEARED // SIGNAL COMPLETE":"SIGNAL LOST // TRY AGAIN",E.fcBadge.classList.toggle("on",n),E.bestBadge.classList.toggle("on",a);const u=Jn[ac()]||null;E.bestNote.innerHTML=u?`${String(u.score).padStart(7,"0")} · ${u.rank||"—"}`:"FIRST RUN";const f=Math.max(0,(u?.score||0)-i.score);E.scoreDelta.textContent=i.assisted?n?"ASSISTED // FULL COMBO":"ASSISTED // NOT RECORDED":a?o?`NEW BEST +${String(Math.max(0,i.score-o.score)).padStart(5,"0")}`:i.cleared?"FIRST CLEAR":"FIRST SCORE":i.scored?f>0?`PB GAP ${String(f).padStart(5,"0")}`:"PB MATCHED":"NO SCORE RECORDED",E.result.classList.remove("show"),E.result.offsetWidth,E.result.classList.add("show"),setTimeout(()=>{E.resultLoading.classList.remove("show")},60),E.resultLoading.setAttribute("aria-hidden","true")}function Ja(){Gt.active||Je!=="playing"&&Je!=="paused"||(Gt.active=!0,Gt.finished=!1,Gt.elapsed=0,Gt.wallStart=performance.now(),Gt.t0=Rt.time,Gt.visualT=Gt.t0,Je="gameover",Rt.pitchDrop(.5,2.4),he.startGameOver(),document.body.classList.add("game-over"),clearTimeout(Ul),E.toast.classList.remove("on"),da(),Co(),E.pause.classList.remove("show"))}function N5(){Gt.elapsed=(performance.now()-Gt.wallStart)/1e3;const i=Math.min(1,Gt.elapsed/2.7),e=1-Math.pow(1-i,2.3);Gt.visualT=Gt.t0+1.3*e,!Gt.finished&&Gt.elapsed>=3.7&&(Gt.finished=!0,sp(!0))}function sp(i=!1){if(Je!=="playing"&&Je!=="paused"&&Je!=="gameover")return;Je="results",Rt.stop(),Rt.resume(),Gt.active=!1,he.resetGameOver(),document.body.classList.remove("game-over"),E.hud.classList.add("hidden"),E.hud.setAttribute("aria-hidden","true"),E.pause.classList.remove("show"),document.body.classList.remove("playing"),document.body.classList.remove("chaos-mode"),Wr(!1),ia(!1);const e=Xe.judged?Xe.weight/Xe.judged*100:100,t=I5(e,Xe.judged);Li.push(Xe.combo),Li.length>ku&&Li.shift();const n=!i&&Xe.miss===0&&Xe.bad===0&&Xe.judged>0,a=Xe.score,o=a>0&&!i,s=o&&e>=50,r=Ou(),l=ac(),c=Jn[l]||null,d=!r&&o&&(!c||a>c.score||a===c.score&&e>c.acc);if(d){Jn[l]={score:a,acc:e,rank:t,maxCombo:Xe.maxCombo,full:n,at:Date.now()};try{localStorage.setItem(Du,JSON.stringify(Jn))}catch{}}rc();const u={score:a,acc:e,rank:t,full:n,isBest:d,prevBest:c,scored:o,cleared:s,failed:i,assisted:r,maxCombo:Xe.maxCombo,counts:{...Xe},judgeTotals:Xe.judged},f=++za;E.result.classList.remove("show"),E.resultLoading.classList.add("show"),E.resultLoading.setAttribute("aria-hidden","false"),E.loadTrack.textContent=`${rt.shortTitle} // ${rt.difficulty}`,E.loadRank.textContent="?",E.loadProgress.style.width="0%",E.loadPct.textContent="00%";const h=performance.now(),g=1650,x=m=>{if(f!==za)return;const p=Math.min(1,(m-h)/g),A=1-Math.pow(1-p,3);E.loadProgress.style.width=(A*100).toFixed(1)+"%",E.loadPct.textContent=String(Math.round(A*100)).padStart(2,"0")+"%",p<1?requestAnimationFrame(x):(E.loadRank.textContent=t,setTimeout(()=>{f===za&&k5(u)},280))};requestAnimationFrame(x)}function U5(){za++,E.result.classList.remove("show"),pc()}function Hd(i=new Set){const e=new Set(Za?Zu(Za.keys):[]);for(const t of i)e.add(t);for(let t=0;t<8;t++){const n=he.laneScreenGeometry(t),a=t>0?n.x-he.laneScreenGeometry(t-1).x:n.x-he.laneScreenGeometry(1).x,o=t<7?he.laneScreenGeometry(t+1).x-n.x:n.x-he.laneScreenGeometry(6).x,s=Math.max(26,(Math.abs(a)+Math.abs(o))*.5),r=Math.max(48,Math.min(240,s*1.1)),l=n.y+26,c=Math.max(6,Math.min(l-110,n.topY)),d=Math.max(110,l-c),u=E.pads[t],f=`translate(-50%,-100%) rotate(${n.angle.toFixed(4)}rad)`;u.style.left=n.x.toFixed(1)+"px",u.style.top=l.toFixed(1)+"px",u.style.width=r.toFixed(1)+"px",u.style.height=d.toFixed(1)+"px",u.style.transform=f;const h=e.has(t);u.classList.contains("sleep")===h&&u.classList.toggle("sleep",!h),u.setAttribute("aria-hidden",String(!h))}ip()}function O5(i){const e=M5(i);(e.index!==Ll||Za===null)&&(Ll=e.index,ep(e.sec))}function F5(i){const e=Tt.ghosts||[];for(;_o<e.length&&e[_o].t<=i;){const t=e[_o++];he.ghostFx(t.lane,t.type)}}function B5(i){const e=Tt.events||[];for(;vo<e.length&&e[vo].t<=i;){const t=e[vo++];switch(t.type){case"echo":he.echoFx(t.lane,t.dir??(t.lane<3.5?-1:1),t.power??1);break;case"pulse":he.pulseFx(t.power??1);break;case"burst":he.burstFx(t.lane,t.power??1);break;case"vibe":he.vibeFx(t.power??1),zd(t.power??1);break;case"motion":he.motionEvent(t.style,t.amp,t.speed,t.pitch);break;case"clock":he.setClock(t.mode,t.power??1,t.t),t.mode!=="freeze"&&Co();break;case"clockTick":he.clockTick(t.hand,t.power??1);break;case"pendulum":t.mode==="start"?C5(t):Co();break;case"bossCamera":he.bossCameraEvent(t.pos,t.look,t.fov,t.roll,t.dur);break;case"bossGlitch":he.bossGlitch(t.power??1),Ku(t.power??1),zd((t.power??1)*.6);break;case"bossTick":he.bossTick(t.hand,t.power??1);break;case"bossPhase":he.setBoss(t.mode==="play"?"play":"outro",rt.theme),t.mode==="play"?(ia(!1),rt.theme==="intention"?Fl(!1):Ni("CLOCK STAGE // FREE FIELD",1700)):rt.theme==="intention"?Fl(!0):da();break;case"intent":x5(t);break;case"wind":he.windFx(t.power??1);break;case"caption":m5(t);break;case"cutscene":Yu(t);break}}}function z5(i){if(i.code==="Escape"&&E.modScreen?.classList.contains("show")){i.preventDefault(),Gr();return}if(!E.modScreen?.classList.contains("show")){if(i.code==="Escape"){Je==="playing"?(i.preventDefault(),Zr()):Je==="paused"&&(i.preventDefault(),op());return}if((Je==="menu"||Je==="boot")&&i.code==="KeyP"){i.preventDefault();const e=na.findIndex(t=>t.id===tn.id);oc(na[(e+1)%na.length].id);return}if((Je==="menu"||Je==="boot")&&i.code==="KeyC"&&rt.id==="intention"){i.preventDefault(),Hr(!ti);return}if(i.code==="Space"){Je==="playing"&&bi&&(i.preventDefault(),i.repeat||Yr());return}i.repeat||Pu[i.code]!==void 0&&(i.preventDefault(),Je==="playing"&&(sa.has(i.code)||(sa.add(i.code),uc())))}}function G5(i){Pu[i.code]!==void 0&&(sa.delete(i.code),Xr())}document.addEventListener("keydown",z5,{passive:!1});document.addEventListener("keyup",G5);function H5(i){return!!i?.closest?.("#pauseBtn, #centerPad, .overlay, #startScreen, #resultScreen, #pauseScreen")}function V5(i){if(Je==="playing"&&!H5(i.target)){i.preventDefault();try{i.target.setPointerCapture?.(i.pointerId)}catch{}Di.add(i.pointerId),bi?Yr():uc()}}function lp(i){Di.delete(i.pointerId),Xr()}window.addEventListener("pointerdown",V5,{capture:!0,passive:!1});window.addEventListener("pointerup",lp,{capture:!0,passive:!0});window.addEventListener("pointercancel",lp,{capture:!0,passive:!0});window.addEventListener("blur",()=>{Di.clear(),sa.clear(),Xr()});for(const i of E.pads)i.addEventListener("contextmenu",e=>e.preventDefault());if(E.centerPad){const i=t=>{t.preventDefault(),!(Je!=="playing"||!bi)&&(Di.add(t.pointerId),E.centerPad.classList.add("pressed"),Yr())},e=t=>{t.preventDefault(),Di.delete(t.pointerId),E.centerPad.classList.remove("pressed"),Xr()};E.centerPad.addEventListener("pointerdown",i,{passive:!1}),E.centerPad.addEventListener("pointerup",e,{passive:!1}),E.centerPad.addEventListener("pointercancel",e,{passive:!1}),E.centerPad.addEventListener("lostpointercapture",e,{passive:!1}),E.centerPad.addEventListener("contextmenu",t=>t.preventDefault())}E.startBtn.addEventListener("click",()=>{(Je==="boot"||Je==="menu")&&pc()});for(const i of E.trackCards)i.addEventListener("click",()=>{Je!=="boot"&&Je!=="menu"||i.dataset.track!==rt.id&&cp(i.dataset.track)});for(const i of E.partnerButtons)i.addEventListener("click",()=>{Je!=="boot"&&Je!=="menu"||oc(i.dataset.partner)});E.modeNormal?.addEventListener("click",()=>Hr(!1));E.modeChaos?.addEventListener("click",()=>Hr(!0));E.storyBtn?.addEventListener("click",()=>{Je!=="boot"&&Je!=="menu"||d5()});E.storyClose?.addEventListener("click",Xu);E.storyScreen?.addEventListener("click",i=>{i.target===E.storyScreen&&Xu()});E.modBtn?.addEventListener("click",Wu);E.modClose?.addEventListener("click",Gr);E.modScreen?.addEventListener("click",i=>{i.target===E.modScreen&&Gr()});for(const i of E.modItems)i.addEventListener("click",()=>Vu(i.dataset.mod,!qt[i.dataset.mod]));E.pauseBtn.addEventListener("click",Zr);de("resumeBtn").addEventListener("click",op);de("restartBtn").addEventListener("click",()=>{E.pause.classList.remove("show"),pc()});de("quitBtn").addEventListener("click",rp);de("retryBtn").addEventListener("click",U5);de("menuBtn").addEventListener("click",rp);document.addEventListener("visibilitychange",()=>{document.hidden&&Je==="playing"&&Zr()});addEventListener("blur",()=>{Je==="playing"&&Zr()});E.canvas.addEventListener("contextmenu",i=>i.preventDefault());function fc(){const i=rt,e=fn();E.startTrack&&(E.startTrack.textContent=e?"INTENTION // CHAOS":i.shortTitle),E.startLength&&(E.startLength.textContent=Ol(i.duration)),E.startLevel&&(E.startLevel.textContent=e?"CHAOS":i.difficulty),E.startLanes&&(E.startLanes.textContent=e?"8 · 6 · 4":i.laneLabel),E.hudTrack&&(E.hudTrack.textContent=e?"INTENTION // CHAOS":i.shortTitle),E.hudBpm&&(E.hudBpm.textContent=e?Tt.song.bpmLabel||"CHAOS":i.bpmLabel||`${i.bpm} BPM`),E.loadTrack&&(E.loadTrack.textContent=`${e?"INTENTION CHAOS":i.shortTitle} // ${e?"CHAOS":i.difficulty}`);const t=de("trackCount");t&&(t.textContent=String(Na.length).padStart(2,"0")),document.body.classList.toggle("boss-track",!!i.boss),document.body.classList.toggle("chaos-mode",e);const n=i.id==="intention";E.modeRow&&E.modeRow.classList.toggle("show",n),E.modeNormal&&(E.modeNormal.classList.toggle("active",n&&!e),E.modeNormal.setAttribute("aria-pressed",String(n&&!e))),E.modeChaos&&(E.modeChaos.classList.toggle("active",e),E.modeChaos.setAttribute("aria-pressed",String(e)),E.modeChaos.disabled=!n),Rt.loaded&&E.startLabel&&(E.startLabel.textContent=e?"ENTER CHAOS":"START SESSION");for(const a of E.trackCards){const o=Bl[a.dataset.track];o&&a.style.setProperty("--card-accent",o.accent);const s=a.dataset.track===i.id;a.classList.toggle("active",s),a.setAttribute("aria-selected",String(s))}document.documentElement.style.setProperty("--track-accent",e?"#ff3b5c":i.accent),rc()}async function cp(i,{autoLoad:e=!0}={}){const t=Bl[i];t&&(rt=t,ti=!1,Tt=zu(t,!1),Br=Tt.song.chartEnd,Dr=t.duration,fc(),ia(!1),Wr(!1),da(),Do(),he.setChaos?.(!1),E.bossGlitch?.classList.remove("on"),he.setBoss(t.boss?"preview":"off",t.theme||"untouchable"),he.setSection(Tt.sections[0]),he.setTempo(Tt.song.bpm,Tt.song.beatOffset),he.setCity(Tt.sections[0].city||0),he.setPreviewLanes(new Set),sc(),Vr(),t.id==="chronostasis"&&he.setClock("run",.4),e&&(Je="boot",E.startBtn.disabled=!0,await dp(t)))}async function dp(i=rt){const e=++vr;E.startLabel.textContent="DECODING AUDIO",E.loadFill.style.width="0%";try{const t=await Rt.load(i.audio,n=>{e===vr&&(E.loadFill.style.width=Math.round(n*100)+"%")});if(e!==vr)return;Rt.setBuffer(t),E.loadFill.style.width="100%",E.startLabel.textContent=fn()?"ENTER CHAOS":"START SESSION",E.startBtn.disabled=!1,Je="menu"}catch(t){if(e!==vr)return;console.error(t),E.startLabel.textContent="AUDIO UNAVAILABLE",Ni("COULD NOT LOAD AUDIO",4e3),Je="menu"}}sc();Vr();Je="boot";Gu();fc();Hu();dp(rt);let Vd=performance.now(),Bs=0;function up(i){const e=Math.min(.05,Math.max(0,(i-Vd)/1e3));if(Vd=i,Bs+=e,Je==="playing"){const t=Rt.time;O5(t);const n=f5(t);he.setPreviewLanes(n),F5(t),B5(t),b5(e,t),L5(t),Bd(t),qu(t),he.animate(e,t,!0),Hd(n);const a=!qt.noFail&&(Xe.health<=.001||Pe.guiltOn&&!Pe.fakeGuilt&&Pe.guilt<=.001);t>=Br?sp():a&&Ja()}else if(Je==="gameover")N5(),Bd(Gt.visualT),he.animate(e,Gt.visualT,!0),Hd(new Set);else if(Je==="paused"){const t=Rt.time;he.animate(e,t,!0)}else he.animate(e,Bs,!1);he.render(),requestAnimationFrame(up)}window.__cryout={audio:Rt,stats:Xe,scene:he,pressLane:E5,pressGlobal:uc,releaseLane:A5,selectTrack:cp,selectPartner:oc,setChaosMode:Hr,showStoryCard:Yu,mods:qt,setMod:Vu,modsActive:Ou,openMods:Wu,closeMods:Gr,get chart(){return Tt},get partner(){return tn},get chaos(){return fn()},get notes(){return ni},get swings(){return ra},get swingMode(){return bi},swingTap:Yr,get state(){return Je},get best(){return fo},get intent(){return Pe}};requestAnimationFrame(up);
