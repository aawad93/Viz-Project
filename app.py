from flask import Flask, jsonify

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    return "Hello World"

@app.route("/co2_map")
def co2Map():
    file = "processed_data/co2_map.csv"
    return file

@app.route("/CO2_byCountry.csv")
def CO2_byCountry():
    file = "processed_data/CO2_byCountry.csv"
    return file

@app.route("/energy_heatmap.csv")
def energy_heatmap():
    file = "processed_data/energy_heatmap.csv"
    return file

@app.route("/EnergyProduction_byCountry.csv")
def EnergyProduction_byCountry():
    file = "processed_data/EnergyProduction_byCountry.csv"
    return file


if __name__ == '__main__':
    app.run(debug=True)
