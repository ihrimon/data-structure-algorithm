#include<bits/stdc++.h>
using namespace std;

/*
 * Task: Find the index of a value using linear search.
 */

/* Searching desire index by search value*/
int binarySearch(int array[], int size, int searchValue)
{
    for(int i = 0; i<size; i++) 
    {
        if(array[i] == searchValue) return i;
    }
    
    return -1;
}

int main()
{
    int array[10];
    int size;
    int searchValue;

    cout << "Enter the number of elements (max 10): ";
    cin>>size;

    // Input: Insert array elements from user
    cout << "Insert " << size << " array elements: ";
    for(int i = 0; i<size; i++)
    {
        cin>>array[i];
    }

    cout<<"Enter the value you want to search: ";
    cin>>searchValue;

    int index = binarySearch(array, size, searchValue);

    // Output: Show index or not found.
    if(index != -1) 
    {
        cout<<"Element found at index: "<<index<<endl;
    }
    else cout<<"Not Found!";

    return 0;
}