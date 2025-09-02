A Queue Data Structure is a fundamental concept in computer science used for storing and managing data in a specific order.

- It follows the principle of "First in, First out" (FIFO), where the first element added to the queue is the first one to be removed.
- It is used as a buffer in computer systems where we have speed mismatch between two devices that communicate with each other. For example, CPU and keyboard and two devices in a network
- Queue is also used in Operating System algorithms like CPU Scheduling and Memory Management, and many standard algorithms like Breadth First Search of Graph, Level Order Traversal of a Tree.


Types of Queues
Queue data structure can be classified into 4 types:

- Simple Queue: Simple Queue simply follows FIFO Structure. We can only insert the element at the back and remove the element from the front of the queue. A simple queue is efficiently implemented either using a linked list or a circular array.

- Double-Ended Queue (Deque): In a double-ended queue the insertion and deletion operations, both can be performed from both ends. They are of two types:
  - Input Restricted Queue: This is a simple queue. In this type of queue, the input can be taken from only one end but deletion can be done from any of the ends.
  - Output Restricted Queue: This is also a simple queue. In this type of queue, the input can be taken from both ends but deletion can be done from only one end.

- Priority Queue: A priority queue is a special queue where the elements are accessed based on the priority assigned to them. They are of two types:
  - Ascending Priority Queue: In Ascending Priority Queue, the elements are arranged in increasing order of their priority values. Element with smallest priority value is popped first.
  - Descending Priority Queue: In Descending Priority Queue, the elements are arranged in decreasing order of their priority values. Element with largest priority is popped first.


### Applications of Queue Data Structure
Application of queue is common. In a computer system, there may be queues of tasks waiting for the printer, for access to disk storage, or even in a time-sharing system, for use of the CPU. Within a single program, there may be multiple requests to be kept in a queue, or one task may create other tasks, which must be done in turn by keeping them in a queue.

- A Queue is always used as a buffer when we have a speed mismatch between a producer and consumer. For example keyboard and CPU.
- Queue can be used where we have a single resource and multiple consumers like a single CPU and multiple processes.
- In a network, a queue is used in devices such as a router/switch and mail queue.
- Queue can be used in various algorithm techniques like Breadth First Search, Topological Sort, etc.