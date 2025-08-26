#include <iostream>
using namespace std;

#define SIZE 5   

class Stack {
    int arr[SIZE];   // fixed size array
    int top;

public:
    Stack() {
        top = -1;  // initialize top value
    }

    // push operation
    void push(int x) {
        if (top == SIZE - 1) {   // when stack is full
            cout << "Stack Overflow" << endl;
        } else {
            arr[++top] = x;
            cout << x << " pushed into stack." << endl;
        }
    }

    // pop operation
    void pop() {
        if (top == -1) {   // when stack is empty
            cout << "Stack Underflow!" << endl;
        } else {
            cout << arr[top--] << " popped from stack." << endl;
        }
    }

    // peek operation (peeking top value)
    int peek() {
        if (top == -1) {   // when stack is empty
            cout << "Stack is empty." << endl;
            return -1;
        }
        return arr[top];
    }

    // check empty
    bool isEmpty() {
        return top == -1;
    }

    // check full
    bool isFull() {
        return top == SIZE - 1;
    }
};

int main() {
    Stack st;

    st.push(10);
    st.push(20);
    st.push(30);
    st.push(40);
    st.push(50);

    // Now the stack is full, so isFull will return true
    cout << "Is stack full? " << (st.isFull() ? "Yes" : "No") << endl;

    // Calling peek()
    cout << "Top element: " << st.peek() << endl;

    st.pop();
    cout << "Top element after one pop: " << st.peek() << endl;

    // After multiple pops, check again if stack is empty
    st.pop();
    st.pop();
    st.pop();
    st.pop();
    cout << "Is stack empty now? " << (st.isEmpty() ? "Yes" : "No") << endl;

    return 0;
}
