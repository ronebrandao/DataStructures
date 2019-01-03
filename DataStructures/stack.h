#include "pch.h"
#include <iostream>

using namespace std;

struct Stack {
	int* arr;
	int top;

	Stack(int n) {
		arr = new int[n];
		top = -1;
	}

	bool empty() {
		return top == 0;
	}

	void push(int num) {
		top++;
		arr[top] = num;
	}

	int pop() {

		if (empty())
		{
			cout << "A pilha está vazia";
			return -1;
		}
		else {
			int item = arr[top];
			top--;
			return item;
		}
	}

	void print() {
		for (int i = top; i >= 0; i--)
		{
			cout << arr[i] << endl;
		}
	}

};
