## FedScale Automated Runtime: Evaluation Platform for Federated Learning

Existing FL evaluation platforms can hardly reproduce the scale of practical FL deployments and often fall short in providing user-friendly APIs,
thus requiring great developer efforts to deploy new plugins. As such, we introduce FedScale Automated Runtime (FAR),
an automated and easily-deployable evaluation platform, to simplify and standardize the FL experimental setup and model evaluation under a practical setting.
FAR is based on our [Oort project](https://github.com/SymbioticLab/Oort), which has been shown to scale well and can emulate FL training of thousands of clients
in each round.

## Preliminary

Our training evaluations rely on a distributed setting of GPUs/CPUs via the Parameter-Server (PS) architecture.
In our paper, we used up to 68 GPUs to simulate the FL aggregation of 1300 participants in each round.
Each training experiment is pretty time-consuming, as each GPU has to run multiple clients (1300/68 in our case) for each round.

We outline some numbers on Tesla P100 GPUs for each line in our plots when using 100 participants/round for reference
(we also provide estimated prices on [Google Cloud](https://cloud.google.com/products/calculator), but they may be inaccurate):

| Setting | Time to Target Accuracy | Time to Converge      |
| ------- | ----------------------- | --------------------- |
| YoGi    | 53 GPU hours (~$97)     | 121 GPU hours (~$230) |

Table 1: GPU hours on Openimage dataset with ShuffleNet

**_Due to the high computation load on each GPU, we recommend the user make sure that each GPU is simulating no more than 20 clients.
i.e., if the number of participants in each round is K, then we would better use at least K/20 GPUs._**
