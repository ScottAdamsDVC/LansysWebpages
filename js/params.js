var systemparams=
{
systemname:"Lancaster",
Location:'Woburn',
Logfile:'/home/dvc/logfile',
InvalidTones:"On",
Attach:"On",
Buzzer:"On",
ToneBuzzer:"On",
DebugLevel:"0x0000",
Fan:"Auto",
FanSpeed:"Slow",
Console:"SOCA"
};
var splicerparams=
{
splicername:"Splicer A", 
StreamingIPAddr:"192.168.3.91",
ControlIPAddr:"192.168.2.90:5168",
PortBase:"5000"
};
var channelgains= [
{
channel:"0",
GainNetworkLeft:"0",
GainNetworkRight:"0",
GainDecoderLeft:"0",
GainDecoderRight:"0",
AudioMute:"Off",
NetworkGainEnable:"Off",
LevelMatchingEnable:"On"
},
{
channel:"1",
GainNetworkLeft:"0",
GainNetworkRight:"0",
GainDecoderLeft:"0",
GainDecoderRight:"0",
AudioMute:"Off",
NetworkGainEnable:"Off",
LevelMatchingEnable:"On"
},
{
channel:"2",
GainNetworkLeft:"0",
GainNetworkRight:"0",
GainDecoderLeft:"0",
GainDecoderRight:"0",
AudioMute:"Off",
NetworkGainEnable:"Off",
LevelMatchingEnable:"On"
},
{
channel:"3",
GainNetworkLeft:"0",
GainNetworkRight:"0",
GainDecoderLeft:"0",
GainDecoderRight:"0",
AudioMute:"Off",
NetworkGainEnable:"Off",
LevelMatchingEnable:"On"
}
];
var channelparams= [
{
channel:"0",
channelname:"CH01", 
zonename:"Z01", 
trigger: "dtmf",
cutoff: "60",
entrydelim: "*",
exitdelim: "#",
exitflag: "ignore",
genlock: "genlock_fast",
agcdec: "agc_dec_on",
preroll: "240",
postblack: "0",
toneone: "123",
tonetwo: "000",
tonethree: "000",
tonefour: "000",
swbacktime: "0",
latestart: "0",
earlystop: "0",
pal: "ntsc",
frm_sec: "30",
bypass: "channel_enable",
vnet_agc: "On",
vdec_agc: "On"
},
{
channel:"1",
channelname:"CH02", 
zonename:"Z01", 
trigger: "dtmf",
cutoff: "60",
entrydelim: "*",
exitdelim: "#",
exitflag: "ignore",
genlock: "genlock_fast",
agcdec: "agc_dec_on",
preroll: "240",
postblack: "0",
toneone: "123",
tonetwo: "000",
tonethree: "000",
tonefour: "000",
swbacktime: "0",
latestart: "0",
earlystop: "0",
pal: "ntsc",
frm_sec: "30",
bypass: "channel_enable",
vnet_agc: "On",
vdec_agc: "On"
},
{
channel:"2",
channelname:"CH03", 
zonename:"Z01", 
trigger: "dtmf",
cutoff: "60",
entrydelim: "*",
exitdelim: "#",
exitflag: "ignore",
genlock: "genlock_fast",
agcdec: "agc_dec_on",
preroll: "240",
postblack: "0",
toneone: "123",
tonetwo: "000",
tonethree: "000",
tonefour: "000",
swbacktime: "0",
latestart: "0",
earlystop: "0",
pal: "ntsc",
frm_sec: "30",
bypass: "channel_enable",
vnet_agc: "On",
vdec_agc: "On"
},
{
channel:"3",
channelname:"CH04", 
zonename:"Z01", 
trigger: "dtmf",
cutoff: "60",
entrydelim: "*",
exitdelim: "#",
exitflag: "ignore",
genlock: "genlock_fast",
agcdec: "agc_dec_on",
preroll: "240",
postblack: "0",
toneone: "123",
tonetwo: "000",
tonethree: "000",
tonefour: "000",
swbacktime: "0",
latestart: "0",
earlystop: "0",
pal: "ntsc",
frm_sec: "30",
bypass: "channel_enable",
vnet_agc: "On",
vdec_agc: "On"
}
];
var SpotData = [
{
PeakdB: "Spot 1 Video:714 mV 100 IRE - Audio:L-12.38 dB R -14.45 dB",
Stats: "MPEG-2 pid=-0x01E0 [720x480] pid=0x01E2 [AC3 48000]",
Status: "Played - Matched Audio RC[0x00000000]"
},
{
PeakdB: "Spot 2 Video:714 mV 100 IRE - Audio:L-12.38 dB R -14.45 dB",
Stats: "MPEG-2 pid=-0x01E0 [720x480] pid=0x01E2 [AC3 48000]",
Status: "Played - Matched Audio RC[0x00000000]"
},
{
PeakdB: "Spot 3 Video:714 mV 100 IRE - Audio:L-12.38 dB R -14.45 dB",
Stats: "MPEG-2 pid=-0x01E0 [720x480] pid=0x01E2 [AC3 48000]",
Status: "Played - Matched Audio RC[0x00000000]"
},
{
PeakdB: "Spot 4 Video:714 mV 100 IRE - Audio:L-12.38 dB R -14.45 dB",
Stats: "MPEG-2 pid=-0x01E0 [720x480] pid=0x01E2 [AC3 48000]",
Status: "Played - Matched Audio RC[0x00000000]"
},
{
PeakdB: "Spot 5 Video:714 mV 100 IRE - Audio:L-12.38 dB R -14.45 dB",
Stats: "MPEG-2 pid=-0x01E0 [720x480] pid=0x01E2 [AC3 48000]",
Status: "Played - Matched Audio RC[0x00000000]"
},
{
PeakdB: "Spot 6 Video:714 mV 100 IRE - Audio:L-12.38 dB R -14.45 dB",
Stats: "MPEG-2 pid=-0x01E0 [720x480] pid=0x01E2 [AC3 48000]",
Status: "Played - Matched Audio RC[0x00000000]"
},
{
PeakdB: "Spot 7 Video:714 mV 100 IRE - Audio:L-12.38 dB R -14.45 dB",
Stats: "MPEG-2 pid=-0x01E0 [720x480] pid=0x01E2 [AC3 48000]",
Status: "Played - Matched Audio RC[0x00000000]"
},
{
PeakdB: "Spot 8 Video:714 mV 100 IRE - Audio:L-12.38 dB R -14.45 dB",
Stats: "MPEG-2 pid=-0x01E0 [720x480] pid=0x01E2 [AC3 48000]",
Status: "Played - Matched Audio RC[0x00000000]"
}
];
