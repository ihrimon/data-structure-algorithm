#include <bits/stdc++.h>
using namespace std;

/*
 * Task: Print all the elements of the array.
 */

/* Function to print the array */
void printArray(int array[], int size)
{
    for(int i = 0; i<size; i++)
    {
        cout<<array[i]<< " ";
    }
    cout<<endl;
}

int main()
{
    int array[10], size;

    cout << "Enter the number of elements (max 10): ";
    cin>>size;

    // Input: insert array elements from user
    cout << "Insert " << size << " array elements: ";
    for(int i = 0; i<size; i++)
    {
        cin>>array[i];
    }

    // Output: Print the array (Traversal)
    cout<<"Array Traversal: ";
    printArray(array, size);

    return 0;
}