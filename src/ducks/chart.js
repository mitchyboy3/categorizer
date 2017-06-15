const initialState = {
  activeChartIndex: 0,
  charts: [
    {
      labels: [ "Red", "Blue", "Yellow", "Green", "Purple", "Orange" ], 
      name: "Example Chart", 
      datasets: [
        {
          label: "My First dataset", 
          data: [65, 59, 90, 81, 56, 55, 40]
        },
        {
          label: "My Second dataset",
          data: [28, 48, 40, 19, 96, 27, 100]
        }
      ]
    }
  ]
};

const CREATE_CHART = 'CREATE_CHART';

export function createChart(labels, names){
    return {
        chart: { labels, names, datasets: []},
        type: CREATE_CHART
    }
}

export default function chart(state = initialState, action){
    switch(action.type){
        case CREATE_CHART:
            return {
                activeChartIndex: 0,
                charts: [action.chart, ...state.charts]      
            }
        default: 
            return state;
    }

}