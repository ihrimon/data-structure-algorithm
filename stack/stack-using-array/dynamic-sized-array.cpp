#include <iostream>
#include <vector>
using namespace std;

class Stack {
    vector<int> arr;  // dynamic array (vector)

public:
    // push operation
    void push(int x) {
        arr.push_back(x);   // insert at end
        cout << x << " pushed into stack." << endl;
    }

    // pop operation
    void pop() {
        if (arr.empty()) {   // if stack is empty
            cout << "Stack Underflow!" << endl;
        } else {
            cout << arr.back() << " popped from stack." << endl;
            arr.pop_back();
        }
    }

    // peek operation
    int peek() {
        if (arr.empty()) {
            cout << "Stack is empty." << endl;
            return -1;
        }
        return arr.back();
    }

    // check empty
    bool isEmpty() {
        return arr.empty();
    }

    // size of stack
    int size() {
        return arr.size();
    }
};

int main() {
    Stack st;

    cout << "Is stack empty? " << (st.isEmpty() ? "Yes" : "No") << endl;

    st.push(10);
    st.push(20);
    st.push(30);
    st.push(40);
    st.push(50);
    st.push(60);   // no overflow because dynamic array

    cout << "Current top element: " << st.peek() << endl;
    cout << "Stack size: " << st.size() << endl;

    st.pop();

    while (!st.isEmpty()) {
        st.pop();
    }

    cout << "Is stack empty now? " << (st.isEmpty() ? "Yes" : "No") << endl;

    return 0;
}
