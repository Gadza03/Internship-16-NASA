export type NeoType = {
  id: string;
  name: string;
  absolute_magnitude_h: number;
  estimated_diameter: {
    kilometers: {
      estimated_diameter_min: number;
      estimated_diameter_max: number;
    };
  };
  is_potentially_hazardous_asteroid: boolean;
  close_approach_data: [
    {
      close_approach_date: string;
      relative_velocity: {
        kilometers_per_hour: number;
      };
      miss_distance: {
        kilometers: number;
      };

      orbiting_body: string;
    }
  ];
  is_sentry_object: boolean;
};
