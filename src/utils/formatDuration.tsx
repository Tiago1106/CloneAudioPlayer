export default function formatDuration(duration: string) {
  const newDuration = duration.substring(0, duration.length - 1).split("m ")
  
  var auxMinute = "";
  var auxSeconds = "";
  
  // minutes
  if (parseInt(newDuration[0]) < 10) {
    auxMinute = `0${newDuration[0]}`;
  } else {
    auxMinute = newDuration[0];
  }
  
  // minutes
  if (parseInt(newDuration[1]) < 10) {
    auxSeconds = `0${newDuration[1]}`;
  } else {
    auxSeconds = newDuration[1];
  }
  var newFormat = `${auxMinute}:${auxSeconds}`;
  return newFormat;
}
