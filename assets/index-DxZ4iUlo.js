(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();const rd={song:{title:"CRYOUT",shortTitle:"CRYOUT",artist:"ORIGINAL TRACK",bpm:100,duration:138.1,chartEnd:133.5,beatOffset:.535,difficulty:"ADVANCED",laneLabel:"4 · 6 · 8",fadeStart:131.4,fadeEnd:133.4},sections:[{name:"SIGNAL",start:3.535,end:12.535,keys:4,color:"#5ee7ff",accent:"#8f7bff",energy:.18,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.8,bloom:.55,spin:.03,motion:"fan",motionAmp:.045,motionSpeed:.45,motionPitch:.02,city:0},{name:"ASCENT",start:12.535,end:22.735,keys:4,color:"#57d9ff",accent:"#9d7bff",energy:.38,rotY:.05,rotZ:-.02,tilt:.015,spread:1.03,y:.05,camZ:16.6,camY:6.6,bloom:.65,spin:.05,motion:"fan",motionAmp:.075,motionSpeed:.55,motionPitch:.035,city:0},{name:"CURRENT",start:22.735,end:41.335,keys:6,color:"#42e0d0",accent:"#c46bff",energy:.62,rotY:-.1,rotZ:.03,tilt:-.02,spread:1.06,y:.1,camZ:15.9,camY:6.4,bloom:.8,spin:.08,motion:"wave",motionAmp:.1,motionSpeed:.7,motionPitch:.05,city:0},{name:"SURGE",start:41.335,end:64.135,keys:8,color:"#ff5fd2",accent:"#58e6ff",energy:.82,rotY:.16,rotZ:-.05,tilt:.03,spread:1.1,y:.16,camZ:15.1,camY:6.2,bloom:.92,spin:.12,motion:"slope",motionAmp:.15,motionSpeed:.85,motionPitch:.075,city:0},{name:"DRIFT",start:64.135,end:75.535,keys:6,color:"#8f9dff",accent:"#ff7bd5",energy:.3,rotY:-.04,rotZ:.02,tilt:.06,spread:.94,y:.45,camZ:17.6,camY:7.1,bloom:.55,spin:.04,motion:"tiltL",motionAmp:.11,motionSpeed:.5,motionPitch:.04,city:0},{name:"PRESSURE",start:75.535,end:84.535,keys:8,color:"#ffa14a",accent:"#ff4fc8",energy:.86,rotY:-.18,rotZ:.06,tilt:-.03,spread:1.08,y:.22,camZ:14.9,camY:6.1,bloom:.95,spin:.14,motion:"zigzag",motionAmp:.145,motionSpeed:1,motionPitch:.07,city:0},{name:"BREAK",start:84.535,end:87.535,keys:4,color:"#e8f4ff",accent:"#8f7bff",energy:.05,rotY:0,rotZ:0,tilt:.04,spread:.86,y:.3,camZ:19,camY:7.6,bloom:.35,spin:.02,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:0},{name:"CRYOUT",start:87.535,end:125.935,keys:8,color:"#ff4fb8",accent:"#54e8ff",energy:1,rotY:.1,rotZ:-.04,tilt:.02,spread:1.12,y:.12,camZ:14.6,camY:6,bloom:1,spin:.16,motion:"orbit",motionAmp:.175,motionSpeed:1,motionPitch:.085,city:0},{name:"AFTERGLOW",start:125.935,end:131.335,keys:4,color:"#6fa8ff",accent:"#c7a4ff",energy:.22,rotY:.02,rotZ:0,tilt:.01,spread:.92,y:.35,camZ:18.2,camY:7.2,bloom:.45,spin:.02,motion:"fan",motionAmp:.055,motionSpeed:.4,motionPitch:.02,city:0},{name:"OUTRO",start:131.335,end:133.5,keys:4,color:"#6f8fff",accent:"#c7a4ff",energy:.05,rotY:0,rotZ:0,tilt:0,spread:.9,y:.6,camZ:19.5,camY:7.8,bloom:.35,spin:.01,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:0}],notes:[{t:4.203,lane:3,type:"hold",dur:1.2},{t:5.335,lane:4,type:"hold",dur:1.2},{t:5.935,lane:5,type:"hold",dur:1.2},{t:7.198,lane:2},{t:7.802,lane:2},{t:8.266,lane:3},{t:9.009,lane:4},{t:9.535,lane:5},{t:10.135,lane:3},{t:11.401,lane:5},{t:11.54,lane:4},{t:11.842,lane:4},{t:12.144,lane:3},{t:13.735,lane:2},{t:14.861,lane:4},{t:15.163,lane:2,type:"hold",dur:1.2},{t:15.464,lane:3},{t:15.604,lane:4},{t:15.906,lane:5},{t:16.045,lane:3},{t:16.208,lane:3},{t:16.649,lane:4,type:"hold",dur:1.2},{t:17.335,lane:3,type:"hold",dur:1.2},{t:17.554,lane:5},{t:18.46,lane:2},{t:19.737,lane:5},{t:19.969,lane:4},{t:20.248,lane:3},{t:20.41,lane:2},{t:20.712,lane:4},{t:20.935,lane:4},{t:21.455,lane:3},{t:21.595,lane:2},{t:22.135,lane:5},{t:23.266,lane:1},{t:23.635,lane:2},{t:23.847,lane:3},{t:24.172,lane:4},{t:24.288,lane:5},{t:24.535,lane:6,type:"hold",dur:1.2},{t:24.835,lane:5},{t:25.135,lane:4},{t:25.435,lane:3},{t:25.735,lane:2},{t:26.035,lane:1,type:"hold",dur:1.2},{t:26.239,lane:5},{t:26.703,lane:5},{t:26.865,lane:4},{t:27.144,lane:2},{t:28.143,lane:3},{t:28.435,lane:4},{t:28.653,lane:3},{t:29.095,lane:5},{t:29.335,lane:6},{t:29.635,lane:4},{t:30.604,lane:5},{t:30.906,lane:3},{t:31.045,lane:2},{t:31.208,lane:1},{t:31.509,lane:4},{t:31.735,lane:6},{t:32.035,lane:4},{t:32.335,lane:5},{t:32.635,lane:3},{t:32.935,lane:2},{t:33.297,lane:1},{t:33.762,lane:4},{t:34.203,lane:1},{t:34.342,lane:3},{t:34.807,lane:5},{t:35.335,lane:6},{t:35.573,lane:4},{t:35.712,lane:2},{t:36.014,lane:1},{t:36.153,lane:3},{t:36.535,lane:1},{t:36.757,lane:2},{t:37.198,lane:3},{t:37.663,lane:4},{t:38.104,lane:5},{t:38.545,lane:6},{t:38.935,lane:1},{t:39.288,lane:4},{t:39.753,lane:2},{t:40.194,lane:5},{t:40.435,lane:3},{t:40.658,lane:6},{t:41.099,lane:4},{t:41.633,lane:0},{t:41.935,lane:3},{t:42.075,lane:5},{t:42.376,lane:6},{t:42.516,lane:4},{t:42.818,lane:2},{t:43.282,lane:1},{t:43.421,lane:0},{t:43.723,lane:0},{t:44.025,lane:4},{t:44.327,lane:4},{t:44.559,lane:6},{t:44.785,lane:3},{t:44.861,lane:5},{t:45.302,lane:2},{t:45.685,lane:0},{t:45.767,lane:1},{t:46.135,lane:0},{t:46.347,lane:1},{t:46.649,lane:2},{t:47.035,lane:3},{t:47.335,lane:4},{t:47.554,lane:5},{t:47.856,lane:6},{t:48.298,lane:7},{t:48.599,lane:4},{t:48.901,lane:4},{t:49.135,lane:1},{t:49.285,lane:5},{t:49.644,lane:2},{t:49.735,lane:6},{t:50.109,lane:3},{t:50.635,lane:7},{t:50.935,lane:4},{t:51.293,lane:4},{t:51.455,lane:1},{t:51.685,lane:5},{t:52.059,lane:2},{t:52.198,lane:6},{t:52.5,lane:3},{t:52.64,lane:7},{t:52.885,lane:4},{t:53.243,lane:4},{t:53.406,lane:2},{t:53.708,lane:4},{t:53.935,lane:3},{t:54.01,lane:5},{t:54.451,lane:1},{t:54.535,lane:6},{t:54.892,lane:7},{t:55.496,lane:7},{t:55.798,lane:3},{t:55.885,lane:5},{t:56.185,lane:5},{t:56.485,lane:6},{t:56.703,lane:4},{t:56.866,lane:2},{t:57.144,lane:1},{t:57.446,lane:0},{t:57.685,lane:0},{t:57.771,lane:3},{t:58.135,lane:0},{t:58.435,lane:2},{t:58.654,lane:4},{t:58.816,lane:6},{t:59.257,lane:7},{t:59.397,lane:5},{t:59.699,lane:3},{t:59.785,lane:1},{t:60.085,lane:0},{t:60.385,lane:2},{t:60.465,lane:4},{t:60.767,lane:0},{t:61.208,lane:2},{t:61.579,lane:4},{t:61.735,lane:6},{t:62.044,lane:7},{t:62.415,lane:5},{t:62.694,lane:3},{t:62.996,lane:0},{t:63.235,lane:1},{t:64.807,lane:2},{t:65.335,lane:6},{t:65.55,lane:5,type:"hold",dur:1.2},{t:66.535,lane:4},{t:67.735,lane:2},{t:68.335,lane:3},{t:68.708,lane:4},{t:68.935,lane:3},{t:70.124,lane:5},{t:70.426,lane:2,type:"hold",dur:1.2},{t:70.844,lane:3},{t:71.169,lane:4,type:"hold",dur:1.2},{t:71.335,lane:3},{t:72.307,lane:5},{t:72.535,lane:3},{t:72.748,lane:5},{t:73.735,lane:2},{t:74.374,lane:4},{t:74.559,lane:1},{t:74.935,lane:1},{t:75.14,lane:3},{t:75.743,lane:2},{t:76.045,lane:4},{t:76.208,lane:3},{t:76.435,lane:5},{t:76.649,lane:1},{t:76.951,lane:0},{t:77.253,lane:0},{t:77.335,lane:3},{t:77.335,lane:7},{t:77.635,lane:3},{t:77.935,lane:5},{t:78.019,lane:6},{t:78.385,lane:4},{t:78.6,lane:2},{t:78.901,lane:1},{t:79.343,lane:0},{t:79.505,lane:3},{t:79.807,lane:0},{t:79.946,lane:3},{t:80.248,lane:5},{t:80.55,lane:6},{t:80.635,lane:4},{t:80.935,lane:2},{t:81.154,lane:1},{t:81.456,lane:0},{t:81.835,lane:0},{t:82.135,lane:4},{t:82.285,lane:6},{t:82.585,lane:6},{t:82.942,lane:3},{t:83.267,lane:5},{t:83.545,lane:2},{t:83.847,lane:0},{t:84.149,lane:1},{t:85.055,lane:3},{t:85.735,lane:2},{t:86.866,lane:4},{t:87.685,lane:7},{t:88.05,lane:4},{t:88.135,lane:6},{t:88.435,lane:3},{t:88.654,lane:5},{t:88.816,lane:2},{t:89.258,lane:0},{t:89.335,lane:4},{t:89.699,lane:4},{t:89.785,lane:6},{t:90.085,lane:3},{t:90.385,lane:5},{t:90.535,lane:2},{t:90.767,lane:0},{t:90.906,lane:1},{t:91.045,lane:4},{t:91.347,lane:4},{t:91.51,lane:6},{t:91.649,lane:3},{t:91.735,lane:0},{t:92.044,lane:2},{t:92.253,lane:4},{t:92.415,lane:6},{t:92.717,lane:7},{t:92.935,lane:5},{t:93.298,lane:3},{t:93.46,lane:1},{t:93.685,lane:0},{t:93.985,lane:2},{t:94.203,lane:7},{t:94.366,lane:6},{t:94.645,lane:5},{t:94.946,lane:4},{t:95.109,lane:3},{t:95.248,lane:2},{t:95.335,lane:1},{t:95.635,lane:0},{t:95.852,lane:5},{t:96.154,lane:6},{t:96.316,lane:5},{t:96.535,lane:2},{t:96.897,lane:4},{t:97.199,lane:3},{t:97.285,lane:5},{t:97.585,lane:1},{t:97.802,lane:6},{t:98.104,lane:7},{t:98.485,lane:7},{t:98.708,lane:4},{t:98.935,lane:2},{t:99.149,lane:4},{t:99.312,lane:3},{t:99.451,lane:5},{t:99.753,lane:1},{t:99.846,lane:0},{t:100.135,lane:0},{t:100.217,lane:2},{t:100.659,lane:2},{t:100.821,lane:4},{t:101.1,lane:3},{t:101.262,lane:5},{t:101.402,lane:1},{t:101.703,lane:3},{t:101.866,lane:5},{t:102.307,lane:7},{t:102.609,lane:6},{t:102.835,lane:4},{t:103.135,lane:2},{t:103.435,lane:0},{t:103.735,lane:4},{t:104.035,lane:4},{t:104.335,lane:6},{t:104.42,lane:3},{t:104.785,lane:5},{t:105.001,lane:2},{t:105.302,lane:0},{t:105.744,lane:1},{t:105.837,lane:4},{t:106.138,lane:0},{t:106.285,lane:1},{t:106.585,lane:2},{t:106.812,lane:3},{t:107.346,lane:4},{t:107.485,lane:5},{t:108.089,lane:6},{t:108.205,lane:7},{t:108.535,lane:1},{t:108.902,lane:1},{t:108.985,lane:2},{t:109.285,lane:3},{t:109.585,lane:4},{t:109.668,lane:5},{t:110.109,lane:6},{t:110.248,lane:7},{t:110.55,lane:2},{t:110.713,lane:1},{t:110.852,lane:2},{t:110.935,lane:7},{t:111.235,lane:6},{t:111.535,lane:5},{t:111.618,lane:4},{t:111.985,lane:3},{t:112.06,lane:2},{t:112.501,lane:1},{t:112.885,lane:0},{t:113.104,lane:5},{t:113.267,lane:6},{t:113.662,lane:2},{t:113.894,lane:4},{t:114.01,lane:3},{t:114.126,lane:5},{t:114.335,lane:1},{t:114.535,lane:6},{t:114.835,lane:7},{t:115.217,lane:7},{t:115.496,lane:4},{t:115.798,lane:0},{t:116.1,lane:3},{t:116.402,lane:5},{t:116.485,lane:6},{t:116.785,lane:4},{t:116.936,lane:2},{t:117.307,lane:1},{t:117.748,lane:0},{t:117.835,lane:3},{t:118.135,lane:0},{t:118.445,lane:3},{t:118.735,lane:5},{t:119.095,lane:6},{t:119.351,lane:4},{t:119.699,lane:2},{t:120.001,lane:1},{t:120.303,lane:0},{t:120.604,lane:4},{t:120.906,lane:4},{t:121.208,lane:6},{t:121.285,lane:3},{t:121.51,lane:5},{t:121.649,lane:2},{t:121.735,lane:0},{t:122.035,lane:1},{t:122.416,lane:4},{t:122.635,lane:6},{t:122.935,lane:0},{t:123.298,lane:1},{t:123.385,lane:2},{t:123.685,lane:3},{t:123.985,lane:4},{t:124.204,lane:5},{t:124.32,lane:6},{t:124.436,lane:7},{t:124.552,lane:2},{t:124.761,lane:1},{t:124.877,lane:2},{t:124.993,lane:3},{t:125.109,lane:4},{t:125.225,lane:5},{t:125.318,lane:6},{t:125.635,lane:4},{t:126.535,lane:4,type:"hold",dur:.98},{t:127.735,lane:4},{t:128.935,lane:5},{t:130.135,lane:2}],events:[{t:5.335,type:"pulse",power:.42},{t:5.355,type:"echo",lane:0,dir:-1,power:.65},{t:7.735,type:"pulse",power:.47},{t:10.135,type:"pulse",power:.47},{t:10.155,type:"echo",lane:1,dir:-1,power:.7},{t:12.535,type:"pulse",power:.63},{t:12.555,type:"echo",lane:0,dir:-1,power:.86},{t:14.935,type:"pulse",power:.51},{t:17.335,type:"pulse",power:.6},{t:17.355,type:"echo",lane:1,dir:-1,power:.83},{t:19.735,type:"pulse",power:.5},{t:22.135,type:"pulse",power:.7},{t:22.155,type:"echo",lane:6,dir:1,power:.93},{t:24.535,type:"pulse",power:.76},{t:24.555,type:"echo",lane:0,dir:-1,power:1},{t:26.935,type:"pulse",power:.77},{t:29.335,type:"pulse",power:.7},{t:29.355,type:"echo",lane:7,dir:1,power:.94},{t:29.935,type:"burst",lane:4,power:1.01},{t:31.735,type:"pulse",power:.74},{t:34.135,type:"pulse",power:.73},{t:34.155,type:"echo",lane:0,dir:-1,power:.96},{t:36.535,type:"pulse",power:.73},{t:38.935,type:"pulse",power:.74},{t:38.955,type:"echo",lane:7,dir:1,power:.98},{t:39.535,type:"burst",lane:2,power:1.05},{t:41.335,type:"pulse",power:.71},{t:41.365,type:"motion",style:"slope",amp:.15,speed:.85,pitch:.075},{t:43.735,type:"pulse",power:.75},{t:46.135,type:"pulse",power:.81},{t:46.735,type:"burst",lane:2,power:1.12},{t:48.535,type:"pulse",power:.78},{t:50.935,type:"pulse",power:.86},{t:53.335,type:"pulse",power:.84},{t:55.735,type:"pulse",power:.86},{t:56.335,type:"burst",lane:5,power:1.18},{t:58.135,type:"pulse",power:.88},{t:60.535,type:"pulse",power:.93},{t:62.935,type:"pulse",power:.89},{t:65.335,type:"pulse",power:.59},{t:65.355,type:"echo",lane:0,dir:-1,power:.83},{t:67.735,type:"pulse",power:.63},{t:70.135,type:"pulse",power:.61},{t:70.155,type:"echo",lane:7,dir:1,power:.85},{t:72.535,type:"pulse",power:.63},{t:74.935,type:"pulse",power:.71},{t:74.955,type:"echo",lane:0,dir:-1,power:.95},{t:75.555,type:"vibe",power:.69},{t:75.565,type:"motion",style:"zigzag",amp:.145,speed:1,pitch:.07},{t:77.335,type:"pulse",power:.7},{t:79.735,type:"pulse",power:.77},{t:82.135,type:"pulse",power:.84},{t:82.735,type:"burst",lane:6,power:1.15},{t:84.535,type:"pulse",power:.61},{t:84.555,type:"echo",lane:0,dir:-1,power:.84},{t:86.935,type:"pulse",power:.85},{t:87.555,type:"vibe",power:.8},{t:87.565,type:"motion",style:"orbit",amp:.175,speed:1,pitch:.085},{t:89.335,type:"pulse",power:.96},{t:91.735,type:"pulse",power:.95},{t:94.135,type:"pulse",power:.95},{t:94.735,type:"burst",lane:5,power:1.25},{t:96.535,type:"pulse",power:.96},{t:98.935,type:"pulse",power:.96},{t:101.335,type:"pulse",power:.96},{t:103.735,type:"pulse",power:.96},{t:104.335,type:"burst",lane:6,power:1.25},{t:106.135,type:"pulse",power:.9},{t:108.535,type:"pulse",power:.91},{t:110.935,type:"pulse",power:.98},{t:113.335,type:"pulse",power:1.01},{t:113.935,type:"burst",lane:4,power:1.25},{t:115.735,type:"pulse",power:.99},{t:118.135,type:"pulse",power:.99},{t:120.535,type:"pulse",power:.97},{t:122.935,type:"pulse",power:1.02},{t:123.535,type:"burst",lane:2,power:1.25},{t:125.335,type:"pulse",power:.9},{t:127.735,type:"pulse",power:.73},{t:127.755,type:"echo",lane:0,dir:-1,power:.96},{t:130.135,type:"pulse",power:.52}],ghosts:[{t:3.575,lane:0,type:"sweep"},{t:3.63,lane:1,type:"sweep"},{t:3.685,lane:6,type:"sweep"},{t:3.74,lane:7,type:"sweep"},{t:8.335,lane:0,type:"bounce"},{t:8.455,lane:1,type:"bounce"},{t:8.575,lane:6,type:"bounce"},{t:8.695,lane:7,type:"bounce"},{t:12.575,lane:0,type:"sweep"},{t:12.63,lane:1,type:"sweep"},{t:12.685,lane:6,type:"sweep"},{t:12.74,lane:7,type:"sweep"},{t:17.335,lane:0,type:"bounce"},{t:17.455,lane:1,type:"bounce"},{t:17.575,lane:6,type:"bounce"},{t:17.695,lane:7,type:"bounce"},{t:22.775,lane:0,type:"sweep"},{t:22.83,lane:7,type:"sweep"},{t:27.535,lane:0,type:"bounce"},{t:27.655,lane:7,type:"bounce"},{t:64.175,lane:0,type:"sweep"},{t:64.23,lane:7,type:"sweep"},{t:68.935,lane:0,type:"bounce"},{t:69.055,lane:7,type:"bounce"},{t:84.575,lane:0,type:"sweep"},{t:84.63,lane:1,type:"sweep"},{t:84.685,lane:6,type:"sweep"},{t:84.74,lane:7,type:"sweep"},{t:125.975,lane:0,type:"sweep"},{t:126.03,lane:1,type:"sweep"},{t:126.085,lane:6,type:"sweep"},{t:126.14,lane:7,type:"sweep"},{t:130.735,lane:0,type:"bounce"},{t:130.855,lane:1,type:"bounce"},{t:130.975,lane:6,type:"bounce"},{t:131.095,lane:7,type:"bounce"},{t:131.375,lane:0,type:"sweep"},{t:131.43,lane:1,type:"sweep"},{t:131.485,lane:6,type:"sweep"},{t:131.54,lane:7,type:"sweep"}]},sd={song:{title:"WORLD YEARNING FOR AN END",shortTitle:"WORLD YEARNING",artist:"ORIGINAL TRACK",bpm:120,duration:143.47,chartEnd:142.55,beatOffset:.04,difficulty:"HARD",laneLabel:"4 · 6",thumbFriendly:!0,fadeStart:140.8,fadeEnd:142.9},sections:[{name:"INTRO",start:.04,end:10.04,keys:4,color:"#7ec8ff",accent:"#ffb45e",energy:.16,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.6,camY:6.9,bloom:.5,spin:.03,motion:"fan",motionAmp:.05,motionSpeed:.45,motionPitch:.02,city:1},{name:"VERSE",start:10.04,end:22.04,keys:4,color:"#66e0ff",accent:"#ff8ac8",energy:.5,rotY:.03,rotZ:-.015,tilt:.012,spread:1.02,y:.04,camZ:16.9,camY:6.7,bloom:.68,spin:.05,motion:"wave",motionAmp:.075,motionSpeed:.6,motionPitch:.035,city:.16},{name:"BUILD",start:22.04,end:38.04,keys:6,color:"#84a6ff",accent:"#ffc46b",energy:.66,rotY:-.06,rotZ:.025,tilt:-.015,spread:1.05,y:.08,camZ:16.2,camY:6.5,bloom:.8,spin:.07,motion:"fan",motionAmp:.1,motionSpeed:.7,motionPitch:.05,city:.12},{name:"LIFT",start:38.04,end:54.04,keys:6,color:"#b58cff",accent:"#ffa25e",energy:.8,rotY:.1,rotZ:-.04,tilt:.025,spread:1.08,y:.12,camZ:15.5,camY:6.3,bloom:.9,spin:.1,motion:"slope",motionAmp:.13,motionSpeed:.82,motionPitch:.065,city:.2},{name:"CHORUS",start:54.04,end:70.04,keys:6,color:"#ff8f6b",accent:"#ffe27a",energy:.92,rotY:-.13,rotZ:.05,tilt:-.025,spread:1.1,y:.15,camZ:15.1,camY:6.2,bloom:.96,spin:.12,motion:"wave",motionAmp:.15,motionSpeed:.95,motionPitch:.08,city:.16},{name:"DRIVE",start:70.04,end:86.04,keys:6,color:"#ff5f9e",accent:"#7af0ff",energy:1,rotY:.15,rotZ:-.055,tilt:.03,spread:1.12,y:.18,camZ:14.9,camY:6.1,bloom:1,spin:.14,motion:"zigzag",motionAmp:.18,motionSpeed:1.05,motionPitch:.095,city:.24},{name:"BREAK",start:86.04,end:98.04,keys:4,color:"#d9eaff",accent:"#8f9dff",energy:.34,rotY:-.02,rotZ:.01,tilt:.05,spread:.93,y:.4,camZ:18.1,camY:7.3,bloom:.55,spin:.035,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:.62},{name:"RETURN",start:98.04,end:122.04,keys:6,color:"#63e6d8",accent:"#ff8ac8",energy:.82,rotY:.04,rotZ:-.02,tilt:.015,spread:1.06,y:.1,camZ:15.7,camY:6.4,bloom:.88,spin:.09,motion:"orbit",motionAmp:.14,motionSpeed:.9,motionPitch:.07,city:.14},{name:"FINAL",start:122.04,end:138.04,keys:6,color:"#ff6fc4",accent:"#ffd36b",energy:.9,rotY:-.1,rotZ:.04,tilt:-.02,spread:1.09,y:.14,camZ:15,camY:6.2,bloom:.98,spin:.13,motion:"orbit",motionAmp:.17,motionSpeed:1,motionPitch:.085,city:.2},{name:"OUTRO",start:138.04,end:142.55,keys:4,color:"#7fa8ff",accent:"#d7c4ff",energy:.2,rotY:0,rotZ:0,tilt:.03,spread:.9,y:.3,camZ:19.2,camY:7.6,bloom:.42,spin:.02,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0,city:.72}],notes:[{t:2.04,lane:3,type:"hold",dur:1},{t:2.54,lane:2},{t:3.553,lane:4},{t:4.04,lane:4,type:"hold",dur:1},{t:4.551,lane:5,type:"hold",dur:1},{t:5.55,lane:2},{t:6.037,lane:3},{t:6.54,lane:2},{t:7.036,lane:3},{t:7.546,lane:4},{t:8.04,lane:3},{t:8.54,lane:5},{t:9.543,lane:2},{t:10.194,lane:4},{t:10.356,lane:3},{t:10.79,lane:3},{t:11.029,lane:2},{t:11.517,lane:4},{t:11.79,lane:4},{t:12.028,lane:3},{t:12.864,lane:3},{t:13.05,lane:2},{t:13.79,lane:4},{t:14.048,lane:2},{t:14.861,lane:4},{t:15.047,lane:3},{t:15.534,lane:5,type:"hold",dur:1},{t:15.859,lane:4},{t:16.045,lane:4},{t:16.533,lane:2},{t:16.858,lane:3},{t:17.043,lane:3},{t:17.531,lane:4},{t:17.717,lane:2},{t:18.042,lane:4},{t:18.204,lane:2,type:"hold",dur:1},{t:18.855,lane:3},{t:19.04,lane:3},{t:20.039,lane:4},{t:20.201,lane:3},{t:20.79,lane:5},{t:21.037,lane:2},{t:21.2,lane:4},{t:22.198,lane:2},{t:22.547,lane:4},{t:22.872,lane:6},{t:23.034,lane:5},{t:23.197,lane:3},{t:23.545,lane:1},{t:23.87,lane:2},{t:24.033,lane:4},{t:25.031,lane:6,type:"hold",dur:1},{t:25.29,lane:5},{t:25.542,lane:4},{t:25.867,lane:3},{t:26.03,lane:2},{t:26.29,lane:5},{t:26.54,lane:5},{t:26.865,lane:4},{t:27.028,lane:3},{t:27.29,lane:2},{t:27.539,lane:1},{t:27.864,lane:5},{t:28.026,lane:5},{t:28.212,lane:4},{t:28.537,lane:4},{t:28.862,lane:2},{t:29.048,lane:5},{t:29.29,lane:3},{t:29.536,lane:6},{t:30.047,lane:3},{t:30.29,lane:5},{t:30.534,lane:2,type:"hold",dur:1},{t:30.859,lane:4},{t:31.045,lane:1},{t:31.29,lane:3},{t:32.044,lane:1},{t:32.29,lane:3},{t:33.042,lane:5},{t:33.29,lane:6},{t:33.53,lane:4},{t:34.04,lane:1},{t:34.203,lane:3},{t:34.876,lane:5},{t:35.039,lane:6},{t:35.29,lane:4},{t:35.875,lane:2},{t:36.037,lane:1},{t:36.223,lane:2},{t:37.036,lane:4},{t:37.291,lane:6},{t:38.22,lane:6},{t:38.708,lane:5},{t:39.033,lane:4},{t:39.29,lane:3},{t:39.706,lane:2},{t:39.869,lane:1},{t:40.031,lane:6},{t:40.217,lane:3},{t:40.38,lane:4},{t:40.705,lane:4},{t:41.03,lane:3},{t:41.285,lane:5},{t:41.378,lane:6},{t:41.703,lane:3},{t:41.866,lane:4},{t:42.028,lane:4},{t:42.79,lane:2},{t:43.05,lane:3},{t:43.212,lane:4},{t:43.375,lane:3},{t:43.7,lane:5},{t:43.862,lane:6},{t:44.048,lane:3},{t:44.373,lane:5},{t:44.698,lane:2},{t:44.79,lane:4},{t:45.047,lane:1},{t:45.209,lane:3},{t:45.372,lane:5},{t:45.697,lane:5},{t:45.859,lane:2},{t:46.045,lane:1},{t:46.37,lane:3},{t:46.79,lane:5},{t:47.044,lane:6},{t:47.206,lane:4},{t:47.369,lane:2},{t:47.79,lane:1},{t:48.042,lane:1},{t:48.29,lane:2},{t:49.041,lane:3},{t:49.296,lane:4},{t:49.876,lane:5},{t:50.039,lane:6},{t:50.225,lane:2},{t:51.037,lane:2},{t:51.363,lane:3},{t:51.873,lane:4},{t:52.036,lane:5},{t:52.222,lane:6},{t:52.547,lane:5},{t:52.709,lane:4},{t:53.034,lane:3},{t:53.29,lane:2},{t:53.708,lane:1},{t:53.79,lane:5},{t:54.219,lane:2},{t:54.381,lane:3},{t:54.706,lane:4},{t:54.79,lane:3},{t:55.031,lane:5},{t:55.124,lane:6},{t:55.705,lane:3},{t:55.79,lane:4},{t:56.03,lane:4},{t:56.308,lane:6},{t:56.54,lane:4},{t:56.79,lane:5},{t:57.04,lane:3},{t:57.54,lane:2},{t:58.05,lane:6},{t:58.375,lane:4},{t:58.7,lane:5},{t:59.025,lane:3},{t:59.35,lane:2},{t:59.722,lane:1},{t:60.047,lane:1},{t:60.325,lane:3},{t:60.627,lane:5},{t:60.86,lane:6},{t:61.04,lane:4},{t:61.29,lane:2},{t:61.37,lane:1},{t:61.695,lane:3},{t:62.044,lane:1},{t:62.276,lane:2},{t:62.531,lane:3},{t:62.717,lane:4},{t:62.973,lane:5},{t:63.042,lane:6},{t:63.228,lane:2},{t:63.623,lane:2},{t:63.808,lane:3},{t:64.064,lane:1},{t:64.134,lane:4},{t:64.366,lane:2},{t:64.714,lane:5},{t:64.79,lane:3},{t:65.04,lane:6},{t:65.132,lane:4},{t:65.387,lane:4},{t:65.643,lane:2},{t:65.79,lane:5},{t:66.038,lane:3},{t:66.293,lane:1},{t:66.548,lane:4},{t:66.99,lane:2},{t:67.04,lane:5},{t:67.361,lane:3},{t:67.709,lane:6},{t:68.034,lane:1},{t:68.22,lane:2},{t:68.36,lane:3},{t:68.708,lane:4},{t:69.033,lane:3},{t:69.381,lane:5},{t:69.706,lane:6},{t:69.79,lane:3},{t:70.217,lane:6},{t:70.38,lane:4},{t:70.705,lane:5},{t:71.03,lane:3},{t:71.29,lane:2},{t:71.378,lane:1},{t:71.703,lane:4},{t:71.889,lane:5},{t:72.028,lane:3},{t:72.29,lane:2},{t:72.562,lane:4},{t:72.79,lane:6},{t:73.05,lane:5},{t:73.29,lane:3},{t:73.54,lane:1},{t:73.79,lane:2},{t:74.048,lane:2},{t:74.374,lane:4},{t:74.699,lane:6},{t:74.79,lane:5},{t:75.047,lane:3},{t:75.372,lane:1},{t:75.697,lane:2},{t:75.79,lane:4},{t:76.045,lane:1},{t:76.29,lane:2},{t:76.37,lane:3},{t:76.696,lane:4},{t:76.881,lane:5},{t:77.044,lane:6},{t:77.23,lane:2},{t:77.369,lane:3},{t:77.717,lane:3},{t:78.042,lane:1},{t:78.29,lane:4},{t:78.367,lane:2},{t:78.692,lane:5},{t:78.878,lane:3},{t:79.041,lane:6},{t:79.29,lane:4},{t:79.366,lane:2},{t:79.714,lane:2},{t:80.039,lane:5},{t:80.364,lane:3},{t:80.713,lane:5},{t:81.038,lane:2},{t:81.223,lane:4},{t:81.363,lane:1},{t:81.711,lane:3},{t:81.874,lane:5},{t:82.036,lane:5},{t:82.338,lane:3},{t:82.54,lane:5},{t:82.872,lane:2},{t:83.035,lane:4},{t:83.29,lane:1},{t:83.708,lane:3},{t:83.79,lane:5},{t:84.033,lane:5},{t:84.288,lane:6},{t:84.544,lane:4},{t:84.637,lane:5},{t:84.869,lane:3},{t:85.031,lane:2},{t:85.287,lane:1},{t:85.821,lane:4},{t:86.494,lane:2,type:"hold",dur:1},{t:87.052,lane:3},{t:87.377,lane:4},{t:87.539,lane:5},{t:88.04,lane:3},{t:89.049,lane:5},{t:89.699,lane:4,type:"hold",dur:1},{t:90.047,lane:3},{t:91.045,lane:5,type:"hold",dur:1},{t:92.044,lane:2},{t:92.369,lane:3},{t:93.042,lane:3},{t:93.693,lane:4},{t:94.041,lane:3},{t:94.528,lane:2},{t:95.039,lane:4},{t:95.527,lane:5},{t:95.968,lane:3},{t:96.2,lane:2},{t:96.549,lane:4},{t:97.036,lane:3},{t:97.199,lane:5},{t:97.71,lane:4},{t:98.29,lane:1},{t:98.545,lane:4},{t:99.04,lane:2},{t:99.219,lane:5},{t:99.706,lane:3},{t:99.79,lane:6},{t:100.032,lane:1},{t:100.217,lane:2},{t:100.612,lane:3},{t:100.79,lane:4},{t:101.03,lane:3},{t:101.216,lane:5},{t:101.541,lane:6},{t:101.79,lane:3},{t:102.028,lane:3},{t:102.29,lane:6},{t:102.539,lane:4},{t:102.702,lane:5},{t:102.888,lane:3},{t:103.05,lane:2},{t:103.29,lane:1},{t:103.7,lane:4},{t:103.79,lane:5},{t:104.049,lane:2},{t:104.29,lane:4},{t:104.559,lane:6},{t:104.79,lane:5},{t:105.047,lane:3},{t:105.29,lane:1},{t:105.558,lane:2},{t:105.79,lane:4},{t:106.046,lane:2},{t:106.29,lane:4},{t:106.556,lane:6},{t:106.719,lane:5},{t:107.044,lane:3},{t:107.299,lane:1},{t:107.555,lane:2},{t:107.717,lane:4},{t:108.042,lane:1},{t:108.368,lane:2},{t:108.716,lane:3},{t:108.79,lane:4},{t:109.041,lane:5},{t:109.79,lane:6},{t:110.039,lane:1},{t:110.225,lane:4},{t:110.713,lane:4},{t:111.038,lane:2},{t:111.293,lane:5},{t:111.711,lane:3},{t:112.04,lane:3},{t:112.222,lane:5},{t:112.547,lane:2},{t:113.035,lane:4},{t:113.22,lane:1},{t:113.79,lane:3},{t:114.033,lane:3},{t:114.219,lane:5},{t:114.544,lane:5},{t:114.79,lane:2},{t:115.032,lane:4},{t:115.217,lane:1},{t:115.542,lane:6},{t:115.79,lane:3},{t:116.04,lane:6},{t:116.216,lane:4},{t:116.541,lane:5},{t:116.79,lane:3},{t:117.052,lane:2},{t:117.29,lane:1},{t:117.539,lane:6},{t:117.864,lane:4},{t:118.05,lane:2},{t:118.213,lane:4},{t:118.375,lane:6},{t:118.79,lane:5},{t:119.049,lane:3},{t:120.04,lane:6},{t:120.79,lane:5},{t:121.046,lane:4},{t:121.208,lane:3},{t:121.371,lane:2},{t:121.696,lane:1},{t:121.858,lane:5},{t:122.207,lane:6},{t:122.369,lane:5},{t:122.857,lane:4},{t:123.043,lane:3},{t:123.205,lane:2},{t:123.368,lane:1},{t:123.855,lane:5},{t:124.041,lane:1},{t:124.29,lane:4},{t:124.529,lane:2},{t:124.854,lane:5},{t:125.039,lane:3},{t:125.365,lane:6},{t:125.79,lane:4},{t:126.038,lane:4},{t:126.2,lane:3},{t:126.79,lane:5},{t:127.036,lane:2},{t:127.199,lane:4},{t:127.71,lane:1},{t:127.79,lane:3},{t:128.035,lane:3},{t:128.36,lane:1},{t:128.522,lane:3},{t:128.79,lane:5},{t:129.033,lane:6},{t:129.29,lane:4},{t:129.521,lane:2},{t:129.79,lane:1},{t:130.032,lane:3},{t:130.29,lane:1},{t:130.38,lane:3},{t:130.705,lane:5},{t:130.868,lane:6},{t:131.04,lane:4},{t:131.29,lane:2},{t:131.704,lane:1},{t:131.866,lane:3},{t:132.029,lane:5},{t:132.29,lane:2},{t:132.54,lane:4},{t:132.79,lane:6},{t:133.027,lane:5},{t:133.29,lane:3},{t:133.538,lane:1},{t:133.863,lane:2},{t:134.049,lane:6},{t:134.29,lane:5},{t:134.536,lane:4},{t:134.861,lane:3},{t:135.047,lane:2},{t:135.29,lane:1},{t:135.697,lane:5},{t:135.86,lane:4},{t:136.046,lane:2},{t:136.29,lane:3},{t:136.533,lane:4},{t:136.858,lane:3},{t:137.044,lane:5},{t:137.29,lane:6},{t:137.857,lane:3}],events:[{t:.04,type:"pulse",power:.3},{t:.06,type:"echo",lane:0,dir:-1,power:.52},{t:2.04,type:"pulse",power:.4},{t:4.04,type:"pulse",power:.52},{t:4.06,type:"echo",lane:1,dir:-1,power:.75},{t:6.04,type:"pulse",power:.49},{t:8.04,type:"pulse",power:.71},{t:8.06,type:"echo",lane:6,dir:1,power:.95},{t:10.04,type:"pulse",power:.76},{t:10.06,type:"echo",lane:0,dir:-1,power:1},{t:12.04,type:"pulse",power:.79},{t:14.04,type:"pulse",power:.82},{t:14.06,type:"echo",lane:1,dir:-1,power:1.06},{t:16.04,type:"pulse",power:.82},{t:18.04,type:"pulse",power:.83},{t:18.06,type:"echo",lane:6,dir:1,power:1.07},{t:20.04,type:"pulse",power:.83},{t:22.04,type:"pulse",power:.83},{t:22.06,type:"echo",lane:0,dir:-1,power:1.07},{t:24.04,type:"pulse",power:.78},{t:26.04,type:"pulse",power:.84},{t:26.06,type:"echo",lane:7,dir:1,power:1.08},{t:26.54,type:"burst",lane:5,power:1.15},{t:28.04,type:"pulse",power:.83},{t:30.04,type:"pulse",power:.79},{t:30.06,type:"echo",lane:0,dir:-1,power:1.04},{t:32.04,type:"pulse",power:.78},{t:34.04,type:"pulse",power:.79},{t:34.06,type:"echo",lane:7,dir:1,power:1.04},{t:34.54,type:"burst",lane:5,power:1.11},{t:36.04,type:"pulse",power:.78},{t:38.04,type:"pulse",power:.8},{t:38.06,type:"echo",lane:0,dir:-1,power:1.04},{t:38.07,type:"motion",style:"slope",amp:.13,speed:.82,pitch:.065},{t:40.04,type:"pulse",power:.8},{t:42.04,type:"pulse",power:.79},{t:42.06,type:"echo",lane:7,dir:1,power:1.03},{t:42.54,type:"burst",lane:2,power:1.1},{t:44.04,type:"pulse",power:.79},{t:46.04,type:"pulse",power:.75},{t:46.06,type:"echo",lane:0,dir:-1,power:.99},{t:48.04,type:"pulse",power:.78},{t:50.04,type:"pulse",power:.79},{t:50.06,type:"echo",lane:7,dir:1,power:1.04},{t:50.54,type:"burst",lane:2,power:1.11},{t:52.04,type:"pulse",power:.79},{t:54.04,type:"pulse",power:.83},{t:54.06,type:"echo",lane:0,dir:-1,power:1.07},{t:54.06,type:"vibe",power:.74},{t:54.07,type:"motion",style:"wave",amp:.15,speed:.95,pitch:.08},{t:56.04,type:"pulse",power:.71},{t:58.04,type:"pulse",power:.7},{t:58.06,type:"echo",lane:7,dir:1,power:.93},{t:58.54,type:"burst",lane:5,power:1},{t:60.04,type:"pulse",power:.78},{t:62.04,type:"pulse",power:.88},{t:62.06,type:"echo",lane:0,dir:-1,power:1.12},{t:64.04,type:"pulse",power:.84},{t:66.04,type:"pulse",power:.82},{t:66.06,type:"echo",lane:7,dir:1,power:1.07},{t:66.54,type:"burst",lane:4,power:1.14},{t:68.04,type:"pulse",power:.86},{t:70.04,type:"pulse",power:.84},{t:70.06,type:"echo",lane:0,dir:-1,power:1.08},{t:70.06,type:"vibe",power:.8},{t:70.07,type:"motion",style:"zigzag",amp:.18,speed:1.05,pitch:.095},{t:72.04,type:"pulse",power:.87},{t:74.04,type:"pulse",power:.89},{t:74.06,type:"echo",lane:7,dir:1,power:1.14},{t:74.54,type:"burst",lane:6,power:1.21},{t:76.04,type:"pulse",power:.89},{t:78.04,type:"pulse",power:.82},{t:78.06,type:"echo",lane:0,dir:-1,power:1.07},{t:80.04,type:"pulse",power:.89},{t:82.04,type:"pulse",power:.88},{t:82.06,type:"echo",lane:7,dir:1,power:1.13},{t:82.54,type:"burst",lane:5,power:1.2},{t:84.04,type:"pulse",power:.89},{t:86.04,type:"pulse",power:.7},{t:86.06,type:"echo",lane:0,dir:-1,power:.93},{t:88.04,type:"pulse",power:.7},{t:90.04,type:"pulse",power:.65},{t:90.06,type:"echo",lane:1,dir:-1,power:.89},{t:92.04,type:"pulse",power:.63},{t:94.04,type:"pulse",power:.74},{t:94.06,type:"echo",lane:6,dir:1,power:.98},{t:96.04,type:"pulse",power:.71},{t:98.04,type:"pulse",power:.71},{t:98.06,type:"echo",lane:0,dir:-1,power:.95},{t:98.07,type:"motion",style:"orbit",amp:.14,speed:.9,pitch:.07},{t:100.04,type:"pulse",power:.74},{t:102.04,type:"pulse",power:.73},{t:102.06,type:"echo",lane:7,dir:1,power:.97},{t:102.54,type:"burst",lane:4,power:1.04},{t:104.04,type:"pulse",power:.75},{t:106.04,type:"pulse",power:.75},{t:106.06,type:"echo",lane:0,dir:-1,power:.99},{t:108.04,type:"pulse",power:.77},{t:110.04,type:"pulse",power:.71},{t:110.06,type:"echo",lane:7,dir:1,power:.95},{t:110.54,type:"burst",lane:4,power:1.01},{t:112.04,type:"pulse",power:.7},{t:114.04,type:"pulse",power:.71},{t:114.06,type:"echo",lane:0,dir:-1,power:.95},{t:116.04,type:"pulse",power:.75},{t:118.04,type:"pulse",power:.69},{t:118.06,type:"echo",lane:7,dir:1,power:.93},{t:118.54,type:"burst",lane:6,power:1},{t:120.04,type:"pulse",power:.68},{t:122.04,type:"pulse",power:.75},{t:122.06,type:"echo",lane:0,dir:-1,power:.99},{t:122.06,type:"vibe",power:.72},{t:122.07,type:"motion",style:"orbit",amp:.17,speed:1,pitch:.085},{t:124.04,type:"pulse",power:.76},{t:126.04,type:"pulse",power:.75},{t:126.06,type:"echo",lane:7,dir:1,power:.99},{t:126.54,type:"burst",lane:5,power:1.06},{t:128.04,type:"pulse",power:.75},{t:130.04,type:"pulse",power:.75},{t:130.06,type:"echo",lane:0,dir:-1,power:.99},{t:132.04,type:"pulse",power:.74},{t:134.04,type:"pulse",power:.75},{t:134.06,type:"echo",lane:7,dir:1,power:.99},{t:134.54,type:"burst",lane:4,power:1.06},{t:136.04,type:"pulse",power:.75}],ghosts:[{t:.08,lane:0,type:"sweep"},{t:.135,lane:1,type:"sweep"},{t:.19,lane:6,type:"sweep"},{t:.245,lane:7,type:"sweep"},{t:4.04,lane:0,type:"bounce"},{t:4.16,lane:1,type:"bounce"},{t:4.28,lane:6,type:"bounce"},{t:4.4,lane:7,type:"bounce"},{t:10.08,lane:0,type:"sweep"},{t:10.135,lane:1,type:"sweep"},{t:10.19,lane:6,type:"sweep"},{t:10.245,lane:7,type:"sweep"},{t:14.04,lane:0,type:"bounce"},{t:14.16,lane:1,type:"bounce"},{t:14.28,lane:6,type:"bounce"},{t:14.4,lane:7,type:"bounce"},{t:22.08,lane:0,type:"sweep"},{t:22.135,lane:7,type:"sweep"},{t:26.04,lane:0,type:"bounce"},{t:26.16,lane:7,type:"bounce"},{t:38.08,lane:0,type:"sweep"},{t:38.135,lane:7,type:"sweep"},{t:42.04,lane:0,type:"bounce"},{t:42.16,lane:7,type:"bounce"},{t:54.08,lane:0,type:"sweep"},{t:54.135,lane:7,type:"sweep"},{t:58.04,lane:0,type:"bounce"},{t:58.16,lane:7,type:"bounce"},{t:70.08,lane:0,type:"sweep"},{t:70.135,lane:7,type:"sweep"},{t:74.04,lane:0,type:"bounce"},{t:74.16,lane:7,type:"bounce"},{t:86.08,lane:0,type:"sweep"},{t:86.135,lane:1,type:"sweep"},{t:86.19,lane:6,type:"sweep"},{t:86.245,lane:7,type:"sweep"},{t:90.04,lane:0,type:"bounce"},{t:90.16,lane:1,type:"bounce"},{t:90.28,lane:6,type:"bounce"},{t:90.4,lane:7,type:"bounce"},{t:98.08,lane:0,type:"sweep"},{t:98.135,lane:7,type:"sweep"},{t:102.04,lane:0,type:"bounce"},{t:102.16,lane:7,type:"bounce"},{t:122.08,lane:0,type:"sweep"},{t:122.135,lane:7,type:"sweep"},{t:126.04,lane:0,type:"bounce"},{t:126.16,lane:7,type:"bounce"},{t:138.08,lane:0,type:"sweep"},{t:138.135,lane:1,type:"sweep"},{t:138.19,lane:6,type:"sweep"},{t:138.245,lane:7,type:"sweep"},{t:142.04,lane:0,type:"bounce"},{t:142.16,lane:1,type:"bounce"},{t:142.28,lane:6,type:"bounce"},{t:142.4,lane:7,type:"bounce"}]},ld={song:{title:"CHRONOSTASIS",shortTitle:"CHRONOSTASIS",artist:"ORIGINAL TRACK",bpm:99.4,duration:142.1,chartEnd:139.85,beatOffset:.323,difficulty:"EXPERT",laneLabel:"4 · 6",thumbFriendly:!0,fadeStart:138.4,fadeEnd:140},sections:[{name:"INTRO",start:0,end:18.431,keys:4,color:"#8ecfff",accent:"#ffd166",energy:.22,rotY:0,rotZ:0,tilt:.02,spread:.94,y:.28,camZ:18.8,camY:7.4,bloom:.48,spin:.02,density:.22,city:.58,clock:"off",motion:"fan",motionAmp:.05,motionSpeed:.45,motionPitch:.02},{name:"GEARS",start:18.431,end:24.483,keys:4,color:"#6fe3ff",accent:"#ffd166",energy:.5,rotY:.02,rotZ:-.012,tilt:.01,spread:1,y:.12,camZ:17.4,camY:7,bloom:.68,spin:.05,density:.5,city:.38,clock:"run",motion:"fan",motionAmp:.06,motionSpeed:.55,motionPitch:.025},{name:"VERSE",start:24.483,end:42.877,keys:6,color:"#78b8ff",accent:"#ffe29a",energy:.64,rotY:.04,rotZ:-.02,tilt:.015,spread:1.04,y:.08,camZ:16.7,camY:6.7,bloom:.78,spin:.07,density:.62,city:.2,clock:"run",motion:"wave",motionAmp:.075,motionSpeed:.6,motionPitch:.035},{name:"PENDULUM",start:42.877,end:66.417,keys:6,color:"#b18cff",accent:"#ffd166",energy:.8,rotY:-.09,rotZ:.035,tilt:-.02,spread:1.08,y:.14,camZ:15.8,camY:6.4,bloom:.9,spin:.1,density:.76,city:.14,clock:"run",motion:"wave",motionAmp:.16,motionSpeed:.95,motionPitch:.08},{name:"STASIS",start:66.417,end:76.075,keys:4,color:"#dfeaff",accent:"#9aa8ff",energy:.26,rotY:-.02,rotZ:.01,tilt:.04,spread:.92,y:.42,camZ:18.4,camY:7.5,bloom:.5,spin:.02,density:0,city:.7,clock:"freeze",swing:!0,motion:"flat",motionAmp:.02,motionSpeed:.2,motionPitch:.01},{name:"RETURN",start:76.075,end:90.561,keys:6,color:"#64e6d8",accent:"#ffe29a",energy:.76,rotY:.05,rotZ:-.02,tilt:.012,spread:1.05,y:.1,camZ:16.2,camY:6.6,bloom:.86,spin:.08,density:.7,city:.16,clock:"run",motion:"orbit",motionAmp:.14,motionSpeed:.9,motionPitch:.07},{name:"TICK",start:90.561,end:110.48,keys:6,color:"#ffd166",accent:"#7af0ff",energy:.84,rotY:-.1,rotZ:.04,tilt:-.02,spread:1.08,y:.15,camZ:15.6,camY:6.3,bloom:.94,spin:.11,density:.8,city:.2,clock:"run",motion:"zigzag",motionAmp:.17,motionSpeed:1.15,motionPitch:.09},{name:"FINAL",start:110.48,end:129.795,keys:6,color:"#ff9f6b",accent:"#ffd166",energy:.94,rotY:.12,rotZ:-.045,tilt:.025,spread:1.1,y:.18,camZ:15,camY:6.1,bloom:1,spin:.14,density:.9,city:.24,clock:"final",motion:"orbit",motionAmp:.17,motionSpeed:1,motionPitch:.085},{name:"OUTRO",start:129.795,end:140,keys:4,color:"#9fb8ff",accent:"#d7c4ff",energy:.3,rotY:0,rotZ:0,tilt:.03,spread:.9,y:.34,camZ:19.2,camY:7.6,bloom:.46,spin:.02,density:.28,city:.72,clock:"off",holds:1,motion:"flat",motionAmp:0,motionSpeed:.3,motionPitch:0}],notes:[{t:3.924,lane:2,type:"hold",dur:1.207},{t:4.551,lane:4},{t:4.853,lane:5},{t:5.155,lane:4},{t:5.457,lane:5},{t:6.084,lane:3},{t:6.385,lane:3},{t:6.687,lane:4},{t:6.989,lane:5},{t:7.291,lane:3},{t:7.593,lane:2},{t:7.918,lane:3},{t:8.22,lane:4},{t:8.522,lane:5},{t:8.824,lane:3},{t:9.451,lane:3},{t:9.752,lane:4},{t:10.054,lane:3},{t:10.356,lane:5},{t:10.658,lane:2,type:"hold",dur:1.207},{t:11.726,lane:4},{t:12.469,lane:3,type:"hold",dur:1.207},{t:13.603,lane:5},{t:14.791,lane:2},{t:16.017,lane:2},{t:17.229,lane:3},{t:17.856,lane:2},{t:19.389,lane:4},{t:19.639,lane:4},{t:19.807,lane:5},{t:20.271,lane:3},{t:20.434,lane:4},{t:20.596,lane:5},{t:20.735,lane:2},{t:20.898,lane:2},{t:21.362,lane:3,type:"hold",dur:1.207},{t:21.595,lane:4},{t:21.664,lane:5,type:"hold",dur:1.207},{t:21.989,lane:2},{t:22.732,lane:4},{t:23.261,lane:5},{t:23.661,lane:3},{t:23.963,lane:3},{t:24.166,lane:4},{t:24.729,lane:6},{t:24.869,lane:4},{t:25.17,lane:5},{t:25.333,lane:3},{t:25.658,lane:2},{t:25.797,lane:1},{t:26.099,lane:4},{t:26.262,lane:5},{t:26.401,lane:3},{t:26.882,lane:3},{t:27.492,lane:2},{t:27.934,lane:4},{t:28.096,lane:6},{t:28.398,lane:5},{t:28.561,lane:3},{t:29.164,lane:1},{t:29.327,lane:6},{t:29.791,lane:5},{t:29.931,lane:4},{t:30.395,lane:3},{t:30.557,lane:2},{t:30.859,lane:1},{t:30.999,lane:5},{t:31.161,lane:4},{t:31.626,lane:4},{t:31.765,lane:6,type:"hold",dur:1.207},{t:32.067,lane:5},{t:32.229,lane:4},{t:32.392,lane:3},{t:32.919,lane:2},{t:33.158,lane:1},{t:33.46,lane:5},{t:33.599,lane:4},{t:34.064,lane:4},{t:34.226,lane:1,type:"hold",dur:1.207},{t:34.691,lane:4},{t:34.83,lane:2},{t:35.294,lane:5},{t:35.434,lane:3},{t:35.898,lane:6},{t:36.061,lane:4},{t:36.525,lane:4},{t:36.827,lane:3},{t:37.291,lane:5},{t:37.732,lane:2},{t:37.895,lane:4},{t:38.359,lane:1},{t:38.499,lane:3},{t:38.963,lane:1},{t:39.126,lane:3},{t:39.59,lane:5},{t:39.729,lane:6},{t:40.194,lane:4},{t:40.333,lane:2},{t:40.496,lane:1},{t:40.797,lane:3},{t:40.96,lane:5},{t:41.401,lane:1},{t:41.657,lane:3},{t:42.632,lane:5},{t:43.793,lane:1},{t:44.095,lane:3},{t:44.327,lane:5},{t:44.629,lane:6},{t:44.954,lane:4},{t:45.232,lane:2},{t:46.198,lane:1},{t:47.229,lane:1},{t:47.392,lane:2},{t:47.531,lane:3},{t:47.833,lane:4},{t:47.996,lane:5},{t:48.135,lane:6},{t:48.298,lane:2},{t:48.46,lane:3},{t:48.599,lane:4},{t:48.762,lane:1},{t:48.901,lane:4},{t:49.064,lane:2},{t:49.226,lane:5},{t:49.366,lane:3},{t:49.528,lane:6},{t:49.667,lane:4},{t:49.83,lane:4},{t:49.993,lane:2},{t:50.132,lane:5},{t:50.294,lane:3},{t:50.596,lane:6},{t:50.898,lane:4},{t:51.061,lane:1},{t:51.2,lane:4},{t:51.363,lane:2},{t:51.664,lane:5},{t:51.827,lane:3},{t:51.966,lane:6},{t:52.129,lane:4},{t:52.268,lane:2},{t:52.431,lane:5},{t:52.593,lane:3},{t:52.733,lane:6},{t:52.895,lane:4},{t:53.034,lane:1},{t:53.197,lane:4},{t:53.359,lane:2},{t:53.499,lane:3},{t:53.661,lane:4},{t:53.963,lane:4},{t:54.265,lane:3},{t:54.428,lane:5},{t:54.649,lane:6},{t:54.892,lane:3},{t:55.031,lane:4},{t:55.194,lane:3},{t:55.333,lane:5},{t:55.496,lane:6},{t:55.798,lane:6},{t:56.099,lane:6},{t:56.564,lane:4},{t:57.028,lane:5},{t:57.33,lane:3},{t:57.493,lane:2},{t:57.794,lane:1},{t:57.934,lane:4},{t:58.096,lane:5},{t:58.259,lane:5},{t:58.398,lane:2},{t:58.561,lane:4},{t:58.863,lane:6},{t:59.164,lane:5},{t:59.327,lane:3},{t:59.478,lane:1},{t:59.629,lane:2},{t:59.768,lane:4},{t:59.931,lane:6},{t:60.233,lane:5},{t:60.395,lane:3},{t:60.534,lane:1},{t:60.685,lane:2},{t:60.999,lane:2},{t:61.161,lane:4},{t:61.463,lane:6},{t:61.928,lane:5},{t:62.229,lane:3},{t:63.158,lane:1},{t:63.39,lane:2},{t:63.901,lane:3},{t:64.307,lane:4},{t:64.609,lane:5},{t:65.132,lane:6},{t:65.457,lane:1},{t:65.759,lane:1},{t:66.061,lane:4},{t:76.379,lane:1},{t:76.681,lane:3},{t:77.392,lane:5},{t:77.531,lane:6},{t:77.833,lane:2},{t:78.298,lane:2},{t:78.46,lane:3},{t:78.6,lane:4},{t:78.762,lane:5},{t:79.064,lane:6},{t:79.366,lane:2},{t:79.668,lane:2},{t:79.993,lane:3},{t:80.295,lane:1},{t:81.061,lane:2},{t:81.2,lane:3},{t:81.363,lane:4},{t:81.525,lane:5},{t:81.665,lane:6},{t:81.827,lane:2},{t:81.966,lane:3},{t:82.129,lane:4},{t:82.268,lane:5},{t:82.431,lane:6,type:"hold",dur:1.207},{t:82.593,lane:5},{t:82.733,lane:4},{t:82.895,lane:3},{t:83.035,lane:2},{t:83.197,lane:1},{t:83.336,lane:5},{t:83.499,lane:4},{t:83.661,lane:4},{t:83.894,lane:3},{t:84.126,lane:2},{t:84.196,lane:1},{t:84.265,lane:5},{t:84.428,lane:4},{t:84.497,lane:3},{t:84.66,lane:2},{t:84.73,lane:1,type:"hold",dur:1.207},{t:84.892,lane:2},{t:85.496,lane:3},{t:85.728,lane:4},{t:86.03,lane:3},{t:86.401,lane:5},{t:87.245,lane:6},{t:88.422,lane:4},{t:89.025,lane:5},{t:89.188,lane:3},{t:89.327,lane:2},{t:89.629,lane:1},{t:89.629,lane:6},{t:89.792,lane:4},{t:89.861,lane:5},{t:90.86,lane:1},{t:91.162,lane:4},{t:91.626,lane:2},{t:91.765,lane:5},{t:91.928,lane:3},{t:92.067,lane:6},{t:92.23,lane:3},{t:92.532,lane:3},{t:92.833,lane:4},{t:92.996,lane:3},{t:93.158,lane:5},{t:93.298,lane:6},{t:93.46,lane:3},{t:93.6,lane:4},{t:93.762,lane:3},{t:94.064,lane:3},{t:94.227,lane:5},{t:94.366,lane:6},{t:94.528,lane:6},{t:94.691,lane:4},{t:94.923,lane:5},{t:95.295,lane:3},{t:95.434,lane:2},{t:95.759,lane:1},{t:95.898,lane:4},{t:96.061,lane:5},{t:96.502,lane:5},{t:96.752,lane:3},{t:96.967,lane:2},{t:97.129,lane:4},{t:97.292,lane:6},{t:97.657,lane:5},{t:97.895,lane:3},{t:98.058,lane:1},{t:98.36,lane:2},{t:98.864,lane:4},{t:99.126,lane:6},{t:99.265,lane:5},{t:99.567,lane:2},{t:99.73,lane:4},{t:99.892,lane:6},{t:100.194,lane:5},{t:100.496,lane:3},{t:100.826,lane:1},{t:101.402,lane:2},{t:101.564,lane:4},{t:101.727,lane:6},{t:102.028,lane:2},{t:102.191,lane:3},{t:102.486,lane:3},{t:102.632,lane:4},{t:102.795,lane:5},{t:102.957,lane:6},{t:103.259,lane:2},{t:103.398,lane:3},{t:103.693,lane:3},{t:103.863,lane:4},{t:104.025,lane:5},{t:104.165,lane:1},{t:104.467,lane:4},{t:104.722,lane:2},{t:105.094,lane:5},{t:105.233,lane:3},{t:105.395,lane:6},{t:105.655,lane:4},{t:106.162,lane:4},{t:106.324,lane:2},{t:106.463,lane:5},{t:106.556,lane:3},{t:107.067,lane:3},{t:107.315,lane:5},{t:107.532,lane:2},{t:107.694,lane:4},{t:107.833,lane:1},{t:107.996,lane:3},{t:108.46,lane:3},{t:108.762,lane:5},{t:108.994,lane:3},{t:109.389,lane:5},{t:109.691,lane:2},{t:110.132,lane:4},{t:110.786,lane:2},{t:110.899,lane:4},{t:111.088,lane:6},{t:111.2,lane:5},{t:111.389,lane:3},{t:111.525,lane:1},{t:111.827,lane:2},{t:111.993,lane:3},{t:112.129,lane:4},{t:112.431,lane:5},{t:112.597,lane:6},{t:112.733,lane:2},{t:112.895,lane:3},{t:113.058,lane:4},{t:113.36,lane:4},{t:113.502,lane:5},{t:113.662,lane:6},{t:113.804,lane:1},{t:113.964,lane:4},{t:114.265,lane:2},{t:114.59,lane:5},{t:114.892,lane:3},{t:115.011,lane:6},{t:115.194,lane:4},{t:115.496,lane:4},{t:115.798,lane:2},{t:115.917,lane:5},{t:116.1,lane:3},{t:116.218,lane:6},{t:116.52,lane:3},{t:116.727,lane:5},{t:117.029,lane:2},{t:117.261,lane:4},{t:117.426,lane:1},{t:117.632,lane:3},{t:117.795,lane:5},{t:117.878,lane:2},{t:118.18,lane:2},{t:118.491,lane:4},{t:118.561,lane:1},{t:118.863,lane:3},{t:119.165,lane:5},{t:119.467,lane:2},{t:119.792,lane:4},{t:120.094,lane:1},{t:120.444,lane:6},{t:120.746,lane:3},{t:120.999,lane:5},{t:121.162,lane:6},{t:121.464,lane:4},{t:121.626,lane:5},{t:121.765,lane:3},{t:121.928,lane:2},{t:122.23,lane:1},{t:122.392,lane:4},{t:122.694,lane:4},{t:122.834,lane:5},{t:122.996,lane:3},{t:123.159,lane:2},{t:123.46,lane:1},{t:123.6,lane:2},{t:123.762,lane:4},{t:124.064,lane:6},{t:124.227,lane:5},{t:124.389,lane:3},{t:124.691,lane:1},{t:124.83,lane:2},{t:124.993,lane:4},{t:125.295,lane:6},{t:125.434,lane:5},{t:125.597,lane:3},{t:125.899,lane:6},{t:126.061,lane:5},{t:126.2,lane:4},{t:126.363,lane:3},{t:126.665,lane:2},{t:127.129,lane:1},{t:127.269,lane:5},{t:127.431,lane:4},{t:127.594,lane:3},{t:127.896,lane:3},{t:128.197,lane:2},{t:128.36,lane:6},{t:128.592,lane:5},{t:128.964,lane:4},{t:129.126,lane:3},{t:129.428,lane:2},{t:130.705,lane:3},{t:131.286,lane:4},{t:132.493,lane:5},{t:133.12,lane:2,type:"hold",dur:1.207},{t:133.422,lane:3},{t:133.724,lane:4},{t:134.351,lane:5},{t:134.653,lane:3},{t:135.256,lane:3},{t:135.558,lane:3},{t:136.487,lane:5},{t:136.789,lane:2},{t:137.091,lane:4},{t:137.718,lane:3},{t:138.019,lane:3},{t:138.321,lane:5},{t:138.623,lane:2},{t:139.76,lane:4}],events:[{t:.001,type:"clock",mode:"off",power:.61},{t:.323,type:"pulse",power:.3},{t:.343,type:"echo",lane:0,dir:-1,power:.52},{t:2.737,type:"pulse",power:.49},{t:5.152,type:"pulse",power:.49},{t:5.172,type:"echo",lane:1,dir:-1,power:.72},{t:7.566,type:"pulse",power:.48},{t:9.981,type:"pulse",power:.49},{t:10.001,type:"echo",lane:6,dir:1,power:.72},{t:12.395,type:"pulse",power:.52},{t:14.81,type:"pulse",power:.51},{t:14.83,type:"echo",lane:7,dir:1,power:.74},{t:17.224,type:"pulse",power:.5},{t:18.432,type:"clock",mode:"run",power:.75},{t:18.432,type:"clockTick",hand:"fast",power:.78},{t:19.035,type:"clockTick",hand:"slow",power:.86},{t:19.639,type:"clockTick",hand:"fast",power:.8},{t:19.639,type:"pulse",power:.79},{t:19.659,type:"echo",lane:0,dir:-1,power:1.03},{t:20.243,type:"clockTick",hand:"slow",power:1.25},{t:20.846,type:"clockTick",hand:"fast",power:1.25},{t:21.45,type:"clockTick",hand:"slow",power:1.25},{t:22.053,type:"clockTick",hand:"fast",power:.85},{t:22.053,type:"pulse",power:.7},{t:22.657,type:"clockTick",hand:"slow",power:.84},{t:23.261,type:"clockTick",hand:"fast",power:1.25},{t:23.864,type:"clockTick",hand:"slow",power:.45},{t:24.484,type:"clock",mode:"run",power:.82},{t:25.071,type:"clockTick",hand:"fast",power:.45},{t:25.675,type:"clockTick",hand:"slow",power:.95},{t:26.279,type:"clockTick",hand:"fast",power:1.14},{t:26.882,type:"clockTick",hand:"slow",power:.76},{t:26.882,type:"pulse",power:.77},{t:26.902,type:"echo",lane:0,dir:-1,power:1.01},{t:27.486,type:"clockTick",hand:"fast",power:.96},{t:28.09,type:"clockTick",hand:"slow",power:1.19},{t:28.693,type:"clockTick",hand:"fast",power:.92},{t:29.297,type:"clockTick",hand:"slow",power:1.11},{t:29.297,type:"pulse",power:.74},{t:29.9,type:"clockTick",hand:"fast",power:1.15},{t:30.504,type:"clockTick",hand:"slow",power:.96},{t:31.108,type:"clockTick",hand:"fast",power:1.12},{t:31.711,type:"clockTick",hand:"slow",power:1.24},{t:31.711,type:"pulse",power:.76},{t:31.731,type:"echo",lane:7,dir:1,power:1},{t:32.315,type:"clockTick",hand:"fast",power:1.04},{t:32.315,type:"burst",lane:3,power:1.07},{t:32.919,type:"clockTick",hand:"slow",power:1.25},{t:33.522,type:"clockTick",hand:"fast",power:1.22},{t:34.126,type:"clockTick",hand:"slow",power:1.25},{t:34.126,type:"pulse",power:.78},{t:34.729,type:"clockTick",hand:"fast",power:1.1},{t:35.333,type:"clockTick",hand:"slow",power:1.25},{t:35.937,type:"clockTick",hand:"fast",power:1.25},{t:36.54,type:"clockTick",hand:"slow",power:1.07},{t:36.54,type:"pulse",power:.78},{t:36.56,type:"echo",lane:0,dir:-1,power:1.02},{t:37.144,type:"clockTick",hand:"fast",power:.77},{t:37.748,type:"clockTick",hand:"slow",power:1.21},{t:38.351,type:"clockTick",hand:"fast",power:1.25},{t:38.955,type:"clockTick",hand:"slow",power:1.25},{t:38.955,type:"pulse",power:.75},{t:39.558,type:"clockTick",hand:"fast",power:1.12},{t:40.162,type:"clockTick",hand:"slow",power:1.25},{t:40.766,type:"clockTick",hand:"fast",power:1.14},{t:41.369,type:"clockTick",hand:"slow",power:1.25},{t:41.369,type:"pulse",power:.82},{t:41.389,type:"echo",lane:7,dir:1,power:1.06},{t:41.973,type:"clockTick",hand:"fast",power:.92},{t:41.973,type:"burst",lane:3,power:1.13},{t:42.577,type:"clockTick",hand:"slow",power:1.25},{t:42.878,type:"clock",mode:"run",power:.9},{t:42.907,type:"motion",style:"wave",amp:.16,speed:.95,pitch:.08},{t:43.18,type:"clockTick",hand:"fast",power:.92},{t:43.784,type:"clockTick",hand:"slow",power:.88},{t:43.784,type:"pulse",power:.8},{t:43.804,type:"echo",lane:0,dir:-1,power:1.04},{t:44.387,type:"clockTick",hand:"fast",power:.98},{t:44.991,type:"clockTick",hand:"slow",power:.45},{t:45.595,type:"clockTick",hand:"fast",power:.83},{t:46.198,type:"clockTick",hand:"slow",power:.45},{t:46.198,type:"pulse",power:.79},{t:46.802,type:"clockTick",hand:"fast",power:.45},{t:47.405,type:"clockTick",hand:"slow",power:.96},{t:48.009,type:"clockTick",hand:"fast",power:1.18},{t:48.613,type:"clockTick",hand:"slow",power:1.05},{t:48.613,type:"pulse",power:.79},{t:48.633,type:"echo",lane:7,dir:1,power:1.04},{t:49.216,type:"clockTick",hand:"fast",power:1},{t:49.216,type:"burst",lane:5,power:1.11},{t:49.82,type:"clockTick",hand:"slow",power:1.15},{t:50.424,type:"clockTick",hand:"fast",power:1},{t:51.027,type:"clockTick",hand:"slow",power:1.05},{t:51.027,type:"pulse",power:.8},{t:51.631,type:"clockTick",hand:"fast",power:1.04},{t:52.234,type:"clockTick",hand:"slow",power:.92},{t:52.838,type:"clockTick",hand:"fast",power:1.16},{t:53.442,type:"clockTick",hand:"slow",power:1.12},{t:53.442,type:"pulse",power:.78},{t:53.462,type:"echo",lane:0,dir:-1,power:1.02},{t:54.045,type:"clockTick",hand:"fast",power:.93},{t:54.649,type:"clockTick",hand:"slow",power:1.11},{t:55.253,type:"clockTick",hand:"fast",power:1.21},{t:55.856,type:"clockTick",hand:"slow",power:1.25},{t:55.856,type:"pulse",power:.81},{t:56.46,type:"clockTick",hand:"fast",power:.77},{t:57.063,type:"clockTick",hand:"slow",power:.72},{t:57.667,type:"clockTick",hand:"fast",power:.45},{t:58.271,type:"clockTick",hand:"slow",power:.73},{t:58.271,type:"pulse",power:.78},{t:58.291,type:"echo",lane:7,dir:1,power:1.02},{t:58.874,type:"clockTick",hand:"fast",power:.84},{t:58.874,type:"burst",lane:6,power:1.09},{t:59.478,type:"clockTick",hand:"slow",power:.45},{t:60.082,type:"clockTick",hand:"fast",power:.45},{t:60.685,type:"clockTick",hand:"slow",power:.45},{t:60.685,type:"pulse",power:.81},{t:61.289,type:"clockTick",hand:"fast",power:.75},{t:61.892,type:"clockTick",hand:"slow",power:.88},{t:62.496,type:"clockTick",hand:"fast",power:.78},{t:63.1,type:"clockTick",hand:"slow",power:.81},{t:63.1,type:"pulse",power:.82},{t:63.12,type:"echo",lane:0,dir:-1,power:1.06},{t:63.703,type:"clockTick",hand:"fast",power:.81},{t:64.307,type:"clockTick",hand:"slow",power:.92},{t:64.911,type:"clockTick",hand:"fast",power:.98},{t:65.514,type:"clockTick",hand:"slow",power:.88},{t:65.514,type:"pulse",power:.61},{t:66.118,type:"clockTick",hand:"fast",power:.95},{t:66.418,type:"clock",mode:"freeze",power:.75},{t:66.419,type:"pendulum",mode:"start",period:2.4145,amplitude:.42},{t:76.073,type:"pendulum",mode:"stop"},{t:76.076,type:"clock",mode:"run",power:.88},{t:76.379,type:"clockTick",hand:"fast",power:.45},{t:76.983,type:"clockTick",hand:"slow",power:.77},{t:77.587,type:"clockTick",hand:"fast",power:.78},{t:77.587,type:"pulse",power:.77},{t:77.607,type:"echo",lane:0,dir:-1,power:1.01},{t:78.19,type:"clockTick",hand:"slow",power:.77},{t:78.794,type:"clockTick",hand:"fast",power:.75},{t:79.397,type:"clockTick",hand:"slow",power:1.25},{t:80.001,type:"clockTick",hand:"fast",power:.78},{t:80.001,type:"pulse",power:.82},{t:80.605,type:"clockTick",hand:"slow",power:.45},{t:81.208,type:"clockTick",hand:"fast",power:.82},{t:81.812,type:"clockTick",hand:"slow",power:.91},{t:82.416,type:"clockTick",hand:"fast",power:.98},{t:82.416,type:"pulse",power:.76},{t:82.436,type:"echo",lane:7,dir:1,power:1},{t:83.019,type:"clockTick",hand:"slow",power:1.02},{t:83.019,type:"burst",lane:2,power:1.07},{t:83.623,type:"clockTick",hand:"fast",power:1.01},{t:84.226,type:"clockTick",hand:"slow",power:1.01},{t:84.83,type:"clockTick",hand:"fast",power:.87},{t:84.83,type:"pulse",power:.68},{t:85.434,type:"clockTick",hand:"slow",power:.79},{t:86.037,type:"clockTick",hand:"fast",power:.75},{t:86.641,type:"clockTick",hand:"slow",power:.79},{t:87.245,type:"clockTick",hand:"fast",power:.76},{t:87.245,type:"pulse",power:.59},{t:87.265,type:"echo",lane:0,dir:-1,power:.83},{t:87.848,type:"clockTick",hand:"slow",power:.45},{t:88.452,type:"clockTick",hand:"fast",power:1.05},{t:89.055,type:"clockTick",hand:"slow",power:.91},{t:89.659,type:"clockTick",hand:"fast",power:.94},{t:89.659,type:"pulse",power:.7},{t:90.263,type:"clockTick",hand:"slow",power:.45},{t:90.562,type:"clock",mode:"run",power:.92},{t:90.581,type:"vibe",power:.67},{t:90.591,type:"motion",style:"zigzag",amp:.17,speed:1.15,pitch:.09},{t:90.866,type:"clockTick",hand:"fast",power:.88},{t:91.47,type:"clockTick",hand:"slow",power:.45},{t:92.074,type:"clockTick",hand:"fast",power:.77},{t:92.074,type:"pulse",power:.77},{t:92.094,type:"echo",lane:0,dir:-1,power:1.01},{t:92.677,type:"clockTick",hand:"slow",power:.45},{t:93.281,type:"clockTick",hand:"fast",power:.88},{t:93.884,type:"clockTick",hand:"slow",power:.45},{t:94.488,type:"clockTick",hand:"fast",power:.85},{t:94.488,type:"pulse",power:.77},{t:95.092,type:"clockTick",hand:"slow",power:.45},{t:95.695,type:"clockTick",hand:"fast",power:.77},{t:96.299,type:"clockTick",hand:"slow",power:.8},{t:96.902,type:"clockTick",hand:"fast",power:.77},{t:96.902,type:"pulse",power:.76},{t:96.922,type:"echo",lane:7,dir:1,power:1},{t:97.506,type:"clockTick",hand:"slow",power:.83},{t:97.506,type:"burst",lane:5,power:1.07},{t:98.11,type:"clockTick",hand:"fast",power:.82},{t:98.713,type:"clockTick",hand:"slow",power:.85},{t:99.317,type:"clockTick",hand:"fast",power:.85},{t:99.317,type:"pulse",power:.79},{t:99.921,type:"clockTick",hand:"slow",power:.88},{t:100.524,type:"clockTick",hand:"fast",power:1.25},{t:101.128,type:"clockTick",hand:"slow",power:.79},{t:101.731,type:"clockTick",hand:"fast",power:.82},{t:101.731,type:"pulse",power:.76},{t:101.751,type:"echo",lane:0,dir:-1,power:1},{t:102.335,type:"clockTick",hand:"slow",power:.81},{t:102.939,type:"clockTick",hand:"fast",power:.8},{t:103.542,type:"clockTick",hand:"slow",power:.81},{t:104.146,type:"clockTick",hand:"fast",power:.82},{t:104.146,type:"pulse",power:.79},{t:104.75,type:"clockTick",hand:"slow",power:.82},{t:105.353,type:"clockTick",hand:"fast",power:.89},{t:105.957,type:"clockTick",hand:"slow",power:.76},{t:106.56,type:"clockTick",hand:"fast",power:.81},{t:106.56,type:"pulse",power:.82},{t:106.58,type:"echo",lane:7,dir:1,power:1.06},{t:107.164,type:"clockTick",hand:"slow",power:.79},{t:107.164,type:"burst",lane:3,power:1.13},{t:107.768,type:"clockTick",hand:"fast",power:.79},{t:108.371,type:"clockTick",hand:"slow",power:.8},{t:108.975,type:"clockTick",hand:"fast",power:.82},{t:108.975,type:"pulse",power:.75},{t:109.579,type:"clockTick",hand:"slow",power:.93},{t:110.182,type:"clockTick",hand:"fast",power:.82},{t:110.481,type:"clock",mode:"final",power:.97},{t:110.5,type:"vibe",power:.75},{t:110.51,type:"motion",style:"orbit",amp:.17,speed:1,pitch:.085},{t:110.786,type:"clockTick",hand:"fast",power:.45},{t:111.389,type:"clockTick",hand:"slow",power:.45},{t:111.389,type:"pulse",power:.7},{t:111.409,type:"echo",lane:0,dir:-1,power:.93},{t:111.993,type:"clockTick",hand:"fast",power:.45},{t:112.597,type:"clockTick",hand:"slow",power:.45},{t:113.2,type:"clockTick",hand:"fast",power:.8},{t:113.804,type:"clockTick",hand:"slow",power:.45},{t:113.804,type:"pulse",power:.7},{t:114.408,type:"clockTick",hand:"fast",power:.78},{t:115.011,type:"clockTick",hand:"slow",power:.45},{t:115.615,type:"clockTick",hand:"fast",power:.45},{t:116.218,type:"clockTick",hand:"slow",power:.45},{t:116.218,type:"pulse",power:.7},{t:116.238,type:"echo",lane:7,dir:1,power:.94},{t:116.822,type:"clockTick",hand:"fast",power:.45},{t:116.822,type:"burst",lane:5,power:1.01},{t:117.426,type:"clockTick",hand:"slow",power:.45},{t:118.029,type:"clockTick",hand:"fast",power:.76},{t:118.633,type:"clockTick",hand:"slow",power:1.12},{t:118.633,type:"pulse",power:.75},{t:119.236,type:"clockTick",hand:"fast",power:1.08},{t:119.84,type:"clockTick",hand:"slow",power:1.05},{t:120.444,type:"clockTick",hand:"fast",power:.45},{t:121.047,type:"clockTick",hand:"slow",power:.86},{t:121.047,type:"pulse",power:.81},{t:121.067,type:"echo",lane:0,dir:-1,power:1.05},{t:121.651,type:"clockTick",hand:"fast",power:1.12},{t:122.255,type:"clockTick",hand:"slow",power:1.25},{t:122.858,type:"clockTick",hand:"fast",power:1.01},{t:123.462,type:"clockTick",hand:"slow",power:1.19},{t:123.462,type:"pulse",power:.83},{t:124.065,type:"clockTick",hand:"fast",power:1.14},{t:124.669,type:"clockTick",hand:"slow",power:1.08},{t:125.273,type:"clockTick",hand:"fast",power:.83},{t:125.876,type:"clockTick",hand:"slow",power:1.18},{t:125.876,type:"pulse",power:.82},{t:125.896,type:"echo",lane:7,dir:1,power:1.07},{t:126.48,type:"clockTick",hand:"fast",power:.88},{t:126.48,type:"burst",lane:3,power:1.14},{t:127.084,type:"clockTick",hand:"slow",power:1.25},{t:127.687,type:"clockTick",hand:"fast",power:.79},{t:128.291,type:"clockTick",hand:"slow",power:.86},{t:128.291,type:"pulse",power:.73},{t:128.894,type:"clockTick",hand:"fast",power:.83},{t:129.498,type:"clockTick",hand:"slow",power:.76},{t:129.796,type:"clock",mode:"off",power:.65},{t:130.705,type:"pulse",power:.45},{t:130.725,type:"echo",lane:0,dir:-1,power:.68},{t:133.12,type:"pulse",power:.49},{t:135.534,type:"pulse",power:.49},{t:135.554,type:"echo",lane:1,dir:-1,power:.72},{t:137.949,type:"pulse",power:.42}],ghosts:[{t:.04,lane:0,type:"sweep"},{t:.095,lane:1,type:"sweep"},{t:.15,lane:6,type:"sweep"},{t:.205,lane:7,type:"sweep"},{t:4.829,lane:0,type:"bounce"},{t:4.949,lane:1,type:"bounce"},{t:5.069,lane:6,type:"bounce"},{t:5.189,lane:7,type:"bounce"},{t:18.471,lane:0,type:"sweep"},{t:18.526,lane:1,type:"sweep"},{t:18.581,lane:6,type:"sweep"},{t:18.636,lane:7,type:"sweep"},{t:23.26,lane:0,type:"bounce"},{t:23.38,lane:1,type:"bounce"},{t:23.5,lane:6,type:"bounce"},{t:23.62,lane:7,type:"bounce"},{t:24.523,lane:0,type:"sweep"},{t:24.578,lane:7,type:"sweep"},{t:29.312,lane:0,type:"bounce"},{t:29.432,lane:7,type:"bounce"},{t:42.917,lane:0,type:"sweep"},{t:42.972,lane:7,type:"sweep"},{t:47.706,lane:0,type:"bounce"},{t:47.826,lane:7,type:"bounce"},{t:66.457,lane:0,type:"sweep"},{t:66.512,lane:1,type:"sweep"},{t:66.567,lane:6,type:"sweep"},{t:66.622,lane:7,type:"sweep"},{t:71.246,lane:0,type:"bounce"},{t:71.366,lane:1,type:"bounce"},{t:71.486,lane:6,type:"bounce"},{t:71.606,lane:7,type:"bounce"},{t:76.115,lane:0,type:"sweep"},{t:76.17,lane:7,type:"sweep"},{t:80.904,lane:0,type:"bounce"},{t:81.024,lane:7,type:"bounce"},{t:90.601,lane:0,type:"sweep"},{t:90.656,lane:7,type:"sweep"},{t:95.39,lane:0,type:"bounce"},{t:95.51,lane:7,type:"bounce"},{t:110.52,lane:0,type:"sweep"},{t:110.575,lane:7,type:"sweep"},{t:115.309,lane:0,type:"bounce"},{t:115.429,lane:7,type:"bounce"},{t:129.835,lane:0,type:"sweep"},{t:129.89,lane:1,type:"sweep"},{t:129.945,lane:6,type:"sweep"},{t:130,lane:7,type:"sweep"},{t:134.624,lane:0,type:"bounce"},{t:134.744,lane:1,type:"bounce"},{t:134.864,lane:6,type:"bounce"},{t:134.984,lane:7,type:"bounce"}],swings:[{t:67.021},{t:68.228},{t:69.435},{t:70.642},{t:71.85},{t:73.057},{t:74.264},{t:75.471}]},cd={song:{title:"THE UNTOUCHABLE OF f RA IA'S LAND",shortTitle:"THE UNTOUCHABLE",artist:"f RA IA",bpm:111.1,bpmLabel:"111 / 96 BPM",bpmMap:[{t:0,bpm:111.1},{t:28.492,bpm:96},{t:63.59,bpm:111.1}],duration:147.541,chartEnd:141.829,introEnd:28.492,beatOffset:.409,difficulty:"BOSS",laneLabel:"4 · 6 · 8",freeNotes:!0,boss:!0,fadeStart:140.2,fadeEnd:142.6},sections:[{name:"OVERTURE",start:0,end:9.05,keys:8,intro:!0,color:"#ffcf6e",accent:"#ff3b5c",energy:.42,bloom:.68,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:19.5,camY:7.2,spin:.02,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.03,motionSpeed:.25,motionPitch:.015,city:0},{name:"RELIQUARY",start:9.05,end:18.77,keys:8,intro:!0,color:"#ffb45e",accent:"#9b6bff",energy:.62,bloom:.8,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:19.5,camY:7.2,spin:.03,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"wave",motionAmp:.05,motionSpeed:.35,motionPitch:.02,city:0},{name:"HUSH",start:18.77,end:20.39,keys:8,intro:!0,color:"#b8c8ff",accent:"#ffd166",energy:.2,bloom:.42,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:19.5,camY:7.2,spin:.01,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"flat",motionAmp:.01,motionSpeed:.2,motionPitch:.005,city:0},{name:"PROCESSION",start:20.39,end:28.492,keys:8,intro:!0,color:"#ff8a5e",accent:"#ffd166",energy:.84,bloom:.96,rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:19.5,camY:7.2,spin:.05,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.1,motionSpeed:.6,motionPitch:.04,city:0},{name:"CHAMBER",start:28.492,end:48.492,keys:4,color:"#a99bff",accent:"#ffd166",energy:.32,bloom:.62,rotY:0,rotZ:0,tilt:.02,spread:.98,y:.08,camZ:18.8,camY:7,spin:.025,lookY:5,lookZ:-2,bpm:96,beatOffset:28.492,motion:"wave",motionAmp:.04,motionSpeed:.4,motionPitch:.018,city:0},{name:"MECHANISM",start:48.492,end:61.492,keys:6,color:"#ffb45e",accent:"#ff4d6d",energy:.62,bloom:.82,rotY:.05,rotZ:-.018,tilt:.015,spread:1.03,y:.1,camZ:17.4,camY:6.8,spin:.06,lookY:5.4,lookZ:-4,bpm:96,beatOffset:28.492,motion:"clock",motionAmp:.075,motionSpeed:.55,motionPitch:.03,city:0},{name:"DESCENT",start:61.492,end:63.59,keys:6,color:"#ff6b7a",accent:"#ffd166",energy:.76,bloom:.9,rotY:-.06,rotZ:.025,tilt:-.02,spread:1.05,y:.12,camZ:16.4,camY:6.4,spin:.09,lookY:5.6,lookZ:-5,bpm:96,beatOffset:28.492,motion:"slope",motionAmp:.12,motionSpeed:.7,motionPitch:.05,city:0},{name:"GALLERY",start:63.59,end:70.069,keys:6,color:"#ff7a5e",accent:"#ffd166",energy:.84,bloom:.98,rotY:.08,rotZ:-.03,tilt:.025,spread:1.06,y:.14,camZ:16.2,camY:6.7,spin:.1,lookY:5.8,lookZ:-6,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.13,motionSpeed:.75,motionPitch:.05,city:0},{name:"HUNT",start:70.069,end:89.449,keys:6,color:"#ff4d6d",accent:"#ffd166",energy:.98,bloom:1.08,rotY:-.1,rotZ:.04,tilt:-.025,spread:1.08,y:.16,camZ:15.8,camY:6.6,spin:.13,lookY:6,lookZ:-6,bpm:111.1,beatOffset:.409,motion:"zigzag",motionAmp:.16,motionSpeed:.95,motionPitch:.065,city:0},{name:"FROZEN",start:89.449,end:105.429,keys:4,color:"#9fc7ff",accent:"#d7e8ff",energy:.3,bloom:.58,rotY:-.02,rotZ:.01,tilt:.04,spread:.94,y:.24,camZ:19.2,camY:7.8,spin:.02,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"flat",motionAmp:.02,motionSpeed:.2,motionPitch:.008,city:0},{name:"ASCENT",start:105.429,end:107.509,keys:6,color:"#ffd166",accent:"#ff7a5e",energy:.88,bloom:1,rotY:.06,rotZ:-.025,tilt:.02,spread:1.04,y:.12,camZ:16.4,camY:6.5,spin:.1,lookY:5.8,lookZ:-5,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.16,motionSpeed:.9,motionPitch:.06,city:0},{name:"APOTHEOSIS",start:107.509,end:123.829,keys:8,color:"#ff9a5e",accent:"#ff3b5c",energy:1.04,bloom:1.14,rotY:-.12,rotZ:.05,tilt:-.03,spread:1.1,y:.18,camZ:15.4,camY:6.5,spin:.15,lookY:6,lookZ:-6,bpm:111.1,beatOffset:.409,motion:"clock",motionAmp:.18,motionSpeed:1.05,motionPitch:.075,city:0},{name:"FINALE",start:123.829,end:141.829,keys:8,color:"#ff3b5c",accent:"#ffd166",energy:1.12,bloom:1.2,rotY:.14,rotZ:-.055,tilt:.035,spread:1.12,y:.2,camZ:14.8,camY:6.3,spin:.17,lookY:6.2,lookZ:-7,bpm:111.1,beatOffset:.409,motion:"orbit",motionAmp:.2,motionSpeed:1.15,motionPitch:.085,city:0},{name:"OUTRO",start:141.829,end:147.541,keys:4,color:"#c9b8ff",accent:"#ffd166",energy:.18,bloom:.46,rotY:0,rotZ:0,tilt:.02,spread:.92,y:.3,camZ:19.6,camY:7.8,spin:.02,lookY:5,lookZ:-2,bpm:111.1,beatOffset:.409,motion:"flat",motionAmp:0,motionSpeed:.2,motionPitch:0,city:0}],notes:[{t:29.71,lane:2},{t:31.022,lane:2},{t:32.183,lane:4},{t:33.492,lane:2,type:"hold",dur:1.25},{t:34.516,lane:3},{t:34.742,lane:4},{t:35.143,lane:5},{t:35.306,lane:3},{t:35.992,lane:3},{t:36.386,lane:5},{t:37.242,lane:2},{t:37.64,lane:4},{t:37.953,lane:3},{t:38.266,lane:5},{t:38.492,lane:5},{t:38.893,lane:4},{t:39.117,lane:3,type:"hold",dur:1.25},{t:39.742,lane:2},{t:40.136,lane:4},{t:40.763,lane:4},{t:40.992,lane:5,type:"hold",dur:1.25},{t:41.39,lane:4},{t:42.017,lane:3},{t:42.242,lane:2},{t:42.643,lane:4},{t:42.794,lane:3},{t:43.421,lane:3},{t:44.199,lane:3},{t:44.513,lane:2},{t:44.742,lane:4},{t:45.453,lane:5},{t:45.767,lane:3},{t:45.992,lane:2},{t:46.393,lane:4},{t:46.707,lane:3},{t:47.242,lane:5},{t:47.647,lane:4},{t:49.737,lane:3},{t:50.968,lane:5},{t:51.304,lane:3},{t:51.699,lane:5},{t:52.013,lane:2},{t:52.242,lane:4},{t:52.555,lane:1},{t:52.953,lane:3},{t:53.267,lane:3},{t:53.492,lane:6,type:"hold",dur:1.25},{t:53.882,lane:4},{t:54.195,lane:5},{t:54.509,lane:3},{t:54.741,lane:2},{t:55.055,lane:1},{t:55.449,lane:4},{t:55.763,lane:4},{t:55.992,lane:2},{t:56.308,lane:4},{t:56.622,lane:6},{t:56.924,lane:5},{t:57.249,lane:3},{t:57.551,lane:1,type:"hold",dur:1.25},{t:57.864,lane:2},{t:57.945,lane:4},{t:58.178,lane:6},{t:58.259,lane:5},{t:58.468,lane:3},{t:58.805,lane:6},{t:59.117,lane:5},{t:59.43,lane:4},{t:59.742,lane:3},{t:60.055,lane:2},{t:60.453,lane:1},{t:60.767,lane:5},{t:60.992,lane:6},{t:61.305,lane:5},{t:61.614,lane:4},{t:61.707,lane:2},{t:61.928,lane:2},{t:62.02,lane:5},{t:62.241,lane:3},{t:62.555,lane:6},{t:62.961,lane:4},{t:63.994,lane:6},{t:64.122,lane:5},{t:64.389,lane:4},{t:64.795,lane:3},{t:64.935,lane:2},{t:65.202,lane:1},{t:65.35,lane:4},{t:65.608,lane:4},{t:65.891,lane:2},{t:66.014,lane:5},{t:66.296,lane:3},{t:66.421,lane:6},{t:66.701,lane:4},{t:66.971,lane:4},{t:67.094,lane:2},{t:67.376,lane:3},{t:67.5,lane:5},{t:68.051,lane:2},{t:68.452,lane:4},{t:68.591,lane:1},{t:69.266,lane:3},{t:69.521,lane:3},{t:69.799,lane:1},{t:70.333,lane:1},{t:70.6,lane:4},{t:70.867,lane:2},{t:71.134,lane:5},{t:71.413,lane:3},{t:71.68,lane:6},{t:72.101,lane:4},{t:72.353,lane:4},{t:72.493,lane:2},{t:72.76,lane:5},{t:72.899,lane:3},{t:73.166,lane:6},{t:73.451,lane:4},{t:73.572,lane:2},{t:73.839,lane:2},{t:74.106,lane:2},{t:74.246,lane:3},{t:74.385,lane:4},{t:74.652,lane:3},{t:74.919,lane:5},{t:75.186,lane:6},{t:75.465,lane:2},{t:75.732,lane:3},{t:75.999,lane:4},{t:76.266,lane:6},{t:76.405,lane:4},{t:76.533,lane:5},{t:76.812,lane:3},{t:77.079,lane:2},{t:77.367,lane:1},{t:77.485,lane:4},{t:77.624,lane:5},{t:77.907,lane:5},{t:78.019,lane:3},{t:78.158,lane:2},{t:78.312,lane:4},{t:78.565,lane:4},{t:78.971,lane:6},{t:79.257,lane:5},{t:79.377,lane:3},{t:79.644,lane:1},{t:79.911,lane:2},{t:80.051,lane:4},{t:80.318,lane:6},{t:80.585,lane:4},{t:80.863,lane:4},{t:80.991,lane:6},{t:81.131,lane:5},{t:81.398,lane:3},{t:81.676,lane:1},{t:82.21,lane:2},{t:82.477,lane:4},{t:82.744,lane:1},{t:82.884,lane:2},{t:83.023,lane:3},{t:83.29,lane:4},{t:83.557,lane:5},{t:83.824,lane:6},{t:84.103,lane:1},{t:84.37,lane:2},{t:84.637,lane:3},{t:84.904,lane:1},{t:85.043,lane:4},{t:85.182,lane:2},{t:85.738,lane:5},{t:85.995,lane:3},{t:86.262,lane:6},{t:86.548,lane:4},{t:86.796,lane:4},{t:86.953,lane:3},{t:87.203,lane:5},{t:87.539,lane:2},{t:87.876,lane:4},{t:88.015,lane:1},{t:88.282,lane:3},{t:88.549,lane:3},{t:88.689,lane:5},{t:88.956,lane:2},{t:88.956,lane:5},{t:89.095,lane:3},{t:90.035,lane:4,type:"hold",dur:1.08},{t:91.138,lane:2,type:"hold",dur:1.08},{t:92.218,lane:3,type:"hold",dur:1.08},{t:93.286,lane:5},{t:94.366,lane:5},{t:95.446,lane:4},{t:96.525,lane:4},{t:97.605,lane:5},{t:98.159,lane:4},{t:98.673,lane:5},{t:99.091,lane:3},{t:99.765,lane:3},{t:100.299,lane:2},{t:100.833,lane:4},{t:101.251,lane:3},{t:101.518,lane:5},{t:101.645,lane:4},{t:101.912,lane:4},{t:102.191,lane:4},{t:102.33,lane:2},{t:102.597,lane:3},{t:102.737,lane:4},{t:103.004,lane:4},{t:103.41,lane:2},{t:103.816,lane:3},{t:104.083,lane:3},{t:104.49,lane:2},{t:104.618,lane:3},{t:105.163,lane:3},{t:105.43,lane:1},{t:105.57,lane:4},{t:105.697,lane:2},{t:105.837,lane:5},{t:105.964,lane:3},{t:106.104,lane:6},{t:106.243,lane:1},{t:106.243,lane:4},{t:107.323,lane:1},{t:107.59,lane:4},{t:107.996,lane:4},{t:108.124,lane:6},{t:108.402,lane:3},{t:108.669,lane:0},{t:108.936,lane:2},{t:109.215,lane:4},{t:109.482,lane:6},{t:109.749,lane:7},{t:110.016,lane:5},{t:110.295,lane:3},{t:110.562,lane:1},{t:110.701,lane:6},{t:110.968,lane:6},{t:111.235,lane:5},{t:111.375,lane:4},{t:111.642,lane:3},{t:111.781,lane:2},{t:112.048,lane:1},{t:112.315,lane:0},{t:112.454,lane:5},{t:112.721,lane:6},{t:112.988,lane:2},{t:113.128,lane:4},{t:113.395,lane:3},{t:113.662,lane:5},{t:113.801,lane:1},{t:114.068,lane:0},{t:114.207,lane:2},{t:114.474,lane:2},{t:114.741,lane:2},{t:114.881,lane:4},{t:115.148,lane:2},{t:115.287,lane:4},{t:115.554,lane:3},{t:115.821,lane:5},{t:115.96,lane:1},{t:116.227,lane:0},{t:116.367,lane:2},{t:116.634,lane:2},{t:116.901,lane:2},{t:117.04,lane:4},{t:117.18,lane:1},{t:117.447,lane:3},{t:117.714,lane:5},{t:117.853,lane:7},{t:118.12,lane:6},{t:118.526,lane:4},{t:118.793,lane:2},{t:118.933,lane:0},{t:119.2,lane:1},{t:119.467,lane:4},{t:119.606,lane:6},{t:119.873,lane:6},{t:120.14,lane:3},{t:120.279,lane:5},{t:120.546,lane:2},{t:120.686,lane:0},{t:120.953,lane:1},{t:121.22,lane:4},{t:121.359,lane:6},{t:121.626,lane:1},{t:121.893,lane:1},{t:122.032,lane:2},{t:122.3,lane:3},{t:122.439,lane:4},{t:122.706,lane:5},{t:123.112,lane:6},{t:123.252,lane:7},{t:123.519,lane:1},{t:123.519,lane:6},{t:124.064,lane:1},{t:124.331,lane:3},{t:124.621,lane:5},{t:124.865,lane:7},{t:125.144,lane:6},{t:125.411,lane:4},{t:125.678,lane:2},{t:125.945,lane:0},{t:126.084,lane:3},{t:126.351,lane:5},{t:126.63,lane:6},{t:126.758,lane:4},{t:127.025,lane:2},{t:127.164,lane:1},{t:127.431,lane:0},{t:127.71,lane:0},{t:127.837,lane:3},{t:128.104,lane:0},{t:128.383,lane:2},{t:128.511,lane:4},{t:128.789,lane:6},{t:128.917,lane:7},{t:129.184,lane:5},{t:129.591,lane:3},{t:129.73,lane:1},{t:129.997,lane:0},{t:130.264,lane:5},{t:130.543,lane:6},{t:130.67,lane:5},{t:130.949,lane:4},{t:131.077,lane:3},{t:131.216,lane:2},{t:131.344,lane:1},{t:131.75,lane:0},{t:131.889,lane:5},{t:132.156,lane:6},{t:132.296,lane:7},{t:132.563,lane:6},{t:132.83,lane:5},{t:132.969,lane:4},{t:133.236,lane:3},{t:133.375,lane:2},{t:133.642,lane:1},{t:133.921,lane:0},{t:134.049,lane:5},{t:134.316,lane:6},{t:134.583,lane:4},{t:134.861,lane:4},{t:135.129,lane:1},{t:135.268,lane:5},{t:135.396,lane:2},{t:135.663,lane:6},{t:135.941,lane:3},{t:136.208,lane:7},{t:136.475,lane:4},{t:136.615,lane:1},{t:136.882,lane:3},{t:137.149,lane:5},{t:137.288,lane:7},{t:137.427,lane:6},{t:137.555,lane:4},{t:137.694,lane:2},{t:137.961,lane:0},{t:138.228,lane:1},{t:138.368,lane:3},{t:138.635,lane:5},{t:138.774,lane:7},{t:139.041,lane:4},{t:139.308,lane:6},{t:139.447,lane:3},{t:139.587,lane:5},{t:139.714,lane:2},{t:139.854,lane:0},{t:140.121,lane:1},{t:140.388,lane:4},{t:140.527,lane:6},{t:140.794,lane:1},{t:140.794,lane:6},{t:141.061,lane:7},{t:141.34,lane:4},{t:141.607,lane:6}],events:[{t:0,type:"bossCamera",pos:[0,15,48],look:[0,18,-70],fov:48,roll:0,dur:.02},{t:.409,type:"bossCamera",pos:[0,14,46],look:[0,20,-74],fov:48,roll:0,dur:1.1},{t:.409,type:"bossGlitch",power:.5},{t:.409,type:"pulse",power:.91},{t:.429,type:"wind",power:.95},{t:.7,type:"caption",kicker:"OVERTURE",title:"THE UNTOUCHABLE",sub:"OF f RA IA'S LAND",hold:5.6},{t:2.569,type:"bossCamera",pos:[0,10,31],look:[0,20,-78],fov:52,roll:-.02,dur:.85},{t:2.569,type:"pulse",power:.97},{t:4.729,type:"bossCamera",pos:[-7,5.5,20],look:[2,23,-86],fov:58,roll:.025,dur:.78},{t:4.729,type:"bossGlitch",power:.7},{t:4.729,type:"pulse",power:.88},{t:6.889,type:"bossCamera",pos:[8,3.1,10],look:[-4,19,-82],fov:61,roll:.035,dur:.72},{t:6.89,type:"pulse",power:.94},{t:8.95,type:"bossGlitch",power:.9},{t:9.05,type:"bossCamera",pos:[-16,10,-2],look:[8,15,-66],fov:55,roll:-.03,dur:.92},{t:9.07,type:"wind",power:1.07},{t:9.2,type:"caption",kicker:"I",title:"THE NAVE",sub:"EVERY SAINT HAS TURNED AWAY",hold:4.2},{t:11.21,type:"bossCamera",pos:[13,17,-14],look:[-10,12,-82],fov:52,roll:.05,dur:.85},{t:11.21,type:"pulse",power:.74},{t:13.37,type:"bossCamera",pos:[0,24,16],look:[0,14,-44],fov:50,roll:0,dur:.72},{t:13.37,type:"bossGlitch",power:.65},{t:13.37,type:"pulse",power:.77},{t:15.53,type:"bossCamera",pos:[0,3,6],look:[0,23,-88],fov:63,roll:.02,dur:.68},{t:15.531,type:"pulse",power:.74},{t:17.69,type:"bossCamera",pos:[0,12,38],look:[0,21,-88],fov:48,roll:0,dur:1.05},{t:17.691,type:"pulse",power:.45},{t:17.711,type:"wind",power:1.07},{t:18.77,type:"bossGlitch",power:1},{t:19.85,type:"bossCamera",pos:[0,6,18],look:[0,25,-88],fov:58,roll:-.03,dur:.52},{t:19.851,type:"pulse",power:.92},{t:20.41,type:"vibe",power:.67},{t:20.42,type:"motion",style:"orbit",amp:.1,speed:.6,pitch:.04},{t:20.5,type:"caption",kicker:"II",title:"THE PROCESSION",sub:"THE HOUR HAND FALLS",hold:4},{t:21.49,type:"bossCamera",pos:[-12,15,10],look:[6,11,-48],fov:55,roll:.04,dur:.8},{t:21.49,type:"bossGlitch",power:.8},{t:22.011,type:"pulse",power:.7},{t:23.65,type:"bossCamera",pos:[12,4,4],look:[-4,19,-74],fov:60,roll:-.05,dur:.62},{t:23.65,type:"bossGlitch",power:.9},{t:24.171,type:"pulse",power:.72},{t:25.81,type:"bossCamera",pos:[0,26,26],look:[0,0,-4],fov:58,roll:.03,dur:.72},{t:26.3,type:"caption",kicker:"III",title:"THE CLOCK",sub:"DO NOT LET IT STRIKE",hold:2.4},{t:26.332,type:"pulse",power:.68},{t:26.352,type:"wind",power:1.2},{t:27.97,type:"bossCamera",pos:[0,9.5,26],look:[0,5,-2],fov:51,roll:0,dur:.52},{t:27.97,type:"bossGlitch",power:1.15},{t:28.492,type:"bossCamera",pos:[0,7.4,19.2],look:[0,4.87,-2],fov:48.62,roll:0,dur:.6},{t:28.492,type:"bossGlitch",power:1.3},{t:28.492,type:"bossPhase",mode:"play"},{t:28.492,type:"bossTick",hand:"fast",power:.54},{t:28.492,type:"pulse",power:.61},{t:28.512,type:"echo",lane:0,dir:-1,power:.85},{t:30.992,type:"bossTick",hand:"slow",power:.54},{t:30.992,type:"pulse",power:.71},{t:33.492,type:"bossTick",hand:"fast",power:.54},{t:33.492,type:"pulse",power:.65},{t:33.512,type:"echo",lane:1,dir:-1,power:.88},{t:33.55,type:"bossCamera",pos:[0,8.1,18.4],look:[0,4.88,-3],fov:51.58,roll:0,dur:.8},{t:35.992,type:"bossTick",hand:"slow",power:.54},{t:35.992,type:"pulse",power:.61},{t:38.492,type:"bossTick",hand:"fast",power:.54},{t:38.492,type:"pulse",power:.61},{t:38.512,type:"echo",lane:6,dir:1,power:.85},{t:40.742,type:"bossCamera",pos:[-5,9.2,18.8],look:[2,5.2,-4],fov:52.07,roll:.02,dur:1},{t:40.992,type:"bossTick",hand:"slow",power:.54},{t:40.992,type:"pulse",power:.71},{t:43.492,type:"bossTick",hand:"fast",power:.54},{t:43.492,type:"pulse",power:.61},{t:43.512,type:"echo",lane:7,dir:1,power:.85},{t:45.992,type:"bossTick",hand:"slow",power:.54},{t:45.992,type:"pulse",power:.61},{t:48.492,type:"bossCamera",pos:[-4,7.8,17.2],look:[2,4.38,-6],fov:52.36,roll:-.02,dur:.9},{t:48.492,type:"bossGlitch",power:.7},{t:48.492,type:"bossTick",hand:"fast",power:.72},{t:48.492,type:"pulse",power:.62},{t:48.512,type:"echo",lane:0,dir:-1,power:.86},{t:50.992,type:"bossTick",hand:"slow",power:.72},{t:50.992,type:"pulse",power:.62},{t:53.492,type:"bossTick",hand:"fast",power:.72},{t:53.492,type:"pulse",power:.67},{t:53.512,type:"echo",lane:7,dir:1,power:.91},{t:54.117,type:"burst",lane:5,power:.97},{t:54.92,type:"bossCamera",pos:[5,8.05,16.4],look:[-2,4.43,-6],fov:54,roll:.03,dur:.9},{t:55.992,type:"bossTick",hand:"slow",power:.72},{t:55.992,type:"pulse",power:.77},{t:58.492,type:"bossTick",hand:"fast",power:.72},{t:58.492,type:"pulse",power:.62},{t:58.512,type:"echo",lane:0,dir:-1,power:.86},{t:60.992,type:"bossTick",hand:"slow",power:.72},{t:60.992,type:"pulse",power:.6},{t:61.492,type:"bossCamera",pos:[-7,6.6,15.4],look:[4,3.81,-10],fov:51,roll:-.04,dur:.7},{t:63.492,type:"bossTick",hand:"fast",power:.81},{t:63.492,type:"pulse",power:.64},{t:63.512,type:"echo",lane:0,dir:-1,power:.87},{t:63.59,type:"bossCamera",pos:[0,7.32,16.2],look:[0,3.91,-7],fov:54,roll:.03,dur:.6},{t:63.59,type:"bossGlitch",power:1.1},{t:63.61,type:"vibe",power:.67},{t:63.62,type:"motion",style:"orbit",amp:.13,speed:.75,pitch:.05},{t:65.215,type:"bossTick",hand:"fast",power:.85},{t:65.215,type:"pulse",power:.58},{t:65.235,type:"echo",lane:0,dir:-1,power:.81},{t:67.376,type:"bossTick",hand:"slow",power:.85},{t:67.376,type:"pulse",power:.54},{t:68.995,type:"wind",power:1.3},{t:69.536,type:"bossTick",hand:"fast",power:.85},{t:69.536,type:"pulse",power:.74},{t:69.556,type:"echo",lane:7,dir:1,power:.98},{t:70.069,type:"bossCamera",pos:[0,6.7,15.4],look:[0,3.46,-9],fov:54,roll:0,dur:.7},{t:70.069,type:"bossGlitch",power:1.2},{t:70.076,type:"burst",lane:1,power:1.05},{t:70.089,type:"vibe",power:.78},{t:70.099,type:"motion",style:"zigzag",amp:.16,speed:.95,pitch:.065},{t:70.62,type:"wind",power:1.3},{t:71.696,type:"bossTick",hand:"slow",power:.94},{t:71.696,type:"pulse",power:.65},{t:71.716,type:"echo",lane:0,dir:-1,power:.89},{t:73.856,type:"bossTick",hand:"fast",power:.94},{t:73.856,type:"pulse",power:.72},{t:74.39,type:"bossCamera",pos:[-6,6.9,14.6],look:[3,3.61,-10],fov:54,roll:.035,dur:.85},{t:76.017,type:"bossTick",hand:"slow",power:.94},{t:76.017,type:"pulse",power:.61},{t:76.037,type:"echo",lane:7,dir:1,power:.85},{t:76.557,type:"burst",lane:5,power:.91},{t:78.177,type:"bossTick",hand:"fast",power:.94},{t:78.177,type:"pulse",power:.72},{t:78.71,type:"bossCamera",pos:[6,7.19,15],look:[-3,3.67,-10],fov:54,roll:-.04,dur:.85},{t:79.595,type:"wind",power:1.3},{t:80.337,type:"bossTick",hand:"slow",power:.94},{t:80.337,type:"pulse",power:.63},{t:80.357,type:"echo",lane:0,dir:-1,power:.87},{t:82.497,type:"bossTick",hand:"fast",power:.94},{t:82.497,type:"pulse",power:.69},{t:83.03,type:"bossCamera",pos:[0,5.55,13.8],look:[0,3.27,-8],fov:54,roll:.02,dur:.85},{t:84.39,type:"wind",power:1.3},{t:84.657,type:"bossTick",hand:"slow",power:.94},{t:84.657,type:"pulse",power:.59},{t:84.677,type:"echo",lane:7,dir:1,power:.83},{t:85.197,type:"burst",lane:2,power:.89},{t:86.818,type:"bossTick",hand:"fast",power:.94},{t:86.818,type:"pulse",power:.65},{t:87.35,type:"bossCamera",pos:[-8,7.23,14.2],look:[4,4,-9],fov:54,roll:-.03,dur:.65},{t:88.978,type:"bossTick",hand:"slow",power:.94},{t:88.978,type:"pulse",power:.5},{t:88.998,type:"echo",lane:0,dir:-1,power:.73},{t:89.449,type:"bossCamera",pos:[0,8.8,20.2],look:[0,5.34,-2],fov:49.91,roll:0,dur:.9},{t:89.449,type:"bossGlitch",power:.9},{t:90.055,type:"wind",power:1.3},{t:91.138,type:"bossTick",hand:"fast",power:.53},{t:91.138,type:"pulse",power:.49},{t:91.158,type:"echo",lane:0,dir:-1,power:.72},{t:93.298,type:"bossTick",hand:"slow",power:.53},{t:93.298,type:"pulse",power:.65},{t:95.459,type:"bossTick",hand:"fast",power:.53},{t:95.459,type:"pulse",power:.69},{t:95.479,type:"echo",lane:1,dir:-1,power:.92},{t:97.438,type:"bossCamera",pos:[-8,9.6,18.4],look:[4,5.19,-6],fov:51.91,roll:.025,dur:1.1},{t:97.619,type:"bossTick",hand:"slow",power:.53},{t:97.619,type:"pulse",power:.52},{t:99.779,type:"bossTick",hand:"fast",power:.53},{t:99.779,type:"pulse",power:.72},{t:99.799,type:"echo",lane:6,dir:1,power:.96},{t:101.939,type:"bossTick",hand:"slow",power:.53},{t:101.939,type:"pulse",power:.75},{t:104.099,type:"bossTick",hand:"fast",power:.53},{t:104.099,type:"pulse",power:.89},{t:104.119,type:"echo",lane:7,dir:1,power:1.13},{t:105.429,type:"bossCamera",pos:[0,7.16,16],look:[0,4.01,-6],fov:54,roll:-.03,dur:.55},{t:105.429,type:"bossGlitch",power:.75},{t:105.459,type:"motion",style:"orbit",amp:.16,speed:.9,pitch:.06},{t:106.26,type:"bossTick",hand:"slow",power:.88},{t:106.26,type:"pulse",power:.55},{t:106.28,type:"echo",lane:0,dir:-1,power:.78},{t:107.509,type:"bossCamera",pos:[0,6.7,15.4],look:[0,3.6,-8],fov:54,roll:.02,dur:.6},{t:107.509,type:"bossGlitch",power:1.15},{t:107.529,type:"vibe",power:.83},{t:107.539,type:"motion",style:"clock",amp:.18,speed:1.05,pitch:.075},{t:108.42,type:"bossTick",hand:"fast",power:.97},{t:108.42,type:"pulse",power:.69},{t:110.58,type:"bossTick",hand:"slow",power:.97},{t:110.58,type:"pulse",power:.71},{t:111.829,type:"bossCamera",pos:[-7,6.9,14.2],look:[0,3.82,-9],fov:54,roll:-.04,dur:.9},{t:112.74,type:"bossTick",hand:"fast",power:.97},{t:112.74,type:"pulse",power:.69},{t:113.28,type:"burst",lane:3,power:1},{t:114.9,type:"bossTick",hand:"slow",power:.97},{t:114.9,type:"pulse",power:.69},{t:116.149,type:"bossCamera",pos:[5,5.7,13.2],look:[0,3.26,-10],fov:54,roll:.045,dur:.9},{t:117.061,type:"bossTick",hand:"fast",power:.97},{t:117.061,type:"pulse",power:.66},{t:119.221,type:"bossTick",hand:"slow",power:.97},{t:119.221,type:"pulse",power:.69},{t:120.469,type:"bossCamera",pos:[0,4.78,12.6],look:[0,2.7,-12],fov:54,roll:-.02,dur:.9},{t:121.381,type:"bossTick",hand:"fast",power:.97},{t:121.381,type:"pulse",power:.69},{t:121.921,type:"burst",lane:1,power:1},{t:123.541,type:"bossTick",hand:"slow",power:.97},{t:123.541,type:"pulse",power:.69},{t:123.829,type:"bossCamera",pos:[0,5.69,14],look:[0,3.1,-10],fov:54,roll:.03,dur:.7},{t:123.829,type:"bossGlitch",power:1.25},{t:123.849,type:"vibe",power:.9},{t:123.859,type:"motion",style:"orbit",amp:.2,speed:1.15,pitch:.085},{t:125.702,type:"bossTick",hand:"fast",power:1.02},{t:125.702,type:"pulse",power:.63},{t:127.862,type:"bossTick",hand:"slow",power:1.02},{t:127.862,type:"pulse",power:.64},{t:128.149,type:"bossCamera",pos:[-8,6.41,13],look:[0,3.68,-10],fov:54,roll:-.045,dur:.95},{t:128.531,type:"wind",power:1.3},{t:130.022,type:"bossTick",hand:"fast",power:1.02},{t:130.022,type:"pulse",power:.64},{t:130.562,type:"burst",lane:6,power:.94},{t:132.182,type:"bossTick",hand:"slow",power:1.02},{t:132.182,type:"pulse",power:.68},{t:132.246,type:"wind",power:1.3},{t:132.469,type:"bossCamera",pos:[8,6.03,12.4],look:[0,3.59,-10],fov:54,roll:.05,dur:.95},{t:134.342,type:"bossTick",hand:"fast",power:1.02},{t:134.342,type:"pulse",power:.63},{t:136.503,type:"bossTick",hand:"slow",power:1.02},{t:136.503,type:"pulse",power:.64},{t:136.789,type:"bossCamera",pos:[0,3.96,11.2],look:[0,2.53,-12],fov:54,roll:-.03,dur:.9},{t:138.663,type:"bossTick",hand:"fast",power:1.02},{t:138.663,type:"pulse",power:.63},{t:139.203,type:"burst",lane:6,power:.93},{t:140.823,type:"bossTick",hand:"slow",power:1.02},{t:140.823,type:"pulse",power:.51},{t:141.829,type:"bossCamera",pos:[0,9,19],look:[0,5.69,0],fov:52.39,roll:0,dur:1.2},{t:141.829,type:"bossGlitch",power:.7},{t:141.829,type:"bossPhase",mode:"outro"},{t:142.983,type:"bossTick",hand:"fast",power:.46},{t:145.143,type:"bossTick",hand:"slow",power:.46},{t:147.304,type:"bossTick",hand:"fast",power:.46}],ghosts:[{t:28.532,lane:0,type:"sweep"},{t:28.587,lane:1,type:"sweep"},{t:28.642,lane:6,type:"sweep"},{t:28.697,lane:7,type:"sweep"},{t:33.492,lane:0,type:"bounce"},{t:33.612,lane:1,type:"bounce"},{t:33.732,lane:6,type:"bounce"},{t:33.852,lane:7,type:"bounce"},{t:48.532,lane:0,type:"sweep"},{t:48.587,lane:7,type:"sweep"},{t:53.492,lane:0,type:"bounce"},{t:53.612,lane:7,type:"bounce"},{t:61.532,lane:0,type:"sweep"},{t:61.587,lane:7,type:"sweep"},{t:63.63,lane:0,type:"sweep"},{t:63.685,lane:7,type:"sweep"},{t:67.91,lane:0,type:"bounce"},{t:68.03,lane:7,type:"bounce"},{t:70.109,lane:0,type:"sweep"},{t:70.164,lane:7,type:"sweep"},{t:74.389,lane:0,type:"bounce"},{t:74.509,lane:7,type:"bounce"},{t:89.489,lane:0,type:"sweep"},{t:89.544,lane:1,type:"sweep"},{t:89.599,lane:6,type:"sweep"},{t:89.654,lane:7,type:"sweep"},{t:93.769,lane:0,type:"bounce"},{t:93.889,lane:1,type:"bounce"},{t:94.009,lane:6,type:"bounce"},{t:94.129,lane:7,type:"bounce"},{t:105.469,lane:0,type:"sweep"},{t:105.524,lane:7,type:"sweep"},{t:141.869,lane:0,type:"sweep"},{t:141.924,lane:1,type:"sweep"},{t:141.979,lane:6,type:"sweep"},{t:142.034,lane:7,type:"sweep"},{t:146.149,lane:0,type:"bounce"},{t:146.269,lane:1,type:"bounce"},{t:146.389,lane:6,type:"bounce"},{t:146.509,lane:7,type:"bounce"}]},fd={song:{title:"INTENTION",shortTitle:"INTENTION",artist:"ORIGINAL TRACK",bpm:180,bpmLabel:"180 / 195 BPM",bpmMap:[{t:0,bpm:75},{t:17.5,bpm:150},{t:74.5,bpm:165},{t:81,bpm:180},{t:94.2,bpm:195},{t:104,bpm:150},{t:181,bpm:150},{t:204.5,bpm:150}],duration:213.505,chartEnd:212.8,introEnd:17.5,beatOffset:.075,difficulty:"BOSS",laneLabel:"1 · 2 · 4 · 6",boss:!0,theme:"intention",laneColors:["#ffffff"],fadeStart:209.6,fadeEnd:212.2},sections:[{name:"VOID",start:0,end:17.5,keys:4,bpm:75,beatOffset:0,color:"#ffffff",accent:"#ffffff",energy:.2,bloom:.36,intro:!0,phase:"void",notes:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1},{name:"REVELATION",start:17.5,end:28.5,keys:4,bpm:150,beatOffset:.075,color:"#dff4ff",accent:"#ffffff",energy:.36,bloom:.5,phase:"ocean",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:.95},{name:"DESCENT",start:28.5,end:33.5,keys:1,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.55,bloom:.48,phase:"spin",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1},{name:"ASSAIL",start:33.5,end:46,keys:4,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.62,bloom:.5,phase:"field",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.02},{name:"LIBRA",start:46,end:61.5,keys:4,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.68,bloom:.55,phase:"pillars",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1},{name:"HALO",start:61.5,end:72,keys:4,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.7,bloom:.58,phase:"halo",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.05},{name:"DISTORTION",start:72,end:74.5,keys:4,bpm:150,beatOffset:.075,color:"#ffffff",accent:"#ffffff",energy:.3,bloom:.38,phase:"dark",notes:!1,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:.9},{name:"GUILT",start:74.5,end:81,keys:1,bpm:165,beatOffset:.075,color:"#ff3355",accent:"#ff3355",energy:.58,bloom:.32,phase:"guilt",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.05},{name:"GUILT II",start:81,end:88,keys:1,bpm:180,beatOffset:.075,color:"#ff3355",accent:"#ff3355",energy:.72,bloom:.34,phase:"guilt",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.12},{name:"OFFBEAT",start:88,end:94.2,keys:2,bpm:185,beatOffset:.19,color:"#ffffff",accent:"#ffffff",energy:.7,bloom:.4,phase:"offbeat",gimmick:!0,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.18},{name:"FASTBEAT",start:94.2,end:104,keys:1,bpm:195,beatOffset:.005,color:"#ffffff",accent:"#ffffff",energy:.82,bloom:.42,phase:"fastbeat",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.28},{name:"TIDE",start:104,end:117,keys:4,bpm:150,beatOffset:.375,color:"#dff4ff",accent:"#ffffff",energy:.5,bloom:.52,phase:"ocean2",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.02},{name:"MEMORY",start:117,end:139,keys:4,bpm:150,beatOffset:.375,color:"#dfe9ff",accent:"#ffffff",energy:.48,bloom:.5,phase:"memory",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1},{name:"STATIC",start:139,end:157,keys:4,bpm:145,beatOffset:.375,color:"#e6ecff",accent:"#ffffff",energy:.55,bloom:.48,phase:"static",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.04},{name:"DETERMINATION",start:157,end:181,keys:6,bpm:150,beatOffset:.375,color:"#fff6d8",accent:"#ffffff",energy:.78,bloom:.6,phase:"determined",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.12},{name:"WHITEOUT",start:181,end:182,keys:4,bpm:150,beatOffset:.375,color:"#ffffff",accent:"#ffffff",energy:.2,bloom:.2,phase:"white",notes:!1,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1},{name:"FAKE GUILT",start:182,end:204.5,keys:4,bpm:150,beatOffset:.385,color:"#ff3355",accent:"#ff3355",energy:.7,bloom:.36,phase:"fake",intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1.15},{name:"DAWN",start:204.5,end:213.505,keys:4,bpm:150,beatOffset:.385,color:"#ffe9a8",accent:"#ffffff",energy:.22,bloom:.6,phase:"dawn",notes:!1,intro:!1,camZ:17.2,camY:6.7,rotY:0,rotZ:0,tilt:0,spread:1,y:.06,spin:.02,motion:"fan",motionAmp:0,motionSpeed:.4,motionPitch:0,city:0,noteSpeed:1}],notes:[{t:20.095,lane:2},{t:20.496,lane:3},{t:20.917,lane:2},{t:21.288,lane:3,type:"hold",dur:.8},{t:21.689,lane:4},{t:22.1,lane:5},{t:22.491,lane:4},{t:22.892,lane:2},{t:23.293,lane:5},{t:23.684,lane:3},{t:23.904,lane:4},{t:24.084,lane:2,type:"hold",dur:.8},{t:24.896,lane:5,type:"hold",dur:.8},{t:25.287,lane:3},{t:25.648,lane:4},{t:26.31,lane:3},{t:26.5,lane:2},{t:26.901,lane:4},{t:27.101,lane:5},{t:27.302,lane:3},{t:27.703,lane:2},{t:28.104,lane:4},{t:28.875,lane:3},{t:28.996,lane:3},{t:29.096,lane:3},{t:29.296,lane:3},{t:29.397,lane:3},{t:29.497,lane:3},{t:29.697,lane:3},{t:30.238,lane:3},{t:30.499,lane:3},{t:31.281,lane:3},{t:32.073,lane:3},{t:32.884,lane:3},{t:33.105,lane:3},{t:33.696,lane:3},{t:33.917,lane:5,type:"hold",dur:.8},{t:34.498,lane:2},{t:34.699,lane:4},{t:34.889,lane:3},{t:35.32,lane:2},{t:35.49,lane:3},{t:35.721,lane:3},{t:35.921,lane:4},{t:36.122,lane:2},{t:36.292,lane:3},{t:36.883,lane:3},{t:37.084,lane:2},{t:37.284,lane:4},{t:37.525,lane:5},{t:37.685,lane:3},{t:37.875,lane:2},{t:38.096,lane:4},{t:38.517,lane:2},{t:38.728,lane:4},{t:38.888,lane:3},{t:39.068,lane:5,type:"hold",dur:.8},{t:39.259,lane:2},{t:39.449,lane:4},{t:40.091,lane:2},{t:40.852,lane:4},{t:41.063,lane:3},{t:41.684,lane:2},{t:41.855,lane:3},{t:42.526,lane:4},{t:42.657,lane:5},{t:43.288,lane:3},{t:44.1,lane:5},{t:44.501,lane:4},{t:44.882,lane:5},{t:45.683,lane:4},{t:46.485,lane:2},{t:47.287,lane:4},{t:47.475,lane:3},{t:48.089,lane:2,type:"hold",dur:.8},{t:48.259,lane:3},{t:48.77,lane:4},{t:48.901,lane:5},{t:49.075,lane:3},{t:49.652,lane:3},{t:49.853,lane:5},{t:50.053,lane:5},{t:50.254,lane:4},{t:50.474,lane:4},{t:50.635,lane:3},{t:50.855,lane:5},{t:51.296,lane:5},{t:51.436,lane:4},{t:51.978,lane:3},{t:52.098,lane:2},{t:52.248,lane:4},{t:52.489,lane:4},{t:52.769,lane:3},{t:52.91,lane:5},{t:53.05,lane:4},{t:53.301,lane:3},{t:53.461,lane:2},{t:53.691,lane:5},{t:53.862,lane:4},{t:54.483,lane:3},{t:54.675,lane:2},{t:54.874,lane:4},{t:55.085,lane:5},{t:55.285,lane:3},{t:55.455,lane:2},{t:56.097,lane:2},{t:56.247,lane:4},{t:56.488,lane:3,type:"hold",dur:.8},{t:56.738,lane:5},{t:56.889,lane:2},{t:57.049,lane:4},{t:57.701,lane:4},{t:58.482,lane:2},{t:58.653,lane:3},{t:59.284,lane:4},{t:60.086,lane:2},{t:60.266,lane:3},{t:60.487,lane:3},{t:60.888,lane:3},{t:61.68,lane:2},{t:61.87,lane:3},{t:62.231,lane:3},{t:62.491,lane:3},{t:62.622,lane:2},{t:62.882,lane:4},{t:63.293,lane:5},{t:63.475,lane:3},{t:63.684,lane:2},{t:64.105,lane:2},{t:64.636,lane:4},{t:64.897,lane:3},{t:65.438,lane:5},{t:65.689,lane:2},{t:65.839,lane:4},{t:66.075,lane:3},{t:66.27,lane:5},{t:66.5,lane:2},{t:66.681,lane:4},{t:67.172,lane:3},{t:67.302,lane:2,type:"hold",dur:.8},{t:67.813,lane:3},{t:68.084,lane:4,type:"hold",dur:.8},{t:68.535,lane:5},{t:68.635,lane:3},{t:68.916,lane:3},{t:69.708,lane:5},{t:70.449,lane:2},{t:70.62,lane:4},{t:70.72,lane:3},{t:70.83,lane:2},{t:71.301,lane:2},{t:71.432,lane:4},{t:74.984,lane:3},{t:75.17,lane:3},{t:75.701,lane:3},{t:76.092,lane:3},{t:76.403,lane:3},{t:76.653,lane:3},{t:76.884,lane:3},{t:77.175,lane:3},{t:77.936,lane:3},{t:78.047,lane:3},{t:78.608,lane:3},{t:79.38,lane:3},{t:79.53,lane:3},{t:80.075,lane:3},{t:80.242,lane:3},{t:80.382,lane:3},{t:80.592,lane:3},{t:80.753,lane:3},{t:81.404,lane:3},{t:81.575,lane:3},{t:81.725,lane:3},{t:81.895,lane:3},{t:82.086,lane:3},{t:82.246,lane:3},{t:82.742,lane:3},{t:82.908,lane:3},{t:83.075,lane:3},{t:83.238,lane:3},{t:83.379,lane:3},{t:83.539,lane:3},{t:84.1,lane:3},{t:84.461,lane:3},{t:84.702,lane:3},{t:85.193,lane:3},{t:85.423,lane:3},{t:86.075,lane:3},{t:86.265,lane:3},{t:86.776,lane:3},{t:86.987,lane:3},{t:87.448,lane:3},{t:88.43,lane:4},{t:88.568,lane:2},{t:88.731,lane:4},{t:88.871,lane:2},{t:89.051,lane:4},{t:89.202,lane:2},{t:89.693,lane:4},{t:89.853,lane:2},{t:90.044,lane:2},{t:90.214,lane:4},{t:90.374,lane:2},{t:90.545,lane:4},{t:90.976,lane:2},{t:91.627,lane:2},{t:92.299,lane:4},{t:92.469,lane:2},{t:92.91,lane:4},{t:93.071,lane:2},{t:93.552,lane:4},{t:94.353,lane:3},{t:94.744,lane:3},{t:95.346,lane:3},{t:95.851,lane:3},{t:95.987,lane:3},{t:96.148,lane:3},{t:96.288,lane:3},{t:96.619,lane:3},{t:96.729,lane:3},{t:97.26,lane:3},{t:97.39,lane:3},{t:97.541,lane:3},{t:97.861,lane:3},{t:98.032,lane:3},{t:98.322,lane:3},{t:98.493,lane:3},{t:98.593,lane:3},{t:99.084,lane:3},{t:99.235,lane:3},{t:99.696,lane:3},{t:99.846,lane:3},{t:100.006,lane:3},{t:100.337,lane:3},{t:100.437,lane:3},{t:100.798,lane:3},{t:100.948,lane:3},{t:101.109,lane:3},{t:101.55,lane:3},{t:101.69,lane:3},{t:102.171,lane:3},{t:102.62,lane:3},{t:102.793,lane:3},{t:103.224,lane:3},{t:103.344,lane:3},{t:103.543,lane:3},{t:104.156,lane:4},{t:104.416,lane:4},{t:104.957,lane:5},{t:105.168,lane:2},{t:106.02,lane:2},{t:106.13,lane:4},{t:106.762,lane:3},{t:106.962,lane:5,type:"hold",dur:.8},{t:107.623,lane:4,type:"hold",dur:.8},{t:107.974,lane:2},{t:108.185,lane:3},{t:108.395,lane:3},{t:109.207,lane:2},{t:109.367,lane:3},{t:109.979,lane:3},{t:110.149,lane:4},{t:110.791,lane:2},{t:111.375,lane:3},{t:111.592,lane:3},{t:112.184,lane:4},{t:112.394,lane:5},{t:112.825,lane:4},{t:112.986,lane:3},{t:113.206,lane:2},{t:113.787,lane:4},{t:114.038,lane:4},{t:114.138,lane:5},{t:114.79,lane:2},{t:114.94,lane:3},{t:115.581,lane:2},{t:116.133,lane:3},{t:116.375,lane:4},{t:117.155,lane:4},{t:117.947,lane:4},{t:118.779,lane:3},{t:119.16,lane:5},{t:119.56,lane:2,type:"hold",dur:.8},{t:120.175,lane:4},{t:120.362,lane:3},{t:120.944,lane:5},{t:121.175,lane:4},{t:121.956,lane:3},{t:122.175,lane:4},{t:122.775,lane:5},{t:122.975,lane:3},{t:123.575,lane:4},{t:123.775,lane:5,type:"hold",dur:.8},{t:124.375,lane:2},{t:124.592,lane:3},{t:125.153,lane:4},{t:125.554,lane:2},{t:125.955,lane:4},{t:126.546,lane:3},{t:126.775,lane:4},{t:127.575,lane:2},{t:128.26,lane:3},{t:128.4,lane:2},{t:129.002,lane:3},{t:129.202,lane:3},{t:129.784,lane:4},{t:130.004,lane:2},{t:130.175,lane:3},{t:130.375,lane:4},{t:130.605,lane:4},{t:130.746,lane:2},{t:130.966,lane:3},{t:131.588,lane:5},{t:131.758,lane:4},{t:132.4,lane:3},{t:132.57,lane:2},{t:133.191,lane:4},{t:133.783,lane:5},{t:134.003,lane:2},{t:134.745,lane:3},{t:135.206,lane:2},{t:135.575,lane:3},{t:136.188,lane:4},{t:136.389,lane:2},{t:136.779,lane:3},{t:136.99,lane:4},{t:137.2,lane:5},{t:137.802,lane:3},{t:137.982,lane:4},{t:138.584,lane:2},{t:138.804,lane:5},{t:139.375,lane:5},{t:139.977,lane:4},{t:140.187,lane:5},{t:140.999,lane:2},{t:141.881,lane:4},{t:142.001,lane:5},{t:142.773,lane:2},{t:143.404,lane:4},{t:143.545,lane:3},{t:143.775,lane:5,type:"hold",dur:.828},{t:144.106,lane:4},{t:144.407,lane:4},{t:144.587,lane:2},{t:144.888,lane:3},{t:144.988,lane:4},{t:145.199,lane:4},{t:145.379,lane:2},{t:145.78,lane:3},{t:146,lane:3},{t:146.181,lane:2},{t:146.692,lane:3},{t:146.902,lane:3},{t:147.103,lane:4},{t:147.714,lane:2},{t:148.516,lane:5},{t:148.666,lane:3},{t:149.057,lane:4},{t:149.388,lane:5},{t:149.588,lane:4},{t:149.789,lane:3},{t:149.999,lane:2,type:"hold",dur:.828},{t:150.168,lane:5},{t:150.375,lane:4},{t:150.982,lane:3},{t:151.382,lane:4},{t:151.783,lane:5},{t:152.004,lane:3},{t:152.605,lane:3},{t:152.876,lane:2},{t:153.507,lane:3},{t:153.688,lane:4},{t:153.888,lane:5},{t:154.306,lane:2},{t:154.55,lane:2},{t:155.161,lane:3},{t:155.361,lane:4},{t:155.961,lane:5},{t:156.789,lane:4},{t:157.206,lane:2},{t:157.326,lane:4},{t:157.546,lane:6},{t:157.977,lane:5},{t:158.168,lane:3},{t:158.549,lane:1,type:"hold",dur:.8},{t:158.789,lane:6,type:"hold",dur:.8},{t:159.01,lane:5},{t:159.2,lane:4},{t:159.571,lane:3},{t:159.761,lane:2},{t:160.383,lane:2},{t:160.575,lane:3},{t:161.175,lane:4},{t:161.415,lane:3},{t:162.007,lane:2},{t:162.575,lane:3},{t:162.778,lane:4},{t:163.199,lane:3},{t:163.4,lane:5},{t:163.6,lane:3},{t:163.75,lane:5},{t:163.991,lane:2},{t:164.372,lane:4},{t:164.943,lane:1},{t:165.174,lane:6},{t:165.745,lane:3},{t:165.976,lane:3},{t:166.547,lane:5},{t:166.787,lane:1},{t:167.339,lane:2},{t:167.579,lane:3},{t:168.14,lane:4},{t:168.391,lane:1},{t:168.541,lane:2},{t:169.213,lane:3},{t:169.343,lane:4},{t:169.874,lane:5},{t:169.985,lane:6},{t:170.145,lane:5},{t:170.335,lane:4},{t:170.776,lane:3},{t:170.927,lane:2},{t:171.358,lane:1},{t:171.578,lane:2},{t:172.16,lane:3},{t:172.39,lane:4},{t:172.54,lane:3},{t:172.921,lane:5},{t:173.041,lane:6},{t:173.192,lane:4},{t:173.813,lane:4},{t:173.974,lane:5},{t:174.124,lane:3},{t:174.535,lane:2},{t:174.645,lane:1},{t:174.775,lane:6},{t:174.946,lane:4},{t:175.196,lane:5},{t:175.347,lane:3},{t:175.587,lane:2},{t:175.718,lane:1},{t:175.978,lane:6},{t:176.128,lane:4},{t:176.249,lane:5},{t:176.359,lane:3},{t:176.539,lane:1},{t:177.201,lane:3},{t:177.391,lane:5},{t:177.943,lane:6},{t:178.133,lane:2},{t:178.394,lane:2},{t:178.784,lane:3},{t:179.005,lane:4},{t:179.406,lane:5},{t:179.606,lane:1},{t:179.777,lane:4},{t:179.997,lane:2},{t:180.198,lane:5},{t:180.388,lane:3},{t:180.599,lane:6},{t:180.799,lane:1},{t:182.172,lane:2},{t:182.383,lane:3},{t:182.613,lane:4},{t:182.784,lane:5},{t:182.985,lane:4,type:"hold",dur:.8},{t:183.185,lane:2},{t:183.385,lane:3},{t:183.585,lane:3},{t:184.385,lane:2},{t:185.185,lane:5},{t:185.951,lane:3},{t:186.161,lane:2},{t:186.362,lane:4},{t:186.763,lane:4},{t:186.993,lane:5},{t:187.574,lane:3},{t:187.805,lane:3},{t:187.945,lane:2},{t:188.346,lane:4},{t:188.577,lane:5},{t:189.178,lane:3},{t:189.96,lane:4},{t:190.551,lane:5},{t:190.772,lane:2,type:"hold",dur:.8},{t:190.942,lane:3},{t:191.152,lane:3},{t:191.385,lane:4},{t:191.563,lane:5},{t:191.764,lane:3},{t:192.155,lane:3},{t:192.355,lane:4},{t:192.566,lane:3},{t:193.147,lane:5},{t:193.385,lane:4},{t:193.578,lane:3},{t:194.009,lane:3},{t:194.179,lane:5},{t:194.36,lane:2},{t:194.58,lane:4},{t:194.761,lane:3},{t:194.981,lane:5},{t:195.121,lane:4},{t:195.572,lane:4},{t:196.364,lane:2},{t:196.545,lane:3},{t:196.775,lane:3},{t:196.835,lane:4},{t:197.185,lane:3},{t:197.617,lane:2},{t:197.958,lane:4},{t:198.198,lane:5},{t:198.76,lane:3},{t:198.96,lane:2},{t:199.161,lane:4},{t:199.361,lane:3},{t:199.541,lane:5},{t:199.772,lane:4},{t:199.972,lane:3},{t:200.353,lane:3},{t:200.554,lane:2},{t:200.965,lane:4},{t:201.165,lane:3},{t:201.356,lane:5},{t:201.556,lane:4},{t:201.756,lane:3},{t:202.007,lane:2},{t:202.157,lane:3},{t:202.228,lane:4},{t:202.779,lane:5},{t:203.571,lane:2},{t:204.152,lane:3}],events:[{t:0,type:"bossCamera",pos:[0,10,34],look:[0,11,-70],fov:52,roll:0,dur:.01},{t:0,type:"intent",mode:"phase",phase:"void"},{t:0,type:"bossGlitch",power:.35},{t:0,type:"pulse",power:.35},{t:1.1,type:"caption",kicker:"PROLOGUE",title:"INTENTION",sub:"A BOSS IN FOUR MEMORIES",hold:4.6},{t:3.2,type:"pulse",power:.58},{t:4.8,type:"bossCamera",pos:[0,9,31],look:[0,10,-66],fov:54,roll:-.012,dur:1.6},{t:6.4,type:"pulse",power:.55},{t:8.6,type:"bossCamera",pos:[-7,7,25],look:[5,9,-58],fov:58,roll:.02,dur:1.8},{t:9.6,type:"pulse",power:.58},{t:10.6,type:"bossGlitch",power:.55},{t:12.8,type:"bossCamera",pos:[5,8.5,28],look:[-4,9,-62],fov:55,roll:-.018,dur:1.7},{t:12.8,type:"pulse",power:.61},{t:13.2,type:"caption",kicker:"REVELATION",title:"THE OCEAN REMEMBERS",sub:"ONE LINE. ONE BREATH.",hold:3.2},{t:16,type:"pulse",power:.94},{t:16.01,type:"vibe",power:.94},{t:17.5,type:"intent",mode:"phase",phase:"ocean"},{t:17.5,type:"intent",mode:"hud",hud:"clear"},{t:17.5,type:"bossCamera",pos:[0,7.2,20],look:[0,4,-12],fov:55,roll:0,dur:1.6},{t:17.5,type:"bossGlitch",power:.7},{t:17.5,type:"bossPhase",mode:"play"},{t:17.675,type:"pulse",power:.76},{t:19.275,type:"pulse",power:.76},{t:20.6,type:"bossCamera",pos:[-5.5,6.2,17],look:[1.8,3.4,-6],fov:53,roll:.012,dur:1.3},{t:20.875,type:"pulse",power:.78},{t:22.475,type:"pulse",power:.73},{t:24,type:"bossCamera",pos:[5.5,6.8,16],look:[-1.8,3.5,-7],fov:53,roll:-.015,dur:1.3},{t:24.075,type:"pulse",power:.62},{t:25.675,type:"pulse",power:.73},{t:27,type:"bossCamera",pos:[0,7,18],look:[0,4,-9],fov:54,roll:0,dur:1},{t:27.275,type:"pulse",power:.78},{t:28.5,type:"intent",mode:"phase",phase:"spin"},{t:28.5,type:"bossCamera",pos:[0,2.6,7.2],look:[0,1.5,0],fov:58,roll:0,dur:.4},{t:28.8,type:"caption",kicker:"DESCENT",title:"ONE LINE",sub:"HOLD THE CENTRE",hold:2.4},{t:28.875,type:"pulse",power:.95},{t:29.2,type:"bossCamera",pos:[1.7134407061580625,1.7,5.4526683736126955],look:[0,1.2,0],fov:60,roll:.03894183423086506,dur:.55},{t:29.2,type:"bossGlitch",power:.32},{t:29.92,type:"bossCamera",pos:[4.36643411774139,2.8,1.9424510073951176],look:[0,1.2,0],fov:60,roll:.09923713903957704,dur:.55},{t:29.92,type:"bossGlitch",power:.32},{t:30.475,type:"pulse",power:.58},{t:30.64,type:"bossCamera",pos:[2.6529934115833282,1.7,-2.1102173662175763],look:[0,1.2,0],fov:60,roll:.06029530480871201,dur:.55},{t:30.64,type:"bossGlitch",power:.32},{t:31.36,type:"bossCamera",pos:[-1.7134407061580614,2.8,-2.6526683736126953],look:[0,1.2,0],fov:60,roll:-.03894183423086503,dur:.55},{t:31.36,type:"bossGlitch",power:.32},{t:32.075,type:"pulse",power:.58},{t:32.08,type:"bossCamera",pos:[-4.366434117741389,1.7,.8575489926048817],look:[0,1.2,0],fov:60,roll:-.09923713903957702,dur:.55},{t:32.08,type:"bossGlitch",power:.32},{t:32.8,type:"bossCamera",pos:[-2.6529934115833256,2.8,4.910217366217578],look:[0,1.2,0],fov:60,roll:-.06029530480871194,dur:.55},{t:32.8,type:"bossGlitch",power:.32},{t:33.2,type:"intent",mode:"phase",phase:"field"},{t:33.2,type:"bossCamera",pos:[0,7,17.2],look:[0,4.05,0],fov:50,roll:0,dur:.7},{t:33.675,type:"pulse",power:.67},{t:35.275,type:"pulse",power:.67},{t:36,type:"bossCamera",pos:[-4.5,6,15.5],look:[1.2,3.5,-2],fov:52,roll:.02,dur:1.2},{t:36.875,type:"pulse",power:.67},{t:38.475,type:"pulse",power:.69},{t:40,type:"bossCamera",pos:[4.5,6.4,16.5],look:[-1.2,3.6,-2],fov:52,roll:-.02,dur:1.2},{t:40.075,type:"pulse",power:.77},{t:41.675,type:"pulse",power:.69},{t:43.275,type:"pulse",power:.58},{t:44.875,type:"pulse",power:.65},{t:46,type:"intent",mode:"phase",phase:"pillars"},{t:46,type:"bossCamera",pos:[-9,5.2,16],look:[2.5,3.1,-7],fov:56,roll:.025,dur:1.5},{t:46,type:"bossGlitch",power:.55},{t:46.4,type:"caption",kicker:"APOTHEOSIS",title:"LIBRA",sub:"FOUR PILLARS. ONE WEIGHT.",hold:3.4},{t:46.475,type:"pulse",power:.57},{t:48.075,type:"pulse",power:.57},{t:49.4,type:"bossCamera",pos:[-14,6,10],look:[4.5,3.4,-12],fov:58,roll:.035,dur:1.4},{t:49.675,type:"pulse",power:.63},{t:51.275,type:"pulse",power:.57},{t:52.8,type:"bossCamera",pos:[12,5.6,12],look:[-3.5,3.2,-10],fov:58,roll:-.03,dur:1.5},{t:52.875,type:"pulse",power:.59},{t:54.475,type:"pulse",power:.55},{t:56.075,type:"pulse",power:.61},{t:56.2,type:"bossCamera",pos:[15,6.6,5],look:[-4,3.8,-16],fov:58,roll:-.04,dur:1.4},{t:57.675,type:"pulse",power:.57},{t:59.2,type:"bossCamera",pos:[3,7.2,10],look:[0,4,-12],fov:56,roll:.02,dur:1.2},{t:59.275,type:"pulse",power:.61},{t:60.875,type:"pulse",power:.69},{t:61.5,type:"intent",mode:"phase",phase:"halo"},{t:61.5,type:"bossCamera",pos:[0,14.5,13],look:[0,0,-12],fov:62,roll:0,dur:1.2},{t:61.5,type:"bossGlitch",power:.8},{t:61.8,type:"intent",mode:"hud",hud:"text",text:"INTENTIONS",sub:"LOOK UP",hold:3.4},{t:62.475,type:"pulse",power:.63},{t:63.4,type:"bossCamera",pos:[0,15.5,7],look:[0,0,-16],fov:62,roll:.03,dur:1.1},{t:64.075,type:"pulse",power:.61},{t:65.675,type:"pulse",power:.59},{t:65.8,type:"bossCamera",pos:[0,13,8],look:[0,0,-8],fov:60,roll:-.03,dur:1.2},{t:67.275,type:"pulse",power:.61},{t:68.4,type:"bossCamera",pos:[4,9,14],look:[-1,2.4,-6],fov:55,roll:.035,dur:1.3},{t:68.875,type:"pulse",power:.59},{t:70.475,type:"pulse",power:.57},{t:70.6,type:"bossCamera",pos:[0,8,17],look:[0,4,0],fov:53,roll:0,dur:1},{t:72,type:"intent",mode:"phase",phase:"dark"},{t:72,type:"intent",mode:"hud",hud:"distort",power:1},{t:72,type:"intent",mode:"hud",hud:"heartbeat",on:!0,bpm:150},{t:72,type:"bossCamera",pos:[0,3.2,8],look:[0,2.5,-1],fov:56,roll:.025,dur:.8},{t:72,type:"bossGlitch",power:1.2},{t:73.3,type:"bossCamera",pos:[0,2.4,6.2],look:[0,2.2,-1],fov:60,roll:-.04,dur:.7},{t:74.5,type:"intent",mode:"phase",phase:"guilt"},{t:74.5,type:"intent",mode:"hud",hud:"distort",on:!1},{t:74.5,type:"intent",mode:"hud",hud:"black",on:!0},{t:74.5,type:"intent",mode:"hud",hud:"guilt",on:!0,value:100},{t:74.5,type:"intent",mode:"hud",hud:"heartbeat",on:!0,bpm:160},{t:74.5,type:"bossCamera",pos:[0,2.8,11.4],look:[0,2.4,0],fov:52,roll:0,dur:.7},{t:74.5,type:"bossGlitch",power:1.1},{t:75,type:"caption",kicker:"GUILT",title:"READY",sub:"KEEP IT FULL",hold:2.6},{t:75.711,type:"pulse",power:.66},{t:77.166,type:"pulse",power:.7},{t:78,type:"bossCamera",pos:[0,2.6,9.4],look:[0,2.2,0],fov:54,roll:.015,dur:1},{t:78.62,type:"pulse",power:.68},{t:80.075,type:"pulse",power:.66},{t:81,type:"bossCamera",pos:[0,3.2,12.2],look:[0,2.6,0],fov:52,roll:-.015,dur:1},{t:81,type:"bossGlitch",power:.75},{t:81.2,type:"caption",kicker:"GUILT II",title:"FASTER",sub:"TRUST THE PULSE",hold:2.2},{t:81.408,type:"pulse",power:.62},{t:82.742,type:"pulse",power:.6},{t:84.075,type:"pulse",power:.58},{t:85.408,type:"pulse",power:.6},{t:86.742,type:"pulse",power:.66},{t:88,type:"intent",mode:"phase",phase:"offbeat"},{t:88,type:"intent",mode:"hud",hud:"glitch",on:!0},{t:88,type:"bossCamera",pos:[0,4,14.8],look:[0,3.1,0],fov:54,roll:0,dur:.8},{t:88,type:"bossGlitch",power:1},{t:88.2,type:"caption",kicker:"FRACTURE",title:"OFFBEAT",sub:"TWO LINES. FOURTH BEAT.",hold:3},{t:88.406,type:"pulse",power:.63},{t:89.704,type:"pulse",power:.65},{t:91,type:"bossCamera",pos:[-3,3.6,12.5],look:[1,2.8,0],fov:52,roll:.02,dur:.9},{t:91.001,type:"pulse",power:.61},{t:92.298,type:"pulse",power:.59},{t:93.595,type:"pulse",power:.59},{t:94.2,type:"intent",mode:"phase",phase:"fastbeat"},{t:94.2,type:"intent",mode:"hud",hud:"heartbeat",on:!0,bpm:195},{t:94.2,type:"caption",kicker:"FASTBEAT",title:"READY",sub:"FASTER STILL",hold:2.2},{t:94.2,type:"bossGlitch",power:.9},{t:94.2,type:"bossCamera",pos:[3,4.2,14.2],look:[-1,3.1,0],fov:52,roll:-.02,dur:.9},{t:94.774,type:"pulse",power:.53},{t:96.005,type:"pulse",power:.59},{t:97,type:"bossCamera",pos:[0,3.5,11.5],look:[0,2.7,0],fov:50,roll:0,dur:.8},{t:97.236,type:"pulse",power:.55},{t:98.467,type:"pulse",power:.59},{t:99.697,type:"pulse",power:.51},{t:100,type:"bossCamera",pos:[0,3.2,10.5],look:[0,2.5,0],fov:50,roll:.045,dur:.8},{t:100,type:"bossGlitch",power:1},{t:100.2,type:"caption",kicker:"FASTBEAT II",title:"ONE LINE",sub:"NO ROOM LEFT",hold:2.2},{t:100.928,type:"pulse",power:.6},{t:102.159,type:"pulse",power:.53},{t:102.4,type:"bossCamera",pos:[-2.4,2.9,9.4],look:[.6,2.4,0],fov:52,roll:.055,dur:.6},{t:103.39,type:"pulse",power:.59},{t:103.4,type:"bossCamera",pos:[2.4,3.1,9],look:[-.6,2.5,0],fov:53,roll:-.06,dur:.5},{t:103.4,type:"bossGlitch",power:1.2},{t:104,type:"intent",mode:"phase",phase:"ocean2"},{t:104,type:"intent",mode:"hud",hud:"black",on:!1},{t:104,type:"intent",mode:"hud",hud:"guilt",on:!1},{t:104,type:"intent",mode:"hud",hud:"heartbeat",on:!1},{t:104,type:"intent",mode:"hud",hud:"glitch",on:!1},{t:104,type:"intent",mode:"hud",hud:"clear"},{t:104,type:"bossCamera",pos:[0,8,21],look:[0,4.2,-12],fov:55,roll:0,dur:1.3},{t:104.375,type:"pulse",power:.75},{t:105.975,type:"pulse",power:.7},{t:107.575,type:"pulse",power:.68},{t:108,type:"bossCamera",pos:[-6,7,19],look:[1.8,4,-10],fov:54,roll:.02,dur:1.4},{t:109.175,type:"pulse",power:.63},{t:110.775,type:"pulse",power:.56},{t:112,type:"bossCamera",pos:[6,8,18],look:[-1.8,4.2,-9],fov:54,roll:-.02,dur:1.4},{t:112.375,type:"pulse",power:.66},{t:113.975,type:"pulse",power:.84},{t:115.5,type:"bossCamera",pos:[0,8.6,21],look:[0,4.8,-14],fov:54,roll:0,dur:1.1},{t:115.575,type:"pulse",power:.49},{t:117,type:"intent",mode:"phase",phase:"memory"},{t:117,type:"intent",mode:"hud",hud:"static",on:!0,power:.6},{t:117,type:"intent",mode:"hud",hud:"heartbeat",on:!0,bpm:90},{t:117,type:"bossCamera",pos:[0,8.2,21],look:[0,5.2,-16],fov:55,roll:0,dur:1.4},{t:117,type:"bossGlitch",power:.6},{t:117.175,type:"pulse",power:.45},{t:117.6,type:"caption",kicker:"MEMORY",title:"THE MEMORY RISES",sub:"DO NOT LET GO",hold:3.4},{t:118.775,type:"pulse",power:.45},{t:120.375,type:"pulse",power:.47},{t:121.975,type:"pulse",power:.43},{t:123,type:"bossCamera",pos:[0,8,19],look:[0,6,-20],fov:55,roll:.015,dur:1.6},{t:123.575,type:"pulse",power:.4},{t:125.175,type:"pulse",power:.52},{t:126.775,type:"pulse",power:.5},{t:128.375,type:"pulse",power:.69},{t:129,type:"bossCamera",pos:[0,8.4,19.5],look:[0,5.8,-18],fov:55,roll:-.012,dur:1.6},{t:129.975,type:"pulse",power:.73},{t:131.575,type:"pulse",power:.73},{t:133.175,type:"pulse",power:.76},{t:134.775,type:"pulse",power:.66},{t:135,type:"bossCamera",pos:[0,8.2,20],look:[0,5.2,-15],fov:55,roll:0,dur:1.4},{t:136.375,type:"pulse",power:.71},{t:137.975,type:"pulse",power:.64},{t:139,type:"intent",mode:"phase",phase:"static"},{t:139,type:"intent",mode:"hud",hud:"static",on:!0,power:1},{t:139,type:"intent",mode:"hud",hud:"distort",on:!0,power:.6},{t:139,type:"bossCamera",pos:[0,7.4,18.5],look:[0,4.4,-8],fov:55,roll:.015,dur:1.2},{t:139,type:"bossGlitch",power:.8},{t:139.4,type:"caption",kicker:"",title:"STATIC",sub:"SOMETHING REMAINS",hold:2.8},{t:139.409,type:"pulse",power:.6},{t:141.065,type:"pulse",power:.62},{t:142.72,type:"pulse",power:.66},{t:144.375,type:"pulse",power:.71},{t:145,type:"bossCamera",pos:[-4,7.2,17],look:[1.4,4.2,-6],fov:54,roll:.02,dur:1.5},{t:146.03,type:"pulse",power:.66},{t:147.685,type:"pulse",power:.71},{t:149.341,type:"pulse",power:.69},{t:150.996,type:"pulse",power:.66},{t:151,type:"bossCamera",pos:[4,7.8,19],look:[-1.4,4.4,-7],fov:54,roll:-.02,dur:1.5},{t:152.651,type:"pulse",power:.71},{t:154.306,type:"pulse",power:.58},{t:155.961,type:"pulse",power:.49},{t:157,type:"intent",mode:"phase",phase:"determined"},{t:157,type:"intent",mode:"hud",hud:"static",on:!1},{t:157,type:"intent",mode:"hud",hud:"distort",on:!1},{t:157,type:"intent",mode:"hud",hud:"heartbeat",on:!1},{t:157,type:"intent",mode:"hud",hud:"bright",on:!0},{t:157,type:"bossCamera",pos:[0,8.6,23],look:[0,4.8,-9],fov:55,roll:0,dur:1.4},{t:157,type:"bossGlitch",power:.5},{t:157.175,type:"pulse",power:.57},{t:157.4,type:"caption",kicker:"",title:"DETERMINATION",sub:"ALL OF IT, NOW",hold:3.2},{t:158.775,type:"pulse",power:.63},{t:160.375,type:"pulse",power:.57},{t:161.975,type:"pulse",power:.52},{t:163,type:"bossCamera",pos:[-5,7.4,19],look:[1.6,4.2,-4],fov:53,roll:.018,dur:1.4},{t:163.575,type:"pulse",power:.56},{t:165.175,type:"pulse",power:.52},{t:166.775,type:"pulse",power:.59},{t:168.375,type:"pulse",power:.63},{t:169,type:"bossCamera",pos:[5,7.8,20],look:[-1.6,4.4,-5],fov:53,roll:-.018,dur:1.4},{t:169.975,type:"pulse",power:.59},{t:171.575,type:"pulse",power:.61},{t:173.175,type:"pulse",power:.61},{t:174.775,type:"pulse",power:.63},{t:175,type:"bossCamera",pos:[0,8.4,22],look:[0,4.8,-8],fov:54,roll:0,dur:1.4},{t:176.375,type:"pulse",power:.63},{t:177.975,type:"pulse",power:.61},{t:179.575,type:"pulse",power:.63},{t:181,type:"intent",mode:"phase",phase:"white"},{t:181,type:"intent",mode:"hud",hud:"white",on:!0},{t:181,type:"bossCamera",pos:[0,8,20],look:[0,4,0],fov:54,roll:0,dur:.4},{t:181,type:"bossGlitch",power:1.2},{t:182,type:"intent",mode:"phase",phase:"fake"},{t:182,type:"intent",mode:"hud",hud:"white",on:!1},{t:182,type:"intent",mode:"hud",hud:"black",on:!0},{t:182,type:"intent",mode:"hud",hud:"fakeGuilt",on:!0,value:14},{t:182,type:"intent",mode:"hud",hud:"heartbeat",on:!0,bpm:150},{t:182,type:"intent",mode:"hud",hud:"glitch",on:!0},{t:182,type:"bossCamera",pos:[0,3.3,12],look:[0,2.7,0],fov:50,roll:.02,dur:.6},{t:182,type:"bossGlitch",power:1.2},{t:182.4,type:"caption",kicker:"",title:"GUILT",sub:"IT WILL NOT REFILL",hold:3},{t:182.785,type:"pulse",power:.35},{t:184.385,type:"pulse",power:.37},{t:185.985,type:"pulse",power:.59},{t:187.585,type:"pulse",power:.51},{t:188,type:"bossCamera",pos:[0,3.1,10.8],look:[0,2.5,0],fov:49,roll:-.02,dur:1},{t:189.185,type:"pulse",power:.49},{t:190.785,type:"pulse",power:.47},{t:192.385,type:"pulse",power:.61},{t:193.985,type:"pulse",power:.76},{t:194,type:"bossCamera",pos:[0,3.7,13.2],look:[0,3,0],fov:51,roll:.015,dur:1},{t:194,type:"bossGlitch",power:.8},{t:195.585,type:"pulse",power:.55},{t:197.185,type:"pulse",power:.57},{t:198.785,type:"pulse",power:.55},{t:200,type:"bossCamera",pos:[0,3.4,11.5],look:[0,2.8,0],fov:50,roll:-.015,dur:.9},{t:200,type:"bossGlitch",power:.9},{t:200.385,type:"pulse",power:.57},{t:201.985,type:"pulse",power:.65},{t:203.585,type:"pulse",power:.43},{t:204.5,type:"intent",mode:"phase",phase:"dawn"},{t:204.5,type:"intent",mode:"hud",hud:"fakeGuilt",on:!1},{t:204.5,type:"intent",mode:"hud",hud:"black",on:!1},{t:204.5,type:"intent",mode:"hud",hud:"glitch",on:!1},{t:204.5,type:"intent",mode:"hud",hud:"heartbeat",on:!1},{t:204.5,type:"intent",mode:"hud",hud:"bright",on:!1},{t:204.5,type:"intent",mode:"hud",hud:"yellow",on:!0},{t:204.5,type:"intent",mode:"hud",hud:"rainbow",on:!0},{t:204.5,type:"bossPhase",mode:"outro"},{t:204.5,type:"caption",kicker:"",title:"DAWN",sub:"THE WEIGHT IS LIGHT",hold:4},{t:204.5,type:"bossCamera",pos:[0,7.5,20],look:[0,4.5,-12],fov:55,roll:0,dur:1.4},{t:204.5,type:"bossGlitch",power:.8},{t:208,type:"bossCamera",pos:[0,9.5,25],look:[0,8,-40],fov:56,roll:0,dur:2.2},{t:211.2,type:"bossCamera",pos:[0,12,30],look:[0,12,-60],fov:58,roll:0,dur:2},{t:211.5,type:"intent",mode:"hud",hud:"white",on:!1}],ghosts:[]},ma=[{id:"cryout",title:"CRYOUT",shortTitle:"CRYOUT",artist:"ORIGINAL TRACK",bpm:100,duration:138.1,audio:"./audio/cryout.mp3",difficulty:"ADVANCED",laneLabel:"4 · 6 · 8",blurb:"Neon field • 360° camera • 8-lane climax",accent:"#5ee7ff",chart:rd,fadeStart:131.4,fadeEnd:133.4},{id:"world",title:"WORLD YEARNING FOR AN END",shortTitle:"WORLD YEARNING",artist:"ORIGINAL TRACK",bpm:120,duration:143.47,audio:"./audio/world-yearning.mp3",difficulty:"HARD",laneLabel:"4 · 6",blurb:"City intro • diagonal lanes • thumb-hard patterns",accent:"#ffb45e",chart:sd,fadeStart:140.8,fadeEnd:142.9},{id:"chronostasis",title:"CHRONOSTASIS",shortTitle:"CHRONOSTASIS",artist:"ORIGINAL TRACK",bpm:99.4,duration:142.1,audio:"./audio/chronostasis.mp3",difficulty:"EXPERT",laneLabel:"4 · 6",blurb:"Clockwork skyline • frozen time • swinging pendulum",accent:"#ffd166",chart:ld,fadeStart:138.4,fadeEnd:140},{id:"untouchable",title:"THE UNTOUCHABLE OF f RA IA'S LAND",shortTitle:"THE UNTOUCHABLE",artist:"f RA IA",bpm:111.1,bpmLabel:"111 / 96 BPM",duration:147.54,audio:"./audio/untouchable.mp3",difficulty:"BOSS",laneLabel:"4 · 6 · 8",blurb:"Gothic nave • cathedral clock • free-flying notes",accent:"#ff3b5c",chart:cd,boss:!0,theme:"untouchable",fadeStart:139.8,fadeEnd:141.8,clearTag:"THE UNTOUCHABLE // FELLED"},{id:"intention",title:"INTENTION",shortTitle:"INTENTION",artist:"ORIGINAL TRACK",bpm:180,bpmLabel:"180 / 195 BPM",duration:213.5,audio:"./audio/intention.mp3",difficulty:"BOSS",laneLabel:"1 · 2 · 4 · 6",blurb:"Ocean void • golden libra • guilt engine",accent:"#ffd166",chart:fd,boss:!0,theme:"intention",fadeStart:209.6,fadeEnd:212.2,clearTag:"INTENTION // FORGIVEN"}],ud="cryout",pl=Object.fromEntries(ma.map(i=>[i.id,i]));const ml="180",dd=0,$l=1,hd=2,hf=1,pd=2,$n=3,wi=0,mn=1,jn=2,Qn=0,bn=1,Mt=2,jl=3,Jl=4,md=5,Ni=100,gd=101,yd=102,_d=103,vd=104,xd=200,bd=201,Md=202,wd=203,gs=204,ys=205,Sd=206,Td=207,Ed=208,Ad=209,Cd=210,Rd=211,Pd=212,Ld=213,Id=214,_s=0,vs=1,xs=2,va=3,bs=4,Ms=5,ws=6,Ss=7,pf=0,Dd=1,Ud=2,xi=0,mf=1,gf=2,yf=3,gl=4,_f=5,vf=6,xf=7,bf=300,xa=301,ba=302,Ts=303,Es=304,gr=306,Bi=1e3,vi=1001,As=1002,kn=1003,kd=1004,bo=1005,Bn=1006,Or=1007,Oi=1008,ii=1009,Mf=1010,wf=1011,Ja=1012,yl=1013,zi=1014,Jn=1015,ei=1016,_l=1017,vl=1018,Qa=1020,Sf=35902,Tf=35899,Ef=1021,Af=1022,Un=1023,eo=1026,to=1027,Cf=1028,xl=1029,Rf=1030,bl=1031,Ml=1033,tr=33776,nr=33777,ir=33778,ar=33779,Cs=35840,Rs=35841,Ps=35842,Ls=35843,Is=36196,Ds=37492,Us=37496,ks=37808,Ns=37809,Fs=37810,Os=37811,Bs=37812,zs=37813,Gs=37814,Hs=37815,Vs=37816,Ws=37817,Xs=37818,Ys=37819,Zs=37820,qs=37821,Ks=36492,$s=36494,js=36495,Js=36283,Qs=36284,el=36285,tl=36286,Nd=3200,Fd=3201,Od=0,Bd=1,_i="",hn="srgb",Ma="srgb-linear",cr="linear",Ut="srgb",qi=7680,Ql=519,zd=512,Gd=513,Hd=514,Pf=515,Vd=516,Wd=517,Xd=518,Yd=519,nl=35044,ec="300 es",zn=2e3,fr=2001;class Ra{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const a=n[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const a=n.slice(0);for(let o=0,s=a.length;o<s;o++)a[o].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let tc=1234567;const Za=Math.PI/180,no=180/Math.PI;function ti(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[t&63|128]+ln[t>>8&255]+"-"+ln[t>>16&255]+ln[t>>24&255]+ln[n&255]+ln[n>>8&255]+ln[n>>16&255]+ln[n>>24&255]).toLowerCase()}function vt(i,e,t){return Math.max(e,Math.min(t,i))}function wl(i,e){return(i%e+e)%e}function Zd(i,e,t,n,a){return n+(i-e)*(a-n)/(t-e)}function qd(i,e,t){return i!==e?(t-i)/(e-i):0}function qa(i,e,t){return(1-t)*i+t*e}function Kd(i,e,t,n){return qa(i,e,1-Math.exp(-t*n))}function $d(i,e=1){return e-Math.abs(wl(i,e*2)-e)}function jd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Jd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function eh(i,e){return i+Math.random()*(e-i)}function th(i){return i*(.5-Math.random())}function nh(i){i!==void 0&&(tc=i);let e=tc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ih(i){return i*Za}function ah(i){return i*no}function oh(i){return(i&i-1)===0&&i!==0}function rh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function sh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function lh(i,e,t,n,a){const o=Math.cos,s=Math.sin,r=o(t/2),l=s(t/2),c=o((e+n)/2),f=s((e+n)/2),u=o((e-n)/2),h=s((e-n)/2),p=o((n-e)/2),y=s((n-e)/2);switch(a){case"XYX":i.set(r*f,l*u,l*h,r*c);break;case"YZY":i.set(l*h,r*f,l*u,r*c);break;case"ZXZ":i.set(l*u,l*h,r*f,r*c);break;case"XZX":i.set(r*f,l*y,l*p,r*c);break;case"YXY":i.set(l*p,r*f,l*y,r*c);break;case"ZYZ":i.set(l*y,l*p,r*f,r*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Dn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Mo={DEG2RAD:Za,RAD2DEG:no,generateUUID:ti,clamp:vt,euclideanModulo:wl,mapLinear:Zd,inverseLerp:qd,lerp:qa,damp:Kd,pingpong:$d,smoothstep:jd,smootherstep:Jd,randInt:Qd,randFloat:eh,randFloatSpread:th,seededRandom:nh,degToRad:ih,radToDeg:ah,isPowerOfTwo:oh,ceilPowerOfTwo:rh,floorPowerOfTwo:sh,setQuaternionFromProperEuler:lh,normalize:kt,denormalize:Dn};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6],this.y=a[1]*t+a[4]*n+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),a=Math.sin(t),o=this.x-e.x,s=this.y-e.y;return this.x=o*n-s*a+e.x,this.y=o*a+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class lo{constructor(e=0,t=0,n=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=a}static slerpFlat(e,t,n,a,o,s,r){let l=n[a+0],c=n[a+1],f=n[a+2],u=n[a+3];const h=o[s+0],p=o[s+1],y=o[s+2],x=o[s+3];if(r===0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u;return}if(r===1){e[t+0]=h,e[t+1]=p,e[t+2]=y,e[t+3]=x;return}if(u!==x||l!==h||c!==p||f!==y){let m=1-r;const d=l*h+c*p+f*y+u*x,T=d>=0?1:-1,E=1-d*d;if(E>Number.EPSILON){const P=Math.sqrt(E),C=Math.atan2(P,d*T);m=Math.sin(m*C)/P,r=Math.sin(r*C)/P}const S=r*T;if(l=l*m+h*S,c=c*m+p*S,f=f*m+y*S,u=u*m+x*S,m===1-r){const P=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=P,c*=P,f*=P,u*=P}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,a,o,s){const r=n[a],l=n[a+1],c=n[a+2],f=n[a+3],u=o[s],h=o[s+1],p=o[s+2],y=o[s+3];return e[t]=r*y+f*u+l*p-c*h,e[t+1]=l*y+f*h+c*u-r*p,e[t+2]=c*y+f*p+r*h-l*u,e[t+3]=f*y-r*u-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,a){return this._x=e,this._y=t,this._z=n,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,a=e._y,o=e._z,s=e._order,r=Math.cos,l=Math.sin,c=r(n/2),f=r(a/2),u=r(o/2),h=l(n/2),p=l(a/2),y=l(o/2);switch(s){case"XYZ":this._x=h*f*u+c*p*y,this._y=c*p*u-h*f*y,this._z=c*f*y+h*p*u,this._w=c*f*u-h*p*y;break;case"YXZ":this._x=h*f*u+c*p*y,this._y=c*p*u-h*f*y,this._z=c*f*y-h*p*u,this._w=c*f*u+h*p*y;break;case"ZXY":this._x=h*f*u-c*p*y,this._y=c*p*u+h*f*y,this._z=c*f*y+h*p*u,this._w=c*f*u-h*p*y;break;case"ZYX":this._x=h*f*u-c*p*y,this._y=c*p*u+h*f*y,this._z=c*f*y-h*p*u,this._w=c*f*u+h*p*y;break;case"YZX":this._x=h*f*u+c*p*y,this._y=c*p*u+h*f*y,this._z=c*f*y-h*p*u,this._w=c*f*u-h*p*y;break;case"XZY":this._x=h*f*u-c*p*y,this._y=c*p*u-h*f*y,this._z=c*f*y+h*p*u,this._w=c*f*u+h*p*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,a=Math.sin(n);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],a=t[4],o=t[8],s=t[1],r=t[5],l=t[9],c=t[2],f=t[6],u=t[10],h=n+r+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(o-c)*p,this._z=(s-a)*p}else if(n>r&&n>u){const p=2*Math.sqrt(1+n-r-u);this._w=(f-l)/p,this._x=.25*p,this._y=(a+s)/p,this._z=(o+c)/p}else if(r>u){const p=2*Math.sqrt(1+r-n-u);this._w=(o-c)/p,this._x=(a+s)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+u-n-r);this._w=(s-a)/p,this._x=(o+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const a=Math.min(1,t/n);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,a=e._y,o=e._z,s=e._w,r=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+s*r+a*c-o*l,this._y=a*f+s*l+o*r-n*c,this._z=o*f+s*c+n*l-a*r,this._w=s*f-n*r-a*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,a=this._y,o=this._z,s=this._w;let r=s*e._w+n*e._x+a*e._y+o*e._z;if(r<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,r=-r):this.copy(e),r>=1)return this._w=s,this._x=n,this._y=a,this._z=o,this;const l=1-r*r;if(l<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*a+t*this._y,this._z=p*o+t*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,r),u=Math.sin((1-t)*f)/c,h=Math.sin(t*f)/c;return this._w=s*u+this._w*h,this._x=n*u+this._x*h,this._y=a*u+this._y*h,this._z=o*u+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),a=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,n=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*a,this.y=o[1]*t+o[4]*n+o[7]*a,this.z=o[2]*t+o[5]*n+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=e.elements,s=1/(o[3]*t+o[7]*n+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*a+o[12])*s,this.y=(o[1]*t+o[5]*n+o[9]*a+o[13])*s,this.z=(o[2]*t+o[6]*n+o[10]*a+o[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,a=this.z,o=e.x,s=e.y,r=e.z,l=e.w,c=2*(s*a-r*n),f=2*(r*t-o*a),u=2*(o*n-s*t);return this.x=t+l*c+s*u-r*f,this.y=n+l*f+r*c-o*u,this.z=a+l*u+o*f-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*a,this.y=o[1]*t+o[5]*n+o[9]*a,this.z=o[2]*t+o[6]*n+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,a=e.y,o=e.z,s=t.x,r=t.y,l=t.z;return this.x=a*l-o*r,this.y=o*s-n*l,this.z=n*r-a*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Br.copy(this).projectOnVector(e),this.sub(Br)}reflect(e){return this.sub(Br.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,a=this.z-e.z;return t*t+n*n+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const a=Math.sin(t)*e;return this.x=a*Math.sin(n),this.y=Math.cos(t)*e,this.z=a*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Br=new k,nc=new lo;class ct{constructor(e,t,n,a,o,s,r,l,c){ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,s,r,l,c)}set(e,t,n,a,o,s,r,l,c){const f=this.elements;return f[0]=e,f[1]=a,f[2]=r,f[3]=t,f[4]=o,f[5]=l,f[6]=n,f[7]=s,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,s=n[0],r=n[3],l=n[6],c=n[1],f=n[4],u=n[7],h=n[2],p=n[5],y=n[8],x=a[0],m=a[3],d=a[6],T=a[1],E=a[4],S=a[7],P=a[2],C=a[5],D=a[8];return o[0]=s*x+r*T+l*P,o[3]=s*m+r*E+l*C,o[6]=s*d+r*S+l*D,o[1]=c*x+f*T+u*P,o[4]=c*m+f*E+u*C,o[7]=c*d+f*S+u*D,o[2]=h*x+p*T+y*P,o[5]=h*m+p*E+y*C,o[8]=h*d+p*S+y*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],s=e[4],r=e[5],l=e[6],c=e[7],f=e[8];return t*s*f-t*r*c-n*o*f+n*r*l+a*o*c-a*s*l}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],s=e[4],r=e[5],l=e[6],c=e[7],f=e[8],u=f*s-r*c,h=r*l-f*o,p=c*o-s*l,y=t*u+n*h+a*p;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/y;return e[0]=u*x,e[1]=(a*c-f*n)*x,e[2]=(r*n-a*s)*x,e[3]=h*x,e[4]=(f*t-a*l)*x,e[5]=(a*o-r*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(s*t-n*o)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,a,o,s,r){const l=Math.cos(o),c=Math.sin(o);return this.set(n*l,n*c,-n*(l*s+c*r)+s+e,-a*c,a*l,-a*(-c*s+l*r)+r+t,0,0,1),this}scale(e,t){return this.premultiply(zr.makeScale(e,t)),this}rotate(e){return this.premultiply(zr.makeRotation(-e)),this}translate(e,t){return this.premultiply(zr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<9;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zr=new ct;function Lf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ur(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ch(){const i=ur("canvas");return i.style.display="block",i}const ic={};function io(i){i in ic||(ic[i]=!0,console.warn(i))}function fh(i,e,t){return new Promise(function(n,a){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:a();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}const ac=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),oc=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function uh(){const i={enabled:!0,workingColorSpace:Ma,spaces:{},convert:function(a,o,s){return this.enabled===!1||o===s||!o||!s||(this.spaces[o].transfer===Ut&&(a.r=ni(a.r),a.g=ni(a.g),a.b=ni(a.b)),this.spaces[o].primaries!==this.spaces[s].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Ut&&(a.r=ga(a.r),a.g=ga(a.g),a.b=ga(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===_i?cr:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,s){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return io("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return io("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ma]:{primaries:e,whitePoint:n,transfer:cr,toXYZ:ac,fromXYZ:oc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:e,whitePoint:n,transfer:Ut,toXYZ:ac,fromXYZ:oc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}}),i}const Et=uh();function ni(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ga(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ki;class dh{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ki===void 0&&(Ki=ur("canvas")),Ki.width=e.width,Ki.height=e.height;const a=Ki.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),n=Ki}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ur("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const a=n.getImageData(0,0,e.width,e.height),o=a.data;for(let s=0;s<o.length;s++)o[s]=ni(o[s]/255)*255;return n.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ni(t[n]/255)*255):t[n]=ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hh=0;class Sl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hh++}),this.uuid=ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let s=0,r=a.length;s<r;s++)a[s].isDataTexture?o.push(Gr(a[s].image)):o.push(Gr(a[s]))}else o=Gr(a);n.url=o}return t||(e.images[this.uuid]=n),n}}function Gr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?dh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ph=0;const Hr=new k;class gn extends Ra{constructor(e=gn.DEFAULT_IMAGE,t=gn.DEFAULT_MAPPING,n=vi,a=vi,o=Bn,s=Oi,r=Un,l=ii,c=gn.DEFAULT_ANISOTROPY,f=_i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=ti(),this.name="",this.source=new Sl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=a,this.magFilter=o,this.minFilter=s,this.anisotropy=c,this.format=r,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Hr).x}get height(){return this.source.getSize(Hr).y}get depth(){return this.source.getSize(Hr).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&n&&a.isVector2&&n.isVector2||a&&n&&a.isVector3&&n.isVector3||a&&n&&a.isMatrix3&&n.isMatrix3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bi:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case As:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bi:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case As:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=bf;gn.DEFAULT_ANISOTROPY=1;class Wt{constructor(e=0,t=0,n=0,a=1){Wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,a){return this.x=e,this.y=t,this.z=n,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,a=this.z,o=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*a+s[12]*o,this.y=s[1]*t+s[5]*n+s[9]*a+s[13]*o,this.z=s[2]*t+s[6]*n+s[10]*a+s[14]*o,this.w=s[3]*t+s[7]*n+s[11]*a+s[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,a,o;const l=e.elements,c=l[0],f=l[4],u=l[8],h=l[1],p=l[5],y=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-x)<.01&&Math.abs(y-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+x)<.1&&Math.abs(y+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,S=(p+1)/2,P=(d+1)/2,C=(f+h)/4,D=(u+x)/4,R=(y+m)/4;return E>S&&E>P?E<.01?(n=0,a=.707106781,o=.707106781):(n=Math.sqrt(E),a=C/n,o=D/n):S>P?S<.01?(n=.707106781,a=0,o=.707106781):(a=Math.sqrt(S),n=C/a,o=R/a):P<.01?(n=.707106781,a=.707106781,o=0):(o=Math.sqrt(P),n=D/o,a=R/o),this.set(n,a,o,t),this}let T=Math.sqrt((m-y)*(m-y)+(u-x)*(u-x)+(h-f)*(h-f));return Math.abs(T)<.001&&(T=1),this.x=(m-y)/T,this.y=(u-x)/T,this.z=(h-f)/T,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=vt(this.x,e.x,t.x),this.y=vt(this.y,e.y,t.y),this.z=vt(this.z,e.z,t.z),this.w=vt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=vt(this.x,e,t),this.y=vt(this.y,e,t),this.z=vt(this.z,e,t),this.w=vt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(vt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mh extends Ra{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Wt(0,0,e,t),this.scissorTest=!1,this.viewport=new Wt(0,0,e,t);const a={width:e,height:t,depth:n.depth},o=new gn(a);this.textures=[];const s=n.count;for(let r=0;r<s;r++)this.textures[r]=o.clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:Bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=n,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Sl(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nn extends mh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class If extends gn{constructor(e=null,t=1,n=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=kn,this.minFilter=kn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gh extends gn{constructor(e=null,t=1,n=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:a},this.magFilter=kn,this.minFilter=kn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class co{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Pn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Pn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Pn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let s=0,r=o.count;s<r;s++)e.isMesh===!0?e.getVertexPosition(s,Pn):Pn.fromBufferAttribute(o,s),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wo.copy(n.boundingBox)),wo.applyMatrix4(e.matrixWorld),this.union(wo)}const a=e.children;for(let o=0,s=a.length;o<s;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fa),So.subVectors(this.max,Fa),$i.subVectors(e.a,Fa),ji.subVectors(e.b,Fa),Ji.subVectors(e.c,Fa),di.subVectors(ji,$i),hi.subVectors(Ji,ji),Ci.subVectors($i,Ji);let t=[0,-di.z,di.y,0,-hi.z,hi.y,0,-Ci.z,Ci.y,di.z,0,-di.x,hi.z,0,-hi.x,Ci.z,0,-Ci.x,-di.y,di.x,0,-hi.y,hi.x,0,-Ci.y,Ci.x,0];return!Vr(t,$i,ji,Ji,So)||(t=[1,0,0,0,1,0,0,0,1],!Vr(t,$i,ji,Ji,So))?!1:(To.crossVectors(di,hi),t=[To.x,To.y,To.z],Vr(t,$i,ji,Ji,So))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xn=[new k,new k,new k,new k,new k,new k,new k,new k],Pn=new k,wo=new co,$i=new k,ji=new k,Ji=new k,di=new k,hi=new k,Ci=new k,Fa=new k,So=new k,To=new k,Ri=new k;function Vr(i,e,t,n,a){for(let o=0,s=i.length-3;o<=s;o+=3){Ri.fromArray(i,o);const r=a.x*Math.abs(Ri.x)+a.y*Math.abs(Ri.y)+a.z*Math.abs(Ri.z),l=e.dot(Ri),c=t.dot(Ri),f=n.dot(Ri);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>r)return!1}return!0}const yh=new co,Oa=new k,Wr=new k;class fo{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):yh.setFromPoints(e).getCenter(n);let a=0;for(let o=0,s=e.length;o<s;o++)a=Math.max(a,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oa.subVectors(e,this.center);const t=Oa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),a=(n-this.radius)*.5;this.center.addScaledVector(Oa,a/n),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oa.copy(e.center).add(Wr)),this.expandByPoint(Oa.copy(e.center).sub(Wr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Yn=new k,Xr=new k,Eo=new k,pi=new k,Yr=new k,Ao=new k,Zr=new k;class Tl{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Yn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yn.copy(this.origin).addScaledVector(this.direction,t),Yn.distanceToSquared(e))}distanceSqToSegment(e,t,n,a){Xr.copy(e).add(t).multiplyScalar(.5),Eo.copy(t).sub(e).normalize(),pi.copy(this.origin).sub(Xr);const o=e.distanceTo(t)*.5,s=-this.direction.dot(Eo),r=pi.dot(this.direction),l=-pi.dot(Eo),c=pi.lengthSq(),f=Math.abs(1-s*s);let u,h,p,y;if(f>0)if(u=s*l-r,h=s*r-l,y=o*f,u>=0)if(h>=-y)if(h<=y){const x=1/f;u*=x,h*=x,p=u*(u+s*h+2*r)+h*(s*u+h+2*l)+c}else h=o,u=Math.max(0,-(s*h+r)),p=-u*u+h*(h+2*l)+c;else h=-o,u=Math.max(0,-(s*h+r)),p=-u*u+h*(h+2*l)+c;else h<=-y?(u=Math.max(0,-(-s*o+r)),h=u>0?-o:Math.min(Math.max(-o,-l),o),p=-u*u+h*(h+2*l)+c):h<=y?(u=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+c):(u=Math.max(0,-(s*o+r)),h=u>0?o:Math.min(Math.max(-o,-l),o),p=-u*u+h*(h+2*l)+c);else h=s>0?-o:o,u=Math.max(0,-(s*h+r)),p=-u*u+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),a&&a.copy(Xr).addScaledVector(Eo,h),p}intersectSphere(e,t){Yn.subVectors(e.center,this.origin);const n=Yn.dot(this.direction),a=Yn.dot(Yn)-n*n,o=e.radius*e.radius;if(a>o)return null;const s=Math.sqrt(o-a),r=n-s,l=n+s;return l<0?null:r<0?this.at(l,t):this.at(r,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,a,o,s,r,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,a=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,a=(e.min.x-h.x)*c),f>=0?(o=(e.min.y-h.y)*f,s=(e.max.y-h.y)*f):(o=(e.max.y-h.y)*f,s=(e.min.y-h.y)*f),n>s||o>a||((o>n||isNaN(n))&&(n=o),(s<a||isNaN(a))&&(a=s),u>=0?(r=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(r=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),n>l||r>a)||((r>n||n!==n)&&(n=r),(l<a||a!==a)&&(a=l),a<0)?null:this.at(n>=0?n:a,t)}intersectsBox(e){return this.intersectBox(e,Yn)!==null}intersectTriangle(e,t,n,a,o){Yr.subVectors(t,e),Ao.subVectors(n,e),Zr.crossVectors(Yr,Ao);let s=this.direction.dot(Zr),r;if(s>0){if(a)return null;r=1}else if(s<0)r=-1,s=-s;else return null;pi.subVectors(this.origin,e);const l=r*this.direction.dot(Ao.crossVectors(pi,Ao));if(l<0)return null;const c=r*this.direction.dot(Yr.cross(pi));if(c<0||l+c>s)return null;const f=-r*pi.dot(Zr);return f<0?null:this.at(f/s,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,n,a,o,s,r,l,c,f,u,h,p,y,x,m){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,a,o,s,r,l,c,f,u,h,p,y,x,m)}set(e,t,n,a,o,s,r,l,c,f,u,h,p,y,x,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=a,d[1]=o,d[5]=s,d[9]=r,d[13]=l,d[2]=c,d[6]=f,d[10]=u,d[14]=h,d[3]=p,d[7]=y,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,a=1/Qi.setFromMatrixColumn(e,0).length(),o=1/Qi.setFromMatrixColumn(e,1).length(),s=1/Qi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*a,t[1]=n[1]*a,t[2]=n[2]*a,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,a=e.y,o=e.z,s=Math.cos(n),r=Math.sin(n),l=Math.cos(a),c=Math.sin(a),f=Math.cos(o),u=Math.sin(o);if(e.order==="XYZ"){const h=s*f,p=s*u,y=r*f,x=r*u;t[0]=l*f,t[4]=-l*u,t[8]=c,t[1]=p+y*c,t[5]=h-x*c,t[9]=-r*l,t[2]=x-h*c,t[6]=y+p*c,t[10]=s*l}else if(e.order==="YXZ"){const h=l*f,p=l*u,y=c*f,x=c*u;t[0]=h+x*r,t[4]=y*r-p,t[8]=s*c,t[1]=s*u,t[5]=s*f,t[9]=-r,t[2]=p*r-y,t[6]=x+h*r,t[10]=s*l}else if(e.order==="ZXY"){const h=l*f,p=l*u,y=c*f,x=c*u;t[0]=h-x*r,t[4]=-s*u,t[8]=y+p*r,t[1]=p+y*r,t[5]=s*f,t[9]=x-h*r,t[2]=-s*c,t[6]=r,t[10]=s*l}else if(e.order==="ZYX"){const h=s*f,p=s*u,y=r*f,x=r*u;t[0]=l*f,t[4]=y*c-p,t[8]=h*c+x,t[1]=l*u,t[5]=x*c+h,t[9]=p*c-y,t[2]=-c,t[6]=r*l,t[10]=s*l}else if(e.order==="YZX"){const h=s*l,p=s*c,y=r*l,x=r*c;t[0]=l*f,t[4]=x-h*u,t[8]=y*u+p,t[1]=u,t[5]=s*f,t[9]=-r*f,t[2]=-c*f,t[6]=p*u+y,t[10]=h-x*u}else if(e.order==="XZY"){const h=s*l,p=s*c,y=r*l,x=r*c;t[0]=l*f,t[4]=-u,t[8]=c*f,t[1]=h*u+x,t[5]=s*f,t[9]=p*u-y,t[2]=y*u-p,t[6]=r*f,t[10]=x*u+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_h,e,vh)}lookAt(e,t,n){const a=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),mi.crossVectors(n,wn),mi.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),mi.crossVectors(n,wn)),mi.normalize(),Co.crossVectors(wn,mi),a[0]=mi.x,a[4]=Co.x,a[8]=wn.x,a[1]=mi.y,a[5]=Co.y,a[9]=wn.y,a[2]=mi.z,a[6]=Co.z,a[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,a=t.elements,o=this.elements,s=n[0],r=n[4],l=n[8],c=n[12],f=n[1],u=n[5],h=n[9],p=n[13],y=n[2],x=n[6],m=n[10],d=n[14],T=n[3],E=n[7],S=n[11],P=n[15],C=a[0],D=a[4],R=a[8],w=a[12],b=a[1],U=a[5],H=a[9],Q=a[13],re=a[2],ie=a[6],oe=a[10],ce=a[14],ee=a[3],xe=a[7],we=a[11],Fe=a[15];return o[0]=s*C+r*b+l*re+c*ee,o[4]=s*D+r*U+l*ie+c*xe,o[8]=s*R+r*H+l*oe+c*we,o[12]=s*w+r*Q+l*ce+c*Fe,o[1]=f*C+u*b+h*re+p*ee,o[5]=f*D+u*U+h*ie+p*xe,o[9]=f*R+u*H+h*oe+p*we,o[13]=f*w+u*Q+h*ce+p*Fe,o[2]=y*C+x*b+m*re+d*ee,o[6]=y*D+x*U+m*ie+d*xe,o[10]=y*R+x*H+m*oe+d*we,o[14]=y*w+x*Q+m*ce+d*Fe,o[3]=T*C+E*b+S*re+P*ee,o[7]=T*D+E*U+S*ie+P*xe,o[11]=T*R+E*H+S*oe+P*we,o[15]=T*w+E*Q+S*ce+P*Fe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],a=e[8],o=e[12],s=e[1],r=e[5],l=e[9],c=e[13],f=e[2],u=e[6],h=e[10],p=e[14],y=e[3],x=e[7],m=e[11],d=e[15];return y*(+o*l*u-a*c*u-o*r*h+n*c*h+a*r*p-n*l*p)+x*(+t*l*p-t*c*h+o*s*h-a*s*p+a*c*f-o*l*f)+m*(+t*c*u-t*r*p-o*s*u+n*s*p+o*r*f-n*c*f)+d*(-a*r*f-t*l*u+t*r*h+a*s*u-n*s*h+n*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],a=e[2],o=e[3],s=e[4],r=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],p=e[11],y=e[12],x=e[13],m=e[14],d=e[15],T=u*m*c-x*h*c+x*l*p-r*m*p-u*l*d+r*h*d,E=y*h*c-f*m*c-y*l*p+s*m*p+f*l*d-s*h*d,S=f*x*c-y*u*c+y*r*p-s*x*p-f*r*d+s*u*d,P=y*u*l-f*x*l-y*r*h+s*x*h+f*r*m-s*u*m,C=t*T+n*E+a*S+o*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/C;return e[0]=T*D,e[1]=(x*h*o-u*m*o-x*a*p+n*m*p+u*a*d-n*h*d)*D,e[2]=(r*m*o-x*l*o+x*a*c-n*m*c-r*a*d+n*l*d)*D,e[3]=(u*l*o-r*h*o-u*a*c+n*h*c+r*a*p-n*l*p)*D,e[4]=E*D,e[5]=(f*m*o-y*h*o+y*a*p-t*m*p-f*a*d+t*h*d)*D,e[6]=(y*l*o-s*m*o-y*a*c+t*m*c+s*a*d-t*l*d)*D,e[7]=(s*h*o-f*l*o+f*a*c-t*h*c-s*a*p+t*l*p)*D,e[8]=S*D,e[9]=(y*u*o-f*x*o-y*n*p+t*x*p+f*n*d-t*u*d)*D,e[10]=(s*x*o-y*r*o+y*n*c-t*x*c-s*n*d+t*r*d)*D,e[11]=(f*r*o-s*u*o-f*n*c+t*u*c+s*n*p-t*r*p)*D,e[12]=P*D,e[13]=(f*x*a-y*u*a+y*n*h-t*x*h-f*n*m+t*u*m)*D,e[14]=(y*r*a-s*x*a-y*n*l+t*x*l+s*n*m-t*r*m)*D,e[15]=(s*u*a-f*r*a+f*n*l-t*u*l-s*n*h+t*r*h)*D,this}scale(e){const t=this.elements,n=e.x,a=e.y,o=e.z;return t[0]*=n,t[4]*=a,t[8]*=o,t[1]*=n,t[5]*=a,t[9]*=o,t[2]*=n,t[6]*=a,t[10]*=o,t[3]*=n,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,a))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),a=Math.sin(t),o=1-n,s=e.x,r=e.y,l=e.z,c=o*s,f=o*r;return this.set(c*s+n,c*r-a*l,c*l+a*r,0,c*r+a*l,f*r+n,f*l-a*s,0,c*l-a*r,f*l+a*s,o*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,a,o,s){return this.set(1,n,o,0,e,1,s,0,t,a,1,0,0,0,0,1),this}compose(e,t,n){const a=this.elements,o=t._x,s=t._y,r=t._z,l=t._w,c=o+o,f=s+s,u=r+r,h=o*c,p=o*f,y=o*u,x=s*f,m=s*u,d=r*u,T=l*c,E=l*f,S=l*u,P=n.x,C=n.y,D=n.z;return a[0]=(1-(x+d))*P,a[1]=(p+S)*P,a[2]=(y-E)*P,a[3]=0,a[4]=(p-S)*C,a[5]=(1-(h+d))*C,a[6]=(m+T)*C,a[7]=0,a[8]=(y+E)*D,a[9]=(m-T)*D,a[10]=(1-(h+x))*D,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,n){const a=this.elements;let o=Qi.set(a[0],a[1],a[2]).length();const s=Qi.set(a[4],a[5],a[6]).length(),r=Qi.set(a[8],a[9],a[10]).length();this.determinant()<0&&(o=-o),e.x=a[12],e.y=a[13],e.z=a[14],Ln.copy(this);const c=1/o,f=1/s,u=1/r;return Ln.elements[0]*=c,Ln.elements[1]*=c,Ln.elements[2]*=c,Ln.elements[4]*=f,Ln.elements[5]*=f,Ln.elements[6]*=f,Ln.elements[8]*=u,Ln.elements[9]*=u,Ln.elements[10]*=u,t.setFromRotationMatrix(Ln),n.x=o,n.y=s,n.z=r,this}makePerspective(e,t,n,a,o,s,r=zn,l=!1){const c=this.elements,f=2*o/(t-e),u=2*o/(n-a),h=(t+e)/(t-e),p=(n+a)/(n-a);let y,x;if(l)y=o/(s-o),x=s*o/(s-o);else if(r===zn)y=-(s+o)/(s-o),x=-2*s*o/(s-o);else if(r===fr)y=-s/(s-o),x=-s*o/(s-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+r);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=y,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,a,o,s,r=zn,l=!1){const c=this.elements,f=2/(t-e),u=2/(n-a),h=-(t+e)/(t-e),p=-(n+a)/(n-a);let y,x;if(l)y=1/(s-o),x=s/(s-o);else if(r===zn)y=-2/(s-o),x=-(s+o)/(s-o);else if(r===fr)y=-1/(s-o),x=-o/(s-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+r);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=y,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let a=0;a<16;a++)if(t[a]!==n[a])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Qi=new k,Ln=new Ht,_h=new k(0,0,0),vh=new k(1,1,1),mi=new k,Co=new k,wn=new k,rc=new Ht,sc=new lo;class ai{constructor(e=0,t=0,n=0,a=ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,a=this._order){return this._x=e,this._y=t,this._z=n,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const a=e.elements,o=a[0],s=a[4],r=a[8],l=a[1],c=a[5],f=a[9],u=a[2],h=a[6],p=a[10];switch(t){case"XYZ":this._y=Math.asin(vt(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-s,o)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-vt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(r,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(vt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(r,p));break;case"XZY":this._z=Math.asin(-vt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(r,o)):(this._x=Math.atan2(-f,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sc.setFromEuler(this),this.setFromQuaternion(sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ai.DEFAULT_ORDER="XYZ";class Df{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let xh=0;const lc=new k,ea=new lo,Zn=new Ht,Ro=new k,Ba=new k,bh=new k,Mh=new lo,cc=new k(1,0,0),fc=new k(0,1,0),uc=new k(0,0,1),dc={type:"added"},wh={type:"removed"},ta={type:"childadded",child:null},qr={type:"childremoved",child:null};class fn extends Ra{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xh++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new k,t=new ai,n=new lo,a=new k(1,1,1);function o(){n.setFromEuler(t,!1)}function s(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ct}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Df,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ea.setFromAxisAngle(e,t),this.quaternion.multiply(ea),this}rotateOnWorldAxis(e,t){return ea.setFromAxisAngle(e,t),this.quaternion.premultiply(ea),this}rotateX(e){return this.rotateOnAxis(cc,e)}rotateY(e){return this.rotateOnAxis(fc,e)}rotateZ(e){return this.rotateOnAxis(uc,e)}translateOnAxis(e,t){return lc.copy(e).applyQuaternion(this.quaternion),this.position.add(lc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(cc,e)}translateY(e){return this.translateOnAxis(fc,e)}translateZ(e){return this.translateOnAxis(uc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ro.copy(e):Ro.set(e,t,n);const a=this.parent;this.updateWorldMatrix(!0,!1),Ba.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Ba,Ro,this.up):Zn.lookAt(Ro,Ba,this.up),this.quaternion.setFromRotationMatrix(Zn),a&&(Zn.extractRotation(a.matrixWorld),ea.setFromRotationMatrix(Zn),this.quaternion.premultiply(ea.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dc),ta.child=e,this.dispatchEvent(ta),ta.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(wh),qr.child=e,this.dispatchEvent(qr),qr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dc),ta.child=e,this.dispatchEvent(ta),ta.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,a=this.children.length;n<a;n++){const s=this.children[n].getObjectByProperty(e,t);if(s!==void 0)return s}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const a=this.children;for(let o=0,s=a.length;o<s;o++)a[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,e,bh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ba,Mh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,a=t.length;n<a;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let o=0,s=a.length;o<s;o++)a[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(r=>({...r,boundingBox:r.boundingBox?r.boundingBox.toJSON():void 0,boundingSphere:r.boundingSphere?r.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(r=>({...r})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(r,l){return r[l.uuid]===void 0&&(r[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const r=this.geometry.parameters;if(r!==void 0&&r.shapes!==void 0){const l=r.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];o(e.shapes,u)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const r=[];for(let l=0,c=this.material.length;l<c;l++)r.push(o(e.materials,this.material[l]));a.material=r}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let r=0;r<this.children.length;r++)a.children.push(this.children[r].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let r=0;r<this.animations.length;r++){const l=this.animations[r];a.animations.push(o(e.animations,l))}}if(t){const r=s(e.geometries),l=s(e.materials),c=s(e.textures),f=s(e.images),u=s(e.shapes),h=s(e.skeletons),p=s(e.animations),y=s(e.nodes);r.length>0&&(n.geometries=r),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),u.length>0&&(n.shapes=u),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),y.length>0&&(n.nodes=y)}return n.object=a,n;function s(r){const l=[];for(const c in r){const f=r[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const a=e.children[n];this.add(a.clone())}return this}}fn.DEFAULT_UP=new k(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new k,qn=new k,Kr=new k,Kn=new k,na=new k,ia=new k,hc=new k,$r=new k,jr=new k,Jr=new k,Qr=new Wt,es=new Wt,ts=new Wt;class An{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,a){a.subVectors(n,t),In.subVectors(e,t),a.cross(In);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,n,a,o){In.subVectors(a,t),qn.subVectors(n,t),Kr.subVectors(e,t);const s=In.dot(In),r=In.dot(qn),l=In.dot(Kr),c=qn.dot(qn),f=qn.dot(Kr),u=s*c-r*r;if(u===0)return o.set(0,0,0),null;const h=1/u,p=(c*l-r*f)*h,y=(s*f-r*l)*h;return o.set(1-p-y,y,p)}static containsPoint(e,t,n,a){return this.getBarycoord(e,t,n,a,Kn)===null?!1:Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,a,o,s,r,l){return this.getBarycoord(e,t,n,a,Kn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Kn.x),l.addScaledVector(s,Kn.y),l.addScaledVector(r,Kn.z),l)}static getInterpolatedAttribute(e,t,n,a,o,s){return Qr.setScalar(0),es.setScalar(0),ts.setScalar(0),Qr.fromBufferAttribute(e,t),es.fromBufferAttribute(e,n),ts.fromBufferAttribute(e,a),s.setScalar(0),s.addScaledVector(Qr,o.x),s.addScaledVector(es,o.y),s.addScaledVector(ts,o.z),s}static isFrontFacing(e,t,n,a){return In.subVectors(n,t),qn.subVectors(e,t),In.cross(qn).dot(a)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,a){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,n,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),In.cross(qn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,a,o){return An.getInterpolation(e,this.a,this.b,this.c,t,n,a,o)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,a=this.b,o=this.c;let s,r;na.subVectors(a,n),ia.subVectors(o,n),$r.subVectors(e,n);const l=na.dot($r),c=ia.dot($r);if(l<=0&&c<=0)return t.copy(n);jr.subVectors(e,a);const f=na.dot(jr),u=ia.dot(jr);if(f>=0&&u<=f)return t.copy(a);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return s=l/(l-f),t.copy(n).addScaledVector(na,s);Jr.subVectors(e,o);const p=na.dot(Jr),y=ia.dot(Jr);if(y>=0&&p<=y)return t.copy(o);const x=p*c-l*y;if(x<=0&&c>=0&&y<=0)return r=c/(c-y),t.copy(n).addScaledVector(ia,r);const m=f*y-p*u;if(m<=0&&u-f>=0&&p-y>=0)return hc.subVectors(o,a),r=(u-f)/(u-f+(p-y)),t.copy(a).addScaledVector(hc,r);const d=1/(m+x+h);return s=x*d,r=h*d,t.copy(n).addScaledVector(na,s).addScaledVector(ia,r)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Uf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gi={h:0,s:0,l:0},Po={h:0,s:0,l:0};function ns(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,a=Et.workingColorSpace){return this.r=e,this.g=t,this.b=n,Et.colorSpaceToWorking(this,a),this}setHSL(e,t,n,a=Et.workingColorSpace){if(e=wl(e,1),t=vt(t,0,1),n=vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,s=2*n-o;this.r=ns(s,o,e+1/3),this.g=ns(s,o,e),this.b=ns(s,o,e-1/3)}return Et.colorSpaceToWorking(this,a),this}setStyle(e,t=hn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const s=a[1],r=a[2];switch(s){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(r))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],s=o.length;if(s===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const n=Uf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=ga(e.r),this.g=ga(e.g),this.b=ga(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return Et.workingToColorSpace(cn.copy(this),e),Math.round(vt(cn.r*255,0,255))*65536+Math.round(vt(cn.g*255,0,255))*256+Math.round(vt(cn.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(cn.copy(this),t);const n=cn.r,a=cn.g,o=cn.b,s=Math.max(n,a,o),r=Math.min(n,a,o);let l,c;const f=(r+s)/2;if(r===s)l=0,c=0;else{const u=s-r;switch(c=f<=.5?u/(s+r):u/(2-s-r),s){case n:l=(a-o)/u+(a<o?6:0);break;case a:l=(o-n)/u+2;break;case o:l=(n-a)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(cn.copy(this),t),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=hn){Et.workingToColorSpace(cn.copy(this),e);const t=cn.r,n=cn.g,a=cn.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(a*255)})`}offsetHSL(e,t,n){return this.getHSL(gi),this.setHSL(gi.h+e,gi.s+t,gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(gi),e.getHSL(Po);const n=qa(gi.h,Po.h,t),a=qa(gi.s,Po.s,t),o=qa(gi.l,Po.l,t);return this.setHSL(n,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*a,this.g=o[1]*t+o[4]*n+o[7]*a,this.b=o[2]*t+o[5]*n+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new He;He.NAMES=Uf;let Sh=0;class Vi extends Ra{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sh++}),this.uuid=ti(),this.name="",this.type="Material",this.blending=bn,this.side=wi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gs,this.blendDst=ys,this.blendEquation=Ni,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=va,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ql,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(n):a&&a.isVector3&&n&&n.isVector3?a.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==bn&&(n.blending=this.blending),this.side!==wi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==gs&&(n.blendSrc=this.blendSrc),this.blendDst!==ys&&(n.blendDst=this.blendDst),this.blendEquation!==Ni&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==va&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ql&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function a(o){const s=[];for(const r in o){const l=o[r];delete l.metadata,s.push(l)}return s}if(t){const o=a(e.textures),s=a(e.images);o.length>0&&(n.textures=o),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const a=t.length;n=new Array(a);for(let o=0;o!==a;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qt extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ai,this.combine=pf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yt=new k,Lo=new Je;let Th=0;class nn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Th++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nl,this.updateRanges=[],this.gpuType=Jn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[n+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lo.fromBufferAttribute(this,t),Lo.applyMatrix3(e),this.setXY(t,Lo.x,Lo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix3(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyMatrix4(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.applyNormalMatrix(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yt.fromBufferAttribute(this,t),Yt.transformDirection(e),this.setXYZ(t,Yt.x,Yt.y,Yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,a){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),a=kt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this}setXYZW(e,t,n,a,o){return e*=this.itemSize,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),a=kt(a,this.array),o=kt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nl&&(e.usage=this.usage),e}}class kf extends nn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nf extends nn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gt extends nn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Eh=0;const Tn=new Ht,is=new fn,aa=new k,Sn=new co,za=new co,en=new k;class Xt extends Ra{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Lf(e)?Nf:kf)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new ct().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return is.lookAt(e),is.updateMatrix(),this.applyMatrix4(is.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let a=0,o=e.length;a<o;a++){const s=e[a];n.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Gt(n,3))}else{const n=Math.min(e.length,t.count);for(let a=0;a<n;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,a=t.length;n<a;n++){const o=t[n];Sn.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let o=0,s=t.length;o<s;o++){const r=t[o];za.setFromBufferAttribute(r),this.morphTargetsRelative?(en.addVectors(Sn.min,za.min),Sn.expandByPoint(en),en.addVectors(Sn.max,za.max),Sn.expandByPoint(en)):(Sn.expandByPoint(za.min),Sn.expandByPoint(za.max))}Sn.getCenter(n);let a=0;for(let o=0,s=e.count;o<s;o++)en.fromBufferAttribute(e,o),a=Math.max(a,n.distanceToSquared(en));if(t)for(let o=0,s=t.length;o<s;o++){const r=t[o],l=this.morphTargetsRelative;for(let c=0,f=r.count;c<f;c++)en.fromBufferAttribute(r,c),l&&(aa.fromBufferAttribute(e,c),en.add(aa)),a=Math.max(a,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,a=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new nn(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),r=[],l=[];for(let R=0;R<n.count;R++)r[R]=new k,l[R]=new k;const c=new k,f=new k,u=new k,h=new Je,p=new Je,y=new Je,x=new k,m=new k;function d(R,w,b){c.fromBufferAttribute(n,R),f.fromBufferAttribute(n,w),u.fromBufferAttribute(n,b),h.fromBufferAttribute(o,R),p.fromBufferAttribute(o,w),y.fromBufferAttribute(o,b),f.sub(c),u.sub(c),p.sub(h),y.sub(h);const U=1/(p.x*y.y-y.x*p.y);isFinite(U)&&(x.copy(f).multiplyScalar(y.y).addScaledVector(u,-p.y).multiplyScalar(U),m.copy(u).multiplyScalar(p.x).addScaledVector(f,-y.x).multiplyScalar(U),r[R].add(x),r[w].add(x),r[b].add(x),l[R].add(m),l[w].add(m),l[b].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let R=0,w=T.length;R<w;++R){const b=T[R],U=b.start,H=b.count;for(let Q=U,re=U+H;Q<re;Q+=3)d(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const E=new k,S=new k,P=new k,C=new k;function D(R){P.fromBufferAttribute(a,R),C.copy(P);const w=r[R];E.copy(w),E.sub(P.multiplyScalar(P.dot(w))).normalize(),S.crossVectors(C,w);const U=S.dot(l[R])<0?-1:1;s.setXYZW(R,E.x,E.y,E.z,U)}for(let R=0,w=T.length;R<w;++R){const b=T[R],U=b.start,H=b.count;for(let Q=U,re=U+H;Q<re;Q+=3)D(e.getX(Q+0)),D(e.getX(Q+1)),D(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new nn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const a=new k,o=new k,s=new k,r=new k,l=new k,c=new k,f=new k,u=new k;if(e)for(let h=0,p=e.count;h<p;h+=3){const y=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);a.fromBufferAttribute(t,y),o.fromBufferAttribute(t,x),s.fromBufferAttribute(t,m),f.subVectors(s,o),u.subVectors(a,o),f.cross(u),r.fromBufferAttribute(n,y),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,m),r.add(f),l.add(f),c.add(f),n.setXYZ(y,r.x,r.y,r.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)a.fromBufferAttribute(t,h+0),o.fromBufferAttribute(t,h+1),s.fromBufferAttribute(t,h+2),f.subVectors(s,o),u.subVectors(a,o),f.cross(u),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(r,l){const c=r.array,f=r.itemSize,u=r.normalized,h=new c.constructor(l.length*f);let p=0,y=0;for(let x=0,m=l.length;x<m;x++){r.isInterleavedBufferAttribute?p=l[x]*r.data.stride+r.offset:p=l[x]*f;for(let d=0;d<f;d++)h[y++]=c[p++]}return new nn(h,f,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,a=this.attributes;for(const r in a){const l=a[r],c=e(l,n);t.setAttribute(r,c)}const o=this.morphAttributes;for(const r in o){const l=[],c=o[r];for(let f=0,u=c.length;f<u;f++){const h=c[f],p=e(h,n);l.push(p)}t.morphAttributes[r]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let r=0,l=s.length;r<l;r++){const c=s[r];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const a={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const p=c[u];f.push(p.toJSON(e.data))}f.length>0&&(a[l]=f,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const r=this.boundingSphere;return r!==null&&(e.data.boundingSphere=r.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const a=e.attributes;for(const c in a){const f=a[c];this.setAttribute(c,f.clone(t))}const o=e.morphAttributes;for(const c in o){const f=[],u=o[c];for(let h=0,p=u.length;h<p;h++)f.push(u[h].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,f=s.length;c<f;c++){const u=s[c];this.addGroup(u.start,u.count,u.materialIndex)}const r=e.boundingBox;r!==null&&(this.boundingBox=r.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pc=new Ht,Pi=new Tl,Io=new fo,mc=new k,Do=new k,Uo=new k,ko=new k,as=new k,No=new k,gc=new k,Fo=new k;class It extends fn{constructor(e=new Xt,t=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=a.length;o<s;o++){const r=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}getVertexPosition(e,t){const n=this.geometry,a=n.attributes.position,o=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(a,e);const r=this.morphTargetInfluences;if(o&&r){No.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const f=r[l],u=o[l];f!==0&&(as.fromBufferAttribute(u,e),s?No.addScaledVector(as,f):No.addScaledVector(as.sub(t),f))}t.add(No)}return t}raycast(e,t){const n=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Io.copy(n.boundingSphere),Io.applyMatrix4(o),Pi.copy(e.ray).recast(e.near),!(Io.containsPoint(Pi.origin)===!1&&(Pi.intersectSphere(Io,mc)===null||Pi.origin.distanceToSquared(mc)>(e.far-e.near)**2))&&(pc.copy(o).invert(),Pi.copy(e.ray).applyMatrix4(pc),!(n.boundingBox!==null&&Pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Pi)))}_computeIntersections(e,t,n){let a;const o=this.geometry,s=this.material,r=o.index,l=o.attributes.position,c=o.attributes.uv,f=o.attributes.uv1,u=o.attributes.normal,h=o.groups,p=o.drawRange;if(r!==null)if(Array.isArray(s))for(let y=0,x=h.length;y<x;y++){const m=h[y],d=s[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(r.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,P=E;S<P;S+=3){const C=r.getX(S),D=r.getX(S+1),R=r.getX(S+2);a=Oo(this,d,e,n,c,f,u,C,D,R),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const y=Math.max(0,p.start),x=Math.min(r.count,p.start+p.count);for(let m=y,d=x;m<d;m+=3){const T=r.getX(m),E=r.getX(m+1),S=r.getX(m+2);a=Oo(this,s,e,n,c,f,u,T,E,S),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(s))for(let y=0,x=h.length;y<x;y++){const m=h[y],d=s[m.materialIndex],T=Math.max(m.start,p.start),E=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=T,P=E;S<P;S+=3){const C=S,D=S+1,R=S+2;a=Oo(this,d,e,n,c,f,u,C,D,R),a&&(a.faceIndex=Math.floor(S/3),a.face.materialIndex=m.materialIndex,t.push(a))}}else{const y=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=y,d=x;m<d;m+=3){const T=m,E=m+1,S=m+2;a=Oo(this,s,e,n,c,f,u,T,E,S),a&&(a.faceIndex=Math.floor(m/3),t.push(a))}}}}function Ah(i,e,t,n,a,o,s,r){let l;if(e.side===mn?l=n.intersectTriangle(s,o,a,!0,r):l=n.intersectTriangle(a,o,s,e.side===wi,r),l===null)return null;Fo.copy(r),Fo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Fo);return c<t.near||c>t.far?null:{distance:c,point:Fo.clone(),object:i}}function Oo(i,e,t,n,a,o,s,r,l,c){i.getVertexPosition(r,Do),i.getVertexPosition(l,Uo),i.getVertexPosition(c,ko);const f=Ah(i,e,t,n,Do,Uo,ko,gc);if(f){const u=new k;An.getBarycoord(gc,Do,Uo,ko,u),a&&(f.uv=An.getInterpolatedAttribute(a,r,l,c,u,new Je)),o&&(f.uv1=An.getInterpolatedAttribute(o,r,l,c,u,new Je)),s&&(f.normal=An.getInterpolatedAttribute(s,r,l,c,u,new k),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a:r,b:l,c,normal:new k,materialIndex:0};An.getNormal(Do,Uo,ko,h.normal),f.face=h,f.barycoord=u}return f}class Wi extends Xt{constructor(e=1,t=1,n=1,a=1,o=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:a,heightSegments:o,depthSegments:s};const r=this;a=Math.floor(a),o=Math.floor(o),s=Math.floor(s);const l=[],c=[],f=[],u=[];let h=0,p=0;y("z","y","x",-1,-1,n,t,e,s,o,0),y("z","y","x",1,-1,n,t,-e,s,o,1),y("x","z","y",1,1,e,n,t,a,s,2),y("x","z","y",1,-1,e,n,-t,a,s,3),y("x","y","z",1,-1,e,t,n,a,o,4),y("x","y","z",-1,-1,e,t,-n,a,o,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(u,2));function y(x,m,d,T,E,S,P,C,D,R,w){const b=S/D,U=P/R,H=S/2,Q=P/2,re=C/2,ie=D+1,oe=R+1;let ce=0,ee=0;const xe=new k;for(let we=0;we<oe;we++){const Fe=we*U-Q;for(let ot=0;ot<ie;ot++){const xt=ot*b-H;xe[x]=xt*T,xe[m]=Fe*E,xe[d]=re,c.push(xe.x,xe.y,xe.z),xe[x]=0,xe[m]=0,xe[d]=C>0?1:-1,f.push(xe.x,xe.y,xe.z),u.push(ot/D),u.push(1-we/R),ce+=1}}for(let we=0;we<R;we++)for(let Fe=0;Fe<D;Fe++){const ot=h+Fe+ie*we,xt=h+Fe+ie*(we+1),Qe=h+(Fe+1)+ie*(we+1),ht=h+(Fe+1)+ie*we;l.push(ot,xt,ht),l.push(xt,Qe,ht),ee+=6}r.addGroup(p,ee,w),p+=ee,h+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wa(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const a=i[t][n];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=a.clone():Array.isArray(a)?e[t][n]=a.slice():e[t][n]=a}}return e}function dn(i){const e={};for(let t=0;t<i.length;t++){const n=wa(i[t]);for(const a in n)e[a]=n[a]}return e}function Ch(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ff(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const ao={clone:wa,merge:dn};var Rh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ph=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rh,this.fragmentShader=Ph,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wa(e.uniforms),this.uniformsGroups=Ch(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const s=this.uniforms[a].value;s&&s.isTexture?t.uniforms[a]={type:"t",value:s.toJSON(e).uuid}:s&&s.isColor?t.uniforms[a]={type:"c",value:s.getHex()}:s&&s.isVector2?t.uniforms[a]={type:"v2",value:s.toArray()}:s&&s.isVector3?t.uniforms[a]={type:"v3",value:s.toArray()}:s&&s.isVector4?t.uniforms[a]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?t.uniforms[a]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?t.uniforms[a]={type:"m4",value:s.toArray()}:t.uniforms[a]={value:s}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const a in this.extensions)this.extensions[a]===!0&&(n[a]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Of extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const yi=new k,yc=new Je,_c=new Je;class En extends Of{constructor(e=50,t=1,n=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=no*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return no*2*Math.atan(Math.tan(Za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){yi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(yi.x,yi.y).multiplyScalar(-e/yi.z),yi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(yi.x,yi.y).multiplyScalar(-e/yi.z)}getViewSize(e,t){return this.getViewBounds(e,yc,_c),t.subVectors(_c,yc)}setViewOffset(e,t,n,a,o,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Za*.5*this.fov)/this.zoom,n=2*t,a=this.aspect*n,o=-.5*a;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;o+=s.offsetX*a/l,t-=s.offsetY*n/c,a*=s.width/l,n*=s.height/c}const r=this.filmOffset;r!==0&&(o+=e*r/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oa=-90,ra=1;class Lh extends fn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new En(oa,ra,e,t);a.layers=this.layers,this.add(a);const o=new En(oa,ra,e,t);o.layers=this.layers,this.add(o);const s=new En(oa,ra,e,t);s.layers=this.layers,this.add(s);const r=new En(oa,ra,e,t);r.layers=this.layers,this.add(r);const l=new En(oa,ra,e,t);l.layers=this.layers,this.add(l);const c=new En(oa,ra,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,a,o,s,r,l]=t;for(const c of t)this.remove(c);if(e===zn)n.up.set(0,1,0),n.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),r.up.set(0,1,0),r.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),r.up.set(0,-1,0),r.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,s,r,l,c,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,a),e.render(t,o),e.setRenderTarget(n,1,a),e.render(t,s),e.setRenderTarget(n,2,a),e.render(t,r),e.setRenderTarget(n,3,a),e.render(t,l),e.setRenderTarget(n,4,a),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,a),e.render(t,f),e.setRenderTarget(u,h,p),e.xr.enabled=y,n.texture.needsPMREMUpdate=!0}}class Bf extends gn{constructor(e=[],t=xa,n,a,o,s,r,l,c,f){super(e,t,n,a,o,s,r,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ih extends Nn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},a=[n,n,n,n,n,n];this.texture=new Bf(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new Wi(5,5,5),o=new pn({name:"CubemapFromEquirect",uniforms:wa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Qn});o.uniforms.tEquirect.value=t;const s=new It(a,o),r=t.minFilter;return t.minFilter===Oi&&(t.minFilter=Bn),new Lh(1,10,this).update(e,s),t.minFilter=r,s.geometry.dispose(),s.material.dispose(),this}clear(e,t=!0,n=!0,a=!0){const o=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,a);e.setRenderTarget(o)}}class Zt extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dh={type:"move"};class os{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let a=null,o=null,s=null;const r=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,n),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),p=.02,y=.005;c.inputState.pinching&&h>p+y?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-y&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));r!==null&&(a=t.getPose(e.targetRaySpace,n),a===null&&o!==null&&(a=o),a!==null&&(r.matrix.fromArray(a.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,a.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(a.linearVelocity)):r.hasLinearVelocity=!1,a.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(a.angularVelocity)):r.hasAngularVelocity=!1,this.dispatchEvent(Dh)))}return r!==null&&(r.visible=a!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class El{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new El(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Uh extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ai,this.environmentIntensity=1,this.environmentRotation=new ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class kh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nl,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let a=0,o=this.stride;a<o;a++)this.array[e+a]=t.array[n+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const un=new k;class dr{constructor(e,t,n,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=kt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),a=kt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this}setXYZW(e,t,n,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=kt(t,this.array),n=kt(n,this.array),a=kt(a,this.array),o=kt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=a,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return new nn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new dr(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const a=n*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gt extends Vi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let sa;const Ga=new k,la=new k,ca=new k,fa=new Je,Ha=new Je,zf=new Ht,Bo=new k,Va=new k,zo=new k,vc=new Je,rs=new Je,xc=new Je;class _t extends fn{constructor(e=new gt){if(super(),this.isSprite=!0,this.type="Sprite",sa===void 0){sa=new Xt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new kh(t,5);sa.setIndex([0,1,2,0,2,3]),sa.setAttribute("position",new dr(n,3,0,!1)),sa.setAttribute("uv",new dr(n,2,3,!1))}this.geometry=sa,this.material=e,this.center=new Je(.5,.5),this.count=1}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),la.setFromMatrixScale(this.matrixWorld),zf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ca.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&la.multiplyScalar(-ca.z);const n=this.material.rotation;let a,o;n!==0&&(o=Math.cos(n),a=Math.sin(n));const s=this.center;Go(Bo.set(-.5,-.5,0),ca,s,la,a,o),Go(Va.set(.5,-.5,0),ca,s,la,a,o),Go(zo.set(.5,.5,0),ca,s,la,a,o),vc.set(0,0),rs.set(1,0),xc.set(1,1);let r=e.ray.intersectTriangle(Bo,Va,zo,!1,Ga);if(r===null&&(Go(Va.set(-.5,.5,0),ca,s,la,a,o),rs.set(0,1),r=e.ray.intersectTriangle(Bo,zo,Va,!1,Ga),r===null))return;const l=e.ray.origin.distanceTo(Ga);l<e.near||l>e.far||t.push({distance:l,point:Ga.clone(),uv:An.getInterpolation(Ga,Bo,Va,zo,vc,rs,xc,new Je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Go(i,e,t,n,a,o){fa.subVectors(i,t).addScalar(.5).multiply(n),a!==void 0?(Ha.x=o*fa.x-a*fa.y,Ha.y=a*fa.x+o*fa.y):Ha.copy(fa),i.copy(e),i.x+=Ha.x,i.y+=Ha.y,i.applyMatrix4(zf)}const ss=new k,Nh=new k,Fh=new ct;class Ui{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,a){return this.normal.set(e,t,n),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const a=ss.subVectors(n,t).cross(Nh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ss),a=this.normal.dot(n);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/a;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Fh.getNormalMatrix(e),a=this.coplanarPoint(ss).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new fo,Oh=new Je(.5,.5),Ho=new k;class Gf{constructor(e=new Ui,t=new Ui,n=new Ui,a=new Ui,o=new Ui,s=new Ui){this.planes=[e,t,n,a,o,s]}set(e,t,n,a,o,s){const r=this.planes;return r[0].copy(e),r[1].copy(t),r[2].copy(n),r[3].copy(a),r[4].copy(o),r[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zn,n=!1){const a=this.planes,o=e.elements,s=o[0],r=o[1],l=o[2],c=o[3],f=o[4],u=o[5],h=o[6],p=o[7],y=o[8],x=o[9],m=o[10],d=o[11],T=o[12],E=o[13],S=o[14],P=o[15];if(a[0].setComponents(c-s,p-f,d-y,P-T).normalize(),a[1].setComponents(c+s,p+f,d+y,P+T).normalize(),a[2].setComponents(c+r,p+u,d+x,P+E).normalize(),a[3].setComponents(c-r,p-u,d-x,P-E).normalize(),n)a[4].setComponents(l,h,m,S).normalize(),a[5].setComponents(c-l,p-h,d-m,P-S).normalize();else if(a[4].setComponents(c-l,p-h,d-m,P-S).normalize(),t===zn)a[5].setComponents(c+l,p+h,d+m,P+S).normalize();else if(t===fr)a[5].setComponents(l,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Li.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Li)}intersectsSprite(e){Li.center.set(0,0,0);const t=Oh.distanceTo(e.center);return Li.radius=.7071067811865476+t,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,n=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const a=t[n];if(Ho.x=a.normal.x>0?e.max.x:e.min.x,Ho.y=a.normal.y>0?e.max.y:e.min.y,Ho.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ho)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Al extends Vi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new He(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const hr=new k,pr=new k,bc=new Ht,Wa=new Tl,Vo=new fo,ls=new k,Mc=new k;class Hf extends fn{constructor(e=new Xt,t=new Al){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let a=1,o=t.count;a<o;a++)hr.fromBufferAttribute(t,a-1),pr.fromBufferAttribute(t,a),n[a]=n[a-1],n[a]+=hr.distanceTo(pr);e.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,o=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vo.copy(n.boundingSphere),Vo.applyMatrix4(a),Vo.radius+=o,e.ray.intersectsSphere(Vo)===!1)return;bc.copy(a).invert(),Wa.copy(e.ray).applyMatrix4(bc);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){const p=Math.max(0,s.start),y=Math.min(f.count,s.start+s.count);for(let x=p,m=y-1;x<m;x+=c){const d=f.getX(x),T=f.getX(x+1),E=Wo(this,e,Wa,l,d,T,x);E&&t.push(E)}if(this.isLineLoop){const x=f.getX(y-1),m=f.getX(p),d=Wo(this,e,Wa,l,x,m,y-1);d&&t.push(d)}}else{const p=Math.max(0,s.start),y=Math.min(h.count,s.start+s.count);for(let x=p,m=y-1;x<m;x+=c){const d=Wo(this,e,Wa,l,x,x+1,x);d&&t.push(d)}if(this.isLineLoop){const x=Wo(this,e,Wa,l,y-1,p,y-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=a.length;o<s;o++){const r=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function Wo(i,e,t,n,a,o,s){const r=i.geometry.attributes.position;if(hr.fromBufferAttribute(r,a),pr.fromBufferAttribute(r,o),t.distanceSqToSegment(hr,pr,ls,Mc)>n)return;ls.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ls);if(!(c<e.near||c>e.far))return{distance:c,point:Mc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const wc=new k,Sc=new k;class Bh extends Hf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let a=0,o=t.count;a<o;a+=2)wc.fromBufferAttribute(t,a),Sc.fromBufferAttribute(t,a+1),n[a]=a===0?0:n[a-1],n[a+1]=n[a]+wc.distanceTo(Sc);e.setAttribute("lineDistance",new Gt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oo extends Vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tc=new Ht,il=new Tl,Xo=new fo,Yo=new k;class mr extends fn{constructor(e=new Xt,t=new oo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,a=this.matrixWorld,o=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(a),Xo.radius+=o,e.ray.intersectsSphere(Xo)===!1)return;Tc.copy(a).invert(),il.copy(e.ray).applyMatrix4(Tc);const r=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=r*r,c=n.index,u=n.attributes.position;if(c!==null){const h=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let y=h,x=p;y<x;y++){const m=c.getX(y);Yo.fromBufferAttribute(u,m),Ec(Yo,m,l,a,e,t,this)}}else{const h=Math.max(0,s.start),p=Math.min(u.count,s.start+s.count);for(let y=h,x=p;y<x;y++)Yo.fromBufferAttribute(u,y),Ec(Yo,y,l,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const a=t[n[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,s=a.length;o<s;o++){const r=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[r]=o}}}}}function Ec(i,e,t,n,a,o,s){const r=il.distanceSqToPoint(i);if(r<t){const l=new k;il.closestPointToPoint(i,l),l.applyMatrix4(n);const c=a.ray.origin.distanceTo(l);if(c<a.near||c>a.far)return;o.push({distance:c,distanceToRay:Math.sqrt(r),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:s})}}class Vf extends gn{constructor(e,t,n,a,o,s,r,l,c){super(e,t,n,a,o,s,r,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Wf extends gn{constructor(e,t,n=zi,a,o,s,r=kn,l=kn,c,f=eo,u=1){if(f!==eo&&f!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:u};super(h,a,o,s,r,l,f,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Sl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Xf extends gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ha extends Xt{constructor(e=1,t=1,n=1,a=32,o=1,s=!1,r=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:a,heightSegments:o,openEnded:s,thetaStart:r,thetaLength:l};const c=this;a=Math.floor(a),o=Math.floor(o);const f=[],u=[],h=[],p=[];let y=0;const x=[],m=n/2;let d=0;T(),s===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(f),this.setAttribute("position",new Gt(u,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(p,2));function T(){const S=new k,P=new k;let C=0;const D=(t-e)/n;for(let R=0;R<=o;R++){const w=[],b=R/o,U=b*(t-e)+e;for(let H=0;H<=a;H++){const Q=H/a,re=Q*l+r,ie=Math.sin(re),oe=Math.cos(re);P.x=U*ie,P.y=-b*n+m,P.z=U*oe,u.push(P.x,P.y,P.z),S.set(ie,D,oe).normalize(),h.push(S.x,S.y,S.z),p.push(Q,1-b),w.push(y++)}x.push(w)}for(let R=0;R<a;R++)for(let w=0;w<o;w++){const b=x[w][R],U=x[w+1][R],H=x[w+1][R+1],Q=x[w][R+1];(e>0||w!==0)&&(f.push(b,U,Q),C+=3),(t>0||w!==o-1)&&(f.push(U,H,Q),C+=3)}c.addGroup(d,C,0),d+=C}function E(S){const P=y,C=new Je,D=new k;let R=0;const w=S===!0?e:t,b=S===!0?1:-1;for(let H=1;H<=a;H++)u.push(0,m*b,0),h.push(0,b,0),p.push(.5,.5),y++;const U=y;for(let H=0;H<=a;H++){const re=H/a*l+r,ie=Math.cos(re),oe=Math.sin(re);D.x=w*oe,D.y=m*b,D.z=w*ie,u.push(D.x,D.y,D.z),h.push(0,b,0),C.x=ie*.5+.5,C.y=oe*.5*b+.5,p.push(C.x,C.y),y++}for(let H=0;H<a;H++){const Q=P+H,re=U+H;S===!0?f.push(re,re+1,Q):f.push(re+1,re,Q),R+=3}c.addGroup(d,R,S===!0?1:2),d+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yr extends Xt{constructor(e=[],t=[],n=1,a=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:a};const o=[],s=[];r(a),c(n),f(),this.setAttribute("position",new Gt(o,3)),this.setAttribute("normal",new Gt(o.slice(),3)),this.setAttribute("uv",new Gt(s,2)),a===0?this.computeVertexNormals():this.normalizeNormals();function r(T){const E=new k,S=new k,P=new k;for(let C=0;C<t.length;C+=3)p(t[C+0],E),p(t[C+1],S),p(t[C+2],P),l(E,S,P,T)}function l(T,E,S,P){const C=P+1,D=[];for(let R=0;R<=C;R++){D[R]=[];const w=T.clone().lerp(S,R/C),b=E.clone().lerp(S,R/C),U=C-R;for(let H=0;H<=U;H++)H===0&&R===C?D[R][H]=w:D[R][H]=w.clone().lerp(b,H/U)}for(let R=0;R<C;R++)for(let w=0;w<2*(C-R)-1;w++){const b=Math.floor(w/2);w%2===0?(h(D[R][b+1]),h(D[R+1][b]),h(D[R][b])):(h(D[R][b+1]),h(D[R+1][b+1]),h(D[R+1][b]))}}function c(T){const E=new k;for(let S=0;S<o.length;S+=3)E.x=o[S+0],E.y=o[S+1],E.z=o[S+2],E.normalize().multiplyScalar(T),o[S+0]=E.x,o[S+1]=E.y,o[S+2]=E.z}function f(){const T=new k;for(let E=0;E<o.length;E+=3){T.x=o[E+0],T.y=o[E+1],T.z=o[E+2];const S=m(T)/2/Math.PI+.5,P=d(T)/Math.PI+.5;s.push(S,1-P)}y(),u()}function u(){for(let T=0;T<s.length;T+=6){const E=s[T+0],S=s[T+2],P=s[T+4],C=Math.max(E,S,P),D=Math.min(E,S,P);C>.9&&D<.1&&(E<.2&&(s[T+0]+=1),S<.2&&(s[T+2]+=1),P<.2&&(s[T+4]+=1))}}function h(T){o.push(T.x,T.y,T.z)}function p(T,E){const S=T*3;E.x=e[S+0],E.y=e[S+1],E.z=e[S+2]}function y(){const T=new k,E=new k,S=new k,P=new k,C=new Je,D=new Je,R=new Je;for(let w=0,b=0;w<o.length;w+=9,b+=6){T.set(o[w+0],o[w+1],o[w+2]),E.set(o[w+3],o[w+4],o[w+5]),S.set(o[w+6],o[w+7],o[w+8]),C.set(s[b+0],s[b+1]),D.set(s[b+2],s[b+3]),R.set(s[b+4],s[b+5]),P.copy(T).add(E).add(S).divideScalar(3);const U=m(P);x(C,b+0,T,U),x(D,b+2,E,U),x(R,b+4,S,U)}}function x(T,E,S,P){P<0&&T.x===1&&(s[E]=T.x-1),S.x===0&&S.z===0&&(s[E]=P/2/Math.PI+.5)}function m(T){return Math.atan2(T.z,-T.x)}function d(T){return Math.atan2(-T.y,Math.sqrt(T.x*T.x+T.z*T.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yr(e.vertices,e.indices,e.radius,e.details)}}class _r extends yr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,a=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(a,o,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _r(e.radius,e.detail)}}class Cl extends yr{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],a=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,a,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Cl(e.radius,e.detail)}}class On extends Xt{constructor(e=1,t=1,n=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:a};const o=e/2,s=t/2,r=Math.floor(n),l=Math.floor(a),c=r+1,f=l+1,u=e/r,h=t/l,p=[],y=[],x=[],m=[];for(let d=0;d<f;d++){const T=d*h-s;for(let E=0;E<c;E++){const S=E*u-o;y.push(S,-T,0),x.push(0,0,1),m.push(E/r),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let T=0;T<r;T++){const E=T+c*d,S=T+c*(d+1),P=T+1+c*(d+1),C=T+1+c*d;p.push(E,S,C),p.push(S,P,C)}this.setIndex(p),this.setAttribute("position",new Gt(y,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new On(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ka extends Xt{constructor(e=1,t=32,n=16,a=0,o=Math.PI*2,s=0,r=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:a,phiLength:o,thetaStart:s,thetaLength:r},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(s+r,Math.PI);let c=0;const f=[],u=new k,h=new k,p=[],y=[],x=[],m=[];for(let d=0;d<=n;d++){const T=[],E=d/n;let S=0;d===0&&s===0?S=.5/t:d===n&&l===Math.PI&&(S=-.5/t);for(let P=0;P<=t;P++){const C=P/t;u.x=-e*Math.cos(a+C*o)*Math.sin(s+E*r),u.y=e*Math.cos(s+E*r),u.z=e*Math.sin(a+C*o)*Math.sin(s+E*r),y.push(u.x,u.y,u.z),h.copy(u).normalize(),x.push(h.x,h.y,h.z),m.push(C+S,1-E),T.push(c++)}f.push(T)}for(let d=0;d<n;d++)for(let T=0;T<t;T++){const E=f[d][T+1],S=f[d][T],P=f[d+1][T],C=f[d+1][T+1];(d!==0||s>0)&&p.push(E,S,C),(d!==n-1||l<Math.PI)&&p.push(S,P,C)}this.setIndex(p),this.setAttribute("position",new Gt(y,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ro extends Xt{constructor(e=1,t=.4,n=12,a=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:a,arc:o},n=Math.floor(n),a=Math.floor(a);const s=[],r=[],l=[],c=[],f=new k,u=new k,h=new k;for(let p=0;p<=n;p++)for(let y=0;y<=a;y++){const x=y/a*o,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(x),u.y=(e+t*Math.cos(m))*Math.sin(x),u.z=t*Math.sin(m),r.push(u.x,u.y,u.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),h.subVectors(u,f).normalize(),l.push(h.x,h.y,h.z),c.push(y/a),c.push(p/n)}for(let p=1;p<=n;p++)for(let y=1;y<=a;y++){const x=(a+1)*p+y-1,m=(a+1)*(p-1)+y-1,d=(a+1)*(p-1)+y,T=(a+1)*p+y;s.push(x,m,T),s.push(m,d,T)}this.setIndex(s),this.setAttribute("position",new Gt(r,3)),this.setAttribute("normal",new Gt(l,3)),this.setAttribute("uv",new Gt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class zh extends pn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gh extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Hh extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Yf extends Of{constructor(e=-1,t=1,n=1,a=-1,o=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=a,this.near=o,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,a,o,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=a,this.view.width=o,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=n-e,s=n+e,r=a+t,l=a-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,s=o+c*this.view.width,r-=f*this.view.offsetY,l=r-f*this.view.height}this.projectionMatrix.makeOrthographic(o,s,r,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Vh extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Wh{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Xh extends Bh{constructor(e=10,t=10,n=4473924,a=8947848){n=new He(n),a=new He(a);const o=t/2,s=e/t,r=e/2,l=[],c=[];for(let h=0,p=0,y=-r;h<=t;h++,y+=s){l.push(-r,0,y,r,0,y),l.push(y,0,-r,y,0,r);const x=h===o?n:a;x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3,x.toArray(c,p),p+=3}const f=new Xt;f.setAttribute("position",new Gt(l,3)),f.setAttribute("color",new Gt(c,3));const u=new Al({vertexColors:!0,toneMapped:!1});super(f,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ac(i,e,t,n){const a=Yh(n);switch(t){case Ef:return i*e;case Cf:return i*e/a.components*a.byteLength;case xl:return i*e/a.components*a.byteLength;case Rf:return i*e*2/a.components*a.byteLength;case bl:return i*e*2/a.components*a.byteLength;case Af:return i*e*3/a.components*a.byteLength;case Un:return i*e*4/a.components*a.byteLength;case Ml:return i*e*4/a.components*a.byteLength;case tr:case nr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ir:case ar:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Rs:case Ls:return Math.max(i,16)*Math.max(e,8)/4;case Cs:case Ps:return Math.max(i,8)*Math.max(e,8)/2;case Is:case Ds:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Us:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ks:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ns:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Fs:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Os:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Bs:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case zs:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Gs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Hs:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vs:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ws:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Xs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ys:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Zs:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case qs:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ks:case $s:case js:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Js:case Qs:return Math.ceil(i/4)*Math.ceil(e/4)*8;case el:case tl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yh(i){switch(i){case ii:case Mf:return{byteLength:1,components:1};case Ja:case wf:case ei:return{byteLength:2,components:1};case _l:case vl:return{byteLength:2,components:4};case zi:case yl:case Jn:return{byteLength:4,components:1};case Sf:case Tf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ml}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ml);function Zf(){let i=null,e=!1,t=null,n=null;function a(o,s){t(o,s),n=i.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(a),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Zh(i){const e=new WeakMap;function t(r,l){const c=r.array,f=r.usage,u=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,f),r.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)r.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:r.version,size:u}}function n(r,l,c){const f=l.array,u=l.updateRanges;if(i.bindBuffer(c,r),u.length===0)i.bufferSubData(c,0,f);else{u.sort((p,y)=>p.start-y.start);let h=0;for(let p=1;p<u.length;p++){const y=u[h],x=u[p];x.start<=y.start+y.count+1?y.count=Math.max(y.count,x.start+x.count-y.start):(++h,u[h]=x)}u.length=h+1;for(let p=0,y=u.length;p<y;p++){const x=u[p];i.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function a(r){return r.isInterleavedBufferAttribute&&(r=r.data),e.get(r)}function o(r){r.isInterleavedBufferAttribute&&(r=r.data);const l=e.get(r);l&&(i.deleteBuffer(l.buffer),e.delete(r))}function s(r,l){if(r.isInterleavedBufferAttribute&&(r=r.data),r.isGLBufferAttribute){const f=e.get(r);(!f||f.version<r.version)&&e.set(r,{buffer:r.buffer,type:r.type,bytesPerElement:r.elementSize,version:r.version});return}const c=e.get(r);if(c===void 0)e.set(r,t(r,l));else if(c.version<r.version){if(c.size!==r.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,r,l),c.version=r.version}}return{get:a,remove:o,update:s}}var qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kh=`#ifdef USE_ALPHAHASH
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
#endif`,$h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ep=`#ifdef USE_AOMAP
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
#endif`,tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,np=`#ifdef USE_BATCHING
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
#endif`,ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sp=`#ifdef USE_IRIDESCENCE
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
#endif`,lp=`#ifdef USE_BUMPMAP
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
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yp=`#define PI 3.141592653589793
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
} // validated`,_p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vp=`vec3 transformedNormal = objectNormal;
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
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kp=`#ifdef USE_GRADIENTMAP
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
}`,Np=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bp=`uniform bool receiveShadow;
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
#endif`,zp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Xp=`PhysicalMaterial material;
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
#endif`,Yp=`struct PhysicalMaterial {
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
}`,Zp=`
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,e0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,t0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,i0=`#if defined( USE_POINTS_UV )
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
#endif`,a0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,s0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,c0=`#ifdef USE_MORPHTARGETS
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
#endif`,f0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,d0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,h0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,g0=`#ifdef USE_NORMALMAP
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
#endif`,y0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,v0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,T0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,A0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I0=`float getShadowMask() {
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
}`,D0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,U0=`#ifdef USE_SKINNING
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
#endif`,k0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,N0=`#ifdef USE_SKINNING
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
#endif`,F0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,O0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,B0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,z0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G0=`#ifdef USE_TRANSMISSION
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
#endif`,H0=`#ifdef USE_TRANSMISSION
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
#endif`,V0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,W0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Z0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q0=`uniform sampler2D t2D;
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
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$0=`#ifdef ENVMAP_TYPE_CUBE
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
}`,j0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q0=`#include <common>
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
}`,em=`#if DEPTH_PACKING == 3200
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
}`,tm=`#define DISTANCE
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
}`,nm=`#define DISTANCE
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
}`,im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`uniform float scale;
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
}`,rm=`uniform vec3 diffuse;
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
}`,sm=`#include <common>
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
}`,lm=`uniform vec3 diffuse;
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
}`,cm=`#define LAMBERT
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
}`,fm=`#define LAMBERT
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
}`,um=`#define MATCAP
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
}`,dm=`#define MATCAP
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
}`,hm=`#define NORMAL
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
}`,pm=`#define NORMAL
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
}`,mm=`#define PHONG
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
}`,gm=`#define PHONG
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
}`,ym=`#define STANDARD
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
}`,_m=`#define STANDARD
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
}`,vm=`#define TOON
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
}`,xm=`#define TOON
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
}`,bm=`uniform float size;
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
}`,Mm=`uniform vec3 diffuse;
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
}`,wm=`#include <common>
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
}`,Sm=`uniform vec3 color;
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
}`,Tm=`uniform float rotation;
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
}`,Em=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:qh,alphahash_pars_fragment:Kh,alphamap_fragment:$h,alphamap_pars_fragment:jh,alphatest_fragment:Jh,alphatest_pars_fragment:Qh,aomap_fragment:ep,aomap_pars_fragment:tp,batching_pars_vertex:np,batching_vertex:ip,begin_vertex:ap,beginnormal_vertex:op,bsdfs:rp,iridescence_fragment:sp,bumpmap_pars_fragment:lp,clipping_planes_fragment:cp,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:up,clipping_planes_vertex:dp,color_fragment:hp,color_pars_fragment:pp,color_pars_vertex:mp,color_vertex:gp,common:yp,cube_uv_reflection_fragment:_p,defaultnormal_vertex:vp,displacementmap_pars_vertex:xp,displacementmap_vertex:bp,emissivemap_fragment:Mp,emissivemap_pars_fragment:wp,colorspace_fragment:Sp,colorspace_pars_fragment:Tp,envmap_fragment:Ep,envmap_common_pars_fragment:Ap,envmap_pars_fragment:Cp,envmap_pars_vertex:Rp,envmap_physical_pars_fragment:zp,envmap_vertex:Pp,fog_vertex:Lp,fog_pars_vertex:Ip,fog_fragment:Dp,fog_pars_fragment:Up,gradientmap_pars_fragment:kp,lightmap_pars_fragment:Np,lights_lambert_fragment:Fp,lights_lambert_pars_fragment:Op,lights_pars_begin:Bp,lights_toon_fragment:Gp,lights_toon_pars_fragment:Hp,lights_phong_fragment:Vp,lights_phong_pars_fragment:Wp,lights_physical_fragment:Xp,lights_physical_pars_fragment:Yp,lights_fragment_begin:Zp,lights_fragment_maps:qp,lights_fragment_end:Kp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:Jp,logdepthbuf_vertex:Qp,map_fragment:e0,map_pars_fragment:t0,map_particle_fragment:n0,map_particle_pars_fragment:i0,metalnessmap_fragment:a0,metalnessmap_pars_fragment:o0,morphinstance_vertex:r0,morphcolor_vertex:s0,morphnormal_vertex:l0,morphtarget_pars_vertex:c0,morphtarget_vertex:f0,normal_fragment_begin:u0,normal_fragment_maps:d0,normal_pars_fragment:h0,normal_pars_vertex:p0,normal_vertex:m0,normalmap_pars_fragment:g0,clearcoat_normal_fragment_begin:y0,clearcoat_normal_fragment_maps:_0,clearcoat_pars_fragment:v0,iridescence_pars_fragment:x0,opaque_fragment:b0,packing:M0,premultiplied_alpha_fragment:w0,project_vertex:S0,dithering_fragment:T0,dithering_pars_fragment:E0,roughnessmap_fragment:A0,roughnessmap_pars_fragment:C0,shadowmap_pars_fragment:R0,shadowmap_pars_vertex:P0,shadowmap_vertex:L0,shadowmask_pars_fragment:I0,skinbase_vertex:D0,skinning_pars_vertex:U0,skinning_vertex:k0,skinnormal_vertex:N0,specularmap_fragment:F0,specularmap_pars_fragment:O0,tonemapping_fragment:B0,tonemapping_pars_fragment:z0,transmission_fragment:G0,transmission_pars_fragment:H0,uv_pars_fragment:V0,uv_pars_vertex:W0,uv_vertex:X0,worldpos_vertex:Y0,background_vert:Z0,background_frag:q0,backgroundCube_vert:K0,backgroundCube_frag:$0,cube_vert:j0,cube_frag:J0,depth_vert:Q0,depth_frag:em,distanceRGBA_vert:tm,distanceRGBA_frag:nm,equirect_vert:im,equirect_frag:am,linedashed_vert:om,linedashed_frag:rm,meshbasic_vert:sm,meshbasic_frag:lm,meshlambert_vert:cm,meshlambert_frag:fm,meshmatcap_vert:um,meshmatcap_frag:dm,meshnormal_vert:hm,meshnormal_frag:pm,meshphong_vert:mm,meshphong_frag:gm,meshphysical_vert:ym,meshphysical_frag:_m,meshtoon_vert:vm,meshtoon_frag:xm,points_vert:bm,points_frag:Mm,shadow_vert:wm,shadow_frag:Sm,sprite_vert:Tm,sprite_frag:Em},Ce={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},Fn={basic:{uniforms:dn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:dn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new He(0)}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:dn([Ce.common,Ce.specularmap,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,Ce.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:dn([Ce.common,Ce.envmap,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.roughnessmap,Ce.metalnessmap,Ce.fog,Ce.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:dn([Ce.common,Ce.aomap,Ce.lightmap,Ce.emissivemap,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.gradientmap,Ce.fog,Ce.lights,{emissive:{value:new He(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:dn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,Ce.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:dn([Ce.points,Ce.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:dn([Ce.common,Ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:dn([Ce.common,Ce.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:dn([Ce.common,Ce.bumpmap,Ce.normalmap,Ce.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:dn([Ce.sprite,Ce.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distanceRGBA:{uniforms:dn([Ce.common,Ce.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distanceRGBA_vert,fragmentShader:dt.distanceRGBA_frag},shadow:{uniforms:dn([Ce.lights,Ce.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Fn.physical={uniforms:dn([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Zo={r:0,b:0,g:0},Ii=new ai,Am=new Ht;function Cm(i,e,t,n,a,o,s){const r=new He(0);let l=o===!0?0:1,c,f,u=null,h=0,p=null;function y(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?t:e).get(S)),S}function x(E){let S=!1;const P=y(E);P===null?d(r,l):P&&P.isColor&&(d(P,1),S=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,S){const P=y(S);P&&(P.isCubeTexture||P.mapping===gr)?(f===void 0&&(f=new It(new Wi(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:wa(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,D,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(f)),Ii.copy(S.backgroundRotation),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),f.material.uniforms.envMap.value=P,f.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Am.makeRotationFromEuler(Ii)),f.material.toneMapped=Et.getTransfer(P.colorSpace)!==Ut,(u!==P||h!==P.version||p!==i.toneMapping)&&(f.material.needsUpdate=!0,u=P,h=P.version,p=i.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new It(new On(2,2),new pn({name:"BackgroundMaterial",uniforms:wa(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Et.getTransfer(P.colorSpace)!==Ut,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(u!==P||h!==P.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=P,h=P.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,S){E.getRGB(Zo,Ff(i)),n.buffers.color.setClear(Zo.r,Zo.g,Zo.b,S,s)}function T(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return r},setClearColor:function(E,S=1){r.set(E),l=S,d(r,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(r,l)},render:x,addToRenderList:m,dispose:T}}function Rm(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},a=h(null);let o=a,s=!1;function r(b,U,H,Q,re){let ie=!1;const oe=u(Q,H,U);o!==oe&&(o=oe,c(o.object)),ie=p(b,Q,H,re),ie&&y(b,Q,H,re),re!==null&&e.update(re,i.ELEMENT_ARRAY_BUFFER),(ie||s)&&(s=!1,S(b,U,H,Q),re!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function l(){return i.createVertexArray()}function c(b){return i.bindVertexArray(b)}function f(b){return i.deleteVertexArray(b)}function u(b,U,H){const Q=H.wireframe===!0;let re=n[b.id];re===void 0&&(re={},n[b.id]=re);let ie=re[U.id];ie===void 0&&(ie={},re[U.id]=ie);let oe=ie[Q];return oe===void 0&&(oe=h(l()),ie[Q]=oe),oe}function h(b){const U=[],H=[],Q=[];for(let re=0;re<t;re++)U[re]=0,H[re]=0,Q[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:Q,object:b,attributes:{},index:null}}function p(b,U,H,Q){const re=o.attributes,ie=U.attributes;let oe=0;const ce=H.getAttributes();for(const ee in ce)if(ce[ee].location>=0){const we=re[ee];let Fe=ie[ee];if(Fe===void 0&&(ee==="instanceMatrix"&&b.instanceMatrix&&(Fe=b.instanceMatrix),ee==="instanceColor"&&b.instanceColor&&(Fe=b.instanceColor)),we===void 0||we.attribute!==Fe||Fe&&we.data!==Fe.data)return!0;oe++}return o.attributesNum!==oe||o.index!==Q}function y(b,U,H,Q){const re={},ie=U.attributes;let oe=0;const ce=H.getAttributes();for(const ee in ce)if(ce[ee].location>=0){let we=ie[ee];we===void 0&&(ee==="instanceMatrix"&&b.instanceMatrix&&(we=b.instanceMatrix),ee==="instanceColor"&&b.instanceColor&&(we=b.instanceColor));const Fe={};Fe.attribute=we,we&&we.data&&(Fe.data=we.data),re[ee]=Fe,oe++}o.attributes=re,o.attributesNum=oe,o.index=Q}function x(){const b=o.newAttributes;for(let U=0,H=b.length;U<H;U++)b[U]=0}function m(b){d(b,0)}function d(b,U){const H=o.newAttributes,Q=o.enabledAttributes,re=o.attributeDivisors;H[b]=1,Q[b]===0&&(i.enableVertexAttribArray(b),Q[b]=1),re[b]!==U&&(i.vertexAttribDivisor(b,U),re[b]=U)}function T(){const b=o.newAttributes,U=o.enabledAttributes;for(let H=0,Q=U.length;H<Q;H++)U[H]!==b[H]&&(i.disableVertexAttribArray(H),U[H]=0)}function E(b,U,H,Q,re,ie,oe){oe===!0?i.vertexAttribIPointer(b,U,H,re,ie):i.vertexAttribPointer(b,U,H,Q,re,ie)}function S(b,U,H,Q){x();const re=Q.attributes,ie=H.getAttributes(),oe=U.defaultAttributeValues;for(const ce in ie){const ee=ie[ce];if(ee.location>=0){let xe=re[ce];if(xe===void 0&&(ce==="instanceMatrix"&&b.instanceMatrix&&(xe=b.instanceMatrix),ce==="instanceColor"&&b.instanceColor&&(xe=b.instanceColor)),xe!==void 0){const we=xe.normalized,Fe=xe.itemSize,ot=e.get(xe);if(ot===void 0)continue;const xt=ot.buffer,Qe=ot.type,ht=ot.bytesPerElement,ae=Qe===i.INT||Qe===i.UNSIGNED_INT||xe.gpuType===yl;if(xe.isInterleavedBufferAttribute){const fe=xe.data,Ie=fe.stride,$e=xe.offset;if(fe.isInstancedInterleavedBuffer){for(let Oe=0;Oe<ee.locationSize;Oe++)d(ee.location+Oe,fe.meshPerAttribute);b.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Oe=0;Oe<ee.locationSize;Oe++)m(ee.location+Oe);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let Oe=0;Oe<ee.locationSize;Oe++)E(ee.location+Oe,Fe/ee.locationSize,Qe,we,Ie*ht,($e+Fe/ee.locationSize*Oe)*ht,ae)}else{if(xe.isInstancedBufferAttribute){for(let fe=0;fe<ee.locationSize;fe++)d(ee.location+fe,xe.meshPerAttribute);b.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let fe=0;fe<ee.locationSize;fe++)m(ee.location+fe);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let fe=0;fe<ee.locationSize;fe++)E(ee.location+fe,Fe/ee.locationSize,Qe,we,Fe*ht,Fe/ee.locationSize*fe*ht,ae)}}else if(oe!==void 0){const we=oe[ce];if(we!==void 0)switch(we.length){case 2:i.vertexAttrib2fv(ee.location,we);break;case 3:i.vertexAttrib3fv(ee.location,we);break;case 4:i.vertexAttrib4fv(ee.location,we);break;default:i.vertexAttrib1fv(ee.location,we)}}}}T()}function P(){R();for(const b in n){const U=n[b];for(const H in U){const Q=U[H];for(const re in Q)f(Q[re].object),delete Q[re];delete U[H]}delete n[b]}}function C(b){if(n[b.id]===void 0)return;const U=n[b.id];for(const H in U){const Q=U[H];for(const re in Q)f(Q[re].object),delete Q[re];delete U[H]}delete n[b.id]}function D(b){for(const U in n){const H=n[U];if(H[b.id]===void 0)continue;const Q=H[b.id];for(const re in Q)f(Q[re].object),delete Q[re];delete H[b.id]}}function R(){w(),s=!0,o!==a&&(o=a,c(o.object))}function w(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:r,reset:R,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:x,enableAttribute:m,disableUnusedAttributes:T}}function Pm(i,e,t){let n;function a(c){n=c}function o(c,f){i.drawArrays(n,c,f),t.update(f,n,1)}function s(c,f,u){u!==0&&(i.drawArraysInstanced(n,c,f,u),t.update(f,n,u))}function r(c,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,u);let p=0;for(let y=0;y<u;y++)p+=f[y];t.update(p,n,1)}function l(c,f,u,h){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let y=0;y<c.length;y++)s(c[y],f[y],h[y]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,f,0,h,0,u);let y=0;for(let x=0;x<u;x++)y+=f[x]*h[x];t.update(y,n,1)}}this.setMode=a,this.render=o,this.renderInstances=s,this.renderMultiDraw=r,this.renderMultiDrawInstances=l}function Lm(i,e,t,n){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");a=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function s(D){return!(D!==Un&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function r(D){const R=D===ei&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==ii&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==Jn&&!R)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=y>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:r,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:y,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:P,maxSamples:C}}function Im(i){const e=this;let t=null,n=0,a=!1,o=!1;const s=new Ui,r=new ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||n!==0||a;return a=h,n=u.length,p},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,h){t=f(u,h,0)},this.setState=function(u,h,p){const y=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!a||y===null||y.length===0||o&&!m)o?f(null):c();else{const T=o?0:n,E=T*4;let S=d.clippingState||null;l.value=S,S=f(y,h,E,p);for(let P=0;P!==E;++P)S[P]=t[P];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(u,h,p,y){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,y!==!0||m===null){const d=p+x*4,T=h.matrixWorldInverse;r.getNormalMatrix(T),(m===null||m.length<d)&&(m=new Float32Array(d));for(let E=0,S=p;E!==x;++E,S+=4)s.copy(u[E]).applyMatrix4(T,r),s.normal.toArray(m,S),m[S+3]=s.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Dm(i){let e=new WeakMap;function t(s,r){return r===Ts?s.mapping=xa:r===Es&&(s.mapping=ba),s}function n(s){if(s&&s.isTexture){const r=s.mapping;if(r===Ts||r===Es)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Ih(l.height);return c.fromEquirectangularTexture(i,s),e.set(s,c),s.addEventListener("dispose",a),t(c.texture,s.mapping)}else return null}}return s}function a(s){const r=s.target;r.removeEventListener("dispose",a);const l=e.get(r);l!==void 0&&(e.delete(r),l.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}const pa=4,Cc=[.125,.215,.35,.446,.526,.582],Fi=20,cs=new Yf,Rc=new He;let fs=null,us=0,ds=0,hs=!1;const ki=(1+Math.sqrt(5))/2,ua=1/ki,Pc=[new k(-ki,ua,0),new k(ki,ua,0),new k(-ua,0,ki),new k(ua,0,ki),new k(0,ki,-ua),new k(0,ki,ua),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)],Um=new k;class Lc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,a=100,o={}){const{size:s=256,position:r=Um}=o;fs=this._renderer.getRenderTarget(),us=this._renderer.getActiveCubeFace(),ds=this._renderer.getActiveMipmapLevel(),hs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,a,l,r),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(fs,us,ds),this._renderer.xr.enabled=hs,e.scissorTest=!1,qo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xa||e.mapping===ba?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fs=this._renderer.getRenderTarget(),us=this._renderer.getActiveCubeFace(),ds=this._renderer.getActiveMipmapLevel(),hs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:ei,format:Un,colorSpace:Ma,depthBuffer:!1},a=Ic(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ic(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=km(o)),this._blurMaterial=Nm(o,e,t)}return a}_compileMaterial(e){const t=new It(this._lodPlanes[0],e);this._renderer.compile(t,cs)}_sceneToCubeUV(e,t,n,a,o){const l=new En(90,1,t,n),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(Rc),u.toneMapping=xi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(a),u.clearDepth(),u.setRenderTarget(null));const x=new qt({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),m=new It(new Wi,x);let d=!1;const T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,d=!0):(x.color.copy(Rc),d=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,c[E],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x+f[E],o.y,o.z)):S===1?(l.up.set(0,0,c[E]),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y+f[E],o.z)):(l.up.set(0,c[E],0),l.position.set(o.x,o.y,o.z),l.lookAt(o.x,o.y,o.z+f[E]));const P=this._cubeSize;qo(a,S*P,E>2?P:0,P,P),u.setRenderTarget(a),d&&u.render(m,l),u.render(e,l)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=p,u.autoClear=h,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,a=e.mapping===xa||e.mapping===ba;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dc());const o=a?this._cubemapMaterial:this._equirectMaterial,s=new It(this._lodPlanes[0],o),r=o.uniforms;r.envMap.value=e;const l=this._cubeSize;qo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,cs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let o=1;o<a;o++){const s=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),r=Pc[(a-o-1)%Pc.length];this._blur(e,o-1,o,s,r)}t.autoClear=n}_blur(e,t,n,a,o){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,a,"latitudinal",o),this._halfBlur(s,e,n,n,a,"longitudinal",o)}_halfBlur(e,t,n,a,o,s,r){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,u=new It(this._lodPlanes[a],c),h=c.uniforms,p=this._sizeLods[n]-1,y=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Fi-1),x=o/y,m=isFinite(o)?1+Math.floor(f*x):Fi;m>Fi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fi}`);const d=[];let T=0;for(let D=0;D<Fi;++D){const R=D/x,w=Math.exp(-R*R/2);d.push(w),D===0?T+=w:D<m&&(T+=2*w)}for(let D=0;D<d.length;D++)d[D]=d[D]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=s==="latitudinal",r&&(h.poleAxis.value=r);const{_lodMax:E}=this;h.dTheta.value=y,h.mipInt.value=E-n;const S=this._sizeLods[a],P=3*S*(a>E-pa?a-E+pa:0),C=4*(this._cubeSize-S);qo(t,P,C,3*S,2*S),l.setRenderTarget(t),l.render(u,cs)}}function km(i){const e=[],t=[],n=[];let a=i;const o=i-pa+1+Cc.length;for(let s=0;s<o;s++){const r=Math.pow(2,a);t.push(r);let l=1/r;s>i-pa?l=Cc[s-i+pa-1]:s===0&&(l=0),n.push(l);const c=1/(r-2),f=-c,u=1+c,h=[f,f,u,f,u,u,f,f,u,u,f,u],p=6,y=6,x=3,m=2,d=1,T=new Float32Array(x*y*p),E=new Float32Array(m*y*p),S=new Float32Array(d*y*p);for(let C=0;C<p;C++){const D=C%3*2/3-1,R=C>2?0:-1,w=[D,R,0,D+2/3,R,0,D+2/3,R+1,0,D,R,0,D+2/3,R+1,0,D,R+1,0];T.set(w,x*y*C),E.set(h,m*y*C);const b=[C,C,C,C,C,C];S.set(b,d*y*C)}const P=new Xt;P.setAttribute("position",new nn(T,x)),P.setAttribute("uv",new nn(E,m)),P.setAttribute("faceIndex",new nn(S,d)),e.push(P),a>pa&&a--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ic(i,e,t){const n=new Nn(i,e,t);return n.texture.mapping=gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qo(i,e,t,n,a){i.viewport.set(e,t,n,a),i.scissor.set(e,t,n,a)}function Nm(i,e,t){const n=new Float32Array(Fi),a=new k(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:Fi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Dc(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rl(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Uc(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function Rl(){return`

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
	`}function Fm(i){let e=new WeakMap,t=null;function n(r){if(r&&r.isTexture){const l=r.mapping,c=l===Ts||l===Es,f=l===xa||l===ba;if(c||f){let u=e.get(r);const h=u!==void 0?u.texture.pmremVersion:0;if(r.isRenderTargetTexture&&r.pmremVersion!==h)return t===null&&(t=new Lc(i)),u=c?t.fromEquirectangular(r,u):t.fromCubemap(r,u),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),u.texture;if(u!==void 0)return u.texture;{const p=r.image;return c&&p&&p.height>0||f&&p&&a(p)?(t===null&&(t=new Lc(i)),u=c?t.fromEquirectangular(r):t.fromCubemap(r),u.texture.pmremVersion=r.pmremVersion,e.set(r,u),r.addEventListener("dispose",o),u.texture):null}}}return r}function a(r){let l=0;const c=6;for(let f=0;f<c;f++)r[f]!==void 0&&l++;return l===c}function o(r){const l=r.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:s}}function Om(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let a;switch(n){case"WEBGL_depth_texture":a=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=i.getExtension(n)}return e[n]=a,a}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const a=t(n);return a===null&&io("THREE.WebGLRenderer: "+n+" extension not supported."),a}}}function Bm(i,e,t,n){const a={},o=new WeakMap;function s(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const y in h.attributes)e.remove(h.attributes[y]);h.removeEventListener("dispose",s),delete a[h.id];const p=o.get(h);p&&(e.remove(p),o.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function r(u,h){return a[h.id]===!0||(h.addEventListener("dispose",s),a[h.id]=!0,t.memory.geometries++),h}function l(u){const h=u.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(u){const h=[],p=u.index,y=u.attributes.position;let x=0;if(p!==null){const T=p.array;x=p.version;for(let E=0,S=T.length;E<S;E+=3){const P=T[E+0],C=T[E+1],D=T[E+2];h.push(P,C,C,D,D,P)}}else if(y!==void 0){const T=y.array;x=y.version;for(let E=0,S=T.length/3-1;E<S;E+=3){const P=E+0,C=E+1,D=E+2;h.push(P,C,C,D,D,P)}}else return;const m=new(Lf(h)?Nf:kf)(h,1);m.version=x;const d=o.get(u);d&&e.remove(d),o.set(u,m)}function f(u){const h=o.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&c(u)}else c(u);return o.get(u)}return{get:r,update:l,getWireframeAttribute:f}}function zm(i,e,t){let n;function a(h){n=h}let o,s;function r(h){o=h.type,s=h.bytesPerElement}function l(h,p){i.drawElements(n,p,o,h*s),t.update(p,n,1)}function c(h,p,y){y!==0&&(i.drawElementsInstanced(n,p,o,h*s,y),t.update(p,n,y))}function f(h,p,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,h,0,y);let m=0;for(let d=0;d<y;d++)m+=p[d];t.update(m,n,1)}function u(h,p,y,x){if(y===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/s,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,o,h,0,x,0,y);let d=0;for(let T=0;T<y;T++)d+=p[T]*x[T];t.update(d,n,1)}}this.setMode=a,this.setIndex=r,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function Gm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,s,r){switch(t.calls++,s){case i.TRIANGLES:t.triangles+=r*(o/3);break;case i.LINES:t.lines+=r*(o/2);break;case i.LINE_STRIP:t.lines+=r*(o-1);break;case i.LINE_LOOP:t.lines+=r*o;break;case i.POINTS:t.points+=r*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:n}}function Hm(i,e,t){const n=new WeakMap,a=new Wt;function o(s,r,l){const c=s.morphTargetInfluences,f=r.morphAttributes.position||r.morphAttributes.normal||r.morphAttributes.color,u=f!==void 0?f.length:0;let h=n.get(r);if(h===void 0||h.count!==u){let b=function(){R.dispose(),n.delete(r),r.removeEventListener("dispose",b)};var p=b;h!==void 0&&h.texture.dispose();const y=r.morphAttributes.position!==void 0,x=r.morphAttributes.normal!==void 0,m=r.morphAttributes.color!==void 0,d=r.morphAttributes.position||[],T=r.morphAttributes.normal||[],E=r.morphAttributes.color||[];let S=0;y===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let P=r.attributes.position.count*S,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const D=new Float32Array(P*C*4*u),R=new If(D,P,C,u);R.type=Jn,R.needsUpdate=!0;const w=S*4;for(let U=0;U<u;U++){const H=d[U],Q=T[U],re=E[U],ie=P*C*4*U;for(let oe=0;oe<H.count;oe++){const ce=oe*w;y===!0&&(a.fromBufferAttribute(H,oe),D[ie+ce+0]=a.x,D[ie+ce+1]=a.y,D[ie+ce+2]=a.z,D[ie+ce+3]=0),x===!0&&(a.fromBufferAttribute(Q,oe),D[ie+ce+4]=a.x,D[ie+ce+5]=a.y,D[ie+ce+6]=a.z,D[ie+ce+7]=0),m===!0&&(a.fromBufferAttribute(re,oe),D[ie+ce+8]=a.x,D[ie+ce+9]=a.y,D[ie+ce+10]=a.z,D[ie+ce+11]=re.itemSize===4?a.w:1)}}h={count:u,texture:R,size:new Je(P,C)},n.set(r,h),r.addEventListener("dispose",b)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",s.morphTexture,t);else{let y=0;for(let m=0;m<c.length;m++)y+=c[m];const x=r.morphTargetsRelative?1:1-y;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:o}}function Vm(i,e,t,n){let a=new WeakMap;function o(l){const c=n.render.frame,f=l.geometry,u=e.get(l,f);if(a.get(u)!==c&&(e.update(u),a.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",r)===!1&&l.addEventListener("dispose",r),a.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),a.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;a.get(h)!==c&&(h.update(),a.set(h,c))}return u}function s(){a=new WeakMap}function r(l){const c=l.target;c.removeEventListener("dispose",r),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:s}}const qf=new gn,kc=new Wf(1,1),Kf=new If,$f=new gh,jf=new Bf,Nc=[],Fc=[],Oc=new Float32Array(16),Bc=new Float32Array(9),zc=new Float32Array(4);function Pa(i,e,t){const n=i[0];if(n<=0||n>0)return i;const a=e*t;let o=Nc[a];if(o===void 0&&(o=new Float32Array(a),Nc[a]=o),e!==0){n.toArray(o,0);for(let s=1,r=0;s!==e;++s)r+=t,i[s].toArray(o,r)}return o}function Kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function $t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vr(i,e){let t=Fc[e];t===void 0&&(t=new Int32Array(e),Fc[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Wm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2fv(this.addr,e),$t(t,e)}}function Ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;i.uniform3fv(this.addr,e),$t(t,e)}}function Zm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4fv(this.addr,e),$t(t,e)}}function qm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,n))return;zc.set(n),i.uniformMatrix2fv(this.addr,!1,zc),$t(t,n)}}function Km(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,n))return;Bc.set(n),i.uniformMatrix3fv(this.addr,!1,Bc),$t(t,n)}}function $m(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Kt(t,n))return;Oc.set(n),i.uniformMatrix4fv(this.addr,!1,Oc),$t(t,n)}}function jm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2iv(this.addr,e),$t(t,e)}}function Qm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3iv(this.addr,e),$t(t,e)}}function e1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4iv(this.addr,e),$t(t,e)}}function t1(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function n1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;i.uniform2uiv(this.addr,e),$t(t,e)}}function i1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;i.uniform3uiv(this.addr,e),$t(t,e)}}function a1(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;i.uniform4uiv(this.addr,e),$t(t,e)}}function o1(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a);let o;this.type===i.SAMPLER_2D_SHADOW?(kc.compareFunction=Pf,o=kc):o=qf,t.setTexture2D(e||o,a)}function r1(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture3D(e||$f,a)}function s1(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTextureCube(e||jf,a)}function l1(i,e,t){const n=this.cache,a=t.allocateTextureUnit();n[0]!==a&&(i.uniform1i(this.addr,a),n[0]=a),t.setTexture2DArray(e||Kf,a)}function c1(i){switch(i){case 5126:return Wm;case 35664:return Xm;case 35665:return Ym;case 35666:return Zm;case 35674:return qm;case 35675:return Km;case 35676:return $m;case 5124:case 35670:return jm;case 35667:case 35671:return Jm;case 35668:case 35672:return Qm;case 35669:case 35673:return e1;case 5125:return t1;case 36294:return n1;case 36295:return i1;case 36296:return a1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return r1;case 35680:case 36300:case 36308:case 36293:return s1;case 36289:case 36303:case 36311:case 36292:return l1}}function f1(i,e){i.uniform1fv(this.addr,e)}function u1(i,e){const t=Pa(e,this.size,2);i.uniform2fv(this.addr,t)}function d1(i,e){const t=Pa(e,this.size,3);i.uniform3fv(this.addr,t)}function h1(i,e){const t=Pa(e,this.size,4);i.uniform4fv(this.addr,t)}function p1(i,e){const t=Pa(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function m1(i,e){const t=Pa(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function g1(i,e){const t=Pa(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function y1(i,e){i.uniform1iv(this.addr,e)}function _1(i,e){i.uniform2iv(this.addr,e)}function v1(i,e){i.uniform3iv(this.addr,e)}function x1(i,e){i.uniform4iv(this.addr,e)}function b1(i,e){i.uniform1uiv(this.addr,e)}function M1(i,e){i.uniform2uiv(this.addr,e)}function w1(i,e){i.uniform3uiv(this.addr,e)}function S1(i,e){i.uniform4uiv(this.addr,e)}function T1(i,e,t){const n=this.cache,a=e.length,o=vr(t,a);Kt(n,o)||(i.uniform1iv(this.addr,o),$t(n,o));for(let s=0;s!==a;++s)t.setTexture2D(e[s]||qf,o[s])}function E1(i,e,t){const n=this.cache,a=e.length,o=vr(t,a);Kt(n,o)||(i.uniform1iv(this.addr,o),$t(n,o));for(let s=0;s!==a;++s)t.setTexture3D(e[s]||$f,o[s])}function A1(i,e,t){const n=this.cache,a=e.length,o=vr(t,a);Kt(n,o)||(i.uniform1iv(this.addr,o),$t(n,o));for(let s=0;s!==a;++s)t.setTextureCube(e[s]||jf,o[s])}function C1(i,e,t){const n=this.cache,a=e.length,o=vr(t,a);Kt(n,o)||(i.uniform1iv(this.addr,o),$t(n,o));for(let s=0;s!==a;++s)t.setTexture2DArray(e[s]||Kf,o[s])}function R1(i){switch(i){case 5126:return f1;case 35664:return u1;case 35665:return d1;case 35666:return h1;case 35674:return p1;case 35675:return m1;case 35676:return g1;case 5124:case 35670:return y1;case 35667:case 35671:return _1;case 35668:case 35672:return v1;case 35669:case 35673:return x1;case 5125:return b1;case 36294:return M1;case 36295:return w1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return T1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return A1;case 36289:case 36303:case 36311:case 36292:return C1}}class P1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=c1(t.type)}}class L1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=R1(t.type)}}class I1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const a=this.seq;for(let o=0,s=a.length;o!==s;++o){const r=a[o];r.setValue(e,t[r.id],n)}}}const ps=/(\w+)(\])?(\[|\.)?/g;function Gc(i,e){i.seq.push(e),i.map[e.id]=e}function D1(i,e,t){const n=i.name,a=n.length;for(ps.lastIndex=0;;){const o=ps.exec(n),s=ps.lastIndex;let r=o[1];const l=o[2]==="]",c=o[3];if(l&&(r=r|0),c===void 0||c==="["&&s+2===a){Gc(t,c===void 0?new P1(r,i,e):new L1(r,i,e));break}else{let u=t.map[r];u===void 0&&(u=new I1(r),Gc(t,u)),t=u}}}class or{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),s=e.getUniformLocation(t,o.name);D1(o,s,this)}}setValue(e,t,n,a){const o=this.map[t];o!==void 0&&o.setValue(e,n,a)}setOptional(e,t,n){const a=t[n];a!==void 0&&this.setValue(e,n,a)}static upload(e,t,n,a){for(let o=0,s=t.length;o!==s;++o){const r=t[o],l=n[r.id];l.needsUpdate!==!1&&r.setValue(e,l.value,a)}}static seqWithValue(e,t){const n=[];for(let a=0,o=e.length;a!==o;++a){const s=e[a];s.id in t&&n.push(s)}return n}}function Hc(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const U1=37297;let k1=0;function N1(i,e){const t=i.split(`
`),n=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let s=a;s<o;s++){const r=s+1;n.push(`${r===e?">":" "} ${r}: ${t[s]}`)}return n.join(`
`)}const Vc=new ct;function F1(i){Et._getMatrix(Vc,Et.workingColorSpace,i);const e=`mat3( ${Vc.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(i)){case cr:return[e,"LinearTransferOETF"];case Ut:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Wc(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),o=(i.getShaderInfoLog(e)||"").trim();if(n&&o==="")return"";const s=/ERROR: 0:(\d+)/.exec(o);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+o+`

`+N1(i.getShaderSource(e),r)}else return o}function O1(i,e){const t=F1(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function B1(i,e){let t;switch(e){case mf:t="Linear";break;case gf:t="Reinhard";break;case yf:t="Cineon";break;case gl:t="ACESFilmic";break;case vf:t="AgX";break;case xf:t="Neutral";break;case _f:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ko=new k;function z1(){Et.getLuminanceCoefficients(Ko);const i=Ko.x.toFixed(4),e=Ko.y.toFixed(4),t=Ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function G1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xa).join(`
`)}function H1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function V1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let a=0;a<n;a++){const o=i.getActiveAttrib(e,a),s=o.name;let r=1;o.type===i.FLOAT_MAT2&&(r=2),o.type===i.FLOAT_MAT3&&(r=3),o.type===i.FLOAT_MAT4&&(r=4),t[s]={type:o.type,location:i.getAttribLocation(e,s),locationSize:r}}return t}function Xa(i){return i!==""}function Xc(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yc(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const W1=/^[ \t]*#include +<([\w\d./]+)>/gm;function al(i){return i.replace(W1,Y1)}const X1=new Map;function Y1(i,e){let t=dt[e];if(t===void 0){const n=X1.get(e);if(n!==void 0)t=dt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return al(t)}const Z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(i){return i.replace(Z1,q1)}function q1(i,e,t,n){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function qc(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function K1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hf?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===pd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===$n&&(e="SHADOWMAP_TYPE_VSM"),e}function $1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xa:case ba:e="ENVMAP_TYPE_CUBE";break;case gr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function j1(i){let e="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===ba&&(e="ENVMAP_MODE_REFRACTION"),e}function J1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case pf:e="ENVMAP_BLENDING_MULTIPLY";break;case Dd:e="ENVMAP_BLENDING_MIX";break;case Ud:e="ENVMAP_BLENDING_ADD";break}return e}function Q1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function eg(i,e,t,n){const a=i.getContext(),o=t.defines;let s=t.vertexShader,r=t.fragmentShader;const l=K1(t),c=$1(t),f=j1(t),u=J1(t),h=Q1(t),p=G1(t),y=H1(o),x=a.createProgram();let m,d,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Xa).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Xa).join(`
`),d.length>0&&(d+=`
`)):(m=[qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xa).join(`
`),d=[qc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xi?"#define TONE_MAPPING":"",t.toneMapping!==xi?dt.tonemapping_pars_fragment:"",t.toneMapping!==xi?B1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,O1("linearToOutputTexel",t.outputColorSpace),z1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xa).join(`
`)),s=al(s),s=Xc(s,t),s=Yc(s,t),r=al(r),r=Xc(r,t),r=Yc(r,t),s=Zc(s),r=Zc(r),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ec?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ec?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=T+m+s,S=T+d+r,P=Hc(a,a.VERTEX_SHADER,E),C=Hc(a,a.FRAGMENT_SHADER,S);a.attachShader(x,P),a.attachShader(x,C),t.index0AttributeName!==void 0?a.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(x,0,"position"),a.linkProgram(x);function D(U){if(i.debug.checkShaderErrors){const H=a.getProgramInfoLog(x)||"",Q=a.getShaderInfoLog(P)||"",re=a.getShaderInfoLog(C)||"",ie=H.trim(),oe=Q.trim(),ce=re.trim();let ee=!0,xe=!0;if(a.getProgramParameter(x,a.LINK_STATUS)===!1)if(ee=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(a,x,P,C);else{const we=Wc(a,P,"vertex"),Fe=Wc(a,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(x,a.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+ie+`
`+we+`
`+Fe)}else ie!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ie):(oe===""||ce==="")&&(xe=!1);xe&&(U.diagnostics={runnable:ee,programLog:ie,vertexShader:{log:oe,prefix:m},fragmentShader:{log:ce,prefix:d}})}a.deleteShader(P),a.deleteShader(C),R=new or(a,x),w=V1(a,x)}let R;this.getUniforms=function(){return R===void 0&&D(this),R};let w;this.getAttributes=function(){return w===void 0&&D(this),w};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=a.getProgramParameter(x,U1)),b},this.destroy=function(){n.releaseStatesOfProgram(this),a.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k1++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=C,this}let tg=0;class ng{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,a=this._getShaderStage(t),o=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(a)===!1&&(s.add(a),a.usedTimes++),s.has(o)===!1&&(s.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new ig(e),t.set(e,n)),n}}class ig{constructor(e){this.id=tg++,this.code=e,this.usedTimes=0}}function ag(i,e,t,n,a,o,s){const r=new Df,l=new ng,c=new Set,f=[],u=a.logarithmicDepthBuffer,h=a.vertexTextures;let p=a.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,b,U,H,Q){const re=H.fog,ie=Q.geometry,oe=w.isMeshStandardMaterial?H.environment:null,ce=(w.isMeshStandardMaterial?t:e).get(w.envMap||oe),ee=ce&&ce.mapping===gr?ce.image.height:null,xe=y[w.type];w.precision!==null&&(p=a.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const we=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Fe=we!==void 0?we.length:0;let ot=0;ie.morphAttributes.position!==void 0&&(ot=1),ie.morphAttributes.normal!==void 0&&(ot=2),ie.morphAttributes.color!==void 0&&(ot=3);let xt,Qe,ht,ae;if(xe){const bt=Fn[xe];xt=bt.vertexShader,Qe=bt.fragmentShader}else xt=w.vertexShader,Qe=w.fragmentShader,l.update(w),ht=l.getVertexShaderID(w),ae=l.getFragmentShaderID(w);const fe=i.getRenderTarget(),Ie=i.state.buffers.depth.getReversed(),$e=Q.isInstancedMesh===!0,Oe=Q.isBatchedMesh===!0,ut=!!w.map,Ot=!!w.matcap,A=!!ce,rt=!!w.aoMap,et=!!w.lightMap,je=!!w.bumpMap,Be=!!w.normalMap,st=!!w.displacementMap,De=!!w.emissiveMap,tt=!!w.metalnessMap,se=!!w.roughnessMap,Se=w.anisotropy>0,_=w.clearcoat>0,g=w.dispersion>0,O=w.iridescence>0,J=w.sheen>0,te=w.transmission>0,Z=Se&&!!w.anisotropyMap,j=_&&!!w.clearcoatMap,le=_&&!!w.clearcoatNormalMap,Le=_&&!!w.clearcoatRoughnessMap,Ue=O&&!!w.iridescenceMap,de=O&&!!w.iridescenceThicknessMap,Te=J&&!!w.sheenColorMap,nt=J&&!!w.sheenRoughnessMap,ze=!!w.specularMap,Ee=!!w.specularColorMap,at=!!w.specularIntensityMap,N=te&&!!w.transmissionMap,pe=te&&!!w.thicknessMap,ve=!!w.gradientMap,Ne=!!w.alphaMap,me=w.alphaTest>0,L=!!w.alphaHash,Ge=!!w.extensions;let ne=xi;w.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(ne=i.toneMapping);const wt={shaderID:xe,shaderType:w.type,shaderName:w.name,vertexShader:xt,fragmentShader:Qe,defines:w.defines,customVertexShaderID:ht,customFragmentShaderID:ae,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&Q._colorsTexture!==null,instancing:$e,instancingColor:$e&&Q.instanceColor!==null,instancingMorph:$e&&Q.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Ma,alphaToCoverage:!!w.alphaToCoverage,map:ut,matcap:Ot,envMap:A,envMapMode:A&&ce.mapping,envMapCubeUVHeight:ee,aoMap:rt,lightMap:et,bumpMap:je,normalMap:Be,displacementMap:h&&st,emissiveMap:De,normalMapObjectSpace:Be&&w.normalMapType===Bd,normalMapTangentSpace:Be&&w.normalMapType===Od,metalnessMap:tt,roughnessMap:se,anisotropy:Se,anisotropyMap:Z,clearcoat:_,clearcoatMap:j,clearcoatNormalMap:le,clearcoatRoughnessMap:Le,dispersion:g,iridescence:O,iridescenceMap:Ue,iridescenceThicknessMap:de,sheen:J,sheenColorMap:Te,sheenRoughnessMap:nt,specularMap:ze,specularColorMap:Ee,specularIntensityMap:at,transmission:te,transmissionMap:N,thicknessMap:pe,gradientMap:ve,opaque:w.transparent===!1&&w.blending===bn&&w.alphaToCoverage===!1,alphaMap:Ne,alphaTest:me,alphaHash:L,combine:w.combine,mapUv:ut&&x(w.map.channel),aoMapUv:rt&&x(w.aoMap.channel),lightMapUv:et&&x(w.lightMap.channel),bumpMapUv:je&&x(w.bumpMap.channel),normalMapUv:Be&&x(w.normalMap.channel),displacementMapUv:st&&x(w.displacementMap.channel),emissiveMapUv:De&&x(w.emissiveMap.channel),metalnessMapUv:tt&&x(w.metalnessMap.channel),roughnessMapUv:se&&x(w.roughnessMap.channel),anisotropyMapUv:Z&&x(w.anisotropyMap.channel),clearcoatMapUv:j&&x(w.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&x(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ue&&x(w.iridescenceMap.channel),iridescenceThicknessMapUv:de&&x(w.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&x(w.sheenColorMap.channel),sheenRoughnessMapUv:nt&&x(w.sheenRoughnessMap.channel),specularMapUv:ze&&x(w.specularMap.channel),specularColorMapUv:Ee&&x(w.specularColorMap.channel),specularIntensityMapUv:at&&x(w.specularIntensityMap.channel),transmissionMapUv:N&&x(w.transmissionMap.channel),thicknessMapUv:pe&&x(w.thicknessMap.channel),alphaMapUv:Ne&&x(w.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Be||Se),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ie.attributes.uv&&(ut||Ne),fog:!!re,useFog:w.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:Ie,skinning:Q.isSkinnedMesh===!0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:Fe,morphTextureStride:ot,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:ut&&w.map.isVideoTexture===!0&&Et.getTransfer(w.map.colorSpace)===Ut,decodeVideoTextureEmissive:De&&w.emissiveMap.isVideoTexture===!0&&Et.getTransfer(w.emissiveMap.colorSpace)===Ut,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===jn,flipSided:w.side===mn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ge&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ge&&w.extensions.multiDraw===!0||Oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function d(w){const b=[];if(w.shaderID?b.push(w.shaderID):(b.push(w.customVertexShaderID),b.push(w.customFragmentShaderID)),w.defines!==void 0)for(const U in w.defines)b.push(U),b.push(w.defines[U]);return w.isRawShaderMaterial===!1&&(T(b,w),E(b,w),b.push(i.outputColorSpace)),b.push(w.customProgramCacheKey),b.join()}function T(w,b){w.push(b.precision),w.push(b.outputColorSpace),w.push(b.envMapMode),w.push(b.envMapCubeUVHeight),w.push(b.mapUv),w.push(b.alphaMapUv),w.push(b.lightMapUv),w.push(b.aoMapUv),w.push(b.bumpMapUv),w.push(b.normalMapUv),w.push(b.displacementMapUv),w.push(b.emissiveMapUv),w.push(b.metalnessMapUv),w.push(b.roughnessMapUv),w.push(b.anisotropyMapUv),w.push(b.clearcoatMapUv),w.push(b.clearcoatNormalMapUv),w.push(b.clearcoatRoughnessMapUv),w.push(b.iridescenceMapUv),w.push(b.iridescenceThicknessMapUv),w.push(b.sheenColorMapUv),w.push(b.sheenRoughnessMapUv),w.push(b.specularMapUv),w.push(b.specularColorMapUv),w.push(b.specularIntensityMapUv),w.push(b.transmissionMapUv),w.push(b.thicknessMapUv),w.push(b.combine),w.push(b.fogExp2),w.push(b.sizeAttenuation),w.push(b.morphTargetsCount),w.push(b.morphAttributeCount),w.push(b.numDirLights),w.push(b.numPointLights),w.push(b.numSpotLights),w.push(b.numSpotLightMaps),w.push(b.numHemiLights),w.push(b.numRectAreaLights),w.push(b.numDirLightShadows),w.push(b.numPointLightShadows),w.push(b.numSpotLightShadows),w.push(b.numSpotLightShadowsWithMaps),w.push(b.numLightProbes),w.push(b.shadowMapType),w.push(b.toneMapping),w.push(b.numClippingPlanes),w.push(b.numClipIntersection),w.push(b.depthPacking)}function E(w,b){r.disableAll(),b.supportsVertexTextures&&r.enable(0),b.instancing&&r.enable(1),b.instancingColor&&r.enable(2),b.instancingMorph&&r.enable(3),b.matcap&&r.enable(4),b.envMap&&r.enable(5),b.normalMapObjectSpace&&r.enable(6),b.normalMapTangentSpace&&r.enable(7),b.clearcoat&&r.enable(8),b.iridescence&&r.enable(9),b.alphaTest&&r.enable(10),b.vertexColors&&r.enable(11),b.vertexAlphas&&r.enable(12),b.vertexUv1s&&r.enable(13),b.vertexUv2s&&r.enable(14),b.vertexUv3s&&r.enable(15),b.vertexTangents&&r.enable(16),b.anisotropy&&r.enable(17),b.alphaHash&&r.enable(18),b.batching&&r.enable(19),b.dispersion&&r.enable(20),b.batchingColor&&r.enable(21),b.gradientMap&&r.enable(22),w.push(r.mask),r.disableAll(),b.fog&&r.enable(0),b.useFog&&r.enable(1),b.flatShading&&r.enable(2),b.logarithmicDepthBuffer&&r.enable(3),b.reversedDepthBuffer&&r.enable(4),b.skinning&&r.enable(5),b.morphTargets&&r.enable(6),b.morphNormals&&r.enable(7),b.morphColors&&r.enable(8),b.premultipliedAlpha&&r.enable(9),b.shadowMapEnabled&&r.enable(10),b.doubleSided&&r.enable(11),b.flipSided&&r.enable(12),b.useDepthPacking&&r.enable(13),b.dithering&&r.enable(14),b.transmission&&r.enable(15),b.sheen&&r.enable(16),b.opaque&&r.enable(17),b.pointsUvs&&r.enable(18),b.decodeVideoTexture&&r.enable(19),b.decodeVideoTextureEmissive&&r.enable(20),b.alphaToCoverage&&r.enable(21),w.push(r.mask)}function S(w){const b=y[w.type];let U;if(b){const H=Fn[b];U=ao.clone(H.uniforms)}else U=w.uniforms;return U}function P(w,b){let U;for(let H=0,Q=f.length;H<Q;H++){const re=f[H];if(re.cacheKey===b){U=re,++U.usedTimes;break}}return U===void 0&&(U=new eg(i,b,w,o),f.push(U)),U}function C(w){if(--w.usedTimes===0){const b=f.indexOf(w);f[b]=f[f.length-1],f.pop(),w.destroy()}}function D(w){l.remove(w)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:P,releaseProgram:C,releaseShaderCache:D,programs:f,dispose:R}}function og(){let i=new WeakMap;function e(s){return i.has(s)}function t(s){let r=i.get(s);return r===void 0&&(r={},i.set(s,r)),r}function n(s){i.delete(s)}function a(s,r,l){i.get(s)[r]=l}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:a,dispose:o}}function rg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Kc(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function $c(){const i=[];let e=0;const t=[],n=[],a=[];function o(){e=0,t.length=0,n.length=0,a.length=0}function s(u,h,p,y,x,m){let d=i[e];return d===void 0?(d={id:u.id,object:u,geometry:h,material:p,groupOrder:y,renderOrder:u.renderOrder,z:x,group:m},i[e]=d):(d.id=u.id,d.object=u,d.geometry=h,d.material=p,d.groupOrder=y,d.renderOrder=u.renderOrder,d.z=x,d.group=m),e++,d}function r(u,h,p,y,x,m){const d=s(u,h,p,y,x,m);p.transmission>0?n.push(d):p.transparent===!0?a.push(d):t.push(d)}function l(u,h,p,y,x,m){const d=s(u,h,p,y,x,m);p.transmission>0?n.unshift(d):p.transparent===!0?a.unshift(d):t.unshift(d)}function c(u,h){t.length>1&&t.sort(u||rg),n.length>1&&n.sort(h||Kc),a.length>1&&a.sort(h||Kc)}function f(){for(let u=e,h=i.length;u<h;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:a,init:o,push:r,unshift:l,finish:f,sort:c}}function sg(){let i=new WeakMap;function e(n,a){const o=i.get(n);let s;return o===void 0?(s=new $c,i.set(n,[s])):a>=o.length?(s=new $c,o.push(s)):s=o[a],s}function t(){i=new WeakMap}return{get:e,dispose:t}}function lg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new He};break;case"SpotLight":t={position:new k,direction:new k,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function cg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let fg=0;function ug(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function dg(i){const e=new lg,t=cg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new k);const a=new k,o=new Ht,s=new Ht;function r(c){let f=0,u=0,h=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let p=0,y=0,x=0,m=0,d=0,T=0,E=0,S=0,P=0,C=0,D=0;c.sort(ug);for(let w=0,b=c.length;w<b;w++){const U=c[w],H=U.color,Q=U.intensity,re=U.distance,ie=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=H.r*Q,u+=H.g*Q,h+=H.b*Q;else if(U.isLightProbe){for(let oe=0;oe<9;oe++)n.probe[oe].addScaledVector(U.sh.coefficients[oe],Q);D++}else if(U.isDirectionalLight){const oe=e.get(U);if(oe.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const ce=U.shadow,ee=t.get(U);ee.shadowIntensity=ce.intensity,ee.shadowBias=ce.bias,ee.shadowNormalBias=ce.normalBias,ee.shadowRadius=ce.radius,ee.shadowMapSize=ce.mapSize,n.directionalShadow[p]=ee,n.directionalShadowMap[p]=ie,n.directionalShadowMatrix[p]=U.shadow.matrix,T++}n.directional[p]=oe,p++}else if(U.isSpotLight){const oe=e.get(U);oe.position.setFromMatrixPosition(U.matrixWorld),oe.color.copy(H).multiplyScalar(Q),oe.distance=re,oe.coneCos=Math.cos(U.angle),oe.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),oe.decay=U.decay,n.spot[x]=oe;const ce=U.shadow;if(U.map&&(n.spotLightMap[P]=U.map,P++,ce.updateMatrices(U),U.castShadow&&C++),n.spotLightMatrix[x]=ce.matrix,U.castShadow){const ee=t.get(U);ee.shadowIntensity=ce.intensity,ee.shadowBias=ce.bias,ee.shadowNormalBias=ce.normalBias,ee.shadowRadius=ce.radius,ee.shadowMapSize=ce.mapSize,n.spotShadow[x]=ee,n.spotShadowMap[x]=ie,S++}x++}else if(U.isRectAreaLight){const oe=e.get(U);oe.color.copy(H).multiplyScalar(Q),oe.halfWidth.set(U.width*.5,0,0),oe.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=oe,m++}else if(U.isPointLight){const oe=e.get(U);if(oe.color.copy(U.color).multiplyScalar(U.intensity),oe.distance=U.distance,oe.decay=U.decay,U.castShadow){const ce=U.shadow,ee=t.get(U);ee.shadowIntensity=ce.intensity,ee.shadowBias=ce.bias,ee.shadowNormalBias=ce.normalBias,ee.shadowRadius=ce.radius,ee.shadowMapSize=ce.mapSize,ee.shadowCameraNear=ce.camera.near,ee.shadowCameraFar=ce.camera.far,n.pointShadow[y]=ee,n.pointShadowMap[y]=ie,n.pointShadowMatrix[y]=U.shadow.matrix,E++}n.point[y]=oe,y++}else if(U.isHemisphereLight){const oe=e.get(U);oe.skyColor.copy(U.color).multiplyScalar(Q),oe.groundColor.copy(U.groundColor).multiplyScalar(Q),n.hemi[d]=oe,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ce.LTC_FLOAT_1,n.rectAreaLTC2=Ce.LTC_FLOAT_2):(n.rectAreaLTC1=Ce.LTC_HALF_1,n.rectAreaLTC2=Ce.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=u,n.ambient[2]=h;const R=n.hash;(R.directionalLength!==p||R.pointLength!==y||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==T||R.numPointShadows!==E||R.numSpotShadows!==S||R.numSpotMaps!==P||R.numLightProbes!==D)&&(n.directional.length=p,n.spot.length=x,n.rectArea.length=m,n.point.length=y,n.hemi.length=d,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=S+P-C,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=D,R.directionalLength=p,R.pointLength=y,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=T,R.numPointShadows=E,R.numSpotShadows=S,R.numSpotMaps=P,R.numLightProbes=D,n.version=fg++)}function l(c,f){let u=0,h=0,p=0,y=0,x=0;const m=f.matrixWorldInverse;for(let d=0,T=c.length;d<T;d++){const E=c[d];if(E.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(m),u++}else if(E.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(E.matrixWorld),a.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(a),S.direction.transformDirection(m),p++}else if(E.isRectAreaLight){const S=n.rectArea[y];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),s.identity(),o.copy(E.matrixWorld),o.premultiply(m),s.extractRotation(o),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),y++}else if(E.isPointLight){const S=n.point[h];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(m),h++}else if(E.isHemisphereLight){const S=n.hemi[x];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:r,setupView:l,state:n}}function jc(i){const e=new dg(i),t=[],n=[];function a(f){c.camera=f,t.length=0,n.length=0}function o(f){t.push(f)}function s(f){n.push(f)}function r(){e.setup(t)}function l(f){e.setupView(t,f)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:c,setupLights:r,setupLightsView:l,pushLight:o,pushShadow:s}}function hg(i){let e=new WeakMap;function t(a,o=0){const s=e.get(a);let r;return s===void 0?(r=new jc(i),e.set(a,[r])):o>=s.length?(r=new jc(i),s.push(r)):r=s[o],r}function n(){e=new WeakMap}return{get:t,dispose:n}}const pg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mg=`uniform sampler2D shadow_pass;
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
}`;function gg(i,e,t){let n=new Gf;const a=new Je,o=new Je,s=new Wt,r=new Gh({depthPacking:Fd}),l=new Hh,c={},f=t.maxTextureSize,u={[wi]:mn,[mn]:wi,[jn]:jn},h=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:pg,fragmentShader:mg}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const y=new Xt;y.setAttribute("position",new nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new It(y,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hf;let d=this.type;this.render=function(C,D,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const w=i.getRenderTarget(),b=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Qn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Q=d!==$n&&this.type===$n,re=d===$n&&this.type!==$n;for(let ie=0,oe=C.length;ie<oe;ie++){const ce=C[ie],ee=ce.shadow;if(ee===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(ee.autoUpdate===!1&&ee.needsUpdate===!1)continue;a.copy(ee.mapSize);const xe=ee.getFrameExtents();if(a.multiply(xe),o.copy(ee.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(o.x=Math.floor(f/xe.x),a.x=o.x*xe.x,ee.mapSize.x=o.x),a.y>f&&(o.y=Math.floor(f/xe.y),a.y=o.y*xe.y,ee.mapSize.y=o.y)),ee.map===null||Q===!0||re===!0){const Fe=this.type!==$n?{minFilter:kn,magFilter:kn}:{};ee.map!==null&&ee.map.dispose(),ee.map=new Nn(a.x,a.y,Fe),ee.map.texture.name=ce.name+".shadowMap",ee.camera.updateProjectionMatrix()}i.setRenderTarget(ee.map),i.clear();const we=ee.getViewportCount();for(let Fe=0;Fe<we;Fe++){const ot=ee.getViewport(Fe);s.set(o.x*ot.x,o.y*ot.y,o.x*ot.z,o.y*ot.w),H.viewport(s),ee.updateMatrices(ce,Fe),n=ee.getFrustum(),S(D,R,ee.camera,ce,this.type)}ee.isPointLightShadow!==!0&&this.type===$n&&T(ee,R),ee.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(w,b,U)};function T(C,D){const R=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Nn(a.x,a.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(D,null,R,h,x,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(D,null,R,p,x,null)}function E(C,D,R,w){let b=null;const U=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)b=U;else if(b=R.isPointLight===!0?l:r,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const H=b.uuid,Q=D.uuid;let re=c[H];re===void 0&&(re={},c[H]=re);let ie=re[Q];ie===void 0&&(ie=b.clone(),re[Q]=ie,D.addEventListener("dispose",P)),b=ie}if(b.visible=D.visible,b.wireframe=D.wireframe,w===$n?b.side=D.shadowSide!==null?D.shadowSide:D.side:b.side=D.shadowSide!==null?D.shadowSide:u[D.side],b.alphaMap=D.alphaMap,b.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,b.map=D.map,b.clipShadows=D.clipShadows,b.clippingPlanes=D.clippingPlanes,b.clipIntersection=D.clipIntersection,b.displacementMap=D.displacementMap,b.displacementScale=D.displacementScale,b.displacementBias=D.displacementBias,b.wireframeLinewidth=D.wireframeLinewidth,b.linewidth=D.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const H=i.properties.get(b);H.light=R}return b}function S(C,D,R,w,b){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&b===$n)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const Q=e.update(C),re=C.material;if(Array.isArray(re)){const ie=Q.groups;for(let oe=0,ce=ie.length;oe<ce;oe++){const ee=ie[oe],xe=re[ee.materialIndex];if(xe&&xe.visible){const we=E(C,xe,w,b);C.onBeforeShadow(i,C,D,R,Q,we,ee),i.renderBufferDirect(R,null,Q,we,C,ee),C.onAfterShadow(i,C,D,R,Q,we,ee)}}}else if(re.visible){const ie=E(C,re,w,b);C.onBeforeShadow(i,C,D,R,Q,ie,null),i.renderBufferDirect(R,null,Q,ie,C,null),C.onAfterShadow(i,C,D,R,Q,ie,null)}}const H=C.children;for(let Q=0,re=H.length;Q<re;Q++)S(H[Q],D,R,w,b)}function P(C){C.target.removeEventListener("dispose",P);for(const R in c){const w=c[R],b=C.target.uuid;b in w&&(w[b].dispose(),delete w[b])}}}const yg={[_s]:vs,[xs]:ws,[bs]:Ss,[va]:Ms,[vs]:_s,[ws]:xs,[Ss]:bs,[Ms]:va};function _g(i,e){function t(){let N=!1;const pe=new Wt;let ve=null;const Ne=new Wt(0,0,0,0);return{setMask:function(me){ve!==me&&!N&&(i.colorMask(me,me,me,me),ve=me)},setLocked:function(me){N=me},setClear:function(me,L,Ge,ne,wt){wt===!0&&(me*=ne,L*=ne,Ge*=ne),pe.set(me,L,Ge,ne),Ne.equals(pe)===!1&&(i.clearColor(me,L,Ge,ne),Ne.copy(pe))},reset:function(){N=!1,ve=null,Ne.set(-1,0,0,0)}}}function n(){let N=!1,pe=!1,ve=null,Ne=null,me=null;return{setReversed:function(L){if(pe!==L){const Ge=e.get("EXT_clip_control");L?Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.ZERO_TO_ONE_EXT):Ge.clipControlEXT(Ge.LOWER_LEFT_EXT,Ge.NEGATIVE_ONE_TO_ONE_EXT),pe=L;const ne=me;me=null,this.setClear(ne)}},getReversed:function(){return pe},setTest:function(L){L?fe(i.DEPTH_TEST):Ie(i.DEPTH_TEST)},setMask:function(L){ve!==L&&!N&&(i.depthMask(L),ve=L)},setFunc:function(L){if(pe&&(L=yg[L]),Ne!==L){switch(L){case _s:i.depthFunc(i.NEVER);break;case vs:i.depthFunc(i.ALWAYS);break;case xs:i.depthFunc(i.LESS);break;case va:i.depthFunc(i.LEQUAL);break;case bs:i.depthFunc(i.EQUAL);break;case Ms:i.depthFunc(i.GEQUAL);break;case ws:i.depthFunc(i.GREATER);break;case Ss:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ne=L}},setLocked:function(L){N=L},setClear:function(L){me!==L&&(pe&&(L=1-L),i.clearDepth(L),me=L)},reset:function(){N=!1,ve=null,Ne=null,me=null,pe=!1}}}function a(){let N=!1,pe=null,ve=null,Ne=null,me=null,L=null,Ge=null,ne=null,wt=null;return{setTest:function(bt){N||(bt?fe(i.STENCIL_TEST):Ie(i.STENCIL_TEST))},setMask:function(bt){pe!==bt&&!N&&(i.stencilMask(bt),pe=bt)},setFunc:function(bt,Qt,yn){(ve!==bt||Ne!==Qt||me!==yn)&&(i.stencilFunc(bt,Qt,yn),ve=bt,Ne=Qt,me=yn)},setOp:function(bt,Qt,yn){(L!==bt||Ge!==Qt||ne!==yn)&&(i.stencilOp(bt,Qt,yn),L=bt,Ge=Qt,ne=yn)},setLocked:function(bt){N=bt},setClear:function(bt){wt!==bt&&(i.clearStencil(bt),wt=bt)},reset:function(){N=!1,pe=null,ve=null,Ne=null,me=null,L=null,Ge=null,ne=null,wt=null}}}const o=new t,s=new n,r=new a,l=new WeakMap,c=new WeakMap;let f={},u={},h=new WeakMap,p=[],y=null,x=!1,m=null,d=null,T=null,E=null,S=null,P=null,C=null,D=new He(0,0,0),R=0,w=!1,b=null,U=null,H=null,Q=null,re=null;const ie=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ce=0;const ee=i.getParameter(i.VERSION);ee.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(ee)[1]),oe=ce>=1):ee.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),oe=ce>=2);let xe=null,we={};const Fe=i.getParameter(i.SCISSOR_BOX),ot=i.getParameter(i.VIEWPORT),xt=new Wt().fromArray(Fe),Qe=new Wt().fromArray(ot);function ht(N,pe,ve,Ne){const me=new Uint8Array(4),L=i.createTexture();i.bindTexture(N,L),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ge=0;Ge<ve;Ge++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,me):i.texImage2D(pe+Ge,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,me);return L}const ae={};ae[i.TEXTURE_2D]=ht(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=ht(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=ht(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=ht(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),s.setClear(1),r.setClear(0),fe(i.DEPTH_TEST),s.setFunc(va),je(!1),Be($l),fe(i.CULL_FACE),rt(Qn);function fe(N){f[N]!==!0&&(i.enable(N),f[N]=!0)}function Ie(N){f[N]!==!1&&(i.disable(N),f[N]=!1)}function $e(N,pe){return u[N]!==pe?(i.bindFramebuffer(N,pe),u[N]=pe,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=pe),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Oe(N,pe){let ve=p,Ne=!1;if(N){ve=h.get(pe),ve===void 0&&(ve=[],h.set(pe,ve));const me=N.textures;if(ve.length!==me.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let L=0,Ge=me.length;L<Ge;L++)ve[L]=i.COLOR_ATTACHMENT0+L;ve.length=me.length,Ne=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,Ne=!0);Ne&&i.drawBuffers(ve)}function ut(N){return y!==N?(i.useProgram(N),y=N,!0):!1}const Ot={[Ni]:i.FUNC_ADD,[gd]:i.FUNC_SUBTRACT,[yd]:i.FUNC_REVERSE_SUBTRACT};Ot[_d]=i.MIN,Ot[vd]=i.MAX;const A={[xd]:i.ZERO,[bd]:i.ONE,[Md]:i.SRC_COLOR,[gs]:i.SRC_ALPHA,[Cd]:i.SRC_ALPHA_SATURATE,[Ed]:i.DST_COLOR,[Sd]:i.DST_ALPHA,[wd]:i.ONE_MINUS_SRC_COLOR,[ys]:i.ONE_MINUS_SRC_ALPHA,[Ad]:i.ONE_MINUS_DST_COLOR,[Td]:i.ONE_MINUS_DST_ALPHA,[Rd]:i.CONSTANT_COLOR,[Pd]:i.ONE_MINUS_CONSTANT_COLOR,[Ld]:i.CONSTANT_ALPHA,[Id]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(N,pe,ve,Ne,me,L,Ge,ne,wt,bt){if(N===Qn){x===!0&&(Ie(i.BLEND),x=!1);return}if(x===!1&&(fe(i.BLEND),x=!0),N!==md){if(N!==m||bt!==w){if((d!==Ni||S!==Ni)&&(i.blendEquation(i.FUNC_ADD),d=Ni,S=Ni),bt)switch(N){case bn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mt:i.blendFunc(i.ONE,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Jl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case bn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case jl:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jl:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}T=null,E=null,P=null,C=null,D.set(0,0,0),R=0,m=N,w=bt}return}me=me||pe,L=L||ve,Ge=Ge||Ne,(pe!==d||me!==S)&&(i.blendEquationSeparate(Ot[pe],Ot[me]),d=pe,S=me),(ve!==T||Ne!==E||L!==P||Ge!==C)&&(i.blendFuncSeparate(A[ve],A[Ne],A[L],A[Ge]),T=ve,E=Ne,P=L,C=Ge),(ne.equals(D)===!1||wt!==R)&&(i.blendColor(ne.r,ne.g,ne.b,wt),D.copy(ne),R=wt),m=N,w=!1}function et(N,pe){N.side===jn?Ie(i.CULL_FACE):fe(i.CULL_FACE);let ve=N.side===mn;pe&&(ve=!ve),je(ve),N.blending===bn&&N.transparent===!1?rt(Qn):rt(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),o.setMask(N.colorWrite);const Ne=N.stencilWrite;r.setTest(Ne),Ne&&(r.setMask(N.stencilWriteMask),r.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),r.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),De(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):Ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function je(N){b!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),b=N)}function Be(N){N!==dd?(fe(i.CULL_FACE),N!==U&&(N===$l?i.cullFace(i.BACK):N===hd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ie(i.CULL_FACE),U=N}function st(N){N!==H&&(oe&&i.lineWidth(N),H=N)}function De(N,pe,ve){N?(fe(i.POLYGON_OFFSET_FILL),(Q!==pe||re!==ve)&&(i.polygonOffset(pe,ve),Q=pe,re=ve)):Ie(i.POLYGON_OFFSET_FILL)}function tt(N){N?fe(i.SCISSOR_TEST):Ie(i.SCISSOR_TEST)}function se(N){N===void 0&&(N=i.TEXTURE0+ie-1),xe!==N&&(i.activeTexture(N),xe=N)}function Se(N,pe,ve){ve===void 0&&(xe===null?ve=i.TEXTURE0+ie-1:ve=xe);let Ne=we[ve];Ne===void 0&&(Ne={type:void 0,texture:void 0},we[ve]=Ne),(Ne.type!==N||Ne.texture!==pe)&&(xe!==ve&&(i.activeTexture(ve),xe=ve),i.bindTexture(N,pe||ae[N]),Ne.type=N,Ne.texture=pe)}function _(){const N=we[xe];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function g(){try{i.compressedTexImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.texSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function te(){try{i.texSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function j(){try{i.compressedTexSubImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function le(){try{i.texStorage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Le(){try{i.texStorage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ue(){try{i.texImage2D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{i.texImage3D(...arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Te(N){xt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),xt.copy(N))}function nt(N){Qe.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Qe.copy(N))}function ze(N,pe){let ve=c.get(pe);ve===void 0&&(ve=new WeakMap,c.set(pe,ve));let Ne=ve.get(N);Ne===void 0&&(Ne=i.getUniformBlockIndex(pe,N.name),ve.set(N,Ne))}function Ee(N,pe){const Ne=c.get(pe).get(N);l.get(pe)!==Ne&&(i.uniformBlockBinding(pe,Ne,N.__bindingPointIndex),l.set(pe,Ne))}function at(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),s.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},xe=null,we={},u={},h=new WeakMap,p=[],y=null,x=!1,m=null,d=null,T=null,E=null,S=null,P=null,C=null,D=new He(0,0,0),R=0,w=!1,b=null,U=null,H=null,Q=null,re=null,xt.set(0,0,i.canvas.width,i.canvas.height),Qe.set(0,0,i.canvas.width,i.canvas.height),o.reset(),s.reset(),r.reset()}return{buffers:{color:o,depth:s,stencil:r},enable:fe,disable:Ie,bindFramebuffer:$e,drawBuffers:Oe,useProgram:ut,setBlending:rt,setMaterial:et,setFlipSided:je,setCullFace:Be,setLineWidth:st,setPolygonOffset:De,setScissorTest:tt,activeTexture:se,bindTexture:Se,unbindTexture:_,compressedTexImage2D:g,compressedTexImage3D:O,texImage2D:Ue,texImage3D:de,updateUBOMapping:ze,uniformBlockBinding:Ee,texStorage2D:le,texStorage3D:Le,texSubImage2D:J,texSubImage3D:te,compressedTexSubImage2D:Z,compressedTexSubImage3D:j,scissor:Te,viewport:nt,reset:at}}function vg(i,e,t,n,a,o,s){const r=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,f=new WeakMap;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(_,g){return p?new OffscreenCanvas(_,g):ur("canvas")}function x(_,g,O){let J=1;const te=Se(_);if((te.width>O||te.height>O)&&(J=O/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&_ instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&_ instanceof ImageBitmap||typeof VideoFrame<"u"&&_ instanceof VideoFrame){const Z=Math.floor(J*te.width),j=Math.floor(J*te.height);u===void 0&&(u=y(Z,j));const le=g?y(Z,j):u;return le.width=Z,le.height=j,le.getContext("2d").drawImage(_,0,0,Z,j),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+j+")."),le}else return"data"in _&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),_;return _}function m(_){return _.generateMipmaps}function d(_){i.generateMipmap(_)}function T(_){return _.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:_.isWebGL3DRenderTarget?i.TEXTURE_3D:_.isWebGLArrayRenderTarget||_.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(_,g,O,J,te=!1){if(_!==null){if(i[_]!==void 0)return i[_];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+_+"'")}let Z=g;if(g===i.RED&&(O===i.FLOAT&&(Z=i.R32F),O===i.HALF_FLOAT&&(Z=i.R16F),O===i.UNSIGNED_BYTE&&(Z=i.R8)),g===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.R8UI),O===i.UNSIGNED_SHORT&&(Z=i.R16UI),O===i.UNSIGNED_INT&&(Z=i.R32UI),O===i.BYTE&&(Z=i.R8I),O===i.SHORT&&(Z=i.R16I),O===i.INT&&(Z=i.R32I)),g===i.RG&&(O===i.FLOAT&&(Z=i.RG32F),O===i.HALF_FLOAT&&(Z=i.RG16F),O===i.UNSIGNED_BYTE&&(Z=i.RG8)),g===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RG8UI),O===i.UNSIGNED_SHORT&&(Z=i.RG16UI),O===i.UNSIGNED_INT&&(Z=i.RG32UI),O===i.BYTE&&(Z=i.RG8I),O===i.SHORT&&(Z=i.RG16I),O===i.INT&&(Z=i.RG32I)),g===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),O===i.UNSIGNED_INT&&(Z=i.RGB32UI),O===i.BYTE&&(Z=i.RGB8I),O===i.SHORT&&(Z=i.RGB16I),O===i.INT&&(Z=i.RGB32I)),g===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),O===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),O===i.UNSIGNED_INT&&(Z=i.RGBA32UI),O===i.BYTE&&(Z=i.RGBA8I),O===i.SHORT&&(Z=i.RGBA16I),O===i.INT&&(Z=i.RGBA32I)),g===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),g===i.RGBA){const j=te?cr:Et.getTransfer(J);O===i.FLOAT&&(Z=i.RGBA32F),O===i.HALF_FLOAT&&(Z=i.RGBA16F),O===i.UNSIGNED_BYTE&&(Z=j===Ut?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(_,g){let O;return _?g===null||g===zi||g===Qa?O=i.DEPTH24_STENCIL8:g===Jn?O=i.DEPTH32F_STENCIL8:g===Ja&&(O=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===zi||g===Qa?O=i.DEPTH_COMPONENT24:g===Jn?O=i.DEPTH_COMPONENT32F:g===Ja&&(O=i.DEPTH_COMPONENT16),O}function P(_,g){return m(_)===!0||_.isFramebufferTexture&&_.minFilter!==kn&&_.minFilter!==Bn?Math.log2(Math.max(g.width,g.height))+1:_.mipmaps!==void 0&&_.mipmaps.length>0?_.mipmaps.length:_.isCompressedTexture&&Array.isArray(_.image)?g.mipmaps.length:1}function C(_){const g=_.target;g.removeEventListener("dispose",C),R(g),g.isVideoTexture&&f.delete(g)}function D(_){const g=_.target;g.removeEventListener("dispose",D),b(g)}function R(_){const g=n.get(_);if(g.__webglInit===void 0)return;const O=_.source,J=h.get(O);if(J){const te=J[g.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(_),Object.keys(J).length===0&&h.delete(O)}n.remove(_)}function w(_){const g=n.get(_);i.deleteTexture(g.__webglTexture);const O=_.source,J=h.get(O);delete J[g.__cacheKey],s.memory.textures--}function b(_){const g=n.get(_);if(_.depthTexture&&(_.depthTexture.dispose(),n.remove(_.depthTexture)),_.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(g.__webglFramebuffer[J]))for(let te=0;te<g.__webglFramebuffer[J].length;te++)i.deleteFramebuffer(g.__webglFramebuffer[J][te]);else i.deleteFramebuffer(g.__webglFramebuffer[J]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[J])}else{if(Array.isArray(g.__webglFramebuffer))for(let J=0;J<g.__webglFramebuffer.length;J++)i.deleteFramebuffer(g.__webglFramebuffer[J]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let J=0;J<g.__webglColorRenderbuffer.length;J++)g.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[J]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const O=_.textures;for(let J=0,te=O.length;J<te;J++){const Z=n.get(O[J]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),s.memory.textures--),n.remove(O[J])}n.remove(_)}let U=0;function H(){U=0}function Q(){const _=U;return _>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+_+" texture units while this GPU supports only "+a.maxTextures),U+=1,_}function re(_){const g=[];return g.push(_.wrapS),g.push(_.wrapT),g.push(_.wrapR||0),g.push(_.magFilter),g.push(_.minFilter),g.push(_.anisotropy),g.push(_.internalFormat),g.push(_.format),g.push(_.type),g.push(_.generateMipmaps),g.push(_.premultiplyAlpha),g.push(_.flipY),g.push(_.unpackAlignment),g.push(_.colorSpace),g.join()}function ie(_,g){const O=n.get(_);if(_.isVideoTexture&&tt(_),_.isRenderTargetTexture===!1&&_.isExternalTexture!==!0&&_.version>0&&O.__version!==_.version){const J=_.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ae(O,_,g);return}}else _.isExternalTexture&&(O.__webglTexture=_.sourceTexture?_.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+g)}function oe(_,g){const O=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&O.__version!==_.version){ae(O,_,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+g)}function ce(_,g){const O=n.get(_);if(_.isRenderTargetTexture===!1&&_.version>0&&O.__version!==_.version){ae(O,_,g);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+g)}function ee(_,g){const O=n.get(_);if(_.version>0&&O.__version!==_.version){fe(O,_,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+g)}const xe={[Bi]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[As]:i.MIRRORED_REPEAT},we={[kn]:i.NEAREST,[kd]:i.NEAREST_MIPMAP_NEAREST,[bo]:i.NEAREST_MIPMAP_LINEAR,[Bn]:i.LINEAR,[Or]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},Fe={[zd]:i.NEVER,[Yd]:i.ALWAYS,[Gd]:i.LESS,[Pf]:i.LEQUAL,[Hd]:i.EQUAL,[Xd]:i.GEQUAL,[Vd]:i.GREATER,[Wd]:i.NOTEQUAL};function ot(_,g){if(g.type===Jn&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Bn||g.magFilter===Or||g.magFilter===bo||g.magFilter===Oi||g.minFilter===Bn||g.minFilter===Or||g.minFilter===bo||g.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(_,i.TEXTURE_WRAP_S,xe[g.wrapS]),i.texParameteri(_,i.TEXTURE_WRAP_T,xe[g.wrapT]),(_===i.TEXTURE_3D||_===i.TEXTURE_2D_ARRAY)&&i.texParameteri(_,i.TEXTURE_WRAP_R,xe[g.wrapR]),i.texParameteri(_,i.TEXTURE_MAG_FILTER,we[g.magFilter]),i.texParameteri(_,i.TEXTURE_MIN_FILTER,we[g.minFilter]),g.compareFunction&&(i.texParameteri(_,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(_,i.TEXTURE_COMPARE_FUNC,Fe[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===kn||g.minFilter!==bo&&g.minFilter!==Oi||g.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(_,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,a.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function xt(_,g){let O=!1;_.__webglInit===void 0&&(_.__webglInit=!0,g.addEventListener("dispose",C));const J=g.source;let te=h.get(J);te===void 0&&(te={},h.set(J,te));const Z=re(g);if(Z!==_.__cacheKey){te[Z]===void 0&&(te[Z]={texture:i.createTexture(),usedTimes:0},s.memory.textures++,O=!0),te[Z].usedTimes++;const j=te[_.__cacheKey];j!==void 0&&(te[_.__cacheKey].usedTimes--,j.usedTimes===0&&w(g)),_.__cacheKey=Z,_.__webglTexture=te[Z].texture}return O}function Qe(_,g,O){return Math.floor(Math.floor(_/O)/g)}function ht(_,g,O,J){const Z=_.updateRanges;if(Z.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,g.width,g.height,O,J,g.data);else{Z.sort((de,Te)=>de.start-Te.start);let j=0;for(let de=1;de<Z.length;de++){const Te=Z[j],nt=Z[de],ze=Te.start+Te.count,Ee=Qe(nt.start,g.width,4),at=Qe(Te.start,g.width,4);nt.start<=ze+1&&Ee===at&&Qe(nt.start+nt.count-1,g.width,4)===Ee?Te.count=Math.max(Te.count,nt.start+nt.count-Te.start):(++j,Z[j]=nt)}Z.length=j+1;const le=i.getParameter(i.UNPACK_ROW_LENGTH),Le=i.getParameter(i.UNPACK_SKIP_PIXELS),Ue=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,g.width);for(let de=0,Te=Z.length;de<Te;de++){const nt=Z[de],ze=Math.floor(nt.start/4),Ee=Math.ceil(nt.count/4),at=ze%g.width,N=Math.floor(ze/g.width),pe=Ee,ve=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,at),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,at,N,pe,ve,O,J,g.data)}_.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,le),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Le),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ue)}}function ae(_,g,O){let J=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(J=i.TEXTURE_3D);const te=xt(_,g),Z=g.source;t.bindTexture(J,_.__webglTexture,i.TEXTURE0+O);const j=n.get(Z);if(Z.version!==j.__version||te===!0){t.activeTexture(i.TEXTURE0+O);const le=Et.getPrimaries(Et.workingColorSpace),Le=g.colorSpace===_i?null:Et.getPrimaries(g.colorSpace),Ue=g.colorSpace===_i||le===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let de=x(g.image,!1,a.maxTextureSize);de=se(g,de);const Te=o.convert(g.format,g.colorSpace),nt=o.convert(g.type);let ze=E(g.internalFormat,Te,nt,g.colorSpace,g.isVideoTexture);ot(J,g);let Ee;const at=g.mipmaps,N=g.isVideoTexture!==!0,pe=j.__version===void 0||te===!0,ve=Z.dataReady,Ne=P(g,de);if(g.isDepthTexture)ze=S(g.format===to,g.type),pe&&(N?t.texStorage2D(i.TEXTURE_2D,1,ze,de.width,de.height):t.texImage2D(i.TEXTURE_2D,0,ze,de.width,de.height,0,Te,nt,null));else if(g.isDataTexture)if(at.length>0){N&&pe&&t.texStorage2D(i.TEXTURE_2D,Ne,ze,at[0].width,at[0].height);for(let me=0,L=at.length;me<L;me++)Ee=at[me],N?ve&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Ee.width,Ee.height,Te,nt,Ee.data):t.texImage2D(i.TEXTURE_2D,me,ze,Ee.width,Ee.height,0,Te,nt,Ee.data);g.generateMipmaps=!1}else N?(pe&&t.texStorage2D(i.TEXTURE_2D,Ne,ze,de.width,de.height),ve&&ht(g,de,Te,nt)):t.texImage2D(i.TEXTURE_2D,0,ze,de.width,de.height,0,Te,nt,de.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){N&&pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,ze,at[0].width,at[0].height,de.depth);for(let me=0,L=at.length;me<L;me++)if(Ee=at[me],g.format!==Un)if(Te!==null)if(N){if(ve)if(g.layerUpdates.size>0){const Ge=Ac(Ee.width,Ee.height,g.format,g.type);for(const ne of g.layerUpdates){const wt=Ee.data.subarray(ne*Ge/Ee.data.BYTES_PER_ELEMENT,(ne+1)*Ge/Ee.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,ne,Ee.width,Ee.height,1,Te,wt)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Ee.width,Ee.height,de.depth,Te,Ee.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,me,ze,Ee.width,Ee.height,de.depth,0,Ee.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,me,0,0,0,Ee.width,Ee.height,de.depth,Te,nt,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,me,ze,Ee.width,Ee.height,de.depth,0,Te,nt,Ee.data)}else{N&&pe&&t.texStorage2D(i.TEXTURE_2D,Ne,ze,at[0].width,at[0].height);for(let me=0,L=at.length;me<L;me++)Ee=at[me],g.format!==Un?Te!==null?N?ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,me,0,0,Ee.width,Ee.height,Te,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,me,ze,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ve&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Ee.width,Ee.height,Te,nt,Ee.data):t.texImage2D(i.TEXTURE_2D,me,ze,Ee.width,Ee.height,0,Te,nt,Ee.data)}else if(g.isDataArrayTexture)if(N){if(pe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,ze,de.width,de.height,de.depth),ve)if(g.layerUpdates.size>0){const me=Ac(de.width,de.height,g.format,g.type);for(const L of g.layerUpdates){const Ge=de.data.subarray(L*me/de.data.BYTES_PER_ELEMENT,(L+1)*me/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,L,de.width,de.height,1,Te,nt,Ge)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,Te,nt,de.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ze,de.width,de.height,de.depth,0,Te,nt,de.data);else if(g.isData3DTexture)N?(pe&&t.texStorage3D(i.TEXTURE_3D,Ne,ze,de.width,de.height,de.depth),ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,Te,nt,de.data)):t.texImage3D(i.TEXTURE_3D,0,ze,de.width,de.height,de.depth,0,Te,nt,de.data);else if(g.isFramebufferTexture){if(pe)if(N)t.texStorage2D(i.TEXTURE_2D,Ne,ze,de.width,de.height);else{let me=de.width,L=de.height;for(let Ge=0;Ge<Ne;Ge++)t.texImage2D(i.TEXTURE_2D,Ge,ze,me,L,0,Te,nt,null),me>>=1,L>>=1}}else if(at.length>0){if(N&&pe){const me=Se(at[0]);t.texStorage2D(i.TEXTURE_2D,Ne,ze,me.width,me.height)}for(let me=0,L=at.length;me<L;me++)Ee=at[me],N?ve&&t.texSubImage2D(i.TEXTURE_2D,me,0,0,Te,nt,Ee):t.texImage2D(i.TEXTURE_2D,me,ze,Te,nt,Ee);g.generateMipmaps=!1}else if(N){if(pe){const me=Se(de);t.texStorage2D(i.TEXTURE_2D,Ne,ze,me.width,me.height)}ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,nt,de)}else t.texImage2D(i.TEXTURE_2D,0,ze,Te,nt,de);m(g)&&d(J),j.__version=Z.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function fe(_,g,O){if(g.image.length!==6)return;const J=xt(_,g),te=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,_.__webglTexture,i.TEXTURE0+O);const Z=n.get(te);if(te.version!==Z.__version||J===!0){t.activeTexture(i.TEXTURE0+O);const j=Et.getPrimaries(Et.workingColorSpace),le=g.colorSpace===_i?null:Et.getPrimaries(g.colorSpace),Le=g.colorSpace===_i||j===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const Ue=g.isCompressedTexture||g.image[0].isCompressedTexture,de=g.image[0]&&g.image[0].isDataTexture,Te=[];for(let L=0;L<6;L++)!Ue&&!de?Te[L]=x(g.image[L],!0,a.maxCubemapSize):Te[L]=de?g.image[L].image:g.image[L],Te[L]=se(g,Te[L]);const nt=Te[0],ze=o.convert(g.format,g.colorSpace),Ee=o.convert(g.type),at=E(g.internalFormat,ze,Ee,g.colorSpace),N=g.isVideoTexture!==!0,pe=Z.__version===void 0||J===!0,ve=te.dataReady;let Ne=P(g,nt);ot(i.TEXTURE_CUBE_MAP,g);let me;if(Ue){N&&pe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,at,nt.width,nt.height);for(let L=0;L<6;L++){me=Te[L].mipmaps;for(let Ge=0;Ge<me.length;Ge++){const ne=me[Ge];g.format!==Un?ze!==null?N?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ge,0,0,ne.width,ne.height,ze,ne.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ge,at,ne.width,ne.height,0,ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ge,0,0,ne.width,ne.height,ze,Ee,ne.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ge,at,ne.width,ne.height,0,ze,Ee,ne.data)}}}else{if(me=g.mipmaps,N&&pe){me.length>0&&Ne++;const L=Se(Te[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,at,L.width,L.height)}for(let L=0;L<6;L++)if(de){N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,Te[L].width,Te[L].height,ze,Ee,Te[L].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,at,Te[L].width,Te[L].height,0,ze,Ee,Te[L].data);for(let Ge=0;Ge<me.length;Ge++){const wt=me[Ge].image[L].image;N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ge+1,0,0,wt.width,wt.height,ze,Ee,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ge+1,at,wt.width,wt.height,0,ze,Ee,wt.data)}}else{N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,ze,Ee,Te[L]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,at,ze,Ee,Te[L]);for(let Ge=0;Ge<me.length;Ge++){const ne=me[Ge];N?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ge+1,0,0,ze,Ee,ne.image[L]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+L,Ge+1,at,ze,Ee,ne.image[L])}}}m(g)&&d(i.TEXTURE_CUBE_MAP),Z.__version=te.version,g.onUpdate&&g.onUpdate(g)}_.__version=g.version}function Ie(_,g,O,J,te,Z){const j=o.convert(O.format,O.colorSpace),le=o.convert(O.type),Le=E(O.internalFormat,j,le,O.colorSpace),Ue=n.get(g),de=n.get(O);if(de.__renderTarget=g,!Ue.__hasExternalTextures){const Te=Math.max(1,g.width>>Z),nt=Math.max(1,g.height>>Z);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,Le,Te,nt,g.depth,0,j,le,null):t.texImage2D(te,Z,Le,Te,nt,0,j,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,_),De(g)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,te,de.__webglTexture,0,st(g)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,te,de.__webglTexture,Z),t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(_,g,O){if(i.bindRenderbuffer(i.RENDERBUFFER,_),g.depthBuffer){const J=g.depthTexture,te=J&&J.isDepthTexture?J.type:null,Z=S(g.stencilBuffer,te),j=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=st(g);De(g)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,Z,g.width,g.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,Z,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Z,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,_)}else{const J=g.textures;for(let te=0;te<J.length;te++){const Z=J[te],j=o.convert(Z.format,Z.colorSpace),le=o.convert(Z.type),Le=E(Z.internalFormat,j,le,Z.colorSpace),Ue=st(g);O&&De(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ue,Le,g.width,g.height):De(g)?r.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ue,Le,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,Le,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(_,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,_),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(g.depthTexture);J.__renderTarget=g,(!J.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),ie(g.depthTexture,0);const te=J.__webglTexture,Z=st(g);if(g.depthTexture.format===eo)De(g)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(g.depthTexture.format===to)De(g)?r.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function ut(_){const g=n.get(_),O=_.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==_.depthTexture){const J=_.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),J){const te=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),g.__depthDisposeCallback=te}g.__boundDepthTexture=J}if(_.depthTexture&&!g.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");const J=_.texture.mipmaps;J&&J.length>0?Oe(g.__webglFramebuffer[0],_):Oe(g.__webglFramebuffer,_)}else if(O){g.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[J]),g.__webglDepthbuffer[J]===void 0)g.__webglDepthbuffer[J]=i.createRenderbuffer(),$e(g.__webglDepthbuffer[J],_,!1);else{const te=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Z)}}else{const J=_.texture.mipmaps;if(J&&J.length>0?t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),$e(g.__webglDepthbuffer,_,!1);else{const te=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,Z)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(_,g,O){const J=n.get(_);g!==void 0&&Ie(J.__webglFramebuffer,_,_.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&ut(_)}function A(_){const g=_.texture,O=n.get(_),J=n.get(g);_.addEventListener("dispose",D);const te=_.textures,Z=_.isWebGLCubeRenderTarget===!0,j=te.length>1;if(j||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=g.version,s.memory.textures++),Z){O.__webglFramebuffer=[];for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer[le]=[];for(let Le=0;Le<g.mipmaps.length;Le++)O.__webglFramebuffer[le][Le]=i.createFramebuffer()}else O.__webglFramebuffer[le]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){O.__webglFramebuffer=[];for(let le=0;le<g.mipmaps.length;le++)O.__webglFramebuffer[le]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(j)for(let le=0,Le=te.length;le<Le;le++){const Ue=n.get(te[le]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),s.memory.textures++)}if(_.samples>0&&De(_)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let le=0;le<te.length;le++){const Le=te[le];O.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[le]);const Ue=o.convert(Le.format,Le.colorSpace),de=o.convert(Le.type),Te=E(Le.internalFormat,Ue,de,Le.colorSpace,_.isXRRenderTarget===!0),nt=st(_);i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,Te,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,O.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),_.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),$e(O.__webglDepthRenderbuffer,_,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ot(i.TEXTURE_CUBE_MAP,g);for(let le=0;le<6;le++)if(g.mipmaps&&g.mipmaps.length>0)for(let Le=0;Le<g.mipmaps.length;Le++)Ie(O.__webglFramebuffer[le][Le],_,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le);else Ie(O.__webglFramebuffer[le],_,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(g)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(j){for(let le=0,Le=te.length;le<Le;le++){const Ue=te[le],de=n.get(Ue);let Te=i.TEXTURE_2D;(_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(Te=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Te,de.__webglTexture),ot(Te,Ue),Ie(O.__webglFramebuffer,_,Ue,i.COLOR_ATTACHMENT0+le,Te,0),m(Ue)&&d(Te)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((_.isWebGL3DRenderTarget||_.isWebGLArrayRenderTarget)&&(le=_.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,J.__webglTexture),ot(le,g),g.mipmaps&&g.mipmaps.length>0)for(let Le=0;Le<g.mipmaps.length;Le++)Ie(O.__webglFramebuffer[Le],_,g,i.COLOR_ATTACHMENT0,le,Le);else Ie(O.__webglFramebuffer,_,g,i.COLOR_ATTACHMENT0,le,0);m(g)&&d(le),t.unbindTexture()}_.depthBuffer&&ut(_)}function rt(_){const g=_.textures;for(let O=0,J=g.length;O<J;O++){const te=g[O];if(m(te)){const Z=T(_),j=n.get(te).__webglTexture;t.bindTexture(Z,j),d(Z),t.unbindTexture()}}}const et=[],je=[];function Be(_){if(_.samples>0){if(De(_)===!1){const g=_.textures,O=_.width,J=_.height;let te=i.COLOR_BUFFER_BIT;const Z=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=n.get(_),le=g.length>1;if(le)for(let Ue=0;Ue<g.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,j.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,j.__webglMultisampledFramebuffer);const Le=_.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglFramebuffer);for(let Ue=0;Ue<g.length;Ue++){if(_.resolveDepthBuffer&&(_.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),_.stencilBuffer&&_.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,j.__webglColorRenderbuffer[Ue]);const de=n.get(g[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,O,J,0,0,O,J,te,i.NEAREST),l===!0&&(et.length=0,je.length=0,et.push(i.COLOR_ATTACHMENT0+Ue),_.depthBuffer&&_.resolveDepthBuffer===!1&&(et.push(Z),je.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,je)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Ue=0;Ue<g.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,j.__webglColorRenderbuffer[Ue]);const de=n.get(g[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,j.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,j.__webglMultisampledFramebuffer)}else if(_.depthBuffer&&_.resolveDepthBuffer===!1&&l){const g=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function st(_){return Math.min(a.maxSamples,_.samples)}function De(_){const g=n.get(_);return _.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function tt(_){const g=s.render.frame;f.get(_)!==g&&(f.set(_,g),_.update())}function se(_,g){const O=_.colorSpace,J=_.format,te=_.type;return _.isCompressedTexture===!0||_.isVideoTexture===!0||O!==Ma&&O!==_i&&(Et.getTransfer(O)===Ut?(J!==Un||te!==ii)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),g}function Se(_){return typeof HTMLImageElement<"u"&&_ instanceof HTMLImageElement?(c.width=_.naturalWidth||_.width,c.height=_.naturalHeight||_.height):typeof VideoFrame<"u"&&_ instanceof VideoFrame?(c.width=_.displayWidth,c.height=_.displayHeight):(c.width=_.width,c.height=_.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=H,this.setTexture2D=ie,this.setTexture2DArray=oe,this.setTexture3D=ce,this.setTextureCube=ee,this.rebindTextures=Ot,this.setupRenderTarget=A,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=ut,this.setupFrameBufferTexture=Ie,this.useMultisampledRTT=De}function xg(i,e){function t(n,a=_i){let o;const s=Et.getTransfer(a);if(n===ii)return i.UNSIGNED_BYTE;if(n===_l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===vl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Sf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Tf)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mf)return i.BYTE;if(n===wf)return i.SHORT;if(n===Ja)return i.UNSIGNED_SHORT;if(n===yl)return i.INT;if(n===zi)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===ei)return i.HALF_FLOAT;if(n===Ef)return i.ALPHA;if(n===Af)return i.RGB;if(n===Un)return i.RGBA;if(n===eo)return i.DEPTH_COMPONENT;if(n===to)return i.DEPTH_STENCIL;if(n===Cf)return i.RED;if(n===xl)return i.RED_INTEGER;if(n===Rf)return i.RG;if(n===bl)return i.RG_INTEGER;if(n===Ml)return i.RGBA_INTEGER;if(n===tr||n===nr||n===ir||n===ar)if(s===Ut)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===tr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===nr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ir)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ar)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===tr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===nr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ir)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ar)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cs||n===Rs||n===Ps||n===Ls)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Cs)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Rs)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ps)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ls)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Is||n===Ds||n===Us)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Is||n===Ds)return s===Ut?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Us)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ks||n===Ns||n===Fs||n===Os||n===Bs||n===zs||n===Gs||n===Hs||n===Vs||n===Ws||n===Xs||n===Ys||n===Zs||n===qs)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ks)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ns)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Fs)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Os)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Bs)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===zs)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Gs)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Hs)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Vs)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ws)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Xs)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ys)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Zs)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qs)return s===Ut?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ks||n===$s||n===js)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Ks)return s===Ut?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===$s)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===js)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Js||n===Qs||n===el||n===tl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Js)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Qs)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===el)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===tl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const bg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mg=`
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

}`;class wg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Xf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new pn({vertexShader:bg,fragmentShader:Mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new It(new On(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sg extends Ra{constructor(e,t){super();const n=this;let a=null,o=1,s=null,r="local-floor",l=1,c=null,f=null,u=null,h=null,p=null,y=null;const x=typeof XRWebGLBinding<"u",m=new wg,d={},T=t.getContextAttributes();let E=null,S=null;const P=[],C=[],D=new Je;let R=null;const w=new En;w.viewport=new Wt;const b=new En;b.viewport=new Wt;const U=[w,b],H=new Vh;let Q=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let fe=P[ae];return fe===void 0&&(fe=new os,P[ae]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(ae){let fe=P[ae];return fe===void 0&&(fe=new os,P[ae]=fe),fe.getGripSpace()},this.getHand=function(ae){let fe=P[ae];return fe===void 0&&(fe=new os,P[ae]=fe),fe.getHandSpace()};function ie(ae){const fe=C.indexOf(ae.inputSource);if(fe===-1)return;const Ie=P[fe];Ie!==void 0&&(Ie.update(ae.inputSource,ae.frame,c||s),Ie.dispatchEvent({type:ae.type,data:ae.inputSource}))}function oe(){a.removeEventListener("select",ie),a.removeEventListener("selectstart",ie),a.removeEventListener("selectend",ie),a.removeEventListener("squeeze",ie),a.removeEventListener("squeezestart",ie),a.removeEventListener("squeezeend",ie),a.removeEventListener("end",oe),a.removeEventListener("inputsourceschange",ce);for(let ae=0;ae<P.length;ae++){const fe=C[ae];fe!==null&&(C[ae]=null,P[ae].disconnect(fe))}Q=null,re=null,m.reset();for(const ae in d)delete d[ae];e.setRenderTarget(E),p=null,h=null,u=null,a=null,S=null,ht.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){o=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){r=ae,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(a,t)),u},this.getFrame=function(){return y},this.getSession=function(){return a},this.setSession=async function(ae){if(a=ae,a!==null){if(E=e.getRenderTarget(),a.addEventListener("select",ie),a.addEventListener("selectstart",ie),a.addEventListener("selectend",ie),a.addEventListener("squeeze",ie),a.addEventListener("squeezestart",ie),a.addEventListener("squeezeend",ie),a.addEventListener("end",oe),a.addEventListener("inputsourceschange",ce),T.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(D),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ie=null,$e=null,Oe=null;T.depth&&(Oe=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ie=T.stencil?to:eo,$e=T.stencil?Qa:zi);const ut={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:o};u=this.getBinding(),h=u.createProjectionLayer(ut),a.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Nn(h.textureWidth,h.textureHeight,{format:Un,type:ii,depthTexture:new Wf(h.textureWidth,h.textureHeight,$e,void 0,void 0,void 0,void 0,void 0,void 0,Ie),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const Ie={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(a,t,Ie),a.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Nn(p.framebufferWidth,p.framebufferHeight,{format:Un,type:ii,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await a.requestReferenceSpace(r),ht.setContext(a),ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ce(ae){for(let fe=0;fe<ae.removed.length;fe++){const Ie=ae.removed[fe],$e=C.indexOf(Ie);$e>=0&&(C[$e]=null,P[$e].disconnect(Ie))}for(let fe=0;fe<ae.added.length;fe++){const Ie=ae.added[fe];let $e=C.indexOf(Ie);if($e===-1){for(let ut=0;ut<P.length;ut++)if(ut>=C.length){C.push(Ie),$e=ut;break}else if(C[ut]===null){C[ut]=Ie,$e=ut;break}if($e===-1)break}const Oe=P[$e];Oe&&Oe.connect(Ie)}}const ee=new k,xe=new k;function we(ae,fe,Ie){ee.setFromMatrixPosition(fe.matrixWorld),xe.setFromMatrixPosition(Ie.matrixWorld);const $e=ee.distanceTo(xe),Oe=fe.projectionMatrix.elements,ut=Ie.projectionMatrix.elements,Ot=Oe[14]/(Oe[10]-1),A=Oe[14]/(Oe[10]+1),rt=(Oe[9]+1)/Oe[5],et=(Oe[9]-1)/Oe[5],je=(Oe[8]-1)/Oe[0],Be=(ut[8]+1)/ut[0],st=Ot*je,De=Ot*Be,tt=$e/(-je+Be),se=tt*-je;if(fe.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(se),ae.translateZ(tt),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Oe[10]===-1)ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const Se=Ot+tt,_=A+tt,g=st-se,O=De+($e-se),J=rt*A/_*Se,te=et*A/_*Se;ae.projectionMatrix.makePerspective(g,O,J,te,Se,_),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function Fe(ae,fe){fe===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(fe.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(a===null)return;let fe=ae.near,Ie=ae.far;m.texture!==null&&(m.depthNear>0&&(fe=m.depthNear),m.depthFar>0&&(Ie=m.depthFar)),H.near=b.near=w.near=fe,H.far=b.far=w.far=Ie,(Q!==H.near||re!==H.far)&&(a.updateRenderState({depthNear:H.near,depthFar:H.far}),Q=H.near,re=H.far),H.layers.mask=ae.layers.mask|6,w.layers.mask=H.layers.mask&3,b.layers.mask=H.layers.mask&5;const $e=ae.parent,Oe=H.cameras;Fe(H,$e);for(let ut=0;ut<Oe.length;ut++)Fe(Oe[ut],$e);Oe.length===2?we(H,w,b):H.projectionMatrix.copy(w.projectionMatrix),ot(ae,H,$e)};function ot(ae,fe,Ie){Ie===null?ae.matrix.copy(fe.matrixWorld):(ae.matrix.copy(Ie.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(fe.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(fe.projectionMatrix),ae.projectionMatrixInverse.copy(fe.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=no*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(ae){l=ae,h!==null&&(h.fixedFoveation=ae),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ae)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(ae){return d[ae]};let xt=null;function Qe(ae,fe){if(f=fe.getViewerPose(c||s),y=fe,f!==null){const Ie=f.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let $e=!1;Ie.length!==H.cameras.length&&(H.cameras.length=0,$e=!0);for(let A=0;A<Ie.length;A++){const rt=Ie[A];let et=null;if(p!==null)et=p.getViewport(rt);else{const Be=u.getViewSubImage(h,rt);et=Be.viewport,A===0&&(e.setRenderTargetTextures(S,Be.colorTexture,Be.depthStencilTexture),e.setRenderTarget(S))}let je=U[A];je===void 0&&(je=new En,je.layers.enable(A),je.viewport=new Wt,U[A]=je),je.matrix.fromArray(rt.transform.matrix),je.matrix.decompose(je.position,je.quaternion,je.scale),je.projectionMatrix.fromArray(rt.projectionMatrix),je.projectionMatrixInverse.copy(je.projectionMatrix).invert(),je.viewport.set(et.x,et.y,et.width,et.height),A===0&&(H.matrix.copy(je.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),$e===!0&&H.cameras.push(je)}const Oe=a.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const A=u.getDepthInformation(Ie[0]);A&&A.isValid&&A.texture&&m.init(A,a.renderState)}if(Oe&&Oe.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let A=0;A<Ie.length;A++){const rt=Ie[A].camera;if(rt){let et=d[rt];et||(et=new Xf,d[rt]=et);const je=u.getCameraImage(rt);et.sourceTexture=je}}}}for(let Ie=0;Ie<P.length;Ie++){const $e=C[Ie],Oe=P[Ie];$e!==null&&Oe!==void 0&&Oe.update($e,fe,c||s)}xt&&xt(ae,fe),fe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:fe}),y=null}const ht=new Zf;ht.setAnimationLoop(Qe),this.setAnimationLoop=function(ae){xt=ae},this.dispose=function(){}}}const Di=new ai,Tg=new Ht;function Eg(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Ff(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function a(m,d,T,E,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(m,d):d.isMeshToonMaterial?(o(m,d),u(m,d)):d.isMeshPhongMaterial?(o(m,d),f(m,d)):d.isMeshStandardMaterial?(o(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(o(m,d),y(m,d)):d.isMeshDepthMaterial?o(m,d):d.isMeshDistanceMaterial?(o(m,d),x(m,d)):d.isMeshNormalMaterial?o(m,d):d.isLineBasicMaterial?(s(m,d),d.isLineDashedMaterial&&r(m,d)):d.isPointsMaterial?l(m,d,T,E):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===mn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===mn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const T=e.get(d),E=T.envMap,S=T.envMapRotation;E&&(m.envMap.value=E,Di.copy(S),Di.x*=-1,Di.y*=-1,Di.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Di.y*=-1,Di.z*=-1),m.envMapRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(Di)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function s(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function r(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,T,E){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*T,m.scale.value=E*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,T){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===mn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const T=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:a}}function Ag(i,e,t,n){let a={},o={},s=[];const r=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const S=E.program;n.uniformBlockBinding(T,S)}function c(T,E){let S=a[T.id];S===void 0&&(y(T),S=f(T),a[T.id]=S,T.addEventListener("dispose",m));const P=E.program;n.updateUBOMapping(T,P);const C=e.render.frame;o[T.id]!==C&&(h(T),o[T.id]=C)}function f(T){const E=u();T.__bindingPointIndex=E;const S=i.createBuffer(),P=T.__size,C=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,P,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,S),S}function u(){for(let T=0;T<r;T++)if(s.indexOf(T)===-1)return s.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const E=a[T.id],S=T.uniforms,P=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,D=S.length;C<D;C++){const R=Array.isArray(S[C])?S[C]:[S[C]];for(let w=0,b=R.length;w<b;w++){const U=R[w];if(p(U,C,w,P)===!0){const H=U.__offset,Q=Array.isArray(U.value)?U.value:[U.value];let re=0;for(let ie=0;ie<Q.length;ie++){const oe=Q[ie],ce=x(oe);typeof oe=="number"||typeof oe=="boolean"?(U.__data[0]=oe,i.bufferSubData(i.UNIFORM_BUFFER,H+re,U.__data)):oe.isMatrix3?(U.__data[0]=oe.elements[0],U.__data[1]=oe.elements[1],U.__data[2]=oe.elements[2],U.__data[3]=0,U.__data[4]=oe.elements[3],U.__data[5]=oe.elements[4],U.__data[6]=oe.elements[5],U.__data[7]=0,U.__data[8]=oe.elements[6],U.__data[9]=oe.elements[7],U.__data[10]=oe.elements[8],U.__data[11]=0):(oe.toArray(U.__data,re),re+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,E,S,P){const C=T.value,D=E+"_"+S;if(P[D]===void 0)return typeof C=="number"||typeof C=="boolean"?P[D]=C:P[D]=C.clone(),!0;{const R=P[D];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return P[D]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function y(T){const E=T.uniforms;let S=0;const P=16;for(let D=0,R=E.length;D<R;D++){const w=Array.isArray(E[D])?E[D]:[E[D]];for(let b=0,U=w.length;b<U;b++){const H=w[b],Q=Array.isArray(H.value)?H.value:[H.value];for(let re=0,ie=Q.length;re<ie;re++){const oe=Q[re],ce=x(oe),ee=S%P,xe=ee%ce.boundary,we=ee+xe;S+=xe,we!==0&&P-we<ce.storage&&(S+=P-we),H.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=ce.storage}}}const C=S%P;return C>0&&(S+=P-C),T.__size=S,T.__cache={},this}function x(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const S=s.indexOf(E.__bindingPointIndex);s.splice(S,1),i.deleteBuffer(a[E.id]),delete a[E.id],delete o[E.id]}function d(){for(const T in a)i.deleteBuffer(a[T]);s=[],a={},o={}}return{bind:l,update:c,dispose:d}}class Cg{constructor(e={}){const{canvas:t=ch(),context:n=null,depth:a=!0,stencil:o=!1,alpha:s=!1,antialias:r=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=s;const y=new Uint32Array(4),x=new Int32Array(4);let m=null,d=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let P=!1;this._outputColorSpace=hn;let C=0,D=0,R=null,w=-1,b=null;const U=new Wt,H=new Wt;let Q=null;const re=new He(0);let ie=0,oe=t.width,ce=t.height,ee=1,xe=null,we=null;const Fe=new Wt(0,0,oe,ce),ot=new Wt(0,0,oe,ce);let xt=!1;const Qe=new Gf;let ht=!1,ae=!1;const fe=new Ht,Ie=new k,$e=new Wt,Oe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Ot(){return R===null?ee:1}let A=n;function rt(M,z){return t.getContext(M,z)}try{const M={alpha:!0,depth:a,stencil:o,antialias:r,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ml}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ne,!1),t.addEventListener("webglcontextcreationerror",me,!1),A===null){const z="webgl2";if(A=rt(z,M),A===null)throw rt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let et,je,Be,st,De,tt,se,Se,_,g,O,J,te,Z,j,le,Le,Ue,de,Te,nt,ze,Ee,at;function N(){et=new Om(A),et.init(),ze=new xg(A,et),je=new Lm(A,et,e,ze),Be=new _g(A,et),je.reversedDepthBuffer&&h&&Be.buffers.depth.setReversed(!0),st=new Gm(A),De=new og,tt=new vg(A,et,Be,De,je,ze,st),se=new Dm(S),Se=new Fm(S),_=new Zh(A),Ee=new Rm(A,_),g=new Bm(A,_,st,Ee),O=new Vm(A,g,_,st),de=new Hm(A,je,tt),le=new Im(De),J=new ag(S,se,Se,et,je,Ee,le),te=new Eg(S,De),Z=new sg,j=new hg(et),Ue=new Cm(S,se,Se,Be,O,p,l),Le=new gg(S,O,je),at=new Ag(A,st,je,Be),Te=new Pm(A,et,st),nt=new zm(A,et,st),st.programs=J.programs,S.capabilities=je,S.extensions=et,S.properties=De,S.renderLists=Z,S.shadowMap=Le,S.state=Be,S.info=st}N();const pe=new Sg(S,A);this.xr=pe,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const M=et.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=et.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(M){M!==void 0&&(ee=M,this.setSize(oe,ce,!1))},this.getSize=function(M){return M.set(oe,ce)},this.setSize=function(M,z,q=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=M,ce=z,t.width=Math.floor(M*ee),t.height=Math.floor(z*ee),q===!0&&(t.style.width=M+"px",t.style.height=z+"px"),this.setViewport(0,0,M,z)},this.getDrawingBufferSize=function(M){return M.set(oe*ee,ce*ee).floor()},this.setDrawingBufferSize=function(M,z,q){oe=M,ce=z,ee=q,t.width=Math.floor(M*q),t.height=Math.floor(z*q),this.setViewport(0,0,M,z)},this.getCurrentViewport=function(M){return M.copy(U)},this.getViewport=function(M){return M.copy(Fe)},this.setViewport=function(M,z,q,K){M.isVector4?Fe.set(M.x,M.y,M.z,M.w):Fe.set(M,z,q,K),Be.viewport(U.copy(Fe).multiplyScalar(ee).round())},this.getScissor=function(M){return M.copy(ot)},this.setScissor=function(M,z,q,K){M.isVector4?ot.set(M.x,M.y,M.z,M.w):ot.set(M,z,q,K),Be.scissor(H.copy(ot).multiplyScalar(ee).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(M){Be.setScissorTest(xt=M)},this.setOpaqueSort=function(M){xe=M},this.setTransparentSort=function(M){we=M},this.getClearColor=function(M){return M.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(M=!0,z=!0,q=!0){let K=0;if(M){let G=!1;if(R!==null){const ue=R.texture.format;G=ue===Ml||ue===bl||ue===xl}if(G){const ue=R.texture.type,be=ue===ii||ue===zi||ue===Ja||ue===Qa||ue===_l||ue===vl,Pe=Ue.getClearColor(),Ae=Ue.getClearAlpha(),Ze=Pe.r,it=Pe.g,Ye=Pe.b;be?(y[0]=Ze,y[1]=it,y[2]=Ye,y[3]=Ae,A.clearBufferuiv(A.COLOR,0,y)):(x[0]=Ze,x[1]=it,x[2]=Ye,x[3]=Ae,A.clearBufferiv(A.COLOR,0,x))}else K|=A.COLOR_BUFFER_BIT}z&&(K|=A.DEPTH_BUFFER_BIT),q&&(K|=A.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),A.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ne,!1),t.removeEventListener("webglcontextcreationerror",me,!1),Ue.dispose(),Z.dispose(),j.dispose(),De.dispose(),se.dispose(),Se.dispose(),O.dispose(),Ee.dispose(),at.dispose(),J.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",yn),pe.removeEventListener("sessionend",Cn),_n.stop()};function ve(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ne(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const M=st.autoReset,z=Le.enabled,q=Le.autoUpdate,K=Le.needsUpdate,G=Le.type;N(),st.autoReset=M,Le.enabled=z,Le.autoUpdate=q,Le.needsUpdate=K,Le.type=G}function me(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function L(M){const z=M.target;z.removeEventListener("dispose",L),Ge(z)}function Ge(M){ne(M),De.remove(M)}function ne(M){const z=De.get(M).programs;z!==void 0&&(z.forEach(function(q){J.releaseProgram(q)}),M.isShaderMaterial&&J.releaseShaderCache(M))}this.renderBufferDirect=function(M,z,q,K,G,ue){z===null&&(z=Oe);const be=G.isMesh&&G.matrixWorld.determinant()<0,Pe=Sr(M,z,q,K,G);Be.setMaterial(K,be);let Ae=q.index,Ze=1;if(K.wireframe===!0){if(Ae=g.getWireframeAttribute(q),Ae===void 0)return;Ze=2}const it=q.drawRange,Ye=q.attributes.position;let pt=it.start*Ze,Ct=(it.start+it.count)*Ze;ue!==null&&(pt=Math.max(pt,ue.start*Ze),Ct=Math.min(Ct,(ue.start+ue.count)*Ze)),Ae!==null?(pt=Math.max(pt,0),Ct=Math.min(Ct,Ae.count)):Ye!=null&&(pt=Math.max(pt,0),Ct=Math.min(Ct,Ye.count));const Bt=Ct-pt;if(Bt<0||Bt===1/0)return;Ee.setup(G,K,Pe,q,Ae);let St,At=Te;if(Ae!==null&&(St=_.get(Ae),At=nt,At.setIndex(St)),G.isMesh)K.wireframe===!0?(Be.setLineWidth(K.wireframeLinewidth*Ot()),At.setMode(A.LINES)):At.setMode(A.TRIANGLES);else if(G.isLine){let qe=K.linewidth;qe===void 0&&(qe=1),Be.setLineWidth(qe*Ot()),G.isLineSegments?At.setMode(A.LINES):G.isLineLoop?At.setMode(A.LINE_LOOP):At.setMode(A.LINE_STRIP)}else G.isPoints?At.setMode(A.POINTS):G.isSprite&&At.setMode(A.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)io("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),At.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))At.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const qe=G._multiDrawStarts,Tt=G._multiDrawCounts,mt=G._multiDrawCount,an=Ae?_.get(Ae).bytesPerElement:1,V=De.get(K).currentProgram.getUniforms();for(let X=0;X<mt;X++)V.setValue(A,"_gl_DrawID",X),At.render(qe[X]/an,Tt[X])}else if(G.isInstancedMesh)At.renderInstances(pt,Bt,G.count);else if(q.isInstancedBufferGeometry){const qe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Tt=Math.min(q.instanceCount,qe);At.renderInstances(pt,Bt,Tt)}else At.render(pt,Bt)};function wt(M,z,q){M.transparent===!0&&M.side===jn&&M.forceSinglePass===!1?(M.side=mn,M.needsUpdate=!0,ui(M,z,q),M.side=wi,M.needsUpdate=!0,ui(M,z,q),M.side=jn):ui(M,z,q)}this.compile=function(M,z,q=null){q===null&&(q=M),d=j.get(q),d.init(z),E.push(d),q.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),M!==q&&M.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(d.pushLight(G),G.castShadow&&d.pushShadow(G))}),d.setupLights();const K=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ue=G.material;if(ue)if(Array.isArray(ue))for(let be=0;be<ue.length;be++){const Pe=ue[be];wt(Pe,q,G),K.add(Pe)}else wt(ue,q,G),K.add(ue)}),d=E.pop(),K},this.compileAsync=function(M,z,q=null){const K=this.compile(M,z,q);return new Promise(G=>{function ue(){if(K.forEach(function(be){De.get(be).currentProgram.isReady()&&K.delete(be)}),K.size===0){G(M);return}setTimeout(ue,10)}et.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let bt=null;function Qt(M){bt&&bt(M)}function yn(){_n.stop()}function Cn(){_n.start()}const _n=new Zf;_n.setAnimationLoop(Qt),typeof self<"u"&&_n.setContext(self),this.setAnimationLoop=function(M){bt=M,pe.setAnimationLoop(M),M===null?_n.stop():_n.start()},pe.addEventListener("sessionstart",yn),pe.addEventListener("sessionend",Cn),this.render=function(M,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(z),z=pe.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,z,R),d=j.get(M,E.length),d.init(z),E.push(d),fe.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Qe.setFromProjectionMatrix(fe,zn,z.reversedDepth),ae=this.localClippingEnabled,ht=le.init(this.clippingPlanes,ae),m=Z.get(M,T.length),m.init(),T.push(m),pe.enabled===!0&&pe.isPresenting===!0){const ue=S.xr.getDepthSensingMesh();ue!==null&&si(ue,z,-1/0,S.sortObjects)}si(M,z,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(xe,we),ut=pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1,ut&&Ue.addToRenderList(m,M),this.info.render.frame++,ht===!0&&le.beginShadows();const q=d.state.shadowsArray;Le.render(q,M,z),ht===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,G=m.transmissive;if(d.setupLights(),z.isArrayCamera){const ue=z.cameras;if(G.length>0)for(let be=0,Pe=ue.length;be<Pe;be++){const Ae=ue[be];ci(K,G,M,Ae)}ut&&Ue.render(M);for(let be=0,Pe=ue.length;be<Pe;be++){const Ae=ue[be];li(m,M,Ae,Ae.viewport)}}else G.length>0&&ci(K,G,M,z),ut&&Ue.render(M),li(m,M,z);R!==null&&D===0&&(tt.updateMultisampleRenderTarget(R),tt.updateRenderTargetMipmap(R)),M.isScene===!0&&M.onAfterRender(S,M,z),Ee.resetDefaultState(),w=-1,b=null,E.pop(),E.length>0?(d=E[E.length-1],ht===!0&&le.setGlobalState(S.clippingPlanes,d.state.camera)):d=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function si(M,z,q,K){if(M.visible===!1)return;if(M.layers.test(z.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(z);else if(M.isLight)d.pushLight(M),M.castShadow&&d.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Qe.intersectsSprite(M)){K&&$e.setFromMatrixPosition(M.matrixWorld).applyMatrix4(fe);const be=O.update(M),Pe=M.material;Pe.visible&&m.push(M,be,Pe,q,$e.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Qe.intersectsObject(M))){const be=O.update(M),Pe=M.material;if(K&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),$e.copy(M.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),$e.copy(be.boundingSphere.center)),$e.applyMatrix4(M.matrixWorld).applyMatrix4(fe)),Array.isArray(Pe)){const Ae=be.groups;for(let Ze=0,it=Ae.length;Ze<it;Ze++){const Ye=Ae[Ze],pt=Pe[Ye.materialIndex];pt&&pt.visible&&m.push(M,be,pt,q,$e.z,Ye)}}else Pe.visible&&m.push(M,be,Pe,q,$e.z,null)}}const ue=M.children;for(let be=0,Pe=ue.length;be<Pe;be++)si(ue[be],z,q,K)}function li(M,z,q,K){const G=M.opaque,ue=M.transmissive,be=M.transparent;d.setupLightsView(q),ht===!0&&le.setGlobalState(S.clippingPlanes,q),K&&Be.viewport(U.copy(K)),G.length>0&&fi(G,z,q),ue.length>0&&fi(ue,z,q),be.length>0&&fi(be,z,q),Be.buffers.depth.setTest(!0),Be.buffers.depth.setMask(!0),Be.buffers.color.setMask(!0),Be.setPolygonOffset(!1)}function ci(M,z,q,K){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[K.id]===void 0&&(d.state.transmissionRenderTarget[K.id]=new Nn(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float")?ei:ii,minFilter:Oi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace}));const ue=d.state.transmissionRenderTarget[K.id],be=K.viewport||U;ue.setSize(be.z*S.transmissionResolutionScale,be.w*S.transmissionResolutionScale);const Pe=S.getRenderTarget(),Ae=S.getActiveCubeFace(),Ze=S.getActiveMipmapLevel();S.setRenderTarget(ue),S.getClearColor(re),ie=S.getClearAlpha(),ie<1&&S.setClearColor(16777215,.5),S.clear(),ut&&Ue.render(q);const it=S.toneMapping;S.toneMapping=xi;const Ye=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),d.setupLightsView(K),ht===!0&&le.setGlobalState(S.clippingPlanes,K),fi(M,q,K),tt.updateMultisampleRenderTarget(ue),tt.updateRenderTargetMipmap(ue),et.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Ct=0,Bt=z.length;Ct<Bt;Ct++){const St=z[Ct],At=St.object,qe=St.geometry,Tt=St.material,mt=St.group;if(Tt.side===jn&&At.layers.test(K.layers)){const an=Tt.side;Tt.side=mn,Tt.needsUpdate=!0,Ei(At,q,K,qe,Tt,mt),Tt.side=an,Tt.needsUpdate=!0,pt=!0}}pt===!0&&(tt.updateMultisampleRenderTarget(ue),tt.updateRenderTargetMipmap(ue))}S.setRenderTarget(Pe,Ae,Ze),S.setClearColor(re,ie),Ye!==void 0&&(K.viewport=Ye),S.toneMapping=it}function fi(M,z,q){const K=z.isScene===!0?z.overrideMaterial:null;for(let G=0,ue=M.length;G<ue;G++){const be=M[G],Pe=be.object,Ae=be.geometry,Ze=be.group;let it=be.material;it.allowOverride===!0&&K!==null&&(it=K),Pe.layers.test(q.layers)&&Ei(Pe,z,q,Ae,it,Ze)}}function Ei(M,z,q,K,G,ue){M.onBeforeRender(S,z,q,K,G,ue),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(S,z,q,K,M,ue),G.transparent===!0&&G.side===jn&&G.forceSinglePass===!1?(G.side=mn,G.needsUpdate=!0,S.renderBufferDirect(q,z,K,G,M,ue),G.side=wi,G.needsUpdate=!0,S.renderBufferDirect(q,z,K,G,M,ue),G.side=jn):S.renderBufferDirect(q,z,K,G,M,ue),M.onAfterRender(S,z,q,K,G,ue)}function ui(M,z,q){z.isScene!==!0&&(z=Oe);const K=De.get(M),G=d.state.lights,ue=d.state.shadowsArray,be=G.state.version,Pe=J.getParameters(M,G.state,ue,z,q),Ae=J.getProgramCacheKey(Pe);let Ze=K.programs;K.environment=M.isMeshStandardMaterial?z.environment:null,K.fog=z.fog,K.envMap=(M.isMeshStandardMaterial?Se:se).get(M.envMap||K.environment),K.envMapRotation=K.environment!==null&&M.envMap===null?z.environmentRotation:M.envMapRotation,Ze===void 0&&(M.addEventListener("dispose",L),Ze=new Map,K.programs=Ze);let it=Ze.get(Ae);if(it!==void 0){if(K.currentProgram===it&&K.lightsStateVersion===be)return Ua(M,Pe),it}else Pe.uniforms=J.getUniforms(M),M.onBeforeCompile(Pe,S),it=J.acquireProgram(Pe,Ae),Ze.set(Ae,it),K.uniforms=Pe.uniforms;const Ye=K.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ye.clippingPlanes=le.uniform),Ua(M,Pe),K.needsLights=Tr(M),K.lightsStateVersion=be,K.needsLights&&(Ye.ambientLightColor.value=G.state.ambient,Ye.lightProbe.value=G.state.probe,Ye.directionalLights.value=G.state.directional,Ye.directionalLightShadows.value=G.state.directionalShadow,Ye.spotLights.value=G.state.spot,Ye.spotLightShadows.value=G.state.spotShadow,Ye.rectAreaLights.value=G.state.rectArea,Ye.ltc_1.value=G.state.rectAreaLTC1,Ye.ltc_2.value=G.state.rectAreaLTC2,Ye.pointLights.value=G.state.point,Ye.pointLightShadows.value=G.state.pointShadow,Ye.hemisphereLights.value=G.state.hemi,Ye.directionalShadowMap.value=G.state.directionalShadowMap,Ye.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ye.spotShadowMap.value=G.state.spotShadowMap,Ye.spotLightMatrix.value=G.state.spotLightMatrix,Ye.spotLightMap.value=G.state.spotLightMap,Ye.pointShadowMap.value=G.state.pointShadowMap,Ye.pointShadowMatrix.value=G.state.pointShadowMatrix),K.currentProgram=it,K.uniformsList=null,it}function Yi(M){if(M.uniformsList===null){const z=M.currentProgram.getUniforms();M.uniformsList=or.seqWithValue(z.seq,M.uniforms)}return M.uniformsList}function Ua(M,z){const q=De.get(M);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function Sr(M,z,q,K,G){z.isScene!==!0&&(z=Oe),tt.resetTextureUnits();const ue=z.fog,be=K.isMeshStandardMaterial?z.environment:null,Pe=R===null?S.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ma,Ae=(K.isMeshStandardMaterial?Se:se).get(K.envMap||be),Ze=K.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,it=!!q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Ye=!!q.morphAttributes.position,pt=!!q.morphAttributes.normal,Ct=!!q.morphAttributes.color;let Bt=xi;K.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Bt=S.toneMapping);const St=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,At=St!==void 0?St.length:0,qe=De.get(K),Tt=d.state.lights;if(ht===!0&&(ae===!0||M!==b)){const tn=M===b&&K.id===w;le.setState(K,M,tn)}let mt=!1;K.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Tt.state.version||qe.outputColorSpace!==Pe||G.isBatchedMesh&&qe.batching===!1||!G.isBatchedMesh&&qe.batching===!0||G.isBatchedMesh&&qe.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&qe.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&qe.instancing===!1||!G.isInstancedMesh&&qe.instancing===!0||G.isSkinnedMesh&&qe.skinning===!1||!G.isSkinnedMesh&&qe.skinning===!0||G.isInstancedMesh&&qe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&qe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&qe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&qe.instancingMorph===!1&&G.morphTexture!==null||qe.envMap!==Ae||K.fog===!0&&qe.fog!==ue||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==le.numPlanes||qe.numIntersection!==le.numIntersection)||qe.vertexAlphas!==Ze||qe.vertexTangents!==it||qe.morphTargets!==Ye||qe.morphNormals!==pt||qe.morphColors!==Ct||qe.toneMapping!==Bt||qe.morphTargetsCount!==At)&&(mt=!0):(mt=!0,qe.__version=K.version);let an=qe.currentProgram;mt===!0&&(an=ui(K,z,G));let V=!1,X=!1,Pt=!1;const Nt=an.getUniforms(),vn=qe.uniforms;if(Be.useProgram(an.program)&&(V=!0,X=!0,Pt=!0),K.id!==w&&(w=K.id,X=!0),V||b!==M){Be.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Nt.setValue(A,"projectionMatrix",M.projectionMatrix),Nt.setValue(A,"viewMatrix",M.matrixWorldInverse);const on=Nt.map.cameraPosition;on!==void 0&&on.setValue(A,Ie.setFromMatrixPosition(M.matrixWorld)),je.logarithmicDepthBuffer&&Nt.setValue(A,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Nt.setValue(A,"isOrthographic",M.isOrthographicCamera===!0),b!==M&&(b=M,X=!0,Pt=!0)}if(G.isSkinnedMesh){Nt.setOptional(A,G,"bindMatrix"),Nt.setOptional(A,G,"bindMatrixInverse");const tn=G.skeleton;tn&&(tn.boneTexture===null&&tn.computeBoneTexture(),Nt.setValue(A,"boneTexture",tn.boneTexture,tt))}G.isBatchedMesh&&(Nt.setOptional(A,G,"batchingTexture"),Nt.setValue(A,"batchingTexture",G._matricesTexture,tt),Nt.setOptional(A,G,"batchingIdTexture"),Nt.setValue(A,"batchingIdTexture",G._indirectTexture,tt),Nt.setOptional(A,G,"batchingColorTexture"),G._colorsTexture!==null&&Nt.setValue(A,"batchingColorTexture",G._colorsTexture,tt));const xn=q.morphAttributes;if((xn.position!==void 0||xn.normal!==void 0||xn.color!==void 0)&&de.update(G,q,an),(X||qe.receiveShadow!==G.receiveShadow)&&(qe.receiveShadow=G.receiveShadow,Nt.setValue(A,"receiveShadow",G.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(vn.envMap.value=Ae,vn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&z.environment!==null&&(vn.envMapIntensity.value=z.environmentIntensity),X&&(Nt.setValue(A,"toneMappingExposure",S.toneMappingExposure),qe.needsLights&&po(vn,Pt),ue&&K.fog===!0&&te.refreshFogUniforms(vn,ue),te.refreshMaterialUniforms(vn,K,ee,ce,d.state.transmissionRenderTarget[M.id]),or.upload(A,Yi(qe),vn,tt)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(or.upload(A,Yi(qe),vn,tt),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Nt.setValue(A,"center",G.center),Nt.setValue(A,"modelViewMatrix",G.modelViewMatrix),Nt.setValue(A,"normalMatrix",G.normalMatrix),Nt.setValue(A,"modelMatrix",G.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const tn=K.uniformsGroups;for(let on=0,Na=tn.length;on<Na;on++){const Hn=tn[on];at.update(Hn,an),at.bind(Hn,an)}}return an}function po(M,z){M.ambientLightColor.needsUpdate=z,M.lightProbe.needsUpdate=z,M.directionalLights.needsUpdate=z,M.directionalLightShadows.needsUpdate=z,M.pointLights.needsUpdate=z,M.pointLightShadows.needsUpdate=z,M.spotLights.needsUpdate=z,M.spotLightShadows.needsUpdate=z,M.rectAreaLights.needsUpdate=z,M.hemisphereLights.needsUpdate=z}function Tr(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(M,z,q){const K=De.get(M);K.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),De.get(M.texture).__webglTexture=z,De.get(M.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,z){const q=De.get(M);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0};const Er=A.createFramebuffer();this.setRenderTarget=function(M,z=0,q=0){R=M,C=z,D=q;let K=!0,G=null,ue=!1,be=!1;if(M){const Ae=De.get(M);if(Ae.__useDefaultFramebuffer!==void 0)Be.bindFramebuffer(A.FRAMEBUFFER,null),K=!1;else if(Ae.__webglFramebuffer===void 0)tt.setupRenderTarget(M);else if(Ae.__hasExternalTextures)tt.rebindTextures(M,De.get(M.texture).__webglTexture,De.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ye=M.depthTexture;if(Ae.__boundDepthTexture!==Ye){if(Ye!==null&&De.has(Ye)&&(M.width!==Ye.image.width||M.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");tt.setupDepthRenderbuffer(M)}}const Ze=M.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(be=!0);const it=De.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(it[z])?G=it[z][q]:G=it[z],ue=!0):M.samples>0&&tt.useMultisampledRTT(M)===!1?G=De.get(M).__webglMultisampledFramebuffer:Array.isArray(it)?G=it[q]:G=it,U.copy(M.viewport),H.copy(M.scissor),Q=M.scissorTest}else U.copy(Fe).multiplyScalar(ee).floor(),H.copy(ot).multiplyScalar(ee).floor(),Q=xt;if(q!==0&&(G=Er),Be.bindFramebuffer(A.FRAMEBUFFER,G)&&K&&Be.drawBuffers(M,G),Be.viewport(U),Be.scissor(H),Be.setScissorTest(Q),ue){const Ae=De.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ae.__webglTexture,q)}else if(be){const Ae=z;for(let Ze=0;Ze<M.textures.length;Ze++){const it=De.get(M.textures[Ze]);A.framebufferTextureLayer(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0+Ze,it.__webglTexture,q,Ae)}}else if(M!==null&&q!==0){const Ae=De.get(M.texture);A.framebufferTexture2D(A.FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,Ae.__webglTexture,q)}w=-1},this.readRenderTargetPixels=function(M,z,q,K,G,ue,be,Pe=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=De.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&be!==void 0&&(Ae=Ae[be]),Ae){Be.bindFramebuffer(A.FRAMEBUFFER,Ae);try{const Ze=M.textures[Pe],it=Ze.format,Ye=Ze.type;if(!je.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=M.width-K&&q>=0&&q<=M.height-G&&(M.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Pe),A.readPixels(z,q,K,G,ze.convert(it),ze.convert(Ye),ue))}finally{const Ze=R!==null?De.get(R).__webglFramebuffer:null;Be.bindFramebuffer(A.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(M,z,q,K,G,ue,be,Pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=De.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&be!==void 0&&(Ae=Ae[be]),Ae)if(z>=0&&z<=M.width-K&&q>=0&&q<=M.height-G){Be.bindFramebuffer(A.FRAMEBUFFER,Ae);const Ze=M.textures[Pe],it=Ze.format,Ye=Ze.type;if(!je.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=A.createBuffer();A.bindBuffer(A.PIXEL_PACK_BUFFER,pt),A.bufferData(A.PIXEL_PACK_BUFFER,ue.byteLength,A.STREAM_READ),M.textures.length>1&&A.readBuffer(A.COLOR_ATTACHMENT0+Pe),A.readPixels(z,q,K,G,ze.convert(it),ze.convert(Ye),0);const Ct=R!==null?De.get(R).__webglFramebuffer:null;Be.bindFramebuffer(A.FRAMEBUFFER,Ct);const Bt=A.fenceSync(A.SYNC_GPU_COMMANDS_COMPLETE,0);return A.flush(),await fh(A,Bt,4),A.bindBuffer(A.PIXEL_PACK_BUFFER,pt),A.getBufferSubData(A.PIXEL_PACK_BUFFER,0,ue),A.deleteBuffer(pt),A.deleteSync(Bt),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,z=null,q=0){const K=Math.pow(2,-q),G=Math.floor(M.image.width*K),ue=Math.floor(M.image.height*K),be=z!==null?z.x:0,Pe=z!==null?z.y:0;tt.setTexture2D(M,0),A.copyTexSubImage2D(A.TEXTURE_2D,q,0,0,be,Pe,G,ue),Be.unbindTexture()};const Ar=A.createFramebuffer(),ka=A.createFramebuffer();this.copyTextureToTexture=function(M,z,q=null,K=null,G=0,ue=null){ue===null&&(G!==0?(io("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=G,G=0):ue=0);let be,Pe,Ae,Ze,it,Ye,pt,Ct,Bt;const St=M.isCompressedTexture?M.mipmaps[ue]:M.image;if(q!==null)be=q.max.x-q.min.x,Pe=q.max.y-q.min.y,Ae=q.isBox3?q.max.z-q.min.z:1,Ze=q.min.x,it=q.min.y,Ye=q.isBox3?q.min.z:0;else{const xn=Math.pow(2,-G);be=Math.floor(St.width*xn),Pe=Math.floor(St.height*xn),M.isDataArrayTexture?Ae=St.depth:M.isData3DTexture?Ae=Math.floor(St.depth*xn):Ae=1,Ze=0,it=0,Ye=0}K!==null?(pt=K.x,Ct=K.y,Bt=K.z):(pt=0,Ct=0,Bt=0);const At=ze.convert(z.format),qe=ze.convert(z.type);let Tt;z.isData3DTexture?(tt.setTexture3D(z,0),Tt=A.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(tt.setTexture2DArray(z,0),Tt=A.TEXTURE_2D_ARRAY):(tt.setTexture2D(z,0),Tt=A.TEXTURE_2D),A.pixelStorei(A.UNPACK_FLIP_Y_WEBGL,z.flipY),A.pixelStorei(A.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),A.pixelStorei(A.UNPACK_ALIGNMENT,z.unpackAlignment);const mt=A.getParameter(A.UNPACK_ROW_LENGTH),an=A.getParameter(A.UNPACK_IMAGE_HEIGHT),V=A.getParameter(A.UNPACK_SKIP_PIXELS),X=A.getParameter(A.UNPACK_SKIP_ROWS),Pt=A.getParameter(A.UNPACK_SKIP_IMAGES);A.pixelStorei(A.UNPACK_ROW_LENGTH,St.width),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,St.height),A.pixelStorei(A.UNPACK_SKIP_PIXELS,Ze),A.pixelStorei(A.UNPACK_SKIP_ROWS,it),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Ye);const Nt=M.isDataArrayTexture||M.isData3DTexture,vn=z.isDataArrayTexture||z.isData3DTexture;if(M.isDepthTexture){const xn=De.get(M),tn=De.get(z),on=De.get(xn.__renderTarget),Na=De.get(tn.__renderTarget);Be.bindFramebuffer(A.READ_FRAMEBUFFER,on.__webglFramebuffer),Be.bindFramebuffer(A.DRAW_FRAMEBUFFER,Na.__webglFramebuffer);for(let Hn=0;Hn<Ae;Hn++)Nt&&(A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,De.get(M).__webglTexture,G,Ye+Hn),A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,De.get(z).__webglTexture,ue,Bt+Hn)),A.blitFramebuffer(Ze,it,be,Pe,pt,Ct,be,Pe,A.DEPTH_BUFFER_BIT,A.NEAREST);Be.bindFramebuffer(A.READ_FRAMEBUFFER,null),Be.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||De.has(M)){const xn=De.get(M),tn=De.get(z);Be.bindFramebuffer(A.READ_FRAMEBUFFER,Ar),Be.bindFramebuffer(A.DRAW_FRAMEBUFFER,ka);for(let on=0;on<Ae;on++)Nt?A.framebufferTextureLayer(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,xn.__webglTexture,G,Ye+on):A.framebufferTexture2D(A.READ_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,xn.__webglTexture,G),vn?A.framebufferTextureLayer(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,tn.__webglTexture,ue,Bt+on):A.framebufferTexture2D(A.DRAW_FRAMEBUFFER,A.COLOR_ATTACHMENT0,A.TEXTURE_2D,tn.__webglTexture,ue),G!==0?A.blitFramebuffer(Ze,it,be,Pe,pt,Ct,be,Pe,A.COLOR_BUFFER_BIT,A.NEAREST):vn?A.copyTexSubImage3D(Tt,ue,pt,Ct,Bt+on,Ze,it,be,Pe):A.copyTexSubImage2D(Tt,ue,pt,Ct,Ze,it,be,Pe);Be.bindFramebuffer(A.READ_FRAMEBUFFER,null),Be.bindFramebuffer(A.DRAW_FRAMEBUFFER,null)}else vn?M.isDataTexture||M.isData3DTexture?A.texSubImage3D(Tt,ue,pt,Ct,Bt,be,Pe,Ae,At,qe,St.data):z.isCompressedArrayTexture?A.compressedTexSubImage3D(Tt,ue,pt,Ct,Bt,be,Pe,Ae,At,St.data):A.texSubImage3D(Tt,ue,pt,Ct,Bt,be,Pe,Ae,At,qe,St):M.isDataTexture?A.texSubImage2D(A.TEXTURE_2D,ue,pt,Ct,be,Pe,At,qe,St.data):M.isCompressedTexture?A.compressedTexSubImage2D(A.TEXTURE_2D,ue,pt,Ct,St.width,St.height,At,St.data):A.texSubImage2D(A.TEXTURE_2D,ue,pt,Ct,be,Pe,At,qe,St);A.pixelStorei(A.UNPACK_ROW_LENGTH,mt),A.pixelStorei(A.UNPACK_IMAGE_HEIGHT,an),A.pixelStorei(A.UNPACK_SKIP_PIXELS,V),A.pixelStorei(A.UNPACK_SKIP_ROWS,X),A.pixelStorei(A.UNPACK_SKIP_IMAGES,Pt),ue===0&&z.generateMipmaps&&A.generateMipmap(Tt),Be.unbindTexture()},this.initRenderTarget=function(M){De.get(M).__webglFramebuffer===void 0&&tt.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?tt.setTextureCube(M,0):M.isData3DTexture?tt.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?tt.setTexture2DArray(M,0):tt.setTexture2D(M,0),Be.unbindTexture()},this.resetState=function(){C=0,D=0,R=null,Be.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}const rr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class La{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Rg=new Yf(-1,1,1,-1,0,1);class Pg extends Xt{constructor(){super(),this.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gt([0,2,0,0,2,0],2))}}const Lg=new Pg;class Pl{constructor(e){this._mesh=new It(Lg,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Rg)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Ig extends La{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof pn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ao.clone(e.uniforms),this.material=new pn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Pl(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Jc extends La{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const a=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let s,r;this.inverse?(s=0,r=1):(s=1,r=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),o.buffers.stencil.setFunc(a.ALWAYS,s,4294967295),o.buffers.stencil.setClear(r),o.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(a.EQUAL,1,4294967295),o.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),o.buffers.stencil.setLocked(!0)}}class Dg extends La{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ug{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Je);this._width=n.width,this._height=n.height,t=new Nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ei}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ig(rr),this.copyPass.material.blending=Qn,this.clock=new Wh}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let a=0,o=this.passes.length;a<o;a++){const s=this.passes[a];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),s.needsSwap){if(n){const r=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(r.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(r.EQUAL,1,4294967295)}this.swapBuffers()}Jc!==void 0&&(s instanceof Jc?n=!0:s instanceof Dg&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Je);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(n,a),this.renderTarget2.setSize(n,a);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(n,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class kg extends La{constructor(e,t,n=null,a=null,o=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=a,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new He}render(e,t,n){const a=e.autoClear;e.autoClear=!1;let o,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=a}}const Ng={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new He(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Sa extends La{constructor(e,t=1,n,a){super(),this.strength=t,this.radius=n,this.threshold=a,this.resolution=e!==void 0?new Je(e.x,e.y):new Je(256,256),this.clearColor=new He(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new Nn(o,s,{type:ei}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const u=new Nn(o,s,{type:ei});u.texture.name="UnrealBloomPass.h"+f,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const h=new Nn(o,s,{type:ei});h.texture.name="UnrealBloomPass.v"+f,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),o=Math.round(o/2),s=Math.round(s/2)}const r=Ng;this.highPassUniforms=ao.clone(r.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pn({uniforms:this.highPassUniforms,vertexShader:r.vertexShader,fragmentShader:r.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];o=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Je(1/o,1/s),o=Math.round(o/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ao.clone(rr.uniforms),this.blendMaterial=new pn({uniforms:this.copyUniforms,vertexShader:rr.vertexShader,fragmentShader:rr.fragmentShader,blending:Mt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new He,this._oldClearAlpha=1,this._basic=new qt,this._fsQuad=new Pl(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),a=Math.round(t/2);this.renderTargetBright.setSize(n,a);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(n,a),this.renderTargetsVertical[o].setSize(n,a),this.separableBlurMaterials[o].uniforms.invSize.value=new Je(1/n,1/a),n=Math.round(n/2),a=Math.round(a/2)}render(e,t,n,a,o){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),o&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let r=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=r.texture,this.separableBlurMaterials[l].uniforms.direction.value=Sa.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Sa.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),r=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new pn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Je(.5,.5)},direction:{value:new Je(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new pn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Sa.BlurDirectionX=new Je(1,0);Sa.BlurDirectionY=new Je(0,1);const $o={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Fg extends La{constructor(){super(),this.uniforms=ao.clone($o.uniforms),this.material=new zh({name:$o.name,uniforms:this.uniforms,vertexShader:$o.vertexShader,fragmentShader:$o.fragmentShader}),this._fsQuad=new Pl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Et.getTransfer(this._outputColorSpace)===Ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===mf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===gf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===yf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===vf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===xf?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===_f&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}function Ia(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function Da(i){const e=new Vf(i);return e.colorSpace=hn,e.anisotropy=4,e}function Og(){const[i,e]=Ia(1024,512),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#02040c"),t.addColorStop(.34,"#06152c"),t.addColorStop(.56,"#123a60"),t.addColorStop(.72,"#5c8cae"),t.addColorStop(.82,"#a8c6d8"),t.addColorStop(1,"#0b2438"),e.fillStyle=t,e.fillRect(0,0,1024,512);const n=e.createLinearGradient(0,350,0,470);n.addColorStop(0,"rgba(210,235,255,0)"),n.addColorStop(.55,"rgba(200,228,247,.28)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.fillRect(0,340,1024,140);for(let a=0;a<26;a++){const o=Math.random()*1100-40,s=190+Math.random()*190,r=40+Math.random()*150,l=e.createRadialGradient(o,s,0,o,s,r);l.addColorStop(0,`rgba(7,16,30,${.16+Math.random()*.24})`),l.addColorStop(.6,`rgba(10,22,40,${.1+Math.random()*.14})`),l.addColorStop(1,"rgba(10,22,40,0)"),e.fillStyle=l,e.beginPath(),e.arc(o,s,r,0,Math.PI*2),e.fill()}return Da(i)}function Bg(){const[i,e]=Ia(512,512),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"rgba(45,100,145,.48)"),t.addColorStop(.42,"rgba(22,59,96,.62)"),t.addColorStop(1,"rgba(5,20,38,.9)"),e.fillStyle=t,e.fillRect(0,0,512,512);for(let a=0;a<170;a++){const o=Math.random()*512,s=.03+Math.random()*.12;e.strokeStyle=`rgba(180,225,250,${s})`,e.lineWidth=1+Math.random()*2.5,e.beginPath(),e.moveTo(Math.random()*512,o),e.quadraticCurveTo(Math.random()*512,o+5,Math.random()*512,o),e.stroke()}for(let a=0;a<20;a++){const o=40+Math.random()*420,s=Math.random()*512,r=10+Math.random()*55;e.strokeStyle=`rgba(210,240,255,${.04+Math.random()*.07})`,e.lineWidth=2,e.beginPath(),e.ellipse(s,o,r,r*.18,0,0,Math.PI*2),e.stroke()}const n=Da(i);return n.wrapS=n.wrapT=Bi,n.repeat.set(4,4),n}function zg(){const[i,e]=Ia(128,128);e.translate(64,64);const t=e.createRadialGradient(0,0,4,0,0,62);t.addColorStop(0,"rgba(255,255,255,.3)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(0,0,62,0,Math.PI*2),e.fill();for(let a=0;a<6;a++){e.save(),e.rotate(a/6*Math.PI*2);const o=e.createRadialGradient(0,-18,2,0,-18,24);o.addColorStop(0,"rgba(255,255,255,.98)"),o.addColorStop(.7,"rgba(240,247,255,.9)"),o.addColorStop(1,"rgba(210,235,255,0)"),e.fillStyle=o,e.beginPath(),e.ellipse(0,-22,13,24,0,0,Math.PI*2),e.fill(),e.restore()}const n=e.createRadialGradient(0,0,0,0,0,13);return n.addColorStop(0,"#fff8d0"),n.addColorStop(.5,"#ffd166"),n.addColorStop(1,"rgba(255,190,60,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,13,0,Math.PI*2),e.fill(),Da(i)}function Gg(){const[i,e]=Ia(256,128);for(let t=0;t<10;t++){const n=40+Math.random()*176,a=45+Math.random()*40,o=24+Math.random()*46,s=e.createRadialGradient(n,a,1,n,a,o);s.addColorStop(0,"rgba(40,66,95,.6)"),s.addColorStop(.55,"rgba(24,44,68,.35)"),s.addColorStop(1,"rgba(16,30,50,0)"),e.fillStyle=s,e.beginPath(),e.arc(n,a,o,0,Math.PI*2),e.fill()}return Da(i)}function Hg(){const[i,e]=Ia(256,256);e.translate(128,128);const t=e.createRadialGradient(0,0,0,0,0,124);t.addColorStop(0,"rgba(255,244,190,.9)"),t.addColorStop(.3,"rgba(255,210,105,.42)"),t.addColorStop(1,"rgba(255,190,80,0)"),e.fillStyle=t,e.beginPath(),e.arc(0,0,124,0,Math.PI*2),e.fill(),e.fillStyle="rgba(255,248,215,.98)",e.shadowColor="#ffd166",e.shadowBlur=26,e.beginPath();for(let n=0;n<8;n++){const a=n/8*Math.PI*2,o=n%2===0?92:23;e.lineTo(Math.cos(a-Math.PI/2)*o,Math.sin(a-Math.PI/2)*o)}return e.closePath(),e.fill(),e.shadowBlur=0,e.fillStyle="#fff9e0",e.beginPath(),e.arc(0,0,15,0,Math.PI*2),e.fill(),Da(i)}function Vg(){const[i,e]=Ia(128,128),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.2,"rgba(255,255,255,.7)"),t.addColorStop(.6,"rgba(255,255,255,.15)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Da(i)}function Wg({scene:i,camera:e,lanes:t,stage:n,TEX:a}){const o=new Zt;o.name="intentionStage",o.visible=!1,i.add(o);const s={sky:Og(),ocean:Bg(),flower:zg(),cloud:Gg(),star:Hg(),glow:Vg()},r={world:0,void:0,flowers:0,pillars:0,halo:0,memory:0,bright:0,glitch:0,active:!1,phase:"off",portrait:!1},l={world:0,void:0,flowers:0,pillars:0,halo:0,memory:0,bright:0},c={off:{},preview:{world:.72,void:.3,flowers:.55,bright:.5},void:{world:0,void:1,flowers:0,bright:.35},ocean:{world:1,void:.42,flowers:.58,bright:.55},spin:{world:1,void:.34,flowers:.55,bright:.5},field:{world:1,void:.34,flowers:.62,bright:.55},pillars:{world:1,void:.3,flowers:.68,pillars:1,bright:.68},halo:{world:1,void:.26,flowers:.7,pillars:1,halo:1,bright:.74},dark:{world:.16,void:.5,flowers:.12,pillars:.5,halo:.15,bright:.25},guilt:{world:0,void:.06,flowers:0,pillars:0,halo:0,bright:.2},offbeat:{world:0,void:.22,flowers:0,bright:.25},fastbeat:{world:0,void:.22,flowers:0,bright:.25},ocean2:{world:.92,void:.3,flowers:.7,pillars:.25,halo:.18,bright:.55},memory:{world:.95,void:.3,flowers:.8,pillars:.3,halo:.22,memory:1,bright:.62},static:{world:.9,void:.38,flowers:.6,pillars:.3,halo:.16,memory:.4,bright:.5},determined:{world:1,void:.2,flowers:1.12,pillars:.6,halo:.5,bright:1},white:{world:.2,void:.1,flowers:.2,bright:1},fake:{world:0,void:.16,flowers:0,bright:.2},dawn:{world:1,void:.22,flowers:1.5,pillars:.12,halo:.8,memory:.2,bright:1.15}},f=new qt({map:s.sky,side:mn,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),u=new It(new Ka(190,32,18),f);u.renderOrder=-30,o.add(u);const h=new qt({map:s.ocean,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),p=new It(new On(340,260),h);p.rotation.x=-Math.PI/2,p.position.set(0,-5.6,-72),p.renderOrder=-20,o.add(p);const y=[];for(let se=0;se<16;se++){const Se=new gt({map:s.cloud,color:se%3?8101050:4020856,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),_=new _t(Se),g=se%2?1:-1;_.position.set(g*(16+Math.random()*74),6+Math.random()*30,-62-Math.random()*80);const O=30+Math.random()*62;_.scale.set(O,O*.4,1),_.renderOrder=-18,o.add(_),y.push({sprite:_,mat:Se,base:.24+Math.random()*.24,phase:Math.random()*6.28,x:_.position.x,sx:O,sy:O*.4})}const x=340,m=new Float32Array(x*3),d=new Float32Array(x*3),T=new Float32Array(x*3),E=new Float32Array(x),S=[new He(16777215),new He(16771572),new He(16773832),new He(14216447)];for(let se=0;se<x;se++){const Se=(Math.random()-.5)*140,_=-12-Math.random()*118,g=-5.32+Math.random()*.22;T[se*3]=Se,T[se*3+1]=g,T[se*3+2]=_,m[se*3]=Se,m[se*3+1]=g,m[se*3+2]=_;const O=S[se%S.length];d[se*3]=O.r,d[se*3+1]=O.g,d[se*3+2]=O.b,E[se]=Math.random()*6.28}const P=new Xt;P.setAttribute("position",new nn(m,3)),P.setAttribute("color",new nn(d,3));const C=new oo({size:1.15,map:s.flower,vertexColors:!0,transparent:!0,opacity:0,depthWrite:!1,blending:bn,sizeAttenuation:!0,fog:!1}),D=new mr(P,C);D.renderOrder=-12,o.add(D);const R=new Zt;let w=-27;R.position.set(0,-5.4,w),o.add(R);const b=new qt({color:16762186,transparent:!0,opacity:0,fog:!1}),U=new qt({color:16773052,transparent:!0,opacity:0,fog:!1}),H=new qt({color:7031322,transparent:!0,opacity:0,fog:!1}),Q=[b,U,H];function re(se,Se,_,g,O,J=12){const te=new It(new ha(Se,_,g,J),se);return te.position.y=O,R.add(te),te}re(H,2.8,3.5,.7,.35),re(b,2.2,2.8,.5,.9),re(H,1.25,2,.4,1.32),re(b,.42,.62,6.6,4.8),re(U,.8,.5,.5,8.2);const ie=new It(new Wi(13.6,.34,.44),b);ie.position.y=8.7,R.add(ie);const oe=new It(new Ka(.42,10,8),U);oe.position.y=8.7,R.add(oe);for(const se of[-1,1]){const Se=new It(new Ka(.3,8,6),U);Se.position.set(se*6.7,8.7,0),R.add(Se);const _=[];for(let Z=0;Z<=8;Z++){const j=Z/8;_.push(new k(se*6.7,8.7-j*4.4+Math.sin(j*Math.PI)*.42,0))}const g=new Hf(new Xt().setFromPoints(_),new Al({color:16765286,transparent:!0,opacity:0,fog:!1}));R.add(g),Q.push(g.material);const O=new It(new ha(2.2,1.7,.26,20),b);O.position.set(se*6.7,4.05,0),R.add(O);const J=new It(new ro(2.12,.09,6,28),U);J.rotation.x=Math.PI/2,J.position.set(se*6.7,4.18,0),R.add(J);const te=new It(new _r(.52,0),U);te.position.set(se*6.7,4.5,0),R.add(te)}const ce=new Zt;ce.position.set(0,9.9,0),R.add(ce);const ee=new gt({map:s.star,color:16770976,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),xe=new _t(ee);xe.scale.set(4.2,4.2,1),xe.renderOrder=2,ce.add(xe);const we=[ee];for(let se=0;se<3;se++){const Se=new It(new ro(2.7+se*1.05,.055,4,64),new qt({color:se?16765286:16774095,transparent:!0,opacity:0,fog:!1}));Se.rotation.set(Math.PI/2+se*.32,se*.6,se*.2),ce.add(Se),we.push(Se.material)}const Fe=new gt({map:s.glow,color:16765286,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),ot=new _t(Fe);ot.scale.set(14,14,1),ot.renderOrder=1,ce.add(ot),we.push(Fe);const xt=[{x:0,z:-58,h:25,w:2.1,hue:3497866},{x:-34,z:-36,h:17,w:1.8,hue:2706546},{x:34,z:-36,h:21,w:1.9,hue:2904700},{x:0,z:-14,h:10,w:1.5,hue:2112862}],Qe=[];for(const se of xt){const Se=new Zt;Se.position.set(se.x,-5.6,se.z),o.add(Se);const _=new qt({color:se.hue,transparent:!0,opacity:0,fog:!1}),g=new qt({color:10475775,transparent:!0,opacity:0,fog:!1}),O=new It(new ha(se.w*.83,se.w,1,8,1,!0),_);O.position.y=.5,Se.add(O);const J=new It(new ha(se.w*.86,se.w*1.03,1,8,1,!0),g);J.position.y=.5,Se.add(J);const te=new gt({map:s.glow,color:12576511,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),Z=new _t(te);Z.scale.set(4.5,4.5,1),Z.position.y=1,Se.add(Z),Qe.push({group:Se,body:O,edge:J,cap:Z,mat:_,edgeMat:g,capMat:te,def:se,h:0,flash:0,grow:0})}const ht=420,ae=new Float32Array(ht*3),fe=new Float32Array(ht*3),Ie=new Float32Array(ht);for(let se=0;se<ht;se++){const Se=(Math.random()-.5)*64,_=-3+Math.random()*24,g=-26+Math.random()*42;fe[se*3]=Se,fe[se*3+1]=_,fe[se*3+2]=g,ae[se*3]=Se,ae[se*3+1]=_,ae[se*3+2]=g,Ie[se]=Math.random()*6.28}const $e=new Xt;$e.setAttribute("position",new nn(ae,3));const Oe=new oo({size:.34,map:s.glow,color:16777215,transparent:!0,opacity:0,depthWrite:!1,blending:Mt,sizeAttenuation:!0,fog:!1}),ut=new mr($e,Oe);ut.renderOrder=6,o.add(ut);const Ot=[];for(let se=0;se<18;se++){const Se=new gt({map:s.glow,color:se%3?16736127:16765286,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),_=new _t(Se);_.scale.set(.8+Math.random()*1.8,.8+Math.random()*1.8,1),_.renderOrder=-8,o.add(_),Ot.push({sprite:_,mat:Se,x:(Math.random()-.5)*18,z:-20-Math.random()*28,phase:Math.random()*6.28,speed:.5+Math.random()*.7})}let A=0,rt=0;function et(se){r.phase=se;const Se=c[se]||c.off;l.world=Se.world??0,l.void=Se.void??0,l.flowers=Se.flowers??0,l.pillars=Se.pillars??0,l.halo=Se.halo??0,l.memory=Se.memory??0,l.bright=Se.bright??0,(se==="guilt"||se==="fake"||se==="offbeat"||se==="fastbeat")&&(r.world=Math.min(r.world,l.world+.01),r.flowers=Math.min(r.flowers,l.flowers+.01),r.pillars=Math.min(r.pillars,l.pillars+.01),r.halo=Math.min(r.halo,l.halo+.01),r.memory=Math.min(r.memory,l.memory+.01))}function je(se){if(r.active=!!se,o.visible=!!se,!se){r.phase="off";for(const Se of Object.keys(l))l[Se]=0}}function Be(se=1){rt=Math.max(rt,Math.min(1.4,se));for(const Se of Qe)Se.flash=Math.max(Se.flash,se*.8)}function st(se=1){r.glitch=Math.min(2.2,r.glitch+se)}function De(se,Se){if(!r.active)return;A=Se,rt*=Math.exp(-se*4.2),r.glitch*=Math.exp(-se*4.8);for(const j of Object.keys(l))r[j]+=(l[j]-r[j])*(1-Math.exp(-se*2.6));const _=r.world,g=r.void,O=r.glitch;o.visible=_>.012||g>.012||r.flowers>.01,f.opacity=_*(.9+r.bright*.08),h.opacity=_*.94,s.ocean.offset.x=A*.005%1,s.ocean.offset.y=A*.013%1,p.position.x=Math.sin(A*.04)*2,R.position.y=-5.4+Math.sin(A*.38)*.08,R.rotation.z=Math.sin(A*.31)*.012+rt*.006,ie.rotation.z=Math.sin(A*.5)*.025+Math.sin(A*.17)*.012,ie.rotation.y=Math.sin(A*.2)*.03,oe.scale.setScalar(1+rt*.18),ce.rotation.y+=se*(1.1+rt*2.2),ce.rotation.z+=se*.45,ce.rotation.x=Math.sin(A*.3)*.12;const J=r.halo;xe.scale.set(4.2*(1+rt*.16),4.2*(1+rt*.16),1),ee.opacity=(_*.55+J*.4)*(.85+rt*.15),we[1].opacity=J*(.5+rt*.25),we[2].opacity=J*(.32+rt*.2),we[3].opacity=J*(.2+rt*.14),we[4].opacity=J*(.07+rt*.07);for(const j of Q)j===b?j.opacity=_*.96:j===U?j.opacity=_*.92:j===H?j.opacity=_*.8:j.opacity=_*.55;for(const j of we);for(const j of y)j.sprite.position.x=j.x+Math.sin(A*.035+j.phase)*3.2,j.sprite.position.y+=Math.sin(A*.055+j.phase)*se*.12,j.mat.opacity=_*j.base*(.85+.15*Math.sin(A*.2+j.phase));const te=Math.min(1.8,r.flowers);C.opacity=_*Math.min(1,.18+te*.68),C.size=1.05+te*.2,P.setDrawRange(0,Math.min(x,Math.floor(x*(.62+Math.min(.5,te*.36)))));for(let j=0;j<x;j++){const le=E[j],Le=T[j*3],Ue=T[j*3+1]+Math.sin(A*.75+le)*.16+Math.sin(A*.27+le*2.1)*.1,de=T[j*3+2];m[j*3]=Le+Math.sin(A*.19+le)*.45,m[j*3+1]=Ue+te*.1,m[j*3+2]=de}P.attributes.position.needsUpdate=!0;for(const j of Qe){const le=r.pillars*(1+Math.sin(A*.33+j.def.x*.04)*.012);j.grow+=(le-j.grow)*(1-Math.exp(-se*1.7)),j.flash*=Math.exp(-se*2.4);const Le=Math.max(.001,j.def.h*j.grow);j.h=Le,j.body.scale.y=Le,j.edge.scale.y=Le,j.body.position.y=Le*.5,j.edge.position.y=Le*.5,j.cap.position.y=Le+.4,j.cap.scale.setScalar((2.6+rt*1.5)*Math.min(1,j.grow*2)),j.mat.opacity=_*(.3+j.flash*.5),j.edgeMat.opacity=_*(.14+j.flash*.45),j.capMat.opacity=_*(.04+j.flash*.2+rt*.05),j.mat.color.set(j.def.hue).lerp(new He(16765286),Math.min(1,j.flash)),j.edgeMat.color.set(10475775).lerp(new He(16773568),Math.min(1,j.flash))}const Z=r.memory;for(let j=0;j<Ot.length;j++){const le=Ot[j],Ue=-6+((A*le.speed+le.phase*3.1)%24+24)%24*1.15;le.sprite.position.set(le.x+Math.sin(A*.24+le.phase)*1.8,Ue,le.z+Math.cos(A*.18+le.phase)*1.2);const de=Math.sin(Math.min(1,Math.max(0,Ue/20))*Math.PI);le.mat.opacity=Math.max(0,Z*.5*de*(.7+.3*Math.sin(A*3+le.phase))),le.sprite.visible=le.mat.opacity>.004}Oe.opacity=Math.max(g,_*.26)*.84,Oe.size=.3+g*.08;for(let j=0;j<ht;j++){const le=Ie[j];ae[j*3]=fe[j*3]+Math.sin(A*.11+le)*1.7,ae[j*3+1]=fe[j*3+1]+Math.sin(A*.17+le*1.7)*1.3+(A*(.16+j%5*.035)+le*2.4)%22-8,ae[j*3+2]=fe[j*3+2]+Math.cos(A*.09+le)*1.3}if($e.attributes.position.needsUpdate=!0,O>.005){const j=O*.12;R.position.x=(Math.random()-.5)*j,R.position.z=w+(Math.random()-.5)*j;for(const le of y)le.sprite.position.x+=(Math.random()-.5)*j*.4;u.rotation.z=(Math.random()-.5)*O*.01}else R.position.x*=.92,R.position.z=w+(R.position.z-w)*.92,u.rotation.z*=.9}function tt(se){r.portrait=se;const Se=se?.92:1.35;R.scale.setScalar(Se),w=se?-36:-27,R.position.z=w,R.position.y=-5.4,u.scale.setScalar(se?1.15:1),Qe[0].group.position.z=se?-64:-58,Qe[1].group.position.x=se?-27:-34,Qe[2].group.position.x=se?27:34,ce.position.y=se?9.4:9.9;for(const _ of y){const g=se?.82:1;_.sprite.scale.set(_.sx*g,_.sy*g,1)}}return{root:o,setPhase:et,setActive:je,update:De,beat:Be,glitch:st,layout:tt,level:r}}const da=["#4ff2ff","#43d8ff","#6aa8ff","#9a86ff","#c477ff","#ff79dc","#ff7fb5","#ffb06e"],Qc=Array.from({length:8},()=>"#ffffff"),jo=["#ff2d55","#ff5e78","#ff8a3d","#ffd166","#ffd166","#ff8a3d","#ff5e78","#ff2d55"],Jo=1.75,Qo=.015;function jt(i,e){const t=document.createElement("canvas");return t.width=i,t.height=e,[t,t.getContext("2d")]}function Jt(i){const e=new Vf(i);return e.colorSpace=hn,e.anisotropy=4,e}function Xg(){const[i,e]=jt(128,128),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.22,"rgba(255,255,255,.75)"),t.addColorStop(.55,"rgba(255,255,255,.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),Jt(i)}function Yg(){const[i,e]=jt(512,512),t=256;e.translate(t,t);const n=e.createRadialGradient(0,0,110,0,0,250);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.55,"rgba(255,255,255,.03)"),n.addColorStop(.76,"rgba(255,255,255,.14)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,252,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,255,255,.55)",e.lineWidth=4,e.setLineDash([32,30]),e.shadowColor="#fff",e.shadowBlur=14,e.beginPath(),e.arc(0,0,227,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.98)",e.lineWidth=15,e.shadowColor="#fff",e.shadowBlur=26,e.beginPath(),e.arc(0,0,174,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.42)",e.lineWidth=3,e.beginPath(),e.arc(0,0,126,0,Math.PI*2),e.stroke(),e.restore();for(let a=0;a<4;a++)e.save(),e.rotate(a*Math.PI/2),e.strokeStyle="rgba(255,255,255,.9)",e.lineWidth=5,e.shadowColor="#fff",e.shadowBlur=12,e.beginPath(),e.moveTo(0,-226),e.lineTo(0,-196),e.stroke(),e.restore();return e.save(),e.fillStyle="rgba(255,255,255,.85)",e.shadowColor="#fff",e.shadowBlur=20,e.beginPath(),e.arc(0,0,5,0,Math.PI*2),e.fill(),e.restore(),Jt(i)}function Zg(){const[i,e]=jt(96,1024),t=e.createLinearGradient(0,1024,0,0);return t.addColorStop(0,"rgba(255,255,255,.95)"),t.addColorStop(.35,"rgba(255,255,255,.55)"),t.addColorStop(.78,"rgba(255,255,255,.18)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.strokeStyle=t,e.lineWidth=7,e.shadowColor="#fff",e.shadowBlur=22,e.beginPath(),e.moveTo(48,1024),e.lineTo(48,6),e.stroke(),e.shadowBlur=6,e.lineWidth=2,e.strokeStyle="rgba(255,255,255,.95)",e.beginPath(),e.moveTo(48,1024),e.lineTo(48,6),e.stroke(),Jt(i)}function qg(){const[i,e]=jt(192,1024),t=e.createLinearGradient(0,1024,0,0);t.addColorStop(0,"rgba(255,255,255,.34)"),t.addColorStop(.5,"rgba(255,255,255,.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,192,1024);const n=e.createLinearGradient(0,0,192,0);return n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.32,"rgba(255,255,255,.5)"),n.addColorStop(.5,"rgba(255,255,255,1)"),n.addColorStop(.68,"rgba(255,255,255,.5)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.globalCompositeOperation="destination-in",e.fillStyle=n,e.fillRect(0,0,192,1024),Jt(i)}function Kg(){const[i,e]=jt(256,256),t=128;e.translate(t,t);const n=e.createRadialGradient(0,0,18,0,0,124);n.addColorStop(0,"rgba(255,255,255,.62)"),n.addColorStop(.45,"rgba(255,255,255,.2)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,124,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,255,255,.98)",e.lineWidth=17,e.shadowColor="#fff",e.shadowBlur=28,e.beginPath(),e.arc(0,0,84,0,Math.PI*2),e.stroke(),e.restore(),e.save(),e.strokeStyle="rgba(255,255,255,.5)",e.lineWidth=4,e.shadowColor="#fff",e.shadowBlur=10,e.beginPath(),e.arc(0,0,56,0,Math.PI*2),e.stroke(),e.restore();const a=e.createRadialGradient(0,0,0,0,0,30);a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.55,"rgba(255,255,255,.75)"),a.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,30,0,Math.PI*2),e.fill();for(let o=0;o<4;o++)e.save(),e.rotate(o*Math.PI/2),e.strokeStyle="rgba(255,255,255,.9)",e.lineWidth=5,e.shadowColor="#fff",e.shadowBlur=12,e.beginPath(),e.moveTo(0,-122),e.lineTo(0,-100),e.stroke(),e.restore();return Jt(i)}function $g(){const[i,e]=jt(128,512),t=e.createLinearGradient(0,0,128,0);t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.22,"rgba(255,255,255,.35)"),t.addColorStop(.5,"rgba(255,255,255,.95)"),t.addColorStop(.78,"rgba(255,255,255,.35)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,512),e.fillStyle="rgba(255,255,255,.95)",e.shadowColor="#fff",e.shadowBlur=18,e.fillRect(48,0,32,512);const n=e.createLinearGradient(0,0,0,512);return n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.08,"rgba(255,255,255,1)"),n.addColorStop(.92,"rgba(255,255,255,1)"),n.addColorStop(1,"rgba(255,255,255,0)"),e.globalCompositeOperation="destination-in",e.fillStyle=n,e.fillRect(0,0,128,512),Jt(i)}function jg(){const[i,e]=jt(1024,128),t=e.createLinearGradient(0,0,1024,0);return t.addColorStop(0,"rgba(255,255,255,0)"),t.addColorStop(.06,"rgba(255,255,255,.4)"),t.addColorStop(.5,"rgba(255,255,255,1)"),t.addColorStop(.94,"rgba(255,255,255,.4)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.strokeStyle=t,e.lineWidth=7,e.shadowColor="#fff",e.shadowBlur=26,e.beginPath(),e.moveTo(0,64),e.lineTo(1024,64),e.stroke(),e.lineWidth=2,e.shadowBlur=6,e.beginPath(),e.moveTo(0,64),e.lineTo(1024,64),e.stroke(),Jt(i)}function ef(i,e){const[t,n]=jt(2048,512);let a=i>>>0;const o=()=>(a=a*1664525+1013904223>>>0,a/4294967296);n.clearRect(0,0,2048,512);const s=n.createLinearGradient(0,150,0,512);s.addColorStop(0,"rgba(80,190,255,0)"),s.addColorStop(.7,"rgba(60,150,255,.09)"),s.addColorStop(1,"rgba(255,110,200,.08)"),n.fillStyle=s,n.fillRect(0,0,2048,512);let r=-40;for(;r<2088;){const c=24+Math.floor(o()*74),f=90+Math.floor(o()*300),u=512-f;n.save(),n.fillStyle="rgba(3,8,24,.82)",n.fillRect(r,u,c,f),n.strokeStyle=o()<.28?"rgba(255,120,200,.7)":"rgba(70,210,255,.55)",n.lineWidth=2,n.shadowColor=n.strokeStyle,n.shadowBlur=10,n.strokeRect(r+1,u+1,c-2,f-2),n.shadowBlur=0;const h=Math.max(1,Math.floor((c-10)/12)),p=Math.max(2,Math.floor((f-16)/17));for(let y=0;y<p;y++)for(let x=0;x<h;x++)o()<.64||(n.fillStyle=o()<.22?"rgba(255,205,130,.9)":o()<.5?"rgba(120,235,255,.85)":"rgba(255,120,195,.8)",n.fillRect(r+6+x*12,u+9+y*17,4,6));o()<.45&&(n.strokeStyle="rgba(150,225,255,.65)",n.lineWidth=1,n.beginPath(),n.moveTo(r+c*.5,u),n.lineTo(r+c*.5,u-18-o()*34),n.stroke(),n.fillStyle="rgba(255,90,150,.95)",n.fillRect(r+c*.5-1.5,u-22-o()*30,3,3)),n.restore(),r+=c+3+Math.floor(o()*11)}if(e){const c=n.createLinearGradient(0,360,0,512);c.addColorStop(0,"rgba(255,140,90,0)"),c.addColorStop(1,"rgba(255,140,90,.12)"),n.fillStyle=c,n.fillRect(0,300,2048,212)}const l=Jt(t);return l.wrapS=Bi,l.wrapT=vi,l}function Jg(){const[i,e]=jt(1024,1024);e.translate(512,512);const t=e.createRadialGradient(0,0,60,0,0,505);t.addColorStop(0,"rgba(255,255,255,.03)"),t.addColorStop(.55,"rgba(255,255,255,.01)"),t.addColorStop(.82,"rgba(255,255,255,.08)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(0,0,505,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,255,255,.5)",e.lineWidth=5,e.shadowColor="#fff",e.shadowBlur=28,e.beginPath(),e.arc(0,0,470,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(255,255,255,.2)",e.lineWidth=2,e.beginPath(),e.arc(0,0,440,0,Math.PI*2),e.stroke(),e.strokeStyle="rgba(255,255,255,.13)",e.lineWidth=2,e.setLineDash([7,18]),e.beginPath(),e.arc(0,0,344,0,Math.PI*2),e.stroke(),e.restore();for(let n=0;n<60;n++){const a=n%5===0;e.save(),e.rotate(n*Math.PI/30),e.strokeStyle=a?"rgba(255,255,255,.92)":"rgba(255,255,255,.3)",e.lineWidth=a?7:2,e.shadowColor="#fff",e.shadowBlur=a?18:7,e.beginPath(),e.moveTo(0,-468),e.lineTo(0,-(a?414:444)),e.stroke(),e.restore()}for(let n=0;n<4;n++)e.save(),e.rotate(n*Math.PI/2),e.fillStyle="rgba(255,255,255,.82)",e.shadowColor="#fff",e.shadowBlur=22,e.beginPath(),e.moveTo(0,-500),e.lineTo(13,-516),e.lineTo(0,-532),e.lineTo(-13,-516),e.closePath(),e.fill(),e.restore();return Jt(i)}function Qg(){const[i,e]=jt(512,512);e.translate(256,256);const t=e.createRadialGradient(0,0,40,0,0,250);t.addColorStop(0,"rgba(255,255,255,.05)"),t.addColorStop(.7,"rgba(255,255,255,.02)"),t.addColorStop(.92,"rgba(255,255,255,.16)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.beginPath(),e.arc(0,0,250,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255,255,255,.42)",e.lineWidth=2,e.beginPath(),e.arc(0,0,206,0,Math.PI*2),e.stroke();for(let n=0;n<12;n++){const a=n%3===0;e.save(),e.rotate(n*Math.PI/6),e.strokeStyle=a?"rgba(255,255,255,.85)":"rgba(255,255,255,.3)",e.lineWidth=a?4:1.5,e.beginPath(),e.moveTo(0,-204),e.lineTo(0,a?-172:-188),e.stroke(),e.restore()}return e.save(),e.shadowColor="#fff",e.shadowBlur=22,e.fillStyle="rgba(255,255,255,.95)",e.beginPath(),e.moveTo(-7,-16),e.lineTo(0,-196),e.lineTo(7,-16),e.closePath(),e.fill(),e.beginPath(),e.arc(0,0,11,0,Math.PI*2),e.fill(),e.restore(),Jt(i)}function e2(){const[i,e]=jt(128,1024),t=e.createLinearGradient(0,1024,0,0);return t.addColorStop(0,"rgba(255,255,255,.6)"),t.addColorStop(.5,"rgba(255,255,255,.95)"),t.addColorStop(.9,"rgba(255,255,255,1)"),t.addColorStop(1,"rgba(255,255,255,.2)"),e.fillStyle=t,e.shadowColor="#fff",e.shadowBlur=22,e.beginPath(),e.moveTo(47,1010),e.lineTo(58,120),e.lineTo(64,34),e.lineTo(70,120),e.lineTo(81,1010),e.closePath(),e.fill(),e.shadowBlur=28,e.fillStyle="rgba(255,255,255,1)",e.beginPath(),e.arc(64,72,15,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(64,942,20,0,Math.PI*2),e.fill(),Jt(i)}function t2(){const[i,e]=jt(256,256);return e.translate(128,128),e.shadowColor="#fff",e.shadowBlur=26,e.fillStyle="rgba(255,255,255,.98)",e.save(),e.rotate(-.22),e.beginPath(),e.ellipse(-8,56,30,21,-.18,0,Math.PI*2),e.fill(),e.fillRect(16,-84,8,140),e.beginPath(),e.moveTo(24,-84),e.bezierCurveTo(82,-62,86,6,38,32),e.bezierCurveTo(68,-6,56,-50,24,-60),e.closePath(),e.fill(),e.restore(),Jt(i)}function n2(){const[i,e]=jt(64,1024),t=e.createLinearGradient(0,0,64,0);return t.addColorStop(0,"rgba(255,255,255,.06)"),t.addColorStop(.38,"rgba(255,255,255,.62)"),t.addColorStop(.52,"rgba(255,255,255,1)"),t.addColorStop(.66,"rgba(255,255,255,.58)"),t.addColorStop(1,"rgba(255,255,255,.06)"),e.fillStyle=t,e.shadowColor="#fff",e.shadowBlur=12,e.fillRect(27,26,10,972),e.shadowBlur=22,e.beginPath(),e.arc(32,44,15,0,Math.PI*2),e.fill(),e.beginPath(),e.arc(32,982,25,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(255,255,255,.8)",e.lineWidth=3,e.beginPath(),e.arc(32,982,25,0,Math.PI*2),e.stroke(),Jt(i)}function tf(i=1){const[e,t]=jt(256,512);let n=i>>>0;const a=()=>(n=n*1664525+1013904223>>>0,n/4294967296);t.clearRect(0,0,256,512),t.save(),t.beginPath(),t.moveTo(12,512),t.lineTo(12,206),t.bezierCurveTo(18,104,82,38,128,10),t.bezierCurveTo(174,38,238,104,244,206),t.lineTo(244,512),t.closePath(),t.clip(),t.fillStyle="rgba(4,5,14,.96)",t.fillRect(0,0,256,512);const o=["#ff4d6d","#ff9a5e","#ffd27a","#4ff2ff","#9b6bff","#ff6fb5"];for(let r=0;r<4;r++)for(let l=0;l<8;l++){const c=o[(r+l+i)%o.length];t.globalAlpha=.32+a()*.28,t.fillStyle=c;const f=20+r*56+l%2*12,u=160+l*44;t.beginPath(),t.moveTo(f+22,u),t.lineTo(f+44,u+20),t.lineTo(f+22,u+40),t.lineTo(f,u+20),t.closePath(),t.fill()}const s=t.createLinearGradient(0,40,0,512);s.addColorStop(0,"rgba(255,240,190,.9)"),s.addColorStop(.35,"rgba(255,150,120,.55)"),s.addColorStop(1,"rgba(120,70,190,.32)"),t.globalAlpha=1,t.fillStyle=s,t.beginPath(),t.moveTo(102,512),t.lineTo(102,190),t.quadraticCurveTo(108,118,128,92),t.quadraticCurveTo(148,118,154,190),t.lineTo(154,512),t.closePath(),t.fill(),t.strokeStyle="rgba(8,8,18,.92)",t.lineWidth=7;for(let r=1;r<4;r++)t.beginPath(),t.moveTo(20+r*56,150),t.lineTo(20+r*56,512),t.stroke();for(let r=1;r<8;r++)t.beginPath(),t.moveTo(14,160+r*44),t.lineTo(242,160+r*44),t.stroke();return t.lineWidth=5,t.beginPath(),t.arc(128,182,58,0,Math.PI*2),t.stroke(),t.beginPath(),t.arc(128,182,30,0,Math.PI*2),t.stroke(),t.restore(),t.save(),t.strokeStyle="rgba(255,226,160,.92)",t.lineWidth=7,t.shadowColor="#ffd27a",t.shadowBlur=18,t.beginPath(),t.moveTo(12,512),t.lineTo(12,206),t.bezierCurveTo(18,104,82,38,128,10),t.bezierCurveTo(174,38,238,104,244,206),t.lineTo(244,512),t.stroke(),t.restore(),Jt(e)}function i2(){const[i,e]=jt(1024,1024);e.translate(512,512);const t=["#ff4d6d","#ffb45e","#ffd27a","#4ff2ff","#9b6bff","#ff6fb5"],n=e.createRadialGradient(0,0,260,0,0,500);n.addColorStop(0,"rgba(255,255,255,0)"),n.addColorStop(.82,"rgba(255,210,122,.12)"),n.addColorStop(1,"rgba(255,210,122,0)"),e.fillStyle=n,e.beginPath(),e.arc(0,0,500,0,Math.PI*2),e.fill();for(let o=0;o<12;o++){e.save(),e.rotate(o*Math.PI/6);const s=e.createRadialGradient(0,-210,20,0,-300,150);s.addColorStop(0,t[o%t.length]),s.addColorStop(.62,"rgba(255,235,190,.75)"),s.addColorStop(1,"rgba(20,12,40,0)"),e.fillStyle=s,e.beginPath(),e.moveTo(0,-118),e.bezierCurveTo(116,-206,96,-356,0,-414),e.bezierCurveTo(-96,-356,-116,-206,0,-118),e.closePath(),e.fill(),e.strokeStyle="rgba(10,8,20,.9)",e.lineWidth=7,e.stroke(),e.strokeStyle="rgba(255,226,160,.75)",e.lineWidth=3,e.beginPath(),e.moveTo(0,-148),e.quadraticCurveTo(50,-250,0,-380),e.stroke(),e.restore()}e.strokeStyle="rgba(255,226,160,.9)",e.shadowColor="#ffd27a",e.shadowBlur=18;for(const o of[414,286,168,82])e.lineWidth=o===414?12:7,e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.stroke();for(let o=0;o<24;o++)e.save(),e.rotate(o*Math.PI/12),e.fillStyle=t[o%t.length],e.shadowColor=t[o%t.length],e.shadowBlur=16,e.beginPath(),e.arc(0,-352,22,0,Math.PI*2),e.fill(),e.restore();const a=e.createRadialGradient(0,0,0,0,0,78);return a.addColorStop(0,"rgba(255,255,255,1)"),a.addColorStop(.4,"rgba(255,220,150,.8)"),a.addColorStop(1,"rgba(255,90,120,0)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,78,0,Math.PI*2),e.fill(),Jt(i)}function nf(i=1){const[e,t]=jt(512,512);let n=i>>>0;const a=()=>(n=n*1664525+1013904223>>>0,n/4294967296);t.fillStyle="#090711",t.fillRect(0,0,512,512);const o=8,s=5,r=512/s,l=512/o;for(let f=0;f<o;f++){const u=f%2*r*.5;for(let h=-1;h<=s;h++){const p=16+a()*14;t.fillStyle=`rgb(${Math.round(p+4)},${Math.round(p+1)},${Math.round(p+12)})`,t.fillRect(h*r+u+1.5,f*l+1.5,r-3,l-3),t.strokeStyle=`rgba(190,160,190,${.035+a()*.04})`,t.lineWidth=1,t.strokeRect(h*r+u+2,f*l+2,r-4,l-4)}}for(let f=0;f<4;f++){const u=t.createLinearGradient(f*128,0,f*128+128,0);u.addColorStop(0,"rgba(0,0,0,.34)"),u.addColorStop(.5,"rgba(0,0,0,0)"),u.addColorStop(1,"rgba(0,0,0,.22)"),t.fillStyle=u,t.fillRect(f*128,0,128,512)}for(let f=0;f<80;f++)t.fillStyle=`rgba(255,210,150,${.01+a()*.025})`,t.fillRect(a()*512,a()*512,1+a()*2,1+a()*2);const c=Jt(e);return c.wrapS=c.wrapT=Bi,c}function a2(){const[i,e]=jt(2048,2048),t=1024;e.translate(t,t);const n=["XII","I","II","III","IV","V","VI","VII","VIII","IX","X","XI"],a=e.createRadialGradient(0,0,80,0,0,980);a.addColorStop(0,"rgba(60,24,44,.18)"),a.addColorStop(.72,"rgba(18,8,26,.32)"),a.addColorStop(.95,"rgba(255,190,100,.1)"),a.addColorStop(1,"rgba(255,190,100,0)"),e.fillStyle=a,e.beginPath(),e.arc(0,0,980,0,Math.PI*2),e.fill(),e.save(),e.strokeStyle="rgba(255,226,170,.92)",e.shadowColor="#ffcf6e",e.shadowBlur=34;for(const[o,s]of[[944,10],[888,3],[720,3],[510,2],[300,2]])e.lineWidth=s,e.beginPath(),e.arc(0,0,o,0,Math.PI*2),e.stroke();e.restore();for(let o=0;o<60;o++){const s=o%5===0;e.save(),e.rotate(o*Math.PI/30),e.strokeStyle=s?"rgba(255,240,200,.95)":"rgba(255,210,130,.45)",e.lineWidth=s?13:4,e.shadowColor="#ffcf6e",e.shadowBlur=s?22:8,e.beginPath(),e.moveTo(0,-936),e.lineTo(0,-(s?836:892)),e.stroke(),e.restore()}e.save(),e.strokeStyle="rgba(255,210,130,.4)",e.lineWidth=4,e.shadowColor="#ffcf6e",e.shadowBlur=10;for(let o=0;o<24;o++)e.save(),e.rotate(o*Math.PI/12),e.beginPath(),e.moveTo(-86,-748),e.quadraticCurveTo(0,-880,86,-748),e.stroke(),e.restore();e.restore(),e.fillStyle="rgba(255,244,215,.97)",e.textAlign="center",e.textBaseline="middle",e.shadowColor="#ffcf6e",e.shadowBlur=30,e.font='700 148px Georgia, "Times New Roman", serif',n.forEach((o,s)=>{const r=s/12*Math.PI*2-Math.PI/2;e.save(),e.translate(Math.cos(r)*678,Math.sin(r)*678),e.rotate(r+Math.PI/2),e.fillText(o,0,0),e.restore()}),e.save(),e.strokeStyle="rgba(255,226,170,.7)",e.lineWidth=5,e.shadowColor="#ffcf6e",e.shadowBlur=22;for(let o=0;o<12;o++)e.save(),e.rotate(o*Math.PI/6),e.beginPath(),e.moveTo(0,-40),e.bezierCurveTo(90,-100,92,-236,0,-278),e.bezierCurveTo(-92,-236,-90,-100,0,-40),e.stroke(),e.restore();return e.beginPath(),e.arc(0,0,72,0,Math.PI*2),e.stroke(),e.restore(),Jt(i)}function o2(){const[i,e]=jt(1024,1024),t=e.createRadialGradient(512,512,80,512,512,512);t.addColorStop(0,"rgba(12,7,20,.99)"),t.addColorStop(.6,"rgba(10,6,18,.99)"),t.addColorStop(.8,"rgba(24,12,24,.96)"),t.addColorStop(.94,"rgba(88,43,34,.6)"),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.beginPath(),e.arc(512,512,512,0,Math.PI*2),e.fill();for(let n=0;n<90;n++){const a=Math.random()*Math.PI*2,o=180+Math.random()*300;e.fillStyle=`rgba(255,205,140,${.02+Math.random()*.05})`,e.beginPath(),e.arc(512+Math.cos(a)*o,512+Math.sin(a)*o,.6+Math.random()*1.8,0,Math.PI*2),e.fill()}return Jt(i)}function r2(){const[i,e]=jt(512,512);e.fillStyle="#07070d",e.fillRect(0,0,512,512),e.strokeStyle="rgba(160,140,120,.22)",e.lineWidth=3;for(let n=0;n<=4;n++)e.beginPath(),e.moveTo(n*128,0),e.lineTo(n*128,512),e.stroke(),e.beginPath(),e.moveTo(0,n*128),e.lineTo(512,n*128),e.stroke();e.strokeStyle="rgba(255,202,120,.14)",e.lineWidth=1;for(let n=-4;n<8;n++)e.beginPath(),e.moveTo(n*128,0),e.lineTo(n*128+512,512),e.stroke(),e.beginPath(),e.moveTo(n*128+512,0),e.lineTo(n*128,512),e.stroke();for(let n=0;n<70;n++)e.fillStyle=`rgba(255,220,150,${.015+Math.random()*.03})`,e.fillRect(Math.random()*512,Math.random()*512,1+Math.random()*3,1+Math.random()*3);const t=Jt(i);return t.wrapS=t.wrapT=Bi,t.repeat.set(6,14),t}function s2(i){const e=matchMedia("(pointer: coarse)").matches,t=new Cg({canvas:i,antialias:!e,powerPreference:"high-performance",alpha:!1,stencil:!1});t.setPixelRatio(Math.min(devicePixelRatio||1,e?1.45:1.8)),t.outputColorSpace=hn,t.toneMapping=gl,t.toneMappingExposure=1.06;const n=new Uh;n.background=new He(197387),n.fog=new El(197387,.0115);const a=new En(46,innerWidth/innerHeight,.1,240);a.position.set(0,6.7,17.2);const o=new Ug(t);o.addPass(new kg(n,a));const s=new Sa(new Je(innerWidth,innerHeight),1,.62,.22);o.addPass(s),o.addPass(new Fg);const r={glow:Xg(),ring:Yg(),line:Zg(),beam:qg(),note:Kg(),hold:$g(),hitline:jg(),cityFar:ef(2047066,!1),cityNear:ef(7023172,!0),clockFace:Jg(),clockHand:e2(),clockDial:Qg(),floatNote:t2(),pendulumRod:n2(),gothicA:tf(1),gothicB:tf(2),rose:i2(),bossClock:a2(),bossBack:o2(),bossFloor:r2(),naveSide:nf(3),naveEnd:nf(7)};r.naveSide.repeat.set(8,4),r.naveEnd.repeat.set(5,5);const l=new Zt;n.add(l);function c(v,F,B,W,Y){const he=new Float32Array(v*3);for(let Xe=0;Xe<v;Xe++){const ke=F+Math.random()*F*1.8,Dt=Math.random()*Math.PI*2,yt=Math.acos(2*Math.random()-1);he[Xe*3]=ke*Math.sin(yt)*Math.cos(Dt),he[Xe*3+1]=ke*Math.cos(yt)*.55+3,he[Xe*3+2]=ke*Math.sin(yt)*Math.sin(Dt)-20}const ge=new Xt;ge.setAttribute("position",new nn(he,3));const We=new oo({size:B,map:r.glow,color:W,transparent:!0,opacity:Y,depthWrite:!1,blending:Mt,sizeAttenuation:!0}),Ke=new mr(ge,We);return l.add(Ke),Ke}const f=c(1500,34,.32,10279167,.7),u=c(650,70,.55,12164351,.5),h=c(220,14,.09,8186367,.45);function p(v,F,B,W,Y,he){const ge=new gt({map:r.glow,color:Y,transparent:!0,opacity:he,depthWrite:!1,blending:Mt,fog:!1}),We=new _t(ge);return We.position.set(v,F,B),We.scale.set(W,W,1),l.add(We),We}const y=p(-16,9,-34,46,1789183,.18),x=p(18,1,-40,54,9314303,.14),m=p(0,12,-26,30,16723872,.07),d=new qt({color:4951551,wireframe:!0,transparent:!0,opacity:.055,fog:!1}),T=[];for(let v=0;v<3;v++){const F=new It(new ro(12+v*6.5,.045,3,120),d.clone());F.position.set(0,5,-26-v*7),F.rotation.set(.9+v*.16,v*.3,0),l.add(F),T.push(F)}const E=new Xh(90,45,1811928,1254490);E.position.y=-3.6,E.material.transparent=!0,E.material.opacity=.16,E.material.depthWrite=!1,l.add(E);const S=[];for(let v=0;v<14;v++){const F=v%2?new _r(.5+Math.random()*.8,0):new Cl(.5+Math.random()*.7,0),B=new qt({color:v%3?5823999:16740312,wireframe:!0,transparent:!0,opacity:.055+Math.random()*.05,fog:!1}),W=new It(F,B),Y=v%2?1:-1;W.position.set(Y*(9+Math.random()*10),.5+Math.random()*9,-6-Math.random()*14),W.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3),W.userData.spin=new k((Math.random()-.5)*.3,(Math.random()-.5)*.4,(Math.random()-.5)*.2),l.add(W),S.push(W)}const P=new Zt;P.position.z=-1,l.add(P);const C=[];function D(v,F,B,W,Y,he,ge){const We=new qt({map:v,color:ge,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),Ke=new It(new On(F,B),We);return Ke.position.set(W,Y,he),Ke.renderOrder=-2,P.add(Ke),C.push({mesh:Ke,mat:We,map:v,base:Y,speed:0}),Ke}D(r.cityFar,150,42,-24,19,-54,11068671),D(r.cityNear,118,34,38,12,-36,16761504),C[0].speed=.0028,C[1].speed=.0062,P.visible=!1;const R=new Zt;R.name="bossChurch",R.visible=!1,l.add(R);const w=[];function b(v,F=1){return v.transparent=!0,v.opacity=0,v.depthWrite=!1,w.push({mat:v,base:F}),v}const U=b(new qt({map:r.bossFloor,color:12167566,fog:!1}),.95),H=new It(new On(48,116),U);H.rotation.x=-Math.PI/2,H.position.set(0,-3.64,-26),H.renderOrder=-9,R.add(H);const Q=b(new qt({map:r.naveSide,color:16777215,fog:!1}),.9),re=new On(78,34);for(const v of[-1,1]){const F=new It(re,Q);F.position.set(v*11.62,10,-27),F.rotation.y=v<0?Math.PI/2:-Math.PI/2,F.renderOrder=-8,R.add(F)}const ie=b(new qt({map:r.naveEnd,color:3813448,fog:!1}),.96),oe=new It(new On(52,46),ie);oe.position.set(0,12,-66),oe.renderOrder=-8,R.add(oe);const ce=b(new qt({color:1314589,fog:!1}),1),ee=new Wi(1.35,18,1.35);for(let v=0;v<6;v++){const F=4-v*11;for(const B of[-1,1]){const W=new It(ee,ce);W.position.set(B*11.4,4.2,F),W.renderOrder=-7,R.add(W)}}const xe=new On(4.7,11.4);for(let v=0;v<5;v++){const F=-1.5-v*11.4;for(const B of[-1,1]){const W=b(new qt({map:v%2?r.gothicB:r.gothicA,color:B<0?16769723:16762058,transparent:!0,depthWrite:!1,blending:bn,fog:!1}),.96),Y=new It(xe,W);Y.position.set(B*11.34,7.4,F),Y.rotation.y=B<0?Math.PI/2:-Math.PI/2,Y.renderOrder=-5,R.add(Y)}}const we=b(new gt({map:r.rose,color:16773576,transparent:!0,depthWrite:!1,depthTest:!1,blending:bn,fog:!1}),.6),Fe=new _t(we);Fe.position.set(0,12.6,-56),Fe.scale.set(34,34,1),Fe.renderOrder=-4,R.add(Fe);const ot=b(new gt({map:r.glow,color:16731501,transparent:!0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),.045),xt=new _t(ot);xt.position.set(0,12.6,-57),xt.scale.set(44,44,1),xt.renderOrder=-5,R.add(xt);const Qe=new Zt;Qe.name="bossClock",Qe.position.set(0,10.4,-39),R.add(Qe);const ht=b(new gt({map:r.bossBack,color:16777215,transparent:!0,depthWrite:!1,depthTest:!1,blending:bn,fog:!1}),1),ae=new _t(ht);ae.scale.set(21.6,21.6,1),ae.position.z=-.06,ae.renderOrder=-3.5,Qe.add(ae);const fe=b(new gt({map:r.bossClock,color:16774096,transparent:!0,depthWrite:!1,depthTest:!1,blending:bn,fog:!1}),.74),Ie=new _t(fe);Ie.scale.set(21,21,1),Ie.renderOrder=-3,Qe.add(Ie);const $e=b(new gt({map:r.glow,color:16751198,transparent:!0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),.055),Oe=new _t($e);Oe.scale.set(29,29,1),Oe.renderOrder=-4,Qe.add(Oe);function ut(v,F,B,W){const Y=b(new gt({map:v,color:F,transparent:!0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),W),he=new _t(Y);return he.center.set(.5,.06),he.position.set(0,0,.4),he.scale.set(B,B*7.1,1),he.renderOrder=-2,Qe.add(he),he}const Ot=ut(r.clockHand,16765286,1.1,.72),A=ut(r.clockHand,16731501,.8,.86),rt=b(new gt({map:r.glow,color:16774096,transparent:!0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),.38),et=new _t(rt);et.scale.set(2.2,2.2,1),et.position.z=.5,et.renderOrder=-1,Qe.add(et);const je=[];for(let v=0;v<22;v++){const F=v%2?1:-1,B=2-Math.floor(v/2)*5.4,W=b(new gt({map:r.glow,color:16763514,transparent:!0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),.15),Y=new _t(W);Y.position.set(F*(3.6+v%3*1.6),-2.7+v%2*.5,B),Y.scale.set(.62,.62,1),Y.renderOrder=-4,R.add(Y),je.push({sprite:Y,mat:W,base:.15,phase:v*1.7})}const Be=[];for(let v=0;v<5;v++){const F=b(new gt({map:r.glow,color:v%2?10185727:16751198,transparent:!0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),.018),B=new _t(F);B.position.set((v%2?1:-1)*(6+v*2.2),1.6+v*1.3,-10-v*9),B.scale.set(16+v*3,9+v*1.5,1),B.renderOrder=-6,R.add(B),Be.push({sprite:B,mat:F,base:.018,phase:v*2.1})}const st=new Zt;n.add(st);const De=new Zt;st.add(De);const tt=new Zt;tt.renderOrder=5,st.add(tt);const se=new gt({map:r.hitline,color:10483199,transparent:!0,opacity:.8,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),Se=new _t(se);Se.position.set(0,.02,.25),Se.scale.set(13.2,.9,1),Se.renderOrder=2,st.add(Se);const _=[],g=[];for(let v=0;v<8;v++){const F=(v-3.5)*Jo;g.push(F);const B=Qo*F*F,W=new Zt;W.position.set(F,0,B),De.add(W);const Y=new He(da[v]),he=new gt({map:r.beam,color:Y.clone(),transparent:!0,opacity:.08,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),ge=new _t(he);ge.center.set(.5,0),ge.position.set(0,.04,-.02),ge.scale.set(1.16,12.6,1),ge.renderOrder=0,W.add(ge);const We=new gt({map:r.line,color:Y.clone(),transparent:!0,opacity:.62,depthWrite:!1,depthTest:!1,blending:bn,fog:!1}),Ke=new _t(We);Ke.center.set(.5,0),Ke.position.set(0,.04,.02),Ke.scale.set(.36,12.4,1),Ke.renderOrder=1,W.add(Ke);const Xe=new gt({map:r.ring,color:Y.clone(),transparent:!0,opacity:.95,depthWrite:!1,depthTest:!1,blending:bn,fog:!1}),ke=new _t(Xe);ke.position.set(0,.02,.22),ke.scale.set(1.65,1.65,1),ke.renderOrder=3,W.add(ke);const Dt=new gt({map:r.glow,color:Y.clone(),transparent:!0,opacity:.13,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),yt=new _t(Dt);yt.position.set(0,-.02,.18),yt.scale.set(2.2,2.2,1),yt.renderOrder=2,W.add(yt);const Vt=new gt({map:r.glow,color:Y.clone().lerp(new He(16777215),.25),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),rn=new _t(Vt);rn.position.set(0,.2,.08),rn.scale.set(1.1,1.1,1),rn.renderOrder=4,rn.visible=!1,W.add(rn),_.push({group:W,beam:ge,line:Ke,ring:ke,glow:yt,ghost:rn,color:Y.clone(),targetColor:Y.clone(),flash:0,active:0,baseX:F,ghostFx:null,angle:0,pitch:0,screenAngle:0,screen:null})}const O=new Zt;O.name="bossWind",st.add(O);const J=[];for(let v=0;v<8;v++){const F=new He(jo[v]),B=[];for(let Y=0;Y<6;Y++){const he=new gt({map:r.beam,color:F.clone().lerp(new He(16777215),.24+Y*.03),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),ge=new _t(he);ge.center.set(.5,.5),ge.renderOrder=4,ge.visible=!1,O.add(ge),B.push(ge)}const W=[];for(let Y=0;Y<3;Y++){const he=new gt({map:r.glow,color:F.clone(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),ge=new _t(he);ge.renderOrder=5,ge.visible=!1,O.add(ge),W.push(ge)}J.push({lane:v,ribbons:B,glows:W,power:0,seed:v*2.399963})}const te=Wg({scene:n,camera:a,lanes:_,stage:st,TEX:r}),Z=new Zt;Z.position.set(0,13.2,-28),Z.visible=!1,l.add(Z);const j=new gt({map:r.clockFace,color:16773576,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),le=new _t(j);le.scale.set(21.6,21.6,1),le.renderOrder=-5,Z.add(le);const Le=new gt({map:r.glow,color:16762974,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),Ue=new _t(Le);Ue.scale.set(29,29,1),Ue.renderOrder=-6,Z.add(Ue);const de=new He(da[0]),Te=new He(da[7]),nt=new gt({map:r.clockHand,color:de,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),ze=new _t(nt);ze.center.set(.5,.07),ze.position.set(0,0,.22),ze.scale.set(1.02,6.8,1),ze.renderOrder=-4,Z.add(ze);const Ee=new gt({map:r.clockHand,color:Te,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),at=new _t(Ee);at.center.set(.5,.07),at.position.set(0,0,.26),at.scale.set(.76,9.6,1),at.renderOrder=-4,Z.add(at);const N=new gt({map:r.glow,color:16774096,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),pe=new _t(N);pe.scale.set(1.9,1.9,1),pe.position.z=.3,pe.renderOrder=-3,Z.add(pe);function ve(v){const F=new gt({map:r.clockDial,color:new He(da[v]),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),B=new _t(F);return B.position.set(v===0?.86:-.86,7.6,.24),B.scale.set(2.75,2.75,1),B.renderOrder=2,B.visible=!1,_[v].group.add(B),B}const Ne=ve(0),me=ve(7),L={group:Z,face:le,aura:Ue,hub:pe,handSlow:ze,handFast:at,dialSlow:Ne,dialFast:me,slowColor:de,fastColor:Te,target:0,fade:0,mode:"off",frozen:!1,rate:1,runTime:0,anchorT:0,anchorRun:0,slowAngle:0,fastAngle:0,slowKick:0,fastKick:0,kick:0},Ge=16765286,ne={active:!1,target:0,fade:0,period:2.4146,originT:0,baseAmp:.42,pivot:new k(0,11.8,1.2),center:new k(0,2.6,1.32),length:9.2,angle:.42,kick:0,missFlash:0,times:[],states:[],notes:[]},wt=new Zt;wt.visible=!1,n.add(wt);const bt=new He(Ge),Qt=new He(16773576),yn=new He(16724831);function Cn(v,F,B,W){const Y=new gt({map:v,color:F.clone(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),he=new _t(Y);return he.scale.set(W,W,1),he.renderOrder=B,he.visible=!1,wt.add(he),he}const _n=Cn(r.pendulumRod,Qt,5,1);_n.center.set(.5,0);const si=Cn(r.glow,Qt,6,1.5),li=Cn(r.glow,bt,7,2.2),ci=Cn(r.ring,Qt,8,2),fi=Cn(r.glow,bt,6,3.2),Ei=Cn(r.ring,Qt,10,2.9),ui=Cn(r.glow,Qt,9,1.5),Yi=[];for(let v=0;v<7;v++){const F=Cn(r.floatNote,Qt,6,1);F.userData.r=2.7+v%3*1.1,F.userData.scale=.8+v%4*.16,F.userData.op=.42+v%3*.12,Yi.push(F)}function Ua(){const v=V.portrait;ne.pivot.set(0,v?11:11.8,1.2),ne.length=v?7:7.8,ne.center.set(0,ne.pivot.y-ne.length,1.32),ne.baseAmp=v?.27:.42,si.position.copy(ne.pivot),Ei.position.copy(ne.center),fi.position.copy(ne.center),ui.position.copy(ne.center)}function Sr({start:v=0,period:F=2.4146,amplitude:B=.42,times:W=[]}={}){ne.active=!0,ne.target=1,ne.period=F||2.4146,ne.originT=v,ne.baseAmp=B||.42,ne.times=W.slice(),ne.states=W.map(()=>"pending"),ne.kick=Math.max(ne.kick,.5);for(const Y of ne.notes)wt.remove(Y),Y.material.dispose();ne.notes=ne.times.map((Y,he)=>{const ge=new gt({map:r.floatNote,color:bt.clone(),transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),We=new _t(ge),Ke=he*2.399963,Xe=3.3+he%3*.85;return We.userData.off={x:Math.cos(Ke)*Xe,y:Math.sin(Ke)*Xe*.66},We.renderOrder=7,We.visible=!1,wt.add(We),We}),ne.fade=Math.max(ne.fade,.002),Ua()}function po(){ne.active=!1,ne.target=0;for(const v of ne.notes)v.visible=!1}function Tr(){po(),ne.fade=0,ne.kick=0,ne.missFlash=0,ne.states=[],wt.visible=!1}function Er(v,F="hit"){ne.states[v]!==void 0&&(ne.states[v]=F);const B=ne.notes[v];B&&(B.visible=!1);const W=ne.center;F==="hit"?(ne.kick=1,St(W,Ge,22,3.4),Tt(W,Ge,3.1)):(ne.missFlash=1,St(W,16724831,10,1.5),Tt(W,16724831,1.9))}function Ar(){ne.kick=Math.max(ne.kick,.14)}const ka=new k,M=new k;function z(){a.updateMatrixWorld(),ka.copy(ne.center).project(a),M.copy(ne.center),M.y+=1.5,M.project(a);const v=(ka.x*.5+.5)*innerWidth,F=(-ka.y*.5+.5)*innerHeight,B=(-M.y*.5+.5)*innerHeight;return{x:v,y:F,radius:Math.max(60,Math.min(118,Math.abs(F-B)))}}function q(v,F){ne.fade+=(ne.target-ne.fade)*(1-Math.exp(-v*3.1));const B=ne.fade>.012;if(wt.visible=B,!B)return;ne.kick=Math.max(0,ne.kick-v*3.2),ne.missFlash=Math.max(0,ne.missFlash-v*2.6);const W=ne.baseAmp,Y=W*Math.cos((F-ne.originT)/ne.period*Math.PI*2);ne.angle=Y;const he=Math.sin(Y)*ne.length,ge=-Math.cos(Y)*ne.length;_n.position.copy(ne.pivot),_n.scale.set(.5,ne.length,1),_n.material.rotation=Math.PI+Y,si.position.copy(ne.pivot),li.position.set(ne.pivot.x+he,ne.pivot.y+ge,ne.pivot.z+.12),ci.position.set(ne.pivot.x+he,ne.pivot.y+ge,ne.pivot.z+.16);const We=Math.max(0,1-Math.abs(Y)/Math.max(.001,W)),Ke=1+ne.kick*.22+We*.05;li.scale.set(2.2*Ke,2.2*Ke,1),ci.scale.set(2*Ke,2*Ke,1),_n.visible=!0,si.visible=!0,ci.visible=!0,li.visible=!0;const Xe=ne.fade,ke=ne.missFlash;_n.material.opacity=Xe*.62,si.material.opacity=Xe*(.55+We*.3),li.material.opacity=Xe*(.24+We*.16+ne.kick*.14),ci.material.opacity=Xe*(.78+ne.kick*.2),ci.material.color.copy(Qt).lerp(yn,ke),li.material.color.copy(bt).lerp(yn,ke);const Dt=1+We*.08+ne.kick*.14;Ei.scale.set(2.9*Dt,2.9*Dt,1),fi.scale.set(3.2*Dt,3.2*Dt,1),ui.scale.set(1.5*Dt,1.5*Dt,1),Ei.material.opacity=Xe*(.5+We*.3+ne.kick*.18),fi.material.opacity=Xe*(.05+We*.04+ne.kick*.06),ui.material.opacity=Xe*(.16+We*.12),Ei.material.color.copy(Qt).lerp(yn,ke*.7);for(const yt of ne.notes){const Vt=ne.notes.indexOf(yt),rn=ne.times[Vt],Vn=ne.states[Vt],$=rn-F;if(Vn!=="pending"||$>1.55||$<-.35){yt.visible=!1;continue}const ye=Math.max(0,Math.min(1,1-$/1.55)),Lt=1-Math.pow(1-ye,3),Mn=yt.userData.off;yt.position.set(ne.center.x+Mn.x*(1-Lt),ne.center.y+Mn.y*(1-Lt)+Math.sin(F*2.2+Vt)*.1*(1-Lt),ne.center.z+.14);const sn=1.5+Lt*.55+Math.sin(F*7+Vt)*.03;yt.scale.set(sn,sn,1),yt.material.opacity=Xe*(.2+Lt*.78),yt.visible=!0}for(let yt=0;yt<Yi.length;yt++){const Vt=Yi[yt],rn=F*.24+yt*2.399963,Vn=Vt.userData.r;Vt.position.set(ne.center.x+Math.cos(rn)*Vn,ne.center.y+Math.sin(rn*1.3)*Vn*.6+Math.sin(F*.9+yt)*.24,ne.center.z+.05),Vt.material.rotation=Math.sin(F*.5+yt)*.32;const $=Vt.userData.scale;Vt.scale.set($,$,1),Vt.material.opacity=Xe*Vt.userData.op*(.55+.45*Math.sin(F*1.5+yt*1.7)),Vt.visible=!0}}function K(v,F,B=!1){const W=X.active?X.theme==="intention"?Qc:jo:da,Y=new He(W[v]),he=new Zt;he.renderOrder=5,B?tt.add(he):_[v].group.add(he);const ge=new gt({map:r.note,color:Y,transparent:!0,opacity:1,depthWrite:!1,depthTest:!1,blending:bn,fog:!1}),We=new _t(ge);We.scale.set(1.04,1.04,1),We.renderOrder=6,he.add(We);let Ke=null,Xe=null;if(F==="hold"){const ke=new gt({map:r.hold,color:Y.clone().lerp(new He(16777215),.15),transparent:!0,opacity:.72,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1});Ke=new _t(ke),Ke.center.set(.5,.5),Ke.renderOrder=4,he.add(Ke);const Dt=new gt({map:r.note,color:Y.clone(),transparent:!0,opacity:.85,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1});Xe=new _t(Dt),Xe.scale.set(.68,.68,1),Xe.renderOrder=5,he.add(Xe)}return{group:he,head:We,body:Ke,tail:Xe,color:Y,free:!!B}}function G(v,F,B=0){const W=_[v].group,Y=Math.max(0,Math.min(1,F/12.2)),he=Math.pow(Y,.82),ge=Math.sin(B*2.17+F*.37)*(1.45+B%3*.22)+Math.sin(B*.73+F*.19)*.7,We=Math.cos(B*1.31+F*.29)*1.4;return{x:W.position.x+ge*he,y:F,z:W.position.z+.24+We*he,sway:ge*he}}const ue=720,be=new Float32Array(ue*3).fill(-999),Pe=new Float32Array(ue*3),Ae=new Float32Array(ue*3),Ze=new Float32Array(ue),it=new Float32Array(ue),Ye=new Xt;Ye.setAttribute("position",new nn(be,3)),Ye.setAttribute("color",new nn(Pe,3));const pt=new oo({size:.3,map:r.glow,vertexColors:!0,transparent:!0,depthWrite:!1,depthTest:!1,blending:Mt,sizeAttenuation:!0,fog:!1}),Ct=new mr(Ye,pt);Ct.renderOrder=9,n.add(Ct);let Bt=0;function St(v,F,B=16,W=3.2){const Y=new He(F);for(let he=0;he<B;he++){const ge=Bt=(Bt+1)%ue;be[ge*3]=v.x+(Math.random()-.5)*.15,be[ge*3+1]=v.y+(Math.random()-.5)*.15,be[ge*3+2]=v.z+(Math.random()-.5)*.15;const We=Math.random()*Math.PI*2,Ke=Math.acos(2*Math.random()-1),Xe=W*(.35+Math.random()*.9);Ae[ge*3]=Math.sin(Ke)*Math.cos(We)*Xe,Ae[ge*3+1]=Math.cos(Ke)*Xe+.6,Ae[ge*3+2]=Math.sin(Ke)*Math.sin(We)*Xe;const ke=Math.random()<.35;Pe[ge*3]=ke?1:Y.r,Pe[ge*3+1]=ke?1:Y.g,Pe[ge*3+2]=ke?1:Y.b,Ze[ge]=it[ge]=.35+Math.random()*.5}}const At=[];for(let v=0;v<16;v++){const F=new gt({map:r.ring,color:16777215,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),B=new _t(F);B.scale.set(.8,.8,1),B.renderOrder=8,B.visible=!1,n.add(B),At.push({sprite:B,life:0,max:.38})}let qe=0;function Tt(v,F,B=2.8){const W=At[qe=(qe+1)%At.length];W.sprite.position.copy(v),W.sprite.material.color.set(F),W.sprite.material.opacity=.95,W.sprite.scale.set(.7,.7,1),W.sprite.visible=!0,W.life=W.max=.38,W.scale=B}const mt=[];for(let v=0;v<54;v++){const F=new gt({map:r.ring,color:16777215,transparent:!0,opacity:0,depthWrite:!1,depthTest:!1,blending:Mt,fog:!1}),B=new _t(F);B.scale.set(.6,.6,1),B.renderOrder=7,B.visible=!1,st.add(B),mt.push({sprite:B,life:0,max:1,delay:0,vx:0,vy:0,base:.5,alpha:.6,spin:0})}let an=0;const V={view:{rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.7,bloom:.8,spin:.04,spacing:Jo,ring:1.65},target:{rotY:0,rotZ:0,tilt:0,spread:1,y:0,camZ:17.2,camY:6.7,bloom:.8,spin:.04,spacing:Jo,ring:1.65},section:null,energy:.4,keyCount:8,active:new Set([0,1,2,3,4,5,6,7]),pulse:0,shake:0,zoomKick:0,noteSpeed:8.2,time:0,playing:!1,gameOver:!1,gameOverElapsed:0,gameOverFromPos:new k(0,6.7,17.2),gameOverFromFov:46,spacing:Jo,ringScale:1.65,portrait:!1,mouse:new Je,laneXNow:g.slice(),bpm:100,beatOffset:.535,energyPulse:0,motion:{style:"fan",amp:.06,speed:.5,pitch:.03},targetMotion:{style:"fan",amp:.06,speed:.5,pitch:.03},laneAngle:new Float32Array(8),lanePitch:new Float32Array(8),screenAngle:new Float32Array(8),city:0,cityTarget:0,live:new Set([0,1,2,3,4,5,6,7])},X={active:!1,mode:"off",intro:!1,theme:"untouchable",fieldFade:1,fieldTarget:1,fieldHidden:!1,intentFocus:0,intentFocusTarget:0,churchFade:0,churchTarget:0,clockFade:0,clockTarget:0,windBoost:0,glitch:0,slowAngle:0,fastAngle:0,handKick:0,hubKick:0,palette:"normal"},Pt={lock:!1,pos:new k(0,6.7,17.2),look:new k(0,4.05,0),targetPos:new k(0,6.7,17.2),targetLook:new k(0,4.05,0),fov:46,targetFov:46,roll:0,targetRoll:0,rate:3};function Nt(v){const F=v?X.theme==="intention"?Qc:jo:da;X.palette=v?"boss":"normal";const B=V.section?.color;for(let W=0;W<8;W++)_[W].color.set(F[W]),_[W].targetColor.copy(_[W].color),B&&X.theme!=="intention"&&_[W].targetColor.lerp(new He(B),.24)}function vn(v="off",F=X.theme){const B=v||"off",W=F==="intention"?"intention":"untouchable",Y=X.theme!==W;X.theme=W;const he=W==="intention";X.mode=B,X.active=B!=="off",X.intro=B==="intro"||B==="preview",X.fieldTarget=B==="play"||B==="outro"?1:0,F==="intention"&&B==="intro"&&(X.fieldTarget=1),he?(X.churchTarget=0,X.clockTarget=0,Y&&(X.churchFade=0,X.clockFade=0,R.visible=!1,Qe.visible=!1),te.setActive(X.active),B==="preview"?te.setPhase("preview"):B==="intro"?te.setPhase("void"):B==="play"&&X.intro?te.setPhase("ocean"):B==="outro"&&te.setPhase("dawn")):(X.churchTarget=B==="off"?0:B==="intro"?1:B==="preview"?.66:.46,X.clockTarget=B==="off"?0:B==="intro"?1:.94,(Y||B==="off")&&te.setActive(!1)),(B==="off"||B==="preview")&&(X.cameraLock=!1),(B==="off"||B==="preview"||B==="intro")&&(X.intentFocus=0,X.intentFocusTarget=0),B==="intro"&&(X.cameraLock=!0,he?(Pt.pos.set(0,10,34),Pt.look.set(0,11,-70)):(Pt.pos.set(0,12,34),Pt.look.set(0,14,-60)),Pt.targetPos.copy(Pt.pos),Pt.targetLook.copy(Pt.look),Pt.fov=Pt.targetFov=he?52:54,Pt.roll=Pt.targetRoll=0,X.slowAngle=0,X.fastAngle=0,X.glitch=0,X.windBoost=0,X.handKick=0,X.hubKick=0),(B==="off"||B==="preview")&&(Pt.fov=Pt.targetFov=V.portrait?52:46,Pt.roll=Pt.targetRoll=0,Pt.lock=!1,a.fov=Pt.fov,a.updateProjectionMatrix()),he||(X.fieldHidden=!1,tt.visible=!0),Nt(X.active)}function xn(v){tt.visible=!v}function tn(v){X.fieldHidden=!!v,tt.visible=!v}function on(v,F,B=49,W=0,Y=.8){X.cameraLock=!0,Pt.targetPos.set(v[0],v[1],v[2]),Pt.targetLook.set(F[0],F[1],F[2]),Pt.targetFov=B,Pt.targetRoll=W,Pt.rate=5.2/Math.max(.18,Math.min(2.2,Y))}const Na=.785,Hn=.84,Bl=.93,Zi=new k,Cr=new k,Rr=new k,mo=new k,Pr=Array.from({length:8},()=>new k);function Au(){st.updateWorldMatrix(!0,!1),De.updateWorldMatrix(!1,!1);for(let v=0;v<8;v++)_[v].group.updateWorldMatrix(!1,!1),Pr[v].set(0,.02,.22).applyMatrix4(_[v].group.matrixWorld)}function Cu(v=0){const F=Qe.position.y+10.5*Qe.scale.y,B=V.active,W=V.portrait?66:57,Y=Math.sin(v)/a.aspect;let he=Math.max(46,a.fov);V.portrait&&(a.position.x=0,mo.set(0,a.position.y,a.position.z-40),a.lookAt(mo)),Au();for(let ge=0;ge<14;ge++){a.fov=he,a.updateProjectionMatrix(),a.updateMatrixWorld();const We=Math.tan(he*Math.PI/360);let Ke=1/0;for(const ke of B)Zi.copy(Pr[ke]).project(a),Zi.y<Ke&&(Ke=Zi.y);Ke!==1/0&&(a.rotateX(Math.atan(Ke*We)-Math.atan((1-2*Na)*We)),a.updateMatrixWorld());let Xe=1;Cr.set(0,F,Qe.position.z).project(a),Cr.y>Bl&&(Xe=Cr.y/Bl);for(const ke of B){Zi.copy(Pr[ke]).project(a);const Dt=Math.abs(Zi.x+Zi.y*Y)/Hn;Dt>Xe&&(Xe=Dt)}if(Xe>1.002){const ke=2*Math.atan(We*Math.min(Xe*1.02,1.6))*180/Math.PI;if(ke<=W+.01){he=Math.max(he,ke);continue}if(he<W){he=W;continue}a.getWorldDirection(Rr),a.position.addScaledVector(Rr,-1.1),mo.copy(a.position).addScaledVector(Rr,40),a.lookAt(mo);continue}break}a.fov=he,a.updateProjectionMatrix()}function Ru(v=1){X.glitch=Math.min(1.5,X.glitch+v),X.windBoost=Math.min(2.4,X.windBoost+v*.7),V.shake=Math.min(.24,V.shake+v*.035),V.zoomKick=Math.min(1.5,V.zoomKick+v*.3),X.theme==="intention"&&te.glitch(v)}function Lr(v=1){X.windBoost=Math.min(2.6,X.windBoost+v*.9),X.glitch=Math.min(1.4,X.glitch+v*.12);for(let F=0;F<3;F++){const B=Math.floor(Math.random()*8),W=Ai(B,1+Math.random()*7);St(W,new He(jo[B]).getHex(),4,1.4+v)}}function Pu(v="fast",F=1){if(X.handKick=Math.max(X.handKick,.35+F*.55),X.hubKick=Math.max(X.hubKick,.25+F*.4),X.theme==="intention"&&te.beat(F),F>.9&&X.clockFade>.3){const B=Qe.localToWorld(new k(0,0,.8));Tt(B,v==="slow"?16765286:16731501,1.1+F*.4)}}function zl(v,F){const B=1+X.windBoost*.85;for(const W of J){let Y;X.active?X.theme==="intention"?Y=0:Y=X.intro?1:V.active.has(W.lane)?0:.95:Y=0,W.power+=(Y-W.power)*(1-Math.exp(-v*2.1));const he=W.power,ge=he>.012;let We=_[W.lane].group.position.x;if(!X.intro){const Ke=(Math.max(4,V.keyCount)-1)*V.spacing*.5,Xe=Math.max(1,Math.abs(a.position.z)),ke=Math.tan(a.fov*Math.PI/360)*Xe*a.aspect,Dt=Math.min(Ke+V.spacing*(.55+W.lane%2*.45),ke*.86);We=W.lane<3.5?-Dt:Dt}for(let Ke=0;Ke<W.ribbons.length;Ke++){const Xe=W.ribbons[Ke];if(Xe.visible=ge,!ge)continue;X.theme==="intention"&&Xe.material.color.setRGB(.92,.96,1);const ke=F*1.15*B+W.seed+Ke*1.71,Dt=((F*1.05*B+Ke*1.9+W.seed*.8)%13+13)%13,yt=-1.4+Dt,Vt=Math.max(0,Math.min(1,(yt+1.4)/2.6))*Math.max(0,Math.min(1,(12.6-yt)/3.2));Xe.position.set(We+Math.sin(ke*1.07)*(1.15+Dt*.14)+Math.sin(ke*.43)*.8,yt,.3+Math.cos(ke*.91)*1.5+Math.sin(ke*.37)*.8),Xe.material.rotation=ke*1.55;const rn=4.2+2.8*Math.abs(Math.sin(ke*1.3)),Vn=.85+.5*Math.abs(Math.cos(ke*.8));Xe.scale.set(Vn,rn,1),Xe.material.opacity=he*Vt*(.14+.09*Math.pow(Math.sin(ke*2.1),2))}for(let Ke=0;Ke<W.glows.length;Ke++){const Xe=W.glows[Ke];if(Xe.visible=ge,!ge)continue;const ke=F*.85*B+W.seed*1.7+Ke*2.3,Dt=-.4+(F*1.35*B+Ke*4.3+W.seed)%13;Xe.position.set(We+Math.sin(ke*.83)*1.5,Dt,.45+Math.cos(ke*.71)*1.3);const yt=.22+.1*Math.sin(ke*1.6);Xe.scale.set(yt,yt,1),Xe.material.rotation=ke,Xe.material.opacity=he*.075*(.55+.45*Math.sin(ke*1.3))}}}function Lu(v,F){if(X.fieldFade+=(X.fieldTarget-X.fieldFade)*(1-Math.exp(-v*4.2)),X.churchFade+=(X.churchTarget-X.churchFade)*(1-Math.exp(-v*1.5)),X.clockFade+=(X.clockTarget-X.clockFade)*(1-Math.exp(-v*1.7)),X.windBoost*=Math.exp(-v*1.8),X.glitch*=Math.exp(-v*6.2),X.handKick*=Math.exp(-v*3.3),X.hubKick*=Math.exp(-v*2.8),X.active&&X.theme==="intention"){for(const Y of[y,x,m,E,...T,...S])Y.visible=!1;R.visible=!1,Qe.visible=!1,te.update(v,F),zl(v,F);return}const B=X.active&&X.churchFade>.02;for(const Y of[y,x,m,E,...T,...S])Y.visible=!B;const W=X.churchFade;if(R.visible=W>.008,R.visible){for(const ge of w)ge.mat.opacity=ge.base*W;const Y=X.clockFade;ht.opacity=Y,fe.opacity=Y*(.72+X.hubKick*.08),$e.opacity=Y*(.05+X.hubKick*.045),rt.opacity=Y*(.36+X.hubKick*.2),Ot.material.opacity=Y*(.62+X.handKick*.18),A.material.opacity=Y*(.76+X.handKick*.14),Qe.visible=Y>.01;const he=1+X.hubKick*.035+Math.sin(F*1.8)*.004;Ie.scale.set(21*he,21*he,1),Oe.scale.set(29*he,29*he,1),et.scale.set(1.9*(1+X.hubKick*.22),1.9*(1+X.hubKick*.22),1),X.slowAngle+=v*.075,X.fastAngle+=v*.62,Ot.material.rotation=-X.slowAngle,A.material.rotation=-X.fastAngle,Ot.material.color.set(16765286).lerp(Rn,X.handKick*.65),A.material.color.set(16731501).lerp(Rn,X.handKick*.65),Ot.scale.set(1.1,1.1*7.1,1),A.scale.set(.8,.8*7.1,1);for(const ge of je)ge.mat.opacity=ge.base*W*(.58+.3*Math.sin(F*3.1+ge.phase)+.12*Math.sin(F*9.7+ge.phase*2.3));for(const ge of Be)ge.mat.opacity=ge.base*W*(.7+.3*Math.sin(F*.24+ge.phase)),ge.sprite.position.x+=Math.sin(F*.11+ge.phase)*v*.08,ge.sprite.position.y+=Math.cos(F*.09+ge.phase)*v*.05;U.map.offset.y=F*.0035%1}else Qe.visible=!1;zl(v,F)}function Iu(v){const F=innerWidth/Math.max(1,innerHeight);if(V.portrait)return v<=1?{spacing:2.3,ring:2.35}:v<=2?{spacing:2,ring:2.05}:v<=4?{spacing:1.72,ring:1.62}:v<=6?{spacing:1.3,ring:1.24}:{spacing:1.02,ring:1.04};const B=F>1.9?1.08:1;return v<=1?{spacing:4.2*B,ring:3.15*B}:v<=2?{spacing:3.8*B,ring:2.85*B}:v<=4?{spacing:3.15*B,ring:2.35*B}:v<=6?{spacing:2.16*B,ring:1.95*B}:{spacing:1.75*B,ring:1.65*B}}function Gl(v,F=!1){const B=Iu(v);V.spacing=B.spacing,V.ringScale=B.ring,V.target.spacing=B.spacing,V.target.ring=B.ring,F&&(V.view.spacing=B.spacing,V.view.ring=B.ring)}function Ir(){const v=innerWidth,F=innerHeight,B=v/F;V.portrait=B<.92,Gl(V.keyCount,!0),L.group.position.set(0,V.portrait?15.2:13.2,-28),L.group.scale.setScalar(V.portrait?.86:1),Qe.position.set(0,V.portrait?13.4:10.4,V.portrait?-46:-39),Qe.scale.setScalar(V.portrait?.76:1),Fe.position.set(0,V.portrait?15:12.6,V.portrait?-62:-56),Fe.scale.set(V.portrait?26:34,V.portrait?26:34,1),xt.position.set(0,V.portrait?15:12.6,V.portrait?-63:-57),xt.scale.set(V.portrait?36:44,V.portrait?36:44,1),Ua();for(let Y=0;Y<8;Y++){const he=(Y-3.5)*V.spacing;_[Y].baseX=he,_[Y].group.position.x=he,_[Y].group.position.z=Qo*he*he,_[Y].ring.scale.set(V.view.ring,V.view.ring,1),_[Y].glow.scale.set(V.view.ring*1.35,V.view.ring*1.35,1),V.laneXNow[Y]=he}Se.scale.set((V.keyCount-1)*V.spacing+V.ring*1.5,.9,1),a.aspect=B,a.fov=V.portrait?52:46,a.updateProjectionMatrix();const W=V.section?V.section.camZ:17.2;V.target.camZ=W+(V.portrait?6.4:0),V.view.camZ=V.target.camZ,t.setSize(v,F),o.setSize(v,F),s.resolution.set(v/2,F/2),te.layout(V.portrait)}addEventListener("resize",Ir),Ir(),addEventListener("pointermove",v=>{V.mouse.x=v.clientX/innerWidth*2-1,V.mouse.y=v.clientY/innerHeight*2-1},{passive:!0});function Du(v){if(!v)return;const F=!!V.section&&V.section.keys!==v.keys;V.section=v,V.energy=v.energy,V.keyCount=v.keys,v.bpm&&Vl(v.bpm,v.beatOffset??0),X.active&&Nt(!0),Gl(v.keys),V.target.rotY=v.rotY,V.target.rotZ=v.rotZ,V.target.tilt=v.tilt,V.target.spread=v.spread,V.target.y=v.y,V.target.camZ=v.camZ+(V.portrait?6.4:0),V.target.camY=v.camY,V.target.bloom=X.active?X.theme==="intention"?X.intro?.42:.56:X.intro?Math.min(.38,v.bloom*.45):Math.min(.28,v.bloom*.3):v.bloom*.82,V.target.spin=v.spin,V.targetMotion={style:v.motion||"fan",amp:v.motionAmp??.06,speed:v.motionSpeed??.5,pitch:v.motionPitch??.03},V.cityTarget=v.city??0,F&&(V.zoomKick=Math.min(1.4,V.zoomKick+.85));const B={1:[3],2:[2,4],4:[2,3,4,5],6:[1,2,3,4,5,6],8:[0,1,2,3,4,5,6,7]};V.active=new Set(B[v.keys]||B[8]),V.live=new Set(V.active);for(let W=0;W<8;W++){const Y=V.active.has(W);_[W].active=Y?1:0,Y||(_[W].ghostFx=null),_[W].targetColor.copy(_[W].color).lerp(new He(v.color),.24),X.theme==="intention"&&_[W].targetColor.copy(_[W].color),Y&&(_[W].flash=Math.max(_[W].flash,.22))}L.slowColor.copy(_[0].targetColor),L.fastColor.copy(_[7].targetColor),se.color.set(v.accent)}function Uu(v){const F=new Set(V.active);for(const W of v)F.add(W);let B=F.size!==V.live.size;if(!B){for(const W of F)if(!V.live.has(W)){B=!0;break}}if(B){V.live=F;for(const W of v)V.active.has(W)||(_[W].flash=Math.max(_[W].flash,.34),_[W].ghostFx=null)}}function ku(v){V.cityTarget=Math.max(0,Math.min(1,v))}function Nu(v="run",F=1,B=null){const W=v||"off",Y=L.mode,he=B??V.time;Y==="run"||Y==="final"?L.anchorRun+=Math.max(0,he-L.anchorT):Y==="freeze"&&(L.anchorRun=L.runTime),L.anchorT=he,L.mode=W,W==="off"?(L.target=0,L.frozen=!1,L.rate=1):(L.target=1,L.frozen=W==="freeze",L.rate=W==="final"?1.65:1,L.kick=Math.max(L.kick,.25+F*.35))}function Fu(v="fast",F=1){if(!(L.fade<.015)&&(L.kick=Math.max(L.kick,.2+F*.32),v==="slow"?L.slowKick=Math.max(L.slowKick,.35+F*.55):L.fastKick=Math.max(L.fastKick,.35+F*.55),F>1.05&&L.fade>.3)){const B=L.group.localToWorld(new k(0,0,.35));Tt(B,v==="slow"?de.getHex():Te.getHex(),.9+F*.35)}}function Ou(){L.target=0,L.fade=0,L.mode="off",L.frozen=!1,L.rate=1,L.runTime=0,L.anchorT=0,L.anchorRun=0,L.slowAngle=0,L.fastAngle=0,L.slowKick=0,L.fastKick=0,L.kick=0,L.group.visible=!1,L.dialSlow.visible=!1,L.dialFast.visible=!1}function Bu(v){return _[v].baseX}function zu(v){return Qo*_[v].baseX*_[v].baseX}function Ai(v,F){return _[v].group.localToWorld(new k(0,F,.2))}const Dr=new k,Ur=new k;function go(){a.updateMatrixWorld(),st.updateWorldMatrix(!0,!1);for(let v=0;v<8;v++){const F=_[v];F.group.updateWorldMatrix(!1,!1);const B=F.group.matrixWorld;Dr.set(0,.04,.22).applyMatrix4(B).project(a),Ur.set(0,11.4,.22).applyMatrix4(B).project(a);const W=(Dr.x*.5+.5)*innerWidth,Y=(-Dr.y*.5+.5)*innerHeight,he=(Ur.x*.5+.5)*innerWidth,ge=(-Ur.y*.5+.5)*innerHeight;F.screenAngle=Math.atan2(he-W,Y-ge),F.screen={x:W,y:Y,topX:he,topY:ge,angle:F.screenAngle}}}function Gu(v){return _[v].screen||go(),_[v].screen}function Hl(){return go(),_.map(v=>v.screen)}function Hu(){return Hl().map(v=>v.x)}function Vu(v){return _[v].screen||go(),_[v].screenAngle}function Vl(v,F=0){V.bpm=v||100,V.beatOffset=F}function Wu(v){const F=_[v];F.flash=Math.max(F.flash,.55),F.ring.scale.setScalar(V.view.ring*1.1)}function Xu(v,F="sweep"){const B=_[v];if(B){if(X.active){Lr(F==="bounce"?.35:.2);return}B.ghostFx={type:F,t:0,dur:F==="bounce"?.85:1.15},F==="bounce"&&(B.flash=Math.max(B.flash,.65),Tt(Ai(v,.05),B.color.getHex(),1.7))}}function Yu(){for(const v of _)v.ghostFx=null,v.ghost.visible=!1,v.ghost.material.opacity=0}function Wl(v,F=1,B=1){const W=_[v];if(!W)return;if(X.active){Lr(B*.28);return}const Y=Ai(v,.1+Math.random()*.12),he=3;for(let ge=0;ge<he;ge++){const We=mt[an=(an+1)%mt.length];We.sprite.position.copy(Y),We.sprite.position.y+=ge*.11,We.sprite.position.z+=ge*.05,We.sprite.material.color.copy(W.targetColor).lerp(Rn,.12+ge*.08),We.sprite.material.rotation=Math.random()*Math.PI*2,We.sprite.scale.set(.45,.45,1),We.life=We.max=1.15+ge*.24,We.delay=ge*.075,We.vx=F*(2.4+B*1.7)*(1-ge*.13)+(Math.random()-.5)*.5,We.vy=.45+B*.35+Math.random()*.25,We.base=.38+B*.38,We.alpha=(.62-ge*.13)*Math.min(1,B),We.spin=(Math.random()-.5)*1.2,We.sprite.visible=!1}}function Xl(v=1){V.energyPulse=Math.min(1.5,V.energyPulse+.35*v),V.shake=Math.min(.18,V.shake+.008*v),X.active&&X.theme==="intention"&&te.beat(v*.85)}function Yl(v,F=1){let B;v==null?(B=st.localToWorld(new k(0,.3,.25)),St(B,10483199,Math.round(22*F),5.2),Tt(B,10483199,4.2)):(B=Ai(v,.08),St(B,_[v].targetColor,Math.round(14+10*F),3.2+F),Tt(B,_[v].targetColor.getHex(),2.4+F)),V.shake=Math.min(.2,V.shake+.02*F)}function Zu(v=1){Xl(v),V.zoomKick=Math.min(1.4,V.zoomKick+.22*v),Yl(null,.7+v*.7);for(let F=0;F<8;F++)V.active.has(F)||Wl(F,F<3.5?-1:1,.7+v*.6)}function qu(v,F,B,W){V.targetMotion={style:v||"fan",amp:F??.08,speed:B??.6,pitch:W??.04}}function Ku(v,F){const B=_[v];B.flash=1,V.shake=Math.min(.16,V.shake+(F==="perfect"?.025:.016));const W=Ai(v,.05);if(St(W,B.color,F==="perfect"?22:14,3.5),Tt(W,B.color.getHex(),3),X.active&&X.theme==="intention"){const Y=te.level.phase;(Y==="field"||Y==="pillars"||Y==="halo")&&(X.intentFocusTarget=(v-3.5)*.2)}}function $u(v){V.shake=Math.min(.25,V.shake+.13),_[v];const F=Ai(v,.05);St(F,16724831,9,1.4),Tt(F,16724831,2)}const Rn=new He(16777215);new He;let Zl=0;function ju(v,F,B){Zl+=v;const W=B?F:Zl;V.time=W,V.playing=B;const Y=V.view,he=V.target,ge=1-Math.exp(-v*2.2);Y.rotY+=(he.rotY-Y.rotY)*ge,Y.rotZ+=(he.rotZ-Y.rotZ)*ge,Y.tilt+=(he.tilt-Y.tilt)*ge,Y.spread+=(he.spread-Y.spread)*ge,Y.y+=(he.y-Y.y)*ge,Y.camZ+=(he.camZ-Y.camZ)*ge,Y.camY+=(he.camY-Y.camY)*ge,Y.spin+=(he.spin-Y.spin)*ge,Y.spacing+=(he.spacing-Y.spacing)*(1-Math.exp(-v*3.1)),Y.ring+=(he.ring-Y.ring)*(1-Math.exp(-v*3.1)),s.strength+=(he.bloom-s.strength)*ge,V.zoomKick*=Math.exp(-v*2.6),V.energyPulse*=Math.exp(-v*3.2);const We=60/V.bpm,Ke=((W-V.beatOffset)/We%1+1)%1,Xe=Math.exp(-Ke*5.2);V.pulse=Xe;const ke=V.motion,Dt=V.targetMotion,yt=1-Math.exp(-v*2.2);ke.amp+=(Dt.amp-ke.amp)*yt,ke.speed+=(Dt.speed-ke.speed)*yt,ke.pitch+=(Dt.pitch-ke.pitch)*yt,ke.style=Dt.style;const Vt=V.energyPulse;s.strength+=Vt*(X.active?.1:.32),X.active&&(s.strength=Math.min(s.strength,X.theme==="intention"?X.intro?.56:.72:X.intro?.5:.38)),Lu(v,W),st.position.y=Y.y+Math.sin(W*.65)*.035+Xe*.03,st.rotation.y=Y.rotY+Math.sin(W*.22)*.02+Math.sin(W*.09)*Y.spin+(X.glitch>.01?(Math.random()-.5)*X.glitch*.012:0),st.rotation.z=Y.rotZ+Math.sin(W*.37)*.006+(X.glitch>.01?(Math.random()-.5)*X.glitch*.01:0),st.rotation.x=Y.tilt+Math.sin(W*.29)*.006;for(let $=0;$<8;$++){const ye=_[$];let Lt=($-3.5)*Y.spacing*Y.spread;V.keyCount===1?Lt=$===3?0:($<3?-1:1)*Y.spacing*4:V.keyCount===2&&($===2?Lt=-Y.spacing*.78:$===4&&(Lt=Y.spacing*.78)),ye.baseX=Lt,ye.group.position.x=Lt,ye.group.position.z=Qo*Lt*Lt,V.laneXNow[$]=Lt;const Mn=$-3.5;let sn=0;switch(ke.style){case"fan":sn=-Mn*ke.amp;break;case"slope":sn=ke.amp;break;case"tiltL":sn=ke.amp*1.15;break;case"tiltR":sn=-ke.amp*1.15;break;case"zigzag":sn=($%2?1:-1)*ke.amp*.95;break;case"wave":sn=Math.sin(W*ke.speed+$*.72)*ke.amp-Mn*ke.amp*.22;break;case"orbit":sn=Math.sin(W*ke.speed*.72+Mn*.38)*ke.amp*.78-Mn*ke.amp*.3;break;default:sn=-Mn*ke.amp}sn+=Math.sin(W*1.15+$*.55)*ke.amp*.12*(.4+V.energy),sn+=Xe*.006*Math.cos($*.9+.4);const kr=Math.sin(W*.55+$*.7)*ke.pitch+Xe*ke.pitch*.32*Math.sin($*.8+.7)+Vt*.006,yo=1-Math.exp(-v*3.4);ye.angle+=(sn-ye.angle)*yo,ye.pitch+=(kr-ye.pitch)*yo,V.laneAngle[$]=ye.angle,V.lanePitch[$]=ye.pitch,ye.group.rotation.z=ye.angle,ye.group.rotation.x=ye.pitch,ye.line.scale.y=12.4*Math.cos(ye.pitch),ye.beam.scale.y=12.6*Math.cos(ye.pitch);const _o=V.live.has($);let Wn=0,Nr=0;if(ye.ghostFx){const xo=ye.ghostFx;xo.t+=v;const Fr=xo.t/xo.dur;if(Fr>=1)ye.ghostFx=null,ye.ghost.visible=!1,ye.ghost.material.opacity=0;else if(Wn=Math.sin(Math.PI*Fr),xo.type==="sweep"){ye.ghost.visible=!0,ye.ghost.position.set(0,.25+Fr*10.5,.08);const Kl=.85+.55*Wn;ye.ghost.scale.set(Kl,Kl,1),ye.ghost.material.opacity=Wn*.8,ye.ghost.material.color.copy(ye.targetColor).lerp(Rn,.3+Wn*.4)}else Nr=Wn,ye.ghost.visible=!1}const vo=X.active?X.fieldFade:1,nd=(_o?($%2?.86:.96)*.58:Wn*.34)*vo*(X.active?.45:1),id=(_o?.065+Xe*.03:Wn*.04)*vo*(X.active?.55:1),ad=(_o?.95:Nr*.78+Wn*.035)*vo,od=X.active?.48:1;ye.line.material.opacity+=(nd-ye.line.material.opacity)*(1-Math.exp(-v*3.5)),ye.beam.material.opacity+=(id-ye.beam.material.opacity)*(1-Math.exp(-v*3.5)),ye.ring.material.opacity+=(ad-ye.ring.material.opacity)*(1-Math.exp(-v*3.5)),ye.glow.material.opacity+=(((_o?.14:Wn*.07)+ye.flash*.3)*vo*od-ye.glow.material.opacity)*(1-Math.exp(-v*8)),ye.flash=Math.max(0,ye.flash-v*3.4);const ql=Y.ring*(1+Xe*.045*(.4+V.energy)+ye.flash*.22+Nr*.5);ye.ring.scale.set(ql,ql,1),ye.ring.material.color.copy(ye.targetColor).lerp(Rn,ye.flash*.8),ye.glow.material.color.copy(ye.targetColor).lerp(Rn,ye.flash*.5),ye.line.material.color.copy(ye.targetColor).lerp(Rn,.14+ye.flash*.32),ye.beam.material.color.copy(ye.targetColor)}const rn=(!X.active||X.fieldFade>.03)&&!X.fieldHidden;De.visible=rn,Se.visible=rn,go();for(let $=0;$<8;$++){const ye=_[$];ye.line.material.rotation=-ye.screenAngle,ye.beam.material.rotation=-ye.screenAngle}if(Se.scale.x=(Y.spacing*(V.keyCount-1)+Y.ring*1.5)*Y.spread,Se.material.opacity=(.45+Xe*.3+V.energy*.15+Vt*.16)*(X.active?X.fieldFade:1),X.active&&X.cameraLock){const $=Pt,ye=1-Math.exp(-v*$.rate);$.pos.lerp($.targetPos,ye),$.look.lerp($.targetLook,ye),$.fov+=($.targetFov-$.fov)*ye,$.roll+=($.targetRoll-$.roll)*ye,X.intentFocusTarget*=Math.exp(-v*.8);const Mn=X.theme==="intention"&&!X.intro&&(te.level.phase==="field"||te.level.phase==="pillars"||te.level.phase==="halo")?X.intentFocusTarget:0;X.intentFocus+=(Mn-X.intentFocus)*(1-Math.exp(-v*4.6)),a.position.copy($.pos),a.position.x+=X.intentFocus,a.fov=$.fov,a.updateProjectionMatrix(),a.lookAt($.look.x+X.intentFocus*.82,$.look.y,$.look.z),!X.intro&&X.theme!=="intention"&&Cu($.roll),a.rotation.z+=$.roll,X.glitch>.01&&(a.position.x+=(Math.random()-.5)*X.glitch*.24,a.position.y+=(Math.random()-.5)*X.glitch*.2,a.rotation.z+=(Math.random()-.5)*X.glitch*.022),V.shake>5e-4&&(a.position.x+=(Math.random()-.5)*V.shake,a.position.y+=(Math.random()-.5)*V.shake,V.shake*=Math.exp(-v*10))}else{const $=V.mouse.x*.55,ye=Y.camY+V.mouse.y*.18;a.position.x+=($-a.position.x)*(1-Math.exp(-v*2)),a.position.y+=(ye-a.position.y)*(1-Math.exp(-v*2)),a.position.z+=(Y.camZ-V.zoomKick*1.05-a.position.z)*(1-Math.exp(-v*3.4)),V.shake>5e-4&&(a.position.x+=(Math.random()-.5)*V.shake,a.position.y+=(Math.random()-.5)*V.shake,V.shake*=Math.exp(-v*10)),a.lookAt(0,4.05,0)}if(V.gameOver){V.gameOverElapsed+=v;const $=Math.min(1,V.gameOverElapsed/2.8),ye=1-Math.pow(1-$,3),Lt=V.gameOverFromPos;a.position.set(Mo.lerp(Lt.x,0,ye),Mo.lerp(Lt.y,Lt.y+11,ye),Mo.lerp(Lt.z,Lt.z+27,ye)),a.fov=Mo.lerp(V.gameOverFromFov,60,ye),a.updateProjectionMatrix(),a.lookAt(0,3.1,0),a.rotation.z+=Math.sin(ye*Math.PI)*.05}f.rotation.y+=v*.006,u.rotation.y-=v*.004,h.rotation.y+=v*.012,y.position.x=-16+Math.sin(W*.05)*2,x.position.y=1+Math.sin(W*.07+1)*2;for(let $=0;$<T.length;$++)T[$].rotation.z+=v*(.02+$*.012),T[$].rotation.y+=v*.008;if(V.city+=(V.cityTarget-V.city)*(1-Math.exp(-v*1.6)),P.visible=V.city>.012,P.visible){P.position.x=V.mouse.x*1.4;for(let $=0;$<C.length;$++){const ye=C[$];ye.map.offset.x+=v*ye.speed*(.7+V.energy*1.6+Xe*.8),ye.mesh.position.y=ye.base+Math.sin(W*.17+$*1.7)*.18,ye.mat.opacity=V.city*($?.42:.3)}}if(L.fade+=(L.target-L.fade)*(1-Math.exp(-v*2.6)),L.group.visible=L.fade>.008,L.group.visible){if(L.target>0&&!L.frozen&&(L.runTime=L.anchorRun+Math.max(0,W-L.anchorT)),!L.frozen){const Mn=60/Math.max(1,V.bpm),sn=L.runTime/(Mn*32)*Math.PI*2,kr=Mn*(L.mode==="final"?.34:.5),yo=Math.floor((W-V.beatOffset)/kr)*(Math.PI*2/12);L.slowAngle+=(sn-L.slowAngle)*(1-Math.exp(-v*4)),L.fastAngle+=(yo-L.fastAngle)*(1-Math.exp(-v*20)),L.handSlow.material.rotation=-L.slowAngle,L.handFast.material.rotation=-L.fastAngle}L.slowKick=Math.max(0,L.slowKick-v*3.6),L.fastKick=Math.max(0,L.fastKick-v*4.4),L.kick=Math.max(0,L.kick-v*3.1);const $=L.fade;L.face.material.opacity=$*(.34+L.kick*.14),L.aura.material.opacity=$*(.085+L.kick*.08),L.hub.material.opacity=$*(.5+L.kick*.45),L.handSlow.material.opacity=$*(.72+L.slowKick*.34),L.handFast.material.opacity=$*(.82+L.fastKick*.28),L.handSlow.material.color.copy(L.slowColor).lerp(Rn,L.slowKick*.75),L.handFast.material.color.copy(L.fastColor).lerp(Rn,L.fastKick*.75);const ye=1.9*(1+L.kick*.26+Math.sin(W*7.5)*.025);L.hub.scale.set(ye,ye,1);const Lt=1+L.kick*.012;L.face.scale.set(21.6*Lt,21.6*Lt,1),L.dialSlow.visible=!0,L.dialFast.visible=!0,L.dialSlow.material.rotation=-L.slowAngle,L.dialFast.material.rotation=-L.fastAngle,L.dialSlow.material.opacity=$*(.3+L.slowKick*.24),L.dialFast.material.opacity=$*(.36+L.fastKick*.24),L.dialSlow.material.color.copy(L.slowColor).lerp(Rn,L.slowKick*.7),L.dialFast.material.color.copy(L.fastColor).lerp(Rn,L.fastKick*.7)}q(v,W);for(const $ of S)$.rotation.x+=$.userData.spin.x*v,$.rotation.y+=$.userData.spin.y*v,$.rotation.z+=$.userData.spin.z*v,$.position.y+=Math.sin(W*.4+$.position.x)*v*.06;let Vn=!1;for(let $=0;$<ue;$++){if(Ze[$]<=0)continue;if(Vn=!0,Ze[$]-=v,Ze[$]<=0){be[$*3+1]=-999;continue}Ae[$*3]*=.972,Ae[$*3+1]-=2.4*v,Ae[$*3+2]*=.972,be[$*3]+=Ae[$*3]*v,be[$*3+1]+=Ae[$*3+1]*v,be[$*3+2]+=Ae[$*3+2]*v;const ye=Math.max(0,Ze[$]/it[$]);Pe[$*3]*=.988,Pe[$*3+1]*=.988,Pe[$*3+2]*=.988,ye<.25&&(Pe[$*3]*=ye/.25,Pe[$*3+1]*=ye/.25,Pe[$*3+2]*=ye/.25)}Vn&&(Ye.attributes.position.needsUpdate=!0,Ye.attributes.color.needsUpdate=!0);for(const $ of At){if($.life<=0)continue;$.life-=v;const ye=1-Math.max(0,$.life/$.max),Lt=.75+ye*$.scale;$.sprite.scale.set(Lt,Lt,1),$.sprite.material.opacity=(1-ye)*.9,$.life<=0&&($.sprite.visible=!1)}for(const $ of mt){if($.delay>0&&($.delay-=v,$.delay>0)||$.life<=0)continue;if($.life-=v,$.life<=0){$.sprite.visible=!1;continue}const ye=1-$.life/$.max;$.vx*=Math.exp(-v*2.5),$.vy*=Math.exp(-v*1.9),$.sprite.position.x+=$.vx*v,$.sprite.position.y+=$.vy*v,$.sprite.material.rotation+=$.spin*v;const Lt=$.base*(.7+ye*1.15);$.sprite.scale.set(Lt,Lt,1),$.sprite.material.opacity=Math.pow(1-ye,1.55)*$.alpha,$.sprite.visible=!0}}function Ju(){V.gameOver=!0,V.gameOverElapsed=0,V.gameOverFromPos.copy(a.position),V.gameOverFromFov=a.fov}function Qu(){V.gameOver=!1,V.gameOverElapsed=0}function ed(){o.render()}function td(){t.dispose()}return{scene:n,camera:a,stage:st,noteRoot:tt,state:V,clock:L,boss:X,bloom:s,laneRoot:De,windRoot:O,church:R,intention:te,makeNote:K,setSection:Du,animate:ju,render:ed,laneX:Bu,laneZ:zu,worldPoint:Ai,laneScreenXs:Hu,laneScreenPoints:Hl,laneScreenGeometry:Gu,laneScreenAngle:Vu,setPreviewLanes:Uu,setCity:ku,setTempo:Vl,setClock:Nu,clockTick:Fu,clockReset:Ou,setBoss:vn,bossCameraEvent:on,bossGlitch:Ru,bossTick:Pu,windFx:Lr,freeNotePose:G,startGameOver:Ju,resetGameOver:Qu,setIntentionPhase:v=>te.setPhase(v),intentionPulse:v=>te.beat(v),setIntentFieldHidden:tn,setIntentNoteLayerHidden:xn,startPendulum:Sr,stopPendulum:po,swingResolve:Er,swingWhiff:Ar,pendulumReset:Tr,pendulumTargetScreen:z,pendulum:ne,pressFx:Wu,hitFx:Ku,missFx:$u,ghostFx:Xu,echoFx:Wl,pulseFx:Xl,burstFx:Yl,vibeFx:Zu,motionEvent:qu,clearGhosts:Yu,layout:Ir,dispose:td,get noteSpeed(){return V.noteSpeed},set noteSpeed(v){V.noteSpeed=v},get noteScale(){return Math.max(1,Math.min(1.3,V.view.ring/1.65))}}}class l2{constructor(){this.ctx=null,this.buffer=null,this.source=null,this.gain=null,this.startAt=0,this.offset=0,this.duration=0,this.loaded=!1,this.muted=!1,this.hitGain=null,this.cache=new Map}async load(e,t){let n=this.cache.get(e);if(!n){const a=await fetch(e);if(!a.ok)throw new Error("audio fetch failed: "+a.status);const o=Number(a.headers.get("content-length"))||115e4;let s;if(a.body&&a.body.getReader){const r=a.body.getReader(),l=[];let c=0;for(t?.(0);;){const{value:u,done:h}=await r.read();if(h)break;l.push(u),c+=u.length,t?.(Math.min(.94,c/o))}s=new Uint8Array(c);let f=0;for(const u of l)s.set(u,f),f+=u.length}else s=new Uint8Array(await a.arrayBuffer());t?.(.95),this.ctx=this.ctx||new(window.AudioContext||window.webkitAudioContext)({latencyHint:"interactive"}),n=await this.ctx.decodeAudioData(s.buffer),this.cache.set(e,n)}return this.gain||(this.gain=this.ctx.createGain(),this.gain.gain.value=.92,this.gain.connect(this.ctx.destination)),this.hitGain||(this.hitGain=this.ctx.createGain(),this.hitGain.gain.value=.5,this.hitGain.connect(this.ctx.destination)),t?.(1),n}setBuffer(e){e&&(this.buffer=e,this.duration=e.duration,this.loaded=!0)}async start(e=0,t={}){if(!this.loaded)return;if(!this.ctx)throw new Error("no audio context");this.ctx.state!=="running"&&await this.ctx.resume(),this.stop(),this.source=this.ctx.createBufferSource(),this.source.buffer=this.buffer,this.source.connect(this.gain);const n=this.ctx.currentTime+.12;this.startAt=n,this.offset=e;try{const a=Math.max(0,(t.fadeStart??this.duration-6.7)-e),o=Math.max(.05,(t.fadeEnd??this.duration-4.7)-e);this.gain.gain.cancelScheduledValues(this.ctx.currentTime),this.gain.gain.setValueAtTime(.92,this.ctx.currentTime),this.gain.gain.setValueAtTime(.92,n+a),this.gain.gain.linearRampToValueAtTime(0,n+o)}catch{}this.source.start(n,e)}stop(){if(this.source){try{this.source.stop()}catch{}this.source.disconnect(),this.source=null}}pitchDrop(e=.5,t=2.4){if(!this.ctx||!this.source)return;const n=this.ctx.currentTime;try{const a=this.source.playbackRate;a.cancelScheduledValues(n),a.setValueAtTime(Math.max(.05,a.value||1),n),a.linearRampToValueAtTime(Math.max(.05,e),n+t)}catch{}try{if(this.gain){const a=this.gain.gain;a.cancelScheduledValues(n),a.setValueAtTime(Math.max(.02,a.value||.92),n),a.linearRampToValueAtTime(0,n+t+.6)}}catch{}}pause(){this.ctx&&this.ctx.state==="running"&&this.ctx.suspend()}resume(){this.ctx&&this.ctx.state!=="running"&&this.ctx.resume()}get time(){return this.ctx?this.ctx.currentTime-this.startAt+this.offset:0}get paused(){return!!this.ctx&&this.ctx.state==="suspended"}click(e=3,t=1){if(!this.ctx||this.ctx.state!=="running"||this.muted)return;const n=this.ctx.currentTime,a=this.ctx.createOscillator(),o=this.ctx.createGain();a.type="triangle";const s=360*Math.pow(2,e/12);a.frequency.setValueAtTime(s*1.5,n),a.frequency.exponentialRampToValueAtTime(s*.75,n+.035),o.gain.setValueAtTime(1e-4,n),o.gain.exponentialRampToValueAtTime(.035*t,n+.004),o.gain.exponentialRampToValueAtTime(1e-4,n+.055),a.connect(o),o.connect(this.hitGain),a.start(n),a.stop(n+.07)}thud(){if(!this.ctx||this.ctx.state!=="running"||this.muted)return;const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(90,e),t.frequency.exponentialRampToValueAtTime(45,e+.12),n.gain.setValueAtTime(1e-4,e),n.gain.exponentialRampToValueAtTime(.05,e+.01),n.gain.exponentialRampToValueAtTime(1e-4,e+.18),t.connect(n),n.connect(this.hitGain),t.start(e),t.stop(e+.2)}}const Jf={KeyA:0,KeyS:1,KeyD:2,KeyF:3,KeyJ:4,KeyK:5,KeyL:6,Semicolon:7,Numpad1:0,Numpad2:1,Numpad3:2,Numpad4:3,Numpad5:4,Numpad6:5,Numpad7:6,Numpad8:7},af={4:[2,3,4,5],6:[1,2,3,4,5,6],8:[0,1,2,3,4,5,6,7]},uo=.185,ya={perfect:.045,great:.09,good:.135},Qf={perfect:3e3,great:2e3,good:1e3,bad:300},eu={perfect:1,great:.85,good:.55,bad:.25,miss:0},tu="cryout-best-v2",c2="cryout-best-v1",f2=2.05,nu=512,_e=i=>document.getElementById(i),I={canvas:_e("scene"),hud:_e("hud"),pads:[...document.querySelectorAll(".pad")],centerPad:_e("centerPad"),start:_e("startScreen"),startBtn:_e("startBtn"),startLabel:_e("startBtnLabel"),loadFill:_e("loadFill"),startLanes:_e("startLanes"),startTrack:_e("startTrack"),startLength:_e("startLength"),startLevel:_e("startLevel"),trackCards:[...document.querySelectorAll(".track-card")],score:_e("score"),acc:_e("acc"),maxCombo:_e("maxCombo"),progress:_e("progressFill"),progressGlow:_e("progressGlow"),section:_e("sectionName"),time:_e("timeLabel"),keys:_e("keysCount"),energy:_e("energyFill"),comboHud:_e("comboHud"),comboNum:_e("comboNum"),judge:_e("judge"),pauseBtn:_e("pauseBtn"),pause:_e("pauseScreen"),result:_e("resultScreen"),toast:_e("toast"),rank:_e("rank"),finalScore:_e("finalScore"),finalAcc:_e("finalAcc"),cPerfect:_e("cPerfect"),cGreat:_e("cGreat"),cGood:_e("cGood"),cBad:_e("cBad"),cMiss:_e("cMiss"),fMaxCombo:_e("fMaxCombo"),fcBadge:_e("fcBadge"),resultTag:_e("resultTag"),bestScoreLabel:_e("bestScoreLabel"),bestBadge:_e("bestBadge"),bestNote:_e("bestNote"),bestLine:_e("bestLine"),hudTrack:_e("hudTrack"),hudBpm:_e("hudBpm"),clearCount:_e("clearCount"),resultTrack:_e("resultTrack"),resultDiff:_e("resultDiff"),resultBpm:_e("resultBpm"),footTrack:_e("footTrack"),footLanes:_e("footLanes"),barPerfect:_e("barPerfect"),barGreat:_e("barGreat"),barGood:_e("barGood"),barBad:_e("barBad"),barMiss:_e("barMiss"),peakCombo:_e("peakCombo"),comboLine:_e("comboLine"),comboFill:_e("comboFill"),accRing:_e("accRing"),scoreDelta:_e("scoreDelta"),resultLoading:_e("resultLoading"),loadTrack:_e("loadTrack"),loadProgress:_e("loadProgress"),loadPct:_e("loadPct"),loadRank:_e("loadRank"),flash:_e("flash"),bossGlitch:_e("bossGlitch"),bossCaption:_e("bossCaption"),bcKicker:_e("bcKicker"),bcTitle:_e("bcTitle"),bcSub:_e("bcSub"),guilt:_e("guiltHud"),guiltFill:_e("guiltFill"),guiltPct:_e("guiltPct"),guiltCopy:_e("guiltCopy"),heartbeat:_e("heartbeat"),intentText:_e("intentGlitchText"),intentTextSub:_e("intentGlitchSub"),yellow:_e("yellowVignette"),rainbow:_e("rainbowWash"),whiteout:_e("whiteout"),syncEl:document.querySelector(".sync")},Me=s2(I.canvas),Rt=new l2;let ft=pl[ud]||ma[0],zt=ft.chart,Gn=[],Gi=[],ri=!1,lt="boot",Ta=null,ol=0,Ll=zt.song.chartEnd,rl=zt.song.duration,er=0,_a=0,bi=[],sl=0,ll=0,cl=0,of=0,fl=0,sr=!1;const Re={phase:"off",guiltOn:!1,guilt:100,fakeGuilt:!1,fakeValue:14,fakeBase:14,fakeStart:0,heartOn:!1,heartBpm:150,hbAcc:0,hbBeat:-1,screenGlitch:!1,glitchAcc:0,forceSync:!1,notesHidden:!1},Ft={active:!1,elapsed:0,wallStart:0,t0:0,visualT:0,finished:!1},Ve={score:0,combo:0,maxCombo:0,judged:0,weight:0,perfect:0,great:0,good:0,bad:0,miss:0,dropped:0,health:100},Il=new Array(8).fill(!1),oi=new Array(8).fill(null),Si=new Set,Hi=new Set,rf=new Array(8).fill(0);function iu(){return Si.size>0||Hi.size>0}function au(){return iu()}let ul=0,$a=0,ja=0;function u2(){const i={};try{const e=localStorage.getItem(c2);e&&(i.cryout=JSON.parse(e))}catch{}try{const e=localStorage.getItem(tu);e&&Object.assign(i,JSON.parse(e)||{})}catch{}for(const[e,t]of Object.entries(i)){if(!t||typeof t!="object"||!(Number(t.score)>0)){delete i[e];continue}t.score=Math.round(Number(t.score)),t.acc=Number.isFinite(t.acc)?t.acc:0,t.maxCombo=Number.isFinite(t.maxCombo)?t.maxCombo:0}return i}let Mi=u2(),Ya=Mi[ft.id]||null;function sf(i){return!!i&&(i.acc||0)>=50}function ou(){Ya=Mi[ft.id]||null;const i=Ya?`${String(Ya.score).padStart(7,"0")} · ${Ya.rank||"—"}`:"—";I.bestScoreLabel&&(I.bestScoreLabel.textContent=i),I.bestLine&&(I.bestLine.innerHTML=`PERSONAL BEST <b>${i}</b>`);for(const e of I.trackCards){const t=Mi[e.dataset.track],n=e.querySelector(".tc-best");n&&(n.textContent=t?`PB ${t.rank||"—"}`:"",n.title=t?`Personal best ${t.score} · ${(t.acc||0).toFixed(2)}%`:""),e.classList.toggle("cleared",sf(t))}if(I.clearCount){const e=ma.filter(t=>sf(Mi[t.id])).length;I.clearCount.textContent=`${e} / ${ma.length} CLEARED`,I.clearCount.classList.toggle("all",e===ma.length)}}Me.setSection(zt.sections[0]);Me.setTempo(zt.song.bpm,zt.song.beatOffset);Me.setCity(zt.sections[0].city||0);Me.setBoss(ft.boss?"preview":"off",ft.theme||"untouchable");function d2(){for(const i of Gn)i.group.removeFromParent(),i.head.material.dispose(),i.body&&i.body.material.dispose(),i.tail&&i.tail.material.dispose();Gn=[]}function ru(){d2(),Gi=(zt.swings||[]).map((e,t)=>({t:e.t,index:t,state:"pending"}));const i=!!zt.song.freeNotes;Gn=zt.notes.map((e,t)=>{const n=Me.makeNote(e.lane,e.type,i);return n.group.visible=!1,{data:e,index:t,lane:e.lane,type:e.type,free:i,state:"pending",endTime:e.t+(e.dur||0),group:n.group,head:n.head,body:n.body,tail:n.tail,color:n.color,tickAt:e.t}})}function Dl(){Ft.active=!1,Ft.finished=!1,Ft.elapsed=0,Ft.visualT=0,document.body.classList.remove("game-over"),Me.resetGameOver();for(const i of Gn)i.state="pending",i.tickAt=i.data.t,i.group.visible=!1,i.group.position.set(0,0,0),i.head.visible=!0,i.head.scale.set(1.04,1.04,1),i.head.material.opacity=1,i.body&&(i.body.visible=!0,i.body.scale.set(.52,1,1),i.body.position.y=.5,i.tail.visible=!0,i.tail.position.y=1);Object.assign(Ve,{score:0,combo:0,maxCombo:0,judged:0,weight:0,perfect:0,great:0,good:0,bad:0,miss:0,dropped:0,health:100}),Il.fill(!1),oi.fill(null),Si.clear(),Hi.clear(),$a=0,ja=0,bi=[],sl=0,ll=0,Me.clearGhosts(),Me.clockReset(),so(),Me.pendulumReset(),hu();for(const i of Gi)i.state="pending";ol=0,Ta=null,pu(zt.sections[0],!0),lu(0),Ti(0,!1),I.judge.className="";for(const i of I.pads)i.classList.remove("pressed");I.flash.classList.remove("on")}function su(i){return af[i]||af[8]}function h2(i){const e=new Set;for(const t of Gn){if(t.state!=="pending")continue;const n=t.data.t-i;n<f2&&n>-uo&&e.add(t.lane)}return e}function p2(i){return String(i).padStart(2,"0")}function dl(i){const e=Math.max(0,Math.floor(i));return`${Math.floor(e/60)}:${p2(e%60)}`}function lu(i){i-sl>=.32&&(sl=i,bi.push(Ve.combo),bi.length>nu&&bi.shift()),I.score.textContent=String(Ve.score).padStart(7,"0");const e=Ve.judged?Ve.weight/Ve.judged*100:100;I.acc.textContent=e.toFixed(2)+"%",I.maxCombo.textContent=Ve.maxCombo;const t=Math.max(0,Math.min(1,i/Ll));I.progress.style.width=(t*100).toFixed(2)+"%",I.progressGlow.style.left=(t*100).toFixed(2)+"%";const n=Math.max(0,Math.min(rl,i));I.time.textContent=`${dl(n)} / ${dl(rl)}`,I.energy.style.height=(Re.forceSync?100:Math.max(0,Math.min(100,Ve.health))).toFixed(1)+"%"}function ho(i,e){const t=I.judge;t.textContent=e||i.toUpperCase(),t.className=i,t.offsetWidth,t.classList.add("pop")}function Ti(i,e=!0){Ve.combo=i,i>Ve.maxCombo&&(Ve.maxCombo=i),I.comboNum.textContent=i,I.maxCombo.textContent=Ve.maxCombo,i>=2?I.comboHud.classList.add("on"):I.comboHud.classList.remove("on"),i>=2&&e&&(I.comboHud.classList.remove("bump"),I.comboHud.offsetWidth,I.comboHud.classList.add("bump"))}function Ea(i,e=1300){I.toast.textContent=i,I.toast.classList.add("on"),clearTimeout(ul),ul=setTimeout(()=>I.toast.classList.remove("on"),e)}function Aa(i){document.body.classList.toggle("boss-intro",i),i||Xi()}function xr(i,e=!1){const t=i&&ft.theme==="intention";document.body.classList.toggle("intent-clean",t),hl(t&&e)}function hl(i){sr=!!i&&ft.theme==="intention",document.body.classList.toggle("intent-cutscene",sr),sr||Xi()}function Xi(){clearTimeout(cl),I.bossCaption&&(I.bossCaption.classList.remove("on"),I.bossCaption.setAttribute("aria-hidden","true"))}function m2(i){if(!I.bossCaption||ft.theme==="intention"&&!sr)return;clearTimeout(cl),I.bcKicker.textContent=i.kicker||"",I.bcTitle.textContent=i.title||"",I.bcSub.textContent=i.sub||"",I.bossCaption.setAttribute("aria-hidden","false"),I.bossCaption.classList.remove("on"),I.bossCaption.offsetWidth,I.bossCaption.classList.add("on");const e=i.hold??3.4;e>0&&(cl=setTimeout(()=>{I.bossCaption.classList.remove("on"),I.bossCaption.setAttribute("aria-hidden","true")},e*1e3))}function cu(i=1){I.bossGlitch&&(I.bossGlitch.classList.remove("on"),I.bossGlitch.offsetWidth,I.bossGlitch.classList.add("on"),clearTimeout(of),of=setTimeout(()=>I.bossGlitch.classList.remove("on"),340))}const g2=["70%","50%","30%"],y2=["bottom","middle","top"];function fu(i){if(!I.heartbeat)return;const e=(i%3+3)%3;I.heartbeat.style.setProperty("--hb-y",g2[e]),I.heartbeat.dataset.beat=String(e),I.heartbeat.dataset.position=y2[e]}function Ca(){const i=Math.max(0,Math.min(100,Re.fakeGuilt?Re.fakeValue:Re.guilt));I.guiltFill&&(I.guiltFill.style.width=i.toFixed(1)+"%"),I.guiltPct&&(I.guiltPct.textContent=String(Math.round(i)))}function uu(i){Re.notesHidden!==i&&(Re.notesHidden=i,Me.setIntentNoteLayerHidden(i))}function _2(i,e="",t=3.2){if(!I.intentText)return;clearTimeout(fl);const n=I.intentText.querySelector("span");n&&(n.textContent=i||"INTENTIONS",n.setAttribute("data-text",i||"INTENTIONS")),I.intentTextSub&&(I.intentTextSub.textContent=e||""),I.intentText.classList.remove("on"),I.intentText.offsetWidth,I.intentText.classList.add("on"),t>0&&(fl=setTimeout(()=>I.intentText.classList.remove("on"),t*1e3))}function du(){for(const i of["guilt-on","guilt-fake","heartbeat-on","static-on","static-heavy","distort-on","bright-on","intent-whiteout","intent-black","intent-yellow","intent-glitch"])document.body.classList.remove(i);I.heartbeat?.classList.remove("on","beat"),I.intentText?.classList.remove("on"),I.whiteout?.classList.remove("on"),I.yellow?.classList.remove("on"),I.rainbow?.classList.remove("on"),I.syncEl?.classList.remove("rainbow")}function hu(){clearTimeout(fl),du(),Re.phase="off",Re.guiltOn=!1,Re.guilt=100,Re.fakeGuilt=!1,Re.fakeValue=14,Re.fakeBase=14,Re.fakeStart=0,Re.heartOn=!1,Re.heartBpm=150,Re.hbAcc=0,Re.hbBeat=-1,Re.screenGlitch=!1,Re.glitchAcc=0,Re.forceSync=!1,I.heartbeat&&(I.heartbeat.classList.remove("on","beat"),I.heartbeat.style.setProperty("--hb-y","70%"),I.heartbeat.dataset.beat="0",I.heartbeat.dataset.position="bottom"),Re.notesHidden&&(Re.notesHidden=!1,document.body.classList.remove("intent-field-hidden"),Me.setIntentNoteLayerHidden(!1)),I.guiltCopy&&(I.guiltCopy.textContent="CONSISTENT PERFECTS KEEP IT FULL"),Ca()}function v2(i){const e=i.on!==!1;switch(i.hud){case"clear":du(),Re.guiltOn=!1,Re.fakeGuilt=!1,Re.heartOn=!1,Re.screenGlitch=!1,Re.forceSync=!1,Re.notesHidden&&uu(!1);break;case"black":document.body.classList.toggle("intent-black",e);break;case"guilt":Re.guiltOn=e,Re.fakeGuilt=!1,e&&(Re.guilt=i.value??100),document.body.classList.toggle("guilt-on",e),document.body.classList.remove("guilt-fake"),I.guiltCopy&&(I.guiltCopy.textContent="CONSISTENT PERFECTS KEEP IT FULL"),Ca();break;case"fakeGuilt":Re.fakeGuilt=e,Re.guiltOn=e,e&&(Re.fakeBase=i.value??14,Re.fakeValue=Re.fakeBase,Re.fakeStart=Rt.time),document.body.classList.toggle("guilt-fake",e),document.body.classList.toggle("guilt-on",e),I.guiltCopy&&(I.guiltCopy.textContent="IT WILL NOT REFILL"),Ca();break;case"heartbeat":Re.heartOn=e,i.bpm&&(Re.heartBpm=i.bpm),Re.hbAcc=0,e?(Re.hbBeat=-1,fu(0)):Re.hbBeat=-1,I.heartbeat?.classList.toggle("on",e),document.body.classList.toggle("heartbeat-on",e);break;case"glitch":Re.screenGlitch=e,document.body.classList.toggle("intent-glitch",e);break;case"text":if(ft.theme==="intention"&&String(i.text||"").trim().toUpperCase()!=="INTENTION")break;e?_2(i.text,i.sub,i.hold??3.2):I.intentText?.classList.remove("on");break;case"static":document.body.classList.toggle("static-on",e),document.body.classList.toggle("static-heavy",e&&(i.power??0)>=.9),document.body.classList.toggle("static-soft",e&&(i.power??0)<.9);break;case"distort":document.body.classList.toggle("distort-on",e);break;case"bright":document.body.classList.toggle("bright-on",e);break;case"white":I.whiteout?.classList.toggle("on",e),document.body.classList.toggle("intent-whiteout",e);break;case"yellow":document.body.classList.toggle("intent-yellow",e),I.yellow?.classList.toggle("on",e);break;case"rainbow":Re.forceSync=e,I.syncEl?.classList.toggle("rainbow",e),I.rainbow?.classList.toggle("on",e),e&&(I.energy.style.height="100%");break}}function x2(i){if(i.mode==="phase"){Re.phase=i.phase,Me.setIntentionPhase(i.phase),uu(i.phase==="dawn");return}i.mode==="hud"&&v2(i)}function Ul(i){if(!Re.guiltOn||Re.fakeGuilt)return;const e=i==="perfect"?1.35:i==="great"?.95:i==="good"?.5:i==="bad"?-2.2:-6;Re.guilt=Math.max(0,Math.min(100,Re.guilt+e)),Ca()}function b2(i,e){if(Re.guiltOn&&!Re.fakeGuilt){let t=0;for(const o of Gn)o.state==="pending"&&o.data.t>=e&&o.data.t<e+2.4&&t++;const n=t/2.4,a=.5+Math.min(1.5,n*.55);Re.guilt=Math.max(0,Math.min(100,Re.guilt-a*i)),Ca()}if(Re.fakeGuilt){const t=Math.max(0,Rt.time-Re.fakeStart);Re.fakeValue=Math.max(2.6,Re.fakeBase-t*.5),Ca()}if(Re.heartOn){Re.hbAcc+=i;const t=60/Math.max(40,Re.heartBpm);if(Re.hbAcc>=t){Re.hbAcc%=t,Re.hbBeat=(Re.hbBeat+1)%3,fu(Re.hbBeat);const n=I.heartbeat;n&&(n.classList.remove("beat"),n.offsetWidth,n.classList.add("beat"))}}else Re.hbAcc=0;Re.screenGlitch&&(Re.glitchAcc+=i,Re.glitchAcc>.52+Math.random()*.4&&(Re.glitchAcc=0,Me.bossGlitch(.32+Math.random()*.3),cu(.45)))}function pu(i,e=!1){if(!i||!e&&i===Ta)return;Ta=i,Me.setSection(i),i.bpm&&Me.setTempo(i.bpm,i.beatOffset??0),lr=_u*(i.noteSpeed||1),I.section.textContent=i.name,I.keys.textContent=i.keys,I.hudBpm&&i.bpm&&(I.hudBpm.textContent=`${Number(i.bpm).toFixed(1).replace(/\.0$/,"")} BPM`);const t=new Set(su(i.keys));for(const n of I.pads){const a=Number(n.dataset.lane),o=t.has(a);n.classList.toggle("active",o),n.classList.toggle("sleep",!o),n.setAttribute("aria-hidden",String(!o)),n.tabIndex=o?0:-1}document.documentElement.style.setProperty("--cyan",i.color),document.documentElement.style.setProperty("--magenta",i.accent),e||(ft.boss&&i.intro||Ea(`${i.name} // ${i.keys} LANES`,1100),Me.state.shake=Math.min(.12,Me.state.shake+.035))}function M2(i){const e=zt.sections;for(let t=e.length-1;t>=0;t--)if(i>=e[t].start)return{index:t,sec:e[t]};return{index:0,sec:e[0]}}function w2(i,e){const t=Math.abs(e);let n;t<=ya.perfect?n="perfect":t<=ya.great?n="great":t<=ya.good?n="good":n="bad",Ve[n]++,Ve.judged++,Ve.weight+=eu[n],Ve.score+=Qf[n],Ve.health=Math.min(100,Ve.health+(n==="perfect"?1.1:n==="great"?.8:n==="good"?.4:-1.6)),Ul(n),n==="bad"?Ti(0,!1):Ti(Ve.combo+1),i.type==="hold"?(i.state="holding",i.endTime=i.data.t+i.data.dur,i.tickAt=Rt.time,i.head.visible=!1,oi[i.lane]=i):(i.state="done",i.group.visible=!1),ho(n,n==="perfect"?"PERFECT":n==="great"?"GREAT":n==="good"?"GOOD":"BAD"),Me.hitFx(i.lane,n),Rt.click(i.lane,n==="perfect"?.52:.38)}function S2(i){i.state==="pending"&&(i.state="miss",i.group.visible=!1,Ve.miss++,Ve.judged++,Ve.health=Math.max(0,Ve.health-5),Ti(0,!1),ho("miss","MISS"),Me.missFx(i.lane),Rt.thud(),Ul("miss"))}function kl(i){i.state==="holding"&&(i.state="dropped",i.group.visible=!1,oi[i.lane]=null,Ve.dropped++,Ve.miss++,Ve.judged++,Ve.health=Math.max(0,Ve.health-4),Ti(0,!1),ho("miss","HOLD LOST"),Me.missFx(i.lane),Rt.thud(),Ul("miss"))}function Nl(i){i.state==="holding"&&(i.state="done",i.group.visible=!1,oi[i.lane]=null,Ve.score+=450,Ve.health=Math.min(100,Ve.health+1.2),Me.pressFx(i.lane),Me.hitFx(i.lane,"great"))}function mu(i,e=null){let t=null,n=1/0;for(const a of Gn){if(a.state!=="pending"||e!==null&&a.lane!==e)continue;const o=i-a.data.t;if(o<-.16||o>uo)continue;const s=Math.abs(o);s<n-1e-6&&(n=s,t=a)}return t}function T2(i){const e=I.pads[i];e&&(e.classList.add("pressed"),clearTimeout(rf[i]),rf[i]=setTimeout(()=>e.classList.remove("pressed"),90))}function gu(i,e){T2(i.lane),Me.pressFx(i.lane),w2(i,e-i.data.t)}function Fl(){if(lt!=="playing")return;const i=Rt.time;if(i<0)return;const e=mu(i);if(!e){Rt.click(3,.07);return}gu(e,i)}function E2(i){if(lt!=="playing")return;const e=Rt.time;if(e<0)return;const t=mu(e,i);if(!t){Me.pressFx(i),Rt.click(i,.1);return}gu(t,e)}function br(){if(lt!=="playing"||iu())return;const i=oi.filter(e=>e&&e.state==="holding");for(const e of i)oi[e.lane]=null,Rt.time<e.endTime-.12?kl(e):Nl(e)}function A2(i){if(lt!=="playing")return;const e=oi[i];e&&(au()||(oi[i]=null,Rt.time<e.endTime-.12?kl(e):Nl(e)))}function C2(i){Gi.length&&(ri=!0,Me.startPendulum({start:i.t,period:i.period??2.4146,amplitude:i.amplitude??.42,times:Gi.map(e=>e.t)}),document.body.classList.add("pendulum"),I.centerPad.classList.add("show"),I.centerPad.setAttribute("aria-hidden","false"),yu(),Ea("STASIS // TAP THE CENTRE",1800))}function so(){ri=!1,Me.stopPendulum(),document.body.classList.remove("pendulum"),I.centerPad&&(I.centerPad.classList.remove("show","pressed"),I.centerPad.setAttribute("aria-hidden","true"))}function yu(){if(!ri||!I.centerPad)return;const i=Me.pendulumTargetScreen(),e=Math.max(140,i.radius*2);I.centerPad.style.left=i.x.toFixed(1)+"px",I.centerPad.style.top=i.y.toFixed(1)+"px",I.centerPad.style.width=e.toFixed(1)+"px",I.centerPad.style.height=e.toFixed(1)+"px"}function R2(i,e){const t=Math.abs(e);let n;t<=ya.perfect?n="perfect":t<=ya.great?n="great":t<=ya.good?n="good":n="bad",i.state="done",Ve[n]++,Ve.judged++,Ve.weight+=eu[n],Ve.score+=Qf[n],Ve.health=Math.min(100,Ve.health+(n==="perfect"?1.2:n==="great"?.9:n==="good"?.5:-1.4)),n==="bad"?Ti(0,!1):Ti(Ve.combo+1),ho(n,n==="perfect"?"PERFECT":n==="great"?"GREAT":n==="good"?"GOOD":"BAD"),Me.swingResolve(i.index,"hit"),Rt.click(3,n==="perfect"?.56:.4)}function P2(i){i.state==="pending"&&(i.state="miss",Ve.miss++,Ve.judged++,Ve.health=Math.max(0,Ve.health-5),Ti(0,!1),ho("miss","MISS"),Me.swingResolve(i.index,"miss"),Rt.thud())}function L2(i){if(ri)for(const e of Gi)e.state==="pending"&&i>e.t+uo&&P2(e)}function Mr(){if(lt!=="playing"||!ri)return;const i=Rt.time;let e=null,t=1/0;for(const n of Gi){if(n.state!=="pending")continue;const a=i-n.t;if(a<-.16||a>uo)continue;const o=Math.abs(a);o<t&&(t=o,e=n)}if(!e){Me.swingWhiff(),Rt.click(3,.1);return}R2(e,i-e.t)}const _u=8.4;let lr=_u;function lf(i){const e=Me.noteScale;for(const t of Gn)if(t.state==="pending"){const n=(t.data.t-i)*lr;if(t.free){const a=Me.freeNotePose(t.lane,n,t.index);t.group.position.set(a.x,a.y,a.z)}else t.group.position.set(0,n,.24);if(t.group.visible=n<14.5&&n>-1.3,t.head.scale.set(1.04*e,1.04*e,1),t.body){const a=t.data.dur*lr;t.body.visible=t.group.visible,t.tail.visible=t.group.visible,t.body.scale.set(.52*e,a,1),t.body.position.y=a/2,t.body.material.rotation=t.free?0:-Me.laneScreenAngle(t.lane),t.tail.scale.set(.68*e,.68*e,1),t.tail.position.y=a}i>t.data.t+uo&&lt==="playing"&&S2(t)}else if(t.state==="holding"){if(!Il[t.lane]&&!au()){kl(t);continue}if(i>=t.endTime-.02){Nl(t);continue}const n=Math.max(0,(t.endTime-i)*lr);if(t.group.visible=!0,t.free){const a=Me.freeNotePose(t.lane,0,t.index);t.group.position.set(a.x,.02,a.z)}else t.group.position.set(0,.02,.24);t.head.visible=!1,t.body&&(t.body.visible=n>.03,t.body.scale.set(.52*e,n,1),t.body.position.y=n/2,t.body.material.rotation=t.free?0:-Me.laneScreenAngle(t.lane),t.tail.visible=n>.4,t.tail.scale.set(.68*e,.68*e,1),t.tail.position.y=n),i>t.tickAt&&(t.tickAt=i+.12,Ve.score+=24,Ve.health=Math.min(100,Ve.health+.06))}else t.group.visible=!1}async function Ol(){if(Rt.loaded){_a++,I.start.classList.remove("show"),I.result.classList.remove("show"),I.resultLoading.classList.remove("show"),I.pause.classList.remove("show"),I.hud.classList.remove("hidden"),I.hud.setAttribute("aria-hidden","false"),document.body.classList.add("playing"),Xi(),I.bossGlitch?.classList.remove("on"),ft.boss?(Me.setBoss("intro",ft.theme||"untouchable"),Aa(!0)):(Me.setBoss("off",ft.theme||"untouchable"),Aa(!1)),xr(ft.theme==="intention",!0),Dl(),lt="starting";try{await Rt.start(0,{fadeStart:ft.fadeStart,fadeEnd:ft.fadeEnd}),lt="playing",ft.boss||Ea(`LISTEN // ${zt.sections[0].keys} LANES`,1500)}catch(i){console.error(i),lt="menu",document.body.classList.remove("playing"),I.hud.classList.add("hidden"),I.start.classList.add("show"),I.startLabel.textContent="AUDIO ERROR",Ea("AUDIO COULD NOT START",3e3)}}}function wr(){lt==="playing"&&(lt="paused",Rt.pause(),I.pause.classList.add("show"))}async function vu(){lt==="paused"&&(Rt.resume(),I.pause.classList.remove("show"),lt="playing")}function xu(){_a++,lt="menu",Ft.active=!1,Ft.finished=!1,Ft.elapsed=0,document.body.classList.remove("game-over"),Me.resetGameOver(),Rt.stop(),Rt.resume(),I.pause.classList.remove("show"),I.result.classList.remove("show"),I.resultLoading.classList.remove("show"),I.hud.classList.add("hidden"),I.hud.setAttribute("aria-hidden","true"),I.start.classList.add("show"),document.body.classList.remove("playing"),Me.setSection(zt.sections[0]),Me.setTempo(zt.song.bpm,zt.song.beatOffset),Me.setCity(zt.sections[0].city||0),Me.setBoss(ft.boss?"preview":"off",ft.theme||"untouchable"),Me.setPreviewLanes(new Set),Aa(!1),xr(!1),Xi(),I.bossGlitch?.classList.remove("on"),hu();for(const i of Gn)i.group.visible=!1;Il.fill(!1),oi.fill(null),Si.clear(),Hi.clear(),$a=0,ja=0,Me.clearGhosts(),Me.clockReset(),so(),Me.pendulumReset(),ft.id==="chronostasis"&&Me.setClock("run",.4);for(const i of I.pads)i.classList.remove("pressed","active","sleep");document.documentElement.style.setProperty("--cyan","#5ee7ff"),document.documentElement.style.setProperty("--magenta","#ff5fd2")}function I2(i,e){return e===0?"F":i>=99.5?"S+":i>=98?"S":i>=93?"A":i>=86?"B":i>=76?"C":i<50?"F":"D"}function D2(i,e){const a=i.length?i:[0,0,0,0],o=Math.max(1,e,...a),s=320/Math.max(1,a.length-1);let r="";for(let c=0;c<a.length;c++){const f=c*s,u=116-a[c]/o*106;r+=`${c?"L":"M"}${f.toFixed(1)} ${u.toFixed(1)}`}const l=`${r}L320 116L0 116Z`;return{line:r,fill:l}}function cf(i=1){I.flash.style.opacity=String(Math.min(.42,.16+i*.18)),I.flash.classList.add("on"),clearTimeout(ll),ll=setTimeout(()=>{I.flash.style.opacity="",I.flash.classList.remove("on")},180)}function ff(i,e,t,n){const o=performance.now(),s=r=>{const l=Math.min(1,(r-o)/t),c=1-Math.pow(1-l,3);i.textContent=n(Math.round(0+(e-0)*c)),l<1&&requestAnimationFrame(s)};requestAnimationFrame(s)}function U2(i){const{rank:e,acc:t,full:n,isBest:a,prevBest:o,judgeTotals:s}=i;I.rank.textContent=e,I.finalScore.textContent="0000000",I.finalAcc.textContent="0.00%",ff(I.finalScore,i.score,900,p=>String(p).padStart(7,"0")),ff(I.fMaxCombo,i.maxCombo,700,p=>String(p));const r=performance.now(),l=p=>{const y=Math.min(1,(p-r)/900),x=t*(1-Math.pow(1-y,3));I.finalAcc.textContent=x.toFixed(2)+"%",I.accRing.style.setProperty("--acc",x.toFixed(2)+"%"),y<1&&requestAnimationFrame(l)};requestAnimationFrame(l),I.cPerfect.textContent=i.counts.perfect,I.cGreat.textContent=i.counts.great,I.cGood.textContent=i.counts.good,I.cBad.textContent=i.counts.bad,I.cMiss.textContent=i.counts.miss;const c=Math.max(1,s);I.barPerfect.style.width=(i.counts.perfect/c*100).toFixed(1)+"%",I.barGreat.style.width=(i.counts.great/c*100).toFixed(1)+"%",I.barGood.style.width=(i.counts.good/c*100).toFixed(1)+"%",I.barBad.style.width=(i.counts.bad/c*100).toFixed(1)+"%",I.barMiss.style.width=(i.counts.miss/c*100).toFixed(1)+"%";const f=D2(bi,Ve.maxCombo);I.comboLine.setAttribute("d",f.line),I.comboFill.setAttribute("d",f.fill),I.peakCombo.textContent=Ve.maxCombo,I.resultTrack.textContent=ft.title,I.resultDiff.textContent=ft.difficulty,I.resultBpm.textContent=ft.bpmLabel||`${ft.bpm} BPM`,I.footTrack.textContent=ft.shortTitle,I.footLanes.textContent=ft.laneLabel,I.resultTag.textContent=i.failed?"SIGNAL LOST // GAME OVER":n?"FULL COMBO // FIELD MASTERED":i.cleared?ft.boss?ft.clearTag||"THE UNTOUCHABLE // FELLED":"CLEARED // SIGNAL COMPLETE":"SIGNAL LOST // TRY AGAIN",I.fcBadge.classList.toggle("on",n),I.bestBadge.classList.toggle("on",a);const u=Mi[ft.id]||null;I.bestNote.innerHTML=u?`${String(u.score).padStart(7,"0")} · ${u.rank||"—"}`:"FIRST RUN";const h=Math.max(0,(u?.score||0)-i.score);I.scoreDelta.textContent=a?o?`NEW BEST +${String(Math.max(0,i.score-o.score)).padStart(5,"0")}`:i.cleared?"FIRST CLEAR":"FIRST SCORE":i.scored?h>0?`PB GAP ${String(h).padStart(5,"0")}`:"PB MATCHED":"NO SCORE RECORDED",I.result.classList.remove("show"),I.result.offsetWidth,I.result.classList.add("show"),setTimeout(()=>{I.resultLoading.classList.remove("show")},60),I.resultLoading.setAttribute("aria-hidden","true")}function k2(){Ft.active||lt!=="playing"&&lt!=="paused"||(Ft.active=!0,Ft.finished=!1,Ft.elapsed=0,Ft.wallStart=performance.now(),Ft.t0=Rt.time,Ft.visualT=Ft.t0,lt="gameover",Rt.pitchDrop(.5,2.4),Me.startGameOver(),document.body.classList.add("game-over"),clearTimeout(ul),I.toast.classList.remove("on"),Xi(),so(),I.pause.classList.remove("show"))}function N2(){Ft.elapsed=(performance.now()-Ft.wallStart)/1e3;const i=Math.min(1,Ft.elapsed/2.7),e=1-Math.pow(1-i,2.3);Ft.visualT=Ft.t0+1.3*e,!Ft.finished&&Ft.elapsed>=3.7&&(Ft.finished=!0,bu(!0))}function bu(i=!1){if(lt!=="playing"&&lt!=="paused"&&lt!=="gameover")return;lt="results",Rt.stop(),Rt.resume(),Ft.active=!1,Me.resetGameOver(),document.body.classList.remove("game-over"),I.hud.classList.add("hidden"),I.hud.setAttribute("aria-hidden","true"),I.pause.classList.remove("show"),document.body.classList.remove("playing"),xr(!1),Aa(!1);const e=Ve.judged?Ve.weight/Ve.judged*100:100,t=I2(e,Ve.judged);bi.push(Ve.combo),bi.length>nu&&bi.shift();const n=!i&&Ve.miss===0&&Ve.bad===0&&Ve.judged>0,a=Ve.score,o=a>0&&!i,s=o&&e>=50,r=Mi[ft.id]||null,l=o&&(!r||a>r.score||a===r.score&&e>r.acc);if(l){Mi[ft.id]={score:a,acc:e,rank:t,maxCombo:Ve.maxCombo,full:n,at:Date.now()};try{localStorage.setItem(tu,JSON.stringify(Mi))}catch{}}ou();const c={score:a,acc:e,rank:t,full:n,isBest:l,prevBest:r,scored:o,cleared:s,failed:i,maxCombo:Ve.maxCombo,counts:{...Ve},judgeTotals:Ve.judged},f=++_a;I.result.classList.remove("show"),I.resultLoading.classList.add("show"),I.resultLoading.setAttribute("aria-hidden","false"),I.loadTrack.textContent=`${ft.shortTitle} // ${ft.difficulty}`,I.loadRank.textContent="?",I.loadProgress.style.width="0%",I.loadPct.textContent="00%";const u=performance.now(),h=1650,p=y=>{if(f!==_a)return;const x=Math.min(1,(y-u)/h),m=1-Math.pow(1-x,3);I.loadProgress.style.width=(m*100).toFixed(1)+"%",I.loadPct.textContent=String(Math.round(m*100)).padStart(2,"0")+"%",x<1?requestAnimationFrame(p):(I.loadRank.textContent=t,setTimeout(()=>{f===_a&&U2(c)},280))};requestAnimationFrame(p)}function F2(){_a++,I.result.classList.remove("show"),Ol()}function uf(i=new Set){const e=new Set(Ta?su(Ta.keys):[]);for(const t of i)e.add(t);for(let t=0;t<8;t++){const n=Me.laneScreenGeometry(t),a=t>0?n.x-Me.laneScreenGeometry(t-1).x:n.x-Me.laneScreenGeometry(1).x,o=t<7?Me.laneScreenGeometry(t+1).x-n.x:n.x-Me.laneScreenGeometry(6).x,s=Math.max(26,(Math.abs(a)+Math.abs(o))*.5),r=Math.max(48,Math.min(240,s*1.1)),l=n.y+26,c=Math.max(6,Math.min(l-110,n.topY)),f=Math.max(110,l-c),u=I.pads[t],h=`translate(-50%,-100%) rotate(${n.angle.toFixed(4)}rad)`;u.style.left=n.x.toFixed(1)+"px",u.style.top=l.toFixed(1)+"px",u.style.width=r.toFixed(1)+"px",u.style.height=f.toFixed(1)+"px",u.style.transform=h;const p=e.has(t);u.classList.contains("sleep")===p&&u.classList.toggle("sleep",!p),u.setAttribute("aria-hidden",String(!p))}yu()}function O2(i){const e=M2(i);(e.index!==ol||Ta===null)&&(ol=e.index,pu(e.sec))}function B2(i){const e=zt.ghosts||[];for(;$a<e.length&&e[$a].t<=i;){const t=e[$a++];Me.ghostFx(t.lane,t.type)}}function z2(i){const e=zt.events||[];for(;ja<e.length&&e[ja].t<=i;){const t=e[ja++];switch(t.type){case"echo":Me.echoFx(t.lane,t.dir??(t.lane<3.5?-1:1),t.power??1);break;case"pulse":Me.pulseFx(t.power??1);break;case"burst":Me.burstFx(t.lane,t.power??1);break;case"vibe":Me.vibeFx(t.power??1),cf(t.power??1);break;case"motion":Me.motionEvent(t.style,t.amp,t.speed,t.pitch);break;case"clock":Me.setClock(t.mode,t.power??1,t.t),t.mode!=="freeze"&&so();break;case"clockTick":Me.clockTick(t.hand,t.power??1);break;case"pendulum":t.mode==="start"?C2(t):so();break;case"bossCamera":Me.bossCameraEvent(t.pos,t.look,t.fov,t.roll,t.dur);break;case"bossGlitch":Me.bossGlitch(t.power??1),cu(t.power??1),cf((t.power??1)*.6);break;case"bossTick":Me.bossTick(t.hand,t.power??1);break;case"bossPhase":Me.setBoss(t.mode==="play"?"play":"outro",ft.theme),t.mode==="play"?(Aa(!1),ft.theme==="intention"?hl(!1):Ea("CLOCK STAGE // FREE FIELD",1700)):ft.theme==="intention"?hl(!0):Xi();break;case"intent":x2(t);break;case"wind":Me.windFx(t.power??1);break;case"caption":m2(t);break}}}function G2(i){if(i.code==="Escape"){lt==="playing"?(i.preventDefault(),wr()):lt==="paused"&&(i.preventDefault(),vu());return}if(i.code==="Space"){lt==="playing"&&ri&&(i.preventDefault(),i.repeat||Mr());return}i.repeat||Jf[i.code]!==void 0&&(i.preventDefault(),lt==="playing"&&(Hi.has(i.code)||(Hi.add(i.code),Fl())))}function H2(i){Jf[i.code]!==void 0&&(Hi.delete(i.code),br())}document.addEventListener("keydown",G2,{passive:!1});document.addEventListener("keyup",H2);function V2(i){return!!i?.closest?.("#pauseBtn, #centerPad, .overlay, #startScreen, #resultScreen, #pauseScreen")}function W2(i){if(lt==="playing"&&!V2(i.target)){i.preventDefault();try{i.target.setPointerCapture?.(i.pointerId)}catch{}Si.add(i.pointerId),ri?Mr():Fl()}}function Mu(i){Si.delete(i.pointerId),br()}window.addEventListener("pointerdown",W2,{capture:!0,passive:!1});window.addEventListener("pointerup",Mu,{capture:!0,passive:!0});window.addEventListener("pointercancel",Mu,{capture:!0,passive:!0});window.addEventListener("blur",()=>{Si.clear(),Hi.clear(),br()});for(const i of I.pads)i.addEventListener("contextmenu",e=>e.preventDefault());if(I.centerPad){const i=t=>{t.preventDefault(),!(lt!=="playing"||!ri)&&(Si.add(t.pointerId),I.centerPad.classList.add("pressed"),Mr())},e=t=>{t.preventDefault(),Si.delete(t.pointerId),I.centerPad.classList.remove("pressed"),br()};I.centerPad.addEventListener("pointerdown",i,{passive:!1}),I.centerPad.addEventListener("pointerup",e,{passive:!1}),I.centerPad.addEventListener("pointercancel",e,{passive:!1}),I.centerPad.addEventListener("lostpointercapture",e,{passive:!1}),I.centerPad.addEventListener("contextmenu",t=>t.preventDefault())}I.startBtn.addEventListener("click",()=>{(lt==="boot"||lt==="menu")&&Ol()});for(const i of I.trackCards)i.addEventListener("click",()=>{lt!=="boot"&&lt!=="menu"||i.dataset.track!==ft.id&&Su(i.dataset.track)});I.pauseBtn.addEventListener("click",wr);_e("resumeBtn").addEventListener("click",vu);_e("restartBtn").addEventListener("click",()=>{I.pause.classList.remove("show"),Ol()});_e("quitBtn").addEventListener("click",xu);_e("retryBtn").addEventListener("click",F2);_e("menuBtn").addEventListener("click",xu);document.addEventListener("visibilitychange",()=>{document.hidden&&lt==="playing"&&wr()});addEventListener("blur",()=>{lt==="playing"&&wr()});I.canvas.addEventListener("contextmenu",i=>i.preventDefault());function wu(){const i=ft;I.startTrack&&(I.startTrack.textContent=i.shortTitle),I.startLength&&(I.startLength.textContent=dl(i.duration)),I.startLevel&&(I.startLevel.textContent=i.difficulty),I.startLanes&&(I.startLanes.textContent=i.laneLabel),I.hudTrack&&(I.hudTrack.textContent=i.shortTitle),I.hudBpm&&(I.hudBpm.textContent=i.bpmLabel||`${i.bpm} BPM`),I.loadTrack&&(I.loadTrack.textContent=`${i.shortTitle} // ${i.difficulty}`);const e=_e("trackCount");e&&(e.textContent=String(ma.length).padStart(2,"0")),document.body.classList.toggle("boss-track",!!i.boss);for(const t of I.trackCards){const n=pl[t.dataset.track];n&&t.style.setProperty("--card-accent",n.accent);const a=t.dataset.track===i.id;t.classList.toggle("active",a),t.setAttribute("aria-selected",String(a))}document.documentElement.style.setProperty("--track-accent",i.accent),ou()}async function Su(i,{autoLoad:e=!0}={}){const t=pl[i];t&&(ft=t,zt=t.chart,Ll=zt.song.chartEnd,rl=t.duration,wu(),Aa(!1),xr(!1),Xi(),I.bossGlitch?.classList.remove("on"),Me.setBoss(t.boss?"preview":"off",t.theme||"untouchable"),Me.setSection(zt.sections[0]),Me.setTempo(zt.song.bpm,zt.song.beatOffset),Me.setCity(zt.sections[0].city||0),Me.setPreviewLanes(new Set),ru(),Dl(),t.id==="chronostasis"&&Me.setClock("run",.4),e&&(lt="boot",I.startBtn.disabled=!0,await Tu(t)))}async function Tu(i=ft){const e=++er;I.startLabel.textContent="DECODING AUDIO",I.loadFill.style.width="0%";try{const t=await Rt.load(i.audio,n=>{e===er&&(I.loadFill.style.width=Math.round(n*100)+"%")});if(e!==er)return;Rt.setBuffer(t),I.loadFill.style.width="100%",I.startLabel.textContent="START SESSION",I.startBtn.disabled=!1,lt="menu"}catch(t){if(e!==er)return;console.error(t),I.startLabel.textContent="AUDIO UNAVAILABLE",Ea("COULD NOT LOAD AUDIO",4e3),lt="menu"}}ru();Dl();lt="boot";wu();Tu(ft);let df=performance.now(),ms=0;function Eu(i){const e=Math.min(.05,Math.max(0,(i-df)/1e3));if(df=i,ms+=e,lt==="playing"){const t=Rt.time;O2(t);const n=h2(t);Me.setPreviewLanes(n),B2(t),z2(t),b2(e,t),L2(t),lf(t),lu(t),Me.animate(e,t,!0),uf(n);const a=Ve.health<=.001||Re.guiltOn&&!Re.fakeGuilt&&Re.guilt<=.001;t>=Ll?bu():a&&k2()}else if(lt==="gameover")N2(),lf(Ft.visualT),Me.animate(e,Ft.visualT,!0),uf(new Set);else if(lt==="paused"){const t=Rt.time;Me.animate(e,t,!0)}else Me.animate(e,ms,!1);Me.render(),requestAnimationFrame(Eu)}window.__cryout={audio:Rt,stats:Ve,scene:Me,pressLane:E2,pressGlobal:Fl,releaseLane:A2,selectTrack:Su,get chart(){return zt},get notes(){return Gn},get swings(){return Gi},get swingMode(){return ri},swingTap:Mr,get state(){return lt},get best(){return Ya},get intent(){return Re}};requestAnimationFrame(Eu);
