#include "DHT.h"

DHT dht;

void setup()
{
  Serial.begin(9600);
  Serial.println();
  //Serial.println("Status\tHumidity (%)\tTemperature (C)\t(F)");

  dht.setup(2); // data pin 2
}

void loop()
{
  delay(dht.getMinimumSamplingPeriod());

  float humidity = dht.getHumidity();
  float temperature = dht.getTemperature();
  Serial.println("");
  Serial.print(humidity, 1);
  Serial.print(",");
  Serial.print(dht.toFahrenheit(temperature), 1);

  delay(5000);
}
