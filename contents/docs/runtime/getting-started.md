## Getting Started

### Setting GPU Cluster

**_Please assure that these paths are consistent across all nodes so that the simulator can find the right path._**

- **_Coordinator_**: Make sure that the coodinator (master node) has access to other worker nodes via `ssh`.

- **_All Nodes_**: Follow [this](https://github.com/SymbioticLab/FedScale#getting-started) to install all necessary libs, and then download the datasets following [this](https://github.com/SymbioticLab/FedScale/blob/master/dataset/README.md).

### Setting Job Configuration

We provide an example of submitting a training job in `FedScale/core/evals/manager.py`, whereby the user can submit jobs on the master node.

- `python manager.py submit [conf.yml]` will submit a job with parameters specified in conf.yml on both the PS and worker nodes.
  We provide some example `conf.yml` in `FedScale/core/evals/configs` for each dataset.
  They are close to the settings used in our evaluations. Comments in our example will help you quickly understand how to specify these parameters.

- `python manager.py stop [job_name]` will terminate the running `job_name` (specified in yml) on the used nodes.

### Experiment Dashboard

We have integrated Tensorboad for the visualization of experiment results. To track the experiment with `[log_path]` (e.g., `./FedScale/core/evals/logs/cifar10/0209_141336`), please try `tensorboard --logdir=[log_path] --bind_all`, and all the results will be available at: `http://[ip_of_coordinator]:6006/`.

Meanwhile, all logs are dumped to `log_path` (specified in the config file) on each node.
`testing_perf` locates at the master node under this path, and the user can load it with `pickle` to check the time-to-accuracy performance. The user can also check `/evals/[job_name]_logging` to see whether the job is moving on.

**_We are working on the leaderboards to release all benchmarking results._**
