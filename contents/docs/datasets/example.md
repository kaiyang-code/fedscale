## Example Dataset

### Google Speech Commands

A speech recognition dataset with over ten thousand clips of one-second-long duration. Each clip contains one of the 35 common words (e.g., digits zero to nine, "Yes", "No", "Up", "Down") spoken by thousands of different people.

### OpenImage.

[OpenImage](https://storage.googleapis.com/openimages/web/index.html) is a vision dataset collected from Flickr, an image and video hosting service. It contains a total of 16M bounding boxes for 600 object classes (e.g., Microwave oven). We clean up the dataset according to the provided indices of clients.

### Reddit and StackOverflow

Reddit (StackOverflow) consists of comments from the Reddit (StackOverflow) website. It has been widely used for language modeling tasks, and we consider each user as a client. In our benchmark, we restrict to the 30k most frequently used words, and represent each sentence as a sequence of indices corresponding to these 30k frequently used words. We use Transformers to tokenize these sequences with a block size 64.

### Dataset of System Performance and Availability

#### Heterogeneous System Performance

We use the [AIBench](http://ai-benchmark.com/ranking_deeplearning_detailed.html) dataset and [MobiPerf](https://www.measurementlab.net/tests/mobiperf/) dataset. AIBench dataset provides the computation capacity of different models across a wide range of devices. As specified in real [FL deployments](https://arxiv.org/abs/1902.01046), we focus on the capability of mobile devices that have > 2GB RAM in this benchmark. To understand the network capacity of these devices, we clean up the MobiPerf dataset, and provide the available bandwidth when they are connected with WiFi, which is preferred in FL as well.

#### Availability of Clients

We use a large-scale real-world user behavior dataset from [FLASH](https://github.com/PKU-Chengxu/FLASH). It comes from a popular input method app (IMA) that can be downloaded from Google Play, and covers 136k users and spans one week from January 31st to February 6th in 2020. This dataset includes 180 million trace items (e.g., battery charge or screen lock) and we consider user devices that are in charging to be available, as specified in real [FL deployments](https://arxiv.org/abs/1902.01046).
