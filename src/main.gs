function dailyTrigger() {
  var scheduleData = generateScheduleData();
  saveJsonToDrive(scheduleData);
}
