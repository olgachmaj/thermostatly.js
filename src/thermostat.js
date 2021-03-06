class Thermostat {
  constructor(){
    this.temperature = 20
    this.maxTemperature = 25
    this.powerSavingMode = 'on'
  }

  up() {
    return (this.temperature >= this.maxTemperature) ? `Maximum temperature is ${this.maxTemperature}` : this.temperature += 1
  }

  down() {
    return (this.temperature <= 10) ? "Minimum temperature is 10 degrees." : this.temperature -= 1;
  }

  savingModeSwitch() {
    this.powerSavingMode === 'on' ? this.powerSavingMode = 'off': this.powerSavingMode = 'on'
    this.maxTemperature === 25 ? this.maxTemperature = 32 : this.maxTemperature = 25
  }

  currentEnergyUse() {
    if( this.temperature <= 18 ) {
      return 'low-usage'
    }
    else if( this.temperature <= 25 && this.temperature > 18 ){
      return 'medium-usage'
    }
    else {
      return 'high-usage'
    }
  }

  reset() {
    this.temperature = 20
    return 'Thermostat temperature has been reset'
  }
}
