#include <iostream>
using namespace std;

// Node structure
struct Node {
    int data;
    Node* next;
};

// Stack class using Linked List
class Stack {
    Node* top;   // pointer to the top node

public:
    Stack() {
        top = nullptr;   // initially empty
    }

    // push operation
    void push(int x) {
        Node* newNode = new Node();  // create new node
        newNode->data = x;
        newNode->next = top;   // link to previous top
        top = newNode;         // move top to new node
        cout << x << " pushed into stack." << endl;
    }

    // pop operation
    void pop() {
        if (top == nullptr) {
            cout << "Stack Underflow! Nothing to pop." << endl;
            return;
        }
        cout << top->data << " popped from stack." << endl;
        Node* temp = top;
        top = top->next;   // move top to next node
        delete temp;       // free memory
    }

    // peek operation
    int peek() {
        if (top == nullptr) {
            cout << "Stack is empty." << endl;
            return -1;
        }
        return top->data;
    }

    // check empty
    bool isEmpty() {
        return top == nullptr;
    }

    // destructor to free memory
    ~Stack() {
        while (!isEmpty()) {
            pop();
        }
    }
};

int main() {
    Stack st;

    cout << "Is stack empty? " << (st.isEmpty() ? "Yes" : "No") << endl;

    st.push(10);
    st.push(20);
    st.push(30);

    cout << "Current top element: " << st.peek() << endl;

    st.pop();
    cout << "Top element after one pop: " << st.peek() << endl;

    st.pop();
    st.pop();
    st.pop(); // underflow case

    cout << "Is stack empty now? " << (st.isEmpty() ? "Yes" : "No") << endl;

    return 0;
}
