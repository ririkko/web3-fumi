class TimesTable:
    @staticmethod
    def print_times_table():
        for i in range(1, 13):
            for j in range(1, 13):
                print(f"{i*j:4}", end=" ")  # Adjust spacing for better alignment
            print()

# Usage
TimesTable.print_times_table()
