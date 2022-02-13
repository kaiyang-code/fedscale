## Realistic FL Datasets

**_We are adding more datasets! Please feel free to contribute._**

We provide real-world datasets for the federated learning community, and plan to release much more soon! Each is associated with its training, validation and testing dataset. A summary of statistics for training datasets can be found in Table, and you can refer to each folder for more details. Due to the super large scale of datasets, we are uploading these data and carefully validating their implementations to FAR. So we are actively making each dataset available for FAR experiments.

CV tasks:

|   Dataset         | Data Type | # of Clients | # of Samples | Example Task                           |
| --------------- | --------- | ------------ | ------------ | -------------------------------------- |
| iNature         | Image     | 2,295        | 193K         | Classification                         |
| FMNIST          | Image     | 3,400        | 640K         | Classification                         |
| OpenImage       | Image     | 13,771       | 1.3M         | Classification, Object detection       |
| Google Landmark | Image     | 43,484       | 3.6M         | Classification                         |
| Charades        | Video     | 266          | 10K          | Action recognition                     |
| VLOG            | Video     | 4,900        | 9.6k         | Video classification, Object detection |

NLP tasks:

| Dataset       | Data Type | # of Clients | # of Samples | Example Task                    |
| ------------- | --------- | ------------ | ------------ | ------------------------------- |
| Europarl      | Text      | 27,835       | 1.2M         | Text translation                |
| Blog Corpus   | Text      | 19,320       | 137M         | Word prediction                 |
| Stackoverflow | Text      | 342,477      | 135M         | Word prediction, classification |
| Reddit        | Text      | 1,660,820    | 351M         | Word prediction                 |
| Amazon Review | Text      | 1,822,925    | 166M         | Classification, Word prediction |
| CoQA          | Text      | 7,189        | 114K         | Question Answering              |
| LibriTTS      | Text      | 2,456        | 37K          | Text to speech                  |
| Google Speech | Audio     | 2,618        | 105K         | Speech recognition              |
| Common Voice  | Audio     | 12,976       | 1.1M         | Speech recognition              |

Misc Applications:

| Dataset         | Data Type | # of Clients | # of Samples | Example Task           |
| --------------- | --------- | ------------ | ------------ | ---------------------- |
| Taxi Trajectory | Text      | 442          | 1.7M         | Sequence Prediction    |
| Taobao          | Text      | 182,806      | 0.9M         | Recommendation         |
| Go dataset      | Text      | 150,333      | 4.9M         | Reinforcement learning |

**_Note that no details were kept of any of the participants age, gender, or location, and random ids were assigned to each individual. In using these datasets, we will strictly obey to their licenses, and these datasets provided in this repo should be used for research purpose only. _**
